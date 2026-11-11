# Graph Report - best-family-tree  (2026-11-11)

## Corpus Check
- 475 files · ~162,080 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 28 file(s) not represented in the graph (top: .prisma 9, (none) 6, .css 6)

## Summary
- 2442 nodes · 6197 edges · 127 communities (122 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 63 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `867c0be3`
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
- MemberNodeAvatar.tsx
- PositionFormFields.tsx
- Member
- challenges.ts
- TeamSearch.tsx
- contactKeys.ts
- react
- PhotoViewer.tsx
- sessions.ts
- gsap
- emailRoutes.ts
- filterTeams.ts
- catalogValidation.ts
- models/index.ts
- HTML Report Format
- emailCodes.ts
- Member
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
- memberUpdateValidation.ts
- TeamFilterCategory.tsx
- Direction
- Core Patterns
- devDependencies
- useTeamForm.ts
- Core Patterns
- CLAUDE.md
- useTreeLayout.ts
- mime.ts
- teamBlock.ts
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
- ApplicationOptions reference
- Utilities
- types.ts
- AvatarFileInput.tsx
- BEST Family Tree
- Diagnosing Bugs
- membersStore.ts
- Common Mistakes
- TeamInfoSidebar.tsx
- protocol.ts
- Core Patterns
- Core Patterns
- dependencies
- clientInstance.ts
- src/types/index.ts
- SettingsPanel.tsx
- edgeGeometry.ts
- Core Patterns
- Core Patterns
- Core Patterns
- teamPacking.ts
- FitViewButton.tsx
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
- pixijs/SKILL.md
- TeamEdgesLayer.tsx
- utils/strings.ts
- start-prod.sh
- constants/theme.ts
- ref_vitest
- settingsStore.ts
- useCanvasTheme.ts
- ThemeContext.tsx
- Render Loop
- pixijs-core-concepts/SKILL.md
- Core Patterns
- TeamFormContent.tsx
- LineageMemberSearch.tsx
- signInCodeEmail.ts
- settings.ts
- useMeta.ts
- server/src/types/index.ts
- mailer/index.ts
- Renderers: WebGPU, WebGL, and Canvas
- treeStore.ts
- useTreeDirection.ts
- ui/index.ts
- pixijs-scene-core-concepts/SKILL.md
- Container Hierarchy
- Common Mistakes
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

## Communities (127 total, 5 thin omitted)

### Community 0 - "EditMemberForm.tsx"
Cohesion: 0.30
Nodes (15): AddMemberForm(), buildMemberFormData(), describeSubmitError(), EditMemberForm(), getInitialFormData(), MemberFormFields(), PositionFormFields(), FormError() (+7 more)

### Community 1 - "MemberNodeAvatar.tsx"
Cohesion: 0.11
Nodes (17): @pixi/react, PixiElements, @gsap/react, pixi-viewport, MembersTree(), Props, CloudinaryTransformations, getIconUrlAsRounded() (+9 more)

### Community 2 - "MemberInfoSocial.tsx"
Cohesion: 0.20
Nodes (12): FacebookIcon(), InstagramIcon(), LinkedinIcon(), TelegramIcon(), FieldError(), Props, Props, Props (+4 more)

### Community 3 - "MemberFilterCategory.tsx"
Cohesion: 0.21
Nodes (17): MemberFilterCategory(), ACTIVITY_OPTIONS, ACTIVITY_STATES, AVATAR_OPTIONS, AVATAR_VALUES, JOIN_SEASONS, MEMBER_STATUSES, SEASON_OPTIONS (+9 more)

### Community 4 - "auth.ts"
Cohesion: 0.07
Nodes (50): AccessLevel, AuthMethod, Challenge, ChallengeQuestion, logout(), post(), RequestCodeOutcome, requestEmailCode() (+42 more)

### Community 5 - "MemberInfo.tsx"
Cohesion: 0.09
Nodes (35): cache, loadImageAspect(), PhotoOpenButton(), MemberAvatarImage(), MemberAvatarImageInner(), Props, MemberInfo(), Props (+27 more)

### Community 6 - "constants/canvas/index.ts"
Cohesion: 0.07
Nodes (42): pixi.js, BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props, acquireEmojiTextures(), createEmojiTexture(), generateRandomPosition() (+34 more)

### Community 7 - "MemberNodeAvatar.tsx"
Cohesion: 0.10
Nodes (22): MemberNodeAvatar(), Props, AVATAR_HIGH_RES_SIZE, AVATAR_LOW_RES_SIZE, GRID_GAP_X, GRID_LR_COLUMNS, MAX_RENDER_RESOLUTION, NODE_AVATAR_SIZE (+14 more)

### Community 8 - "PositionFormFields.tsx"
Cohesion: 0.14
Nodes (26): PositionAssignmentFields(), Props, Props, createEmptyPositionRow(), EMPTY_POSITION_ROW, findTeamByName(), getPositionRowSummary(), getRoleOptions() (+18 more)

### Community 9 - "Member"
Cohesion: 0.12
Nodes (20): fetchFamilyTree(), Home(), loadTree(), Props, isTreeReady(), MembersTree, MembersTreeDynamic(), Props (+12 more)

### Community 10 - "challenges.ts"
Cohesion: 0.11
Nodes (25): answerMatches(), CYRILLIC_TO_LATIN, normalizeAnswer(), ChallengeState, isExpired(), isSolved(), pickRandom(), swapQuestion() (+17 more)

### Community 11 - "TeamSearch.tsx"
Cohesion: 0.13
Nodes (20): compare(), getSearchable(), MemberSearch(), Props, Props, SearchPanel(), Props, SearchSuggestionItem() (+12 more)

### Community 12 - "contactKeys.ts"
Cohesion: 0.22
Nodes (10): duplicates, fields, groups, ContactFields, contactKey(), ContactPlatform, FIELD_PLATFORMS, findContactCollision() (+2 more)

### Community 13 - "react"
Cohesion: 0.14
Nodes (14): react, Props, Props, Props, Sidebar(), SidebarFooterContext, Props, SidebarHandle() (+6 more)

### Community 14 - "PhotoViewer.tsx"
Cohesion: 0.15
Nodes (26): Props, PhotoViewer(), Viewer(), viewportRect(), clampAxis(), clampOffset(), clampScale(), coverMorph (+18 more)

### Community 15 - "sessions.ts"
Cohesion: 0.11
Nodes (28): compression, cors, express, helmet, isDemoMode(), SESSION_COOKIE, useSecureCookie(), clearSessionCookie() (+20 more)

### Community 16 - "gsap"
Cohesion: 0.20
Nodes (14): gsap, pixi-filters, NODE_HOVER_ANIMATION_DURATION, NODE_HOVER_SCALE, ZOOMED_OUT_HOVER_SCALE_MAP, useFitViewAnimation(), useFocusFrameAnimation(), useFocusNodeAnimation() (+6 more)

### Community 17 - "emailRoutes.ts"
Cohesion: 0.19
Nodes (15): EligibilityMember, EmailIdentity, normalizeEmail(), resolveEmailIdentity(), loadEmailIdentity(), prismaCodeStore, getMailer(), bodyEmail() (+7 more)

### Community 18 - "filterTeams.ts"
Cohesion: 0.33
Nodes (10): isFilterActive(), getTeamSpan(), hasRole(), hasTeamCriteria(), isTeamFilterActive(), matchesPeriod(), memberMatchesTeamFilters(), positionMatchesTeamFilters() (+2 more)

### Community 19 - "catalogValidation.ts"
Cohesion: 0.08
Nodes (31): Renderer selection at runtime, [MEDIUM] Using container.name instead of container.label, deleteCloudinaryImage(), extractCloudinaryPublicId(), parsePositionsPayload(), router, rejectUpload(), router (+23 more)

### Community 20 - "models/index.ts"
Cohesion: 0.36
Nodes (4): NodesLayer(), Props, parseTeamNodeId(), getMemberTeamRoles()

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "emailCodes.ts"
Cohesion: 0.22
Nodes (10): CODE_TTL_MS, CodeStore, generateCode(), hashCode(), issueCode(), MAX_CODE_ATTEMPTS, sameHash(), StoredCode (+2 more)

### Community 23 - "Member"
Cohesion: 0.10
Nodes (32): Props, Props, DEFAULT_NODE_HEIGHT, DEFAULT_NODE_WIDTH, DEFAULT_POSITION, Member, derive(), MembersState (+24 more)

### Community 24 - "teamService.ts"
Cohesion: 0.14
Nodes (28): ResolvedPosition, resolvePosition(), MemberTransaction, deriveTeamName(), resolveRole(), resolveTeam(), resolveTeamType(), RoleRef (+20 more)

### Community 25 - "filterSearchParams.ts"
Cohesion: 0.13
Nodes (19): Props, AvatarFilterValue, ActivityState, Active, Excluded, Inactive, MemberMetrics, MembersByMentorId (+11 more)

### Community 26 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, esModuleInterop, forceConsistentCasingInFileNames, module, moduleResolution, noImplicitAny, outDir, paths (+12 more)

### Community 27 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+12 more)

### Community 28 - "teamFrame.ts"
Cohesion: 0.08
Nodes (48): MemberNodeCard(), Props, TeamBadge(), FILL_ALPHA, lerp(), Props, STROKE_ALPHA, TeamFrame() (+40 more)

### Community 29 - "BadgeInput.tsx"
Cohesion: 0.33
Nodes (8): DropdownMenu(), BadgeInput(), BadgeInputField(), useBadgeInputState(), ComboboxInput(), ComboboxInputField(), useComboboxState(), useDropdownPosition()

### Community 30 - "dependencies"
Cohesion: 0.11
Nodes (19): dependencies, date-fns, dotenv, elkjs, gsap, @gsap/react, @heroicons/react, lodash (+11 more)

### Community 31 - "server/package.json"
Cohesion: 0.07
Nodes (27): cloudinary, concurrently, express-rate-limit, multer, multer-storage-cloudinary, nodemon, ts-node, tsx (+19 more)

### Community 32 - "clientInstance.ts"
Cohesion: 0.12
Nodes (20): CONTACT_FIELDS, toMemberResponse(), loadFamilyTree, loadReducedFamilyTree, router, parsePhoneNumbers(), MEMBER_INCLUDE, serializeMember() (+12 more)

### Community 33 - "memberService.ts"
Cohesion: 0.18
Nodes (20): buildMemberFields(), buildMemberUpdateFields(), buildSharedFields(), buildSparseMemberFields(), getPositionKey(), syncPositions(), assertCanEditMember(), assertCanEditMembers() (+12 more)

### Community 34 - "FilterState"
Cohesion: 0.12
Nodes (27): BirthdayFilterSection(), Props, CheckboxGroupFilterSection(), Option, Props, ClearButton(), FilterCheckbox(), Props (+19 more)

### Community 35 - "MembersTreeContent.tsx"
Cohesion: 0.14
Nodes (19): @pixi/react, EMPTY_IDS, SharpAvatarTracker(), View, Props, Viewport(), ACCENT_COLOR_MAP, EVENT_FEATURES (+11 more)

### Community 36 - "package.json"
Cohesion: 0.11
Nodes (18): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+10 more)

