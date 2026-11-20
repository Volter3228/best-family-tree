# Graph Report - best-family-tree  (2026-11-20)

## Corpus Check
- 744 files · ~225,571 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 33 file(s) not represented in the graph (top: .prisma 10, (none) 7, .css 7)

## Summary
- 3434 nodes · 10286 edges · 144 communities (133 shown, 11 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 101 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `2b77fd44`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- uk/index.ts
- react
- useLocale
- server/package.json
- useTreeLayout.ts
- useDashedPathAnimation.ts
- bakeParams.ts
- suggestion/suggestionPhoto.ts
- suggestionCreate.ts
- teamLayout.ts
- teamFrame.ts
- SeasonMotif.tsx
- anonymizeDemo.ts
- src/index.ts
- constants/filters.ts
- src/index.ts
- ref_dotenv
- scripts
- TeamFrame
- Member
- challenges.ts
- HTML Report Format
- layout.tsx
- src/types/index.ts
- teamService.ts
- TeamSearch.tsx
- compilerOptions
- compilerOptions
- ApplicationOptions reference
- dependencies
- dependencies
- ref_vitest
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
- Core Patterns
- TeamFrame
- FitViewButton.tsx
- During the session
- SuggestionsTab.tsx
- en/index.ts
- AGENTS.md
- scripts
- eligibility.ts
- SubmitButton
- next.config.mjs
- postcss.config.mjs
- SettingsPanel.tsx
- useTeamForm.ts
- Core Patterns
- locale.ts
- filterOptions.ts
- membersStore.ts
- constants/canvas/index.ts
- memberService.ts
- BEST Family Tree
- Diagnosing Bugs
- useCardAnimation.ts
- useCanvasTheme.ts
- CheckListFilter.tsx
- backfillGender.ts
- Core Patterns
- Core Patterns
- useTeamTypeForm.ts
- CodeForm.tsx
- mime.ts
- MemberPane.tsx
- MemberNodeCard.tsx
- Core Patterns
- Core Patterns
- Core Patterns
- SignIn.tsx
- api/auth.ts
- Core Patterns
- Constructor options (Container-inherited)
- Test-Driven Development
- GSAP Core
- Core Patterns
- transliterate.ts
- Foundations
- TeamTypeFormContent.tsx
- Sidebar.tsx
- Core Patterns
- opengraph-image.tsx
- checkConfig.ts
- backup-prod.sh
- start-prod.sh
- restore-local.sh
- Common Mistakes
- gsap
- MemberSidebar.tsx
- Core Concepts
- Render Loop
- pixijs-core-concepts/SKILL.md
- teamRoster.ts
- Common Mistakes
- searchShortcut.ts
- MemberSuggestForm.tsx
- signInCodeEmail.ts
- PhotoViewer.tsx
- migrateMembersFromMongodb.ts
- MaskIcon.tsx
- Renderers: WebGPU, WebGL, and Canvas
- filtersStore.ts
- selfService.ts
- AccountRoles.tsx
- pixijs-scene-core-concepts/SKILL.md
- devLogin.ts
- proxy.ts
- uk/filters.ts
- navigateWithTransition.ts
- messages
- Common Mistakes
- importAllowedEmails.ts
- http
- plural.ts
- devDependencies
- GSAP with React
- emailCodes.ts
- hitl-loop.template.sh
- fakeIdentity.ts
- en/errors.ts
- GSAP Performance
- GSAP Timeline
- memberFormValidation.ts
- uk/errors.ts
- ref_vitest
- contactKeys.ts
- mailer/index.ts
- BEST Family Tree
- PositionFormFields.tsx

## God Nodes (most connected - your core abstractions)
1. `useT()` - 214 edges
2. `AccentColor` - 188 edges
3. `react` - 174 edges
4. `tailwind-merge` - 97 edges
5. `Member` - 75 edges
6. `useLocale()` - 73 edges
7. `COLOR_CLASSES` - 59 edges
8. `@heroicons/react` - 56 edges
9. `http()` - 48 edges
10. `TeamFrame` - 45 edges

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

## Communities (144 total, 11 thin omitted)

### Community 0 - "uk/index.ts"
Cohesion: 0.08
Nodes (19): access, account, auth, common, formCommon, manage, memberForm, memberInfo (+11 more)

### Community 1 - "react"
Cohesion: 0.09
Nodes (35): react, fetchSuggestionCount(), Props, Props, RoleForm(), Props, TeamTypeForm(), TeamTypeMark() (+27 more)

### Community 2 - "useLocale"
Cohesion: 0.09
Nodes (50): AccessGrant, AccountPanel(), Props, cache, loadImageAspect(), PhotoOpenButton(), Props, useIsPhotoOpen() (+42 more)

### Community 3 - "server/package.json"
Cohesion: 0.07
Nodes (27): compression, concurrently, cors, express-rate-limit, @faker-js/faker, helmet, nodemon, @prisma/adapter-pg (+19 more)

### Community 4 - "useTreeLayout.ts"
Cohesion: 0.13
Nodes (24): GRID_GAP_X, useSceneTransition(), useResolvedDirection(), useTreeLayout(), DEFAULT_POSITION, areSetsEqual(), computeFilteredMembers(), Source (+16 more)

### Community 5 - "useDashedPathAnimation.ts"
Cohesion: 0.09
Nodes (34): LineageEdge(), DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN, MIN_ANIM_DURATION, PATTERN_LEN, RETRACT_BASE (+26 more)

### Community 6 - "bakeParams.ts"
Cohesion: 0.21
Nodes (17): AuroraBackground(), readNumber(), useBakedAurora(), AuroraBakeInput, bakeAuroraLayers(), canBakeAurora(), BAKE_SCALE, BLUR_SPREAD (+9 more)

### Community 7 - "suggestion/suggestionPhoto.ts"
Cohesion: 0.13
Nodes (25): canEditMember(), canManageGrant(), canSelfServe(), canSuggest(), hasAccess(), isOwnGrant(), RANK, AccessRank (+17 more)

### Community 8 - "suggestionCreate.ts"
Cohesion: 0.09
Nodes (40): buildRows(), createSuggestionBatch(), listPending(), applyApproval(), MIN_TEAM_YEAR, cannotEmpty(), CONTACT_FIELDS, invalid() (+32 more)

### Community 9 - "teamLayout.ts"
Cohesion: 0.08
Nodes (44): elkjs, GRID_LR_COLUMNS, TEAM_FRAME_GAP, TEAM_PACK_ASPECT, failOver(), getWorker(), Pending, requestLayout() (+36 more)

### Community 10 - "teamFrame.ts"
Cohesion: 0.07
Nodes (43): Props, TEAM_COLUMN_GAP, TEAM_EDGE_DROP, TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_SPREAD_WIDTH, TEAM_EDGE_STUB, TEAM_FRAME_HEADER, TEAM_FRAME_MIN_WIDTH (+35 more)

### Community 11 - "SeasonMotif.tsx"
Cohesion: 0.27
Nodes (8): FlowerIcon(), Props, MapleLeafIcon(), Props, Placement, PLACEMENTS, Props, SeasonMotif()

### Community 12 - "anonymizeDemo.ts"
Cohesion: 0.14
Nodes (18): allowed, args, byId, factory, GROUP_NAMES, memberPhotos, nextFace, real (+10 more)

### Community 13 - "src/index.ts"
Cohesion: 0.06
Nodes (57): cloudinary, express, multer, multer-storage-cloudinary, app, deleteCloudinaryImage(), deleteReplacedImage(), discardUpload() (+49 more)

### Community 14 - "constants/filters.ts"
Cohesion: 0.08
Nodes (51): ACTIVITY_STATES, DATE_PICKER_CLASSES, EMPTY_FILTER_STATE, GENDER_VALUES, JOIN_SEASONS, MEMBER_STATUSES, Props, initialFiltersState (+43 more)

### Community 15 - "src/index.ts"
Cohesion: 0.07
Nodes (52): openid-client, authSecret(), CHALLENGE_TTL_MS, isDemoMode(), isProduction(), QUESTIONS_SHOWN, SESSION_COOKIE, SESSION_TTL_MS (+44 more)

### Community 16 - "ref_dotenv"
Cohesion: 0.25
Nodes (5): @prisma/config, ADMINS_BY_EMAIL, EDITORS_BY_NAME, Target, targets

### Community 17 - "scripts"
Cohesion: 0.12
Nodes (17): scripts, auth:grant, auth:import-emails, auth:preview-email, auth:report-duplicate-contacts, auth:seed-grants, auth:seed-questions, build (+9 more)

### Community 18 - "TeamFrame"
Cohesion: 0.09
Nodes (32): Props, Props, Props, EMPTY_IDS, View, drawLerped(), drawPolyline(), Props (+24 more)

### Community 19 - "Member"
Cohesion: 0.11
Nodes (22): Props, MemberSidebar(), Props, HeaderChip(), Props, Props, Props, SeasonChip() (+14 more)

### Community 20 - "challenges.ts"
Cohesion: 0.09
Nodes (30): answerMatches(), CYRILLIC_TO_LATIN, normalizeAnswer(), ChallengeState, isExpired(), isSolved(), pickRandom(), swapQuestion() (+22 more)

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "layout.tsx"
Cohesion: 0.09
Nodes (15): react-datepicker, metadata, nunito, RootLayout(), darkTheme, DEFAULT_THEME, lightTheme, THEMES (+7 more)

### Community 23 - "src/types/index.ts"
Cohesion: 0.06
Nodes (71): @heroicons/react, next, tailwind-merge, GLOW, Props, LionIcon(), Props, Props (+63 more)

### Community 24 - "teamService.ts"
Cohesion: 0.12
Nodes (29): resolvePosition(), assertCanEditMembers(), deriveTeamName(), resolveRole(), resolveTeam(), resolveTeamType(), RoleRef, TeamRef (+21 more)

### Community 25 - "TeamSearch.tsx"
Cohesion: 0.20
Nodes (13): Props, SearchBar(), Props, HighlightedTitle(), Props, SearchSuggestionRow(), SuggestionRowProps, compare() (+5 more)

### Community 26 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, esModuleInterop, forceConsistentCasingInFileNames, module, moduleResolution, noImplicitAny, outDir, paths (+12 more)

### Community 27 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+12 more)

### Community 28 - "ApplicationOptions reference"
Cohesion: 0.06
Nodes (32): Accessibility, ApplicationOptions reference, Background, Culler (CullerPluginOptions), Deprecated (GC — prefer the unified options above), Events, Garbage collection, Graphics (+24 more)

### Community 29 - "dependencies"
Cohesion: 0.12
Nodes (17): dependencies, cloudinary, compression, cors, dotenv, express, express-rate-limit, helmet (+9 more)

### Community 30 - "dependencies"
Cohesion: 0.10
Nodes (20): dependencies, date-fns, dotenv, elkjs, gsap, @gsap/react, @heroicons/react, lodash (+12 more)

### Community 32 - "TeamLogo.tsx"
Cohesion: 0.18
Nodes (14): Props, TeamTile(), AvatarSkeleton(), MemberAvatarImage(), MemberAvatarImageInner(), Props, SkeletonProps, isTinted() (+6 more)

### Community 33 - "filterTeams.ts"
Cohesion: 0.18
Nodes (17): birthdayBoundKey(), matchesBirthday(), parseDateStr(), toDateVal(), toMMDD(), rangeBounds(), getTeamSpan(), hasRole() (+9 more)

### Community 34 - "MemberSuggestFields.tsx"
Cohesion: 0.11
Nodes (33): react-dom, DropdownPortal(), Props, FormField(), Props, GenderFormField(), MemberBasicsSection(), Props (+25 more)

### Community 35 - "suggestChanges.ts"
Cohesion: 0.18
Nodes (13): buildMemberFormData(), buildEditPayload(), normalizePhone(), buildMemberChanges(), buildTeamChanges(), findEmptiedTeamFields(), SuggestableMember, SuggestableTeam (+5 more)

### Community 36 - "package.json"
Cohesion: 0.10
Nodes (20): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+12 more)

