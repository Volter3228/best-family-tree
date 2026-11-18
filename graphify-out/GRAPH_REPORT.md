# Graph Report - best-family-tree  (2026-11-18)

## Corpus Check
- 669 files · ~201,637 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 30 file(s) not represented in the graph (top: .prisma 9, (none) 7, .css 7)

## Summary
- 3105 nodes · 8732 edges · 134 communities (124 shown, 10 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 86 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `a7975b43`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- uk/index.ts
- react
- src/index.ts
- server/package.json
- ThemeContext.tsx
- familyTreeRoutes.ts
- bakeParams.ts
- http
- transliterate.ts
- teamLayout.ts
- teamFrame.ts
- members.ts
- anonymizeDemo.ts
- hooks/index.ts
- MemberBirthdayAnimation.tsx
- sessions.ts
- api/auth.ts
- teamFrame.ts
- treeStore.ts
- AccentColor
- ref_vitest
- HTML Report Format
- utils/membersTree/index.ts
- MemberInfoFacts.tsx
- teamService.ts
- src/utils/index.ts
- compilerOptions
- compilerOptions
- ApplicationOptions reference
- dependencies
- dependencies
- MemberSearch.tsx
- useTeamTypeForm.ts
- layout.tsx
- Member
- Common Mistakes
- package.json
- MemberBestSection.tsx
- TeamFormContent.tsx
- Direction
- Core Patterns
- devDependencies
- oidcRouteFactory.ts
- Core Patterns
- CLAUDE.md
- Container Hierarchy
- teamLayout.ts
- SettingsPanel.tsx
- During the session
- settingsStore.ts
- en/index.ts
- AGENTS.md
- scripts
- hooks/index.ts
- react
- next.config.mjs
- postcss.config.mjs
- backfillGender.ts
- scale.ts
- Core Patterns
- contactKeys.ts
- checkConfig.ts
- src/index.ts
- signInCodeEmail.ts
- memberService.ts
- BEST Family Tree
- Diagnosing Bugs
- memberFormValidation.ts
- fakeIdentity.ts
- clientInstance.ts
- Toolbar.tsx
- Core Patterns
- Core Patterns
- piiCheck.ts
- BEST Family Tree
- ref_vitest
- filterTeams.ts
- Core Patterns
- Core Patterns
- Core Patterns
- Core Patterns
- aiFaces.ts
- BirthdayFilterSection.tsx
- Core Patterns
- Constructor options (Container-inherited)
- Test-Driven Development
- GSAP Core
- Core Patterns
- useFilterSearchParams.ts
- Foundations
- MemberPositions.tsx
- Sidebar.tsx
- Core Concepts
- MemberPane.tsx
- pixijs/SKILL.md
- backup-prod.sh
- start-prod.sh
- restore-local.sh
- MemberInfo.tsx
- gsap
- uk/errors.ts
- Render Loop
- pixijs-core-concepts/SKILL.md
- GroupedCheckListFilter.tsx
- EditMemberForm.tsx
- FilterState
- photoViewerMath.ts
- migrateMembersFromMongodb.ts
- Renderers: WebGPU, WebGL, and Canvas
- Common Mistakes
- src/types/index.ts
- MaskIcon.tsx
- pixijs-scene-core-concepts/SKILL.md
- importAllowedEmails.ts
- uk/filters.ts
- en/errors.ts
- Transforms and Coordinate Spaces
- TeamTypeFormContent.tsx
- Common Mistakes
- searchShortcut.ts
- useCardAnimation.ts
- Messages
- Core Patterns
- TeamFormContent.tsx
- GSAP with React
- emailCodes.ts
- hitl-loop.template.sh
- Common Mistakes
- plural.test.ts
- GSAP Performance
- GSAP Timeline

## God Nodes (most connected - your core abstractions)
1. `useT()` - 184 edges
2. `AccentColor` - 166 edges
3. `react` - 155 edges
4. `tailwind-merge` - 82 edges
5. `Member` - 71 edges
6. `useLocale()` - 59 edges
7. `COLOR_CLASSES` - 54 edges
8. `@heroicons/react` - 46 edges
9. `TeamFrame` - 40 edges
10. `pixi.js` - 38 edges

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

## Communities (134 total, 10 thin omitted)

### Community 0 - "uk/index.ts"
Cohesion: 0.10
Nodes (15): auth, common, formCommon, manage, memberForm, memberInfo, roleForm, settings (+7 more)

### Community 1 - "react"
Cohesion: 0.13
Nodes (30): RoleForm(), Props, TeamForm(), ManageList(), ManageNotice(), ManagePane(), Props, ITEMS (+22 more)

### Community 2 - "src/index.ts"
Cohesion: 0.08
Nodes (32): cloudinary, express, prisma, app, deleteCloudinaryImage(), extractCloudinaryPublicId(), checkOrigin(), WRITE_METHODS (+24 more)

### Community 3 - "server/package.json"
Cohesion: 0.07
Nodes (27): compression, concurrently, cors, helmet, multer, multer-storage-cloudinary, nodemon, openid-client (+19 more)

### Community 4 - "ThemeContext.tsx"
Cohesion: 0.12
Nodes (18): darkTheme, DEFAULT_THEME, lightTheme, THEMES, applyCssTokens(), ThemeContext, ThemeContextValue, ThemeProvider() (+10 more)

### Community 5 - "familyTreeRoutes.ts"
Cohesion: 0.09
Nodes (26): canEditMember(), hasAccess(), RANK, CONTACT_FIELDS, toMemberResponse(), AccessRank, Express, Request (+18 more)

### Community 6 - "bakeParams.ts"
Cohesion: 0.21
Nodes (17): AuroraBackground(), readNumber(), useBakedAurora(), AuroraBakeInput, bakeAuroraLayers(), canBakeAurora(), BAKE_SCALE, BLUR_SPREAD (+9 more)

### Community 7 - "http"
Cohesion: 0.06
Nodes (64): addMember(), ApiError, errorMessage(), ErrorParams, toApiError(), deleteMember(), editMember(), FamilyGroupOption (+56 more)

### Community 8 - "transliterate.ts"
Cohesion: 0.20
Nodes (12): cache, displayFamilyName(), displayName(), FAMILY_NAMES_EN, romanizeCached(), useDisplayFamilyName(), MAP, ROMAN (+4 more)

### Community 9 - "teamLayout.ts"
Cohesion: 0.14
Nodes (22): elkjs, failOver(), getWorker(), Pending, requestLayout(), runInline(), computeLayout(), elkNodeSize() (+14 more)

### Community 10 - "teamFrame.ts"
Cohesion: 0.07
Nodes (51): Props, TeamBadge(), FILL_ALPHA, lerp(), Props, STROKE_ALPHA, TeamFrame(), Props (+43 more)

### Community 11 - "members.ts"
Cohesion: 0.10
Nodes (19): FlowerIcon(), Props, MapleLeafIcon(), Props, Placement, PLACEMENTS, Props, SeasonMotif() (+11 more)

### Community 12 - "anonymizeDemo.ts"
Cohesion: 0.14
Nodes (11): allowed, args, byId, factory, GROUP_NAMES, memberPhotos, nextFace, real (+3 more)

### Community 13 - "hooks/index.ts"
Cohesion: 0.13
Nodes (26): Viewport(), MemberSidebar(), Props, EVENT_FEATURES, MembersTreeContent(), Props, MembersTreeScene(), Props (+18 more)

### Community 14 - "MemberBirthdayAnimation.tsx"
Cohesion: 0.35
Nodes (8): BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props, acquireEmojiTextures(), createEmojiTexture(), generateRandomPosition(), releaseEmojiTextures()

### Community 15 - "sessions.ts"
Cohesion: 0.09
Nodes (38): Container events, Transform, Lifecycle events, Origin (new in v8), SESSION_COOKIE, SIGN_IN_COOKIE, useSecureCookie(), configs (+30 more)

### Community 16 - "api/auth.ts"
Cohesion: 0.05
Nodes (64): AccessLevel, AuthMethod, Challenge, ChallengeQuestion, fetchSession(), logout(), post(), RequestCodeOutcome (+56 more)

### Community 17 - "teamFrame.ts"
Cohesion: 0.12
Nodes (29): TEAM_COLUMN_GAP, TEAM_EDGE_DROP, TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_SPREAD_WIDTH, TEAM_EDGE_STUB, TEAM_FRAME_HEADER, TEAM_FRAME_MIN_WIDTH, TEAM_FRAME_PADDING (+21 more)

### Community 18 - "treeStore.ts"
Cohesion: 0.11
Nodes (24): Props, Props, Props, TEAM_OVERVIEW_EDGE_ALPHA, TEAM_OVERVIEW_NODE_ALPHA, EMPTY_IDS, EMPTY_POSITIONS, getNodePositions() (+16 more)

### Community 19 - "AccentColor"
Cohesion: 0.06
Nodes (35): Props, Props, Props, Props, Props, GenderFormField(), Props, Props (+27 more)

### Community 20 - "ref_vitest"
Cohesion: 0.10
Nodes (28): express-rate-limit, answerMatches(), CYRILLIC_TO_LATIN, normalizeAnswer(), ChallengeState, isExpired(), isSolved(), pickRandom() (+20 more)

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "utils/membersTree/index.ts"
Cohesion: 0.10
Nodes (35): LineageEdge(), DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN, MIN_ANIM_DURATION, PATTERN_LEN, RETRACT_BASE (+27 more)

### Community 23 - "MemberInfoFacts.tsx"
Cohesion: 0.15
Nodes (21): InfoSection(), MemberActivityPill(), Props, MemberFactTile(), Props, DateWithYears(), MemberInfoFacts(), Props (+13 more)

### Community 24 - "teamService.ts"
Cohesion: 0.13
Nodes (27): ResolvedPosition, resolvePosition(), MemberTransaction, assertCanEditMembers(), deleteMember(), deriveTeamName(), resolveRole(), resolveTeam() (+19 more)

### Community 25 - "src/utils/index.ts"
Cohesion: 0.21
Nodes (10): FONT_FAMILY, NODE_SUBTITLE_STYLE, NODE_TITLE_STYLE, NODE_TOOLTIP_TEXT_STYLE, TEXT_RESOLUTION, buildCanvasColors(), CanvasTextStyleInstances, CanvasTextStyles (+2 more)

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
Cohesion: 0.04
Nodes (47): dependencies, cloudinary, compression, cors, dotenv, express, express-rate-limit, helmet (+39 more)

### Community 30 - "dependencies"
Cohesion: 0.10
Nodes (20): dependencies, date-fns, dotenv, elkjs, gsap, @gsap/react, @heroicons/react, lodash (+12 more)

### Community 31 - "MemberSearch.tsx"
Cohesion: 0.11
Nodes (36): MemberNodeCard(), compare(), getSearchable(), MemberSearch(), Props, Props, SearchBar(), SearchPanel() (+28 more)

### Community 32 - "useTeamTypeForm.ts"
Cohesion: 0.22
Nodes (9): Props, TeamTypeForm(), buildTeamTypeFormData(), Callbacks, EMPTY_FORM, keepCount(), toFormData(), useTeamTypeForm() (+1 more)

### Community 33 - "layout.tsx"
Cohesion: 0.14
Nodes (13): react-datepicker, metadata, nunito, RootLayout(), SHORT_LABELS, writeLocaleCookie(), detectLocale(), isLocale() (+5 more)

### Community 34 - "Member"
Cohesion: 0.08
Nodes (31): zustand, CARD_PIVOT, Props, NodesLayer(), Props, Props, CARD_PIVOT_X, CARD_PIVOT_Y (+23 more)

### Community 35 - "Common Mistakes"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, Constructor options, [CRITICAL] Using lineStyle instead of stroke, [CRITICAL] Using old shape method names, [CRITICAL] Using v7 beginFill/drawRect/endFill, [HIGH] Clearing and redrawing Graphics every frame, [HIGH] Destroying a shared GraphicsContext unexpectedly (+4 more)

### Community 36 - "package.json"
Cohesion: 0.10
Nodes (20): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+12 more)

