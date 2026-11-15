# Graph Report - best-family-tree  (2026-11-15)

## Corpus Check
- 540 files · ~176,375 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 29 file(s) not represented in the graph (top: .prisma 9, (none) 7, .css 6)

## Summary
- 2680 nodes · 6853 edges · 132 communities (125 shown, 7 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 67 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `4dc1bed7`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- TeamInfoSidebar.tsx
- familyTreeRoutes.ts
- oidc.ts
- MemberFilterCategory.tsx
- useMembersStore
- hooks/index.ts
- MemberFormFields.tsx
- MembersTreeContent.tsx
- TeamFormContent.tsx
- ApplicationOptions reference
- teamFrame.ts
- sessions.ts
- anonymizeDemo.ts
- MemberNode.tsx
- PhotoViewer.tsx
- useDashedPathAnimation.ts
- src/utils/index.ts
- FilterState
- hooks/index.ts
- catalogValidation.ts
- challenges.ts
- HTML Report Format
- MemberInfo.tsx
- SettingsPanel.tsx
- teamService.ts
- useCardAnimation.ts
- compilerOptions
- compilerOptions
- pixi.js
- Member
- dependencies
- server/package.json
- EditMemberForm.tsx
- seedQuestions.ts
- src/utils/index.ts
- dimensions.ts
- package.json
- filterSearchParams.ts
- ref_vitest
- dashedBezier.ts
- Core Patterns
- devDependencies
- Common Mistakes
- memberService.ts
- CLAUDE.md
- Container Hierarchy
- importAllowedEmails.ts
- useTreeDirection.ts
- During the session
- TeamFormContent.tsx
- http
- AGENTS.md
- scripts
- emailCodes.ts
- BEST Family Tree
- next.config.mjs
- postcss.config.mjs
- clientInstance.ts
- pixijs/SKILL.md
- Core Patterns
- importAllowedEmails.ts
- checkConfig.ts
- pixi.js
- AvatarFileInput.tsx
- filterMembers.ts
- BEST Family Tree
- Diagnosing Bugs
- react
- src/index.ts
- familyTreeRoutes.ts
- teamLayout.ts
- Core Patterns
- Core Patterns
- dependencies
- useTreeLayout.ts
- MemberInfoActions.tsx
- Common Mistakes
- MemberFormFields.tsx
- Core Patterns
- Core Patterns
- Core Patterns
- useTeamForm.ts
- useMeta.ts
- Core Patterns
- Constructor options (Container-inherited)
- Test-Driven Development
- GSAP Core
- Core Patterns
- eligibility.ts
- Foundations
- teamPacking.ts
- emailRoutes.ts
- Core Concepts
- seedQuestions.ts
- SeasonMotif.tsx
- backup-prod.sh
- start-prod.sh
- restore-local.sh
- Common Mistakes
- useCanvasTheme.ts
- Core Patterns
- filtersStore.ts
- Render Loop
- pixijs-core-concepts/SKILL.md
- MemberFilterCategory.tsx
- SearchSuggestionItem.tsx
- Toolbar.tsx
- src/types/index.ts
- Toolbar.tsx
- Core Patterns
- server/src/types/index.ts
- MemberBirthdayAnimation.tsx
- Renderers: WebGPU, WebGL, and Canvas
- @heroicons/react
- Core Patterns
- Common Mistakes
- pixijs-scene-core-concepts/SKILL.md
- ThemeContext.tsx
- elkLayout.ts
- Common Mistakes
- aiFaces.ts
- constants/canvas/index.ts
- FitViewButton.tsx
- useHoverNodeAnimation.ts
- NodesLayer.tsx
- Position
- GSAP with React
- hitl-loop.template.sh
- GSAP Performance
- GSAP Timeline

## God Nodes (most connected - your core abstractions)
1. `AccentColor` - 131 edges
2. `react` - 123 edges
3. `tailwind-merge` - 67 edges
4. `Member` - 66 edges
5. `COLOR_CLASSES` - 47 edges
6. `TeamFrame` - 40 edges
7. `@heroicons/react` - 33 edges
8. `pixi.js` - 33 edges
9. `FilterState` - 31 edges
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

## Communities (132 total, 7 thin omitted)

### Community 0 - "TeamInfoSidebar.tsx"
Cohesion: 0.16
Nodes (20): fetchSession(), SessionInfo, MemberSidebar(), TeamInfoSidebar(), HeaderChip(), Props, SeasonChip(), Props (+12 more)

### Community 1 - "familyTreeRoutes.ts"
Cohesion: 0.18
Nodes (12): canEditMember(), hasAccess(), RANK, CONTACT_FIELDS, toMemberResponse(), AccessRank, Express, Request (+4 more)

### Community 2 - "oidc.ts"
Cohesion: 0.14
Nodes (21): Container events, Transform, Lifecycle events, Origin (new in v8), openid-client, callbackErrorRedirect(), configs, cookieOptions() (+13 more)

### Community 3 - "MemberFilterCategory.tsx"
Cohesion: 0.18
Nodes (19): ACTIVITY_OPTIONS, ACTIVITY_STATES, AVATAR_OPTIONS, AVATAR_VALUES, JOIN_SEASONS, MEMBER_STATUSES, SEASON_OPTIONS, STATUS_OPTIONS (+11 more)

### Community 4 - "useMembersStore"
Cohesion: 0.27
Nodes (9): fetchMentorsList(), membersActions, {
  setMembers,
  reloadMembers,
  addMember,
  updateMember,
  selectMember,
  getMentorsList,
}, useMembersMap(), useMentees(), useSelectedId(), useSelectedMember(), useMembersStore (+1 more)

### Community 5 - "hooks/index.ts"
Cohesion: 0.14
Nodes (21): react-dom, DropdownMenu(), Props, DropdownPortal(), Props, BadgeInput(), Props, BadgeInputField() (+13 more)

### Community 6 - "MemberFormFields.tsx"
Cohesion: 0.38
Nodes (7): FieldError(), Props, Props, Props, SocialMediaFormFields(), TextInput(), MemberFormMode

### Community 7 - "MembersTreeContent.tsx"
Cohesion: 0.17
Nodes (18): SharpAvatarTracker(), Viewport(), Props, MembersTree(), Props, EVENT_FEATURES, MembersTreeContent(), Props (+10 more)

### Community 8 - "TeamFormContent.tsx"
Cohesion: 0.12
Nodes (31): PositionAssignmentFields(), Props, PositionFormFields(), Props, createEmptyPositionRow(), EMPTY_POSITION_ROW, findTeamByName(), getPositionRowSummary() (+23 more)

### Community 9 - "ApplicationOptions reference"
Cohesion: 0.06
Nodes (32): Accessibility, ApplicationOptions reference, Background, Culler (CullerPluginOptions), Deprecated (GC — prefer the unified options above), Events, Garbage collection, Graphics (+24 more)

### Community 10 - "teamFrame.ts"
Cohesion: 0.07
Nodes (45): Paths and complex shapes, Props, Props, TeamOverviewLayer(), TEAM_COLUMN_GAP, TEAM_EDGE_DROP, TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_SPREAD_WIDTH (+37 more)

### Community 11 - "sessions.ts"
Cohesion: 0.18
Nodes (19): SESSION_COOKIE, SIGN_IN_COOKIE, useSecureCookie(), clearSessionCookie(), createSession(), deleteSession(), findSession(), hashToken() (+11 more)

### Community 12 - "anonymizeDemo.ts"
Cohesion: 0.06
Nodes (36): @faker-js/faker, allowed, args, byId, factory, GROUP_NAMES, memberPhotos, nextFace (+28 more)

### Community 13 - "MemberNode.tsx"
Cohesion: 0.10
Nodes (22): AVATAR_HIT_AREA, CARD_PIVOT, EMPTY_FILTERS, getCullArea(), MemberNode(), NODE_HIT_AREA, NODE_PIVOT, MemberNodeCard() (+14 more)

### Community 14 - "PhotoViewer.tsx"
Cohesion: 0.07
Nodes (49): zustand, isTreeReady(), MembersTree, MembersTreeDynamic(), TreeState, cache, loadImageAspect(), PhotoOpenButton() (+41 more)

### Community 15 - "useDashedPathAnimation.ts"
Cohesion: 0.11
Nodes (31): LineageEdge(), DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN, MIN_ANIM_DURATION, PATTERN_LEN, RETRACT_BASE (+23 more)

### Community 16 - "src/utils/index.ts"
Cohesion: 0.14
Nodes (16): Props, compare(), getSearchable(), getSubtitle(), Props, TeamSearch(), matchesQuery(), Options (+8 more)

### Community 17 - "FilterState"
Cohesion: 0.17
Nodes (13): FilterGroupProps, Props, Props, FilterSectionKey, FilterState, ActivityState, Active, Excluded (+5 more)

### Community 18 - "hooks/index.ts"
Cohesion: 0.11
Nodes (26): Props, Props, View, Props, Props, TeamFramesLayer(), MembersTreeScene(), Props (+18 more)

### Community 19 - "catalogValidation.ts"
Cohesion: 0.10
Nodes (23): Renderer selection at runtime, [MEDIUM] Using container.name instead of container.label, router, uploadTeamIcon, booleanLike, formatZodErrors(), isValidPeriod(), name() (+15 more)

### Community 20 - "challenges.ts"
Cohesion: 0.12
Nodes (22): express-rate-limit, ChallengeState, isExpired(), isSolved(), pickRandom(), swapQuestion(), SwapResult, base (+14 more)

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "MemberInfo.tsx"
Cohesion: 0.11
Nodes (25): AvatarSkeleton(), MemberAvatarImage(), MemberAvatarImageInner(), Props, SkeletonProps, MemberInfo(), Props, MemberInfoCover() (+17 more)

### Community 23 - "SettingsPanel.tsx"
Cohesion: 0.16
Nodes (11): OPTIONS, Props, ViewModeSwitch(), EDGE_STYLE_OPTIONS, ORIENTATION_OPTIONS, Props, Section(), SectionProps (+3 more)

### Community 24 - "teamService.ts"
Cohesion: 0.14
Nodes (28): getPositionKey(), ResolvedPosition, resolvePosition(), syncPositions(), MemberTransaction, assertCanEditMembers(), deriveTeamName(), resolveRole() (+20 more)

### Community 25 - "useCardAnimation.ts"
Cohesion: 0.21
Nodes (15): clamp01(), easeBackOut, easePower2In, easePower2Out, entries, Entry, finishCardReveal(), registerCardReveal() (+7 more)

### Community 26 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, esModuleInterop, forceConsistentCasingInFileNames, module, moduleResolution, noImplicitAny, outDir, paths (+12 more)

### Community 27 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+12 more)

### Community 28 - "pixi.js"
Cohesion: 0.14
Nodes (27): Props, TeamBadge(), FILL_ALPHA, lerp(), Props, STROKE_ALPHA, TeamFrame(), TeamOverviewLabel() (+19 more)

### Community 29 - "Member"
Cohesion: 0.10
Nodes (32): Props, Props, Member, derive(), changesStructure(), EMPTY_INDEX, isSamePosition(), MembersState (+24 more)

### Community 30 - "dependencies"
Cohesion: 0.11
Nodes (19): dependencies, date-fns, dotenv, elkjs, gsap, @gsap/react, @heroicons/react, lodash (+11 more)

### Community 31 - "server/package.json"
Cohesion: 0.08
Nodes (24): compression, concurrently, cors, helmet, nodemon, ts-node, tsx, @types/compression (+16 more)

### Community 32 - "EditMemberForm.tsx"
Cohesion: 0.20
Nodes (22): AddMemberForm(), buildMemberFormData(), ClearButton(), SubmitButton(), describeSubmitError(), EditMemberForm(), getInitialFormData(), Props (+14 more)

### Community 33 - "seedQuestions.ts"
Cohesion: 0.27
Nodes (10): DEFAULT_SETTINGS, readLegacyTheme(), SETTINGS_STORAGE_KEY, SettingsActions, SettingsState, initialState, { storageMock }, useSettingsStore (+2 more)

### Community 34 - "src/utils/index.ts"
Cohesion: 0.11
Nodes (27): BirthdayFilterSection(), Props, CheckboxGroupFilterSection(), Option, Props, ClearButton(), FilterCheckbox(), Props (+19 more)

### Community 35 - "dimensions.ts"
Cohesion: 0.08
Nodes (28): @pixi/react, PixiElements, @pixi/react, pixi-viewport, Props, EMPTY_IDS, Props, AVATAR_HIGH_RES_SIZE (+20 more)

### Community 36 - "package.json"
Cohesion: 0.11
Nodes (18): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+10 more)

