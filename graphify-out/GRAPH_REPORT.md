# Graph Report - best-family-tree  (2026-11-19)

## Corpus Check
- 740 files · ~223,735 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 33 file(s) not represented in the graph (top: .prisma 10, (none) 7, .css 7)

## Summary
- 3421 nodes · 10188 edges · 150 communities (138 shown, 12 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 100 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `75b27065`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- uk/index.ts
- react
- MemberPane.tsx
- server/package.json
- ThemeContext.tsx
- auth/types.ts
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
- useTreeLayout.ts
- scripts
- TeamFrame
- oidc.ts
- challenges.ts
- HTML Report Format
- useDashedPathAnimation.ts
- src/types/index.ts
- teamService.ts
- MemberSuggestFields.tsx
- compilerOptions
- compilerOptions
- ApplicationOptions reference
- dependencies
- dependencies
- TeamSearch.tsx
- sections/index.ts
- filterMembers.ts
- TeamTypeFormContent.tsx
- Common Mistakes
- package.json
- useT
- TeamFormContent.tsx
- Direction
- Core Patterns
- devDependencies
- toApiError
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
- suggestChanges.ts
- MemberPositions.tsx
- next.config.mjs
- postcss.config.mjs
- FitViewButton.tsx
- useTeamForm.ts
- Core Patterns
- locale.ts
- filtersStore.ts
- useTeamTypeForm.ts
- MembersTreeContent.tsx
- memberService.ts
- BEST Family Tree
- Diagnosing Bugs
- useCardAnimation.ts
- useMeta.ts
- teamPacking.ts
- backfillGender.ts
- Core Patterns
- Core Patterns
- useSettingsStore
- emailRoutes.ts
- constants/filters.ts
- YearRangeFilterSection.tsx
- useCanvasTheme.ts
- Core Patterns
- Core Patterns
- Core Patterns
- api/auth.ts
- ref_vitest
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
- useMeta.ts
- pixijs/SKILL.md
- backup-prod.sh
- start-prod.sh
- restore-local.sh
- PanelResetButton.tsx
- gsap
- Member
- Core Patterns
- Render Loop
- pixijs-core-concepts/SKILL.md
- memberPresentation.ts
- Common Mistakes
- telegramEligibility.ts
- EditMemberForm.tsx
- FiltersPanel.tsx
- PhotoViewer.tsx
- migrateMembersFromMongodb.ts
- MaskIcon.tsx
- Renderers: WebGPU, WebGL, and Canvas
- Toolbar.tsx
- MemberSuggestForm.tsx
- MemberInfo.tsx
- pixijs-scene-core-concepts/SKILL.md
- opengraph-image.tsx
- FilterCategoryPane.tsx
- proxy.ts
- seedQuestions.ts
- piiCheck.ts
- BirthdayFilterSection.tsx
- Common Mistakes
- importAllowedEmails.ts
- http
- plural.ts
- MembersTreeContent.tsx
- devDependencies
- GSAP with React
- emailCodes.ts
- hitl-loop.template.sh
- fakeIdentity.ts
- eligibility.ts
- Core Patterns
- GSAP Performance
- GSAP Timeline
- constants/member.ts
- Common Mistakes
- ref_vitest
- contactKeys.ts
- DatesPane.tsx
- checkConfig.ts
- FormFooter.tsx
- useRoleForm.ts
- @prisma/config
- TeamFormContent.tsx

## God Nodes (most connected - your core abstractions)
1. `useT()` - 214 edges
2. `AccentColor` - 188 edges
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

## Communities (150 total, 12 thin omitted)

### Community 0 - "uk/index.ts"
Cohesion: 0.07
Nodes (22): access, account, auth, common, errors, Params, platformLabels, formCommon (+14 more)

### Community 1 - "react"
Cohesion: 0.13
Nodes (29): react, Props, TeamTypeForm(), ManageList(), ITEMS, ManageRail(), Props, TABS (+21 more)

### Community 2 - "MemberPane.tsx"
Cohesion: 0.15
Nodes (13): ACTIVITY_ICONS, IconComponent, IconProps, greenPillIcon(), IconProps, MemberPane(), GENDER_ICONS, IconProps (+5 more)

### Community 3 - "server/package.json"
Cohesion: 0.07
Nodes (28): cloudinary, compression, concurrently, cors, express-rate-limit, helmet, multer-storage-cloudinary, nodemon (+20 more)

### Community 4 - "ThemeContext.tsx"
Cohesion: 0.11
Nodes (22): darkTheme, DEFAULT_THEME, lightTheme, THEMES, applyCssTokens(), ThemeContext, ThemeContextValue, ThemeProvider() (+14 more)

### Community 5 - "auth/types.ts"
Cohesion: 0.21
Nodes (11): canManageGrant(), canSelfServe(), hasAccess(), isOwnGrant(), RANK, CONTACT_FIELDS, AccessRank, Express (+3 more)

### Community 6 - "bakeParams.ts"
Cohesion: 0.21
Nodes (17): AuroraBackground(), readNumber(), useBakedAurora(), AuroraBakeInput, bakeAuroraLayers(), canBakeAurora(), BAKE_SCALE, BLUR_SPREAD (+9 more)

### Community 7 - "suggestionCreate.ts"
Cohesion: 0.11
Nodes (30): canSuggest(), deleteCloudinaryImage(), deleteReplacedImage(), discardUpload(), extractCloudinaryPublicId(), holdsPositionIn(), ownPhoto, router (+22 more)

### Community 8 - "suggestionCreate.ts"
Cohesion: 0.08
Nodes (49): canEditMember(), assertMentorExists(), assertNoMentorCycle(), assertUniqueContacts(), applyPhone(), Suggestion, buildRows(), checkMemberRows() (+41 more)

### Community 9 - "teamLayout.ts"
Cohesion: 0.10
Nodes (31): elkjs, failOver(), getWorker(), Pending, requestLayout(), runInline(), TeamBlock, computeTeamLayout() (+23 more)

### Community 10 - "teamFrame.ts"
Cohesion: 0.14
Nodes (24): TEAM_COLUMN_GAP, TEAM_EDGE_DROP, TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_SPREAD_WIDTH, TEAM_EDGE_STUB, TEAM_FRAME_HEADER, TEAM_FRAME_MIN_WIDTH, TEAM_FRAME_PADDING (+16 more)

### Community 11 - "AccountRoles.tsx"
Cohesion: 0.27
Nodes (8): FlowerIcon(), Props, MapleLeafIcon(), Props, Placement, PLACEMENTS, Props, SeasonMotif()

### Community 12 - "anonymizeDemo.ts"
Cohesion: 0.14
Nodes (11): allowed, args, byId, factory, GROUP_NAMES, memberPhotos, nextFace, real (+3 more)

### Community 13 - "src/index.ts"
Cohesion: 0.09
Nodes (29): express, multer, sessionFromRequest(), app, checkOrigin(), requireAccess(), requireEditorForWrites(), requireSession() (+21 more)

### Community 14 - "ref_vitest"
Cohesion: 0.16
Nodes (19): Props, FamilyGroupRef, familyIdToSlug(), familySlug, familyTokenToId(), groups, filtersToSearchParams(), parseCsvArray() (+11 more)

### Community 15 - "sessions.ts"
Cohesion: 0.14
Nodes (18): CHALLENGE_TTL_MS, isProduction(), QUESTIONS_SHOWN, SESSION_COOKIE, SESSION_TTL_MS, SIGN_IN_COOKIE, useSecureCookie(), readPending() (+10 more)

### Community 16 - "useTreeLayout.ts"
Cohesion: 0.10
Nodes (29): useSceneTransition(), useResolvedDirection(), useTreeLayout(), DEFAULT_NODE_HEIGHT, DEFAULT_NODE_WIDTH, DEFAULT_POSITION, FLOW_VIEWPORT_DIRECTION, MembersState (+21 more)

### Community 17 - "scripts"
Cohesion: 0.12
Nodes (17): scripts, auth:grant, auth:import-emails, auth:preview-email, auth:report-duplicate-contacts, auth:seed-grants, auth:seed-questions, build (+9 more)

### Community 18 - "TeamFrame"
Cohesion: 0.11
Nodes (27): Props, Props, Props, Props, TeamFramesLayer(), Props, TeamOverviewLayer(), MembersTreeScene() (+19 more)

### Community 19 - "oidc.ts"
Cohesion: 0.13
Nodes (24): Container events, Transform, Lifecycle events, Origin (new in v8), openid-client, callbackErrorRedirect(), configs, cookieOptions() (+16 more)

### Community 20 - "challenges.ts"
Cohesion: 0.13
Nodes (22): zod, ChallengeState, isExpired(), isSolved(), pickRandom(), swapQuestion(), SwapResult, base (+14 more)

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "useDashedPathAnimation.ts"
Cohesion: 0.14
Nodes (22): LineageEdge(), DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN, MIN_ANIM_DURATION, PATTERN_LEN, RETRACT_BASE (+14 more)

### Community 23 - "src/types/index.ts"
Cohesion: 0.05
Nodes (81): @heroicons/react, next, tailwind-merge, PAIR_COLORS, Props, GLOW, Props, LionIcon() (+73 more)

### Community 24 - "teamService.ts"
Cohesion: 0.10
Nodes (33): adminGrantLocked(), ownGrantError(), resolvePosition(), MemberTransaction, assertCanEditMembers(), deriveTeamName(), resolveRole(), resolveTeam() (+25 more)

### Community 25 - "MemberSuggestFields.tsx"
Cohesion: 0.17
Nodes (17): FacebookIcon(), FacebookGlyph(), InstagramGlyph(), LinkedinGlyph(), svgProps, TelegramGlyph(), InstagramIcon(), LinkedinIcon() (+9 more)

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

### Community 31 - "TeamSearch.tsx"
Cohesion: 0.18
Nodes (18): HighlightedTitle(), Props, SearchSuggestionRow(), SuggestionRowProps, compare(), getSearchable(), Props, TeamSearch() (+10 more)

### Community 32 - "sections/index.ts"
Cohesion: 0.21
Nodes (8): FilterCheckbox(), Props, Props, CheckGroup, Option, Props, Props, TeamPeriodFilterSection()

### Community 33 - "filterMembers.ts"
Cohesion: 0.15
Nodes (27): birthdayBoundKey(), countActiveFilters(), countActiveMemberFilters(), isFilterActive(), isIdListSet(), isListFilterSet(), matchesBirthday(), matchesFamilyGroup() (+19 more)

### Community 34 - "TeamTypeFormContent.tsx"
Cohesion: 0.18
Nodes (11): AccessGrant, Props, ConfirmDeleteControl(), Props, Props, Props, Props, Props (+3 more)

### Community 35 - "Common Mistakes"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, Constructor options, [CRITICAL] Using lineStyle instead of stroke, [CRITICAL] Using old shape method names, [CRITICAL] Using v7 beginFill/drawRect/endFill, [HIGH] Clearing and redrawing Graphics every frame, [HIGH] Destroying a shared GraphicsContext unexpectedly (+4 more)

### Community 36 - "package.json"
Cohesion: 0.09
Nodes (21): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+13 more)

