# Graph Report - best-family-tree  (2026-11-24)

## Corpus Check
- 767 files · ~234,077 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 33 file(s) not represented in the graph (top: .prisma 10, (none) 7, .css 7)

## Summary
- 3557 nodes · 10797 edges · 146 communities (135 shown, 11 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 110 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `69fb8408`
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
- Member.ts
- anonymizeDemo.ts
- catalogValidation.ts
- auth/types.ts
- teamFrame.ts
- memberFormValidation.ts
- dependencies
- useTreeLayout.ts
- constants/filters.ts
- useRenderOnDemand.ts
- HTML Report Format
- signInCodeEmail.ts
- AccentColor
- ValidationError
- TeamSearch.tsx
- compilerOptions
- compilerOptions
- ApplicationOptions reference
- FitViewButton.tsx
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
- MemberInfoActions.tsx
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
- MemberSidebarContent.tsx
- hooks/index.ts
- pixi.js
- memberService.ts
- BEST Family Tree
- Diagnosing Bugs
- GroupedCheckListFilter.tsx
- pixijs/SKILL.md
- challenges.ts
- backfillGender.ts
- Core Patterns
- Core Patterns
- readCache.ts
- FilterState
- locale.ts
- YearRangeFilterSection.tsx
- ui/index.ts
- Core Patterns
- Core Patterns
- Core Patterns
- api/auth.ts
- memberPresentation.ts
- Core Patterns
- Constructor options (Container-inherited)
- Test-Driven Development
- GSAP Core
- Core Patterns
- ref_vitest
- Foundations
- SettingsPanel.tsx
- tailwind-merge
- selfService.ts
- FilterState
- Common Mistakes
- backup-prod.sh
- start-prod.sh
- restore-local.sh
- constants/canvas/index.ts
- treeStore.ts
- NODE_WIDTH
- Core Concepts
- Render Loop
- pixijs-core-concepts/SKILL.md
- devDependencies
- Common Mistakes
- Container Hierarchy
- BrandSpinner.tsx
- MemberStatus
- PhotoViewer.tsx
- migrateMembersFromMongodb.ts
- Member
- Renderers: WebGPU, WebGL, and Canvas
- filtersStore.ts
- PositionBadge.tsx
- fakeIdentity.ts
- pixijs-scene-core-concepts/SKILL.md
- opengraph-image.tsx
- uk/errors.ts
- Messages
- proxy.ts
- seedQuestions.ts
- settingsStore.ts
- pixijs/SKILL.md
- importAllowedEmails.ts
- http
- AccountRoles.tsx
- src/utils/index.ts
- colorClasses.ts
- GSAP with React
- emailCodes.ts
- hitl-loop.template.sh
- ref_node_crypto
- uk/filters.ts
- en/errors.ts
- GSAP Performance
- GSAP Timeline
- @prisma/config
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

## Communities (146 total, 11 thin omitted)

### Community 0 - "uk/index.ts"
Cohesion: 0.08
Nodes (19): access, account, auth, common, formCommon, manage, memberForm, memberInfo (+11 more)

### Community 1 - "TeamFrame"
Cohesion: 0.12
Nodes (26): Props, Props, Props, Props, Props, TeamFramesLayer(), MembersTreeScene(), Props (+18 more)

### Community 2 - "MemberSearch.tsx"
Cohesion: 0.26
Nodes (11): compare(), getSearchable(), MemberSearch(), Props, Props, SearchBar(), SearchSuggestionItem(), searchableName() (+3 more)

### Community 3 - "server/package.json"
Cohesion: 0.07
Nodes (28): cloudinary, compression, concurrently, cors, express-rate-limit, helmet, multer-storage-cloudinary, nodemon (+20 more)

### Community 4 - "Member"
Cohesion: 0.08
Nodes (36): zustand, fetchFamilyTree(), FamilyTree(), Home(), loadTree(), MembersTree(), Props, Props (+28 more)

### Community 5 - "useDashedPathAnimation.ts"
Cohesion: 0.11
Nodes (32): LineageEdge(), DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN, MIN_ANIM_DURATION, PATTERN_LEN, RETRACT_BASE (+24 more)

### Community 6 - "bakeParams.ts"
Cohesion: 0.21
Nodes (17): AuroraBackground(), readNumber(), useBakedAurora(), AuroraBakeInput, bakeAuroraLayers(), canBakeAurora(), BAKE_SCALE, BLUR_SPREAD (+9 more)

### Community 7 - "src/index.ts"
Cohesion: 0.08
Nodes (37): multer, deleteCloudinaryImage(), deleteReplacedImage(), discardUpload(), extractCloudinaryPublicId(), MAX_UPLOAD_BYTES, uploadMiddleware(), UploadOptions (+29 more)

### Community 8 - "suggestion/suggestionReview.ts"
Cohesion: 0.08
Nodes (57): canSuggest(), Session, applyPhone(), assertUnderPendingCap(), authorWhere(), SuggestionTarget, targetWhere(), buildRows() (+49 more)

### Community 9 - "NODE_WIDTH"
Cohesion: 0.08
Nodes (41): elkjs, GRID_LR_COLUMNS, TEAM_FRAME_GAP, TEAM_PACK_ASPECT, failOver(), getWorker(), Pending, requestLayout() (+33 more)

### Community 10 - "contactKeys.ts"
Cohesion: 0.20
Nodes (10): duplicates, fields, groups, ContactFields, contactKey(), ContactPlatform, FIELD_PLATFORMS, findContactCollision() (+2 more)

### Community 11 - "Member.ts"
Cohesion: 0.11
Nodes (19): FlowerIcon(), Props, MapleLeafIcon(), Props, Props, QuestionMarkIcon(), Placement, PLACEMENTS (+11 more)

### Community 12 - "anonymizeDemo.ts"
Cohesion: 0.14
Nodes (11): allowed, args, byId, factory, GROUP_NAMES, memberPhotos, nextFace, real (+3 more)

### Community 13 - "catalogValidation.ts"
Cohesion: 0.07
Nodes (30): countMembersByRole(), router, booleanLike, isValidPeriod(), MIN_TEAM_YEAR, optional(), optionalName(), PERIOD_ERROR (+22 more)

### Community 14 - "auth/types.ts"
Cohesion: 0.13
Nodes (18): canEditMember(), canManageGrant(), canSelfServe(), hasAccess(), isOwnGrant(), RANK, AccessRank, Express (+10 more)

### Community 15 - "teamFrame.ts"
Cohesion: 0.11
Nodes (38): FIXED_EDGE_WIDTH, TEAM_COLUMN_GAP, TEAM_EDGE_DROP, TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_SPREAD_WIDTH, TEAM_EDGE_STUB, TEAM_FRAME_HEADER, TEAM_FRAME_MIN_WIDTH (+30 more)

### Community 16 - "memberFormValidation.ts"
Cohesion: 0.12
Nodes (23): SuggestionChange, Context, FORM_KEYS, Props, Props, CheckedField, getStoredFieldValues(), Links (+15 more)

### Community 17 - "dependencies"
Cohesion: 0.12
Nodes (17): dependencies, cloudinary, compression, cors, dotenv, express, express-rate-limit, helmet (+9 more)

### Community 18 - "useTreeLayout.ts"
Cohesion: 0.08
Nodes (34): getFitViewTargetScale(), useSceneTransition(), useTeamSelection(), useResolvedDirection(), useTreeLayout(), DEFAULT_NODE_HEIGHT, DEFAULT_NODE_WIDTH, DEFAULT_POSITION (+26 more)

### Community 19 - "constants/filters.ts"
Cohesion: 0.11
Nodes (34): ACTIVITY_STATES, buildOptions(), DATE_PICKER_CLASSES, EMPTY_FILTER_STATE, GENDER_VALUES, getActivityOptions(), getGenderOptions(), getSeasonOptions() (+26 more)

### Community 20 - "useRenderOnDemand.ts"
Cohesion: 0.08
Nodes (39): clamp01(), deferCardHidden(), easeBackOut, easePower2In, easePower2Out, entries, Entry, finishCardReveal() (+31 more)

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "signInCodeEmail.ts"
Cohesion: 0.31
Nodes (6): CODE_TTL_MS, COPY, EmailLocale, escapeHtml(), pairs(), renderSignInCodeEmail()

### Community 23 - "AccentColor"
Cohesion: 0.04
Nodes (50): GLOW, Props, Props, Props, Props, Props, Props, Props (+42 more)

### Community 24 - "ValidationError"
Cohesion: 0.07
Nodes (52): getPositionKey(), ResolvedPosition, resolvePosition(), MEMBER_INCLUDE, MemberTransaction, assertCanEditMembers(), deriveTeamName(), resolveRole() (+44 more)

### Community 25 - "TeamSearch.tsx"
Cohesion: 0.26
Nodes (11): Props, HighlightedTitle(), Props, SearchSuggestionRow(), SuggestionRowProps, compare(), getSearchable(), Props (+3 more)

### Community 26 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, esModuleInterop, forceConsistentCasingInFileNames, module, moduleResolution, noImplicitAny, outDir, paths (+12 more)

### Community 27 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+12 more)

### Community 28 - "ApplicationOptions reference"
Cohesion: 0.06
Nodes (32): Accessibility, ApplicationOptions reference, Background, Culler (CullerPluginOptions), Deprecated (GC — prefer the unified options above), Events, Garbage collection, Graphics (+24 more)

### Community 29 - "FitViewButton.tsx"
Cohesion: 0.21
Nodes (14): FiltersHeader(), Props, FitViewButton(), Props, PanelCloseButton(), Props, STYLES, PanelResetButton() (+6 more)

### Community 30 - "dependencies"
Cohesion: 0.10
Nodes (20): dependencies, date-fns, dotenv, elkjs, gsap, @gsap/react, @heroicons/react, lodash (+12 more)

### Community 31 - "Sidebar.tsx"
Cohesion: 0.13
Nodes (15): Props, Sidebar(), Props, SidebarBehindCover(), Props, SidebarCoverTint(), Props, SidebarFooter() (+7 more)

### Community 32 - "TeamLogo.tsx"
Cohesion: 0.16
Nodes (18): cache, loadImageAspect(), PhotoOpenButton(), Props, useIsPhotoOpen(), AvatarSkeleton(), MemberAvatarImage(), MemberAvatarImageInner() (+10 more)

### Community 33 - "filterTeams.ts"
Cohesion: 0.15
Nodes (26): birthdayBoundKey(), countActiveFilters(), countActiveMemberFilters(), isIdListSet(), matchesBirthday(), matchesFamilyGroup(), matchesGender(), matchesJoinSeason() (+18 more)

### Community 34 - "MemberSuggestFields.tsx"
Cohesion: 0.13
Nodes (34): PAIR_COLORS, Props, CATEGORY_ICONS, FormField(), GenderFormField(), MemberBasicsSection(), Props, MemberBestSection() (+26 more)

### Community 35 - "inputs/index.ts"
Cohesion: 0.10
Nodes (37): Props, DropdownMenu(), Props, PositionAssignmentFields(), resolveRoleName(), ComboboxInput(), Props, ComboboxInputField() (+29 more)

### Community 36 - "package.json"
Cohesion: 0.10
Nodes (20): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+12 more)

