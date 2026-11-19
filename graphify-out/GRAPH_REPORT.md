# Graph Report - best-family-tree  (2026-11-19)

## Corpus Check
- 743 files · ~224,255 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 33 file(s) not represented in the graph (top: .prisma 10, (none) 7, .css 7)

## Summary
- 3429 nodes · 10240 edges · 149 communities (137 shown, 12 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 100 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `0f11b84f`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- uk/index.ts
- react
- MemberPane.tsx
- server/package.json
- ThemeContext.tsx
- profileRoutes.ts
- bakeParams.ts
- suggestionCreate.ts
- suggestionCreate.ts
- teamLayout.ts
- teamFrame.ts
- AccountRoles.tsx
- anonymizeDemo.ts
- src/index.ts
- ref_vitest
- sessions.ts
- Member
- scripts
- TeamFrame
- oidc.ts
- challenges.ts
- HTML Report Format
- layout.tsx
- src/types/index.ts
- teamService.ts
- MemberSuggestFields.tsx
- compilerOptions
- compilerOptions
- Core Patterns
- dependencies
- dependencies
- TeamSearch.tsx
- TeamLogo.tsx
- filterMembers.ts
- AccessTab.tsx
- Common Mistakes
- package.json
- MemberSuggestFields.tsx
- MemberSearch.tsx
- Direction
- Core Patterns
- devDependencies
- locale.ts
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
- ApplicationOptions reference
- familyTreeRoutes.ts
- next.config.mjs
- postcss.config.mjs
- FitViewButton.tsx
- useTeamForm.ts
- Core Patterns
- locale.ts
- ref_vitest
- hooks/index.ts
- constants/canvas/index.ts
- memberService.ts
- BEST Family Tree
- Diagnosing Bugs
- useCardAnimation.ts
- useMeta.ts
- useTreeDirection.ts
- backfillGender.ts
- Core Patterns
- Core Patterns
- searchShortcut.ts
- emailRoutes.ts
- constants/filters.ts
- BirthdayFilterSection.tsx
- useTapWithoutDrag.ts
- Core Patterns
- Core Patterns
- Core Patterns
- api/auth.ts
- displayName.ts
- Core Patterns
- Constructor options (Container-inherited)
- Test-Driven Development
- GSAP Core
- Core Patterns
- MemberNode.tsx
- Foundations
- useTeamTypeForm.ts
- Sidebar.tsx
- server/src/utils/index.ts
- Transforms and Coordinate Spaces
- pixijs/SKILL.md
- backup-prod.sh
- start-prod.sh
- restore-local.sh
- PanelResetButton.tsx
- src/utils/index.ts
- MemberSidebar.tsx
- Core Patterns
- Render Loop
- pixijs-core-concepts/SKILL.md
- useLocale
- Common Mistakes
- telegramEligibility.ts
- EditMemberForm.tsx
- FilterState
- PhotoViewer.tsx
- migrateMembersFromMongodb.ts
- MaskIcon.tsx
- Renderers: WebGPU, WebGL, and Canvas
- Toolbar.tsx
- MemberSuggestForm.tsx
- AccountRoles.tsx
- pixijs-scene-core-concepts/SKILL.md
- BEST Family Tree
- MemberSidebarContent.tsx
- proxy.ts
- uk/filters.ts
- piiCheck.ts
- DropdownPortal.tsx
- Common Mistakes
- importAllowedEmails.ts
- http
- plural.ts
- PhotoOpenButton.tsx
- devDependencies
- GSAP with React
- emailCodes.ts
- hitl-loop.template.sh
- fakeIdentity.ts
- questionRoutes.ts
- en/errors.ts
- GSAP Performance
- GSAP Timeline
- MemberStatus
- uk/errors.ts
- ref_vitest
- contactKeys.ts
- addToCalendar.ts
- checkConfig.ts
- useRoleForm.ts
- @prisma/config
- TeamFormContent.tsx

## God Nodes (most connected - your core abstractions)
1. `useT()` - 214 edges
2. `AccentColor` - 188 edges
3. `react` - 170 edges
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

## Communities (149 total, 12 thin omitted)

### Community 0 - "uk/index.ts"
Cohesion: 0.08
Nodes (19): access, account, auth, common, formCommon, manage, memberForm, memberInfo (+11 more)

### Community 1 - "react"
Cohesion: 0.11
Nodes (36): fetchSuggestionCount(), CATEGORY_ICONS, FilterCategoryRail(), RoleForm(), TeamForm(), Props, TeamTypeForm(), TeamTypeMark() (+28 more)

### Community 2 - "MemberPane.tsx"
Cohesion: 0.12
Nodes (24): ACTIVITY_ICONS, IconComponent, IconProps, greenPillIcon(), IconProps, DatesPane(), SEASON_ICONS, PANES (+16 more)

### Community 3 - "server/package.json"
Cohesion: 0.07
Nodes (27): cloudinary, compression, concurrently, cors, helmet, multer-storage-cloudinary, nodemon, @prisma/adapter-pg (+19 more)

### Community 4 - "ThemeContext.tsx"
Cohesion: 0.11
Nodes (22): FONT_FAMILY, NODE_SUBTITLE_STYLE, NODE_TITLE_STYLE, NODE_TOOLTIP_TEXT_STYLE, TEXT_RESOLUTION, applyCssTokens(), ThemeContext, ThemeContextValue (+14 more)

### Community 5 - "profileRoutes.ts"
Cohesion: 0.24
Nodes (11): deleteCloudinaryImage(), deleteReplacedImage(), discardUpload(), extractCloudinaryPublicId(), holdsPositionIn(), ownPhoto, router, selfServeGuard() (+3 more)

### Community 6 - "bakeParams.ts"
Cohesion: 0.21
Nodes (17): AuroraBackground(), readNumber(), useBakedAurora(), AuroraBakeInput, bakeAuroraLayers(), canBakeAurora(), BAKE_SCALE, BLUR_SPREAD (+9 more)

### Community 7 - "suggestionCreate.ts"
Cohesion: 0.10
Nodes (32): canManageGrant(), canSelfServe(), canSuggest(), hasAccess(), isOwnGrant(), RANK, CONTACT_FIELDS, AccessRank (+24 more)

### Community 8 - "suggestionCreate.ts"
Cohesion: 0.08
Nodes (42): canEditMember(), applyPhone(), Suggestion, listPending(), alreadyReviewed(), applyApproval(), applyTeamField(), approveSuggestion() (+34 more)

### Community 9 - "teamLayout.ts"
Cohesion: 0.08
Nodes (37): elkjs, TEAM_FRAME_GAP, TEAM_PACK_ASPECT, failOver(), getWorker(), Pending, requestLayout(), runInline() (+29 more)

### Community 10 - "teamFrame.ts"
Cohesion: 0.10
Nodes (31): TEAM_COLUMN_GAP, TEAM_EDGE_DROP, TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_SPREAD_WIDTH, TEAM_EDGE_STUB, TEAM_FRAME_HEADER, TEAM_FRAME_MIN_WIDTH, TEAM_FRAME_PADDING (+23 more)

### Community 11 - "AccountRoles.tsx"
Cohesion: 0.26
Nodes (9): FlowerIcon(), Props, MapleLeafIcon(), Props, Placement, PLACEMENTS, Props, SeasonMotif() (+1 more)

### Community 12 - "anonymizeDemo.ts"
Cohesion: 0.14
Nodes (11): allowed, args, byId, factory, GROUP_NAMES, memberPhotos, nextFace, real (+3 more)

### Community 13 - "src/index.ts"
Cohesion: 0.07
Nodes (39): express, adapter, prisma, app, checkOrigin(), requireAccess(), requireEditorForWrites(), requireSession() (+31 more)

### Community 14 - "ref_vitest"
Cohesion: 0.11
Nodes (25): GENDER_ICONS, IconProps, GENDER_VALUES, Gender, Female, Male, FamilyGroupRef, familyIdToSlug() (+17 more)

### Community 15 - "sessions.ts"
Cohesion: 0.15
Nodes (18): isProduction(), SESSION_COOKIE, SESSION_TTL_MS, SIGN_IN_COOKIE, useSecureCookie(), clearSessionCookie(), deleteSession(), findSession() (+10 more)

### Community 16 - "Member"
Cohesion: 0.05
Nodes (55): Cloning, clearing, and bounds, NodesLayer(), Props, Props, Props, Props, Props, Props (+47 more)

### Community 17 - "scripts"
Cohesion: 0.12
Nodes (17): scripts, auth:grant, auth:import-emails, auth:preview-email, auth:report-duplicate-contacts, auth:seed-grants, auth:seed-questions, build (+9 more)

### Community 18 - "TeamFrame"
Cohesion: 0.10
Nodes (26): Props, Props, Props, Props, TeamFramesLayer(), Props, TeamOverviewLayer(), MembersTreeScene() (+18 more)

### Community 19 - "oidc.ts"
Cohesion: 0.16
Nodes (17): Container events, Transform, Lifecycle events, Origin (new in v8), openid-client, configs, cookieOptions(), finishLogin() (+9 more)

### Community 20 - "challenges.ts"
Cohesion: 0.12
Nodes (25): answerMatches(), CYRILLIC_TO_LATIN, normalizeAnswer(), ChallengeState, isExpired(), isSolved(), pickRandom(), swapQuestion() (+17 more)

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "layout.tsx"
Cohesion: 0.11
Nodes (11): metadata, nunito, RootLayout(), darkTheme, DEFAULT_THEME, lightTheme, THEMES, detectLocale() (+3 more)

### Community 23 - "src/types/index.ts"
Cohesion: 0.05
Nodes (87): @heroicons/react, react, tailwind-merge, GLOW, Props, Props, SearchPanel(), Props (+79 more)

### Community 24 - "teamService.ts"
Cohesion: 0.08
Nodes (41): multer, MAX_UPLOAD_BYTES, uploadMiddleware(), UploadOptions, adminGrantLocked(), ownGrantError(), getPositionKey(), ResolvedPosition (+33 more)

### Community 25 - "MemberSuggestFields.tsx"
Cohesion: 0.18
Nodes (14): Props, FacebookIcon(), FacebookGlyph(), InstagramGlyph(), LinkedinGlyph(), svgProps, TelegramGlyph(), InstagramIcon() (+6 more)

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

### Community 31 - "TeamSearch.tsx"
Cohesion: 0.26
Nodes (11): Props, HighlightedTitle(), Props, SearchSuggestionRow(), SuggestionRowProps, compare(), getSearchable(), Props (+3 more)

### Community 32 - "TeamLogo.tsx"
Cohesion: 0.16
Nodes (15): next, Props, TeamTile(), Props, AvatarSkeleton(), MemberAvatarImageInner(), Props, SkeletonProps (+7 more)

### Community 33 - "filterMembers.ts"
Cohesion: 0.12
Nodes (31): Constructor options, Effects, birthdayBoundKey(), countActiveFilters(), countActiveMemberFilters(), isFilterActive(), isIdListSet(), isListFilterSet() (+23 more)

### Community 34 - "AccessTab.tsx"
Cohesion: 0.30
Nodes (11): AccessGrant, fetchGrants(), GrantLevel, parse(), removeGrant(), setGrant(), AccessRow(), AccessTab() (+3 more)

### Community 35 - "Common Mistakes"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, Constructor options, [CRITICAL] Using lineStyle instead of stroke, [CRITICAL] Using old shape method names, [CRITICAL] Using v7 beginFill/drawRect/endFill, [HIGH] Clearing and redrawing Graphics every frame, [HIGH] Destroying a shared GraphicsContext unexpectedly (+4 more)

### Community 36 - "package.json"
Cohesion: 0.09
Nodes (21): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+13 more)