### Community 37 - "useT"
Cohesion: 0.14
Nodes (32): byLabel(), CheckOption, Props, useStableOrder(), FormField(), GenderFormField(), MemberBasicsSection(), MemberBestSection() (+24 more)

### Community 38 - "TeamFormContent.tsx"
Cohesion: 0.15
Nodes (26): FieldError(), Props, createEmptyPositionRow(), EMPTY_POSITION_ROW, findTeamByName(), getPositionRowSummary(), getRoleOptions(), getRowPeriod() (+18 more)

### Community 39 - "Direction"
Cohesion: 0.09
Nodes (43): EdgesLayer(), drawLerped(), drawPolyline(), TeamEdgesLayer(), FIXED_EDGE_WIDTH, NODE_AVATAR_RADIUS, NODE_HEIGHT, Point (+35 more)

### Community 40 - "Core Patterns"
Cohesion: 0.12
Nodes (20): Adding and removing children, API Reference, Bounds and coordinate conversion, Common Mistakes, Core Patterns, [CRITICAL] Adding children to leaf scene objects, Destroy, Finding and removing from parent (+12 more)

### Community 41 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+5 more)

### Community 42 - "toApiError"
Cohesion: 0.10
Nodes (21): react-datepicker, metadata, nunito, RootLayout(), writeLocaleCookie(), detectLocale(), isLocale(), Locale (+13 more)

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
Cohesion: 0.08
Nodes (46): Props, TeamBadge(), FILL_ALPHA, lerp(), Props, STROKE_ALPHA, TeamFrame(), Props (+38 more)

