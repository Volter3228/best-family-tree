# Graph Report - best-family-tree  (2026-11-16)

## Corpus Check
- 570 files · ~182,104 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 29 file(s) not represented in the graph (top: .prisma 9, (none) 7, .css 6)

## Summary
- 2814 nodes · 7259 edges · 130 communities (122 shown, 8 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 81 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `8eaefac3`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- oidc.ts
- DropdownSelectInput.tsx
- sessions.ts
- constants/filters.ts
- constants/canvas/index.ts
- teamBlock.ts
- layout.tsx
- http
- TeamFormContent.tsx
- teamLayout.ts
- teamFrame.ts
- DatesPane.tsx
- anonymizeDemo.ts
- MemberNode.tsx
- backfillGender.ts
- aiFaces.ts
- EditMemberForm.tsx
- memberService.ts
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
- eligibility.ts
- Common Mistakes
- FilterState
- ManageForm.tsx
- package.json
- Member
- checkConfig.ts
- utils/membersTree/index.ts
- Core Patterns
- devDependencies
- ref_vitest
- oidc.ts
- CLAUDE.md
- Container Hierarchy
- ApplicationOptions reference
- MembersTreeContent.tsx
- During the session
- Toolbar.tsx
- ThemeContext.tsx
- AGENTS.md
- scripts
- pixijs-events/SKILL.md
- BEST Family Tree
- next.config.mjs
- postcss.config.mjs
- settingsStore.ts
- pixijs/SKILL.md
- Core Patterns
- emailCodes.ts
- mailer/index.ts
- src/index.ts
- AvatarFileInput
- memberUpdateValidation.ts
- BEST Family Tree
- Diagnosing Bugs
- dimensions.ts
- bakeParams.ts
- access.ts
- elkLayout.ts
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
- FitViewButton.tsx
- Sidebar.tsx
- Core Concepts
- contactKeys.ts
- mime.ts
- backup-prod.sh
- start-prod.sh
- restore-local.sh
- ref_vitest
- react
- Core Patterns
- src/types/index.ts
- Render Loop
- pixijs-core-concepts/SKILL.md
- MemberPane.tsx
- fakeIdentity.ts
- MemberInfo.tsx
- sections/index.ts
- auth.ts
- PhotoViewer.tsx
- server/src/types/index.ts
- searchShortcut.ts
- Renderers: WebGPU, WebGL, and Canvas
- Core Patterns
- Core Patterns
- Common Mistakes
- pixijs-scene-core-concepts/SKILL.md
- readCache.ts
- memberRoutes.ts
- importAllowedEmails.ts
- Position
- Common Mistakes
- useCardAnimation.ts
- GSAP with React
- hitl-loop.template.sh
- GSAP Performance
- GSAP Timeline

## God Nodes (most connected - your core abstractions)
1. `react` - 132 edges
2. `AccentColor` - 129 edges
3. `tailwind-merge` - 74 edges
4. `Member` - 67 edges
5. `COLOR_CLASSES` - 46 edges
6. `TeamFrame` - 40 edges
7. `@heroicons/react` - 38 edges
8. `FilterState` - 38 edges
9. `pixi.js` - 34 edges
10. `http()` - 31 edges

## Surprising Connections (you probably didn't know these)
- `pixijs-scene-container` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs/references/index.md → src/hooks/membersTree/animations/useFitViewAnimation.ts
- `Constructor options` --references--> `filters()`  [INFERRED]
  .agents/skills/pixijs-scene-graphics/SKILL.md → src/utils/filters/filterMembers.test.ts
- `Constructor options` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs-scene-container/SKILL.md → src/hooks/membersTree/animations/useFitViewAnimation.ts
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

## Communities (130 total, 8 thin omitted)

### Community 0 - "oidc.ts"
Cohesion: 0.35
Nodes (7): EligibilityMember, MemberMatch, phoneKey(), resolveTelegramIdentity(), TelegramIdentity, loadTelegramIdentity(), TelegramClaims

### Community 1 - "DropdownSelectInput.tsx"
Cohesion: 0.17
Nodes (16): DropdownMenu(), Props, DropdownPortal(), Props, PositionRowHeader(), ComboboxInput(), Props, ComboboxInputField() (+8 more)

### Community 2 - "sessions.ts"
Cohesion: 0.12
Nodes (25): CHALLENGE_TTL_MS, isProduction(), QUESTIONS_SHOWN, SESSION_COOKIE, SESSION_TTL_MS, SIGN_IN_COOKIE, useSecureCookie(), clearSessionCookie() (+17 more)

### Community 3 - "constants/filters.ts"
Cohesion: 0.08
Nodes (37): Constructor options, Effects, DATE_PICKER_CLASSES, EMPTY_FILTER_STATE, GENDER_VALUES, MENTOR_STATUSES, Props, useFilterSearchParams() (+29 more)

### Community 4 - "constants/canvas/index.ts"
Cohesion: 0.08
Nodes (26): pixi.js, MemberNodeAvatar(), Props, AVATAR_HIGH_RES_SIZE, lineageEdgePath, ACCIDENTAL_DRAG_MAX_DISTANCE, ACCIDENTAL_DRAG_MAX_MS, LONG_PRESS_MS (+18 more)

### Community 5 - "teamBlock.ts"
Cohesion: 0.17
Nodes (17): TEAM_COLUMN_GAP, TEAM_FRAME_HEADER, TEAM_FRAME_MIN_WIDTH, TEAM_FRAME_PADDING, TEAM_LAYOUT_COLUMNS, TEAM_LEADER_GAP, TEAM_MULTI_LEADER_EXTRA_GAP, TEAM_ROW_GAP (+9 more)

### Community 6 - "layout.tsx"
Cohesion: 0.17
Nodes (8): react-datepicker, metadata, nunito, RootLayout(), AuroraBackground(), readNumber(), useBakedAurora(), canBakeAurora()

### Community 7 - "http"
Cohesion: 0.08
Nodes (49): addMember(), ApiError, toApiError(), deleteMember(), editMember(), FamilyGroupOption, fetchFamilyGroups(), fetchFamilyTree() (+41 more)

### Community 8 - "TeamFormContent.tsx"
Cohesion: 0.14
Nodes (24): PositionAssignmentFields(), Props, Props, createEmptyPositionRow(), EMPTY_POSITION_ROW, findTeamByName(), getPositionRowSummary(), getRowPeriod() (+16 more)

### Community 9 - "teamLayout.ts"
Cohesion: 0.11
Nodes (28): TEAM_FRAME_GAP, TEAM_PACK_ASPECT, failOver(), getWorker(), Pending, requestLayout(), runInline(), computeTeamLayout() (+20 more)

### Community 10 - "teamFrame.ts"
Cohesion: 0.10
Nodes (42): Props, TeamBadge(), FILL_ALPHA, lerp(), STROKE_ALPHA, TeamFrame(), TeamOverviewLabel(), Props (+34 more)

### Community 11 - "DatesPane.tsx"
Cohesion: 0.18
Nodes (13): FlowerIcon(), Props, MapleLeafIcon(), Props, Placement, PLACEMENTS, Props, SeasonMotif() (+5 more)

### Community 12 - "anonymizeDemo.ts"
Cohesion: 0.14
Nodes (18): allowed, args, byId, factory, GROUP_NAMES, memberPhotos, nextFace, real (+10 more)

### Community 13 - "MemberNode.tsx"
Cohesion: 0.06
Nodes (39): @gsap/react, BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props, acquireEmojiTextures(), createEmojiTexture(), generateRandomPosition() (+31 more)

### Community 14 - "backfillGender.ts"
Cohesion: 0.09
Nodes (20): CODE_TTL_MS, escapeHtml(), pairs(), renderSignInCodeEmail(), alreadyDifferent, alreadySame, APPLY, args (+12 more)

### Community 15 - "aiFaces.ts"
Cohesion: 0.38
Nodes (3): createFaceSource(), Options, source()

### Community 16 - "EditMemberForm.tsx"
Cohesion: 0.09
Nodes (44): AddMemberForm(), buildMemberFormData(), ClearButton(), describeSubmitError(), EditMemberForm(), getInitialFormData(), FieldError(), MemberFormFields() (+36 more)

### Community 17 - "memberService.ts"
Cohesion: 0.19
Nodes (18): buildMemberFields(), buildMemberUpdateFields(), buildSharedFields(), buildSparseMemberFields(), assertMentorExists(), assertNoMentorCycle(), assertUniqueContacts(), createMember() (+10 more)

### Community 18 - "TeamFrame"
Cohesion: 0.10
Nodes (25): Props, Props, Props, Props, Props, Props, TeamFramesLayer(), Props (+17 more)

### Community 19 - "catalogValidation.ts"
Cohesion: 0.07
Nodes (34): Renderer selection at runtime, [MEDIUM] Using container.name instead of container.label, deleteCloudinaryImage(), extractCloudinaryPublicId(), parsePositionsPayload(), TEAM_INCLUDE, router, uploadTeamIcon (+26 more)

### Community 20 - "ref_vitest"
Cohesion: 0.12
Nodes (22): ChallengeState, isExpired(), isSolved(), pickRandom(), swapQuestion(), SwapResult, base, ChallengeView (+14 more)

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "utils/membersTree/index.ts"
Cohesion: 0.09
Nodes (34): LineageEdge(), DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN, MIN_ANIM_DURATION, PATTERN_LEN, RETRACT_BASE (+26 more)

### Community 23 - "SettingsPanel.tsx"
Cohesion: 0.15
Nodes (12): FamilyTreeIcon(), Props, EDGE_STYLE_OPTIONS, iconClass, ORIENTATION_OPTIONS, THEME_OPTIONS, TREE_MODE_OPTIONS, Props (+4 more)

### Community 24 - "teamService.ts"
Cohesion: 0.16
Nodes (25): getPositionKey(), ResolvedPosition, resolvePosition(), syncPositions(), MemberTransaction, assertCanEditMembers(), deriveTeamName(), resolveRole() (+17 more)

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
Nodes (33): GLOW, Props, QuestionCard(), ConfirmDeleteControl(), Props, GENDER_OPTIONS, GenderFormField(), Props (+25 more)

### Community 29 - "filterMembers.ts"
Cohesion: 0.15
Nodes (27): birthdayBoundKey(), countActiveFilters(), countActiveMemberFilters(), isFilterActive(), isIdListSet(), isListFilterSet(), matchesBirthday(), matchesFamilyGroup() (+19 more)

### Community 30 - "dependencies"
Cohesion: 0.11
Nodes (19): dependencies, date-fns, dotenv, elkjs, gsap, @gsap/react, @heroicons/react, lodash (+11 more)

### Community 31 - "server/package.json"
Cohesion: 0.07
Nodes (27): cloudinary, concurrently, helmet, multer, multer-storage-cloudinary, nodemon, ts-node, tsx (+19 more)

### Community 32 - "eligibility.ts"
Cohesion: 0.25
Nodes (11): EmailIdentity, normalizeEmail(), resolveEmailIdentity(), resolveMemberMatch(), loadEmailIdentity(), callbackErrorRedirect(), decideGoogleSignIn(), GoogleClaims (+3 more)

### Community 33 - "Common Mistakes"
Cohesion: 0.20
Nodes (10): Common Mistakes, [CRITICAL] App destroy without releaseGlobalResources, [HIGH] Destroying and recreating objects instead of recycling, [HIGH] Interleaving object types in scene graph, [HIGH] Loading many individual textures instead of spritesheets, [HIGH] Updating Text or HTMLText every frame, [HIGH] Using complex Graphics instead of textures, [MEDIUM] Not staggering bulk texture destruction (+2 more)

### Community 34 - "FilterState"
Cohesion: 0.17
Nodes (16): BirthdayFilterSection(), Props, ClearButton(), JoinYearFilterSection(), Props, Props, RangeInputs(), RangeSlot (+8 more)

### Community 35 - "ManageForm.tsx"
Cohesion: 0.16
Nodes (19): DropdownSelectInput(), ManageForm(), MemberMode, Props, Section, SECTIONS, TEAM_KINDS, TeamKind (+11 more)

### Community 36 - "package.json"
Cohesion: 0.10
Nodes (19): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+11 more)

