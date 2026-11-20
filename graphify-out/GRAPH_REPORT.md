# Graph Report - best-family-tree  (2026-11-20)

## Corpus Check
- 742 files · ~224,922 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 33 file(s) not represented in the graph (top: .prisma 10, (none) 7, .css 7)

## Summary
- 3428 nodes · 10265 edges · 141 communities (130 shown, 11 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 101 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `3dcbedad`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- uk/index.ts
- react
- src/utils/index.ts
- server/package.json
- ThemeContext.tsx
- useDashedPathAnimation.ts
- bakeParams.ts
- auth/types.ts
- suggestionCreate.ts
- teamLayout.ts
- teamFrame.ts
- Member
- anonymizeDemo.ts
- src/index.ts
- ref_vitest
- src/index.ts
- clientInstance.ts
- scripts
- TeamFrame
- useTreeLayout.ts
- challenges.ts
- HTML Report Format
- layout.tsx
- useT.ts
- teamService.ts
- AccentColor
- compilerOptions
- compilerOptions
- ApplicationOptions reference
- dependencies
- dependencies
- ref_vitest
- TeamLogo.tsx
- filterMembers.ts
- inputs/index.ts
- Common Mistakes
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
- familyTreeRoutes.ts
- next.config.mjs
- postcss.config.mjs
- SettingsPanel.tsx
- useTeamForm.ts
- Core Patterns
- locale.ts
- src/types/index.ts
- MembersTreeContent.tsx
- pixi.js
- memberService.ts
- BEST Family Tree
- Diagnosing Bugs
- useCardAnimation.ts
- useCanvasTheme.ts
- GroupedCheckListFilter.tsx
- backfillGender.ts
- Core Patterns
- Core Patterns
- useTeamTypeForm.ts
- useLocale
- constants/filters.ts
- BirthdayFilterSection.tsx
- constants/canvas/index.ts
- Core Patterns
- Core Patterns
- Core Patterns
- api/auth.ts
- telegramEligibility.ts
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
- EdgeStyle
- backup-prod.sh
- start-prod.sh
- restore-local.sh
- Common Mistakes
- gsap
- MemberSidebar.tsx
- @prisma/config
- Render Loop
- pixijs-core-concepts/SKILL.md
- TeamInfo.tsx
- oidc.ts
- EditMemberForm.tsx
- useProgressiveIds.ts
- PhotoViewer.tsx
- migrateMembersFromMongodb.ts
- MaskIcon.tsx
- Renderers: WebGPU, WebGL, and Canvas
- filtersStore.ts
- MemberSuggestForm.tsx
- AccountPanel.tsx
- pixijs-scene-core-concepts/SKILL.md
- proxy.ts
- uk/filters.ts
- piiCheck.ts
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
- ref_vitest
- uk/errors.ts
- ref_vitest
- contactKeys.ts
- checkConfig.ts
- useMeta.ts
- PositionFormFields.tsx

## God Nodes (most connected - your core abstractions)
1. `useT()` - 214 edges
2. `AccentColor` - 188 edges
3. `react` - 172 edges
4. `tailwind-merge` - 97 edges
5. `Member` - 76 edges
6. `useLocale()` - 73 edges
7. `COLOR_CLASSES` - 59 edges
8. `@heroicons/react` - 56 edges
9. `http()` - 48 edges
10. `useDisplayName()` - 43 edges

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

## Communities (141 total, 11 thin omitted)

### Community 0 - "uk/index.ts"
Cohesion: 0.08
Nodes (19): access, account, auth, common, formCommon, manage, memberForm, memberInfo (+11 more)

### Community 1 - "react"
Cohesion: 0.15
Nodes (26): TeamTypeForm(), ManageList(), ManagePane(), Props, ITEMS, ManageRail(), Props, Props (+18 more)

### Community 2 - "src/utils/index.ts"
Cohesion: 0.13
Nodes (26): MemberInfoCopy(), DateWithYears(), formatJoinedDate(), MemberInfoFacts(), Tile, MemberInfoRow(), MemberMiniAvatar(), MenteesGrid() (+18 more)

### Community 3 - "server/package.json"
Cohesion: 0.07
Nodes (27): cloudinary, compression, concurrently, cors, helmet, multer-storage-cloudinary, nodemon, @prisma/adapter-pg (+19 more)

### Community 4 - "ThemeContext.tsx"
Cohesion: 0.13
Nodes (18): darkTheme, DEFAULT_THEME, lightTheme, THEMES, applyCssTokens(), ThemeContext, ThemeContextValue, ThemeProvider() (+10 more)

### Community 5 - "useDashedPathAnimation.ts"
Cohesion: 0.14
Nodes (23): LineageEdge(), FIXED_EDGE_WIDTH, DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN, MIN_ANIM_DURATION, PATTERN_LEN (+15 more)

### Community 6 - "bakeParams.ts"
Cohesion: 0.21
Nodes (17): AuroraBackground(), readNumber(), useBakedAurora(), AuroraBakeInput, bakeAuroraLayers(), canBakeAurora(), BAKE_SCALE, BLUR_SPREAD (+9 more)

### Community 7 - "auth/types.ts"
Cohesion: 0.13
Nodes (19): canEditMember(), canManageGrant(), canSelfServe(), canSuggest(), hasAccess(), isOwnGrant(), RANK, CONTACT_FIELDS (+11 more)

### Community 8 - "suggestionCreate.ts"
Cohesion: 0.06
Nodes (58): applyPhone(), Suggestion, assertUnderPendingCap(), authorWhere(), buildRows(), checkTeamRows(), createSuggestionBatch(), listMySuggestions() (+50 more)

### Community 9 - "teamLayout.ts"
Cohesion: 0.08
Nodes (42): elkjs, TEAM_FRAME_GAP, TEAM_PACK_ASPECT, useTeamSelection(), failOver(), getWorker(), Pending, requestLayout() (+34 more)

### Community 10 - "teamFrame.ts"
Cohesion: 0.08
Nodes (39): Props, TEAM_COLUMN_GAP, TEAM_EDGE_DROP, TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_SPREAD_WIDTH, TEAM_EDGE_STUB, TEAM_FRAME_HEADER, TEAM_FRAME_MIN_WIDTH (+31 more)

### Community 11 - "Member"
Cohesion: 0.12
Nodes (19): FlowerIcon(), Props, MapleLeafIcon(), Props, Placement, PLACEMENTS, SeasonMotif(), Props (+11 more)

### Community 12 - "anonymizeDemo.ts"
Cohesion: 0.14
Nodes (11): allowed, args, byId, factory, GROUP_NAMES, memberPhotos, nextFace, real (+3 more)

### Community 13 - "src/index.ts"
Cohesion: 0.10
Nodes (36): multer, deleteCloudinaryImage(), deleteReplacedImage(), discardUpload(), extractCloudinaryPublicId(), MAX_UPLOAD_BYTES, uploadMiddleware(), UploadOptions (+28 more)

### Community 14 - "ref_vitest"
Cohesion: 0.15
Nodes (22): GENDER_VALUES, useFamilyGroups(), Props, useFilterSearchParams(), FamilyGroupRef, familyIdToSlug(), familySlug, familyTokenToId() (+14 more)

### Community 15 - "src/index.ts"
Cohesion: 0.07
Nodes (49): express, express-rate-limit, authSecret(), isDemoMode(), isProduction(), SESSION_COOKIE, SESSION_TTL_MS, SIGN_IN_COOKIE (+41 more)

### Community 16 - "clientInstance.ts"
Cohesion: 0.11
Nodes (14): deleteQuestionSessions(), adapter, prisma, router, router, level, [ref, levelArg], ADMINS_BY_EMAIL (+6 more)

### Community 17 - "scripts"
Cohesion: 0.12
Nodes (17): scripts, auth:grant, auth:import-emails, auth:preview-email, auth:report-duplicate-contacts, auth:seed-grants, auth:seed-questions, build (+9 more)

### Community 18 - "TeamFrame"
Cohesion: 0.11
Nodes (26): Props, Props, Props, Props, TeamFramesLayer(), MembersTreeScene(), Props, Props (+18 more)

### Community 19 - "useTreeLayout.ts"
Cohesion: 0.12
Nodes (20): DEFAULT_NODE_HEIGHT, DEFAULT_NODE_WIDTH, DEFAULT_POSITION, FLOW_VIEWPORT_DIRECTION, MembersState, ChildrenMap, MembersMap, FlowViewportDirection (+12 more)

### Community 20 - "challenges.ts"
Cohesion: 0.11
Nodes (24): answerMatches(), CYRILLIC_TO_LATIN, normalizeAnswer(), ChallengeState, isExpired(), isSolved(), pickRandom(), swapQuestion() (+16 more)

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "layout.tsx"
Cohesion: 0.18
Nodes (5): metadata, nunito, RootLayout(), detectLocale(), isLocale()

### Community 23 - "useT.ts"
Cohesion: 0.10
Nodes (32): @heroicons/react, next, tailwind-merge, GLOW, Props, Props, AvatarFileInput(), removeBadgeClasses() (+24 more)

### Community 24 - "teamService.ts"
Cohesion: 0.13
Nodes (28): ResolvedPosition, resolvePosition(), MemberTransaction, assertCanEditMembers(), deleteMember(), deriveTeamName(), resolveRole(), resolveTeam() (+20 more)

### Community 25 - "AccentColor"
Cohesion: 0.06
Nodes (39): Props, Props, Props, Props, Props, Props, Props, Props (+31 more)

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

### Community 31 - "ref_vitest"
Cohesion: 0.17
Nodes (10): ACTIVITY_STATES, DATE_PICKER_CLASSES, EMPTY_FILTER_STATE, JOIN_SEASONS, MEMBER_STATUSES, initialFiltersState, FILTER_CATEGORY_KEYS, isCategoryActive() (+2 more)

### Community 32 - "TeamLogo.tsx"
Cohesion: 0.13
Nodes (21): cache, loadImageAspect(), PhotoOpenButton(), Props, useIsPhotoOpen(), AvatarSkeleton(), MemberAvatarImage(), MemberAvatarImageInner() (+13 more)

### Community 33 - "filterMembers.ts"
Cohesion: 0.13
Nodes (27): birthdayBoundKey(), countActiveFilters(), countActiveMemberFilters(), isIdListSet(), isListFilterSet(), matchesBirthday(), matchesFamilyGroup(), matchesGender() (+19 more)

### Community 34 - "inputs/index.ts"
Cohesion: 0.14
Nodes (22): FormField(), Props, GenderFormField(), MemberBasicsSection(), MemberContactsSection(), Props, SocialMediaFormFields(), Props (+14 more)

### Community 35 - "Common Mistakes"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, Constructor options, [CRITICAL] Using lineStyle instead of stroke, [CRITICAL] Using old shape method names, [CRITICAL] Using v7 beginFill/drawRect/endFill, [HIGH] Clearing and redrawing Graphics every frame, [HIGH] Destroying a shared GraphicsContext unexpectedly (+4 more)

### Community 36 - "package.json"
Cohesion: 0.09
Nodes (21): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+13 more)

