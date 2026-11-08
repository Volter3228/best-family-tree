# Graph Report - best-family-tree  (2026-11-08)

## Corpus Check
- 395 files · ~140,976 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 25 file(s) not represented in the graph (top: .prisma 8, .css 6, (none) 5)

## Summary
- 2081 nodes · 5207 edges · 103 communities (100 shown, 3 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 54 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `5c90ef01`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- MemberFormFields.tsx
- filterSearchParams.ts
- http
- Toolbar.tsx
- MemberInfoSocial.tsx
- src/types/index.ts
- layout.ts
- teamBlock.ts
- PositionFormFields.tsx
- MemberNode.tsx
- utils/membersTree/index.ts
- TeamSearch.tsx
- memberService.ts
- FiltersPanel.tsx
- memberUpdateValidation.ts
- memberRoutes.ts
- EditMemberForm.tsx
- constants/canvas/index.ts
- useCardAnimation.ts
- catalogValidation.ts
- Sidebar.tsx
- HTML Report Format
- clientInstance.ts
- Member
- teamService.ts
- TeamBadge.tsx
- compilerOptions
- compilerOptions
- useMembersStore
- react
- dependencies
- server/package.json
- src/index.ts
- useHoverNodeAnimation.ts
- TeamTypeFilterSection.tsx
- MembersTreeContent.tsx
- package.json
- Core Patterns
- FiltersPanel.tsx
- inputs/index.ts
- src/utils/index.ts
- devDependencies
- Core Patterns
- ApplicationOptions reference
- CLAUDE.md
- SearchSuggestionItem.tsx
- MemberNode.tsx
- Common Mistakes
- During the session
- ManageForm.tsx
- MemberSearch.tsx
- AGENTS.md
- scripts
- TeamMembersEditor.tsx
- BEST Family Tree
- next.config.mjs
- postcss.config.mjs
- SubmitButton.tsx
- Common Mistakes
- Core Patterns
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
- pixijs-scene-graphics/SKILL.md
- Scene Objects
- pixijs/SKILL.md
- Core Concepts
- MemberStatus
- Render Loop
- pixijs-core-concepts/SKILL.md
- Core Patterns
- AccentColor
- migrateMembersFromMongodb.ts
- Renderers: WebGPU, WebGL, and Canvas
- TeamFrame
- pixijs-scene-core-concepts/SKILL.md
- Container Hierarchy
- TeamFrame
- Foundations
- useDashedPathAnimation.ts
- GSAP with React
- hitl-loop.template.sh
- ThemeContext.tsx
- Core Patterns
- GSAP Performance
- GSAP Timeline
- teamFrame.ts
- devDependencies
- pixijs-events/SKILL.md
- teamFrame.ts
- Advanced
- FilterState
- memberPresentation.ts

## God Nodes (most connected - your core abstractions)
1. `AccentColor` - 107 edges
2. `react` - 104 edges
3. `Member` - 58 edges
4. `tailwind-merge` - 50 edges
5. `TeamFrame` - 40 edges
6. `COLOR_CLASSES` - 36 edges
7. `pixi.js` - 33 edges
8. `FilterState` - 31 edges
9. `useTreeStore` - 27 edges
10. `Direction` - 27 edges

## Surprising Connections (you probably didn't know these)
- `pixijs-scene-container` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs/references/index.md → src/hooks/membersTree/animations/useFitViewAnimation.ts
- `[HIGH] Expecting getBounds() to return a Rectangle` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs-scene-container/SKILL.md → src/hooks/membersTree/animations/useFitViewAnimation.ts
- `pixijs-math` --references--> `Point`  [INFERRED]
  .agents/skills/pixijs/references/index.md → src/types/tree.ts
- `Utilities` --references--> `Point`  [INFERRED]
  .agents/skills/pixijs/SKILL.md → src/types/tree.ts
- `Bounds and coordinate conversion` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs-scene-container/SKILL.md → src/hooks/membersTree/animations/useFitViewAnimation.ts

## Import Cycles
- 3-file cycle: `src/utils/index.ts -> src/utils/membersTree/index.ts -> src/utils/membersTree/lineageEdgePath.ts -> src/utils/index.ts`
- 4-file cycle: `src/context/ThemeContext.tsx -> src/hooks/index.ts -> src/hooks/membersTree/index.ts -> src/hooks/membersTree/useCanvasTheme.ts -> src/context/ThemeContext.tsx`
- 4-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/members.ts -> src/models/index.ts -> src/models/Member.ts`
- 4-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/tree.ts -> src/models/index.ts -> src/models/Member.ts`
- 5-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/filters.ts -> src/types/members.ts -> src/models/index.ts -> src/models/Member.ts`

## Communities (103 total, 3 thin omitted)

### Community 0 - "MemberFormFields.tsx"
Cohesion: 0.16
Nodes (18): Props, CheckedField, getStoredFieldValues(), Links, StoredMemberValues, complete, mentors, sparse (+10 more)

### Community 1 - "filterSearchParams.ts"
Cohesion: 0.22
Nodes (12): Props, useFilterSearchParams(), filtersToSearchParams(), parseCsvArray(), parseCsvStrings(), parseFiltersFromSearchParams(), parseNumberOrNull(), parseTreeMode() (+4 more)

### Community 2 - "http"
Cohesion: 0.06
Nodes (57): addMember(), editMember(), fetchFamilyTree(), fetchMemberById(), fetchMentorsList(), createRole(), createTeamType(), fetchRoles() (+49 more)

### Community 3 - "Toolbar.tsx"
Cohesion: 0.21
Nodes (13): zustand, FiltersPanel(), FitViewButton(), SearchBar(), Toolbar(), ToolbarIconButton(), usePanelToggle(), derive() (+5 more)

### Community 4 - "MemberInfoSocial.tsx"
Cohesion: 0.23
Nodes (10): FacebookIcon(), InstagramIcon(), LinkedinIcon(), TelegramIcon(), FieldError(), Props, Props, SocialMediaFormFields() (+2 more)

### Community 5 - "src/types/index.ts"
Cohesion: 0.13
Nodes (24): @heroicons/react, next, tailwind-merge, LionIcon(), Props, AvatarFileInput(), Props, MemberInfo() (+16 more)

### Community 6 - "layout.ts"
Cohesion: 0.09
Nodes (25): Props, Props, MemberNodeMinimizedTooltip(), Props, AVATAR_HIGH_RES_SIZE, AVATAR_LOW_RES_SIZE, GRID_GAP_X, GRID_LR_COLUMNS (+17 more)

### Community 7 - "teamBlock.ts"
Cohesion: 0.08
Nodes (39): elkjs, TEAM_FRAME_GAP, TEAM_PACK_ASPECT, failOver(), getWorker(), Pending, requestLayout(), runInline() (+31 more)

### Community 8 - "PositionFormFields.tsx"
Cohesion: 0.20
Nodes (19): PositionAssignmentFields(), PositionFormFields(), createEmptyPositionRow(), EMPTY_POSITION_ROW, findTeamByName(), getPositionRowSummary(), getRoleOptions(), getRowPeriod() (+11 more)

### Community 9 - "MemberNode.tsx"
Cohesion: 0.12
Nodes (16): AVATAR_HIT_AREA, CARD_PIVOT, EMPTY_FILTERS, getCullArea(), MemberNode(), NODE_HIT_AREA, NODE_PIVOT, Props (+8 more)

### Community 10 - "utils/membersTree/index.ts"
Cohesion: 0.10
Nodes (37): EdgesLayer(), drawPolyline(), TeamEdgesLayer(), NODE_AVATAR_RADIUS, DEFAULT_NODE_HEIGHT, DEFAULT_NODE_WIDTH, FLOW_VIEWPORT_DIRECTION, FlowViewportDirection (+29 more)

### Community 11 - "TeamSearch.tsx"
Cohesion: 0.26
Nodes (9): compare(), getSearchable(), getSubtitle(), Props, TeamSearch(), matchesQuery(), Options, useSearchSuggestions() (+1 more)

### Community 12 - "memberService.ts"
Cohesion: 0.32
Nodes (12): buildMemberFields(), buildMemberUpdateFields(), buildSharedFields(), buildSparseMemberFields(), assertMentorExists(), assertNoMentorCycle(), createMember(), savePhoneNumbers() (+4 more)

### Community 13 - "FiltersPanel.tsx"
Cohesion: 0.25
Nodes (6): ALL_SECTIONS_CLOSED, Props, OPTIONS, Props, ViewModeSwitch(), isFilterActive()

### Community 14 - "memberUpdateValidation.ts"
Cohesion: 0.14
Nodes (13): zod, ExistingMember, findClearedFields(), memberUpdateBodySchema, parsePhones(), sparseMemberBodySchema, splitName(), completeMember (+5 more)

### Community 15 - "memberRoutes.ts"
Cohesion: 0.12
Nodes (21): multer, multer-storage-cloudinary, deleteCloudinaryImage(), extractCloudinaryPublicId(), MAX_UPLOAD_BYTES, uploadMiddleware(), parsePhoneNumbers(), MEMBER_INCLUDE (+13 more)

### Community 16 - "EditMemberForm.tsx"
Cohesion: 0.12
Nodes (33): deleteMember(), AddMemberForm(), buildMemberFormData(), ClearButton(), SubmitButton(), ConfirmDeleteControl(), Props, EditMemberForm() (+25 more)

### Community 17 - "constants/canvas/index.ts"
Cohesion: 0.14
Nodes (9): @gsap/react, lineageEdgePath, ACCIDENTAL_DRAG_MAX_DISTANCE, ACCIDENTAL_DRAG_MAX_MS, TAP_MOVE_TOLERANCE, CIRCLE_TEXTURE_SRC, PATTERN_TEXTURE_SRC, CHARS (+1 more)

### Community 18 - "useCardAnimation.ts"
Cohesion: 0.21
Nodes (15): clamp01(), easeBackOut, easePower2In, easePower2Out, entries, Entry, finishCardReveal(), registerCardReveal() (+7 more)

### Community 19 - "catalogValidation.ts"
Cohesion: 0.10
Nodes (23): Renderer selection at runtime, [MEDIUM] Using container.name instead of container.label, parsePositionsPayload(), router, booleanLike, formatZodErrors(), isValidPeriod(), name() (+15 more)

### Community 20 - "Sidebar.tsx"
Cohesion: 0.15
Nodes (12): gsap, Props, Props, Sidebar(), SidebarFooterContext, Props, SidebarHandle(), SidebarHeader() (+4 more)

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "clientInstance.ts"
Cohesion: 0.18
Nodes (13): @prisma/adapter-pg, adapter, prisma, loadFamilyTree, serializeMember(), flattenTree(), transformMembersToTree(), MemberWithPhoneNumberRecords (+5 more)

### Community 23 - "Member"
Cohesion: 0.06
Nodes (58): date-fns, NodesLayer(), Props, Options, DEFAULT_POSITION, Member, changesStructure(), EMPTY_INDEX (+50 more)

### Community 24 - "teamService.ts"
Cohesion: 0.14
Nodes (27): getPositionKey(), ResolvedPosition, resolvePosition(), syncPositions(), MemberTransaction, deleteMember(), deriveTeamName(), resolveRole() (+19 more)

### Community 25 - "TeamBadge.tsx"
Cohesion: 0.08
Nodes (41): pixi.js, Props, TeamBadge(), FILL_ALPHA, lerp(), STROKE_ALPHA, TeamFrame(), TeamOverviewLabel() (+33 more)

### Community 26 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, esModuleInterop, forceConsistentCasingInFileNames, module, moduleResolution, noImplicitAny, outDir, paths (+12 more)

### Community 27 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+12 more)

### Community 28 - "useMembersStore"
Cohesion: 0.33
Nodes (9): MemberFormFields(), membersActions, {
  setMembers,
  reloadMembers,
  addMember,
  updateMember,
  selectMember,
  getMentorsList,
}, useMembersMap(), useMentees(), useMentorsList(), useSelectedId(), useSelectedMember() (+1 more)

### Community 29 - "react"
Cohesion: 0.13
Nodes (20): react, DropdownMenu(), DropdownPortal(), Props, BadgeInput(), BadgeInputField(), useBadgeInputState(), FilterSection() (+12 more)

### Community 30 - "dependencies"
Cohesion: 0.11
Nodes (19): dependencies, date-fns, dotenv, elkjs, gsap, @gsap/react, @heroicons/react, lodash (+11 more)

### Community 31 - "server/package.json"
Cohesion: 0.08
Nodes (23): cloudinary, concurrently, nodemon, @prisma/config, ts-node, tsx, @types/compression, @types/cors (+15 more)

### Community 32 - "src/index.ts"
Cohesion: 0.18
Nodes (10): compression, cors, express, app, router, router, router, bumpDataVersion() (+2 more)

### Community 33 - "useHoverNodeAnimation.ts"
Cohesion: 0.29
Nodes (8): pixi-filters, NODE_HOVER_ANIMATION_DURATION, NODE_HOVER_SCALE, ZOOMED_OUT_HOVER_SCALE_MAP, calculateTargetScale(), createShadowFilter(), Props, useHoverNodeAnimation()

### Community 34 - "TeamTypeFilterSection.tsx"
Cohesion: 0.15
Nodes (17): BirthdayFilterSection(), Option, Props, ClearButton(), FilterCheckbox(), Props, JoinYearFilterSection(), Props (+9 more)

### Community 35 - "MembersTreeContent.tsx"
Cohesion: 0.06
Nodes (59): @pixi/react, PixiElements, @pixi/react, pixi-viewport, EMPTY_IDS, SharpAvatarTracker(), View, Props (+51 more)

### Community 36 - "package.json"
Cohesion: 0.10
Nodes (19): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+11 more)

### Community 37 - "Core Patterns"
Cohesion: 0.11
Nodes (17): API Reference, Common Mistakes, Coordinate conversion, Core Patterns, Cumulative alpha (getGlobalAlpha), Global, local, and screen coordinates, [HIGH] Setting scale to 0, [MEDIUM] Confusing anchor and pivot (+9 more)

### Community 38 - "FiltersPanel.tsx"
Cohesion: 0.27
Nodes (9): FilterCategory(), LION_GROUP_ICON, LION_ICON, Props, TeamPeriodFilterSection(), TeamFilterCategory(), MaskIcon(), Props (+1 more)

### Community 39 - "inputs/index.ts"
Cohesion: 0.21
Nodes (12): DateInput(), Props, FormCheckbox(), Props, InputLabel(), Props, Props, TextAreaInput() (+4 more)

### Community 40 - "src/utils/index.ts"
Cohesion: 0.27
Nodes (7): FiltersHeader(), Props, formatCount(), PARTICIPANT_FORMS, PluralForms, pluralizeUk(), TEAM_FORMS

### Community 41 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+5 more)

### Community 42 - "Core Patterns"
Cohesion: 0.18
Nodes (14): Adding and removing children, Bounds and coordinate conversion, Constructor options, Container events, Core Patterns, Destroy, Finding and removing from parent, Leaves vs containers (+6 more)

### Community 43 - "ApplicationOptions reference"
Cohesion: 0.06
Nodes (32): Accessibility, ApplicationOptions reference, Background, Culler (CullerPluginOptions), Deprecated (GC — prefer the unified options above), Events, Garbage collection, Graphics (+24 more)

### Community 44 - "CLAUDE.md"
Cohesion: 0.33
Nodes (5): Commands, Conventions, Do not read or edit, Graphify, Stack & layout

### Community 45 - "SearchSuggestionItem.tsx"
Cohesion: 0.31
Nodes (7): Props, SearchSuggestionItem(), Props, SearchSuggestionRow(), Props, TeamSuggestionItem(), formatMemberRecruitmentSeason()

### Community 46 - "MemberNode.tsx"
Cohesion: 0.35
Nodes (8): BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props, acquireEmojiTextures(), createEmojiTexture(), generateRandomPosition(), releaseEmojiTextures()

### Community 47 - "Common Mistakes"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [CRITICAL] Adding children to leaf scene objects, [HIGH] Expecting getBounds() to return a Rectangle, [HIGH] Using cacheAsBitmap instead of cacheAsTexture, [MEDIUM] Setting both pivot and origin on the same container, Quick Start

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "ManageForm.tsx"
Cohesion: 0.16
Nodes (20): DropdownSelectInput(), ManageForm(), MemberMode, Section, SECTIONS, TEAM_KINDS, TeamKind, MemberEditPanel() (+12 more)

### Community 50 - "MemberSearch.tsx"
Cohesion: 0.39
Nodes (6): compare(), getSearchable(), MemberSearch(), Props, Props, SearchPanel()

### Community 51 - "AGENTS.md"
Cohesion: 0.33
Nodes (5): Commands, Conventions, Do not read or edit, Graphify, Stack & layout

### Community 52 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, dev, dev:webpack, lint, start, test, typecheck

### Community 53 - "TeamMembersEditor.tsx"
Cohesion: 0.53
Nodes (5): PositionRowHeader(), getSummary(), Props, TeamMembersEditor(), TeamMemberRow

### Community 54 - "BEST Family Tree"
Cohesion: 0.40
Nodes (4): BEST Family Tree, People, Teams, Views

### Community 57 - "SubmitButton.tsx"
Cohesion: 0.50
Nodes (3): Props, Props, Spinner()

### Community 58 - "Common Mistakes"
Cohesion: 0.50
Nodes (4): Common Mistakes, [HIGH] Accessing app.renderer before init() resolves, [HIGH] Setting DOMAdapter after Application.init, [MEDIUM] Treating `preference` as a guarantee

### Community 59 - "Core Patterns"
Cohesion: 0.07
Nodes (29): API Reference, Application destroy/recreate cycle, Batching optimization, cacheAsTexture for performance, Common Mistakes, Core Patterns, [CRITICAL] App destroy without releaseGlobalResources, Culling (+21 more)

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

### Community 88 - "pixijs-scene-graphics/SKILL.md"
Cohesion: 0.19
Nodes (13): MemberFilterCategory(), CheckboxGroupFilterSection(), ACTIVITY_OPTIONS, ACTIVITY_STATES, AVATAR_OPTIONS, AVATAR_VALUES, EMPTY_FILTER_STATE, JOIN_SEASONS (+5 more)

### Community 89 - "Scene Objects"
Cohesion: 0.18
Nodes (10): pixijs-html-source, pixijs-scene-container, pixijs-scene-dom-container, pixijs-scene-gif, pixijs-scene-mesh, pixijs-scene-particle-container, pixijs-scene-sprite, pixijs-scene-text (+2 more)

### Community 91 - "pixijs/SKILL.md"
Cohesion: 0.25
Nodes (7): Advanced, Fallback: canonical PixiJS docs, Foundations, How to use this skill, Scene Objects, Skill router, Utilities

### Community 92 - "Core Concepts"
Cohesion: 0.18
Nodes (11): Container vs leaf (CRITICAL), Core Concepts, Culling, Destroy semantics, Lifecycle events, Masking, Render groups, Render order and explicit z-ordering (+3 more)

### Community 95 - "MemberStatus"
Cohesion: 0.21
Nodes (9): FOUNDER_JOIN_YEAR, MEMBER_STATUSES, MENTOR_STATUSES, MemberStatus, Alumni, Baby, Full, Observer (+1 more)

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
Cohesion: 0.10
Nodes (28): Props, Props, Props, Props, Props, Props, Props, Props (+20 more)

### Community 110 - "migrateMembersFromMongodb.ts"
Cohesion: 0.07
Nodes (28): mongodb, ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember, STATUSES_MAP (+20 more)

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

### Community 113 - "TeamFrame"
Cohesion: 0.15
Nodes (17): Props, Props, Props, MembersTreeScene(), Props, FIXED_EDGE_WIDTH, TEAM_OVERVIEW_EDGE_ALPHA, TEAM_OVERVIEW_NODE_ALPHA (+9 more)

### Community 116 - "pixijs-scene-core-concepts/SKILL.md"
Cohesion: 0.14
Nodes (12): API Reference, Common Mistakes, [CRITICAL] Adding children to a leaf display object, [CRITICAL] Referencing DisplayObject, [HIGH] Forgetting isRenderGroup on large static subtrees, [HIGH] Treating child.x as world space, Leaf comparison: which skill covers which object, [MEDIUM] sortableChildren without zIndex (+4 more)

### Community 117 - "Container Hierarchy"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, Container Hierarchy, [CRITICAL] Adding children to a leaf, [HIGH] Destroying the parent without `children: true`, [MEDIUM] Mutating `children` during iteration, Quick Start

### Community 124 - "TeamFrame"
Cohesion: 0.19
Nodes (11): Props, Props, TeamFramesLayer(), Props, Props, TeamOverviewLayer(), Props, Props (+3 more)

### Community 125 - "Foundations"
Cohesion: 0.29
Nodes (7): Foundations, pixijs-application, pixijs-core-concepts, pixijs-create, pixijs-environments, pixijs-migration-v8, pixijs-scene-core-concepts

### Community 127 - "useDashedPathAnimation.ts"
Cohesion: 0.16
Nodes (20): LineageEdge(), DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN, MIN_ANIM_DURATION, PATTERN_LEN, RETRACT_BASE (+12 more)

### Community 129 - "GSAP with React"
Cohesion: 0.15
Nodes (12): Best practices, Context-Safe Callbacks, Dependency array, scope, and revertOnUpdate, Do Not, gsap.context() in useEffect (when useGSAP isn't used), GSAP with React, Installation, Learn More (+4 more)

### Community 132 - "hitl-loop.template.sh"
Cohesion: 0.83
Nodes (3): capture(), hitl-loop.template.sh script, step()

### Community 133 - "ThemeContext.tsx"
Cohesion: 0.06
Nodes (41): react-datepicker, metadata, nunito, RootLayout(), EDGE_STYLE_OPTIONS, ORIENTATION_OPTIONS, Props, Section() (+33 more)

### Community 135 - "Core Patterns"
Cohesion: 0.29
Nodes (7): Core Patterns, Frame rate capping, Manual rendering, Per-object update via `onRender`, Priority order, Stop and start, Time units

### Community 137 - "GSAP Performance"
Cohesion: 0.17
Nodes (11): Batch Reads and Writes, Best practices, Do Not, Frequently updated properties (e.g. mouse followers), GSAP Performance, Many Elements (Stagger, Lists), Prefer Transform and Opacity, Reduce Simultaneous Work (+3 more)

### Community 138 - "GSAP Timeline"
Cohesion: 0.17
Nodes (11): Controlling Playback, Creating a Timeline, Do Not, GSAP Timeline, Labels, Nesting Timelines, Official GSAP Best practices, Position Parameter (+3 more)

### Community 139 - "teamFrame.ts"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, Constructor options, [CRITICAL] Using lineStyle instead of stroke, [CRITICAL] Using old shape method names, [CRITICAL] Using v7 beginFill/drawRect/endFill, [HIGH] Clearing and redrawing Graphics every frame, [HIGH] Destroying a shared GraphicsContext unexpectedly (+4 more)

### Community 140 - "devDependencies"
Cohesion: 0.05
Nodes (35): dependencies, cloudinary, compression, cors, dotenv, express, mongodb, multer (+27 more)

### Community 142 - "pixijs-events/SKILL.md"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] buttonMode removed; use cursor, [HIGH] Default eventMode is passive, [HIGH] Move events only fire over the object in v8, [MEDIUM] Cursor does not inherit from parent, Quick Start

### Community 143 - "teamFrame.ts"
Cohesion: 0.07
Nodes (46): pixijs-scene-graphics, Paths and complex shapes, TEAM_COLUMN_GAP, TEAM_EDGE_DROP, TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_SPREAD_WIDTH, TEAM_EDGE_STUB, TEAM_FRAME_HEADER (+38 more)

### Community 146 - "Advanced"
Cohesion: 0.14
Nodes (13): Advanced, pixijs-accessibility, pixijs-assets, pixijs-blend-modes, pixijs-color, pixijs-custom-rendering, pixijs-events, pixijs-filters (+5 more)

### Community 147 - "FilterState"
Cohesion: 0.14
Nodes (14): FilterGroupProps, Props, Props, Props, Props, Props, AvatarFilterValue, FilterSectionKey (+6 more)

### Community 151 - "memberPresentation.ts"
Cohesion: 0.18
Nodes (12): MemberNodeAvatar(), RosterRow(), CloudinaryTransformations, getIconUrlAsRounded(), getPhotoUrlAsAvatar(), getPhotoUrlAsRoundAvatar(), formatRecruitmentTerm(), getInitials() (+4 more)

## Knowledge Gaps
- **40 isolated node(s):** `@prisma/client`, `dotenv`, `lodash`, `@tailwindcss/postcss`, `@types/lodash` (+35 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 777 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Point` connect `utils/membersTree/index.ts` to `MembersTreeContent.tsx`, `layout.ts`, `teamBlock.ts`, `teamFrame.ts`, `TeamFrame`, `Advanced`, `pixijs/SKILL.md`, `TeamFrame`?**
  _High betweenness centrality (0.127) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _40 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `http` be split into smaller, more focused modules?**
  _Cohesion score 0.06227106227106227 - nodes in this community are weakly interconnected._
- **Why does `Utilities` connect `pixijs/SKILL.md` to `utils/membersTree/index.ts`?**
  _High betweenness centrality (0.120) - this node is a cross-community bridge._
- **Should `src/types/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.13010204081632654 - nodes in this community are weakly interconnected._
- **Should `layout.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.08870967741935484 - nodes in this community are weakly interconnected._
- **Should `teamBlock.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07616892911010557 - nodes in this community are weakly interconnected._