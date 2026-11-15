# Graph Report - best-family-tree  (2026-11-15)

## Corpus Check
- 537 files · ~175,264 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 29 file(s) not represented in the graph (top: .prisma 9, (none) 7, .css 6)

## Summary
- 2667 nodes · 6799 edges · 131 communities (122 shown, 9 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 69 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `a8f0148b`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- TeamSearch.tsx
- memberRoutes.ts
- oidc.ts
- FilterState
- membersStore.ts
- hooks/index.ts
- TeamFormContent.tsx
- src/utils/index.ts
- PositionFormFields.tsx
- ApplicationOptions reference
- ref_vitest
- sessions.ts
- anonymizeDemo.ts
- Point
- PhotoViewer.tsx
- useDashedPathAnimation.ts
- emailRoutes.ts
- teamFrame.ts
- MembersTreeScene.tsx
- catalogValidation.ts
- challenges.ts
- HTML Report Format
- src/types/index.ts
- SettingsPanel.tsx
- teamService.ts
- useCardAnimation.ts
- compilerOptions
- compilerOptions
- pixi.js
- Member
- dependencies
- server/package.json
- mime.ts
- seedQuestions.ts
- src/utils/index.ts
- scale.ts
- package.json
- filterSearchParams.ts
- constants/canvas/index.ts
- dashedBezier.ts
- Core Patterns
- devDependencies
- Common Mistakes
- memberService.ts
- CLAUDE.md
- Container Hierarchy
- importAllowedEmails.ts
- MemberNode.tsx
- During the session
- ManageForm.tsx
- http
- AGENTS.md
- scripts
- emailCodes.ts
- BEST Family Tree
- next.config.mjs
- postcss.config.mjs
- inputs/index.ts
- pixijs/SKILL.md
- Core Patterns
- importAllowedEmails.ts
- mailer/index.ts
- pixi.js
- @heroicons/react
- filterMembers.ts
- BEST Family Tree
- Diagnosing Bugs
- react
- ThemeContext.tsx
- src/index.ts
- teamLayout.ts
- Core Patterns
- Core Patterns
- dependencies
- useTreeLayout.ts
- MemberSidebar.tsx
- Common Mistakes
- emailRoutes.ts
- Core Patterns
- Core Patterns
- Core Patterns
- Core Patterns
- checkConfig.ts
- Core Patterns
- Constructor options (Container-inherited)
- Test-Driven Development
- GSAP Core
- Core Patterns
- telegramEligibility.ts
- Foundations
- teamPacking.ts
- contactKeys.ts
- Core Concepts
- Position
- auth/types.ts
- backup-prod.sh
- start-prod.sh
- restore-local.sh
- Common Mistakes
- Common Mistakes
- Core Patterns
- filtersStore.ts
- Render Loop
- pixijs-core-concepts/SKILL.md
- TeamFilterCategory.tsx
- fakeIdentity.ts
- useHoverNodeAnimation.ts
- FitViewButton.tsx
- Toolbar.tsx
- teamBadgeLayout.ts
- server/src/types/index.ts
- elkLayout.ts
- Renderers: WebGPU, WebGL, and Canvas
- MemberInfo.tsx
- useCanvasTheme.ts
- signInCodeEmail.ts
- pixijs-scene-core-concepts/SKILL.md
- constants/theme.ts
- Core Patterns
- ref_vitest
- aiFaces.ts
- devLogin.ts
- Common Mistakes
- useBakedAurora.ts
- GSAP with React
- hitl-loop.template.sh
- GSAP Performance
- GSAP Timeline

## God Nodes (most connected - your core abstractions)
1. `AccentColor` - 127 edges
2. `react` - 123 edges
3. `Member` - 66 edges
4. `tailwind-merge` - 64 edges
5. `COLOR_CLASSES` - 45 edges
6. `TeamFrame` - 40 edges
7. `pixi.js` - 33 edges
8. `FilterState` - 31 edges
9. `@heroicons/react` - 30 edges
10. `http()` - 29 edges

## Surprising Connections (you probably didn't know these)
- `pixijs-scene-container` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs/references/index.md → src/hooks/membersTree/animations/useFitViewAnimation.ts
- `[HIGH] Expecting getBounds() to return a Rectangle` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs-scene-container/SKILL.md → src/hooks/membersTree/animations/useFitViewAnimation.ts
- `Bounds and coordinate conversion` --references--> `getBounds()`  [INFERRED]
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

## Communities (131 total, 9 thin omitted)

### Community 0 - "TeamSearch.tsx"
Cohesion: 0.11
Nodes (27): FiltersHeader(), Props, compare(), getSearchable(), MemberSearch(), Props, SearchBar(), SearchPanel() (+19 more)

### Community 1 - "memberRoutes.ts"
Cohesion: 0.13
Nodes (20): toMemberResponse(), loadFamilyTree, loadReducedFamilyTree, router, MEMBER_INCLUDE, serializeMember(), assertCanEditMember(), uploadMemberPhoto (+12 more)

### Community 2 - "oidc.ts"
Cohesion: 0.14
Nodes (20): Container events, Transform, Lifecycle events, Origin (new in v8), openid-client, configs, cookieOptions(), finishLogin() (+12 more)

### Community 3 - "FilterState"
Cohesion: 0.09
Nodes (37): Props, FilterGroupProps, Props, Props, Props, Props, ACTIVITY_OPTIONS, ACTIVITY_STATES (+29 more)

### Community 4 - "membersStore.ts"
Cohesion: 0.13
Nodes (20): Cloning, clearing, and bounds, Props, Props, Props, Props, membersActions, {
  setMembers,
  reloadMembers,
  addMember,
  updateMember,
  selectMember,
  getMentorsList,
}, useMembersMap() (+12 more)

### Community 5 - "hooks/index.ts"
Cohesion: 0.21
Nodes (14): DropdownMenu(), Props, BadgeInput(), Props, BadgeInputField(), Props, useBadgeInputState(), ComboboxInput() (+6 more)

### Community 6 - "TeamFormContent.tsx"
Cohesion: 0.12
Nodes (23): FieldError(), Props, Props, PositionRowHeader(), SocialMediaFormFields(), FormMessages(), Props, TextInput() (+15 more)

### Community 7 - "src/utils/index.ts"
Cohesion: 0.14
Nodes (21): NodesLayer(), Props, Viewport(), EVENT_FEATURES, MembersTreeContent(), Props, TeamInfoSidebar(), ViewportCulling() (+13 more)

### Community 8 - "PositionFormFields.tsx"
Cohesion: 0.14
Nodes (28): PositionAssignmentFields(), Props, PositionFormFields(), Props, createEmptyPositionRow(), EMPTY_POSITION_ROW, findTeamByName(), getPositionRowSummary() (+20 more)

### Community 9 - "ApplicationOptions reference"
Cohesion: 0.06
Nodes (32): Accessibility, ApplicationOptions reference, Background, Culler (CullerPluginOptions), Deprecated (GC — prefer the unified options above), Events, Garbage collection, Graphics (+24 more)

### Community 10 - "ref_vitest"
Cohesion: 0.20
Nodes (9): answerMatches(), CYRILLIC_TO_LATIN, normalizeAnswer(), MIN_ACTIVE_QUESTIONS, deleteQuestionSessions(), DEMO_QUESTIONS, active, items (+1 more)

### Community 11 - "sessions.ts"
Cohesion: 0.14
Nodes (23): CHALLENGE_TTL_MS, isProduction(), QUESTIONS_SHOWN, SESSION_COOKIE, SESSION_TTL_MS, SIGN_IN_COOKIE, useSecureCookie(), clearSessionCookie() (+15 more)

### Community 12 - "anonymizeDemo.ts"
Cohesion: 0.14
Nodes (18): allowed, args, byId, factory, GROUP_NAMES, memberPhotos, nextFace, real (+10 more)

### Community 13 - "Point"
Cohesion: 0.19
Nodes (15): drawPolyline(), TeamEdgesLayer(), Point, TeamEdge, SegmentMorph, TeamBlock, circleHit(), teamEdgePath() (+7 more)

### Community 14 - "PhotoViewer.tsx"
Cohesion: 0.07
Nodes (45): isTreeReady(), MembersTree, MembersTreeDynamic(), TreeState, cache, loadImageAspect(), PhotoOpenButton(), Props (+37 more)

### Community 15 - "useDashedPathAnimation.ts"
Cohesion: 0.16
Nodes (20): LineageEdge(), DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN, MIN_ANIM_DURATION, PATTERN_LEN, RETRACT_BASE (+12 more)

### Community 16 - "emailRoutes.ts"
Cohesion: 0.26
Nodes (10): EmailIdentity, normalizeEmail(), resolveEmailIdentity(), loadEmailIdentity(), callbackErrorRedirect(), decideGoogleSignIn(), GoogleClaims, GoogleDecision (+2 more)

### Community 17 - "teamFrame.ts"
Cohesion: 0.12
Nodes (29): Paths and complex shapes, TEAM_COLUMN_GAP, TEAM_EDGE_DROP, TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_SPREAD_WIDTH, TEAM_EDGE_STUB, TEAM_FRAME_HEADER, TEAM_FRAME_MIN_WIDTH (+21 more)

### Community 18 - "MembersTreeScene.tsx"
Cohesion: 0.12
Nodes (22): Props, Props, Props, MembersTreeScene(), Props, FIXED_EDGE_WIDTH, TEAM_OVERVIEW_EDGE_ALPHA, TEAM_OVERVIEW_NODE_ALPHA (+14 more)

### Community 19 - "catalogValidation.ts"
Cohesion: 0.07
Nodes (34): Renderer selection at runtime, [MEDIUM] Using container.name instead of container.label, deleteCloudinaryImage(), extractCloudinaryPublicId(), parsePositionsPayload(), TEAM_INCLUDE, router, uploadTeamIcon (+26 more)

### Community 20 - "challenges.ts"
Cohesion: 0.12
Nodes (22): express-rate-limit, ChallengeState, isExpired(), isSolved(), pickRandom(), swapQuestion(), SwapResult, base (+14 more)

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "src/types/index.ts"
Cohesion: 0.10
Nodes (38): @heroicons/react, tailwind-merge, GLOW, Props, Props, Props, Props, Props (+30 more)

### Community 23 - "SettingsPanel.tsx"
Cohesion: 0.22
Nodes (8): EDGE_STYLE_OPTIONS, ORIENTATION_OPTIONS, Props, Section(), SectionProps, SettingsPanel(), THEME_OPTIONS, SegmentedSwitch()

### Community 24 - "teamService.ts"
Cohesion: 0.13
Nodes (27): ResolvedPosition, resolvePosition(), MemberTransaction, assertCanEditMembers(), deleteMember(), deriveTeamName(), resolveRole(), resolveTeam() (+19 more)

### Community 25 - "useCardAnimation.ts"
Cohesion: 0.20
Nodes (16): clamp01(), easeBackOut, easePower2In, easePower2Out, entries, Entry, finishCardReveal(), registerCardReveal() (+8 more)

### Community 26 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, esModuleInterop, forceConsistentCasingInFileNames, module, moduleResolution, noImplicitAny, outDir, paths (+12 more)

### Community 27 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+12 more)

### Community 28 - "pixi.js"
Cohesion: 0.08
Nodes (45): Props, TeamBadge(), FILL_ALPHA, lerp(), Props, STROKE_ALPHA, TeamFrame(), Props (+37 more)

### Community 29 - "Member"
Cohesion: 0.10
Nodes (28): Member, derive(), MembersState, ChildrenMap, MemberMetrics, MembersByMentorId, MembersMap, MentorsListItem (+20 more)

### Community 30 - "dependencies"
Cohesion: 0.11
Nodes (19): dependencies, date-fns, dotenv, elkjs, gsap, @gsap/react, @heroicons/react, lodash (+11 more)

### Community 31 - "server/package.json"
Cohesion: 0.07
Nodes (26): cloudinary, concurrently, multer, multer-storage-cloudinary, nodemon, ts-node, tsx, @types/compression (+18 more)

### Community 32 - "mime.ts"
Cohesion: 0.29
Nodes (11): RFC-2045, RFC-2047, createGmailMailer(), GmailConfig, base64Body(), buildMime(), encodeHeaderText(), formatAddress() (+3 more)

### Community 33 - "seedQuestions.ts"
Cohesion: 0.27
Nodes (9): DEFAULT_SETTINGS, readLegacyTheme(), SETTINGS_STORAGE_KEY, SettingsActions, SettingsState, initialState, { storageMock }, OrientationSetting (+1 more)

### Community 34 - "src/utils/index.ts"
Cohesion: 0.12
Nodes (25): MemberFilterCategory(), BirthdayFilterSection(), CheckboxGroupFilterSection(), Option, Props, ClearButton(), FilterCheckbox(), Props (+17 more)

### Community 35 - "scale.ts"
Cohesion: 0.11
Nodes (22): Props, EMPTY_IDS, SharpAvatarTracker(), View, Props, AVATAR_LOW_RES_SIZE, BIRTHDAY_ANIMATION_MIN_SCALE, GRID_GAP_X (+14 more)

### Community 36 - "package.json"
Cohesion: 0.11
Nodes (18): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+10 more)

