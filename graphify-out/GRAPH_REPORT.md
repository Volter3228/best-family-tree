# Graph Report - best-family-tree  (2026-11-08)

## Corpus Check
- 394 files · ~140,805 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 25 file(s) not represented in the graph (top: .prisma 8, .css 6, (none) 5)

## Summary
- 2075 nodes · 5199 edges · 108 communities (105 shown, 3 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 54 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `270f2a6f`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- EditMemberForm.tsx
- filterSearchParams.ts
- http
- utils/membersTree/index.ts
- MemberInfoSocial.tsx
- tailwind-merge
- hooks/index.ts
- teamBlock.ts
- PositionFormFields.tsx
- constants/theme.ts
- dashedBezier.ts
- Toolbar.tsx
- memberService.ts
- SettingsPanel.tsx
- memberUpdateValidation.ts
- memberRoutes.ts
- TeamFormContent.tsx
- constants/canvas/index.ts
- useCardAnimation.ts
- catalogValidation.ts
- Sidebar.tsx
- HTML Report Format
- Point
- Member
- teamService.ts
- TeamBadge.tsx
- compilerOptions
- compilerOptions
- MembersTreeContent.tsx
- react
- dependencies
- server/package.json
- migrateMembersFromMongodb.ts
- useHoverNodeAnimation.ts
- TeamTypeFilterSection.tsx
- useTreeLayout.ts
- package.json
- Core Patterns
- FiltersPanel.tsx
- scale.ts
- BirthdayFilterSection.tsx
- devDependencies
- Member
- ApplicationOptions reference
- CLAUDE.md
- useTreeDirection.ts
- MemberNode.tsx
- layout.tsx
- During the session
- ManageForm.tsx
- AGENTS.md
- scripts
- filterMembers.ts
- BEST Family Tree
- next.config.mjs
- postcss.config.mjs
- Core Patterns
- BEST Family Tree
- Diagnosing Bugs
- Core Patterns
- Core Patterns
- Core Patterns
- Core Patterns
- Core Patterns
- models/index.ts
- Core Patterns
- Constructor options (Container-inherited)
- Test-Driven Development
- GSAP Core
- Core Patterns
- pixijs-scene-graphics/SKILL.md
- Scene Objects
- pixijs/SKILL.md
- Core Concepts
- members.ts
- Render Loop
- pixijs-core-concepts/SKILL.md
- Core Patterns
- MemberInfo.tsx
- migrateMembersFromMongodb.ts
- Renderers: WebGPU, WebGL, and Canvas
- TeamFrame
- pixijs-scene-core-concepts/SKILL.md
- Container Hierarchy
- Common Mistakes
- TeamFrame
- Foundations
- settingsStore.ts
- useDashedPathAnimation.ts
- GSAP with React
- hitl-loop.template.sh
- ThemeContext.tsx
- Position
- Core Patterns
- GSAP Performance
- GSAP Timeline
- teamFrame.ts
- devDependencies
- pixijs-events/SKILL.md
- teamFrame.ts
- Advanced
- FilterState
- Utilities
- Common Mistakes
- pixi.js
- pixijs-scene-graphics/SKILL.md
- arc

## God Nodes (most connected - your core abstractions)
1. `AccentColor` - 107 edges
2. `react` - 104 edges
3. `Member` - 58 edges
4. `tailwind-merge` - 50 edges
5. `TeamFrame` - 40 edges
6. `COLOR_CLASSES` - 36 edges
7. `pixi.js` - 33 edges
8. `FilterState` - 31 edges
9. `useTreeStore` - 28 edges
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

## Communities (108 total, 3 thin omitted)

### Community 0 - "EditMemberForm.tsx"
Cohesion: 0.10
Nodes (39): deleteMember(), AddMemberForm(), buildMemberFormData(), ClearButton(), SubmitButton(), EditMemberForm(), getInitialFormData(), FieldError() (+31 more)

### Community 1 - "filterSearchParams.ts"
Cohesion: 0.31
Nodes (10): filtersToSearchParams(), parseCsvArray(), parseCsvStrings(), parseFiltersFromSearchParams(), parseNumberOrNull(), parseTreeMode(), serializeCsv(), serializeNameCsv() (+2 more)

### Community 2 - "http"
Cohesion: 0.10
Nodes (37): addMember(), editMember(), fetchFamilyTree(), fetchMemberById(), fetchMentorsList(), createRole(), createTeamType(), fetchRoles() (+29 more)

### Community 3 - "utils/membersTree/index.ts"
Cohesion: 0.15
Nodes (16): DEFAULT_NODE_HEIGHT, DEFAULT_NODE_WIDTH, DEFAULT_POSITION, derive(), areSetsEqual(), computeFilteredMembers(), isFilterActive(), collectAllAncestorIds() (+8 more)

### Community 4 - "MemberInfoSocial.tsx"
Cohesion: 0.24
Nodes (9): Props, FacebookIcon(), InstagramIcon(), LinkedinIcon(), TelegramIcon(), Props, SocialMediaFormFields(), MemberInfoSocial() (+1 more)

### Community 5 - "tailwind-merge"
Cohesion: 0.11
Nodes (34): @heroicons/react, tailwind-merge, Props, Props, Props, Props, Props, Props (+26 more)

### Community 6 - "hooks/index.ts"
Cohesion: 0.09
Nodes (27): AVATAR_HIT_AREA, EMPTY_FILTERS, getCullArea(), MemberNode(), NODE_HIT_AREA, Props, MemberNodeCard(), Props (+19 more)

### Community 7 - "teamBlock.ts"
Cohesion: 0.08
Nodes (37): elkjs, TEAM_FRAME_GAP, TEAM_PACK_ASPECT, failOver(), getWorker(), Pending, requestLayout(), runInline() (+29 more)

### Community 8 - "PositionFormFields.tsx"
Cohesion: 0.14
Nodes (24): Props, Props, EMPTY_POSITION_ROW, findTeamByName(), getPositionRowSummary(), getRowPeriod(), getTeamSelectionPatch(), getTeamTypeSelectionPatch() (+16 more)

### Community 9 - "constants/theme.ts"
Cohesion: 0.25
Nodes (6): darkTheme, DEFAULT_THEME, lightTheme, THEMES, themeCssMap, themeInitScript

### Community 10 - "dashedBezier.ts"
Cohesion: 0.22
Nodes (18): EdgesLayer(), buildSegmentFromPositions(), DashStrokeOptions, lerpSegment(), segmentFromPoints(), bezierEval(), edgeGeometry, endpoints() (+10 more)

### Community 11 - "Toolbar.tsx"
Cohesion: 0.06
Nodes (45): FiltersHeader(), Props, FiltersPanel(), FitViewButton(), compare(), getSearchable(), MemberSearch(), Props (+37 more)

### Community 12 - "memberService.ts"
Cohesion: 0.21
Nodes (16): buildMemberFields(), buildMemberUpdateFields(), buildSharedFields(), buildSparseMemberFields(), assertMentorExists(), assertNoMentorCycle(), createMember(), savePhoneNumbers() (+8 more)

### Community 13 - "SettingsPanel.tsx"
Cohesion: 0.16
Nodes (11): OPTIONS, Props, ViewModeSwitch(), EDGE_STYLE_OPTIONS, ORIENTATION_OPTIONS, Props, Section(), SectionProps (+3 more)

### Community 14 - "memberUpdateValidation.ts"
Cohesion: 0.14
Nodes (13): zod, ExistingMember, findClearedFields(), memberUpdateBodySchema, parsePhones(), sparseMemberBodySchema, splitName(), completeMember (+5 more)

### Community 15 - "memberRoutes.ts"
Cohesion: 0.13
Nodes (18): multer, multer-storage-cloudinary, deleteCloudinaryImage(), extractCloudinaryPublicId(), MAX_UPLOAD_BYTES, uploadMiddleware(), TEAM_INCLUDE, router (+10 more)

### Community 16 - "TeamFormContent.tsx"
Cohesion: 0.16
Nodes (24): ConfirmDeleteControl(), Props, PositionAssignmentFields(), getRoleOptions(), getTeamTypeOptions(), FormMessages(), ComboboxInput(), FormCheckbox() (+16 more)

### Community 17 - "constants/canvas/index.ts"
Cohesion: 0.18
Nodes (8): lineageEdgePath, ACCIDENTAL_DRAG_MAX_DISTANCE, ACCIDENTAL_DRAG_MAX_MS, TAP_MOVE_TOLERANCE, PressStart, useTapWithoutDrag(), isTapGesture(), isViewportMoving()

### Community 18 - "useCardAnimation.ts"
Cohesion: 0.18
Nodes (16): clamp01(), easeBackOut, easePower2In, easePower2Out, entries, Entry, finishCardReveal(), registerCardReveal() (+8 more)

### Community 19 - "catalogValidation.ts"
Cohesion: 0.10
Nodes (23): Renderer selection at runtime, [MEDIUM] Using container.name instead of container.label, parsePositionsPayload(), router, booleanLike, formatZodErrors(), isValidPeriod(), name() (+15 more)

### Community 20 - "Sidebar.tsx"
Cohesion: 0.21
Nodes (8): Props, Sidebar(), Props, SidebarHandle(), SidebarHeader(), useSidebarChromeHeights(), useSidebarHeightAnimation(), useSidebarSwipe()

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "Point"
Cohesion: 0.16
Nodes (18): drawPolyline(), TeamEdgesLayer(), Point, TeamEdge, SegmentMorph, TeamBlock, circleHit(), teamEdgePath() (+10 more)

### Community 23 - "Member"
Cohesion: 0.16
Nodes (16): Member, changesStructure(), EMPTY_INDEX, isSamePosition(), MembersState, withIndex(), ChildrenMap, MembersMap (+8 more)

### Community 24 - "teamService.ts"
Cohesion: 0.14
Nodes (27): getPositionKey(), ResolvedPosition, resolvePosition(), syncPositions(), MemberTransaction, deleteMember(), deriveTeamName(), resolveRole() (+19 more)

### Community 25 - "TeamBadge.tsx"
Cohesion: 0.10
Nodes (34): Props, TeamBadge(), FILL_ALPHA, lerp(), Props, STROKE_ALPHA, TeamFrame(), TeamOverviewLabel() (+26 more)

### Community 26 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, esModuleInterop, forceConsistentCasingInFileNames, module, moduleResolution, noImplicitAny, outDir, paths (+12 more)

### Community 27 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+12 more)

### Community 28 - "MembersTreeContent.tsx"
Cohesion: 0.16
Nodes (20): SharpAvatarTracker(), MemberSidebar(), Props, ACCENT_COLOR_MAP, EVENT_FEATURES, MembersTreeContent(), Props, TeamInfoSidebar() (+12 more)

### Community 29 - "react"
Cohesion: 0.10
Nodes (23): react, react-dom, DropdownMenu(), Props, DropdownPortal(), Props, BadgeInput(), Props (+15 more)

### Community 30 - "dependencies"
Cohesion: 0.11
Nodes (19): dependencies, date-fns, dotenv, elkjs, gsap, @gsap/react, @heroicons/react, lodash (+11 more)

### Community 31 - "server/package.json"
Cohesion: 0.08
Nodes (23): cloudinary, concurrently, nodemon, @prisma/config, ts-node, tsx, @types/compression, @types/cors (+15 more)

### Community 32 - "migrateMembersFromMongodb.ts"
Cohesion: 0.12
Nodes (21): compression, cors, express, @prisma/adapter-pg, adapter, prisma, app, loadFamilyTree (+13 more)

### Community 33 - "useHoverNodeAnimation.ts"
Cohesion: 0.25
Nodes (9): @gsap/react, pixi-filters, NODE_HOVER_ANIMATION_DURATION, NODE_HOVER_SCALE, ZOOMED_OUT_HOVER_SCALE_MAP, calculateTargetScale(), createShadowFilter(), Props (+1 more)

### Community 34 - "TeamTypeFilterSection.tsx"
Cohesion: 0.15
Nodes (18): CheckboxGroupFilterSection(), Option, Props, FilterCheckbox(), Props, FilterSection(), Props, Props (+10 more)

### Community 35 - "useTreeLayout.ts"
Cohesion: 0.15
Nodes (21): gsap, CARD_VIEW_SCALE, getFitViewTargetScale(), useFitViewAnimation(), useFocusFrameAnimation(), useFocusNodeAnimation(), useViewportAnimation(), useSceneTransition() (+13 more)

### Community 36 - "package.json"
Cohesion: 0.11
Nodes (18): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+10 more)

