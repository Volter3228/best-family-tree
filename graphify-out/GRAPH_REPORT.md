# Graph Report - best-family-tree  (2026-11-19)

## Corpus Check
- 744 files · ~224,773 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 33 file(s) not represented in the graph (top: .prisma 10, (none) 7, .css 7)

## Summary
- 3433 nodes · 10267 edges · 143 communities (134 shown, 9 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 101 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `49ea7dfb`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- uk/index.ts
- react
- MemberPane.tsx
- server/package.json
- ThemeContext.tsx
- useDashedPathAnimation.ts
- bakeParams.ts
- auth/types.ts
- suggestionCreate.ts
- teamLayout.ts
- teamFrame.ts
- AccountRoles.tsx
- anonymizeDemo.ts
- src/index.ts
- ref_vitest
- clientInstance.ts
- membersStore.ts
- scripts
- TeamFrame
- useTreeLayout.ts
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
- TeamFormContent.tsx
- Common Mistakes
- package.json
- MemberSuggestFields.tsx
- Member
- utils/membersTree/index.ts
- Core Patterns
- devDependencies
- locale.ts
- Core Patterns
- CLAUDE.md
- Core Patterns
- TeamFrame
- Toolbar.tsx
- During the session
- SuggestionsTab.tsx
- en/index.ts
- AGENTS.md
- scripts
- ApplicationOptions reference
- familyTreeRoutes.ts
- next.config.mjs
- postcss.config.mjs
- migrateMembersFromMongodb.ts
- useTeamForm.ts
- Core Patterns
- locale.ts
- DropdownOption
- Member
- pixi.js
- memberService.ts
- BEST Family Tree
- Diagnosing Bugs
- useCardAnimation.ts
- useCanvasTheme.ts
- react
- backfillGender.ts
- Core Patterns
- Core Patterns
- searchShortcut.ts
- signInCodeEmail.ts
- constants/filters.ts
- BirthdayFilterSection.tsx
- useTapWithoutDrag.ts
- Core Patterns
- Core Patterns
- Core Patterns
- api/auth.ts
- sortMembersBalanced.ts
- Core Patterns
- Constructor options (Container-inherited)
- Test-Driven Development
- GSAP Core
- Core Patterns
- MemberBirthdayAnimation.tsx
- Foundations
- TeamTypeFormContent.tsx
- Sidebar.tsx
- server/src/utils/index.ts
- opengraph-image.tsx
- pixijs/SKILL.md
- backup-prod.sh
- start-prod.sh
- restore-local.sh
- constants/theme.ts
- gsap
- MemberSidebar.tsx
- Container Hierarchy
- Render Loop
- pixijs-core-concepts/SKILL.md
- useT.ts
- demoQuestions.test.ts
- emailRoutes.ts
- EditMemberForm.tsx
- useProgressiveIds.ts
- PhotoViewer.tsx
- server/src/types/index.ts
- MaskIcon.tsx
- Renderers: WebGPU, WebGL, and Canvas
- FilterState
- MemberSuggestForm.tsx
- AccountPanel.tsx
- pixijs-scene-core-concepts/SKILL.md
- TeamTypeIdentityTile.tsx
- uk/filters.ts
- piiCheck.ts
- Common Mistakes
- importAllowedEmails.ts
- http
- plural.ts
- PhotoViewer.tsx
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

## Communities (143 total, 9 thin omitted)

### Community 0 - "uk/index.ts"
Cohesion: 0.08
Nodes (19): access, account, auth, common, formCommon, manage, memberForm, memberInfo (+11 more)

### Community 1 - "react"
Cohesion: 0.16
Nodes (29): RoleForm(), ManageList(), ManagePane(), Props, ITEMS, ManageRail(), Props, TABS (+21 more)

### Community 2 - "MemberPane.tsx"
Cohesion: 0.12
Nodes (24): DatesPane(), SEASON_ICONS, PANES, SELF_SCROLLING_PANES, RolesPane(), TeamsPane(), FilterPaneProps, CheckListFilter() (+16 more)

### Community 3 - "server/package.json"
Cohesion: 0.06
Nodes (30): cloudinary, compression, concurrently, cors, express-rate-limit, helmet, multer-storage-cloudinary, nodemon (+22 more)

### Community 4 - "ThemeContext.tsx"
Cohesion: 0.20
Nodes (13): applyCssTokens(), ThemeContext, ThemeContextValue, ThemeProvider(), CanvasColors, noopSubscribe(), useIsHydrated(), useMediaQuery() (+5 more)

### Community 5 - "useDashedPathAnimation.ts"
Cohesion: 0.11
Nodes (30): LineageEdge(), DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN, MIN_ANIM_DURATION, PATTERN_LEN, RETRACT_BASE (+22 more)

### Community 6 - "bakeParams.ts"
Cohesion: 0.21
Nodes (17): AuroraBackground(), readNumber(), useBakedAurora(), AuroraBakeInput, bakeAuroraLayers(), canBakeAurora(), BAKE_SCALE, BLUR_SPREAD (+9 more)

### Community 7 - "auth/types.ts"
Cohesion: 0.14
Nodes (16): canEditMember(), canManageGrant(), canSelfServe(), hasAccess(), isOwnGrant(), RANK, AccessRank, Express (+8 more)

### Community 8 - "suggestionCreate.ts"
Cohesion: 0.07
Nodes (60): canSuggest(), Session, applyPhone(), Suggestion, assertUnderPendingCap(), authorWhere(), SuggestionTarget, targetWhere() (+52 more)

### Community 9 - "teamLayout.ts"
Cohesion: 0.07
Nodes (44): elkjs, TEAM_FRAME_GAP, TEAM_PACK_ASPECT, useTeamSelection(), failOver(), getWorker(), Pending, requestLayout() (+36 more)

### Community 10 - "teamFrame.ts"
Cohesion: 0.09
Nodes (37): TEAM_COLUMN_GAP, TEAM_EDGE_DROP, TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_SPREAD_WIDTH, TEAM_EDGE_STUB, TEAM_FRAME_HEADER, TEAM_FRAME_MIN_WIDTH, TEAM_FRAME_PADDING (+29 more)

### Community 11 - "AccountRoles.tsx"
Cohesion: 0.26
Nodes (9): FlowerIcon(), Props, MapleLeafIcon(), Props, Placement, PLACEMENTS, Props, SeasonMotif() (+1 more)

### Community 12 - "anonymizeDemo.ts"
Cohesion: 0.14
Nodes (11): allowed, args, byId, factory, GROUP_NAMES, memberPhotos, nextFace, real (+3 more)

### Community 13 - "src/index.ts"
Cohesion: 0.08
Nodes (45): express, multer, sessionFromRequest(), app, deleteCloudinaryImage(), deleteReplacedImage(), discardUpload(), extractCloudinaryPublicId() (+37 more)

### Community 14 - "ref_vitest"
Cohesion: 0.09
Nodes (29): GENDER_VALUES, EMPTY, loadFamilyGroups(), useFamilyGroups(), Props, useFilterSearchParams(), FamilyGroupRef, familyIdToSlug() (+21 more)

### Community 15 - "clientInstance.ts"
Cohesion: 0.08
Nodes (37): CHALLENGE_TTL_MS, isDemoMode(), isProduction(), MIN_ACTIVE_QUESTIONS, QUESTIONS_SHOWN, SESSION_COOKIE, SESSION_TTL_MS, SIGN_IN_COOKIE (+29 more)

### Community 16 - "membersStore.ts"
Cohesion: 0.17
Nodes (17): membersActions, {
  setMembers,
  reloadMembers,
  addMember,
  updateMember,
  selectMember,
  getMentorsList,
}, useMembersMap(), useMentees(), useSelectedId(), useSelectedMember(), changesStructure(), EMPTY_INDEX (+9 more)

### Community 17 - "scripts"
Cohesion: 0.12
Nodes (17): scripts, auth:grant, auth:import-emails, auth:preview-email, auth:report-duplicate-contacts, auth:seed-grants, auth:seed-questions, build (+9 more)

### Community 18 - "TeamFrame"
Cohesion: 0.08
Nodes (34): Props, Props, EMPTY_IDS, SharpAvatarTracker(), View, Props, Props, Props (+26 more)

### Community 19 - "useTreeLayout.ts"
Cohesion: 0.12
Nodes (23): getFitViewTargetScale(), useTreeLayout(), DEFAULT_NODE_HEIGHT, DEFAULT_NODE_WIDTH, DEFAULT_POSITION, FLOW_VIEWPORT_DIRECTION, FlowViewportDirection, Position (+15 more)

### Community 20 - "challenges.ts"
Cohesion: 0.13
Nodes (22): ChallengeState, isExpired(), isSolved(), pickRandom(), swapQuestion(), SwapResult, base, ChallengeView (+14 more)

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "layout.tsx"
Cohesion: 0.12
Nodes (12): react-datepicker, metadata, nunito, RootLayout(), writeLocaleCookie(), detectLocale(), isLocale(), LOCALE_COOKIE (+4 more)

### Community 23 - "src/types/index.ts"
Cohesion: 0.06
Nodes (61): tailwind-merge, GLOW, Props, Props, Props, Props, Props, Props (+53 more)

### Community 24 - "teamService.ts"
Cohesion: 0.13
Nodes (29): ResolvedPosition, resolvePosition(), MemberTransaction, assertCanEditMembers(), deleteMember(), deriveTeamName(), resolveRole(), resolveTeam() (+21 more)

### Community 25 - "MemberSuggestFields.tsx"
Cohesion: 0.23
Nodes (12): FacebookIcon(), FacebookGlyph(), InstagramGlyph(), LinkedinGlyph(), svgProps, TelegramGlyph(), InstagramIcon(), LinkedinIcon() (+4 more)

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
Cohesion: 0.28
Nodes (10): Props, HighlightedTitle(), Props, SearchSuggestionRow(), SuggestionRowProps, compare(), getSearchable(), TeamSearch() (+2 more)

### Community 32 - "TeamLogo.tsx"
Cohesion: 0.15
Nodes (19): cache, loadImageAspect(), PhotoOpenButton(), Props, useIsPhotoOpen(), AvatarSkeleton(), MemberAvatarImage(), MemberAvatarImageInner() (+11 more)

### Community 33 - "filterMembers.ts"
Cohesion: 0.12
Nodes (34): derive(), areSetsEqual(), computeFilteredMembers(), Source, birthdayBoundKey(), countActiveFilters(), countActiveMemberFilters(), isFilterActive() (+26 more)

### Community 34 - "TeamFormContent.tsx"
Cohesion: 0.22
Nodes (18): DropdownSelectInput(), FormCheckbox(), formInputClasses(), InputLabel(), TextAreaInput(), TextInput(), toYear(), YearRangeInput() (+10 more)

### Community 35 - "Common Mistakes"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, Constructor options, [CRITICAL] Using lineStyle instead of stroke, [CRITICAL] Using old shape method names, [CRITICAL] Using v7 beginFill/drawRect/endFill, [HIGH] Clearing and redrawing Graphics every frame, [HIGH] Destroying a shared GraphicsContext unexpectedly (+4 more)

### Community 36 - "package.json"
Cohesion: 0.10
Nodes (20): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+12 more)