### Community 37 - "Member"
Cohesion: 0.09
Nodes (23): date-fns, Props, Props, Props, Props, Props, Props, Member (+15 more)

### Community 38 - "checkConfig.ts"
Cohesion: 0.19
Nodes (14): assertConfig(), configProblems(), databaseName(), demoProblems(), Env, googleProblems(), telegramProblems(), good (+6 more)

### Community 39 - "utils/membersTree/index.ts"
Cohesion: 0.08
Nodes (46): EdgesLayer(), drawPolyline(), TeamEdgesLayer(), NODE_AVATAR_RADIUS, NODE_HEIGHT, NODE_WIDTH, TEAM_EDGE_DROP, TEAM_EDGE_SPREAD_STEP (+38 more)

### Community 40 - "Core Patterns"
Cohesion: 0.12
Nodes (20): Adding and removing children, API Reference, Bounds and coordinate conversion, Common Mistakes, Core Patterns, [CRITICAL] Adding children to leaf scene objects, Destroy, Finding and removing from parent (+12 more)

### Community 41 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+5 more)

### Community 42 - "ref_vitest"
Cohesion: 0.36
Nodes (5): answerMatches(), CYRILLIC_TO_LATIN, normalizeAnswer(), MIN_ACTIVE_QUESTIONS, DEMO_QUESTIONS

