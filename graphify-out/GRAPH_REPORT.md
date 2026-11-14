# Graph Report - best-family-tree  (2026-11-14)

## Corpus Check
- 521 files · ~173,819 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 29 file(s) not represented in the graph (top: .prisma 9, (none) 7, .css 6)

## Summary
- 2626 nodes · 6634 edges · 123 communities (116 shown, 7 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 68 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `fc8a8f01`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- TeamMembersEditor.tsx
- colorClasses.ts
- Toolbar.tsx
- oidc.ts
- memberService.ts
- src/index.ts
- TeamInfoSidebar.tsx
- emailRoutes.ts
- PositionFormFields.tsx
- ApplicationOptions reference
- challenges.ts
- TeamSearch.tsx
- anonymizeDemo.ts
- react
- PhotoViewer.tsx
- useDashedPathAnimation.ts
- oidc.ts
- teamFrame.ts
- MembersTreeScene.tsx
- catalogValidation.ts
- useCardAnimation.ts
- HTML Report Format
- scale.ts
- SettingsPanel.tsx
- teamService.ts
- devDependencies
- compilerOptions
- compilerOptions
- pixi.js
- Member
- dependencies
- server/package.json
- MemberInfoSocial.tsx
- settingsStore.ts
- src/utils/index.ts
- Skill router
- package.json
- layout.tsx
- AccentColor
- utils/membersTree/index.ts
- Core Patterns
- devDependencies
- MembersTreeContent.tsx
- Common Mistakes
- CLAUDE.md
- Core Patterns
- bakeParams.ts
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
- tailwind-merge
- pixijs/SKILL.md
- Core Patterns
- Scene Objects
- mailer/index.ts
- contactKeys.ts
- AvatarFileInput.tsx
- filterTeams.ts
- BEST Family Tree
- Diagnosing Bugs
- src/types/index.ts
- ThemeContext.tsx
- mime.ts
- teamLayout.ts
- Core Patterns
- Core Patterns
- dependencies
- useTreeLayout.ts
- FiltersPanel.tsx
- MemberBirthdayAnimation.tsx
- constants/canvas/index.ts
- Core Patterns
- Core Patterns
- Core Patterns
- LineageMemberSearch.tsx
- pixi.js
- Core Patterns
- Constructor options (Container-inherited)
- Test-Driven Development
- GSAP Core
- Core Patterns
- fakeIdentity.ts
- Foundations
- TeamSearch.tsx
- Common Mistakes
- Core Concepts
- ref_vitest
- auth/types.ts
- backup-prod.sh
- start-prod.sh
- restore-local.sh
- memberPresentation.ts
- checkConfig.ts
- Core Patterns
- filterMembers.ts
- Render Loop
- pixijs-core-concepts/SKILL.md
- filterSearchParams.ts
- demoQuestions.test.ts
- devLogin.ts
- Toolbar.tsx
- useCanvasTheme.ts
- server/src/types/index.ts
- date-fns
- Renderers: WebGPU, WebGL, and Canvas
- pixijs/SKILL.md
- Common Mistakes
- pixijs-scene-core-concepts/SKILL.md
- GSAP with React
- hitl-loop.template.sh
- Core Patterns
- GSAP Performance
- GSAP Timeline
- Common Mistakes

## God Nodes (most connected - your core abstractions)
1. `react` - 119 edges
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

## Communities (123 total, 7 thin omitted)

### Community 0 - "TeamMembersEditor.tsx"
Cohesion: 0.39
Nodes (6): PositionRowHeader(), Props, getSummary(), Props, TeamMembersEditor(), TeamMemberRow

### Community 1 - "colorClasses.ts"
Cohesion: 0.19
Nodes (15): PAIR_COLORS, Props, GLOW, FieldError(), MemberFormFields(), SocialMediaFormFields(), AvatarFileInput(), DateInput() (+7 more)

### Community 2 - "Toolbar.tsx"
Cohesion: 0.46
Nodes (6): DemoBadge(), FiltersPanel(), Props, Toolbar(), usePanelToggle(), useFiltersStore

### Community 3 - "oidc.ts"
Cohesion: 0.19
Nodes (16): openid-client, callbackErrorRedirect(), configs, cookieOptions(), finishLogin(), getProviderConfig(), isProviderEnabled(), OidcProvider (+8 more)

### Community 4 - "memberService.ts"
Cohesion: 0.07
Nodes (39): @prisma/adapter-pg, zod, adapter, prisma, buildMemberFields(), buildMemberUpdateFields(), buildSharedFields(), buildSparseMemberFields() (+31 more)

### Community 5 - "src/index.ts"
Cohesion: 0.11
Nodes (18): compression, cors, helmet, app, checkOrigin(), WRITE_METHODS, router, router (+10 more)

### Community 6 - "TeamInfoSidebar.tsx"
Cohesion: 0.19
Nodes (16): AccessLevel, fetchSession(), SessionInfo, MemberSidebar(), Props, Props, TeamInfoSidebar(), Props (+8 more)

### Community 7 - "emailRoutes.ts"
Cohesion: 0.08
Nodes (41): express, authSecret(), CHALLENGE_TTL_MS, isDemoMode(), isProduction(), MIN_ACTIVE_QUESTIONS, QUESTIONS_SHOWN, SESSION_COOKIE (+33 more)

### Community 8 - "PositionFormFields.tsx"
Cohesion: 0.13
Nodes (30): PositionAssignmentFields(), Props, PositionFormFields(), Props, createEmptyPositionRow(), EMPTY_POSITION_ROW, findTeamByName(), getPositionRowSummary() (+22 more)

### Community 9 - "ApplicationOptions reference"
Cohesion: 0.06
Nodes (32): Accessibility, ApplicationOptions reference, Background, Culler (CullerPluginOptions), Deprecated (GC — prefer the unified options above), Events, Garbage collection, Graphics (+24 more)

### Community 10 - "challenges.ts"
Cohesion: 0.11
Nodes (25): express-rate-limit, ChallengeState, isExpired(), isSolved(), pickRandom(), swapQuestion(), SwapResult, base (+17 more)

### Community 11 - "TeamSearch.tsx"
Cohesion: 0.18
Nodes (10): FiltersHeader(), Props, matchesQuery(), Options, formatCount(), normalize(), PARTICIPANT_FORMS, PluralForms (+2 more)

### Community 12 - "anonymizeDemo.ts"
Cohesion: 0.12
Nodes (19): allowed, args, byId, factory, GROUP_NAMES, memberPhotos, nextFace, real (+11 more)

### Community 13 - "react"
Cohesion: 0.14
Nodes (18): react, DropdownMenu(), Props, BadgeInput(), Props, BadgeInputField(), Props, useBadgeInputState() (+10 more)

### Community 14 - "PhotoViewer.tsx"
Cohesion: 0.09
Nodes (37): zustand, isTreeReady(), MembersTree, MembersTreeDynamic(), TreeState, Props, PhotoViewer(), Viewer() (+29 more)

### Community 15 - "useDashedPathAnimation.ts"
Cohesion: 0.13
Nodes (20): LineageEdge(), DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN, MIN_ANIM_DURATION, PATTERN_LEN, RETRACT_BASE (+12 more)

### Community 16 - "oidc.ts"
Cohesion: 0.16
Nodes (17): EligibilityMember, EmailIdentity, MemberMatch, normalizeEmail(), resolveEmailIdentity(), resolveMemberMatch(), loadEmailIdentity(), decideGoogleSignIn() (+9 more)

### Community 17 - "teamFrame.ts"
Cohesion: 0.09
Nodes (36): TEAM_COLUMN_GAP, TEAM_EDGE_DROP, TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_SPREAD_WIDTH, TEAM_EDGE_STUB, TEAM_FRAME_HEADER, TEAM_FRAME_MIN_WIDTH, TEAM_FRAME_PADDING (+28 more)

### Community 18 - "MembersTreeScene.tsx"
Cohesion: 0.12
Nodes (25): Props, Props, Props, Props, TeamFramesLayer(), Props, FIXED_EDGE_WIDTH, TEAM_OVERVIEW_EDGE_ALPHA (+17 more)

### Community 19 - "catalogValidation.ts"
Cohesion: 0.09
Nodes (29): deleteCloudinaryImage(), extractCloudinaryPublicId(), router, TEAM_INCLUDE, uploadTeamIcon, rejectUpload(), router, uploadTeamTypeIcon (+21 more)

### Community 20 - "useCardAnimation.ts"
Cohesion: 0.20
Nodes (16): clamp01(), easeBackOut, easePower2In, easePower2Out, entries, Entry, finishCardReveal(), registerCardReveal() (+8 more)

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "scale.ts"
Cohesion: 0.21
Nodes (12): EMPTY_IDS, SharpAvatarTracker(), View, AVATAR_LOW_RES_SIZE, MAX_RENDER_RESOLUTION, NODE_AVATAR_SIZE, TEAM_OVERVIEW_END_SCALE, TEAM_OVERVIEW_FAST_FACTOR (+4 more)

### Community 23 - "SettingsPanel.tsx"
Cohesion: 0.16
Nodes (11): OPTIONS, Props, ViewModeSwitch(), EDGE_STYLE_OPTIONS, ORIENTATION_OPTIONS, Props, Section(), SectionProps (+3 more)

### Community 24 - "teamService.ts"
Cohesion: 0.15
Nodes (26): getPositionKey(), ResolvedPosition, resolvePosition(), syncPositions(), MemberTransaction, deleteMember(), deriveTeamName(), resolveRole() (+18 more)

### Community 25 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, concurrently, @faker-js/faker, nodemon, ts-node, tsx, @types/compression, @types/cors (+5 more)

### Community 26 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, esModuleInterop, forceConsistentCasingInFileNames, module, moduleResolution, noImplicitAny, outDir, paths (+12 more)

### Community 27 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+12 more)

### Community 28 - "pixi.js"
Cohesion: 0.09
Nodes (40): MemberNodeCard(), Props, TeamBadge(), FILL_ALPHA, lerp(), Props, STROKE_ALPHA, TeamFrame() (+32 more)

### Community 29 - "Member"
Cohesion: 0.08
Nodes (36): Props, NodesLayer(), Props, Props, Props, Props, Props, membersActions (+28 more)

### Community 30 - "dependencies"
Cohesion: 0.11
Nodes (19): dependencies, date-fns, dotenv, elkjs, gsap, @gsap/react, @heroicons/react, lodash (+11 more)

### Community 31 - "server/package.json"
Cohesion: 0.06
Nodes (31): cloudinary, concurrently, multer, multer-storage-cloudinary, nodemon, @prisma/config, ts-node, tsx (+23 more)

### Community 32 - "MemberInfoSocial.tsx"
Cohesion: 0.32
Nodes (7): FacebookIcon(), InstagramIcon(), LinkedinIcon(), TelegramIcon(), Props, MemberInfoSocial(), Props

### Community 33 - "settingsStore.ts"
Cohesion: 0.27
Nodes (10): DEFAULT_SETTINGS, readLegacyTheme(), SETTINGS_STORAGE_KEY, SettingsActions, SettingsState, initialState, { storageMock }, useSettingsStore (+2 more)

### Community 34 - "src/utils/index.ts"
Cohesion: 0.12
Nodes (26): BirthdayFilterSection(), Props, CheckboxGroupFilterSection(), Option, Props, ClearButton(), FilterCheckbox(), Props (+18 more)

### Community 35 - "Skill router"
Cohesion: 0.15
Nodes (13): Advanced, pixijs-accessibility, pixijs-assets, pixijs-blend-modes, pixijs-custom-rendering, pixijs-filters, pixijs-performance, Advanced (+5 more)

### Community 36 - "package.json"
Cohesion: 0.11
Nodes (18): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+10 more)

