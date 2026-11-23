# Graph Report - best-family-tree  (2026-11-23)

## Corpus Check
- 744 files · ~226,142 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 33 file(s) not represented in the graph (top: .prisma 10, (none) 7, .css 7)

## Summary
- 3440 nodes · 10323 edges · 147 communities (137 shown, 10 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 103 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `b41dfca1`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- uk/index.ts
- react
- displayName.ts
- server/package.json
- TeamFrame
- useDashedPathAnimation.ts
- bakeParams.ts
- auth/types.ts
- suggestionCreate.ts
- NODE_WIDTH
- teamFrame.ts
- SeasonMotif.tsx
- anonymizeDemo.ts
- src/index.ts
- constants/filters.ts
- oidc.ts
- TeamLogoPicker.tsx
- dependencies
- treeStore.ts
- Member
- suggestionCreate.ts
- HTML Report Format
- layout.tsx
- AccentColor
- teamService.ts
- TeamSearch.tsx
- compilerOptions
- compilerOptions
- Core Patterns
- ThemeContext.tsx
- dependencies
- sessions.ts
- TeamLogo.tsx
- filterTeams.ts
- MemberSuggestFields.tsx
- suggestChanges.ts
- package.json
- MemberInfoActions.tsx
- MemberSearch.tsx
- utils/membersTree/index.ts
- Core Patterns
- devDependencies
- locale.ts
- Core Patterns
- CLAUDE.md
- Container Hierarchy
- TeamFrame
- FitViewButton.tsx
- During the session
- SuggestionsTab.tsx
- en/index.ts
- AGENTS.md
- scripts
- eligibility.ts
- eligibility.ts
- next.config.mjs
- postcss.config.mjs
- SettingsPanel.tsx
- useTeamForm.ts
- Core Patterns
- locale.ts
- TeamTypeFormContent.tsx
- membersStore.ts
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
- Toolbar.tsx
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
- transliterate.ts
- Foundations
- EditMemberForm.tsx
- Sidebar.tsx
- Core Patterns
- demoQuestions.test.ts
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
- teamRoster.ts
- Common Mistakes
- searchShortcut.ts
- MembersTreeContent.tsx
- emailRoutes.ts
- PhotoViewer.tsx
- migrateMembersFromMongodb.ts
- MaskIcon.tsx
- Renderers: WebGPU, WebGL, and Canvas
- filtersStore.ts
- selfService.ts
- AccountPanel.tsx
- pixijs-scene-core-concepts/SKILL.md
- scripts
- pixijs/SKILL.md
- GroupedCheckListFilter.tsx
- uk/filters.ts
- piiCheck.ts
- MemberNodeCard.tsx
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
8. `@heroicons/react` - 56 edges
9. `http()` - 48 edges
10. `TeamFrame` - 45 edges

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

## Communities (147 total, 10 thin omitted)

### Community 0 - "uk/index.ts"
Cohesion: 0.08
Nodes (19): access, account, auth, common, formCommon, manage, memberForm, memberInfo (+11 more)

### Community 1 - "react"
Cohesion: 0.10
Nodes (40): CATEGORY_ICONS, byLabel(), CheckOption, Props, useStableOrder(), TeamForm(), MemberPositions(), Props (+32 more)

### Community 2 - "displayName.ts"
Cohesion: 0.17
Nodes (21): AccessGrant, DateWithYears(), formatJoinedDate(), MemberInfoFacts(), Props, Tile, AccessRow(), Props (+13 more)

### Community 3 - "server/package.json"
Cohesion: 0.08
Nodes (24): compression, concurrently, express-rate-limit, nodemon, openid-client, ts-node, tsx, @types/compression (+16 more)

### Community 4 - "TeamFrame"
Cohesion: 0.11
Nodes (30): Props, TeamFramesLayer(), Props, TeamOverviewLayer(), Props, Props, Props, Options (+22 more)

### Community 5 - "useDashedPathAnimation.ts"
Cohesion: 0.11
Nodes (30): LineageEdge(), FIXED_EDGE_WIDTH, DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN, MIN_ANIM_DURATION, PATTERN_LEN (+22 more)

### Community 6 - "bakeParams.ts"
Cohesion: 0.21
Nodes (17): AuroraBackground(), readNumber(), useBakedAurora(), AuroraBakeInput, bakeAuroraLayers(), canBakeAurora(), BAKE_SCALE, BLUR_SPREAD (+9 more)

### Community 7 - "auth/types.ts"
Cohesion: 0.10
Nodes (22): canManageGrant(), hasAccess(), isOwnGrant(), RANK, CONTACT_FIELDS, toMemberResponse(), AccessRank, Express (+14 more)

### Community 8 - "suggestionCreate.ts"
Cohesion: 0.08
Nodes (40): canEditMember(), applyPhone(), Suggestion, countPending(), listPending(), alreadyReviewed(), applyApproval(), applyTeamField() (+32 more)

### Community 9 - "NODE_WIDTH"
Cohesion: 0.12
Nodes (23): elkjs, NODE_WIDTH, TEAM_FRAME_GAP, TEAM_PACK_ASPECT, computeDirectedPacking(), computePacking(), packBoxes(), packLanes() (+15 more)

### Community 10 - "teamFrame.ts"
Cohesion: 0.09
Nodes (37): TEAM_COLUMN_GAP, TEAM_EDGE_DROP, TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_SPREAD_WIDTH, TEAM_EDGE_STUB, TEAM_FRAME_HEADER, TEAM_FRAME_MIN_WIDTH, TEAM_FRAME_PADDING (+29 more)

### Community 11 - "SeasonMotif.tsx"
Cohesion: 0.26
Nodes (9): FlowerIcon(), Props, MapleLeafIcon(), Props, Placement, PLACEMENTS, Props, SeasonMotif() (+1 more)

### Community 12 - "anonymizeDemo.ts"
Cohesion: 0.14
Nodes (11): allowed, args, byId, factory, GROUP_NAMES, memberPhotos, nextFace, real (+3 more)

### Community 13 - "src/index.ts"
Cohesion: 0.08
Nodes (41): cloudinary, cors, express, helmet, multer, multer-storage-cloudinary, canSelfServe(), app (+33 more)

### Community 14 - "constants/filters.ts"
Cohesion: 0.12
Nodes (28): FilterCategoryRail(), ACTIVITY_STATES, GENDER_VALUES, JOIN_SEASONS, MEMBER_STATUSES, FamilyGroupRef, familyIdToSlug(), familySlug (+20 more)

### Community 15 - "oidc.ts"
Cohesion: 0.13
Nodes (22): Container events, Transform, Lifecycle events, Origin (new in v8), callbackErrorRedirect(), configs, cookieOptions(), finishLogin() (+14 more)

### Community 16 - "TeamLogoPicker.tsx"
Cohesion: 0.13
Nodes (23): @heroicons/react, next, react, LionIcon(), Props, Props, AvatarFileInput(), removeBadgeClasses() (+15 more)

### Community 17 - "dependencies"
Cohesion: 0.06
Nodes (30): dependencies, cloudinary, compression, cors, dotenv, express, express-rate-limit, helmet (+22 more)

### Community 18 - "treeStore.ts"
Cohesion: 0.06
Nodes (48): Props, Props, View, MembersTreeScene(), Props, TEAM_OVERVIEW_EDGE_ALPHA, TEAM_OVERVIEW_NODE_ALPHA, getFitViewTargetScale() (+40 more)

### Community 19 - "Member"
Cohesion: 0.05
Nodes (44): Constructor options, Effects, Cloning, clearing, and bounds, date-fns, Props, Props, Props, Props (+36 more)

### Community 20 - "suggestionCreate.ts"
Cohesion: 0.10
Nodes (34): canSuggest(), assertUnderPendingCap(), authorWhere(), SuggestionTarget, targetWhere(), buildRows(), checkMemberRows(), checkTeamRows() (+26 more)

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "layout.tsx"
Cohesion: 0.16
Nodes (6): react-datepicker, metadata, nunito, RootLayout(), detectLocale(), isLocale()

### Community 23 - "AccentColor"
Cohesion: 0.06
Nodes (70): tailwind-merge, PAIR_COLORS, Props, GLOW, Props, Props, Props, Props (+62 more)

### Community 24 - "teamService.ts"
Cohesion: 0.08
Nodes (40): adminGrantLocked(), ownGrantError(), getPositionKey(), ResolvedPosition, resolvePosition(), syncPositions(), MEMBER_INCLUDE, MemberTransaction (+32 more)

### Community 25 - "TeamSearch.tsx"
Cohesion: 0.24
Nodes (12): SearchPanel(), Props, HighlightedTitle(), Props, SearchSuggestionRow(), SuggestionRowProps, compare(), getSearchable() (+4 more)

### Community 26 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, esModuleInterop, forceConsistentCasingInFileNames, module, moduleResolution, noImplicitAny, outDir, paths (+12 more)

### Community 27 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+12 more)

### Community 28 - "Core Patterns"
Cohesion: 0.12
Nodes (15): API Reference, Application properties, Common Mistakes, Core Patterns, [CRITICAL] Passing options to the constructor, CullerPlugin (opt-in), Custom Application plugins, [HIGH] Using app.view instead of app.canvas (+7 more)

### Community 29 - "ThemeContext.tsx"
Cohesion: 0.12
Nodes (19): darkTheme, DEFAULT_THEME, lightTheme, THEMES, applyCssTokens(), ThemeContext, ThemeContextValue, ThemeProvider() (+11 more)

### Community 30 - "dependencies"
Cohesion: 0.10
Nodes (20): dependencies, date-fns, dotenv, elkjs, gsap, @gsap/react, @heroicons/react, lodash (+12 more)

### Community 31 - "sessions.ts"
Cohesion: 0.14
Nodes (20): isDemoMode(), isProduction(), SESSION_COOKIE, SIGN_IN_COOKIE, useSecureCookie(), buildSessionInfo(), clearSessionCookie(), createSession() (+12 more)

### Community 32 - "TeamLogo.tsx"
Cohesion: 0.15
Nodes (19): cache, loadImageAspect(), PhotoOpenButton(), Props, useIsPhotoOpen(), AvatarSkeleton(), MemberAvatarImage(), MemberAvatarImageInner() (+11 more)

### Community 33 - "filterTeams.ts"
Cohesion: 0.15
Nodes (26): birthdayBoundKey(), countActiveFilters(), countActiveMemberFilters(), isFilterActive(), isIdListSet(), matchesBirthday(), matchesFamilyGroup(), matchesGender() (+18 more)

### Community 34 - "MemberSuggestFields.tsx"
Cohesion: 0.09
Nodes (51): DropdownMenu(), Props, FormField(), MemberBasicsSection(), Props, MemberBestSection(), Props, MemberContactsSection() (+43 more)

### Community 35 - "suggestChanges.ts"
Cohesion: 0.19
Nodes (12): normalizePhone(), buildMemberChanges(), buildTeamChanges(), findEmptiedTeamFields(), SuggestableMember, SuggestableTeam, SuggestMemberForm, SuggestTeamForm (+4 more)

### Community 36 - "package.json"
Cohesion: 0.10
Nodes (20): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+12 more)