### Community 37 - "MemberBestSection.tsx"
Cohesion: 0.24
Nodes (17): FormField(), MemberBasicsSection(), Props, MemberBestSection(), Props, MemberContactsSection(), Props, MemberFormFields() (+9 more)

### Community 38 - "TeamFormContent.tsx"
Cohesion: 0.12
Nodes (32): FieldError(), Props, PositionAssignmentFields(), Props, PositionFormFields(), Props, createEmptyPositionRow(), EMPTY_POSITION_ROW (+24 more)

### Community 39 - "Direction"
Cohesion: 0.11
Nodes (33): EdgesLayer(), drawLerped(), drawPolyline(), Props, TeamEdgesLayer(), FIXED_EDGE_WIDTH, NODE_AVATAR_RADIUS, Point (+25 more)

### Community 40 - "Core Patterns"
Cohesion: 0.12
Nodes (20): Adding and removing children, API Reference, Bounds and coordinate conversion, Common Mistakes, Core Patterns, [CRITICAL] Adding children to leaf scene objects, Destroy, Finding and removing from parent (+12 more)

### Community 41 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+5 more)

### Community 42 - "oidcRouteFactory.ts"
Cohesion: 0.09
Nodes (31): authSecret(), isDemoMode(), EligibilityMember, EmailIdentity, MemberMatch, normalizeEmail(), resolveEmailIdentity(), resolveMemberMatch() (+23 more)