### Community 37 - "Core Patterns"
Cohesion: 0.06
Nodes (38): Adding and removing children, API Reference, Bounds and coordinate conversion, Common Mistakes, Constructor options, Container events, Core Patterns, [CRITICAL] Adding children to leaf scene objects (+30 more)

### Community 38 - "FiltersPanel.tsx"
Cohesion: 0.26
Nodes (10): FilterCategory(), LION_GROUP_ICON, LION_ICON, Props, RoleFilterSection(), TeamTypeFilterSection(), TeamFilterCategory(), MaskIcon() (+2 more)

### Community 39 - "scale.ts"
Cohesion: 0.29
Nodes (7): AVATAR_LOW_RES_SIZE, MAX_RENDER_RESOLUTION, TEAM_OVERVIEW_END_SCALE, TEAM_OVERVIEW_FAST_FACTOR, TEAM_OVERVIEW_START_SCALE, getRenderResolution(), needsSharpAvatars()

### Community 40 - "BirthdayFilterSection.tsx"
Cohesion: 0.33
Nodes (6): BirthdayFilterSection(), Props, ClearButton(), DATE_PICKER_CLASSES, fromDate(), toDate()

### Community 41 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+5 more)

### Community 42 - "Member"
Cohesion: 0.12
Nodes (19): MembersTree(), Props, Props, isTreeReady(), MembersTree, MembersTreeDynamic(), Props, TreeState (+11 more)