### Community 37 - "memberUpdateValidation.ts"
Cohesion: 0.14
Nodes (13): zod, ExistingMember, findClearedFields(), memberUpdateBodySchema, parsePhones(), sparseMemberBodySchema, splitName(), completeMember (+5 more)

### Community 38 - "TeamFilterCategory.tsx"
Cohesion: 0.16
Nodes (15): FilterCategory(), LION_GROUP_ICON, LION_ICON, Props, FilterGroupProps, ALL_SECTIONS_CLOSED, Props, RoleFilterSection() (+7 more)

### Community 39 - "Direction"
Cohesion: 0.11
Nodes (34): Props, LineageEdge(), Props, Props, DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN (+26 more)

### Community 40 - "Core Patterns"
Cohesion: 0.06
Nodes (38): Adding and removing children, API Reference, Bounds and coordinate conversion, Common Mistakes, Constructor options, Container events, Core Patterns, [CRITICAL] Adding children to leaf scene objects (+30 more)

### Community 41 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+5 more)

### Community 42 - "useTeamForm.ts"
Cohesion: 0.25
Nodes (16): createTeam(), deleteTeam(), fetchTeamDetails(), parse(), setTeamMembers(), TeamMemberPayload, updateTeam(), buildTeamRequestBody() (+8 more)