### Community 37 - "MemberInfoActions.tsx"
Cohesion: 0.26
Nodes (10): FacebookIcon(), FacebookGlyph(), InstagramGlyph(), LinkedinGlyph(), svgProps, TelegramGlyph(), InstagramIcon(), LinkedinIcon() (+2 more)

### Community 38 - "MemberSearch.tsx"
Cohesion: 0.25
Nodes (12): getMatchRanges(), matchesQuery(), queryParts(), rankMatch(), searchableName(), tokenize(), Options, useSearchSuggestions() (+4 more)

### Community 39 - "utils/membersTree/index.ts"
Cohesion: 0.11
Nodes (33): EdgesLayer(), drawLerped(), drawPolyline(), Props, TeamEdgesLayer(), NODE_AVATAR_RADIUS, NODE_HEIGHT, EdgeStyle (+25 more)

### Community 40 - "Core Patterns"
Cohesion: 0.12
Nodes (20): Adding and removing children, API Reference, Bounds and coordinate conversion, Common Mistakes, Core Patterns, [CRITICAL] Adding children to leaf scene objects, Destroy, Finding and removing from parent (+12 more)

### Community 41 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+5 more)

### Community 42 - "locale.ts"
Cohesion: 0.18
Nodes (18): LanguageSwitch(), SHORT_LABELS, writeLocaleCookie(), Locale, LOCALE_COOKIE, LOCALES, LocaleProvider(), DEFAULT_SETTINGS (+10 more)

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
Cohesion: 0.06
Nodes (55): @pixi/react, PixiElements, @gsap/react, pixi.js, @pixi/react, pixi-viewport, MemberNodeAvatar(), Props (+47 more)