### Community 37 - "MemberInfoActions.tsx"
Cohesion: 0.19
Nodes (13): Props, FacebookIcon(), FacebookGlyph(), InstagramGlyph(), LinkedinGlyph(), svgProps, TelegramGlyph(), InstagramIcon() (+5 more)

### Community 38 - "MemberSearch.tsx"
Cohesion: 0.13
Nodes (30): compare(), getSearchable(), MemberSearch(), Props, SearchBar(), SearchPanel(), Props, SearchSuggestionItem() (+22 more)

### Community 39 - "utils/membersTree/index.ts"
Cohesion: 0.09
Nodes (42): EdgesLayer(), drawLerped(), drawPolyline(), TeamEdgesLayer(), NODE_AVATAR_RADIUS, Point, SegmentData, TeamEdge (+34 more)

### Community 40 - "Core Patterns"
Cohesion: 0.12
Nodes (20): Adding and removing children, API Reference, Bounds and coordinate conversion, Common Mistakes, Core Patterns, [CRITICAL] Adding children to leaf scene objects, Destroy, Finding and removing from parent (+12 more)

### Community 41 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+5 more)

### Community 42 - "locale.ts"
Cohesion: 0.23
Nodes (13): SHORT_LABELS, writeLocaleCookie(), Locale, LOCALE_COOKIE, LOCALES, LocaleProvider(), DEFAULT_SETTINGS, LocaleState (+5 more)

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
Nodes (40): @pixi/react, PixiElements, @pixi/react, MemberNodeAvatar(), TeamBadge(), FILL_ALPHA, lerp(), Props (+32 more)