### Community 37 - "MemberSuggestFields.tsx"
Cohesion: 0.14
Nodes (28): FormField(), Props, GenderFormField(), MemberBasicsSection(), Props, MemberBestSection(), Props, MemberContactsSection() (+20 more)

### Community 38 - "Member"
Cohesion: 0.07
Nodes (49): getCardBackgroundContext(), MemberNodeCard(), Props, NodesLayer(), Props, compare(), getSearchable(), MemberSearch() (+41 more)

### Community 39 - "utils/membersTree/index.ts"
Cohesion: 0.14
Nodes (27): EdgesLayer(), drawLerped(), drawPolyline(), TeamEdgesLayer(), Point, TeamEdge, bezierEval(), edgeGeometry (+19 more)

### Community 40 - "Core Patterns"
Cohesion: 0.19
Nodes (14): Adding and removing children, Bounds and coordinate conversion, Core Patterns, Destroy, Finding and removing from parent, [HIGH] Expecting getBounds() to return a Rectangle, Leaves vs containers, Per-frame updates with onRender (+6 more)

### Community 41 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+5 more)

### Community 42 - "locale.ts"
Cohesion: 0.24
Nodes (10): DEFAULT_SETTINGS, LocaleState, readLegacyTheme(), SETTINGS_STORAGE_KEY, SettingsActions, SettingsState, initialState, { storageMock } (+2 more)

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
Nodes (45): @pixi/react, PixiElements, @pixi/react, pixi-viewport, TeamBadge(), FILL_ALPHA, lerp(), Props (+37 more)

