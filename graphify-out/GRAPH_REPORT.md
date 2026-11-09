# Graph Report - best-family-tree  (2026-11-09)

## Corpus Check
- 397 files · ~141,643 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 25 file(s) not represented in the graph (top: .prisma 8, .css 6, (none) 5)

## Summary
- 2088 nodes · 5229 edges · 102 communities (99 shown, 3 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 54 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `b5cf1c02`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- memberFormValidation.ts
- constants/filters.ts
- http
- filtersStore.ts
- MemberFormFields.tsx
- src/types/index.ts
- hooks/index.ts
- teamBlock.ts
- PositionFormFields.tsx
- MemberNode.tsx
- edgeGeometry.ts
- Toolbar.tsx
- memberRoutes.ts
- FiltersPanel.tsx
- memberUpdateValidation.ts
- Member
- EditMemberForm.tsx
- pixi.js
- filterMembers.ts
- catalogValidation.ts
- Sidebar.tsx
- HTML Report Format
- migrateMembersFromMongodb.ts
- utils/membersTree/index.ts
- teamService.ts
- TeamBadge.tsx
- compilerOptions
- compilerOptions
- membersStore.ts
- react
- dependencies
- server/package.json
- src/index.ts
- useHoverNodeAnimation.ts
- FilterState
- MembersTreeContent.tsx
- package.json
- Core Patterns
- TeamFilterCategory.tsx
- inputs/index.ts
- useFitViewAnimation.ts
- devDependencies
- constants/canvas/index.ts
- ApplicationOptions reference
- CLAUDE.md
- useTreeLayout.ts
- TeamEdgesLayer.tsx
- Point
- During the session
- ManageForm.tsx
- dashedBezier.ts
- AGENTS.md
- scripts
- devDependencies
- BEST Family Tree
- next.config.mjs
- postcss.config.mjs
- Common Mistakes
- Common Mistakes
- Core Patterns
- Utilities
- Common Mistakes
- BEST Family Tree
- Diagnosing Bugs
- Core Patterns
- Core Patterns
- Core Patterns
- Core Patterns
- Core Patterns
- Core Patterns
- Constructor options (Container-inherited)
- Test-Driven Development
- GSAP Core
- Core Patterns
- Scene Objects
- pixijs/SKILL.md
- Core Concepts
- Render Loop
- pixijs-core-concepts/SKILL.md
- Core Patterns
- AccentColor
- server/src/types/index.ts
- Renderers: WebGPU, WebGL, and Canvas
- treeStore.ts
- pixijs-scene-core-concepts/SKILL.md
- Container Hierarchy
- TeamFrame
- useDashedPathAnimation.ts
- GSAP with React
- hitl-loop.template.sh
- ThemeContext.tsx
- Core Patterns
- GSAP Performance
- GSAP Timeline
- Common Mistakes
- dependencies
- pixijs-events/SKILL.md
- teamFrame.ts
- Foundations
- members.ts
- memberPresentation.ts

## God Nodes (most connected - your core abstractions)
1. `AccentColor` - 109 edges
2. `react` - 104 edges
3. `Member` - 58 edges
4. `tailwind-merge` - 51 edges
5. `TeamFrame` - 40 edges
6. `COLOR_CLASSES` - 37 edges
7. `pixi.js` - 33 edges
8. `FilterState` - 31 edges
9. `useTreeStore` - 27 edges
10. `Direction` - 27 edges

## Surprising Connections (you probably didn't know these)
- `pixijs-scene-container` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs/references/index.md → src/hooks/membersTree/animations/useFitViewAnimation.ts
- `pixijs-math` --references--> `Point`  [INFERRED]
  .agents/skills/pixijs/references/index.md → src/types/tree.ts
- `Utilities` --references--> `Point`  [INFERRED]
  .agents/skills/pixijs/SKILL.md → src/types/tree.ts
- `Bounds and coordinate conversion` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs-scene-container/SKILL.md → src/hooks/membersTree/animations/useFitViewAnimation.ts
- `Constructor options` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs-scene-container/SKILL.md → src/hooks/membersTree/animations/useFitViewAnimation.ts

## Import Cycles
- 3-file cycle: `src/utils/index.ts -> src/utils/membersTree/index.ts -> src/utils/membersTree/lineageEdgePath.ts -> src/utils/index.ts`
- 4-file cycle: `src/context/ThemeContext.tsx -> src/hooks/index.ts -> src/hooks/membersTree/index.ts -> src/hooks/membersTree/useCanvasTheme.ts -> src/context/ThemeContext.tsx`
- 4-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/members.ts -> src/models/index.ts -> src/models/Member.ts`
- 4-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/tree.ts -> src/models/index.ts -> src/models/Member.ts`
- 5-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/filters.ts -> src/types/members.ts -> src/models/index.ts -> src/models/Member.ts`

## Communities (102 total, 3 thin omitted)

### Community 0 - "memberFormValidation.ts"
Cohesion: 0.12
Nodes (19): CheckedField, getStoredFieldValues(), Links, StoredMemberValues, complete, mentors, sparse, toTime() (+11 more)

### Community 1 - "constants/filters.ts"
Cohesion: 0.14
Nodes (20): ACTIVITY_OPTIONS, ACTIVITY_STATES, AVATAR_OPTIONS, AVATAR_VALUES, JOIN_SEASONS, MEMBER_STATUSES, SEASON_OPTIONS, STATUS_OPTIONS (+12 more)

### Community 2 - "http"
Cohesion: 0.06
Nodes (56): addMember(), deleteMember(), editMember(), fetchFamilyTree(), fetchMemberById(), fetchMentorsList(), createRole(), createTeamType() (+48 more)

### Community 3 - "filtersStore.ts"
Cohesion: 0.28
Nodes (6): EMPTY_FILTER_STATE, FiltersActions, FiltersState, initialState, initialFiltersState, FilteredMembers

### Community 4 - "MemberFormFields.tsx"
Cohesion: 0.14
Nodes (19): next, LionIcon(), Props, FacebookIcon(), InstagramIcon(), LinkedinIcon(), TelegramIcon(), FieldError() (+11 more)

### Community 5 - "src/types/index.ts"
Cohesion: 0.14
Nodes (24): @heroicons/react, tailwind-merge, MemberInfo(), Props, MemberInfoActionIcon(), MemberInfoCopy(), MemberInfoRow(), MentorMenteesDropdown() (+16 more)

### Community 6 - "hooks/index.ts"
Cohesion: 0.11
Nodes (19): @pixi/react, PixiElements, @pixi/react, pixi-viewport, MemberNodeMinimizedTooltip(), Props, EMPTY_IDS, Props (+11 more)

### Community 7 - "teamBlock.ts"
Cohesion: 0.05
Nodes (54): elkjs, NODE_CARD_TOP, TEAM_COLUMN_GAP, TEAM_FRAME_GAP, TEAM_FRAME_HEADER, TEAM_FRAME_MIN_WIDTH, TEAM_FRAME_PADDING, TEAM_LAYOUT_COLUMNS (+46 more)

### Community 8 - "PositionFormFields.tsx"
Cohesion: 0.13
Nodes (27): PositionAssignmentFields(), PositionFormFields(), createEmptyPositionRow(), EMPTY_POSITION_ROW, findTeamByName(), getPositionRowSummary(), getRoleOptions(), getRowPeriod() (+19 more)

### Community 9 - "MemberNode.tsx"
Cohesion: 0.09
Nodes (31): AVATAR_HIT_AREA, CARD_PIVOT, EMPTY_FILTERS, getCullArea(), MemberNode(), NODE_HIT_AREA, NODE_PIVOT, Props (+23 more)

### Community 10 - "edgeGeometry.ts"
Cohesion: 0.16
Nodes (17): NODE_AVATAR_RADIUS, DEFAULT_NODE_HEIGHT, DEFAULT_NODE_WIDTH, DEFAULT_POSITION, FLOW_VIEWPORT_DIRECTION, FlowViewportDirection, bezierEval(), edgeGeometry (+9 more)

### Community 11 - "Toolbar.tsx"
Cohesion: 0.07
Nodes (33): Props, compare(), getSearchable(), MemberSearch(), Props, Props, SearchBar(), Props (+25 more)

### Community 12 - "memberRoutes.ts"
Cohesion: 0.12
Nodes (28): zod, prisma, buildMemberFields(), buildMemberUpdateFields(), buildSharedFields(), buildSparseMemberFields(), parsePhoneNumbers(), parsePositionsPayload() (+20 more)

### Community 13 - "FiltersPanel.tsx"
Cohesion: 0.22
Nodes (11): FiltersHeader(), ALL_SECTIONS_CLOSED, FiltersPanel(), Props, MemberFilterCategory(), LineageFilterSection(), OPTIONS, Props (+3 more)

### Community 14 - "memberUpdateValidation.ts"
Cohesion: 0.19
Nodes (11): ExistingMember, findClearedFields(), MemberUpdateBody, memberUpdateBodySchema, parsePhones(), sparseMemberBodySchema, splitName(), completeMember (+3 more)

### Community 15 - "Member"
Cohesion: 0.16
Nodes (11): Props, NodesLayer(), Props, Props, Member, RecruitmentTerm, generateGoogleCalendarLink(), getClosestBirthday() (+3 more)

### Community 16 - "EditMemberForm.tsx"
Cohesion: 0.14
Nodes (30): AddMemberForm(), buildMemberFormData(), ClearButton(), SubmitButton(), ConfirmDeleteControl(), Props, EditMemberForm(), getInitialFormData() (+22 more)

### Community 17 - "pixi.js"
Cohesion: 0.13
Nodes (14): @gsap/react, pixi.js, MemberNodeAvatar(), Props, CIRCLE_TEXTURE_SRC, PATTERN_TEXTURE_SRC, useCardHover(), PressStart (+6 more)

### Community 18 - "filterMembers.ts"
Cohesion: 0.21
Nodes (17): matchesAvatar(), matchesBirthday(), matchesJoinSeason(), matchesJoinYear(), memberMatchesFilters(), parseDateStr(), toDateVal(), toMMDD() (+9 more)

### Community 19 - "catalogValidation.ts"
Cohesion: 0.07
Nodes (38): Renderer selection at runtime, [MEDIUM] Using container.name instead of container.label, multer, multer-storage-cloudinary, deleteCloudinaryImage(), extractCloudinaryPublicId(), MAX_UPLOAD_BYTES, uploadMiddleware() (+30 more)

### Community 20 - "Sidebar.tsx"
Cohesion: 0.11
Nodes (19): gsap, BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props, acquireEmojiTextures(), createEmojiTexture(), generateRandomPosition() (+11 more)

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "migrateMembersFromMongodb.ts"
Cohesion: 0.10
Nodes (12): mongodb, @prisma/adapter-pg, ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember (+4 more)

### Community 23 - "utils/membersTree/index.ts"
Cohesion: 0.16
Nodes (19): derive(), ChildrenMap, MembersMap, areSetsEqual(), computeFilteredMembers(), Source, transformMembersToFlowValues(), Input (+11 more)

### Community 24 - "teamService.ts"
Cohesion: 0.15
Nodes (25): ResolvedPosition, resolvePosition(), MemberTransaction, deleteMember(), deriveTeamName(), resolveRole(), resolveTeam(), resolveTeamType() (+17 more)

### Community 25 - "TeamBadge.tsx"
Cohesion: 0.16
Nodes (25): TeamBadge(), FILL_ALPHA, lerp(), STROKE_ALPHA, TeamFrame(), TeamOverviewLabel(), Props, ZoomFadeContainer() (+17 more)

### Community 26 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, esModuleInterop, forceConsistentCasingInFileNames, module, moduleResolution, noImplicitAny, outDir, paths (+12 more)

### Community 27 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+12 more)

### Community 28 - "membersStore.ts"
Cohesion: 0.21
Nodes (14): membersActions, {
  setMembers,
  reloadMembers,
  addMember,
  updateMember,
  selectMember,
  getMentorsList,
}, useMembersMap(), useMentees(), useSelectedId(), useSelectedMember(), changesStructure(), EMPTY_INDEX (+6 more)

### Community 29 - "react"
Cohesion: 0.11
Nodes (27): react, react-dom, DropdownMenu(), Props, DropdownPortal(), Props, BadgeInput(), Props (+19 more)

### Community 30 - "dependencies"
Cohesion: 0.11
Nodes (19): dependencies, date-fns, dotenv, elkjs, gsap, @gsap/react, @heroicons/react, lodash (+11 more)

### Community 31 - "server/package.json"
Cohesion: 0.08
Nodes (23): cloudinary, concurrently, nodemon, @prisma/config, ts-node, tsx, @types/compression, @types/cors (+15 more)

### Community 32 - "src/index.ts"
Cohesion: 0.16
Nodes (13): compression, cors, express, app, loadFamilyTree, router, router, router (+5 more)

### Community 33 - "useHoverNodeAnimation.ts"
Cohesion: 0.29
Nodes (8): pixi-filters, NODE_HOVER_ANIMATION_DURATION, NODE_HOVER_SCALE, ZOOMED_OUT_HOVER_SCALE_MAP, calculateTargetScale(), createShadowFilter(), Props, useHoverNodeAnimation()

### Community 34 - "FilterState"
Cohesion: 0.12
Nodes (27): BirthdayFilterSection(), Props, CheckboxGroupFilterSection(), Option, Props, ClearButton(), FilterCheckbox(), Props (+19 more)

### Community 35 - "MembersTreeContent.tsx"
Cohesion: 0.14
Nodes (26): SharpAvatarTracker(), Viewport(), MemberSidebar(), Props, ACCENT_COLOR_MAP, EVENT_FEATURES, MembersTreeContent(), Props (+18 more)

### Community 36 - "package.json"
Cohesion: 0.11
Nodes (18): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+10 more)

### Community 37 - "Core Patterns"
Cohesion: 0.06
Nodes (38): Adding and removing children, API Reference, Bounds and coordinate conversion, Common Mistakes, Constructor options, Container events, Core Patterns, [CRITICAL] Adding children to leaf scene objects (+30 more)

### Community 38 - "TeamFilterCategory.tsx"
Cohesion: 0.21
Nodes (12): FilterCategory(), LION_GROUP_ICON, LION_ICON, Props, FilterGroupProps, RoleFilterSection(), TeamTypeFilterSection(), TeamFilterCategory() (+4 more)

### Community 39 - "inputs/index.ts"
Cohesion: 0.21
Nodes (13): DateInput(), Props, DropdownSelectInput(), FormCheckbox(), InputLabel(), Props, Props, TextAreaInput() (+5 more)

### Community 40 - "useFitViewAnimation.ts"
Cohesion: 0.18
Nodes (12): MembersTreeScene(), AVATAR_LOW_RES_SIZE, CARD_VIEW_SCALE, MAX_RENDER_RESOLUTION, TEAM_OVERVIEW_END_SCALE, TEAM_OVERVIEW_FAST_FACTOR, TEAM_OVERVIEW_START_SCALE, getFitViewTargetScale() (+4 more)

### Community 41 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+5 more)

### Community 42 - "constants/canvas/index.ts"
Cohesion: 0.18
Nodes (12): lineageEdgePath, ACCIDENTAL_DRAG_MAX_DISTANCE, ACCIDENTAL_DRAG_MAX_MS, TAP_MOVE_TOLERANCE, FONT_FAMILY, NODE_SUBTITLE_STYLE, NODE_TITLE_STYLE, NODE_TOOLTIP_TEXT_STYLE (+4 more)

### Community 43 - "ApplicationOptions reference"
Cohesion: 0.06
Nodes (32): Accessibility, ApplicationOptions reference, Background, Culler (CullerPluginOptions), Deprecated (GC — prefer the unified options above), Events, Garbage collection, Graphics (+24 more)

### Community 44 - "CLAUDE.md"
Cohesion: 0.29
Nodes (6): Commands, Conventions, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout

### Community 45 - "useTreeLayout.ts"
Cohesion: 0.25
Nodes (12): useSceneTransition(), useTreeLayout(), refreshNodeMembers(), alignLineageLayout(), applyElkPositions(), computeGridLayout(), EMPTY_EDGE_STYLE, reconnectEdgesToVisibleAncestors() (+4 more)

### Community 46 - "TeamEdgesLayer.tsx"
Cohesion: 0.22
Nodes (10): drawPolyline(), TeamEdgesLayer(), buildTeamEdges(), tb(), collapsed(), isFanOnly(), isOrthogonalOnly(), MorphPair (+2 more)

### Community 47 - "Point"
Cohesion: 0.15
Nodes (13): Point, Position, Bottom, Left, Right, Top, SegmentData, TeamEdge (+5 more)

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "ManageForm.tsx"
Cohesion: 0.17
Nodes (17): ManageForm(), MemberMode, Section, SECTIONS, TEAM_KINDS, TeamKind, CREATE_EDIT_OPTIONS, Props (+9 more)

### Community 50 - "dashedBezier.ts"
Cohesion: 0.31
Nodes (12): EdgesLayer(), alignSegments(), DashStrokeOptions, drawDashes(), lerpSegment(), segmentFromPoints(), alignPolylines(), cumulativeLengths() (+4 more)

### Community 51 - "AGENTS.md"
Cohesion: 0.29
Nodes (6): Commands, Conventions, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout

### Community 52 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, dev, dev:webpack, lint, start, test, typecheck

### Community 53 - "devDependencies"
Cohesion: 0.14
Nodes (14): devDependencies, concurrently, nodemon, prisma, @prisma/config, ts-node, tsx, @types/compression (+6 more)

### Community 54 - "BEST Family Tree"
Cohesion: 0.40
Nodes (4): BEST Family Tree, People, Teams, Views

### Community 57 - "Common Mistakes"
Cohesion: 0.20
Nodes (10): Common Mistakes, [CRITICAL] App destroy without releaseGlobalResources, [HIGH] Destroying and recreating objects instead of recycling, [HIGH] Interleaving object types in scene graph, [HIGH] Loading many individual textures instead of spritesheets, [HIGH] Updating Text or HTMLText every frame, [HIGH] Using complex Graphics instead of textures, [MEDIUM] Not staggering bulk texture destruction (+2 more)

### Community 58 - "Common Mistakes"
Cohesion: 0.50
Nodes (4): Common Mistakes, [HIGH] Accessing app.renderer before init() resolves, [HIGH] Setting DOMAdapter after Application.init, [MEDIUM] Treating `preference` as a guarantee

### Community 59 - "Core Patterns"
Cohesion: 0.12
Nodes (17): Application destroy/recreate cycle, Batching optimization, cacheAsTexture for performance, Core Patterns, Culling, Filters and masks cost, Graphics performance, Low-level rendering optimizations (+9 more)

### Community 60 - "Utilities"
Cohesion: 0.33
Nodes (6): pixijs-assets, pixijs-color, pixijs-events, pixijs-math, pixijs-ticker, Utilities

### Community 61 - "Common Mistakes"
Cohesion: 0.33
Nodes (6): Common Mistakes, [CRITICAL] Adding children to a leaf display object, [CRITICAL] Referencing DisplayObject, [HIGH] Forgetting isRenderGroup on large static subtrees, [HIGH] Treating child.x as world space, [MEDIUM] sortableChildren without zIndex

### Community 65 - "BEST Family Tree"
Cohesion: 0.12
Nodes (15): 1. Clone and configure environment, 2. Start the application, 3. Run database migrations, 4. Access the app, Architecture, Available Commands, Backend Commands (run inside container), BEST Family Tree (+7 more)

### Community 66 - "Diagnosing Bugs"
Cohesion: 0.13
Nodes (14): Completion criterion: a tight loop that goes red, Diagnosing Bugs, Minimise, Non-deterministic bugs, Phase 1: Build a feedback loop, Phase 2: Reproduce + minimise, Phase 3: Hypothesise, Phase 4: Instrument (+6 more)

### Community 71 - "Core Patterns"
Cohesion: 0.13
Nodes (14): API Reference, boundsArea optimization, Common Mistakes, Core Patterns, Culling, HIGH: Expecting automatic culling, HIGH: Using addChild on RenderLayer, MEDIUM: Expecting filters on ancestors to apply to layer children (+6 more)

### Community 72 - "Core Patterns"
Cohesion: 0.14
Nodes (13): Advanced shape primitives, Core Patterns, Default styles via setFillStyle / setStrokeStyle, Draw-time transforms, Drawing a texture directly, Gradients and patterns, GraphicsContext sharing, GraphicsContext utilities (+5 more)

### Community 78 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, attach / detach, Common Mistakes, Core Patterns, [CRITICAL] Using `addChild` on a RenderLayer, [HIGH] Layer and attached children in different render groups, Layer + logical parent, Manual sort (+5 more)

### Community 79 - "Core Patterns"
Cohesion: 0.14
Nodes (13): Alpha mask (Sprite-based), API Reference, Common Mistakes, Core Patterns, [HIGH] Using cacheAsTexture with masks, Inverse masking, Mask channel selection, Mask type selection (+5 more)

### Community 80 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, Common Mistakes, Construction options, Core Patterns, [HIGH] Nesting many render groups, [MEDIUM] Constantly adding/removing from a render group, [MEDIUM] Overusing render groups, Profile before adding (+5 more)

### Community 83 - "Core Patterns"
Cohesion: 0.15
Nodes (13): Context and device loss, Core Patterns, Destroying a renderer, Direct renderer construction, Lazy-loading backend-specific systems and pipes, Manual rendering, Per-renderer options, Preference forms (+5 more)

### Community 84 - "Constructor options (Container-inherited)"
Cohesion: 0.15
Nodes (13): Advanced options and aliases, Before / after, Callbacks, Constructor options (Container-inherited), Display, Effects, Exceptions (line-by-line is fine here), Hierarchy (+5 more)

### Community 85 - "Test-Driven Development"
Cohesion: 0.15
Nodes (10): Designing for Mockability, When to Mock, Anti-patterns, Rules of the loop, Seams: where tests go, Test-Driven Development, What a good test is, Bad Tests (+2 more)

### Community 86 - "GSAP Core"
Cohesion: 0.10
Nodes (20): Accessibility and responsive (gsap.matchMedia()), Common vars, Core Tween Methods, Custom: use CustomEase (plugin), Defaults, Do Not, Easing, Function-based values (+12 more)

### Community 87 - "Core Patterns"
Cohesion: 0.17
Nodes (12): Capture phase events, Core Patterns, Cursor styles, Event features, Event properties, Event types, eventMode values, Global move events and drag (+4 more)

### Community 89 - "Scene Objects"
Cohesion: 0.14
Nodes (13): pixijs-html-source, pixijs-scene-container, pixijs-scene-dom-container, pixijs-scene-gif, pixijs-scene-graphics, pixijs-scene-mesh, pixijs-scene-particle-container, pixijs-scene-sprite (+5 more)

### Community 91 - "pixijs/SKILL.md"
Cohesion: 0.18
Nodes (9): API Reference, Quick Start, Advanced, Fallback: canonical PixiJS docs, Foundations, How to use this skill, Scene Objects, Skill router (+1 more)

### Community 92 - "Core Concepts"
Cohesion: 0.18
Nodes (11): Container vs leaf (CRITICAL), Core Concepts, Culling, Destroy semantics, Lifecycle events, Masking, Render groups, Render order and explicit z-ordering (+3 more)

### Community 102 - "Render Loop"
Cohesion: 0.22
Nodes (8): API Reference, Common Mistakes, [CRITICAL] Treating the ticker callback arg as a number, Frame lifecycle, [HIGH] Using `updateTransform` for per-frame logic, [MEDIUM] Assuming ticker callbacks run after render, Quick Start, Render Loop

### Community 103 - "pixijs-core-concepts/SKILL.md"
Cohesion: 0.22
Nodes (8): API Reference, Decision guide, Environments, Quick concepts, Quick Start, Renderer = systems + pipes, The render loop, Topics

### Community 104 - "Core Patterns"
Cohesion: 0.22
Nodes (9): Add, remove, swap, Child queries, Core Patterns, Destroying sub-trees, Iterating children, Label-based tree navigation, Lifecycle events, Reparenting with transform preservation (+1 more)

### Community 105 - "AccentColor"
Cohesion: 0.09
Nodes (29): FitViewButton(), Props, Props, ToolbarIconButton(), Props, ToolbarTooltip(), useHoverTooltip(), Props (+21 more)

### Community 110 - "server/src/types/index.ts"
Cohesion: 0.14
Nodes (20): Member, MemberPositionWithRelations, MENTOR_STATUSES, ALUMNI, FULL, MembersByMentorId, MemberMetrics, TreeCache (+12 more)

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

### Community 113 - "treeStore.ts"
Cohesion: 0.12
Nodes (22): Props, Props, View, Props, Props, FIXED_EDGE_WIDTH, TEAM_OVERVIEW_EDGE_ALPHA, TEAM_OVERVIEW_NODE_ALPHA (+14 more)

### Community 116 - "pixijs-scene-core-concepts/SKILL.md"
Cohesion: 0.25
Nodes (6): API Reference, Leaf comparison: which skill covers which object, Quick Start, References, Tooling, When to use what (quick decisions)

### Community 117 - "Container Hierarchy"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, Container Hierarchy, [CRITICAL] Adding children to a leaf, [HIGH] Destroying the parent without `children: true`, [MEDIUM] Mutating `children` during iteration, Quick Start

### Community 124 - "TeamFrame"
Cohesion: 0.24
Nodes (9): Props, Props, Props, TeamFramesLayer(), Props, Props, TeamOverviewLayer(), TeamFrame (+1 more)

### Community 127 - "useDashedPathAnimation.ts"
Cohesion: 0.19
Nodes (17): LineageEdge(), DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN, MIN_ANIM_DURATION, PATTERN_LEN, RETRACT_BASE (+9 more)

### Community 129 - "GSAP with React"
Cohesion: 0.15
Nodes (12): Best practices, Context-Safe Callbacks, Dependency array, scope, and revertOnUpdate, Do Not, gsap.context() in useEffect (when useGSAP isn't used), GSAP with React, Installation, Learn More (+4 more)

### Community 132 - "hitl-loop.template.sh"
Cohesion: 0.83
Nodes (3): capture(), hitl-loop.template.sh script, step()

### Community 133 - "ThemeContext.tsx"
Cohesion: 0.05
Nodes (45): react-datepicker, zustand, metadata, nunito, RootLayout(), EDGE_STYLE_OPTIONS, ORIENTATION_OPTIONS, Props (+37 more)

### Community 135 - "Core Patterns"
Cohesion: 0.29
Nodes (7): Core Patterns, Frame rate capping, Manual rendering, Per-object update via `onRender`, Priority order, Stop and start, Time units

### Community 137 - "GSAP Performance"
Cohesion: 0.17
Nodes (11): Batch Reads and Writes, Best practices, Do Not, Frequently updated properties (e.g. mouse followers), GSAP Performance, Many Elements (Stagger, Lists), Prefer Transform and Opacity, Reduce Simultaneous Work (+3 more)

### Community 138 - "GSAP Timeline"
Cohesion: 0.17
Nodes (11): Controlling Playback, Creating a Timeline, Do Not, GSAP Timeline, Labels, Nesting Timelines, Official GSAP Best practices, Position Parameter (+3 more)

### Community 139 - "Common Mistakes"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, Constructor options, [CRITICAL] Using lineStyle instead of stroke, [CRITICAL] Using old shape method names, [CRITICAL] Using v7 beginFill/drawRect/endFill, [HIGH] Clearing and redrawing Graphics every frame, [HIGH] Destroying a shared GraphicsContext unexpectedly (+4 more)

### Community 140 - "dependencies"
Cohesion: 0.09
Nodes (21): dependencies, cloudinary, compression, cors, dotenv, express, mongodb, multer (+13 more)

### Community 142 - "pixijs-events/SKILL.md"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] buttonMode removed; use cursor, [HIGH] Default eventMode is passive, [HIGH] Move events only fire over the object in v8, [MEDIUM] Cursor does not inherit from parent, Quick Start

### Community 143 - "teamFrame.ts"
Cohesion: 0.12
Nodes (24): TEAM_EDGE_DROP, TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_SPREAD_WIDTH, TEAM_EDGE_STUB, TEAM_FRAME_RADIUS, TEAM_FRAME_STROKE_WIDTH, TEAM_HOVER_MAX_SCALE, TEAM_HOVER_TEXT_SCREEN_PX (+16 more)

### Community 146 - "Foundations"
Cohesion: 0.13
Nodes (14): Advanced, Foundations, pixijs-accessibility, pixijs-application, pixijs-blend-modes, pixijs-core-concepts, pixijs-create, pixijs-custom-rendering (+6 more)

### Community 147 - "members.ts"
Cohesion: 0.14
Nodes (13): date-fns, ActivityState, Active, Excluded, Inactive, MemberMetrics, MembersByMentorId, MemberStatus (+5 more)

### Community 151 - "memberPresentation.ts"
Cohesion: 0.21
Nodes (10): MemberNodeCard(), CloudinaryTransformations, getIconUrlAsRounded(), getPhotoUrlAsAvatar(), getPhotoUrlAsRoundAvatar(), formatMemberRecruitmentSeason(), formatRecruitmentTerm(), getMemberNodeAvatar() (+2 more)

## Knowledge Gaps
- **40 isolated node(s):** `@prisma/client`, `dotenv`, `lodash`, `@tailwindcss/postcss`, `@types/lodash` (+35 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 779 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Point` connect `Point` to `teamBlock.ts`, `edgeGeometry.ts`, `useTreeLayout.ts`, `TeamEdgesLayer.tsx`, `teamFrame.ts`, `TeamFrame`, `treeStore.ts`, `dashedBezier.ts`, `pixijs/SKILL.md`, `Utilities`?**
  _High betweenness centrality (0.115) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _40 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `memberFormValidation.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.12333333333333334 - nodes in this community are weakly interconnected._
- **Why does `Utilities` connect `pixijs/SKILL.md` to `Point`?**
  _High betweenness centrality (0.107) - this node is a cross-community bridge._
- **Should `constants/filters.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.13756613756613756 - nodes in this community are weakly interconnected._
- **Should `http` be split into smaller, more focused modules?**
  _Cohesion score 0.06254272043745727 - nodes in this community are weakly interconnected._
- **Should `MemberFormFields.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14193548387096774 - nodes in this community are weakly interconnected._