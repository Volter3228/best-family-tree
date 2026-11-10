# Graph Report - best-family-tree  (2026-11-10)

## Corpus Check
- 446 files · ~154,269 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 27 file(s) not represented in the graph (top: .prisma 9, (none) 6, .css 6)

## Summary
- 2315 nodes · 5872 edges · 116 communities (112 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 57 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `6dbf2754`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- memberFormValidation.ts
- memberPresentation.ts
- next
- MemberFilterCategory.tsx
- SignIn.tsx
- MemberInfo.tsx
- constants/canvas/index.ts
- teamFrame.ts
- PositionFormFields.tsx
- Member
- challenges.ts
- Toolbar.tsx
- memberService.ts
- Toolbar.tsx
- PhotoViewer.tsx
- sessions.ts
- TeamFormContent.tsx
- registerPixiPlugins.ts
- computeFilteredMembers.ts
- catalogValidation.ts
- Sidebar.tsx
- HTML Report Format
- memberRoutes.ts
- membersIndex.ts
- teamService.ts
- filterSearchParams.ts
- compilerOptions
- compilerOptions
- QuestionsForm.tsx
- react
- dependencies
- server/package.json
- src/index.ts
- memberUpdateValidation.ts
- FilterState
- MembersTreeContent.tsx
- package.json
- useCardAnimation.ts
- TeamFilterCategory.tsx
- useDashedPathAnimation.ts
- Core Patterns
- devDependencies
- scripts
- ApplicationOptions reference
- CLAUDE.md
- treeStore.ts
- MemberInfoSocial.tsx
- useTeamForm.ts
- During the session
- ManageForm.tsx
- http
- AGENTS.md
- scripts
- ThemeContext.tsx
- BEST Family Tree
- next.config.mjs
- postcss.config.mjs
- Common Mistakes
- useMeta.ts
- Core Patterns
- Scene Objects
- src/utils/index.ts
- Utilities
- types.ts
- utils/strings.ts
- BEST Family Tree
- Diagnosing Bugs
- membersStore.ts
- Common Mistakes
- TeamInfoSidebar.tsx
- protocol.ts
- Core Patterns
- Core Patterns
- dependencies
- SettingsPanel.tsx
- FitViewButton.tsx
- Core Patterns
- MemberNode.tsx
- Core Patterns
- Core Patterns
- Core Patterns
- Member
- MemberBirthdayAnimation.tsx
- Core Patterns
- Constructor options (Container-inherited)
- Test-Driven Development
- GSAP Core
- Core Patterns
- useHoverNodeAnimation.ts
- Foundations
- Common Mistakes
- pixijs/SKILL.md
- Core Concepts
- TeamMembersEditor.tsx
- Point
- Quick concepts
- start-prod.sh
- Render Loop
- pixijs-core-concepts/SKILL.md
- Core Patterns
- AccentColor
- server/src/types/index.ts
- Renderers: WebGPU, WebGL, and Canvas
- treeStore.ts
- pixijs-scene-core-concepts/SKILL.md
- Container Hierarchy
- GSAP with React
- hitl-loop.template.sh
- Core Patterns
- GSAP Performance
- GSAP Timeline
- Common Mistakes
- dependencies
- memberFormValidation.ts
- pixi.js

## God Nodes (most connected - your core abstractions)
1. `AccentColor` - 115 edges
2. `react` - 112 edges
3. `tailwind-merge` - 58 edges
4. `Member` - 58 edges
5. `TeamFrame` - 40 edges
6. `COLOR_CLASSES` - 39 edges
7. `pixi.js` - 33 edges
8. `FilterState` - 31 edges
9. `http()` - 29 edges
10. `@heroicons/react` - 28 edges

## Surprising Connections (you probably didn't know these)
- `pixijs-scene-container` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs/references/index.md → src/hooks/membersTree/animations/useFitViewAnimation.ts
- `[HIGH] Expecting getBounds() to return a Rectangle` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs-scene-container/SKILL.md → src/hooks/membersTree/animations/useFitViewAnimation.ts
- `pixijs-math` --references--> `Point`  [INFERRED]
  .agents/skills/pixijs/references/index.md → src/types/tree.ts
- `Utilities` --references--> `Point`  [INFERRED]
  .agents/skills/pixijs/SKILL.md → src/types/tree.ts
- `Bounds and coordinate conversion` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs-scene-container/SKILL.md → src/hooks/membersTree/animations/useFitViewAnimation.ts

## Import Cycles
- 3-file cycle: `src/utils/index.ts -> src/utils/membersTree/index.ts -> src/utils/membersTree/lineageEdgePath.ts -> src/utils/index.ts`
- 4-file cycle: `src/context/ThemeContext.tsx -> src/hooks/index.ts -> src/hooks/membersTree/index.ts -> src/hooks/membersTree/useCanvasTheme.ts -> src/context/ThemeContext.tsx`
- 4-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/members.ts -> src/models/index.ts -> src/models/Member.ts`
- 4-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/tree.ts -> src/models/index.ts -> src/models/Member.ts`
- 5-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/filters.ts -> src/types/members.ts -> src/models/index.ts -> src/models/Member.ts`

## Communities (116 total, 4 thin omitted)

### Community 0 - "memberFormValidation.ts"
Cohesion: 0.17
Nodes (23): AddMemberForm(), buildMemberFormData(), describeSubmitError(), EditMemberForm(), getInitialFormData(), FieldError(), Props, MemberFormFields() (+15 more)

### Community 1 - "memberPresentation.ts"
Cohesion: 0.22
Nodes (11): MemberNodeAvatar(), Props, useTexture(), CloudinaryTransformations, getPhotoUrlAsAvatar(), getPhotoUrlAsRoundAvatar(), formatRecruitmentTerm(), getInitials() (+3 more)

### Community 2 - "next"
Cohesion: 0.27
Nodes (6): next, fetchFamilyTree(), Home(), loadTree(), UnauthorizedError, config

### Community 3 - "MemberFilterCategory.tsx"
Cohesion: 0.19
Nodes (13): MemberFilterCategory(), ACTIVITY_OPTIONS, ACTIVITY_STATES, AVATAR_OPTIONS, AVATAR_VALUES, EMPTY_FILTER_STATE, JOIN_SEASONS, MEMBER_STATUSES (+5 more)

### Community 4 - "SignIn.tsx"
Cohesion: 0.16
Nodes (15): logout(), AccountForm(), AuthMessage(), Props, Method, Props, SignInCard(), authStrings (+7 more)

### Community 5 - "MemberInfo.tsx"
Cohesion: 0.23
Nodes (15): LionIcon(), SearchSuggestionItem(), MemberAvatarImage(), MemberAvatarImageInner(), Props, MemberInfo(), MemberInfoActionIcon(), MemberInfoRow() (+7 more)

### Community 6 - "constants/canvas/index.ts"
Cohesion: 0.07
Nodes (26): @pixi/react, PixiElements, pixi-viewport, Props, AVATAR_HIGH_RES_SIZE, AVATAR_LOW_RES_SIZE, BIRTHDAY_ANIMATION_MIN_SCALE, CARD_VIEW_SCALE (+18 more)

### Community 7 - "teamFrame.ts"
Cohesion: 0.11
Nodes (30): pixijs-scene-graphics, Paths and complex shapes, TEAM_COLUMN_GAP, TEAM_EDGE_DROP, TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_SPREAD_WIDTH, TEAM_EDGE_STUB, TEAM_FRAME_HEADER (+22 more)

### Community 8 - "PositionFormFields.tsx"
Cohesion: 0.15
Nodes (27): PositionAssignmentFields(), Props, PositionFormFields(), Props, createEmptyPositionRow(), EMPTY_POSITION_ROW, findTeamByName(), getPositionRowSummary() (+19 more)

### Community 9 - "Member"
Cohesion: 0.13
Nodes (18): Props, Props, isTreeReady(), MembersTree, MembersTreeDynamic(), Props, TreeState, PhotoViewer() (+10 more)

### Community 10 - "challenges.ts"
Cohesion: 0.09
Nodes (30): express-rate-limit, answerMatches(), CYRILLIC_TO_LATIN, normalizeAnswer(), ChallengeState, isExpired(), isSolved(), pickRandom() (+22 more)

### Community 11 - "Toolbar.tsx"
Cohesion: 0.17
Nodes (16): compare(), getSearchable(), MemberSearch(), Props, Props, SearchPanel(), Props, SearchSuggestionRow() (+8 more)

### Community 12 - "memberService.ts"
Cohesion: 0.16
Nodes (22): buildMemberFields(), buildMemberUpdateFields(), buildSharedFields(), buildSparseMemberFields(), assertMentorExists(), assertNoMentorCycle(), assertUniqueContacts(), createMember() (+14 more)

### Community 13 - "Toolbar.tsx"
Cohesion: 0.20
Nodes (13): zustand, FiltersPanel(), Props, SearchBar(), Props, Toolbar(), usePanelToggle(), derive() (+5 more)

### Community 14 - "PhotoViewer.tsx"
Cohesion: 0.10
Nodes (32): cache, loadImageAspect(), PhotoOpenButton(), Props, Viewer(), viewportRect(), clampAxis(), clampOffset() (+24 more)

### Community 15 - "sessions.ts"
Cohesion: 0.09
Nodes (28): express, @prisma/adapter-pg, isDemoMode(), isProduction(), MIN_ACTIVE_QUESTIONS, SESSION_COOKIE, SESSION_TTL_MS, useSecureCookie() (+20 more)

### Community 16 - "TeamFormContent.tsx"
Cohesion: 0.14
Nodes (24): ClearButton(), Props, SubmitButton(), ConfirmDeleteControl(), Props, FormFooter(), Props, FormMessages() (+16 more)

### Community 17 - "registerPixiPlugins.ts"
Cohesion: 0.31
Nodes (6): MembersTree(), CIRCLE_TEXTURE_SRC, PATTERN_TEXTURE_SRC, CHARS, installPixiFonts(), registerPixiPlugins()

### Community 18 - "computeFilteredMembers.ts"
Cohesion: 0.16
Nodes (24): areSetsEqual(), computeFilteredMembers(), isFilterActive(), matchesAvatar(), matchesBirthday(), matchesJoinSeason(), matchesJoinYear(), memberMatchesFilters() (+16 more)

### Community 19 - "catalogValidation.ts"
Cohesion: 0.08
Nodes (33): deleteCloudinaryImage(), extractCloudinaryPublicId(), parsePositionsPayload(), router, TEAM_INCLUDE, router, uploadTeamIcon, rejectUpload() (+25 more)

### Community 20 - "Sidebar.tsx"
Cohesion: 0.17
Nodes (10): Props, Props, Sidebar(), SidebarFooterContext, Props, SidebarHandle(), SidebarHeader(), useSidebarChromeHeights() (+2 more)

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "memberRoutes.ts"
Cohesion: 0.15
Nodes (17): CONTACT_FIELDS, toMemberResponse(), loadFamilyTree, loadReducedFamilyTree, router, parsePhoneNumbers(), MEMBER_INCLUDE, serializeMember() (+9 more)

### Community 23 - "membersIndex.ts"
Cohesion: 0.32
Nodes (9): MembersState, ChildrenMap, MembersMap, Source, collectAllAncestorIds(), collectSiblingIds(), computeLineageBranchIds(), collectDescendantIds() (+1 more)

### Community 24 - "teamService.ts"
Cohesion: 0.15
Nodes (26): getPositionKey(), ResolvedPosition, resolvePosition(), syncPositions(), MemberTransaction, assertCanEditMembers(), deleteMember(), deriveTeamName() (+18 more)

### Community 25 - "filterSearchParams.ts"
Cohesion: 0.15
Nodes (18): Props, useFilterSearchParams(), AvatarFilterValue, ActivityState, Active, Excluded, Inactive, RecruitmentSeason (+10 more)

### Community 26 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, esModuleInterop, forceConsistentCasingInFileNames, module, moduleResolution, noImplicitAny, outDir, paths (+12 more)

### Community 27 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+12 more)

### Community 28 - "QuestionsForm.tsx"
Cohesion: 0.17
Nodes (18): AccessLevel, AuthMethod, Challenge, ChallengeQuestion, fetchSession(), post(), SessionInfo, startChallenge() (+10 more)

### Community 29 - "react"
Cohesion: 0.12
Nodes (27): react, react-dom, DropdownMenu(), Props, DropdownPortal(), Props, BadgeInput(), Props (+19 more)

### Community 30 - "dependencies"
Cohesion: 0.11
Nodes (19): dependencies, date-fns, dotenv, elkjs, gsap, @gsap/react, @heroicons/react, lodash (+11 more)

### Community 31 - "server/package.json"
Cohesion: 0.07
Nodes (27): cloudinary, concurrently, multer, multer-storage-cloudinary, nodemon, @prisma/config, ts-node, tsx (+19 more)

### Community 32 - "src/index.ts"
Cohesion: 0.14
Nodes (14): compression, cors, helmet, assertConfig(), configProblems(), Env, good, app (+6 more)

### Community 33 - "memberUpdateValidation.ts"
Cohesion: 0.14
Nodes (13): zod, ExistingMember, findClearedFields(), memberUpdateBodySchema, parsePhones(), sparseMemberBodySchema, splitName(), completeMember (+5 more)

### Community 34 - "FilterState"
Cohesion: 0.11
Nodes (30): BirthdayFilterSection(), Props, CheckboxGroupFilterSection(), Option, Props, ClearButton(), FilterCheckbox(), Props (+22 more)

### Community 35 - "MembersTreeContent.tsx"
Cohesion: 0.15
Nodes (20): @pixi/react, EMPTY_IDS, SharpAvatarTracker(), View, Viewport(), ACCENT_COLOR_MAP, EVENT_FEATURES, MembersTreeContent() (+12 more)

### Community 36 - "package.json"
Cohesion: 0.11
Nodes (18): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+10 more)

### Community 37 - "useCardAnimation.ts"
Cohesion: 0.18
Nodes (17): clamp01(), easeBackOut, easePower2In, easePower2Out, entries, Entry, finishCardReveal(), registerCardReveal() (+9 more)

### Community 38 - "TeamFilterCategory.tsx"
Cohesion: 0.16
Nodes (14): FilterCategory(), LION_GROUP_ICON, LION_ICON, Props, FilterGroupProps, ALL_SECTIONS_CLOSED, Props, RoleFilterSection() (+6 more)

### Community 39 - "useDashedPathAnimation.ts"
Cohesion: 0.09
Nodes (35): LineageEdge(), DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN, MIN_ANIM_DURATION, PATTERN_LEN, RETRACT_BASE (+27 more)

### Community 40 - "Core Patterns"
Cohesion: 0.11
Nodes (17): API Reference, Common Mistakes, Coordinate conversion, Core Patterns, Cumulative alpha (getGlobalAlpha), Global, local, and screen coordinates, [HIGH] Setting scale to 0, [MEDIUM] Confusing anchor and pivot (+9 more)

### Community 41 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+5 more)

### Community 42 - "scripts"
Cohesion: 0.18
Nodes (11): scripts, auth:grant, auth:seed-questions, build, migrate:mongodb, prisma:generate, prisma:migrate-dev, prisma:studio (+3 more)

### Community 43 - "ApplicationOptions reference"
Cohesion: 0.06
Nodes (32): Accessibility, ApplicationOptions reference, Background, Culler (CullerPluginOptions), Deprecated (GC — prefer the unified options above), Events, Garbage collection, Graphics (+24 more)

### Community 44 - "CLAUDE.md"
Cohesion: 0.29
Nodes (6): Commands, Conventions, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout

### Community 45 - "treeStore.ts"
Cohesion: 0.13
Nodes (25): gsap, NODE_HEIGHT, NODE_WIDTH, getFitViewTargetScale(), useFitViewAnimation(), useFocusFrameAnimation(), useFocusNodeAnimation(), useViewportAnimation() (+17 more)

### Community 46 - "MemberInfoSocial.tsx"
Cohesion: 0.32
Nodes (6): Props, FacebookIcon(), InstagramIcon(), LinkedinIcon(), TelegramIcon(), MemberInfoSocial()

### Community 47 - "useTeamForm.ts"
Cohesion: 0.27
Nodes (15): createTeam(), deleteTeam(), fetchTeamDetails(), parse(), setTeamMembers(), TeamMemberPayload, updateTeam(), buildTeamRequestBody() (+7 more)

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "ManageForm.tsx"
Cohesion: 0.22
Nodes (15): DropdownSelectInput(), ManageForm(), MemberMode, Section, SECTIONS, TEAM_KINDS, TeamKind, CREATE_EDIT_OPTIONS (+7 more)

### Community 50 - "http"
Cohesion: 0.26
Nodes (12): addMember(), ApiError, toApiError(), deleteMember(), editMember(), fetchMemberById(), fetchMentorsList(), createRole() (+4 more)

### Community 51 - "AGENTS.md"
Cohesion: 0.29
Nodes (6): Commands, Conventions, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout

### Community 52 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, dev, dev:webpack, lint, start, test, typecheck

### Community 53 - "ThemeContext.tsx"
Cohesion: 0.07
Nodes (32): react-datepicker, metadata, nunito, RootLayout(), AuroraBackground(), darkTheme, DEFAULT_THEME, lightTheme (+24 more)

### Community 54 - "BEST Family Tree"
Cohesion: 0.40
Nodes (4): BEST Family Tree, People, Teams, Views

### Community 57 - "Common Mistakes"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, [CRITICAL] App destroy without releaseGlobalResources, [HIGH] Destroying and recreating objects instead of recycling, [HIGH] Interleaving object types in scene graph, [HIGH] Loading many individual textures instead of spritesheets, [HIGH] Updating Text or HTMLText every frame, [HIGH] Using complex Graphics instead of textures (+4 more)

### Community 58 - "useMeta.ts"
Cohesion: 0.16
Nodes (13): createTeamType(), fetchTeams(), updateTeamType(), EMPTY, rolesStore, teamsStore, teamTypesStore, EMPTY_FORM (+5 more)

### Community 59 - "Core Patterns"
Cohesion: 0.12
Nodes (17): Application destroy/recreate cycle, Batching optimization, cacheAsTexture for performance, Core Patterns, Culling, Filters and masks cost, Graphics performance, Low-level rendering optimizations (+9 more)

### Community 60 - "Scene Objects"
Cohesion: 0.12
Nodes (15): Advanced, pixijs-accessibility, pixijs-blend-modes, pixijs-custom-rendering, pixijs-filters, pixijs-html-source, pixijs-performance, pixijs-scene-container (+7 more)

### Community 61 - "src/utils/index.ts"
Cohesion: 0.27
Nodes (7): NodesLayer(), Props, getTeamRoster(), getMemberTeamRoles(), getPositionPeriod(), getPositionYearLabel(), Years

### Community 62 - "Utilities"
Cohesion: 0.33
Nodes (6): pixijs-assets, pixijs-color, pixijs-events, pixijs-math, pixijs-ticker, Utilities

### Community 63 - "types.ts"
Cohesion: 0.23
Nodes (10): canEditMember(), hasAccess(), RANK, AccessRank, Express, Request, Session, requireAccess() (+2 more)

### Community 64 - "utils/strings.ts"
Cohesion: 0.18
Nodes (10): FiltersHeader(), Props, matchesQuery(), Options, formatCount(), normalize(), PARTICIPANT_FORMS, PluralForms (+2 more)

### Community 65 - "BEST Family Tree"
Cohesion: 0.12
Nodes (15): 1. Clone and configure environment, 2. Start the application, 3. Run database migrations, 4. Access the app, Architecture, Available Commands, Backend Commands (run inside container), BEST Family Tree (+7 more)

### Community 66 - "Diagnosing Bugs"
Cohesion: 0.13
Nodes (14): Completion criterion: a tight loop that goes red, Diagnosing Bugs, Minimise, Non-deterministic bugs, Phase 1: Build a feedback loop, Phase 2: Reproduce + minimise, Phase 3: Hypothesise, Phase 4: Instrument (+6 more)

### Community 67 - "membersStore.ts"
Cohesion: 0.24
Nodes (12): membersActions, {
  setMembers,
  reloadMembers,
  addMember,
  updateMember,
  selectMember,
  getMentorsList,
}, useMembersMap(), useMentees(), useSelectedId(), useSelectedMember(), changesStructure(), EMPTY_INDEX (+4 more)

### Community 68 - "Common Mistakes"
Cohesion: 0.33
Nodes (6): Common Mistakes, [CRITICAL] Adding children to a leaf display object, [CRITICAL] Referencing DisplayObject, [HIGH] Forgetting isRenderGroup on large static subtrees, [HIGH] Treating child.x as world space, [MEDIUM] sortableChildren without zIndex

### Community 69 - "TeamInfoSidebar.tsx"
Cohesion: 0.24
Nodes (12): MemberSidebar(), Props, TeamInfoSidebar(), RosterRow(), TeamInfo(), MemberSidebarContent(), Props, SidebarMinimizedSummary() (+4 more)

### Community 70 - "protocol.ts"
Cohesion: 0.07
Nodes (41): elkjs, NODE_CARD_HEIGHT, NODE_CARD_TOP, TEAM_FRAME_GAP, TEAM_PACK_ASPECT, failOver(), getWorker(), Pending (+33 more)

### Community 71 - "Core Patterns"
Cohesion: 0.13
Nodes (14): API Reference, boundsArea optimization, Common Mistakes, Core Patterns, Culling, HIGH: Expecting automatic culling, HIGH: Using addChild on RenderLayer, MEDIUM: Expecting filters on ancestors to apply to layer children (+6 more)

### Community 72 - "Core Patterns"
Cohesion: 0.12
Nodes (15): pixijs-scene-gif, Advanced shape primitives, Cloning, clearing, and bounds, Core Patterns, Default styles via setFillStyle / setStrokeStyle, Draw-time transforms, Drawing a texture directly, Gradients and patterns (+7 more)

### Community 73 - "dependencies"
Cohesion: 0.12
Nodes (16): dependencies, cloudinary, compression, cors, dotenv, express, express-rate-limit, helmet (+8 more)

### Community 74 - "SettingsPanel.tsx"
Cohesion: 0.16
Nodes (11): OPTIONS, Props, ViewModeSwitch(), EDGE_STYLE_OPTIONS, ORIENTATION_OPTIONS, Props, Section(), SectionProps (+3 more)

### Community 75 - "FitViewButton.tsx"
Cohesion: 0.35
Nodes (7): FitViewButton(), Props, Props, ToolbarIconButton(), Props, ToolbarTooltip(), useHoverTooltip()

### Community 76 - "Core Patterns"
Cohesion: 0.18
Nodes (14): Adding and removing children, Bounds and coordinate conversion, Constructor options, Container events, Core Patterns, Destroy, Finding and removing from parent, Leaves vs containers (+6 more)

### Community 77 - "MemberNode.tsx"
Cohesion: 0.16
Nodes (11): AVATAR_HIT_AREA, CARD_PIVOT, EMPTY_FILTERS, getCullArea(), MemberNode(), NODE_HIT_AREA, NODE_PIVOT, Props (+3 more)

### Community 78 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, attach / detach, Common Mistakes, Core Patterns, [CRITICAL] Using `addChild` on a RenderLayer, [HIGH] Layer and attached children in different render groups, Layer + logical parent, Manual sort (+5 more)

### Community 79 - "Core Patterns"
Cohesion: 0.14
Nodes (13): Alpha mask (Sprite-based), API Reference, Common Mistakes, Core Patterns, [HIGH] Using cacheAsTexture with masks, Inverse masking, Mask channel selection, Mask type selection (+5 more)

### Community 80 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, Common Mistakes, Construction options, Core Patterns, [HIGH] Nesting many render groups, [MEDIUM] Constantly adding/removing from a render group, [MEDIUM] Overusing render groups, Profile before adding (+5 more)

### Community 81 - "Member"
Cohesion: 0.14
Nodes (13): date-fns, Props, Props, Props, Props, useSidebar(), Member, MemberMetrics (+5 more)

### Community 82 - "MemberBirthdayAnimation.tsx"
Cohesion: 0.35
Nodes (8): BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props, acquireEmojiTextures(), createEmojiTexture(), generateRandomPosition(), releaseEmojiTextures()

### Community 83 - "Core Patterns"
Cohesion: 0.14
Nodes (14): Context and device loss, Core Patterns, Destroying a renderer, Direct renderer construction, Lazy-loading backend-specific systems and pipes, Manual rendering, Per-renderer options, Preference forms (+6 more)

### Community 84 - "Constructor options (Container-inherited)"
Cohesion: 0.15
Nodes (13): Advanced options and aliases, Before / after, Callbacks, Constructor options (Container-inherited), Display, Effects, Exceptions (line-by-line is fine here), Hierarchy (+5 more)

### Community 85 - "Test-Driven Development"
Cohesion: 0.15
Nodes (10): Designing for Mockability, When to Mock, Anti-patterns, Rules of the loop, Seams: where tests go, Test-Driven Development, What a good test is, Bad Tests (+2 more)

### Community 86 - "GSAP Core"
Cohesion: 0.10
Nodes (20): Accessibility and responsive (gsap.matchMedia()), Common vars, Core Tween Methods, Custom: use CustomEase (plugin), Defaults, Do Not, Easing, Function-based values (+12 more)

### Community 87 - "Core Patterns"
Cohesion: 0.17
Nodes (12): Capture phase events, Core Patterns, Cursor styles, Event features, Event properties, Event types, eventMode values, Global move events and drag (+4 more)

### Community 88 - "useHoverNodeAnimation.ts"
Cohesion: 0.25
Nodes (9): @gsap/react, pixi-filters, NODE_HOVER_ANIMATION_DURATION, NODE_HOVER_SCALE, ZOOMED_OUT_HOVER_SCALE_MAP, calculateTargetScale(), createShadowFilter(), Props (+1 more)

### Community 89 - "Foundations"
Cohesion: 0.29
Nodes (7): Foundations, pixijs-application, pixijs-core-concepts, pixijs-create, pixijs-environments, pixijs-migration-v8, pixijs-scene-core-concepts

### Community 90 - "Common Mistakes"
Cohesion: 0.22
Nodes (8): API Reference, Common Mistakes, [CRITICAL] Adding children to leaf scene objects, [HIGH] Expecting getBounds() to return a Rectangle, [HIGH] Using cacheAsBitmap instead of cacheAsTexture, [MEDIUM] Setting both pivot and origin on the same container, [MEDIUM] Using container.name instead of container.label, Quick Start

### Community 91 - "pixijs/SKILL.md"
Cohesion: 0.12
Nodes (14): API Reference, Common Mistakes, [HIGH] buttonMode removed; use cursor, [HIGH] Default eventMode is passive, [HIGH] Move events only fire over the object in v8, [MEDIUM] Cursor does not inherit from parent, Quick Start, Advanced (+6 more)

### Community 92 - "Core Concepts"
Cohesion: 0.18
Nodes (11): Container vs leaf (CRITICAL), Core Concepts, Culling, Destroy semantics, Lifecycle events, Masking, Render groups, Render order and explicit z-ordering (+3 more)

### Community 93 - "TeamMembersEditor.tsx"
Cohesion: 0.53
Nodes (5): PositionRowHeader(), getSummary(), Props, TeamMembersEditor(), TeamMemberRow

### Community 94 - "Point"
Cohesion: 0.11
Nodes (37): EdgesLayer(), Props, Props, drawPolyline(), Props, TeamEdgesLayer(), FIXED_EDGE_WIDTH, NODE_AVATAR_RADIUS (+29 more)

### Community 95 - "Quick concepts"
Cohesion: 0.50
Nodes (4): Environments, Quick concepts, Renderer = systems + pipes, The render loop

### Community 102 - "Render Loop"
Cohesion: 0.22
Nodes (8): API Reference, Common Mistakes, [CRITICAL] Treating the ticker callback arg as a number, Frame lifecycle, [HIGH] Using `updateTransform` for per-frame logic, [MEDIUM] Assuming ticker callbacks run after render, Quick Start, Render Loop

### Community 103 - "pixijs-core-concepts/SKILL.md"
Cohesion: 0.22
Nodes (8): API Reference, Common Mistakes, Decision guide, [HIGH] Accessing app.renderer before init() resolves, [HIGH] Setting DOMAdapter after Application.init, [MEDIUM] Treating `preference` as a guarantee, Quick Start, Topics

### Community 104 - "Core Patterns"
Cohesion: 0.22
Nodes (9): Add, remove, swap, Child queries, Core Patterns, Destroying sub-trees, Iterating children, Label-based tree navigation, Lifecycle events, Reparenting with transform preservation (+1 more)

### Community 105 - "AccentColor"
Cohesion: 0.11
Nodes (35): @heroicons/react, tailwind-merge, GLOW, Props, Props, Props, Props, Props (+27 more)

### Community 110 - "server/src/types/index.ts"
Cohesion: 0.07
Nodes (30): mongodb, ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember, STATUSES_MAP (+22 more)

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

### Community 113 - "treeStore.ts"
Cohesion: 0.12
Nodes (19): Props, TeamFramesLayer(), MembersTreeScene(), Props, TEAM_OVERVIEW_EDGE_ALPHA, TEAM_OVERVIEW_NODE_ALPHA, Options, TreeActions (+11 more)

### Community 116 - "pixijs-scene-core-concepts/SKILL.md"
Cohesion: 0.25
Nodes (6): API Reference, Leaf comparison: which skill covers which object, Quick Start, References, Tooling, When to use what (quick decisions)

### Community 117 - "Container Hierarchy"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, Container Hierarchy, [CRITICAL] Adding children to a leaf, [HIGH] Destroying the parent without `children: true`, [MEDIUM] Mutating `children` during iteration, Quick Start

### Community 129 - "GSAP with React"
Cohesion: 0.15
Nodes (12): Best practices, Context-Safe Callbacks, Dependency array, scope, and revertOnUpdate, Do Not, gsap.context() in useEffect (when useGSAP isn't used), GSAP with React, Installation, Learn More (+4 more)

### Community 132 - "hitl-loop.template.sh"
Cohesion: 0.83
Nodes (3): capture(), hitl-loop.template.sh script, step()

### Community 135 - "Core Patterns"
Cohesion: 0.29
Nodes (7): Core Patterns, Frame rate capping, Manual rendering, Per-object update via `onRender`, Priority order, Stop and start, Time units

### Community 137 - "GSAP Performance"
Cohesion: 0.17
Nodes (11): Batch Reads and Writes, Best practices, Do Not, Frequently updated properties (e.g. mouse followers), GSAP Performance, Many Elements (Stagger, Lists), Prefer Transform and Opacity, Reduce Simultaneous Work (+3 more)

### Community 138 - "GSAP Timeline"
Cohesion: 0.17
Nodes (11): Controlling Playback, Creating a Timeline, Do Not, GSAP Timeline, Labels, Nesting Timelines, Official GSAP Best practices, Position Parameter (+3 more)

### Community 139 - "Common Mistakes"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, Constructor options, [CRITICAL] Using lineStyle instead of stroke, [CRITICAL] Using old shape method names, [CRITICAL] Using v7 beginFill/drawRect/endFill, [HIGH] Clearing and redrawing Graphics every frame, [HIGH] Destroying a shared GraphicsContext unexpectedly (+4 more)

### Community 140 - "dependencies"
Cohesion: 0.17
Nodes (12): devDependencies, concurrently, nodemon, ts-node, tsx, @types/compression, @types/cors, @types/express (+4 more)

### Community 147 - "memberFormValidation.ts"
Cohesion: 0.11
Nodes (22): CheckedField, getStoredFieldValues(), Links, StoredMemberValues, complete, mentors, sparse, toTime() (+14 more)

### Community 151 - "pixi.js"
Cohesion: 0.05
Nodes (65): pixi.js, MemberNodeMinimizedTooltip(), Props, Props, TeamBadge(), FILL_ALPHA, lerp(), Props (+57 more)

## Knowledge Gaps
- **40 isolated node(s):** `@prisma/client`, `dotenv`, `lodash`, `@tailwindcss/postcss`, `@types/lodash` (+35 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 845 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Point` connect `Point` to `protocol.ts`, `teamFrame.ts`, `useDashedPathAnimation.ts`, `treeStore.ts`, `pixijs/SKILL.md`, `Utilities`?**
  _High betweenness centrality (0.123) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _40 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `constants/canvas/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.06707317073170732 - nodes in this community are weakly interconnected._
- **Why does `Utilities` connect `pixijs/SKILL.md` to `Point`?**
  _High betweenness centrality (0.110) - this node is a cross-community bridge._
- **Should `teamFrame.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.11051693404634581 - nodes in this community are weakly interconnected._
- **Should `Member` be split into smaller, more focused modules?**
  _Cohesion score 0.12648221343873517 - nodes in this community are weakly interconnected._
- **Should `challenges.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.09146341463414634 - nodes in this community are weakly interconnected._