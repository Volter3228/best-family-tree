# Graph Report - best-family-tree  (2026-11-16)

## Corpus Check
- 569 files · ~181,989 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 29 file(s) not represented in the graph (top: .prisma 9, (none) 7, .css 6)

## Summary
- 2810 nodes · 7231 edges · 124 communities (117 shown, 7 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 81 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ed7e3c56`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- oidc.ts
- DropdownSelectInput.tsx
- sessions.ts
- constants/filters.ts
- pixi.js
- MemberPosition
- layout.tsx
- http
- TeamFormContent.tsx
- teamLayout.ts
- teamFrame.ts
- DatesPane.tsx
- anonymizeDemo.ts
- MemberNode.tsx
- backfillGender.ts
- aiFaces.ts
- EditMemberForm.tsx
- memberService.ts
- TeamFrame
- catalogValidation.ts
- ref_vitest
- HTML Report Format
- utils/membersTree/index.ts
- SettingsPanel.tsx
- teamService.ts
- GroupedCheckListFilter.tsx
- compilerOptions
- compilerOptions
- TeamFrame.tsx
- filterMembers.ts
- dependencies
- server/package.json
- eligibility.ts
- Common Mistakes
- FilterState
- ManageForm.tsx
- package.json
- Member
- MemberInfo.tsx
- utils/membersTree/index.ts
- Core Patterns
- devDependencies
- ref_vitest
- oidc.ts
- CLAUDE.md
- Core Patterns
- ApplicationOptions reference
- useMembersStore
- During the session
- TeamInfoSidebar.tsx
- ThemeContext.tsx
- AGENTS.md
- scripts
- pixijs-events/SKILL.md
- BEST Family Tree
- next.config.mjs
- postcss.config.mjs
- settingsStore.ts
- pixijs/SKILL.md
- Core Patterns
- emailCodes.ts
- checkConfig.ts
- src/index.ts
- @heroicons/react
- SearchSuggestionItem.tsx
- BEST Family Tree
- Diagnosing Bugs
- src/utils/index.ts
- bakeParams.ts
- access.ts
- teamLayout.ts
- Core Patterns
- Core Patterns
- dependencies
- constants/theme.ts
- TeamSearch.tsx
- Common Mistakes
- Transforms and Coordinate Spaces
- Core Patterns
- Core Patterns
- Core Patterns
- Common Mistakes
- FilterState
- Core Patterns
- Constructor options (Container-inherited)
- Test-Driven Development
- GSAP Core
- Core Patterns
- Toolbar.tsx
- Foundations
- seedQuestions.ts
- react
- Core Concepts
- constants/member.ts
- pixi-viewport
- backup-prod.sh
- start-prod.sh
- restore-local.sh
- useTreeDirection.ts
- useTreeLayout.ts
- Core Patterns
- src/types/index.ts
- Render Loop
- pixijs-core-concepts/SKILL.md
- MemberPane.tsx
- MemberInfoActions.tsx
- constants/canvas/index.ts
- auth.ts
- PhotoViewer.tsx
- server/src/types/index.ts
- searchShortcut.ts
- Renderers: WebGPU, WebGL, and Canvas
- Core Patterns
- pixijs-scene-core-concepts/SKILL.md
- memberRoutes.ts
- importAllowedEmails.ts
- Common Mistakes
- useCardAnimation.ts
- GSAP with React
- hitl-loop.template.sh
- GSAP Performance
- GSAP Timeline

## God Nodes (most connected - your core abstractions)
1. `react` - 132 edges
2. `AccentColor` - 129 edges
3. `tailwind-merge` - 74 edges
4. `Member` - 67 edges
5. `COLOR_CLASSES` - 46 edges
6. `TeamFrame` - 40 edges
7. `@heroicons/react` - 38 edges
8. `FilterState` - 38 edges
9. `pixi.js` - 35 edges
10. `http()` - 31 edges

## Surprising Connections (you probably didn't know these)
- `pixijs-scene-container` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs/references/index.md → src/hooks/membersTree/animations/useFitViewAnimation.ts
- `Constructor options` --references--> `filters()`  [INFERRED]
  .agents/skills/pixijs-scene-graphics/SKILL.md → src/utils/filters/filterMembers.test.ts
- `Constructor options` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs-scene-container/SKILL.md → src/hooks/membersTree/animations/useFitViewAnimation.ts
- `Finding and removing from parent` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs-scene-container/SKILL.md → src/hooks/membersTree/animations/useFitViewAnimation.ts
- `[HIGH] Expecting getBounds() to return a Rectangle` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs-scene-container/SKILL.md → src/hooks/membersTree/animations/useFitViewAnimation.ts

## Import Cycles
- 3-file cycle: `src/utils/index.ts -> src/utils/membersTree/index.ts -> src/utils/membersTree/lineageEdgePath.ts -> src/utils/index.ts`
- 4-file cycle: `src/context/ThemeContext.tsx -> src/hooks/index.ts -> src/hooks/membersTree/index.ts -> src/hooks/membersTree/useCanvasTheme.ts -> src/context/ThemeContext.tsx`
- 4-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/members.ts -> src/models/index.ts -> src/models/Member.ts`
- 4-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/tree.ts -> src/models/index.ts -> src/models/Member.ts`
- 5-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/filters.ts -> src/types/members.ts -> src/models/index.ts -> src/models/Member.ts`

## Communities (124 total, 7 thin omitted)

### Community 0 - "oidc.ts"
Cohesion: 0.32
Nodes (8): EligibilityMember, MemberMatch, resolveMemberMatch(), phoneKey(), resolveTelegramIdentity(), TelegramIdentity, loadTelegramIdentity(), TelegramClaims

### Community 1 - "DropdownSelectInput.tsx"
Cohesion: 0.22
Nodes (14): DropdownMenu(), Props, ComboboxInput(), Props, ComboboxInputField(), useComboboxState(), DropdownSelectInput(), Props (+6 more)

### Community 2 - "sessions.ts"
Cohesion: 0.11
Nodes (34): authSecret(), CHALLENGE_TTL_MS, isDemoMode(), isProduction(), QUESTIONS_SHOWN, SESSION_COOKIE, SESSION_TTL_MS, SIGN_IN_COOKIE (+26 more)

### Community 3 - "constants/filters.ts"
Cohesion: 0.07
Nodes (41): Constructor options, Effects, ACTIVITY_STATES, DATE_PICKER_CLASSES, EMPTY_FILTER_STATE, GENDER_VALUES, JOIN_SEASONS, MEMBER_STATUSES (+33 more)

### Community 4 - "pixi.js"
Cohesion: 0.13
Nodes (14): pixi.js, MemberNodeAvatar(), Props, AVATAR_HIGH_RES_SIZE, CIRCLE_TEXTURE_SRC, PATTERN_TEXTURE_SRC, useCardHover(), failedSources (+6 more)

### Community 5 - "MemberPosition"
Cohesion: 0.24
Nodes (9): Props, Props, MemberPosition, getTeamRoster(), getMemberTeamRoles(), getPositionPeriod(), getPositionYearLabel(), Years (+1 more)

### Community 6 - "layout.tsx"
Cohesion: 0.14
Nodes (11): react-datepicker, metadata, nunito, RootLayout(), AuroraBackground(), readNumber(), useBakedAurora(), canBakeAurora() (+3 more)

### Community 7 - "http"
Cohesion: 0.06
Nodes (63): addMember(), ApiError, toApiError(), editMember(), FamilyGroupOption, fetchFamilyGroups(), fetchFamilyTree(), fetchMemberById() (+55 more)

### Community 8 - "TeamFormContent.tsx"
Cohesion: 0.10
Nodes (40): ConfirmDeleteControl(), Props, PositionAssignmentFields(), Props, PositionFormFields(), Props, createEmptyPositionRow(), EMPTY_POSITION_ROW (+32 more)

### Community 9 - "teamLayout.ts"
Cohesion: 0.17
Nodes (15): TEAM_FRAME_GAP, TEAM_PACK_ASPECT, TeamBlock, computeTeamLayout(), groupIntoLanes(), moveEdgesToWorld(), shift(), computeDirectedPacking() (+7 more)

### Community 10 - "teamFrame.ts"
Cohesion: 0.06
Nodes (51): Paths and complex shapes, MemberNodeCard(), Props, TEAM_COLUMN_GAP, TEAM_EDGE_DROP, TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_SPREAD_WIDTH, TEAM_EDGE_STUB (+43 more)

### Community 11 - "DatesPane.tsx"
Cohesion: 0.26
Nodes (9): FlowerIcon(), Props, MapleLeafIcon(), Props, Placement, PLACEMENTS, Props, SeasonMotif() (+1 more)

### Community 12 - "anonymizeDemo.ts"
Cohesion: 0.06
Nodes (36): @faker-js/faker, allowed, args, byId, factory, GROUP_NAMES, memberPhotos, nextFace (+28 more)

### Community 13 - "MemberNode.tsx"
Cohesion: 0.05
Nodes (59): @gsap/react, BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props, acquireEmojiTextures(), createEmojiTexture(), generateRandomPosition() (+51 more)

### Community 14 - "backfillGender.ts"
Cohesion: 0.11
Nodes (17): db, row(), alreadyDifferent, alreadySame, APPLY, args, duplicates, fileArg (+9 more)

### Community 15 - "aiFaces.ts"
Cohesion: 0.38
Nodes (3): createFaceSource(), Options, source()

### Community 16 - "EditMemberForm.tsx"
Cohesion: 0.09
Nodes (43): deleteMember(), AddMemberForm(), buildMemberFormData(), ClearButton(), SubmitButton(), describeSubmitError(), EditMemberForm(), getInitialFormData() (+35 more)

### Community 17 - "memberService.ts"
Cohesion: 0.09
Nodes (30): zod, buildMemberFields(), buildMemberUpdateFields(), buildSharedFields(), buildSparseMemberFields(), parsePhoneNumbers(), assertMentorExists(), assertNoMentorCycle() (+22 more)

### Community 18 - "TeamFrame"
Cohesion: 0.10
Nodes (26): Props, Props, Props, TeamFramesLayer(), Props, Props, TeamOverviewLayer(), Props (+18 more)

### Community 19 - "catalogValidation.ts"
Cohesion: 0.07
Nodes (34): Renderer selection at runtime, [MEDIUM] Using container.name instead of container.label, deleteCloudinaryImage(), extractCloudinaryPublicId(), parsePositionsPayload(), TEAM_INCLUDE, router, uploadTeamIcon (+26 more)

### Community 20 - "ref_vitest"
Cohesion: 0.12
Nodes (22): ChallengeState, isExpired(), isSolved(), pickRandom(), swapQuestion(), SwapResult, base, ChallengeView (+14 more)

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "utils/membersTree/index.ts"
Cohesion: 0.15
Nodes (21): LineageEdge(), DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN, MIN_ANIM_DURATION, PATTERN_LEN, RETRACT_BASE (+13 more)

### Community 23 - "SettingsPanel.tsx"
Cohesion: 0.15
Nodes (12): FamilyTreeIcon(), Props, EDGE_STYLE_OPTIONS, iconClass, ORIENTATION_OPTIONS, THEME_OPTIONS, TREE_MODE_OPTIONS, Props (+4 more)

### Community 24 - "teamService.ts"
Cohesion: 0.15
Nodes (26): getPositionKey(), ResolvedPosition, resolvePosition(), syncPositions(), MemberTransaction, assertCanEditMembers(), deriveTeamName(), resolveRole() (+18 more)

### Community 25 - "GroupedCheckListFilter.tsx"
Cohesion: 0.19
Nodes (14): CheckBox(), Props, byLabel(), CheckOption, Props, useStableOrder(), CheckRow(), Props (+6 more)

### Community 26 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, esModuleInterop, forceConsistentCasingInFileNames, module, moduleResolution, noImplicitAny, outDir, paths (+12 more)

### Community 27 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+12 more)

### Community 28 - "TeamFrame.tsx"
Cohesion: 0.12
Nodes (28): TeamBadge(), FILL_ALPHA, lerp(), Props, STROKE_ALPHA, TeamFrame(), TeamOverviewLabel(), Props (+20 more)

### Community 29 - "filterMembers.ts"
Cohesion: 0.10
Nodes (37): useDraftFilterCount(), derive(), areSetsEqual(), computeFilteredMembers(), Source, birthdayBoundKey(), countActiveFilters(), countActiveMemberFilters() (+29 more)

### Community 30 - "dependencies"
Cohesion: 0.11
Nodes (19): dependencies, date-fns, dotenv, elkjs, gsap, @gsap/react, @heroicons/react, lodash (+11 more)

### Community 31 - "server/package.json"
Cohesion: 0.07
Nodes (27): cloudinary, concurrently, helmet, multer, multer-storage-cloudinary, nodemon, ts-node, tsx (+19 more)

### Community 32 - "eligibility.ts"
Cohesion: 0.26
Nodes (10): EmailIdentity, normalizeEmail(), resolveEmailIdentity(), loadEmailIdentity(), callbackErrorRedirect(), decideGoogleSignIn(), GoogleClaims, GoogleDecision (+2 more)

### Community 33 - "Common Mistakes"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, [CRITICAL] App destroy without releaseGlobalResources, [HIGH] Destroying and recreating objects instead of recycling, [HIGH] Interleaving object types in scene graph, [HIGH] Loading many individual textures instead of spritesheets, [HIGH] Updating Text or HTMLText every frame, [HIGH] Using complex Graphics instead of textures (+4 more)

### Community 34 - "FilterState"
Cohesion: 0.12
Nodes (22): BirthdayFilterSection(), Props, ClearButton(), FilterCheckbox(), Props, Props, CheckGroup, JoinYearFilterSection() (+14 more)

### Community 35 - "ManageForm.tsx"
Cohesion: 0.09
Nodes (31): GENDER_OPTIONS, GenderFormField(), Props, FormMessages(), Props, ManageForm(), MemberMode, Section (+23 more)

### Community 36 - "package.json"
Cohesion: 0.10
Nodes (19): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+11 more)