### Community 37 - "MemberSuggestFields.tsx"
Cohesion: 0.09
Nodes (39): FormField(), Props, GenderFormField(), MemberBasicsSection(), Props, MemberBestSection(), Props, MemberContactsSection() (+31 more)

### Community 38 - "MemberSearch.tsx"
Cohesion: 0.28
Nodes (13): compare(), getSearchable(), Props, getMatchRanges(), matchesQuery(), queryParts(), rankMatch(), searchableName() (+5 more)

### Community 39 - "Direction"
Cohesion: 0.06
Nodes (65): EdgesLayer(), LineageEdge(), drawLerped(), drawPolyline(), TeamEdgesLayer(), FIXED_EDGE_WIDTH, NODE_AVATAR_RADIUS, NODE_HEIGHT (+57 more)

### Community 40 - "Core Patterns"
Cohesion: 0.12
Nodes (20): Adding and removing children, API Reference, Bounds and coordinate conversion, Common Mistakes, Core Patterns, [CRITICAL] Adding children to leaf scene objects, Destroy, Finding and removing from parent (+12 more)

### Community 41 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+5 more)

### Community 42 - "locale.ts"
Cohesion: 0.19
Nodes (17): SHORT_LABELS, writeLocaleCookie(), Locale, LOCALE_COOKIE, LOCALES, LocaleProvider(), DEFAULT_SETTINGS, LocaleState (+9 more)

