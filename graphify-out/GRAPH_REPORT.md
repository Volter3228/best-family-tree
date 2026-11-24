# Graph Report - best-family-tree  (2026-11-24)

## Corpus Check
- 749 files · ~227,530 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 33 file(s) not represented in the graph (top: .prisma 10, (none) 7, .css 7)

## Summary
- 3458 nodes · 10394 edges · 150 communities (141 shown, 9 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 105 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `aa4559ff`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- uk/index.ts
- react
- Member
- server/package.json
- Member
- useDashedPathAnimation.ts
- bakeParams.ts
- src/index.ts
- suggestionCreate.ts
- NODE_WIDTH
- suggestion/suggestionReview.ts
- SeasonMotif.tsx
- anonymizeDemo.ts
- suggestionCreate.ts
- ref_vitest
- teamFrame.ts
- PhotoViewer.tsx
- dependencies
- treeStore.ts
- filterSearchParams.ts
- AccountForm.tsx
- HTML Report Format
- emailRoutes.ts
- src/types/index.ts
- teamService.ts
- MembersTab.tsx
- compilerOptions
- compilerOptions
- Core Patterns
- GroupedCheckListFilter.tsx
- dependencies
- oidc.ts
- TeamLogo.tsx
- filterTeams.ts
- MemberSuggestFields.tsx
- inputs/index.ts
- package.json
- sessions.ts
- CodeForm.tsx
- utils/membersTree/index.ts
- Core Patterns
- devDependencies
- settingsStore.ts
- Core Patterns
- CLAUDE.md
- Container Hierarchy
- TeamFrame
- SettingsPanel.tsx
- During the session
- SuggestionsTab.tsx
- en/index.ts
- AGENTS.md
- scripts
- eligibility.ts
- MenteesGrid.tsx
- next.config.mjs
- postcss.config.mjs
- SidebarMode
- useTeamForm.ts
- Core Patterns
- locale.ts
- PositionBadge.tsx
- hooks/index.ts
- constants/canvas/index.ts
- memberService.ts
- BEST Family Tree
- Diagnosing Bugs
- useCardAnimation.ts
- useCanvasTheme.ts
- challenges.ts
- backfillGender.ts
- Core Patterns
- Core Patterns
- auth/types.ts
- MemberPane.tsx
- locale.ts
- MemberPane.tsx
- SocialMediaFormFields.tsx
- Core Patterns
- Core Patterns
- Core Patterns
- api/auth.ts
- useLocale
- Core Patterns
- Constructor options (Container-inherited)
- Test-Driven Development
- GSAP Core
- Core Patterns
- ui/index.ts
- Foundations
- MemberInfo
- Sidebar.tsx
- Core Patterns
- Toolbar.tsx
- ApplicationOptions reference
- backup-prod.sh
- start-prod.sh
- restore-local.sh
- Common Mistakes
- gsap
- constants/canvas/index.ts
- Core Concepts
- Render Loop
- pixijs-core-concepts/SKILL.md
- displayName.ts
- Common Mistakes
- telegramEligibility.ts
- useTeamTypeForm.ts
- SignIn.tsx
- photoViewerMath.ts
- migrateMembersFromMongodb.ts
- MemberStatus
- Renderers: WebGPU, WebGL, and Canvas
- FilterState
- MemberSuggestForm.tsx
- useLocale
- pixijs-scene-core-concepts/SKILL.md
- PanelCloseButton
- pixijs/SKILL.md
- Messages
- useMembersStore
- seedQuestions.ts
- settingsStore.ts
- pixijs/SKILL.md
- importAllowedEmails.ts
- http
- useSessionStore
- NodesLayer.tsx
- AccessTab.tsx
- GSAP with React
- emailCodes.ts
- hitl-loop.template.sh
- ref_node_crypto
- uk/filters.ts
- en/errors.ts
- GSAP Performance
- GSAP Timeline
- constants/theme.ts
- uk/errors.ts
- MaskIcon.tsx
- proxy.ts
- Core Patterns
- checkConfig.ts
- BEST Family Tree
- TeamTypeFormContent.tsx
- Common Mistakes
- PositionFormFields.tsx
- ActivityState

## God Nodes (most connected - your core abstractions)
1. `useT()` - 214 edges
2. `AccentColor` - 188 edges
3. `react` - 175 edges
4. `tailwind-merge` - 99 edges
5. `Member` - 77 edges
6. `useLocale()` - 73 edges
7. `COLOR_CLASSES` - 59 edges
8. `@heroicons/react` - 57 edges
9. `http()` - 48 edges
10. `TeamFrame` - 45 edges

## Surprising Connections (you probably didn't know these)
- `pixijs-scene-container` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs/references/index.md → src/hooks/membersTree/animations/useFitViewAnimation.ts
- `Teams` --references--> `Role`  [INFERRED]
  GLOSSARY.md → src/types/positions.ts
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

## Communities (150 total, 9 thin omitted)

### Community 0 - "uk/index.ts"
Cohesion: 0.08
Nodes (19): access, account, auth, common, formCommon, manage, memberForm, memberInfo (+11 more)

### Community 1 - "react"
Cohesion: 0.14
Nodes (26): fetchSuggestionCount(), TeamTypeForm(), ManageList(), ManagePane(), Props, ITEMS, ManageRail(), Props (+18 more)

### Community 2 - "Member"
Cohesion: 0.08
Nodes (37): Props, Props, Props, MemberInfoCover(), Props, Props, Props, Props (+29 more)

### Community 3 - "server/package.json"
Cohesion: 0.05
Nodes (37): cloudinary, concurrently, cors, express-rate-limit, helmet, multer, multer-storage-cloudinary, nodemon (+29 more)

### Community 4 - "Member"
Cohesion: 0.11
Nodes (22): fetchFamilyTree(), Home(), loadTree(), MembersTree(), Props, Props, isTreeReady(), MembersTree (+14 more)

### Community 5 - "useDashedPathAnimation.ts"
Cohesion: 0.10
Nodes (32): LineageEdge(), DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN, MIN_ANIM_DURATION, PATTERN_LEN, RETRACT_BASE (+24 more)

### Community 6 - "bakeParams.ts"
Cohesion: 0.21
Nodes (17): AuroraBackground(), readNumber(), useBakedAurora(), AuroraBakeInput, bakeAuroraLayers(), canBakeAurora(), BAKE_SCALE, BLUR_SPREAD (+9 more)

### Community 7 - "src/index.ts"
Cohesion: 0.08
Nodes (41): compression, express, @prisma/adapter-pg, toMemberResponse(), sessionFromRequest(), adapter, prisma, app (+33 more)

### Community 8 - "suggestionCreate.ts"
Cohesion: 0.08
Nodes (34): Suggestion, buildRows(), MIN_TEAM_YEAR, cannotEmpty(), CONTACT_FIELDS, invalid(), link(), MEMBER_NORMALIZERS (+26 more)

### Community 9 - "NODE_WIDTH"
Cohesion: 0.07
Nodes (44): elkjs, NODE_WIDTH, TEAM_FRAME_GAP, TEAM_PACK_ASPECT, failOver(), getWorker(), Pending, requestLayout() (+36 more)

### Community 10 - "suggestion/suggestionReview.ts"
Cohesion: 0.18
Nodes (22): canEditMember(), applyPhone(), countPending(), listPending(), alreadyReviewed(), applyApproval(), applyMemberField(), applyTeamField() (+14 more)

### Community 11 - "SeasonMotif.tsx"
Cohesion: 0.23
Nodes (10): FlowerIcon(), Props, MapleLeafIcon(), Props, Props, QuestionMarkIcon(), Placement, PLACEMENTS (+2 more)

### Community 12 - "anonymizeDemo.ts"
Cohesion: 0.06
Nodes (36): @faker-js/faker, allowed, args, byId, factory, GROUP_NAMES, memberPhotos, nextFace (+28 more)

### Community 13 - "suggestionCreate.ts"
Cohesion: 0.13
Nodes (28): canSelfServe(), canSuggest(), deleteCloudinaryImage(), deleteReplacedImage(), discardUpload(), extractCloudinaryPublicId(), holdsPositionIn(), ownPhoto (+20 more)

### Community 14 - "ref_vitest"
Cohesion: 0.11
Nodes (19): CATEGORY_ICONS, Props, ACTIVITY_STATES, buildOptions(), DATE_PICKER_CLASSES, EMPTY_FILTER_STATE, getActivityOptions(), getGenderOptions() (+11 more)

### Community 15 - "teamFrame.ts"
Cohesion: 0.17
Nodes (17): TEAM_COLUMN_GAP, TEAM_FRAME_HEADER, TEAM_FRAME_MIN_WIDTH, TEAM_FRAME_PADDING, TEAM_LAYOUT_COLUMNS, TEAM_LEADER_GAP, TEAM_MULTI_LEADER_EXTRA_GAP, TEAM_NODE_VISUAL_HEIGHT (+9 more)

### Community 16 - "PhotoViewer.tsx"
Cohesion: 0.18
Nodes (16): zustand, PhotoViewer(), thumbRadius(), Viewer(), viewportRect(), BUTTON, GLASS, HeaderProps (+8 more)

### Community 17 - "dependencies"
Cohesion: 0.04
Nodes (47): dependencies, cloudinary, compression, cors, dotenv, express, express-rate-limit, helmet (+39 more)

### Community 18 - "treeStore.ts"
Cohesion: 0.08
Nodes (27): Props, Props, EMPTY_IDS, View, MembersTreeScene(), Props, TEAM_OVERVIEW_EDGE_ALPHA, TEAM_OVERVIEW_NODE_ALPHA (+19 more)

### Community 19 - "filterSearchParams.ts"
Cohesion: 0.14
Nodes (23): FamilyGroupRef, familyIdToSlug(), familySlug, familyTokenToId(), groups, filtersToSearchParams(), parseCsvArray(), parseCsvStrings() (+15 more)

### Community 20 - "AccountForm.tsx"
Cohesion: 0.20
Nodes (13): requestEmailCode(), AccountForm(), Props, AuthMessage(), Props, EmailForm(), Props, GoogleButton() (+5 more)

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "emailRoutes.ts"
Cohesion: 0.13
Nodes (20): authSecret(), isDemoMode(), CODE_TTL_MS, prismaCodeStore, getMailer(), COPY, EmailLocale, escapeHtml() (+12 more)

### Community 23 - "src/types/index.ts"
Cohesion: 0.05
Nodes (78): @heroicons/react, next, react, tailwind-merge, GLOW, Props, Props, Props (+70 more)

### Community 24 - "teamService.ts"
Cohesion: 0.10
Nodes (36): adminGrantLocked(), ownGrantError(), getPositionKey(), ResolvedPosition, resolvePosition(), syncPositions(), MemberTransaction, assertCanEditMembers() (+28 more)

### Community 25 - "MembersTab.tsx"
Cohesion: 0.17
Nodes (23): compare(), getSearchable(), MemberSearch(), Props, Props, SearchSuggestionItem(), HighlightedTitle(), Props (+15 more)

### Community 26 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, esModuleInterop, forceConsistentCasingInFileNames, module, moduleResolution, noImplicitAny, outDir, paths (+12 more)

### Community 27 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+12 more)

### Community 28 - "Core Patterns"
Cohesion: 0.12
Nodes (15): API Reference, Application properties, Common Mistakes, Core Patterns, [CRITICAL] Passing options to the constructor, CullerPlugin (opt-in), Custom Application plugins, [HIGH] Using app.view instead of app.canvas (+7 more)

### Community 29 - "GroupedCheckListFilter.tsx"
Cohesion: 0.21
Nodes (13): byLabel(), CheckOption, Props, useStableOrder(), CheckRow(), Props, byName(), GroupedCheckListFilter() (+5 more)

### Community 30 - "dependencies"
Cohesion: 0.10
Nodes (20): dependencies, date-fns, dotenv, elkjs, gsap, @gsap/react, @heroicons/react, lodash (+12 more)

### Community 31 - "oidc.ts"
Cohesion: 0.16
Nodes (17): Container events, Transform, Lifecycle events, Origin (new in v8), openid-client, configs, cookieOptions(), finishLogin() (+9 more)

### Community 32 - "TeamLogo.tsx"
Cohesion: 0.17
Nodes (15): cache, loadImageAspect(), PhotoOpenButton(), Props, useIsPhotoOpen(), AvatarSkeleton(), isTinted(), LoadingImage() (+7 more)

### Community 33 - "filterTeams.ts"
Cohesion: 0.12
Nodes (30): Constructor options, Effects, GENDER_VALUES, birthdayBoundKey(), countActiveMemberFilters(), isFilterActive(), isIdListSet(), isListFilterSet() (+22 more)

### Community 34 - "MemberSuggestFields.tsx"
Cohesion: 0.12
Nodes (41): FormField(), GenderFormField(), MemberBasicsSection(), Props, MemberBestSection(), Props, MemberContactsSection(), Props (+33 more)

### Community 35 - "inputs/index.ts"
Cohesion: 0.09
Nodes (39): react-dom, DropdownMenu(), Props, DropdownPortal(), Props, PositionRowHeader(), ComboboxInput(), Props (+31 more)

### Community 36 - "package.json"
Cohesion: 0.10
Nodes (20): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+12 more)