### Community 43 - "oidc.ts"
Cohesion: 0.13
Nodes (24): Container events, Transform, Lifecycle events, Origin (new in v8), express-rate-limit, openid-client, configs, cookieOptions() (+16 more)

### Community 44 - "CLAUDE.md"
Cohesion: 0.25
Nodes (7): Commands, Conventions, Deployment & data, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout

### Community 45 - "Container Hierarchy"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, Container Hierarchy, [CRITICAL] Adding children to a leaf, [HIGH] Destroying the parent without `children: true`, [MEDIUM] Mutating `children` during iteration, Quick Start

### Community 46 - "ApplicationOptions reference"
Cohesion: 0.06
Nodes (32): Accessibility, ApplicationOptions reference, Background, Culler (CullerPluginOptions), Deprecated (GC — prefer the unified options above), Events, Garbage collection, Graphics (+24 more)

### Community 47 - "MembersTreeContent.tsx"
Cohesion: 0.10
Nodes (32): zustand, MembersTree(), Props, EVENT_FEATURES, MembersTreeContent(), Props, useDraftFilterCount(), SettingsPanel() (+24 more)

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "Toolbar.tsx"
Cohesion: 0.12
Nodes (25): fetchSession(), SessionInfo, MemberSidebar(), Props, TeamInfoSidebar(), DemoBadge(), focusSearchInput(), Props (+17 more)