### Community 47 - "FitViewButton.tsx"
Cohesion: 0.22
Nodes (13): FiltersHeader(), Props, Props, PanelCloseButton(), Props, STYLES, PanelResetButton(), Props (+5 more)

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "SuggestionsTab.tsx"
Cohesion: 0.13
Nodes (28): approveSuggestion(), fetchSuggestionCount(), fetchSuggestions(), parse(), rejectSuggestion(), SuggestionDto, AccessTab(), CollapseOut() (+20 more)

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
Cohesion: 0.26
Nodes (10): EmailIdentity, normalizeEmail(), resolveEmailIdentity(), loadEmailIdentity(), prismaCodeStore, decideGoogleSignIn(), GoogleClaims, GoogleDecision (+2 more)

### Community 54 - "familyTreeRoutes.ts"
Cohesion: 0.19
Nodes (12): toMemberResponse(), loadFamilyTree, loadReducedFamilyTree, router, MEMBER_INCLUDE, serializeMember(), bumpDataVersion(), createVersionedCache() (+4 more)

### Community 57 - "SettingsPanel.tsx"
Cohesion: 0.20
Nodes (11): FamilyTreeIcon(), Props, edgeIcon(), edgeStyleOptions(), iconClass, orientationOptions(), themeOptions(), treeModeOptions() (+3 more)