### Community 37 - "sessions.ts"
Cohesion: 0.12
Nodes (23): isProduction(), SESSION_COOKIE, SIGN_IN_COOKIE, useSecureCookie(), callbackErrorRedirect(), isProviderEnabled(), limiter(), clearSessionCookie() (+15 more)

### Community 38 - "CodeForm.tsx"
Cohesion: 0.27
Nodes (12): verifyEmailCode(), applyDigits(), backspaceAt(), CODE_LENGTH, Edit, emptyDigits(), isComplete(), CodeForm() (+4 more)

### Community 39 - "utils/membersTree/index.ts"
Cohesion: 0.09
Nodes (49): EdgesLayer(), drawLerped(), drawPolyline(), Props, TeamEdgesLayer(), FIXED_EDGE_WIDTH, NODE_AVATAR_RADIUS, NODE_HEIGHT (+41 more)

### Community 40 - "Core Patterns"
Cohesion: 0.12
Nodes (20): Adding and removing children, API Reference, Bounds and coordinate conversion, Common Mistakes, Core Patterns, [CRITICAL] Adding children to leaf scene objects, Destroy, Finding and removing from parent (+12 more)

### Community 41 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+5 more)

### Community 42 - "settingsStore.ts"
Cohesion: 0.19
Nodes (13): applyCssTokens(), ThemeContext, ThemeContextValue, ThemeProvider(), CanvasColors, noopSubscribe(), useIsHydrated(), useMediaQuery() (+5 more)

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
Cohesion: 0.07
Nodes (50): @pixi/react, PixiElements, @pixi/react, MemberNodeMinimizedTooltip(), Props, Props, TeamBadge(), FILL_ALPHA (+42 more)