### Community 37 - "MemberInfoActions.tsx"
Cohesion: 0.23
Nodes (12): FacebookIcon(), FacebookGlyph(), InstagramGlyph(), LinkedinGlyph(), svgProps, TelegramGlyph(), InstagramIcon(), LinkedinIcon() (+4 more)

### Community 38 - "MemberSearch.tsx"
Cohesion: 0.27
Nodes (15): compare(), getSearchable(), MemberSearch(), Props, SearchSuggestionItem(), getMatchRanges(), matchesQuery(), queryParts() (+7 more)

### Community 39 - "utils/membersTree/index.ts"
Cohesion: 0.14
Nodes (24): EdgesLayer(), NODE_AVATAR_RADIUS, TeamEdge, bezierEval(), edgeGeometry, endpoints(), sampleBezierCurve(), sampleEdgePath() (+16 more)

### Community 40 - "Core Patterns"
Cohesion: 0.08
Nodes (29): Renderer selection at runtime, Adding and removing children, API Reference, Bounds and coordinate conversion, Common Mistakes, Constructor options, Container events, Core Patterns (+21 more)

### Community 41 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+5 more)

### Community 42 - "locale.ts"
Cohesion: 0.18
Nodes (17): SHORT_LABELS, writeLocaleCookie(), Locale, LOCALE_COOKIE, LOCALES, LocaleProvider(), DEFAULT_SETTINGS, LocaleState (+9 more)

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
Cohesion: 0.06
Nodes (51): @pixi/react, PixiElements, @gsap/react, pixi.js, @pixi/react, MemberNodeAvatar(), Props, MemberNodeMinimizedTooltip() (+43 more)