### Community 37 - "emailRoutes.ts"
Cohesion: 0.06
Nodes (56): express, authSecret(), isDemoMode(), isProduction(), SESSION_COOKIE, SIGN_IN_COOKIE, useSecureCookie(), getMailer() (+48 more)

### Community 38 - "MemberSuggestForm.tsx"
Cohesion: 0.09
Nodes (55): AddMemberForm(), buildMemberFormData(), ClearButton(), SubmitButton(), ConfirmDeleteControl(), Props, describeSubmitError(), EditMemberForm() (+47 more)

### Community 39 - "utils/membersTree/index.ts"
Cohesion: 0.13
Nodes (27): EdgesLayer(), drawLerped(), drawPolyline(), TeamEdgesLayer(), NODE_AVATAR_RADIUS, bezierEval(), edgeGeometry, endpoints() (+19 more)

### Community 40 - "Core Patterns"
Cohesion: 0.19
Nodes (14): Adding and removing children, Bounds and coordinate conversion, Core Patterns, Destroy, Finding and removing from parent, [HIGH] Expecting getBounds() to return a Rectangle, Leaves vs containers, Per-frame updates with onRender (+6 more)

### Community 41 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+5 more)

### Community 42 - "settingsStore.ts"
Cohesion: 0.12
Nodes (19): darkTheme, DEFAULT_THEME, lightTheme, THEMES, applyCssTokens(), ThemeContext, ThemeContextValue, ThemeProvider() (+11 more)

