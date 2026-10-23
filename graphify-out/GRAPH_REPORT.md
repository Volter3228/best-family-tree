# Graph Report - best-family-tree  (2026-10-23)

## Corpus Check
- 391 files · ~160,592 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 24 file(s) not represented in the graph (top: .prisma 8, (none) 5, .css 5)

## Summary
- 2459 nodes · 5210 edges · 147 communities (141 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 58 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `b5cf60ff`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- TeamFormContent.tsx
- Sidebar.tsx
- http
- filtersStore.ts
- server/src/types/index.ts
- src/types/index.ts
- TeamFrame.tsx
- FilterState
- PositionFormFields.tsx
- ThemeContext.tsx
- GSAP Plugins
- teamFrame.ts
- memberService.ts
- Position
- memberUpdateValidation.ts
- src/index.ts
- FiltersPanel.tsx
- memberFormValidation.ts
- TeamFrame
- catalogValidation.ts
- MemberNode.tsx
- MemberInfo.tsx
- TeamFrame
- constants/filters.ts
- teamService.ts
- TeamInfo.tsx
- compilerOptions
- compilerOptions
- MembersTreeContent.tsx
- DropdownOption
- dependencies
- server/package.json
- migrateMembersFromMongodb.ts
- MemberInfoSocial.tsx
- FilterState
- MemberStatus
- package.json
- Core Patterns
- filterSearchParams.ts
- useTreeLayout.ts
- Core Patterns
- devDependencies
- devDependencies
- ApplicationOptions reference
- Process
- Common Mistakes
- cardVisibilityDriver.ts
- useHoverNodeAnimation.ts
- During the session
- ManageForm.tsx
- Bitmap fonts
- AGENTS.md
- scripts
- MemberBirthdayAnimation.tsx
- BEST Family Tree
- next.config.mjs
- postcss.config.mjs
- Core Patterns
- Core Patterns
- Core Patterns
- Core Patterns
- pixijs-assets/SKILL.md
- Core Patterns
- Core Patterns
- BEST Family Tree
- Diagnosing Bugs
- Core Patterns
- Core Patterns
- Core Patterns
- Common Mistakes
- Core Patterns
- Core Patterns
- Core Patterns
- Core Patterns
- Core Patterns
- Core Patterns
- Core Patterns
- Core Patterns
- Core Patterns
- gsap.utils
- @pixi/react
- Core Patterns
- Constructor options (Container-inherited)
- Test-Driven Development
- GSAP Core
- Core Patterns
- Core Patterns
- Scene Objects
- pixijs-scene-text/SKILL.md
- pixijs/SKILL.md
- Core Concepts
- BitmapText
- Core Patterns
- Common Mistakes
- Core Patterns
- NineSliceSprite
- TilingSprite
- Core Patterns
- HTMLText
- Text (Canvas Text)
- Render Loop
- pixijs-core-concepts/SKILL.md
- Core Patterns
- Common Mistakes
- AnimatedSprite
- Core Patterns
- pixijs-scene-sprite/SKILL.md
- useTeamForm.ts
- transformMembersToTree.ts
- Process
- Renderers: WebGPU, WebGL, and Canvas
- pixijs-events/SKILL.md
- pixijs-math/SKILL.md
- Utilities
- pixijs-scene-core-concepts/SKILL.md
- Container Hierarchy
- Core Patterns
- Sprite
- Core Patterns
- Core Patterns
- GSAP ScrollTrigger
- fetchFamilyTree
- Core Patterns
- Foundations
- Caching
- membersStore.ts
- Core Patterns
- GSAP with React
- Common Mistakes
- react
- hitl-loop.template.sh
- Common Mistakes
- Transforms and Coordinate Spaces
- Core Patterns
- GSAP Performance
- GSAP Timeline
- teamFrame.ts
- dependencies
- pixijs-color/SKILL.md
- filterMembers.ts
- useTeamTypeForm.ts
- transformMembersToTree.ts
- Common Mistakes
- ActivityState

## God Nodes (most connected - your core abstractions)
1. `AccentColor` - 101 edges
2. `react` - 96 edges
3. `Member` - 54 edges
4. `tailwind-merge` - 47 edges
5. `TeamFrame` - 39 edges
6. `COLOR_CLASSES` - 35 edges
7. `pixi.js` - 32 edges
8. `FilterState` - 29 edges
9. `http()` - 26 edges
10. `useTreeStore` - 26 edges

## Surprising Connections (you probably didn't know these)
- `Manual Spritesheet creation` --references--> `parse()`  [INFERRED]
  .agents/skills/pixijs-assets/references/spritesheet.md → src/api/teams.ts
- `[MEDIUM] Not awaiting spritesheet parse` --references--> `parse()`  [INFERRED]
  .agents/skills/pixijs-assets/references/spritesheet.md → src/api/teams.ts
- `pixijs-scene-container` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs/references/index.md → src/hooks/membersTree/animations/useFitViewAnimation.ts
- `[HIGH] Expecting getBounds() to return a Rectangle` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs-scene-container/SKILL.md → src/hooks/membersTree/animations/useFitViewAnimation.ts
- `Quick Start` --references--> `name()`  [INFERRED]
  .agents/skills/pixijs-assets/references/manifests.md → src/server/src/utils/catalogValidation.ts

## Import Cycles
- 3-file cycle: `src/utils/index.ts -> src/utils/membersTree/index.ts -> src/utils/membersTree/lineageEdgePath.ts -> src/utils/index.ts`
- 4-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/members.ts -> src/models/index.ts -> src/models/Member.ts`
- 4-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/tree.ts -> src/models/index.ts -> src/models/Member.ts`
- 5-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/filters.ts -> src/types/members.ts -> src/models/index.ts -> src/models/Member.ts`

## Communities (147 total, 6 thin omitted)

### Community 0 - "TeamFormContent.tsx"
Cohesion: 0.17
Nodes (23): deleteMember(), AddMemberForm(), buildMemberFormData(), ClearButton(), SubmitButton(), ConfirmDeleteControl(), Props, EditMemberForm() (+15 more)

### Community 1 - "Sidebar.tsx"
Cohesion: 0.31
Nodes (6): Props, Props, Sidebar(), SidebarFooterContext, useSidebarHeightAnimation(), SidebarMode

### Community 2 - "http"
Cohesion: 0.15
Nodes (23): addMember(), editMember(), fetchFamilyTree(), fetchMemberById(), fetchMentorsList(), createRole(), createTeamType(), fetchRoles() (+15 more)

### Community 3 - "filtersStore.ts"
Cohesion: 0.06
Nodes (42): FiltersHeader(), Props, ALL_SECTIONS_CLOSED, FiltersPanel(), Props, OPTIONS, Props, ViewModeSwitch() (+34 more)

### Community 4 - "server/src/types/index.ts"
Cohesion: 0.15
Nodes (6): MemberPositionWithRelations, MENTOR_STATUSES, ALUMNI, FULL, MemberWithPhoneNumberStrings, PositionWithRelations

### Community 5 - "src/types/index.ts"
Cohesion: 0.11
Nodes (35): @heroicons/react, tailwind-merge, Props, Props, Props, Props, Props, Props (+27 more)

### Community 6 - "TeamFrame.tsx"
Cohesion: 0.14
Nodes (20): FILL_ALPHA, lerp(), Props, STROKE_ALPHA, TeamFrame(), TeamOverviewLabel(), Props, ZoomFadeContainer() (+12 more)

### Community 7 - "FilterState"
Cohesion: 0.24
Nodes (10): BirthdayFilterSection(), ClearButton(), parseYear(), Props, YearInput(), YearInputProps, YearRangeValue, DATE_PICKER_CLASSES (+2 more)

### Community 8 - "PositionFormFields.tsx"
Cohesion: 0.14
Nodes (31): PositionAssignmentFields(), PositionFormFields(), Props, createEmptyPositionRow(), EMPTY_POSITION_ROW, findTeamByName(), getPositionRowSummary(), getRoleOptions() (+23 more)

### Community 9 - "ThemeContext.tsx"
Cohesion: 0.10
Nodes (22): react-datepicker, metadata, nunito, RootLayout(), AuroraBackground(), darkTheme, DEFAULT_THEME, lightTheme (+14 more)

### Community 10 - "GSAP Plugins"
Cohesion: 0.05
Nodes (36): Best practices, CustomBounce, CustomEase, CustomWiggle, Development, Do Not, DOM / UI, Draggable (+28 more)

### Community 11 - "teamFrame.ts"
Cohesion: 0.07
Nodes (51): Types, elkjs, TEAM_COLUMN_GAP, TEAM_FRAME_GAP, TEAM_FRAME_HEADER, TEAM_FRAME_MIN_WIDTH, TEAM_FRAME_PADDING, TEAM_LAYOUT_COLUMNS (+43 more)

### Community 12 - "memberService.ts"
Cohesion: 0.13
Nodes (23): zod, adapter, prisma, buildMemberFields(), buildMemberUpdateFields(), buildSharedFields(), parsePhoneNumbers(), MEMBER_INCLUDE (+15 more)

### Community 13 - "Position"
Cohesion: 0.40
Nodes (5): Position, Bottom, Left, Right, Top

### Community 14 - "memberUpdateValidation.ts"
Cohesion: 0.14
Nodes (10): ExistingMember, findClearedFields(), MemberUpdateBody, memberUpdateBodySchema, parsePhones(), splitName(), completeMember, sparseMember (+2 more)

### Community 15 - "src/index.ts"
Cohesion: 0.13
Nodes (17): compression, cors, express, app, loadFamilyTree, router, router, router (+9 more)

### Community 16 - "FiltersPanel.tsx"
Cohesion: 0.21
Nodes (12): FilterCategory(), LION_GROUP_ICON, LION_ICON, Props, FilterGroupProps, RoleFilterSection(), TeamPeriodFilterSection(), TeamFilterCategory() (+4 more)

### Community 17 - "memberFormValidation.ts"
Cohesion: 0.15
Nodes (20): FieldError(), Props, SocialMediaFormFields(), CheckedField, getStoredFieldValues(), Links, StoredMemberValues, complete (+12 more)

### Community 18 - "TeamFrame"
Cohesion: 0.10
Nodes (22): zustand, EdgesLayer(), Props, View, MembersTreeScene(), Props, TEAM_OVERVIEW_EDGE_ALPHA, TEAM_OVERVIEW_NODE_ALPHA (+14 more)

### Community 19 - "catalogValidation.ts"
Cohesion: 0.08
Nodes (32): Renderer selection at runtime, [MEDIUM] Using container.name instead of container.label, deleteCloudinaryImage(), extractCloudinaryPublicId(), parsePositionsPayload(), TEAM_INCLUDE, router, uploadTeamIcon (+24 more)

### Community 20 - "MemberNode.tsx"
Cohesion: 0.06
Nodes (42): AVATAR_HIT_AREA, CULL_AREA, EMPTY_FILTERS, MemberNode(), NODE_HIT_AREA, Props, MemberNodeAvatar(), Props (+34 more)

### Community 21 - "MemberInfo.tsx"
Cohesion: 0.14
Nodes (19): next, MemberInfo(), Props, MemberInfoActionIcon(), MemberInfoCopy(), Props, MemberInfoRow(), Props (+11 more)

### Community 22 - "TeamFrame"
Cohesion: 0.19
Nodes (11): Props, TeamEdgesLayer(), Props, TeamFramesLayer(), Props, Props, TeamOverviewLayer(), Props (+3 more)

### Community 23 - "constants/filters.ts"
Cohesion: 0.23
Nodes (11): MemberFilterCategory(), ACTIVITY_OPTIONS, ACTIVITY_STATES, AVATAR_OPTIONS, EMPTY_FILTER_STATE, JOIN_SEASONS, MEMBER_STATUSES, SEASON_OPTIONS (+3 more)

### Community 24 - "teamService.ts"
Cohesion: 0.14
Nodes (26): getPositionKey(), ResolvedPosition, resolvePosition(), syncPositions(), deriveTeamName(), resolveRole(), resolveTeam(), resolveTeamType() (+18 more)

### Community 25 - "TeamInfo.tsx"
Cohesion: 0.24
Nodes (10): Props, RosterRow(), TeamInfo(), Props, TeamLogo(), TeamRosterEntry, formatYearRange(), getPositionPeriod() (+2 more)

### Community 26 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, esModuleInterop, forceConsistentCasingInFileNames, module, moduleResolution, noImplicitAny, outDir, paths (+12 more)

### Community 27 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+12 more)

### Community 28 - "MembersTreeContent.tsx"
Cohesion: 0.16
Nodes (20): EMPTY_IDS, SharpAvatarTracker(), Viewport(), ACCENT_COLOR_MAP, EVENT_FEATURES, MembersTreeContent(), Props, MemberSidebarContent() (+12 more)

### Community 29 - "DropdownOption"
Cohesion: 0.11
Nodes (23): react-dom, DropdownMenu(), Props, DropdownPortal(), Props, BadgeInput(), Props, BadgeInputField() (+15 more)

### Community 30 - "dependencies"
Cohesion: 0.11
Nodes (19): dependencies, date-fns, dotenv, elkjs, gsap, @gsap/react, @heroicons/react, lodash (+11 more)

### Community 31 - "server/package.json"
Cohesion: 0.06
Nodes (28): cloudinary, concurrently, multer, multer-storage-cloudinary, nodemon, @prisma/adapter-pg, @prisma/config, ts-node (+20 more)

### Community 32 - "migrateMembersFromMongodb.ts"
Cohesion: 0.18
Nodes (9): mongodb, ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember, STATUSES_MAP (+1 more)

### Community 33 - "MemberInfoSocial.tsx"
Cohesion: 0.20
Nodes (11): LionIcon(), Props, FacebookIcon(), InstagramIcon(), LinkedinIcon(), TelegramIcon(), Props, AvatarFileInput() (+3 more)

### Community 34 - "FilterState"
Cohesion: 0.15
Nodes (19): Props, CheckboxGroupFilterSection(), Option, Props, FilterCheckbox(), Props, FilterSection(), Props (+11 more)

### Community 35 - "MemberStatus"
Cohesion: 0.21
Nodes (9): FOUNDER_JOIN_YEAR, MEMBER_STATUSES, MENTOR_STATUSES, MemberStatus, Alumni, Baby, Full, Observer (+1 more)

### Community 36 - "package.json"
Cohesion: 0.11
Nodes (18): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+10 more)

### Community 37 - "Core Patterns"
Cohesion: 0.18
Nodes (14): Adding and removing children, Bounds and coordinate conversion, Constructor options, Container events, Core Patterns, Destroy, Finding and removing from parent, Leaves vs containers (+6 more)

### Community 38 - "filterSearchParams.ts"
Cohesion: 0.22
Nodes (11): Props, filtersToSearchParams(), parseCsvArray(), parseCsvStrings(), parseFiltersFromSearchParams(), parseNumberOrNull(), parseTreeMode(), serializeCsv() (+3 more)

### Community 39 - "useTreeLayout.ts"
Cohesion: 0.16
Nodes (22): gsap, NODE_HEIGHT, NODE_WIDTH, getFitViewTargetScale(), useFitViewAnimation(), useFocusFrameAnimation(), useFocusNodeAnimation(), useViewportAnimation() (+14 more)

### Community 40 - "Core Patterns"
Cohesion: 0.20
Nodes (10): Coordinate conversion, Core Patterns, Cumulative alpha (getGlobalAlpha), Global, local, and screen coordinates, Origin (new in v8), Pivot, Position, scale, rotation, Sizing via width, height, setSize (+2 more)

### Community 41 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+5 more)

### Community 42 - "devDependencies"
Cohesion: 0.14
Nodes (14): devDependencies, concurrently, nodemon, prisma, @prisma/config, ts-node, tsx, @types/compression (+6 more)

### Community 43 - "ApplicationOptions reference"
Cohesion: 0.06
Nodes (32): Accessibility, ApplicationOptions reference, Background, Culler (CullerPluginOptions), Deprecated (GC — prefer the unified options above), Events, Garbage collection, Graphics (+24 more)

### Community 44 - "Process"
Cohesion: 0.07
Nodes (25): 1. State the question, 2. Isolate the logic in a portable module, 3. Build the shareable HTML file, 4. Hand it over, 5. Capture the answer and the prototype, Anti-patterns, Logic Prototype, Process (+17 more)

### Community 45 - "Common Mistakes"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [CRITICAL] Adding children to leaf scene objects, [HIGH] Expecting getBounds() to return a Rectangle, [HIGH] Using cacheAsBitmap instead of cacheAsTexture, [MEDIUM] Setting both pivot and origin on the same container, Quick Start

### Community 46 - "cardVisibilityDriver.ts"
Cohesion: 0.29
Nodes (10): clamp01(), easeBackOut, easePower2In, easePower2Out, entries, Entry, finishCardReveal(), registerCardReveal() (+2 more)

### Community 47 - "useHoverNodeAnimation.ts"
Cohesion: 0.29
Nodes (8): pixi-filters, NODE_HOVER_ANIMATION_DURATION, NODE_HOVER_SCALE, ZOOMED_OUT_HOVER_SCALE_MAP, calculateTargetScale(), createShadowFilter(), Props, useHoverNodeAnimation()

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "ManageForm.tsx"
Cohesion: 0.22
Nodes (16): TeamInfoSidebar(), DropdownSelectInput(), ManageForm(), MemberMode, Section, SECTIONS, TEAM_KINDS, TeamKind (+8 more)

### Community 50 - "Bitmap fonts"
Cohesion: 0.10
Nodes (19): Accessing the BitmapFont instance, API Reference, Bitmap fonts, Common Mistakes, Family name derivation, Fonts, Forcing the font parser, [HIGH] Forgetting the bitmap-font import (+11 more)

### Community 52 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, dev, dev:webpack, lint, start, test, typecheck

### Community 53 - "MemberBirthdayAnimation.tsx"
Cohesion: 0.26
Nodes (10): pixi.js, BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props, acquireEmojiTextures(), createEmojiTexture(), generateRandomPosition() (+2 more)

### Community 54 - "BEST Family Tree"
Cohesion: 0.40
Nodes (4): BEST Family Tree, People, Teams, Views

### Community 58 - "Core Patterns"
Cohesion: 0.22
Nodes (9): Core Patterns, Deduping load calls, Inspecting the cache, Multiple keys at once, Synchronous access to already-loaded assets, Unloading, Unloading a bundle, Topics (+1 more)

### Community 59 - "Core Patterns"
Cohesion: 0.12
Nodes (17): Application destroy/recreate cycle, Batching optimization, cacheAsTexture for performance, Core Patterns, Culling, Filters and masks cost, Graphics performance, Low-level rendering optimizations (+9 more)

### Community 60 - "Core Patterns"
Cohesion: 0.12
Nodes (15): Animated GIFs, API Reference, Cleanup, Common Mistakes, Core Patterns, [CRITICAL] Missing the GIF import, Forcing the GIF parser, GifSprite options (+7 more)

### Community 61 - "Core Patterns"
Cohesion: 0.12
Nodes (15): API Reference, Combined resolution + format, Common Mistakes, Configuring preferences at init, Core Patterns, Custom retina prefix, Format patterns in src, [HIGH] Wrong pattern syntax (+7 more)

### Community 62 - "pixijs-assets/SKILL.md"
Cohesion: 0.12
Nodes (15): API Reference, Common Mistakes, [CRITICAL] Using `Texture.from(url)` to load, `data` options (per asset), Decision guide, Forcing a parser with `parser`, [HIGH] Not unloading textures between levels, [HIGH] Using positional `Assets.add` signature (+7 more)

### Community 63 - "Core Patterns"
Cohesion: 0.12
Nodes (15): API Reference, Common Mistakes, Constructing from an existing BitmapText, Construction, Core Patterns, [HIGH] Using SplitBitmapText without a BitmapFont, [MEDIUM] Expecting CJK or emoji support, [MEDIUM] Missing glyphs silently dropped (+7 more)

### Community 64 - "Core Patterns"
Cohesion: 0.12
Nodes (15): Animating per character, API Reference, Auto-split on change, Common Mistakes, Constructing from an existing Text, Construction, Core Patterns, [HIGH] Many SplitText instances with long strings (+7 more)

### Community 65 - "BEST Family Tree"
Cohesion: 0.12
Nodes (15): 1. Clone and configure environment, 2. Start the application, 3. Run database migrations, 4. Access the app, Architecture, Available Commands, Backend Commands (run inside container), BEST Family Tree (+7 more)

### Community 66 - "Diagnosing Bugs"
Cohesion: 0.13
Nodes (14): Completion criterion: a tight loop that goes red, Diagnosing Bugs, Minimise, Non-deterministic bugs, Phase 1: Build a feedback loop, Phase 2: Reproduce + minimise, Phase 3: Hypothesise, Phase 4: Instrument (+6 more)

### Community 67 - "Core Patterns"
Cohesion: 0.13
Nodes (14): API Reference, Background-loading from a manifest, Common Mistakes, Core Patterns, Data options in manifest entries, Format and resolution patterns in manifests, [HIGH] Calling `Assets.init` twice, Inline manifest object (+6 more)

### Community 68 - "Core Patterns"
Cohesion: 0.13
Nodes (14): API Reference, Common Mistakes, Core Patterns, Global default, Graphics mode, [HIGH] Expecting scalability in texture mode, [MEDIUM] CSS in `<style>` elements, [MEDIUM] External references in SVG files (+6 more)

### Community 69 - "Core Patterns"
Cohesion: 0.13
Nodes (14): API Reference, Common Mistakes, Core Patterns, Forcing the video parser, Format fallback, [HIGH] Autoplay without mute on mobile, Load options via `data`, Manual playback control (+6 more)

### Community 70 - "Common Mistakes"
Cohesion: 0.13
Nodes (13): Advanced blend modes, API Reference, Built-in filters, Common Mistakes, Community filters (pixi-filters), Core Patterns, [CRITICAL] Using old Filter constructor (vertex, fragment, uniforms), Filter options (+5 more)

### Community 71 - "Core Patterns"
Cohesion: 0.13
Nodes (14): API Reference, boundsArea optimization, Common Mistakes, Core Patterns, Culling, HIGH: Expecting automatic culling, HIGH: Using addChild on RenderLayer, MEDIUM: Expecting filters on ancestors to apply to layer children (+6 more)

### Community 72 - "Core Patterns"
Cohesion: 0.13
Nodes (14): Advanced shape primitives, Core Patterns, Default styles via setFillStyle / setStrokeStyle, Draw-time transforms, Drawing a texture directly, Gradients and patterns, GraphicsContext sharing, GraphicsContext utilities (+6 more)

### Community 74 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, Background Loading, Background-loading a bundle, Background-loading a single asset, Background-loading an array, Combining with a progress bar, Common Mistakes, Core Patterns (+5 more)

### Community 75 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, Bundle IDs, Bundles, Common Mistakes, Core Patterns, [HIGH] Unloading while assets are still in use, Loading multiple bundles at once, [MEDIUM] Confusing `addBundle` and `init` manifests (+5 more)

### Community 76 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, Async decoding, Common Mistakes, Compressed Textures, Core Patterns, [CRITICAL] Missing the format import, Format imports, Format selection matrix (+5 more)

### Community 77 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, Common Mistakes, Core Patterns, Global progress across multiple loads, [HIGH] Treating progress callback as completion, [MEDIUM] Progress not updating smoothly, [MEDIUM] Progress via background loading, Progress on a bundle (+5 more)

### Community 78 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, attach / detach, Common Mistakes, Core Patterns, [CRITICAL] Using `addChild` on a RenderLayer, [HIGH] Layer and attached children in different render groups, Layer + logical parent, Manual sort (+5 more)

### Community 79 - "Core Patterns"
Cohesion: 0.14
Nodes (13): Alpha mask (Sprite-based), API Reference, Common Mistakes, Core Patterns, [HIGH] Using cacheAsTexture with masks, Inverse masking, Mask channel selection, Mask type selection (+5 more)

### Community 80 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, Common Mistakes, Construction options, Core Patterns, [HIGH] Nesting many render groups, [MEDIUM] Constantly adding/removing from a render group, [MEDIUM] Overusing render groups, Profile before adding (+5 more)

### Community 81 - "gsap.utils"
Cohesion: 0.07
Nodes (26): Arrays and Collections, Best practices, clamp(min, max, value?), Clamping and Ranges, distribute(config), Do Not, getUnit(value), gsap.utils (+18 more)

### Community 82 - "@pixi/react"
Cohesion: 0.14
Nodes (12): @pixi/react, PixiElements, @gsap/react, @pixi/react, pixi-viewport, MembersTree(), Props, CloudinaryTransformations (+4 more)

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

### Community 88 - "Core Patterns"
Cohesion: 0.17
Nodes (12): Constants, Coordinate transforms via Container, Core Patterns, Geometry utility functions, math-extras (side-effect import), Matrix (2D affine transform), Point and ObservablePoint, Point / ObservablePoint vector methods (+4 more)

### Community 89 - "Scene Objects"
Cohesion: 0.17
Nodes (11): pixijs-html-source, pixijs-scene-container, pixijs-scene-dom-container, pixijs-scene-gif, pixijs-scene-graphics, pixijs-scene-mesh, pixijs-scene-particle-container, pixijs-scene-sprite (+3 more)

### Community 90 - "pixijs-scene-text/SKILL.md"
Cohesion: 0.17
Nodes (11): API Reference, Common Mistakes, [HIGH] Not importing `pixi.js/text-bitmap` in custom builds, [HIGH] Positional constructor args, [HIGH] Updating `Text.text` every frame, [MEDIUM] Adding children to a text instance, Quick concepts, Quick Start (+3 more)

### Community 91 - "pixijs/SKILL.md"
Cohesion: 0.18
Nodes (9): API Reference, Quick Start, Advanced, Fallback: canonical PixiJS docs, Foundations, How to use this skill, Scene Objects, Skill router (+1 more)

### Community 92 - "Core Concepts"
Cohesion: 0.18
Nodes (11): Container vs leaf (CRITICAL), Core Concepts, Culling, Destroy semantics, Lifecycle events, Masking, Render groups, Render order and explicit z-ordering (+3 more)

### Community 93 - "BitmapText"
Cohesion: 0.18
Nodes (10): API Reference, BitmapText, BitmapTextOptions, Common Mistakes, Construction, [HIGH] Not importing `pixi.js/text-bitmap` in custom builds, [HIGH] Using BitmapText for CJK or emoji-heavy content, [MEDIUM] Missing characters silently dropped (+2 more)

### Community 94 - "Core Patterns"
Cohesion: 0.20
Nodes (10): Accepted input formats, Color.shared for temporary operations, Component access, Conversion methods, Core Patterns, Manipulation, Non-destructive premultiplied output, Packing for GPU buffers (+2 more)

### Community 95 - "Common Mistakes"
Cohesion: 0.20
Nodes (10): Common Mistakes, [CRITICAL] App destroy without releaseGlobalResources, [HIGH] Destroying and recreating objects instead of recycling, [HIGH] Interleaving object types in scene graph, [HIGH] Loading many individual textures instead of spritesheets, [HIGH] Updating Text or HTMLText every frame, [HIGH] Using complex Graphics instead of textures, [MEDIUM] Not staggering bulk texture destruction (+2 more)

### Community 96 - "Core Patterns"
Cohesion: 0.20
Nodes (10): AnimatedSpriteOptions, Auto update, Callbacks, Construction, Core Patterns, Factories, Per-frame timing, Playback control (+2 more)

### Community 97 - "NineSliceSprite"
Cohesion: 0.20
Nodes (9): API Reference, Common Mistakes, Construction, [HIGH] Setting `texture.scale` to resize the panel, [HIGH] Using the old `NineSlicePlane` name, [MEDIUM] Borders larger than half the texture, NineSliceSprite, NineSliceSpriteOptions (+1 more)

### Community 98 - "TilingSprite"
Cohesion: 0.20
Nodes (9): API Reference, Common Mistakes, Construction, [HIGH] Forgetting to pass a texture, [HIGH] Scaling the sprite instead of the tile, [MEDIUM] Non-power-of-two textures with `tileScale`, Quick Start, TilingSprite (+1 more)

### Community 99 - "Core Patterns"
Cohesion: 0.20
Nodes (10): Anchor on the tiling region, `applyAnchorToTexture`, Core Patterns, Global defaults, Hit testing, Parallax layers, Resizing the tiling region, Round pixels (+2 more)

### Community 100 - "HTMLText"
Cohesion: 0.20
Nodes (9): API Reference, Common Mistakes, Construction, [HIGH] Missing CORS headers on fonts, [HIGH] Updating HTMLText content every frame, HTMLText, HTMLTextOptions, [MEDIUM] Expecting HTMLText frame on creation (+1 more)

### Community 101 - "Text (Canvas Text)"
Cohesion: 0.20
Nodes (9): API Reference, CanvasTextOptions, Common Mistakes, Construction, [HIGH] Updating Text content every frame, [HIGH] Using positional constructor args, [MEDIUM] Stroke or shadow getting clipped at edges, Quick Start (+1 more)

### Community 102 - "Render Loop"
Cohesion: 0.22
Nodes (8): API Reference, Common Mistakes, [CRITICAL] Treating the ticker callback arg as a number, Frame lifecycle, [HIGH] Using `updateTransform` for per-frame logic, [MEDIUM] Assuming ticker callbacks run after render, Quick Start, Render Loop

### Community 103 - "pixijs-core-concepts/SKILL.md"
Cohesion: 0.22
Nodes (8): API Reference, Decision guide, Environments, Quick concepts, Quick Start, Renderer = systems + pipes, The render loop, Topics

### Community 104 - "Core Patterns"
Cohesion: 0.22
Nodes (9): Add, remove, swap, Child queries, Core Patterns, Destroying sub-trees, Iterating children, Label-based tree navigation, Lifecycle events, Reparenting with transform preservation (+1 more)

### Community 105 - "Common Mistakes"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, Constructor options, [CRITICAL] Using lineStyle instead of stroke, [CRITICAL] Using old shape method names, [CRITICAL] Using v7 beginFill/drawRect/endFill, [HIGH] Clearing and redrawing Graphics every frame, [HIGH] Destroying a shared GraphicsContext unexpectedly (+4 more)

### Community 106 - "AnimatedSprite"
Cohesion: 0.22
Nodes (8): AnimatedSprite, API Reference, Common Mistakes, [HIGH] Forgetting to call `play()` or set `autoPlay`, [HIGH] Using `Texture.from` on unloaded frames, [MEDIUM] Setting `currentFrame` out of range, [MEDIUM] Using seconds instead of milliseconds for `FrameObject.time`, Quick Start

### Community 107 - "Core Patterns"
Cohesion: 0.22
Nodes (9): Anchor, Construction, Core Patterns, Dynamic textures, Round pixels, Sizing helpers, SpriteOptions, Tint and alpha (+1 more)

### Community 108 - "pixijs-scene-sprite/SKILL.md"
Cohesion: 0.22
Nodes (8): Anchor vs pivot, API Reference, Dynamic textures, Loading before creating, Quick concepts, Quick Start, Variants, When to use what

### Community 109 - "useTeamForm.ts"
Cohesion: 0.22
Nodes (17): createTeam(), deleteTeam(), fetchTeamDetails(), parse(), setTeamMembers(), TeamMemberPayload, updateTeam(), buildTeamRequestBody() (+9 more)

### Community 110 - "transformMembersToTree.ts"
Cohesion: 0.35
Nodes (9): MemberMetrics, TreeCache, TreeNode, calculateMemberMetrics(), calculateSubtreeDepth(), calculateSubtreeSize(), centerSingleSubtree(), distributeSubtrees() (+1 more)

### Community 111 - "Process"
Cohesion: 0.25
Nodes (7): 1. Pin the fixed point, 2. Identify the spec source, 3. Identify the standards sources, 4. Spawn both sub-agents in parallel, 5. Aggregate, Process, Why two axes

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

### Community 113 - "pixijs-events/SKILL.md"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] buttonMode removed; use cursor, [HIGH] Default eventMode is passive, [HIGH] Move events only fire over the object in v8, [MEDIUM] Cursor does not inherit from parent, Quick Start

### Community 114 - "pixijs-math/SKILL.md"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, HIGH: Importing from @pixi/math, MEDIUM: Mutating ObservablePoint without triggering observer, MEDIUM: Not importing math-extras for extended methods, MEDIUM: Storing references to shared/temporary objects, Quick Start

### Community 115 - "Utilities"
Cohesion: 0.14
Nodes (13): Advanced, pixijs-accessibility, pixijs-assets, pixijs-blend-modes, pixijs-color, pixijs-custom-rendering, pixijs-events, pixijs-filters (+5 more)

### Community 116 - "pixijs-scene-core-concepts/SKILL.md"
Cohesion: 0.25
Nodes (6): API Reference, Leaf comparison: which skill covers which object, Quick Start, References, Tooling, When to use what (quick decisions)

### Community 117 - "Container Hierarchy"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, Container Hierarchy, [CRITICAL] Adding children to a leaf, [HIGH] Destroying the parent without `children: true`, [MEDIUM] Mutating `children` during iteration, Quick Start

### Community 118 - "Core Patterns"
Cohesion: 0.25
Nodes (8): Border updates, Core Patterns, Global defaults, Round pixels for crisp borders, Runtime resize, Source texture dimensions, Texture-defined borders, The 9-slice grid

### Community 119 - "Sprite"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Confusing anchor with pivot, [HIGH] Using `Texture.from(url)` to load, [MEDIUM] Adding children to a Sprite, Quick Start, Sprite

### Community 120 - "Core Patterns"
Cohesion: 0.25
Nodes (8): Core Patterns, Dynamic fonts (system font -> runtime atlas), Install options, Loaded bitmap fonts (FNT / XML), MSDF / SDF fonts for crisp scaling, Pre-installed fonts, Updating content, Word wrap

### Community 121 - "Core Patterns"
Cohesion: 0.25
Nodes (8): Core Patterns, Dynamic content, Font loading, Gradient and pattern fills, Resolution and mipmaps, Sharing a TextStyle across instances, Tagged text, TextStyle properties

### Community 122 - "GSAP ScrollTrigger"
Cohesion: 0.12
Nodes (14): Basic Trigger, Do Not, GSAP ScrollTrigger, Horizontal scroll (containerAnimation), Key config options, Learn More, Markers (Development), Official GSAP best practices (+6 more)

### Community 123 - "fetchFamilyTree"
Cohesion: 0.48
Nodes (4): Home(), MembersTreeDynamic, Props, Spinner()

### Community 124 - "Core Patterns"
Cohesion: 0.29
Nodes (7): Core Patterns, Frame rate capping, Manual rendering, Per-object update via `onRender`, Priority order, Stop and start, Time units

### Community 125 - "Foundations"
Cohesion: 0.29
Nodes (7): Foundations, pixijs-application, pixijs-core-concepts, pixijs-create, pixijs-environments, pixijs-migration-v8, pixijs-scene-core-concepts

### Community 126 - "Caching"
Cohesion: 0.25
Nodes (7): API Reference, Caching, Common Mistakes, [CRITICAL] Using `Assets.get` before `Assets.load`, [HIGH] Not unloading between levels, [MEDIUM] Using sprites after unload, Quick Start

### Community 127 - "membersStore.ts"
Cohesion: 0.05
Nodes (58): LineageEdge(), Props, DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN, MIN_ANIM_DURATION, PATTERN_LEN (+50 more)

### Community 128 - "Core Patterns"
Cohesion: 0.33
Nodes (6): Async rendering, Core Patterns, Custom tags via `tagStyles`, Raw CSS overrides, Resolution and mipmaps, Word wrap

### Community 129 - "GSAP with React"
Cohesion: 0.15
Nodes (12): Best practices, Context-Safe Callbacks, Dependency array, scope, and revertOnUpdate, Do Not, gsap.context() in useEffect (when useGSAP isn't used), GSAP with React, Installation, Learn More (+4 more)

### Community 130 - "Common Mistakes"
Cohesion: 0.40
Nodes (5): Common Mistakes, [HIGH] Confusing anchor and pivot, [HIGH] Old `NineSlicePlane` name, [HIGH] Using `Texture.from(url)` to load, [MEDIUM] Adding children to a sprite

### Community 131 - "react"
Cohesion: 0.09
Nodes (21): date-fns, react, Props, NodesLayer(), Props, Props, Props, Props (+13 more)

### Community 132 - "hitl-loop.template.sh"
Cohesion: 0.83
Nodes (3): capture(), hitl-loop.template.sh script, step()

### Community 133 - "Common Mistakes"
Cohesion: 0.50
Nodes (4): Common Mistakes, [HIGH] Accessing app.renderer before init() resolves, [HIGH] Setting DOMAdapter after Application.init, [MEDIUM] Treating `preference` as a guarantee

### Community 134 - "Transforms and Coordinate Spaces"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Setting scale to 0, [MEDIUM] Confusing anchor and pivot, [MEDIUM] Reading world transform before first render, Quick Start, Transforms and Coordinate Spaces

### Community 135 - "Core Patterns"
Cohesion: 0.15
Nodes (12): API Reference, Cleanup, Common Mistakes, Core Patterns, [HIGH] Spritesheet meta.scale behavior change, Manual Spritesheet creation, [MEDIUM] Not awaiting spritesheet parse, Multi-pack spritesheets (+4 more)

### Community 137 - "GSAP Performance"
Cohesion: 0.17
Nodes (11): Batch Reads and Writes, Best practices, Do Not, Frequently updated properties (e.g. mouse followers), GSAP Performance, Many Elements (Stagger, Lists), Prefer Transform and Opacity, Reduce Simultaneous Work (+3 more)

### Community 138 - "GSAP Timeline"
Cohesion: 0.17
Nodes (11): Controlling Playback, Creating a Timeline, Do Not, GSAP Timeline, Labels, Nesting Timelines, Official GSAP Best practices, Position Parameter (+3 more)

### Community 139 - "teamFrame.ts"
Cohesion: 0.08
Nodes (39): MemberNodeCard(), Props, TeamBadge(), TEAM_EDGE_DROP, TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_SPREAD_WIDTH, TEAM_EDGE_START_Y, TEAM_FRAME_RADIUS (+31 more)

### Community 140 - "dependencies"
Cohesion: 0.09
Nodes (21): dependencies, cloudinary, compression, cors, dotenv, express, mongodb, multer (+13 more)

### Community 141 - "pixijs-color/SKILL.md"
Cohesion: 0.29
Nodes (6): API Reference, Common Mistakes, [MEDIUM] Expecting toRgba() to return 0-255 values, [MEDIUM] Using 0-255 range in color arrays, [MEDIUM] Using utils.string2hex or utils.hex2string, Quick Start

### Community 142 - "filterMembers.ts"
Cohesion: 0.19
Nodes (18): AVATAR_VALUES, matchesAvatar(), matchesBirthday(), matchesJoinSeason(), matchesJoinYear(), memberMatchesFilters(), parseDateStr(), toDateVal() (+10 more)

### Community 143 - "useTeamTypeForm.ts"
Cohesion: 0.38
Nodes (6): Props, EMPTY_FORM, TeamTypeFormMode, toFormData(), useTeamTypeForm(), TeamTypeFormData

### Community 144 - "transformMembersToTree.ts"
Cohesion: 0.43
Nodes (5): Member, MembersByMentorId, buildTree(), flattenTree(), transformMembersToTree()

### Community 145 - "Common Mistakes"
Cohesion: 0.33
Nodes (6): Common Mistakes, [CRITICAL] Adding children to a leaf display object, [CRITICAL] Referencing DisplayObject, [HIGH] Forgetting isRenderGroup on large static subtrees, [HIGH] Treating child.x as world space, [MEDIUM] sortableChildren without zIndex

### Community 146 - "ActivityState"
Cohesion: 0.50
Nodes (4): ActivityState, Active, Excluded, Inactive

## Knowledge Gaps
- **40 isolated node(s):** `@prisma/client`, `dotenv`, `lodash`, `@tailwindcss/postcss`, `@types/lodash` (+35 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1129 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Point` connect `teamFrame.ts` to `useTreeLayout.ts`, `teamFrame.ts`, `TeamFrame`, `Utilities`, `pixijs/SKILL.md`, `membersStore.ts`?**
  _High betweenness centrality (0.205) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _40 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `http` be split into smaller, more focused modules?**
  _Cohesion score 0.1495798319327731 - nodes in this community are weakly interconnected._
- **Why does `Utilities` connect `pixijs/SKILL.md` to `teamFrame.ts`?**
  _High betweenness centrality (0.198) - this node is a cross-community bridge._
- **Should `filtersStore.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.061952074810052604 - nodes in this community are weakly interconnected._
- **Should `src/types/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.11070780399274047 - nodes in this community are weakly interconnected._
- **Should `TeamFrame.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14492753623188406 - nodes in this community are weakly interconnected._