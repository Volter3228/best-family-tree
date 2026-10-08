# Family tree performance review

Scope: the PixiJS scene (family, team and grid views), how members are stored
in React state, how they are fetched, and the layout algorithms.

Method: static review plus one micro-benchmark (team packing). Nothing was
profiled in a browser, so items marked "suspected" need a Performance-tab or
Pixi DevTools check before and after. Line numbers refer to the current tree.

Typical data: about 150-300 members, about 50 teams. In team view there is one
node per (member, team) pair, so several hundred `MemberNode`s.

---

## 1. Already fixed

| # | Where | Problem | Fix |
|---|-------|---------|-----|
| F1 | `utils/membersTree/teamPacking.ts` | Packing tested every candidate corner (P x P) against every placed frame (P), 12 times (6 widths x 2 orders), on the main thread, on every relayout. Measured: **50 teams 416 ms, 100 teams 7.2 s**. | Only frames in the candidate's horizontal band are tested, corners are de-duplicated, the x loop stops early. Identical output: **36 ms / 277 ms**. The last result is cached by the list of frame sizes, so edits that keep sizes cost 0. |
| F2 | `graph.ts` `transformMembersToTeamTreeValues`, `useTreeLayout.ts` | Team view built an `L x M` edge list and filtered it again, then threw it away (`setEdges([])`). `groupMembersByTeam` used `Array.includes`. | Nodes only; `Set`s. |
| F3 | `canvas/NodesLayer.tsx` | `parseTeamNodeId` and `getMemberTeamRoles` ran for every node on every render (every selection). | Memoised on `nodes`. |
| F4 | `useHoverNodeAnimation.ts` | Every node built a `DropShadowFilter` (quality 5, resolution >= 2) at mount. | Created on first hover/selection. |
| F5 | `canvas/TeamFrame.tsx` | Every frame built two selection-only outline `Graphics`. | Mounted on first selection. |
| F6 | `MemberNodeMinimizedTooltip.tsx`, `MemberNode.tsx` | Every node always owned a tooltip (`Graphics` + `BitmapText` + `TextStyle` + a per-frame ticker). | Mounted only while zoomed out and hovered, unmounted after the fade-out (`onHidden`). |
| F7 | `MemberNodeAvatar.tsx`, `libs/cloudinary.ts`, `utils/memberPresentation.ts` | Each avatar used a **sprite alpha mask**. In Pixi v8 that flushes the batch and renders through an offscreen texture, per node. | The canvas now requests a pre-rounded WebP (`c_fill,r_max`, `.webp` extension so alpha survives) via `getMemberNodeAvatar`; no mask. Sidebar avatars are unchanged. **Needs a visual check**: edge quality, and that old photos with unusual extensions still load. |
| F8 | `hooks/membersTree/useTexture.ts` | 480 px avatar textures were minified to 10-60 px with no mipmaps (shimmer, texture-cache misses). | `useTexture(src, { mipmaps: true })` for avatars (`autoGenerateMipmaps`). Costs about +33% texture memory. |
| F9 | `useFilters.ts` -> `useFilteredMembers.ts`, `context/FiltersContext.tsx` | The heavy `useMemo`s lived in `useFilters`, which is called from seven places, so every call site rescanned all members and built its own `Set`. | Computed once in `FiltersProvider`, shared through context. Behaviour preserved (lineage focus member is still dropped when not part of the team tree). |
| F10 | `graph.ts` `getLayoutedElements` | ELK (main thread, `elk.bundled.js`) ran for every member edit, even when the tree's shape did not change. | Last result cached by (node ids, edge ids, direction). Name/photo/position edits skip ELK. |
| F11 | `MembersTreeContent.tsx` | `nodes.find` per selection to look up the accent colour. | `Map` by member id. |
| F12 | `MemberNode.tsx`, `TeamFrame.tsx` | No explicit culling boxes (bounds computed from children); frames were never culled. | `cullArea` on nodes (avatar + card + glow margin) and frames (frame + badge/ripple margin, 30% of width + 100). |
| F13 | `MemberNode.tsx` | Pointer events walked every child of every node (card, texts, sprites) on each pointer move. | `interactiveChildren={false}` plus a `hitArea` (whole node, or avatar only while the card is hidden when zoomed out). Corners of the rounded card are now square for hit testing. |
| F14 | `useDashedPathAnimation.ts` | Family view, member selected: the marching dashes rebuilt every dash stroke on **every frame** (about 0.83 px of movement per frame against a 0.5 px threshold), forever. | Redraw threshold 1.2 px (about 30 fps). The real fix is a scrolling texture, see 4.4. |