### Community 58 - "useTeamForm.ts"
Cohesion: 0.20
Nodes (21): createTeam(), deleteTeam(), fetchTeamDetails(), parse(), setTeamMembers(), TeamMemberPayload, updateTeam(), buildTeamRequestBody() (+13 more)

### Community 59 - "Core Patterns"
Cohesion: 0.12
Nodes (17): Application destroy/recreate cycle, Batching optimization, cacheAsTexture for performance, Core Patterns, Culling, Filters and masks cost, Graphics performance, Low-level rendering optimizations (+9 more)

### Community 60 - "locale.ts"
Cohesion: 0.08
Nodes (28): Renderer selection at runtime, [MEDIUM] Using container.name instead of container.label, rejectUpload(), router, uploadTeamTypeIcon, booleanLike, isValidPeriod(), name() (+20 more)

### Community 61 - "src/types/index.ts"
Cohesion: 0.16
Nodes (15): react-dom, DropdownMenu(), Props, DropdownPortal(), Props, ComboboxInput(), Props, useComboboxState() (+7 more)

### Community 62 - "MembersTreeContent.tsx"
Cohesion: 0.07
Nodes (40): MembersTree(), Props, EVENT_FEATURES, MembersTreeContent(), Props, isTreeReady(), MembersTree, MembersTreeDynamic() (+32 more)

### Community 63 - "pixi.js"
Cohesion: 0.05
Nodes (53): pixi.js, BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props, acquireEmojiTextures(), createEmojiTexture(), generateRandomPosition() (+45 more)

### Community 64 - "memberService.ts"
Cohesion: 0.09
Nodes (36): zod, buildMemberFields(), buildMemberUpdateFields(), buildSharedFields(), buildSparseMemberFields(), parsePhoneNumbers(), parsePositionsPayload(), getPositionKey() (+28 more)

### Community 65 - "BEST Family Tree"
Cohesion: 0.10
Nodes (19): 1. Clone and configure environment, 2. Start the application, 3. Run database migrations, 4. Access the app, Architecture, Automated backups (GitHub Actions), Available Commands, Backend Commands (run inside container) (+11 more)

### Community 66 - "Diagnosing Bugs"
Cohesion: 0.13
Nodes (14): Completion criterion: a tight loop that goes red, Diagnosing Bugs, Minimise, Non-deterministic bugs, Phase 1: Build a feedback loop, Phase 2: Reproduce + minimise, Phase 3: Hypothesise, Phase 4: Instrument (+6 more)

### Community 67 - "useCardAnimation.ts"
Cohesion: 0.18
Nodes (19): clamp01(), deferCardHidden(), easeBackOut, easePower2In, easePower2Out, entries, Entry, finishCardReveal() (+11 more)

### Community 68 - "useCanvasTheme.ts"
Cohesion: 0.21
Nodes (10): FONT_FAMILY, NODE_SUBTITLE_STYLE, NODE_TITLE_STYLE, NODE_TOOLTIP_TEXT_STYLE, TEXT_RESOLUTION, buildCanvasColors(), CanvasTextStyleInstances, CanvasTextStyles (+2 more)

### Community 69 - "GroupedCheckListFilter.tsx"
Cohesion: 0.20
Nodes (13): byLabel(), CheckOption, Props, useStableOrder(), CheckRow(), Props, byName(), GroupedCheckListFilter() (+5 more)