### Community 43 - "Core Patterns"
Cohesion: 0.12
Nodes (15): API Reference, Application properties, Common Mistakes, Core Patterns, [CRITICAL] Passing options to the constructor, CullerPlugin (opt-in), Custom Application plugins, [HIGH] Using app.view instead of app.canvas (+7 more)

### Community 44 - "CLAUDE.md"
Cohesion: 0.29
Nodes (6): Commands, Conventions, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout

### Community 45 - "useTreeLayout.ts"
Cohesion: 0.15
Nodes (18): getFitViewTargetScale(), useSceneTransition(), useTreeLayout(), getNodePositions(), useTreeStore, Position, Bottom, Left (+10 more)

### Community 46 - "mime.ts"
Cohesion: 0.29
Nodes (11): RFC-2045, RFC-2047, createGmailMailer(), GmailConfig, base64Body(), buildMime(), encodeHeaderText(), formatAddress() (+3 more)

### Community 47 - "teamBlock.ts"
Cohesion: 0.18
Nodes (16): TEAM_COLUMN_GAP, TEAM_FRAME_HEADER, TEAM_FRAME_MIN_WIDTH, TEAM_FRAME_PADDING, TEAM_LAYOUT_COLUMNS, TEAM_LEADER_GAP, TEAM_MULTI_LEADER_EXTRA_GAP, TEAM_ROW_GAP (+8 more)

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "ManageForm.tsx"
Cohesion: 0.17
Nodes (19): DropdownSelectInput(), ManageForm(), MemberMode, Section, SECTIONS, TEAM_KINDS, TeamKind, MemberEditPanel() (+11 more)

