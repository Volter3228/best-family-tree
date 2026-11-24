# Graph Report - best-family-tree  (2026-11-24)

## Corpus Check
- 766 files · ~233,722 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 33 file(s) not represented in the graph (top: .prisma 10, (none) 7, .css 7)

## Summary
- 3555 nodes · 10787 edges · 141 communities (131 shown, 10 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 110 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `fbe11a61`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- uk/index.ts
- TeamFrame
- MemberSearch.tsx
- server/package.json
- Member
- useDashedPathAnimation.ts
- bakeParams.ts
- src/index.ts
- suggestion/suggestionReview.ts
- NODE_WIDTH
- contactKeys.ts
- SeasonMotif.tsx
- anonymizeDemo.ts
- catalogValidation.ts
- suggestionCreate.ts
- suggestion/suggestionPositions.ts
- memberFormValidation.ts
- dependencies
- useTreeLayout.ts
- filterSearchParams.ts
- useRenderOnDemand.ts
- HTML Report Format
- signInCodeEmail.ts
- src/types/index.ts
- teamService.ts
- TeamSearch.tsx
- compilerOptions
- compilerOptions
- Core Patterns
- dimensions.ts
- dependencies
- Sidebar.tsx
- TeamLogo.tsx
- filterTeams.ts
- MemberSuggestFields.tsx
- inputs/index.ts
- package.json
- emailRoutes.ts
- MemberSuggestForm.tsx
- utils/membersTree/index.ts
- Core Patterns
- devDependencies
- settingsStore.ts
- Core Patterns
- CLAUDE.md
- Core Patterns
- TeamFrame
- Toolbar.tsx
- During the session
- ApplicationOptions reference
- en/index.ts
- AGENTS.md
- scripts
- eligibility.ts
- SuggestionsTab.tsx
- next.config.mjs
- postcss.config.mjs
- scripts
- useTeamForm.ts
- Core Patterns
- searchMatching.ts
- Core Patterns
- hooks/index.ts
- MemberBirthdayAnimation.tsx
- memberService.ts
- BEST Family Tree
- Diagnosing Bugs
- useCardAnimation.ts
- GenderIcons.tsx
- challenges.ts
- backfillGender.ts
- Core Patterns
- Core Patterns
- readCache.ts
- FilterState
- locale.ts
- YearRangeFilterSection.tsx
- Common Mistakes
- Core Patterns
- Core Patterns
- Core Patterns
- api/auth.ts
- MemberInfo.tsx
- Core Patterns
- Constructor options (Container-inherited)
- Test-Driven Development
- GSAP Core
- Core Patterns
- Foundations
- SettingsPanel.tsx
- useT
- backup-prod.sh
- start-prod.sh
- restore-local.sh
- useCanvasTheme.ts
- treeStore.ts
- constants/canvas/index.ts
- Core Concepts
- Render Loop
- pixijs-core-concepts/SKILL.md
- devDependencies
- Common Mistakes
- ApiError.ts
- ref_vitest
- PhotoViewer.tsx
- migrateMembersFromMongodb.ts
- ActivityState
- Renderers: WebGPU, WebGL, and Canvas
- FilterState
- EditMemberForm.tsx
- fakeIdentity.ts
- pixijs-scene-core-concepts/SKILL.md
- opengraph-image.tsx
- TeamTypesTab.tsx
- membersStore.ts
- seedQuestions.ts
- settingsStore.ts
- pixijs/SKILL.md
- importAllowedEmails.ts
- http
- AccountRoles.tsx
- NodesLayer.tsx
- useLocale
- GSAP with React
- emailCodes.ts
- hitl-loop.template.sh
- ref_node_crypto
- uk/filters.ts
- en/errors.ts
- GSAP Performance
- GSAP Timeline
- MaskIcon.tsx
- ActivityStateIcons.tsx
- checkConfig.ts
- useMeta.ts
- TeamTypeFormContent.tsx
- PositionFormFields.tsx
- piiCheck.ts

## God Nodes (most connected - your core abstractions)
1. `useT()` - 220 edges
2. `AccentColor` - 192 edges
3. `react` - 180 edges
4. `tailwind-merge` - 102 edges
5. `Member` - 79 edges
6. `useLocale()` - 75 edges
7. `COLOR_CLASSES` - 61 edges
8. `@heroicons/react` - 60 edges
9. `http()` - 48 edges
10. `ValidationError` - 47 edges

## Surprising Connections (you probably didn't know these)
- `pixijs-scene-container` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs/references/index.md → src/hooks/membersTree/animations/useFitViewAnimation.ts
- `Constructor options` --references--> `filters()`  [INFERRED]
  .agents/skills/pixijs-scene-graphics/SKILL.md → src/utils/filters/filterMembers.test.ts
- `pixijs-scene-graphics` --references--> `arc()`  [INFERRED]
  .agents/skills/pixijs/references/index.md → src/utils/membersTree/teamEdgeAnchors.ts
- `Paths and complex shapes` --references--> `arc()`  [INFERRED]
  .agents/skills/pixijs-scene-graphics/SKILL.md → src/utils/membersTree/teamEdgeAnchors.ts
- `Constructor options` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs-scene-container/SKILL.md → src/hooks/membersTree/animations/useFitViewAnimation.ts

## Import Cycles
- 3-file cycle: `src/utils/index.ts -> src/utils/membersTree/index.ts -> src/utils/membersTree/lineageEdgePath.ts -> src/utils/index.ts`
- 4-file cycle: `src/context/ThemeContext.tsx -> src/hooks/index.ts -> src/hooks/membersTree/index.ts -> src/hooks/membersTree/useCanvasTheme.ts -> src/context/ThemeContext.tsx`
- 4-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/members.ts -> src/models/index.ts -> src/models/Member.ts`
- 4-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/tree.ts -> src/models/index.ts -> src/models/Member.ts`
- 5-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/filters.ts -> src/types/members.ts -> src/models/index.ts -> src/models/Member.ts`

## Communities (141 total, 10 thin omitted)

### Community 0 - "uk/index.ts"
Cohesion: 0.06
Nodes (25): access, account, auth, common, errors, Params, platformLabels, formCommon (+17 more)

### Community 1 - "TeamFrame"
Cohesion: 0.09
Nodes (25): Props, Props, NodesLayer(), Props, View, MembersTreeScene(), Props, TEAM_OVERVIEW_EDGE_ALPHA (+17 more)

### Community 2 - "MemberSearch.tsx"
Cohesion: 0.23
Nodes (13): compare(), getSearchable(), MemberSearch(), Props, Props, SearchBar(), SearchSuggestionItem(), searchableName() (+5 more)

### Community 3 - "server/package.json"
Cohesion: 0.05
Nodes (36): cloudinary, compression, concurrently, cors, express-rate-limit, helmet, nodemon, openid-client (+28 more)

### Community 4 - "Member"
Cohesion: 0.08
Nodes (30): next, fetchFamilyTree(), FamilyTree(), Home(), loadTree(), MembersTree(), Props, Props (+22 more)

### Community 5 - "useDashedPathAnimation.ts"
Cohesion: 0.11
Nodes (31): LineageEdge(), DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN, MIN_ANIM_DURATION, PATTERN_LEN, RETRACT_BASE (+23 more)

### Community 6 - "bakeParams.ts"
Cohesion: 0.21
Nodes (17): AuroraBackground(), readNumber(), useBakedAurora(), AuroraBakeInput, bakeAuroraLayers(), canBakeAurora(), BAKE_SCALE, BLUR_SPREAD (+9 more)

### Community 7 - "src/index.ts"
Cohesion: 0.07
Nodes (51): express, multer, multer-storage-cloudinary, canSelfServe(), app, deleteCloudinaryImage(), deleteReplacedImage(), discardUpload() (+43 more)

### Community 8 - "suggestion/suggestionReview.ts"
Cohesion: 0.07
Nodes (48): applyPhone(), Suggestion, countPending(), listPending(), alreadyReviewed(), applyApproval(), applyMemberField(), DATE_FIELDS (+40 more)

### Community 9 - "NODE_WIDTH"
Cohesion: 0.08
Nodes (46): elkjs, TEAM_FRAME_GAP, TEAM_PACK_ASPECT, failOver(), getWorker(), Pending, requestLayout(), runInline() (+38 more)

### Community 10 - "contactKeys.ts"
Cohesion: 0.20
Nodes (10): duplicates, fields, groups, ContactFields, contactKey(), ContactPlatform, FIELD_PLATFORMS, findContactCollision() (+2 more)

### Community 11 - "SeasonMotif.tsx"
Cohesion: 0.25
Nodes (9): FlowerIcon(), Props, MapleLeafIcon(), Props, Props, QuestionMarkIcon(), Placement, PLACEMENTS (+1 more)

### Community 12 - "anonymizeDemo.ts"
Cohesion: 0.14
Nodes (11): allowed, args, byId, factory, GROUP_NAMES, memberPhotos, nextFace, real (+3 more)

### Community 13 - "catalogValidation.ts"
Cohesion: 0.10
Nodes (21): booleanLike, isValidPeriod(), optional(), optionalName(), PERIOD_ERROR, positionSchema, roleBodySchema, roleRef (+13 more)

### Community 14 - "suggestionCreate.ts"
Cohesion: 0.12
Nodes (30): canEditMember(), canManageGrant(), canSuggest(), hasAccess(), isOwnGrant(), RANK, Express, Request (+22 more)

### Community 15 - "suggestion/suggestionPositions.ts"
Cohesion: 0.14
Nodes (22): getPositionKey(), applyPosition(), invalidPositions(), parseSent(), byName(), decodePosition(), diffPositions(), encodePosition() (+14 more)

### Community 16 - "memberFormValidation.ts"
Cohesion: 0.15
Nodes (16): SuggestionChange, Context, FORM_KEYS, Props, Props, Props, StoredMemberValues, complete (+8 more)

### Community 17 - "dependencies"
Cohesion: 0.12
Nodes (17): dependencies, cloudinary, compression, cors, dotenv, express, express-rate-limit, helmet (+9 more)

### Community 18 - "useTreeLayout.ts"
Cohesion: 0.11
Nodes (22): getFitViewTargetScale(), useResolvedDirection(), useTreeLayout(), DEFAULT_NODE_HEIGHT, DEFAULT_NODE_WIDTH, DEFAULT_POSITION, FLOW_VIEWPORT_DIRECTION, MembersState (+14 more)

### Community 19 - "filterSearchParams.ts"
Cohesion: 0.12
Nodes (25): useFilterSearchParams(), FamilyGroupRef, familyIdToSlug(), familySlug, familyTokenToId(), groups, filtersToSearchParams(), parseCsvArray() (+17 more)

### Community 20 - "useRenderOnDemand.ts"
Cohesion: 0.11
Nodes (26): entries, Entry, registerLazyCard(), sync(), tick(), hasRunningTween(), useRenderOnDemand(), wake() (+18 more)

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "signInCodeEmail.ts"
Cohesion: 0.31
Nodes (6): CODE_TTL_MS, COPY, EmailLocale, escapeHtml(), pairs(), renderSignInCodeEmail()

### Community 23 - "src/types/index.ts"
Cohesion: 0.05
Nodes (80): @heroicons/react, tailwind-merge, PAIR_COLORS, Props, GLOW, Props, LionIcon(), Props (+72 more)

### Community 24 - "teamService.ts"
Cohesion: 0.11
Nodes (33): adminGrantLocked(), ownGrantError(), ResolvedPosition, resolvePosition(), MemberTransaction, assertCanEditMembers(), deleteMember(), deriveTeamName() (+25 more)

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

### Community 29 - "dimensions.ts"
Cohesion: 0.11
Nodes (21): EMPTY_IDS, SharpAvatarTracker(), AVATAR_HIGH_RES_SIZE, AVATAR_LOW_RES_SIZE, BIRTHDAY_ANIMATION_MIN_SCALE, CARD_VIEW_SCALE, GRID_GAP_X, GRID_LR_COLUMNS (+13 more)

### Community 30 - "dependencies"
Cohesion: 0.10
Nodes (20): dependencies, date-fns, dotenv, elkjs, gsap, @gsap/react, @heroicons/react, lodash (+12 more)

### Community 31 - "Sidebar.tsx"
Cohesion: 0.09
Nodes (22): react, react-dom, Method, Props, SignInCard(), DropdownPortal(), Props, Sidebar() (+14 more)

### Community 32 - "TeamLogo.tsx"
Cohesion: 0.16
Nodes (18): cache, loadImageAspect(), PhotoOpenButton(), Props, useIsPhotoOpen(), AvatarSkeleton(), MemberAvatarImage(), MemberAvatarImageInner() (+10 more)

### Community 33 - "filterTeams.ts"
Cohesion: 0.11
Nodes (34): birthdayBoundKey(), countActiveFilters(), countActiveMemberFilters(), isFilterActive(), isIdListSet(), isListFilterSet(), matchesBirthday(), matchesFamilyGroup() (+26 more)

### Community 34 - "MemberSuggestFields.tsx"
Cohesion: 0.10
Nodes (39): FacebookIcon(), FacebookGlyph(), InstagramGlyph(), LinkedinGlyph(), svgProps, TelegramGlyph(), InstagramIcon(), LinkedinIcon() (+31 more)

### Community 35 - "inputs/index.ts"
Cohesion: 0.10
Nodes (33): DropdownMenu(), Props, ComboboxInput(), Props, ComboboxInputField(), useComboboxState(), DropdownSelectInput(), Props (+25 more)

### Community 36 - "package.json"
Cohesion: 0.10
Nodes (20): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+12 more)

### Community 37 - "emailRoutes.ts"
Cohesion: 0.07
Nodes (53): authSecret(), isDemoMode(), isProduction(), MIN_ACTIVE_QUESTIONS, SESSION_COOKIE, SESSION_TTL_MS, SIGN_IN_COOKIE, useSecureCookie() (+45 more)

### Community 38 - "MemberSuggestForm.tsx"
Cohesion: 0.11
Nodes (45): fetchMyMemberSuggestions(), fetchMyTeamSuggestions(), PendingSuggestion, photoBody(), postChanges(), removeMyPhoto(), send(), suggestMemberChanges() (+37 more)

### Community 39 - "utils/membersTree/index.ts"
Cohesion: 0.09
Nodes (45): EdgesLayer(), drawLerped(), drawPolyline(), Props, TeamEdgesLayer(), FIXED_EDGE_WIDTH, NODE_AVATAR_RADIUS, NODE_WIDTH (+37 more)

### Community 40 - "Core Patterns"
Cohesion: 0.10
Nodes (23): Renderer selection at runtime, Adding and removing children, API Reference, Bounds and coordinate conversion, Common Mistakes, Core Patterns, [CRITICAL] Adding children to leaf scene objects, Destroy (+15 more)

### Community 41 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+5 more)

### Community 42 - "settingsStore.ts"
Cohesion: 0.13
Nodes (18): darkTheme, DEFAULT_THEME, lightTheme, THEMES, applyCssTokens(), ThemeContext, ThemeContextValue, ThemeProvider() (+10 more)

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
Cohesion: 0.05
Nodes (78): @pixi/react, PixiElements, @pixi/react, Props, TeamBadge(), FILL_ALPHA, lerp(), Props (+70 more)

### Community 47 - "Toolbar.tsx"
Cohesion: 0.14
Nodes (18): AccessLevel, fetchSession(), SessionInfo, DemoBadge(), focusSearchInput(), Props, Toolbar(), ManageSidebar() (+10 more)

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "ApplicationOptions reference"
Cohesion: 0.12
Nodes (17): Accessibility, ApplicationOptions reference, Background, Culler (CullerPluginOptions), Deprecated (GC — prefer the unified options above), Events, Garbage collection, Graphics (+9 more)

### Community 50 - "en/index.ts"
Cohesion: 0.10
Nodes (25): access, account, auth, common, filters, formCommon, manage, memberForm (+17 more)

### Community 51 - "AGENTS.md"
Cohesion: 0.25
Nodes (7): Commands, Conventions, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout, This is NOT the Next.js you know

### Community 52 - "scripts"
Cohesion: 0.20
Nodes (10): scripts, build, db:backup-prod, db:restore-local, dev, dev:webpack, lint, start (+2 more)

### Community 53 - "eligibility.ts"
Cohesion: 0.14
Nodes (20): EligibilityMember, EmailIdentity, MemberMatch, normalizeEmail(), resolveEmailIdentity(), resolveMemberMatch(), loadEmailIdentity(), prismaCodeStore (+12 more)

### Community 54 - "SuggestionsTab.tsx"
Cohesion: 0.06
Nodes (58): approveSuggestion(), fetchSuggestions(), parse(), rejectSuggestion(), SuggestionDto, useMemberPendingRows(), Props, MemberPositions() (+50 more)

### Community 57 - "scripts"
Cohesion: 0.12
Nodes (17): scripts, auth:grant, auth:import-emails, auth:preview-email, auth:report-duplicate-contacts, auth:seed-grants, auth:seed-questions, build (+9 more)

### Community 58 - "useTeamForm.ts"
Cohesion: 0.18
Nodes (20): createTeam(), deleteTeam(), fetchTeamDetails(), parse(), setTeamMembers(), TeamMemberPayload, updateTeam(), buildTeamRequestBody() (+12 more)

### Community 59 - "Core Patterns"
Cohesion: 0.12
Nodes (17): Application destroy/recreate cycle, Batching optimization, cacheAsTexture for performance, Core Patterns, Culling, Filters and masks cost, Graphics performance, Low-level rendering optimizations (+9 more)

### Community 60 - "searchMatching.ts"
Cohesion: 0.44
Nodes (8): getMatchRanges(), matchesQuery(), queryParts(), rankMatch(), tokenize(), Options, useSearchSuggestions(), normalize()

### Community 61 - "Core Patterns"
Cohesion: 0.29
Nodes (7): Core Patterns, Frame rate capping, Manual rendering, Per-object update via `onRender`, Priority order, Stop and start, Time units

### Community 62 - "hooks/index.ts"
Cohesion: 0.11
Nodes (30): MemberSidebar(), Props, EVENT_FEATURES, MembersTreeContent(), RenderOnDemand(), Props, TeamInfoSidebar(), TeamInfo() (+22 more)

### Community 63 - "MemberBirthdayAnimation.tsx"
Cohesion: 0.24
Nodes (11): BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props, acquireEmojiTextures(), createEmojiTexture(), generateRandomPosition(), releaseEmojiTextures() (+3 more)

### Community 64 - "memberService.ts"
Cohesion: 0.07
Nodes (48): zod, CONTACT_FIELDS, toMemberResponse(), prisma, loadFamilyTree, loadReducedFamilyTree, router, buildMemberFields() (+40 more)

### Community 65 - "BEST Family Tree"
Cohesion: 0.10
Nodes (19): 1. Clone and configure environment, 2. Start the application, 3. Run database migrations, 4. Access the app, Architecture, Automated backups (GitHub Actions), Available Commands, Backend Commands (run inside container) (+11 more)

### Community 66 - "Diagnosing Bugs"
Cohesion: 0.13
Nodes (14): Completion criterion: a tight loop that goes red, Diagnosing Bugs, Minimise, Non-deterministic bugs, Phase 1: Build a feedback loop, Phase 2: Reproduce + minimise, Phase 3: Hypothesise, Phase 4: Instrument (+6 more)

### Community 67 - "useCardAnimation.ts"
Cohesion: 0.14
Nodes (23): CARD_PIVOT, Props, clamp01(), deferCardHidden(), easeBackOut, easePower2In, easePower2Out, entries (+15 more)

### Community 69 - "challenges.ts"
Cohesion: 0.14
Nodes (21): ChallengeState, isExpired(), isSolved(), pickRandom(), swapQuestion(), SwapResult, base, ChallengeView (+13 more)

### Community 70 - "backfillGender.ts"
Cohesion: 0.12
Nodes (15): alreadyDifferent, alreadySame, APPLY, args, duplicates, fileArg, Gender, GENDERS (+7 more)

### Community 71 - "Core Patterns"
Cohesion: 0.13
Nodes (14): API Reference, boundsArea optimization, Common Mistakes, Core Patterns, Culling, HIGH: Expecting automatic culling, HIGH: Using addChild on RenderLayer, MEDIUM: Expecting filters on ancestors to apply to layer children (+6 more)

### Community 72 - "Core Patterns"
Cohesion: 0.11
Nodes (16): Advanced shape primitives, Cloning, clearing, and bounds, Core Patterns, Default styles via setFillStyle / setStrokeStyle, Draw-time transforms, Drawing a texture directly, Gradients and patterns, GraphicsContext sharing (+8 more)

### Community 73 - "readCache.ts"
Cohesion: 0.53
Nodes (3): bumpDataVersion(), createVersionedCache(), trackWrites()

### Community 74 - "FilterState"
Cohesion: 0.11
Nodes (32): greenPillIcon(), IconProps, DatesPane(), SEASON_ICONS, PANES, Props, MemberPane(), RolesPane() (+24 more)

### Community 75 - "locale.ts"
Cohesion: 0.13
Nodes (9): react-datepicker, metadata, nunito, RootLayout(), detectLocale(), isLocale(), LEAVE_MS, pageEnterScript (+1 more)

### Community 76 - "YearRangeFilterSection.tsx"
Cohesion: 0.16
Nodes (18): date-fns, BirthdayFilterSection(), ClearButton(), FilterCheckbox(), Props, Props, RangeInputs(), RangeSlot (+10 more)

### Community 77 - "Common Mistakes"
Cohesion: 0.50
Nodes (4): Common Mistakes, [HIGH] Accessing app.renderer before init() resolves, [HIGH] Setting DOMAdapter after Application.init, [MEDIUM] Treating `preference` as a guarantee

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
Cohesion: 0.09
Nodes (37): AuthMethod, Challenge, ChallengeQuestion, logout(), post(), RequestCodeOutcome, requestEmailCode(), SessionPosition (+29 more)

### Community 82 - "MemberInfo.tsx"
Cohesion: 0.15
Nodes (21): AccountPanel(), Props, MemberActivityPill(), MemberInfo(), MemberInfoCover(), NameBadge(), STATUS_ICONS, StatusIcon (+13 more)

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

### Community 89 - "Foundations"
Cohesion: 0.15
Nodes (12): Advanced, Foundations, pixijs-application, pixijs-core-concepts, pixijs-events, pixijs-performance, pixijs-scene-container, pixijs-scene-core-concepts (+4 more)

### Community 90 - "SettingsPanel.tsx"
Cohesion: 0.10
Nodes (31): FamilyTreeIcon(), Props, FilterCategoryRail(), FiltersFooter(), Props, FiltersHeader(), Props, FiltersPanel() (+23 more)

### Community 91 - "useT"
Cohesion: 0.13
Nodes (27): EmailForm(), Props, BUTTON, GLASS, HeaderProps, ToolbarProps, ClearButton(), SubmitButton() (+19 more)

### Community 98 - "useCanvasTheme.ts"
Cohesion: 0.21
Nodes (10): FONT_FAMILY, NODE_SUBTITLE_STYLE, NODE_TITLE_STYLE, NODE_TOOLTIP_TEXT_STYLE, TEXT_RESOLUTION, buildCanvasColors(), CanvasTextStyleInstances, CanvasTextStyles (+2 more)

### Community 99 - "treeStore.ts"
Cohesion: 0.20
Nodes (18): gsap, pixi-viewport, Props, Viewport(), NODE_HOVER_ANIMATION_DURATION, NODE_HOVER_SCALE, ZOOMED_OUT_HOVER_SCALE_MAP, NODE_HEIGHT (+10 more)

### Community 100 - "constants/canvas/index.ts"
Cohesion: 0.06
Nodes (47): @gsap/react, pixi.js, contexts, getCardBackgroundContext(), getGlowTexture(), GLOW_BLUR, GLOW_PADDING, GlowKind (+39 more)

### Community 101 - "Core Concepts"
Cohesion: 0.18
Nodes (11): Container vs leaf (CRITICAL), Core Concepts, Culling, Destroy semantics, Lifecycle events, Masking, Render groups, Render order and explicit z-ordering (+3 more)

### Community 102 - "Render Loop"
Cohesion: 0.22
Nodes (8): API Reference, Common Mistakes, [CRITICAL] Treating the ticker callback arg as a number, Frame lifecycle, [HIGH] Using `updateTransform` for per-frame logic, [MEDIUM] Assuming ticker callbacks run after render, Quick Start, Render Loop

### Community 103 - "pixijs-core-concepts/SKILL.md"
Cohesion: 0.22
Nodes (8): API Reference, Decision guide, Environments, Quick concepts, Quick Start, Renderer = systems + pipes, The render loop, Topics

### Community 104 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, concurrently, @faker-js/faker, nodemon, ts-node, tsx, @types/compression, @types/cors (+5 more)

### Community 105 - "Common Mistakes"
Cohesion: 0.10
Nodes (19): API Reference, Common Mistakes, [CRITICAL] App destroy without releaseGlobalResources, [HIGH] Destroying and recreating objects instead of recycling, [HIGH] Interleaving object types in scene graph, [HIGH] Loading many individual textures instead of spritesheets, [HIGH] Updating Text or HTMLText every frame, [HIGH] Using complex Graphics instead of textures (+11 more)

### Community 107 - "ApiError.ts"
Cohesion: 0.27
Nodes (5): ApiError, errorMessage(), ErrorParams, en, messages

### Community 108 - "ref_vitest"
Cohesion: 0.11
Nodes (21): ACTIVITY_STATES, DATE_PICKER_CLASSES, EMPTY_FILTER_STATE, GENDER_VALUES, JOIN_SEASONS, MEMBER_STATUSES, initialFiltersState, Gender (+13 more)

### Community 109 - "PhotoViewer.tsx"
Cohesion: 0.09
Nodes (33): thumbRadius(), Viewer(), viewportRect(), ViewerHeader(), ViewerToolbar(), clampAxis(), clampOffset(), clampScale() (+25 more)

### Community 110 - "migrateMembersFromMongodb.ts"
Cohesion: 0.07
Nodes (32): mongodb, ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember, STATUSES_MAP (+24 more)

### Community 111 - "ActivityState"
Cohesion: 0.11
Nodes (19): Props, Props, Props, Props, getRecruitmentTerm(), getYearOnlyJoinYear(), isJoinYearOnly(), Member (+11 more)

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

### Community 113 - "FilterState"
Cohesion: 0.12
Nodes (19): CATEGORY_ICONS, Props, Props, Props, Props, useDraftFilterCount(), Props, derive() (+11 more)

### Community 114 - "EditMemberForm.tsx"
Cohesion: 0.13
Nodes (26): AddMemberForm(), buildMemberFormData(), describeSubmitError(), EditMemberForm(), buildEditPayload(), getInitialFormData(), MemberFormFields(), getRowPeriod() (+18 more)

### Community 115 - "fakeIdentity.ts"
Cohesion: 0.27
Nodes (7): @faker-js/faker, createIdentityFactory(), firstFree(), OPERATOR_CODES, none, MAP, translit()

### Community 116 - "pixijs-scene-core-concepts/SKILL.md"
Cohesion: 0.14
Nodes (12): API Reference, Common Mistakes, [CRITICAL] Adding children to a leaf display object, [CRITICAL] Referencing DisplayObject, [HIGH] Forgetting isRenderGroup on large static subtrees, [HIGH] Treating child.x as world space, Leaf comparison: which skill covers which object, [MEDIUM] sortableChildren without zIndex (+4 more)

### Community 117 - "opengraph-image.tsx"
Cohesion: 0.24
Nodes (6): alt, contentType, OpengraphImage(), read(), size, { html }

### Community 119 - "TeamTypesTab.tsx"
Cohesion: 0.29
Nodes (7): Props, TeamTypeForm(), TeamTypeMark(), TeamTypesTab(), formatCount(), en, uk

### Community 120 - "membersStore.ts"
Cohesion: 0.15
Nodes (19): zustand, membersActions, {
  setMembers,
  reloadMembers,
  addMember,
  updateMember,
  selectMember,
  getMentorsList,
}, useMembersActions(), useMembersList(), useMembersMap(), useMentees(), useSelectedId() (+11 more)

### Community 121 - "seedQuestions.ts"
Cohesion: 0.50
Nodes (4): answerMatches(), CYRILLIC_TO_LATIN, normalizeAnswer(), DEMO_QUESTIONS

### Community 122 - "settingsStore.ts"
Cohesion: 0.18
Nodes (18): LanguageSwitch(), SHORT_LABELS, writeLocaleCookie(), Locale, LOCALE_COOKIE, LOCALES, LocaleProvider(), DEFAULT_SETTINGS (+10 more)

### Community 123 - "pixijs/SKILL.md"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, Constructor options, [CRITICAL] Using lineStyle instead of stroke, [CRITICAL] Using old shape method names, [CRITICAL] Using v7 beginFill/drawRect/endFill, [HIGH] Clearing and redrawing Graphics every frame, [HIGH] Destroying a shared GraphicsContext unexpectedly (+4 more)

### Community 124 - "importAllowedEmails.ts"
Cohesion: 0.19
Nodes (12): AllowedRow, AllowlistDiff, diffAllowlist(), looksLikeEmail(), parseAllowlistCsv(), ParsedAllowlist, splitLine(), apply (+4 more)

### Community 125 - "http"
Cohesion: 0.15
Nodes (26): addMember(), toApiError(), deleteMember(), editMember(), FamilyGroupOption, fetchFamilyGroups(), fetchMentorsList(), createRole() (+18 more)

### Community 126 - "AccountRoles.tsx"
Cohesion: 0.19
Nodes (16): fetchMemberById(), put(), refreshProfile(), setFeaturedPosition(), setNameBadge(), AccountRoles(), byLatestYears(), lastYear() (+8 more)

### Community 127 - "NodesLayer.tsx"
Cohesion: 0.47
Nodes (3): nextAdmittedIds(), PROGRESSIVE_CHUNK_SIZE, useProgressiveIds()

### Community 128 - "useLocale"
Cohesion: 0.10
Nodes (42): AccessGrant, fetchGrants(), GrantLevel, parse(), removeGrant(), setGrant(), byLabel(), CheckOption (+34 more)

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
Cohesion: 0.47
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

### Community 142 - "ActivityStateIcons.tsx"
Cohesion: 0.40
Nodes (3): ACTIVITY_ICONS, IconComponent, IconProps

### Community 144 - "checkConfig.ts"
Cohesion: 0.07
Nodes (36): RFC-2045, RFC-2047, assertConfig(), configProblems(), databaseName(), demoProblems(), Env, googleProblems() (+28 more)

### Community 145 - "useMeta.ts"
Cohesion: 0.11
Nodes (19): BEST Family Tree, Contributions, Language, People, Sign-in, Teams, Views, fetchTeams() (+11 more)

### Community 146 - "TeamTypeFormContent.tsx"
Cohesion: 0.11
Nodes (28): fetchSuggestionCount(), RoleForm(), TeamForm(), ManageList(), Props, ManageGroup, ManageListGroups(), Props (+20 more)

### Community 148 - "PositionFormFields.tsx"
Cohesion: 0.14
Nodes (25): FieldError(), Props, PositionAssignmentFields(), Props, Props, createEmptyPositionRow(), EMPTY_POSITION_ROW, findTeamByName() (+17 more)

### Community 152 - "piiCheck.ts"
Cohesion: 0.38
Nodes (8): DemoValues, findLeaks(), lowerSet(), norm(), normalizeSocial(), RealValues, clean, real

## Knowledge Gaps
- **45 isolated node(s):** `@prisma/client`, `dotenv`, `lodash`, `pixi-filters`, `@tailwindcss/postcss` (+40 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1109 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `Sidebar.tsx` to `useLocale`, `TeamFrame`, `MemberSearch.tsx`, `Member`, `useDashedPathAnimation.ts`, `bakeParams.ts`, `ActivityStateIcons.tsx`, `useMeta.ts`, `TeamTypeFormContent.tsx`, `useTreeLayout.ts`, `PositionFormFields.tsx`, `useRenderOnDemand.ts`, `src/types/index.ts`, `TeamSearch.tsx`, `dimensions.ts`, `TeamLogo.tsx`, `MemberSuggestFields.tsx`, `inputs/index.ts`, `package.json`, `MemberSuggestForm.tsx`, `utils/membersTree/index.ts`, `settingsStore.ts`, `TeamFrame`, `Toolbar.tsx`, `SuggestionsTab.tsx`, `useTeamForm.ts`, `searchMatching.ts`, `hooks/index.ts`, `MemberBirthdayAnimation.tsx`, `useCardAnimation.ts`, `GenderIcons.tsx`, `FilterState`, `YearRangeFilterSection.tsx`, `api/auth.ts`, `MemberInfo.tsx`, `SettingsPanel.tsx`, `useT`, `useCanvasTheme.ts`, `treeStore.ts`, `constants/canvas/index.ts`, `PhotoViewer.tsx`, `FilterState`, `EditMemberForm.tsx`, `TeamTypesTab.tsx`, `membersStore.ts`, `settingsStore.ts`, `http`, `AccountRoles.tsx`, `NodesLayer.tsx`?**
  _High betweenness centrality (0.104) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _45 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `uk/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.06376811594202898 - nodes in this community are weakly interconnected._
- **Why does `filters()` connect `Constructor options (Container-inherited)` to `filterTeams.ts`, `pixijs/SKILL.md`, `ref_vitest`?**
  _High betweenness centrality (0.070) - this node is a cross-community bridge._
- **Should `TeamFrame` be split into smaller, more focused modules?**
  _Cohesion score 0.08677098150782361 - nodes in this community are weakly interconnected._
- **Why does `Constructor options` connect `pixijs/SKILL.md` to `Constructor options (Container-inherited)`?**
  _High betweenness centrality (0.043) - this node is a cross-community bridge._
- **Should `server/package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.048625792811839326 - nodes in this community are weakly interconnected._