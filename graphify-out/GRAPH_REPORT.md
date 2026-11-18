# Graph Report - best-family-tree  (2026-11-18)

## Corpus Check
- 675 files · ~202,904 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 30 file(s) not represented in the graph (top: .prisma 9, (none) 7, .css 7)

## Summary
- 3120 nodes · 8786 edges · 135 communities (125 shown, 10 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 86 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `3c0eccb6`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- uk/index.ts
- react
- MemberPane.tsx
- server/package.json
- react
- auth/types.ts
- settingsStore.ts
- http
- emailRoutes.ts
- teamLayout.ts
- teamFrame.ts
- SeasonChip.tsx
- anonymizeDemo.ts
- hooks/index.ts
- oidc.ts
- src/index.ts
- api/auth.ts
- teamFrame.ts
- hooks/index.ts
- src/types/index.ts
- ref_vitest
- HTML Report Format
- utils/membersTree/index.ts
- useLocale
- teamService.ts
- MemberNodeAvatar.tsx
- compilerOptions
- compilerOptions
- ApplicationOptions reference
- dependencies
- dependencies
- TeamSearch.tsx
- EditMemberForm.tsx
- filterTeams.ts
- useTreeLayout.ts
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
- filterSearchParams.ts
- SettingsPanel.tsx
- During the session
- useT.ts
- en/index.ts
- AGENTS.md
- scripts
- MemberNode.tsx
- Member
- next.config.mjs
- postcss.config.mjs
- clientInstance.ts
- SignIn.tsx
- Core Patterns
- MembersTreeDynamic.tsx
- checkConfig.ts
- src/index.ts
- MemberInfoActions.tsx
- memberService.ts
- BEST Family Tree
- Diagnosing Bugs
- MemberStatus
- fakeIdentity.ts
- familyTreeRoutes.ts
- FitViewButton.tsx
- Core Patterns
- Core Patterns
- membersStore.ts
- PhotoViewer.tsx
- constants/filters.ts
- filterTeams.ts
- Core Patterns
- Core Patterns
- Core Patterns
- Core Patterns
- CodeForm.tsx
- MemberSidebarContent.tsx
- Core Patterns
- Constructor options (Container-inherited)
- Test-Driven Development
- GSAP Core
- Core Patterns
- contactKeys.ts
- Foundations
- AccountForm.tsx
- Sidebar.tsx
- Core Concepts
- devDependencies
- pixijs/SKILL.md
- backup-prod.sh
- start-prod.sh
- restore-local.sh
- TeamLogo.tsx
- gsap
- piiCheck.ts
- MemberPositions.tsx
- Render Loop
- pixijs-core-concepts/SKILL.md
- pixijs-events/SKILL.md
- NodesLayer.tsx
- aiFaces.ts
- EditMemberForm.tsx
- filtersStore.ts
- photoViewerMath.ts
- migrateMembersFromMongodb.ts
- strings.ts
- Renderers: WebGPU, WebGL, and Canvas
- Common Mistakes
- tailwind-merge
- pixijs-scene-core-concepts/SKILL.md
- MaskIcon.tsx
- uk/filters.ts
- en/errors.ts
- proxy.ts
- Transforms and Coordinate Spaces
- Common Mistakes
- searchShortcut.ts
- useCardAnimation.ts
- Messages
- Core Patterns
- GSAP with React
- emailCodes.ts
- hitl-loop.template.sh
- Common Mistakes
- GSAP Performance
- GSAP Timeline

## God Nodes (most connected - your core abstractions)
1. `useT()` - 186 edges
2. `AccentColor` - 166 edges
3. `react` - 156 edges
4. `tailwind-merge` - 82 edges
5. `Member` - 71 edges
6. `useLocale()` - 61 edges
7. `COLOR_CLASSES` - 54 edges
8. `@heroicons/react` - 47 edges
9. `TeamFrame` - 40 edges
10. `pixi.js` - 38 edges

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

## Communities (135 total, 10 thin omitted)

### Community 0 - "uk/index.ts"
Cohesion: 0.08
Nodes (19): auth, common, errors, Params, platformLabels, formCommon, uk, manage (+11 more)

### Community 1 - "react"
Cohesion: 0.16
Nodes (27): TeamTypeForm(), ManageList(), ManageNotice(), ITEMS, ManageRail(), Props, TABS, getSearchable() (+19 more)

### Community 2 - "MemberPane.tsx"
Cohesion: 0.05
Nodes (61): date-fns, ACTIVITY_ICONS, IconComponent, IconProps, greenPillIcon(), IconProps, DatesPane(), SEASON_ICONS (+53 more)

### Community 3 - "server/package.json"
Cohesion: 0.06
Nodes (29): cloudinary, compression, concurrently, cors, helmet, multer, multer-storage-cloudinary, nodemon (+21 more)

### Community 4 - "react"
Cohesion: 0.08
Nodes (27): react, ManagePane(), Props, FONT_FAMILY, NODE_SUBTITLE_STYLE, NODE_TITLE_STYLE, NODE_TOOLTIP_TEXT_STYLE, TEXT_RESOLUTION (+19 more)

### Community 5 - "auth/types.ts"
Cohesion: 0.22
Nodes (11): canEditMember(), hasAccess(), RANK, CONTACT_FIELDS, AccessRank, Express, Request, Session (+3 more)

### Community 6 - "settingsStore.ts"
Cohesion: 0.05
Nodes (46): react-datepicker, metadata, nunito, RootLayout(), AuroraBackground(), darkTheme, DEFAULT_THEME, lightTheme (+38 more)

### Community 7 - "http"
Cohesion: 0.05
Nodes (77): BEST Family Tree, Language, People, Sign-in, Teams, Views, addMember(), ApiError (+69 more)

### Community 8 - "emailRoutes.ts"
Cohesion: 0.11
Nodes (19): authSecret(), isDemoMode(), getMailer(), COPY, EmailLocale, escapeHtml(), pairs(), renderSignInCodeEmail() (+11 more)

### Community 9 - "teamLayout.ts"
Cohesion: 0.08
Nodes (38): elkjs, TEAM_FRAME_GAP, TEAM_PACK_ASPECT, failOver(), getWorker(), Pending, requestLayout(), runInline() (+30 more)

### Community 10 - "teamFrame.ts"
Cohesion: 0.07
Nodes (51): @pixi/react, PixiElements, @pixi/react, MemberNodeMinimizedTooltip(), Props, Props, TeamBadge(), FILL_ALPHA (+43 more)

### Community 11 - "SeasonChip.tsx"
Cohesion: 0.20
Nodes (12): FlowerIcon(), Props, MapleLeafIcon(), Props, Placement, PLACEMENTS, Props, SeasonMotif() (+4 more)

### Community 12 - "anonymizeDemo.ts"
Cohesion: 0.14
Nodes (11): allowed, args, byId, factory, GROUP_NAMES, memberPhotos, nextFace, real (+3 more)

### Community 13 - "hooks/index.ts"
Cohesion: 0.20
Nodes (17): fetchSession(), SessionInfo, MemberSidebar(), Props, TeamInfoSidebar(), HeaderChip(), MemberSidebarContent(), Props (+9 more)

### Community 14 - "oidc.ts"
Cohesion: 0.14
Nodes (21): Container events, Transform, Lifecycle events, Origin (new in v8), openid-client, callbackErrorRedirect(), configs, cookieOptions() (+13 more)

### Community 15 - "src/index.ts"
Cohesion: 0.08
Nodes (39): express, express-rate-limit, SESSION_COOKIE, SIGN_IN_COOKIE, useSecureCookie(), clearSessionCookie(), createSession(), deleteSession() (+31 more)

### Community 16 - "api/auth.ts"
Cohesion: 0.19
Nodes (16): AccessLevel, AuthMethod, Challenge, ChallengeQuestion, post(), RequestCodeOutcome, startChallenge(), swapQuestion() (+8 more)

### Community 17 - "teamFrame.ts"
Cohesion: 0.08
Nodes (40): Paths and complex shapes, TEAM_COLUMN_GAP, TEAM_EDGE_DROP, TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_SPREAD_WIDTH, TEAM_EDGE_STUB, TEAM_FRAME_HEADER, TEAM_FRAME_MIN_WIDTH (+32 more)

### Community 18 - "hooks/index.ts"
Cohesion: 0.08
Nodes (37): Props, Props, EMPTY_IDS, SharpAvatarTracker(), View, drawLerped(), drawPolyline(), Props (+29 more)

### Community 19 - "src/types/index.ts"
Cohesion: 0.07
Nodes (52): DropdownMenu(), Props, Props, Props, Props, Props, GenderFormField(), Props (+44 more)

### Community 20 - "ref_vitest"
Cohesion: 0.11
Nodes (27): answerMatches(), CYRILLIC_TO_LATIN, normalizeAnswer(), ChallengeState, isExpired(), isSolved(), pickRandom(), swapQuestion() (+19 more)

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "utils/membersTree/index.ts"
Cohesion: 0.12
Nodes (29): LineageEdge(), DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN, MIN_ANIM_DURATION, PATTERN_LEN, RETRACT_BASE (+21 more)

### Community 23 - "useLocale"
Cohesion: 0.08
Nodes (43): Props, InfoSection(), Props, MemberActivityPill(), Props, MemberFactTile(), Props, MemberInfo() (+35 more)

### Community 24 - "teamService.ts"
Cohesion: 0.15
Nodes (24): ResolvedPosition, resolvePosition(), MemberTransaction, assertCanEditMembers(), deriveTeamName(), resolveRole(), resolveTeam(), resolveTeamType() (+16 more)

### Community 25 - "MemberNodeAvatar.tsx"
Cohesion: 0.09
Nodes (26): @gsap/react, pixi-viewport, MemberNodeAvatar(), Props, AVATAR_HIGH_RES_SIZE, AVATAR_LOW_RES_SIZE, CARD_VIEW_SCALE, GRID_GAP_X (+18 more)

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
Cohesion: 0.06
Nodes (34): dependencies, cloudinary, compression, cors, dotenv, express, express-rate-limit, helmet (+26 more)

### Community 30 - "dependencies"
Cohesion: 0.10
Nodes (20): dependencies, date-fns, dotenv, elkjs, gsap, @gsap/react, @heroicons/react, lodash (+12 more)

### Community 31 - "TeamSearch.tsx"
Cohesion: 0.17
Nodes (19): Props, HighlightedTitle(), Props, SearchSuggestionRow(), SuggestionRowProps, compare(), getSearchable(), Props (+11 more)

### Community 32 - "EditMemberForm.tsx"
Cohesion: 0.21
Nodes (17): AddMemberForm(), Props, buildMemberFormData(), describeSubmitError(), EditMemberForm(), Props, buildEditPayload(), getInitialFormData() (+9 more)

### Community 33 - "filterTeams.ts"
Cohesion: 0.15
Nodes (21): DEFAULT_POSITION, areSetsEqual(), computeFilteredMembers(), Source, getTeamSpan(), hasRole(), hasTeamCriteria(), isTeamFilterActive() (+13 more)

### Community 34 - "useTreeLayout.ts"
Cohesion: 0.11
Nodes (24): getFitViewTargetScale(), useSceneTransition(), useIsMobileScreen(), useResolvedDirection(), useTreeLayout(), useMediaQuery(), DEFAULT_NODE_HEIGHT, DEFAULT_NODE_WIDTH (+16 more)

### Community 35 - "Common Mistakes"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, Constructor options, [CRITICAL] Using lineStyle instead of stroke, [CRITICAL] Using old shape method names, [CRITICAL] Using v7 beginFill/drawRect/endFill, [HIGH] Clearing and redrawing Graphics every frame, [HIGH] Destroying a shared GraphicsContext unexpectedly (+4 more)

### Community 36 - "package.json"
Cohesion: 0.10
Nodes (20): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+12 more)

