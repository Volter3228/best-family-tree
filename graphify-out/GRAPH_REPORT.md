# Graph Report - best-family-tree  (2026-11-11)

## Corpus Check
- 473 files · ~161,873 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 28 file(s) not represented in the graph (top: .prisma 9, (none) 6, .css 6)

## Summary
- 2437 nodes · 6182 edges · 109 communities (105 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 63 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `879e499c`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- EditMemberForm.tsx
- MemberNodeAvatar.tsx
- MemberInfoSocial.tsx
- MemberFilterCategory.tsx
- auth.ts
- MemberInfo.tsx
- constants/canvas/index.ts
- Common Mistakes
- PositionFormFields.tsx
- Member
- challenges.ts
- Toolbar.tsx
- contactKeys.ts
- memberPresentation.ts
- PhotoViewer.tsx
- sessions.ts
- MemberFilterCategory
- emailRoutes.ts
- computeFilteredMembers.ts
- catalogValidation.ts
- Member
- HTML Report Format
- emailCodes.ts
- membersStore.ts
- teamService.ts
- filterSearchParams.ts
- compilerOptions
- compilerOptions
- teamFrame.ts
- BadgeInput.tsx
- dependencies
- server/package.json
- clientInstance.ts
- memberService.ts
- FilterState
- MembersTreeContent.tsx
- package.json
- useCardAnimation.ts
- TeamFilterCategory.tsx
- useDashedPathAnimation.ts
- Core Patterns
- devDependencies
- Quick concepts
- ApplicationOptions reference
- CLAUDE.md
- treeStore.ts
- mime.ts
- During the session
- ManageForm.tsx
- http
- AGENTS.md
- scripts
- layout.tsx
- BEST Family Tree
- next.config.mjs
- postcss.config.mjs
- Common Mistakes
- importAllowedEmails.ts
- Core Patterns
- Scene Objects
- Utilities
- types.ts
- BEST Family Tree
- Diagnosing Bugs
- Common Mistakes
- TeamInfoSidebar.tsx
- protocol.ts
- Core Patterns
- Core Patterns
- dependencies
- src/types/index.ts
- Core Patterns
- Core Patterns
- Core Patterns
- Core Patterns
- FilterState
- Core Patterns
- Constructor options (Container-inherited)
- Test-Driven Development
- GSAP Core
- Core Patterns
- tapGesture.ts
- Foundations
- MemberStatus
- pixijs/SKILL.md
- Core Concepts
- Point
- start-prod.sh
- ref_vitest
- hooks/index.ts
- Render Loop
- pixijs-core-concepts/SKILL.md
- Core Patterns
- inputs/index.ts
- signInCodeEmail.ts
- server/src/types/index.ts
- mailer/index.ts
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
- memberFormValidation.ts

## God Nodes (most connected - your core abstractions)
1. `react` - 116 edges
2. `AccentColor` - 116 edges
3. `tailwind-merge` - 59 edges
4. `Member` - 58 edges
5. `COLOR_CLASSES` - 40 edges
6. `TeamFrame` - 40 edges
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

## Communities (109 total, 4 thin omitted)

### Community 0 - "EditMemberForm.tsx"
Cohesion: 0.12
Nodes (35): AddMemberForm(), buildMemberFormData(), ClearButton(), SubmitButton(), ConfirmDeleteControl(), Props, describeSubmitError(), EditMemberForm() (+27 more)

### Community 1 - "MemberNodeAvatar.tsx"
Cohesion: 0.10
Nodes (19): @pixi/react, PixiElements, @gsap/react, @pixi/react, pixi-viewport, MemberNodeAvatar(), Props, CIRCLE_TEXTURE_SRC (+11 more)

### Community 2 - "MemberInfoSocial.tsx"
Cohesion: 0.26
Nodes (8): Props, FacebookIcon(), InstagramIcon(), LinkedinIcon(), TelegramIcon(), Props, MemberInfoSocial(), Props

### Community 3 - "MemberFilterCategory.tsx"
Cohesion: 0.38
Nodes (8): ACTIVITY_OPTIONS, ACTIVITY_STATES, AVATAR_OPTIONS, AVATAR_VALUES, JOIN_SEASONS, MEMBER_STATUSES, SEASON_OPTIONS, STATUS_OPTIONS

### Community 4 - "auth.ts"
Cohesion: 0.06
Nodes (55): react-dom, AuthMethod, Challenge, ChallengeQuestion, logout(), post(), RequestCodeOutcome, requestEmailCode() (+47 more)

### Community 5 - "MemberInfo.tsx"
Cohesion: 0.09
Nodes (35): next, LionIcon(), cache, loadImageAspect(), PhotoOpenButton(), MemberAvatarImage(), MemberAvatarImageInner(), Props (+27 more)

### Community 6 - "constants/canvas/index.ts"
Cohesion: 0.05
Nodes (60): pixi-filters, BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props, acquireEmojiTextures(), createEmojiTexture(), generateRandomPosition() (+52 more)

### Community 7 - "Common Mistakes"
Cohesion: 0.22
Nodes (8): API Reference, Common Mistakes, [CRITICAL] Adding children to leaf scene objects, [HIGH] Expecting getBounds() to return a Rectangle, [HIGH] Using cacheAsBitmap instead of cacheAsTexture, [MEDIUM] Setting both pivot and origin on the same container, [MEDIUM] Using container.name instead of container.label, Quick Start

### Community 8 - "PositionFormFields.tsx"
Cohesion: 0.14
Nodes (29): FieldError(), PositionAssignmentFields(), PositionFormFields(), Props, createEmptyPositionRow(), EMPTY_POSITION_ROW, findTeamByName(), getPositionRowSummary() (+21 more)

### Community 9 - "Member"
Cohesion: 0.13
Nodes (19): MembersTree(), Props, Props, isTreeReady(), MembersTree, MembersTreeDynamic(), Props, TreeState (+11 more)

### Community 10 - "challenges.ts"
Cohesion: 0.15
Nodes (19): answerMatches(), CYRILLIC_TO_LATIN, normalizeAnswer(), ChallengeState, isExpired(), isSolved(), pickRandom(), swapQuestion() (+11 more)

### Community 11 - "Toolbar.tsx"
Cohesion: 0.06
Nodes (47): FiltersHeader(), Props, ALL_SECTIONS_CLOSED, FiltersPanel(), Props, OPTIONS, Props, ViewModeSwitch() (+39 more)

### Community 12 - "contactKeys.ts"
Cohesion: 0.22
Nodes (10): duplicates, fields, groups, ContactFields, contactKey(), ContactPlatform, FIELD_PLATFORMS, findContactCollision() (+2 more)

### Community 13 - "memberPresentation.ts"
Cohesion: 0.28
Nodes (7): getPhotoUrlAsAvatar(), RecruitmentTerm, matchesJoinSeason(), formatMemberRecruitmentSeason(), formatRecruitmentTerm(), RECRUITMENT_SEASON_EMOJI, RECRUITMENT_SEASON_LABEL

### Community 14 - "PhotoViewer.tsx"
Cohesion: 0.15
Nodes (27): zustand, Props, PhotoViewer(), Viewer(), viewportRect(), clampAxis(), clampOffset(), clampScale() (+19 more)

### Community 15 - "sessions.ts"
Cohesion: 0.10
Nodes (32): express, CHALLENGE_TTL_MS, isDemoMode(), isProduction(), MIN_ACTIVE_QUESTIONS, QUESTIONS_SHOWN, SESSION_COOKIE, SESSION_TTL_MS (+24 more)

### Community 16 - "MemberFilterCategory"
Cohesion: 0.40
Nodes (5): MemberFilterCategory(), BirthdayFilterSection(), fromDate(), toDate(), countActiveMemberFilters()

### Community 17 - "emailRoutes.ts"
Cohesion: 0.15
Nodes (19): express-rate-limit, authSecret(), EligibilityMember, EmailIdentity, normalizeEmail(), resolveEmailIdentity(), member(), loadEmailIdentity() (+11 more)

### Community 18 - "computeFilteredMembers.ts"
Cohesion: 0.14
Nodes (27): areSetsEqual(), computeFilteredMembers(), isFilterActive(), matchesAvatar(), matchesBirthday(), matchesJoinYear(), memberMatchesFilters(), parseDateStr() (+19 more)

### Community 19 - "catalogValidation.ts"
Cohesion: 0.09
Nodes (28): deleteCloudinaryImage(), extractCloudinaryPublicId(), parsePositionsPayload(), router, rejectUpload(), router, uploadTeamTypeIcon, booleanLike (+20 more)

### Community 20 - "Member"
Cohesion: 0.14
Nodes (14): date-fns, Props, NodesLayer(), Props, Props, Props, Props, Member (+6 more)

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "emailCodes.ts"
Cohesion: 0.22
Nodes (10): CODE_TTL_MS, CodeStore, generateCode(), hashCode(), issueCode(), MAX_CODE_ATTEMPTS, sameHash(), StoredCode (+2 more)

### Community 23 - "membersStore.ts"
Cohesion: 0.14
Nodes (20): DEFAULT_POSITION, changesStructure(), EMPTY_INDEX, isSamePosition(), MembersState, withIndex(), ChildrenMap, MemberMetrics (+12 more)

### Community 24 - "teamService.ts"
Cohesion: 0.11
Nodes (33): ResolvedPosition, resolvePosition(), MemberTransaction, assertCanEditMembers(), deleteMember(), deriveTeamName(), resolveRole(), resolveTeam() (+25 more)

### Community 25 - "filterSearchParams.ts"
Cohesion: 0.22
Nodes (11): Props, filtersToSearchParams(), parseCsvArray(), parseCsvStrings(), parseFiltersFromSearchParams(), parseNumberOrNull(), parseTreeMode(), serializeCsv() (+3 more)

### Community 26 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, esModuleInterop, forceConsistentCasingInFileNames, module, moduleResolution, noImplicitAny, outDir, paths (+12 more)

### Community 27 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+12 more)

### Community 28 - "teamFrame.ts"
Cohesion: 0.08
Nodes (44): MemberNodeCard(), TeamBadge(), TeamOverviewLabel(), Props, ZoomFadeContainer(), TEAM_EDGE_DROP, TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_SPREAD_WIDTH (+36 more)

### Community 29 - "BadgeInput.tsx"
Cohesion: 0.17
Nodes (14): DropdownMenu(), DropdownPortal(), Props, BadgeInput(), Props, BadgeInputField(), useBadgeInputState(), FilterSection() (+6 more)

### Community 30 - "dependencies"
Cohesion: 0.11
Nodes (19): dependencies, date-fns, dotenv, elkjs, gsap, @gsap/react, @heroicons/react, lodash (+11 more)

### Community 31 - "server/package.json"
Cohesion: 0.06
Nodes (30): cloudinary, compression, concurrently, cors, helmet, multer, multer-storage-cloudinary, nodemon (+22 more)

### Community 32 - "clientInstance.ts"
Cohesion: 0.10
Nodes (20): @prisma/adapter-pg, toMemberResponse(), adapter, prisma, loadFamilyTree, loadReducedFamilyTree, router, serializeMember() (+12 more)

### Community 33 - "memberService.ts"
Cohesion: 0.09
Nodes (35): zod, buildMemberFields(), buildMemberUpdateFields(), buildSharedFields(), buildSparseMemberFields(), parsePhoneNumbers(), getPositionKey(), syncPositions() (+27 more)

### Community 34 - "FilterState"
Cohesion: 0.15
Nodes (15): CheckboxGroupFilterSection(), Option, Props, ClearButton(), FilterCheckbox(), Props, JoinYearFilterSection(), Props (+7 more)

### Community 35 - "MembersTreeContent.tsx"
Cohesion: 0.19
Nodes (16): SharpAvatarTracker(), Viewport(), ACCENT_COLOR_MAP, EVENT_FEATURES, MembersTreeContent(), ViewportCulling(), useSelectedMember(), useFilterSearchParams() (+8 more)

### Community 36 - "package.json"
Cohesion: 0.11
Nodes (18): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+10 more)