### Community 47 - "SettingsPanel.tsx"
Cohesion: 0.23
Nodes (12): FamilyTreeIcon(), Props, edgeIcon(), edgeStyleOptions(), iconClass, orientationOptions(), themeOptions(), treeModeOptions() (+4 more)

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "SuggestionsTab.tsx"
Cohesion: 0.19
Nodes (17): approveSuggestion(), fetchSuggestions(), parse(), rejectSuggestion(), SuggestionDto, ManageScrollArea(), ReviewKind, fieldLabelKey() (+9 more)

### Community 50 - "en/index.ts"
Cohesion: 0.10
Nodes (24): access, account, auth, common, errors, Params, platformLabels, filters (+16 more)

### Community 51 - "AGENTS.md"
Cohesion: 0.25
Nodes (7): Commands, Conventions, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout, This is NOT the Next.js you know

### Community 52 - "scripts"
Cohesion: 0.20
Nodes (10): scripts, build, db:backup-prod, db:restore-local, dev, dev:webpack, lint, start (+2 more)

### Community 53 - "suggestChanges.ts"
Cohesion: 0.19
Nodes (11): buildMemberFormData(), buildEditPayload(), normalizePhone(), buildTeamChanges(), findEmptiedTeamFields(), SuggestableMember, SuggestableTeam, SuggestMemberForm (+3 more)

