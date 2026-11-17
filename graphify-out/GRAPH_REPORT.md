# Graph Report - best-family-tree  (2026-11-17)

## Corpus Check
- 615 files · ~192,626 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 30 file(s) not represented in the graph (top: .prisma 9, (none) 7, .css 7)

## Summary
- 2973 nodes · 7950 edges · 132 communities (124 shown, 8 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 90 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `83ef522b`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- BirthdayFilterSection.tsx
- react
- emailRoutes.ts
- membersStore.ts
- server/package.json
- emailRoutes.ts
- bakeParams.ts
- http
- EditMemberForm.tsx
- teamLayout.ts
- teamFrame.ts
- DatesPane.tsx
- anonymizeDemo.ts
- scale.ts
- src/index.ts
- pixi.js
- SignIn.tsx
- teamFrame.ts
- treeStore.ts
- useTreeLayout.ts
- ref_vitest
- HTML Report Format
- utils/membersTree/index.ts
- SettingsPanel.tsx
- teamService.ts
- constants/canvas/index.ts
- compilerOptions
- compilerOptions
- ApplicationOptions reference
- scripts
- dependencies
- TeamSearch.tsx
- auth.ts
- layout.tsx
- useTeamSelection.ts
- Common Mistakes
- package.json
- ThemeContext.tsx
- positionFormUtils.ts
- utils/membersTree/index.ts
- Core Patterns
- devDependencies
- CodeForm.tsx
- Core Patterns
- CLAUDE.md
- Container Hierarchy
- devDependencies
- Member
- During the session
- settingsStore.ts
- GenderFormField.tsx
- AGENTS.md
- scripts
- MemberBirthdayAnimation.tsx
- RoleForm.tsx
- next.config.mjs
- postcss.config.mjs
- constants/theme.ts
- MemberInfoActions.tsx
- Core Patterns
- emailCodes.ts
- checkConfig.ts
- src/index.ts
- AvatarFileInput.tsx
- memberService.ts
- BEST Family Tree
- Diagnosing Bugs
- memberFormValidation.ts
- MemberStatus
- auth/types.ts
- FilterState
- Core Patterns
- Core Patterns
- dependencies
- Core Patterns
- constants/filters.ts
- clientInstance.ts
- filterTeams.ts
- Core Patterns
- Core Patterns
- Core Patterns
- MemberPane.tsx
- Common Mistakes
- Core Patterns
- Constructor options (Container-inherited)
- Test-Driven Development
- GSAP Core
- Core Patterns
- MemberPosition
- Foundations
- MemberInfo.tsx
- react
- Core Concepts
- telegramEligibility.ts
- useCanvasTheme.ts
- backup-prod.sh
- start-prod.sh
- restore-local.sh
- next
- gsap
- sessionStore.ts
- src/types/index.ts
- Render Loop
- pixijs-core-concepts/SKILL.md
- GroupedCheckListFilter.tsx
- Member
- piiCheck.ts
- TeamTypeFormContent.tsx
- contactKeys.ts
- PhotoViewer.tsx
- migrateMembersFromMongodb.ts
- demoQuestions.test.ts
- Renderers: WebGPU, WebGL, and Canvas
- pixijs/SKILL.md
- src/types/index.ts
- hooks/index.ts
- pixijs-scene-core-concepts/SKILL.md
- fakeIdentity.ts
- Common Mistakes
- searchShortcut.ts
- useCardAnimation.ts
- Core Patterns
- TextInput
- GSAP with React
- aiFaces.ts
- hitl-loop.template.sh
- Common Mistakes
- GSAP Performance
- GSAP Timeline

## God Nodes (most connected - your core abstractions)
1. `AccentColor` - 166 edges
2. `react` - 152 edges
3. `tailwind-merge` - 81 edges
4. `Member` - 71 edges
5. `COLOR_CLASSES` - 54 edges
6. `@heroicons/react` - 45 edges
7. `TeamFrame` - 40 edges
8. `pixi.js` - 38 edges
9. `FilterState` - 38 edges
10. `http()` - 34 edges

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

## Communities (132 total, 8 thin omitted)

### Community 0 - "BirthdayFilterSection.tsx"
Cohesion: 0.10
Nodes (29): DatesPane(), MemberPane(), BirthdayFilterSection(), Props, ClearButton(), FilterCheckbox(), Props, FilterSection() (+21 more)

### Community 1 - "react"
Cohesion: 0.09
Nodes (43): Props, RoleForm(), TeamForm(), ManageList(), ManageNotice(), ManagePane(), Props, ITEMS (+35 more)

### Community 2 - "emailRoutes.ts"
Cohesion: 0.08
Nodes (44): Container events, Transform, Lifecycle events, Origin (new in v8), openid-client, isDemoMode(), isProduction(), SESSION_COOKIE (+36 more)

### Community 3 - "membersStore.ts"
Cohesion: 0.13
Nodes (22): MembersTab(), membersActions, {
  setMembers,
  reloadMembers,
  addMember,
  updateMember,
  selectMember,
  getMentorsList,
}, useMemberById(), useMembersList(), useMembersMap(), useMentees(), useSelectedId() (+14 more)

### Community 4 - "server/package.json"
Cohesion: 0.06
Nodes (31): cloudinary, compression, concurrently, cors, helmet, multer, multer-storage-cloudinary, nodemon (+23 more)

### Community 5 - "emailRoutes.ts"
Cohesion: 0.13
Nodes (21): authSecret(), EmailIdentity, normalizeEmail(), resolveEmailIdentity(), loadEmailIdentity(), prismaCodeStore, decideGoogleSignIn(), GoogleClaims (+13 more)

### Community 6 - "bakeParams.ts"
Cohesion: 0.27
Nodes (13): AuroraBakeInput, bakeAuroraLayers(), BAKE_SCALE, BLUR_SPREAD, CONIC_LAYERS, ConicLayerSpec, cssAngleToCanvasRadians(), getBakeFilter() (+5 more)

### Community 7 - "http"
Cohesion: 0.07
Nodes (58): addMember(), ApiError, toApiError(), deleteMember(), editMember(), FamilyGroupOption, fetchFamilyGroups(), fetchFamilyTree() (+50 more)

### Community 8 - "EditMemberForm.tsx"
Cohesion: 0.24
Nodes (15): RolesPane(), AddMemberForm(), buildMemberFormData(), describeSubmitError(), EditMemberForm(), buildEditPayload(), getInitialFormData(), FormError() (+7 more)

### Community 9 - "teamLayout.ts"
Cohesion: 0.08
Nodes (37): elkjs, TEAM_FRAME_GAP, TEAM_PACK_ASPECT, failOver(), getWorker(), Pending, requestLayout(), runInline() (+29 more)

### Community 10 - "teamFrame.ts"
Cohesion: 0.07
Nodes (51): @pixi/react, Props, TeamBadge(), FILL_ALPHA, lerp(), Props, STROKE_ALPHA, TeamFrame() (+43 more)

### Community 11 - "DatesPane.tsx"
Cohesion: 0.26
Nodes (9): FlowerIcon(), Props, MapleLeafIcon(), Props, Placement, PLACEMENTS, Props, SeasonMotif() (+1 more)

### Community 12 - "anonymizeDemo.ts"
Cohesion: 0.14
Nodes (11): allowed, args, byId, factory, GROUP_NAMES, memberPhotos, nextFace, real (+3 more)

### Community 13 - "scale.ts"
Cohesion: 0.23
Nodes (11): EMPTY_IDS, SharpAvatarTracker(), View, AVATAR_LOW_RES_SIZE, MAX_RENDER_RESOLUTION, TEAM_OVERVIEW_END_SCALE, TEAM_OVERVIEW_FAST_FACTOR, TEAM_OVERVIEW_START_SCALE (+3 more)

### Community 14 - "src/index.ts"
Cohesion: 0.14
Nodes (16): express, app, checkOrigin(), WRITE_METHODS, requireSession(), router, router, loadFamilyTree (+8 more)

### Community 15 - "pixi.js"
Cohesion: 0.06
Nodes (52): pixi.js, contexts, getCardBackgroundContext(), getGlowTexture(), GLOW_BLUR, GLOW_PADDING, GlowKind, paint() (+44 more)

### Community 16 - "SignIn.tsx"
Cohesion: 0.14
Nodes (19): AccountForm(), Props, AuthMessage(), Props, EmailForm(), Props, GoogleButton(), GoogleMark() (+11 more)

### Community 17 - "teamFrame.ts"
Cohesion: 0.10
Nodes (33): TEAM_COLUMN_GAP, TEAM_EDGE_DROP, TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_SPREAD_WIDTH, TEAM_EDGE_STUB, TEAM_FRAME_HEADER, TEAM_FRAME_MIN_WIDTH, TEAM_FRAME_PADDING (+25 more)

### Community 18 - "treeStore.ts"
Cohesion: 0.10
Nodes (32): Props, Props, drawLerped(), drawPolyline(), Props, TeamEdgesLayer(), Props, TeamFramesLayer() (+24 more)

### Community 19 - "useTreeLayout.ts"
Cohesion: 0.11
Nodes (25): GRID_GAP_X, GRID_LR_COLUMNS, getFitViewTargetScale(), useTreeLayout(), DEFAULT_NODE_HEIGHT, DEFAULT_NODE_WIDTH, DEFAULT_POSITION, FLOW_VIEWPORT_DIRECTION (+17 more)

### Community 20 - "ref_vitest"
Cohesion: 0.10
Nodes (28): express-rate-limit, ChallengeState, isExpired(), isSolved(), pickRandom(), swapQuestion(), SwapResult, base (+20 more)

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "utils/membersTree/index.ts"
Cohesion: 0.11
Nodes (29): LineageEdge(), DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN, MIN_ANIM_DURATION, PATTERN_LEN, RETRACT_BASE (+21 more)

### Community 23 - "SettingsPanel.tsx"
Cohesion: 0.12
Nodes (20): FamilyTreeIcon(), Props, FitViewButton(), Props, PanelResetButton(), Props, EDGE_STYLE_OPTIONS, iconClass (+12 more)

### Community 24 - "teamService.ts"
Cohesion: 0.14
Nodes (27): ResolvedPosition, resolvePosition(), MemberTransaction, assertCanEditMembers(), deriveTeamName(), resolveRole(), resolveTeam(), resolveTeamType() (+19 more)

### Community 25 - "constants/canvas/index.ts"
Cohesion: 0.14
Nodes (13): @gsap/react, lineageEdgePath, ACCIDENTAL_DRAG_MAX_DISTANCE, ACCIDENTAL_DRAG_MAX_MS, LONG_PRESS_MS, TAP_MOVE_TOLERANCE, CIRCLE_TEXTURE_SRC, PATTERN_TEXTURE_SRC (+5 more)

### Community 26 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, esModuleInterop, forceConsistentCasingInFileNames, module, moduleResolution, noImplicitAny, outDir, paths (+12 more)

### Community 27 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+12 more)

### Community 28 - "ApplicationOptions reference"
Cohesion: 0.06
Nodes (32): Accessibility, ApplicationOptions reference, Background, Culler (CullerPluginOptions), Deprecated (GC — prefer the unified options above), Events, Garbage collection, Graphics (+24 more)

### Community 29 - "scripts"
Cohesion: 0.12
Nodes (17): scripts, auth:grant, auth:import-emails, auth:preview-email, auth:report-duplicate-contacts, auth:seed-grants, auth:seed-questions, build (+9 more)

### Community 30 - "dependencies"
Cohesion: 0.10
Nodes (20): dependencies, date-fns, dotenv, elkjs, gsap, @gsap/react, @heroicons/react, lodash (+12 more)

### Community 31 - "TeamSearch.tsx"
Cohesion: 0.12
Nodes (23): compare(), getSearchable(), MemberSearch(), Props, SearchBar(), Props, SearchPanel(), SearchSuggestionItem() (+15 more)

### Community 32 - "auth.ts"
Cohesion: 0.20
Nodes (15): AuthMethod, Challenge, ChallengeQuestion, post(), RequestCodeOutcome, requestEmailCode(), startChallenge(), swapQuestion() (+7 more)

### Community 33 - "layout.tsx"
Cohesion: 0.13
Nodes (11): react-datepicker, metadata, nunito, RootLayout(), AuroraBackground(), readNumber(), useBakedAurora(), canBakeAurora() (+3 more)

### Community 34 - "useTeamSelection.ts"
Cohesion: 0.18
Nodes (10): NodesLayer(), Props, nextAdmittedIds(), PROGRESSIVE_CHUNK_SIZE, useProgressiveIds(), useTeamSelection(), getMemberById(), parseTeamNodeId() (+2 more)

### Community 35 - "Common Mistakes"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, Constructor options, [CRITICAL] Using lineStyle instead of stroke, [CRITICAL] Using old shape method names, [CRITICAL] Using v7 beginFill/drawRect/endFill, [HIGH] Clearing and redrawing Graphics every frame, [HIGH] Destroying a shared GraphicsContext unexpectedly (+4 more)

### Community 36 - "package.json"
Cohesion: 0.10
Nodes (20): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+12 more)

