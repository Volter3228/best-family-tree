# Graph Report - best-family-tree  (2026-11-24)

## Corpus Check
- 746 files · ~226,789 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 33 file(s) not represented in the graph (top: .prisma 10, (none) 7, .css 7)

## Summary
- 3448 nodes · 10369 edges · 138 communities (127 shown, 11 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 103 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `bfb5a249`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- uk/index.ts
- react
- Member
- server/package.json
- MemberPositions.tsx
- useDashedPathAnimation.ts
- bakeParams.ts
- suggestion/suggestionReview.ts
- suggestionCreate.ts
- NODE_WIDTH
- teamEdges.ts
- SeasonMotif.tsx
- anonymizeDemo.ts
- httpErrors.ts
- FilterState
- Member
- TeamLogoPicker.tsx
- dependencies
- treeStore.ts
- ref_vitest
- devDependencies
- HTML Report Format
- opengraph-image.tsx
- AccentColor
- teamService.ts
- MembersTab.tsx
- compilerOptions
- compilerOptions
- Core Patterns
- readCache.ts
- dependencies
- src/index.ts
- TeamLogo.tsx
- filterTeams.ts
- MemberSuggestFields.tsx
- @prisma/config
- package.json
- DropdownOption
- utils/membersTree/index.ts
- Core Patterns
- devDependencies
- SettingsPanel.tsx
- Core Patterns
- CLAUDE.md
- Container Hierarchy
- TeamFrame
- AccountPanel.tsx
- During the session
- SuggestionsTab.tsx
- en/index.ts
- AGENTS.md
- scripts
- eligibility.ts
- next.config.mjs
- postcss.config.mjs
- useTeamForm.ts
- Core Patterns
- locale.ts
- TeamTypeFormContent.tsx
- MembersTreeContent.tsx
- MemberNode.tsx
- memberService.ts
- BEST Family Tree
- Diagnosing Bugs
- useCardAnimation.ts
- constants/canvas/index.ts
- challenges.ts
- backfillGender.ts
- Core Patterns
- Core Patterns
- useTeamTypeForm.ts
- constants/filters.ts
- MemberPane.tsx
- clientInstance.ts
- Core Patterns
- Core Patterns
- Core Patterns
- api/auth.ts
- MemberSidebar.tsx
- Core Patterns
- Constructor options (Container-inherited)
- Test-Driven Development
- GSAP Core
- Core Patterns
- Foundations
- EditMemberForm.tsx
- Sidebar.tsx
- Core Patterns
- ApplicationOptions reference
- backup-prod.sh
- start-prod.sh
- restore-local.sh
- Common Mistakes
- gsap
- dimensions.ts
- Core Concepts
- Render Loop
- pixijs-core-concepts/SKILL.md
- src/utils/index.ts
- Common Mistakes
- signInCodeEmail.ts
- PhotoViewer.tsx
- migrateMembersFromMongodb.ts
- MaskIcon.tsx
- Renderers: WebGPU, WebGL, and Canvas
- filtersStore.ts
- MemberSuggestForm.tsx
- AccountPanel.tsx
- pixijs-scene-core-concepts/SKILL.md
- scripts
- pixijs/SKILL.md
- GroupedCheckListFilter.tsx
- uk/filters.ts
- piiCheck.ts
- pixijs/SKILL.md
- importAllowedEmails.ts
- http
- plural.ts
- Core Patterns
- Common Mistakes
- GSAP with React
- emailCodes.ts
- hitl-loop.template.sh
- fakeIdentity.ts
- proxy.ts
- en/errors.ts
- GSAP Performance
- GSAP Timeline
- memberFormValidation.ts
- uk/errors.ts
- ref_vitest
- contactKeys.ts
- checkConfig.ts
- useMeta.ts
- PositionFormFields.tsx

## God Nodes (most connected - your core abstractions)
1. `useT()` - 214 edges
2. `AccentColor` - 188 edges
3. `react` - 175 edges
4. `tailwind-merge` - 99 edges
5. `Member` - 75 edges
6. `useLocale()` - 73 edges
7. `COLOR_CLASSES` - 59 edges
8. `@heroicons/react` - 57 edges
9. `http()` - 48 edges
10. `TeamFrame` - 45 edges

## Surprising Connections (you probably didn't know these)
- `pixijs-scene-container` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs/references/index.md → src/hooks/membersTree/animations/useFitViewAnimation.ts
- `Effects` --references--> `filters()`  [INFERRED]
  .agents/skills/pixijs-scene-core-concepts/references/constructor-options.md → src/utils/filters/filterMembers.test.ts
- `Constructor options` --references--> `filters()`  [INFERRED]
  .agents/skills/pixijs-scene-graphics/SKILL.md → src/utils/filters/filterMembers.test.ts
- `pixijs-scene-graphics` --references--> `arc()`  [INFERRED]
  .agents/skills/pixijs/references/index.md → src/utils/membersTree/teamEdgeAnchors.ts
- `Paths and complex shapes` --references--> `arc()`  [INFERRED]
  .agents/skills/pixijs-scene-graphics/SKILL.md → src/utils/membersTree/teamEdgeAnchors.ts

## Import Cycles
- 3-file cycle: `src/utils/index.ts -> src/utils/membersTree/index.ts -> src/utils/membersTree/lineageEdgePath.ts -> src/utils/index.ts`
- 4-file cycle: `src/context/ThemeContext.tsx -> src/hooks/index.ts -> src/hooks/membersTree/index.ts -> src/hooks/membersTree/useCanvasTheme.ts -> src/context/ThemeContext.tsx`
- 4-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/members.ts -> src/models/index.ts -> src/models/Member.ts`
- 4-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/tree.ts -> src/models/index.ts -> src/models/Member.ts`
- 5-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/filters.ts -> src/types/members.ts -> src/models/index.ts -> src/models/Member.ts`

## Communities (138 total, 11 thin omitted)

### Community 0 - "uk/index.ts"
Cohesion: 0.08
Nodes (19): access, account, auth, common, formCommon, manage, memberForm, memberInfo (+11 more)

### Community 1 - "react"
Cohesion: 0.12
Nodes (31): CATEGORY_ICONS, FilterCategoryRail(), Props, RoleForm(), Props, TeamForm(), TeamTypeMark(), ManageList() (+23 more)

### Community 2 - "Member"
Cohesion: 0.11
Nodes (22): fetchFamilyTree(), Home(), loadTree(), MembersTree(), Props, Props, isTreeReady(), MembersTree (+14 more)

### Community 3 - "server/package.json"
Cohesion: 0.07
Nodes (27): cloudinary, compression, concurrently, cors, helmet, multer-storage-cloudinary, nodemon, @prisma/adapter-pg (+19 more)

### Community 4 - "MemberPositions.tsx"
Cohesion: 0.33
Nodes (7): Props, MemberPositions(), Props, PositionBadge(), Props, useStackOnOverflow(), MemberPosition

### Community 5 - "useDashedPathAnimation.ts"
Cohesion: 0.17
Nodes (18): DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN, MIN_ANIM_DURATION, PATTERN_LEN, RETRACT_BASE, SPEED (+10 more)

### Community 6 - "bakeParams.ts"
Cohesion: 0.21
Nodes (17): AuroraBackground(), readNumber(), useBakedAurora(), AuroraBakeInput, bakeAuroraLayers(), canBakeAurora(), BAKE_SCALE, BLUR_SPREAD (+9 more)

### Community 7 - "suggestion/suggestionReview.ts"
Cohesion: 0.09
Nodes (41): canEditMember(), canManageGrant(), canSuggest(), hasAccess(), isOwnGrant(), RANK, AccessRank, Express (+33 more)

### Community 8 - "suggestionCreate.ts"
Cohesion: 0.09
Nodes (33): Suggestion, buildRows(), createSuggestionBatch(), MIN_TEAM_YEAR, cannotEmpty(), CONTACT_FIELDS, invalid(), link() (+25 more)

### Community 9 - "NODE_WIDTH"
Cohesion: 0.08
Nodes (43): elkjs, GRID_LR_COLUMNS, TEAM_FRAME_GAP, TEAM_PACK_ASPECT, failOver(), getWorker(), Pending, requestLayout() (+35 more)

### Community 10 - "teamEdges.ts"
Cohesion: 0.18
Nodes (20): NODE_AVATAR_RADIUS, TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_SPREAD_WIDTH, TEAM_HUB_OFFSET, source, target, arc(), AVATAR_CENTER_X (+12 more)

### Community 11 - "SeasonMotif.tsx"
Cohesion: 0.26
Nodes (9): FlowerIcon(), Props, MapleLeafIcon(), Props, Placement, PLACEMENTS, Props, SeasonMotif() (+1 more)

### Community 12 - "anonymizeDemo.ts"
Cohesion: 0.14
Nodes (11): allowed, args, byId, factory, GROUP_NAMES, memberPhotos, nextFace, real (+3 more)

### Community 13 - "httpErrors.ts"
Cohesion: 0.09
Nodes (35): multer, canSelfServe(), deleteCloudinaryImage(), deleteReplacedImage(), discardUpload(), extractCloudinaryPublicId(), MAX_UPLOAD_BYTES, uploadMiddleware() (+27 more)

### Community 14 - "FilterState"
Cohesion: 0.13
Nodes (19): Props, Props, Props, Props, ACTIVITY_STATES, JOIN_SEASONS, MEMBER_STATUSES, Props (+11 more)

### Community 15 - "Member"
Cohesion: 0.10
Nodes (18): ACTIVITY_ICONS, IconComponent, IconProps, Props, Props, Props, Props, Props (+10 more)

### Community 16 - "TeamLogoPicker.tsx"
Cohesion: 0.16
Nodes (19): @heroicons/react, next, react, CheckOption, Props, Props, AvatarFileInput(), removeBadgeClasses() (+11 more)

### Community 17 - "dependencies"
Cohesion: 0.12
Nodes (17): dependencies, cloudinary, compression, cors, dotenv, express, express-rate-limit, helmet (+9 more)

### Community 18 - "treeStore.ts"
Cohesion: 0.06
Nodes (42): Props, Props, TeamFramesLayer(), Props, TeamOverviewLayer(), Props, Props, Props (+34 more)

### Community 19 - "ref_vitest"
Cohesion: 0.06
Nodes (39): EMPTY_FILTER_STATE, GENDER_VALUES, MENTOR_STATUSES, initialFiltersState, Gender, Female, Male, MemberStatus (+31 more)

### Community 20 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, concurrently, @faker-js/faker, nodemon, ts-node, tsx, @types/compression, @types/cors (+5 more)

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "opengraph-image.tsx"
Cohesion: 0.24
Nodes (6): alt, contentType, OpengraphImage(), read(), size, { html }

### Community 23 - "AccentColor"
Cohesion: 0.06
Nodes (70): tailwind-merge, PAIR_COLORS, Props, GLOW, Props, QuestionCard(), Props, Props (+62 more)

### Community 24 - "teamService.ts"
Cohesion: 0.12
Nodes (32): ResolvedPosition, resolvePosition(), MemberTransaction, assertCanEditMembers(), deriveTeamName(), resolveRole(), resolveTeam(), resolveTeamType() (+24 more)

### Community 25 - "MembersTab.tsx"
Cohesion: 0.12
Nodes (31): compare(), getSearchable(), MemberSearch(), Props, SearchBar(), SearchPanel(), Props, SearchSuggestionItem() (+23 more)

### Community 26 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, esModuleInterop, forceConsistentCasingInFileNames, module, moduleResolution, noImplicitAny, outDir, paths (+12 more)

### Community 27 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+12 more)

### Community 28 - "Core Patterns"
Cohesion: 0.12
Nodes (15): API Reference, Application properties, Common Mistakes, Core Patterns, [CRITICAL] Passing options to the constructor, CullerPlugin (opt-in), Custom Application plugins, [HIGH] Using app.view instead of app.canvas (+7 more)

### Community 29 - "readCache.ts"
Cohesion: 0.53
Nodes (3): bumpDataVersion(), createVersionedCache(), trackWrites()

### Community 30 - "dependencies"
Cohesion: 0.10
Nodes (20): dependencies, date-fns, dotenv, elkjs, gsap, @gsap/react, @heroicons/react, lodash (+12 more)

### Community 31 - "src/index.ts"
Cohesion: 0.05
Nodes (68): Container events, Transform, Lifecycle events, Origin (new in v8), express, express-rate-limit, openid-client, authSecret() (+60 more)

### Community 32 - "TeamLogo.tsx"
Cohesion: 0.13
Nodes (20): cache, loadImageAspect(), PhotoOpenButton(), Props, useIsPhotoOpen(), Props, TeamTile(), Props (+12 more)

### Community 33 - "filterTeams.ts"
Cohesion: 0.11
Nodes (36): areSetsEqual(), computeFilteredMembers(), birthdayBoundKey(), countActiveFilters(), countActiveMemberFilters(), isFilterActive(), isIdListSet(), isListFilterSet() (+28 more)

### Community 34 - "MemberSuggestFields.tsx"
Cohesion: 0.09
Nodes (50): FormField(), MemberBasicsSection(), Props, MemberBestSection(), Props, MemberContactsSection(), Props, MemberFormFields() (+42 more)

### Community 36 - "package.json"
Cohesion: 0.09
Nodes (21): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+13 more)

### Community 38 - "DropdownOption"
Cohesion: 0.19
Nodes (14): DropdownMenu(), Props, ComboboxInput(), Props, ComboboxInputField(), Props, useComboboxState(), Props (+6 more)

### Community 39 - "utils/membersTree/index.ts"
Cohesion: 0.08
Nodes (50): EdgesLayer(), Props, LineageEdge(), Props, drawLerped(), drawPolyline(), Props, TeamEdgesLayer() (+42 more)

### Community 40 - "Core Patterns"
Cohesion: 0.12
Nodes (21): Adding and removing children, API Reference, Bounds and coordinate conversion, Common Mistakes, Constructor options, Core Patterns, [CRITICAL] Adding children to leaf scene objects, Destroy (+13 more)

### Community 41 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+5 more)

### Community 42 - "SettingsPanel.tsx"
Cohesion: 0.05
Nodes (51): react-datepicker, metadata, nunito, RootLayout(), FamilyTreeIcon(), Props, edgeIcon(), edgeStyleOptions() (+43 more)

### Community 43 - "Core Patterns"
Cohesion: 0.12
Nodes (16): API Reference, Common Mistakes, Coordinate conversion, Core Patterns, Cumulative alpha (getGlobalAlpha), Global, local, and screen coordinates, [HIGH] Setting scale to 0, [MEDIUM] Confusing anchor and pivot (+8 more)

### Community 44 - "CLAUDE.md"
Cohesion: 0.22
Nodes (8): Commands, Conventions, Delegating to subagents, Deployment & data, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout

### Community 45 - "Container Hierarchy"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, Container Hierarchy, [CRITICAL] Adding children to a leaf, [HIGH] Destroying the parent without `children: true`, [MEDIUM] Mutating `children` during iteration, Quick Start

### Community 46 - "TeamFrame"
Cohesion: 0.05
Nodes (71): @pixi/react, PixiElements, @pixi/react, pixi-viewport, MemberNodeMinimizedTooltip(), Props, Props, TeamBadge() (+63 more)

### Community 47 - "AccountPanel.tsx"
Cohesion: 0.11
Nodes (25): AccountPanel(), Props, FiltersHeader(), Props, FitViewButton(), PanelCloseButton(), Props, STYLES (+17 more)

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "SuggestionsTab.tsx"
Cohesion: 0.10
Nodes (36): AccessGrant, fetchGrants(), GrantLevel, parse(), removeGrant(), setGrant(), approveSuggestion(), fetchSuggestionCount() (+28 more)

### Community 50 - "en/index.ts"
Cohesion: 0.11
Nodes (23): access, account, auth, common, filters, formCommon, manage, memberForm (+15 more)

### Community 51 - "AGENTS.md"
Cohesion: 0.25
Nodes (7): Commands, Conventions, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout, This is NOT the Next.js you know

### Community 52 - "scripts"
Cohesion: 0.20
Nodes (10): scripts, build, db:backup-prod, db:restore-local, dev, dev:webpack, lint, start (+2 more)

### Community 53 - "eligibility.ts"
Cohesion: 0.15
Nodes (18): EligibilityMember, EmailIdentity, MemberMatch, normalizeEmail(), resolveEmailIdentity(), resolveMemberMatch(), loadEmailIdentity(), callbackErrorRedirect() (+10 more)

### Community 58 - "useTeamForm.ts"
Cohesion: 0.20
Nodes (21): createTeam(), deleteTeam(), fetchTeamDetails(), parse(), setTeamMembers(), TeamMemberPayload, updateTeam(), buildTeamRequestBody() (+13 more)

### Community 59 - "Core Patterns"
Cohesion: 0.12
Nodes (17): Application destroy/recreate cycle, Batching optimization, cacheAsTexture for performance, Core Patterns, Culling, Filters and masks cost, Graphics performance, Low-level rendering optimizations (+9 more)

### Community 60 - "locale.ts"
Cohesion: 0.08
Nodes (29): Renderer selection at runtime, [MEDIUM] Using container.name instead of container.label, countMembersByRole(), router, rejectUpload(), router, uploadTeamTypeIcon, booleanLike (+21 more)

### Community 61 - "TeamTypeFormContent.tsx"
Cohesion: 0.09
Nodes (26): Props, ClearButton(), ConfirmDeleteControl(), Props, GenderFormField(), Props, Props, TeamFormFooter() (+18 more)

### Community 62 - "MembersTreeContent.tsx"
Cohesion: 0.08
Nodes (41): zustand, EVENT_FEATURES, MembersTreeContent(), MembersTreeScene(), ViewportCulling(), membersActions, {
  setMembers,
  reloadMembers,
  addMember,
  updateMember,
  selectMember,
  getMentorsList,
}, useMemberById() (+33 more)

### Community 63 - "MemberNode.tsx"
Cohesion: 0.06
Nodes (41): pixi.js, BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props, acquireEmojiTextures(), createEmojiTexture(), generateRandomPosition() (+33 more)

### Community 64 - "memberService.ts"
Cohesion: 0.07
Nodes (48): zod, CONTACT_FIELDS, toMemberResponse(), loadFamilyTree, loadReducedFamilyTree, router, buildMemberFields(), buildMemberUpdateFields() (+40 more)

### Community 65 - "BEST Family Tree"
Cohesion: 0.10
Nodes (19): 1. Clone and configure environment, 2. Start the application, 3. Run database migrations, 4. Access the app, Architecture, Automated backups (GitHub Actions), Available Commands, Backend Commands (run inside container) (+11 more)

### Community 66 - "Diagnosing Bugs"
Cohesion: 0.13
Nodes (14): Completion criterion: a tight loop that goes red, Diagnosing Bugs, Minimise, Non-deterministic bugs, Phase 1: Build a feedback loop, Phase 2: Reproduce + minimise, Phase 3: Hypothesise, Phase 4: Instrument (+6 more)

### Community 67 - "useCardAnimation.ts"
Cohesion: 0.14
Nodes (23): CARD_PIVOT, Props, clamp01(), deferCardHidden(), easeBackOut, easePower2In, easePower2Out, entries (+15 more)

### Community 68 - "constants/canvas/index.ts"
Cohesion: 0.12
Nodes (20): lineageEdgePath, ACCIDENTAL_DRAG_MAX_DISTANCE, ACCIDENTAL_DRAG_MAX_MS, LONG_PRESS_MS, TAP_MOVE_TOLERANCE, FONT_FAMILY, NODE_SUBTITLE_STYLE, NODE_TITLE_STYLE (+12 more)

### Community 69 - "challenges.ts"
Cohesion: 0.09
Nodes (28): answerMatches(), CYRILLIC_TO_LATIN, normalizeAnswer(), ChallengeState, isExpired(), isSolved(), pickRandom(), swapQuestion() (+20 more)

### Community 70 - "backfillGender.ts"
Cohesion: 0.12
Nodes (15): alreadyDifferent, alreadySame, APPLY, args, duplicates, fileArg, Gender, GENDERS (+7 more)

### Community 71 - "Core Patterns"
Cohesion: 0.13
Nodes (14): API Reference, boundsArea optimization, Common Mistakes, Core Patterns, Culling, HIGH: Expecting automatic culling, HIGH: Using addChild on RenderLayer, MEDIUM: Expecting filters on ancestors to apply to layer children (+6 more)

### Community 72 - "Core Patterns"
Cohesion: 0.11
Nodes (16): Advanced shape primitives, Cloning, clearing, and bounds, Core Patterns, Default styles via setFillStyle / setStrokeStyle, Draw-time transforms, Drawing a texture directly, Gradients and patterns, GraphicsContext sharing (+8 more)

### Community 73 - "useTeamTypeForm.ts"
Cohesion: 0.24
Nodes (9): buildTeamTypeFormData(), Callbacks, EMPTY_FORM, keepCount(), teamTypeTeamCount(), toFormData(), useTeamTypeForm(), useTransientMessage() (+1 more)

### Community 74 - "constants/filters.ts"
Cohesion: 0.11
Nodes (29): greenPillIcon(), IconProps, DatesPane(), SEASON_ICONS, PANES, Props, SELF_SCROLLING_PANES, MemberPane() (+21 more)

### Community 76 - "MemberPane.tsx"
Cohesion: 0.15
Nodes (18): date-fns, BirthdayFilterSection(), ClearButton(), FilterCheckbox(), Props, JoinYearFilterSection(), Props, RangeInputs() (+10 more)

### Community 77 - "clientInstance.ts"
Cohesion: 0.13
Nodes (10): adapter, prisma, router, router, level, [ref, levelArg], ADMINS_BY_EMAIL, EDITORS_BY_NAME (+2 more)

### Community 78 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, attach / detach, Common Mistakes, Core Patterns, [CRITICAL] Using `addChild` on a RenderLayer, [HIGH] Layer and attached children in different render groups, Layer + logical parent, Manual sort (+5 more)

### Community 79 - "Core Patterns"
Cohesion: 0.14
Nodes (13): Alpha mask (Sprite-based), API Reference, Common Mistakes, Core Patterns, [HIGH] Using cacheAsTexture with masks, Inverse masking, Mask channel selection, Mask type selection (+5 more)

### Community 80 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, Common Mistakes, Construction options, Core Patterns, [HIGH] Nesting many render groups, [MEDIUM] Constantly adding/removing from a render group, [MEDIUM] Overusing render groups, Profile before adding (+5 more)

### Community 81 - "api/auth.ts"
Cohesion: 0.05
Nodes (61): AccessLevel, AuthMethod, Challenge, ChallengeQuestion, logout(), post(), RequestCodeOutcome, requestEmailCode() (+53 more)

### Community 82 - "MemberSidebar.tsx"
Cohesion: 0.10
Nodes (35): fetchSession(), SessionInfo, MemberNodeCard(), MemberSidebar(), Props, TeamInfoSidebar(), DemoBadge(), focusSearchInput() (+27 more)

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

### Community 89 - "Foundations"
Cohesion: 0.15
Nodes (12): Advanced, Foundations, pixijs-application, pixijs-core-concepts, pixijs-events, pixijs-performance, pixijs-scene-container, pixijs-scene-core-concepts (+4 more)

### Community 90 - "EditMemberForm.tsx"
Cohesion: 0.22
Nodes (16): AddMemberForm(), buildMemberFormData(), describeSubmitError(), EditMemberForm(), buildEditPayload(), FormError(), FormFooter(), Props (+8 more)

### Community 91 - "Sidebar.tsx"
Cohesion: 0.16
Nodes (12): Sidebar(), Props, SidebarBehindCover(), SidebarCoverTint(), Props, SidebarFooter(), Props, SidebarHandle() (+4 more)

### Community 92 - "Core Patterns"
Cohesion: 0.29
Nodes (7): Core Patterns, Frame rate capping, Manual rendering, Per-object update via `onRender`, Priority order, Stop and start, Time units

### Community 94 - "ApplicationOptions reference"
Cohesion: 0.12
Nodes (17): Accessibility, ApplicationOptions reference, Background, Culler (CullerPluginOptions), Deprecated (GC — prefer the unified options above), Events, Garbage collection, Graphics (+9 more)

### Community 98 - "Common Mistakes"
Cohesion: 0.50
Nodes (4): Common Mistakes, [HIGH] Accessing app.renderer before init() resolves, [HIGH] Setting DOMAdapter after Application.init, [MEDIUM] Treating `preference` as a guarantee

### Community 99 - "gsap"
Cohesion: 0.17
Nodes (21): gsap, Props, Viewport(), NODE_HOVER_ANIMATION_DURATION, NODE_HOVER_SCALE, ZOOMED_OUT_HOVER_SCALE_MAP, BIRTHDAY_ANIMATION_MIN_SCALE, MAX_VIEWPORT_ZOOM (+13 more)

### Community 100 - "dimensions.ts"
Cohesion: 0.10
Nodes (29): contexts, getCardBackgroundContext(), getGlowTexture(), GLOW_BLUR, GLOW_PADDING, GlowKind, paint(), SIZES (+21 more)

### Community 101 - "Core Concepts"
Cohesion: 0.18
Nodes (11): Container vs leaf (CRITICAL), Core Concepts, Culling, Destroy semantics, Lifecycle events, Masking, Render groups, Render order and explicit z-ordering (+3 more)

### Community 102 - "Render Loop"
Cohesion: 0.22
Nodes (8): API Reference, Common Mistakes, [CRITICAL] Treating the ticker callback arg as a number, Frame lifecycle, [HIGH] Using `updateTransform` for per-frame logic, [MEDIUM] Assuming ticker callbacks run after render, Quick Start, Render Loop

### Community 103 - "pixijs-core-concepts/SKILL.md"
Cohesion: 0.22
Nodes (8): API Reference, Decision guide, Environments, Quick concepts, Quick Start, Renderer = systems + pipes, The render loop, Topics

### Community 104 - "src/utils/index.ts"
Cohesion: 0.14
Nodes (16): NodesLayer(), Props, nextAdmittedIds(), PROGRESSIVE_CHUNK_SIZE, useProgressiveIds(), generateGoogleCalendarLink(), getClosestBirthday(), cache (+8 more)

### Community 105 - "Common Mistakes"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, [CRITICAL] App destroy without releaseGlobalResources, [HIGH] Destroying and recreating objects instead of recycling, [HIGH] Interleaving object types in scene graph, [HIGH] Loading many individual textures instead of spritesheets, [HIGH] Updating Text or HTMLText every frame, [HIGH] Using complex Graphics instead of textures (+4 more)

### Community 108 - "signInCodeEmail.ts"
Cohesion: 0.31
Nodes (6): CODE_TTL_MS, COPY, EmailLocale, escapeHtml(), pairs(), renderSignInCodeEmail()

### Community 109 - "PhotoViewer.tsx"
Cohesion: 0.06
Nodes (45): react-dom, DropdownPortal(), Props, PhotoViewer(), thumbRadius(), Viewer(), viewportRect(), BUTTON (+37 more)

### Community 110 - "migrateMembersFromMongodb.ts"
Cohesion: 0.07
Nodes (32): mongodb, ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember, STATUSES_MAP (+24 more)

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

### Community 113 - "filtersStore.ts"
Cohesion: 0.23
Nodes (11): Props, FiltersFooter(), FiltersPanel(), Props, FilterCategoryPane(), useDraftFilterCount(), Options, useTeamInfoSidebar() (+3 more)

### Community 114 - "MemberSuggestForm.tsx"
Cohesion: 0.13
Nodes (37): fetchMyMemberSuggestions(), fetchMyTeamSuggestions(), PendingSuggestion, photoBody(), postChanges(), removeMyPhoto(), send(), SuggestionChange (+29 more)

### Community 115 - "AccountPanel.tsx"
Cohesion: 0.15
Nodes (20): put(), refreshProfile(), setFeaturedPosition(), setNameBadge(), AccountRoles(), byLatestYears(), lastYear(), Props (+12 more)

### Community 116 - "pixijs-scene-core-concepts/SKILL.md"
Cohesion: 0.25
Nodes (6): API Reference, Leaf comparison: which skill covers which object, Quick Start, References, Tooling, When to use what (quick decisions)

### Community 117 - "scripts"
Cohesion: 0.12
Nodes (17): scripts, auth:grant, auth:import-emails, auth:preview-email, auth:report-duplicate-contacts, auth:seed-grants, auth:seed-questions, build (+9 more)

### Community 118 - "pixijs/SKILL.md"
Cohesion: 0.12
Nodes (14): API Reference, Common Mistakes, [HIGH] buttonMode removed; use cursor, [HIGH] Default eventMode is passive, [HIGH] Move events only fire over the object in v8, [MEDIUM] Cursor does not inherit from parent, Quick Start, Advanced (+6 more)

### Community 119 - "GroupedCheckListFilter.tsx"
Cohesion: 0.29
Nodes (9): CheckRow(), Props, byName(), GroupedCheckListFilter(), Props, Props, SearchField(), CheckBox() (+1 more)

### Community 120 - "uk/filters.ts"
Cohesion: 0.33
Nodes (5): familyForms, filters, memberForms, roleForms, teamForms

### Community 121 - "piiCheck.ts"
Cohesion: 0.38
Nodes (8): DemoValues, findLeaks(), lowerSet(), norm(), normalizeSocial(), RealValues, clean, real

### Community 123 - "pixijs/SKILL.md"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, Constructor options, [CRITICAL] Using lineStyle instead of stroke, [CRITICAL] Using old shape method names, [CRITICAL] Using v7 beginFill/drawRect/endFill, [HIGH] Clearing and redrawing Graphics every frame, [HIGH] Destroying a shared GraphicsContext unexpectedly (+4 more)

### Community 124 - "importAllowedEmails.ts"
Cohesion: 0.19
Nodes (12): AllowedRow, AllowlistDiff, diffAllowlist(), looksLikeEmail(), parseAllowlistCsv(), ParsedAllowlist, splitLine(), apply (+4 more)

### Community 125 - "http"
Cohesion: 0.17
Nodes (24): addMember(), ApiError, errorMessage(), ErrorParams, toApiError(), deleteMember(), editMember(), FamilyGroupOption (+16 more)

### Community 126 - "plural.ts"
Cohesion: 0.20
Nodes (8): teamForm, memberForms, search, formatCount(), plural(), PluralForms, en, uk

### Community 127 - "Core Patterns"
Cohesion: 0.25
Nodes (8): Add, remove, swap, Child queries, Core Patterns, Destroying sub-trees, Iterating children, Label-based tree navigation, Reparenting with transform preservation, Replacing a child

### Community 128 - "Common Mistakes"
Cohesion: 0.33
Nodes (6): Common Mistakes, [CRITICAL] Adding children to a leaf display object, [CRITICAL] Referencing DisplayObject, [HIGH] Forgetting isRenderGroup on large static subtrees, [HIGH] Treating child.x as world space, [MEDIUM] sortableChildren without zIndex

### Community 129 - "GSAP with React"
Cohesion: 0.15
Nodes (12): Best practices, Context-Safe Callbacks, Dependency array, scope, and revertOnUpdate, Do Not, gsap.context() in useEffect (when useGSAP isn't used), GSAP with React, Installation, Learn More (+4 more)

### Community 130 - "emailCodes.ts"
Cohesion: 0.19
Nodes (12): CodeStore, generateCode(), hashCode(), issueCode(), MAX_CODE_ATTEMPTS, sameHash(), StoredCode, A (+4 more)

### Community 132 - "hitl-loop.template.sh"
Cohesion: 0.83
Nodes (3): capture(), hitl-loop.template.sh script, step()

### Community 133 - "fakeIdentity.ts"
Cohesion: 0.27
Nodes (7): @faker-js/faker, createIdentityFactory(), firstFree(), OPERATOR_CODES, none, MAP, translit()

### Community 135 - "en/errors.ts"
Cohesion: 0.50
Nodes (3): errors, Params, platformLabels

### Community 137 - "GSAP Performance"
Cohesion: 0.17
Nodes (11): Batch Reads and Writes, Best practices, Do Not, Frequently updated properties (e.g. mouse followers), GSAP Performance, Many Elements (Stagger, Lists), Prefer Transform and Opacity, Reduce Simultaneous Work (+3 more)

### Community 138 - "GSAP Timeline"
Cohesion: 0.17
Nodes (11): Controlling Playback, Creating a Timeline, Do Not, GSAP Timeline, Labels, Nesting Timelines, Official GSAP Best practices, Position Parameter (+3 more)

### Community 139 - "memberFormValidation.ts"
Cohesion: 0.12
Nodes (17): CheckedField, getStoredFieldValues(), Links, StoredMemberValues, complete, mentors, sparse, toTime() (+9 more)

### Community 140 - "uk/errors.ts"
Cohesion: 0.50
Nodes (3): errors, Params, platformLabels

### Community 141 - "ref_vitest"
Cohesion: 0.47
Nodes (3): createFaceSource(), Options, source()

### Community 142 - "contactKeys.ts"
Cohesion: 0.20
Nodes (10): duplicates, fields, groups, ContactFields, contactKey(), ContactPlatform, FIELD_PLATFORMS, findContactCollision() (+2 more)

### Community 144 - "checkConfig.ts"
Cohesion: 0.07
Nodes (37): RFC-2045, RFC-2047, assertConfig(), configProblems(), databaseName(), demoProblems(), Env, googleProblems() (+29 more)

### Community 146 - "useMeta.ts"
Cohesion: 0.11
Nodes (18): BEST Family Tree, Contributions, Language, People, Sign-in, Teams, Views, fetchTeams() (+10 more)

### Community 148 - "PositionFormFields.tsx"
Cohesion: 0.13
Nodes (32): FieldError(), PositionAssignmentFields(), Props, PositionFormFields(), Props, createEmptyPositionRow(), EMPTY_POSITION_ROW, findTeamByName() (+24 more)

## Knowledge Gaps
- **45 isolated node(s):** `@prisma/client`, `dotenv`, `lodash`, `pixi-filters`, `@tailwindcss/postcss` (+40 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1088 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `filters()` connect `ref_vitest` to `Core Patterns`, `pixijs/SKILL.md`, `Constructor options (Container-inherited)`?**
  _High betweenness centrality (0.082) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _45 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `uk/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.08108108108108109 - nodes in this community are weakly interconnected._
- **Why does `react` connect `TeamLogoPicker.tsx` to `react`, `Member`, `MemberPositions.tsx`, `useDashedPathAnimation.ts`, `bakeParams.ts`, `FilterState`, `Member`, `treeStore.ts`, `useMeta.ts`, `PositionFormFields.tsx`, `AccentColor`, `MembersTab.tsx`, `TeamLogo.tsx`, `MemberSuggestFields.tsx`, `package.json`, `DropdownOption`, `utils/membersTree/index.ts`, `SettingsPanel.tsx`, `TeamFrame`, `AccountPanel.tsx`, `SuggestionsTab.tsx`, `useTeamForm.ts`, `TeamTypeFormContent.tsx`, `MembersTreeContent.tsx`, `MemberNode.tsx`, `useCardAnimation.ts`, `constants/canvas/index.ts`, `useTeamTypeForm.ts`, `constants/filters.ts`, `MemberPane.tsx`, `api/auth.ts`, `MemberSidebar.tsx`, `EditMemberForm.tsx`, `Sidebar.tsx`, `gsap`, `dimensions.ts`, `src/utils/index.ts`, `PhotoViewer.tsx`, `filtersStore.ts`, `MemberSuggestForm.tsx`, `AccountPanel.tsx`, `GroupedCheckListFilter.tsx`, `http`?**
  _High betweenness centrality (0.081) - this node is a cross-community bridge._
- **Should `react` be split into smaller, more focused modules?**
  _Cohesion score 0.11616161616161616 - nodes in this community are weakly interconnected._
- **Why does `Constructor options` connect `pixijs/SKILL.md` to `ref_vitest`?**
  _High betweenness centrality (0.068) - this node is a cross-community bridge._
- **Should `Member` be split into smaller, more focused modules?**
  _Cohesion score 0.10591133004926108 - nodes in this community are weakly interconnected._