### Community 37 - "filterSearchParams.ts"
Cohesion: 0.17
Nodes (6): react-datepicker, metadata, nunito, ENTER, SlideDirection, slideInScript

### Community 38 - "constants/canvas/index.ts"
Cohesion: 0.31
Nodes (8): lineageEdgePath, ACCIDENTAL_DRAG_MAX_DISTANCE, ACCIDENTAL_DRAG_MAX_MS, LONG_PRESS_MS, TAP_MOVE_TOLERANCE, PressStart, useTapWithoutDrag(), isTapGesture()

### Community 39 - "dashedBezier.ts"
Cohesion: 0.17
Nodes (22): EdgesLayer(), DEFAULT_NODE_HEIGHT, DEFAULT_NODE_WIDTH, DEFAULT_POSITION, FLOW_VIEWPORT_DIRECTION, FlowViewportDirection, DashStrokeOptions, lerpSegment() (+14 more)

### Community 40 - "Core Patterns"
Cohesion: 0.19
Nodes (13): Adding and removing children, Bounds and coordinate conversion, Constructor options, Core Patterns, Destroy, Finding and removing from parent, Leaves vs containers, Per-frame updates with onRender (+5 more)

### Community 41 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+5 more)

### Community 42 - "Common Mistakes"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, Constructor options, [CRITICAL] Using lineStyle instead of stroke, [CRITICAL] Using old shape method names, [CRITICAL] Using v7 beginFill/drawRect/endFill, [HIGH] Clearing and redrawing Graphics every frame, [HIGH] Destroying a shared GraphicsContext unexpectedly (+4 more)