### Community 50 - "ThemeContext.tsx"
Cohesion: 0.16
Nodes (10): applyCssTokens(), ThemeContext, ThemeProvider(), useIsMobileScreen(), Options, Position, noopSubscribe(), useIsHydrated() (+2 more)

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

### Community 57 - "settingsStore.ts"
Cohesion: 0.29
Nodes (9): DEFAULT_SETTINGS, readLegacyTheme(), SETTINGS_STORAGE_KEY, SettingsActions, SettingsState, initialState, { storageMock }, OrientationSetting (+1 more)

### Community 58 - "pixijs/SKILL.md"
Cohesion: 0.18
Nodes (9): API Reference, Quick Start, Advanced, Fallback: canonical PixiJS docs, Foundations, How to use this skill, Scene Objects, Skill router (+1 more)

### Community 59 - "Core Patterns"
Cohesion: 0.12
Nodes (17): Application destroy/recreate cycle, Batching optimization, cacheAsTexture for performance, Core Patterns, Culling, Filters and masks cost, Graphics performance, Low-level rendering optimizations (+9 more)

### Community 60 - "emailCodes.ts"
Cohesion: 0.18
Nodes (13): CodeOwner, CodeStore, generateCode(), hashCode(), issueCode(), MAX_CODE_ATTEMPTS, sameHash(), StoredCode (+5 more)

### Community 61 - "mailer/index.ts"
Cohesion: 0.16
Nodes (14): consoleMailer, createGmailMailer(), GmailConfig, getMailer(), createResendMailer(), ResendConfig, message, Env (+6 more)

### Community 62 - "src/index.ts"
Cohesion: 0.09
Nodes (24): compression, cors, express, @prisma/adapter-pg, @prisma/config, adapter, prisma, app (+16 more)

