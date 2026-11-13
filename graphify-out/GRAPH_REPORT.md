# Graph Report - best-family-tree  (2026-11-13)

## Corpus Check
- 511 files · ~171,306 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 28 file(s) not represented in the graph (top: .prisma 9, (none) 6, .css 6)

## Summary
- 2590 nodes · 6529 edges · 124 communities (117 shown, 7 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 68 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `4173e160`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- EditMemberForm.tsx
- src/types/index.ts
- Toolbar.tsx
- FiltersPanel.tsx
- memberService.ts
- memberRoutes.ts
- MemberNode.tsx
- sessions.ts
- PositionFormFields.tsx
- ApplicationOptions reference
- challenges.ts
- filtersStore.ts
- anonymizeDemo.ts
- Sidebar.tsx
- PhotoViewer.tsx
- eligibility.ts
- Common Mistakes
- emailRoutes.ts
- layout.tsx
- catalogValidation.ts
- MemberBirthdayAnimation.tsx
- HTML Report Format
- dimensions.ts
- SettingsPanel.tsx
- teamService.ts
- settingsStore.ts
- compilerOptions
- compilerOptions
- pixi.js
- membersStore.ts
- dependencies
- server/package.json
- MemberInfo.tsx
- memberService.ts
- FilterState
- Skill router
- package.json
- useCanvasTheme.ts
- MembersTreeContent.tsx
- Direction
- Core Patterns
- devDependencies
- TeamInfoSidebar.tsx
- memberRoutes.ts
- CLAUDE.md
- Core Patterns
- eligibility.ts
- teamFrame.ts
- During the session
- ManageForm.tsx
- http
- AGENTS.md
- scripts
- emailCodes.ts
- BEST Family Tree
- next.config.mjs
- postcss.config.mjs
- AvatarFileInput.tsx
- importAllowedEmails.ts
- Core Patterns
- Scene Objects
- src/utils/index.ts
- Advanced
- types.ts
- Member
- BEST Family Tree
- Diagnosing Bugs
- MemberFormFields.tsx
- Common Mistakes
- useHoverNodeAnimation.ts
- teamLayout.ts
- Core Patterns
- Core Patterns
- dependencies
- seedQuestions.ts
- proxy.ts
- Direction
- teamBadgeLayout.ts
- Core Patterns
- Core Patterns
- Core Patterns
- EdgesLayer.tsx
- sessionStore.ts
- Core Patterns
- Constructor options (Container-inherited)
- Test-Driven Development
- GSAP Core
- Core Patterns
- memberPresentation.ts
- Foundations
- MemberStatus
- src/utils/index.ts
- Core Concepts
- hooks/index.ts
- utils/membersTree/index.ts
- backup-prod.sh
- start-prod.sh
- restore-local.sh
- Utilities
- checkConfig.ts
- Core Patterns
- filterMembers.ts
- Render Loop
- pixijs-core-concepts/SKILL.md
- Position
- FilterState
- oidc.ts
- pixijs-scene-graphics/SKILL.md
- Toolbar.tsx
- server/src/types/index.ts
- Renderers: WebGPU, WebGL, and Canvas
- TeamFrame
- seedQuestions.ts
- pixijs-scene-core-concepts/SKILL.md
- Common Mistakes
- aiFaces.ts
- constants/canvas/index.ts
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

## Communities (124 total, 7 thin omitted)

### Community 0 - "EditMemberForm.tsx"
Cohesion: 0.12
Nodes (35): AddMemberForm(), buildMemberFormData(), ClearButton(), ConfirmDeleteControl(), Props, describeSubmitError(), EditMemberForm(), getInitialFormData() (+27 more)

### Community 1 - "src/types/index.ts"
Cohesion: 0.10
Nodes (37): @heroicons/react, tailwind-merge, PAIR_COLORS, Props, GLOW, Props, Props, Props (+29 more)

### Community 2 - "Toolbar.tsx"
Cohesion: 0.23
Nodes (10): DemoBadge(), FitViewButton(), Props, Props, Toolbar(), Props, ToolbarIconButton(), ToolbarTooltip() (+2 more)

### Community 3 - "FiltersPanel.tsx"
Cohesion: 0.15
Nodes (18): FilterCategory(), LION_GROUP_ICON, LION_ICON, Props, FilterGroupProps, FiltersHeader(), ALL_SECTIONS_CLOSED, FiltersPanel() (+10 more)

### Community 4 - "memberService.ts"
Cohesion: 0.14
Nodes (23): zod, buildMemberFields(), buildMemberUpdateFields(), buildSharedFields(), buildSparseMemberFields(), parsePhoneNumbers(), getPositionKey(), ResolvedPosition (+15 more)

### Community 5 - "memberRoutes.ts"
Cohesion: 0.12
Nodes (19): deleteCloudinaryImage(), extractCloudinaryPublicId(), loadFamilyTree, loadReducedFamilyTree, router, MEMBER_INCLUDE, serializeMember(), assertCanEditMember() (+11 more)

### Community 6 - "MemberNode.tsx"
Cohesion: 0.10
Nodes (27): AVATAR_HIT_AREA, CARD_PIVOT, EMPTY_FILTERS, NODE_HIT_AREA, NODE_PIVOT, Props, clamp01(), easeBackOut (+19 more)

### Community 7 - "sessions.ts"
Cohesion: 0.16
Nodes (23): express, CHALLENGE_TTL_MS, isProduction(), QUESTIONS_SHOWN, SESSION_COOKIE, SESSION_TTL_MS, SIGN_IN_COOKIE, useSecureCookie() (+15 more)

### Community 8 - "PositionFormFields.tsx"
Cohesion: 0.15
Nodes (27): PositionAssignmentFields(), Props, PositionFormFields(), Props, createEmptyPositionRow(), EMPTY_POSITION_ROW, findTeamByName(), getPositionRowSummary() (+19 more)

### Community 9 - "ApplicationOptions reference"
Cohesion: 0.06
Nodes (32): Accessibility, ApplicationOptions reference, Background, Culler (CullerPluginOptions), Deprecated (GC — prefer the unified options above), Events, Garbage collection, Graphics (+24 more)

### Community 10 - "challenges.ts"
Cohesion: 0.12
Nodes (24): express-rate-limit, ChallengeState, isExpired(), isSolved(), pickRandom(), swapQuestion(), SwapResult, base (+16 more)

### Community 11 - "filtersStore.ts"
Cohesion: 0.09
Nodes (32): Props, compare(), getSearchable(), MemberSearch(), Props, Props, SearchBar(), Props (+24 more)

### Community 12 - "anonymizeDemo.ts"
Cohesion: 0.06
Nodes (36): @faker-js/faker, allowed, args, byId, factory, GROUP_NAMES, memberPhotos, nextFace (+28 more)

### Community 13 - "Sidebar.tsx"
Cohesion: 0.11
Nodes (16): react, Props, Props, Sidebar(), SidebarFooterContext, Props, SidebarHandle(), Props (+8 more)

### Community 14 - "PhotoViewer.tsx"
Cohesion: 0.12
Nodes (30): cache, loadImageAspect(), PhotoOpenButton(), Props, Viewer(), viewportRect(), clampAxis(), clampOffset() (+22 more)

### Community 15 - "eligibility.ts"
Cohesion: 0.32
Nodes (8): EligibilityMember, MemberMatch, resolveMemberMatch(), phoneKey(), resolveTelegramIdentity(), TelegramIdentity, loadTelegramIdentity(), TelegramClaims

### Community 16 - "Common Mistakes"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, [CRITICAL] App destroy without releaseGlobalResources, [HIGH] Destroying and recreating objects instead of recycling, [HIGH] Interleaving object types in scene graph, [HIGH] Loading many individual textures instead of spritesheets, [HIGH] Updating Text or HTMLText every frame, [HIGH] Using complex Graphics instead of textures (+4 more)

### Community 17 - "emailRoutes.ts"
Cohesion: 0.18
Nodes (14): authSecret(), isDemoMode(), prismaCodeStore, getMailer(), buildSessionInfo(), bodyEmail(), emailKey(), ipKey() (+6 more)

### Community 18 - "layout.tsx"
Cohesion: 0.09
Nodes (17): react-datepicker, metadata, nunito, RootLayout(), AuroraBackground(), darkTheme, DEFAULT_THEME, lightTheme (+9 more)

### Community 19 - "catalogValidation.ts"
Cohesion: 0.09
Nodes (28): Renderer selection at runtime, [MEDIUM] Using container.name instead of container.label, parsePositionsPayload(), router, rejectUpload(), router, uploadTeamTypeIcon, booleanLike (+20 more)

### Community 20 - "MemberBirthdayAnimation.tsx"
Cohesion: 0.29
Nodes (9): pixi.js, BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props, acquireEmojiTextures(), createEmojiTexture(), generateRandomPosition() (+1 more)

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "dimensions.ts"
Cohesion: 0.07
Nodes (33): @pixi/react, PixiElements, pixi-viewport, Props, Props, Props, Props, AVATAR_HIGH_RES_SIZE (+25 more)

### Community 23 - "SettingsPanel.tsx"
Cohesion: 0.16
Nodes (11): OPTIONS, Props, ViewModeSwitch(), EDGE_STYLE_OPTIONS, ORIENTATION_OPTIONS, Props, Section(), SectionProps (+3 more)

### Community 24 - "teamService.ts"
Cohesion: 0.14
Nodes (26): MemberTransaction, assertCanEditMembers(), deleteMember(), deriveTeamName(), resolveRole(), resolveTeamType(), RoleRef, TeamRef (+18 more)

### Community 25 - "settingsStore.ts"
Cohesion: 0.21
Nodes (13): useIsMobileScreen(), useResolvedDirection(), useMediaQuery(), DEFAULT_SETTINGS, readLegacyTheme(), SETTINGS_STORAGE_KEY, SettingsActions, SettingsState (+5 more)

### Community 26 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, esModuleInterop, forceConsistentCasingInFileNames, module, moduleResolution, noImplicitAny, outDir, paths (+12 more)

### Community 27 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+12 more)

### Community 28 - "pixi.js"
Cohesion: 0.11
Nodes (36): @pixi/react, Props, TeamBadge(), FILL_ALPHA, lerp(), Props, STROKE_ALPHA, TeamFrame() (+28 more)

### Community 29 - "membersStore.ts"
Cohesion: 0.17
Nodes (16): zustand, membersActions, {
  setMembers,
  reloadMembers,
  addMember,
  updateMember,
  selectMember,
  getMentorsList,
}, useMembersMap(), useMentees(), useSelectedId(), FiltersActions, FiltersState (+8 more)

### Community 30 - "dependencies"
Cohesion: 0.11
Nodes (19): dependencies, date-fns, dotenv, elkjs, gsap, @gsap/react, @heroicons/react, lodash (+11 more)

### Community 31 - "server/package.json"
Cohesion: 0.06
Nodes (34): cloudinary, compression, concurrently, cors, helmet, multer, multer-storage-cloudinary, nodemon (+26 more)

### Community 32 - "MemberInfo.tsx"
Cohesion: 0.18
Nodes (17): MemberAvatarImage(), MemberAvatarImageInner(), Props, MemberInfo(), Props, MemberInfoActionIcon(), MemberInfoRow(), MentorMenteesDropdown() (+9 more)

### Community 33 - "memberService.ts"
Cohesion: 0.19
Nodes (11): ExistingMember, findClearedFields(), MemberUpdateBody, memberUpdateBodySchema, parsePhones(), sparseMemberBodySchema, splitName(), completeMember (+3 more)

### Community 34 - "FilterState"
Cohesion: 0.12
Nodes (27): BirthdayFilterSection(), Props, CheckboxGroupFilterSection(), Option, Props, ClearButton(), FilterCheckbox(), Props (+19 more)

### Community 35 - "Skill router"
Cohesion: 0.25
Nodes (8): pixijs-assets, pixijs-blend-modes, Advanced, Foundations, Scene Objects, Skill router, Utilities, add()

### Community 36 - "package.json"
Cohesion: 0.11
Nodes (18): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+10 more)

