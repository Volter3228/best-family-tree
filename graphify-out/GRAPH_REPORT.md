# Graph Report - best-family-tree  (2026-11-19)

## Corpus Check
- 737 files · ~223,236 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 31 file(s) not represented in the graph (top: .prisma 10, (none) 7, .css 7)

## Summary
- 3411 nodes · 10159 edges · 136 communities (127 shown, 9 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 101 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `b71b1eaa`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- uk/index.ts
- react
- MemberPane.tsx
- server/package.json
- constants/canvas/index.ts
- auth/types.ts
- layout.tsx
- suggestion/suggestionPhoto.ts
- suggestionCreate.ts
- teamLayout.ts
- teamFrame.ts
- SeasonChip.tsx
- anonymizeDemo.ts
- Toolbar.tsx
- clientInstance.ts
- emailRoutes.ts
- mailer/index.ts
- scripts
- hooks/index.ts
- @heroicons/react
- httpErrors.ts
- HTML Report Format
- utils/membersTree/index.ts
- AccentColor
- teamService.ts
- mime.ts
- compilerOptions
- compilerOptions
- ApplicationOptions reference
- dependencies
- dependencies
- MemberSearch.tsx
- TeamTypeFormContent.tsx
- filterTeams.ts
- TeamLogo.tsx
- Common Mistakes
- package.json
- MemberSuggestFields.tsx
- TeamFormContent.tsx
- Direction
- Core Patterns
- devDependencies
- oidcRouteFactory.ts
- Core Patterns
- CLAUDE.md
- Core Patterns
- TeamBadge.tsx
- SettingsPanel.tsx
- During the session
- SuggestionsTab.tsx
- en/index.ts
- AGENTS.md
- scripts
- pixi.js
- NodesLayer.tsx
- next.config.mjs
- postcss.config.mjs
- src/index.ts
- useTeamForm.ts
- Core Patterns
- memberRoutes.ts
- teamGroups.ts
- zustand
- MembersTreeContent.tsx
- memberService.ts
- BEST Family Tree
- Diagnosing Bugs
- useCardAnimation.ts
- AccessTab
- en/errors.ts
- FitViewButton.tsx
- Core Patterns
- Core Patterns
- MemberInfo.tsx
- constants/filters.ts
- BirthdayFilterSection.tsx
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
- MemberNodeCard.tsx
- Foundations
- Sidebar.tsx
- Core Concepts
- Member
- pixijs/SKILL.md
- backup-prod.sh
- start-prod.sh
- restore-local.sh
- react
- useT
- Render Loop
- pixijs-core-concepts/SKILL.md
- useTransientMessage
- MemberSuggestForm.tsx
- filtersStore.ts
- PhotoViewer.tsx
- migrateMembersFromMongodb.ts
- Renderers: WebGPU, WebGL, and Canvas
- searchShortcut.ts
- http
- AccountRoles.tsx
- pixijs-scene-core-concepts/SKILL.md
- locale.ts
- uk/filters.ts
- useSessionStore
- ref_vitest
- filterTeams.ts
- Common Mistakes
- importAllowedEmails.ts
- api/index.ts
- plural.test.ts
- Member
- devDependencies
- GSAP with React
- backfillGender.ts
- hitl-loop.template.sh
- fakeIdentity.ts
- eligibility.ts
- GSAP Performance
- GSAP Timeline
- ref_vitest
- contactKeys.ts
- checkConfig.ts
- BEST Family Tree
- TeamFormContent.tsx
- useFilterSearchParams.ts

## God Nodes (most connected - your core abstractions)
1. `useT()` - 212 edges
2. `AccentColor` - 186 edges
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

## Communities (136 total, 9 thin omitted)

### Community 0 - "uk/index.ts"
Cohesion: 0.06
Nodes (25): access, account, auth, common, errors, Params, platformLabels, formCommon (+17 more)

### Community 1 - "react"
Cohesion: 0.09
Nodes (35): fetchSuggestionCount(), CATEGORY_ICONS, Props, TeamForm(), Props, TeamTile(), Props, TeamTypeForm() (+27 more)

### Community 2 - "MemberPane.tsx"
Cohesion: 0.23
Nodes (9): ACTIVITY_ICONS, IconComponent, IconProps, greenPillIcon(), IconProps, MemberPane(), buildOptions(), getActivityOptions() (+1 more)

### Community 3 - "server/package.json"
Cohesion: 0.07
Nodes (26): compression, concurrently, cors, express-rate-limit, helmet, nodemon, openid-client, ts-node (+18 more)

### Community 4 - "constants/canvas/index.ts"
Cohesion: 0.07
Nodes (29): @pixi/react, PixiElements, pixi.js, pixi-viewport, MembersTree(), lineageEdgePath, ACCIDENTAL_DRAG_MAX_DISTANCE, ACCIDENTAL_DRAG_MAX_MS (+21 more)

### Community 5 - "auth/types.ts"
Cohesion: 0.12
Nodes (21): canEditMember(), canManageGrant(), canSelfServe(), canSuggest(), hasAccess(), isOwnGrant(), RANK, CONTACT_FIELDS (+13 more)

### Community 6 - "layout.tsx"
Cohesion: 0.07
Nodes (32): react-datepicker, metadata, nunito, RootLayout(), AuroraBackground(), darkTheme, DEFAULT_THEME, lightTheme (+24 more)

### Community 7 - "suggestion/suggestionPhoto.ts"
Cohesion: 0.15
Nodes (21): selfServeGuard(), assertUnderPendingCap(), authorWhere(), SuggestionTarget, targetWhere(), createSuggestionBatch(), listMySuggestions(), assertCanSuggestPhoto() (+13 more)

### Community 8 - "suggestionCreate.ts"
Cohesion: 0.07
Nodes (51): assertMentorExists(), assertNoMentorCycle(), applyPhone(), Suggestion, buildRows(), checkMemberRows(), checkTeamRows(), CONTACT_FIELDS (+43 more)

### Community 9 - "teamLayout.ts"
Cohesion: 0.07
Nodes (41): elkjs, Props, Props, TEAM_FRAME_GAP, TEAM_PACK_ASPECT, failOver(), getWorker(), Pending (+33 more)

### Community 10 - "teamFrame.ts"
Cohesion: 0.06
Nodes (46): TEAM_COLUMN_GAP, TEAM_EDGE_DROP, TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_SPREAD_WIDTH, TEAM_EDGE_STUB, TEAM_FRAME_HEADER, TEAM_FRAME_MIN_WIDTH, TEAM_FRAME_PADDING (+38 more)

### Community 11 - "SeasonChip.tsx"
Cohesion: 0.19
Nodes (13): FlowerIcon(), Props, MapleLeafIcon(), Props, Placement, PLACEMENTS, Props, SeasonMotif() (+5 more)

### Community 12 - "anonymizeDemo.ts"
Cohesion: 0.12
Nodes (19): allowed, args, byId, factory, GROUP_NAMES, memberPhotos, nextFace, real (+11 more)

### Community 13 - "Toolbar.tsx"
Cohesion: 0.18
Nodes (12): TeamInfoSidebar(), DemoBadge(), focusSearchInput(), Toolbar(), Props, SidebarMinimizedSummary(), useSidebarSwitchAnimation(), usePanelToggle() (+4 more)

### Community 14 - "clientInstance.ts"
Cohesion: 0.10
Nodes (16): @prisma/adapter-pg, @prisma/config, MIN_ACTIVE_QUESTIONS, deleteQuestionSessions(), adapter, prisma, router, level (+8 more)

### Community 15 - "emailRoutes.ts"
Cohesion: 0.08
Nodes (47): express, authSecret(), isDemoMode(), isProduction(), SESSION_COOKIE, SESSION_TTL_MS, SIGN_IN_COOKIE, useSecureCookie() (+39 more)

### Community 16 - "mailer/index.ts"
Cohesion: 0.18
Nodes (12): consoleMailer, getMailer(), createResendMailer(), ResendConfig, message, Env, isTransport(), MAIL_TRANSPORTS (+4 more)

### Community 17 - "scripts"
Cohesion: 0.12
Nodes (17): scripts, auth:grant, auth:import-emails, auth:preview-email, auth:report-duplicate-contacts, auth:seed-grants, auth:seed-questions, build (+9 more)

### Community 18 - "hooks/index.ts"
Cohesion: 0.08
Nodes (34): Props, Props, Props, Props, Props, TeamFramesLayer(), Props, Props (+26 more)

### Community 19 - "@heroicons/react"
Cohesion: 0.14
Nodes (18): @heroicons/react, next, Props, AvatarFileInput(), Props, removeBadgeClasses(), LogoFileInput(), Props (+10 more)

### Community 20 - "httpErrors.ts"
Cohesion: 0.14
Nodes (21): ChallengeState, isExpired(), isSolved(), pickRandom(), swapQuestion(), SwapResult, base, ChallengeView (+13 more)

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "utils/membersTree/index.ts"
Cohesion: 0.09
Nodes (36): LineageEdge(), FIXED_EDGE_WIDTH, DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN, MIN_ANIM_DURATION, PATTERN_LEN (+28 more)

### Community 23 - "AccentColor"
Cohesion: 0.06
Nodes (41): tailwind-merge, PAIR_COLORS, Props, Props, Props, Props, Props, Props (+33 more)

### Community 24 - "teamService.ts"
Cohesion: 0.07
Nodes (46): ResolvedPosition, resolvePosition(), MemberTransaction, assertCanEditMembers(), deriveTeamName(), resolveRole(), resolveTeam(), resolveTeamType() (+38 more)

### Community 25 - "mime.ts"
Cohesion: 0.29
Nodes (11): RFC-2045, RFC-2047, createGmailMailer(), GmailConfig, base64Body(), buildMime(), encodeHeaderText(), formatAddress() (+3 more)

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

### Community 31 - "MemberSearch.tsx"
Cohesion: 0.10
Nodes (38): MemberNodeCard(), compare(), getSearchable(), MemberSearch(), Props, Props, SearchBar(), SearchPanel() (+30 more)

### Community 32 - "TeamTypeFormContent.tsx"
Cohesion: 0.22
Nodes (9): Props, ColorField(), PRESETS, Props, ColorPickerPanel(), EyeDropperApi, Props, TeamTypeFormMode (+1 more)

### Community 33 - "filterTeams.ts"
Cohesion: 0.23
Nodes (17): birthdayBoundKey(), countActiveFilters(), countActiveMemberFilters(), isFilterActive(), isIdListSet(), isListFilterSet(), matchesBirthday(), matchesFamilyGroup() (+9 more)

### Community 34 - "TeamLogo.tsx"
Cohesion: 0.24
Nodes (12): AvatarSkeleton(), MemberAvatarImage(), MemberAvatarImageInner(), Props, SkeletonProps, isTinted(), LoadingImage(), Props (+4 more)

### Community 35 - "Common Mistakes"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, Constructor options, [CRITICAL] Using lineStyle instead of stroke, [CRITICAL] Using old shape method names, [CRITICAL] Using v7 beginFill/drawRect/endFill, [HIGH] Clearing and redrawing Graphics every frame, [HIGH] Destroying a shared GraphicsContext unexpectedly (+4 more)

### Community 36 - "package.json"
Cohesion: 0.09
Nodes (21): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+13 more)

