# Graph Report - best-family-tree  (2026-11-19)

## Corpus Check
- 737 files · ~223,506 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 31 file(s) not represented in the graph (top: .prisma 10, (none) 7, .css 7)

## Summary
- 3410 nodes · 10165 edges · 143 communities (133 shown, 10 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 100 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `2d823470`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- uk/index.ts
- react
- MemberPane.tsx
- src/index.ts
- ThemeContext.tsx
- auth/types.ts
- bakeParams.ts
- suggestion/suggestionPhoto.ts
- suggestionCreate.ts
- teamLayout.ts
- teamFrame.ts
- SeasonChip.tsx
- anonymizeDemo.ts
- Toolbar.tsx
- filterSearchParams.ts
- emailRoutes.ts
- mailer/index.ts
- scripts
- hooks/index.ts
- @heroicons/react
- httpErrors.ts
- HTML Report Format
- useDashedPathAnimation.ts
- src/types/index.ts
- teamService.ts
- mime.ts
- compilerOptions
- compilerOptions
- Core Patterns
- dependencies
- dependencies
- MemberSearch.tsx
- FilterState
- constants/filters.ts
- TeamLogo.tsx
- Common Mistakes
- package.json
- MemberSuggestFields.tsx
- TeamFormContent.tsx
- Direction
- Core Patterns
- devDependencies
- layout.tsx
- Core Patterns
- CLAUDE.md
- Core Patterns
- TeamFrame
- SettingsPanel.tsx
- During the session
- SuggestionsTab.tsx
- en/index.ts
- AGENTS.md
- scripts
- pixi.js
- NodesLayer.tsx
- next.config.mjs
- postcss.config.mjs
- GroupedCheckListFilter.tsx
- useTeamForm.ts
- Core Patterns
- catalogValidation.ts
- teamGroups.ts
- MembersTreeContent.tsx
- scale.ts
- memberService.ts
- BEST Family Tree
- Diagnosing Bugs
- useCardAnimation.ts
- ApplicationOptions reference
- en/errors.ts
- backfillGender.ts
- Core Patterns
- Core Patterns
- memberFormValidation.ts
- signInCodeEmail.ts
- MemberStatus
- BirthdayFilterSection.tsx
- constants/canvas/index.ts
- Core Patterns
- Core Patterns
- Core Patterns
- api/auth.ts
- transliterate.ts
- Core Patterns
- Constructor options (Container-inherited)
- Test-Driven Development
- GSAP Core
- Core Patterns
- MemberNode.tsx
- Foundations
- useTeamTypeForm.ts
- Sidebar.tsx
- Core Concepts
- Member
- pixijs/SKILL.md
- backup-prod.sh
- start-prod.sh
- restore-local.sh
- constants/theme.ts
- react
- useT
- Core Patterns
- Render Loop
- pixijs-core-concepts/SKILL.md
- Member
- Common Mistakes
- uk/errors.ts
- MemberSuggestForm.tsx
- filtersStore.ts
- PhotoViewer.tsx
- migrateMembersFromMongodb.ts
- MaskIcon.tsx
- Renderers: WebGPU, WebGL, and Canvas
- searchShortcut.ts
- selfService.ts
- AccountPanel.tsx
- pixijs-scene-core-concepts/SKILL.md
- locale.ts
- uk/filters.ts
- proxy.ts
- ref_vitest
- filterTeams.ts
- Common Mistakes
- importAllowedEmails.ts
- http
- plural.ts
- membersStore.ts
- devDependencies
- GSAP with React
- emailCodes.ts
- hitl-loop.template.sh
- fakeIdentity.ts
- emailRoutes.ts
- GSAP Performance
- GSAP Timeline
- ref_vitest
- contactKeys.ts
- checkConfig.ts
- BEST Family Tree
- TeamFormContent.tsx

## God Nodes (most connected - your core abstractions)
1. `useT()` - 212 edges
2. `AccentColor` - 186 edges
3. `react` - 168 edges
4. `tailwind-merge` - 95 edges
5. `Member` - 76 edges
6. `useLocale()` - 73 edges
7. `COLOR_CLASSES` - 59 edges
8. `@heroicons/react` - 55 edges
9. `http()` - 48 edges
10. `useDisplayName()` - 43 edges

## Surprising Connections (you probably didn't know these)
- `pixijs-scene-container` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs/references/index.md → src/hooks/membersTree/animations/useFitViewAnimation.ts
- `Teams` --references--> `Role`  [INFERRED]
  GLOSSARY.md → src/types/positions.ts
- `Constructor options` --references--> `filters()`  [INFERRED]
  .agents/skills/pixijs-scene-graphics/SKILL.md → src/utils/filters/filterMembers.test.ts
- `Constructor options` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs-scene-container/SKILL.md → src/hooks/membersTree/animations/useFitViewAnimation.ts
- `Finding and removing from parent` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs-scene-container/SKILL.md → src/hooks/membersTree/animations/useFitViewAnimation.ts

## Import Cycles
- 3-file cycle: `src/utils/index.ts -> src/utils/membersTree/index.ts -> src/utils/membersTree/lineageEdgePath.ts -> src/utils/index.ts`
- 4-file cycle: `src/context/ThemeContext.tsx -> src/hooks/index.ts -> src/hooks/membersTree/index.ts -> src/hooks/membersTree/useCanvasTheme.ts -> src/context/ThemeContext.tsx`
- 4-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/members.ts -> src/models/index.ts -> src/models/Member.ts`
- 4-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/tree.ts -> src/models/index.ts -> src/models/Member.ts`
- 5-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/filters.ts -> src/types/members.ts -> src/models/index.ts -> src/models/Member.ts`

## Communities (143 total, 10 thin omitted)

### Community 0 - "uk/index.ts"
Cohesion: 0.08
Nodes (19): access, account, auth, common, formCommon, manage, memberForm, memberInfo (+11 more)

### Community 1 - "react"
Cohesion: 0.12
Nodes (31): fetchSuggestionCount(), CATEGORY_ICONS, RoleForm(), TeamForm(), TeamTypeForm(), AccessTab(), ManageList(), ITEMS (+23 more)

### Community 2 - "MemberPane.tsx"
Cohesion: 0.13
Nodes (25): ACTIVITY_ICONS, IconComponent, IconProps, greenPillIcon(), IconProps, DatesPane(), SEASON_ICONS, PANES (+17 more)

### Community 3 - "src/index.ts"
Cohesion: 0.04
Nodes (52): cloudinary, compression, concurrently, cors, express-rate-limit, helmet, multer, multer-storage-cloudinary (+44 more)

### Community 4 - "ThemeContext.tsx"
Cohesion: 0.10
Nodes (23): FONT_FAMILY, NODE_SUBTITLE_STYLE, NODE_TITLE_STYLE, NODE_TOOLTIP_TEXT_STYLE, TEXT_RESOLUTION, applyCssTokens(), ThemeContext, ThemeContextValue (+15 more)

### Community 5 - "auth/types.ts"
Cohesion: 0.14
Nodes (16): canManageGrant(), canSelfServe(), hasAccess(), isOwnGrant(), RANK, AccessRank, Express, Request (+8 more)

### Community 6 - "bakeParams.ts"
Cohesion: 0.21
Nodes (17): AuroraBackground(), readNumber(), useBakedAurora(), AuroraBakeInput, bakeAuroraLayers(), canBakeAurora(), BAKE_SCALE, BLUR_SPREAD (+9 more)

### Community 7 - "suggestion/suggestionPhoto.ts"
Cohesion: 0.11
Nodes (33): canSuggest(), deleteCloudinaryImage(), deleteReplacedImage(), discardUpload(), extractCloudinaryPublicId(), holdsPositionIn(), ownPhoto, selfServeGuard() (+25 more)

### Community 8 - "suggestionCreate.ts"
Cohesion: 0.08
Nodes (50): canEditMember(), assertMentorExists(), assertNoMentorCycle(), assertUniqueContacts(), applyPhone(), Suggestion, buildRows(), checkMemberRows() (+42 more)

### Community 9 - "teamLayout.ts"
Cohesion: 0.08
Nodes (38): elkjs, TEAM_FRAME_GAP, TEAM_PACK_ASPECT, failOver(), getWorker(), Pending, requestLayout(), runInline() (+30 more)

### Community 10 - "teamFrame.ts"
Cohesion: 0.08
Nodes (38): TEAM_COLUMN_GAP, TEAM_EDGE_DROP, TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_SPREAD_WIDTH, TEAM_EDGE_STUB, TEAM_FRAME_HEADER, TEAM_FRAME_MIN_WIDTH, TEAM_FRAME_PADDING (+30 more)

### Community 11 - "SeasonChip.tsx"
Cohesion: 0.27
Nodes (8): FlowerIcon(), Props, MapleLeafIcon(), Props, Placement, PLACEMENTS, Props, RecruitmentSeason

### Community 12 - "anonymizeDemo.ts"
Cohesion: 0.12
Nodes (19): allowed, args, byId, factory, GROUP_NAMES, memberPhotos, nextFace, real (+11 more)

### Community 13 - "Toolbar.tsx"
Cohesion: 0.18
Nodes (17): fetchSession(), SessionInfo, MemberSidebar(), TeamInfoSidebar(), HeaderChip(), MemberSidebarContent(), Props, SidebarMinimizedSummary() (+9 more)

### Community 14 - "filterSearchParams.ts"
Cohesion: 0.19
Nodes (19): useFilterSearchParams(), FamilyGroupRef, familyIdToSlug(), familySlug, familyTokenToId(), groups, filtersToSearchParams(), parseCsvArray() (+11 more)

### Community 15 - "emailRoutes.ts"
Cohesion: 0.08
Nodes (44): express, isProduction(), MIN_ACTIVE_QUESTIONS, SESSION_COOKIE, SESSION_TTL_MS, SIGN_IN_COOKIE, useSecureCookie(), configs (+36 more)

### Community 16 - "mailer/index.ts"
Cohesion: 0.18
Nodes (12): consoleMailer, getMailer(), createResendMailer(), ResendConfig, message, Env, isTransport(), MAIL_TRANSPORTS (+4 more)

### Community 17 - "scripts"
Cohesion: 0.12
Nodes (17): scripts, auth:grant, auth:import-emails, auth:preview-email, auth:report-duplicate-contacts, auth:seed-grants, auth:seed-questions, build (+9 more)

### Community 18 - "hooks/index.ts"
Cohesion: 0.06
Nodes (44): Props, LineageEdge(), Props, MembersTreeScene(), Props, FIXED_EDGE_WIDTH, TEAM_OVERVIEW_EDGE_ALPHA, TEAM_OVERVIEW_NODE_ALPHA (+36 more)

### Community 19 - "@heroicons/react"
Cohesion: 0.14
Nodes (20): @heroicons/react, next, Props, AvatarFileInput(), Props, removeBadgeClasses(), LogoFileInput(), Props (+12 more)

### Community 20 - "httpErrors.ts"
Cohesion: 0.14
Nodes (21): ChallengeState, isExpired(), isSolved(), pickRandom(), swapQuestion(), SwapResult, base, ChallengeView (+13 more)

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "useDashedPathAnimation.ts"
Cohesion: 0.17
Nodes (18): DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN, MIN_ANIM_DURATION, PATTERN_LEN, RETRACT_BASE, SPEED (+10 more)

### Community 23 - "src/types/index.ts"
Cohesion: 0.05
Nodes (63): GLOW, Props, QuestionCard(), SeasonMotif(), Props, Props, Props, Props (+55 more)

### Community 24 - "teamService.ts"
Cohesion: 0.10
Nodes (34): getPositionKey(), ResolvedPosition, resolvePosition(), syncPositions(), MemberTransaction, assertCanEditMembers(), deriveTeamName(), resolveRole() (+26 more)

### Community 25 - "mime.ts"
Cohesion: 0.29
Nodes (11): RFC-2045, RFC-2047, createGmailMailer(), GmailConfig, base64Body(), buildMime(), encodeHeaderText(), formatAddress() (+3 more)

### Community 26 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, esModuleInterop, forceConsistentCasingInFileNames, module, moduleResolution, noImplicitAny, outDir, paths (+12 more)

### Community 27 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+12 more)

### Community 28 - "Core Patterns"
Cohesion: 0.12
Nodes (15): API Reference, Application properties, Common Mistakes, Core Patterns, [CRITICAL] Passing options to the constructor, CullerPlugin (opt-in), Custom Application plugins, [HIGH] Using app.view instead of app.canvas (+7 more)

### Community 29 - "dependencies"
Cohesion: 0.12
Nodes (17): dependencies, cloudinary, compression, cors, dotenv, express, express-rate-limit, helmet (+9 more)

### Community 30 - "dependencies"
Cohesion: 0.10
Nodes (20): dependencies, date-fns, dotenv, elkjs, gsap, @gsap/react, @heroicons/react, lodash (+12 more)

### Community 31 - "MemberSearch.tsx"
Cohesion: 0.10
Nodes (35): compare(), getSearchable(), MemberSearch(), Props, Props, SearchBar(), SearchPanel(), Props (+27 more)

### Community 32 - "FilterState"
Cohesion: 0.12
Nodes (14): Props, Props, Props, GENDER_ICONS, IconProps, Props, FilterCategoryKey, FilterState (+6 more)

### Community 33 - "constants/filters.ts"
Cohesion: 0.14
Nodes (26): ACTIVITY_STATES, DATE_PICKER_CLASSES, EMPTY_FILTER_STATE, GENDER_VALUES, JOIN_SEASONS, MEMBER_STATUSES, FILTER_CATEGORY_KEYS, isCategoryActive() (+18 more)

### Community 34 - "TeamLogo.tsx"
Cohesion: 0.15
Nodes (19): cache, loadImageAspect(), PhotoOpenButton(), Props, useIsPhotoOpen(), AvatarSkeleton(), MemberAvatarImage(), MemberAvatarImageInner() (+11 more)

### Community 35 - "Common Mistakes"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, Constructor options, [CRITICAL] Using lineStyle instead of stroke, [CRITICAL] Using old shape method names, [CRITICAL] Using v7 beginFill/drawRect/endFill, [HIGH] Clearing and redrawing Graphics every frame, [HIGH] Destroying a shared GraphicsContext unexpectedly (+4 more)

### Community 36 - "package.json"
Cohesion: 0.10
Nodes (20): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+12 more)

### Community 37 - "MemberSuggestFields.tsx"
Cohesion: 0.14
Nodes (28): Props, FormField(), GenderFormField(), MemberBasicsSection(), Props, MemberBestSection(), Props, MemberContactsSection() (+20 more)

### Community 38 - "TeamFormContent.tsx"
Cohesion: 0.11
Nodes (34): FieldError(), Props, PositionAssignmentFields(), Props, PositionFormFields(), Props, createEmptyPositionRow(), EMPTY_POSITION_ROW (+26 more)

### Community 39 - "Direction"
Cohesion: 0.09
Nodes (40): EdgesLayer(), drawLerped(), drawPolyline(), Props, TeamEdgesLayer(), NODE_AVATAR_RADIUS, Point, TeamEdge (+32 more)

### Community 40 - "Core Patterns"
Cohesion: 0.10
Nodes (23): Renderer selection at runtime, Adding and removing children, API Reference, Bounds and coordinate conversion, Common Mistakes, Core Patterns, [CRITICAL] Adding children to leaf scene objects, Destroy (+15 more)

### Community 41 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+5 more)

### Community 42 - "layout.tsx"
Cohesion: 0.13
Nodes (10): react-datepicker, metadata, nunito, RootLayout(), detectLocale(), isLocale(), LocaleProvider(), LEAVE_MS (+2 more)

### Community 43 - "Core Patterns"
Cohesion: 0.12
Nodes (16): API Reference, Common Mistakes, Coordinate conversion, Core Patterns, Cumulative alpha (getGlobalAlpha), Global, local, and screen coordinates, [HIGH] Setting scale to 0, [MEDIUM] Confusing anchor and pivot (+8 more)

### Community 44 - "CLAUDE.md"
Cohesion: 0.22
Nodes (8): Commands, Conventions, Delegating to subagents, Deployment & data, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout

### Community 45 - "Core Patterns"
Cohesion: 0.12
Nodes (15): Add, remove, swap, API Reference, Child queries, Common Mistakes, Container Hierarchy, Core Patterns, [CRITICAL] Adding children to a leaf, Destroying sub-trees (+7 more)

### Community 46 - "TeamFrame"
Cohesion: 0.08
Nodes (46): @pixi/react, PixiElements, @pixi/react, Props, TeamBadge(), FILL_ALPHA, lerp(), Props (+38 more)

### Community 47 - "SettingsPanel.tsx"
Cohesion: 0.19
Nodes (14): FamilyTreeIcon(), Props, edgeIcon(), edgeStyleOptions(), iconClass, orientationOptions(), themeOptions(), treeModeOptions() (+6 more)

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "SuggestionsTab.tsx"
Cohesion: 0.18
Nodes (18): approveSuggestion(), fetchSuggestions(), parse(), rejectSuggestion(), SuggestionDto, ReviewKind, fieldLabelKey(), formatDay() (+10 more)

### Community 50 - "en/index.ts"
Cohesion: 0.11
Nodes (23): access, account, auth, common, filters, formCommon, en, manage (+15 more)

### Community 51 - "AGENTS.md"
Cohesion: 0.25
Nodes (7): Commands, Conventions, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout, This is NOT the Next.js you know

### Community 52 - "scripts"
Cohesion: 0.20
Nodes (10): scripts, build, db:backup-prod, db:restore-local, dev, dev:webpack, lint, start (+2 more)

### Community 53 - "pixi.js"
Cohesion: 0.10
Nodes (22): @gsap/react, pixi.js, BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props, acquireEmojiTextures(), createEmojiTexture() (+14 more)

### Community 54 - "NodesLayer.tsx"
Cohesion: 0.29
Nodes (6): NodesLayer(), Props, nextAdmittedIds(), PROGRESSIVE_CHUNK_SIZE, useProgressiveIds(), getMemberTeamRoles()

### Community 57 - "GroupedCheckListFilter.tsx"
Cohesion: 0.19
Nodes (14): byLabel(), CheckOption, Props, useStableOrder(), CheckRow(), Props, byName(), CheckGroup (+6 more)

### Community 58 - "useTeamForm.ts"
Cohesion: 0.22
Nodes (19): createTeam(), deleteTeam(), fetchTeamDetails(), parse(), setTeamMembers(), TeamMemberPayload, updateTeam(), buildTeamRequestBody() (+11 more)

### Community 59 - "Core Patterns"
Cohesion: 0.12
Nodes (17): Application destroy/recreate cycle, Batching optimization, cacheAsTexture for performance, Core Patterns, Culling, Filters and masks cost, Graphics performance, Low-level rendering optimizations (+9 more)

### Community 60 - "catalogValidation.ts"
Cohesion: 0.06
Nodes (34): countMembersByRole(), router, rejectUpload(), router, uploadTeamTypeIcon, booleanLike, isValidPeriod(), MIN_TEAM_YEAR (+26 more)

### Community 61 - "teamGroups.ts"
Cohesion: 0.19
Nodes (15): MembersMap, areSetsEqual(), computeFilteredMembers(), Source, transformMembersToFlowValues(), reconnectEdgesToVisibleAncestors(), buildLayoutGraph(), Input (+7 more)

### Community 62 - "MembersTreeContent.tsx"
Cohesion: 0.19
Nodes (14): zustand, Viewport(), EVENT_FEATURES, MembersTreeContent(), ViewportCulling(), useSyncMembers(), useTeamSelection(), useViewportCulling() (+6 more)

### Community 63 - "scale.ts"
Cohesion: 0.20
Nodes (13): EMPTY_IDS, SharpAvatarTracker(), View, AVATAR_LOW_RES_SIZE, MAX_RENDER_RESOLUTION, NODE_AVATAR_SIZE, TEAM_OVERVIEW_END_SCALE, TEAM_OVERVIEW_FAST_FACTOR (+5 more)

### Community 64 - "memberService.ts"
Cohesion: 0.08
Nodes (41): zod, CONTACT_FIELDS, toMemberResponse(), loadFamilyTree, loadReducedFamilyTree, router, guardMemberEdit(), buildMemberFields() (+33 more)

### Community 65 - "BEST Family Tree"
Cohesion: 0.10
Nodes (19): 1. Clone and configure environment, 2. Start the application, 3. Run database migrations, 4. Access the app, Architecture, Automated backups (GitHub Actions), Available Commands, Backend Commands (run inside container) (+11 more)

### Community 66 - "Diagnosing Bugs"
Cohesion: 0.13
Nodes (14): Completion criterion: a tight loop that goes red, Diagnosing Bugs, Minimise, Non-deterministic bugs, Phase 1: Build a feedback loop, Phase 2: Reproduce + minimise, Phase 3: Hypothesise, Phase 4: Instrument (+6 more)

### Community 67 - "useCardAnimation.ts"
Cohesion: 0.15
Nodes (21): clamp01(), deferCardHidden(), easeBackOut, easePower2In, easePower2Out, entries, Entry, finishCardReveal() (+13 more)

### Community 68 - "ApplicationOptions reference"
Cohesion: 0.12
Nodes (17): Accessibility, ApplicationOptions reference, Background, Culler (CullerPluginOptions), Deprecated (GC — prefer the unified options above), Events, Garbage collection, Graphics (+9 more)

### Community 69 - "en/errors.ts"
Cohesion: 0.50
Nodes (3): errors, Params, platformLabels

### Community 70 - "backfillGender.ts"
Cohesion: 0.12
Nodes (15): alreadyDifferent, alreadySame, APPLY, args, duplicates, fileArg, Gender, GENDERS (+7 more)

### Community 71 - "Core Patterns"
Cohesion: 0.13
Nodes (14): API Reference, boundsArea optimization, Common Mistakes, Core Patterns, Culling, HIGH: Expecting automatic culling, HIGH: Using addChild on RenderLayer, MEDIUM: Expecting filters on ancestors to apply to layer children (+6 more)

### Community 72 - "Core Patterns"
Cohesion: 0.12
Nodes (14): Advanced shape primitives, Cloning, clearing, and bounds, Core Patterns, Default styles via setFillStyle / setStrokeStyle, Draw-time transforms, Drawing a texture directly, Gradients and patterns, GraphicsContext sharing (+6 more)

### Community 73 - "memberFormValidation.ts"
Cohesion: 0.19
Nodes (12): CheckedField, getStoredFieldValues(), Links, StoredMemberValues, complete, mentors, sparse, toTime() (+4 more)

### Community 74 - "signInCodeEmail.ts"
Cohesion: 0.21
Nodes (7): CODE_TTL_MS, COPY, EmailLocale, escapeHtml(), pairs(), renderSignInCodeEmail(), { html }

### Community 75 - "MemberStatus"
Cohesion: 0.12
Nodes (15): MEMBER_STATUSES, MENTOR_STATUSES, initialFiltersState, ActivityState, Active, Excluded, Inactive, MemberStatus (+7 more)

### Community 76 - "BirthdayFilterSection.tsx"
Cohesion: 0.13
Nodes (20): date-fns, BirthdayFilterSection(), ClearButton(), FilterCheckbox(), Props, Props, Props, Option (+12 more)

### Community 77 - "constants/canvas/index.ts"
Cohesion: 0.31
Nodes (8): lineageEdgePath, ACCIDENTAL_DRAG_MAX_DISTANCE, ACCIDENTAL_DRAG_MAX_MS, LONG_PRESS_MS, TAP_MOVE_TOLERANCE, PressStart, useTapWithoutDrag(), isTapGesture()

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

### Community 82 - "transliterate.ts"
Cohesion: 0.24
Nodes (8): displayFamilyName(), romanizeCached(), MAP, ROMAN, ROMAN_INITIAL, ROMAN_INNER, romanize(), transliterate()

### Community 83 - "Core Patterns"
Cohesion: 0.15
Nodes (13): Context and device loss, Core Patterns, Destroying a renderer, Direct renderer construction, Lazy-loading backend-specific systems and pipes, Manual rendering, Per-renderer options, Preference forms (+5 more)

### Community 84 - "Constructor options (Container-inherited)"
Cohesion: 0.11
Nodes (20): Constructor options, Container events, Advanced options and aliases, Before / after, Callbacks, Constructor options (Container-inherited), Display, Effects (+12 more)

### Community 85 - "Test-Driven Development"
Cohesion: 0.15
Nodes (10): Designing for Mockability, When to Mock, Anti-patterns, Rules of the loop, Seams: where tests go, Test-Driven Development, What a good test is, Bad Tests (+2 more)

### Community 86 - "GSAP Core"
Cohesion: 0.10
Nodes (20): Accessibility and responsive (gsap.matchMedia()), Common vars, Core Tween Methods, Custom: use CustomEase (plugin), Defaults, Do Not, Easing, Function-based values (+12 more)

### Community 87 - "Core Patterns"
Cohesion: 0.17
Nodes (12): Capture phase events, Core Patterns, Cursor styles, Event features, Event properties, Event types, eventMode values, Global move events and drag (+4 more)

### Community 88 - "MemberNode.tsx"
Cohesion: 0.06
Nodes (43): contexts, getCardBackgroundContext(), getGlowTexture(), GLOW_BLUR, GLOW_PADDING, GlowKind, paint(), SIZES (+35 more)

### Community 89 - "Foundations"
Cohesion: 0.13
Nodes (14): Advanced, Foundations, pixijs-application, pixijs-core-concepts, pixijs-events, pixijs-performance, pixijs-scene-container, pixijs-scene-core-concepts (+6 more)

### Community 90 - "useTeamTypeForm.ts"
Cohesion: 0.29
Nodes (7): buildTeamTypeFormData(), Callbacks, EMPTY_FORM, keepCount(), toFormData(), useTeamTypeForm(), isSameFormData()

### Community 91 - "Sidebar.tsx"
Cohesion: 0.14
Nodes (15): Props, SuccessBubble(), Sidebar(), Props, SidebarBehindCover(), SidebarCoverTint(), Props, SidebarFooter() (+7 more)

### Community 92 - "Core Concepts"
Cohesion: 0.18
Nodes (11): Container vs leaf (CRITICAL), Core Concepts, Culling, Destroy semantics, Lifecycle events, Masking, Render groups, Render order and explicit z-ordering (+3 more)

### Community 93 - "Member"
Cohesion: 0.13
Nodes (18): MembersTree(), Props, Props, isTreeReady(), MembersTree, MembersTreeDynamic(), Props, TreeState (+10 more)

### Community 94 - "pixijs/SKILL.md"
Cohesion: 0.12
Nodes (14): API Reference, Common Mistakes, [HIGH] buttonMode removed; use cursor, [HIGH] Default eventMode is passive, [HIGH] Move events only fire over the object in v8, [MEDIUM] Cursor does not inherit from parent, Quick Start, Advanced (+6 more)

### Community 98 - "constants/theme.ts"
Cohesion: 0.25
Nodes (6): darkTheme, DEFAULT_THEME, lightTheme, THEMES, themeCssMap, themeInitScript

### Community 99 - "react"
Cohesion: 0.13
Nodes (23): gsap, pixi-viewport, react, Props, ManagePane(), Props, NODE_HOVER_ANIMATION_DURATION, NODE_HOVER_SCALE (+15 more)

### Community 100 - "useT"
Cohesion: 0.09
Nodes (45): tailwind-merge, AccessGrant, InfoSection(), Props, MemberActivityPill(), Props, MemberFactTile(), Props (+37 more)

### Community 101 - "Core Patterns"
Cohesion: 0.29
Nodes (7): Core Patterns, Frame rate capping, Manual rendering, Per-object update via `onRender`, Priority order, Stop and start, Time units

### Community 102 - "Render Loop"
Cohesion: 0.22
Nodes (8): API Reference, Common Mistakes, [CRITICAL] Treating the ticker callback arg as a number, Frame lifecycle, [HIGH] Using `updateTransform` for per-frame logic, [MEDIUM] Assuming ticker callbacks run after render, Quick Start, Render Loop

### Community 103 - "pixijs-core-concepts/SKILL.md"
Cohesion: 0.22
Nodes (8): API Reference, Decision guide, Environments, Quick concepts, Quick Start, Renderer = systems + pipes, The render loop, Topics

### Community 104 - "Member"
Cohesion: 0.11
Nodes (18): Props, Props, Props, Props, Props, Props, Props, Props (+10 more)

### Community 105 - "Common Mistakes"
Cohesion: 0.50
Nodes (4): Common Mistakes, [HIGH] Accessing app.renderer before init() resolves, [HIGH] Setting DOMAdapter after Application.init, [MEDIUM] Treating `preference` as a guarantee

### Community 106 - "uk/errors.ts"
Cohesion: 0.50
Nodes (3): errors, Params, platformLabels

### Community 107 - "MemberSuggestForm.tsx"
Cohesion: 0.11
Nodes (47): AddMemberForm(), buildMemberFormData(), ClearButton(), SubmitButton(), ConfirmDeleteControl(), Props, describeSubmitError(), EditMemberForm() (+39 more)

### Community 108 - "filtersStore.ts"
Cohesion: 0.11
Nodes (28): DemoBadge(), FilterCategoryRail(), FiltersFooter(), Props, FiltersHeader(), Props, FiltersPanel(), Props (+20 more)

### Community 109 - "PhotoViewer.tsx"
Cohesion: 0.10
Nodes (35): react-dom, DropdownPortal(), Props, PhotoViewer(), thumbRadius(), Viewer(), viewportRect(), BUTTON (+27 more)

### Community 110 - "migrateMembersFromMongodb.ts"
Cohesion: 0.07
Nodes (32): mongodb, ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember, STATUSES_MAP (+24 more)

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

### Community 113 - "searchShortcut.ts"
Cohesion: 0.33
Nodes (6): EDITABLE_TAGS, isEditableTarget(), isSearchShortcut(), ShortcutKeys, Keys, useSearchShortcut()

### Community 114 - "selfService.ts"
Cohesion: 0.10
Nodes (28): ApiError, errorMessage(), ErrorParams, fetchMyMemberSuggestions(), fetchMyTeamSuggestions(), PendingSuggestion, photoBody(), postChanges() (+20 more)

### Community 115 - "AccountPanel.tsx"
Cohesion: 0.10
Nodes (33): refreshProfile(), setFeaturedPosition(), setNameBadge(), AccountPanel(), Props, AccountRoles(), byLatestYears(), lastYear() (+25 more)

### Community 116 - "pixijs-scene-core-concepts/SKILL.md"
Cohesion: 0.14
Nodes (12): API Reference, Common Mistakes, [CRITICAL] Adding children to a leaf display object, [CRITICAL] Referencing DisplayObject, [HIGH] Forgetting isRenderGroup on large static subtrees, [HIGH] Treating child.x as world space, Leaf comparison: which skill covers which object, [MEDIUM] sortableChildren without zIndex (+4 more)

### Community 117 - "locale.ts"
Cohesion: 0.19
Nodes (17): SHORT_LABELS, writeLocaleCookie(), Locale, LOCALE_COOKIE, LOCALES, DEFAULT_SETTINGS, LocaleState, readLegacyTheme() (+9 more)

### Community 118 - "uk/filters.ts"
Cohesion: 0.33
Nodes (5): familyForms, filters, memberForms, roleForms, teamForms

### Community 120 - "ref_vitest"
Cohesion: 0.50
Nodes (4): answerMatches(), CYRILLIC_TO_LATIN, normalizeAnswer(), DEMO_QUESTIONS

### Community 121 - "filterTeams.ts"
Cohesion: 0.28
Nodes (11): getTeamSpan(), hasRole(), hasTeamCriteria(), isTeamFilterActive(), matchesPeriod(), memberMatchesTeamFilters(), positionMatchesTeamFilters(), TeamFilters (+3 more)

### Community 123 - "Common Mistakes"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, [CRITICAL] App destroy without releaseGlobalResources, [HIGH] Destroying and recreating objects instead of recycling, [HIGH] Interleaving object types in scene graph, [HIGH] Loading many individual textures instead of spritesheets, [HIGH] Updating Text or HTMLText every frame, [HIGH] Using complex Graphics instead of textures (+4 more)

### Community 124 - "importAllowedEmails.ts"
Cohesion: 0.19
Nodes (12): AllowedRow, AllowlistDiff, diffAllowlist(), looksLikeEmail(), parseAllowlistCsv(), ParsedAllowlist, splitLine(), apply (+4 more)

### Community 125 - "http"
Cohesion: 0.09
Nodes (43): fetchGrants(), GrantLevel, parse(), removeGrant(), setGrant(), addMember(), toApiError(), deleteMember() (+35 more)

### Community 126 - "plural.ts"
Cohesion: 0.18
Nodes (9): memberForm, teamTypeForm, memberForms, search, formatCount(), plural(), PluralForms, en (+1 more)

### Community 127 - "membersStore.ts"
Cohesion: 0.19
Nodes (16): membersActions, {
  setMembers,
  reloadMembers,
  addMember,
  updateMember,
  selectMember,
  getMentorsList,
}, useMembersList(), useMembersMap(), useMentees(), useSelectedId(), useSelectedMember(), changesStructure() (+8 more)

### Community 128 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, concurrently, @faker-js/faker, nodemon, ts-node, tsx, @types/compression, @types/cors (+5 more)

### Community 129 - "GSAP with React"
Cohesion: 0.15
Nodes (12): Best practices, Context-Safe Callbacks, Dependency array, scope, and revertOnUpdate, Do Not, gsap.context() in useEffect (when useGSAP isn't used), GSAP with React, Installation, Learn More (+4 more)

### Community 130 - "emailCodes.ts"
Cohesion: 0.18
Nodes (13): CodeOwner, CodeStore, generateCode(), hashCode(), issueCode(), MAX_CODE_ATTEMPTS, sameHash(), StoredCode (+5 more)

### Community 132 - "hitl-loop.template.sh"
Cohesion: 0.83
Nodes (3): capture(), hitl-loop.template.sh script, step()

### Community 133 - "fakeIdentity.ts"
Cohesion: 0.27
Nodes (7): @faker-js/faker, createIdentityFactory(), firstFree(), OPERATOR_CODES, none, MAP, translit()

### Community 134 - "emailRoutes.ts"
Cohesion: 0.10
Nodes (31): authSecret(), isDemoMode(), EligibilityMember, EmailIdentity, MemberMatch, normalizeEmail(), resolveEmailIdentity(), resolveMemberMatch() (+23 more)

### Community 137 - "GSAP Performance"
Cohesion: 0.17
Nodes (11): Batch Reads and Writes, Best practices, Do Not, Frequently updated properties (e.g. mouse followers), GSAP Performance, Many Elements (Stagger, Lists), Prefer Transform and Opacity, Reduce Simultaneous Work (+3 more)

### Community 138 - "GSAP Timeline"
Cohesion: 0.17
Nodes (11): Controlling Playback, Creating a Timeline, Do Not, GSAP Timeline, Labels, Nesting Timelines, Official GSAP Best practices, Position Parameter (+3 more)

### Community 141 - "ref_vitest"
Cohesion: 0.22
Nodes (3): createFaceSource(), Options, source()

### Community 142 - "contactKeys.ts"
Cohesion: 0.17
Nodes (12): duplicates, fields, groups, contactField(), ContactFields, contactKey(), contactLabel(), ContactPlatform (+4 more)

### Community 144 - "checkConfig.ts"
Cohesion: 0.19
Nodes (14): assertConfig(), configProblems(), databaseName(), demoProblems(), Env, googleProblems(), telegramProblems(), good (+6 more)

### Community 146 - "BEST Family Tree"
Cohesion: 0.25
Nodes (7): BEST Family Tree, Contributions, Language, People, Sign-in, Teams, Views

### Community 148 - "TeamFormContent.tsx"
Cohesion: 0.13
Nodes (27): DropdownMenu(), Props, ComboboxInput(), Props, ComboboxInputField(), Props, useComboboxState(), DropdownSelectInput() (+19 more)

## Knowledge Gaps
- **45 isolated node(s):** `@prisma/client`, `dotenv`, `lodash`, `pixi-filters`, `@tailwindcss/postcss` (+40 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1085 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `react`, `MemberPane.tsx`, `ThemeContext.tsx`, `bakeParams.ts`, `Toolbar.tsx`, `hooks/index.ts`, `@heroicons/react`, `TeamFormContent.tsx`, `useDashedPathAnimation.ts`, `src/types/index.ts`, `MemberSearch.tsx`, `FilterState`, `TeamLogo.tsx`, `package.json`, `MemberSuggestFields.tsx`, `TeamFormContent.tsx`, `Direction`, `TeamFrame`, `SettingsPanel.tsx`, `SuggestionsTab.tsx`, `pixi.js`, `NodesLayer.tsx`, `GroupedCheckListFilter.tsx`, `useTeamForm.ts`, `MembersTreeContent.tsx`, `scale.ts`, `useCardAnimation.ts`, `BirthdayFilterSection.tsx`, `constants/canvas/index.ts`, `api/auth.ts`, `MemberNode.tsx`, `useTeamTypeForm.ts`, `Sidebar.tsx`, `Member`, `useT`, `Member`, `MemberSuggestForm.tsx`, `filtersStore.ts`, `PhotoViewer.tsx`, `searchShortcut.ts`, `selfService.ts`, `AccountPanel.tsx`, `locale.ts`, `http`, `membersStore.ts`?**
  _High betweenness centrality (0.108) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _45 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `uk/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.08108108108108109 - nodes in this community are weakly interconnected._
- **Why does `filters()` connect `Constructor options (Container-inherited)` to `constants/filters.ts`, `Common Mistakes`, `filterSearchParams.ts`?**
  _High betweenness centrality (0.088) - this node is a cross-community bridge._
- **Should `react` be split into smaller, more focused modules?**
  _Cohesion score 0.12210915818686402 - nodes in this community are weakly interconnected._
- **Why does `Constructor options` connect `Common Mistakes` to `Constructor options (Container-inherited)`?**
  _High betweenness centrality (0.067) - this node is a cross-community bridge._
- **Should `MemberPane.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.13368983957219252 - nodes in this community are weakly interconnected._