### Community 43 - "memberService.ts"
Cohesion: 0.10
Nodes (30): zod, buildMemberFields(), buildMemberUpdateFields(), buildSharedFields(), buildSparseMemberFields(), parsePhoneNumbers(), getPositionKey(), syncPositions() (+22 more)

### Community 44 - "CLAUDE.md"
Cohesion: 0.25
Nodes (7): Commands, Conventions, Deployment & data, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout

### Community 45 - "Container Hierarchy"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, Container Hierarchy, [CRITICAL] Adding children to a leaf, [HIGH] Destroying the parent without `children: true`, [MEDIUM] Mutating `children` during iteration, Quick Start

### Community 46 - "importAllowedEmails.ts"
Cohesion: 0.27
Nodes (13): AuroraBakeInput, bakeAuroraLayers(), BAKE_SCALE, BLUR_SPREAD, CONIC_LAYERS, ConicLayerSpec, cssAngleToCanvasRadians(), getBakeFilter() (+5 more)

### Community 47 - "MemberNode.tsx"
Cohesion: 0.10
Nodes (23): BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props, acquireEmojiTextures(), createEmojiTexture(), generateRandomPosition(), releaseEmojiTextures() (+15 more)

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "ManageForm.tsx"
Cohesion: 0.11
Nodes (26): react-dom, DropdownPortal(), Props, LineageMemberSearch(), Props, DropdownSelectInput(), ManageForm(), MemberMode (+18 more)