### Community 50 - "http"
Cohesion: 0.19
Nodes (18): addMember(), ApiError, toApiError(), deleteMember(), editMember(), fetchMemberById(), fetchMentorsList(), createRole() (+10 more)

### Community 51 - "AGENTS.md"
Cohesion: 0.29
Nodes (6): Commands, Conventions, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout

### Community 52 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, dev, dev:webpack, lint, start, test, typecheck

### Community 53 - "layout.tsx"
Cohesion: 0.20
Nodes (5): react-datepicker, metadata, nunito, RootLayout(), AuroraBackground()

### Community 54 - "BEST Family Tree"
Cohesion: 0.33
Nodes (5): BEST Family Tree, People, Sign-in, Teams, Views

### Community 57 - "Common Mistakes"
Cohesion: 0.20
Nodes (10): Common Mistakes, [CRITICAL] App destroy without releaseGlobalResources, [HIGH] Destroying and recreating objects instead of recycling, [HIGH] Interleaving object types in scene graph, [HIGH] Loading many individual textures instead of spritesheets, [HIGH] Updating Text or HTMLText every frame, [HIGH] Using complex Graphics instead of textures, [MEDIUM] Not staggering bulk texture destruction (+2 more)

### Community 58 - "importAllowedEmails.ts"
Cohesion: 0.17
Nodes (12): AllowedRow, AllowlistDiff, diffAllowlist(), looksLikeEmail(), parseAllowlistCsv(), ParsedAllowlist, splitLine(), apply (+4 more)

### Community 59 - "Core Patterns"
Cohesion: 0.12
Nodes (17): Application destroy/recreate cycle, Batching optimization, cacheAsTexture for performance, Core Patterns, Culling, Filters and masks cost, Graphics performance, Low-level rendering optimizations (+9 more)

### Community 60 - "Scene Objects"
Cohesion: 0.18
Nodes (10): pixijs-html-source, pixijs-scene-container, pixijs-scene-dom-container, pixijs-scene-gif, pixijs-scene-mesh, pixijs-scene-particle-container, pixijs-scene-sprite, pixijs-scene-text (+2 more)

### Community 61 - "ApplicationOptions reference"
Cohesion: 0.12
Nodes (17): Accessibility, ApplicationOptions reference, Background, Culler (CullerPluginOptions), Deprecated (GC — prefer the unified options above), Events, Garbage collection, Graphics (+9 more)