### Community 37 - "useCanvasTheme.ts"
Cohesion: 0.17
Nodes (13): FONT_FAMILY, NODE_SUBTITLE_STYLE, NODE_TITLE_STYLE, NODE_TOOLTIP_TEXT_STYLE, TEXT_RESOLUTION, applyCssTokens(), ThemeContext, ThemeContextValue (+5 more)

### Community 38 - "MembersTreeContent.tsx"
Cohesion: 0.22
Nodes (15): Viewport(), MemberSidebar(), Props, ACCENT_COLOR_MAP, EVENT_FEATURES, MembersTreeContent(), ViewportCulling(), MemberSidebarContent() (+7 more)

### Community 39 - "Direction"
Cohesion: 0.12
Nodes (27): DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN, MIN_ANIM_DURATION, PATTERN_LEN, RETRACT_BASE, SPEED (+19 more)

### Community 40 - "Core Patterns"
Cohesion: 0.13
Nodes (19): Adding and removing children, Bounds and coordinate conversion, Constructor options, Container events, Core Patterns, Destroy, Finding and removing from parent, Leaves vs containers (+11 more)

### Community 41 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+5 more)

### Community 42 - "TeamInfoSidebar.tsx"
Cohesion: 0.20
Nodes (14): Props, TeamInfoSidebar(), TeamInfo(), Props, SidebarMinimizedSummary(), useSidebarSwitchAnimation(), useTeamInfoSidebar(), canEdit() (+6 more)