### Community 54 - "MemberPositions.tsx"
Cohesion: 0.24
Nodes (9): Props, Props, PositionBadge(), Props, useStackOnOverflow(), MemberPosition, getPositionPeriod(), getPositionYearLabel() (+1 more)

### Community 57 - "FitViewButton.tsx"
Cohesion: 0.27
Nodes (10): CheckListFilter(), CheckRow(), Props, byName(), GroupedCheckListFilter(), Props, Props, SearchField() (+2 more)

### Community 58 - "useTeamForm.ts"
Cohesion: 0.16
Nodes (22): createTeam(), deleteTeam(), fetchTeamDetails(), parse(), setTeamMembers(), TeamMemberPayload, updateTeam(), buildTeamRequestBody() (+14 more)

### Community 59 - "Core Patterns"
Cohesion: 0.12
Nodes (17): Application destroy/recreate cycle, Batching optimization, cacheAsTexture for performance, Core Patterns, Culling, Filters and masks cost, Graphics performance, Low-level rendering optimizations (+9 more)

### Community 60 - "locale.ts"
Cohesion: 0.06
Nodes (35): Renderer selection at runtime, [MEDIUM] Using container.name instead of container.label, countMembersByRole(), router, booleanLike, isValidPeriod(), MIN_TEAM_YEAR, name() (+27 more)

### Community 61 - "filtersStore.ts"
Cohesion: 0.19
Nodes (15): derive(), FiltersActions, FiltersState, initialState, areSetsEqual(), computeFilteredMembers(), FilteredMembers, Source (+7 more)

### Community 62 - "useTeamTypeForm.ts"
Cohesion: 0.14
Nodes (17): EVENT_FEATURES, MembersTreeContent(), Props, ViewportCulling(), useFilterSearchParams(), useTransientMessage(), useTeamSelection(), useViewportCulling() (+9 more)

### Community 63 - "MembersTreeContent.tsx"
Cohesion: 0.11
Nodes (23): @pixi/react, PixiElements, @pixi/react, pixi-viewport, EMPTY_IDS, SharpAvatarTracker(), View, Props (+15 more)

### Community 64 - "memberService.ts"
Cohesion: 0.07
Nodes (42): adapter, prisma, buildMemberFields(), buildMemberUpdateFields(), buildSharedFields(), buildSparseMemberFields(), parsePhoneNumbers(), parsePositionsPayload() (+34 more)

### Community 65 - "BEST Family Tree"
Cohesion: 0.10
Nodes (19): 1. Clone and configure environment, 2. Start the application, 3. Run database migrations, 4. Access the app, Architecture, Automated backups (GitHub Actions), Available Commands, Backend Commands (run inside container) (+11 more)

### Community 66 - "Diagnosing Bugs"
Cohesion: 0.13
Nodes (14): Completion criterion: a tight loop that goes red, Diagnosing Bugs, Minimise, Non-deterministic bugs, Phase 1: Build a feedback loop, Phase 2: Reproduce + minimise, Phase 3: Hypothesise, Phase 4: Instrument (+6 more)

### Community 67 - "useCardAnimation.ts"
Cohesion: 0.18
Nodes (19): clamp01(), deferCardHidden(), easeBackOut, easePower2In, easePower2Out, entries, Entry, finishCardReveal() (+11 more)

### Community 68 - "useMeta.ts"
Cohesion: 0.20
Nodes (8): fetchTeams(), EMPTY, loadFamilyGroups(), useFamilyGroups(), EMPTY, rolesStore, teamsStore, teamTypesStore