### Community 47 - "SettingsPanel.tsx"
Cohesion: 0.23
Nodes (12): FamilyTreeIcon(), Props, edgeIcon(), edgeStyleOptions(), iconClass, orientationOptions(), themeOptions(), treeModeOptions() (+4 more)

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "SuggestionsTab.tsx"
Cohesion: 0.15
Nodes (24): fetchMemberById(), approveSuggestion(), fetchSuggestions(), parse(), rejectSuggestion(), SuggestionDto, CollapseOut(), Props (+16 more)

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
Nodes (10): EmailIdentity, normalizeEmail(), resolveEmailIdentity(), resolveMemberMatch(), loadEmailIdentity(), decideGoogleSignIn(), GoogleClaims, GoogleDecision (+2 more)

### Community 54 - "MenteesGrid.tsx"
Cohesion: 0.23
Nodes (10): InfoSection(), Props, MemberPositions(), Props, MenteesGrid(), Props, MemberPosition, getPositionPeriod() (+2 more)

### Community 57 - "SidebarMode"
Cohesion: 0.22
Nodes (5): Props, Options, ManageState, useManageStore, SidebarMode

### Community 58 - "useTeamForm.ts"
Cohesion: 0.18
Nodes (20): createTeam(), deleteTeam(), fetchTeamDetails(), parse(), setTeamMembers(), TeamMemberPayload, updateTeam(), buildTeamRequestBody() (+12 more)