### Community 43 - "ApplicationOptions reference"
Cohesion: 0.06
Nodes (32): Accessibility, ApplicationOptions reference, Background, Culler (CullerPluginOptions), Deprecated (GC — prefer the unified options above), Events, Garbage collection, Graphics (+24 more)

### Community 44 - "CLAUDE.md"
Cohesion: 0.33
Nodes (5): Commands, Conventions, Do not read or edit, Graphify, Stack & layout

### Community 45 - "useTreeDirection.ts"
Cohesion: 0.53
Nodes (4): useIsMobileScreen(), useResolvedDirection(), useMediaQuery(), FLOW_VIEWPORT_DIRECTION

### Community 46 - "MemberNode.tsx"
Cohesion: 0.35
Nodes (8): BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props, acquireEmojiTextures(), createEmojiTexture(), generateRandomPosition(), releaseEmojiTextures()

### Community 47 - "layout.tsx"
Cohesion: 0.20
Nodes (5): react-datepicker, metadata, nunito, RootLayout(), AuroraBackground()

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "ManageForm.tsx"
Cohesion: 0.12
Nodes (26): zustand, DropdownSelectInput(), ManageForm(), MemberMode, Section, SECTIONS, TEAM_KINDS, TeamKind (+18 more)

### Community 51 - "AGENTS.md"
Cohesion: 0.33
Nodes (5): Commands, Conventions, Do not read or edit, Graphify, Stack & layout