---

## 2. Data pipeline: server -> client -> state (highest long-term value)

### 2.1 The API sends the same member many times
`server/src/routes/familyTreeRoutes.ts:31-60`

- The query includes `mentees`, `mentor` and the member's own data, each with
  `phoneNumbers` and `positions -> role, team -> teamType`. Prisma loads
  `positions` and `teams` four times (the log shows
  `... FROM teams WHERE id IN (...)`).
- `transformMembersToTree` then builds the nested tree, but every member
  object still carries its own **embedded `mentor` object** (full record plus
  positions), repeated once per mentee, on top of the tree nesting.
- On the client `models/Member.ts:65-71` re-wraps mentees and the mentor in
  new `Member` instances. So every mentee holds a private copy of its mentor:
  stale after `updateMember`, not shared with the tree, and it multiplies
  memory and parse time.

Improvement: return a **flat list** (`id`, `mentorId`, data, `positions`
once, ids of sibling order) and no embedded `mentor`/`mentees`. Build
`childrenByMentorId` on the client. Query with one `findMany` including
`phoneNumbers` and `positions` only; derive "has mentees" in memory. This
cuts DB work, JSON size and parse time and removes the duplicated mentors.
`MemberInfo` reads `member.mentor`; resolve it through the map instead.

### 2.2 Three parallel copies of the same data
`context/MembersContext.tsx:38-46`, `hooks/data/useMembers.ts`

State holds `membersTree` (nested), `flatMembersList`, `membersMap`, plus
`mentorsList` and `selectedMember` (a `Member` object, not an id).
`updateMember` (`useMembers.ts:93`) walks the tree up to four times
(`findNode`, `updateInTree` or remove + insert) and **clones every ancestor**
on the path (new `mentees` arrays), so one name change invalidates the
identity of the member, all its ancestors, `flatMembersList`, `membersMap`
and every memo downstream (layout, filters, nodes). `reloadMembers` replaces
everything.

Target model (normalised store):

```ts
byId: Map<string, Member>            // single source of truth
childrenOf: Map<string, string[]>    // ordered mentee ids
selectedId: string | null            // not an object
```

- Updating one member replaces one map entry; ancestors keep identity.
- `selectedMember = byId.get(selectedId)` is derived, so it can never go stale.
- Components subscribe to slices (for example `useSyncExternalStore` with a
  selector, or Zustand), so a name edit re-renders one `MemberNode`, not the
  scene.
- Layout depends on a **structure signature** (ids + mentor ids + positions'
  team ids), not on object identity (F10 is the cheap version of this).

### 2.3 `Member` model
`models/Member.ts`: `clone()` constructs a new `Member` from spread fields
(re-wrapping mentees), `isBirthdayToday()` is recomputed per node mount,
`getRecruitmentTerm()` per render. Keep it a plain data type plus pure helpers;
precompute derived fields (birthday flag, recruitment term) once on load.

---

## 3. React state and re-render fan-out

1. `MembersTreeContent` is the hub: `useMembers`, `useFilters`,
   `useMembersTree` (which merges the data and viewport contexts), team
   selection, both sidebars. Any of them changing re-renders the Pixi scene
   props. Split it: a `Scene` component that only receives stable props, and
   sidebars that read their own state.
2. `useMembersTree()` spreads two contexts into a new object each call
   (`hooks/membersTree/useMembersTree.ts`), so consumers re-render for
   unrelated changes. Consume `useMembersTreeData()` or `useViewport()`
   directly (the `Viewport` already throttles scale updates to threshold
   crossings, `canvas/Viewport.tsx:66-79`, which is good).
3. `selectedMember` as an object makes `NodesLayer` re-render on every
   selection and recompute `isSelected` for all nodes. Pass `selectedId`
   (and `selectedTeamId`); `MemberNode` is `memo`'d, so only two nodes change.