### Community 37 - "Member"
Cohesion: 0.13
Nodes (17): date-fns, Props, Props, Props, MemberInfoCover(), Props, Props, SeasonChip() (+9 more)

### Community 38 - "MemberInfo.tsx"
Cohesion: 0.23
Nodes (10): MemberInfo(), MemberSidebarContent(), useSidebarSwitchAnimation(), CloudinaryTransformations, getIconUrlAsRounded(), getPhotoUrlAsAvatar(), getPhotoUrlForViewer(), getPhotoUrlForViewerPreview() (+2 more)

### Community 39 - "utils/membersTree/index.ts"
Cohesion: 0.11
Nodes (38): EdgesLayer(), drawPolyline(), Props, TeamEdgesLayer(), FIXED_EDGE_WIDTH, FLOW_VIEWPORT_DIRECTION, EdgeStyle, Point (+30 more)

### Community 40 - "Core Patterns"
Cohesion: 0.17
Nodes (15): Adding and removing children, Bounds and coordinate conversion, Core Patterns, Destroy, Finding and removing from parent, Leaves vs containers, Per-frame updates with onRender, Sizing (+7 more)

### Community 41 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+5 more)

### Community 42 - "ref_vitest"
Cohesion: 0.21
Nodes (5): answerMatches(), CYRILLIC_TO_LATIN, normalizeAnswer(), MIN_ACTIVE_QUESTIONS, DEMO_QUESTIONS