### Community 43 - "Core Patterns"
Cohesion: 0.12
Nodes (16): API Reference, Common Mistakes, Coordinate conversion, Core Patterns, Cumulative alpha (getGlobalAlpha), Global, local, and screen coordinates, [HIGH] Setting scale to 0, [MEDIUM] Confusing anchor and pivot (+8 more)

### Community 44 - "CLAUDE.md"
Cohesion: 0.22
Nodes (8): Commands, Conventions, Delegating to subagents, Deployment & data, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout

### Community 45 - "Core Patterns"
Cohesion: 0.15
Nodes (13): Container events, Transform, Add, remove, swap, Child queries, Core Patterns, Destroying sub-trees, Iterating children, Label-based tree navigation (+5 more)

### Community 46 - "TeamFrame"
Cohesion: 0.07
Nodes (51): MemberNodeMinimizedTooltip(), Props, TeamBadge(), FILL_ALPHA, lerp(), Props, STROKE_ALPHA, TeamFrame() (+43 more)

### Community 47 - "Toolbar.tsx"
Cohesion: 0.27
Nodes (7): fetchSuggestionCount(), DemoBadge(), focusSearchInput(), Props, Toolbar(), ManageSidebar(), usePanelToggle()

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "MemberInfoActions.tsx"
Cohesion: 0.23
Nodes (12): FacebookIcon(), FacebookGlyph(), InstagramGlyph(), LinkedinGlyph(), svgProps, TelegramGlyph(), InstagramIcon(), LinkedinIcon() (+4 more)

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
Cohesion: 0.09
Nodes (35): openid-client, EligibilityMember, EmailIdentity, MemberMatch, normalizeEmail(), resolveEmailIdentity(), resolveMemberMatch(), loadEmailIdentity() (+27 more)