### Community 47 - "FitViewButton.tsx"
Cohesion: 0.15
Nodes (19): DemoBadge(), FiltersHeader(), Props, FitViewButton(), Props, PanelCloseButton(), Props, STYLES (+11 more)

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "SuggestionsTab.tsx"
Cohesion: 0.12
Nodes (29): approveSuggestion(), fetchSuggestions(), parse(), rejectSuggestion(), SuggestionDto, AccessTab(), CollapseOut(), Props (+21 more)

### Community 50 - "en/index.ts"
Cohesion: 0.11
Nodes (23): access, account, auth, common, filters, formCommon, en, manage (+15 more)

### Community 51 - "AGENTS.md"
Cohesion: 0.25
Nodes (7): Commands, Conventions, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout, This is NOT the Next.js you know

### Community 52 - "scripts"
Cohesion: 0.20
Nodes (10): scripts, build, db:backup-prod, db:restore-local, dev, dev:webpack, lint, start (+2 more)

### Community 53 - "eligibility.ts"
Cohesion: 0.15
Nodes (18): EligibilityMember, EmailIdentity, MemberMatch, normalizeEmail(), resolveEmailIdentity(), resolveMemberMatch(), loadEmailIdentity(), callbackErrorRedirect() (+10 more)

### Community 54 - "SubmitButton"
Cohesion: 0.23
Nodes (12): requestEmailCode(), AccountForm(), Props, EmailForm(), Props, GoogleButton(), GoogleMark(), Props (+4 more)