### Community 43 - "oidc.ts"
Cohesion: 0.12
Nodes (20): Container events, Transform, Lifecycle events, Origin (new in v8), express-rate-limit, openid-client, configs, cookieOptions() (+12 more)

### Community 44 - "CLAUDE.md"
Cohesion: 0.25
Nodes (7): Commands, Conventions, Deployment & data, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout

### Community 45 - "Core Patterns"
Cohesion: 0.12
Nodes (15): Add, remove, swap, API Reference, Child queries, Common Mistakes, Container Hierarchy, Core Patterns, [CRITICAL] Adding children to a leaf, Destroying sub-trees (+7 more)

### Community 46 - "ApplicationOptions reference"
Cohesion: 0.06
Nodes (32): Accessibility, ApplicationOptions reference, Background, Culler (CullerPluginOptions), Deprecated (GC — prefer the unified options above), Events, Garbage collection, Graphics (+24 more)

### Community 47 - "useMembersStore"
Cohesion: 0.17
Nodes (18): membersActions, {
  setMembers,
  reloadMembers,
  addMember,
  updateMember,
  selectMember,
  getMentorsList,
}, useMembersActions(), useMembersMap(), useMentees(), useMentorsList(), useSelectedId(), useSelectedMember() (+10 more)

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "TeamInfoSidebar.tsx"
Cohesion: 0.28
Nodes (12): fetchSession(), SessionInfo, MemberSidebar(), TeamInfoSidebar(), HeaderChip(), Props, SidebarMinimizedSummary(), canEdit() (+4 more)