### Community 54 - "SuggestionsTab.tsx"
Cohesion: 0.06
Nodes (53): approveSuggestion(), fetchSuggestions(), parse(), rejectSuggestion(), SuggestionDto, buildPendingRows(), useMemberPendingRows(), Props (+45 more)

### Community 57 - "scripts"
Cohesion: 0.12
Nodes (17): scripts, auth:grant, auth:import-emails, auth:preview-email, auth:report-duplicate-contacts, auth:seed-grants, auth:seed-questions, build (+9 more)

### Community 58 - "useTeamForm.ts"
Cohesion: 0.17
Nodes (21): createTeam(), deleteTeam(), fetchTeamDetails(), parse(), setTeamMembers(), TeamMemberPayload, updateTeam(), buildTeamRequestBody() (+13 more)

### Community 59 - "Core Patterns"
Cohesion: 0.12
Nodes (17): Application destroy/recreate cycle, Batching optimization, cacheAsTexture for performance, Core Patterns, Culling, Filters and masks cost, Graphics performance, Low-level rendering optimizations (+9 more)

### Community 60 - "searchMatching.ts"
Cohesion: 0.44
Nodes (8): getMatchRanges(), matchesQuery(), queryParts(), rankMatch(), tokenize(), Options, useSearchSuggestions(), normalize()

### Community 61 - "MemberSidebarContent.tsx"
Cohesion: 0.18
Nodes (11): MemberSidebarContent(), Props, Options, useProfileOpenRequest(), useSidebarSwitchAnimation(), getMemberById(), ProfileOpenMode, ProfileOpenRequest (+3 more)