### Community 62 - "Utilities"
Cohesion: 0.13
Nodes (15): Advanced, pixijs-accessibility, pixijs-assets, pixijs-blend-modes, pixijs-color, pixijs-custom-rendering, pixijs-events, pixijs-filters (+7 more)

### Community 63 - "types.ts"
Cohesion: 0.17
Nodes (12): canEditMember(), hasAccess(), RANK, member(), buildSessionInfo(), AccessRank, Express, Request (+4 more)

### Community 64 - "AvatarFileInput.tsx"
Cohesion: 0.19
Nodes (10): next, LionIcon(), Props, AvatarFileInput(), Props, Props, config, exceedsUploadLimit() (+2 more)

### Community 65 - "BEST Family Tree"
Cohesion: 0.12
Nodes (15): 1. Clone and configure environment, 2. Start the application, 3. Run database migrations, 4. Access the app, Architecture, Available Commands, Backend Commands (run inside container), BEST Family Tree (+7 more)

### Community 66 - "Diagnosing Bugs"
Cohesion: 0.13
Nodes (14): Completion criterion: a tight loop that goes red, Diagnosing Bugs, Minimise, Non-deterministic bugs, Phase 1: Build a feedback loop, Phase 2: Reproduce + minimise, Phase 3: Hypothesise, Phase 4: Instrument (+6 more)

### Community 67 - "membersStore.ts"
Cohesion: 0.21
Nodes (14): membersActions, {
  setMembers,
  reloadMembers,
  addMember,
  updateMember,
  selectMember,
  getMentorsList,
}, useMembersActions(), useMembersMap(), useMentees(), useSelectedId(), useSelectedMember(), useSyncMembers() (+6 more)

### Community 68 - "Common Mistakes"
Cohesion: 0.33
Nodes (6): Common Mistakes, [CRITICAL] Adding children to a leaf display object, [CRITICAL] Referencing DisplayObject, [HIGH] Forgetting isRenderGroup on large static subtrees, [HIGH] Treating child.x as world space, [MEDIUM] sortableChildren without zIndex

### Community 69 - "TeamInfoSidebar.tsx"
Cohesion: 0.15
Nodes (23): zustand, fetchSession(), SessionInfo, MemberSidebar(), Props, Props, TeamInfoSidebar(), FiltersPanel() (+15 more)

### Community 70 - "protocol.ts"
Cohesion: 0.11
Nodes (30): elkjs, failOver(), getWorker(), Pending, requestLayout(), runInline(), Point, SegmentMorph (+22 more)

### Community 71 - "Core Patterns"
Cohesion: 0.13
Nodes (14): API Reference, boundsArea optimization, Common Mistakes, Core Patterns, Culling, HIGH: Expecting automatic culling, HIGH: Using addChild on RenderLayer, MEDIUM: Expecting filters on ancestors to apply to layer children (+6 more)

### Community 72 - "Core Patterns"
Cohesion: 0.14
Nodes (13): Advanced shape primitives, Core Patterns, Default styles via setFillStyle / setStrokeStyle, Draw-time transforms, Drawing a texture directly, Gradients and patterns, GraphicsContext sharing, GraphicsContext utilities (+5 more)

### Community 73 - "dependencies"
Cohesion: 0.05
Nodes (42): dependencies, cloudinary, compression, cors, dotenv, express, express-rate-limit, helmet (+34 more)

### Community 74 - "clientInstance.ts"
Cohesion: 0.15
Nodes (10): @prisma/adapter-pg, @prisma/config, deleteQuestionSessions(), adapter, prisma, level, [ref, levelArg], active (+2 more)

### Community 75 - "src/types/index.ts"
Cohesion: 0.11
Nodes (35): @heroicons/react, tailwind-merge, GLOW, Props, Props, Props, Props, Props (+27 more)

### Community 76 - "SettingsPanel.tsx"
Cohesion: 0.16
Nodes (11): OPTIONS, Props, ViewModeSwitch(), EDGE_STYLE_OPTIONS, ORIENTATION_OPTIONS, Props, Section(), SectionProps (+3 more)

### Community 77 - "edgeGeometry.ts"
Cohesion: 0.24
Nodes (11): EdgesLayer(), NODE_HEIGHT, NODE_WIDTH, FLOW_VIEWPORT_DIRECTION, bezierEval(), edgeGeometry, endpoints(), sampleBezierCurve() (+3 more)