### Community 52 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, dev, dev:webpack, lint, start, test, typecheck

### Community 53 - "filterMembers.ts"
Cohesion: 0.17
Nodes (19): date-fns, generateGoogleCalendarLink(), getClosestBirthday(), matchesAvatar(), matchesBirthday(), matchesJoinYear(), memberMatchesFilters(), parseDateStr() (+11 more)

### Community 54 - "BEST Family Tree"
Cohesion: 0.40
Nodes (4): BEST Family Tree, People, Teams, Views

### Community 59 - "Core Patterns"
Cohesion: 0.12
Nodes (17): Application destroy/recreate cycle, Batching optimization, cacheAsTexture for performance, Core Patterns, Culling, Filters and masks cost, Graphics performance, Low-level rendering optimizations (+9 more)

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

### Community 82 - "models/index.ts"
Cohesion: 0.18
Nodes (12): NodesLayer(), Props, MemberSidebarContent(), Props, useTeamSelection(), useMemberSwitchAnimation(), getMemberById(), SidebarMode (+4 more)

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
Cohesion: 0.28
Nodes (11): MemberFilterCategory(), JoinYearFilterSection(), ACTIVITY_OPTIONS, ACTIVITY_STATES, AVATAR_OPTIONS, AVATAR_VALUES, JOIN_SEASONS, MEMBER_STATUSES (+3 more)

### Community 89 - "Scene Objects"
Cohesion: 0.18
Nodes (10): pixijs-html-source, pixijs-scene-container, pixijs-scene-dom-container, pixijs-scene-gif, pixijs-scene-mesh, pixijs-scene-particle-container, pixijs-scene-sprite, pixijs-scene-text (+2 more)

### Community 91 - "pixijs/SKILL.md"
Cohesion: 0.18
Nodes (9): API Reference, Quick Start, Advanced, Fallback: canonical PixiJS docs, Foundations, How to use this skill, Scene Objects, Skill router (+1 more)