### Community 70 - "backfillGender.ts"
Cohesion: 0.12
Nodes (15): alreadyDifferent, alreadySame, APPLY, args, duplicates, fileArg, Gender, GENDERS (+7 more)

### Community 71 - "Core Patterns"
Cohesion: 0.13
Nodes (14): API Reference, boundsArea optimization, Common Mistakes, Core Patterns, Culling, HIGH: Expecting automatic culling, HIGH: Using addChild on RenderLayer, MEDIUM: Expecting filters on ancestors to apply to layer children (+6 more)

### Community 72 - "Core Patterns"
Cohesion: 0.12
Nodes (15): Advanced shape primitives, Cloning, clearing, and bounds, Core Patterns, Default styles via setFillStyle / setStrokeStyle, Draw-time transforms, Drawing a texture directly, Gradients and patterns, GraphicsContext sharing (+7 more)

### Community 73 - "useTeamTypeForm.ts"
Cohesion: 0.22
Nodes (9): ApiError, buildTeamTypeFormData(), Callbacks, EMPTY_FORM, keepCount(), teamTypeTeamCount(), toFormData(), useTeamTypeForm() (+1 more)

### Community 74 - "useLocale"
Cohesion: 0.33
Nodes (11): MemberBestSection(), DateInput(), Errors, MemberSuggestFields(), SOCIALS, buildOptions(), getActivityOptions(), getStatusOptions() (+3 more)

### Community 75 - "constants/filters.ts"
Cohesion: 0.13
Nodes (20): ACTIVITY_ICONS, IconComponent, IconProps, greenPillIcon(), IconProps, PANES, Props, SELF_SCROLLING_PANES (+12 more)

### Community 76 - "BirthdayFilterSection.tsx"
Cohesion: 0.11
Nodes (25): date-fns, BirthdayFilterSection(), Props, ClearButton(), FilterCheckbox(), Props, Props, CheckGroup (+17 more)

### Community 77 - "constants/canvas/index.ts"
Cohesion: 0.07
Nodes (35): @gsap/react, pixi-viewport, Props, EMPTY_IDS, SharpAvatarTracker(), View, Props, AVATAR_HIGH_RES_SIZE (+27 more)

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
Cohesion: 0.06
Nodes (51): AccessLevel, AuthMethod, Challenge, ChallengeQuestion, logout(), post(), RequestCodeOutcome, requestEmailCode() (+43 more)

### Community 82 - "telegramEligibility.ts"
Cohesion: 0.32
Nodes (8): EligibilityMember, MemberMatch, resolveMemberMatch(), phoneKey(), resolveTelegramIdentity(), TelegramIdentity, loadTelegramIdentity(), TelegramClaims

### Community 83 - "Core Patterns"
Cohesion: 0.15
Nodes (13): Context and device loss, Core Patterns, Destroying a renderer, Direct renderer construction, Lazy-loading backend-specific systems and pipes, Manual rendering, Per-renderer options, Preference forms (+5 more)

### Community 84 - "Constructor options (Container-inherited)"
Cohesion: 0.11
Nodes (19): Constructor options, Container events, Advanced options and aliases, Before / after, Callbacks, Constructor options (Container-inherited), Display, Effects (+11 more)

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
Cohesion: 0.24
Nodes (8): displayFamilyName(), romanizeCached(), MAP, ROMAN, ROMAN_INITIAL, ROMAN_INNER, romanize(), transliterate()

### Community 89 - "Foundations"
Cohesion: 0.13
Nodes (14): Advanced, Foundations, pixijs-application, pixijs-core-concepts, pixijs-events, pixijs-performance, pixijs-scene-container, pixijs-scene-core-concepts (+6 more)

### Community 90 - "TeamTypeFormContent.tsx"
Cohesion: 0.16
Nodes (19): ClearButton(), Props, Props, SubmitButton(), ConfirmDeleteControl(), Props, FormFooter(), FormMessages() (+11 more)

### Community 91 - "Sidebar.tsx"
Cohesion: 0.12
Nodes (17): react, Props, Sidebar(), Props, SidebarBehindCover(), Props, SidebarCoverTint(), Props (+9 more)

### Community 92 - "Core Patterns"
Cohesion: 0.29
Nodes (7): Core Patterns, Frame rate capping, Manual rendering, Per-object update via `onRender`, Priority order, Stop and start, Time units