### Community 37 - "ThemeContext.tsx"
Cohesion: 0.21
Nodes (12): applyCssTokens(), ThemeContext, ThemeContextValue, ThemeProvider(), CanvasColors, noopSubscribe(), useIsHydrated(), CanvasThemeTokens (+4 more)

### Community 38 - "positionFormUtils.ts"
Cohesion: 0.10
Nodes (37): FieldError(), PositionAssignmentFields(), PositionFormFields(), Props, createEmptyPositionRow(), EMPTY_POSITION_ROW, findTeamByName(), getPositionRowSummary() (+29 more)

### Community 39 - "utils/membersTree/index.ts"
Cohesion: 0.17
Nodes (20): EdgesLayer(), bezierEval(), edgeGeometry, endpoints(), sampleBezierCurve(), sampleEdgePath(), alignPolylines(), cumulativeLengths() (+12 more)

### Community 40 - "Core Patterns"
Cohesion: 0.12
Nodes (20): Adding and removing children, API Reference, Bounds and coordinate conversion, Common Mistakes, Core Patterns, [CRITICAL] Adding children to leaf scene objects, Destroy, Finding and removing from parent (+12 more)

### Community 41 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+5 more)

### Community 42 - "CodeForm.tsx"
Cohesion: 0.27
Nodes (12): verifyEmailCode(), applyDigits(), backspaceAt(), CODE_LENGTH, Edit, emptyDigits(), isComplete(), CodeForm() (+4 more)