### Community 37 - "layout.tsx"
Cohesion: 0.17
Nodes (8): react-datepicker, metadata, nunito, RootLayout(), AuroraBackground(), readNumber(), useBakedAurora(), canBakeAurora()

### Community 38 - "AccentColor"
Cohesion: 0.11
Nodes (23): Props, FitViewButton(), Props, Props, ToolbarIconButton(), Props, ToolbarTooltip(), useHoverTooltip() (+15 more)

### Community 39 - "utils/membersTree/index.ts"
Cohesion: 0.12
Nodes (33): EdgesLayer(), drawPolyline(), TeamEdgesLayer(), NODE_AVATAR_RADIUS, Point, buildSegmentFromPositions(), DashStrokeOptions, lerpSegment() (+25 more)

### Community 40 - "Core Patterns"
Cohesion: 0.14
Nodes (18): Adding and removing children, Bounds and coordinate conversion, Constructor options, Container events, Core Patterns, Destroy, Finding and removing from parent, Leaves vs containers (+10 more)

### Community 41 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+5 more)

### Community 42 - "MembersTreeContent.tsx"
Cohesion: 0.17
Nodes (16): MembersTree(), Props, ACCENT_COLOR_MAP, EVENT_FEATURES, MembersTreeContent(), ViewportCulling(), MemberSidebarContent(), useMembersActions() (+8 more)

