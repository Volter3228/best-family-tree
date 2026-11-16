# Graph Report - best-family-tree  (2026-11-16)

## Corpus Check
- 582 files · ~184,822 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 29 file(s) not represented in the graph (top: .prisma 9, (none) 7, .css 6)

## Summary
- 2859 nodes · 7386 edges · 122 communities (113 shown, 9 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 84 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `15cc7254`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- eligibility.ts
- MemberBirthdayAnimation.tsx
- sessions.ts
- models/index.ts
- constants/canvas/index.ts
- constants/canvas/index.ts
- layout.tsx
- useTeamForm.ts
- TeamFormContent.tsx
- teamLayout.ts
- teamFrame.ts
- DatesPane.tsx
- anonymizeDemo.ts
- dimensions.ts
- backfillGender.ts
- pixi.js
- EditMemberForm.tsx
- MembersTreeContent.tsx
- TeamFrame
- catalogValidation.ts
- ref_vitest
- HTML Report Format
- utils/membersTree/index.ts
- SettingsPanel.tsx
- teamService.ts
- pixi.js
- compilerOptions
- compilerOptions
- ManageForm.tsx
- filterMembers.ts
- dependencies
- server/package.json
- mailer/index.ts
- Common Mistakes
- BirthdayFilterSection.tsx
- Common Mistakes
- package.json
- contactKeys.ts
- positionFormUtils.ts
- utils/membersTree/index.ts
- Core Patterns
- devDependencies
- Member
- Core Patterns
- CLAUDE.md
- Container Hierarchy
- ApplicationOptions reference
- useTreeLayout.ts
- During the session
- MemberSidebar.tsx
- ThemeContext.tsx
- AGENTS.md
- scripts
- pixijs-events/SKILL.md
- BEST Family Tree
- next.config.mjs
- postcss.config.mjs
- devDependencies
- MemberInfoActions.tsx
- Core Patterns
- emailCodes.ts
- checkConfig.ts
- src/index.ts
- AvatarFileInput.tsx
- memberUpdateValidation.ts
- BEST Family Tree
- Diagnosing Bugs
- memberFormValidation.ts
- mime.ts
- access.ts
- Toolbar.tsx
- Core Patterns
- Core Patterns
- dependencies
- scripts
- TeamSearch.tsx
- fakeIdentity.ts
- Transforms and Coordinate Spaces
- Core Patterns
- Core Patterns
- Core Patterns
- MemberPane.tsx
- ref_vitest
- Core Patterns
- Constructor options (Container-inherited)
- Test-Driven Development
- GSAP Core
- Core Patterns
- aiFaces.ts
- Foundations
- Sidebar.tsx
- Core Concepts
- FitViewButton.tsx
- DropdownPortal.tsx
- backup-prod.sh
- start-prod.sh
- restore-local.sh
- react
- src/types/index.ts
- Render Loop
- pixijs-core-concepts/SKILL.md
- TeamInfoSidebar.tsx
- Member
- ref_vitest
- auth.ts
- PhotoViewer.tsx
- server/src/types/index.ts
- Renderers: WebGPU, WebGL, and Canvas
- Core Patterns
- useMembersStore
- Common Mistakes
- pixijs-scene-core-concepts/SKILL.md
- Core Patterns
- Common Mistakes
- useCardAnimation.ts
- GSAP with React
- hitl-loop.template.sh
- GSAP Performance
- GSAP Timeline

## God Nodes (most connected - your core abstractions)
1. `react` - 136 edges
2. `AccentColor` - 129 edges
3. `tailwind-merge` - 74 edges
4. `Member` - 70 edges
5. `COLOR_CLASSES` - 46 edges
6. `TeamFrame` - 40 edges
7. `@heroicons/react` - 38 edges
8. `pixi.js` - 38 edges
9. `FilterState` - 38 edges
10. `useTreeStore` - 32 edges

## Surprising Connections (you probably didn't know these)
- `pixijs-scene-container` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs/references/index.md → src/hooks/membersTree/animations/useFitViewAnimation.ts
- `Constructor options` --references--> `filters()`  [INFERRED]
  .agents/skills/pixijs-scene-graphics/SKILL.md → src/utils/filters/filterMembers.test.ts
- `Finding and removing from parent` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs-scene-container/SKILL.md → src/hooks/membersTree/animations/useFitViewAnimation.ts
- `Transform properties` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs-scene-container/SKILL.md → src/hooks/membersTree/animations/useFitViewAnimation.ts
- `Constructor options` --references--> `origin()`  [INFERRED]
  .agents/skills/pixijs-scene-container/SKILL.md → src/server/src/auth/oidc.ts

## Import Cycles
- 3-file cycle: `src/utils/index.ts -> src/utils/membersTree/index.ts -> src/utils/membersTree/lineageEdgePath.ts -> src/utils/index.ts`
- 4-file cycle: `src/context/ThemeContext.tsx -> src/hooks/index.ts -> src/hooks/membersTree/index.ts -> src/hooks/membersTree/useCanvasTheme.ts -> src/context/ThemeContext.tsx`
- 4-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/members.ts -> src/models/index.ts -> src/models/Member.ts`
- 4-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/tree.ts -> src/models/index.ts -> src/models/Member.ts`
- 5-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/filters.ts -> src/types/members.ts -> src/models/index.ts -> src/models/Member.ts`

## Communities (122 total, 9 thin omitted)

### Community 0 - "eligibility.ts"
Cohesion: 0.15
Nodes (18): EligibilityMember, EmailIdentity, MemberMatch, normalizeEmail(), resolveEmailIdentity(), resolveMemberMatch(), loadEmailIdentity(), prismaCodeStore (+10 more)

### Community 1 - "MemberBirthdayAnimation.tsx"
Cohesion: 0.27
Nodes (10): BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props, acquireEmojiTextures(), createEmojiTexture(), generateRandomPosition(), releaseEmojiTextures() (+2 more)

### Community 2 - "sessions.ts"
Cohesion: 0.07
Nodes (54): openid-client, authSecret(), isDemoMode(), isProduction(), SESSION_COOKIE, SESSION_TTL_MS, SIGN_IN_COOKIE, useSecureCookie() (+46 more)

### Community 3 - "models/index.ts"
Cohesion: 0.18
Nodes (13): changesStructure(), EMPTY_INDEX, isSamePosition(), MembersState, withIndex(), ChildrenMap, MembersMap, MentorsListItem (+5 more)

### Community 4 - "constants/canvas/index.ts"
Cohesion: 0.12
Nodes (21): FONT_FAMILY, NODE_SUBTITLE_STYLE, NODE_TITLE_STYLE, NODE_TOOLTIP_TEXT_STYLE, TEXT_RESOLUTION, ThemeContext, ThemeContextValue, buildCanvasColors() (+13 more)

### Community 5 - "constants/canvas/index.ts"
Cohesion: 0.13
Nodes (17): lineageEdgePath, ACCIDENTAL_DRAG_MAX_DISTANCE, ACCIDENTAL_DRAG_MAX_MS, LONG_PRESS_MS, TAP_MOVE_TOLERANCE, TEAM_EDGE_DROP, TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_SPREAD_WIDTH (+9 more)

### Community 6 - "layout.tsx"
Cohesion: 0.05
Nodes (41): react-datepicker, metadata, nunito, RootLayout(), AuroraBackground(), darkTheme, DEFAULT_THEME, lightTheme (+33 more)

### Community 7 - "useTeamForm.ts"
Cohesion: 0.07
Nodes (54): addMember(), ApiError, toApiError(), editMember(), FamilyGroupOption, fetchFamilyGroups(), fetchFamilyTree(), fetchMemberById() (+46 more)

### Community 8 - "TeamFormContent.tsx"
Cohesion: 0.11
Nodes (29): ClearButton(), Props, SubmitButton(), ConfirmDeleteControl(), Props, getRoleOptions(), getTeamTypeOptions(), FormFooter() (+21 more)

### Community 9 - "teamLayout.ts"
Cohesion: 0.06
Nodes (55): elkjs, NodesLayer(), TEAM_COLUMN_GAP, TEAM_FRAME_GAP, TEAM_FRAME_HEADER, TEAM_FRAME_MIN_WIDTH, TEAM_FRAME_PADDING, TEAM_LAYOUT_COLUMNS (+47 more)

### Community 10 - "teamFrame.ts"
Cohesion: 0.09
Nodes (46): @pixi/react, TeamBadge(), FILL_ALPHA, lerp(), STROKE_ALPHA, TeamFrame(), TeamOverviewLabel(), TeamOverviewLayer() (+38 more)

### Community 11 - "DatesPane.tsx"
Cohesion: 0.26
Nodes (9): FlowerIcon(), Props, MapleLeafIcon(), Props, Placement, PLACEMENTS, Props, SeasonMotif() (+1 more)

### Community 12 - "anonymizeDemo.ts"
Cohesion: 0.14
Nodes (18): allowed, args, byId, factory, GROUP_NAMES, memberPhotos, nextFace, real (+10 more)

### Community 13 - "dimensions.ts"
Cohesion: 0.14
Nodes (18): EMPTY_IDS, SharpAvatarTracker(), View, Props, AVATAR_LOW_RES_SIZE, BIRTHDAY_ANIMATION_MIN_SCALE, GRID_GAP_X, GRID_LR_COLUMNS (+10 more)

### Community 14 - "backfillGender.ts"
Cohesion: 0.12
Nodes (15): alreadyDifferent, alreadySame, APPLY, args, duplicates, fileArg, Gender, GENDERS (+7 more)

### Community 15 - "pixi.js"
Cohesion: 0.07
Nodes (36): contexts, getCardBackgroundContext(), getGlowTexture(), GLOW_BLUR, GLOW_PADDING, GlowKind, paint(), SIZES (+28 more)

### Community 16 - "EditMemberForm.tsx"
Cohesion: 0.13
Nodes (32): deleteMember(), AddMemberForm(), buildMemberFormData(), describeSubmitError(), EditMemberForm(), Props, buildEditPayload(), getInitialFormData() (+24 more)

### Community 17 - "MembersTreeContent.tsx"
Cohesion: 0.30
Nodes (9): EVENT_FEATURES, MembersTreeContent(), ViewportCulling(), useFilterSearchParams(), useSyncMembers(), useTeamSelection(), useViewportCulling(), getMemberById() (+1 more)

### Community 18 - "TeamFrame"
Cohesion: 0.11
Nodes (24): Props, Props, Props, MembersTreeScene(), Props, FIXED_EDGE_WIDTH, TEAM_OVERVIEW_EDGE_ALPHA, TEAM_OVERVIEW_NODE_ALPHA (+16 more)

### Community 19 - "catalogValidation.ts"
Cohesion: 0.12
Nodes (19): Renderer selection at runtime, [MEDIUM] Using container.name instead of container.label, booleanLike, isValidPeriod(), name(), optional(), optionalName(), PERIOD_ERROR (+11 more)

### Community 20 - "ref_vitest"
Cohesion: 0.09
Nodes (28): express-rate-limit, answerMatches(), CYRILLIC_TO_LATIN, normalizeAnswer(), ChallengeState, isExpired(), isSolved(), pickRandom() (+20 more)

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "utils/membersTree/index.ts"
Cohesion: 0.12
Nodes (28): LineageEdge(), DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN, MIN_ANIM_DURATION, PATTERN_LEN, RETRACT_BASE (+20 more)

### Community 23 - "SettingsPanel.tsx"
Cohesion: 0.15
Nodes (12): FamilyTreeIcon(), Props, EDGE_STYLE_OPTIONS, iconClass, ORIENTATION_OPTIONS, THEME_OPTIONS, TREE_MODE_OPTIONS, Props (+4 more)

### Community 24 - "teamService.ts"
Cohesion: 0.08
Nodes (52): buildMemberFields(), buildMemberUpdateFields(), buildSharedFields(), buildSparseMemberFields(), parsePhoneNumbers(), parsePositionsPayload(), getPositionKey(), ResolvedPosition (+44 more)

### Community 25 - "pixi.js"
Cohesion: 0.11
Nodes (15): @pixi/react, PixiElements, pixi.js, pixi-viewport, MemberNodeAvatar(), Props, AVATAR_HIGH_RES_SIZE, CIRCLE_TEXTURE_SRC (+7 more)

### Community 26 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, esModuleInterop, forceConsistentCasingInFileNames, module, moduleResolution, noImplicitAny, outDir, paths (+12 more)

### Community 27 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+12 more)

### Community 28 - "ManageForm.tsx"
Cohesion: 0.15
Nodes (19): GENDER_OPTIONS, GenderFormField(), DropdownSelectInput(), ManageForm(), MemberMode, Section, SECTIONS, TEAM_KINDS (+11 more)

### Community 29 - "filterMembers.ts"
Cohesion: 0.11
Nodes (36): derive(), areSetsEqual(), computeFilteredMembers(), Source, birthdayBoundKey(), countActiveMemberFilters(), isFilterActive(), isIdListSet() (+28 more)

### Community 30 - "dependencies"
Cohesion: 0.11
Nodes (19): dependencies, date-fns, dotenv, elkjs, gsap, @gsap/react, @heroicons/react, lodash (+11 more)

### Community 31 - "server/package.json"
Cohesion: 0.06
Nodes (30): cloudinary, concurrently, cors, helmet, nodemon, @prisma/adapter-pg, @prisma/config, ts-node (+22 more)

### Community 32 - "mailer/index.ts"
Cohesion: 0.23
Nodes (9): consoleMailer, createGmailMailer(), GmailConfig, toBase64Url(), createResendMailer(), ResendConfig, message, Mailer (+1 more)

### Community 33 - "Common Mistakes"
Cohesion: 0.10
Nodes (19): API Reference, Common Mistakes, [CRITICAL] App destroy without releaseGlobalResources, [HIGH] Destroying and recreating objects instead of recycling, [HIGH] Interleaving object types in scene graph, [HIGH] Loading many individual textures instead of spritesheets, [HIGH] Updating Text or HTMLText every frame, [HIGH] Using complex Graphics instead of textures (+11 more)

### Community 34 - "BirthdayFilterSection.tsx"
Cohesion: 0.08
Nodes (37): TeamsPane(), BirthdayFilterSection(), Props, CheckBox(), Props, byLabel(), CheckOption, Props (+29 more)

### Community 35 - "Common Mistakes"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, Constructor options, [CRITICAL] Using lineStyle instead of stroke, [CRITICAL] Using old shape method names, [CRITICAL] Using v7 beginFill/drawRect/endFill, [HIGH] Clearing and redrawing Graphics every frame, [HIGH] Destroying a shared GraphicsContext unexpectedly (+4 more)

### Community 36 - "package.json"
Cohesion: 0.10
Nodes (20): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+12 more)

### Community 37 - "contactKeys.ts"
Cohesion: 0.20
Nodes (10): duplicates, fields, groups, ContactFields, contactKey(), ContactPlatform, FIELD_PLATFORMS, findContactCollision() (+2 more)

### Community 38 - "positionFormUtils.ts"
Cohesion: 0.10
Nodes (34): DropdownMenu(), DropdownPortal(), PositionAssignmentFields(), Props, createEmptyPositionRow(), EMPTY_POSITION_ROW, findTeamByName(), getPositionRowSummary() (+26 more)

### Community 39 - "utils/membersTree/index.ts"
Cohesion: 0.11
Nodes (33): EdgesLayer(), drawLerped(), drawPolyline(), TeamEdgesLayer(), NODE_AVATAR_RADIUS, Point, SegmentMorph, bezierEval() (+25 more)

### Community 40 - "Core Patterns"
Cohesion: 0.10
Nodes (24): Adding and removing children, API Reference, Bounds and coordinate conversion, Common Mistakes, Constructor options, Core Patterns, [CRITICAL] Adding children to leaf scene objects, Destroy (+16 more)

### Community 41 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+5 more)

### Community 42 - "Member"
Cohesion: 0.22
Nodes (9): MembersTree(), Props, Props, Props, Props, Props, registerPixiPlugins(), MembersActions (+1 more)

### Community 43 - "Core Patterns"
Cohesion: 0.14
Nodes (14): Container events, Transform, Lifecycle events, Coordinate conversion, Core Patterns, Cumulative alpha (getGlobalAlpha), Global, local, and screen coordinates, Origin (new in v8) (+6 more)

### Community 44 - "CLAUDE.md"
Cohesion: 0.25
Nodes (7): Commands, Conventions, Deployment & data, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout

### Community 45 - "Container Hierarchy"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, Container Hierarchy, [CRITICAL] Adding children to a leaf, [HIGH] Destroying the parent without `children: true`, [MEDIUM] Mutating `children` during iteration, Quick Start

### Community 46 - "ApplicationOptions reference"
Cohesion: 0.06
Nodes (32): Accessibility, ApplicationOptions reference, Background, Culler (CullerPluginOptions), Deprecated (GC — prefer the unified options above), Events, Garbage collection, Graphics (+24 more)

### Community 47 - "useTreeLayout.ts"
Cohesion: 0.12
Nodes (23): getFitViewTargetScale(), useSceneTransition(), useTreeLayout(), DEFAULT_NODE_HEIGHT, DEFAULT_NODE_WIDTH, DEFAULT_POSITION, FLOW_VIEWPORT_DIRECTION, FlowViewportDirection (+15 more)

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "MemberSidebar.tsx"
Cohesion: 0.13
Nodes (18): MemberSidebar(), Props, HeaderChip(), Props, SeasonChip(), Props, SidebarMinimizedSummary(), useSidebar() (+10 more)

### Community 50 - "ThemeContext.tsx"
Cohesion: 0.27
Nodes (9): useIsMobileScreen(), useResolvedDirection(), useMediaQuery(), DEFAULT_SETTINGS, readLegacyTheme(), SETTINGS_STORAGE_KEY, initialState, { storageMock } (+1 more)

### Community 51 - "AGENTS.md"
Cohesion: 0.25
Nodes (7): Commands, Conventions, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout, This is NOT the Next.js you know

### Community 52 - "scripts"
Cohesion: 0.20
Nodes (10): scripts, build, db:backup-prod, db:restore-local, dev, dev:webpack, lint, start (+2 more)

### Community 53 - "pixijs-events/SKILL.md"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] buttonMode removed; use cursor, [HIGH] Default eventMode is passive, [HIGH] Move events only fire over the object in v8, [MEDIUM] Cursor does not inherit from parent, Quick Start

### Community 54 - "BEST Family Tree"
Cohesion: 0.33
Nodes (5): BEST Family Tree, People, Sign-in, Teams, Views

### Community 57 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, concurrently, @faker-js/faker, nodemon, ts-node, tsx, @types/compression, @types/cors (+5 more)

### Community 58 - "MemberInfoActions.tsx"
Cohesion: 0.24
Nodes (11): FacebookIcon(), FacebookGlyph(), InstagramGlyph(), LinkedinGlyph(), svgProps, TelegramGlyph(), InstagramIcon(), LinkedinIcon() (+3 more)

### Community 59 - "Core Patterns"
Cohesion: 0.12
Nodes (17): Application destroy/recreate cycle, Batching optimization, cacheAsTexture for performance, Core Patterns, Culling, Filters and masks cost, Graphics performance, Low-level rendering optimizations (+9 more)

### Community 60 - "emailCodes.ts"
Cohesion: 0.07
Nodes (29): AllowedRow, AllowlistDiff, diffAllowlist(), looksLikeEmail(), parseAllowlistCsv(), ParsedAllowlist, splitLine(), CODE_TTL_MS (+21 more)

### Community 61 - "checkConfig.ts"
Cohesion: 0.14
Nodes (19): assertConfig(), configProblems(), databaseName(), demoProblems(), Env, googleProblems(), telegramProblems(), good (+11 more)

### Community 62 - "src/index.ts"
Cohesion: 0.08
Nodes (36): compression, express, multer, multer-storage-cloudinary, adapter, prisma, app, deleteCloudinaryImage() (+28 more)

### Community 63 - "AvatarFileInput.tsx"
Cohesion: 0.19
Nodes (10): next, LionIcon(), Props, AvatarFileInput(), Props, Props, config, exceedsUploadLimit() (+2 more)

### Community 64 - "memberUpdateValidation.ts"
Cohesion: 0.14
Nodes (13): zod, ExistingMember, findClearedFields(), memberUpdateBodySchema, parsePhones(), sparseMemberBodySchema, splitName(), completeMember (+5 more)

### Community 65 - "BEST Family Tree"
Cohesion: 0.11
Nodes (18): 1. Clone and configure environment, 2. Start the application, 3. Run database migrations, 4. Access the app, Architecture, Available Commands, Backend Commands (run inside container), Backups (+10 more)

### Community 66 - "Diagnosing Bugs"
Cohesion: 0.13
Nodes (14): Completion criterion: a tight loop that goes red, Diagnosing Bugs, Minimise, Non-deterministic bugs, Phase 1: Build a feedback loop, Phase 2: Reproduce + minimise, Phase 3: Hypothesise, Phase 4: Instrument (+6 more)

### Community 67 - "memberFormValidation.ts"
Cohesion: 0.12
Nodes (19): CheckedField, getStoredFieldValues(), Links, StoredMemberValues, complete, mentors, sparse, toTime() (+11 more)

### Community 68 - "mime.ts"
Cohesion: 0.38
Nodes (8): RFC-2045, RFC-2047, base64Body(), buildMime(), encodeHeaderText(), formatAddress(), isAscii(), noLineBreaks()

### Community 69 - "access.ts"
Cohesion: 0.22
Nodes (11): canEditMember(), hasAccess(), RANK, CONTACT_FIELDS, AccessRank, Express, Request, Session (+3 more)

### Community 70 - "Toolbar.tsx"
Cohesion: 0.09
Nodes (33): fetchSession(), SessionInfo, AccountPanel(), Props, DemoBadge(), CATEGORY_ICONS, FilterCategoryRail(), Props (+25 more)

### Community 71 - "Core Patterns"
Cohesion: 0.13
Nodes (14): API Reference, boundsArea optimization, Common Mistakes, Core Patterns, Culling, HIGH: Expecting automatic culling, HIGH: Using addChild on RenderLayer, MEDIUM: Expecting filters on ancestors to apply to layer children (+6 more)

### Community 72 - "Core Patterns"
Cohesion: 0.12
Nodes (14): Advanced shape primitives, Cloning, clearing, and bounds, Core Patterns, Default styles via setFillStyle / setStrokeStyle, Draw-time transforms, Drawing a texture directly, Gradients and patterns, GraphicsContext sharing (+6 more)

### Community 73 - "dependencies"
Cohesion: 0.12
Nodes (17): dependencies, cloudinary, compression, cors, dotenv, express, express-rate-limit, helmet (+9 more)

### Community 74 - "scripts"
Cohesion: 0.12
Nodes (17): scripts, auth:grant, auth:import-emails, auth:preview-email, auth:report-duplicate-contacts, auth:seed-grants, auth:seed-questions, build (+9 more)

### Community 75 - "TeamSearch.tsx"
Cohesion: 0.07
Nodes (40): Props, Props, Props, TeamFramesLayer(), Props, Props, FiltersHeader(), Props (+32 more)

### Community 76 - "fakeIdentity.ts"
Cohesion: 0.27
Nodes (7): @faker-js/faker, createIdentityFactory(), firstFree(), OPERATOR_CODES, none, MAP, translit()

### Community 77 - "Transforms and Coordinate Spaces"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Setting scale to 0, [MEDIUM] Confusing anchor and pivot, [MEDIUM] Reading world transform before first render, Quick Start, Transforms and Coordinate Spaces

### Community 78 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, attach / detach, Common Mistakes, Core Patterns, [CRITICAL] Using `addChild` on a RenderLayer, [HIGH] Layer and attached children in different render groups, Layer + logical parent, Manual sort (+5 more)

### Community 79 - "Core Patterns"
Cohesion: 0.14
Nodes (13): Alpha mask (Sprite-based), API Reference, Common Mistakes, Core Patterns, [HIGH] Using cacheAsTexture with masks, Inverse masking, Mask channel selection, Mask type selection (+5 more)

### Community 80 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, Common Mistakes, Construction options, Core Patterns, [HIGH] Nesting many render groups, [MEDIUM] Constantly adding/removing from a render group, [MEDIUM] Overusing render groups, Profile before adding (+5 more)

### Community 81 - "MemberPane.tsx"
Cohesion: 0.09
Nodes (26): ACTIVITY_ICONS, IconComponent, IconProps, GENDER_ICONS, IconProps, DatesPane(), SEASON_PILLS, PANES (+18 more)

### Community 82 - "ref_vitest"
Cohesion: 0.07
Nodes (46): Props, Props, Props, ACTIVITY_STATES, DATE_PICKER_CLASSES, EMPTY_FILTER_STATE, GENDER_VALUES, JOIN_SEASONS (+38 more)

### Community 83 - "Core Patterns"
Cohesion: 0.15
Nodes (13): Context and device loss, Core Patterns, Destroying a renderer, Direct renderer construction, Lazy-loading backend-specific systems and pipes, Manual rendering, Per-renderer options, Preference forms (+5 more)

### Community 84 - "Constructor options (Container-inherited)"
Cohesion: 0.18
Nodes (11): Advanced options and aliases, Before / after, Callbacks, Constructor options (Container-inherited), Display, Exceptions (line-by-line is fine here), Hierarchy, Layout & bounds (+3 more)

### Community 85 - "Test-Driven Development"
Cohesion: 0.15
Nodes (10): Designing for Mockability, When to Mock, Anti-patterns, Rules of the loop, Seams: where tests go, Test-Driven Development, What a good test is, Bad Tests (+2 more)

### Community 86 - "GSAP Core"
Cohesion: 0.10
Nodes (20): Accessibility and responsive (gsap.matchMedia()), Common vars, Core Tween Methods, Custom: use CustomEase (plugin), Defaults, Do Not, Easing, Function-based values (+12 more)

### Community 87 - "Core Patterns"
Cohesion: 0.17
Nodes (12): Capture phase events, Core Patterns, Cursor styles, Event features, Event properties, Event types, eventMode values, Global move events and drag (+4 more)

### Community 88 - "aiFaces.ts"
Cohesion: 0.38
Nodes (3): createFaceSource(), Options, source()

### Community 89 - "Foundations"
Cohesion: 0.13
Nodes (14): Advanced, Foundations, pixijs-application, pixijs-core-concepts, pixijs-events, pixijs-performance, pixijs-scene-container, pixijs-scene-core-concepts (+6 more)

### Community 91 - "Sidebar.tsx"
Cohesion: 0.18
Nodes (12): Props, Props, Props, Sidebar(), SidebarFooterContext, Props, SidebarHandle(), Props (+4 more)

### Community 92 - "Core Concepts"
Cohesion: 0.18
Nodes (11): Container vs leaf (CRITICAL), Core Concepts, Culling, Destroy semantics, Lifecycle events, Masking, Render groups, Render order and explicit z-ordering (+3 more)

### Community 93 - "FitViewButton.tsx"
Cohesion: 0.30
Nodes (9): FitViewButton(), Props, PanelResetButton(), Props, Props, ToolbarIconButton(), Props, ToolbarTooltip() (+1 more)

### Community 99 - "react"
Cohesion: 0.18
Nodes (18): gsap, react, Viewport(), NODE_HOVER_ANIMATION_DURATION, NODE_HOVER_SCALE, ZOOMED_OUT_HOVER_SCALE_MAP, NODE_HEIGHT, useFitViewAnimation() (+10 more)

### Community 101 - "src/types/index.ts"
Cohesion: 0.11
Nodes (32): @heroicons/react, tailwind-merge, GLOW, Props, Props, Props, Props, Props (+24 more)

### Community 102 - "Render Loop"
Cohesion: 0.22
Nodes (8): API Reference, Common Mistakes, [CRITICAL] Treating the ticker callback arg as a number, Frame lifecycle, [HIGH] Using `updateTransform` for per-frame logic, [MEDIUM] Assuming ticker callbacks run after render, Quick Start, Render Loop

### Community 103 - "pixijs-core-concepts/SKILL.md"
Cohesion: 0.22
Nodes (8): API Reference, Decision guide, Environments, Quick concepts, Quick Start, Renderer = systems + pipes, The render loop, Topics

### Community 105 - "TeamInfoSidebar.tsx"
Cohesion: 0.13
Nodes (23): Props, TeamInfoSidebar(), AvatarSkeleton(), MemberAvatarImage(), MemberAvatarImageInner(), Props, SkeletonProps, Props (+15 more)

### Community 106 - "Member"
Cohesion: 0.08
Nodes (40): date-fns, Props, Props, Props, InfoSection(), MemberActivityPill(), MemberFactTile(), Props (+32 more)

### Community 107 - "ref_vitest"
Cohesion: 0.18
Nodes (4): nextAdmittedIds(), PROGRESSIVE_CHUNK_SIZE, useProgressiveIds(), hasDemoPhoto()

### Community 108 - "auth.ts"
Cohesion: 0.07
Nodes (51): AccessLevel, AuthMethod, Challenge, ChallengeQuestion, logout(), post(), RequestCodeOutcome, requestEmailCode() (+43 more)

### Community 109 - "PhotoViewer.tsx"
Cohesion: 0.07
Nodes (48): zustand, isTreeReady(), MembersTree, MembersTreeDynamic(), TreeState, cache, loadImageAspect(), PhotoOpenButton() (+40 more)

### Community 110 - "server/src/types/index.ts"
Cohesion: 0.05
Nodes (42): mongodb, toMemberResponse(), ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember (+34 more)

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

### Community 113 - "Core Patterns"
Cohesion: 0.25
Nodes (8): Add, remove, swap, Child queries, Core Patterns, Destroying sub-trees, Iterating children, Label-based tree navigation, Reparenting with transform preservation, Replacing a child

### Community 114 - "useMembersStore"
Cohesion: 0.36
Nodes (7): membersActions, {
  setMembers,
  reloadMembers,
  addMember,
  updateMember,
  selectMember,
  getMentorsList,
}, useMembersMap(), useMentees(), useSelectedId(), useSelectedMember(), useMembersStore

### Community 115 - "Common Mistakes"
Cohesion: 0.33
Nodes (6): Common Mistakes, [CRITICAL] Adding children to a leaf display object, [CRITICAL] Referencing DisplayObject, [HIGH] Forgetting isRenderGroup on large static subtrees, [HIGH] Treating child.x as world space, [MEDIUM] sortableChildren without zIndex

### Community 116 - "pixijs-scene-core-concepts/SKILL.md"
Cohesion: 0.25
Nodes (6): API Reference, Leaf comparison: which skill covers which object, Quick Start, References, Tooling, When to use what (quick decisions)

### Community 117 - "Core Patterns"
Cohesion: 0.29
Nodes (7): Core Patterns, Frame rate capping, Manual rendering, Per-object update via `onRender`, Priority order, Stop and start, Time units

### Community 121 - "Common Mistakes"
Cohesion: 0.50
Nodes (4): Common Mistakes, [HIGH] Accessing app.renderer before init() resolves, [HIGH] Setting DOMAdapter after Application.init, [MEDIUM] Treating `preference` as a guarantee

### Community 125 - "useCardAnimation.ts"
Cohesion: 0.14
Nodes (23): CARD_PIVOT, Props, clamp01(), deferCardHidden(), easeBackOut, easePower2In, easePower2Out, entries (+15 more)

### Community 129 - "GSAP with React"
Cohesion: 0.15
Nodes (12): Best practices, Context-Safe Callbacks, Dependency array, scope, and revertOnUpdate, Do Not, gsap.context() in useEffect (when useGSAP isn't used), GSAP with React, Installation, Learn More (+4 more)

### Community 132 - "hitl-loop.template.sh"
Cohesion: 0.83
Nodes (3): capture(), hitl-loop.template.sh script, step()

### Community 137 - "GSAP Performance"
Cohesion: 0.17
Nodes (11): Batch Reads and Writes, Best practices, Do Not, Frequently updated properties (e.g. mouse followers), GSAP Performance, Many Elements (Stagger, Lists), Prefer Transform and Opacity, Reduce Simultaneous Work (+3 more)

### Community 138 - "GSAP Timeline"
Cohesion: 0.17
Nodes (11): Controlling Playback, Creating a Timeline, Do Not, GSAP Timeline, Labels, Nesting Timelines, Official GSAP Best practices, Position Parameter (+3 more)

## Knowledge Gaps
- **45 isolated node(s):** `@prisma/client`, `dotenv`, `lodash`, `pixi-filters`, `@tailwindcss/postcss` (+40 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1007 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `MemberBirthdayAnimation.tsx`, `constants/canvas/index.ts`, `constants/canvas/index.ts`, `layout.tsx`, `useTeamForm.ts`, `TeamFormContent.tsx`, `teamFrame.ts`, `dimensions.ts`, `pixi.js`, `EditMemberForm.tsx`, `MembersTreeContent.tsx`, `TeamFrame`, `utils/membersTree/index.ts`, `pixi.js`, `ManageForm.tsx`, `BirthdayFilterSection.tsx`, `package.json`, `positionFormUtils.ts`, `utils/membersTree/index.ts`, `Member`, `useTreeLayout.ts`, `ThemeContext.tsx`, `AvatarFileInput.tsx`, `Toolbar.tsx`, `TeamSearch.tsx`, `MemberPane.tsx`, `ref_vitest`, `Sidebar.tsx`, `FitViewButton.tsx`, `DropdownPortal.tsx`, `src/types/index.ts`, `TeamInfoSidebar.tsx`, `Member`, `ref_vitest`, `auth.ts`, `PhotoViewer.tsx`, `useMembersStore`, `useCardAnimation.ts`?**
  _High betweenness centrality (0.105) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _45 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `eligibility.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.14942528735632185 - nodes in this community are weakly interconnected._
- **Why does `filters()` connect `Core Patterns` to `ref_vitest`, `Common Mistakes`?**
  _High betweenness centrality (0.104) - this node is a cross-community bridge._
- **Should `sessions.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.06564364876385337 - nodes in this community are weakly interconnected._
- **Why does `Constructor options` connect `Common Mistakes` to `Core Patterns`?**
  _High betweenness centrality (0.066) - this node is a cross-community bridge._
- **Should `constants/canvas/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.12 - nodes in this community are weakly interconnected._