### Community 50 - "http"
Cohesion: 0.05
Nodes (78): addMember(), ApiError, toApiError(), deleteMember(), editMember(), fetchFamilyTree(), fetchMemberById(), fetchMentorsList() (+70 more)

### Community 51 - "AGENTS.md"
Cohesion: 0.25
Nodes (7): Commands, Conventions, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout, This is NOT the Next.js you know

### Community 52 - "scripts"
Cohesion: 0.20
Nodes (10): scripts, build, db:backup-prod, db:restore-local, dev, dev:webpack, lint, start (+2 more)

### Community 53 - "emailCodes.ts"
Cohesion: 0.18
Nodes (13): CodeOwner, CodeStore, generateCode(), hashCode(), issueCode(), MAX_CODE_ATTEMPTS, sameHash(), StoredCode (+5 more)

### Community 54 - "BEST Family Tree"
Cohesion: 0.33
Nodes (5): BEST Family Tree, People, Sign-in, Teams, Views

### Community 57 - "inputs/index.ts"
Cohesion: 0.27
Nodes (10): DateInput(), Props, FormCheckbox(), InputLabel(), Props, Props, TextAreaInput(), Props (+2 more)

### Community 58 - "pixijs/SKILL.md"
Cohesion: 0.12
Nodes (14): API Reference, Common Mistakes, [HIGH] buttonMode removed; use cursor, [HIGH] Default eventMode is passive, [HIGH] Move events only fire over the object in v8, [MEDIUM] Cursor does not inherit from parent, Quick Start, Advanced (+6 more)