### Community 37 - "MemberBestSection.tsx"
Cohesion: 0.20
Nodes (21): FormField(), MemberBasicsSection(), Props, MemberBestSection(), Props, MemberContactsSection(), Props, MemberFormFields() (+13 more)

### Community 38 - "TeamFormContent.tsx"
Cohesion: 0.10
Nodes (39): FieldError(), Props, PositionAssignmentFields(), Props, PositionFormFields(), Props, createEmptyPositionRow(), EMPTY_POSITION_ROW (+31 more)

### Community 39 - "Direction"
Cohesion: 0.14
Nodes (24): EdgesLayer(), NODE_AVATAR_RADIUS, NODE_WIDTH, bezierEval(), edgeGeometry, endpoints(), sampleBezierCurve(), sampleEdgePath() (+16 more)

### Community 40 - "Core Patterns"
Cohesion: 0.12
Nodes (20): Adding and removing children, API Reference, Bounds and coordinate conversion, Common Mistakes, Core Patterns, [CRITICAL] Adding children to leaf scene objects, Destroy, Finding and removing from parent (+12 more)

### Community 41 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+5 more)

### Community 42 - "oidcRouteFactory.ts"
Cohesion: 0.15
Nodes (18): EligibilityMember, EmailIdentity, MemberMatch, normalizeEmail(), resolveEmailIdentity(), resolveMemberMatch(), loadEmailIdentity(), prismaCodeStore (+10 more)