### Community 92 - "Core Concepts"
Cohesion: 0.18
Nodes (11): Container vs leaf (CRITICAL), Core Concepts, Culling, Destroy semantics, Lifecycle events, Masking, Render groups, Render order and explicit z-ordering (+3 more)

### Community 95 - "members.ts"
Cohesion: 0.09
Nodes (19): EMPTY_FILTER_STATE, FOUNDER_JOIN_YEAR, MEMBER_STATUSES, MENTOR_STATUSES, initialFiltersState, AvatarFilterValue, ActivityState, Active (+11 more)

### Community 102 - "Render Loop"
Cohesion: 0.22
Nodes (8): API Reference, Common Mistakes, [CRITICAL] Treating the ticker callback arg as a number, Frame lifecycle, [HIGH] Using `updateTransform` for per-frame logic, [MEDIUM] Assuming ticker callbacks run after render, Quick Start, Render Loop

### Community 103 - "pixijs-core-concepts/SKILL.md"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, Decision guide, Environments, [HIGH] Accessing app.renderer before init() resolves, [HIGH] Setting DOMAdapter after Application.init, [MEDIUM] Treating `preference` as a guarantee, Quick concepts (+4 more)

### Community 104 - "Core Patterns"
Cohesion: 0.22
Nodes (9): Add, remove, swap, Child queries, Core Patterns, Destroying sub-trees, Iterating children, Label-based tree navigation, Lifecycle events, Reparenting with transform preservation (+1 more)

### Community 105 - "MemberInfo.tsx"
Cohesion: 0.12
Nodes (22): next, LionIcon(), MemberInfo(), Props, MemberInfoActionIcon(), Props, MemberInfoCopy(), MemberInfoRow() (+14 more)

### Community 110 - "migrateMembersFromMongodb.ts"
Cohesion: 0.07
Nodes (29): mongodb, ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember, STATUSES_MAP (+21 more)

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

### Community 113 - "TeamFrame"
Cohesion: 0.16
Nodes (23): Props, Props, EMPTY_IDS, View, Props, Props, FIXED_EDGE_WIDTH, Options (+15 more)

### Community 116 - "pixijs-scene-core-concepts/SKILL.md"
Cohesion: 0.25
Nodes (6): API Reference, Leaf comparison: which skill covers which object, Quick Start, References, Tooling, When to use what (quick decisions)

### Community 117 - "Container Hierarchy"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, Container Hierarchy, [CRITICAL] Adding children to a leaf, [HIGH] Destroying the parent without `children: true`, [MEDIUM] Mutating `children` during iteration, Quick Start

### Community 123 - "Common Mistakes"
Cohesion: 0.20
Nodes (10): Common Mistakes, [CRITICAL] App destroy without releaseGlobalResources, [HIGH] Destroying and recreating objects instead of recycling, [HIGH] Interleaving object types in scene graph, [HIGH] Loading many individual textures instead of spritesheets, [HIGH] Updating Text or HTMLText every frame, [HIGH] Using complex Graphics instead of textures, [MEDIUM] Not staggering bulk texture destruction (+2 more)

### Community 124 - "TeamFrame"
Cohesion: 0.12
Nodes (10): Props, TeamFramesLayer(), Props, Props, TeamOverviewLayer(), MembersTreeScene(), Props, TEAM_OVERVIEW_EDGE_ALPHA (+2 more)

### Community 125 - "Foundations"
Cohesion: 0.29
Nodes (7): Foundations, pixijs-application, pixijs-core-concepts, pixijs-create, pixijs-environments, pixijs-migration-v8, pixijs-scene-core-concepts

### Community 126 - "settingsStore.ts"
Cohesion: 0.27
Nodes (10): DEFAULT_SETTINGS, readLegacyTheme(), SETTINGS_STORAGE_KEY, SettingsActions, SettingsState, initialState, { storageMock }, useSettingsStore (+2 more)

### Community 127 - "useDashedPathAnimation.ts"
Cohesion: 0.17
Nodes (19): LineageEdge(), DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN, MIN_ANIM_DURATION, PATTERN_LEN, RETRACT_BASE (+11 more)