### Community 37 - "MemberSuggestFields.tsx"
Cohesion: 0.10
Nodes (40): MemberSidebar(), FormField(), GenderFormField(), MemberBasicsSection(), Props, MemberBestSection(), Props, MemberContactsSection() (+32 more)

### Community 38 - "TeamFormContent.tsx"
Cohesion: 0.10
Nodes (38): FieldError(), Props, PositionAssignmentFields(), Props, PositionFormFields(), Props, createEmptyPositionRow(), EMPTY_POSITION_ROW (+30 more)

### Community 39 - "Direction"
Cohesion: 0.11
Nodes (32): EdgesLayer(), drawLerped(), drawPolyline(), Props, TeamEdgesLayer(), NODE_AVATAR_RADIUS, Point, TeamEdge (+24 more)

### Community 40 - "Core Patterns"
Cohesion: 0.10
Nodes (23): Renderer selection at runtime, Adding and removing children, API Reference, Bounds and coordinate conversion, Common Mistakes, Core Patterns, [CRITICAL] Adding children to leaf scene objects, Destroy (+15 more)

### Community 41 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+5 more)

### Community 42 - "oidcRouteFactory.ts"
Cohesion: 0.42
Nodes (6): resolveMemberMatch(), phoneKey(), resolveTelegramIdentity(), TelegramIdentity, loadTelegramIdentity(), TelegramClaims