### Community 78 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, attach / detach, Common Mistakes, Core Patterns, [CRITICAL] Using `addChild` on a RenderLayer, [HIGH] Layer and attached children in different render groups, Layer + logical parent, Manual sort (+5 more)

### Community 79 - "Core Patterns"
Cohesion: 0.14
Nodes (13): Alpha mask (Sprite-based), API Reference, Common Mistakes, Core Patterns, [HIGH] Using cacheAsTexture with masks, Inverse masking, Mask channel selection, Mask type selection (+5 more)

### Community 80 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, Common Mistakes, Construction options, Core Patterns, [HIGH] Nesting many render groups, [MEDIUM] Constantly adding/removing from a render group, [MEDIUM] Overusing render groups, Profile before adding (+5 more)

### Community 81 - "teamPacking.ts"
Cohesion: 0.26
Nodes (9): TEAM_FRAME_GAP, TEAM_PACK_ASPECT, computeDirectedPacking(), computePacking(), packLanes(), Placement, scorePacking(), shelfPack() (+1 more)

### Community 82 - "FitViewButton.tsx"
Cohesion: 0.35
Nodes (7): FitViewButton(), Props, Props, ToolbarIconButton(), Props, ToolbarTooltip(), useHoverTooltip()

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
Cohesion: 0.10
Nodes (20): pixijs-scene-graphics, Paths and complex shapes, FIXED_EDGE_WIDTH, lineageEdgePath, ACCIDENTAL_DRAG_MAX_DISTANCE, ACCIDENTAL_DRAG_MAX_MS, TAP_MOVE_TOLERANCE, TEAM_EDGE_DROP (+12 more)

### Community 89 - "Foundations"
Cohesion: 0.29
Nodes (7): Foundations, pixijs-application, pixijs-core-concepts, pixijs-create, pixijs-environments, pixijs-migration-v8, pixijs-scene-core-concepts

### Community 90 - "filtersStore.ts"
Cohesion: 0.09
Nodes (18): date-fns, EMPTY_FILTER_STATE, FOUNDER_JOIN_YEAR, MEMBER_STATUSES, MENTOR_STATUSES, FiltersActions, FiltersState, initialState (+10 more)

### Community 91 - "pixijs/SKILL.md"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] buttonMode removed; use cursor, [HIGH] Default eventMode is passive, [HIGH] Move events only fire over the object in v8, [MEDIUM] Cursor does not inherit from parent, Quick Start

### Community 92 - "Core Concepts"
Cohesion: 0.18
Nodes (11): Container vs leaf (CRITICAL), Core Concepts, Culling, Destroy semantics, Lifecycle events, Masking, Render groups, Render order and explicit z-ordering (+3 more)

### Community 93 - "pixijs/SKILL.md"
Cohesion: 0.20
Nodes (8): API Reference, Quick Start, Fallback: canonical PixiJS docs, Foundations, How to use this skill, Scene Objects, Skill router, Utilities

### Community 94 - "TeamEdgesLayer.tsx"
Cohesion: 0.18
Nodes (19): drawPolyline(), TeamEdgesLayer(), alignPolylines(), cumulativeLengths(), dist(), lerpPoints(), pointAtLength(), quadEval() (+11 more)

### Community 95 - "utils/strings.ts"
Cohesion: 0.29
Nodes (7): FiltersHeader(), Props, formatCount(), PARTICIPANT_FORMS, PluralForms, pluralizeUk(), TEAM_FORMS

### Community 97 - "constants/theme.ts"
Cohesion: 0.22
Nodes (7): darkTheme, DEFAULT_THEME, lightTheme, THEMES, ThemeDefinition, themeCssMap, themeInitScript

### Community 98 - "ref_vitest"
Cohesion: 0.24
Nodes (4): assertConfig(), configProblems(), Env, good

### Community 99 - "settingsStore.ts"
Cohesion: 0.33
Nodes (8): DEFAULT_SETTINGS, SETTINGS_STORAGE_KEY, SettingsActions, SettingsState, initialState, { storageMock }, OrientationSetting, ThemePreference