### Community 47 - "FitViewButton.tsx"
Cohesion: 0.21
Nodes (14): FiltersHeader(), Props, FitViewButton(), Props, PanelCloseButton(), Props, STYLES, PanelResetButton() (+6 more)

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "SuggestionsTab.tsx"
Cohesion: 0.16
Nodes (19): approveSuggestion(), fetchSuggestionCount(), fetchSuggestions(), parse(), rejectSuggestion(), SuggestionDto, ManageScrollArea(), Props (+11 more)

### Community 50 - "en/index.ts"
Cohesion: 0.09
Nodes (24): access, account, auth, common, filters, formCommon, en, manage (+16 more)

### Community 51 - "AGENTS.md"
Cohesion: 0.25
Nodes (7): Commands, Conventions, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout, This is NOT the Next.js you know

### Community 52 - "scripts"
Cohesion: 0.20
Nodes (10): scripts, build, db:backup-prod, db:restore-local, dev, dev:webpack, lint, start (+2 more)

### Community 53 - "eligibility.ts"
Cohesion: 0.26
Nodes (10): EligibilityMember, EmailIdentity, normalizeEmail(), resolveEmailIdentity(), loadEmailIdentity(), decideGoogleSignIn(), GoogleClaims, GoogleDecision (+2 more)