### Community 47 - "Toolbar.tsx"
Cohesion: 0.10
Nodes (31): fetchSuggestionCount(), FamilyTreeIcon(), Props, DemoBadge(), FiltersHeader(), Props, FitViewButton(), SearchBar() (+23 more)

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "SuggestionsTab.tsx"
Cohesion: 0.11
Nodes (31): AccessGrant, approveSuggestion(), fetchSuggestions(), parse(), rejectSuggestion(), SuggestionDto, Props, AccessRow() (+23 more)

### Community 50 - "en/index.ts"
Cohesion: 0.09
Nodes (24): access, account, auth, common, filters, formCommon, en, manage (+16 more)

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
Cohesion: 0.13
Nodes (14): CONTACT_FIELDS, toMemberResponse(), loadFamilyTree, loadReducedFamilyTree, router, serializeMember(), bumpDataVersion(), createVersionedCache() (+6 more)

### Community 57 - "migrateMembersFromMongodb.ts"
Cohesion: 0.15
Nodes (9): mongodb, ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember, STATUSES_MAP (+1 more)

### Community 58 - "useTeamForm.ts"
Cohesion: 0.20
Nodes (21): createTeam(), deleteTeam(), fetchTeamDetails(), parse(), setTeamMembers(), TeamMemberPayload, updateTeam(), buildTeamRequestBody() (+13 more)