### Community 43 - "Common Mistakes"
Cohesion: 0.20
Nodes (10): Common Mistakes, [CRITICAL] App destroy without releaseGlobalResources, [HIGH] Destroying and recreating objects instead of recycling, [HIGH] Interleaving object types in scene graph, [HIGH] Loading many individual textures instead of spritesheets, [HIGH] Updating Text or HTMLText every frame, [HIGH] Using complex Graphics instead of textures, [MEDIUM] Not staggering bulk texture destruction (+2 more)

### Community 44 - "CLAUDE.md"
Cohesion: 0.25
Nodes (7): Commands, Conventions, Deployment & data, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout

### Community 45 - "Core Patterns"
Cohesion: 0.12
Nodes (15): Add, remove, swap, API Reference, Child queries, Common Mistakes, Container Hierarchy, Core Patterns, [CRITICAL] Adding children to a leaf, Destroying sub-trees (+7 more)

### Community 46 - "bakeParams.ts"
Cohesion: 0.27
Nodes (13): AuroraBakeInput, bakeAuroraLayers(), BAKE_SCALE, BLUR_SPREAD, CONIC_LAYERS, ConicLayerSpec, cssAngleToCanvasRadians(), getBakeFilter() (+5 more)

### Community 47 - "useTreeDirection.ts"
Cohesion: 0.70
Nodes (3): useIsMobileScreen(), useResolvedDirection(), useMediaQuery()

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "TeamFormContent.tsx"
Cohesion: 0.08
Nodes (35): Props, FormMessages(), Props, toYear(), YearRangeInput(), ManageForm(), MemberMode, Section (+27 more)