### Community 54 - "eligibility.ts"
Cohesion: 0.36
Nodes (7): MemberMatch, resolveMemberMatch(), phoneKey(), resolveTelegramIdentity(), TelegramIdentity, loadTelegramIdentity(), TelegramClaims

### Community 57 - "SettingsPanel.tsx"
Cohesion: 0.18
Nodes (15): FamilyTreeIcon(), Props, edgeIcon(), edgeStyleOptions(), iconClass, orientationOptions(), themeOptions(), treeModeOptions() (+7 more)

### Community 58 - "useTeamForm.ts"
Cohesion: 0.21
Nodes (20): createTeam(), deleteTeam(), fetchTeamDetails(), parse(), setTeamMembers(), TeamMemberPayload, updateTeam(), buildTeamRequestBody() (+12 more)

### Community 59 - "Core Patterns"
Cohesion: 0.12
Nodes (17): Application destroy/recreate cycle, Batching optimization, cacheAsTexture for performance, Core Patterns, Culling, Filters and masks cost, Graphics performance, Low-level rendering optimizations (+9 more)

### Community 60 - "locale.ts"
Cohesion: 0.09
Nodes (26): Renderer selection at runtime, [MEDIUM] Using container.name instead of container.label, countMembersByRole(), router, booleanLike, isValidPeriod(), name(), optional() (+18 more)