### Community 50 - "ThemeContext.tsx"
Cohesion: 0.21
Nodes (12): applyCssTokens(), ThemeContext, ThemeContextValue, ThemeProvider(), CanvasColors, noopSubscribe(), useIsHydrated(), CanvasThemeTokens (+4 more)

### Community 51 - "AGENTS.md"
Cohesion: 0.25
Nodes (7): Commands, Conventions, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout, This is NOT the Next.js you know

### Community 52 - "scripts"
Cohesion: 0.20
Nodes (10): scripts, build, db:backup-prod, db:restore-local, dev, dev:webpack, lint, start (+2 more)

### Community 53 - "pixijs-events/SKILL.md"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] buttonMode removed; use cursor, [HIGH] Default eventMode is passive, [HIGH] Move events only fire over the object in v8, [MEDIUM] Cursor does not inherit from parent, Quick Start

### Community 54 - "BEST Family Tree"
Cohesion: 0.33
Nodes (5): BEST Family Tree, People, Sign-in, Teams, Views

### Community 57 - "settingsStore.ts"
Cohesion: 0.27
Nodes (10): DEFAULT_SETTINGS, readLegacyTheme(), SETTINGS_STORAGE_KEY, SettingsActions, SettingsState, initialState, { storageMock }, useSettingsStore (+2 more)