### Community 59 - "Core Patterns"
Cohesion: 0.12
Nodes (17): Application destroy/recreate cycle, Batching optimization, cacheAsTexture for performance, Core Patterns, Culling, Filters and masks cost, Graphics performance, Low-level rendering optimizations (+9 more)

### Community 60 - "locale.ts"
Cohesion: 0.10
Nodes (22): Renderer selection at runtime, [MEDIUM] Using container.name instead of container.label, booleanLike, isValidPeriod(), name(), optional(), optionalName(), PERIOD_ERROR (+14 more)

### Community 61 - "PositionBadge.tsx"
Cohesion: 0.20
Nodes (6): PositionBadge(), Props, useTheme(), Options, Position, useStackOnOverflow()

### Community 62 - "hooks/index.ts"
Cohesion: 0.07
Nodes (46): SharpAvatarTracker(), Props, TeamFramesLayer(), Props, TeamOverviewLayer(), Viewport(), EVENT_FEATURES, MembersTreeContent() (+38 more)

### Community 63 - "constants/canvas/index.ts"
Cohesion: 0.05
Nodes (48): @gsap/react, pixi.js, BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props, acquireEmojiTextures(), createEmojiTexture() (+40 more)

### Community 64 - "memberService.ts"
Cohesion: 0.08
Nodes (38): zod, buildMemberFields(), buildMemberUpdateFields(), buildSharedFields(), buildSparseMemberFields(), parsePhoneNumbers(), parsePositionsPayload(), assertMentorExists() (+30 more)

### Community 65 - "BEST Family Tree"
Cohesion: 0.10
Nodes (19): 1. Clone and configure environment, 2. Start the application, 3. Run database migrations, 4. Access the app, Architecture, Automated backups (GitHub Actions), Available Commands, Backend Commands (run inside container) (+11 more)

### Community 66 - "Diagnosing Bugs"
Cohesion: 0.13
Nodes (14): Completion criterion: a tight loop that goes red, Diagnosing Bugs, Minimise, Non-deterministic bugs, Phase 1: Build a feedback loop, Phase 2: Reproduce + minimise, Phase 3: Hypothesise, Phase 4: Instrument (+6 more)