### Community 43 - "Core Patterns"
Cohesion: 0.22
Nodes (9): Coordinate conversion, Core Patterns, Cumulative alpha (getGlobalAlpha), Global, local, and screen coordinates, Pivot, Position, scale, rotation, Sizing via width, height, setSize, Skew (+1 more)

### Community 44 - "CLAUDE.md"
Cohesion: 0.25
Nodes (7): Commands, Conventions, Deployment & data, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout

### Community 45 - "Container Hierarchy"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, Container Hierarchy, [CRITICAL] Adding children to a leaf, [HIGH] Destroying the parent without `children: true`, [MEDIUM] Mutating `children` during iteration, Quick Start

### Community 46 - "teamLayout.ts"
Cohesion: 0.16
Nodes (16): TEAM_FRAME_GAP, TEAM_PACK_ASPECT, computeTeamLayout(), groupIntoLanes(), moveEdgesToWorld(), shift(), toTeamLayoutInputs(), parseTeamNodeId() (+8 more)

### Community 47 - "SettingsPanel.tsx"
Cohesion: 0.20
Nodes (14): FamilyTreeIcon(), Props, edgeIcon(), edgeStyleOptions(), iconClass, orientationOptions(), themeOptions(), treeModeOptions() (+6 more)

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "settingsStore.ts"
Cohesion: 0.20
Nodes (14): useIsMobileScreen(), useResolvedDirection(), useMediaQuery(), DEFAULT_SETTINGS, LocaleState, readLegacyTheme(), SETTINGS_STORAGE_KEY, SettingsActions (+6 more)