### Community 69 - "teamPacking.ts"
Cohesion: 0.26
Nodes (9): TEAM_FRAME_GAP, TEAM_PACK_ASPECT, computeDirectedPacking(), computePacking(), packLanes(), Placement, scorePacking(), shelfPack() (+1 more)

### Community 70 - "backfillGender.ts"
Cohesion: 0.12
Nodes (15): alreadyDifferent, alreadySame, APPLY, args, duplicates, fileArg, Gender, GENDERS (+7 more)

### Community 71 - "Core Patterns"
Cohesion: 0.13
Nodes (14): API Reference, boundsArea optimization, Common Mistakes, Core Patterns, Culling, HIGH: Expecting automatic culling, HIGH: Using addChild on RenderLayer, MEDIUM: Expecting filters on ancestors to apply to layer children (+6 more)

### Community 72 - "Core Patterns"
Cohesion: 0.12
Nodes (15): Advanced shape primitives, Cloning, clearing, and bounds, Core Patterns, Default styles via setFillStyle / setStrokeStyle, Draw-time transforms, Drawing a texture directly, Gradients and patterns, GraphicsContext sharing (+7 more)

### Community 73 - "useSettingsStore"
Cohesion: 0.16
Nodes (16): CheckedField, getStoredFieldValues(), Links, StoredMemberValues, complete, mentors, sparse, toTime() (+8 more)

### Community 74 - "emailRoutes.ts"
Cohesion: 0.14
Nodes (18): authSecret(), isDemoMode(), CodeOwner, COPY, EmailLocale, escapeHtml(), pairs(), renderSignInCodeEmail() (+10 more)

### Community 75 - "constants/filters.ts"
Cohesion: 0.09
Nodes (33): Constructor options, Effects, Props, ACTIVITY_STATES, DATE_PICKER_CLASSES, EMPTY_FILTER_STATE, GENDER_VALUES, JOIN_SEASONS (+25 more)

### Community 76 - "YearRangeFilterSection.tsx"
Cohesion: 0.23
Nodes (11): JoinYearFilterSection(), Props, Props, RangeInputs(), RangeSlot, parseYear(), Props, YearInput() (+3 more)

### Community 77 - "useCanvasTheme.ts"
Cohesion: 0.13
Nodes (18): lineageEdgePath, ACCIDENTAL_DRAG_MAX_DISTANCE, ACCIDENTAL_DRAG_MAX_MS, LONG_PRESS_MS, TAP_MOVE_TOLERANCE, FONT_FAMILY, NODE_SUBTITLE_STYLE, NODE_TITLE_STYLE (+10 more)

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
Nodes (52): AccessLevel, AuthMethod, Challenge, ChallengeQuestion, fetchSession(), logout(), post(), RequestCodeOutcome (+44 more)

### Community 82 - "ref_vitest"
Cohesion: 0.13
Nodes (9): nextAdmittedIds(), PROGRESSIVE_CHUNK_SIZE, useProgressiveIds(), MAP, ROMAN, ROMAN_INITIAL, ROMAN_INNER, romanize() (+1 more)

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
Cohesion: 0.10
Nodes (19): API Reference, Capture phase events, Common Mistakes, Core Patterns, Cursor styles, Event features, Event properties, Event types (+11 more)

### Community 88 - "MemberNode.tsx"
Cohesion: 0.04
Nodes (63): pixi.js, BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props, acquireEmojiTextures(), createEmojiTexture(), generateRandomPosition() (+55 more)

### Community 89 - "Foundations"
Cohesion: 0.15
Nodes (12): Advanced, Foundations, pixijs-application, pixijs-core-concepts, pixijs-events, pixijs-performance, pixijs-scene-container, pixijs-scene-core-concepts (+4 more)

### Community 90 - "useTeamTypeForm.ts"
Cohesion: 0.17
Nodes (19): fetchGrants(), GrantLevel, parse(), removeGrant(), setGrant(), ApiError, errorMessage(), ErrorParams (+11 more)

### Community 91 - "Sidebar.tsx"
Cohesion: 0.14
Nodes (15): Props, SuccessBubble(), Sidebar(), Props, SidebarBehindCover(), SidebarCoverTint(), Props, SidebarFooter() (+7 more)