### Community 50 - "http"
Cohesion: 0.05
Nodes (74): addMember(), ApiError, toApiError(), deleteMember(), editMember(), fetchFamilyTree(), fetchMemberById(), fetchMentorsList() (+66 more)

### Community 51 - "AGENTS.md"
Cohesion: 0.25
Nodes (7): Commands, Conventions, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout, This is NOT the Next.js you know

### Community 52 - "scripts"
Cohesion: 0.20
Nodes (10): scripts, build, db:backup-prod, db:restore-local, dev, dev:webpack, lint, start (+2 more)

### Community 53 - "emailCodes.ts"
Cohesion: 0.07
Nodes (30): AllowedRow, AllowlistDiff, diffAllowlist(), looksLikeEmail(), parseAllowlistCsv(), ParsedAllowlist, splitLine(), CODE_TTL_MS (+22 more)

### Community 54 - "BEST Family Tree"
Cohesion: 0.33
Nodes (5): BEST Family Tree, People, Sign-in, Teams, Views

### Community 57 - "tailwind-merge"
Cohesion: 0.11
Nodes (31): @heroicons/react, tailwind-merge, Props, cache, loadImageAspect(), PhotoOpenButton(), MemberAvatarImage(), MemberAvatarImageInner() (+23 more)

### Community 58 - "pixijs/SKILL.md"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] buttonMode removed; use cursor, [HIGH] Default eventMode is passive, [HIGH] Move events only fire over the object in v8, [MEDIUM] Cursor does not inherit from parent, Quick Start