### Community 37 - "filterSearchParams.ts"
Cohesion: 0.17
Nodes (8): react-datepicker, metadata, nunito, RootLayout(), AuroraBackground(), readNumber(), useBakedAurora(), canBakeAurora()

### Community 38 - "ref_vitest"
Cohesion: 0.17
Nodes (5): answerMatches(), CYRILLIC_TO_LATIN, normalizeAnswer(), db, DEMO_QUESTIONS

### Community 39 - "dashedBezier.ts"
Cohesion: 0.14
Nodes (27): EdgesLayer(), drawPolyline(), TeamEdgesLayer(), FIXED_EDGE_WIDTH, useCanvasTheme(), Point, bezierEval(), edgeGeometry (+19 more)

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
Cohesion: 0.08
Nodes (38): zod, buildMemberFields(), buildMemberUpdateFields(), buildSharedFields(), buildSparseMemberFields(), parsePhoneNumbers(), parsePositionsPayload(), MEMBER_INCLUDE (+30 more)

### Community 44 - "CLAUDE.md"
Cohesion: 0.25
Nodes (7): Commands, Conventions, Deployment & data, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout

### Community 45 - "Container Hierarchy"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, Container Hierarchy, [CRITICAL] Adding children to a leaf, [HIGH] Destroying the parent without `children: true`, [MEDIUM] Mutating `children` during iteration, Quick Start