### Community 43 - "Core Patterns"
Cohesion: 0.22
Nodes (9): Coordinate conversion, Core Patterns, Cumulative alpha (getGlobalAlpha), Global, local, and screen coordinates, Pivot, Position, scale, rotation, Sizing via width, height, setSize, Skew (+1 more)

### Community 44 - "CLAUDE.md"
Cohesion: 0.22
Nodes (8): Commands, Conventions, Delegating to subagents, Deployment & data, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout

### Community 45 - "Container Hierarchy"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, Container Hierarchy, [CRITICAL] Adding children to a leaf, [HIGH] Destroying the parent without `children: true`, [MEDIUM] Mutating `children` during iteration, Quick Start

### Community 46 - "filterSearchParams.ts"
Cohesion: 0.11
Nodes (24): useFilterSearchParams(), FamilyGroupRef, familyIdToSlug(), familySlug, familyTokenToId(), groups, filtersToSearchParams(), parseCsvArray() (+16 more)

### Community 47 - "SettingsPanel.tsx"
Cohesion: 0.17
Nodes (16): FamilyTreeIcon(), Props, AccountPanel(), Props, edgeIcon(), edgeStyleOptions(), iconClass, orientationOptions() (+8 more)

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "useT.ts"
Cohesion: 0.09
Nodes (32): Props, byLabel(), CheckOption, Props, useStableOrder(), compare(), getSearchable(), MemberSearch() (+24 more)