### Community 43 - "Core Patterns"
Cohesion: 0.12
Nodes (16): API Reference, Common Mistakes, Coordinate conversion, Core Patterns, Cumulative alpha (getGlobalAlpha), Global, local, and screen coordinates, [HIGH] Setting scale to 0, [MEDIUM] Confusing anchor and pivot (+8 more)

### Community 44 - "CLAUDE.md"
Cohesion: 0.25
Nodes (7): Commands, Conventions, Deployment & data, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout

### Community 45 - "Container Hierarchy"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, Container Hierarchy, [CRITICAL] Adding children to a leaf, [HIGH] Destroying the parent without `children: true`, [MEDIUM] Mutating `children` during iteration, Quick Start

### Community 46 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, concurrently, @faker-js/faker, nodemon, ts-node, tsx, @types/compression, @types/cors (+5 more)

### Community 47 - "Member"
Cohesion: 0.10
Nodes (18): date-fns, Props, Props, Props, SeasonChip(), getSubtitle(), Props, Member (+10 more)

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "settingsStore.ts"
Cohesion: 0.21
Nodes (13): useIsMobileScreen(), useResolvedDirection(), useMediaQuery(), DEFAULT_SETTINGS, readLegacyTheme(), SETTINGS_STORAGE_KEY, SettingsActions, SettingsState (+5 more)