### Community 43 - "Core Patterns"
Cohesion: 0.12
Nodes (16): API Reference, Common Mistakes, Coordinate conversion, Core Patterns, Cumulative alpha (getGlobalAlpha), Global, local, and screen coordinates, [HIGH] Setting scale to 0, [MEDIUM] Confusing anchor and pivot (+8 more)

### Community 44 - "CLAUDE.md"
Cohesion: 0.22
Nodes (8): Commands, Conventions, Delegating to subagents, Deployment & data, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout

### Community 45 - "Core Patterns"
Cohesion: 0.12
Nodes (15): Add, remove, swap, API Reference, Child queries, Common Mistakes, Container Hierarchy, Core Patterns, [CRITICAL] Adding children to a leaf, Destroying sub-trees (+7 more)

### Community 46 - "TeamBadge.tsx"
Cohesion: 0.08
Nodes (49): @pixi/react, MemberNodeAvatar(), Props, MemberNodeMinimizedTooltip(), Props, TeamBadge(), FILL_ALPHA, lerp() (+41 more)

### Community 47 - "SettingsPanel.tsx"
Cohesion: 0.19
Nodes (14): FamilyTreeIcon(), Props, edgeIcon(), edgeStyleOptions(), iconClass, orientationOptions(), themeOptions(), treeModeOptions() (+6 more)

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "SuggestionsTab.tsx"
Cohesion: 0.14
Nodes (27): fetchMemberById(), approveSuggestion(), fetchSuggestions(), parse(), rejectSuggestion(), SuggestionDto, CollapseOut(), Props (+19 more)