### Community 92 - "server/src/utils/index.ts"
Cohesion: 0.18
Nodes (11): Container vs leaf (CRITICAL), Core Concepts, Culling, Destroy semantics, Lifecycle events, Masking, Render groups, Render order and explicit z-ordering (+3 more)

### Community 93 - "useMeta.ts"
Cohesion: 0.13
Nodes (19): MembersTree(), Props, Props, isTreeReady(), MembersTree, MembersTreeDynamic(), Props, TreeState (+11 more)

### Community 94 - "pixijs/SKILL.md"
Cohesion: 0.18
Nodes (9): API Reference, Quick Start, Advanced, Fallback: canonical PixiJS docs, Foundations, How to use this skill, Scene Objects, Skill router (+1 more)

### Community 98 - "PanelResetButton.tsx"
Cohesion: 0.31
Nodes (8): FiltersHeader(), Props, FitViewButton(), PanelResetButton(), Props, ToolbarIconButton(), ToolbarTooltip(), useHoverTooltip()

### Community 99 - "gsap"
Cohesion: 0.22
Nodes (17): gsap, Viewport(), NODE_HOVER_ANIMATION_DURATION, NODE_HOVER_SCALE, ZOOMED_OUT_HOVER_SCALE_MAP, getFitViewTargetScale(), useFitViewAnimation(), useFocusFrameAnimation() (+9 more)

### Community 100 - "Member"
Cohesion: 0.06
Nodes (61): NodesLayer(), Props, MemberSidebar(), Props, TeamInfoSidebar(), compare(), getSearchable(), MemberSearch() (+53 more)

### Community 101 - "Core Patterns"
Cohesion: 0.29
Nodes (7): Core Patterns, Frame rate capping, Manual rendering, Per-object update via `onRender`, Priority order, Stop and start, Time units

### Community 102 - "Render Loop"
Cohesion: 0.22
Nodes (8): API Reference, Common Mistakes, [CRITICAL] Treating the ticker callback arg as a number, Frame lifecycle, [HIGH] Using `updateTransform` for per-frame logic, [MEDIUM] Assuming ticker callbacks run after render, Quick Start, Render Loop

### Community 103 - "pixijs-core-concepts/SKILL.md"
Cohesion: 0.22
Nodes (8): API Reference, Decision guide, Environments, Quick concepts, Quick Start, Renderer = systems + pipes, The render loop, Topics

### Community 104 - "memberPresentation.ts"
Cohesion: 0.25
Nodes (8): CloudinaryTransformations, getPhotoUrlAsAvatar(), getPhotoUrlAsRoundAvatar(), formatRecruitmentTerm(), getMemberAvatar(), getMemberNodeAvatar(), RECRUITMENT_SEASON_ACCENT, RECRUITMENT_SEASON_EMOJI

### Community 105 - "Common Mistakes"
Cohesion: 0.50
Nodes (4): Common Mistakes, [HIGH] Accessing app.renderer before init() resolves, [HIGH] Setting DOMAdapter after Application.init, [MEDIUM] Treating `preference` as a guarantee

### Community 106 - "telegramEligibility.ts"
Cohesion: 0.42
Nodes (6): resolveMemberMatch(), phoneKey(), resolveTelegramIdentity(), TelegramIdentity, loadTelegramIdentity(), TelegramClaims

### Community 107 - "EditMemberForm.tsx"
Cohesion: 0.30
Nodes (16): AddMemberForm(), ClearButton(), SubmitButton(), describeSubmitError(), EditMemberForm(), MemberFormFields(), PositionFormFields(), FormError() (+8 more)

### Community 108 - "FiltersPanel.tsx"
Cohesion: 0.20
Nodes (14): CATEGORY_ICONS, FilterCategoryRail(), FiltersFooter(), FiltersPanel(), Props, FilterCategoryPane(), SELF_SCROLLING_PANES, useDraftFilterCount() (+6 more)

### Community 109 - "PhotoViewer.tsx"
Cohesion: 0.09
Nodes (34): react-dom, DropdownPortal(), Props, thumbRadius(), Viewer(), viewportRect(), BUTTON, GLASS (+26 more)

### Community 110 - "migrateMembersFromMongodb.ts"
Cohesion: 0.06
Nodes (41): mongodb, toMemberResponse(), ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember (+33 more)

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

### Community 113 - "Toolbar.tsx"
Cohesion: 0.09
Nodes (19): fetchSuggestionCount(), DemoBadge(), Props, SearchBar(), focusSearchInput(), Props, Toolbar(), ManagePane() (+11 more)