### Community 43 - "Core Patterns"
Cohesion: 0.22
Nodes (9): Coordinate conversion, Core Patterns, Cumulative alpha (getGlobalAlpha), Global, local, and screen coordinates, Pivot, Position, scale, rotation, Sizing via width, height, setSize, Skew (+1 more)

### Community 44 - "CLAUDE.md"
Cohesion: 0.22
Nodes (8): Commands, Conventions, Delegating to subagents, Deployment & data, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout

### Community 45 - "Core Patterns"
Cohesion: 0.12
Nodes (15): Add, remove, swap, API Reference, Child queries, Common Mistakes, Container Hierarchy, Core Patterns, [CRITICAL] Adding children to a leaf, Destroying sub-trees (+7 more)

### Community 46 - "TeamFrame"
Cohesion: 0.06
Nodes (63): @gsap/react, pixi.js, @pixi/react, MemberNodeAvatar(), Props, MemberNodeMinimizedTooltip(), Props, Props (+55 more)

### Community 47 - "SettingsPanel.tsx"
Cohesion: 0.23
Nodes (12): FamilyTreeIcon(), Props, edgeIcon(), edgeStyleOptions(), iconClass, orientationOptions(), themeOptions(), treeModeOptions() (+4 more)

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "SuggestionsTab.tsx"
Cohesion: 0.15
Nodes (23): approveSuggestion(), fetchSuggestions(), parse(), rejectSuggestion(), SuggestionDto, CollapseOut(), Props, Props (+15 more)