### Community 62 - "hooks/index.ts"
Cohesion: 0.13
Nodes (24): Viewport(), MemberSidebar(), Props, EVENT_FEATURES, MembersTreeContent(), RenderOnDemand(), Props, TeamInfoSidebar() (+16 more)

### Community 63 - "pixi.js"
Cohesion: 0.08
Nodes (29): pixi.js, BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props, acquireEmojiTextures(), createEmojiTexture(), generateRandomPosition() (+21 more)

### Community 64 - "memberService.ts"
Cohesion: 0.07
Nodes (49): zod, CONTACT_FIELDS, toMemberResponse(), loadFamilyTree, loadReducedFamilyTree, router, buildMemberFields(), buildMemberUpdateFields() (+41 more)

### Community 65 - "BEST Family Tree"
Cohesion: 0.10
Nodes (19): 1. Clone and configure environment, 2. Start the application, 3. Run database migrations, 4. Access the app, Architecture, Automated backups (GitHub Actions), Available Commands, Backend Commands (run inside container) (+11 more)

### Community 66 - "Diagnosing Bugs"
Cohesion: 0.13
Nodes (14): Completion criterion: a tight loop that goes red, Diagnosing Bugs, Minimise, Non-deterministic bugs, Phase 1: Build a feedback loop, Phase 2: Reproduce + minimise, Phase 3: Hypothesise, Phase 4: Instrument (+6 more)

### Community 67 - "GroupedCheckListFilter.tsx"
Cohesion: 0.21
Nodes (13): byLabel(), CheckOption, Props, useStableOrder(), CheckRow(), Props, byName(), GroupedCheckListFilter() (+5 more)

### Community 68 - "pixijs/SKILL.md"
Cohesion: 0.12
Nodes (14): API Reference, Common Mistakes, [HIGH] buttonMode removed; use cursor, [HIGH] Default eventMode is passive, [HIGH] Move events only fire over the object in v8, [MEDIUM] Cursor does not inherit from parent, Quick Start, Advanced (+6 more)

### Community 69 - "challenges.ts"
Cohesion: 0.13
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
Cohesion: 0.13
Nodes (21): greenPillIcon(), IconProps, DatesPane(), SEASON_ICONS, PANES, Props, MemberPane(), RolesPane() (+13 more)

### Community 75 - "locale.ts"
Cohesion: 0.13
Nodes (9): react-datepicker, metadata, nunito, RootLayout(), detectLocale(), isLocale(), LEAVE_MS, pageEnterScript (+1 more)

### Community 76 - "YearRangeFilterSection.tsx"
Cohesion: 0.13
Nodes (21): date-fns, BirthdayFilterSection(), Props, ClearButton(), FilterCheckbox(), Props, JoinYearFilterSection(), Props (+13 more)

### Community 77 - "ui/index.ts"
Cohesion: 0.17
Nodes (8): EDITABLE_TAGS, isEditableTarget(), isSearchShortcut(), ShortcutKeys, Keys, Options, Position, useSearchShortcut()

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
Nodes (45): AuthMethod, Challenge, ChallengeQuestion, logout(), post(), RequestCodeOutcome, requestEmailCode(), SessionPosition (+37 more)

### Community 82 - "memberPresentation.ts"
Cohesion: 0.27
Nodes (8): CloudinaryTransformations, getPhotoUrlAsAvatar(), getPhotoUrlAsRoundAvatar(), formatRecruitmentTerm(), getMemberSeasonAccent(), getTermAccent(), RECRUITMENT_SEASON_ACCENT, RECRUITMENT_SEASON_EMOJI

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

### Community 88 - "ref_vitest"
Cohesion: 0.17
Nodes (8): displayFamilyName(), romanizeCached(), MAP, ROMAN, ROMAN_INITIAL, ROMAN_INNER, romanize(), transliterate()

### Community 89 - "Foundations"
Cohesion: 0.15
Nodes (12): Advanced, Foundations, pixijs-application, pixijs-core-concepts, pixijs-events, pixijs-performance, pixijs-scene-container, pixijs-scene-core-concepts (+4 more)