### Community 93 - "opengraph-image.tsx"
Cohesion: 0.15
Nodes (11): alt, contentType, OpengraphImage(), read(), size, COPY, EmailLocale, escapeHtml() (+3 more)

### Community 94 - "EdgeStyle"
Cohesion: 0.60
Nodes (5): SettingsActions, SettingsState, EdgeStyle, OrientationSetting, ThemePreference

### Community 98 - "Common Mistakes"
Cohesion: 0.50
Nodes (4): Common Mistakes, [HIGH] Accessing app.renderer before init() resolves, [HIGH] Setting DOMAdapter after Application.init, [MEDIUM] Treating `preference` as a guarantee

### Community 99 - "gsap"
Cohesion: 0.12
Nodes (30): gsap, Viewport(), ViewportCulling(), NODE_HOVER_ANIMATION_DURATION, NODE_HOVER_SCALE, ZOOMED_OUT_HOVER_SCALE_MAP, NODE_HEIGHT, getFitViewTargetScale() (+22 more)

### Community 100 - "MemberSidebar.tsx"
Cohesion: 0.11
Nodes (33): zustand, fetchSession(), SessionInfo, MemberSidebar(), Props, Props, TeamInfoSidebar(), DemoBadge() (+25 more)

### Community 102 - "Render Loop"
Cohesion: 0.22
Nodes (8): API Reference, Common Mistakes, [CRITICAL] Treating the ticker callback arg as a number, Frame lifecycle, [HIGH] Using `updateTransform` for per-frame logic, [MEDIUM] Assuming ticker callbacks run after render, Quick Start, Render Loop

### Community 103 - "pixijs-core-concepts/SKILL.md"
Cohesion: 0.22
Nodes (8): API Reference, Decision guide, Environments, Quick concepts, Quick Start, Renderer = systems + pipes, The render loop, Topics

### Community 104 - "TeamInfo.tsx"
Cohesion: 0.15
Nodes (18): InfoSection(), MemberActivityPill(), MemberFactTile(), Props, MemberPositions(), Props, PositionBadge(), Props (+10 more)

### Community 106 - "oidc.ts"
Cohesion: 0.17
Nodes (17): openid-client, callbackErrorRedirect(), configs, cookieOptions(), finishLogin(), getProviderConfig(), isProviderEnabled(), OidcProvider (+9 more)

### Community 107 - "EditMemberForm.tsx"
Cohesion: 0.09
Nodes (40): AddMemberForm(), buildMemberFormData(), describeSubmitError(), EditMemberForm(), buildEditPayload(), Props, Props, Props (+32 more)

### Community 108 - "useProgressiveIds.ts"
Cohesion: 0.31
Nodes (5): NodesLayer(), Props, nextAdmittedIds(), PROGRESSIVE_CHUNK_SIZE, useProgressiveIds()

### Community 109 - "PhotoViewer.tsx"
Cohesion: 0.08
Nodes (37): thumbRadius(), Viewer(), viewportRect(), BUTTON, GLASS, HeaderProps, ToolbarProps, ViewerHeader() (+29 more)

### Community 110 - "migrateMembersFromMongodb.ts"
Cohesion: 0.07
Nodes (31): mongodb, ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember, STATUSES_MAP (+23 more)

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

### Community 113 - "filtersStore.ts"
Cohesion: 0.12
Nodes (24): CATEGORY_ICONS, FilterCategoryRail(), Props, FiltersFooter(), Props, FiltersPanel(), Props, FilterCategoryPane() (+16 more)

### Community 114 - "MemberSuggestForm.tsx"
Cohesion: 0.11
Nodes (39): fetchMyMemberSuggestions(), fetchMyTeamSuggestions(), PendingSuggestion, photoBody(), postChanges(), removeMyPhoto(), send(), SuggestionChange (+31 more)

### Community 115 - "AccountPanel.tsx"
Cohesion: 0.13
Nodes (25): refreshProfile(), LionIcon(), AccountPanel(), Props, AccountRoles(), byLatestYears(), lastYear(), Props (+17 more)

### Community 116 - "pixijs-scene-core-concepts/SKILL.md"
Cohesion: 0.08
Nodes (23): API Reference, Common Mistakes, Container vs leaf (CRITICAL), Core Concepts, [CRITICAL] Adding children to a leaf display object, [CRITICAL] Referencing DisplayObject, Culling, Destroy semantics (+15 more)

