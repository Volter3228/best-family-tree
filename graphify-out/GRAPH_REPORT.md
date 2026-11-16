# Graph Report - best-family-tree  (2026-11-16)

## Corpus Check
- 572 files · ~182,944 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 29 file(s) not represented in the graph (top: .prisma 9, (none) 7, .css 6)

## Summary
- 2825 nodes · 7283 edges · 125 communities (118 shown, 7 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 82 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `cccef034`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- oidc.ts
- MemberBirthdayAnimation.tsx
- sessions.ts
- FilterState
- constants/canvas/index.ts
- teamBlock.ts
- layout.tsx
- http
- TeamFormContent.tsx
- teamLayout.ts
- teamFrame.ts
- DatesPane.tsx
- anonymizeDemo.ts
- pixi.js
- backfillGender.ts
- aiFaces.ts
- EditMemberForm.tsx
- MembersTreeContent.tsx
- TeamFrame
- catalogValidation.ts
- ref_vitest
- HTML Report Format
- utils/membersTree/index.ts
- SettingsPanel.tsx
- teamService.ts
- GroupedCheckListFilter.tsx
- compilerOptions
- compilerOptions
- TeamFormContent.tsx
- filterMembers.ts
- dependencies
- server/package.json
- filterSearchParams.ts
- Common Mistakes
- FilterState
- Common Mistakes
- package.json
- Member
- teamPacking.ts
- utils/membersTree/index.ts
- Core Patterns
- devDependencies
- seedQuestions.ts
- oidc.ts
- CLAUDE.md
- Container Hierarchy
- ApplicationOptions reference
- membersStore.ts
- During the session
- Toolbar.tsx
- ThemeContext.tsx
- AGENTS.md
- scripts
- pixijs-events/SKILL.md
- BEST Family Tree
- next.config.mjs
- postcss.config.mjs
- useCanvasTheme.ts
- pixijs/SKILL.md
- Core Patterns
- emailCodes.ts
- checkConfig.ts
- src/index.ts
- AvatarFileInput.tsx
- memberService.ts
- BEST Family Tree
- Diagnosing Bugs
- scale.ts
- bakeParams.ts
- access.ts
- utils/strings.ts
- Core Patterns
- Core Patterns
- dependencies
- constants/theme.ts
- TeamSearch.tsx
- emailRoutes.ts
- Transforms and Coordinate Spaces
- Core Patterns
- Core Patterns
- Core Patterns
- FilterCategoryPane.tsx
- FilterState
- Core Patterns
- Constructor options (Container-inherited)
- Test-Driven Development
- GSAP Core
- Core Patterns
- filtersStore.ts
- Foundations
- Toolbar.tsx
- Sidebar.tsx
- Core Concepts
- signInCodeEmail.ts
- Common Mistakes
- backup-prod.sh
- start-prod.sh
- restore-local.sh
- src_types_index_memberstatus
- react
- Core Patterns
- src/types/index.ts
- Render Loop
- pixijs-core-concepts/SKILL.md
- MemberPane.tsx
- utils/positions.ts
- MemberInfo.tsx
- sections/index.ts
- auth.ts
- PhotoViewer.tsx
- server/src/types/index.ts
- searchShortcut.ts
- Renderers: WebGPU, WebGL, and Canvas
- Core Patterns
- Common Mistakes
- pixijs-scene-core-concepts/SKILL.md
- memberRoutes.ts
- importAllowedEmails.ts
- useCardAnimation.ts
- GSAP with React
- hitl-loop.template.sh
- GSAP Performance
- GSAP Timeline

## God Nodes (most connected - your core abstractions)
1. `react` - 133 edges
2. `AccentColor` - 129 edges
3. `tailwind-merge` - 74 edges
4. `Member` - 67 edges
5. `COLOR_CLASSES` - 46 edges
6. `TeamFrame` - 40 edges
7. `@heroicons/react` - 38 edges
8. `FilterState` - 38 edges
9. `pixi.js` - 36 edges
10. `useTreeStore` - 32 edges

## Surprising Connections (you probably didn't know these)
- `pixijs-scene-container` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs/references/index.md → src/hooks/membersTree/animations/useFitViewAnimation.ts
- `Effects` --references--> `filters()`  [INFERRED]
  .agents/skills/pixijs-scene-core-concepts/references/constructor-options.md → src/utils/filters/filterMembers.test.ts
- `Constructor options` --references--> `filters()`  [INFERRED]
  .agents/skills/pixijs-scene-graphics/SKILL.md → src/utils/filters/filterMembers.test.ts
- `Finding and removing from parent` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs-scene-container/SKILL.md → src/hooks/membersTree/animations/useFitViewAnimation.ts
- `Transform properties` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs-scene-container/SKILL.md → src/hooks/membersTree/animations/useFitViewAnimation.ts

## Import Cycles
- 3-file cycle: `src/utils/index.ts -> src/utils/membersTree/index.ts -> src/utils/membersTree/lineageEdgePath.ts -> src/utils/index.ts`
- 4-file cycle: `src/context/ThemeContext.tsx -> src/hooks/index.ts -> src/hooks/membersTree/index.ts -> src/hooks/membersTree/useCanvasTheme.ts -> src/context/ThemeContext.tsx`
- 4-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/members.ts -> src/models/index.ts -> src/models/Member.ts`
- 4-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/tree.ts -> src/models/index.ts -> src/models/Member.ts`
- 5-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/filters.ts -> src/types/members.ts -> src/models/index.ts -> src/models/Member.ts`

## Communities (125 total, 7 thin omitted)

### Community 0 - "oidc.ts"
Cohesion: 0.36
Nodes (7): MemberMatch, resolveMemberMatch(), phoneKey(), resolveTelegramIdentity(), TelegramIdentity, loadTelegramIdentity(), TelegramClaims

### Community 1 - "MemberBirthdayAnimation.tsx"
Cohesion: 0.24
Nodes (11): BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props, acquireEmojiTextures(), createEmojiTexture(), generateRandomPosition(), releaseEmojiTextures() (+3 more)

### Community 2 - "sessions.ts"
Cohesion: 0.13
Nodes (26): CHALLENGE_TTL_MS, isDemoMode(), isProduction(), QUESTIONS_SHOWN, SESSION_COOKIE, SESSION_TTL_MS, SIGN_IN_COOKIE, useSecureCookie() (+18 more)

### Community 3 - "FilterState"
Cohesion: 0.12
Nodes (20): Props, FilterState, ActivityState, Active, Excluded, Inactive, Gender, Female (+12 more)

### Community 4 - "constants/canvas/index.ts"
Cohesion: 0.18
Nodes (13): NODE_HOVER_ANIMATION_DURATION, NODE_HOVER_SCALE, ZOOMED_OUT_HOVER_SCALE_MAP, lineageEdgePath, ACCIDENTAL_DRAG_MAX_DISTANCE, ACCIDENTAL_DRAG_MAX_MS, LONG_PRESS_MS, TAP_MOVE_TOLERANCE (+5 more)

### Community 5 - "teamBlock.ts"
Cohesion: 0.10
Nodes (28): TEAM_COLUMN_GAP, TEAM_EDGE_DROP, TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_SPREAD_WIDTH, TEAM_EDGE_STUB, TEAM_FRAME_HEADER, TEAM_FRAME_MIN_WIDTH, TEAM_FRAME_PADDING (+20 more)

### Community 6 - "layout.tsx"
Cohesion: 0.14
Nodes (11): react-datepicker, metadata, nunito, RootLayout(), AuroraBackground(), readNumber(), useBakedAurora(), canBakeAurora() (+3 more)

### Community 7 - "http"
Cohesion: 0.08
Nodes (47): addMember(), ApiError, toApiError(), deleteMember(), editMember(), FamilyGroupOption, fetchFamilyGroups(), fetchFamilyTree() (+39 more)

### Community 8 - "TeamFormContent.tsx"
Cohesion: 0.12
Nodes (33): Props, PositionAssignmentFields(), Props, PositionFormFields(), Props, createEmptyPositionRow(), EMPTY_POSITION_ROW, findTeamByName() (+25 more)

### Community 9 - "teamLayout.ts"
Cohesion: 0.11
Nodes (29): elkjs, failOver(), getWorker(), Pending, requestLayout(), runInline(), computeTeamLayout(), groupIntoLanes() (+21 more)

### Community 10 - "teamFrame.ts"
Cohesion: 0.09
Nodes (42): TeamBadge(), FILL_ALPHA, lerp(), STROKE_ALPHA, TeamFrame(), TeamOverviewLabel(), Props, ZoomFadeContainer() (+34 more)

### Community 11 - "DatesPane.tsx"
Cohesion: 0.18
Nodes (13): FlowerIcon(), Props, MapleLeafIcon(), Props, Placement, PLACEMENTS, Props, SeasonMotif() (+5 more)

### Community 12 - "anonymizeDemo.ts"
Cohesion: 0.06
Nodes (36): @faker-js/faker, allowed, args, byId, factory, GROUP_NAMES, memberPhotos, nextFace (+28 more)

### Community 13 - "pixi.js"
Cohesion: 0.08
Nodes (38): pixi.js, contexts, getCardBackgroundContext(), getGlowTexture(), GLOW_BLUR, GLOW_PADDING, GlowKind, paint() (+30 more)

### Community 14 - "backfillGender.ts"
Cohesion: 0.08
Nodes (20): @prisma/config, alreadyDifferent, alreadySame, APPLY, args, duplicates, fileArg, Gender (+12 more)

### Community 15 - "aiFaces.ts"
Cohesion: 0.38
Nodes (3): createFaceSource(), Options, source()

### Community 16 - "EditMemberForm.tsx"
Cohesion: 0.08
Nodes (46): AddMemberForm(), buildMemberFormData(), describeSubmitError(), EditMemberForm(), getInitialFormData(), FieldError(), MemberFormFields(), Props (+38 more)

### Community 17 - "MembersTreeContent.tsx"
Cohesion: 0.23
Nodes (14): Viewport(), Props, EVENT_FEATURES, MembersTreeContent(), Props, ViewportCulling(), useFilterSearchParams(), useSyncMembers() (+6 more)

### Community 18 - "TeamFrame"
Cohesion: 0.08
Nodes (29): NodesLayer(), Props, View, Props, Props, Props, TeamFramesLayer(), Props (+21 more)

### Community 19 - "catalogValidation.ts"
Cohesion: 0.10
Nodes (22): Renderer selection at runtime, [MEDIUM] Using container.name instead of container.label, parsePositionsPayload(), booleanLike, formatZodErrors(), isValidPeriod(), name(), optional() (+14 more)

### Community 20 - "ref_vitest"
Cohesion: 0.11
Nodes (25): express-rate-limit, answerMatches(), CYRILLIC_TO_LATIN, normalizeAnswer(), ChallengeState, isExpired(), isSolved(), pickRandom() (+17 more)

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "utils/membersTree/index.ts"
Cohesion: 0.07
Nodes (41): DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN, MIN_ANIM_DURATION, PATTERN_LEN, RETRACT_BASE, SPEED (+33 more)

### Community 23 - "SettingsPanel.tsx"
Cohesion: 0.15
Nodes (12): FamilyTreeIcon(), Props, EDGE_STYLE_OPTIONS, iconClass, ORIENTATION_OPTIONS, THEME_OPTIONS, TREE_MODE_OPTIONS, Props (+4 more)

### Community 24 - "teamService.ts"
Cohesion: 0.13
Nodes (27): ResolvedPosition, resolvePosition(), MemberTransaction, assertCanEditMembers(), deleteMember(), deriveTeamName(), resolveRole(), resolveTeam() (+19 more)

### Community 25 - "GroupedCheckListFilter.tsx"
Cohesion: 0.19
Nodes (15): CheckBox(), Props, byLabel(), CheckListFilter(), CheckOption, Props, useStableOrder(), CheckRow() (+7 more)

### Community 26 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, esModuleInterop, forceConsistentCasingInFileNames, module, moduleResolution, noImplicitAny, outDir, paths (+12 more)

### Community 27 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+12 more)

### Community 28 - "TeamFormContent.tsx"
Cohesion: 0.09
Nodes (42): QuestionCard(), DropdownMenu(), ClearButton(), SubmitButton(), ConfirmDeleteControl(), Props, GENDER_OPTIONS, GenderFormField() (+34 more)

### Community 29 - "filterMembers.ts"
Cohesion: 0.13
Nodes (29): birthdayBoundKey(), countActiveFilters(), countActiveMemberFilters(), isFilterActive(), isIdListSet(), isListFilterSet(), matchesBirthday(), matchesFamilyGroup() (+21 more)

### Community 30 - "dependencies"
Cohesion: 0.11
Nodes (19): dependencies, date-fns, dotenv, elkjs, gsap, @gsap/react, @heroicons/react, lodash (+11 more)

### Community 31 - "server/package.json"
Cohesion: 0.08
Nodes (24): compression, concurrently, cors, helmet, nodemon, ts-node, tsx, @types/compression (+16 more)

### Community 32 - "filterSearchParams.ts"
Cohesion: 0.23
Nodes (13): GENDER_VALUES, filtersToSearchParams(), parseCsvArray(), parseCsvStrings(), parseFiltersFromSearchParams(), parseNumberOrNull(), parseTreeMode(), serializeCsv() (+5 more)

### Community 33 - "Common Mistakes"
Cohesion: 0.20
Nodes (10): Common Mistakes, [CRITICAL] App destroy without releaseGlobalResources, [HIGH] Destroying and recreating objects instead of recycling, [HIGH] Interleaving object types in scene graph, [HIGH] Loading many individual textures instead of spritesheets, [HIGH] Updating Text or HTMLText every frame, [HIGH] Using complex Graphics instead of textures, [MEDIUM] Not staggering bulk texture destruction (+2 more)

### Community 34 - "FilterState"
Cohesion: 0.17
Nodes (16): BirthdayFilterSection(), Props, ClearButton(), JoinYearFilterSection(), Props, Props, RangeInputs(), RangeSlot (+8 more)

### Community 35 - "Common Mistakes"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, Constructor options, [CRITICAL] Using lineStyle instead of stroke, [CRITICAL] Using old shape method names, [CRITICAL] Using v7 beginFill/drawRect/endFill, [HIGH] Clearing and redrawing Graphics every frame, [HIGH] Destroying a shared GraphicsContext unexpectedly (+4 more)

### Community 36 - "package.json"
Cohesion: 0.10
Nodes (19): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+11 more)

### Community 37 - "Member"
Cohesion: 0.10
Nodes (18): Cloning, clearing, and bounds, date-fns, Props, Props, Props, Props, Props, Props (+10 more)

### Community 38 - "teamPacking.ts"
Cohesion: 0.26
Nodes (9): TEAM_FRAME_GAP, TEAM_PACK_ASPECT, computeDirectedPacking(), computePacking(), packLanes(), Placement, scorePacking(), shelfPack() (+1 more)

### Community 39 - "utils/membersTree/index.ts"
Cohesion: 0.12
Nodes (35): EdgesLayer(), Props, LineageEdge(), Props, drawLerped(), drawPolyline(), Props, TeamEdgesLayer() (+27 more)

### Community 40 - "Core Patterns"
Cohesion: 0.18
Nodes (15): Adding and removing children, Bounds and coordinate conversion, Constructor options, Core Patterns, Destroy, Finding and removing from parent, [HIGH] Expecting getBounds() to return a Rectangle, Leaves vs containers (+7 more)

### Community 41 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+5 more)

### Community 42 - "seedQuestions.ts"
Cohesion: 0.25
Nodes (6): MIN_ACTIVE_QUESTIONS, deleteQuestionSessions(), DEMO_QUESTIONS, active, items, valid

### Community 43 - "oidc.ts"
Cohesion: 0.11
Nodes (26): Container events, Transform, Lifecycle events, Origin (new in v8), openid-client, callbackErrorRedirect(), decideGoogleSignIn(), GoogleClaims (+18 more)

### Community 44 - "CLAUDE.md"
Cohesion: 0.25
Nodes (7): Commands, Conventions, Deployment & data, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout

### Community 45 - "Container Hierarchy"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, Container Hierarchy, [CRITICAL] Adding children to a leaf, [HIGH] Destroying the parent without `children: true`, [MEDIUM] Mutating `children` during iteration, Quick Start

### Community 46 - "ApplicationOptions reference"
Cohesion: 0.06
Nodes (32): Accessibility, ApplicationOptions reference, Background, Culler (CullerPluginOptions), Deprecated (GC — prefer the unified options above), Events, Garbage collection, Graphics (+24 more)

### Community 47 - "membersStore.ts"
Cohesion: 0.10
Nodes (31): GRID_GAP_X, GRID_LR_COLUMNS, membersActions, {
  setMembers,
  reloadMembers,
  addMember,
  updateMember,
  selectMember,
  getMentorsList,
}, useMembersMap(), useMentees(), useSelectedId(), useSelectedMember() (+23 more)

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "Toolbar.tsx"
Cohesion: 0.15
Nodes (21): fetchSession(), SessionInfo, MemberSidebar(), TeamInfoSidebar(), HeaderChip(), Props, SeasonChip(), Props (+13 more)

### Community 50 - "ThemeContext.tsx"
Cohesion: 0.12
Nodes (24): applyCssTokens(), ThemeContext, ThemeContextValue, ThemeProvider(), CanvasColors, useIsMobileScreen(), useResolvedDirection(), noopSubscribe() (+16 more)

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

### Community 57 - "useCanvasTheme.ts"
Cohesion: 0.21
Nodes (10): FONT_FAMILY, NODE_SUBTITLE_STYLE, NODE_TITLE_STYLE, NODE_TOOLTIP_TEXT_STYLE, TEXT_RESOLUTION, buildCanvasColors(), CanvasTextStyleInstances, CanvasTextStyles (+2 more)

### Community 58 - "pixijs/SKILL.md"
Cohesion: 0.18
Nodes (9): API Reference, Quick Start, Advanced, Fallback: canonical PixiJS docs, Foundations, How to use this skill, Scene Objects, Skill router (+1 more)

### Community 59 - "Core Patterns"
Cohesion: 0.12
Nodes (17): Application destroy/recreate cycle, Batching optimization, cacheAsTexture for performance, Core Patterns, Culling, Filters and masks cost, Graphics performance, Low-level rendering optimizations (+9 more)

### Community 60 - "emailCodes.ts"
Cohesion: 0.17
Nodes (14): CODE_TTL_MS, CodeOwner, CodeStore, generateCode(), hashCode(), issueCode(), MAX_CODE_ATTEMPTS, sameHash() (+6 more)

### Community 61 - "checkConfig.ts"
Cohesion: 0.07
Nodes (36): RFC-2045, RFC-2047, assertConfig(), configProblems(), databaseName(), demoProblems(), Env, googleProblems() (+28 more)

### Community 62 - "src/index.ts"
Cohesion: 0.08
Nodes (33): cloudinary, express, multer, multer-storage-cloudinary, @prisma/adapter-pg, adapter, prisma, app (+25 more)

### Community 63 - "AvatarFileInput.tsx"
Cohesion: 0.23
Nodes (8): next, AvatarFileInput(), Props, Props, config, exceedsUploadLimit(), MAX_UPLOAD_BYTES, UPLOAD_TOO_LARGE_MESSAGE

### Community 64 - "memberService.ts"
Cohesion: 0.10
Nodes (30): zod, buildMemberFields(), buildMemberUpdateFields(), buildSharedFields(), buildSparseMemberFields(), parsePhoneNumbers(), getPositionKey(), syncPositions() (+22 more)

### Community 65 - "BEST Family Tree"
Cohesion: 0.11
Nodes (18): 1. Clone and configure environment, 2. Start the application, 3. Run database migrations, 4. Access the app, Architecture, Available Commands, Backend Commands (run inside container), Backups (+10 more)

### Community 66 - "Diagnosing Bugs"
Cohesion: 0.13
Nodes (14): Completion criterion: a tight loop that goes red, Diagnosing Bugs, Minimise, Non-deterministic bugs, Phase 1: Build a feedback loop, Phase 2: Reproduce + minimise, Phase 3: Hypothesise, Phase 4: Instrument (+6 more)

### Community 67 - "scale.ts"
Cohesion: 0.24
Nodes (10): EMPTY_IDS, SharpAvatarTracker(), AVATAR_LOW_RES_SIZE, MAX_RENDER_RESOLUTION, TEAM_OVERVIEW_END_SCALE, TEAM_OVERVIEW_FAST_FACTOR, TEAM_OVERVIEW_START_SCALE, getAvatarScreenSize() (+2 more)

### Community 68 - "bakeParams.ts"
Cohesion: 0.27
Nodes (13): AuroraBakeInput, bakeAuroraLayers(), BAKE_SCALE, BLUR_SPREAD, CONIC_LAYERS, ConicLayerSpec, cssAngleToCanvasRadians(), getBakeFilter() (+5 more)

### Community 69 - "access.ts"
Cohesion: 0.22
Nodes (11): canEditMember(), hasAccess(), RANK, CONTACT_FIELDS, AccessRank, Express, Request, Session (+3 more)

### Community 70 - "utils/strings.ts"
Cohesion: 0.29
Nodes (7): FiltersHeader(), Props, formatCount(), PARTICIPANT_FORMS, PluralForms, TEAM_FORMS, YEAR_FORMS

### Community 71 - "Core Patterns"
Cohesion: 0.13
Nodes (14): API Reference, boundsArea optimization, Common Mistakes, Core Patterns, Culling, HIGH: Expecting automatic culling, HIGH: Using addChild on RenderLayer, MEDIUM: Expecting filters on ancestors to apply to layer children (+6 more)

### Community 72 - "Core Patterns"
Cohesion: 0.13
Nodes (14): Advanced shape primitives, Core Patterns, Default styles via setFillStyle / setStrokeStyle, Draw-time transforms, Drawing a texture directly, Gradients and patterns, GraphicsContext sharing, GraphicsContext utilities (+6 more)

### Community 73 - "dependencies"
Cohesion: 0.04
Nodes (47): dependencies, cloudinary, compression, cors, dotenv, express, express-rate-limit, helmet (+39 more)

### Community 74 - "constants/theme.ts"
Cohesion: 0.22
Nodes (7): darkTheme, DEFAULT_THEME, lightTheme, THEMES, ThemeDefinition, themeCssMap, themeInitScript

### Community 75 - "TeamSearch.tsx"
Cohesion: 0.07
Nodes (37): LionIcon(), Props, FacebookIcon(), FacebookGlyph(), InstagramGlyph(), LinkedinGlyph(), svgProps, TelegramGlyph() (+29 more)

### Community 76 - "emailRoutes.ts"
Cohesion: 0.16
Nodes (17): authSecret(), EligibilityMember, EmailIdentity, normalizeEmail(), resolveEmailIdentity(), loadEmailIdentity(), prismaCodeStore, getMailer() (+9 more)

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

### Community 81 - "FilterCategoryPane.tsx"
Cohesion: 0.31
Nodes (10): PANES, Props, MemberPane(), RolesPane(), TeamsPane(), FilterPaneProps, FilterSection(), CheckGroup (+2 more)

### Community 82 - "FilterState"
Cohesion: 0.12
Nodes (17): CATEGORY_ICONS, FilterCategoryRail(), Props, RailButton(), RailButtonProps, FILTER_CATEGORY_LABELS, ACTIVITY_STATES, DATE_PICKER_CLASSES (+9 more)

### Community 83 - "Core Patterns"
Cohesion: 0.15
Nodes (13): Context and device loss, Core Patterns, Destroying a renderer, Direct renderer construction, Lazy-loading backend-specific systems and pipes, Manual rendering, Per-renderer options, Preference forms (+5 more)

### Community 84 - "Constructor options (Container-inherited)"
Cohesion: 0.17
Nodes (12): Advanced options and aliases, Before / after, Callbacks, Constructor options (Container-inherited), Display, Effects, Exceptions (line-by-line is fine here), Hierarchy (+4 more)

### Community 85 - "Test-Driven Development"
Cohesion: 0.15
Nodes (10): Designing for Mockability, When to Mock, Anti-patterns, Rules of the loop, Seams: where tests go, Test-Driven Development, What a good test is, Bad Tests (+2 more)

### Community 86 - "GSAP Core"
Cohesion: 0.10
Nodes (20): Accessibility and responsive (gsap.matchMedia()), Common vars, Core Tween Methods, Custom: use CustomEase (plugin), Defaults, Do Not, Easing, Function-based values (+12 more)

### Community 87 - "Core Patterns"
Cohesion: 0.17
Nodes (12): Capture phase events, Core Patterns, Cursor styles, Event features, Event properties, Event types, eventMode values, Global move events and drag (+4 more)

### Community 88 - "filtersStore.ts"
Cohesion: 0.14
Nodes (20): FiltersFooter(), Props, FiltersPanel(), Props, FilterCategoryPane(), SELF_SCROLLING_PANES, useDraftFilterCount(), derive() (+12 more)

### Community 89 - "Foundations"
Cohesion: 0.15
Nodes (12): Advanced, Foundations, pixijs-application, pixijs-core-concepts, pixijs-events, pixijs-performance, pixijs-scene-container, pixijs-scene-core-concepts (+4 more)

### Community 90 - "Toolbar.tsx"
Cohesion: 0.16
Nodes (17): AccountPanel(), Props, DemoBadge(), FitViewButton(), Props, PanelResetButton(), Props, SettingsPanel() (+9 more)

### Community 91 - "Sidebar.tsx"
Cohesion: 0.11
Nodes (17): react, react-dom, DropdownPortal(), Props, Props, Props, Props, Sidebar() (+9 more)

### Community 92 - "Core Concepts"
Cohesion: 0.18
Nodes (11): Container vs leaf (CRITICAL), Core Concepts, Culling, Destroy semantics, Lifecycle events, Masking, Render groups, Render order and explicit z-ordering (+3 more)

### Community 93 - "signInCodeEmail.ts"
Cohesion: 0.33
Nodes (4): escapeHtml(), pairs(), renderSignInCodeEmail(), { html }

### Community 94 - "Common Mistakes"
Cohesion: 0.29
Nodes (6): API Reference, Common Mistakes, [CRITICAL] Adding children to leaf scene objects, [HIGH] Using cacheAsBitmap instead of cacheAsTexture, [MEDIUM] Setting both pivot and origin on the same container, Quick Start

### Community 98 - "src_types_index_memberstatus"
Cohesion: 0.38
Nodes (4): FOUNDER_JOIN_YEAR, MEMBER_STATUSES, MENTOR_STATUSES, getUpdatedMentorsList()

### Community 99 - "react"
Cohesion: 0.12
Nodes (25): @pixi/react, PixiElements, gsap, @pixi/react, pixi-viewport, Props, MembersTreeScene(), BIRTHDAY_ANIMATION_MIN_SCALE (+17 more)

### Community 100 - "Core Patterns"
Cohesion: 0.22
Nodes (9): Coordinate conversion, Core Patterns, Cumulative alpha (getGlobalAlpha), Global, local, and screen coordinates, Pivot, Position, scale, rotation, Sizing via width, height, setSize, Skew (+1 more)

### Community 101 - "src/types/index.ts"
Cohesion: 0.09
Nodes (43): @heroicons/react, tailwind-merge, GLOW, Props, Props, Props, Props, Props (+35 more)

### Community 102 - "Render Loop"
Cohesion: 0.12
Nodes (15): API Reference, Common Mistakes, Core Patterns, [CRITICAL] Treating the ticker callback arg as a number, Frame lifecycle, Frame rate capping, [HIGH] Using `updateTransform` for per-frame logic, Manual rendering (+7 more)

### Community 103 - "pixijs-core-concepts/SKILL.md"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, Decision guide, Environments, [HIGH] Accessing app.renderer before init() resolves, [HIGH] Setting DOMAdapter after Application.init, [MEDIUM] Treating `preference` as a guarantee, Quick concepts (+4 more)

### Community 104 - "MemberPane.tsx"
Cohesion: 0.13
Nodes (11): ACTIVITY_ICONS, IconComponent, IconProps, GENDER_ICONS, IconProps, ACTIVITY_PILLS, GENDER_PILLS, STATUS_PILLS (+3 more)

### Community 105 - "utils/positions.ts"
Cohesion: 0.43
Nodes (5): getTeamRoster(), getMemberTeamRoles(), getPositionPeriod(), getPositionYearLabel(), Years

### Community 106 - "MemberInfo.tsx"
Cohesion: 0.07
Nodes (48): cache, loadImageAspect(), PhotoOpenButton(), Props, useIsPhotoOpen(), InfoSection(), Props, MemberActivityPill() (+40 more)

### Community 107 - "sections/index.ts"
Cohesion: 0.24
Nodes (6): FilterCheckbox(), Props, Props, Option, Props, Props

### Community 108 - "auth.ts"
Cohesion: 0.07
Nodes (50): AccessLevel, AuthMethod, Challenge, ChallengeQuestion, logout(), post(), RequestCodeOutcome, requestEmailCode() (+42 more)

### Community 109 - "PhotoViewer.tsx"
Cohesion: 0.06
Nodes (50): @gsap/react, zustand, MembersTree(), Props, isTreeReady(), MembersTree, MembersTreeDynamic(), TreeState (+42 more)

### Community 110 - "server/src/types/index.ts"
Cohesion: 0.07
Nodes (30): mongodb, ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember, STATUSES_MAP (+22 more)

### Community 111 - "searchShortcut.ts"
Cohesion: 0.17
Nodes (8): EDITABLE_TAGS, isEditableTarget(), isSearchShortcut(), ShortcutKeys, Keys, Options, Position, useSearchShortcut()

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

### Community 113 - "Core Patterns"
Cohesion: 0.25
Nodes (8): Add, remove, swap, Child queries, Core Patterns, Destroying sub-trees, Iterating children, Label-based tree navigation, Reparenting with transform preservation, Replacing a child

### Community 115 - "Common Mistakes"
Cohesion: 0.33
Nodes (6): Common Mistakes, [CRITICAL] Adding children to a leaf display object, [CRITICAL] Referencing DisplayObject, [HIGH] Forgetting isRenderGroup on large static subtrees, [HIGH] Treating child.x as world space, [MEDIUM] sortableChildren without zIndex

### Community 116 - "pixijs-scene-core-concepts/SKILL.md"
Cohesion: 0.25
Nodes (6): API Reference, Leaf comparison: which skill covers which object, Quick Start, References, Tooling, When to use what (quick decisions)

### Community 119 - "memberRoutes.ts"
Cohesion: 0.14
Nodes (18): toMemberResponse(), loadFamilyTree, loadReducedFamilyTree, router, MEMBER_INCLUDE, serializeMember(), assertCanEditMember(), uploadMemberPhoto (+10 more)

### Community 120 - "importAllowedEmails.ts"
Cohesion: 0.19
Nodes (12): AllowedRow, AllowlistDiff, diffAllowlist(), looksLikeEmail(), parseAllowlistCsv(), ParsedAllowlist, splitLine(), apply (+4 more)

### Community 125 - "useCardAnimation.ts"
Cohesion: 0.16
Nodes (20): clamp01(), deferCardHidden(), easeBackOut, easePower2In, easePower2Out, entries, Entry, finishCardReveal() (+12 more)

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
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1000 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `Sidebar.tsx` to `MemberBirthdayAnimation.tsx`, `FilterState`, `constants/canvas/index.ts`, `layout.tsx`, `http`, `TeamFormContent.tsx`, `teamFrame.ts`, `pixi.js`, `EditMemberForm.tsx`, `MembersTreeContent.tsx`, `TeamFrame`, `utils/membersTree/index.ts`, `GroupedCheckListFilter.tsx`, `TeamFormContent.tsx`, `FilterState`, `package.json`, `Member`, `utils/membersTree/index.ts`, `membersStore.ts`, `Toolbar.tsx`, `ThemeContext.tsx`, `useCanvasTheme.ts`, `AvatarFileInput.tsx`, `scale.ts`, `TeamSearch.tsx`, `FilterCategoryPane.tsx`, `FilterState`, `filtersStore.ts`, `Toolbar.tsx`, `react`, `src/types/index.ts`, `MemberPane.tsx`, `MemberInfo.tsx`, `auth.ts`, `PhotoViewer.tsx`, `searchShortcut.ts`, `useCardAnimation.ts`?**
  _High betweenness centrality (0.115) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _45 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `sessions.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.12605042016806722 - nodes in this community are weakly interconnected._
- **Why does `filters()` connect `filterMembers.ts` to `Core Patterns`, `filterSearchParams.ts`, `Common Mistakes`, `Constructor options (Container-inherited)`?**
  _High betweenness centrality (0.102) - this node is a cross-community bridge._
- **Should `FilterState` be split into smaller, more focused modules?**
  _Cohesion score 0.1225071225071225 - nodes in this community are weakly interconnected._
- **Why does `Constructor options` connect `Common Mistakes` to `filterMembers.ts`?**
  _High betweenness centrality (0.069) - this node is a cross-community bridge._
- **Should `teamBlock.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.0989247311827957 - nodes in this community are weakly interconnected._