### Community 129 - "GSAP with React"
Cohesion: 0.15
Nodes (12): Best practices, Context-Safe Callbacks, Dependency array, scope, and revertOnUpdate, Do Not, gsap.context() in useEffect (when useGSAP isn't used), GSAP with React, Installation, Learn More (+4 more)

### Community 132 - "hitl-loop.template.sh"
Cohesion: 0.83
Nodes (3): capture(), hitl-loop.template.sh script, step()

### Community 133 - "ThemeContext.tsx"
Cohesion: 0.21
Nodes (12): applyCssTokens(), ThemeContext, ThemeContextValue, ThemeProvider(), CanvasColors, noopSubscribe(), useIsHydrated(), CanvasThemeTokens (+4 more)

### Community 134 - "Position"
Cohesion: 0.40
Nodes (5): Position, Bottom, Left, Right, Top

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
Cohesion: 0.22
Nodes (9): Common Mistakes, [CRITICAL] Using lineStyle instead of stroke, [CRITICAL] Using old shape method names, [CRITICAL] Using v7 beginFill/drawRect/endFill, [HIGH] Clearing and redrawing Graphics every frame, [HIGH] Destroying a shared GraphicsContext unexpectedly, [HIGH] Using beginHole/endHole for holes, [HIGH] Using GraphicsGeometry instead of GraphicsContext (+1 more)

### Community 140 - "devDependencies"
Cohesion: 0.05
Nodes (35): dependencies, cloudinary, compression, cors, dotenv, express, mongodb, multer (+27 more)

### Community 142 - "pixijs-events/SKILL.md"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] buttonMode removed; use cursor, [HIGH] Default eventMode is passive, [HIGH] Move events only fire over the object in v8, [MEDIUM] Cursor does not inherit from parent, Quick Start

### Community 143 - "teamFrame.ts"
Cohesion: 0.08
Nodes (41): TEAM_COLUMN_GAP, TEAM_EDGE_DROP, TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_SPREAD_WIDTH, TEAM_EDGE_STUB, TEAM_FRAME_HEADER, TEAM_FRAME_MIN_WIDTH, TEAM_FRAME_PADDING (+33 more)

### Community 146 - "Advanced"
Cohesion: 0.25
Nodes (7): Advanced, pixijs-accessibility, pixijs-blend-modes, pixijs-custom-rendering, pixijs-filters, pixijs-performance, PixiJS Skills: Full Index

### Community 147 - "FilterState"
Cohesion: 0.15
Nodes (13): FilterGroupProps, ALL_SECTIONS_CLOSED, Props, Props, Props, Props, Props, FiltersActions (+5 more)

### Community 148 - "Utilities"
Cohesion: 0.33
Nodes (6): pixijs-assets, pixijs-color, pixijs-events, pixijs-math, pixijs-ticker, Utilities

### Community 149 - "Common Mistakes"
Cohesion: 0.33
Nodes (6): Common Mistakes, [CRITICAL] Adding children to a leaf display object, [CRITICAL] Referencing DisplayObject, [HIGH] Forgetting isRenderGroup on large static subtrees, [HIGH] Treating child.x as world space, [MEDIUM] sortableChildren without zIndex

### Community 151 - "pixi.js"
Cohesion: 0.11
Nodes (18): @pixi/react, PixiElements, pixi.js, @pixi/react, pixi-viewport, MemberNodeAvatar(), Props, AVATAR_HIGH_RES_SIZE (+10 more)

### Community 152 - "pixijs-scene-graphics/SKILL.md"
Cohesion: 0.50
Nodes (3): API Reference, Constructor options, Quick Start

### Community 153 - "arc"
Cohesion: 0.67
Nodes (3): pixijs-scene-graphics, Paths and complex shapes, arc()

## Knowledge Gaps
- **40 isolated node(s):** `@prisma/client`, `dotenv`, `lodash`, `@tailwindcss/postcss`, `@types/lodash` (+35 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 774 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Point` connect `Point` to `useTreeLayout.ts`, `teamBlock.ts`, `dashedBezier.ts`, `teamFrame.ts`, `TeamFrame`, `Utilities`, `pixijs/SKILL.md`?**
  _High betweenness centrality (0.134) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _40 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `EditMemberForm.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.1048265460030166 - nodes in this community are weakly interconnected._
- **Why does `Utilities` connect `pixijs/SKILL.md` to `Point`?**
  _High betweenness centrality (0.125) - this node is a cross-community bridge._
- **Should `http` be split into smaller, more focused modules?**
  _Cohesion score 0.09966329966329966 - nodes in this community are weakly interconnected._
- **Should `tailwind-merge` be split into smaller, more focused modules?**
  _Cohesion score 0.10629296668429403 - nodes in this community are weakly interconnected._
- **Should `hooks/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.0907563025210084 - nodes in this community are weakly interconnected._