### Community 50 - "en/index.ts"
Cohesion: 0.10
Nodes (18): auth, common, filters, formCommon, en, manage, memberForm, memberInfo (+10 more)

### Community 51 - "AGENTS.md"
Cohesion: 0.25
Nodes (7): Commands, Conventions, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout, This is NOT the Next.js you know

### Community 52 - "scripts"
Cohesion: 0.20
Nodes (10): scripts, build, db:backup-prod, db:restore-local, dev, dev:webpack, lint, start (+2 more)

### Community 53 - "MemberNode.tsx"
Cohesion: 0.06
Nodes (45): pixi.js, BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props, acquireEmojiTextures(), createEmojiTexture(), generateRandomPosition() (+37 more)

### Community 54 - "Member"
Cohesion: 0.08
Nodes (25): Cloning, clearing, and bounds, Props, Props, Props, Props, Props, Props, Props (+17 more)

### Community 57 - "clientInstance.ts"
Cohesion: 0.05
Nodes (38): @prisma/adapter-pg, @prisma/config, AllowedRow, AllowlistDiff, diffAllowlist(), looksLikeEmail(), parseAllowlistCsv(), ParsedAllowlist (+30 more)

### Community 58 - "SignIn.tsx"
Cohesion: 0.16
Nodes (13): logout(), AuthMessage(), Props, EmailForm(), Props, Method, Props, SignInCard() (+5 more)