### Community 43 - "memberRoutes.ts"
Cohesion: 0.15
Nodes (10): @prisma/adapter-pg, adapter, prisma, router, level, [ref, levelArg], ADMINS_BY_EMAIL, EDITORS_BY_NAME (+2 more)

### Community 44 - "CLAUDE.md"
Cohesion: 0.25
Nodes (7): Commands, Conventions, Deployment & data, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout

### Community 45 - "Core Patterns"
Cohesion: 0.12
Nodes (15): Add, remove, swap, API Reference, Child queries, Common Mistakes, Container Hierarchy, Core Patterns, [CRITICAL] Adding children to a leaf, Destroying sub-trees (+7 more)

### Community 46 - "eligibility.ts"
Cohesion: 0.26
Nodes (10): EmailIdentity, normalizeEmail(), resolveEmailIdentity(), loadEmailIdentity(), callbackErrorRedirect(), decideGoogleSignIn(), GoogleClaims, GoogleDecision (+2 more)

### Community 47 - "teamFrame.ts"
Cohesion: 0.09
Nodes (36): pixijs-scene-graphics, Paths and complex shapes, TEAM_COLUMN_GAP, TEAM_EDGE_DROP, TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_SPREAD_WIDTH, TEAM_EDGE_STUB, TEAM_FRAME_HEADER (+28 more)

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "ManageForm.tsx"
Cohesion: 0.11
Nodes (27): react-dom, DropdownPortal(), Props, LineageMemberSearch(), Props, DropdownSelectInput(), ManageForm(), MemberMode (+19 more)