### Community 58 - "pixijs/SKILL.md"
Cohesion: 0.25
Nodes (7): Advanced, Fallback: canonical PixiJS docs, Foundations, How to use this skill, Scene Objects, Skill router, Utilities

### Community 59 - "Core Patterns"
Cohesion: 0.12
Nodes (17): Application destroy/recreate cycle, Batching optimization, cacheAsTexture for performance, Core Patterns, Culling, Filters and masks cost, Graphics performance, Low-level rendering optimizations (+9 more)

### Community 60 - "emailCodes.ts"
Cohesion: 0.17
Nodes (14): CODE_TTL_MS, CodeOwner, CodeStore, generateCode(), hashCode(), issueCode(), MAX_CODE_ATTEMPTS, sameHash() (+6 more)

### Community 61 - "checkConfig.ts"
Cohesion: 0.07
Nodes (37): RFC-2045, RFC-2047, assertConfig(), configProblems(), databaseName(), demoProblems(), Env, googleProblems() (+29 more)

### Community 62 - "src/index.ts"
Cohesion: 0.09
Nodes (25): compression, cors, express, @prisma/adapter-pg, @prisma/config, sessionFromRequest(), adapter, prisma (+17 more)

### Community 63 - "@heroicons/react"
Cohesion: 0.23
Nodes (9): next, AvatarFileInput(), Props, LogoFileInput(), Props, config, exceedsUploadLimit(), MAX_UPLOAD_BYTES (+1 more)

### Community 64 - "SearchSuggestionItem.tsx"
Cohesion: 0.27
Nodes (8): LionIcon(), Props, SearchSuggestionItem(), Props, SearchSuggestionRow(), Props, TeamSuggestionItem(), getMemberAvatar()

### Community 65 - "BEST Family Tree"
Cohesion: 0.11
Nodes (18): 1. Clone and configure environment, 2. Start the application, 3. Run database migrations, 4. Access the app, Architecture, Available Commands, Backend Commands (run inside container), Backups (+10 more)

### Community 66 - "Diagnosing Bugs"
Cohesion: 0.13
Nodes (14): Completion criterion: a tight loop that goes red, Diagnosing Bugs, Minimise, Non-deterministic bugs, Phase 1: Build a feedback loop, Phase 2: Reproduce + minimise, Phase 3: Hypothesise, Phase 4: Instrument (+6 more)

### Community 67 - "src/utils/index.ts"
Cohesion: 0.15
Nodes (19): @pixi/react, NodesLayer(), Props, EMPTY_IDS, SharpAvatarTracker(), View, Viewport(), EVENT_FEATURES (+11 more)

### Community 68 - "bakeParams.ts"
Cohesion: 0.27
Nodes (13): AuroraBakeInput, bakeAuroraLayers(), BAKE_SCALE, BLUR_SPREAD, CONIC_LAYERS, ConicLayerSpec, cssAngleToCanvasRadians(), getBakeFilter() (+5 more)

### Community 69 - "access.ts"
Cohesion: 0.25
Nodes (10): canEditMember(), hasAccess(), RANK, AccessRank, Express, Request, Session, requireAccess() (+2 more)

### Community 70 - "teamLayout.ts"
Cohesion: 0.14
Nodes (22): elkjs, failOver(), getWorker(), Pending, requestLayout(), runInline(), computeLayout(), elkNodeSize() (+14 more)