### Community 50 - "en/index.ts"
Cohesion: 0.10
Nodes (26): access, account, auth, common, filters, formCommon, en, manage (+18 more)

### Community 51 - "AGENTS.md"
Cohesion: 0.25
Nodes (7): Commands, Conventions, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout, This is NOT the Next.js you know

### Community 52 - "scripts"
Cohesion: 0.20
Nodes (10): scripts, build, db:backup-prod, db:restore-local, dev, dev:webpack, lint, start (+2 more)

### Community 53 - "pixi.js"
Cohesion: 0.10
Nodes (26): BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props, acquireEmojiTextures(), createEmojiTexture(), generateRandomPosition(), releaseEmojiTextures() (+18 more)

### Community 54 - "NodesLayer.tsx"
Cohesion: 0.24
Nodes (7): NodesLayer(), Props, nextAdmittedIds(), PROGRESSIVE_CHUNK_SIZE, useProgressiveIds(), parseTeamNodeId(), getMemberTeamRoles()

### Community 57 - "src/index.ts"
Cohesion: 0.09
Nodes (28): app, checkOrigin(), requireAccess(), requireEditorForWrites(), WRITE_METHODS, adminGrantLocked(), ownGrantError(), router (+20 more)

### Community 58 - "useTeamForm.ts"
Cohesion: 0.22
Nodes (20): createTeam(), deleteTeam(), fetchTeamDetails(), parse(), setTeamMembers(), TeamMemberPayload, updateTeam(), buildTeamRequestBody() (+12 more)

### Community 59 - "Core Patterns"
Cohesion: 0.12
Nodes (17): Application destroy/recreate cycle, Batching optimization, cacheAsTexture for performance, Core Patterns, Culling, Filters and masks cost, Graphics performance, Low-level rendering optimizations (+9 more)

### Community 60 - "memberRoutes.ts"
Cohesion: 0.11
Nodes (24): cloudinary, multer, multer-storage-cloudinary, deleteCloudinaryImage(), deleteReplacedImage(), discardUpload(), extractCloudinaryPublicId(), samePublicId() (+16 more)

### Community 61 - "teamGroups.ts"
Cohesion: 0.30
Nodes (10): areSetsEqual(), computeFilteredMembers(), Source, TeamFilters, countVisibleTeams(), getTeamTreeNodeIds(), groupMembersByTeam(), TeamGroup (+2 more)

### Community 62 - "zustand"
Cohesion: 0.25
Nodes (6): zustand, PhotoViewerState, ViewerPhoto, ProfileOpenMode, ProfileOpenRequest, ProfileState

### Community 63 - "MembersTreeContent.tsx"
Cohesion: 0.15
Nodes (21): EMPTY_IDS, SharpAvatarTracker(), View, Viewport(), EVENT_FEATURES, MembersTreeContent(), ViewportCulling(), AVATAR_LOW_RES_SIZE (+13 more)

### Community 64 - "memberService.ts"
Cohesion: 0.08
Nodes (39): zod, buildMemberFields(), buildMemberUpdateFields(), buildSharedFields(), buildSparseMemberFields(), parsePositionsPayload(), getPositionKey(), syncPositions() (+31 more)