### Community 50 - "http"
Cohesion: 0.06
Nodes (58): addMember(), ApiError, toApiError(), deleteMember(), editMember(), fetchFamilyTree(), fetchMemberById(), fetchMentorsList() (+50 more)

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

### Community 57 - "AvatarFileInput.tsx"
Cohesion: 0.25
Nodes (9): next, LionIcon(), Props, AvatarFileInput(), Props, Props, exceedsUploadLimit(), MAX_UPLOAD_BYTES (+1 more)

### Community 58 - "importAllowedEmails.ts"
Cohesion: 0.19
Nodes (12): AllowedRow, AllowlistDiff, diffAllowlist(), looksLikeEmail(), parseAllowlistCsv(), ParsedAllowlist, splitLine(), apply (+4 more)

### Community 59 - "Core Patterns"
Cohesion: 0.12
Nodes (17): Application destroy/recreate cycle, Batching optimization, cacheAsTexture for performance, Core Patterns, Culling, Filters and masks cost, Graphics performance, Low-level rendering optimizations (+9 more)

### Community 60 - "Scene Objects"
Cohesion: 0.18
Nodes (10): pixijs-html-source, pixijs-scene-container, pixijs-scene-dom-container, pixijs-scene-gif, pixijs-scene-mesh, pixijs-scene-particle-container, pixijs-scene-sprite, pixijs-scene-text (+2 more)