### Community 46 - "importAllowedEmails.ts"
Cohesion: 0.27
Nodes (13): AuroraBakeInput, bakeAuroraLayers(), BAKE_SCALE, BLUR_SPREAD, CONIC_LAYERS, ConicLayerSpec, cssAngleToCanvasRadians(), getBakeFilter() (+5 more)

### Community 47 - "useTreeDirection.ts"
Cohesion: 0.70
Nodes (3): useIsMobileScreen(), useResolvedDirection(), useMediaQuery()

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "TeamFormContent.tsx"
Cohesion: 0.09
Nodes (37): ConfirmDeleteControl(), Props, FormMessages(), DropdownSelectInput(), FormCheckbox(), Props, LogoFileInput(), TextAreaInput() (+29 more)

### Community 50 - "http"
Cohesion: 0.15
Nodes (16): addMember(), ApiError, toApiError(), deleteMember(), editMember(), fetchFamilyTree(), Home(), loadTree() (+8 more)

### Community 51 - "AGENTS.md"
Cohesion: 0.25
Nodes (7): Commands, Conventions, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout, This is NOT the Next.js you know

### Community 52 - "scripts"
Cohesion: 0.20
Nodes (10): scripts, build, db:backup-prod, db:restore-local, dev, dev:webpack, lint, start (+2 more)