### Community 65 - "BEST Family Tree"
Cohesion: 0.10
Nodes (19): 1. Clone and configure environment, 2. Start the application, 3. Run database migrations, 4. Access the app, Architecture, Automated backups (GitHub Actions), Available Commands, Backend Commands (run inside container) (+11 more)

### Community 66 - "Diagnosing Bugs"
Cohesion: 0.13
Nodes (14): Completion criterion: a tight loop that goes red, Diagnosing Bugs, Minimise, Non-deterministic bugs, Phase 1: Build a feedback loop, Phase 2: Reproduce + minimise, Phase 3: Hypothesise, Phase 4: Instrument (+6 more)

### Community 67 - "useCardAnimation.ts"
Cohesion: 0.12
Nodes (25): CARD_PIVOT, MemberNodeCardSlot(), Props, MemberNodeGlow(), clamp01(), deferCardHidden(), easeBackOut, easePower2In (+17 more)

### Community 68 - "AccessTab"
Cohesion: 0.52
Nodes (6): fetchGrants(), GrantLevel, parse(), removeGrant(), setGrant(), AccessTab()

### Community 69 - "en/errors.ts"
Cohesion: 0.50
Nodes (3): errors, Params, platformLabels

### Community 70 - "FitViewButton.tsx"
Cohesion: 0.31
Nodes (8): FitViewButton(), Props, Props, Props, ToolbarIconButton(), Props, ToolbarTooltip(), useHoverTooltip()

### Community 71 - "Core Patterns"
Cohesion: 0.13
Nodes (14): API Reference, boundsArea optimization, Common Mistakes, Core Patterns, Culling, HIGH: Expecting automatic culling, HIGH: Using addChild on RenderLayer, MEDIUM: Expecting filters on ancestors to apply to layer children (+6 more)

### Community 72 - "Core Patterns"
Cohesion: 0.12
Nodes (14): Advanced shape primitives, Cloning, clearing, and bounds, Core Patterns, Default styles via setFillStyle / setStrokeStyle, Draw-time transforms, Drawing a texture directly, Gradients and patterns, GraphicsContext sharing (+6 more)

### Community 73 - "MemberInfo.tsx"
Cohesion: 0.17
Nodes (20): AccountPanel(), Props, NameBadgePicker(), cache, loadImageAspect(), PhotoOpenButton(), Props, useIsPhotoOpen() (+12 more)

### Community 75 - "constants/filters.ts"
Cohesion: 0.06
Nodes (53): ACTIVITY_STATES, DATE_PICKER_CLASSES, EMPTY_FILTER_STATE, GENDER_VALUES, JOIN_SEASONS, MEMBER_STATUSES, FOUNDER_JOIN_YEAR, MEMBER_STATUSES (+45 more)

### Community 76 - "BirthdayFilterSection.tsx"
Cohesion: 0.07
Nodes (46): Props, PANES, Props, RolesPane(), TeamsPane(), FilterPaneProps, BirthdayFilterSection(), Props (+38 more)

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
Cohesion: 0.05
Nodes (60): AccessLevel, AuthMethod, Challenge, ChallengeQuestion, logout(), post(), RequestCodeOutcome, requestEmailCode() (+52 more)

### Community 82 - "displayName.ts"
Cohesion: 0.14
Nodes (17): Locale, messages, getPhotoUrlAsAvatar(), cache, displayFamilyName(), FAMILY_NAMES_EN, romanizeCached(), useDisplayFamilyName() (+9 more)

### Community 83 - "Core Patterns"
Cohesion: 0.15
Nodes (13): Context and device loss, Core Patterns, Destroying a renderer, Direct renderer construction, Lazy-loading backend-specific systems and pipes, Manual rendering, Per-renderer options, Preference forms (+5 more)

### Community 84 - "Constructor options (Container-inherited)"
Cohesion: 0.11
Nodes (20): Constructor options, Container events, Advanced options and aliases, Before / after, Callbacks, Constructor options (Container-inherited), Display, Effects (+12 more)

### Community 85 - "Test-Driven Development"
Cohesion: 0.15
Nodes (10): Designing for Mockability, When to Mock, Anti-patterns, Rules of the loop, Seams: where tests go, Test-Driven Development, What a good test is, Bad Tests (+2 more)