### Community 59 - "Core Patterns"
Cohesion: 0.12
Nodes (17): Application destroy/recreate cycle, Batching optimization, cacheAsTexture for performance, Core Patterns, Culling, Filters and masks cost, Graphics performance, Low-level rendering optimizations (+9 more)

### Community 60 - "locale.ts"
Cohesion: 0.07
Nodes (30): countMembersByRole(), router, booleanLike, isValidPeriod(), MIN_TEAM_YEAR, optional(), optionalName(), PERIOD_ERROR (+22 more)

### Community 61 - "DropdownOption"
Cohesion: 0.22
Nodes (13): DropdownMenu(), Props, ComboboxInput(), Props, ComboboxInputField(), useComboboxState(), Props, Props (+5 more)

### Community 62 - "Member"
Cohesion: 0.13
Nodes (18): MembersTree(), Props, Props, isTreeReady(), MembersTree, MembersTreeDynamic(), Props, TreeState (+10 more)

### Community 63 - "pixi.js"
Cohesion: 0.05
Nodes (54): pixi.js, contexts, getGlowTexture(), GLOW_BLUR, GLOW_PADDING, GlowKind, paint(), SIZES (+46 more)

### Community 64 - "memberService.ts"
Cohesion: 0.10
Nodes (35): zod, buildMemberFields(), buildMemberUpdateFields(), buildSharedFields(), buildSparseMemberFields(), parsePositionsPayload(), getPositionKey(), syncPositions() (+27 more)

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

### Community 69 - "react"
Cohesion: 0.08
Nodes (22): @heroicons/react, react, Props, byLabel(), CheckOption, Props, useStableOrder(), Props (+14 more)

### Community 70 - "backfillGender.ts"
Cohesion: 0.12
Nodes (15): alreadyDifferent, alreadySame, APPLY, args, duplicates, fileArg, Gender, GENDERS (+7 more)

### Community 71 - "Core Patterns"
Cohesion: 0.13
Nodes (14): API Reference, boundsArea optimization, Common Mistakes, Core Patterns, Culling, HIGH: Expecting automatic culling, HIGH: Using addChild on RenderLayer, MEDIUM: Expecting filters on ancestors to apply to layer children (+6 more)

### Community 72 - "Core Patterns"
Cohesion: 0.11
Nodes (16): Advanced shape primitives, Cloning, clearing, and bounds, Core Patterns, Default styles via setFillStyle / setStrokeStyle, Draw-time transforms, Drawing a texture directly, Gradients and patterns, GraphicsContext sharing (+8 more)

### Community 73 - "searchShortcut.ts"
Cohesion: 0.33
Nodes (6): EDITABLE_TAGS, isEditableTarget(), isSearchShortcut(), ShortcutKeys, Keys, useSearchShortcut()

### Community 74 - "signInCodeEmail.ts"
Cohesion: 0.31
Nodes (6): CODE_TTL_MS, COPY, EmailLocale, escapeHtml(), pairs(), renderSignInCodeEmail()