### Community 59 - "Core Patterns"
Cohesion: 0.12
Nodes (17): Application destroy/recreate cycle, Batching optimization, cacheAsTexture for performance, Core Patterns, Culling, Filters and masks cost, Graphics performance, Low-level rendering optimizations (+9 more)

### Community 60 - "Scene Objects"
Cohesion: 0.14
Nodes (13): pixijs-html-source, pixijs-scene-container, pixijs-scene-dom-container, pixijs-scene-gif, pixijs-scene-graphics, pixijs-scene-mesh, pixijs-scene-particle-container, pixijs-scene-sprite (+5 more)

### Community 61 - "mailer/index.ts"
Cohesion: 0.23
Nodes (9): consoleMailer, createGmailMailer(), GmailConfig, getMailer(), createResendMailer(), ResendConfig, message, Mailer (+1 more)

### Community 62 - "contactKeys.ts"
Cohesion: 0.18
Nodes (13): assertUniqueContacts(), duplicates, fields, groups, contactField(), ContactFields, contactKey(), contactLabel() (+5 more)

### Community 63 - "AvatarFileInput.tsx"
Cohesion: 0.18
Nodes (10): next, LionIcon(), Props, Props, LogoFileInput(), Props, config, exceedsUploadLimit() (+2 more)

### Community 64 - "filterTeams.ts"
Cohesion: 0.17
Nodes (17): DEFAULT_NODE_HEIGHT, DEFAULT_NODE_WIDTH, DEFAULT_POSITION, FlowViewportDirection, getTeamSpan(), hasRole(), hasTeamCriteria(), matchesPeriod() (+9 more)

### Community 65 - "BEST Family Tree"
Cohesion: 0.11
Nodes (18): 1. Clone and configure environment, 2. Start the application, 3. Run database migrations, 4. Access the app, Architecture, Available Commands, Backend Commands (run inside container), Backups (+10 more)

### Community 66 - "Diagnosing Bugs"
Cohesion: 0.13
Nodes (14): Completion criterion: a tight loop that goes red, Diagnosing Bugs, Minimise, Non-deterministic bugs, Phase 1: Build a feedback loop, Phase 2: Reproduce + minimise, Phase 3: Hypothesise, Phase 4: Instrument (+6 more)

### Community 67 - "src/types/index.ts"
Cohesion: 0.12
Nodes (15): Props, Props, Props, Props, Sidebar(), SidebarFooterContext, Props, SidebarHandle() (+7 more)

### Community 68 - "ThemeContext.tsx"
Cohesion: 0.13
Nodes (16): darkTheme, DEFAULT_THEME, lightTheme, THEMES, applyCssTokens(), ThemeContext, ThemeContextValue, ThemeProvider() (+8 more)

### Community 69 - "mime.ts"
Cohesion: 0.35
Nodes (9): RFC-2045, RFC-2047, base64Body(), buildMime(), encodeHeaderText(), formatAddress(), isAscii(), noLineBreaks() (+1 more)

