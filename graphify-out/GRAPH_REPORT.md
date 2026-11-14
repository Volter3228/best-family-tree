# Graph Report - best-family-tree  (2026-11-14)

## Corpus Check
- 515 files · ~172,562 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 29 file(s) not represented in the graph (top: .prisma 9, (none) 7, .css 6)

## Summary
- 2603 nodes · 6576 edges · 124 communities (118 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 68 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `bf48a4d2`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- TeamFormContent.tsx
- src/types/index.ts
- Toolbar.tsx
- TeamTypeFilterSection.tsx
- memberService.ts
- src/index.ts
- useCardAnimation.ts
- emailRoutes.ts
- PositionFormFields.tsx
- ApplicationOptions reference
- challenges.ts
- TeamSearch.tsx
- anonymizeDemo.ts
- react
- photoViewerMath.ts
- useDashedPathAnimation.ts
- oidc.ts
- teamFrame.ts
- MembersTreeScene.tsx
- catalogValidation.ts
- memberRoutes.ts
- HTML Report Format
- dimensions.ts
- SettingsPanel.tsx
- teamService.ts
- eligibility.ts
- compilerOptions
- compilerOptions
- TeamFrame
- membersStore.ts
- dependencies
- server/package.json
- MemberInfoSocial.tsx
- FilterState
- src/utils/index.ts
- Skill router
- package.json
- seedQuestions.ts
- MembersTree.tsx
- utils/membersTree/index.ts
- Core Patterns
- devDependencies
- MembersTreeContent.tsx
- importAllowedEmails.ts
- CLAUDE.md
- Core Patterns
- emailRoutes.ts
- Member
- During the session
- ManageForm.tsx
- http
- AGENTS.md
- scripts
- emailCodes.ts
- BEST Family Tree
- next.config.mjs
- postcss.config.mjs
- MemberInfo.tsx
- pixijs/SKILL.md
- Core Patterns
- Scene Objects
- ref_vitest
- TeamLogo.tsx
- AvatarFileInput.tsx
- membersIndex.ts
- BEST Family Tree
- Diagnosing Bugs
- EditMemberForm.tsx
- ThemeContext.tsx
- MembersTreeDynamic.tsx
- teamLayout.ts
- Core Patterns
- Core Patterns
- dependencies
- useTreeLayout.ts
- MemberFilterCategory.tsx
- models/index.ts
- MemberNode.tsx
- Core Patterns
- Core Patterns
- Core Patterns
- FiltersPanel.tsx
- treeStore.ts
- Core Patterns
- Constructor options (Container-inherited)
- Test-Driven Development
- GSAP Core
- Core Patterns
- telegramEligibility.ts
- Foundations
- memberPresentation.ts
- Common Mistakes
- Core Concepts
- DropdownOption
- auth/types.ts
- backup-prod.sh
- start-prod.sh
- restore-local.sh
- PhotoViewer.tsx
- checkConfig.ts
- Core Patterns
- filterMembers.ts
- Render Loop
- pixijs-core-concepts/SKILL.md
- filterSearchParams.ts
- constants/filters.ts
- Transforms and Coordinate Spaces
- readCache.ts
- Toolbar.tsx
- constants/canvas/index.ts
- server/src/types/index.ts
- Renderers: WebGPU, WebGL, and Canvas
- pixijs/SKILL.md
- Position
- Common Mistakes
- pixijs-scene-core-concepts/SKILL.md
- aiFaces.ts
- GSAP with React
- hitl-loop.template.sh
- Core Patterns
- GSAP Performance
- GSAP Timeline
- Common Mistakes

## God Nodes (most connected - your core abstractions)
1. `react` - 117 edges
2. `AccentColor` - 116 edges
3. `tailwind-merge` - 59 edges
4. `Member` - 58 edges
5. `COLOR_CLASSES` - 40 edges
6. `TeamFrame` - 40 edges
7. `pixi.js` - 33 edges
8. `FilterState` - 31 edges
9. `http()` - 29 edges
10. `useTreeStore` - 29 edges

## Surprising Connections (you probably didn't know these)
- `pixijs-scene-container` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs/references/index.md → src/hooks/membersTree/animations/useFitViewAnimation.ts
- `[HIGH] Expecting getBounds() to return a Rectangle` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs-scene-container/SKILL.md → src/hooks/membersTree/animations/useFitViewAnimation.ts
- `Bounds in different spaces` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs-scene-core-concepts/references/transforms.md → src/hooks/membersTree/animations/useFitViewAnimation.ts
- `pixijs-math` --references--> `Point`  [INFERRED]
  .agents/skills/pixijs/references/index.md → src/types/tree.ts
- `Utilities` --references--> `Point`  [INFERRED]
  .agents/skills/pixijs/SKILL.md → src/types/tree.ts

## Import Cycles
- 3-file cycle: `src/utils/index.ts -> src/utils/membersTree/index.ts -> src/utils/membersTree/lineageEdgePath.ts -> src/utils/index.ts`
- 4-file cycle: `src/context/ThemeContext.tsx -> src/hooks/index.ts -> src/hooks/membersTree/index.ts -> src/hooks/membersTree/useCanvasTheme.ts -> src/context/ThemeContext.tsx`
- 4-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/members.ts -> src/models/index.ts -> src/models/Member.ts`
- 4-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/tree.ts -> src/models/index.ts -> src/models/Member.ts`
- 5-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/filters.ts -> src/types/members.ts -> src/models/index.ts -> src/models/Member.ts`

## Communities (124 total, 6 thin omitted)

### Community 0 - "TeamFormContent.tsx"
Cohesion: 0.16
Nodes (21): ConfirmDeleteControl(), Props, getRoleOptions(), getTeamTypeOptions(), FormMessages(), FormCheckbox(), Props, LogoFileInput() (+13 more)

### Community 1 - "src/types/index.ts"
Cohesion: 0.10
Nodes (37): @heroicons/react, tailwind-merge, GLOW, Props, FitViewButton(), Props, Props, ToolbarIconButton() (+29 more)

### Community 2 - "Toolbar.tsx"
Cohesion: 0.20
Nodes (14): DemoBadge(), FiltersPanel(), compare(), getSearchable(), MemberSearch(), Props, Props, SearchBar() (+6 more)

### Community 3 - "TeamTypeFilterSection.tsx"
Cohesion: 0.22
Nodes (12): CheckboxGroupFilterSection(), Option, Props, FilterCheckbox(), Props, FilterSection(), Props, RoleFilterSection() (+4 more)

### Community 4 - "memberService.ts"
Cohesion: 0.09
Nodes (32): zod, buildMemberFields(), buildMemberUpdateFields(), buildSharedFields(), buildSparseMemberFields(), parsePhoneNumbers(), parsePositionsPayload(), getPositionKey() (+24 more)

### Community 5 - "src/index.ts"
Cohesion: 0.09
Nodes (31): compression, cors, express, helmet, multer, multer-storage-cloudinary, adapter, prisma (+23 more)

### Community 6 - "useCardAnimation.ts"
Cohesion: 0.18
Nodes (17): clamp01(), easeBackOut, easePower2In, easePower2Out, entries, Entry, finishCardReveal(), registerCardReveal() (+9 more)

### Community 7 - "emailRoutes.ts"
Cohesion: 0.15
Nodes (20): CHALLENGE_TTL_MS, isProduction(), QUESTIONS_SHOWN, SESSION_COOKIE, SESSION_TTL_MS, SIGN_IN_COOKIE, useSecureCookie(), clearSessionCookie() (+12 more)

### Community 8 - "PositionFormFields.tsx"
Cohesion: 0.14
Nodes (24): PositionAssignmentFields(), Props, Props, createEmptyPositionRow(), EMPTY_POSITION_ROW, findTeamByName(), getPositionRowSummary(), getRowPeriod() (+16 more)

### Community 9 - "ApplicationOptions reference"
Cohesion: 0.06
Nodes (32): Accessibility, ApplicationOptions reference, Background, Culler (CullerPluginOptions), Deprecated (GC — prefer the unified options above), Events, Garbage collection, Graphics (+24 more)

### Community 10 - "challenges.ts"
Cohesion: 0.13
Nodes (21): ChallengeState, isExpired(), isSolved(), pickRandom(), swapQuestion(), SwapResult, base, ChallengeView (+13 more)

### Community 11 - "TeamSearch.tsx"
Cohesion: 0.13
Nodes (19): FiltersHeader(), Props, Props, SearchPanel(), compare(), getSearchable(), getSubtitle(), Props (+11 more)

### Community 12 - "anonymizeDemo.ts"
Cohesion: 0.06
Nodes (36): @faker-js/faker, allowed, args, byId, factory, GROUP_NAMES, memberPhotos, nextFace (+28 more)

### Community 13 - "react"
Cohesion: 0.09
Nodes (19): react, PositionBadge(), Props, Props, Sidebar(), SidebarFooterContext, Props, SidebarHandle() (+11 more)

### Community 14 - "photoViewerMath.ts"
Cohesion: 0.21
Nodes (18): clampAxis(), clampOffset(), clampScale(), fitRect(), FULL_CLIP, MAX_SCALE, MIN_SCALE, Rect (+10 more)

### Community 15 - "useDashedPathAnimation.ts"
Cohesion: 0.17
Nodes (18): LineageEdge(), DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN, MIN_ANIM_DURATION, PATTERN_LEN, RETRACT_BASE (+10 more)

### Community 16 - "oidc.ts"
Cohesion: 0.13
Nodes (24): Container events, Transform, Lifecycle events, Origin (new in v8), express-rate-limit, openid-client, configs, cookieOptions() (+16 more)

### Community 17 - "teamFrame.ts"
Cohesion: 0.09
Nodes (32): MemberNodeCard(), NODE_CARD_RADIUS, NODE_CARD_TOP, TEAM_COLUMN_GAP, TEAM_EDGE_SPREAD_WIDTH, TEAM_EDGE_STUB, TEAM_FRAME_HEADER, TEAM_FRAME_MIN_WIDTH (+24 more)

### Community 18 - "MembersTreeScene.tsx"
Cohesion: 0.14
Nodes (18): Props, Props, Props, MembersTreeScene(), Props, FIXED_EDGE_WIDTH, TEAM_OVERVIEW_EDGE_ALPHA, TEAM_OVERVIEW_NODE_ALPHA (+10 more)

### Community 19 - "catalogValidation.ts"
Cohesion: 0.11
Nodes (21): Renderer selection at runtime, [MEDIUM] Using container.name instead of container.label, booleanLike, isValidPeriod(), name(), optional(), optionalName(), PERIOD_ERROR (+13 more)

### Community 20 - "memberRoutes.ts"
Cohesion: 0.18
Nodes (15): toMemberResponse(), loadFamilyTree, loadReducedFamilyTree, router, MEMBER_INCLUDE, serializeMember(), assertCanEditMember(), uploadMemberPhoto (+7 more)

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "dimensions.ts"
Cohesion: 0.08
Nodes (30): @pixi/react, PixiElements, @pixi/react, pixi-viewport, EMPTY_IDS, SharpAvatarTracker(), View, Props (+22 more)

### Community 23 - "SettingsPanel.tsx"
Cohesion: 0.16
Nodes (11): OPTIONS, Props, ViewModeSwitch(), EDGE_STYLE_OPTIONS, ORIENTATION_OPTIONS, Props, Section(), SectionProps (+3 more)

### Community 24 - "teamService.ts"
Cohesion: 0.15
Nodes (25): ResolvedPosition, resolvePosition(), MemberTransaction, assertCanEditMembers(), deleteMember(), deriveTeamName(), resolveRole(), resolveTeam() (+17 more)

### Community 25 - "eligibility.ts"
Cohesion: 0.25
Nodes (11): EmailIdentity, normalizeEmail(), resolveEmailIdentity(), resolveMemberMatch(), loadEmailIdentity(), callbackErrorRedirect(), decideGoogleSignIn(), GoogleClaims (+3 more)

### Community 26 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, esModuleInterop, forceConsistentCasingInFileNames, module, moduleResolution, noImplicitAny, outDir, paths (+12 more)

### Community 27 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+12 more)

### Community 28 - "TeamFrame"
Cohesion: 0.09
Nodes (41): Props, TeamBadge(), FILL_ALPHA, lerp(), Props, STROKE_ALPHA, TeamFrame(), Props (+33 more)

### Community 29 - "membersStore.ts"
Cohesion: 0.16
Nodes (18): Props, Props, Props, Props, membersActions, {
  setMembers,
  reloadMembers,
  addMember,
  updateMember,
  selectMember,
  getMentorsList,
}, useMembersMap(), useMentees() (+10 more)

### Community 30 - "dependencies"
Cohesion: 0.11
Nodes (19): dependencies, date-fns, dotenv, elkjs, gsap, @gsap/react, @heroicons/react, lodash (+11 more)

### Community 31 - "server/package.json"
Cohesion: 0.06
Nodes (30): cloudinary, concurrently, nodemon, @prisma/adapter-pg, @prisma/config, ts-node, tsx, @types/compression (+22 more)

### Community 32 - "MemberInfoSocial.tsx"
Cohesion: 0.24
Nodes (8): next, FacebookIcon(), InstagramIcon(), LinkedinIcon(), TelegramIcon(), MemberInfoSocial(), Props, config

### Community 33 - "FilterState"
Cohesion: 0.18
Nodes (13): FilterGroupProps, Props, Props, Props, Props, AvatarFilterValue, FilterSectionKey, FilterState (+5 more)

### Community 34 - "src/utils/index.ts"
Cohesion: 0.19
Nodes (13): BirthdayFilterSection(), ClearButton(), JoinYearFilterSection(), Props, parseYear(), Props, YearInput(), YearInputProps (+5 more)

### Community 35 - "Skill router"
Cohesion: 0.13
Nodes (15): Advanced, pixijs-accessibility, pixijs-assets, pixijs-blend-modes, pixijs-color, pixijs-custom-rendering, pixijs-events, pixijs-filters (+7 more)

### Community 36 - "package.json"
Cohesion: 0.10
Nodes (19): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+11 more)

### Community 37 - "seedQuestions.ts"
Cohesion: 0.19
Nodes (8): escapeHtml(), pairs(), renderSignInCodeEmail(), deleteQuestionSessions(), { html }, active, items, valid

### Community 38 - "MembersTree.tsx"
Cohesion: 0.50
Nodes (3): MembersTree(), Props, registerPixiPlugins()

### Community 39 - "utils/membersTree/index.ts"
Cohesion: 0.09
Nodes (45): EdgesLayer(), drawPolyline(), TeamEdgesLayer(), NODE_AVATAR_RADIUS, TEAM_EDGE_DROP, TEAM_EDGE_SPREAD_STEP, Point, SegmentData (+37 more)

### Community 40 - "Core Patterns"
Cohesion: 0.19
Nodes (14): Adding and removing children, Bounds and coordinate conversion, Constructor options, Core Patterns, Destroy, Finding and removing from parent, Leaves vs containers, Per-frame updates with onRender (+6 more)

### Community 41 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+5 more)

### Community 42 - "MembersTreeContent.tsx"
Cohesion: 0.15
Nodes (25): MemberSidebar(), Props, ACCENT_COLOR_MAP, EVENT_FEATURES, MembersTreeContent(), Props, TeamInfoSidebar(), ViewportCulling() (+17 more)

### Community 43 - "importAllowedEmails.ts"
Cohesion: 0.19
Nodes (12): AllowedRow, AllowlistDiff, diffAllowlist(), looksLikeEmail(), parseAllowlistCsv(), ParsedAllowlist, splitLine(), apply (+4 more)

### Community 44 - "CLAUDE.md"
Cohesion: 0.25
Nodes (7): Commands, Conventions, Deployment & data, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout

### Community 45 - "Core Patterns"
Cohesion: 0.12
Nodes (15): Add, remove, swap, API Reference, Child queries, Common Mistakes, Container Hierarchy, Core Patterns, [CRITICAL] Adding children to a leaf, Destroying sub-trees (+7 more)

### Community 46 - "emailRoutes.ts"
Cohesion: 0.20
Nodes (12): authSecret(), isDemoMode(), prismaCodeStore, buildSessionInfo(), bodyEmail(), emailKey(), ipKey(), requestLimits (+4 more)

### Community 47 - "Member"
Cohesion: 0.13
Nodes (14): pixijs-scene-gif, Cloning, clearing, and bounds, Props, Props, Props, Props, Member, MemberMetrics (+6 more)

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "ManageForm.tsx"
Cohesion: 0.18
Nodes (17): DropdownSelectInput(), ManageForm(), MemberMode, Section, SECTIONS, TEAM_KINDS, TeamKind, MemberEditPanel() (+9 more)

### Community 50 - "http"
Cohesion: 0.09
Nodes (41): addMember(), ApiError, toApiError(), editMember(), fetchFamilyTree(), fetchMemberById(), fetchMentorsList(), createRole() (+33 more)

### Community 51 - "AGENTS.md"
Cohesion: 0.25
Nodes (7): Commands, Conventions, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout, This is NOT the Next.js you know

### Community 52 - "scripts"
Cohesion: 0.20
Nodes (10): scripts, build, db:backup-prod, db:restore-local, dev, dev:webpack, lint, start (+2 more)

### Community 53 - "emailCodes.ts"
Cohesion: 0.17
Nodes (14): CODE_TTL_MS, CodeOwner, CodeStore, generateCode(), hashCode(), issueCode(), MAX_CODE_ATTEMPTS, sameHash() (+6 more)

### Community 54 - "BEST Family Tree"
Cohesion: 0.33
Nodes (5): BEST Family Tree, People, Sign-in, Teams, Views

### Community 57 - "MemberInfo.tsx"
Cohesion: 0.14
Nodes (21): date-fns, AccessLevel, fetchSession(), SessionInfo, MemberAvatarImage(), MemberAvatarImageInner(), Props, MemberInfo() (+13 more)

### Community 58 - "pixijs/SKILL.md"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] buttonMode removed; use cursor, [HIGH] Default eventMode is passive, [HIGH] Move events only fire over the object in v8, [MEDIUM] Cursor does not inherit from parent, Quick Start

### Community 59 - "Core Patterns"
Cohesion: 0.07
Nodes (29): API Reference, Application destroy/recreate cycle, Batching optimization, cacheAsTexture for performance, Common Mistakes, Core Patterns, [CRITICAL] App destroy without releaseGlobalResources, Culling (+21 more)

### Community 60 - "Scene Objects"
Cohesion: 0.18
Nodes (11): pixijs-html-source, pixijs-scene-container, pixijs-scene-dom-container, pixijs-scene-graphics, pixijs-scene-mesh, pixijs-scene-particle-container, pixijs-scene-sprite, pixijs-scene-text (+3 more)

### Community 61 - "ref_vitest"
Cohesion: 0.21
Nodes (5): answerMatches(), CYRILLIC_TO_LATIN, normalizeAnswer(), MIN_ACTIVE_QUESTIONS, DEMO_QUESTIONS

### Community 62 - "TeamLogo.tsx"
Cohesion: 0.27
Nodes (9): zustand, cache, loadImageAspect(), PhotoOpenButton(), Props, Props, TeamLogo(), PhotoViewerState (+1 more)

### Community 63 - "AvatarFileInput.tsx"
Cohesion: 0.27
Nodes (8): LionIcon(), Props, AvatarFileInput(), Props, Props, exceedsUploadLimit(), MAX_UPLOAD_BYTES, UPLOAD_TOO_LARGE_MESSAGE

### Community 64 - "membersIndex.ts"
Cohesion: 0.32
Nodes (9): MembersState, ChildrenMap, MembersMap, Source, collectAllAncestorIds(), collectSiblingIds(), computeLineageBranchIds(), collectDescendantIds() (+1 more)

### Community 65 - "BEST Family Tree"
Cohesion: 0.11
Nodes (18): 1. Clone and configure environment, 2. Start the application, 3. Run database migrations, 4. Access the app, Architecture, Available Commands, Backend Commands (run inside container), Backups (+10 more)

### Community 66 - "Diagnosing Bugs"
Cohesion: 0.13
Nodes (14): Completion criterion: a tight loop that goes red, Diagnosing Bugs, Minimise, Non-deterministic bugs, Phase 1: Build a feedback loop, Phase 2: Reproduce + minimise, Phase 3: Hypothesise, Phase 4: Instrument (+6 more)

### Community 67 - "EditMemberForm.tsx"
Cohesion: 0.10
Nodes (40): deleteMember(), AddMemberForm(), buildMemberFormData(), ClearButton(), describeSubmitError(), EditMemberForm(), getInitialFormData(), FieldError() (+32 more)

### Community 68 - "ThemeContext.tsx"
Cohesion: 0.05
Nodes (42): react-datepicker, metadata, nunito, RootLayout(), AuroraBackground(), FONT_FAMILY, NODE_SUBTITLE_STYLE, NODE_TITLE_STYLE (+34 more)

### Community 69 - "MembersTreeDynamic.tsx"
Cohesion: 0.22
Nodes (10): isTreeReady(), MembersTree, MembersTreeDynamic(), TreeState, BrandSpinner(), LION_CENTER, LION_SILHOUETTE, LIONS (+2 more)

### Community 70 - "teamLayout.ts"
Cohesion: 0.08
Nodes (37): elkjs, NODE_CARD_HEIGHT, TEAM_FRAME_GAP, TEAM_PACK_ASPECT, failOver(), getWorker(), Pending, requestLayout() (+29 more)

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
Cohesion: 0.13
Nodes (22): useSceneTransition(), useTreeLayout(), DEFAULT_NODE_HEIGHT, DEFAULT_NODE_WIDTH, DEFAULT_POSITION, FLOW_VIEWPORT_DIRECTION, FlowViewportDirection, refreshNodeMembers() (+14 more)

### Community 75 - "MemberFilterCategory.tsx"
Cohesion: 0.19
Nodes (14): FilterCategory(), LION_GROUP_ICON, LION_ICON, Props, MaskIcon(), Props, ACTIVITY_OPTIONS, ACTIVITY_STATES (+6 more)

### Community 76 - "models/index.ts"
Cohesion: 0.26
Nodes (8): NodesLayer(), Props, parseTeamNodeId(), getTeamRoster(), getMemberTeamRoles(), getPositionPeriod(), getPositionYearLabel(), Years

### Community 77 - "MemberNode.tsx"
Cohesion: 0.08
Nodes (30): pixi.js, BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props, acquireEmojiTextures(), createEmojiTexture(), generateRandomPosition() (+22 more)

### Community 78 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, attach / detach, Common Mistakes, Core Patterns, [CRITICAL] Using `addChild` on a RenderLayer, [HIGH] Layer and attached children in different render groups, Layer + logical parent, Manual sort (+5 more)

### Community 79 - "Core Patterns"
Cohesion: 0.14
Nodes (13): Alpha mask (Sprite-based), API Reference, Common Mistakes, Core Patterns, [HIGH] Using cacheAsTexture with masks, Inverse masking, Mask channel selection, Mask type selection (+5 more)

### Community 80 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, Common Mistakes, Construction options, Core Patterns, [HIGH] Nesting many render groups, [MEDIUM] Constantly adding/removing from a render group, [MEDIUM] Overusing render groups, Profile before adding (+5 more)

### Community 81 - "FiltersPanel.tsx"
Cohesion: 0.21
Nodes (8): ALL_SECTIONS_CLOSED, Props, MemberFilterCategory(), LineageFilterSection(), Props, LineageMemberSearch(), Props, useMemberById()

### Community 82 - "treeStore.ts"
Cohesion: 0.12
Nodes (21): gsap, @gsap/react, pixi-filters, NODE_HOVER_ANIMATION_DURATION, NODE_HOVER_SCALE, ZOOMED_OUT_HOVER_SCALE_MAP, NODE_HEIGHT, NODE_WIDTH (+13 more)

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
Cohesion: 0.35
Nodes (7): EligibilityMember, MemberMatch, phoneKey(), resolveTelegramIdentity(), TelegramIdentity, loadTelegramIdentity(), TelegramClaims

### Community 89 - "Foundations"
Cohesion: 0.29
Nodes (7): Foundations, pixijs-application, pixijs-core-concepts, pixijs-create, pixijs-environments, pixijs-migration-v8, pixijs-scene-core-concepts

### Community 90 - "memberPresentation.ts"
Cohesion: 0.17
Nodes (14): Props, SearchSuggestionItem(), Props, SearchSuggestionRow(), Props, CloudinaryTransformations, getPhotoUrlAsAvatar(), getPhotoUrlAsRoundAvatar() (+6 more)

### Community 91 - "Common Mistakes"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [CRITICAL] Adding children to leaf scene objects, [HIGH] Expecting getBounds() to return a Rectangle, [HIGH] Using cacheAsBitmap instead of cacheAsTexture, [MEDIUM] Setting both pivot and origin on the same container, Quick Start

### Community 92 - "Core Concepts"
Cohesion: 0.18
Nodes (11): Container vs leaf (CRITICAL), Core Concepts, Culling, Destroy semantics, Lifecycle events, Masking, Render groups, Render order and explicit z-ordering (+3 more)

### Community 93 - "DropdownOption"
Cohesion: 0.17
Nodes (19): DropdownMenu(), Props, BadgeInput(), Props, BadgeInputField(), Props, useBadgeInputState(), PositionRowHeader() (+11 more)

### Community 94 - "auth/types.ts"
Cohesion: 0.19
Nodes (11): canEditMember(), hasAccess(), RANK, CONTACT_FIELDS, AccessRank, Express, Request, Session (+3 more)

### Community 98 - "PhotoViewer.tsx"
Cohesion: 0.42
Nodes (7): DropdownPortal(), Props, PhotoViewer(), Viewer(), viewportRect(), coverMorph, usePhotoViewerStore

### Community 99 - "checkConfig.ts"
Cohesion: 0.07
Nodes (37): RFC-2045, RFC-2047, assertConfig(), configProblems(), databaseName(), demoProblems(), Env, googleProblems() (+29 more)

### Community 100 - "Core Patterns"
Cohesion: 0.20
Nodes (10): Bounds in different spaces, Coordinate conversion, Core Patterns, Cumulative alpha (getGlobalAlpha), Global, local, and screen coordinates, Pivot, Position, scale, rotation, Sizing via width, height, setSize (+2 more)

### Community 101 - "filterMembers.ts"
Cohesion: 0.15
Nodes (25): derive(), areSetsEqual(), computeFilteredMembers(), countActiveMemberFilters(), isFilterActive(), matchesAvatar(), matchesBirthday(), matchesJoinYear() (+17 more)

### Community 102 - "Render Loop"
Cohesion: 0.22
Nodes (8): API Reference, Common Mistakes, [CRITICAL] Treating the ticker callback arg as a number, Frame lifecycle, [HIGH] Using `updateTransform` for per-frame logic, [MEDIUM] Assuming ticker callbacks run after render, Quick Start, Render Loop

### Community 103 - "pixijs-core-concepts/SKILL.md"
Cohesion: 0.22
Nodes (8): API Reference, Decision guide, Environments, Quick concepts, Quick Start, Renderer = systems + pipes, The render loop, Topics

### Community 104 - "filterSearchParams.ts"
Cohesion: 0.22
Nodes (11): Props, filtersToSearchParams(), parseCsvArray(), parseCsvStrings(), parseFiltersFromSearchParams(), parseNumberOrNull(), parseTreeMode(), serializeCsv() (+3 more)

### Community 105 - "constants/filters.ts"
Cohesion: 0.11
Nodes (15): EMPTY_FILTER_STATE, FOUNDER_JOIN_YEAR, MEMBER_STATUSES, MENTOR_STATUSES, FiltersActions, FiltersState, initialState, initialFiltersState (+7 more)

### Community 106 - "Transforms and Coordinate Spaces"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Setting scale to 0, [MEDIUM] Confusing anchor and pivot, [MEDIUM] Reading world transform before first render, Quick Start, Transforms and Coordinate Spaces

### Community 107 - "readCache.ts"
Cohesion: 0.53
Nodes (3): bumpDataVersion(), createVersionedCache(), trackWrites()

### Community 108 - "Toolbar.tsx"
Cohesion: 0.07
Nodes (54): AuthMethod, Challenge, ChallengeQuestion, logout(), post(), RequestCodeOutcome, requestEmailCode(), startChallenge() (+46 more)

### Community 109 - "constants/canvas/index.ts"
Cohesion: 0.31
Nodes (8): lineageEdgePath, ACCIDENTAL_DRAG_MAX_DISTANCE, ACCIDENTAL_DRAG_MAX_MS, LONG_PRESS_MS, TAP_MOVE_TOLERANCE, PressStart, useTapWithoutDrag(), isTapGesture()

### Community 110 - "server/src/types/index.ts"
Cohesion: 0.07
Nodes (30): mongodb, ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember, STATUSES_MAP (+22 more)

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

### Community 113 - "pixijs/SKILL.md"
Cohesion: 0.18
Nodes (9): API Reference, Constructor options, Quick Start, Fallback: canonical PixiJS docs, Foundations, How to use this skill, Scene Objects, Skill router (+1 more)

### Community 114 - "Position"
Cohesion: 0.40
Nodes (5): Position, Bottom, Left, Right, Top

### Community 115 - "Common Mistakes"
Cohesion: 0.50
Nodes (4): Common Mistakes, [HIGH] Accessing app.renderer before init() resolves, [HIGH] Setting DOMAdapter after Application.init, [MEDIUM] Treating `preference` as a guarantee

### Community 116 - "pixijs-scene-core-concepts/SKILL.md"
Cohesion: 0.14
Nodes (12): API Reference, Common Mistakes, [CRITICAL] Adding children to a leaf display object, [CRITICAL] Referencing DisplayObject, [HIGH] Forgetting isRenderGroup on large static subtrees, [HIGH] Treating child.x as world space, Leaf comparison: which skill covers which object, [MEDIUM] sortableChildren without zIndex (+4 more)

### Community 119 - "aiFaces.ts"
Cohesion: 0.38
Nodes (3): createFaceSource(), Options, source()

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
Cohesion: 0.22
Nodes (9): Common Mistakes, [CRITICAL] Using lineStyle instead of stroke, [CRITICAL] Using old shape method names, [CRITICAL] Using v7 beginFill/drawRect/endFill, [HIGH] Clearing and redrawing Graphics every frame, [HIGH] Destroying a shared GraphicsContext unexpectedly, [HIGH] Using beginHole/endHole for holes, [HIGH] Using GraphicsGeometry instead of GraphicsContext (+1 more)

## Knowledge Gaps
- **42 isolated node(s):** `@prisma/client`, `dotenv`, `lodash`, `@tailwindcss/postcss`, `@types/lodash` (+37 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 935 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Skill router` connect `pixijs/SKILL.md` to `Skill router`?**
  _High betweenness centrality (0.112) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _42 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `src/types/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.10367063492063493 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `TeamFormContent.tsx`, `src/types/index.ts`, `Toolbar.tsx`, `TeamTypeFilterSection.tsx`, `useCardAnimation.ts`, `PositionFormFields.tsx`, `TeamSearch.tsx`, `photoViewerMath.ts`, `useDashedPathAnimation.ts`, `teamFrame.ts`, `MembersTreeScene.tsx`, `dimensions.ts`, `TeamFrame`, `membersStore.ts`, `package.json`, `MembersTree.tsx`, `utils/membersTree/index.ts`, `MembersTreeContent.tsx`, `ManageForm.tsx`, `http`, `MemberInfo.tsx`, `TeamLogo.tsx`, `AvatarFileInput.tsx`, `EditMemberForm.tsx`, `ThemeContext.tsx`, `MembersTreeDynamic.tsx`, `useTreeLayout.ts`, `models/index.ts`, `MemberNode.tsx`, `FiltersPanel.tsx`, `treeStore.ts`, `memberPresentation.ts`, `DropdownOption`, `PhotoViewer.tsx`, `filterSearchParams.ts`, `Toolbar.tsx`, `constants/canvas/index.ts`?**
  _High betweenness centrality (0.108) - this node is a cross-community bridge._
- **Should `memberService.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.09390243902439024 - nodes in this community are weakly interconnected._
- **Why does `Point` connect `utils/membersTree/index.ts` to `Skill router`, `teamLayout.ts`, `useTreeLayout.ts`, `pixijs/SKILL.md`, `MembersTreeScene.tsx`, `treeStore.ts`, `teamFrame.ts`?**
  _High betweenness centrality (0.095) - this node is a cross-community bridge._
- **Should `src/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.08787878787878788 - nodes in this community are weakly interconnected._