### Community 50 - "GenderFormField.tsx"
Cohesion: 0.36
Nodes (6): GenderFormField(), Props, Chip(), ChipGroup(), Option, Props

### Community 51 - "AGENTS.md"
Cohesion: 0.25
Nodes (7): Commands, Conventions, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout, This is NOT the Next.js you know

### Community 52 - "scripts"
Cohesion: 0.20
Nodes (10): scripts, build, db:backup-prod, db:restore-local, dev, dev:webpack, lint, start (+2 more)

### Community 53 - "MemberBirthdayAnimation.tsx"
Cohesion: 0.24
Nodes (11): BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props, acquireEmojiTextures(), createEmojiTexture(), generateRandomPosition(), releaseEmojiTextures() (+3 more)

### Community 54 - "RoleForm.tsx"
Cohesion: 0.33
Nodes (5): BEST Family Tree, People, Sign-in, Teams, Views

### Community 57 - "constants/theme.ts"
Cohesion: 0.25
Nodes (6): darkTheme, DEFAULT_THEME, lightTheme, THEMES, themeCssMap, themeInitScript

### Community 58 - "MemberInfoActions.tsx"
Cohesion: 0.19
Nodes (13): Props, FacebookIcon(), FacebookGlyph(), InstagramGlyph(), LinkedinGlyph(), svgProps, TelegramGlyph(), InstagramIcon() (+5 more)