### Community 50 - "en/index.ts"
Cohesion: 0.10
Nodes (20): auth, common, filters, formCommon, en, manage, memberForm, memberInfo (+12 more)

### Community 51 - "AGENTS.md"
Cohesion: 0.25
Nodes (7): Commands, Conventions, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout, This is NOT the Next.js you know

### Community 52 - "scripts"
Cohesion: 0.20
Nodes (10): scripts, build, db:backup-prod, db:restore-local, dev, dev:webpack, lint, start (+2 more)

### Community 53 - "hooks/index.ts"
Cohesion: 0.04
Nodes (68): @pixi/react, PixiElements, @gsap/react, pixi.js, @pixi/react, pixi-viewport, contexts, getCardBackgroundContext() (+60 more)

### Community 54 - "react"
Cohesion: 0.22
Nodes (8): react, Props, EMPTY_FORM, isSame(), Options, toFormData(), useRoleForm(), Role

### Community 57 - "backfillGender.ts"
Cohesion: 0.12
Nodes (15): alreadyDifferent, alreadySame, APPLY, args, duplicates, fileArg, Gender, GENDERS (+7 more)

### Community 58 - "scale.ts"
Cohesion: 0.21
Nodes (11): EMPTY_IDS, SharpAvatarTracker(), View, CARD_VIEW_SCALE, MAX_RENDER_RESOLUTION, TEAM_OVERVIEW_END_SCALE, TEAM_OVERVIEW_FAST_FACTOR, TEAM_OVERVIEW_START_SCALE (+3 more)