### Community 70 - "teamLayout.ts"
Cohesion: 0.08
Nodes (39): elkjs, TEAM_FRAME_GAP, TEAM_PACK_ASPECT, failOver(), getWorker(), Pending, requestLayout(), runInline() (+31 more)

### Community 71 - "Core Patterns"
Cohesion: 0.13
Nodes (14): API Reference, boundsArea optimization, Common Mistakes, Core Patterns, Culling, HIGH: Expecting automatic culling, HIGH: Using addChild on RenderLayer, MEDIUM: Expecting filters on ancestors to apply to layer children (+6 more)

### Community 72 - "Core Patterns"
Cohesion: 0.14
Nodes (13): Advanced shape primitives, Core Patterns, Default styles via setFillStyle / setStrokeStyle, Draw-time transforms, Drawing a texture directly, Gradients and patterns, GraphicsContext sharing, GraphicsContext utilities (+5 more)

### Community 73 - "dependencies"
Cohesion: 0.06
Nodes (33): dependencies, cloudinary, compression, cors, dotenv, express, express-rate-limit, helmet (+25 more)

### Community 74 - "useTreeLayout.ts"
Cohesion: 0.12
Nodes (27): Viewport(), MembersTreeScene(), NODE_HEIGHT, getFitViewTargetScale(), useFitViewAnimation(), useFocusFrameAnimation(), useFocusNodeAnimation(), useViewportAnimation() (+19 more)

### Community 75 - "FiltersPanel.tsx"
Cohesion: 0.15
Nodes (16): FilterCategory(), LION_GROUP_ICON, LION_ICON, Props, FilterGroupProps, ALL_SECTIONS_CLOSED, Props, MemberFilterCategory() (+8 more)

### Community 76 - "MemberBirthdayAnimation.tsx"
Cohesion: 0.35
Nodes (8): BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props, acquireEmojiTextures(), createEmojiTexture(), generateRandomPosition(), releaseEmojiTextures()

### Community 77 - "constants/canvas/index.ts"
Cohesion: 0.07
Nodes (37): AVATAR_HIT_AREA, CARD_PIVOT, EMPTY_FILTERS, getCullArea(), MemberNode(), NODE_HIT_AREA, NODE_PIVOT, Props (+29 more)

### Community 78 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, attach / detach, Common Mistakes, Core Patterns, [CRITICAL] Using `addChild` on a RenderLayer, [HIGH] Layer and attached children in different render groups, Layer + logical parent, Manual sort (+5 more)

### Community 79 - "Core Patterns"
Cohesion: 0.14
Nodes (13): Alpha mask (Sprite-based), API Reference, Common Mistakes, Core Patterns, [HIGH] Using cacheAsTexture with masks, Inverse masking, Mask channel selection, Mask type selection (+5 more)

### Community 80 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, Common Mistakes, Construction options, Core Patterns, [HIGH] Nesting many render groups, [MEDIUM] Constantly adding/removing from a render group, [MEDIUM] Overusing render groups, Profile before adding (+5 more)

### Community 81 - "LineageMemberSearch.tsx"
Cohesion: 0.29
Nodes (7): react-dom, DropdownPortal(), Props, LineageFilterSection(), Props, LineageMemberSearch(), Props

### Community 82 - "pixi.js"
Cohesion: 0.08
Nodes (26): @pixi/react, PixiElements, gsap, @gsap/react, pixi-filters, pixi.js, @pixi/react, pixi-viewport (+18 more)

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

### Community 88 - "fakeIdentity.ts"
Cohesion: 0.27
Nodes (7): @faker-js/faker, createIdentityFactory(), firstFree(), OPERATOR_CODES, none, MAP, translit()

### Community 89 - "Foundations"
Cohesion: 0.14
Nodes (13): Foundations, pixijs-application, pixijs-color, pixijs-core-concepts, pixijs-create, pixijs-environments, pixijs-events, pixijs-math (+5 more)