### Community 59 - "Core Patterns"
Cohesion: 0.12
Nodes (17): Application destroy/recreate cycle, Batching optimization, cacheAsTexture for performance, Core Patterns, Culling, Filters and masks cost, Graphics performance, Low-level rendering optimizations (+9 more)

### Community 60 - "MembersTreeDynamic.tsx"
Cohesion: 0.15
Nodes (14): MembersTree(), Props, isTreeReady(), MembersTree, MembersTreeDynamic(), Props, TreeState, BrandSpinner() (+6 more)

### Community 61 - "checkConfig.ts"
Cohesion: 0.07
Nodes (36): RFC-2045, RFC-2047, assertConfig(), configProblems(), databaseName(), demoProblems(), Env, googleProblems() (+28 more)

### Community 62 - "src/index.ts"
Cohesion: 0.07
Nodes (35): Renderer selection at runtime, [MEDIUM] Using container.name instead of container.label, deleteCloudinaryImage(), extractCloudinaryPublicId(), countMembersByRole(), router, TEAM_INCLUDE, router (+27 more)

### Community 63 - "MemberInfoActions.tsx"
Cohesion: 0.23
Nodes (12): FacebookIcon(), FacebookGlyph(), InstagramGlyph(), LinkedinGlyph(), svgProps, TelegramGlyph(), InstagramIcon(), LinkedinIcon() (+4 more)

### Community 64 - "memberService.ts"
Cohesion: 0.08
Nodes (39): zod, buildMemberFields(), buildMemberUpdateFields(), buildSharedFields(), buildSparseMemberFields(), parsePhoneNumbers(), parsePositionsPayload(), getPositionKey() (+31 more)

### Community 65 - "BEST Family Tree"
Cohesion: 0.11
Nodes (18): 1. Clone and configure environment, 2. Start the application, 3. Run database migrations, 4. Access the app, Architecture, Available Commands, Backend Commands (run inside container), Backups (+10 more)

### Community 66 - "Diagnosing Bugs"
Cohesion: 0.13
Nodes (14): Completion criterion: a tight loop that goes red, Diagnosing Bugs, Minimise, Non-deterministic bugs, Phase 1: Build a feedback loop, Phase 2: Reproduce + minimise, Phase 3: Hypothesise, Phase 4: Instrument (+6 more)

### Community 67 - "MemberStatus"
Cohesion: 0.13
Nodes (13): StoredMemberValues, complete, mentors, sparse, FOUNDER_JOIN_YEAR, MENTOR_STATUSES, StatusIcon, MemberStatus (+5 more)

### Community 68 - "fakeIdentity.ts"
Cohesion: 0.27
Nodes (7): @faker-js/faker, createIdentityFactory(), firstFree(), OPERATOR_CODES, none, MAP, translit()

### Community 69 - "familyTreeRoutes.ts"
Cohesion: 0.15
Nodes (15): toMemberResponse(), loadFamilyTree, loadReducedFamilyTree, router, serializeMember(), bumpDataVersion(), createVersionedCache(), trackWrites() (+7 more)

### Community 70 - "FitViewButton.tsx"
Cohesion: 0.23
Nodes (11): DemoBadge(), FitViewButton(), PanelResetButton(), Props, focusSearchInput(), Toolbar(), ToolbarIconButton(), ToolbarTooltip() (+3 more)

### Community 71 - "Core Patterns"
Cohesion: 0.13
Nodes (14): API Reference, boundsArea optimization, Common Mistakes, Core Patterns, Culling, HIGH: Expecting automatic culling, HIGH: Using addChild on RenderLayer, MEDIUM: Expecting filters on ancestors to apply to layer children (+6 more)