### Community 59 - "Core Patterns"
Cohesion: 0.12
Nodes (17): Application destroy/recreate cycle, Batching optimization, cacheAsTexture for performance, Core Patterns, Culling, Filters and masks cost, Graphics performance, Low-level rendering optimizations (+9 more)

### Community 60 - "emailCodes.ts"
Cohesion: 0.07
Nodes (30): AllowedRow, AllowlistDiff, diffAllowlist(), looksLikeEmail(), parseAllowlistCsv(), ParsedAllowlist, splitLine(), CODE_TTL_MS (+22 more)

### Community 61 - "checkConfig.ts"
Cohesion: 0.07
Nodes (36): RFC-2045, RFC-2047, assertConfig(), configProblems(), databaseName(), demoProblems(), Env, googleProblems() (+28 more)

### Community 62 - "src/index.ts"
Cohesion: 0.09
Nodes (28): Renderer selection at runtime, [MEDIUM] Using container.name instead of container.label, countMembersByRole(), router, rejectUpload(), router, uploadTeamTypeIcon, booleanLike (+20 more)

### Community 63 - "AvatarFileInput.tsx"
Cohesion: 0.13
Nodes (24): @heroicons/react, AvatarFileInput(), Props, removeBadgeClasses(), LogoFileInput(), Props, FOCUS_WITHIN, Props (+16 more)

### Community 64 - "memberService.ts"
Cohesion: 0.07
Nodes (46): zod, deleteCloudinaryImage(), extractCloudinaryPublicId(), buildMemberFields(), buildMemberUpdateFields(), buildSharedFields(), buildSparseMemberFields(), parsePhoneNumbers() (+38 more)

### Community 65 - "BEST Family Tree"
Cohesion: 0.11
Nodes (18): 1. Clone and configure environment, 2. Start the application, 3. Run database migrations, 4. Access the app, Architecture, Available Commands, Backend Commands (run inside container), Backups (+10 more)

### Community 66 - "Diagnosing Bugs"
Cohesion: 0.13
Nodes (14): Completion criterion: a tight loop that goes red, Diagnosing Bugs, Minimise, Non-deterministic bugs, Phase 1: Build a feedback loop, Phase 2: Reproduce + minimise, Phase 3: Hypothesise, Phase 4: Instrument (+6 more)

### Community 67 - "memberFormValidation.ts"
Cohesion: 0.16
Nodes (16): getRowPeriod(), CheckedField, getStoredFieldValues(), Links, StoredMemberValues, complete, mentors, sparse (+8 more)

### Community 68 - "MemberStatus"
Cohesion: 0.40
Nodes (4): FOUNDER_JOIN_YEAR, MEMBER_STATUSES, MENTOR_STATUSES, getUpdatedMentorsList()

### Community 69 - "auth/types.ts"
Cohesion: 0.18
Nodes (12): canEditMember(), hasAccess(), RANK, CONTACT_FIELDS, toMemberResponse(), AccessRank, Express, Request (+4 more)

### Community 70 - "FilterState"
Cohesion: 0.10
Nodes (29): CATEGORY_ICONS, FilterCategoryRail(), Props, FiltersFooter(), Props, FiltersHeader(), FiltersPanel(), Props (+21 more)

### Community 71 - "Core Patterns"
Cohesion: 0.13
Nodes (14): API Reference, boundsArea optimization, Common Mistakes, Core Patterns, Culling, HIGH: Expecting automatic culling, HIGH: Using addChild on RenderLayer, MEDIUM: Expecting filters on ancestors to apply to layer children (+6 more)

### Community 72 - "Core Patterns"
Cohesion: 0.12
Nodes (15): Advanced shape primitives, Cloning, clearing, and bounds, Core Patterns, Default styles via setFillStyle / setStrokeStyle, Draw-time transforms, Drawing a texture directly, Gradients and patterns, GraphicsContext sharing (+7 more)

### Community 73 - "dependencies"
Cohesion: 0.12
Nodes (17): dependencies, cloudinary, compression, cors, dotenv, express, express-rate-limit, helmet (+9 more)

### Community 74 - "Core Patterns"
Cohesion: 0.25
Nodes (8): Add, remove, swap, Child queries, Core Patterns, Destroying sub-trees, Iterating children, Label-based tree navigation, Reparenting with transform preservation, Replacing a child

### Community 75 - "constants/filters.ts"
Cohesion: 0.08
Nodes (35): Constructor options, Effects, ACTIVITY_STATES, DATE_PICKER_CLASSES, EMPTY_FILTER_STATE, GENDER_VALUES, JOIN_SEASONS, MEMBER_STATUSES (+27 more)