### Community 61 - "TeamTypeFormContent.tsx"
Cohesion: 0.09
Nodes (25): Props, ConfirmDeleteControl(), Props, GenderFormField(), Props, FormMessages(), Props, Props (+17 more)

### Community 62 - "membersStore.ts"
Cohesion: 0.16
Nodes (18): membersActions, {
  setMembers,
  reloadMembers,
  addMember,
  updateMember,
  selectMember,
  getMentorsList,
}, useMembersList(), useMembersMap(), useMentees(), useSelectedId(), useSelectedMember(), changesStructure() (+10 more)

### Community 63 - "MemberNode.tsx"
Cohesion: 0.09
Nodes (27): BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props, acquireEmojiTextures(), createEmojiTexture(), generateRandomPosition(), releaseEmojiTextures() (+19 more)

### Community 64 - "memberService.ts"
Cohesion: 0.10
Nodes (33): zod, buildMemberFields(), buildMemberUpdateFields(), buildSharedFields(), buildSparseMemberFields(), parsePositionsPayload(), assertMentorExists(), assertNoMentorCycle() (+25 more)

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
Cohesion: 0.13
Nodes (18): lineageEdgePath, ACCIDENTAL_DRAG_MAX_DISTANCE, ACCIDENTAL_DRAG_MAX_MS, LONG_PRESS_MS, TAP_MOVE_TOLERANCE, FONT_FAMILY, NODE_SUBTITLE_STYLE, NODE_TITLE_STYLE (+10 more)

### Community 69 - "challenges.ts"
Cohesion: 0.13
Nodes (23): ChallengeState, isExpired(), isSolved(), pickRandom(), swapQuestion(), SwapResult, base, ChallengeView (+15 more)

### Community 70 - "backfillGender.ts"
Cohesion: 0.08
Nodes (21): alt, contentType, OpengraphImage(), read(), size, alreadyDifferent, alreadySame, APPLY (+13 more)

### Community 71 - "Core Patterns"
Cohesion: 0.13
Nodes (14): API Reference, boundsArea optimization, Common Mistakes, Core Patterns, Culling, HIGH: Expecting automatic culling, HIGH: Using addChild on RenderLayer, MEDIUM: Expecting filters on ancestors to apply to layer children (+6 more)

### Community 72 - "Core Patterns"
Cohesion: 0.13
Nodes (14): Advanced shape primitives, Core Patterns, Default styles via setFillStyle / setStrokeStyle, Draw-time transforms, Drawing a texture directly, Gradients and patterns, GraphicsContext sharing, GraphicsContext utilities (+6 more)

### Community 73 - "useTeamTypeForm.ts"
Cohesion: 0.23
Nodes (8): ApiError, buildTeamTypeFormData(), Callbacks, EMPTY_FORM, keepCount(), toFormData(), useTeamTypeForm(), isSameFormData()

### Community 74 - "constants/filters.ts"
Cohesion: 0.11
Nodes (22): ACTIVITY_ICONS, IconComponent, IconProps, greenPillIcon(), IconProps, DatesPane(), SEASON_ICONS, MemberPane() (+14 more)

### Community 75 - "Toolbar.tsx"
Cohesion: 0.22
Nodes (14): DemoBadge(), compare(), getSearchable(), MemberSearch(), Props, SearchBar(), SearchSuggestionItem(), focusSearchInput() (+6 more)

### Community 76 - "MemberPane.tsx"
Cohesion: 0.10
Nodes (32): Props, PANES, Props, RolesPane(), TeamsPane(), FilterPaneProps, BirthdayFilterSection(), Props (+24 more)

### Community 77 - "clientInstance.ts"
Cohesion: 0.13
Nodes (11): @prisma/adapter-pg, @prisma/config, adapter, prisma, router, level, [ref, levelArg], ADMINS_BY_EMAIL (+3 more)

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
Cohesion: 0.07
Nodes (47): AccessLevel, AuthMethod, Challenge, ChallengeQuestion, logout(), post(), RequestCodeOutcome, requestEmailCode() (+39 more)