### Community 37 - "useCardAnimation.ts"
Cohesion: 0.29
Nodes (10): clamp01(), easeBackOut, easePower2In, easePower2Out, entries, Entry, finishCardReveal(), registerCardReveal() (+2 more)

### Community 38 - "TeamFilterCategory.tsx"
Cohesion: 0.26
Nodes (10): FilterCategory(), LION_GROUP_ICON, LION_ICON, Props, TeamPeriodFilterSection(), TeamTypeFilterSection(), TeamFilterCategory(), MaskIcon() (+2 more)

### Community 39 - "useDashedPathAnimation.ts"
Cohesion: 0.17
Nodes (18): LineageEdge(), DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN, MIN_ANIM_DURATION, PATTERN_LEN, RETRACT_BASE (+10 more)

### Community 40 - "Core Patterns"
Cohesion: 0.11
Nodes (17): API Reference, Common Mistakes, Coordinate conversion, Core Patterns, Cumulative alpha (getGlobalAlpha), Global, local, and screen coordinates, [HIGH] Setting scale to 0, [MEDIUM] Confusing anchor and pivot (+9 more)

### Community 41 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+5 more)

### Community 42 - "Quick concepts"
Cohesion: 0.50
Nodes (4): Environments, Quick concepts, Renderer = systems + pipes, The render loop