### Community 59 - "Core Patterns"
Cohesion: 0.12
Nodes (17): Application destroy/recreate cycle, Batching optimization, cacheAsTexture for performance, Core Patterns, Culling, Filters and masks cost, Graphics performance, Low-level rendering optimizations (+9 more)

### Community 60 - "importAllowedEmails.ts"
Cohesion: 0.19
Nodes (12): AllowedRow, AllowlistDiff, diffAllowlist(), looksLikeEmail(), parseAllowlistCsv(), ParsedAllowlist, splitLine(), apply (+4 more)

### Community 61 - "mailer/index.ts"
Cohesion: 0.18
Nodes (12): consoleMailer, getMailer(), createResendMailer(), ResendConfig, message, Env, isTransport(), MAIL_TRANSPORTS (+4 more)

### Community 62 - "pixi.js"
Cohesion: 0.08
Nodes (24): @pixi/react, PixiElements, pixi.js, @pixi/react, pixi-viewport, MemberNodeAvatar(), Props, Props (+16 more)

### Community 63 - "@heroicons/react"
Cohesion: 0.25
Nodes (9): LionIcon(), Props, AvatarFileInput(), Props, LogoFileInput(), Props, exceedsUploadLimit(), MAX_UPLOAD_BYTES (+1 more)

### Community 64 - "filterMembers.ts"
Cohesion: 0.22
Nodes (16): matchesAvatar(), matchesBirthday(), matchesJoinYear(), memberMatchesFilters(), parseDateStr(), toDateVal(), toMMDD(), getTeamSpan() (+8 more)

### Community 65 - "BEST Family Tree"
Cohesion: 0.11
Nodes (18): 1. Clone and configure environment, 2. Start the application, 3. Run database migrations, 4. Access the app, Architecture, Available Commands, Backend Commands (run inside container), Backups (+10 more)

### Community 66 - "Diagnosing Bugs"
Cohesion: 0.13
Nodes (14): Completion criterion: a tight loop that goes red, Diagnosing Bugs, Minimise, Non-deterministic bugs, Phase 1: Build a feedback loop, Phase 2: Reproduce + minimise, Phase 3: Hypothesise, Phase 4: Instrument (+6 more)

### Community 67 - "react"
Cohesion: 0.10
Nodes (17): react, Props, Props, Props, Props, Sidebar(), SidebarFooterContext, Props (+9 more)

### Community 68 - "ThemeContext.tsx"
Cohesion: 0.21
Nodes (11): RootLayout(), applyCssTokens(), ThemeContext, ThemeContextValue, ThemeProvider(), noopSubscribe(), useIsHydrated(), CssThemeTokens (+3 more)

### Community 69 - "src/index.ts"
Cohesion: 0.09
Nodes (23): compression, cors, express, helmet, @prisma/adapter-pg, @prisma/config, adapter, prisma (+15 more)

### Community 70 - "teamLayout.ts"
Cohesion: 0.19
Nodes (19): failOver(), getWorker(), Pending, requestLayout(), runInline(), computeTeamLayout(), groupIntoLanes(), moveEdgesToWorld() (+11 more)

### Community 71 - "Core Patterns"
Cohesion: 0.13
Nodes (14): API Reference, boundsArea optimization, Common Mistakes, Core Patterns, Culling, HIGH: Expecting automatic culling, HIGH: Using addChild on RenderLayer, MEDIUM: Expecting filters on ancestors to apply to layer children (+6 more)

### Community 72 - "Core Patterns"
Cohesion: 0.14
Nodes (13): Advanced shape primitives, Core Patterns, Default styles via setFillStyle / setStrokeStyle, Draw-time transforms, Drawing a texture directly, Gradients and patterns, GraphicsContext sharing, GraphicsContext utilities (+5 more)

### Community 73 - "dependencies"
Cohesion: 0.04
Nodes (46): dependencies, cloudinary, compression, cors, dotenv, express, express-rate-limit, helmet (+38 more)

### Community 74 - "useTreeLayout.ts"
Cohesion: 0.14
Nodes (23): gsap, NODE_HEIGHT, NODE_WIDTH, getFitViewTargetScale(), useFitViewAnimation(), useFocusFrameAnimation(), useFocusNodeAnimation(), useViewportAnimation() (+15 more)