4. Context values are memoised, but they contain many fields; a change to
   `layoutMode` or `teamFrames` re-renders every consumer of the data context.
5. `FiltersProvider` now holds the shared result (F9); `applyFilters` creates
   a new `filteredMemberIds` `Set` each time even when equal. Compare and keep
   the old reference if the content did not change.

---

## 4. PixiJS scene

### 4.1 Display-object budget
Per `MemberNode`: container + card container + card `Graphics` + 2
`BitmapText` + avatar (sprite or 2 sprites + `BitmapText`) + optional birthday
animation. About 8-10 objects x several hundred nodes. Reduce:

- Render the **static part of a card as one texture** once per
  (name, subtitle, colour) with `cacheAsTexture`/a shared `RenderTexture`, or
  make card + texts one `Container` with `isRenderGroup` so Pixi caches its
  transform tree.
- At overview zoom (`isZoomedOut`), nodes are only avatars: unmount the card
  subtree instead of setting `visible=false` (it still costs React and Pixi
  bookkeeping; `useCardAnimation` creates a GSAP timeline per node, with a
  random delay, on every zoom threshold crossing).
- Replace per-node `useGSAP` (hover/selection) with one shared hover
  controller (a single `Ticker` callback tweening only active nodes).

### 4.2 Batching and filters
- Mixing `Graphics`, `Sprite` and `BitmapText` per node breaks batches;
  consider drawing all cards with one `Graphics` per row/chunk or `MeshPlane`
  atlases. Profile draw calls first (Pixi DevTools).
- Hover/selection uses `DropShadowFilter` (blur, quality 5, resolution >= 2)
  on a container with hundreds of pixels; filters render through offscreen
  textures. Use a cheaper glow (a pre-rendered blurred sprite behind the
  avatar, toggled by alpha) and keep the filter only if the look requires it.
- `antialias` + `resolution: devicePixelRatio` (`MembersTreeContent.tsx:163`)
  is expensive on 4K/HiDPI. Try `resolution = Math.min(dpr, 2)`.

### 4.3 Textures
- 480 x 480 avatars (`libs/cloudinary.ts`) at a maximum zoom of 1.5 x 192
  world units (about 290 CSS px). Serve 256 px while zoomed out and swap to
  480 px above scale 0.6 (two `useTexture` levels), or use Cloudinary
  `dpr_auto`/`q_auto`. Shared by identity: the same member in several teams
  already reuses one texture via `Assets` cache.
- Free textures when the tree shrinks (`Assets.unload`) after filters hide
  many members.

### 4.4 Continuously redrawn graphics
- `LineageEdge` (family view): dashes are rebuilt with `g.clear()` + one
  `stroke()` per dash, every frame while a member is selected, forever
  (`useDashedPathAnimation.ts:142-180`, `drawDashes` in `dashedBezier.ts`,
  45 samples per bezier). Ideal fix: build the path polyline **once**, draw it
  as a `MeshRope` (or a tiled `Mesh`) with a repeating dash texture (and a
  colour gradient texture), and scroll the texture UVs per frame. Zero CPU
  geometry work per frame. Until then F14 halves the cost.
- `EdgesLayer`/`TeamEdgesLayer`: one `Graphics` with one `stroke()` per
  bezier. Fine when static, but **all edges are retessellated** when
  `pixelLine` flips at the zoom threshold. Use a single stroke with many
  `moveTo`/`bezierCurveTo` subpaths (one `stroke()` call), or keep both
  variants and toggle visibility.

### 4.5 Per-frame callbacks
There are 11 `useTick`/`ticker.add` sites, about 3-4 per team plus one per
node previously (F6 removed the per-node one). Each early-outs but allocates a
closure per object per frame. A single scene ticker that reads
`viewport.scale.x` once and updates registered items (frames, badges, labels,
fades) would remove most of that.

### 4.6 Culling and events
- `CullerPlugin` is enabled; nodes and frames now have explicit `cullArea`
  (F12). Labels/overview cards are only `visible` when zoomed out.
- Hit testing: F13. Also set `eventMode="none"` on purely decorative
  containers (edge layers, frame fills) so the event system skips them.