### Community 82 - "MemberSidebar.tsx"
Cohesion: 0.10
Nodes (26): zustand, fetchSession(), SessionInfo, MemberSidebar(), Props, TeamInfoSidebar(), HeaderChip(), Props (+18 more)

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

### Community 88 - "transliterate.ts"
Cohesion: 0.16
Nodes (8): displayFamilyName(), romanizeCached(), MAP, ROMAN, ROMAN_INITIAL, ROMAN_INNER, romanize(), transliterate()

### Community 89 - "Foundations"
Cohesion: 0.15
Nodes (12): Advanced, Foundations, pixijs-application, pixijs-core-concepts, pixijs-events, pixijs-performance, pixijs-scene-container, pixijs-scene-core-concepts (+4 more)

### Community 90 - "EditMemberForm.tsx"
Cohesion: 0.16
Nodes (31): AddMemberForm(), buildMemberFormData(), ClearButton(), SubmitButton(), describeSubmitError(), EditMemberForm(), buildEditPayload(), getInitialFormData() (+23 more)

### Community 91 - "Sidebar.tsx"
Cohesion: 0.13
Nodes (16): Props, Props, Sidebar(), SidebarBehindCover(), SidebarCoverTint(), Props, SidebarFooter(), Props (+8 more)

### Community 92 - "Core Patterns"
Cohesion: 0.29
Nodes (7): Core Patterns, Frame rate capping, Manual rendering, Per-object update via `onRender`, Priority order, Stop and start, Time units

### Community 93 - "demoQuestions.test.ts"
Cohesion: 0.26
Nodes (8): answerMatches(), CYRILLIC_TO_LATIN, normalizeAnswer(), deleteQuestionSessions(), DEMO_QUESTIONS, active, items, valid

### Community 94 - "ApplicationOptions reference"
Cohesion: 0.12
Nodes (17): Accessibility, ApplicationOptions reference, Background, Culler (CullerPluginOptions), Deprecated (GC — prefer the unified options above), Events, Garbage collection, Graphics (+9 more)

### Community 98 - "Common Mistakes"
Cohesion: 0.50
Nodes (4): Common Mistakes, [HIGH] Accessing app.renderer before init() resolves, [HIGH] Setting DOMAdapter after Application.init, [MEDIUM] Treating `preference` as a guarantee

### Community 99 - "gsap"
Cohesion: 0.25
Nodes (15): gsap, NODE_HOVER_ANIMATION_DURATION, NODE_HOVER_SCALE, ZOOMED_OUT_HOVER_SCALE_MAP, useFitViewAnimation(), useFocusFrameAnimation(), useFocusNodeAnimation(), calculateTargetScale() (+7 more)

### Community 100 - "dimensions.ts"
Cohesion: 0.08
Nodes (32): contexts, getGlowTexture(), GLOW_BLUR, GLOW_PADDING, GlowKind, paint(), SIZES, textures (+24 more)

### Community 101 - "Core Concepts"
Cohesion: 0.18
Nodes (11): Container vs leaf (CRITICAL), Core Concepts, Culling, Destroy semantics, Lifecycle events, Masking, Render groups, Render order and explicit z-ordering (+3 more)

### Community 102 - "Render Loop"
Cohesion: 0.22
Nodes (8): API Reference, Common Mistakes, [CRITICAL] Treating the ticker callback arg as a number, Frame lifecycle, [HIGH] Using `updateTransform` for per-frame logic, [MEDIUM] Assuming ticker callbacks run after render, Quick Start, Render Loop

### Community 103 - "pixijs-core-concepts/SKILL.md"
Cohesion: 0.22
Nodes (8): API Reference, Decision guide, Environments, Quick concepts, Quick Start, Renderer = systems + pipes, The render loop, Topics