### Community 72 - "Core Patterns"
Cohesion: 0.14
Nodes (13): Advanced shape primitives, Core Patterns, Default styles via setFillStyle / setStrokeStyle, Draw-time transforms, Drawing a texture directly, Gradients and patterns, GraphicsContext sharing, GraphicsContext utilities (+5 more)

### Community 73 - "membersStore.ts"
Cohesion: 0.14
Nodes (23): zustand, Props, EVENT_FEATURES, MembersTreeContent(), ViewportCulling(), membersActions, {
  setMembers,
  reloadMembers,
  addMember,
  updateMember,
  selectMember,
  getMentorsList,
}, useMembersActions() (+15 more)

### Community 74 - "PhotoViewer.tsx"
Cohesion: 0.18
Nodes (15): DropdownPortal(), Props, PhotoViewer(), thumbRadius(), Viewer(), viewportRect(), BUTTON, GLASS (+7 more)

### Community 75 - "constants/filters.ts"
Cohesion: 0.10
Nodes (27): CATEGORY_ICONS, FilterCategoryRail(), Props, ACTIVITY_STATES, DATE_PICKER_CLASSES, EMPTY_FILTER_STATE, GENDER_VALUES, JOIN_SEASONS (+19 more)

### Community 76 - "filterTeams.ts"
Cohesion: 0.17
Nodes (20): Constructor options, Effects, birthdayBoundKey(), countActiveFilters(), countActiveMemberFilters(), isFilterActive(), isIdListSet(), isListFilterSet() (+12 more)

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

### Community 81 - "CodeForm.tsx"
Cohesion: 0.27
Nodes (12): verifyEmailCode(), applyDigits(), backspaceAt(), CODE_LENGTH, Edit, emptyDigits(), isComplete(), CodeForm() (+4 more)

### Community 82 - "MemberSidebarContent.tsx"
Cohesion: 0.20
Nodes (5): Props, Props, ManageState, useManageStore, SidebarMode

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

### Community 88 - "contactKeys.ts"
Cohesion: 0.20
Nodes (10): duplicates, fields, groups, ContactFields, contactKey(), ContactPlatform, FIELD_PLATFORMS, findContactCollision() (+2 more)

### Community 89 - "Foundations"
Cohesion: 0.15
Nodes (12): Advanced, Foundations, pixijs-application, pixijs-core-concepts, pixijs-events, pixijs-performance, pixijs-scene-container, pixijs-scene-core-concepts (+4 more)

### Community 90 - "AccountForm.tsx"
Cohesion: 0.31
Nodes (9): requestEmailCode(), AccountForm(), Props, GoogleButton(), GoogleMark(), Props, ProviderButton(), TelegramButton() (+1 more)

### Community 91 - "Sidebar.tsx"
Cohesion: 0.18
Nodes (12): Sidebar(), Props, SidebarBehindCover(), Props, SidebarFooter(), SidebarFooterContext, Props, SidebarHandle() (+4 more)

### Community 92 - "Core Concepts"
Cohesion: 0.18
Nodes (11): Container vs leaf (CRITICAL), Core Concepts, Culling, Destroy semantics, Lifecycle events, Masking, Render groups, Render order and explicit z-ordering (+3 more)

### Community 93 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, concurrently, @faker-js/faker, nodemon, ts-node, tsx, @types/compression, @types/cors (+5 more)

### Community 94 - "pixijs/SKILL.md"
Cohesion: 0.18
Nodes (9): API Reference, Quick Start, Advanced, Fallback: canonical PixiJS docs, Foundations, How to use this skill, Scene Objects, Skill router (+1 more)

### Community 98 - "TeamLogo.tsx"
Cohesion: 0.18
Nodes (16): cache, loadImageAspect(), PhotoOpenButton(), Props, useIsPhotoOpen(), AvatarSkeleton(), MemberAvatarImage(), MemberAvatarImageInner() (+8 more)

### Community 99 - "gsap"
Cohesion: 0.17
Nodes (21): gsap, Props, Viewport(), NODE_HOVER_ANIMATION_DURATION, NODE_HOVER_SCALE, ZOOMED_OUT_HOVER_SCALE_MAP, BIRTHDAY_ANIMATION_MIN_SCALE, MAX_VIEWPORT_ZOOM (+13 more)