### Community 63 - "AvatarFileInput"
Cohesion: 0.60
Nodes (3): AvatarFileInput(), exceedsUploadLimit(), MAX_UPLOAD_BYTES

### Community 64 - "memberUpdateValidation.ts"
Cohesion: 0.15
Nodes (12): zod, ExistingMember, findClearedFields(), memberUpdateBodySchema, parsePhones(), sparseMemberBodySchema, splitName(), completeMember (+4 more)

### Community 65 - "BEST Family Tree"
Cohesion: 0.11
Nodes (18): 1. Clone and configure environment, 2. Start the application, 3. Run database migrations, 4. Access the app, Architecture, Available Commands, Backend Commands (run inside container), Backups (+10 more)

### Community 66 - "Diagnosing Bugs"
Cohesion: 0.13
Nodes (14): Completion criterion: a tight loop that goes red, Diagnosing Bugs, Minimise, Non-deterministic bugs, Phase 1: Build a feedback loop, Phase 2: Reproduce + minimise, Phase 3: Hypothesise, Phase 4: Instrument (+6 more)

### Community 67 - "dimensions.ts"
Cohesion: 0.09
Nodes (27): @pixi/react, PixiElements, @pixi/react, pixi-viewport, Props, EMPTY_IDS, SharpAvatarTracker(), View (+19 more)

### Community 68 - "bakeParams.ts"
Cohesion: 0.27
Nodes (13): AuroraBakeInput, bakeAuroraLayers(), BAKE_SCALE, BLUR_SPREAD, CONIC_LAYERS, ConicLayerSpec, cssAngleToCanvasRadians(), getBakeFilter() (+5 more)

### Community 69 - "access.ts"
Cohesion: 0.20
Nodes (11): canEditMember(), hasAccess(), RANK, CONTACT_FIELDS, AccessRank, Express, Request, Session (+3 more)

### Community 70 - "elkLayout.ts"
Cohesion: 0.29
Nodes (9): elkjs, NODE_CARD_TOP, elkNodeSize(), LAYER_SPACE_LR, layoutOptions(), layoutWithElk(), loadElk(), stackIsolatedNodes() (+1 more)

### Community 71 - "Core Patterns"
Cohesion: 0.13
Nodes (14): API Reference, boundsArea optimization, Common Mistakes, Core Patterns, Culling, HIGH: Expecting automatic culling, HIGH: Using addChild on RenderLayer, MEDIUM: Expecting filters on ancestors to apply to layer children (+6 more)

### Community 72 - "Core Patterns"
Cohesion: 0.07
Nodes (27): Advanced shape primitives, API Reference, Cloning, clearing, and bounds, Common Mistakes, Constructor options, Core Patterns, [CRITICAL] Using lineStyle instead of stroke, [CRITICAL] Using old shape method names (+19 more)

### Community 73 - "dependencies"
Cohesion: 0.04
Nodes (47): dependencies, cloudinary, compression, cors, dotenv, express, express-rate-limit, helmet (+39 more)

### Community 74 - "constants/theme.ts"
Cohesion: 0.15
Nodes (12): darkTheme, DEFAULT_THEME, lightTheme, THEMES, ThemeContextValue, CanvasColors, CanvasThemeTokens, CssThemeTokens (+4 more)

### Community 75 - "TeamSearch.tsx"
Cohesion: 0.08
Nodes (34): LionIcon(), Props, FiltersHeader(), Props, compare(), getSearchable(), MemberSearch(), Props (+26 more)

### Community 76 - "emailRoutes.ts"
Cohesion: 0.20
Nodes (12): authSecret(), isDemoMode(), prismaCodeStore, buildSessionInfo(), bodyEmail(), emailKey(), ipKey(), requestLimits (+4 more)

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
Nodes (23): CATEGORY_ICONS, FilterCategoryRail(), Props, RailButton(), RailButtonProps, FiltersFooter(), Props, FiltersPanel() (+15 more)

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

### Community 88 - "filtersStore.ts"
Cohesion: 0.17
Nodes (18): derive(), FiltersActions, FiltersState, initialState, TreeMode, areSetsEqual(), computeFilteredMembers(), FilteredMembers (+10 more)