### Community 59 - "Core Patterns"
Cohesion: 0.12
Nodes (17): Application destroy/recreate cycle, Batching optimization, cacheAsTexture for performance, Core Patterns, Culling, Filters and masks cost, Graphics performance, Low-level rendering optimizations (+9 more)

### Community 60 - "contactKeys.ts"
Cohesion: 0.20
Nodes (10): duplicates, fields, groups, ContactFields, contactKey(), ContactPlatform, FIELD_PLATFORMS, findContactCollision() (+2 more)

### Community 61 - "checkConfig.ts"
Cohesion: 0.07
Nodes (37): RFC-2045, RFC-2047, assertConfig(), configProblems(), databaseName(), demoProblems(), Env, googleProblems() (+29 more)

### Community 62 - "src/index.ts"
Cohesion: 0.09
Nodes (25): Renderer selection at runtime, [MEDIUM] Using container.name instead of container.label, parsePositionsPayload(), countMembersByRole(), router, booleanLike, formatZodErrors(), isValidPeriod() (+17 more)

### Community 63 - "signInCodeEmail.ts"
Cohesion: 0.21
Nodes (7): CODE_TTL_MS, COPY, EmailLocale, escapeHtml(), pairs(), renderSignInCodeEmail(), { html }

### Community 64 - "memberService.ts"
Cohesion: 0.09
Nodes (36): zod, buildMemberFields(), buildMemberUpdateFields(), buildSharedFields(), buildSparseMemberFields(), parsePhoneNumbers(), getPositionKey(), syncPositions() (+28 more)

### Community 65 - "BEST Family Tree"
Cohesion: 0.11
Nodes (18): 1. Clone and configure environment, 2. Start the application, 3. Run database migrations, 4. Access the app, Architecture, Available Commands, Backend Commands (run inside container), Backups (+10 more)

### Community 66 - "Diagnosing Bugs"
Cohesion: 0.13
Nodes (14): Completion criterion: a tight loop that goes red, Diagnosing Bugs, Minimise, Non-deterministic bugs, Phase 1: Build a feedback loop, Phase 2: Reproduce + minimise, Phase 3: Hypothesise, Phase 4: Instrument (+6 more)

### Community 67 - "memberFormValidation.ts"
Cohesion: 0.12
Nodes (19): CheckedField, getStoredFieldValues(), Links, StoredMemberValues, complete, mentors, sparse, toTime() (+11 more)

### Community 68 - "fakeIdentity.ts"
Cohesion: 0.27
Nodes (7): @faker-js/faker, createIdentityFactory(), firstFree(), OPERATOR_CODES, none, MAP, translit()

### Community 69 - "clientInstance.ts"
Cohesion: 0.11
Nodes (13): @prisma/adapter-pg, @prisma/config, deleteQuestionSessions(), adapter, level, [ref, levelArg], ADMINS_BY_EMAIL, EDITORS_BY_NAME (+5 more)

### Community 70 - "Toolbar.tsx"
Cohesion: 0.15
Nodes (13): DemoBadge(), FiltersHeader(), Props, FitViewButton(), PanelResetButton(), Props, focusSearchInput(), Props (+5 more)

### Community 71 - "Core Patterns"
Cohesion: 0.13
Nodes (14): API Reference, boundsArea optimization, Common Mistakes, Core Patterns, Culling, HIGH: Expecting automatic culling, HIGH: Using addChild on RenderLayer, MEDIUM: Expecting filters on ancestors to apply to layer children (+6 more)

### Community 72 - "Core Patterns"
Cohesion: 0.12
Nodes (15): Advanced shape primitives, Cloning, clearing, and bounds, Core Patterns, Default styles via setFillStyle / setStrokeStyle, Draw-time transforms, Drawing a texture directly, Gradients and patterns, GraphicsContext sharing (+7 more)