### Community 100 - "useCanvasTheme.ts"
Cohesion: 0.28
Nodes (7): FONT_FAMILY, NODE_SUBTITLE_STYLE, NODE_TITLE_STYLE, NODE_TOOLTIP_TEXT_STYLE, TEXT_RESOLUTION, buildCanvasColors(), CanvasTextStyles

### Community 101 - "ThemeContext.tsx"
Cohesion: 0.39
Nodes (6): applyCssTokens(), ThemeContext, ThemeProvider(), noopSubscribe(), useIsHydrated(), camelToCssVar()

### Community 102 - "Render Loop"
Cohesion: 0.22
Nodes (8): API Reference, Common Mistakes, [CRITICAL] Treating the ticker callback arg as a number, Frame lifecycle, [HIGH] Using `updateTransform` for per-frame logic, [MEDIUM] Assuming ticker callbacks run after render, Quick Start, Render Loop

### Community 103 - "pixijs-core-concepts/SKILL.md"
Cohesion: 0.22
Nodes (8): API Reference, Decision guide, Environments, Quick concepts, Quick Start, Renderer = systems + pipes, The render loop, Topics

### Community 104 - "Core Patterns"
Cohesion: 0.22
Nodes (9): Add, remove, swap, Child queries, Core Patterns, Destroying sub-trees, Iterating children, Label-based tree navigation, Lifecycle events, Reparenting with transform preservation (+1 more)

### Community 105 - "TeamFormContent.tsx"
Cohesion: 0.15
Nodes (22): ClearButton(), ConfirmDeleteControl(), Props, FormFooter(), FormMessages(), Props, FormCheckbox(), Props (+14 more)

### Community 106 - "LineageMemberSearch.tsx"
Cohesion: 0.38
Nodes (5): react-dom, DropdownPortal(), Props, LineageMemberSearch(), Props

### Community 107 - "signInCodeEmail.ts"
Cohesion: 0.39
Nodes (4): escapeHtml(), pairs(), renderSignInCodeEmail(), { html }

### Community 108 - "settings.ts"
Cohesion: 0.38
Nodes (5): ThemeContextValue, CanvasColors, CanvasThemeTokens, CssThemeTokens, ThemeId

### Community 109 - "useMeta.ts"
Cohesion: 0.29
Nodes (5): EMPTY, rolesStore, teamsStore, teamTypesStore, Role

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
Cohesion: 0.11
Nodes (20): Props, TeamFramesLayer(), MembersTreeScene(), Props, Props, Props, Props, TEAM_OVERVIEW_EDGE_ALPHA (+12 more)

### Community 114 - "useTreeDirection.ts"
Cohesion: 0.48
Nodes (5): useIsMobileScreen(), useResolvedDirection(), useMediaQuery(), readLegacyTheme(), useSettingsStore

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

### Community 147 - "memberFormValidation.ts"
Cohesion: 0.17
Nodes (15): CheckedField, getStoredFieldValues(), Links, StoredMemberValues, complete, mentors, sparse, toTime() (+7 more)

## Knowledge Gaps
- **42 isolated node(s):** `@prisma/client`, `dotenv`, `lodash`, `@tailwindcss/postcss`, `@types/lodash` (+37 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 878 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Skill router` connect `pixijs/SKILL.md` to `Utilities`?**
  _High betweenness centrality (0.134) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _42 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `MemberNodeAvatar.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.10869565217391304 - nodes in this community are weakly interconnected._
- **Why does `Point` connect `protocol.ts` to `Direction`, `edgeGeometry.ts`, `useTreeLayout.ts`, `teamBlock.ts`, `treeStore.ts`, `Utilities`, `constants/canvas/index.ts`, `pixijs/SKILL.md`, `TeamEdgesLayer.tsx`?**
  _High betweenness centrality (0.112) - this node is a cross-community bridge._
- **Should `auth.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.06874717322478517 - nodes in this community are weakly interconnected._
- **Why does `Utilities` connect `pixijs/SKILL.md` to `protocol.ts`?**
  _High betweenness centrality (0.107) - this node is a cross-community bridge._
- **Should `MemberInfo.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.08865248226950355 - nodes in this community are weakly interconnected._