### Community 89 - "Foundations"
Cohesion: 0.15
Nodes (12): Advanced, Foundations, pixijs-application, pixijs-core-concepts, pixijs-events, pixijs-performance, pixijs-scene-container, pixijs-scene-core-concepts (+4 more)

### Community 90 - "FitViewButton.tsx"
Cohesion: 0.30
Nodes (9): FitViewButton(), Props, PanelResetButton(), Props, Props, ToolbarIconButton(), Props, ToolbarTooltip() (+1 more)

### Community 91 - "Sidebar.tsx"
Cohesion: 0.18
Nodes (10): react-dom, Props, Props, Sidebar(), SidebarFooterContext, Props, SidebarHandle(), SidebarHeader() (+2 more)

### Community 92 - "Core Concepts"
Cohesion: 0.18
Nodes (11): Container vs leaf (CRITICAL), Core Concepts, Culling, Destroy semantics, Lifecycle events, Masking, Render groups, Render order and explicit z-ordering (+3 more)

### Community 93 - "contactKeys.ts"
Cohesion: 0.20
Nodes (10): duplicates, fields, groups, ContactFields, contactKey(), ContactPlatform, FIELD_PLATFORMS, findContactCollision() (+2 more)

### Community 94 - "mime.ts"
Cohesion: 0.35
Nodes (9): RFC-2045, RFC-2047, base64Body(), buildMime(), encodeHeaderText(), formatAddress(), isAscii(), noLineBreaks() (+1 more)

### Community 98 - "ref_vitest"
Cohesion: 0.18
Nodes (3): hasDemoPhoto(), edges, ids

### Community 99 - "react"
Cohesion: 0.15
Nodes (25): gsap, react, getFitViewTargetScale(), useFitViewAnimation(), useFocusFrameAnimation(), useFocusNodeAnimation(), useViewportAnimation(), clearViewportTimeline() (+17 more)

### Community 100 - "Core Patterns"
Cohesion: 0.22
Nodes (9): Coordinate conversion, Core Patterns, Cumulative alpha (getGlobalAlpha), Global, local, and screen coordinates, Pivot, Position, scale, rotation, Sizing via width, height, setSize, Skew (+1 more)

### Community 101 - "src/types/index.ts"
Cohesion: 0.09
Nodes (48): @heroicons/react, tailwind-merge, Props, Props, Props, Props, Props, Props (+40 more)

### Community 102 - "Render Loop"
Cohesion: 0.22
Nodes (8): API Reference, Common Mistakes, [CRITICAL] Treating the ticker callback arg as a number, Frame lifecycle, [HIGH] Using `updateTransform` for per-frame logic, [MEDIUM] Assuming ticker callbacks run after render, Quick Start, Render Loop

### Community 103 - "pixijs-core-concepts/SKILL.md"
Cohesion: 0.22
Nodes (8): API Reference, Decision guide, Environments, Quick concepts, Quick Start, Renderer = systems + pipes, The render loop, Topics

### Community 104 - "MemberPane.tsx"
Cohesion: 0.13
Nodes (11): ACTIVITY_ICONS, IconComponent, IconProps, GENDER_ICONS, IconProps, ACTIVITY_PILLS, GENDER_PILLS, STATUS_PILLS (+3 more)

### Community 105 - "fakeIdentity.ts"
Cohesion: 0.27
Nodes (7): @faker-js/faker, createIdentityFactory(), firstFree(), OPERATOR_CODES, none, MAP, translit()

### Community 106 - "MemberInfo.tsx"
Cohesion: 0.05
Nodes (56): next, FacebookIcon(), FacebookGlyph(), InstagramGlyph(), LinkedinGlyph(), svgProps, TelegramGlyph(), InstagramIcon() (+48 more)

### Community 107 - "sections/index.ts"
Cohesion: 0.24
Nodes (6): FilterCheckbox(), Props, Props, Option, Props, Props

### Community 108 - "auth.ts"
Cohesion: 0.06
Nodes (58): AccessLevel, AuthMethod, Challenge, ChallengeQuestion, logout(), post(), RequestCodeOutcome, requestEmailCode() (+50 more)

### Community 109 - "PhotoViewer.tsx"
Cohesion: 0.08
Nodes (42): isTreeReady(), MembersTree, MembersTreeDynamic(), Props, TreeState, PhotoViewer(), thumbRadius(), Viewer() (+34 more)