### Community 61 - "src/utils/index.ts"
Cohesion: 0.15
Nodes (20): gsap, CARD_VIEW_SCALE, getFitViewTargetScale(), useFitViewAnimation(), useFocusFrameAnimation(), useFocusNodeAnimation(), useViewportAnimation(), useSceneTransition() (+12 more)

### Community 62 - "Advanced"
Cohesion: 0.29
Nodes (6): Advanced, pixijs-accessibility, pixijs-custom-rendering, pixijs-filters, pixijs-performance, PixiJS Skills: Full Index

### Community 63 - "types.ts"
Cohesion: 0.21
Nodes (12): canEditMember(), hasAccess(), RANK, CONTACT_FIELDS, toMemberResponse(), AccessRank, Express, Request (+4 more)

### Community 64 - "Member"
Cohesion: 0.11
Nodes (29): NodesLayer(), Props, Props, Member, derive(), MembersState, ChildrenMap, MemberMetrics (+21 more)

### Community 65 - "BEST Family Tree"
Cohesion: 0.11
Nodes (18): 1. Clone and configure environment, 2. Start the application, 3. Run database migrations, 4. Access the app, Architecture, Available Commands, Backend Commands (run inside container), Backups (+10 more)

### Community 66 - "Diagnosing Bugs"
Cohesion: 0.13
Nodes (14): Completion criterion: a tight loop that goes red, Diagnosing Bugs, Minimise, Non-deterministic bugs, Phase 1: Build a feedback loop, Phase 2: Reproduce + minimise, Phase 3: Hypothesise, Phase 4: Instrument (+6 more)

### Community 67 - "MemberFormFields.tsx"
Cohesion: 0.10
Nodes (28): FacebookIcon(), InstagramIcon(), LinkedinIcon(), TelegramIcon(), FieldError(), Props, Props, Props (+20 more)

### Community 68 - "Common Mistakes"
Cohesion: 0.18
Nodes (9): API Reference, Common Mistakes, [CRITICAL] Adding children to leaf scene objects, [HIGH] Expecting getBounds() to return a Rectangle, [HIGH] Using cacheAsBitmap instead of cacheAsTexture, [MEDIUM] Setting both pivot and origin on the same container, Quick Start, Fallback: canonical PixiJS docs (+1 more)

### Community 69 - "useHoverNodeAnimation.ts"
Cohesion: 0.25
Nodes (9): @gsap/react, pixi-filters, NODE_HOVER_ANIMATION_DURATION, NODE_HOVER_SCALE, ZOOMED_OUT_HOVER_SCALE_MAP, calculateTargetScale(), createShadowFilter(), Props (+1 more)