### Community 50 - "en/index.ts"
Cohesion: 0.11
Nodes (23): access, account, auth, common, filters, formCommon, en, manage (+15 more)

### Community 51 - "AGENTS.md"
Cohesion: 0.25
Nodes (7): Commands, Conventions, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout, This is NOT the Next.js you know

### Community 52 - "scripts"
Cohesion: 0.20
Nodes (10): scripts, build, db:backup-prod, db:restore-local, dev, dev:webpack, lint, start (+2 more)

### Community 53 - "ApplicationOptions reference"
Cohesion: 0.12
Nodes (17): Accessibility, ApplicationOptions reference, Background, Culler (CullerPluginOptions), Deprecated (GC — prefer the unified options above), Events, Garbage collection, Graphics (+9 more)

### Community 54 - "familyTreeRoutes.ts"
Cohesion: 0.26
Nodes (8): toMemberResponse(), loadFamilyTree, loadReducedFamilyTree, router, bumpDataVersion(), createVersionedCache(), trackWrites(), MemberWithPhoneNumberRecords

### Community 57 - "FitViewButton.tsx"
Cohesion: 0.20
Nodes (14): byLabel(), CheckListFilter(), CheckOption, Props, useStableOrder(), CheckRow(), Props, byName() (+6 more)

### Community 58 - "useTeamForm.ts"
Cohesion: 0.16
Nodes (25): createTeam(), deleteTeam(), fetchTeamDetails(), parse(), setTeamMembers(), TeamMemberPayload, updateTeam(), Props (+17 more)

### Community 59 - "Core Patterns"
Cohesion: 0.12
Nodes (17): Application destroy/recreate cycle, Batching optimization, cacheAsTexture for performance, Core Patterns, Culling, Filters and masks cost, Graphics performance, Low-level rendering optimizations (+9 more)

### Community 60 - "locale.ts"
Cohesion: 0.10
Nodes (23): Renderer selection at runtime, [MEDIUM] Using container.name instead of container.label, booleanLike, isValidPeriod(), name(), optional(), optionalName(), PERIOD_ERROR (+15 more)

### Community 61 - "ref_vitest"
Cohesion: 0.24
Nodes (3): useDropdown(), filterOptionsByQuery(), options

### Community 62 - "hooks/index.ts"
Cohesion: 0.13
Nodes (23): MembersTree(), Props, EVENT_FEATURES, MembersTreeContent(), ViewportCulling(), membersActions, {
  setMembers,
  reloadMembers,
  addMember,
  updateMember,
  selectMember,
  getMentorsList,
}, useMembersActions() (+15 more)

### Community 63 - "constants/canvas/index.ts"
Cohesion: 0.10
Nodes (30): contexts, getCardBackgroundContext(), getGlowTexture(), GLOW_BLUR, GLOW_PADDING, GlowKind, paint(), SIZES (+22 more)

### Community 64 - "memberService.ts"
Cohesion: 0.08
Nodes (43): zod, guardMemberEdit(), buildMemberFields(), buildMemberUpdateFields(), buildSharedFields(), buildSparseMemberFields(), parsePhoneNumbers(), parsePositionsPayload() (+35 more)