### Community 57 - "SettingsPanel.tsx"
Cohesion: 0.25
Nodes (12): FamilyTreeIcon(), Props, edgeIcon(), edgeStyleOptions(), iconClass, orientationOptions(), themeOptions(), treeModeOptions() (+4 more)

### Community 58 - "useTeamForm.ts"
Cohesion: 0.20
Nodes (21): createTeam(), deleteTeam(), fetchTeamDetails(), parse(), setTeamMembers(), TeamMemberPayload, updateTeam(), buildTeamRequestBody() (+13 more)

### Community 59 - "Core Patterns"
Cohesion: 0.12
Nodes (17): Application destroy/recreate cycle, Batching optimization, cacheAsTexture for performance, Core Patterns, Culling, Filters and masks cost, Graphics performance, Low-level rendering optimizations (+9 more)

### Community 60 - "locale.ts"
Cohesion: 0.13
Nodes (17): booleanLike, isValidPeriod(), optional(), optionalName(), PERIOD_ERROR, positionSchema, roleRef, TeamBody (+9 more)

### Community 61 - "filterOptions.ts"
Cohesion: 0.53
Nodes (3): useDropdown(), filterOptionsByQuery(), options

### Community 62 - "membersStore.ts"
Cohesion: 0.10
Nodes (25): Props, MENTOR_STATUSES, membersActions, {
  setMembers,
  reloadMembers,
  addMember,
  updateMember,
  selectMember,
  getMentorsList,
}, useMembersMap(), useMentees(), useSelectedId(), useSelectedMember() (+17 more)