### Community 70 - "teamLayout.ts"
Cohesion: 0.08
Nodes (38): elkjs, TEAM_FRAME_GAP, TEAM_PACK_ASPECT, failOver(), getWorker(), Pending, requestLayout(), runInline() (+30 more)

### Community 71 - "Core Patterns"
Cohesion: 0.13
Nodes (14): API Reference, boundsArea optimization, Common Mistakes, Core Patterns, Culling, HIGH: Expecting automatic culling, HIGH: Using addChild on RenderLayer, MEDIUM: Expecting filters on ancestors to apply to layer children (+6 more)

### Community 72 - "Core Patterns"
Cohesion: 0.14
Nodes (13): Advanced shape primitives, Core Patterns, Default styles via setFillStyle / setStrokeStyle, Draw-time transforms, Drawing a texture directly, Gradients and patterns, GraphicsContext sharing, GraphicsContext utilities (+5 more)

### Community 73 - "dependencies"
Cohesion: 0.04
Nodes (46): dependencies, cloudinary, compression, cors, dotenv, express, express-rate-limit, helmet (+38 more)

### Community 74 - "seedQuestions.ts"
Cohesion: 0.19
Nodes (8): escapeHtml(), pairs(), renderSignInCodeEmail(), deleteQuestionSessions(), { html }, active, items, valid

### Community 76 - "Direction"
Cohesion: 0.27
Nodes (10): Props, LineageEdge(), Props, Props, FIXED_EDGE_WIDTH, EdgeStyle, Direction, buildAncestorChain() (+2 more)

### Community 77 - "teamBadgeLayout.ts"
Cohesion: 0.25
Nodes (9): TEAM_FRAME_RADIUS, TEAM_TITLE_ICON_PADDING, TEAM_TITLE_ICON_SIZE, TEAM_TITLE_PADDING_X, TEAM_TITLE_PADDING_Y, getTeamBadgeLayout(), textWidth(), truncateText() (+1 more)

### Community 78 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, attach / detach, Common Mistakes, Core Patterns, [CRITICAL] Using `addChild` on a RenderLayer, [HIGH] Layer and attached children in different render groups, Layer + logical parent, Manual sort (+5 more)

### Community 79 - "Core Patterns"
Cohesion: 0.14
Nodes (13): Alpha mask (Sprite-based), API Reference, Common Mistakes, Core Patterns, [HIGH] Using cacheAsTexture with masks, Inverse masking, Mask channel selection, Mask type selection (+5 more)

### Community 80 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, Common Mistakes, Construction options, Core Patterns, [HIGH] Nesting many render groups, [MEDIUM] Constantly adding/removing from a render group, [MEDIUM] Overusing render groups, Profile before adding (+5 more)

### Community 81 - "EdgesLayer.tsx"
Cohesion: 0.50
Nodes (6): EdgesLayer(), bezierEval(), edgeGeometry, endpoints(), sampleBezierCurve(), sampleEdgePath()

### Community 82 - "sessionStore.ts"
Cohesion: 0.38
Nodes (6): AccessLevel, fetchSession(), SessionInfo, RANK, SessionState, useSessionStore

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
Cohesion: 0.10
Nodes (19): API Reference, Capture phase events, Common Mistakes, Core Patterns, Cursor styles, Event features, Event properties, Event types (+11 more)

### Community 88 - "memberPresentation.ts"
Cohesion: 0.15
Nodes (15): getCullArea(), MemberNode(), MemberNodeAvatar(), MemberNodeCard(), MemberNodeMinimizedTooltip(), CloudinaryTransformations, getIconUrlAsRounded(), getPhotoUrlAsAvatar() (+7 more)

### Community 89 - "Foundations"
Cohesion: 0.29
Nodes (7): Foundations, pixijs-application, pixijs-core-concepts, pixijs-create, pixijs-environments, pixijs-migration-v8, pixijs-scene-core-concepts