### Community 104 - "teamRoster.ts"
Cohesion: 0.14
Nodes (14): NodesLayer(), Props, nextAdmittedIds(), PROGRESSIVE_CHUNK_SIZE, useProgressiveIds(), useTeamSelection(), getMemberById(), getTeamNodeId() (+6 more)

### Community 105 - "Common Mistakes"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, [CRITICAL] App destroy without releaseGlobalResources, [HIGH] Destroying and recreating objects instead of recycling, [HIGH] Interleaving object types in scene graph, [HIGH] Loading many individual textures instead of spritesheets, [HIGH] Updating Text or HTMLText every frame, [HIGH] Using complex Graphics instead of textures (+4 more)

### Community 106 - "searchShortcut.ts"
Cohesion: 0.17
Nodes (8): EDITABLE_TAGS, isEditableTarget(), isSearchShortcut(), ShortcutKeys, Keys, Options, Position, useSearchShortcut()

### Community 107 - "MembersTreeContent.tsx"
Cohesion: 0.21
Nodes (12): Viewport(), EVENT_FEATURES, MembersTreeContent(), Props, ViewportCulling(), useFilterSearchParams(), useSyncMembers(), useTeamFrameClicks() (+4 more)

### Community 108 - "emailRoutes.ts"
Cohesion: 0.14
Nodes (17): authSecret(), prismaCodeStore, getMailer(), COPY, EmailLocale, escapeHtml(), pairs(), renderSignInCodeEmail() (+9 more)

### Community 109 - "PhotoViewer.tsx"
Cohesion: 0.07
Nodes (48): react-dom, DropdownPortal(), Props, MembersTree(), Props, isTreeReady(), MembersTree, MembersTreeDynamic() (+40 more)

### Community 110 - "migrateMembersFromMongodb.ts"
Cohesion: 0.07
Nodes (32): mongodb, ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember, STATUSES_MAP (+24 more)

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

### Community 113 - "filtersStore.ts"
Cohesion: 0.13
Nodes (17): FiltersFooter(), Props, FiltersPanel(), Props, FilterCategoryPane(), SELF_SCROLLING_PANES, useDraftFilterCount(), Props (+9 more)

### Community 114 - "selfService.ts"
Cohesion: 0.22
Nodes (14): fetchMyMemberSuggestions(), fetchMyTeamSuggestions(), PendingSuggestion, photoBody(), postChanges(), send(), SuggestionChange, suggestMemberChanges() (+6 more)

### Community 115 - "AccountPanel.tsx"
Cohesion: 0.12
Nodes (25): refreshProfile(), AccountPanel(), Props, AccountRoles(), byLatestYears(), lastYear(), Props, SessionMember (+17 more)

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
Nodes (9): CheckRow(), Props, byName(), CheckGroup, GroupedCheckListFilter(), Props, Props, SearchField() (+1 more)

### Community 120 - "uk/filters.ts"
Cohesion: 0.33
Nodes (5): familyForms, filters, memberForms, roleForms, teamForms

### Community 121 - "piiCheck.ts"
Cohesion: 0.38
Nodes (8): DemoValues, findLeaks(), lowerSet(), norm(), normalizeSocial(), RealValues, clean, real

### Community 122 - "MemberNodeCard.tsx"
Cohesion: 0.19
Nodes (12): getCardBackgroundContext(), MemberNodeCard(), messages, getPhotoUrlAsRoundAvatar(), generateGoogleCalendarLink(), getClosestBirthday(), displayName(), formatMemberRecruitmentSeason() (+4 more)

### Community 123 - "pixijs/SKILL.md"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, Constructor options, [CRITICAL] Using lineStyle instead of stroke, [CRITICAL] Using old shape method names, [CRITICAL] Using v7 beginFill/drawRect/endFill, [HIGH] Clearing and redrawing Graphics every frame, [HIGH] Destroying a shared GraphicsContext unexpectedly (+4 more)