### Community 63 - "constants/canvas/index.ts"
Cohesion: 0.06
Nodes (40): BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props, acquireEmojiTextures(), createEmojiTexture(), generateRandomPosition(), releaseEmojiTextures() (+32 more)

### Community 64 - "memberService.ts"
Cohesion: 0.06
Nodes (52): zod, adapter, prisma, guardMemberEdit(), buildMemberFields(), buildMemberUpdateFields(), buildSharedFields(), buildSparseMemberFields() (+44 more)

### Community 65 - "BEST Family Tree"
Cohesion: 0.10
Nodes (19): 1. Clone and configure environment, 2. Start the application, 3. Run database migrations, 4. Access the app, Architecture, Automated backups (GitHub Actions), Available Commands, Backend Commands (run inside container) (+11 more)

### Community 66 - "Diagnosing Bugs"
Cohesion: 0.13
Nodes (14): Completion criterion: a tight loop that goes red, Diagnosing Bugs, Minimise, Non-deterministic bugs, Phase 1: Build a feedback loop, Phase 2: Reproduce + minimise, Phase 3: Hypothesise, Phase 4: Instrument (+6 more)

### Community 67 - "useCardAnimation.ts"
Cohesion: 0.13
Nodes (24): CARD_PIVOT, MemberNodeCardSlot(), Props, clamp01(), deferCardHidden(), easeBackOut, easePower2In, easePower2Out (+16 more)

### Community 68 - "useCanvasTheme.ts"
Cohesion: 0.14
Nodes (17): FONT_FAMILY, NODE_SUBTITLE_STYLE, NODE_TITLE_STYLE, NODE_TOOLTIP_TEXT_STYLE, TEXT_RESOLUTION, ThemeContext, ThemeContextValue, buildCanvasColors() (+9 more)

### Community 69 - "CheckListFilter.tsx"
Cohesion: 0.50
Nodes (4): byLabel(), CheckOption, Props, useStableOrder()

### Community 70 - "backfillGender.ts"
Cohesion: 0.12
Nodes (15): alreadyDifferent, alreadySame, APPLY, args, duplicates, fileArg, Gender, GENDERS (+7 more)

### Community 71 - "Core Patterns"
Cohesion: 0.13
Nodes (14): API Reference, boundsArea optimization, Common Mistakes, Core Patterns, Culling, HIGH: Expecting automatic culling, HIGH: Using addChild on RenderLayer, MEDIUM: Expecting filters on ancestors to apply to layer children (+6 more)

### Community 72 - "Core Patterns"
Cohesion: 0.07
Nodes (28): Advanced shape primitives, API Reference, Cloning, clearing, and bounds, Common Mistakes, Constructor options, Core Patterns, [CRITICAL] Using lineStyle instead of stroke, [CRITICAL] Using old shape method names (+20 more)

### Community 73 - "useTeamTypeForm.ts"
Cohesion: 0.23
Nodes (8): ApiError, buildTeamTypeFormData(), Callbacks, EMPTY_FORM, keepCount(), toFormData(), useTeamTypeForm(), isSameFormData()

### Community 74 - "CodeForm.tsx"
Cohesion: 0.27
Nodes (12): verifyEmailCode(), applyDigits(), backspaceAt(), CODE_LENGTH, Edit, emptyDigits(), isComplete(), CodeForm() (+4 more)

### Community 75 - "mime.ts"
Cohesion: 0.29
Nodes (11): RFC-2045, RFC-2047, createGmailMailer(), GmailConfig, base64Body(), buildMime(), encodeHeaderText(), formatAddress() (+3 more)

### Community 76 - "MemberPane.tsx"
Cohesion: 0.05
Nodes (58): date-fns, ACTIVITY_ICONS, IconComponent, IconProps, greenPillIcon(), IconProps, DatesPane(), SEASON_ICONS (+50 more)