### Community 90 - "MemberStatus"
Cohesion: 0.11
Nodes (15): EMPTY_FILTER_STATE, FOUNDER_JOIN_YEAR, MEMBER_STATUSES, MENTOR_STATUSES, initialFiltersState, ActivityState, Active, Excluded (+7 more)

### Community 91 - "src/utils/index.ts"
Cohesion: 0.47
Nodes (3): date-fns, generateGoogleCalendarLink(), getClosestBirthday()

### Community 92 - "Core Concepts"
Cohesion: 0.18
Nodes (11): Container vs leaf (CRITICAL), Core Concepts, Culling, Destroy semantics, Lifecycle events, Masking, Render groups, Render order and explicit z-ordering (+3 more)

### Community 93 - "hooks/index.ts"
Cohesion: 0.15
Nodes (18): DropdownMenu(), Props, BadgeInput(), Props, BadgeInputField(), Props, useBadgeInputState(), PositionRowHeader() (+10 more)

### Community 94 - "utils/membersTree/index.ts"
Cohesion: 0.16
Nodes (20): drawPolyline(), TeamEdgesLayer(), Point, TeamEdge, alignPolylines(), cumulativeLengths(), dist(), lerpPoints() (+12 more)

### Community 98 - "Utilities"
Cohesion: 0.40
Nodes (5): pixijs-color, pixijs-events, pixijs-math, pixijs-ticker, Utilities

### Community 99 - "checkConfig.ts"
Cohesion: 0.08
Nodes (31): RFC-2045, RFC-2047, assertConfig(), configProblems(), databaseName(), demoProblems(), Env, googleProblems() (+23 more)

### Community 100 - "Core Patterns"
Cohesion: 0.12
Nodes (16): API Reference, Common Mistakes, Coordinate conversion, Core Patterns, Cumulative alpha (getGlobalAlpha), Global, local, and screen coordinates, [HIGH] Setting scale to 0, [MEDIUM] Confusing anchor and pivot (+8 more)

### Community 101 - "filterMembers.ts"
Cohesion: 0.18
Nodes (18): RecruitmentTerm, matchesAvatar(), matchesBirthday(), matchesJoinSeason(), matchesJoinYear(), memberMatchesFilters(), parseDateStr(), toDateVal() (+10 more)

### Community 102 - "Render Loop"
Cohesion: 0.22
Nodes (8): API Reference, Common Mistakes, [CRITICAL] Treating the ticker callback arg as a number, Frame lifecycle, [HIGH] Using `updateTransform` for per-frame logic, [MEDIUM] Assuming ticker callbacks run after render, Quick Start, Render Loop

### Community 103 - "pixijs-core-concepts/SKILL.md"
Cohesion: 0.22
Nodes (8): API Reference, Decision guide, Environments, Quick concepts, Quick Start, Renderer = systems + pipes, The render loop, Topics

### Community 104 - "Position"
Cohesion: 0.40
Nodes (5): Position, Bottom, Left, Right, Top

### Community 105 - "FilterState"
Cohesion: 0.12
Nodes (25): MemberFilterCategory(), ACTIVITY_OPTIONS, ACTIVITY_STATES, AVATAR_OPTIONS, AVATAR_VALUES, JOIN_SEASONS, MEMBER_STATUSES, SEASON_OPTIONS (+17 more)

### Community 106 - "oidc.ts"
Cohesion: 0.18
Nodes (14): openid-client, configs, cookieOptions(), finishLogin(), getProviderConfig(), isProviderEnabled(), OidcProvider, Pending (+6 more)

### Community 107 - "pixijs-scene-graphics/SKILL.md"
Cohesion: 0.50
Nodes (3): API Reference, Constructor options, Quick Start

### Community 108 - "Toolbar.tsx"
Cohesion: 0.07
Nodes (51): AuthMethod, Challenge, ChallengeQuestion, logout(), post(), RequestCodeOutcome, requestEmailCode(), startChallenge() (+43 more)