### Community 120 - "uk/filters.ts"
Cohesion: 0.33
Nodes (5): familyForms, filters, memberForms, roleForms, teamForms

### Community 121 - "piiCheck.ts"
Cohesion: 0.38
Nodes (8): DemoValues, findLeaks(), lowerSet(), norm(), normalizeSocial(), RealValues, clean, real

### Community 123 - "Common Mistakes"
Cohesion: 0.10
Nodes (19): API Reference, Common Mistakes, [CRITICAL] App destroy without releaseGlobalResources, [HIGH] Destroying and recreating objects instead of recycling, [HIGH] Interleaving object types in scene graph, [HIGH] Loading many individual textures instead of spritesheets, [HIGH] Updating Text or HTMLText every frame, [HIGH] Using complex Graphics instead of textures (+11 more)

### Community 124 - "importAllowedEmails.ts"
Cohesion: 0.19
Nodes (12): AllowedRow, AllowlistDiff, diffAllowlist(), looksLikeEmail(), parseAllowlistCsv(), ParsedAllowlist, splitLine(), apply (+4 more)

### Community 125 - "http"
Cohesion: 0.11
Nodes (36): AccessGrant, fetchGrants(), GrantLevel, parse(), removeGrant(), setGrant(), addMember(), errorMessage() (+28 more)

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

### Community 139 - "ref_vitest"
Cohesion: 0.08
Nodes (27): Props, Props, Props, MEMBER_STATUSES, MENTOR_STATUSES, ActivityState, Active, Excluded (+19 more)

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
Cohesion: 0.11
Nodes (21): BEST Family Tree, Contributions, Language, People, Sign-in, Teams, Views, fetchTeams() (+13 more)

### Community 148 - "PositionFormFields.tsx"
Cohesion: 0.09
Nodes (42): FieldError(), Props, PositionAssignmentFields(), Props, PositionFormFields(), Props, createEmptyPositionRow(), EMPTY_POSITION_ROW (+34 more)

## Knowledge Gaps
- **45 isolated node(s):** `@prisma/client`, `dotenv`, `lodash`, `pixi-filters`, `@tailwindcss/postcss` (+40 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1088 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `filters()` connect `Constructor options (Container-inherited)` to `filterMembers.ts`, `Common Mistakes`, `ref_vitest`?**
  _High betweenness centrality (0.101) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _45 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `uk/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.08108108108108109 - nodes in this community are weakly interconnected._
- **Why does `react` connect `Sidebar.tsx` to `react`, `src/utils/index.ts`, `ThemeContext.tsx`, `useDashedPathAnimation.ts`, `bakeParams.ts`, `teamFrame.ts`, `ref_vitest`, `TeamFrame`, `useMeta.ts`, `PositionFormFields.tsx`, `useT.ts`, `AccentColor`, `TeamLogo.tsx`, `inputs/index.ts`, `package.json`, `MemberSearch.tsx`, `utils/membersTree/index.ts`, `locale.ts`, `TeamFrame`, `FitViewButton.tsx`, `SuggestionsTab.tsx`, `useTeamForm.ts`, `src/types/index.ts`, `MembersTreeContent.tsx`, `pixi.js`, `useCardAnimation.ts`, `useCanvasTheme.ts`, `GroupedCheckListFilter.tsx`, `useTeamTypeForm.ts`, `useLocale`, `constants/filters.ts`, `BirthdayFilterSection.tsx`, `constants/canvas/index.ts`, `api/auth.ts`, `TeamTypeFormContent.tsx`, `gsap`, `MemberSidebar.tsx`, `TeamInfo.tsx`, `EditMemberForm.tsx`, `useProgressiveIds.ts`, `PhotoViewer.tsx`, `filtersStore.ts`, `MemberSuggestForm.tsx`, `AccountPanel.tsx`, `http`?**
  _High betweenness centrality (0.087) - this node is a cross-community bridge._
- **Should `react` be split into smaller, more focused modules?**
  _Cohesion score 0.14564564564564564 - nodes in this community are weakly interconnected._
- **Why does `Constructor options` connect `Common Mistakes` to `Constructor options (Container-inherited)`?**
  _High betweenness centrality (0.083) - this node is a cross-community bridge._
- **Should `src/utils/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.1337126600284495 - nodes in this community are weakly interconnected._