### Community 90 - "TeamSearch.tsx"
Cohesion: 0.16
Nodes (19): compare(), getSearchable(), MemberSearch(), Props, Props, SearchBar(), SearchPanel(), Props (+11 more)

### Community 91 - "Common Mistakes"
Cohesion: 0.18
Nodes (10): Renderer selection at runtime, API Reference, Common Mistakes, [CRITICAL] Adding children to leaf scene objects, [HIGH] Expecting getBounds() to return a Rectangle, [HIGH] Using cacheAsBitmap instead of cacheAsTexture, [MEDIUM] Setting both pivot and origin on the same container, [MEDIUM] Using container.name instead of container.label (+2 more)

### Community 92 - "Core Concepts"
Cohesion: 0.18
Nodes (11): Container vs leaf (CRITICAL), Core Concepts, Culling, Destroy semantics, Lifecycle events, Masking, Render groups, Render order and explicit z-ordering (+3 more)

### Community 93 - "ref_vitest"
Cohesion: 0.22
Nodes (3): createFaceSource(), Options, source()

### Community 94 - "auth/types.ts"
Cohesion: 0.16
Nodes (14): canEditMember(), hasAccess(), RANK, CONTACT_FIELDS, toMemberResponse(), AccessRank, Express, Request (+6 more)

### Community 98 - "memberPresentation.ts"
Cohesion: 0.25
Nodes (8): CloudinaryTransformations, getPhotoUrlAsAvatar(), getPhotoUrlAsRoundAvatar(), formatMemberRecruitmentSeason(), formatRecruitmentTerm(), getMemberNodeAvatar(), RECRUITMENT_SEASON_EMOJI, RECRUITMENT_SEASON_LABEL

### Community 99 - "checkConfig.ts"
Cohesion: 0.19
Nodes (14): assertConfig(), configProblems(), databaseName(), demoProblems(), Env, googleProblems(), telegramProblems(), good (+6 more)

### Community 100 - "Core Patterns"
Cohesion: 0.12
Nodes (16): API Reference, Common Mistakes, Coordinate conversion, Core Patterns, Cumulative alpha (getGlobalAlpha), Global, local, and screen coordinates, [HIGH] Setting scale to 0, [MEDIUM] Confusing anchor and pivot (+8 more)

### Community 101 - "filterMembers.ts"
Cohesion: 0.12
Nodes (24): EMPTY_FILTER_STATE, derive(), FiltersActions, FiltersState, initialState, initialFiltersState, areSetsEqual(), computeFilteredMembers() (+16 more)

### Community 102 - "Render Loop"
Cohesion: 0.22
Nodes (8): API Reference, Common Mistakes, [CRITICAL] Treating the ticker callback arg as a number, Frame lifecycle, [HIGH] Using `updateTransform` for per-frame logic, [MEDIUM] Assuming ticker callbacks run after render, Quick Start, Render Loop

### Community 103 - "pixijs-core-concepts/SKILL.md"
Cohesion: 0.22
Nodes (8): API Reference, Decision guide, Environments, Quick concepts, Quick Start, Renderer = systems + pipes, The render loop, Topics

### Community 104 - "filterSearchParams.ts"
Cohesion: 0.08
Nodes (34): ACTIVITY_OPTIONS, ACTIVITY_STATES, AVATAR_OPTIONS, AVATAR_VALUES, JOIN_SEASONS, MEMBER_STATUSES, SEASON_OPTIONS, STATUS_OPTIONS (+26 more)

### Community 105 - "demoQuestions.test.ts"
Cohesion: 0.43
Nodes (4): answerMatches(), CYRILLIC_TO_LATIN, normalizeAnswer(), DEMO_QUESTIONS