### Community 76 - "clientInstance.ts"
Cohesion: 0.07
Nodes (28): MIN_ACTIVE_QUESTIONS, deleteQuestionSessions(), adapter, prisma, alreadyDifferent, alreadySame, APPLY, args (+20 more)

### Community 77 - "filterTeams.ts"
Cohesion: 0.11
Nodes (37): areSetsEqual(), computeFilteredMembers(), Source, birthdayBoundKey(), countActiveFilters(), countActiveMemberFilters(), isFilterActive(), isIdListSet() (+29 more)

### Community 78 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, attach / detach, Common Mistakes, Core Patterns, [CRITICAL] Using `addChild` on a RenderLayer, [HIGH] Layer and attached children in different render groups, Layer + logical parent, Manual sort (+5 more)

### Community 79 - "Core Patterns"
Cohesion: 0.14
Nodes (13): Alpha mask (Sprite-based), API Reference, Common Mistakes, Core Patterns, [HIGH] Using cacheAsTexture with masks, Inverse masking, Mask channel selection, Mask type selection (+5 more)

### Community 80 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, Common Mistakes, Construction options, Core Patterns, [HIGH] Nesting many render groups, [MEDIUM] Constantly adding/removing from a render group, [MEDIUM] Overusing render groups, Profile before adding (+5 more)

### Community 81 - "MemberPane.tsx"
Cohesion: 0.11
Nodes (15): ACTIVITY_ICONS, IconComponent, IconProps, greenPillIcon(), SEASON_PILLS, ACTIVITY_PILLS, GENDER_PILLS, STATUS_PILLS (+7 more)

### Community 82 - "Common Mistakes"
Cohesion: 0.33
Nodes (6): Common Mistakes, [CRITICAL] Adding children to a leaf display object, [CRITICAL] Referencing DisplayObject, [HIGH] Forgetting isRenderGroup on large static subtrees, [HIGH] Treating child.x as world space, [MEDIUM] sortableChildren without zIndex

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

### Community 88 - "MemberPosition"
Cohesion: 0.21
Nodes (12): Props, MemberPositions(), Props, PositionBadge(), Props, useStackOnOverflow(), MemberPosition, formatYearRange() (+4 more)

### Community 89 - "Foundations"
Cohesion: 0.15
Nodes (12): Advanced, Foundations, pixijs-application, pixijs-core-concepts, pixijs-events, pixijs-performance, pixijs-scene-container, pixijs-scene-core-concepts (+4 more)

### Community 90 - "MemberInfo.tsx"
Cohesion: 0.14
Nodes (21): LionIcon(), cache, loadImageAspect(), PhotoOpenButton(), Props, useIsPhotoOpen(), MemberInfo(), MemberInfoCover() (+13 more)

### Community 91 - "react"
Cohesion: 0.12
Nodes (16): react, react-dom, IconProps, Props, Props, Sidebar(), SidebarFooterContext, Props (+8 more)

### Community 92 - "Core Concepts"
Cohesion: 0.18
Nodes (11): Container vs leaf (CRITICAL), Core Concepts, Culling, Destroy semantics, Lifecycle events, Masking, Render groups, Render order and explicit z-ordering (+3 more)

### Community 93 - "telegramEligibility.ts"
Cohesion: 0.32
Nodes (8): EligibilityMember, MemberMatch, resolveMemberMatch(), phoneKey(), resolveTelegramIdentity(), TelegramIdentity, loadTelegramIdentity(), TelegramClaims

### Community 94 - "useCanvasTheme.ts"
Cohesion: 0.21
Nodes (10): FONT_FAMILY, NODE_SUBTITLE_STYLE, NODE_TITLE_STYLE, NODE_TOOLTIP_TEXT_STYLE, TEXT_RESOLUTION, buildCanvasColors(), CanvasTextStyleInstances, CanvasTextStyles (+2 more)

### Community 98 - "next"
Cohesion: 0.24
Nodes (7): next, AvatarSkeleton(), MemberAvatarImage(), MemberAvatarImageInner(), Props, SkeletonProps, config

### Community 99 - "gsap"
Cohesion: 0.15
Nodes (22): @pixi/react, PixiElements, gsap, pixi-viewport, Props, Viewport(), NODE_HOVER_ANIMATION_DURATION, NODE_HOVER_SCALE (+14 more)

