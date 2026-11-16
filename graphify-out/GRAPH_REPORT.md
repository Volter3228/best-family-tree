# Graph Report - best-family-tree  (2026-11-16)

## Corpus Check
- 567 files · ~187,591 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 29 file(s) not represented in the graph (top: .prisma 9, (none) 7, .css 6)

## Summary
- 2790 nodes · 7178 edges · 139 communities (131 shown, 8 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 76 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `9e339772`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- oidc.ts
- DropdownOption
- sessions.ts
- constants/filters.ts
- filtersStore.ts
- MemberInfo.tsx
- memberService.ts
- http
- TeamFormContent.tsx
- Core Patterns
- teamFrame.ts
- DatesPane.tsx
- anonymizeDemo.ts
- hooks/index.ts
- ManageForm.tsx
- aiFaces.ts
- MemberFormFields.tsx
- memberUpdateValidation.ts
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
- TeamBadge.tsx
- filterMembers.ts
- dependencies
- server/package.json
- EditMemberForm.tsx
- Common Mistakes
- FilterState
- ManageForm.tsx
- package.json
- Member
- MemberInfo.tsx
- utils/membersTree/index.ts
- Core Patterns
- devDependencies
- ref_vitest
- oidc.ts
- CLAUDE.md
- Core Patterns
- ApplicationOptions reference
- useMembersStore
- During the session
- teamGroups.ts
- mime.ts
- AGENTS.md
- scripts
- pixijs-events/SKILL.md
- BEST Family Tree
- next.config.mjs
- postcss.config.mjs
- contactKeys.ts
- pixijs/SKILL.md
- Core Patterns
- emailCodes.ts
- checkConfig.ts
- backfillGender.ts
- @heroicons/react
- TeamFormContent.tsx
- BEST Family Tree
- Diagnosing Bugs
- MembersTreeContent.tsx
- layout.tsx
- access.ts
- teamLayout.ts
- Core Patterns
- Core Patterns
- dependencies
- src/index.ts
- TeamSearch.tsx
- Common Mistakes
- mailer/index.ts
- Core Patterns
- Core Patterns
- Core Patterns
- Common Mistakes
- FilterState
- Core Patterns
- Constructor options (Container-inherited)
- Test-Driven Development
- GSAP Core
- Core Patterns
- Toolbar.tsx
- Foundations
- emailRoutes.ts
- FitViewButton.tsx
- Core Concepts
- useTeamForm.ts
- dimensions.ts
- backup-prod.sh
- start-prod.sh
- restore-local.sh
- devLogin.ts
- useTreeLayout.ts
- Core Patterns
- src/types/index.ts
- Render Loop
- pixijs-core-concepts/SKILL.md
- MemberPane.tsx
- MemberInfoActions.tsx
- constants/canvas/index.ts
- auth.ts
- PhotoViewer.tsx
- server/src/types/index.ts
- searchShortcut.ts
- Renderers: WebGPU, WebGL, and Canvas
- TeamInfo.tsx
- Core Patterns
- TeamLogo.tsx
- pixijs-scene-core-concepts/SKILL.md
- teamTypeRoutes.ts
- useMeta.ts
- memberRoutes.ts
- importAllowedEmails.ts
- MemberBirthdayAnimation.tsx
- Position
- FilterSection
- Common Mistakes
- cardVisibilityDriver.ts
- utils/strings.ts
- httpErrors.ts
- pixijs-application/SKILL.md
- GSAP with React
- react
- hitl-loop.template.sh
- DatesPane.tsx
- SubmitButton.tsx
- ActivityState
- GSAP Performance
- GSAP Timeline

## God Nodes (most connected - your core abstractions)
1. `react` - 131 edges
2. `AccentColor` - 129 edges
3. `tailwind-merge` - 74 edges
4. `Member` - 67 edges
5. `COLOR_CLASSES` - 46 edges
6. `TeamFrame` - 40 edges
7. `@heroicons/react` - 38 edges
8. `FilterState` - 38 edges
9. `pixi.js` - 33 edges
10. `http()` - 31 edges

## Surprising Connections (you probably didn't know these)
- `pixijs-scene-container` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs/references/index.md → src/hooks/membersTree/animations/useFitViewAnimation.ts
- `[HIGH] Expecting getBounds() to return a Rectangle` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs-scene-container/SKILL.md → src/hooks/membersTree/animations/useFitViewAnimation.ts
- `Constructor options` --references--> `filters()`  [INFERRED]
  .agents/skills/pixijs-scene-graphics/SKILL.md → src/utils/filters/filterMembers.test.ts
- `Bounds and coordinate conversion` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs-scene-container/SKILL.md → src/hooks/membersTree/animations/useFitViewAnimation.ts
- `Finding and removing from parent` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs-scene-container/SKILL.md → src/hooks/membersTree/animations/useFitViewAnimation.ts

## Import Cycles
- 3-file cycle: `src/utils/index.ts -> src/utils/membersTree/index.ts -> src/utils/membersTree/lineageEdgePath.ts -> src/utils/index.ts`
- 4-file cycle: `src/context/ThemeContext.tsx -> src/hooks/index.ts -> src/hooks/membersTree/index.ts -> src/hooks/membersTree/useCanvasTheme.ts -> src/context/ThemeContext.tsx`
- 4-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/members.ts -> src/models/index.ts -> src/models/Member.ts`
- 4-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/tree.ts -> src/models/index.ts -> src/models/Member.ts`
- 5-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/filters.ts -> src/types/members.ts -> src/models/index.ts -> src/models/Member.ts`

## Communities (139 total, 8 thin omitted)

### Community 0 - "oidc.ts"
Cohesion: 0.21
Nodes (12): EligibilityMember, EmailIdentity, MemberMatch, normalizeEmail(), resolveEmailIdentity(), resolveMemberMatch(), loadEmailIdentity(), phoneKey() (+4 more)

### Community 1 - "DropdownOption"
Cohesion: 0.24
Nodes (10): DropdownMenu(), ComboboxInput(), Props, ComboboxInputField(), useComboboxState(), Props, Options, Position (+2 more)

### Community 2 - "sessions.ts"
Cohesion: 0.14
Nodes (24): CHALLENGE_TTL_MS, isDemoMode(), isProduction(), QUESTIONS_SHOWN, SESSION_COOKIE, SESSION_TTL_MS, SIGN_IN_COOKIE, useSecureCookie() (+16 more)

### Community 3 - "constants/filters.ts"
Cohesion: 0.16
Nodes (21): ACTIVITY_STATES, DATE_PICKER_CLASSES, GENDER_VALUES, JOIN_SEASONS, MEMBER_STATUSES, FILTER_CATEGORY_KEYS, isCategoryActive(), isCategoryActiveByKey (+13 more)

### Community 4 - "filtersStore.ts"
Cohesion: 0.14
Nodes (18): FiltersFooter(), Props, FiltersPanel(), Props, FilterCategoryPane(), SELF_SCROLLING_PANES, useDraftFilterCount(), EMPTY_FILTER_STATE (+10 more)

### Community 5 - "MemberInfo.tsx"
Cohesion: 0.12
Nodes (18): InfoSection(), Props, Props, MemberPositions(), Props, MenteesGrid(), Props, PositionBadge() (+10 more)

### Community 6 - "memberService.ts"
Cohesion: 0.15
Nodes (23): buildMemberFields(), buildMemberUpdateFields(), buildSharedFields(), buildSparseMemberFields(), getPositionKey(), ResolvedPosition, syncPositions(), MemberTransaction (+15 more)

### Community 7 - "http"
Cohesion: 0.16
Nodes (21): addMember(), ApiError, toApiError(), deleteMember(), editMember(), FamilyGroupOption, fetchFamilyGroups(), fetchFamilyTree() (+13 more)

### Community 8 - "TeamFormContent.tsx"
Cohesion: 0.17
Nodes (22): PositionAssignmentFields(), Props, EMPTY_POSITION_ROW, findTeamByName(), getPositionRowSummary(), getRowPeriod(), getTeamSelectionPatch(), getTeamTypeSelectionPatch() (+14 more)

### Community 9 - "Core Patterns"
Cohesion: 0.22
Nodes (9): Application properties, Core Patterns, CullerPlugin (opt-in), Custom Application plugins, Key init options, Lifecycle: construct, init, render, destroy, Manual render loop, ResizePlugin (+1 more)

### Community 10 - "teamFrame.ts"
Cohesion: 0.08
Nodes (38): TEAM_COLUMN_GAP, TEAM_EDGE_DROP, TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_SPREAD_WIDTH, TEAM_EDGE_STUB, TEAM_FRAME_HEADER, TEAM_FRAME_MIN_WIDTH, TEAM_FRAME_PADDING (+30 more)

### Community 11 - "DatesPane.tsx"
Cohesion: 0.22
Nodes (11): FlowerIcon(), Props, MapleLeafIcon(), Props, Placement, PLACEMENTS, SeasonMotif(), MemberInfoCover() (+3 more)

### Community 12 - "anonymizeDemo.ts"
Cohesion: 0.12
Nodes (19): allowed, args, byId, factory, GROUP_NAMES, memberPhotos, nextFace, real (+11 more)

### Community 13 - "hooks/index.ts"
Cohesion: 0.05
Nodes (51): pixi.js, AVATAR_HIT_AREA, CARD_PIVOT, EMPTY_FILTERS, getCullArea(), MemberNode(), NODE_HIT_AREA, NODE_PIVOT (+43 more)

### Community 14 - "ManageForm.tsx"
Cohesion: 0.18
Nodes (10): Cloning, clearing, and bounds, MembersTree(), Props, Props, Props, Props, Props, registerPixiPlugins() (+2 more)

### Community 15 - "aiFaces.ts"
Cohesion: 0.38
Nodes (3): createFaceSource(), Options, source()

### Community 16 - "MemberFormFields.tsx"
Cohesion: 0.09
Nodes (30): FieldError(), Props, SocialMediaFormFields(), TextInput(), CheckedField, getStoredFieldValues(), Links, StoredMemberValues (+22 more)

### Community 17 - "memberUpdateValidation.ts"
Cohesion: 0.15
Nodes (12): zod, ExistingMember, findClearedFields(), memberUpdateBodySchema, parsePhones(), sparseMemberBodySchema, splitName(), completeMember (+4 more)

### Community 18 - "TeamFrame"
Cohesion: 0.13
Nodes (24): Props, Props, Props, Props, TeamFramesLayer(), Props, FIXED_EDGE_WIDTH, TEAM_OVERVIEW_EDGE_ALPHA (+16 more)

### Community 19 - "catalogValidation.ts"
Cohesion: 0.09
Nodes (25): Renderer selection at runtime, [MEDIUM] Using container.name instead of container.label, parsePositionsPayload(), router, booleanLike, formatZodErrors(), isValidPeriod(), name() (+17 more)

### Community 20 - "ref_vitest"
Cohesion: 0.14
Nodes (20): answerMatches(), CYRILLIC_TO_LATIN, normalizeAnswer(), ChallengeState, isExpired(), isSolved(), pickRandom(), swapQuestion() (+12 more)

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "utils/membersTree/index.ts"
Cohesion: 0.13
Nodes (21): LineageEdge(), DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN, MIN_ANIM_DURATION, PATTERN_LEN, RETRACT_BASE (+13 more)

### Community 23 - "SettingsPanel.tsx"
Cohesion: 0.10
Nodes (26): FamilyTreeIcon(), Props, EDGE_STYLE_OPTIONS, iconClass, ORIENTATION_OPTIONS, THEME_OPTIONS, TREE_MODE_OPTIONS, Props (+18 more)

### Community 24 - "teamService.ts"
Cohesion: 0.17
Nodes (23): uploadMiddleware(), resolvePosition(), deriveTeamName(), resolveRole(), resolveTeam(), resolveTeamType(), RoleRef, TeamRef (+15 more)

### Community 25 - "GroupedCheckListFilter.tsx"
Cohesion: 0.14
Nodes (21): TeamsPane(), CheckBox(), Props, byLabel(), CheckListFilter(), CheckOption, Props, useStableOrder() (+13 more)

### Community 26 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, esModuleInterop, forceConsistentCasingInFileNames, module, moduleResolution, noImplicitAny, outDir, paths (+12 more)

### Community 27 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+12 more)

### Community 28 - "TeamBadge.tsx"
Cohesion: 0.07
Nodes (44): Props, TeamBadge(), FILL_ALPHA, lerp(), Props, STROKE_ALPHA, TeamFrame(), Props (+36 more)

### Community 29 - "filterMembers.ts"
Cohesion: 0.14
Nodes (28): birthdayBoundKey(), countActiveFilters(), countActiveMemberFilters(), isFilterActive(), isIdListSet(), isListFilterSet(), matchesBirthday(), matchesFamilyGroup() (+20 more)

### Community 30 - "dependencies"
Cohesion: 0.11
Nodes (19): dependencies, date-fns, dotenv, elkjs, gsap, @gsap/react, @heroicons/react, lodash (+11 more)

### Community 31 - "server/package.json"
Cohesion: 0.08
Nodes (23): concurrently, nodemon, openid-client, @prisma/adapter-pg, ts-node, tsx, @types/compression, @types/cors (+15 more)

### Community 32 - "EditMemberForm.tsx"
Cohesion: 0.17
Nodes (21): AddMemberForm(), buildMemberFormData(), ClearButton(), SubmitButton(), describeSubmitError(), EditMemberForm(), getInitialFormData(), FormError() (+13 more)

### Community 33 - "Common Mistakes"
Cohesion: 0.20
Nodes (10): Common Mistakes, [CRITICAL] App destroy without releaseGlobalResources, [HIGH] Destroying and recreating objects instead of recycling, [HIGH] Interleaving object types in scene graph, [HIGH] Loading many individual textures instead of spritesheets, [HIGH] Updating Text or HTMLText every frame, [HIGH] Using complex Graphics instead of textures, [MEDIUM] Not staggering bulk texture destruction (+2 more)

### Community 34 - "FilterState"
Cohesion: 0.18
Nodes (15): BirthdayFilterSection(), Props, ClearButton(), Props, Props, RangeInputs(), RangeSlot, parseYear() (+7 more)

### Community 35 - "ManageForm.tsx"
Cohesion: 0.21
Nodes (15): GENDER_OPTIONS, GenderFormField(), DropdownSelectInput(), ManageForm(), MemberMode, Section, SECTIONS, TEAM_KINDS (+7 more)

### Community 36 - "package.json"
Cohesion: 0.10
Nodes (19): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+11 more)

### Community 37 - "Member"
Cohesion: 0.09
Nodes (19): date-fns, Props, NodesLayer(), Props, Props, Props, Props, Props (+11 more)

### Community 38 - "MemberInfo.tsx"
Cohesion: 0.12
Nodes (23): LionIcon(), compare(), getSearchable(), MemberSearch(), Props, Props, SearchSuggestionItem(), AvatarFileInput() (+15 more)

### Community 39 - "utils/membersTree/index.ts"
Cohesion: 0.12
Nodes (35): EdgesLayer(), drawPolyline(), TeamEdgesLayer(), Point, SegmentData, TeamEdge, buildSegmentFromPositions(), DashStrokeOptions (+27 more)

### Community 40 - "Core Patterns"
Cohesion: 0.11
Nodes (21): Adding and removing children, Bounds and coordinate conversion, Constructor options, Container events, Core Patterns, Destroy, Finding and removing from parent, Leaves vs containers (+13 more)

### Community 41 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+5 more)

### Community 42 - "ref_vitest"
Cohesion: 0.17
Nodes (7): @faker-js/faker, createIdentityFactory(), firstFree(), OPERATOR_CODES, none, MAP, translit()

### Community 43 - "oidc.ts"
Cohesion: 0.15
Nodes (20): callbackErrorRedirect(), decideGoogleSignIn(), GoogleClaims, GoogleDecision, decide(), verified, configs, cookieOptions() (+12 more)

### Community 44 - "CLAUDE.md"
Cohesion: 0.25
Nodes (7): Commands, Conventions, Deployment & data, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout

### Community 45 - "Core Patterns"
Cohesion: 0.12
Nodes (15): Add, remove, swap, API Reference, Child queries, Common Mistakes, Container Hierarchy, Core Patterns, [CRITICAL] Adding children to a leaf, Destroying sub-trees (+7 more)

### Community 46 - "ApplicationOptions reference"
Cohesion: 0.12
Nodes (17): Accessibility, ApplicationOptions reference, Background, Culler (CullerPluginOptions), Deprecated (GC — prefer the unified options above), Events, Garbage collection, Graphics (+9 more)

### Community 47 - "useMembersStore"
Cohesion: 0.18
Nodes (17): MemberFormFields(), DateInput(), membersActions, {
  setMembers,
  reloadMembers,
  addMember,
  updateMember,
  selectMember,
  getMentorsList,
}, useMemberById(), useMembersMap(), useMentees(), useMentorsList() (+9 more)

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "teamGroups.ts"
Cohesion: 0.16
Nodes (19): DEFAULT_POSITION, MembersState, ChildrenMap, MembersMap, areSetsEqual(), computeFilteredMembers(), Source, transformMembersToFlowValues() (+11 more)

### Community 50 - "mime.ts"
Cohesion: 0.29
Nodes (11): RFC-2045, RFC-2047, createGmailMailer(), GmailConfig, base64Body(), buildMime(), encodeHeaderText(), formatAddress() (+3 more)

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

### Community 57 - "contactKeys.ts"
Cohesion: 0.20
Nodes (10): duplicates, fields, groups, ContactFields, contactKey(), ContactPlatform, FIELD_PLATFORMS, findContactCollision() (+2 more)

### Community 58 - "pixijs/SKILL.md"
Cohesion: 0.18
Nodes (9): API Reference, Quick Start, Advanced, Fallback: canonical PixiJS docs, Foundations, How to use this skill, Scene Objects, Skill router (+1 more)

### Community 59 - "Core Patterns"
Cohesion: 0.12
Nodes (17): Application destroy/recreate cycle, Batching optimization, cacheAsTexture for performance, Core Patterns, Culling, Filters and masks cost, Graphics performance, Low-level rendering optimizations (+9 more)

### Community 60 - "emailCodes.ts"
Cohesion: 0.18
Nodes (13): CODE_TTL_MS, CodeStore, generateCode(), hashCode(), issueCode(), MAX_CODE_ATTEMPTS, sameHash(), StoredCode (+5 more)

### Community 61 - "checkConfig.ts"
Cohesion: 0.19
Nodes (14): assertConfig(), configProblems(), databaseName(), demoProblems(), Env, googleProblems(), telegramProblems(), good (+6 more)

### Community 62 - "backfillGender.ts"
Cohesion: 0.06
Nodes (30): express, @prisma/config, deleteQuestionSessions(), row(), adapter, prisma, alreadyDifferent, alreadySame (+22 more)

### Community 63 - "@heroicons/react"
Cohesion: 0.20
Nodes (8): next, Props, Props, Props, config, exceedsUploadLimit(), MAX_UPLOAD_BYTES, UPLOAD_TOO_LARGE_MESSAGE

### Community 64 - "TeamFormContent.tsx"
Cohesion: 0.17
Nodes (18): ConfirmDeleteControl(), Props, PositionFormFields(), createEmptyPositionRow(), getRoleOptions(), getTeamOptions(), getTeamTypeOptions(), usePositionRows() (+10 more)

### Community 65 - "BEST Family Tree"
Cohesion: 0.11
Nodes (18): 1. Clone and configure environment, 2. Start the application, 3. Run database migrations, 4. Access the app, Architecture, Available Commands, Backend Commands (run inside container), Backups (+10 more)

### Community 66 - "Diagnosing Bugs"
Cohesion: 0.13
Nodes (14): Completion criterion: a tight loop that goes red, Diagnosing Bugs, Minimise, Non-deterministic bugs, Phase 1: Build a feedback loop, Phase 2: Reproduce + minimise, Phase 3: Hypothesise, Phase 4: Instrument (+6 more)

### Community 67 - "MembersTreeContent.tsx"
Cohesion: 0.17
Nodes (22): MemberSidebar(), EVENT_FEATURES, MembersTreeContent(), Props, TeamInfoSidebar(), ViewportCulling(), HeaderChip(), MemberSidebarContent() (+14 more)

### Community 68 - "layout.tsx"
Cohesion: 0.07
Nodes (32): react-datepicker, metadata, nunito, RootLayout(), AuroraBackground(), darkTheme, DEFAULT_THEME, lightTheme (+24 more)

### Community 69 - "access.ts"
Cohesion: 0.15
Nodes (15): canEditMember(), hasAccess(), RANK, CONTACT_FIELDS, toMemberResponse(), AccessRank, Express, Request (+7 more)

### Community 70 - "teamLayout.ts"
Cohesion: 0.08
Nodes (38): elkjs, TEAM_FRAME_GAP, TEAM_PACK_ASPECT, failOver(), getWorker(), Pending, requestLayout(), runInline() (+30 more)

### Community 71 - "Core Patterns"
Cohesion: 0.13
Nodes (14): API Reference, boundsArea optimization, Common Mistakes, Core Patterns, Culling, HIGH: Expecting automatic culling, HIGH: Using addChild on RenderLayer, MEDIUM: Expecting filters on ancestors to apply to layer children (+6 more)

### Community 72 - "Core Patterns"
Cohesion: 0.13
Nodes (14): Advanced shape primitives, Core Patterns, Default styles via setFillStyle / setStrokeStyle, Draw-time transforms, Drawing a texture directly, Gradients and patterns, GraphicsContext sharing, GraphicsContext utilities (+6 more)

### Community 73 - "dependencies"
Cohesion: 0.04
Nodes (47): dependencies, cloudinary, compression, cors, dotenv, express, express-rate-limit, helmet (+39 more)

### Community 74 - "src/index.ts"
Cohesion: 0.10
Nodes (19): compression, cors, express-rate-limit, helmet, app, checkOrigin(), WRITE_METHODS, router (+11 more)

### Community 75 - "TeamSearch.tsx"
Cohesion: 0.13
Nodes (17): Props, SearchPanel(), Props, SearchSuggestionRow(), compare(), getSearchable(), getSubtitle(), Props (+9 more)

### Community 76 - "Common Mistakes"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [CRITICAL] Adding children to leaf scene objects, [HIGH] Expecting getBounds() to return a Rectangle, [HIGH] Using cacheAsBitmap instead of cacheAsTexture, [MEDIUM] Setting both pivot and origin on the same container, Quick Start

### Community 77 - "mailer/index.ts"
Cohesion: 0.29
Nodes (6): consoleMailer, createResendMailer(), ResendConfig, message, Mailer, MailMessage

### Community 78 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, attach / detach, Common Mistakes, Core Patterns, [CRITICAL] Using `addChild` on a RenderLayer, [HIGH] Layer and attached children in different render groups, Layer + logical parent, Manual sort (+5 more)

### Community 79 - "Core Patterns"
Cohesion: 0.14
Nodes (13): Alpha mask (Sprite-based), API Reference, Common Mistakes, Core Patterns, [HIGH] Using cacheAsTexture with masks, Inverse masking, Mask channel selection, Mask type selection (+5 more)

### Community 80 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, Common Mistakes, Construction options, Core Patterns, [HIGH] Nesting many render groups, [MEDIUM] Constantly adding/removing from a render group, [MEDIUM] Overusing render groups, Profile before adding (+5 more)

### Community 81 - "Common Mistakes"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, Constructor options, [CRITICAL] Using lineStyle instead of stroke, [CRITICAL] Using old shape method names, [CRITICAL] Using v7 beginFill/drawRect/endFill, [HIGH] Clearing and redrawing Graphics every frame, [HIGH] Destroying a shared GraphicsContext unexpectedly (+4 more)

### Community 82 - "FilterState"
Cohesion: 0.18
Nodes (14): Props, CATEGORY_ICONS, FilterCategoryRail(), Props, RailButton(), RailButtonProps, FILTER_CATEGORY_LABELS, PANES (+6 more)

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

### Community 88 - "Toolbar.tsx"
Cohesion: 0.22
Nodes (7): DemoBadge(), Props, SearchBar(), focusSearchInput(), Props, Toolbar(), usePanelToggle()

### Community 89 - "Foundations"
Cohesion: 0.15
Nodes (12): Advanced, Foundations, pixijs-application, pixijs-core-concepts, pixijs-events, pixijs-performance, pixijs-scene-container, pixijs-scene-core-concepts (+4 more)

### Community 90 - "emailRoutes.ts"
Cohesion: 0.13
Nodes (17): authSecret(), CodeOwner, prismaCodeStore, getMailer(), escapeHtml(), pairs(), renderSignInCodeEmail(), bodyEmail() (+9 more)

### Community 91 - "FitViewButton.tsx"
Cohesion: 0.30
Nodes (9): FitViewButton(), Props, PanelResetButton(), Props, Props, ToolbarIconButton(), Props, ToolbarTooltip() (+1 more)

### Community 92 - "Core Concepts"
Cohesion: 0.18
Nodes (11): Container vs leaf (CRITICAL), Core Concepts, Culling, Destroy semantics, Lifecycle events, Masking, Render groups, Render order and explicit z-ordering (+3 more)

### Community 93 - "useTeamForm.ts"
Cohesion: 0.20
Nodes (18): createTeam(), deleteTeam(), fetchTeamDetails(), parse(), setTeamMembers(), TeamMemberPayload, updateTeam(), buildTeamRequestBody() (+10 more)

### Community 94 - "dimensions.ts"
Cohesion: 0.13
Nodes (19): @pixi/react, PixiElements, @pixi/react, pixi-viewport, EMPTY_IDS, SharpAvatarTracker(), View, Props (+11 more)

### Community 98 - "devLogin.ts"
Cohesion: 0.48
Nodes (5): databaseHost(), devLoginProblems(), Env, isDevLoginEnabled(), LOCAL_HOSTS

### Community 99 - "useTreeLayout.ts"
Cohesion: 0.17
Nodes (19): gsap, react, MembersTreeScene(), NODE_HEIGHT, getFitViewTargetScale(), useFitViewAnimation(), useFocusFrameAnimation(), useFocusNodeAnimation() (+11 more)

### Community 100 - "Core Patterns"
Cohesion: 0.12
Nodes (16): API Reference, Common Mistakes, Coordinate conversion, Core Patterns, Cumulative alpha (getGlobalAlpha), Global, local, and screen coordinates, [HIGH] Setting scale to 0, [MEDIUM] Confusing anchor and pivot (+8 more)

### Community 101 - "src/types/index.ts"
Cohesion: 0.12
Nodes (32): @heroicons/react, tailwind-merge, GLOW, Props, Props, Props, Props, Props (+24 more)

### Community 102 - "Render Loop"
Cohesion: 0.22
Nodes (8): API Reference, Common Mistakes, [CRITICAL] Treating the ticker callback arg as a number, Frame lifecycle, [HIGH] Using `updateTransform` for per-frame logic, [MEDIUM] Assuming ticker callbacks run after render, Quick Start, Render Loop

### Community 103 - "pixijs-core-concepts/SKILL.md"
Cohesion: 0.22
Nodes (8): API Reference, Decision guide, Environments, Quick concepts, Quick Start, Renderer = systems + pipes, The render loop, Topics

### Community 104 - "MemberPane.tsx"
Cohesion: 0.13
Nodes (11): ACTIVITY_ICONS, IconComponent, IconProps, GENDER_ICONS, IconProps, ACTIVITY_PILLS, GENDER_PILLS, STATUS_PILLS (+3 more)

### Community 106 - "MemberInfoActions.tsx"
Cohesion: 0.21
Nodes (13): FacebookIcon(), FacebookGlyph(), InstagramGlyph(), LinkedinGlyph(), svgProps, TelegramGlyph(), InstagramIcon(), LinkedinIcon() (+5 more)

### Community 107 - "constants/canvas/index.ts"
Cohesion: 0.11
Nodes (20): @gsap/react, NODE_HOVER_ANIMATION_DURATION, NODE_HOVER_SCALE, ZOOMED_OUT_HOVER_SCALE_MAP, lineageEdgePath, ACCIDENTAL_DRAG_MAX_DISTANCE, ACCIDENTAL_DRAG_MAX_MS, LONG_PRESS_MS (+12 more)

### Community 108 - "auth.ts"
Cohesion: 0.06
Nodes (61): react-dom, AccessLevel, AuthMethod, Challenge, ChallengeQuestion, fetchSession(), logout(), post() (+53 more)

### Community 109 - "PhotoViewer.tsx"
Cohesion: 0.07
Nodes (44): zustand, DropdownPortal(), Props, isTreeReady(), MembersTree, MembersTreeDynamic(), TreeState, PhotoViewer() (+36 more)

### Community 110 - "server/src/types/index.ts"
Cohesion: 0.07
Nodes (30): mongodb, ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember, STATUSES_MAP (+22 more)

### Community 111 - "searchShortcut.ts"
Cohesion: 0.33
Nodes (6): EDITABLE_TAGS, isEditableTarget(), isSearchShortcut(), ShortcutKeys, Keys, useSearchShortcut()

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

### Community 113 - "TeamInfo.tsx"
Cohesion: 0.12
Nodes (22): LABELS, MemberActivityPill(), MemberFactTile(), Props, MemberInfoCopy(), Props, DateWithYears(), MemberInfoFacts() (+14 more)

### Community 114 - "Core Patterns"
Cohesion: 0.29
Nodes (7): Core Patterns, Frame rate capping, Manual rendering, Per-object update via `onRender`, Priority order, Stop and start, Time units

### Community 115 - "TeamLogo.tsx"
Cohesion: 0.20
Nodes (14): cache, loadImageAspect(), PhotoOpenButton(), Props, useIsPhotoOpen(), AvatarSkeleton(), MemberAvatarImage(), MemberAvatarImageInner() (+6 more)

### Community 116 - "pixijs-scene-core-concepts/SKILL.md"
Cohesion: 0.14
Nodes (12): API Reference, Common Mistakes, [CRITICAL] Adding children to a leaf display object, [CRITICAL] Referencing DisplayObject, [HIGH] Forgetting isRenderGroup on large static subtrees, [HIGH] Treating child.x as world space, Leaf comparison: which skill covers which object, [MEDIUM] sortableChildren without zIndex (+4 more)

### Community 117 - "teamTypeRoutes.ts"
Cohesion: 0.16
Nodes (11): cloudinary, multer, multer-storage-cloudinary, deleteCloudinaryImage(), extractCloudinaryPublicId(), MAX_UPLOAD_BYTES, rejectUpload(), router (+3 more)

### Community 118 - "useMeta.ts"
Cohesion: 0.19
Nodes (13): createTeamType(), fetchTeams(), updateTeamType(), EMPTY, rolesStore, teamsStore, teamTypesStore, useMetaStore() (+5 more)

### Community 119 - "memberRoutes.ts"
Cohesion: 0.20
Nodes (12): parsePhoneNumbers(), MEMBER_INCLUDE, serializeMember(), router, uploadMemberPhoto, MemberWithPhoneNumberRecords, transformMemberPhoneNumbers(), normalizeSocialLink() (+4 more)

### Community 120 - "importAllowedEmails.ts"
Cohesion: 0.19
Nodes (12): AllowedRow, AllowlistDiff, diffAllowlist(), looksLikeEmail(), parseAllowlistCsv(), ParsedAllowlist, splitLine(), apply (+4 more)

### Community 121 - "MemberBirthdayAnimation.tsx"
Cohesion: 0.35
Nodes (8): BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props, acquireEmojiTextures(), createEmojiTexture(), generateRandomPosition(), releaseEmojiTextures()

### Community 122 - "Position"
Cohesion: 0.40
Nodes (5): Position, Bottom, Left, Right, Top

### Community 123 - "FilterSection"
Cohesion: 0.29
Nodes (8): MemberPane(), RolesPane(), FilterSection(), Props, Option, PillGroupFilterSection(), Props, pluralizeUk()

### Community 124 - "Common Mistakes"
Cohesion: 0.50
Nodes (4): Common Mistakes, [HIGH] Accessing app.renderer before init() resolves, [HIGH] Setting DOMAdapter after Application.init, [MEDIUM] Treating `preference` as a guarantee

### Community 125 - "cardVisibilityDriver.ts"
Cohesion: 0.29
Nodes (10): clamp01(), easeBackOut, easePower2In, easePower2Out, entries, Entry, finishCardReveal(), registerCardReveal() (+2 more)

### Community 126 - "utils/strings.ts"
Cohesion: 0.29
Nodes (7): FiltersHeader(), Props, formatCount(), PARTICIPANT_FORMS, PluralForms, TEAM_FORMS, YEAR_FORMS

### Community 127 - "httpErrors.ts"
Cohesion: 0.29
Nodes (6): deleteMember(), getPrismaCode(), sendRouteError(), UnauthorizedError, assertNoMentees(), MENTEES_BLOCK_DELETE_MESSAGE

### Community 128 - "pixijs-application/SKILL.md"
Cohesion: 0.25
Nodes (6): API Reference, Common Mistakes, [CRITICAL] Passing options to the constructor, [HIGH] Using app.view instead of app.canvas, [MEDIUM] Touching app.canvas or app.renderer before init resolves, Quick Start

### Community 129 - "GSAP with React"
Cohesion: 0.15
Nodes (12): Best practices, Context-Safe Callbacks, Dependency array, scope, and revertOnUpdate, Do Not, gsap.context() in useEffect (when useGSAP isn't used), GSAP with React, Installation, Learn More (+4 more)

### Community 130 - "react"
Cohesion: 0.21
Nodes (8): Props, Sidebar(), SidebarFooterContext, Props, SidebarHandle(), SidebarHeader(), useSidebarChromeHeights(), useSidebarSwipe()

### Community 132 - "hitl-loop.template.sh"
Cohesion: 0.83
Nodes (3): capture(), hitl-loop.template.sh script, step()

### Community 133 - "DatesPane.tsx"
Cohesion: 0.47
Nodes (5): DatesPane(), SEASON_PILLS, JoinYearFilterSection(), SEASON_OPTIONS, isReducedView()

### Community 134 - "SubmitButton.tsx"
Cohesion: 0.50
Nodes (3): Props, Props, Spinner()

### Community 135 - "ActivityState"
Cohesion: 0.40
Nodes (5): Props, ActivityState, Active, Excluded, Inactive

### Community 137 - "GSAP Performance"
Cohesion: 0.17
Nodes (11): Batch Reads and Writes, Best practices, Do Not, Frequently updated properties (e.g. mouse followers), GSAP Performance, Many Elements (Stagger, Lists), Prefer Transform and Opacity, Reduce Simultaneous Work (+3 more)

### Community 138 - "GSAP Timeline"
Cohesion: 0.17
Nodes (11): Controlling Playback, Creating a Timeline, Do Not, GSAP Timeline, Labels, Nesting Timelines, Official GSAP Best practices, Position Parameter (+3 more)

## Knowledge Gaps
- **44 isolated node(s):** `@prisma/client`, `dotenv`, `lodash`, `@tailwindcss/postcss`, `@types/lodash` (+39 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 988 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `filters()` connect `Core Patterns` to `Common Mistakes`, `constants/filters.ts`, `Member`?**
  _High betweenness centrality (0.112) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _44 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `sessions.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.14204545454545456 - nodes in this community are weakly interconnected._
- **Why does `react` connect `useTreeLayout.ts` to `DropdownOption`, `react`, `filtersStore.ts`, `MemberInfo.tsx`, `http`, `hooks/index.ts`, `ManageForm.tsx`, `MemberFormFields.tsx`, `TeamFrame`, `utils/membersTree/index.ts`, `SettingsPanel.tsx`, `GroupedCheckListFilter.tsx`, `TeamBadge.tsx`, `EditMemberForm.tsx`, `FilterState`, `ManageForm.tsx`, `package.json`, `Member`, `MemberInfo.tsx`, `utils/membersTree/index.ts`, `@heroicons/react`, `TeamFormContent.tsx`, `MembersTreeContent.tsx`, `layout.tsx`, `TeamSearch.tsx`, `FilterState`, `Toolbar.tsx`, `FitViewButton.tsx`, `useTeamForm.ts`, `dimensions.ts`, `src/types/index.ts`, `MemberPane.tsx`, `constants/canvas/index.ts`, `auth.ts`, `PhotoViewer.tsx`, `searchShortcut.ts`, `TeamInfo.tsx`, `TeamLogo.tsx`, `useMeta.ts`, `MemberBirthdayAnimation.tsx`, `FilterSection`?**
  _High betweenness centrality (0.109) - this node is a cross-community bridge._
- **Should `filtersStore.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.13675213675213677 - nodes in this community are weakly interconnected._
- **Why does `Constructor options` connect `Common Mistakes` to `Core Patterns`?**
  _High betweenness centrality (0.081) - this node is a cross-community bridge._
- **Should `MemberInfo.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.12169312169312169 - nodes in this community are weakly interconnected._