### Community 53 - "emailCodes.ts"
Cohesion: 0.18
Nodes (13): CODE_TTL_MS, CodeStore, generateCode(), hashCode(), issueCode(), MAX_CODE_ATTEMPTS, sameHash(), StoredCode (+5 more)

### Community 54 - "BEST Family Tree"
Cohesion: 0.33
Nodes (5): BEST Family Tree, People, Sign-in, Teams, Views

### Community 57 - "clientInstance.ts"
Cohesion: 0.15
Nodes (10): @prisma/adapter-pg, @prisma/config, adapter, prisma, level, [ref, levelArg], ADMINS_BY_EMAIL, EDITORS_BY_NAME (+2 more)

### Community 58 - "pixijs/SKILL.md"
Cohesion: 0.12
Nodes (14): API Reference, Common Mistakes, [HIGH] buttonMode removed; use cursor, [HIGH] Default eventMode is passive, [HIGH] Move events only fire over the object in v8, [MEDIUM] Cursor does not inherit from parent, Quick Start, Advanced (+6 more)

### Community 59 - "Core Patterns"
Cohesion: 0.12
Nodes (17): Application destroy/recreate cycle, Batching optimization, cacheAsTexture for performance, Core Patterns, Culling, Filters and masks cost, Graphics performance, Low-level rendering optimizations (+9 more)

### Community 60 - "importAllowedEmails.ts"
Cohesion: 0.19
Nodes (12): AllowedRow, AllowlistDiff, diffAllowlist(), looksLikeEmail(), parseAllowlistCsv(), ParsedAllowlist, splitLine(), apply (+4 more)