### Community 90 - "SettingsPanel.tsx"
Cohesion: 0.19
Nodes (14): FamilyTreeIcon(), Props, edgeIcon(), edgeStyleOptions(), iconClass, orientationOptions(), themeOptions(), treeModeOptions() (+6 more)

### Community 91 - "tailwind-merge"
Cohesion: 0.12
Nodes (26): @heroicons/react, next, tailwind-merge, Props, Props, SearchPanel(), BUTTON, GLASS (+18 more)

### Community 92 - "selfService.ts"
Cohesion: 0.28
Nodes (13): fetchMyMemberSuggestions(), fetchMyTeamSuggestions(), PendingSuggestion, photoBody(), postChanges(), send(), suggestMemberChanges(), suggestMemberPhoto() (+5 more)

### Community 93 - "FilterState"
Cohesion: 0.23
Nodes (9): Props, Props, FilterState, Gender, Female, Male, areFiltersEqual(), sameValues() (+1 more)

### Community 94 - "Common Mistakes"
Cohesion: 0.20
Nodes (9): Renderer selection at runtime, API Reference, Common Mistakes, [CRITICAL] Adding children to leaf scene objects, [HIGH] Using cacheAsBitmap instead of cacheAsTexture, [MEDIUM] Setting both pivot and origin on the same container, [MEDIUM] Using container.name instead of container.label, Quick Start (+1 more)

### Community 98 - "constants/canvas/index.ts"
Cohesion: 0.10
Nodes (23): NODE_HOVER_ANIMATION_DURATION, NODE_HOVER_SCALE, ZOOMED_OUT_HOVER_SCALE_MAP, lineageEdgePath, ACCIDENTAL_DRAG_MAX_DISTANCE, ACCIDENTAL_DRAG_MAX_MS, LONG_PRESS_MS, TAP_MOVE_TOLERANCE (+15 more)

### Community 99 - "treeStore.ts"
Cohesion: 0.42
Nodes (10): gsap, NODE_HEIGHT, useFitViewAnimation(), useFocusFrameAnimation(), useFocusNodeAnimation(), useViewportAnimation(), clearViewportTimeline(), killViewportAnimation() (+2 more)

### Community 100 - "NODE_WIDTH"
Cohesion: 0.06
Nodes (44): @pixi/react, PixiElements, @gsap/react, @pixi/react, pixi-viewport, contexts, getGlowTexture(), GLOW_BLUR (+36 more)

### Community 101 - "Core Concepts"
Cohesion: 0.18
Nodes (11): Container vs leaf (CRITICAL), Core Concepts, Culling, Destroy semantics, Lifecycle events, Masking, Render groups, Render order and explicit z-ordering (+3 more)

### Community 102 - "Render Loop"
Cohesion: 0.12
Nodes (15): API Reference, Common Mistakes, Core Patterns, [CRITICAL] Treating the ticker callback arg as a number, Frame lifecycle, Frame rate capping, [HIGH] Using `updateTransform` for per-frame logic, Manual rendering (+7 more)

### Community 103 - "pixijs-core-concepts/SKILL.md"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, Decision guide, Environments, [HIGH] Accessing app.renderer before init() resolves, [HIGH] Setting DOMAdapter after Application.init, [MEDIUM] Treating `preference` as a guarantee, Quick concepts (+4 more)

### Community 104 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, concurrently, @faker-js/faker, nodemon, ts-node, tsx, @types/compression, @types/cors (+5 more)

### Community 105 - "Common Mistakes"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, [CRITICAL] App destroy without releaseGlobalResources, [HIGH] Destroying and recreating objects instead of recycling, [HIGH] Interleaving object types in scene graph, [HIGH] Loading many individual textures instead of spritesheets, [HIGH] Updating Text or HTMLText every frame, [HIGH] Using complex Graphics instead of textures (+4 more)

### Community 106 - "Container Hierarchy"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, Container Hierarchy, [CRITICAL] Adding children to a leaf, [HIGH] Destroying the parent without `children: true`, [MEDIUM] Mutating `children` during iteration, Quick Start