### Community 65 - "BEST Family Tree"
Cohesion: 0.10
Nodes (19): 1. Clone and configure environment, 2. Start the application, 3. Run database migrations, 4. Access the app, Architecture, Automated backups (GitHub Actions), Available Commands, Backend Commands (run inside container) (+11 more)

### Community 66 - "Diagnosing Bugs"
Cohesion: 0.13
Nodes (14): Completion criterion: a tight loop that goes red, Diagnosing Bugs, Minimise, Non-deterministic bugs, Phase 1: Build a feedback loop, Phase 2: Reproduce + minimise, Phase 3: Hypothesise, Phase 4: Instrument (+6 more)

### Community 67 - "useCardAnimation.ts"
Cohesion: 0.14
Nodes (23): CARD_PIVOT, Props, clamp01(), deferCardHidden(), easeBackOut, easePower2In, easePower2Out, entries (+15 more)

### Community 68 - "useMeta.ts"
Cohesion: 0.20
Nodes (8): fetchTeams(), EMPTY, loadFamilyGroups(), useFamilyGroups(), EMPTY, rolesStore, teamsStore, teamTypesStore

### Community 69 - "useTreeDirection.ts"
Cohesion: 0.27
Nodes (5): useIsMobileScreen(), useResolvedDirection(), Options, Position, useMediaQuery()

### Community 70 - "backfillGender.ts"
Cohesion: 0.08
Nodes (21): alt, contentType, OpengraphImage(), read(), size, alreadyDifferent, alreadySame, APPLY (+13 more)

### Community 71 - "Core Patterns"
Cohesion: 0.13
Nodes (14): API Reference, boundsArea optimization, Common Mistakes, Core Patterns, Culling, HIGH: Expecting automatic culling, HIGH: Using addChild on RenderLayer, MEDIUM: Expecting filters on ancestors to apply to layer children (+6 more)

### Community 72 - "Core Patterns"
Cohesion: 0.14
Nodes (13): Advanced shape primitives, Core Patterns, Default styles via setFillStyle / setStrokeStyle, Draw-time transforms, Drawing a texture directly, Gradients and patterns, GraphicsContext sharing, GraphicsContext utilities (+5 more)

### Community 73 - "searchShortcut.ts"
Cohesion: 0.33
Nodes (6): EDITABLE_TAGS, isEditableTarget(), isSearchShortcut(), ShortcutKeys, Keys, useSearchShortcut()

### Community 74 - "emailRoutes.ts"
Cohesion: 0.13
Nodes (18): authSecret(), isDemoMode(), CodeOwner, prismaCodeStore, COPY, EmailLocale, escapeHtml(), pairs() (+10 more)

### Community 75 - "constants/filters.ts"
Cohesion: 0.23
Nodes (10): ACTIVITY_STATES, DATE_PICKER_CLASSES, EMPTY_FILTER_STATE, JOIN_SEASONS, MEMBER_STATUSES, initialFiltersState, FILTER_CATEGORY_KEYS, isCategoryActive() (+2 more)

### Community 76 - "BirthdayFilterSection.tsx"
Cohesion: 0.14
Nodes (20): date-fns, BirthdayFilterSection(), Props, ClearButton(), FilterCheckbox(), Props, Props, Props (+12 more)

### Community 77 - "useTapWithoutDrag.ts"
Cohesion: 0.35
Nodes (7): ACCIDENTAL_DRAG_MAX_DISTANCE, ACCIDENTAL_DRAG_MAX_MS, LONG_PRESS_MS, TAP_MOVE_TOLERANCE, PressStart, useTapWithoutDrag(), isTapGesture()

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
Nodes (49): AccessLevel, AuthMethod, Challenge, ChallengeQuestion, logout(), post(), RequestCodeOutcome, requestEmailCode() (+41 more)

### Community 82 - "displayName.ts"
Cohesion: 0.22
Nodes (11): abbreviateName(), cache, displayFamilyName(), FAMILY_NAMES_EN, romanizeCached(), useDisplayFamilyName(), MAP, ROMAN (+3 more)

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

### Community 88 - "MemberNode.tsx"
Cohesion: 0.09
Nodes (28): BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props, acquireEmojiTextures(), createEmojiTexture(), generateRandomPosition(), releaseEmojiTextures() (+20 more)

### Community 89 - "Foundations"
Cohesion: 0.13
Nodes (14): Advanced, Foundations, pixijs-application, pixijs-core-concepts, pixijs-events, pixijs-performance, pixijs-scene-container, pixijs-scene-core-concepts (+6 more)