### Community 67 - "useCardAnimation.ts"
Cohesion: 0.14
Nodes (23): CARD_PIVOT, Props, clamp01(), deferCardHidden(), easeBackOut, easePower2In, easePower2Out, entries (+15 more)

### Community 68 - "useCanvasTheme.ts"
Cohesion: 0.21
Nodes (10): FONT_FAMILY, NODE_SUBTITLE_STYLE, NODE_TITLE_STYLE, NODE_TOOLTIP_TEXT_STYLE, TEXT_RESOLUTION, buildCanvasColors(), CanvasTextStyleInstances, CanvasTextStyles (+2 more)

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
Cohesion: 0.11
Nodes (16): Advanced shape primitives, Cloning, clearing, and bounds, Core Patterns, Default styles via setFillStyle / setStrokeStyle, Draw-time transforms, Drawing a texture directly, Gradients and patterns, GraphicsContext sharing (+8 more)

### Community 73 - "auth/types.ts"
Cohesion: 0.17
Nodes (13): canManageGrant(), hasAccess(), isOwnGrant(), RANK, CONTACT_FIELDS, AccessRank, Express, Request (+5 more)

### Community 74 - "MemberPane.tsx"
Cohesion: 0.13
Nodes (22): ACTIVITY_ICONS, IconComponent, IconProps, greenPillIcon(), IconProps, DatesPane(), SEASON_ICONS, PANES (+14 more)

### Community 75 - "locale.ts"
Cohesion: 0.15
Nodes (9): react-datepicker, metadata, nunito, RootLayout(), writeLocaleCookie(), detectLocale(), isLocale(), LOCALE_COOKIE (+1 more)

### Community 76 - "MemberPane.tsx"
Cohesion: 0.13
Nodes (21): date-fns, BirthdayFilterSection(), Props, ClearButton(), FilterCheckbox(), Props, JoinYearFilterSection(), Props (+13 more)

### Community 77 - "SocialMediaFormFields.tsx"
Cohesion: 0.23
Nodes (12): FacebookIcon(), FacebookGlyph(), InstagramGlyph(), LinkedinGlyph(), svgProps, TelegramGlyph(), InstagramIcon(), LinkedinIcon() (+4 more)

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
Cohesion: 0.18
Nodes (16): AccessLevel, AuthMethod, Challenge, ChallengeQuestion, post(), RequestCodeOutcome, SessionPosition, startChallenge() (+8 more)

### Community 82 - "useLocale"
Cohesion: 0.19
Nodes (21): MemberSidebar(), TeamInfoSidebar(), HeaderChip(), MemberFactTile(), MemberInfoCopy(), DateWithYears(), formatJoinedDate(), MemberInfoFacts() (+13 more)

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

### Community 88 - "ui/index.ts"
Cohesion: 0.33
Nodes (6): EDITABLE_TAGS, isEditableTarget(), isSearchShortcut(), ShortcutKeys, Keys, useSearchShortcut()

### Community 89 - "Foundations"
Cohesion: 0.15
Nodes (12): Advanced, Foundations, pixijs-application, pixijs-core-concepts, pixijs-events, pixijs-performance, pixijs-scene-container, pixijs-scene-core-concepts (+4 more)

### Community 90 - "MemberInfo"
Cohesion: 0.31
Nodes (7): MemberAvatarImage(), MemberAvatarImageInner(), MemberInfo(), MemberSidebarContent(), Props, StatusIcon, useSidebarSwitchAnimation()

### Community 91 - "Sidebar.tsx"
Cohesion: 0.17
Nodes (13): Sidebar(), Props, SidebarBehindCover(), SidebarCoverTint(), Props, SidebarFooter(), SidebarFooterContext, Props (+5 more)

### Community 92 - "Core Patterns"
Cohesion: 0.29
Nodes (7): Core Patterns, Frame rate capping, Manual rendering, Per-object update via `onRender`, Priority order, Stop and start, Time units

### Community 93 - "Toolbar.tsx"
Cohesion: 0.33
Nodes (6): DemoBadge(), FitViewButton(), focusSearchInput(), Toolbar(), usePanelToggle(), countActiveFilters()

### Community 94 - "ApplicationOptions reference"
Cohesion: 0.12
Nodes (17): Accessibility, ApplicationOptions reference, Background, Culler (CullerPluginOptions), Deprecated (GC — prefer the unified options above), Events, Garbage collection, Graphics (+9 more)

### Community 98 - "Common Mistakes"
Cohesion: 0.50
Nodes (4): Common Mistakes, [HIGH] Accessing app.renderer before init() resolves, [HIGH] Setting DOMAdapter after Application.init, [MEDIUM] Treating `preference` as a guarantee