### Community 71 - "Core Patterns"
Cohesion: 0.13
Nodes (14): API Reference, boundsArea optimization, Common Mistakes, Core Patterns, Culling, HIGH: Expecting automatic culling, HIGH: Using addChild on RenderLayer, MEDIUM: Expecting filters on ancestors to apply to layer children (+6 more)

### Community 72 - "Core Patterns"
Cohesion: 0.12
Nodes (14): Advanced shape primitives, Cloning, clearing, and bounds, Core Patterns, Default styles via setFillStyle / setStrokeStyle, Draw-time transforms, Drawing a texture directly, Gradients and patterns, GraphicsContext sharing (+6 more)

### Community 73 - "dependencies"
Cohesion: 0.04
Nodes (47): dependencies, cloudinary, compression, cors, dotenv, express, express-rate-limit, helmet (+39 more)

### Community 74 - "constants/theme.ts"
Cohesion: 0.25
Nodes (6): darkTheme, DEFAULT_THEME, lightTheme, THEMES, themeCssMap, themeInitScript

### Community 75 - "TeamSearch.tsx"
Cohesion: 0.12
Nodes (21): Props, compare(), getSearchable(), MemberSearch(), Props, Props, SearchPanel(), compare() (+13 more)

### Community 76 - "Common Mistakes"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [CRITICAL] Adding children to leaf scene objects, [HIGH] Expecting getBounds() to return a Rectangle, [HIGH] Using cacheAsBitmap instead of cacheAsTexture, [MEDIUM] Setting both pivot and origin on the same container, Quick Start

### Community 77 - "Transforms and Coordinate Spaces"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Setting scale to 0, [MEDIUM] Confusing anchor and pivot, [MEDIUM] Reading world transform before first render, Quick Start, Transforms and Coordinate Spaces

### Community 78 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, attach / detach, Common Mistakes, Core Patterns, [CRITICAL] Using `addChild` on a RenderLayer, [HIGH] Layer and attached children in different render groups, Layer + logical parent, Manual sort (+5 more)

### Community 79 - "Core Patterns"
Cohesion: 0.14
Nodes (13): Alpha mask (Sprite-based), API Reference, Common Mistakes, Core Patterns, [HIGH] Using cacheAsTexture with masks, Inverse masking, Mask channel selection, Mask type selection (+5 more)

### Community 80 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, Common Mistakes, Construction options, Core Patterns, [HIGH] Nesting many render groups, [MEDIUM] Constantly adding/removing from a render group, [MEDIUM] Overusing render groups, Profile before adding (+5 more)

### Community 81 - "Common Mistakes"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, Constructor options, [CRITICAL] Using lineStyle instead of stroke, [CRITICAL] Using old shape method names, [CRITICAL] Using v7 beginFill/drawRect/endFill, [HIGH] Clearing and redrawing Graphics every frame, [HIGH] Destroying a shared GraphicsContext unexpectedly (+4 more)

### Community 82 - "FilterState"
Cohesion: 0.10
Nodes (26): CATEGORY_ICONS, FilterCategoryRail(), Props, RailButton(), RailButtonProps, FiltersFooter(), Props, FiltersHeader() (+18 more)

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

### Community 88 - "Toolbar.tsx"
Cohesion: 0.15
Nodes (16): AccountPanel(), Props, DemoBadge(), SearchBar(), Props, SettingsPanel(), focusSearchInput(), Toolbar() (+8 more)

### Community 89 - "Foundations"
Cohesion: 0.15
Nodes (12): Advanced, Foundations, pixijs-application, pixijs-core-concepts, pixijs-events, pixijs-performance, pixijs-scene-container, pixijs-scene-core-concepts (+4 more)

### Community 90 - "seedQuestions.ts"
Cohesion: 0.19
Nodes (8): escapeHtml(), pairs(), renderSignInCodeEmail(), deleteQuestionSessions(), { html }, active, items, valid

### Community 91 - "react"
Cohesion: 0.06
Nodes (32): react, react-dom, Props, FitViewButton(), Props, PanelResetButton(), Props, Props (+24 more)

### Community 92 - "Core Concepts"
Cohesion: 0.18
Nodes (11): Container vs leaf (CRITICAL), Core Concepts, Culling, Destroy semantics, Lifecycle events, Masking, Render groups, Render order and explicit z-ordering (+3 more)