### Community 77 - "MemberNodeCard.tsx"
Cohesion: 0.08
Nodes (36): contexts, getCardBackgroundContext(), getGlowTexture(), GLOW_BLUR, GLOW_PADDING, GlowKind, paint(), SIZES (+28 more)

### Community 78 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, attach / detach, Common Mistakes, Core Patterns, [CRITICAL] Using `addChild` on a RenderLayer, [HIGH] Layer and attached children in different render groups, Layer + logical parent, Manual sort (+5 more)

### Community 79 - "Core Patterns"
Cohesion: 0.14
Nodes (13): Alpha mask (Sprite-based), API Reference, Common Mistakes, Core Patterns, [HIGH] Using cacheAsTexture with masks, Inverse masking, Mask channel selection, Mask type selection (+5 more)

### Community 80 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, Common Mistakes, Construction options, Core Patterns, [HIGH] Nesting many render groups, [MEDIUM] Constantly adding/removing from a render group, [MEDIUM] Overusing render groups, Profile before adding (+5 more)

### Community 81 - "SignIn.tsx"
Cohesion: 0.17
Nodes (17): logout(), post(), startChallenge(), swapQuestion(), verifyAnswers(), AuthMessage(), Props, CARD_COLORS (+9 more)

### Community 82 - "api/auth.ts"
Cohesion: 0.21
Nodes (11): AccessLevel, AuthMethod, Challenge, ChallengeQuestion, fetchSession(), RequestCodeOutcome, SessionInfo, SessionPosition (+3 more)

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
Cohesion: 0.10
Nodes (19): API Reference, Capture phase events, Common Mistakes, Core Patterns, Cursor styles, Event features, Event properties, Event types (+11 more)

### Community 88 - "transliterate.ts"
Cohesion: 0.21
Nodes (11): FamilyGroupRef, familyIdToSlug(), familySlug, familyTokenToId(), groups, MAP, ROMAN, ROMAN_INITIAL (+3 more)

### Community 89 - "Foundations"
Cohesion: 0.15
Nodes (12): Advanced, Foundations, pixijs-application, pixijs-core-concepts, pixijs-events, pixijs-performance, pixijs-scene-container, pixijs-scene-core-concepts (+4 more)

### Community 90 - "TeamTypeFormContent.tsx"
Cohesion: 0.14
Nodes (26): BUTTON, GLASS, HeaderProps, ToolbarProps, ViewerHeader(), ClearButton(), ConfirmDeleteControl(), Props (+18 more)

### Community 91 - "Sidebar.tsx"
Cohesion: 0.13
Nodes (15): Props, Props, Sidebar(), SidebarBehindCover(), SidebarCoverTint(), Props, SidebarFooter(), Props (+7 more)

### Community 92 - "Core Patterns"
Cohesion: 0.29
Nodes (7): Core Patterns, Frame rate capping, Manual rendering, Per-object update via `onRender`, Priority order, Stop and start, Time units

### Community 93 - "opengraph-image.tsx"
Cohesion: 0.24
Nodes (6): alt, contentType, OpengraphImage(), read(), size, { html }

### Community 94 - "checkConfig.ts"
Cohesion: 0.29
Nodes (9): assertConfig(), configProblems(), databaseName(), demoProblems(), Env, googleProblems(), telegramProblems(), good (+1 more)

### Community 98 - "Common Mistakes"
Cohesion: 0.50
Nodes (4): Common Mistakes, [HIGH] Accessing app.renderer before init() resolves, [HIGH] Setting DOMAdapter after Application.init, [MEDIUM] Treating `preference` as a guarantee

### Community 99 - "gsap"
Cohesion: 0.25
Nodes (16): gsap, pixi-viewport, Props, Viewport(), MAX_VIEWPORT_ZOOM, MIN_VIEWPORT_ZOOM, NODE_HEIGHT, getFitViewTargetScale() (+8 more)

### Community 100 - "MemberSidebar.tsx"
Cohesion: 0.08
Nodes (32): zustand, MembersTree(), Props, EVENT_FEATURES, MembersTreeContent(), Props, TeamInfoSidebar(), ViewportCulling() (+24 more)

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
Cohesion: 0.20
Nodes (9): NodesLayer(), nextAdmittedIds(), PROGRESSIVE_CHUNK_SIZE, useProgressiveIds(), getTeamRoster(), getMemberTeamRoles(), getPositionPeriod(), getPositionYearLabel() (+1 more)

