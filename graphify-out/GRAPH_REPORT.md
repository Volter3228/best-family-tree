# Graph Report - best-family-tree  (2026-11-11)

## Corpus Check
- 486 files · ~164,648 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 28 file(s) not represented in the graph (top: .prisma 9, (none) 6, .css 6)

## Summary
- 2488 nodes · 6286 edges · 107 communities (103 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 64 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `8f226f4b`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- EditMemberForm.tsx
- MemberInfo.tsx
- MemberInfoSocial.tsx
- MemberFilterCategory.tsx
- auth.ts
- PositionsDropdown.tsx
- constants/canvas/index.ts
- pixi.js
- PositionFormFields.tsx
- Core Patterns
- challenges.ts
- TeamSearch.tsx
- anonymizeDemo.ts
- MemberSidebarContent.tsx
- PhotoViewer.tsx
- sessions.ts
- MemberBirthdayAnimation.tsx
- emailRoutes.ts
- filterTeams.ts
- catalogValidation.ts
- Member
- HTML Report Format
- SearchSuggestionItem.tsx
- Member
- teamService.ts
- filterSearchParams.ts
- compilerOptions
- compilerOptions
- teamFrame.ts
- react
- dependencies
- server/package.json
- clientInstance.ts
- memberService.ts
- FilterState
- MembersTreeContent.tsx
- package.json
- QuestionsForm.tsx
- FilterState
- Direction
- Core Patterns
- devDependencies
- TeamLogo.tsx
- ApplicationOptions reference
- CLAUDE.md
- useTreeLayout.ts
- mime.ts
- teamFrame.ts
- During the session
- ManageForm.tsx
- membersStore.ts
- AGENTS.md
- scripts
- ThemeContext.tsx
- BEST Family Tree
- next.config.mjs
- postcss.config.mjs
- Common Mistakes
- importAllowedEmails.ts
- Core Patterns
- Scene Objects
- Position
- Utilities
- types.ts
- AvatarFileInput.tsx
- BEST Family Tree
- Diagnosing Bugs
- MemberFormFields.tsx
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
- Constructor options (Container-inherited)
- Test-Driven Development
- GSAP Core
- Core Patterns
- constants/canvas/index.ts
- Foundations
- filtersStore.ts
- pixijs/SKILL.md
- Core Concepts
- Point
- utils/strings.ts
- start-prod.sh
- Render Loop
- pixijs-core-concepts/SKILL.md
- Core Patterns
- server/src/types/index.ts
- Renderers: WebGPU, WebGL, and Canvas
- treeStore.ts
- pixijs-scene-core-concepts/SKILL.md
- Container Hierarchy
- Common Mistakes
- GSAP with React
- hitl-loop.template.sh
- Core Patterns
- GSAP Performance
- GSAP Timeline
- Common Mistakes

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
- `pixijs-math` --references--> `Point`  [INFERRED]
  .agents/skills/pixijs/references/index.md → src/types/tree.ts
- `Utilities` --references--> `Point`  [INFERRED]
  .agents/skills/pixijs/SKILL.md → src/types/tree.ts
- `Bounds and coordinate conversion` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs-scene-container/SKILL.md → src/hooks/membersTree/animations/useFitViewAnimation.ts
- `Constructor options` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs-scene-container/SKILL.md → src/hooks/membersTree/animations/useFitViewAnimation.ts

## Import Cycles
- 3-file cycle: `src/utils/index.ts -> src/utils/membersTree/index.ts -> src/utils/membersTree/lineageEdgePath.ts -> src/utils/index.ts`
- 4-file cycle: `src/context/ThemeContext.tsx -> src/hooks/index.ts -> src/hooks/membersTree/index.ts -> src/hooks/membersTree/useCanvasTheme.ts -> src/context/ThemeContext.tsx`
- 4-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/members.ts -> src/models/index.ts -> src/models/Member.ts`
- 4-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/tree.ts -> src/models/index.ts -> src/models/Member.ts`
- 5-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/filters.ts -> src/types/members.ts -> src/models/index.ts -> src/models/Member.ts`

## Communities (107 total, 4 thin omitted)

### Community 0 - "EditMemberForm.tsx"
Cohesion: 0.10
Nodes (38): editMember(), AddMemberForm(), buildMemberFormData(), ClearButton(), SubmitButton(), ConfirmDeleteControl(), Props, describeSubmitError() (+30 more)

### Community 1 - "MemberInfo.tsx"
Cohesion: 0.15
Nodes (19): date-fns, MemberAvatarImage(), MemberAvatarImageInner(), Props, MemberInfo(), MemberInfoActionIcon(), MentorMenteesDropdown(), useMentees() (+11 more)

### Community 2 - "MemberInfoSocial.tsx"
Cohesion: 0.26
Nodes (7): next, FacebookIcon(), InstagramIcon(), LinkedinIcon(), TelegramIcon(), MemberInfoSocial(), config

### Community 3 - "MemberFilterCategory.tsx"
Cohesion: 0.21
Nodes (17): MemberFilterCategory(), ACTIVITY_OPTIONS, ACTIVITY_STATES, AVATAR_OPTIONS, AVATAR_VALUES, JOIN_SEASONS, MEMBER_STATUSES, SEASON_OPTIONS (+9 more)

### Community 4 - "auth.ts"
Cohesion: 0.06
Nodes (50): AccessLevel, AuthMethod, Challenge, ChallengeQuestion, logout(), post(), RequestCodeOutcome, requestEmailCode() (+42 more)

### Community 5 - "PositionsDropdown.tsx"
Cohesion: 0.19
Nodes (14): Props, MemberInfoCopy(), MemberInfoRow(), Props, PositionBadge(), Props, PositionsDropdown(), Props (+6 more)

### Community 6 - "constants/canvas/index.ts"
Cohesion: 0.05
Nodes (50): pixi-viewport, AVATAR_HIT_AREA, CARD_PIVOT, EMPTY_FILTERS, getCullArea(), MemberNode(), NODE_HIT_AREA, NODE_PIVOT (+42 more)

### Community 7 - "pixi.js"
Cohesion: 0.17
Nodes (12): pixi.js, MemberNodeAvatar(), Props, CIRCLE_TEXTURE_SRC, PATTERN_TEXTURE_SRC, failedSources, Options, useTexture() (+4 more)

### Community 8 - "PositionFormFields.tsx"
Cohesion: 0.13
Nodes (30): PositionAssignmentFields(), Props, PositionFormFields(), Props, createEmptyPositionRow(), EMPTY_POSITION_ROW, findTeamByName(), getPositionRowSummary() (+22 more)

### Community 9 - "Core Patterns"
Cohesion: 0.11
Nodes (17): API Reference, Common Mistakes, Coordinate conversion, Core Patterns, Cumulative alpha (getGlobalAlpha), Global, local, and screen coordinates, [HIGH] Setting scale to 0, [MEDIUM] Confusing anchor and pivot (+9 more)

### Community 10 - "challenges.ts"
Cohesion: 0.11
Nodes (24): express-rate-limit, answerMatches(), CYRILLIC_TO_LATIN, normalizeAnswer(), ChallengeState, isExpired(), isSolved(), pickRandom() (+16 more)

### Community 11 - "TeamSearch.tsx"
Cohesion: 0.12
Nodes (26): DemoBadge(), compare(), getSearchable(), MemberSearch(), Props, Props, SearchBar(), Props (+18 more)

### Community 12 - "anonymizeDemo.ts"
Cohesion: 0.05
Nodes (40): @faker-js/faker, assertConfig(), configProblems(), databaseName(), demoProblems(), Env, good, allowed (+32 more)

### Community 13 - "MemberSidebarContent.tsx"
Cohesion: 0.23
Nodes (6): Props, MemberSidebarContent(), Props, useSidebarSwitchAnimation(), useTeamInfoSidebar(), SidebarMode

### Community 14 - "PhotoViewer.tsx"
Cohesion: 0.14
Nodes (28): zustand, DropdownPortal(), Props, PhotoViewer(), Viewer(), viewportRect(), clampAxis(), clampOffset() (+20 more)

### Community 15 - "sessions.ts"
Cohesion: 0.10
Nodes (30): @prisma/adapter-pg, authSecret(), CHALLENGE_TTL_MS, isDemoMode(), isProduction(), MIN_ACTIVE_QUESTIONS, QUESTIONS_SHOWN, SESSION_COOKIE (+22 more)

### Community 16 - "MemberBirthdayAnimation.tsx"
Cohesion: 0.35
Nodes (8): BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props, acquireEmojiTextures(), createEmojiTexture(), generateRandomPosition(), releaseEmojiTextures()

### Community 17 - "emailRoutes.ts"
Cohesion: 0.08
Nodes (28): EligibilityMember, EmailIdentity, normalizeEmail(), resolveEmailIdentity(), CODE_TTL_MS, CodeStore, generateCode(), hashCode() (+20 more)

### Community 18 - "filterTeams.ts"
Cohesion: 0.38
Nodes (9): getTeamSpan(), hasRole(), hasTeamCriteria(), isTeamFilterActive(), matchesPeriod(), memberMatchesTeamFilters(), positionMatchesTeamFilters(), TeamFilters (+1 more)

### Community 19 - "catalogValidation.ts"
Cohesion: 0.08
Nodes (32): Renderer selection at runtime, [MEDIUM] Using container.name instead of container.label, deleteCloudinaryImage(), extractCloudinaryPublicId(), parsePositionsPayload(), router, rejectUpload(), router (+24 more)

### Community 20 - "Member"
Cohesion: 0.15
Nodes (14): MemberNodeCard(), Props, NodesLayer(), Props, Props, Props, Member, RecruitmentTerm (+6 more)

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "SearchSuggestionItem.tsx"
Cohesion: 0.24
Nodes (8): LionIcon(), Props, Props, SearchSuggestionItem(), Props, SearchSuggestionRow(), Props, TeamSuggestionItem()

### Community 23 - "Member"
Cohesion: 0.13
Nodes (23): MembersState, ChildrenMap, MembersMap, areSetsEqual(), computeFilteredMembers(), Source, isFilterActive(), transformMembersToFlowValues() (+15 more)

### Community 24 - "teamService.ts"
Cohesion: 0.12
Nodes (30): MAX_UPLOAD_BYTES, uploadMiddleware(), ResolvedPosition, resolvePosition(), MemberTransaction, deleteMember(), deriveTeamName(), resolveRole() (+22 more)

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
Cohesion: 0.07
Nodes (46): @pixi/react, PixiElements, @pixi/react, Props, TeamBadge(), FILL_ALPHA, lerp(), Props (+38 more)

### Community 29 - "react"
Cohesion: 0.10
Nodes (27): react, react-dom, DropdownMenu(), Props, Props, BadgeInput(), Props, BadgeInputField() (+19 more)

### Community 30 - "dependencies"
Cohesion: 0.11
Nodes (19): dependencies, date-fns, dotenv, elkjs, gsap, @gsap/react, @heroicons/react, lodash (+11 more)

### Community 31 - "server/package.json"
Cohesion: 0.06
Nodes (35): cloudinary, compression, concurrently, cors, express, helmet, multer, multer-storage-cloudinary (+27 more)

### Community 32 - "clientInstance.ts"
Cohesion: 0.15
Nodes (15): toMemberResponse(), loadFamilyTree, loadReducedFamilyTree, router, serializeMember(), bumpDataVersion(), createVersionedCache(), trackWrites() (+7 more)

### Community 33 - "memberService.ts"
Cohesion: 0.08
Nodes (37): zod, canEditMember(), buildMemberFields(), buildMemberUpdateFields(), buildSharedFields(), buildSparseMemberFields(), parsePhoneNumbers(), getPositionKey() (+29 more)

### Community 34 - "FilterState"
Cohesion: 0.09
Nodes (32): FilterCategory(), LION_GROUP_ICON, LION_ICON, Props, BirthdayFilterSection(), Props, CheckboxGroupFilterSection(), Option (+24 more)

### Community 35 - "MembersTreeContent.tsx"
Cohesion: 0.16
Nodes (15): Viewport(), ACCENT_COLOR_MAP, EVENT_FEATURES, MembersTreeContent(), ViewportCulling(), membersActions, {
  setMembers,
  reloadMembers,
  addMember,
  updateMember,
  selectMember,
  getMentorsList,
}, useMembersMap() (+7 more)

### Community 36 - "package.json"
Cohesion: 0.11
Nodes (18): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+10 more)

### Community 37 - "QuestionsForm.tsx"
Cohesion: 0.29
Nodes (6): QuestionCard(), CARD_COLORS, Props, InfoBubble(), Pos, Props

### Community 38 - "FilterState"
Cohesion: 0.28
Nodes (8): FilterGroupProps, Props, Props, Props, Props, FiltersActions, FilterSectionKey, FilterState

### Community 39 - "Direction"
Cohesion: 0.18
Nodes (18): LineageEdge(), DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN, MIN_ANIM_DURATION, PATTERN_LEN, RETRACT_BASE (+10 more)

### Community 40 - "Core Patterns"
Cohesion: 0.11
Nodes (21): Adding and removing children, API Reference, Bounds and coordinate conversion, Common Mistakes, Constructor options, Container events, Core Patterns, [CRITICAL] Adding children to leaf scene objects (+13 more)

### Community 41 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+5 more)

### Community 42 - "TeamLogo.tsx"
Cohesion: 0.50
Nodes (5): cache, loadImageAspect(), PhotoOpenButton(), Props, TeamLogo()

### Community 43 - "ApplicationOptions reference"
Cohesion: 0.06
Nodes (32): Accessibility, ApplicationOptions reference, Background, Culler (CullerPluginOptions), Deprecated (GC — prefer the unified options above), Events, Garbage collection, Graphics (+24 more)

### Community 44 - "CLAUDE.md"
Cohesion: 0.29
Nodes (6): Commands, Conventions, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout

### Community 45 - "useTreeLayout.ts"
Cohesion: 0.15
Nodes (21): gsap, NODE_HEIGHT, NODE_WIDTH, getFitViewTargetScale(), useFitViewAnimation(), useFocusFrameAnimation(), useFocusNodeAnimation(), useViewportAnimation() (+13 more)

### Community 46 - "mime.ts"
Cohesion: 0.15
Nodes (18): RFC-2045, RFC-2047, consoleMailer, createGmailMailer(), GmailConfig, getMailer(), base64Body(), buildMime() (+10 more)

### Community 47 - "teamFrame.ts"
Cohesion: 0.10
Nodes (33): TEAM_COLUMN_GAP, TEAM_EDGE_DROP, TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_SPREAD_WIDTH, TEAM_EDGE_STUB, TEAM_FRAME_HEADER, TEAM_FRAME_MIN_WIDTH, TEAM_FRAME_PADDING (+25 more)

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "ManageForm.tsx"
Cohesion: 0.11
Nodes (27): FormMessages(), Props, DropdownSelectInput(), ManageForm(), MemberMode, Section, SECTIONS, TEAM_KINDS (+19 more)

### Community 50 - "membersStore.ts"
Cohesion: 0.05
Nodes (66): addMember(), ApiError, toApiError(), deleteMember(), fetchFamilyTree(), fetchMemberById(), fetchMentorsList(), createRole() (+58 more)

### Community 51 - "AGENTS.md"
Cohesion: 0.29
Nodes (6): Commands, Conventions, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout

### Community 52 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, dev, dev:webpack, lint, start, test, typecheck

### Community 53 - "ThemeContext.tsx"
Cohesion: 0.05
Nodes (44): react-datepicker, metadata, nunito, RootLayout(), EDGE_STYLE_OPTIONS, ORIENTATION_OPTIONS, Props, Section() (+36 more)

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

### Community 61 - "Position"
Cohesion: 0.40
Nodes (5): Position, Bottom, Left, Right, Top

### Community 62 - "Utilities"
Cohesion: 0.15
Nodes (13): pixijs-assets, pixijs-blend-modes, pixijs-color, pixijs-events, pixijs-math, pixijs-ticker, Utilities, Advanced (+5 more)

### Community 63 - "types.ts"
Cohesion: 0.19
Nodes (11): hasAccess(), RANK, member(), CONTACT_FIELDS, AccessRank, Express, Request, Session (+3 more)

### Community 64 - "AvatarFileInput.tsx"
Cohesion: 0.33
Nodes (7): AvatarFileInput(), Props, LogoFileInput(), Props, exceedsUploadLimit(), MAX_UPLOAD_BYTES, UPLOAD_TOO_LARGE_MESSAGE

### Community 65 - "BEST Family Tree"
Cohesion: 0.12
Nodes (15): 1. Clone and configure environment, 2. Start the application, 3. Run database migrations, 4. Access the app, Architecture, Available Commands, Backend Commands (run inside container), BEST Family Tree (+7 more)

### Community 66 - "Diagnosing Bugs"
Cohesion: 0.13
Nodes (14): Completion criterion: a tight loop that goes red, Diagnosing Bugs, Minimise, Non-deterministic bugs, Phase 1: Build a feedback loop, Phase 2: Reproduce + minimise, Phase 3: Hypothesise, Phase 4: Instrument (+6 more)

### Community 67 - "MemberFormFields.tsx"
Cohesion: 0.24
Nodes (14): FieldError(), Props, MemberFormFields(), Props, Props, SocialMediaFormFields(), DateInput(), TextInput() (+6 more)

### Community 68 - "Common Mistakes"
Cohesion: 0.33
Nodes (6): Common Mistakes, [CRITICAL] Adding children to a leaf display object, [CRITICAL] Referencing DisplayObject, [HIGH] Forgetting isRenderGroup on large static subtrees, [HIGH] Treating child.x as world space, [MEDIUM] sortableChildren without zIndex

### Community 69 - "TeamInfoSidebar.tsx"
Cohesion: 0.20
Nodes (16): fetchSession(), SessionInfo, MemberSidebar(), Props, TeamInfoSidebar(), RosterRow(), TeamInfo(), Props (+8 more)

### Community 70 - "protocol.ts"
Cohesion: 0.08
Nodes (37): elkjs, TEAM_FRAME_GAP, TEAM_PACK_ASPECT, failOver(), getWorker(), Pending, requestLayout(), runInline() (+29 more)

### Community 71 - "Core Patterns"
Cohesion: 0.13
Nodes (14): API Reference, boundsArea optimization, Common Mistakes, Core Patterns, Culling, HIGH: Expecting automatic culling, HIGH: Using addChild on RenderLayer, MEDIUM: Expecting filters on ancestors to apply to layer children (+6 more)

### Community 72 - "Core Patterns"
Cohesion: 0.14
Nodes (13): Advanced shape primitives, Core Patterns, Default styles via setFillStyle / setStrokeStyle, Draw-time transforms, Drawing a texture directly, Gradients and patterns, GraphicsContext sharing, GraphicsContext utilities (+5 more)

### Community 73 - "dependencies"
Cohesion: 0.04
Nodes (44): dependencies, cloudinary, compression, cors, dotenv, express, express-rate-limit, helmet (+36 more)

### Community 75 - "src/types/index.ts"
Cohesion: 0.10
Nodes (36): @heroicons/react, tailwind-merge, GLOW, Props, FitViewButton(), Props, Props, ToolbarIconButton() (+28 more)

### Community 78 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, attach / detach, Common Mistakes, Core Patterns, [CRITICAL] Using `addChild` on a RenderLayer, [HIGH] Layer and attached children in different render groups, Layer + logical parent, Manual sort (+5 more)

### Community 79 - "Core Patterns"
Cohesion: 0.14
Nodes (13): Alpha mask (Sprite-based), API Reference, Common Mistakes, Core Patterns, [HIGH] Using cacheAsTexture with masks, Inverse masking, Mask channel selection, Mask type selection (+5 more)

### Community 80 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, Common Mistakes, Construction options, Core Patterns, [HIGH] Nesting many render groups, [MEDIUM] Constantly adding/removing from a render group, [MEDIUM] Overusing render groups, Profile before adding (+5 more)

### Community 83 - "Core Patterns"
Cohesion: 0.15
Nodes (13): Context and device loss, Core Patterns, Destroying a renderer, Direct renderer construction, Lazy-loading backend-specific systems and pipes, Manual rendering, Per-renderer options, Preference forms (+5 more)

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

### Community 88 - "constants/canvas/index.ts"
Cohesion: 0.14
Nodes (16): @gsap/react, pixi-filters, NODE_HOVER_ANIMATION_DURATION, NODE_HOVER_SCALE, ZOOMED_OUT_HOVER_SCALE_MAP, lineageEdgePath, ACCIDENTAL_DRAG_MAX_DISTANCE, ACCIDENTAL_DRAG_MAX_MS (+8 more)

### Community 89 - "Foundations"
Cohesion: 0.14
Nodes (13): Advanced, Foundations, pixijs-accessibility, pixijs-application, pixijs-core-concepts, pixijs-create, pixijs-custom-rendering, pixijs-environments (+5 more)

### Community 90 - "filtersStore.ts"
Cohesion: 0.09
Nodes (19): EMPTY_FILTER_STATE, FOUNDER_JOIN_YEAR, MEMBER_STATUSES, MENTOR_STATUSES, initialFiltersState, AvatarFilterValue, ActivityState, Active (+11 more)

### Community 91 - "pixijs/SKILL.md"
Cohesion: 0.18
Nodes (9): API Reference, Common Mistakes, [HIGH] buttonMode removed; use cursor, [HIGH] Default eventMode is passive, [HIGH] Move events only fire over the object in v8, [MEDIUM] Cursor does not inherit from parent, Quick Start, Fallback: canonical PixiJS docs (+1 more)

### Community 92 - "Core Concepts"
Cohesion: 0.18
Nodes (11): Container vs leaf (CRITICAL), Core Concepts, Culling, Destroy semantics, Lifecycle events, Masking, Render groups, Render order and explicit z-ordering (+3 more)

### Community 94 - "Point"
Cohesion: 0.08
Nodes (44): EdgesLayer(), drawPolyline(), TeamEdgesLayer(), NODE_AVATAR_RADIUS, DEFAULT_NODE_HEIGHT, DEFAULT_NODE_WIDTH, DEFAULT_POSITION, FLOW_VIEWPORT_DIRECTION (+36 more)

### Community 95 - "utils/strings.ts"
Cohesion: 0.15
Nodes (13): FiltersHeader(), Props, ALL_SECTIONS_CLOSED, FiltersPanel(), Props, OPTIONS, Props, ViewModeSwitch() (+5 more)

### Community 102 - "Render Loop"
Cohesion: 0.22
Nodes (8): API Reference, Common Mistakes, [CRITICAL] Treating the ticker callback arg as a number, Frame lifecycle, [HIGH] Using `updateTransform` for per-frame logic, [MEDIUM] Assuming ticker callbacks run after render, Quick Start, Render Loop

### Community 103 - "pixijs-core-concepts/SKILL.md"
Cohesion: 0.22
Nodes (8): API Reference, Decision guide, Environments, Quick concepts, Quick Start, Renderer = systems + pipes, The render loop, Topics

### Community 104 - "Core Patterns"
Cohesion: 0.22
Nodes (9): Add, remove, swap, Child queries, Core Patterns, Destroying sub-trees, Iterating children, Label-based tree navigation, Lifecycle events, Reparenting with transform preservation (+1 more)

### Community 110 - "server/src/types/index.ts"
Cohesion: 0.07
Nodes (30): mongodb, ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember, STATUSES_MAP (+22 more)

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

### Community 113 - "treeStore.ts"
Cohesion: 0.09
Nodes (32): Props, Props, EMPTY_IDS, SharpAvatarTracker(), View, Props, Props, TeamFramesLayer() (+24 more)

### Community 116 - "pixijs-scene-core-concepts/SKILL.md"
Cohesion: 0.25
Nodes (6): API Reference, Leaf comparison: which skill covers which object, Quick Start, References, Tooling, When to use what (quick decisions)

### Community 117 - "Container Hierarchy"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, Container Hierarchy, [CRITICAL] Adding children to a leaf, [HIGH] Destroying the parent without `children: true`, [MEDIUM] Mutating `children` during iteration, Quick Start

### Community 118 - "Common Mistakes"
Cohesion: 0.50
Nodes (4): Common Mistakes, [HIGH] Accessing app.renderer before init() resolves, [HIGH] Setting DOMAdapter after Application.init, [MEDIUM] Treating `preference` as a guarantee

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

## Knowledge Gaps
- **42 isolated node(s):** `@prisma/client`, `dotenv`, `lodash`, `@tailwindcss/postcss`, `@types/lodash` (+37 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 899 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Skill router` connect `Utilities` to `pixijs/SKILL.md`?**
  _High betweenness centrality (0.141) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _42 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `EditMemberForm.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.10105580693815988 - nodes in this community are weakly interconnected._
- **Why does `Point` connect `Point` to `protocol.ts`, `useTreeLayout.ts`, `teamFrame.ts`, `treeStore.ts`, `Utilities`?**
  _High betweenness centrality (0.122) - this node is a cross-community bridge._
- **Should `MemberInfo.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.1476923076923077 - nodes in this community are weakly interconnected._
- **Why does `Utilities` connect `Utilities` to `Point`?**
  _High betweenness centrality (0.111) - this node is a cross-community bridge._
- **Should `auth.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.060455486542443065 - nodes in this community are weakly interconnected._