### Community 100 - "sessionStore.ts"
Cohesion: 0.17
Nodes (15): AccessLevel, fetchSession(), logout(), SessionInfo, AccountPanel(), Props, DemoBadge(), focusSearchInput() (+7 more)

### Community 101 - "src/types/index.ts"
Cohesion: 0.07
Nodes (54): tailwind-merge, GLOW, Props, Props, Props, Props, Props, Props (+46 more)

### Community 102 - "Render Loop"
Cohesion: 0.22
Nodes (8): API Reference, Common Mistakes, [CRITICAL] Treating the ticker callback arg as a number, Frame lifecycle, [HIGH] Using `updateTransform` for per-frame logic, [MEDIUM] Assuming ticker callbacks run after render, Quick Start, Render Loop

### Community 103 - "pixijs-core-concepts/SKILL.md"
Cohesion: 0.22
Nodes (8): API Reference, Decision guide, Environments, Quick concepts, Quick Start, Renderer = systems + pipes, The render loop, Topics

### Community 104 - "GroupedCheckListFilter.tsx"
Cohesion: 0.20
Nodes (14): byLabel(), CheckListFilter(), CheckOption, Props, useStableOrder(), CheckRow(), Props, byName() (+6 more)

### Community 105 - "Member"
Cohesion: 0.24
Nodes (7): MembersTree(), Props, Props, Props, registerPixiPlugins(), MembersActions, Member

### Community 106 - "piiCheck.ts"
Cohesion: 0.38
Nodes (8): DemoValues, findLeaks(), lowerSet(), norm(), normalizeSocial(), RealValues, clean, real

### Community 107 - "TeamTypeFormContent.tsx"
Cohesion: 0.11
Nodes (26): ClearButton(), Props, ConfirmDeleteControl(), Props, FormFooter(), FormMessages(), Props, Props (+18 more)

### Community 108 - "contactKeys.ts"
Cohesion: 0.20
Nodes (10): duplicates, fields, groups, ContactFields, contactKey(), ContactPlatform, FIELD_PLATFORMS, findContactCollision() (+2 more)

### Community 109 - "PhotoViewer.tsx"
Cohesion: 0.08
Nodes (44): zustand, isTreeReady(), MembersTree, MembersTreeDynamic(), Props, TreeState, PhotoViewer(), thumbRadius() (+36 more)

### Community 110 - "migrateMembersFromMongodb.ts"
Cohesion: 0.07
Nodes (31): mongodb, ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember, STATUSES_MAP (+23 more)

### Community 111 - "demoQuestions.test.ts"
Cohesion: 0.43
Nodes (4): answerMatches(), CYRILLIC_TO_LATIN, normalizeAnswer(), DEMO_QUESTIONS

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

### Community 113 - "pixijs/SKILL.md"
Cohesion: 0.25
Nodes (7): Advanced, Fallback: canonical PixiJS docs, Foundations, How to use this skill, Scene Objects, Skill router, Utilities

### Community 114 - "src/types/index.ts"
Cohesion: 0.10
Nodes (27): DropdownMenu(), Props, DropdownPortal(), Props, Props, ComboboxInput(), Props, ComboboxInputField() (+19 more)

### Community 115 - "hooks/index.ts"
Cohesion: 0.20
Nodes (17): MemberSidebar(), Props, EVENT_FEATURES, MembersTreeContent(), Props, TeamInfoSidebar(), ViewportCulling(), HeaderChip() (+9 more)

### Community 116 - "pixijs-scene-core-concepts/SKILL.md"
Cohesion: 0.25
Nodes (6): API Reference, Leaf comparison: which skill covers which object, Quick Start, References, Tooling, When to use what (quick decisions)

### Community 117 - "fakeIdentity.ts"
Cohesion: 0.27
Nodes (7): @faker-js/faker, createIdentityFactory(), firstFree(), OPERATOR_CODES, none, MAP, translit()

### Community 123 - "Common Mistakes"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, [CRITICAL] App destroy without releaseGlobalResources, [HIGH] Destroying and recreating objects instead of recycling, [HIGH] Interleaving object types in scene graph, [HIGH] Loading many individual textures instead of spritesheets, [HIGH] Updating Text or HTMLText every frame, [HIGH] Using complex Graphics instead of textures (+4 more)