### Community 43 - "ApplicationOptions reference"
Cohesion: 0.06
Nodes (32): Accessibility, ApplicationOptions reference, Background, Culler (CullerPluginOptions), Deprecated (GC — prefer the unified options above), Events, Garbage collection, Graphics (+24 more)

### Community 44 - "CLAUDE.md"
Cohesion: 0.29
Nodes (6): Commands, Conventions, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout

### Community 45 - "treeStore.ts"
Cohesion: 0.13
Nodes (26): gsap, react, getFitViewTargetScale(), useFitViewAnimation(), useFocusFrameAnimation(), useFocusNodeAnimation(), useViewportAnimation(), useSceneTransition() (+18 more)

### Community 46 - "mime.ts"
Cohesion: 0.29
Nodes (11): RFC-2045, RFC-2047, createGmailMailer(), GmailConfig, base64Body(), buildMime(), encodeHeaderText(), formatAddress() (+3 more)

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "ManageForm.tsx"
Cohesion: 0.12
Nodes (24): DropdownSelectInput(), ManageForm(), MemberMode, Section, SECTIONS, TEAM_KINDS, TeamKind, MemberEditPanel() (+16 more)

### Community 50 - "http"
Cohesion: 0.09
Nodes (40): addMember(), ApiError, toApiError(), deleteMember(), editMember(), fetchFamilyTree(), fetchMemberById(), fetchMentorsList() (+32 more)