### Community 114 - "MemberSuggestForm.tsx"
Cohesion: 0.16
Nodes (29): fetchMyMemberSuggestions(), fetchMyTeamSuggestions(), PendingSuggestion, photoBody(), postChanges(), removeMyPhoto(), send(), SuggestionChange (+21 more)

### Community 115 - "MemberInfo.tsx"
Cohesion: 0.07
Nodes (50): refreshProfile(), AccountPanel(), Props, AccountRoles(), byLatestYears(), lastYear(), Props, SessionMember (+42 more)

### Community 116 - "pixijs-scene-core-concepts/SKILL.md"
Cohesion: 0.25
Nodes (6): API Reference, Leaf comparison: which skill covers which object, Quick Start, References, Tooling, When to use what (quick decisions)

### Community 117 - "opengraph-image.tsx"
Cohesion: 0.24
Nodes (6): alt, contentType, OpengraphImage(), read(), size, { html }

### Community 118 - "FilterCategoryPane.tsx"
Cohesion: 0.44
Nodes (6): PANES, Props, RolesPane(), TeamsPane(), FilterPaneProps, FilterSection()

### Community 120 - "seedQuestions.ts"
Cohesion: 0.24
Nodes (9): answerMatches(), CYRILLIC_TO_LATIN, normalizeAnswer(), MIN_ACTIVE_QUESTIONS, deleteQuestionSessions(), DEMO_QUESTIONS, active, items (+1 more)

### Community 121 - "piiCheck.ts"
Cohesion: 0.38
Nodes (8): DemoValues, findLeaks(), lowerSet(), norm(), normalizeSocial(), RealValues, clean, real

### Community 122 - "BirthdayFilterSection.tsx"
Cohesion: 0.39
Nodes (6): date-fns, BirthdayFilterSection(), Props, ClearButton(), fromDate(), toDate()

### Community 123 - "Common Mistakes"
Cohesion: 0.20
Nodes (10): Common Mistakes, [CRITICAL] App destroy without releaseGlobalResources, [HIGH] Destroying and recreating objects instead of recycling, [HIGH] Interleaving object types in scene graph, [HIGH] Loading many individual textures instead of spritesheets, [HIGH] Updating Text or HTMLText every frame, [HIGH] Using complex Graphics instead of textures, [MEDIUM] Not staggering bulk texture destruction (+2 more)

### Community 124 - "importAllowedEmails.ts"
Cohesion: 0.19
Nodes (12): AllowedRow, AllowlistDiff, diffAllowlist(), looksLikeEmail(), parseAllowlistCsv(), ParsedAllowlist, splitLine(), apply (+4 more)

### Community 125 - "http"
Cohesion: 0.18
Nodes (18): addMember(), deleteMember(), editMember(), FamilyGroupOption, fetchFamilyGroups(), fetchFamilyTree(), fetchMemberById(), fetchMentorsList() (+10 more)

### Community 126 - "plural.ts"
Cohesion: 0.11
Nodes (16): memberForm, roleForm, search, teamForm, teamTypeForm, familyForms, filters, memberForms (+8 more)

### Community 127 - "MembersTreeContent.tsx"
Cohesion: 0.16
Nodes (17): zustand, membersActions, {
  setMembers,
  reloadMembers,
  addMember,
  updateMember,
  selectMember,
  getMentorsList,
}, useMembersActions(), useMembersMap(), useMentees(), useSelectedId(), useSelectedMember() (+9 more)

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

### Community 134 - "eligibility.ts"
Cohesion: 0.22
Nodes (12): EligibilityMember, EmailIdentity, MemberMatch, normalizeEmail(), resolveEmailIdentity(), loadEmailIdentity(), prismaCodeStore, decideGoogleSignIn() (+4 more)

### Community 135 - "Core Patterns"
Cohesion: 0.25
Nodes (8): Add, remove, swap, Child queries, Core Patterns, Destroying sub-trees, Iterating children, Label-based tree navigation, Reparenting with transform preservation, Replacing a child

### Community 137 - "GSAP Performance"
Cohesion: 0.17
Nodes (11): Batch Reads and Writes, Best practices, Do Not, Frequently updated properties (e.g. mouse followers), GSAP Performance, Many Elements (Stagger, Lists), Prefer Transform and Opacity, Reduce Simultaneous Work (+3 more)