### Community 61 - "checkConfig.ts"
Cohesion: 0.07
Nodes (37): RFC-2045, RFC-2047, assertConfig(), configProblems(), databaseName(), demoProblems(), Env, googleProblems() (+29 more)

### Community 62 - "pixi.js"
Cohesion: 0.12
Nodes (15): @gsap/react, MemberNodeAvatar(), Props, CIRCLE_TEXTURE_SRC, PATTERN_TEXTURE_SRC, failedSources, Options, useTexture() (+7 more)

### Community 63 - "AvatarFileInput.tsx"
Cohesion: 0.23
Nodes (8): next, AvatarFileInput(), Props, Props, config, exceedsUploadLimit(), MAX_UPLOAD_BYTES, UPLOAD_TOO_LARGE_MESSAGE

### Community 64 - "filterMembers.ts"
Cohesion: 0.19
Nodes (18): countActiveMemberFilters(), matchesAvatar(), matchesBirthday(), matchesJoinSeason(), matchesJoinYear(), memberMatchesFilters(), parseDateStr(), toDateVal() (+10 more)

### Community 65 - "BEST Family Tree"
Cohesion: 0.11
Nodes (18): 1. Clone and configure environment, 2. Start the application, 3. Run database migrations, 4. Access the app, Architecture, Available Commands, Backend Commands (run inside container), Backups (+10 more)

### Community 66 - "Diagnosing Bugs"
Cohesion: 0.13
Nodes (14): Completion criterion: a tight loop that goes red, Diagnosing Bugs, Minimise, Non-deterministic bugs, Phase 1: Build a feedback loop, Phase 2: Reproduce + minimise, Phase 3: Hypothesise, Phase 4: Instrument (+6 more)

### Community 67 - "react"
Cohesion: 0.11
Nodes (15): react, Props, Props, Sidebar(), SidebarFooterContext, Props, SidebarHandle(), Props (+7 more)

### Community 68 - "src/index.ts"
Cohesion: 0.08
Nodes (25): cloudinary, express, multer, multer-storage-cloudinary, loadChallenge(), swapChallengeQuestion(), app, deleteCloudinaryImage() (+17 more)

### Community 69 - "familyTreeRoutes.ts"
Cohesion: 0.17
Nodes (14): loadFamilyTree, loadReducedFamilyTree, router, serializeMember(), transformMembersToTree(), bumpDataVersion(), createVersionedCache(), trackWrites() (+6 more)

### Community 70 - "teamLayout.ts"
Cohesion: 0.19
Nodes (18): failOver(), getWorker(), Pending, requestLayout(), runInline(), computeTeamLayout(), groupIntoLanes(), moveEdgesToWorld() (+10 more)

### Community 71 - "Core Patterns"
Cohesion: 0.13
Nodes (14): API Reference, boundsArea optimization, Common Mistakes, Core Patterns, Culling, HIGH: Expecting automatic culling, HIGH: Using addChild on RenderLayer, MEDIUM: Expecting filters on ancestors to apply to layer children (+6 more)

### Community 72 - "Core Patterns"
Cohesion: 0.12
Nodes (14): Advanced shape primitives, Cloning, clearing, and bounds, Core Patterns, Default styles via setFillStyle / setStrokeStyle, Draw-time transforms, Drawing a texture directly, Gradients and patterns, GraphicsContext sharing (+6 more)

### Community 73 - "dependencies"
Cohesion: 0.04
Nodes (46): dependencies, cloudinary, compression, cors, dotenv, express, express-rate-limit, helmet (+38 more)

### Community 74 - "useTreeLayout.ts"
Cohesion: 0.17
Nodes (17): gsap, CARD_VIEW_SCALE, getFitViewTargetScale(), useFitViewAnimation(), useFocusFrameAnimation(), useFocusNodeAnimation(), useViewportAnimation(), useSceneTransition() (+9 more)

### Community 75 - "MemberInfoActions.tsx"
Cohesion: 0.23
Nodes (12): FacebookIcon(), FacebookGlyph(), InstagramGlyph(), LinkedinGlyph(), svgProps, TelegramGlyph(), InstagramIcon(), LinkedinIcon() (+4 more)