### Community 107 - "BrandSpinner.tsx"
Cohesion: 0.33
Nodes (5): LION_CENTER, LION_SILHOUETTE, LIONS, Props, LION_PATHS

### Community 108 - "MemberStatus"
Cohesion: 0.08
Nodes (22): Constructor options, Effects, ACTIVITY_ICONS, IconComponent, IconProps, FOUNDER_JOIN_YEAR, MEMBER_STATUSES, MENTOR_STATUSES (+14 more)

### Community 109 - "PhotoViewer.tsx"
Cohesion: 0.14
Nodes (28): react-dom, DropdownPortal(), Props, PhotoViewer(), thumbRadius(), Viewer(), viewportRect(), ViewerToolbar() (+20 more)

### Community 110 - "migrateMembersFromMongodb.ts"
Cohesion: 0.07
Nodes (31): mongodb, ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember, STATUSES_MAP (+23 more)

### Community 111 - "Member"
Cohesion: 0.15
Nodes (12): getCardBackgroundContext(), MemberNodeCard(), Props, CARD_PIVOT, Props, Props, SEASON_ICONS, SeasonChip() (+4 more)

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

### Community 113 - "filtersStore.ts"
Cohesion: 0.14
Nodes (22): FilterCategoryRail(), FiltersFooter(), Props, FiltersPanel(), Props, FilterCategoryPane(), SELF_SCROLLING_PANES, useDraftFilterCount() (+14 more)

### Community 115 - "fakeIdentity.ts"
Cohesion: 0.27
Nodes (7): @faker-js/faker, createIdentityFactory(), firstFree(), OPERATOR_CODES, none, MAP, translit()

### Community 116 - "pixijs-scene-core-concepts/SKILL.md"
Cohesion: 0.14
Nodes (12): API Reference, Common Mistakes, [CRITICAL] Adding children to a leaf display object, [CRITICAL] Referencing DisplayObject, [HIGH] Forgetting isRenderGroup on large static subtrees, [HIGH] Treating child.x as world space, Leaf comparison: which skill covers which object, [MEDIUM] sortableChildren without zIndex (+4 more)

### Community 117 - "opengraph-image.tsx"
Cohesion: 0.24
Nodes (6): alt, contentType, OpengraphImage(), read(), size, { html }

### Community 118 - "uk/errors.ts"
Cohesion: 0.50
Nodes (3): errors, Params, platformLabels

### Community 119 - "Messages"
Cohesion: 0.23
Nodes (7): Messages, memberForms, search, plural(), PluralForms, en, uk

### Community 121 - "seedQuestions.ts"
Cohesion: 0.50
Nodes (4): answerMatches(), CYRILLIC_TO_LATIN, normalizeAnswer(), DEMO_QUESTIONS

### Community 122 - "settingsStore.ts"
Cohesion: 0.19
Nodes (17): SHORT_LABELS, writeLocaleCookie(), Locale, LOCALE_COOKIE, LOCALES, LocaleProvider(), DEFAULT_SETTINGS, LocaleState (+9 more)

### Community 123 - "pixijs/SKILL.md"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, Constructor options, [CRITICAL] Using lineStyle instead of stroke, [CRITICAL] Using old shape method names, [CRITICAL] Using v7 beginFill/drawRect/endFill, [HIGH] Clearing and redrawing Graphics every frame, [HIGH] Destroying a shared GraphicsContext unexpectedly (+4 more)

### Community 124 - "importAllowedEmails.ts"
Cohesion: 0.19
Nodes (12): AllowedRow, AllowlistDiff, diffAllowlist(), looksLikeEmail(), parseAllowlistCsv(), ParsedAllowlist, splitLine(), apply (+4 more)

### Community 125 - "http"
Cohesion: 0.09
Nodes (44): fetchGrants(), GrantLevel, parse(), removeGrant(), setGrant(), addMember(), ApiError, errorMessage() (+36 more)

### Community 126 - "AccountRoles.tsx"
Cohesion: 0.12
Nodes (24): AccessLevel, fetchSession(), SessionInfo, put(), refreshProfile(), setFeaturedPosition(), setNameBadge(), AccountRoles() (+16 more)