### Community 110 - "server/src/types/index.ts"
Cohesion: 0.07
Nodes (30): mongodb, ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember, STATUSES_MAP (+22 more)

### Community 111 - "searchShortcut.ts"
Cohesion: 0.33
Nodes (6): EDITABLE_TAGS, isEditableTarget(), isSearchShortcut(), ShortcutKeys, Keys, useSearchShortcut()

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

### Community 113 - "Core Patterns"
Cohesion: 0.25
Nodes (8): Add, remove, swap, Child queries, Core Patterns, Destroying sub-trees, Iterating children, Label-based tree navigation, Reparenting with transform preservation, Replacing a child

### Community 114 - "Core Patterns"
Cohesion: 0.29
Nodes (7): Core Patterns, Frame rate capping, Manual rendering, Per-object update via `onRender`, Priority order, Stop and start, Time units

### Community 115 - "Common Mistakes"
Cohesion: 0.33
Nodes (6): Common Mistakes, [CRITICAL] Adding children to a leaf display object, [CRITICAL] Referencing DisplayObject, [HIGH] Forgetting isRenderGroup on large static subtrees, [HIGH] Treating child.x as world space, [MEDIUM] sortableChildren without zIndex

### Community 116 - "pixijs-scene-core-concepts/SKILL.md"
Cohesion: 0.25
Nodes (6): API Reference, Leaf comparison: which skill covers which object, Quick Start, References, Tooling, When to use what (quick decisions)

### Community 117 - "readCache.ts"
Cohesion: 0.53
Nodes (3): bumpDataVersion(), createVersionedCache(), trackWrites()

### Community 119 - "memberRoutes.ts"
Cohesion: 0.17
Nodes (16): toMemberResponse(), loadFamilyTree, loadReducedFamilyTree, router, parsePhoneNumbers(), MEMBER_INCLUDE, serializeMember(), assertCanEditMember() (+8 more)

### Community 120 - "importAllowedEmails.ts"
Cohesion: 0.19
Nodes (12): AllowedRow, AllowlistDiff, diffAllowlist(), looksLikeEmail(), parseAllowlistCsv(), ParsedAllowlist, splitLine(), apply (+4 more)

### Community 121 - "Position"
Cohesion: 0.40
Nodes (5): Position, Bottom, Left, Right, Top

### Community 124 - "Common Mistakes"
Cohesion: 0.50
Nodes (4): Common Mistakes, [HIGH] Accessing app.renderer before init() resolves, [HIGH] Setting DOMAdapter after Application.init, [MEDIUM] Treating `preference` as a guarantee

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
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 995 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `filters()` connect `constants/filters.ts` to `Core Patterns`?**
  _High betweenness centrality (0.110) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _45 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `sessions.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.11931818181818182 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `DropdownSelectInput.tsx`, `constants/filters.ts`, `constants/canvas/index.ts`, `layout.tsx`, `http`, `TeamFormContent.tsx`, `teamFrame.ts`, `MemberNode.tsx`, `EditMemberForm.tsx`, `TeamFrame`, `utils/membersTree/index.ts`, `GroupedCheckListFilter.tsx`, `TeamFormContent.tsx`, `FilterState`, `ManageForm.tsx`, `package.json`, `Member`, `utils/membersTree/index.ts`, `MembersTreeContent.tsx`, `Toolbar.tsx`, `ThemeContext.tsx`, `dimensions.ts`, `TeamSearch.tsx`, `FilterCategoryPane.tsx`, `FilterState`, `FitViewButton.tsx`, `Sidebar.tsx`, `src/types/index.ts`, `MemberPane.tsx`, `MemberInfo.tsx`, `auth.ts`, `PhotoViewer.tsx`, `searchShortcut.ts`, `useCardAnimation.ts`?**
  _High betweenness centrality (0.104) - this node is a cross-community bridge._
- **Should `constants/filters.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.08145363408521303 - nodes in this community are weakly interconnected._
- **Why does `Constructor options` connect `Core Patterns` to `constants/filters.ts`?**
  _High betweenness centrality (0.076) - this node is a cross-community bridge._
- **Should `constants/canvas/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.08461538461538462 - nodes in this community are weakly interconnected._