### Community 86 - "GSAP Core"
Cohesion: 0.10
Nodes (20): Accessibility and responsive (gsap.matchMedia()), Common vars, Core Tween Methods, Custom: use CustomEase (plugin), Defaults, Do Not, Easing, Function-based values (+12 more)

### Community 87 - "Core Patterns"
Cohesion: 0.10
Nodes (19): API Reference, Capture phase events, Common Mistakes, Core Patterns, Cursor styles, Event features, Event properties, Event types (+11 more)

### Community 88 - "MemberNodeCard.tsx"
Cohesion: 0.11
Nodes (24): contexts, getCardBackgroundContext(), getGlowTexture(), GLOW_BLUR, GLOW_PADDING, GlowKind, paint(), SIZES (+16 more)

### Community 89 - "Foundations"
Cohesion: 0.13
Nodes (14): Advanced, Foundations, pixijs-application, pixijs-core-concepts, pixijs-events, pixijs-performance, pixijs-scene-container, pixijs-scene-core-concepts (+6 more)

### Community 91 - "Sidebar.tsx"
Cohesion: 0.09
Nodes (23): react, Props, Props, SuccessBubble(), Props, Sidebar(), Props, SidebarBehindCover() (+15 more)

### Community 92 - "Core Concepts"
Cohesion: 0.18
Nodes (11): Container vs leaf (CRITICAL), Core Concepts, Culling, Destroy semantics, Lifecycle events, Masking, Render groups, Render order and explicit z-ordering (+3 more)

### Community 93 - "Member"
Cohesion: 0.11
Nodes (21): fetchFamilyTree(), Home(), loadTree(), Props, Props, isTreeReady(), MembersTree, MembersTreeDynamic() (+13 more)

### Community 94 - "pixijs/SKILL.md"
Cohesion: 0.25
Nodes (7): Advanced, Fallback: canonical PixiJS docs, Foundations, How to use this skill, Scene Objects, Skill router, Utilities

### Community 99 - "react"
Cohesion: 0.13
Nodes (27): gsap, NODE_HOVER_ANIMATION_DURATION, NODE_HOVER_SCALE, ZOOMED_OUT_HOVER_SCALE_MAP, NODE_HEIGHT, getFitViewTargetScale(), useFitViewAnimation(), useFocusFrameAnimation() (+19 more)

### Community 100 - "useT"
Cohesion: 0.13
Nodes (29): AccessGrant, ConfirmDeleteControl(), Props, InfoSection(), MemberActivityPill(), MemberFactTile(), Props, DateWithYears() (+21 more)

### Community 102 - "Render Loop"
Cohesion: 0.12
Nodes (15): API Reference, Common Mistakes, Core Patterns, [CRITICAL] Treating the ticker callback arg as a number, Frame lifecycle, Frame rate capping, [HIGH] Using `updateTransform` for per-frame logic, Manual rendering (+7 more)

### Community 103 - "pixijs-core-concepts/SKILL.md"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, Decision guide, Environments, [HIGH] Accessing app.renderer before init() resolves, [HIGH] Setting DOMAdapter after Application.init, [MEDIUM] Treating `preference` as a guarantee, Quick concepts (+4 more)

### Community 104 - "useTransientMessage"
Cohesion: 0.48
Nodes (4): Props, useTransientMessage(), useSidebar(), useTeamInfoSidebar()

### Community 107 - "MemberSuggestForm.tsx"
Cohesion: 0.07
Nodes (65): date-fns, react-dom, fetchMyMemberSuggestions(), fetchMyTeamSuggestions(), PendingSuggestion, photoBody(), postChanges(), send() (+57 more)

### Community 108 - "filtersStore.ts"
Cohesion: 0.13
Nodes (20): FilterCategoryRail(), FiltersFooter(), Props, FiltersHeader(), Props, FiltersPanel(), Props, FilterCategoryPane() (+12 more)

### Community 109 - "PhotoViewer.tsx"
Cohesion: 0.13
Nodes (29): thumbRadius(), Viewer(), viewportRect(), BUTTON, GLASS, HeaderProps, ToolbarProps, ViewerHeader() (+21 more)

### Community 110 - "migrateMembersFromMongodb.ts"
Cohesion: 0.07
Nodes (32): mongodb, ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember, STATUSES_MAP (+24 more)

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

### Community 113 - "searchShortcut.ts"
Cohesion: 0.19
Nodes (8): EDITABLE_TAGS, isEditableTarget(), isSearchShortcut(), ShortcutKeys, Keys, Options, Position, useSearchShortcut()