### Community 93 - "constants/member.ts"
Cohesion: 0.40
Nodes (4): FOUNDER_JOIN_YEAR, MEMBER_STATUSES, MENTOR_STATUSES, getUpdatedMentorsList()

### Community 94 - "pixi-viewport"
Cohesion: 0.50
Nodes (3): @pixi/react, PixiElements, pixi-viewport

### Community 98 - "useTreeDirection.ts"
Cohesion: 0.70
Nodes (3): useIsMobileScreen(), useResolvedDirection(), useMediaQuery()

### Community 99 - "useTreeLayout.ts"
Cohesion: 0.08
Nodes (33): MembersTreeScene(), useFocusFrameAnimation(), useFocusNodeAnimation(), useViewportAnimation(), useSceneTransition(), useTreeLayout(), DEFAULT_NODE_HEIGHT, DEFAULT_NODE_WIDTH (+25 more)

### Community 100 - "Core Patterns"
Cohesion: 0.22
Nodes (9): Coordinate conversion, Core Patterns, Cumulative alpha (getGlobalAlpha), Global, local, and screen coordinates, Pivot, Position, scale, rotation, Sizing via width, height, setSize, Skew (+1 more)

### Community 101 - "src/types/index.ts"
Cohesion: 0.09
Nodes (50): @heroicons/react, tailwind-merge, GLOW, Props, Props, Props, Props, Props (+42 more)

### Community 102 - "Render Loop"
Cohesion: 0.22
Nodes (8): API Reference, Common Mistakes, [CRITICAL] Treating the ticker callback arg as a number, Frame lifecycle, [HIGH] Using `updateTransform` for per-frame logic, [MEDIUM] Assuming ticker callbacks run after render, Quick Start, Render Loop

### Community 103 - "pixijs-core-concepts/SKILL.md"
Cohesion: 0.22
Nodes (8): API Reference, Decision guide, Environments, Quick concepts, Quick Start, Renderer = systems + pipes, The render loop, Topics

### Community 104 - "MemberPane.tsx"
Cohesion: 0.10
Nodes (21): ACTIVITY_ICONS, IconComponent, IconProps, GENDER_ICONS, IconProps, ACTIVITY_PILLS, GENDER_PILLS, MemberPane() (+13 more)

### Community 106 - "MemberInfoActions.tsx"
Cohesion: 0.21
Nodes (12): Props, FacebookIcon(), FacebookGlyph(), InstagramGlyph(), LinkedinGlyph(), svgProps, TelegramGlyph(), InstagramIcon() (+4 more)

### Community 107 - "constants/canvas/index.ts"
Cohesion: 0.17
Nodes (14): NODE_HOVER_ANIMATION_DURATION, NODE_HOVER_SCALE, ZOOMED_OUT_HOVER_SCALE_MAP, lineageEdgePath, ACCIDENTAL_DRAG_MAX_DISTANCE, ACCIDENTAL_DRAG_MAX_MS, LONG_PRESS_MS, TAP_MOVE_TOLERANCE (+6 more)

### Community 108 - "auth.ts"
Cohesion: 0.07
Nodes (50): gsap, AccessLevel, AuthMethod, Challenge, ChallengeQuestion, logout(), post(), RequestCodeOutcome (+42 more)

### Community 109 - "PhotoViewer.tsx"
Cohesion: 0.07
Nodes (47): zustand, DropdownPortal(), cache, loadImageAspect(), PhotoOpenButton(), Props, useIsPhotoOpen(), PhotoViewer() (+39 more)

### Community 110 - "server/src/types/index.ts"
Cohesion: 0.07
Nodes (30): mongodb, ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember, STATUSES_MAP (+22 more)

### Community 111 - "searchShortcut.ts"
Cohesion: 0.33
Nodes (6): EDITABLE_TAGS, isEditableTarget(), isSearchShortcut(), ShortcutKeys, Keys, useSearchShortcut()

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

### Community 114 - "Core Patterns"
Cohesion: 0.29
Nodes (7): Core Patterns, Frame rate capping, Manual rendering, Per-object update via `onRender`, Priority order, Stop and start, Time units