### Community 110 - "server/src/types/index.ts"
Cohesion: 0.07
Nodes (30): mongodb, ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember, STATUSES_MAP (+22 more)

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

### Community 113 - "TeamFrame"
Cohesion: 0.10
Nodes (24): EMPTY_IDS, SharpAvatarTracker(), View, Props, TeamFramesLayer(), Props, TeamOverviewLayer(), MembersTreeScene() (+16 more)

### Community 114 - "seedQuestions.ts"
Cohesion: 0.16
Nodes (6): answerMatches(), CYRILLIC_TO_LATIN, normalizeAnswer(), MIN_ACTIVE_QUESTIONS, db, DEMO_QUESTIONS

### Community 116 - "pixijs-scene-core-concepts/SKILL.md"
Cohesion: 0.14
Nodes (12): API Reference, Common Mistakes, [CRITICAL] Adding children to a leaf display object, [CRITICAL] Referencing DisplayObject, [HIGH] Forgetting isRenderGroup on large static subtrees, [HIGH] Treating child.x as world space, Leaf comparison: which skill covers which object, [MEDIUM] sortableChildren without zIndex (+4 more)

### Community 118 - "Common Mistakes"
Cohesion: 0.50
Nodes (4): Common Mistakes, [HIGH] Accessing app.renderer before init() resolves, [HIGH] Setting DOMAdapter after Application.init, [MEDIUM] Treating `preference` as a guarantee

### Community 119 - "aiFaces.ts"
Cohesion: 0.38
Nodes (3): createFaceSource(), Options, source()

### Community 120 - "constants/canvas/index.ts"
Cohesion: 0.36
Nodes (6): ACCIDENTAL_DRAG_MAX_DISTANCE, ACCIDENTAL_DRAG_MAX_MS, TAP_MOVE_TOLERANCE, PressStart, useTapWithoutDrag(), isTapGesture()

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
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 933 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Skill router` connect `Skill router` to `Common Mistakes`?**
  _High betweenness centrality (0.111) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _42 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `EditMemberForm.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.12322695035460993 - nodes in this community are weakly interconnected._
- **Why does `Point` connect `utils/membersTree/index.ts` to `Utilities`, `Skill router`, `teamLayout.ts`, `Direction`, `Direction`, `teamFrame.ts`, `EdgesLayer.tsx`, `TeamFrame`, `src/utils/index.ts`?**
  _High betweenness centrality (0.107) - this node is a cross-community bridge._
- **Should `src/types/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.1044776119402985 - nodes in this community are weakly interconnected._
- **Why does `react` connect `Sidebar.tsx` to `EditMemberForm.tsx`, `src/types/index.ts`, `Toolbar.tsx`, `FiltersPanel.tsx`, `MemberNode.tsx`, `PositionFormFields.tsx`, `filtersStore.ts`, `PhotoViewer.tsx`, `layout.tsx`, `MemberBirthdayAnimation.tsx`, `dimensions.ts`, `settingsStore.ts`, `pixi.js`, `membersStore.ts`, `MemberInfo.tsx`, `FilterState`, `package.json`, `useCanvasTheme.ts`, `MembersTreeContent.tsx`, `Direction`, `TeamInfoSidebar.tsx`, `ManageForm.tsx`, `http`, `AvatarFileInput.tsx`, `src/utils/index.ts`, `Member`, `MemberFormFields.tsx`, `useHoverNodeAnimation.ts`, `Direction`, `EdgesLayer.tsx`, `hooks/index.ts`, `utils/membersTree/index.ts`, `FilterState`, `Toolbar.tsx`, `TeamFrame`, `constants/canvas/index.ts`?**
  _High betweenness centrality (0.100) - this node is a cross-community bridge._
- **Should `memberService.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.14022988505747128 - nodes in this community are weakly interconnected._