### Community 114 - "http"
Cohesion: 0.21
Nodes (10): addMember(), ApiError, errorMessage(), ErrorParams, toApiError(), deleteMember(), editMember(), fetchMentorsList() (+2 more)

### Community 115 - "AccountRoles.tsx"
Cohesion: 0.17
Nodes (16): put(), refreshProfile(), setFeaturedPosition(), setNameBadge(), AccountRoles(), byLatestYears(), lastYear(), Props (+8 more)

### Community 116 - "pixijs-scene-core-concepts/SKILL.md"
Cohesion: 0.14
Nodes (12): API Reference, Common Mistakes, [CRITICAL] Adding children to a leaf display object, [CRITICAL] Referencing DisplayObject, [HIGH] Forgetting isRenderGroup on large static subtrees, [HIGH] Treating child.x as world space, Leaf comparison: which skill covers which object, [MEDIUM] sortableChildren without zIndex (+4 more)

### Community 117 - "locale.ts"
Cohesion: 0.17
Nodes (17): SHORT_LABELS, writeLocaleCookie(), LOCALE_COOKIE, LOCALES, LocaleProvider(), DEFAULT_SETTINGS, LocaleState, readLegacyTheme() (+9 more)

### Community 118 - "uk/filters.ts"
Cohesion: 0.33
Nodes (5): familyForms, filters, memberForms, roleForms, teamForms

### Community 119 - "useSessionStore"
Cohesion: 0.29
Nodes (10): fetchSession(), SessionInfo, DatesPane(), SEASON_ICONS, PillGroupFilterSection(), getSeasonOptions(), isReducedView(), RANK (+2 more)

### Community 120 - "ref_vitest"
Cohesion: 0.50
Nodes (4): answerMatches(), CYRILLIC_TO_LATIN, normalizeAnswer(), DEMO_QUESTIONS

### Community 121 - "filterTeams.ts"
Cohesion: 0.32
Nodes (10): getTeamSpan(), hasRole(), hasTeamCriteria(), isTeamFilterActive(), matchesPeriod(), memberMatchesTeamFilters(), positionMatchesTeamFilters(), teamMatchesFilters() (+2 more)

### Community 123 - "Common Mistakes"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, [CRITICAL] App destroy without releaseGlobalResources, [HIGH] Destroying and recreating objects instead of recycling, [HIGH] Interleaving object types in scene graph, [HIGH] Loading many individual textures instead of spritesheets, [HIGH] Updating Text or HTMLText every frame, [HIGH] Using complex Graphics instead of textures (+4 more)

### Community 124 - "importAllowedEmails.ts"
Cohesion: 0.19
Nodes (12): AllowedRow, AllowlistDiff, diffAllowlist(), looksLikeEmail(), parseAllowlistCsv(), ParsedAllowlist, splitLine(), apply (+4 more)

### Community 125 - "api/index.ts"
Cohesion: 0.11
Nodes (29): Teams, createRole(), createTeamType(), deleteRole(), deleteTeamType(), fetchRoles(), fetchTeams(), fetchTeamTypes() (+21 more)

### Community 127 - "Member"
Cohesion: 0.12
Nodes (22): Props, Props, Props, membersActions, {
  setMembers,
  reloadMembers,
  addMember,
  updateMember,
  selectMember,
  getMentorsList,
}, useMembersMap(), useMentees(), useSelectedId() (+14 more)

### Community 128 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, concurrently, @faker-js/faker, nodemon, ts-node, tsx, @types/compression, @types/cors (+5 more)