### Community 90 - "useTeamTypeForm.ts"
Cohesion: 0.18
Nodes (14): createTeamType(), deleteTeamType(), updateTeamType(), Props, buildTeamTypeFormData(), Callbacks, EMPTY_FORM, keepCount() (+6 more)

### Community 91 - "Sidebar.tsx"
Cohesion: 0.12
Nodes (16): Props, SuccessBubble(), Props, Sidebar(), Props, SidebarBehindCover(), SidebarCoverTint(), Props (+8 more)

### Community 92 - "server/src/utils/index.ts"
Cohesion: 0.18
Nodes (11): Container vs leaf (CRITICAL), Core Concepts, Culling, Destroy semantics, Lifecycle events, Masking, Render groups, Render order and explicit z-ordering (+3 more)

### Community 93 - "Transforms and Coordinate Spaces"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Setting scale to 0, [MEDIUM] Confusing anchor and pivot, [MEDIUM] Reading world transform before first render, Quick Start, Transforms and Coordinate Spaces

### Community 94 - "pixijs/SKILL.md"
Cohesion: 0.12
Nodes (14): API Reference, Common Mistakes, [HIGH] buttonMode removed; use cursor, [HIGH] Default eventMode is passive, [HIGH] Move events only fire over the object in v8, [MEDIUM] Cursor does not inherit from parent, Quick Start, Advanced (+6 more)

### Community 98 - "PanelResetButton.tsx"
Cohesion: 0.21
Nodes (14): FiltersHeader(), Props, FitViewButton(), Props, PanelCloseButton(), Props, STYLES, PanelResetButton() (+6 more)

### Community 99 - "src/utils/index.ts"
Cohesion: 0.09
Nodes (36): @pixi/react, PixiElements, gsap, pixi-viewport, Props, Viewport(), NODE_HOVER_ANIMATION_DURATION, NODE_HOVER_SCALE (+28 more)

### Community 100 - "MemberSidebar.tsx"
Cohesion: 0.15
Nodes (20): fetchSession(), SessionInfo, MemberSidebar(), Props, Props, TeamInfoSidebar(), HeaderChip(), Props (+12 more)

### Community 101 - "Core Patterns"
Cohesion: 0.29
Nodes (7): Core Patterns, Frame rate capping, Manual rendering, Per-object update via `onRender`, Priority order, Stop and start, Time units

### Community 102 - "Render Loop"
Cohesion: 0.22
Nodes (8): API Reference, Common Mistakes, [CRITICAL] Treating the ticker callback arg as a number, Frame lifecycle, [HIGH] Using `updateTransform` for per-frame logic, [MEDIUM] Assuming ticker callbacks run after render, Quick Start, Render Loop

### Community 103 - "pixijs-core-concepts/SKILL.md"
Cohesion: 0.22
Nodes (8): API Reference, Decision guide, Environments, Quick concepts, Quick Start, Renderer = systems + pipes, The render loop, Topics

### Community 104 - "useLocale"
Cohesion: 0.13
Nodes (32): LionIcon(), AccountPanel(), Props, ToolbarPanel(), MemberAvatarImage(), MemberInfo(), MemberInfoCover(), DateWithYears() (+24 more)

### Community 105 - "Common Mistakes"
Cohesion: 0.50
Nodes (4): Common Mistakes, [HIGH] Accessing app.renderer before init() resolves, [HIGH] Setting DOMAdapter after Application.init, [MEDIUM] Treating `preference` as a guarantee

### Community 106 - "telegramEligibility.ts"
Cohesion: 0.21
Nodes (12): EligibilityMember, EmailIdentity, MemberMatch, normalizeEmail(), resolveEmailIdentity(), resolveMemberMatch(), loadEmailIdentity(), phoneKey() (+4 more)

### Community 107 - "EditMemberForm.tsx"
Cohesion: 0.12
Nodes (33): AddMemberForm(), buildMemberFormData(), ClearButton(), SubmitButton(), ConfirmDeleteControl(), Props, describeSubmitError(), EditMemberForm() (+25 more)

### Community 108 - "FilterState"
Cohesion: 0.16
Nodes (14): Props, Props, Props, Props, Props, FilterCategoryKey, FilterState, ActivityState (+6 more)

### Community 109 - "PhotoViewer.tsx"
Cohesion: 0.10
Nodes (34): isTreeReady(), MembersTree, MembersTreeDynamic(), TreeState, PhotoViewer(), thumbRadius(), Viewer(), viewportRect() (+26 more)