### Community 75 - "MemberSidebar.tsx"
Cohesion: 0.14
Nodes (19): FlowerIcon(), Props, MapleLeafIcon(), Props, Placement, PLACEMENTS, SeasonMotif(), MemberNodeCard() (+11 more)

### Community 76 - "Common Mistakes"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [CRITICAL] Adding children to leaf scene objects, [HIGH] Expecting getBounds() to return a Rectangle, [HIGH] Using cacheAsBitmap instead of cacheAsTexture, [MEDIUM] Setting both pivot and origin on the same container, Quick Start

### Community 77 - "emailRoutes.ts"
Cohesion: 0.18
Nodes (13): authSecret(), isDemoMode(), prismaCodeStore, buildSessionInfo(), bodyEmail(), emailKey(), ipKey(), requestLimits (+5 more)

### Community 78 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, attach / detach, Common Mistakes, Core Patterns, [CRITICAL] Using `addChild` on a RenderLayer, [HIGH] Layer and attached children in different render groups, Layer + logical parent, Manual sort (+5 more)

### Community 79 - "Core Patterns"
Cohesion: 0.14
Nodes (13): Alpha mask (Sprite-based), API Reference, Common Mistakes, Core Patterns, [HIGH] Using cacheAsTexture with masks, Inverse masking, Mask channel selection, Mask type selection (+5 more)

### Community 80 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, Common Mistakes, Construction options, Core Patterns, [HIGH] Nesting many render groups, [MEDIUM] Constantly adding/removing from a render group, [MEDIUM] Overusing render groups, Profile before adding (+5 more)

### Community 81 - "Core Patterns"
Cohesion: 0.29
Nodes (7): Core Patterns, Frame rate capping, Manual rendering, Per-object update via `onRender`, Priority order, Stop and start, Time units

### Community 82 - "checkConfig.ts"
Cohesion: 0.29
Nodes (9): assertConfig(), configProblems(), databaseName(), demoProblems(), Env, googleProblems(), telegramProblems(), good (+1 more)

### Community 83 - "Core Patterns"
Cohesion: 0.15
Nodes (13): Context and device loss, Core Patterns, Destroying a renderer, Direct renderer construction, Lazy-loading backend-specific systems and pipes, Manual rendering, Per-renderer options, Preference forms (+5 more)

### Community 84 - "Constructor options (Container-inherited)"
Cohesion: 0.17
Nodes (12): Advanced options and aliases, Before / after, Callbacks, Constructor options (Container-inherited), Display, Effects, Exceptions (line-by-line is fine here), Hierarchy (+4 more)

### Community 85 - "Test-Driven Development"
Cohesion: 0.15
Nodes (10): Designing for Mockability, When to Mock, Anti-patterns, Rules of the loop, Seams: where tests go, Test-Driven Development, What a good test is, Bad Tests (+2 more)

### Community 86 - "GSAP Core"
Cohesion: 0.10
Nodes (20): Accessibility and responsive (gsap.matchMedia()), Common vars, Core Tween Methods, Custom: use CustomEase (plugin), Defaults, Do Not, Easing, Function-based values (+12 more)

### Community 87 - "Core Patterns"
Cohesion: 0.17
Nodes (12): Capture phase events, Core Patterns, Cursor styles, Event features, Event properties, Event types, eventMode values, Global move events and drag (+4 more)

### Community 88 - "telegramEligibility.ts"
Cohesion: 0.32
Nodes (8): EligibilityMember, MemberMatch, resolveMemberMatch(), phoneKey(), resolveTelegramIdentity(), TelegramIdentity, loadTelegramIdentity(), TelegramClaims

### Community 89 - "Foundations"
Cohesion: 0.15
Nodes (12): Advanced, Foundations, pixijs-application, pixijs-core-concepts, pixijs-events, pixijs-performance, pixijs-scene-container, pixijs-scene-core-concepts (+4 more)

### Community 90 - "teamPacking.ts"
Cohesion: 0.26
Nodes (9): TEAM_FRAME_GAP, TEAM_PACK_ASPECT, computeDirectedPacking(), computePacking(), packLanes(), Placement, scorePacking(), shelfPack() (+1 more)

### Community 91 - "contactKeys.ts"
Cohesion: 0.20
Nodes (10): duplicates, fields, groups, ContactFields, contactKey(), ContactPlatform, FIELD_PLATFORMS, findContactCollision() (+2 more)