### Community 73 - "piiCheck.ts"
Cohesion: 0.38
Nodes (8): DemoValues, findLeaks(), lowerSet(), norm(), normalizeSocial(), RealValues, clean, real

### Community 74 - "BEST Family Tree"
Cohesion: 0.29
Nodes (6): BEST Family Tree, Language, People, Sign-in, Teams, Views

### Community 75 - "ref_vitest"
Cohesion: 0.07
Nodes (40): Constructor options, Effects, ACTIVITY_STATES, DATE_PICKER_CLASSES, EMPTY_FILTER_STATE, GENDER_VALUES, JOIN_SEASONS, MEMBER_STATUSES (+32 more)

### Community 76 - "filterTeams.ts"
Cohesion: 0.11
Nodes (37): areSetsEqual(), computeFilteredMembers(), Source, birthdayBoundKey(), countActiveFilters(), countActiveMemberFilters(), isFilterActive(), isIdListSet() (+29 more)

### Community 77 - "Core Patterns"
Cohesion: 0.25
Nodes (8): Add, remove, swap, Child queries, Core Patterns, Destroying sub-trees, Iterating children, Label-based tree navigation, Reparenting with transform preservation, Replacing a child

### Community 78 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, attach / detach, Common Mistakes, Core Patterns, [CRITICAL] Using `addChild` on a RenderLayer, [HIGH] Layer and attached children in different render groups, Layer + logical parent, Manual sort (+5 more)

### Community 79 - "Core Patterns"
Cohesion: 0.14
Nodes (13): Alpha mask (Sprite-based), API Reference, Common Mistakes, Core Patterns, [HIGH] Using cacheAsTexture with masks, Inverse masking, Mask channel selection, Mask type selection (+5 more)

### Community 80 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, Common Mistakes, Construction options, Core Patterns, [HIGH] Nesting many render groups, [MEDIUM] Constantly adding/removing from a render group, [MEDIUM] Overusing render groups, Profile before adding (+5 more)

### Community 81 - "aiFaces.ts"
Cohesion: 0.38
Nodes (3): createFaceSource(), Options, source()

### Community 82 - "BirthdayFilterSection.tsx"
Cohesion: 0.13
Nodes (21): date-fns, BirthdayFilterSection(), ClearButton(), FilterCheckbox(), Props, Props, RangeInputs(), RangeSlot (+13 more)

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

### Community 88 - "useFilterSearchParams.ts"
Cohesion: 0.38
Nodes (4): EMPTY, loadFamilyGroups(), useFamilyGroups(), Props

### Community 89 - "Foundations"
Cohesion: 0.15
Nodes (12): Advanced, Foundations, pixijs-application, pixijs-core-concepts, pixijs-events, pixijs-performance, pixijs-scene-container, pixijs-scene-core-concepts (+4 more)

### Community 90 - "MemberPositions.tsx"
Cohesion: 0.47
Nodes (4): Props, PositionBadge(), Props, useStackOnOverflow()

### Community 91 - "Sidebar.tsx"
Cohesion: 0.20
Nodes (11): Props, Props, Sidebar(), SidebarFooterContext, Props, SidebarHandle(), Props, SidebarHeader() (+3 more)

### Community 92 - "Core Concepts"
Cohesion: 0.18
Nodes (11): Container vs leaf (CRITICAL), Core Concepts, Culling, Destroy semantics, Lifecycle events, Masking, Render groups, Render order and explicit z-ordering (+3 more)

### Community 93 - "MemberPane.tsx"
Cohesion: 0.10
Nodes (27): greenPillIcon(), IconProps, DatesPane(), SEASON_ICONS, PANES, Props, MemberPane(), RolesPane() (+19 more)

### Community 94 - "pixijs/SKILL.md"
Cohesion: 0.12
Nodes (14): API Reference, Common Mistakes, [HIGH] buttonMode removed; use cursor, [HIGH] Default eventMode is passive, [HIGH] Move events only fire over the object in v8, [MEDIUM] Cursor does not inherit from parent, Quick Start, Advanced (+6 more)