### Community 75 - "constants/filters.ts"
Cohesion: 0.13
Nodes (15): ACTIVITY_ICONS, IconComponent, IconProps, greenPillIcon(), IconProps, MemberPane(), GENDER_ICONS, IconProps (+7 more)

### Community 76 - "BirthdayFilterSection.tsx"
Cohesion: 0.14
Nodes (20): BirthdayFilterSection(), Props, ClearButton(), FilterCheckbox(), Props, Props, Props, RangeInputs() (+12 more)

### Community 77 - "useTapWithoutDrag.ts"
Cohesion: 0.17
Nodes (13): @gsap/react, lineageEdgePath, ACCIDENTAL_DRAG_MAX_DISTANCE, ACCIDENTAL_DRAG_MAX_MS, LONG_PRESS_MS, TAP_MOVE_TOLERANCE, CIRCLE_TEXTURE_SRC, PATTERN_TEXTURE_SRC (+5 more)

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
Nodes (49): AccessLevel, AuthMethod, Challenge, ChallengeQuestion, logout(), post(), RequestCodeOutcome, requestEmailCode() (+41 more)

### Community 82 - "sortMembersBalanced.ts"
Cohesion: 0.35
Nodes (9): MemberMetrics, TreeCache, TreeNode, calculateMemberMetrics(), calculateSubtreeDepth(), calculateSubtreeSize(), centerSingleSubtree(), distributeSubtrees() (+1 more)

### Community 83 - "Core Patterns"
Cohesion: 0.12
Nodes (16): Context and device loss, Core Patterns, Destroying a renderer, Direct renderer construction, Lazy-loading backend-specific systems and pipes, Manual rendering, Per-renderer options, Preference forms (+8 more)

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
Cohesion: 0.10
Nodes (19): API Reference, Capture phase events, Common Mistakes, Core Patterns, Cursor styles, Event features, Event properties, Event types (+11 more)

### Community 88 - "MemberBirthdayAnimation.tsx"
Cohesion: 0.24
Nodes (11): BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props, acquireEmojiTextures(), createEmojiTexture(), generateRandomPosition(), releaseEmojiTextures() (+3 more)

### Community 89 - "Foundations"
Cohesion: 0.15
Nodes (12): Advanced, Foundations, pixijs-application, pixijs-core-concepts, pixijs-events, pixijs-performance, pixijs-scene-container, pixijs-scene-core-concepts (+4 more)

### Community 90 - "TeamTypeFormContent.tsx"
Cohesion: 0.11
Nodes (27): ApiError, ClearButton(), SubmitButton(), ConfirmDeleteControl(), FormFooter(), Props, FormMessages(), Props (+19 more)

### Community 91 - "Sidebar.tsx"
Cohesion: 0.15
Nodes (15): Props, SuccessBubble(), Props, Sidebar(), SidebarBehindCover(), SidebarCoverTint(), Props, SidebarFooter() (+7 more)

### Community 92 - "server/src/utils/index.ts"
Cohesion: 0.18
Nodes (11): Container vs leaf (CRITICAL), Core Concepts, Culling, Destroy semantics, Lifecycle events, Masking, Render groups, Render order and explicit z-ordering (+3 more)

### Community 93 - "opengraph-image.tsx"
Cohesion: 0.24
Nodes (6): alt, contentType, OpengraphImage(), read(), size, { html }

### Community 94 - "pixijs/SKILL.md"
Cohesion: 0.13
Nodes (13): API Reference, Common Mistakes, [CRITICAL] Adding children to leaf scene objects, [HIGH] Using cacheAsBitmap instead of cacheAsTexture, [MEDIUM] Setting both pivot and origin on the same container, Quick Start, Advanced, Fallback: canonical PixiJS docs (+5 more)

### Community 98 - "constants/theme.ts"
Cohesion: 0.25
Nodes (6): darkTheme, DEFAULT_THEME, lightTheme, THEMES, themeCssMap, themeInitScript

### Community 99 - "gsap"
Cohesion: 0.17
Nodes (21): gsap, Props, Viewport(), NODE_HOVER_ANIMATION_DURATION, NODE_HOVER_SCALE, ZOOMED_OUT_HOVER_SCALE_MAP, BIRTHDAY_ANIMATION_MIN_SCALE, MAX_VIEWPORT_ZOOM (+13 more)

### Community 100 - "MemberSidebar.tsx"
Cohesion: 0.11
Nodes (33): fetchSession(), MemberSidebar(), Props, EVENT_FEATURES, MembersTreeContent(), Props, TeamInfoSidebar(), ViewportCulling() (+25 more)