### Community 76 - "Common Mistakes"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [CRITICAL] Adding children to leaf scene objects, [HIGH] Expecting getBounds() to return a Rectangle, [HIGH] Using cacheAsBitmap instead of cacheAsTexture, [MEDIUM] Setting both pivot and origin on the same container, Quick Start

### Community 77 - "MemberFormFields.tsx"
Cohesion: 0.16
Nodes (16): CheckedField, getStoredFieldValues(), Links, StoredMemberValues, complete, mentors, sparse, toTime() (+8 more)

### Community 78 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, attach / detach, Common Mistakes, Core Patterns, [CRITICAL] Using `addChild` on a RenderLayer, [HIGH] Layer and attached children in different render groups, Layer + logical parent, Manual sort (+5 more)

### Community 79 - "Core Patterns"
Cohesion: 0.14
Nodes (13): Alpha mask (Sprite-based), API Reference, Common Mistakes, Core Patterns, [HIGH] Using cacheAsTexture with masks, Inverse masking, Mask channel selection, Mask type selection (+5 more)

### Community 80 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, Common Mistakes, Construction options, Core Patterns, [HIGH] Nesting many render groups, [MEDIUM] Constantly adding/removing from a render group, [MEDIUM] Overusing render groups, Profile before adding (+5 more)

### Community 81 - "useTeamForm.ts"
Cohesion: 0.27
Nodes (16): createTeam(), deleteTeam(), fetchTeamDetails(), parse(), setTeamMembers(), TeamMemberPayload, updateTeam(), buildTeamRequestBody() (+8 more)

### Community 82 - "useMeta.ts"
Cohesion: 0.19
Nodes (15): fetchMemberById(), createRole(), createTeamType(), fetchRoles(), fetchTeams(), fetchTeamTypes(), updateTeamType(), EMPTY (+7 more)

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

### Community 88 - "eligibility.ts"
Cohesion: 0.15
Nodes (18): EligibilityMember, EmailIdentity, MemberMatch, normalizeEmail(), resolveEmailIdentity(), resolveMemberMatch(), loadEmailIdentity(), prismaCodeStore (+10 more)

### Community 89 - "Foundations"
Cohesion: 0.15
Nodes (12): Advanced, Foundations, pixijs-application, pixijs-core-concepts, pixijs-events, pixijs-performance, pixijs-scene-container, pixijs-scene-core-concepts (+4 more)

### Community 90 - "teamPacking.ts"
Cohesion: 0.26
Nodes (9): TEAM_FRAME_GAP, TEAM_PACK_ASPECT, computeDirectedPacking(), computePacking(), packLanes(), Placement, scorePacking(), shelfPack() (+1 more)

### Community 91 - "emailRoutes.ts"
Cohesion: 0.18
Nodes (13): authSecret(), isDemoMode(), CodeOwner, buildSessionInfo(), bodyEmail(), emailKey(), ipKey(), requestLimits (+5 more)

### Community 92 - "Core Concepts"
Cohesion: 0.18
Nodes (11): Container vs leaf (CRITICAL), Core Concepts, Culling, Destroy semantics, Lifecycle events, Masking, Render groups, Render order and explicit z-ordering (+3 more)

### Community 93 - "seedQuestions.ts"
Cohesion: 0.19
Nodes (8): escapeHtml(), pairs(), renderSignInCodeEmail(), deleteQuestionSessions(), { html }, active, items, valid

### Community 94 - "SeasonMotif.tsx"
Cohesion: 0.27
Nodes (8): FlowerIcon(), Props, MapleLeafIcon(), Props, Placement, PLACEMENTS, Props, SeasonMotif()

### Community 98 - "Common Mistakes"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, [CRITICAL] App destroy without releaseGlobalResources, [HIGH] Destroying and recreating objects instead of recycling, [HIGH] Interleaving object types in scene graph, [HIGH] Loading many individual textures instead of spritesheets, [HIGH] Updating Text or HTMLText every frame, [HIGH] Using complex Graphics instead of textures (+4 more)

### Community 99 - "useCanvasTheme.ts"
Cohesion: 0.24
Nodes (9): FONT_FAMILY, NODE_SUBTITLE_STYLE, NODE_TITLE_STYLE, NODE_TOOLTIP_TEXT_STYLE, TEXT_RESOLUTION, buildCanvasColors(), CanvasColors, CanvasTextStyles (+1 more)