### Community 92 - "Core Concepts"
Cohesion: 0.18
Nodes (11): Container vs leaf (CRITICAL), Core Concepts, Culling, Destroy semantics, Lifecycle events, Masking, Render groups, Render order and explicit z-ordering (+3 more)

### Community 93 - "Position"
Cohesion: 0.40
Nodes (5): Position, Bottom, Left, Right, Top

### Community 94 - "auth/types.ts"
Cohesion: 0.22
Nodes (11): canEditMember(), hasAccess(), RANK, CONTACT_FIELDS, AccessRank, Express, Request, Session (+3 more)

### Community 98 - "Common Mistakes"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, [CRITICAL] App destroy without releaseGlobalResources, [HIGH] Destroying and recreating objects instead of recycling, [HIGH] Interleaving object types in scene graph, [HIGH] Loading many individual textures instead of spritesheets, [HIGH] Updating Text or HTMLText every frame, [HIGH] Using complex Graphics instead of textures (+4 more)

### Community 99 - "Common Mistakes"
Cohesion: 0.50
Nodes (4): Common Mistakes, [HIGH] Accessing app.renderer before init() resolves, [HIGH] Setting DOMAdapter after Application.init, [MEDIUM] Treating `preference` as a guarantee

### Community 100 - "Core Patterns"
Cohesion: 0.12
Nodes (16): API Reference, Common Mistakes, Coordinate conversion, Core Patterns, Cumulative alpha (getGlobalAlpha), Global, local, and screen coordinates, [HIGH] Setting scale to 0, [MEDIUM] Confusing anchor and pivot (+8 more)

### Community 101 - "filtersStore.ts"
Cohesion: 0.11
Nodes (13): date-fns, EMPTY_FILTER_STATE, FOUNDER_JOIN_YEAR, MEMBER_STATUSES, MENTOR_STATUSES, initialFiltersState, MemberStatus, Alumni (+5 more)

### Community 102 - "Render Loop"
Cohesion: 0.22
Nodes (8): API Reference, Common Mistakes, [CRITICAL] Treating the ticker callback arg as a number, Frame lifecycle, [HIGH] Using `updateTransform` for per-frame logic, [MEDIUM] Assuming ticker callbacks run after render, Quick Start, Render Loop

### Community 103 - "pixijs-core-concepts/SKILL.md"
Cohesion: 0.22
Nodes (8): API Reference, Decision guide, Environments, Quick concepts, Quick Start, Renderer = systems + pipes, The render loop, Topics

### Community 104 - "TeamFilterCategory.tsx"
Cohesion: 0.14
Nodes (17): FilterCategory(), LION_GROUP_ICON, LION_ICON, Props, ALL_SECTIONS_CLOSED, FiltersPanel(), Props, RoleFilterSection() (+9 more)

### Community 105 - "fakeIdentity.ts"
Cohesion: 0.27
Nodes (7): @faker-js/faker, createIdentityFactory(), firstFree(), OPERATOR_CODES, none, MAP, translit()

### Community 106 - "useHoverNodeAnimation.ts"
Cohesion: 0.25
Nodes (9): @gsap/react, pixi-filters, NODE_HOVER_ANIMATION_DURATION, NODE_HOVER_SCALE, ZOOMED_OUT_HOVER_SCALE_MAP, calculateTargetScale(), createShadowFilter(), Props (+1 more)

### Community 107 - "FitViewButton.tsx"
Cohesion: 0.35
Nodes (7): FitViewButton(), Props, Props, ToolbarIconButton(), Props, ToolbarTooltip(), useHoverTooltip()

### Community 108 - "Toolbar.tsx"
Cohesion: 0.06
Nodes (63): zustand, AccessLevel, AuthMethod, Challenge, ChallengeQuestion, fetchSession(), logout(), post() (+55 more)

### Community 109 - "teamBadgeLayout.ts"
Cohesion: 0.25
Nodes (9): TEAM_FRAME_RADIUS, TEAM_TITLE_ICON_PADDING, TEAM_TITLE_ICON_SIZE, TEAM_TITLE_PADDING_X, TEAM_TITLE_PADDING_Y, getTeamBadgeLayout(), textWidth(), truncateText() (+1 more)

### Community 110 - "server/src/types/index.ts"
Cohesion: 0.07
Nodes (28): mongodb, ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember, STATUSES_MAP (+20 more)