### Community 116 - "pixijs-scene-core-concepts/SKILL.md"
Cohesion: 0.14
Nodes (12): API Reference, Common Mistakes, [CRITICAL] Adding children to a leaf display object, [CRITICAL] Referencing DisplayObject, [HIGH] Forgetting isRenderGroup on large static subtrees, [HIGH] Treating child.x as world space, Leaf comparison: which skill covers which object, [MEDIUM] sortableChildren without zIndex (+4 more)

### Community 119 - "memberRoutes.ts"
Cohesion: 0.13
Nodes (19): CONTACT_FIELDS, toMemberResponse(), loadFamilyTree, loadReducedFamilyTree, router, MEMBER_INCLUDE, serializeMember(), assertCanEditMember() (+11 more)

### Community 120 - "importAllowedEmails.ts"
Cohesion: 0.19
Nodes (12): AllowedRow, AllowlistDiff, diffAllowlist(), looksLikeEmail(), parseAllowlistCsv(), ParsedAllowlist, splitLine(), apply (+4 more)

### Community 124 - "Common Mistakes"
Cohesion: 0.50
Nodes (4): Common Mistakes, [HIGH] Accessing app.renderer before init() resolves, [HIGH] Setting DOMAdapter after Application.init, [MEDIUM] Treating `preference` as a guarantee

### Community 125 - "useCardAnimation.ts"
Cohesion: 0.16
Nodes (20): clamp01(), deferCardHidden(), easeBackOut, easePower2In, easePower2Out, entries, Entry, finishCardReveal() (+12 more)

### Community 129 - "GSAP with React"
Cohesion: 0.15
Nodes (12): Best practices, Context-Safe Callbacks, Dependency array, scope, and revertOnUpdate, Do Not, gsap.context() in useEffect (when useGSAP isn't used), GSAP with React, Installation, Learn More (+4 more)

### Community 132 - "hitl-loop.template.sh"
Cohesion: 0.83
Nodes (3): capture(), hitl-loop.template.sh script, step()

### Community 137 - "GSAP Performance"
Cohesion: 0.17
Nodes (11): Batch Reads and Writes, Best practices, Do Not, Frequently updated properties (e.g. mouse followers), GSAP Performance, Many Elements (Stagger, Lists), Prefer Transform and Opacity, Reduce Simultaneous Work (+3 more)

### Community 138 - "GSAP Timeline"
Cohesion: 0.17
Nodes (11): Controlling Playback, Creating a Timeline, Do Not, GSAP Timeline, Labels, Nesting Timelines, Official GSAP Best practices, Position Parameter (+3 more)

## Knowledge Gaps
- **45 isolated node(s):** `@prisma/client`, `dotenv`, `lodash`, `pixi-filters`, `@tailwindcss/postcss` (+40 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 995 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `DropdownSelectInput.tsx`, `pixi.js`, `layout.tsx`, `http`, `TeamFormContent.tsx`, `teamFrame.ts`, `MemberNode.tsx`, `EditMemberForm.tsx`, `TeamFrame`, `utils/membersTree/index.ts`, `GroupedCheckListFilter.tsx`, `TeamFrame.tsx`, `filterMembers.ts`, `FilterState`, `ManageForm.tsx`, `package.json`, `MemberInfo.tsx`, `utils/membersTree/index.ts`, `Core Patterns`, `useMembersStore`, `TeamInfoSidebar.tsx`, `ThemeContext.tsx`, `@heroicons/react`, `SearchSuggestionItem.tsx`, `src/utils/index.ts`, `TeamSearch.tsx`, `FilterState`, `Toolbar.tsx`, `useTreeDirection.ts`, `useTreeLayout.ts`, `src/types/index.ts`, `MemberPane.tsx`, `constants/canvas/index.ts`, `auth.ts`, `PhotoViewer.tsx`, `searchShortcut.ts`, `useCardAnimation.ts`?**
  _High betweenness centrality (0.107) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _45 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `sessions.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.10801393728222997 - nodes in this community are weakly interconnected._
- **Why does `filters()` connect `constants/filters.ts` to `Common Mistakes`?**
  _High betweenness centrality (0.104) - this node is a cross-community bridge._
- **Should `constants/filters.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07422559906487435 - nodes in this community are weakly interconnected._
- **Why does `Constructor options` connect `Common Mistakes` to `constants/filters.ts`?**
  _High betweenness centrality (0.072) - this node is a cross-community bridge._
- **Should `pixi.js` be split into smaller, more focused modules?**
  _Cohesion score 0.12554112554112554 - nodes in this community are weakly interconnected._