### Community 124 - "importAllowedEmails.ts"
Cohesion: 0.19
Nodes (12): AllowedRow, AllowlistDiff, diffAllowlist(), looksLikeEmail(), parseAllowlistCsv(), ParsedAllowlist, splitLine(), apply (+4 more)

### Community 125 - "http"
Cohesion: 0.13
Nodes (32): fetchGrants(), GrantLevel, parse(), removeGrant(), setGrant(), addMember(), errorMessage(), ErrorParams (+24 more)

### Community 126 - "plural.ts"
Cohesion: 0.23
Nodes (7): Messages, memberForms, search, plural(), PluralForms, en, uk

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
Cohesion: 0.17
Nodes (14): CODE_TTL_MS, CodeOwner, CodeStore, generateCode(), hashCode(), issueCode(), MAX_CODE_ATTEMPTS, sameHash() (+6 more)

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
Cohesion: 0.14
Nodes (18): CheckedField, getStoredFieldValues(), Links, StoredMemberValues, complete, mentors, sparse, toTime() (+10 more)

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
Nodes (36): RFC-2045, RFC-2047, assertConfig(), configProblems(), databaseName(), demoProblems(), Env, googleProblems() (+28 more)

### Community 146 - "useMeta.ts"
Cohesion: 0.09
Nodes (22): BEST Family Tree, Contributions, Language, People, Sign-in, Teams, Views, fetchFamilyGroups() (+14 more)

### Community 148 - "PositionFormFields.tsx"
Cohesion: 0.12
Nodes (34): FieldError(), PositionAssignmentFields(), Props, PositionFormFields(), Props, createEmptyPositionRow(), EMPTY_POSITION_ROW, findTeamByName() (+26 more)

## Knowledge Gaps
- **45 isolated node(s):** `@prisma/client`, `dotenv`, `lodash`, `pixi-filters`, `@tailwindcss/postcss` (+40 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1088 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `filters()` connect `Member` to `pixijs/SKILL.md`, `constants/filters.ts`?**
  _High betweenness centrality (0.088) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _45 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `uk/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07965860597439545 - nodes in this community are weakly interconnected._
- **Why does `react` connect `TeamLogoPicker.tsx` to `react`, `displayName.ts`, `TeamFrame`, `useDashedPathAnimation.ts`, `bakeParams.ts`, `treeStore.ts`, `useMeta.ts`, `PositionFormFields.tsx`, `AccentColor`, `TeamSearch.tsx`, `ThemeContext.tsx`, `TeamLogo.tsx`, `MemberSuggestFields.tsx`, `package.json`, `MemberSearch.tsx`, `utils/membersTree/index.ts`, `locale.ts`, `TeamFrame`, `FitViewButton.tsx`, `SuggestionsTab.tsx`, `SettingsPanel.tsx`, `useTeamForm.ts`, `TeamTypeFormContent.tsx`, `membersStore.ts`, `MemberNode.tsx`, `useCardAnimation.ts`, `constants/canvas/index.ts`, `useTeamTypeForm.ts`, `constants/filters.ts`, `Toolbar.tsx`, `MemberPane.tsx`, `api/auth.ts`, `MemberSidebar.tsx`, `EditMemberForm.tsx`, `Sidebar.tsx`, `gsap`, `dimensions.ts`, `teamRoster.ts`, `searchShortcut.ts`, `MembersTreeContent.tsx`, `PhotoViewer.tsx`, `filtersStore.ts`, `selfService.ts`, `AccountPanel.tsx`, `GroupedCheckListFilter.tsx`, `MemberNodeCard.tsx`?**
  _High betweenness centrality (0.082) - this node is a cross-community bridge._
- **Should `react` be split into smaller, more focused modules?**
  _Cohesion score 0.10218579234972677 - nodes in this community are weakly interconnected._
- **Why does `Constructor options` connect `pixijs/SKILL.md` to `Member`?**
  _High betweenness centrality (0.071) - this node is a cross-community bridge._
- **Should `server/package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._