### Community 99 - "gsap"
Cohesion: 0.21
Nodes (17): gsap, pixi-viewport, Props, NODE_HOVER_ANIMATION_DURATION, NODE_HOVER_SCALE, ZOOMED_OUT_HOVER_SCALE_MAP, useFitViewAnimation(), useFocusFrameAnimation() (+9 more)

### Community 100 - "constants/canvas/index.ts"
Cohesion: 0.08
Nodes (33): contexts, getCardBackgroundContext(), getGlowTexture(), GLOW_BLUR, GLOW_PADDING, GlowKind, paint(), SIZES (+25 more)

### Community 101 - "Core Concepts"
Cohesion: 0.18
Nodes (11): Container vs leaf (CRITICAL), Core Concepts, Culling, Destroy semantics, Lifecycle events, Masking, Render groups, Render order and explicit z-ordering (+3 more)

### Community 102 - "Render Loop"
Cohesion: 0.22
Nodes (8): API Reference, Common Mistakes, [CRITICAL] Treating the ticker callback arg as a number, Frame lifecycle, [HIGH] Using `updateTransform` for per-frame logic, [MEDIUM] Assuming ticker callbacks run after render, Quick Start, Render Loop

### Community 103 - "pixijs-core-concepts/SKILL.md"
Cohesion: 0.22
Nodes (8): API Reference, Decision guide, Environments, Quick concepts, Quick Start, Renderer = systems + pipes, The render loop, Topics

### Community 104 - "displayName.ts"
Cohesion: 0.20
Nodes (12): SHORT_LABELS, Locale, LOCALES, generateGoogleCalendarLink(), getClosestBirthday(), cache, displayFamilyName(), FAMILY_NAMES_EN (+4 more)

### Community 105 - "Common Mistakes"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, [CRITICAL] App destroy without releaseGlobalResources, [HIGH] Destroying and recreating objects instead of recycling, [HIGH] Interleaving object types in scene graph, [HIGH] Loading many individual textures instead of spritesheets, [HIGH] Updating Text or HTMLText every frame, [HIGH] Using complex Graphics instead of textures (+4 more)

### Community 106 - "telegramEligibility.ts"
Cohesion: 0.35
Nodes (7): EligibilityMember, MemberMatch, phoneKey(), resolveTelegramIdentity(), TelegramIdentity, loadTelegramIdentity(), TelegramClaims

### Community 107 - "useTeamTypeForm.ts"
Cohesion: 0.29
Nodes (8): ApiError, buildTeamTypeFormData(), Callbacks, EMPTY_FORM, keepCount(), teamTypeTeamCount(), toFormData(), useTeamTypeForm()

### Community 108 - "SignIn.tsx"
Cohesion: 0.16
Nodes (13): logout(), Method, Props, SignInCard(), LionIcon(), Props, LanguageSwitch(), SegmentedSwitch() (+5 more)

### Community 109 - "photoViewerMath.ts"
Cohesion: 0.23
Nodes (17): clampAxis(), clampOffset(), clampScale(), fitRect(), MAX_SCALE, MIN_SCALE, Rect, RUBBER_RESISTANCE (+9 more)

### Community 110 - "migrateMembersFromMongodb.ts"
Cohesion: 0.07
Nodes (32): mongodb, ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember, STATUSES_MAP (+24 more)

### Community 111 - "MemberStatus"
Cohesion: 0.10
Nodes (16): GENDER_ICONS, IconProps, MENTOR_STATUSES, getRecruitmentTerm(), getYearOnlyJoinYear(), isJoinYearOnly(), Gender, Female (+8 more)

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

### Community 113 - "FilterState"
Cohesion: 0.11
Nodes (25): FilterCategoryRail(), FiltersFooter(), Props, FiltersPanel(), Props, FilterCategoryPane(), SELF_SCROLLING_PANES, useDraftFilterCount() (+17 more)

### Community 114 - "MemberSuggestForm.tsx"
Cohesion: 0.08
Nodes (63): fetchMyMemberSuggestions(), fetchMyTeamSuggestions(), PendingSuggestion, photoBody(), postChanges(), removeMyPhoto(), send(), SuggestionChange (+55 more)

### Community 115 - "useLocale"
Cohesion: 0.17
Nodes (21): AccountPanel(), Props, MemberMiniAvatar(), NameBadge(), getSearchable(), getSubtitle(), MembersTab(), useMemberById() (+13 more)

### Community 116 - "pixijs-scene-core-concepts/SKILL.md"
Cohesion: 0.25
Nodes (6): API Reference, Leaf comparison: which skill covers which object, Quick Start, References, Tooling, When to use what (quick decisions)