### Community 105 - "Common Mistakes"
Cohesion: 0.20
Nodes (10): Common Mistakes, [CRITICAL] App destroy without releaseGlobalResources, [HIGH] Destroying and recreating objects instead of recycling, [HIGH] Interleaving object types in scene graph, [HIGH] Loading many individual textures instead of spritesheets, [HIGH] Updating Text or HTMLText every frame, [HIGH] Using complex Graphics instead of textures, [MEDIUM] Not staggering bulk texture destruction (+2 more)

### Community 106 - "searchShortcut.ts"
Cohesion: 0.33
Nodes (6): EDITABLE_TAGS, isEditableTarget(), isSearchShortcut(), ShortcutKeys, Keys, useSearchShortcut()

### Community 107 - "MemberSuggestForm.tsx"
Cohesion: 0.14
Nodes (31): AddMemberForm(), Props, describeSubmitError(), EditMemberForm(), Props, getInitialFormData(), MemberFormFields(), FormError() (+23 more)

### Community 108 - "signInCodeEmail.ts"
Cohesion: 0.31
Nodes (6): CODE_TTL_MS, COPY, EmailLocale, escapeHtml(), pairs(), renderSignInCodeEmail()

### Community 109 - "PhotoViewer.tsx"
Cohesion: 0.07
Nodes (43): isTreeReady(), MembersTree, MembersTreeDynamic(), Props, TreeState, PhotoViewer(), thumbRadius(), Viewer() (+35 more)

### Community 110 - "migrateMembersFromMongodb.ts"
Cohesion: 0.05
Nodes (43): mongodb, CONTACT_FIELDS, toMemberResponse(), ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient (+35 more)

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

### Community 113 - "filtersStore.ts"
Cohesion: 0.13
Nodes (22): CATEGORY_ICONS, FilterCategoryRail(), Props, FiltersFooter(), FiltersPanel(), Props, FilterCategoryPane(), SELF_SCROLLING_PANES (+14 more)

### Community 114 - "selfService.ts"
Cohesion: 0.26
Nodes (14): fetchMyMemberSuggestions(), fetchMyTeamSuggestions(), PendingSuggestion, photoBody(), postChanges(), send(), SuggestionChange, suggestMemberChanges() (+6 more)

### Community 115 - "AccountRoles.tsx"
Cohesion: 0.17
Nodes (17): fetchMemberById(), put(), refreshProfile(), setFeaturedPosition(), setNameBadge(), AccountRoles(), byLatestYears(), lastYear() (+9 more)

### Community 116 - "pixijs-scene-core-concepts/SKILL.md"
Cohesion: 0.14
Nodes (12): API Reference, Common Mistakes, [CRITICAL] Adding children to a leaf display object, [CRITICAL] Referencing DisplayObject, [HIGH] Forgetting isRenderGroup on large static subtrees, [HIGH] Treating child.x as world space, Leaf comparison: which skill covers which object, [MEDIUM] sortableChildren without zIndex (+4 more)

### Community 117 - "devLogin.ts"
Cohesion: 0.48
Nodes (5): databaseHost(), devLoginProblems(), Env, isDevLoginEnabled(), LOCAL_HOSTS

### Community 120 - "uk/filters.ts"
Cohesion: 0.33
Nodes (5): familyForms, filters, memberForms, roleForms, teamForms

### Community 121 - "navigateWithTransition.ts"
Cohesion: 0.50
Nodes (3): LEAVE_MS, pageEnterScript, PageTransition

### Community 122 - "messages"
Cohesion: 0.67
Nodes (3): messages, generateGoogleCalendarLink(), getClosestBirthday()

### Community 123 - "Common Mistakes"
Cohesion: 0.18
Nodes (9): API Reference, Quick Start, Advanced, Fallback: canonical PixiJS docs, Foundations, How to use this skill, Scene Objects, Skill router (+1 more)

### Community 124 - "importAllowedEmails.ts"
Cohesion: 0.19
Nodes (12): AllowedRow, AllowlistDiff, diffAllowlist(), looksLikeEmail(), parseAllowlistCsv(), ParsedAllowlist, splitLine(), apply (+4 more)