### Community 51 - "AGENTS.md"
Cohesion: 0.29
Nodes (6): Commands, Conventions, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout

### Community 52 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, dev, dev:webpack, lint, start, test, typecheck

### Community 53 - "layout.tsx"
Cohesion: 0.06
Nodes (33): react-datepicker, metadata, nunito, RootLayout(), EDGE_STYLE_OPTIONS, ORIENTATION_OPTIONS, Props, Section() (+25 more)

### Community 54 - "BEST Family Tree"
Cohesion: 0.33
Nodes (5): BEST Family Tree, People, Sign-in, Teams, Views

### Community 57 - "Common Mistakes"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, [CRITICAL] App destroy without releaseGlobalResources, [HIGH] Destroying and recreating objects instead of recycling, [HIGH] Interleaving object types in scene graph, [HIGH] Loading many individual textures instead of spritesheets, [HIGH] Updating Text or HTMLText every frame, [HIGH] Using complex Graphics instead of textures (+4 more)

### Community 58 - "importAllowedEmails.ts"
Cohesion: 0.19
Nodes (12): AllowedRow, AllowlistDiff, diffAllowlist(), looksLikeEmail(), parseAllowlistCsv(), ParsedAllowlist, splitLine(), apply (+4 more)

### Community 59 - "Core Patterns"
Cohesion: 0.12
Nodes (17): Application destroy/recreate cycle, Batching optimization, cacheAsTexture for performance, Core Patterns, Culling, Filters and masks cost, Graphics performance, Low-level rendering optimizations (+9 more)

### Community 60 - "Scene Objects"
Cohesion: 0.14
Nodes (13): pixijs-html-source, pixijs-scene-container, pixijs-scene-dom-container, pixijs-scene-gif, pixijs-scene-graphics, pixijs-scene-mesh, pixijs-scene-particle-container, pixijs-scene-sprite (+5 more)

### Community 62 - "Utilities"
Cohesion: 0.15
Nodes (13): Advanced, pixijs-accessibility, pixijs-assets, pixijs-blend-modes, pixijs-custom-rendering, pixijs-filters, pixijs-performance, Advanced (+5 more)

### Community 63 - "types.ts"
Cohesion: 0.22
Nodes (11): canEditMember(), hasAccess(), RANK, CONTACT_FIELDS, AccessRank, Express, Request, Session (+3 more)

### Community 65 - "BEST Family Tree"
Cohesion: 0.12
Nodes (15): 1. Clone and configure environment, 2. Start the application, 3. Run database migrations, 4. Access the app, Architecture, Available Commands, Backend Commands (run inside container), BEST Family Tree (+7 more)