### Community 129 - "GSAP with React"
Cohesion: 0.15
Nodes (12): Best practices, Context-Safe Callbacks, Dependency array, scope, and revertOnUpdate, Do Not, gsap.context() in useEffect (when useGSAP isn't used), GSAP with React, Installation, Learn More (+4 more)

### Community 130 - "backfillGender.ts"
Cohesion: 0.06
Nodes (35): CODE_TTL_MS, CodeOwner, CodeStore, generateCode(), hashCode(), issueCode(), MAX_CODE_ATTEMPTS, sameHash() (+27 more)

### Community 132 - "hitl-loop.template.sh"
Cohesion: 0.83
Nodes (3): capture(), hitl-loop.template.sh script, step()

### Community 133 - "fakeIdentity.ts"
Cohesion: 0.27
Nodes (7): @faker-js/faker, createIdentityFactory(), firstFree(), OPERATOR_CODES, none, MAP, translit()

### Community 134 - "eligibility.ts"
Cohesion: 0.20
Nodes (13): EligibilityMember, EmailIdentity, MemberMatch, normalizeEmail(), resolveEmailIdentity(), loadEmailIdentity(), prismaCodeStore, callbackErrorRedirect() (+5 more)

### Community 137 - "GSAP Performance"
Cohesion: 0.17
Nodes (11): Batch Reads and Writes, Best practices, Do Not, Frequently updated properties (e.g. mouse followers), GSAP Performance, Many Elements (Stagger, Lists), Prefer Transform and Opacity, Reduce Simultaneous Work (+3 more)

### Community 138 - "GSAP Timeline"
Cohesion: 0.17
Nodes (11): Controlling Playback, Creating a Timeline, Do Not, GSAP Timeline, Labels, Nesting Timelines, Official GSAP Best practices, Position Parameter (+3 more)

### Community 141 - "ref_vitest"
Cohesion: 0.20
Nodes (3): createFaceSource(), Options, source()

### Community 142 - "contactKeys.ts"
Cohesion: 0.20
Nodes (10): duplicates, fields, groups, ContactFields, contactKey(), ContactPlatform, FIELD_PLATFORMS, findContactCollision() (+2 more)

### Community 144 - "checkConfig.ts"
Cohesion: 0.19
Nodes (14): assertConfig(), configProblems(), databaseName(), demoProblems(), Env, googleProblems(), telegramProblems(), good (+6 more)

### Community 146 - "BEST Family Tree"
Cohesion: 0.29
Nodes (6): BEST Family Tree, Contributions, Language, People, Sign-in, Views

### Community 148 - "TeamFormContent.tsx"
Cohesion: 0.08
Nodes (46): Props, GLOW, Props, QuestionCard(), DropdownMenu(), Props, DropdownPortal(), Props (+38 more)

### Community 150 - "useFilterSearchParams.ts"
Cohesion: 0.36
Nodes (5): FamilyGroupOption, fetchFamilyGroups(), EMPTY, loadFamilyGroups(), useFamilyGroups()

## Knowledge Gaps
- **45 isolated node(s):** `@prisma/client`, `dotenv`, `lodash`, `pixi-filters`, `@tailwindcss/postcss` (+40 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1087 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `Sidebar.tsx` to `react`, `MemberPane.tsx`, `constants/canvas/index.ts`, `layout.tsx`, `Toolbar.tsx`, `hooks/index.ts`, `@heroicons/react`, `TeamFormContent.tsx`, `utils/membersTree/index.ts`, `AccentColor`, `useFilterSearchParams.ts`, `MemberSearch.tsx`, `TeamTypeFormContent.tsx`, `TeamLogo.tsx`, `package.json`, `MemberSuggestFields.tsx`, `TeamFormContent.tsx`, `Direction`, `TeamBadge.tsx`, `SettingsPanel.tsx`, `SuggestionsTab.tsx`, `pixi.js`, `NodesLayer.tsx`, `useTeamForm.ts`, `MembersTreeContent.tsx`, `useCardAnimation.ts`, `FitViewButton.tsx`, `MemberInfo.tsx`, `constants/filters.ts`, `BirthdayFilterSection.tsx`, `api/auth.ts`, `displayName.ts`, `MemberNodeCard.tsx`, `Member`, `react`, `useT`, `useTransientMessage`, `MemberSuggestForm.tsx`, `filtersStore.ts`, `PhotoViewer.tsx`, `searchShortcut.ts`, `AccountRoles.tsx`, `locale.ts`, `useSessionStore`, `api/index.ts`, `Member`?**
  _High betweenness centrality (0.108) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _45 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `uk/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.06376811594202898 - nodes in this community are weakly interconnected._
- **Why does `filters()` connect `Constructor options (Container-inherited)` to `constants/filters.ts`, `Common Mistakes`?**
  _High betweenness centrality (0.091) - this node is a cross-community bridge._
- **Should `react` be split into smaller, more focused modules?**
  _Cohesion score 0.08897959183673469 - nodes in this community are weakly interconnected._
- **Why does `Constructor options` connect `Common Mistakes` to `Constructor options (Container-inherited)`?**
  _High betweenness centrality (0.069) - this node is a cross-community bridge._
- **Should `server/package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.07407407407407407 - nodes in this community are weakly interconnected._