### Community 100 - "piiCheck.ts"
Cohesion: 0.38
Nodes (8): DemoValues, findLeaks(), lowerSet(), norm(), normalizeSocial(), RealValues, clean, real

### Community 101 - "MemberPositions.tsx"
Cohesion: 0.36
Nodes (6): MemberPositions(), PositionBadge(), useStackOnOverflow(), getPositionPeriod(), getPositionYearLabel(), Years

### Community 102 - "Render Loop"
Cohesion: 0.22
Nodes (8): API Reference, Common Mistakes, [CRITICAL] Treating the ticker callback arg as a number, Frame lifecycle, [HIGH] Using `updateTransform` for per-frame logic, [MEDIUM] Assuming ticker callbacks run after render, Quick Start, Render Loop

### Community 103 - "pixijs-core-concepts/SKILL.md"
Cohesion: 0.22
Nodes (8): API Reference, Decision guide, Environments, Quick concepts, Quick Start, Renderer = systems + pipes, The render loop, Topics

### Community 104 - "pixijs-events/SKILL.md"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] buttonMode removed; use cursor, [HIGH] Default eventMode is passive, [HIGH] Move events only fire over the object in v8, [MEDIUM] Cursor does not inherit from parent, Quick Start

### Community 105 - "NodesLayer.tsx"
Cohesion: 0.29
Nodes (6): NodesLayer(), Props, nextAdmittedIds(), PROGRESSIVE_CHUNK_SIZE, useProgressiveIds(), getMemberTeamRoles()

### Community 106 - "aiFaces.ts"
Cohesion: 0.38
Nodes (3): createFaceSource(), Options, source()

### Community 107 - "EditMemberForm.tsx"
Cohesion: 0.11
Nodes (32): ClearButton(), Props, SubmitButton(), ConfirmDeleteControl(), Props, PositionRowHeader(), Props, FormFooter() (+24 more)

### Community 108 - "filtersStore.ts"
Cohesion: 0.20
Nodes (13): FiltersFooter(), FiltersHeader(), Props, FiltersPanel(), Props, FilterCategoryPane(), useDraftFilterCount(), SearchBar() (+5 more)

### Community 109 - "photoViewerMath.ts"
Cohesion: 0.20
Nodes (19): clampAxis(), clampOffset(), clampScale(), coverMorph, fitRect(), FULL_CLIP, MAX_SCALE, MIN_SCALE (+11 more)

### Community 110 - "migrateMembersFromMongodb.ts"
Cohesion: 0.07
Nodes (30): mongodb, ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember, STATUSES_MAP (+22 more)

### Community 111 - "strings.ts"
Cohesion: 0.53
Nodes (3): Props, TeamTypeMark(), initialsOf()

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

### Community 113 - "Common Mistakes"
Cohesion: 0.33
Nodes (6): Common Mistakes, [CRITICAL] Adding children to a leaf display object, [CRITICAL] Referencing DisplayObject, [HIGH] Forgetting isRenderGroup on large static subtrees, [HIGH] Treating child.x as world space, [MEDIUM] sortableChildren without zIndex

### Community 114 - "tailwind-merge"
Cohesion: 0.15
Nodes (18): @heroicons/react, next, react-dom, tailwind-merge, GLOW, Props, Props, AvatarFileInput() (+10 more)

### Community 116 - "pixijs-scene-core-concepts/SKILL.md"
Cohesion: 0.25
Nodes (6): API Reference, Leaf comparison: which skill covers which object, Quick Start, References, Tooling, When to use what (quick decisions)

### Community 118 - "uk/filters.ts"
Cohesion: 0.33
Nodes (5): familyForms, filters, memberForms, roleForms, teamForms

### Community 119 - "en/errors.ts"
Cohesion: 0.50
Nodes (3): errors, Params, platformLabels