### Community 66 - "Diagnosing Bugs"
Cohesion: 0.13
Nodes (14): Completion criterion: a tight loop that goes red, Diagnosing Bugs, Minimise, Non-deterministic bugs, Phase 1: Build a feedback loop, Phase 2: Reproduce + minimise, Phase 3: Hypothesise, Phase 4: Instrument (+6 more)

### Community 68 - "Common Mistakes"
Cohesion: 0.33
Nodes (6): Common Mistakes, [CRITICAL] Adding children to a leaf display object, [CRITICAL] Referencing DisplayObject, [HIGH] Forgetting isRenderGroup on large static subtrees, [HIGH] Treating child.x as world space, [MEDIUM] sortableChildren without zIndex

### Community 69 - "TeamInfoSidebar.tsx"
Cohesion: 0.18
Nodes (18): AccessLevel, fetchSession(), SessionInfo, MemberSidebar(), Props, Props, TeamInfoSidebar(), MemberSidebarContent() (+10 more)

### Community 70 - "protocol.ts"
Cohesion: 0.06
Nodes (56): elkjs, NODE_CARD_TOP, TEAM_COLUMN_GAP, TEAM_FRAME_GAP, TEAM_FRAME_HEADER, TEAM_FRAME_MIN_WIDTH, TEAM_FRAME_PADDING, TEAM_LAYOUT_COLUMNS (+48 more)

### Community 71 - "Core Patterns"
Cohesion: 0.13
Nodes (14): API Reference, boundsArea optimization, Common Mistakes, Core Patterns, Culling, HIGH: Expecting automatic culling, HIGH: Using addChild on RenderLayer, MEDIUM: Expecting filters on ancestors to apply to layer children (+6 more)

### Community 72 - "Core Patterns"
Cohesion: 0.14
Nodes (13): Advanced shape primitives, Core Patterns, Default styles via setFillStyle / setStrokeStyle, Draw-time transforms, Drawing a texture directly, Gradients and patterns, GraphicsContext sharing, GraphicsContext utilities (+5 more)

### Community 73 - "dependencies"
Cohesion: 0.05
Nodes (42): dependencies, cloudinary, compression, cors, dotenv, express, express-rate-limit, helmet (+34 more)

### Community 75 - "src/types/index.ts"
Cohesion: 0.09
Nodes (40): @heroicons/react, tailwind-merge, GLOW, Props, FitViewButton(), Props, Props, ToolbarIconButton() (+32 more)

### Community 76 - "Core Patterns"
Cohesion: 0.18
Nodes (14): Adding and removing children, Bounds and coordinate conversion, Constructor options, Container events, Core Patterns, Destroy, Finding and removing from parent, Leaves vs containers (+6 more)

### Community 78 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, attach / detach, Common Mistakes, Core Patterns, [CRITICAL] Using `addChild` on a RenderLayer, [HIGH] Layer and attached children in different render groups, Layer + logical parent, Manual sort (+5 more)

### Community 79 - "Core Patterns"
Cohesion: 0.14
Nodes (13): Alpha mask (Sprite-based), API Reference, Common Mistakes, Core Patterns, [HIGH] Using cacheAsTexture with masks, Inverse masking, Mask channel selection, Mask type selection (+5 more)

### Community 80 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, Common Mistakes, Construction options, Core Patterns, [HIGH] Nesting many render groups, [MEDIUM] Constantly adding/removing from a render group, [MEDIUM] Overusing render groups, Profile before adding (+5 more)

### Community 81 - "FilterState"
Cohesion: 0.24
Nodes (9): FilterGroupProps, Props, LineageFilterSection(), Props, Props, Props, Props, FilterSectionKey (+1 more)

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

### Community 88 - "tapGesture.ts"
Cohesion: 0.57
Nodes (4): ACCIDENTAL_DRAG_MAX_DISTANCE, ACCIDENTAL_DRAG_MAX_MS, TAP_MOVE_TOLERANCE, isTapGesture()

### Community 89 - "Foundations"
Cohesion: 0.14
Nodes (13): Foundations, pixijs-application, pixijs-color, pixijs-core-concepts, pixijs-create, pixijs-environments, pixijs-events, pixijs-math (+5 more)

### Community 90 - "MemberStatus"
Cohesion: 0.12
Nodes (13): EMPTY_FILTER_STATE, initialFiltersState, AvatarFilterValue, ActivityState, Active, Excluded, Inactive, MemberStatus (+5 more)