### Community 110 - "migrateMembersFromMongodb.ts"
Cohesion: 0.07
Nodes (32): mongodb, ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember, STATUSES_MAP (+24 more)

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

### Community 113 - "Toolbar.tsx"
Cohesion: 0.13
Nodes (21): DemoBadge(), FiltersFooter(), Props, FiltersPanel(), Props, FilterCategoryPane(), SELF_SCROLLING_PANES, useDraftFilterCount() (+13 more)

### Community 114 - "MemberSuggestForm.tsx"
Cohesion: 0.09
Nodes (44): fetchMyMemberSuggestions(), fetchMyTeamSuggestions(), PendingSuggestion, photoBody(), postChanges(), removeMyPhoto(), send(), SuggestionChange (+36 more)

### Community 115 - "AccountRoles.tsx"
Cohesion: 0.20
Nodes (13): refreshProfile(), AccountRoles(), byLatestYears(), lastYear(), Props, SessionMember, Years, NameBadgePicker() (+5 more)

### Community 116 - "pixijs-scene-core-concepts/SKILL.md"
Cohesion: 0.14
Nodes (12): API Reference, Common Mistakes, [CRITICAL] Adding children to a leaf display object, [CRITICAL] Referencing DisplayObject, [HIGH] Forgetting isRenderGroup on large static subtrees, [HIGH] Treating child.x as world space, Leaf comparison: which skill covers which object, [MEDIUM] sortableChildren without zIndex (+4 more)

### Community 117 - "BEST Family Tree"
Cohesion: 0.25
Nodes (7): BEST Family Tree, Contributions, Language, People, Sign-in, Teams, Views

### Community 118 - "MemberSidebarContent.tsx"
Cohesion: 0.39
Nodes (5): MemberSidebarContent(), Props, Options, useSidebarSwitchAnimation(), SidebarMode

### Community 120 - "uk/filters.ts"
Cohesion: 0.33
Nodes (5): familyForms, filters, memberForms, roleForms, teamForms

### Community 121 - "piiCheck.ts"
Cohesion: 0.38
Nodes (8): DemoValues, findLeaks(), lowerSet(), norm(), normalizeSocial(), RealValues, clean, real

### Community 122 - "DropdownPortal.tsx"
Cohesion: 0.50
Nodes (3): react-dom, DropdownPortal(), Props

### Community 123 - "Common Mistakes"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, [CRITICAL] App destroy without releaseGlobalResources, [HIGH] Destroying and recreating objects instead of recycling, [HIGH] Interleaving object types in scene graph, [HIGH] Loading many individual textures instead of spritesheets, [HIGH] Updating Text or HTMLText every frame, [HIGH] Using complex Graphics instead of textures (+4 more)

### Community 124 - "importAllowedEmails.ts"
Cohesion: 0.19
Nodes (12): AllowedRow, AllowlistDiff, diffAllowlist(), looksLikeEmail(), parseAllowlistCsv(), ParsedAllowlist, splitLine(), apply (+4 more)

### Community 125 - "http"
Cohesion: 0.18
Nodes (18): addMember(), deleteMember(), editMember(), FamilyGroupOption, fetchFamilyGroups(), fetchFamilyTree(), fetchMemberById(), fetchMentorsList() (+10 more)

### Community 126 - "plural.ts"
Cohesion: 0.18
Nodes (9): memberForm, teamTypeForm, memberForms, search, formatCount(), plural(), PluralForms, en (+1 more)

### Community 127 - "PhotoOpenButton.tsx"
Cohesion: 0.17
Nodes (12): zustand, cache, loadImageAspect(), PhotoOpenButton(), Props, useIsPhotoOpen(), PhotoViewerState, usePhotoViewerStore (+4 more)

### Community 128 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, concurrently, @faker-js/faker, nodemon, ts-node, tsx, @types/compression, @types/cors (+5 more)