### Community 121 - "Transforms and Coordinate Spaces"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Setting scale to 0, [MEDIUM] Confusing anchor and pivot, [MEDIUM] Reading world transform before first render, Quick Start, Transforms and Coordinate Spaces

### Community 123 - "Common Mistakes"
Cohesion: 0.20
Nodes (10): Common Mistakes, [CRITICAL] App destroy without releaseGlobalResources, [HIGH] Destroying and recreating objects instead of recycling, [HIGH] Interleaving object types in scene graph, [HIGH] Loading many individual textures instead of spritesheets, [HIGH] Updating Text or HTMLText every frame, [HIGH] Using complex Graphics instead of textures, [MEDIUM] Not staggering bulk texture destruction (+2 more)

### Community 124 - "searchShortcut.ts"
Cohesion: 0.33
Nodes (6): EDITABLE_TAGS, isEditableTarget(), isSearchShortcut(), ShortcutKeys, Keys, useSearchShortcut()

### Community 125 - "useCardAnimation.ts"
Cohesion: 0.14
Nodes (22): CARD_PIVOT, clamp01(), deferCardHidden(), easeBackOut, easePower2In, easePower2Out, entries, Entry (+14 more)

### Community 126 - "Messages"
Cohesion: 0.24
Nodes (8): Messages, Widen, memberForms, search, plural(), PluralForms, en, uk

### Community 127 - "Core Patterns"
Cohesion: 0.29
Nodes (7): Core Patterns, Frame rate capping, Manual rendering, Per-object update via `onRender`, Priority order, Stop and start, Time units

### Community 129 - "GSAP with React"
Cohesion: 0.15
Nodes (12): Best practices, Context-Safe Callbacks, Dependency array, scope, and revertOnUpdate, Do Not, gsap.context() in useEffect (when useGSAP isn't used), GSAP with React, Installation, Learn More (+4 more)

### Community 130 - "emailCodes.ts"
Cohesion: 0.17
Nodes (14): CODE_TTL_MS, CodeOwner, CodeStore, generateCode(), hashCode(), issueCode(), MAX_CODE_ATTEMPTS, sameHash() (+6 more)

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
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1036 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `react`, `MemberPane.tsx`, `settingsStore.ts`, `http`, `teamFrame.ts`, `hooks/index.ts`, `api/auth.ts`, `hooks/index.ts`, `src/types/index.ts`, `utils/membersTree/index.ts`, `useLocale`, `MemberNodeAvatar.tsx`, `TeamSearch.tsx`, `EditMemberForm.tsx`, `useTreeLayout.ts`, `package.json`, `MemberBestSection.tsx`, `TeamFormContent.tsx`, `SettingsPanel.tsx`, `useT.ts`, `MemberNode.tsx`, `SignIn.tsx`, `MembersTreeDynamic.tsx`, `MemberStatus`, `FitViewButton.tsx`, `membersStore.ts`, `PhotoViewer.tsx`, `constants/filters.ts`, `CodeForm.tsx`, `MemberSidebarContent.tsx`, `AccountForm.tsx`, `Sidebar.tsx`, `TeamLogo.tsx`, `gsap`, `MemberPositions.tsx`, `NodesLayer.tsx`, `EditMemberForm.tsx`, `filtersStore.ts`, `photoViewerMath.ts`, `tailwind-merge`, `searchShortcut.ts`, `useCardAnimation.ts`?**
  _High betweenness centrality (0.096) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _45 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `uk/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.08403361344537816 - nodes in this community are weakly interconnected._
- **Why does `filters()` connect `filterTeams.ts` to `Common Mistakes`, `filterSearchParams.ts`?**
  _High betweenness centrality (0.088) - this node is a cross-community bridge._
- **Should `MemberPane.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.051201671891327065 - nodes in this community are weakly interconnected._
- **Why does `Constructor options` connect `Common Mistakes` to `filterTeams.ts`?**
  _High betweenness centrality (0.054) - this node is a cross-community bridge._
- **Should `server/package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.06439393939393939 - nodes in this community are weakly interconnected._