### Community 127 - "src/utils/index.ts"
Cohesion: 0.22
Nodes (7): NodesLayer(), Props, nextAdmittedIds(), PROGRESSIVE_CHUNK_SIZE, useProgressiveIds(), getTeamRoster(), getMemberTeamRoles()

### Community 128 - "colorClasses.ts"
Cohesion: 0.08
Nodes (52): AccessGrant, LionIcon(), AccountPanel(), Props, InfoSection(), Props, MemberActivityPill(), Props (+44 more)

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

### Community 144 - "checkConfig.ts"
Cohesion: 0.07
Nodes (36): RFC-2045, RFC-2047, assertConfig(), configProblems(), databaseName(), demoProblems(), Env, googleProblems() (+28 more)

### Community 145 - "useMeta.ts"
Cohesion: 0.13
Nodes (18): BEST Family Tree, Contributions, Language, People, Sign-in, Teams, Views, Props (+10 more)

### Community 146 - "TeamTypeFormContent.tsx"
Cohesion: 0.12
Nodes (36): react, TeamTypeForm(), DateWithYears(), formatJoinedDate(), ManageList(), Props, ManageGroup, ManageListGroups() (+28 more)

### Community 148 - "PositionFormFields.tsx"
Cohesion: 0.14
Nodes (24): FieldError(), Props, Props, Props, createEmptyPositionRow(), EMPTY_POSITION_ROW, findTeamByName(), getPositionRowSummary() (+16 more)

### Community 152 - "piiCheck.ts"
Cohesion: 0.38
Nodes (8): DemoValues, findLeaks(), lowerSet(), norm(), normalizeSocial(), RealValues, clean, real

## Knowledge Gaps
- **45 isolated node(s):** `@prisma/client`, `dotenv`, `lodash`, `pixi-filters`, `@tailwindcss/postcss` (+40 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1109 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `TeamTypeFormContent.tsx` to `colorClasses.ts`, `TeamFrame`, `MemberSearch.tsx`, `Member`, `useDashedPathAnimation.ts`, `bakeParams.ts`, `useMeta.ts`, `useTreeLayout.ts`, `PositionFormFields.tsx`, `useRenderOnDemand.ts`, `AccentColor`, `TeamSearch.tsx`, `FitViewButton.tsx`, `Sidebar.tsx`, `TeamLogo.tsx`, `MemberSuggestFields.tsx`, `inputs/index.ts`, `package.json`, `MemberSuggestForm.tsx`, `utils/membersTree/index.ts`, `settingsStore.ts`, `TeamFrame`, `Toolbar.tsx`, `SuggestionsTab.tsx`, `useTeamForm.ts`, `searchMatching.ts`, `MemberSidebarContent.tsx`, `hooks/index.ts`, `pixi.js`, `GroupedCheckListFilter.tsx`, `FilterState`, `YearRangeFilterSection.tsx`, `ui/index.ts`, `api/auth.ts`, `SettingsPanel.tsx`, `tailwind-merge`, `selfService.ts`, `FilterState`, `constants/canvas/index.ts`, `treeStore.ts`, `NODE_WIDTH`, `MemberStatus`, `PhotoViewer.tsx`, `Member`, `filtersStore.ts`, `PositionBadge.tsx`, `settingsStore.ts`, `http`, `AccountRoles.tsx`, `src/utils/index.ts`?**
  _High betweenness centrality (0.106) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _45 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `uk/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07965860597439545 - nodes in this community are weakly interconnected._
- **Why does `filters()` connect `MemberStatus` to `constants/filters.ts`, `pixijs/SKILL.md`?**
  _High betweenness centrality (0.075) - this node is a cross-community bridge._
- **Should `TeamFrame` be split into smaller, more focused modules?**
  _Cohesion score 0.11605937921727395 - nodes in this community are weakly interconnected._
- **Why does `Constructor options` connect `pixijs/SKILL.md` to `MemberStatus`?**
  _High betweenness centrality (0.045) - this node is a cross-community bridge._
- **Should `server/package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.06896551724137931 - nodes in this community are weakly interconnected._