### Community 117 - "PanelCloseButton"
Cohesion: 0.38
Nodes (8): FiltersHeader(), Props, PanelCloseButton(), PanelResetButton(), Props, ToolbarIconButton(), ToolbarTooltip(), useHoverTooltip()

### Community 118 - "pixijs/SKILL.md"
Cohesion: 0.12
Nodes (14): API Reference, Common Mistakes, [HIGH] buttonMode removed; use cursor, [HIGH] Default eventMode is passive, [HIGH] Move events only fire over the object in v8, [MEDIUM] Cursor does not inherit from parent, Quick Start, Advanced (+6 more)

### Community 119 - "Messages"
Cohesion: 0.23
Nodes (7): Messages, memberForms, search, plural(), PluralForms, en, uk

### Community 120 - "useMembersStore"
Cohesion: 0.33
Nodes (8): membersActions, {
  setMembers,
  reloadMembers,
  addMember,
  updateMember,
  selectMember,
  getMentorsList,
}, useMembersList(), useMembersMap(), useMentees(), useSelectedId(), useSelectedMember(), useMembersStore

### Community 121 - "seedQuestions.ts"
Cohesion: 0.26
Nodes (8): answerMatches(), CYRILLIC_TO_LATIN, normalizeAnswer(), deleteQuestionSessions(), DEMO_QUESTIONS, active, items, valid

### Community 122 - "settingsStore.ts"
Cohesion: 0.26
Nodes (10): DEFAULT_SETTINGS, LocaleState, readLegacyTheme(), SETTINGS_STORAGE_KEY, SettingsActions, SettingsState, initialState, { storageMock } (+2 more)

### Community 123 - "pixijs/SKILL.md"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, Constructor options, [CRITICAL] Using lineStyle instead of stroke, [CRITICAL] Using old shape method names, [CRITICAL] Using v7 beginFill/drawRect/endFill, [HIGH] Clearing and redrawing Graphics every frame, [HIGH] Destroying a shared GraphicsContext unexpectedly (+4 more)

### Community 124 - "importAllowedEmails.ts"
Cohesion: 0.19
Nodes (12): AllowedRow, AllowlistDiff, diffAllowlist(), looksLikeEmail(), parseAllowlistCsv(), ParsedAllowlist, splitLine(), apply (+4 more)

### Community 125 - "http"
Cohesion: 0.17
Nodes (24): addMember(), errorMessage(), ErrorParams, toApiError(), deleteMember(), editMember(), FamilyGroupOption, fetchFamilyGroups() (+16 more)

### Community 126 - "useSessionStore"
Cohesion: 0.15
Nodes (20): fetchSession(), SessionInfo, put(), refreshProfile(), setFeaturedPosition(), setNameBadge(), AccountRoles(), byLatestYears() (+12 more)

### Community 127 - "NodesLayer.tsx"
Cohesion: 0.33
Nodes (5): NodesLayer(), nextAdmittedIds(), PROGRESSIVE_CHUNK_SIZE, useProgressiveIds(), getMemberTeamRoles()

### Community 128 - "AccessTab.tsx"
Cohesion: 0.23
Nodes (13): AccessGrant, fetchGrants(), GrantLevel, parse(), removeGrant(), setGrant(), Props, AccessTab() (+5 more)