### Community 124 - "searchShortcut.ts"
Cohesion: 0.19
Nodes (8): EDITABLE_TAGS, isEditableTarget(), isSearchShortcut(), ShortcutKeys, Keys, Options, Position, useSearchShortcut()

### Community 125 - "useCardAnimation.ts"
Cohesion: 0.14
Nodes (23): CARD_PIVOT, Props, clamp01(), deferCardHidden(), easeBackOut, easePower2In, easePower2Out, entries (+15 more)

### Community 127 - "Core Patterns"
Cohesion: 0.29
Nodes (7): Core Patterns, Frame rate capping, Manual rendering, Per-object update via `onRender`, Priority order, Stop and start, Time units

### Community 128 - "TextInput"
Cohesion: 0.23
Nodes (19): FormField(), MemberBasicsSection(), Props, MemberBestSection(), Props, STATUS_DROPDOWN_OPTIONS, MemberContactsSection(), Props (+11 more)

### Community 129 - "GSAP with React"
Cohesion: 0.15
Nodes (12): Best practices, Context-Safe Callbacks, Dependency array, scope, and revertOnUpdate, Do Not, gsap.context() in useEffect (when useGSAP isn't used), GSAP with React, Installation, Learn More (+4 more)

### Community 130 - "aiFaces.ts"
Cohesion: 0.47
Nodes (3): createFaceSource(), Options, source()

### Community 132 - "hitl-loop.template.sh"
Cohesion: 0.83
Nodes (3): capture(), hitl-loop.template.sh script, step()

### Community 134 - "Common Mistakes"
Cohesion: 0.50
Nodes (4): Common Mistakes, [HIGH] Accessing app.renderer before init() resolves, [HIGH] Setting DOMAdapter after Application.init, [MEDIUM] Treating `preference` as a guarantee

### Community 137 - "GSAP Performance"
Cohesion: 0.17
Nodes (11): Batch Reads and Writes, Best practices, Do Not, Frequently updated properties (e.g. mouse followers), GSAP Performance, Many Elements (Stagger, Lists), Prefer Transform and Opacity, Reduce Simultaneous Work (+3 more)

### Community 138 - "GSAP Timeline"
Cohesion: 0.17
Nodes (11): Controlling Playback, Creating a Timeline, Do Not, GSAP Timeline, Labels, Nesting Timelines, Official GSAP Best practices, Position Parameter (+3 more)

## Knowledge Gaps
- **45 isolated node(s):** `@prisma/client`, `dotenv`, `lodash`, `pixi-filters`, `@tailwindcss/postcss` (+40 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1014 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `BirthdayFilterSection.tsx`, `TextInput`, `react`, `membersStore.ts`, `http`, `EditMemberForm.tsx`, `teamFrame.ts`, `scale.ts`, `pixi.js`, `SignIn.tsx`, `treeStore.ts`, `useTreeLayout.ts`, `utils/membersTree/index.ts`, `SettingsPanel.tsx`, `constants/canvas/index.ts`, `TeamSearch.tsx`, `auth.ts`, `layout.tsx`, `useTeamSelection.ts`, `package.json`, `ThemeContext.tsx`, `positionFormUtils.ts`, `CodeForm.tsx`, `Member`, `settingsStore.ts`, `GenderFormField.tsx`, `MemberBirthdayAnimation.tsx`, `AvatarFileInput.tsx`, `FilterState`, `MemberPane.tsx`, `MemberPosition`, `MemberInfo.tsx`, `useCanvasTheme.ts`, `next`, `gsap`, `sessionStore.ts`, `src/types/index.ts`, `GroupedCheckListFilter.tsx`, `Member`, `TeamTypeFormContent.tsx`, `PhotoViewer.tsx`, `src/types/index.ts`, `hooks/index.ts`, `searchShortcut.ts`, `useCardAnimation.ts`?**
  _High betweenness centrality (0.106) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _45 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `BirthdayFilterSection.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Why does `filters()` connect `constants/filters.ts` to `Common Mistakes`?**
  _High betweenness centrality (0.103) - this node is a cross-community bridge._
- **Should `react` be split into smaller, more focused modules?**
  _Cohesion score 0.08644067796610169 - nodes in this community are weakly interconnected._
- **Why does `Constructor options` connect `Common Mistakes` to `constants/filters.ts`?**
  _High betweenness centrality (0.074) - this node is a cross-community bridge._
- **Should `emailRoutes.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.08051948051948052 - nodes in this community are weakly interconnected._