### Community 98 - "MemberInfo.tsx"
Cohesion: 0.06
Nodes (48): next, Props, FacebookIcon(), FacebookGlyph(), InstagramGlyph(), LinkedinGlyph(), svgProps, TelegramGlyph() (+40 more)

### Community 99 - "gsap"
Cohesion: 0.12
Nodes (29): gsap, NODE_HOVER_ANIMATION_DURATION, NODE_HOVER_SCALE, ZOOMED_OUT_HOVER_SCALE_MAP, GRID_GAP_X, GRID_LR_COLUMNS, NODE_HEIGHT, getFitViewTargetScale() (+21 more)

### Community 101 - "uk/errors.ts"
Cohesion: 0.50
Nodes (3): errors, Params, platformLabels

### Community 102 - "Render Loop"
Cohesion: 0.22
Nodes (8): API Reference, Common Mistakes, [CRITICAL] Treating the ticker callback arg as a number, Frame lifecycle, [HIGH] Using `updateTransform` for per-frame logic, [MEDIUM] Assuming ticker callbacks run after render, Quick Start, Render Loop

### Community 103 - "pixijs-core-concepts/SKILL.md"
Cohesion: 0.22
Nodes (8): API Reference, Decision guide, Environments, Quick concepts, Quick Start, Renderer = systems + pipes, The render loop, Topics

### Community 104 - "GroupedCheckListFilter.tsx"
Cohesion: 0.23
Nodes (13): byLabel(), CheckListFilter(), CheckOption, Props, useStableOrder(), CheckRow(), Props, byName() (+5 more)

### Community 107 - "EditMemberForm.tsx"
Cohesion: 0.13
Nodes (26): AddMemberForm(), buildMemberFormData(), describeSubmitError(), EditMemberForm(), Props, buildEditPayload(), getInitialFormData(), FormError() (+18 more)

### Community 108 - "FilterState"
Cohesion: 0.12
Nodes (24): CATEGORY_ICONS, FilterCategoryRail(), Props, FiltersFooter(), Props, FiltersPanel(), Props, FilterCategoryPane() (+16 more)

### Community 109 - "photoViewerMath.ts"
Cohesion: 0.11
Nodes (34): DropdownPortal(), Props, PhotoViewer(), thumbRadius(), Viewer(), viewportRect(), BUTTON, GLASS (+26 more)

### Community 110 - "migrateMembersFromMongodb.ts"
Cohesion: 0.07
Nodes (28): mongodb, ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember, STATUSES_MAP (+20 more)

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

### Community 113 - "Common Mistakes"
Cohesion: 0.33
Nodes (6): Common Mistakes, [CRITICAL] Adding children to a leaf display object, [CRITICAL] Referencing DisplayObject, [HIGH] Forgetting isRenderGroup on large static subtrees, [HIGH] Treating child.x as world space, [MEDIUM] sortableChildren without zIndex

### Community 114 - "src/types/index.ts"
Cohesion: 0.13
Nodes (20): @heroicons/react, tailwind-merge, GLOW, Props, QuestionCard(), Props, removeBadgeClasses(), LogoFileInput() (+12 more)

### Community 116 - "pixijs-scene-core-concepts/SKILL.md"
Cohesion: 0.25
Nodes (6): API Reference, Leaf comparison: which skill covers which object, Quick Start, References, Tooling, When to use what (quick decisions)

### Community 117 - "importAllowedEmails.ts"
Cohesion: 0.19
Nodes (12): AllowedRow, AllowlistDiff, diffAllowlist(), looksLikeEmail(), parseAllowlistCsv(), ParsedAllowlist, splitLine(), apply (+4 more)

### Community 118 - "uk/filters.ts"
Cohesion: 0.33
Nodes (5): familyForms, filters, memberForms, roleForms, teamForms

### Community 119 - "en/errors.ts"
Cohesion: 0.50
Nodes (3): errors, Params, platformLabels

### Community 121 - "Transforms and Coordinate Spaces"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Setting scale to 0, [MEDIUM] Confusing anchor and pivot, [MEDIUM] Reading world transform before first render, Quick Start, Transforms and Coordinate Spaces