### Community 100 - "Core Patterns"
Cohesion: 0.12
Nodes (16): API Reference, Common Mistakes, Coordinate conversion, Core Patterns, Cumulative alpha (getGlobalAlpha), Global, local, and screen coordinates, [HIGH] Setting scale to 0, [MEDIUM] Confusing anchor and pivot (+8 more)

### Community 101 - "filtersStore.ts"
Cohesion: 0.10
Nodes (16): date-fns, EMPTY_FILTER_STATE, FOUNDER_JOIN_YEAR, MENTOR_STATUSES, FiltersActions, FiltersState, initialState, initialFiltersState (+8 more)

### Community 102 - "Render Loop"
Cohesion: 0.22
Nodes (8): API Reference, Common Mistakes, [CRITICAL] Treating the ticker callback arg as a number, Frame lifecycle, [HIGH] Using `updateTransform` for per-frame logic, [MEDIUM] Assuming ticker callbacks run after render, Quick Start, Render Loop

### Community 103 - "pixijs-core-concepts/SKILL.md"
Cohesion: 0.22
Nodes (8): API Reference, Decision guide, Environments, Quick concepts, Quick Start, Renderer = systems + pipes, The render loop, Topics

### Community 104 - "MemberFilterCategory.tsx"
Cohesion: 0.16
Nodes (15): FilterCategory(), LION_GROUP_ICON, LION_ICON, Props, FiltersHeader(), ALL_SECTIONS_CLOSED, FiltersPanel(), Props (+7 more)

### Community 105 - "SearchSuggestionItem.tsx"
Cohesion: 0.23
Nodes (9): LionIcon(), Props, Props, SearchSuggestionItem(), Props, SearchSuggestionRow(), Props, TeamSuggestionItem() (+1 more)

### Community 106 - "Toolbar.tsx"
Cohesion: 0.22
Nodes (12): DemoBadge(), compare(), getSearchable(), MemberSearch(), Props, Props, SearchBar(), SearchPanel() (+4 more)

### Community 107 - "src/types/index.ts"
Cohesion: 0.08
Nodes (48): tailwind-merge, GLOW, Props, Props, Props, Props, Props, DateInput() (+40 more)

### Community 108 - "Toolbar.tsx"
Cohesion: 0.07
Nodes (53): AccessLevel, AuthMethod, Challenge, ChallengeQuestion, logout(), post(), RequestCodeOutcome, requestEmailCode() (+45 more)

### Community 109 - "Core Patterns"
Cohesion: 0.25
Nodes (8): Add, remove, swap, Child queries, Core Patterns, Destroying sub-trees, Iterating children, Label-based tree navigation, Reparenting with transform preservation, Replacing a child

### Community 110 - "server/src/types/index.ts"
Cohesion: 0.07
Nodes (29): mongodb, ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember, STATUSES_MAP (+21 more)

### Community 111 - "MemberBirthdayAnimation.tsx"
Cohesion: 0.21
Nodes (10): pixi.js, BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props, acquireEmojiTextures(), createEmojiTexture(), generateRandomPosition() (+2 more)

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

### Community 113 - "@heroicons/react"
Cohesion: 0.20
Nodes (10): @heroicons/react, Props, PositionRowHeader(), Props, getSummary(), Props, TeamMembersEditor(), Pos (+2 more)

### Community 114 - "Core Patterns"
Cohesion: 0.29
Nodes (7): Core Patterns, Frame rate capping, Manual rendering, Per-object update via `onRender`, Priority order, Stop and start, Time units

### Community 115 - "Common Mistakes"
Cohesion: 0.33
Nodes (6): Common Mistakes, [CRITICAL] Adding children to a leaf display object, [CRITICAL] Referencing DisplayObject, [HIGH] Forgetting isRenderGroup on large static subtrees, [HIGH] Treating child.x as world space, [MEDIUM] sortableChildren without zIndex

### Community 116 - "pixijs-scene-core-concepts/SKILL.md"
Cohesion: 0.25
Nodes (6): API Reference, Leaf comparison: which skill covers which object, Quick Start, References, Tooling, When to use what (quick decisions)