### Community 129 - "GSAP with React"
Cohesion: 0.15
Nodes (12): Best practices, Context-Safe Callbacks, Dependency array, scope, and revertOnUpdate, Do Not, gsap.context() in useEffect (when useGSAP isn't used), GSAP with React, Installation, Learn More (+4 more)

### Community 130 - "emailCodes.ts"
Cohesion: 0.18
Nodes (13): CODE_TTL_MS, CodeStore, generateCode(), hashCode(), issueCode(), MAX_CODE_ATTEMPTS, sameHash(), StoredCode (+5 more)

### Community 132 - "hitl-loop.template.sh"
Cohesion: 0.83
Nodes (3): capture(), hitl-loop.template.sh script, step()

### Community 133 - "fakeIdentity.ts"
Cohesion: 0.27
Nodes (7): @faker-js/faker, createIdentityFactory(), firstFree(), OPERATOR_CODES, none, MAP, translit()

### Community 134 - "questionRoutes.ts"
Cohesion: 0.14
Nodes (19): express-rate-limit, callbackErrorRedirect(), decideGoogleSignIn(), GoogleClaims, GoogleDecision, decide(), verified, isProviderEnabled() (+11 more)

### Community 135 - "en/errors.ts"
Cohesion: 0.50
Nodes (3): errors, Params, platformLabels

### Community 137 - "GSAP Performance"
Cohesion: 0.17
Nodes (11): Batch Reads and Writes, Best practices, Do Not, Frequently updated properties (e.g. mouse followers), GSAP Performance, Many Elements (Stagger, Lists), Prefer Transform and Opacity, Reduce Simultaneous Work (+3 more)

### Community 138 - "GSAP Timeline"
Cohesion: 0.17
Nodes (11): Controlling Playback, Creating a Timeline, Do Not, GSAP Timeline, Labels, Nesting Timelines, Official GSAP Best practices, Position Parameter (+3 more)

### Community 139 - "MemberStatus"
Cohesion: 0.17
Nodes (11): MEMBER_STATUSES, MENTOR_STATUSES, STATUS_ICONS, StatusIcon, MemberStatus, Alumni, Baby, Full (+3 more)

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

### Community 146 - "useRoleForm.ts"
Cohesion: 0.22
Nodes (14): ApiError, errorMessage(), ErrorParams, toApiError(), createRole(), deleteRole(), updateRole(), Props (+6 more)

### Community 148 - "TeamFormContent.tsx"
Cohesion: 0.08
Nodes (57): DropdownMenu(), Props, FieldError(), PositionAssignmentFields(), Props, PositionFormFields(), Props, createEmptyPositionRow() (+49 more)

## Knowledge Gaps
- **45 isolated node(s):** `@prisma/client`, `dotenv`, `lodash`, `pixi-filters`, `@tailwindcss/postcss` (+40 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1092 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `filters()` connect `filterMembers.ts` to `Common Mistakes`, `ref_vitest`?**
  _High betweenness centrality (0.102) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _45 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `uk/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.08108108108108109 - nodes in this community are weakly interconnected._
- **Why does `Constructor options` connect `Common Mistakes` to `filterMembers.ts`?**
  _High betweenness centrality (0.084) - this node is a cross-community bridge._
- **Should `react` be split into smaller, more focused modules?**
  _Cohesion score 0.10522496371552975 - nodes in this community are weakly interconnected._
- **Why does `react` connect `src/types/index.ts` to `react`, `MemberPane.tsx`, `ThemeContext.tsx`, `bakeParams.ts`, `MemberStatus`, `ref_vitest`, `Member`, `TeamFrame`, `useRoleForm.ts`, `TeamFormContent.tsx`, `TeamSearch.tsx`, `TeamLogo.tsx`, `AccessTab.tsx`, `package.json`, `MemberSuggestFields.tsx`, `MemberSearch.tsx`, `Direction`, `locale.ts`, `TeamFrame`, `SuggestionsTab.tsx`, `FitViewButton.tsx`, `useTeamForm.ts`, `ref_vitest`, `hooks/index.ts`, `constants/canvas/index.ts`, `useCardAnimation.ts`, `useMeta.ts`, `useTreeDirection.ts`, `searchShortcut.ts`, `BirthdayFilterSection.tsx`, `useTapWithoutDrag.ts`, `api/auth.ts`, `displayName.ts`, `MemberNode.tsx`, `useTeamTypeForm.ts`, `Sidebar.tsx`, `PanelResetButton.tsx`, `src/utils/index.ts`, `MemberSidebar.tsx`, `useLocale`, `EditMemberForm.tsx`, `FilterState`, `PhotoViewer.tsx`, `Toolbar.tsx`, `MemberSuggestForm.tsx`, `AccountRoles.tsx`, `MemberSidebarContent.tsx`, `DropdownPortal.tsx`, `PhotoOpenButton.tsx`?**
  _High betweenness centrality (0.081) - this node is a cross-community bridge._
- **Should `MemberPane.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.12477718360071301 - nodes in this community are weakly interconnected._