### Community 101 - "Container Hierarchy"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, Container Hierarchy, [CRITICAL] Adding children to a leaf, [HIGH] Destroying the parent without `children: true`, [MEDIUM] Mutating `children` during iteration, Quick Start

### Community 102 - "Render Loop"
Cohesion: 0.12
Nodes (15): API Reference, Common Mistakes, Core Patterns, [CRITICAL] Treating the ticker callback arg as a number, Frame lifecycle, Frame rate capping, [HIGH] Using `updateTransform` for per-frame logic, Manual rendering (+7 more)

### Community 103 - "pixijs-core-concepts/SKILL.md"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, Decision guide, Environments, [HIGH] Accessing app.renderer before init() resolves, [HIGH] Setting DOMAdapter after Application.init, [MEDIUM] Treating `preference` as a guarantee, Quick concepts (+4 more)

### Community 104 - "useT.ts"
Cohesion: 0.09
Nodes (32): InfoSection(), MemberActivityPill(), MemberInfo(), Props, MemberPositions(), Props, MenteesGrid(), PositionBadge() (+24 more)

### Community 105 - "demoQuestions.test.ts"
Cohesion: 0.50
Nodes (4): answerMatches(), CYRILLIC_TO_LATIN, normalizeAnswer(), DEMO_QUESTIONS

### Community 106 - "emailRoutes.ts"
Cohesion: 0.07
Nodes (43): authSecret(), EligibilityMember, EmailIdentity, MemberMatch, normalizeEmail(), resolveEmailIdentity(), resolveMemberMatch(), loadEmailIdentity() (+35 more)

### Community 107 - "EditMemberForm.tsx"
Cohesion: 0.11
Nodes (30): AddMemberForm(), buildMemberFormData(), describeSubmitError(), EditMemberForm(), Props, buildEditPayload(), getInitialFormData(), getRowPeriod() (+22 more)

### Community 108 - "useProgressiveIds.ts"
Cohesion: 0.47
Nodes (3): nextAdmittedIds(), PROGRESSIVE_CHUNK_SIZE, useProgressiveIds()

### Community 109 - "PhotoViewer.tsx"
Cohesion: 0.21
Nodes (18): clampAxis(), clampOffset(), clampScale(), fitRect(), FULL_CLIP, MAX_SCALE, MIN_SCALE, Rect (+10 more)

### Community 110 - "server/src/types/index.ts"
Cohesion: 0.17
Nodes (11): Member, MemberPositionWithRelations, MENTOR_STATUSES, ALUMNI, FULL, MembersByMentorId, buildTree(), Cache (+3 more)

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

### Community 113 - "FilterState"
Cohesion: 0.13
Nodes (24): CATEGORY_ICONS, FilterCategoryRail(), Props, FiltersFooter(), FiltersPanel(), Props, FilterCategoryPane(), Props (+16 more)

### Community 114 - "MemberSuggestForm.tsx"
Cohesion: 0.12
Nodes (37): fetchMyMemberSuggestions(), fetchMyTeamSuggestions(), PendingSuggestion, photoBody(), postChanges(), removeMyPhoto(), send(), SuggestionChange (+29 more)

### Community 115 - "AccountPanel.tsx"
Cohesion: 0.11
Nodes (29): SessionInfo, refreshProfile(), AccountPanel(), Props, AccountRoles(), byLatestYears(), lastYear(), Props (+21 more)

### Community 116 - "pixijs-scene-core-concepts/SKILL.md"
Cohesion: 0.14
Nodes (12): API Reference, Common Mistakes, [CRITICAL] Adding children to a leaf display object, [CRITICAL] Referencing DisplayObject, [HIGH] Forgetting isRenderGroup on large static subtrees, [HIGH] Treating child.x as world space, Leaf comparison: which skill covers which object, [MEDIUM] sortableChildren without zIndex (+4 more)

### Community 119 - "TeamTypeIdentityTile.tsx"
Cohesion: 0.15
Nodes (14): next, Props, AvatarFileInput(), Props, removeBadgeClasses(), LogoFileInput(), Props, TeamTypeIdentityTile() (+6 more)

### Community 120 - "uk/filters.ts"
Cohesion: 0.33
Nodes (5): familyForms, filters, memberForms, roleForms, teamForms