### Community 117 - "ThemeContext.tsx"
Cohesion: 0.13
Nodes (16): darkTheme, DEFAULT_THEME, lightTheme, THEMES, applyCssTokens(), ThemeContext, ThemeContextValue, ThemeProvider() (+8 more)

### Community 118 - "elkLayout.ts"
Cohesion: 0.24
Nodes (9): elkjs, elkNodeSize(), LAYER_SPACE_LR, layoutOptions(), layoutWithElk(), loadElk(), stackIsolatedNodes(), edges (+1 more)

### Community 119 - "Common Mistakes"
Cohesion: 0.50
Nodes (4): Common Mistakes, [HIGH] Accessing app.renderer before init() resolves, [HIGH] Setting DOMAdapter after Application.init, [MEDIUM] Treating `preference` as a guarantee

### Community 120 - "aiFaces.ts"
Cohesion: 0.38
Nodes (3): createFaceSource(), Options, source()

### Community 121 - "constants/canvas/index.ts"
Cohesion: 0.31
Nodes (8): lineageEdgePath, ACCIDENTAL_DRAG_MAX_DISTANCE, ACCIDENTAL_DRAG_MAX_MS, LONG_PRESS_MS, TAP_MOVE_TOLERANCE, PressStart, useTapWithoutDrag(), isTapGesture()

### Community 122 - "FitViewButton.tsx"
Cohesion: 0.35
Nodes (7): FitViewButton(), Props, Props, ToolbarIconButton(), Props, ToolbarTooltip(), useHoverTooltip()

### Community 123 - "useHoverNodeAnimation.ts"
Cohesion: 0.29
Nodes (8): pixi-filters, NODE_HOVER_ANIMATION_DURATION, NODE_HOVER_SCALE, ZOOMED_OUT_HOVER_SCALE_MAP, calculateTargetScale(), createShadowFilter(), Props, useHoverNodeAnimation()

### Community 124 - "NodesLayer.tsx"
Cohesion: 0.36
Nodes (6): NodesLayer(), Props, toTeamLayoutInputs(), parseTeamNodeId(), getTeamRoster(), getMemberTeamRoles()

### Community 125 - "Position"
Cohesion: 0.40
Nodes (5): Position, Bottom, Left, Right, Top

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
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 945 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `TeamInfoSidebar.tsx`, `useMembersStore`, `hooks/index.ts`, `MemberFormFields.tsx`, `MembersTreeContent.tsx`, `TeamFormContent.tsx`, `teamFrame.ts`, `MemberNode.tsx`, `PhotoViewer.tsx`, `useDashedPathAnimation.ts`, `src/utils/index.ts`, `FilterState`, `hooks/index.ts`, `MemberInfo.tsx`, `useCardAnimation.ts`, `pixi.js`, `EditMemberForm.tsx`, `src/utils/index.ts`, `dimensions.ts`, `package.json`, `filterSearchParams.ts`, `dashedBezier.ts`, `useTreeDirection.ts`, `TeamFormContent.tsx`, `pixi.js`, `AvatarFileInput.tsx`, `useTreeLayout.ts`, `useTeamForm.ts`, `useMeta.ts`, `useCanvasTheme.ts`, `MemberFilterCategory.tsx`, `SearchSuggestionItem.tsx`, `Toolbar.tsx`, `src/types/index.ts`, `Toolbar.tsx`, `MemberBirthdayAnimation.tsx`, `@heroicons/react`, `ThemeContext.tsx`, `constants/canvas/index.ts`, `FitViewButton.tsx`, `useHoverNodeAnimation.ts`, `NodesLayer.tsx`?**
  _High betweenness centrality (0.107) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _42 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `oidc.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.14492753623188406 - nodes in this community are weakly interconnected._
- **Why does `getBounds()` connect `Core Patterns` to `Foundations`, `useTreeLayout.ts`, `Common Mistakes`?**
  _High betweenness centrality (0.092) - this node is a cross-community bridge._
- **Should `hooks/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.13636363636363635 - nodes in this community are weakly interconnected._
- **Why does `Core Patterns` connect `Core Patterns` to `oidc.ts`, `Common Mistakes`?**
  _High betweenness centrality (0.056) - this node is a cross-community bridge._
- **Should `TeamFormContent.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.1241565452091768 - nodes in this community are weakly interconnected._