### Community 129 - "GSAP with React"
Cohesion: 0.15
Nodes (12): Best practices, Context-Safe Callbacks, Dependency array, scope, and revertOnUpdate, Do Not, gsap.context() in useEffect (when useGSAP isn't used), GSAP with React, Installation, Learn More (+4 more)

### Community 130 - "emailCodes.ts"
Cohesion: 0.18
Nodes (13): CodeOwner, CodeStore, generateCode(), hashCode(), issueCode(), MAX_CODE_ATTEMPTS, sameHash(), StoredCode (+5 more)

### Community 132 - "hitl-loop.template.sh"
Cohesion: 0.83
Nodes (3): capture(), hitl-loop.template.sh script, step()

### Community 133 - "ref_node_crypto"
Cohesion: 0.38
Nodes (3): createFaceSource(), Options, source()

### Community 134 - "uk/filters.ts"
Cohesion: 0.33
Nodes (5): familyForms, filters, memberForms, roleForms, teamForms

### Community 135 - "en/errors.ts"
Cohesion: 0.50
Nodes (3): errors, Params, platformLabels

### Community 137 - "GSAP Performance"
Cohesion: 0.17
Nodes (11): Batch Reads and Writes, Best practices, Do Not, Frequently updated properties (e.g. mouse followers), GSAP Performance, Many Elements (Stagger, Lists), Prefer Transform and Opacity, Reduce Simultaneous Work (+3 more)

### Community 138 - "GSAP Timeline"
Cohesion: 0.17
Nodes (11): Controlling Playback, Creating a Timeline, Do Not, GSAP Timeline, Labels, Nesting Timelines, Official GSAP Best practices, Position Parameter (+3 more)

### Community 139 - "constants/theme.ts"
Cohesion: 0.25
Nodes (6): darkTheme, DEFAULT_THEME, lightTheme, THEMES, themeCssMap, themeInitScript

### Community 140 - "uk/errors.ts"
Cohesion: 0.50
Nodes (3): errors, Params, platformLabels

### Community 143 - "Core Patterns"
Cohesion: 0.25
Nodes (8): Add, remove, swap, Child queries, Core Patterns, Destroying sub-trees, Iterating children, Label-based tree navigation, Reparenting with transform preservation, Replacing a child

### Community 144 - "checkConfig.ts"
Cohesion: 0.07
Nodes (36): RFC-2045, RFC-2047, assertConfig(), configProblems(), databaseName(), demoProblems(), Env, googleProblems() (+28 more)

### Community 145 - "BEST Family Tree"
Cohesion: 0.25
Nodes (7): BEST Family Tree, Contributions, Language, People, Sign-in, Teams, Views

### Community 146 - "TeamTypeFormContent.tsx"
Cohesion: 0.11
Nodes (21): FormMessages(), Props, Props, RoleForm(), Props, RoleFormContent(), Props, Props (+13 more)

### Community 147 - "Common Mistakes"
Cohesion: 0.33
Nodes (6): Common Mistakes, [CRITICAL] Adding children to a leaf display object, [CRITICAL] Referencing DisplayObject, [HIGH] Forgetting isRenderGroup on large static subtrees, [HIGH] Treating child.x as world space, [MEDIUM] sortableChildren without zIndex

### Community 148 - "PositionFormFields.tsx"
Cohesion: 0.08
Nodes (44): FieldError(), PositionAssignmentFields(), Props, PositionFormFields(), Props, createEmptyPositionRow(), EMPTY_POSITION_ROW, findTeamByName() (+36 more)

### Community 149 - "ActivityState"
Cohesion: 0.40
Nodes (5): Props, ActivityState, Active, Excluded, Inactive

## Knowledge Gaps
- **45 isolated node(s):** `@prisma/client`, `dotenv`, `lodash`, `pixi-filters`, `@tailwindcss/postcss` (+40 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1090 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `src/types/index.ts` to `AccessTab.tsx`, `react`, `Member`, `Member`, `useDashedPathAnimation.ts`, `bakeParams.ts`, `PhotoViewer.tsx`, `treeStore.ts`, `TeamTypeFormContent.tsx`, `AccountForm.tsx`, `PositionFormFields.tsx`, `MembersTab.tsx`, `GroupedCheckListFilter.tsx`, `TeamLogo.tsx`, `MemberSuggestFields.tsx`, `inputs/index.ts`, `package.json`, `CodeForm.tsx`, `utils/membersTree/index.ts`, `settingsStore.ts`, `TeamFrame`, `SuggestionsTab.tsx`, `MenteesGrid.tsx`, `SidebarMode`, `useTeamForm.ts`, `PositionBadge.tsx`, `hooks/index.ts`, `constants/canvas/index.ts`, `useCardAnimation.ts`, `useCanvasTheme.ts`, `MemberPane.tsx`, `locale.ts`, `MemberPane.tsx`, `api/auth.ts`, `useLocale`, `ui/index.ts`, `MemberInfo`, `Sidebar.tsx`, `Toolbar.tsx`, `gsap`, `constants/canvas/index.ts`, `displayName.ts`, `useTeamTypeForm.ts`, `SignIn.tsx`, `photoViewerMath.ts`, `MemberStatus`, `FilterState`, `MemberSuggestForm.tsx`, `useLocale`, `useMembersStore`, `http`, `useSessionStore`, `NodesLayer.tsx`?**
  _High betweenness centrality (0.096) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _45 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `uk/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07965860597439545 - nodes in this community are weakly interconnected._
- **Why does `filters()` connect `filterTeams.ts` to `filterSearchParams.ts`, `pixijs/SKILL.md`?**
  _High betweenness centrality (0.068) - this node is a cross-community bridge._
- **Should `react` be split into smaller, more focused modules?**
  _Cohesion score 0.13968253968253969 - nodes in this community are weakly interconnected._
- **Why does `Constructor options` connect `pixijs/SKILL.md` to `filterTeams.ts`?**
  _High betweenness centrality (0.054) - this node is a cross-community bridge._
- **Should `Member` be split into smaller, more focused modules?**
  _Cohesion score 0.07878787878787878 - nodes in this community are weakly interconnected._