### Community 122 - "TeamTypeFormContent.tsx"
Cohesion: 0.16
Nodes (22): react-dom, ClearButton(), ConfirmDeleteControl(), Props, FormFooter(), Props, FormMessages(), Props (+14 more)

### Community 123 - "Common Mistakes"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, [CRITICAL] App destroy without releaseGlobalResources, [HIGH] Destroying and recreating objects instead of recycling, [HIGH] Interleaving object types in scene graph, [HIGH] Loading many individual textures instead of spritesheets, [HIGH] Updating Text or HTMLText every frame, [HIGH] Using complex Graphics instead of textures (+4 more)

### Community 124 - "searchShortcut.ts"
Cohesion: 0.19
Nodes (8): EDITABLE_TAGS, isEditableTarget(), isSearchShortcut(), ShortcutKeys, Keys, Options, Position, useSearchShortcut()

### Community 125 - "useCardAnimation.ts"
Cohesion: 0.18
Nodes (19): clamp01(), deferCardHidden(), easeBackOut, easePower2In, easePower2Out, entries, Entry, finishCardReveal() (+11 more)

### Community 126 - "Messages"
Cohesion: 0.31
Nodes (5): Messages, memberForms, search, plural(), PluralForms

### Community 127 - "Core Patterns"
Cohesion: 0.29
Nodes (7): Core Patterns, Frame rate capping, Manual rendering, Per-object update via `onRender`, Priority order, Stop and start, Time units

### Community 128 - "TeamFormContent.tsx"
Cohesion: 0.11
Nodes (33): DropdownMenu(), Props, ComboboxInput(), Props, ComboboxInputField(), Props, useComboboxState(), DateInput() (+25 more)

### Community 129 - "GSAP with React"
Cohesion: 0.15
Nodes (12): Best practices, Context-Safe Callbacks, Dependency array, scope, and revertOnUpdate, Do Not, gsap.context() in useEffect (when useGSAP isn't used), GSAP with React, Installation, Learn More (+4 more)

### Community 130 - "emailCodes.ts"
Cohesion: 0.18
Nodes (13): CodeOwner, CodeStore, generateCode(), hashCode(), issueCode(), MAX_CODE_ATTEMPTS, sameHash(), StoredCode (+5 more)

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
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1031 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `filters()` connect `ref_vitest` to `Common Mistakes`?**
  _High betweenness centrality (0.100) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _45 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `uk/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.10114942528735632 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `TeamFormContent.tsx`, `react`, `ThemeContext.tsx`, `bakeParams.ts`, `http`, `transliterate.ts`, `teamFrame.ts`, `members.ts`, `hooks/index.ts`, `MemberBirthdayAnimation.tsx`, `api/auth.ts`, `treeStore.ts`, `AccentColor`, `utils/membersTree/index.ts`, `MemberInfoFacts.tsx`, `src/utils/index.ts`, `MemberSearch.tsx`, `useTeamTypeForm.ts`, `layout.tsx`, `Member`, `package.json`, `MemberBestSection.tsx`, `TeamFormContent.tsx`, `Direction`, `SettingsPanel.tsx`, `settingsStore.ts`, `hooks/index.ts`, `scale.ts`, `Toolbar.tsx`, `BirthdayFilterSection.tsx`, `useFilterSearchParams.ts`, `MemberPositions.tsx`, `Sidebar.tsx`, `MemberPane.tsx`, `MemberInfo.tsx`, `gsap`, `GroupedCheckListFilter.tsx`, `EditMemberForm.tsx`, `FilterState`, `photoViewerMath.ts`, `src/types/index.ts`, `TeamTypeFormContent.tsx`, `searchShortcut.ts`, `useCardAnimation.ts`?**
  _High betweenness centrality (0.093) - this node is a cross-community bridge._
- **Should `react` be split into smaller, more focused modules?**
  _Cohesion score 0.13008130081300814 - nodes in this community are weakly interconnected._
- **Why does `Constructor options` connect `Common Mistakes` to `ref_vitest`?**
  _High betweenness centrality (0.069) - this node is a cross-community bridge._
- **Should `src/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.0824829931972789 - nodes in this community are weakly interconnected._