### Community 121 - "piiCheck.ts"
Cohesion: 0.38
Nodes (8): DemoValues, findLeaks(), lowerSet(), norm(), normalizeSocial(), RealValues, clean, real

### Community 123 - "Common Mistakes"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, [CRITICAL] App destroy without releaseGlobalResources, [HIGH] Destroying and recreating objects instead of recycling, [HIGH] Interleaving object types in scene graph, [HIGH] Loading many individual textures instead of spritesheets, [HIGH] Updating Text or HTMLText every frame, [HIGH] Using complex Graphics instead of textures (+4 more)

### Community 124 - "importAllowedEmails.ts"
Cohesion: 0.19
Nodes (12): AllowedRow, AllowlistDiff, diffAllowlist(), looksLikeEmail(), parseAllowlistCsv(), ParsedAllowlist, splitLine(), apply (+4 more)

### Community 125 - "http"
Cohesion: 0.13
Nodes (33): fetchGrants(), GrantLevel, parse(), removeGrant(), setGrant(), addMember(), errorMessage(), ErrorParams (+25 more)

### Community 126 - "plural.ts"
Cohesion: 0.23
Nodes (7): Messages, memberForms, search, plural(), PluralForms, en, uk

### Community 127 - "PhotoViewer.tsx"
Cohesion: 0.22
Nodes (13): react-dom, zustand, DropdownPortal(), Props, PhotoViewer(), thumbRadius(), Viewer(), viewportRect() (+5 more)

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
Cohesion: 0.06
Nodes (30): Constructor options, Effects, date-fns, EMPTY_FILTER_STATE, MENTOR_STATUSES, initialFiltersState, ActivityState, Active (+22 more)

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
Nodes (19): BEST Family Tree, Contributions, Language, People, Sign-in, Teams, Views, Props (+11 more)

### Community 148 - "PositionFormFields.tsx"
Cohesion: 0.13
Nodes (30): FieldError(), PositionAssignmentFields(), Props, PositionFormFields(), Props, createEmptyPositionRow(), EMPTY_POSITION_ROW, findTeamByName() (+22 more)

## Knowledge Gaps
- **45 isolated node(s):** `@prisma/client`, `dotenv`, `lodash`, `pixi-filters`, `@tailwindcss/postcss` (+40 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1089 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `filters()` connect `ref_vitest` to `Common Mistakes`, `ref_vitest`?**
  _High betweenness centrality (0.094) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _45 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `uk/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07965860597439545 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `react`, `MemberPane.tsx`, `ThemeContext.tsx`, `useDashedPathAnimation.ts`, `bakeParams.ts`, `teamLayout.ts`, `ref_vitest`, `membersStore.ts`, `TeamFrame`, `useMeta.ts`, `PositionFormFields.tsx`, `useTreeLayout.ts`, `layout.tsx`, `src/types/index.ts`, `TeamSearch.tsx`, `TeamLogo.tsx`, `TeamFormContent.tsx`, `package.json`, `MemberSuggestFields.tsx`, `Member`, `utils/membersTree/index.ts`, `TeamFrame`, `Toolbar.tsx`, `SuggestionsTab.tsx`, `useTeamForm.ts`, `DropdownOption`, `Member`, `pixi.js`, `useCardAnimation.ts`, `useCanvasTheme.ts`, `searchShortcut.ts`, `constants/filters.ts`, `BirthdayFilterSection.tsx`, `useTapWithoutDrag.ts`, `api/auth.ts`, `MemberBirthdayAnimation.tsx`, `TeamTypeFormContent.tsx`, `Sidebar.tsx`, `gsap`, `MemberSidebar.tsx`, `useT.ts`, `EditMemberForm.tsx`, `useProgressiveIds.ts`, `PhotoViewer.tsx`, `FilterState`, `MemberSuggestForm.tsx`, `AccountPanel.tsx`, `TeamTypeIdentityTile.tsx`, `PhotoViewer.tsx`?**
  _High betweenness centrality (0.080) - this node is a cross-community bridge._
- **Should `MemberPane.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.12100840336134454 - nodes in this community are weakly interconnected._
- **Why does `Constructor options` connect `Common Mistakes` to `ref_vitest`?**
  _High betweenness centrality (0.077) - this node is a cross-community bridge._
- **Should `server/package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.0625 - nodes in this community are weakly interconnected._