### Community 125 - "http"
Cohesion: 0.09
Nodes (43): Teams, fetchGrants(), GrantLevel, parse(), removeGrant(), setGrant(), addMember(), errorMessage() (+35 more)

### Community 126 - "plural.ts"
Cohesion: 0.18
Nodes (9): memberForm, teamTypeForm, memberForms, search, formatCount(), plural(), PluralForms, en (+1 more)

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
Cohesion: 0.31
Nodes (6): createIdentityFactory(), firstFree(), OPERATOR_CODES, none, MAP, translit()

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
Cohesion: 0.17
Nodes (14): getRowPeriod(), CheckedField, getStoredFieldValues(), Links, StoredMemberValues, complete, mentors, sparse (+6 more)

### Community 140 - "uk/errors.ts"
Cohesion: 0.50
Nodes (3): errors, Params, platformLabels

### Community 141 - "ref_vitest"
Cohesion: 0.38
Nodes (3): createFaceSource(), Options, source()

### Community 142 - "contactKeys.ts"
Cohesion: 0.20
Nodes (10): duplicates, fields, groups, ContactFields, contactKey(), ContactPlatform, FIELD_PLATFORMS, findContactCollision() (+2 more)

### Community 144 - "mailer/index.ts"
Cohesion: 0.18
Nodes (12): consoleMailer, getMailer(), createResendMailer(), ResendConfig, message, Env, isTransport(), MAIL_TRANSPORTS (+4 more)

### Community 146 - "BEST Family Tree"
Cohesion: 0.29
Nodes (6): BEST Family Tree, Contributions, Language, People, Sign-in, Views

### Community 148 - "PositionFormFields.tsx"
Cohesion: 0.07
Nodes (65): QuestionCard(), DropdownMenu(), Props, FieldError(), PositionAssignmentFields(), Props, PositionFormFields(), Props (+57 more)

## Knowledge Gaps
- **45 isolated node(s):** `@prisma/client`, `dotenv`, `lodash`, `pixi-filters`, `@tailwindcss/postcss` (+40 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1088 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `filters()` connect `constants/filters.ts` to `Core Patterns`, `Core Patterns`, `Constructor options (Container-inherited)`?**
  _High betweenness centrality (0.092) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _45 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `uk/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.08108108108108109 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `useLocale`, `useTreeLayout.ts`, `useDashedPathAnimation.ts`, `bakeParams.ts`, `teamFrame.ts`, `constants/filters.ts`, `TeamFrame`, `Member`, `PositionFormFields.tsx`, `src/types/index.ts`, `TeamSearch.tsx`, `TeamLogo.tsx`, `MemberSuggestFields.tsx`, `package.json`, `MemberSearch.tsx`, `locale.ts`, `TeamFrame`, `FitViewButton.tsx`, `SuggestionsTab.tsx`, `SubmitButton`, `useTeamForm.ts`, `filterOptions.ts`, `membersStore.ts`, `constants/canvas/index.ts`, `useCardAnimation.ts`, `useCanvasTheme.ts`, `CheckListFilter.tsx`, `useTeamTypeForm.ts`, `CodeForm.tsx`, `MemberPane.tsx`, `MemberNodeCard.tsx`, `SignIn.tsx`, `TeamTypeFormContent.tsx`, `Sidebar.tsx`, `gsap`, `MemberSidebar.tsx`, `teamRoster.ts`, `searchShortcut.ts`, `MemberSuggestForm.tsx`, `PhotoViewer.tsx`, `filtersStore.ts`, `selfService.ts`, `AccountRoles.tsx`, `http`?**
  _High betweenness centrality (0.088) - this node is a cross-community bridge._
- **Should `react` be split into smaller, more focused modules?**
  _Cohesion score 0.09176470588235294 - nodes in this community are weakly interconnected._
- **Why does `Constructor options` connect `Core Patterns` to `constants/filters.ts`?**
  _High betweenness centrality (0.075) - this node is a cross-community bridge._
- **Should `useLocale` be split into smaller, more focused modules?**
  _Cohesion score 0.09086538461538461 - nodes in this community are weakly interconnected._