### 4.7 Text
`BitmapText` is already used with shared fonts. Remaining cost is
`CanvasTextMetrics.measureText` at mount per node/team (card titles, overview
wrap candidates x 6, badge labels). Cache measurements by (text, style key) in
a `Map`, or compute widths from the bitmap font's glyph advances.

---

## 5. Layout algorithms

| Area | Now | Notes |
|------|-----|-------|
| Family tree | ELK `mrtree` on the main thread (`graph.ts`, `libs/elk`), `elk.spacing.componentComponent: 2000` | O(n log n)-ish but tens of ms; blocks input. Cached by structure (F10). Move to a Web Worker (`elkjs/lib/elk-worker`), or replace by a Reingold-Tilford style tidy tree (O(n)), which also removes the dependency on ELK's `mrtree` ordering quirks. |
| Lineage focus | `reorderEdgesForLineageCentering`, `alignLineageLayout` | Linear passes with `find`/`filter`; fine. Uses `membersMap` per ancestor, so keep the map stable (2.2). |
| Filtered reconnect | `reconnectEdgesToVisibleAncestors` | Memoised ancestor walk, O(n). Good. |
| Grid | `computeGridLayout` | O(n). |
| Team frames | `teamLayout.ts` + `teamPacking.ts` | After F1: O(P^2 x band) per configuration. Further: reduce to 3-4 widths, early-exit when a packing is within ~3% of the ideal area, and run it in the same Worker as ELK. Rows planning (`teamRows.ts`) is linear. |
| Sorting on the server | `sortMembersBalanced` + `calculateMemberMetrics` with request-scoped caches | O(n log n); fine. |

Trigger discipline (`hooks/membersTree/useTreeLayout.ts:69-168`): the effect
depends on `flatMembersList`, `membersMap`, `filteredMemberIds`,
`appliedFilters.teamTypeNames`, `lineageMemberId`, `treeMode`. With 2.2 it
should depend on one structure signature plus the filter result, and
`fitView` bookkeeping should live outside this effect.

---

## 6. Robustness

- `Member` constructor recursion and `getDescendantIds`/
  `collectAllDescendantIds` assume an acyclic tree. `findVisibleAncestor` has a
  cycle guard, the others do not: corrupt `mentorId` data (a member who is
  their own descendant) would overflow the stack. Validate on the server
  (reject cycles in `PUT /members/:id`) and guard the client walkers.
- `reloadMembers` and the delete flow replace the whole tree; a request race
  between two reloads can apply an older response last. Keep a request counter
  (as `useTreeLayout` already does).
- `Assets.load` failures are swallowed in `useTexture` (`.catch(() => {})`);
  a failing avatar URL is retried on every mount. Cache failures.
- F7 changes avatar URLs: non-Cloudinary `photo` URLs would not contain
  `/upload/`; `getPhotoUrlAsRoundAvatar` assumes Cloudinary (as the old
  function did).

---

## 7. Suggested order of work

1. **Measure** (Performance tab, 10 s: load, zoom, hover, select, filter).
2. Server: flat payload, single query (2.1). Biggest effect on load time and
   memory, no UI change.
3. Normalised store with `selectedId` (2.2, 3.3). Removes ancestor cloning and
   most re-render fan-out.
4. Scrolling-texture lineage edge (4.4) and one shared hover/ticker
   controller (4.1, 4.5).
5. ELK + packing in a Worker (5). Eliminates the remaining long tasks.
6. Texture LOD (4.3) and `resolution` cap (4.2) if GPU time is still high.

## 8. How to verify

- Chrome Performance: long tasks after a filter, member edit or team edit
  (F1, F10, 5); scripting time per frame (4.4, 4.5); GPU time (4.1-4.3).
- Pixi DevTools / `renderer` stats: draw calls, masks and filters per frame
  (F7 should drop masks to 0).
- Packing benchmark: random sizes, 50/100 frames; expect about 40 ms / 280 ms
  cold and about 0 on a repeat with the same sizes.
- Visual regression checks for the changes that can alter pixels: F7 (avatar
  edges), F13 (hit areas), F14 (dash smoothness).