### Community 106 - "devLogin.ts"
Cohesion: 0.48
Nodes (5): databaseHost(), devLoginProblems(), Env, isDevLoginEnabled(), LOCAL_HOSTS

### Community 108 - "Toolbar.tsx"
Cohesion: 0.06
Nodes (55): AuthMethod, Challenge, ChallengeQuestion, logout(), post(), RequestCodeOutcome, requestEmailCode(), startChallenge() (+47 more)

### Community 109 - "useCanvasTheme.ts"
Cohesion: 0.24
Nodes (9): FONT_FAMILY, NODE_SUBTITLE_STYLE, NODE_TITLE_STYLE, NODE_TOOLTIP_TEXT_STYLE, TEXT_RESOLUTION, buildCanvasColors(), CanvasColors, CanvasTextStyles (+1 more)

### Community 110 - "server/src/types/index.ts"
Cohesion: 0.07
Nodes (31): mongodb, ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember, STATUSES_MAP (+23 more)

### Community 111 - "date-fns"
Cohesion: 0.67
Nodes (3): date-fns, generateGoogleCalendarLink(), getClosestBirthday()

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

### Community 113 - "pixijs/SKILL.md"
Cohesion: 0.20
Nodes (7): API Reference, Quick Start, API Reference, Constructor options, Quick Start, Fallback: canonical PixiJS docs, How to use this skill

### Community 115 - "Common Mistakes"
Cohesion: 0.50
Nodes (4): Common Mistakes, [HIGH] Accessing app.renderer before init() resolves, [HIGH] Setting DOMAdapter after Application.init, [MEDIUM] Treating `preference` as a guarantee

### Community 116 - "pixijs-scene-core-concepts/SKILL.md"
Cohesion: 0.14
Nodes (12): API Reference, Common Mistakes, [CRITICAL] Adding children to a leaf display object, [CRITICAL] Referencing DisplayObject, [HIGH] Forgetting isRenderGroup on large static subtrees, [HIGH] Treating child.x as world space, Leaf comparison: which skill covers which object, [MEDIUM] sortableChildren without zIndex (+4 more)

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
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 939 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Skill router` connect `Skill router` to `pixijs/SKILL.md`?**
  _High betweenness centrality (0.120) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _42 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `memberService.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07474747474747474 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `TeamMembersEditor.tsx`, `colorClasses.ts`, `Toolbar.tsx`, `TeamInfoSidebar.tsx`, `PositionFormFields.tsx`, `TeamSearch.tsx`, `PhotoViewer.tsx`, `useDashedPathAnimation.ts`, `MembersTreeScene.tsx`, `useCardAnimation.ts`, `scale.ts`, `pixi.js`, `Member`, `src/utils/index.ts`, `package.json`, `layout.tsx`, `AccentColor`, `utils/membersTree/index.ts`, `MembersTreeContent.tsx`, `useTreeDirection.ts`, `TeamFormContent.tsx`, `http`, `tailwind-merge`, `AvatarFileInput.tsx`, `src/types/index.ts`, `ThemeContext.tsx`, `useTreeLayout.ts`, `FiltersPanel.tsx`, `MemberBirthdayAnimation.tsx`, `constants/canvas/index.ts`, `LineageMemberSearch.tsx`, `pixi.js`, `TeamSearch.tsx`, `filterSearchParams.ts`, `Toolbar.tsx`, `useCanvasTheme.ts`?**
  _High betweenness centrality (0.108) - this node is a cross-community bridge._
- **Should `src/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.11076923076923077 - nodes in this community are weakly interconnected._
- **Why does `Point` connect `utils/membersTree/index.ts` to `Skill router`, `teamLayout.ts`, `useTreeLayout.ts`, `teamFrame.ts`, `MembersTreeScene.tsx`, `Foundations`?**
  _High betweenness centrality (0.105) - this node is a cross-community bridge._
- **Should `emailRoutes.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.08215488215488216 - nodes in this community are weakly interconnected._