### Community 111 - "elkLayout.ts"
Cohesion: 0.20
Nodes (11): elkjs, NODE_CARD_TOP, elkNodeSize(), LAYER_SPACE_LR, layoutOptions(), layoutWithElk(), loadElk(), stackIsolatedNodes() (+3 more)

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

### Community 113 - "MemberInfo.tsx"
Cohesion: 0.06
Nodes (49): next, FacebookIcon(), FacebookGlyph(), InstagramGlyph(), LinkedinGlyph(), svgProps, TelegramGlyph(), InstagramIcon() (+41 more)

### Community 114 - "useCanvasTheme.ts"
Cohesion: 0.24
Nodes (9): FONT_FAMILY, NODE_SUBTITLE_STYLE, NODE_TITLE_STYLE, NODE_TOOLTIP_TEXT_STYLE, TEXT_RESOLUTION, buildCanvasColors(), CanvasColors, CanvasTextStyles (+1 more)

### Community 115 - "signInCodeEmail.ts"
Cohesion: 0.29
Nodes (5): CODE_TTL_MS, escapeHtml(), pairs(), renderSignInCodeEmail(), { html }

### Community 116 - "pixijs-scene-core-concepts/SKILL.md"
Cohesion: 0.25
Nodes (6): API Reference, Leaf comparison: which skill covers which object, Quick Start, References, Tooling, When to use what (quick decisions)

### Community 117 - "constants/theme.ts"
Cohesion: 0.25
Nodes (6): darkTheme, DEFAULT_THEME, lightTheme, THEMES, themeCssMap, themeInitScript

### Community 118 - "Core Patterns"
Cohesion: 0.25
Nodes (8): Add, remove, swap, Child queries, Core Patterns, Destroying sub-trees, Iterating children, Label-based tree navigation, Reparenting with transform preservation, Replacing a child

### Community 120 - "aiFaces.ts"
Cohesion: 0.38
Nodes (3): createFaceSource(), Options, source()

### Community 121 - "devLogin.ts"
Cohesion: 0.48
Nodes (5): databaseHost(), devLoginProblems(), Env, isDevLoginEnabled(), LOCAL_HOSTS

### Community 122 - "Common Mistakes"
Cohesion: 0.33
Nodes (6): Common Mistakes, [CRITICAL] Adding children to a leaf display object, [CRITICAL] Referencing DisplayObject, [HIGH] Forgetting isRenderGroup on large static subtrees, [HIGH] Treating child.x as world space, [MEDIUM] sortableChildren without zIndex

### Community 123 - "useBakedAurora.ts"
Cohesion: 0.60
Nodes (4): AuroraBackground(), readNumber(), useBakedAurora(), canBakeAurora()

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
- **42 isolated node(s):** `@prisma/client`, `dotenv`, `lodash`, `@tailwindcss/postcss`, `@types/lodash` (+37 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 940 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `TeamSearch.tsx`, `FilterState`, `membersStore.ts`, `hooks/index.ts`, `TeamFormContent.tsx`, `src/utils/index.ts`, `PositionFormFields.tsx`, `Point`, `PhotoViewer.tsx`, `useDashedPathAnimation.ts`, `MembersTreeScene.tsx`, `src/types/index.ts`, `useCardAnimation.ts`, `pixi.js`, `src/utils/index.ts`, `scale.ts`, `package.json`, `constants/canvas/index.ts`, `dashedBezier.ts`, `MemberNode.tsx`, `ManageForm.tsx`, `http`, `pixi.js`, `@heroicons/react`, `ThemeContext.tsx`, `useTreeLayout.ts`, `TeamFilterCategory.tsx`, `useHoverNodeAnimation.ts`, `FitViewButton.tsx`, `Toolbar.tsx`, `MemberInfo.tsx`, `useCanvasTheme.ts`, `useBakedAurora.ts`?**
  _High betweenness centrality (0.109) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _42 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `TeamSearch.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Why does `getBounds()` connect `Core Patterns` to `Foundations`, `useTreeLayout.ts`, `Common Mistakes`?**
  _High betweenness centrality (0.081) - this node is a cross-community bridge._
- **Should `memberRoutes.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.12698412698412698 - nodes in this community are weakly interconnected._
- **Why does `Core Patterns` connect `Core Patterns` to `oidc.ts`, `Common Mistakes`?**
  _High betweenness centrality (0.055) - this node is a cross-community bridge._
- **Should `oidc.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.14130434782608695 - nodes in this community are weakly interconnected._