### Community 138 - "GSAP Timeline"
Cohesion: 0.17
Nodes (11): Controlling Playback, Creating a Timeline, Do Not, GSAP Timeline, Labels, Nesting Timelines, Official GSAP Best practices, Position Parameter (+3 more)

### Community 139 - "constants/member.ts"
Cohesion: 0.32
Nodes (5): FOUNDER_JOIN_YEAR, MEMBER_STATUSES, MENTOR_STATUSES, getUpdatedMentorsList(), member

### Community 140 - "Common Mistakes"
Cohesion: 0.33
Nodes (6): Common Mistakes, [CRITICAL] Adding children to a leaf display object, [CRITICAL] Referencing DisplayObject, [HIGH] Forgetting isRenderGroup on large static subtrees, [HIGH] Treating child.x as world space, [MEDIUM] sortableChildren without zIndex

### Community 141 - "ref_vitest"
Cohesion: 0.47
Nodes (3): createFaceSource(), Options, source()

### Community 142 - "contactKeys.ts"
Cohesion: 0.20
Nodes (10): duplicates, fields, groups, ContactFields, contactKey(), ContactPlatform, FIELD_PLATFORMS, findContactCollision() (+2 more)

### Community 143 - "DatesPane.tsx"
Cohesion: 0.53
Nodes (5): DatesPane(), SEASON_ICONS, PillGroupFilterSection(), getSeasonOptions(), isReducedView()

### Community 144 - "checkConfig.ts"
Cohesion: 0.07
Nodes (37): RFC-2045, RFC-2047, assertConfig(), configProblems(), databaseName(), demoProblems(), Env, googleProblems() (+29 more)

### Community 146 - "useRoleForm.ts"
Cohesion: 0.14
Nodes (18): BEST Family Tree, Contributions, Language, People, Sign-in, Teams, Views, createRole() (+10 more)

### Community 148 - "TeamFormContent.tsx"
Cohesion: 0.10
Nodes (40): DropdownMenu(), Props, PositionAssignmentFields(), Props, resolveRoleName(), PositionRowHeader(), FormMessages(), ComboboxInput() (+32 more)

## Knowledge Gaps
- **45 isolated node(s):** `@prisma/client`, `dotenv`, `lodash`, `pixi-filters`, `@tailwindcss/postcss` (+40 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1089 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `MemberPane.tsx`, `ThemeContext.tsx`, `bakeParams.ts`, `ref_vitest`, `DatesPane.tsx`, `useTreeLayout.ts`, `FormFooter.tsx`, `TeamFrame`, `useRoleForm.ts`, `TeamFormContent.tsx`, `useDashedPathAnimation.ts`, `src/types/index.ts`, `MemberSuggestFields.tsx`, `TeamSearch.tsx`, `TeamTypeFormContent.tsx`, `package.json`, `useT`, `TeamFormContent.tsx`, `Direction`, `toApiError`, `TeamFrame`, `SuggestionsTab.tsx`, `MemberPositions.tsx`, `FitViewButton.tsx`, `useTeamForm.ts`, `useTeamTypeForm.ts`, `MembersTreeContent.tsx`, `useCardAnimation.ts`, `useMeta.ts`, `YearRangeFilterSection.tsx`, `useCanvasTheme.ts`, `api/auth.ts`, `ref_vitest`, `MemberNode.tsx`, `useTeamTypeForm.ts`, `Sidebar.tsx`, `useMeta.ts`, `PanelResetButton.tsx`, `gsap`, `Member`, `EditMemberForm.tsx`, `FiltersPanel.tsx`, `PhotoViewer.tsx`, `Toolbar.tsx`, `MemberSuggestForm.tsx`, `MemberInfo.tsx`, `FilterCategoryPane.tsx`, `BirthdayFilterSection.tsx`, `MembersTreeContent.tsx`?**
  _High betweenness centrality (0.098) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _45 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `uk/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07084785133565621 - nodes in this community are weakly interconnected._
- **Why does `filters()` connect `constants/filters.ts` to `Common Mistakes`?**
  _High betweenness centrality (0.098) - this node is a cross-community bridge._
- **Should `react` be split into smaller, more focused modules?**
  _Cohesion score 0.1321353065539112 - nodes in this community are weakly interconnected._
- **Why does `Constructor options` connect `Common Mistakes` to `constants/filters.ts`?**
  _High betweenness centrality (0.074) - this node is a cross-community bridge._
- **Should `server/package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.06896551724137931 - nodes in this community are weakly interconnected._