### Community 91 - "pixijs/SKILL.md"
Cohesion: 0.18
Nodes (9): API Reference, Common Mistakes, [HIGH] buttonMode removed; use cursor, [HIGH] Default eventMode is passive, [HIGH] Move events only fire over the object in v8, [MEDIUM] Cursor does not inherit from parent, Quick Start, Fallback: canonical PixiJS docs (+1 more)

### Community 92 - "Core Concepts"
Cohesion: 0.18
Nodes (11): Container vs leaf (CRITICAL), Core Concepts, Culling, Destroy semantics, Lifecycle events, Masking, Render groups, Render order and explicit z-ordering (+3 more)

### Community 94 - "Point"
Cohesion: 0.09
Nodes (47): EdgesLayer(), Props, Props, drawPolyline(), Props, TeamEdgesLayer(), FIXED_EDGE_WIDTH, DEFAULT_NODE_HEIGHT (+39 more)

### Community 98 - "ref_vitest"
Cohesion: 0.24
Nodes (4): assertConfig(), configProblems(), Env, good

### Community 100 - "hooks/index.ts"
Cohesion: 0.08
Nodes (22): pixi.js, FILL_ALPHA, lerp(), Props, STROKE_ALPHA, TeamFrame(), TEAM_FRAME_STROKE_WIDTH, FONT_FAMILY (+14 more)

### Community 102 - "Render Loop"
Cohesion: 0.22
Nodes (8): API Reference, Common Mistakes, [CRITICAL] Treating the ticker callback arg as a number, Frame lifecycle, [HIGH] Using `updateTransform` for per-frame logic, [MEDIUM] Assuming ticker callbacks run after render, Quick Start, Render Loop

### Community 103 - "pixijs-core-concepts/SKILL.md"
Cohesion: 0.22
Nodes (8): API Reference, Common Mistakes, Decision guide, [HIGH] Accessing app.renderer before init() resolves, [HIGH] Setting DOMAdapter after Application.init, [MEDIUM] Treating `preference` as a guarantee, Quick Start, Topics

### Community 104 - "Core Patterns"
Cohesion: 0.22
Nodes (9): Add, remove, swap, Child queries, Core Patterns, Destroying sub-trees, Iterating children, Label-based tree navigation, Lifecycle events, Reparenting with transform preservation (+1 more)

### Community 105 - "inputs/index.ts"
Cohesion: 0.14
Nodes (19): Props, Props, Props, PositionRowHeader(), AvatarFileInput(), ComboboxInput(), Props, ComboboxInputField() (+11 more)

### Community 107 - "signInCodeEmail.ts"
Cohesion: 0.33
Nodes (4): escapeHtml(), pairs(), renderSignInCodeEmail(), { html }

### Community 110 - "server/src/types/index.ts"
Cohesion: 0.07
Nodes (30): mongodb, ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember, STATUSES_MAP (+22 more)

### Community 111 - "mailer/index.ts"
Cohesion: 0.29
Nodes (6): consoleMailer, createResendMailer(), ResendConfig, message, Mailer, MailMessage

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

### Community 113 - "treeStore.ts"
Cohesion: 0.07
Nodes (29): EMPTY_IDS, View, Props, Props, TeamFramesLayer(), Props, Props, TeamOverviewLayer() (+21 more)

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

### Community 147 - "memberFormValidation.ts"
Cohesion: 0.13
Nodes (20): Props, CheckedField, getStoredFieldValues(), Links, StoredMemberValues, complete, mentors, sparse (+12 more)

## Knowledge Gaps
- **42 isolated node(s):** `@prisma/client`, `dotenv`, `lodash`, `@tailwindcss/postcss`, `@types/lodash` (+37 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 878 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Skill router` connect `Utilities` to `pixijs/SKILL.md`?**
  _High betweenness centrality (0.129) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _42 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `EditMemberForm.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.12411347517730496 - nodes in this community are weakly interconnected._
- **Why does `Point` connect `Point` to `protocol.ts`, `treeStore.ts`, `treeStore.ts`, `Foundations`, `teamFrame.ts`, `Utilities`?**
  _High betweenness centrality (0.113) - this node is a cross-community bridge._
- **Should `MemberNodeAvatar.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.09686609686609686 - nodes in this community are weakly interconnected._
- **Why does `Utilities` connect `Utilities` to `Point`?**
  _High betweenness centrality (0.104) - this node is a cross-community bridge._
- **Should `auth.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.05561105561105561 - nodes in this community are weakly interconnected._