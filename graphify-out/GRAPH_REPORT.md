# Graph Report - best-family-tree  (2026-11-13)

## Corpus Check
- 509 files · ~170,816 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 28 file(s) not represented in the graph (top: .prisma 9, (none) 6, .css 6)

## Summary
- 2588 nodes · 6510 edges · 122 communities (114 shown, 8 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 71 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `004f51bc`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- EditMemberForm.tsx
- src/types/index.ts
- MembersTreeContent.tsx
- MemberFilterCategory.tsx
- memberService.ts
- migrateMembersFromMongodb.ts
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
- useMembersStore
- dependencies
- server/package.json
- MemberInfo.tsx
- memberService.ts
- FilterState
- pixijs/SKILL.md
- package.json
- useCanvasTheme.ts
- constants/theme.ts
- Direction
- Core Patterns
- devDependencies
- ref_vitest
- memberRoutes.ts
- CLAUDE.md
- Core Patterns
- mime.ts
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
- ref_vitest
- importAllowedEmails.ts
- Core Patterns
- Scene Objects
- src/utils/index.ts
- Utilities
- types.ts
- Member
- BEST Family Tree
- Diagnosing Bugs
- AvatarFileInput.tsx
- Common Mistakes
- types/theme.ts
- teamLayout.ts
- Core Patterns
- Core Patterns
- dependencies
- seedQuestions.ts
- proxy.ts
- filtersStore.ts
- Core Patterns
- Core Patterns
- Core Patterns
- contactKeys.ts
- ThemeContext.tsx
- Core Patterns
- Constructor options (Container-inherited)
- Test-Driven Development
- GSAP Core
- Core Patterns
- pixi.js
- Foundations
- MemberStatus
- pixijs/SKILL.md
- Core Concepts
- TeamFormContent.tsx
- utils/membersTree/index.ts
- backup-prod.sh
- start-prod.sh
- restore-local.sh
- checkConfig.ts
- Core Patterns
- computeFilteredMembers.ts
- Render Loop
- pixijs-core-concepts/SKILL.md
- FilterState
- oidc.ts
- mailer/index.ts
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

## Communities (122 total, 8 thin omitted)

### Community 0 - "EditMemberForm.tsx"
Cohesion: 0.10
Nodes (41): editMember(), AddMemberForm(), buildMemberFormData(), ClearButton(), SubmitButton(), describeSubmitError(), EditMemberForm(), getInitialFormData() (+33 more)

### Community 1 - "src/types/index.ts"
Cohesion: 0.10
Nodes (37): @heroicons/react, tailwind-merge, PAIR_COLORS, Props, GLOW, Props, Props, Props (+29 more)

### Community 2 - "MembersTreeContent.tsx"
Cohesion: 0.05
Nodes (56): fetchSession(), SessionInfo, SharpAvatarTracker(), Viewport(), MemberSidebar(), Props, MembersTree(), Props (+48 more)

### Community 3 - "MemberFilterCategory.tsx"
Cohesion: 0.13
Nodes (23): FilterCategory(), LION_GROUP_ICON, LION_ICON, Props, MaskIcon(), Props, ACTIVITY_OPTIONS, ACTIVITY_STATES (+15 more)

### Community 4 - "memberService.ts"
Cohesion: 0.23
Nodes (16): buildMemberFields(), buildMemberUpdateFields(), buildSharedFields(), buildSparseMemberFields(), assertMentorExists(), assertNoMentorCycle(), assertUniqueContacts(), createMember() (+8 more)

### Community 5 - "migrateMembersFromMongodb.ts"
Cohesion: 0.18
Nodes (9): mongodb, ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember, STATUSES_MAP (+1 more)

### Community 6 - "MemberNode.tsx"
Cohesion: 0.09
Nodes (30): AVATAR_HIT_AREA, CARD_PIVOT, EMPTY_FILTERS, getCullArea(), MemberNode(), NODE_HIT_AREA, NODE_PIVOT, Props (+22 more)

### Community 7 - "sessions.ts"
Cohesion: 0.16
Nodes (20): isProduction(), SESSION_COOKIE, SESSION_TTL_MS, SIGN_IN_COOKIE, useSecureCookie(), clearSessionCookie(), createSession(), deleteSession() (+12 more)

### Community 8 - "PositionFormFields.tsx"
Cohesion: 0.12
Nodes (30): FieldError(), Props, Props, PositionFormFields(), Props, createEmptyPositionRow(), EMPTY_POSITION_ROW, findTeamByName() (+22 more)

### Community 9 - "ApplicationOptions reference"
Cohesion: 0.06
Nodes (32): Accessibility, ApplicationOptions reference, Background, Culler (CullerPluginOptions), Deprecated (GC — prefer the unified options above), Events, Garbage collection, Graphics (+24 more)

### Community 10 - "challenges.ts"
Cohesion: 0.14
Nodes (21): express-rate-limit, ChallengeState, isExpired(), isSolved(), pickRandom(), swapQuestion(), SwapResult, base (+13 more)

### Community 11 - "filtersStore.ts"
Cohesion: 0.09
Nodes (30): FiltersHeader(), Props, compare(), getSearchable(), MemberSearch(), Props, Props, SearchBar() (+22 more)

### Community 12 - "anonymizeDemo.ts"
Cohesion: 0.14
Nodes (18): allowed, args, byId, factory, GROUP_NAMES, memberPhotos, nextFace, real (+10 more)

### Community 13 - "Sidebar.tsx"
Cohesion: 0.08
Nodes (28): react, DropdownMenu(), Props, Props, BadgeInputField(), Props, useBadgeInputState(), Props (+20 more)

### Community 14 - "PhotoViewer.tsx"
Cohesion: 0.09
Nodes (37): zustand, isTreeReady(), MembersTree, MembersTreeDynamic(), TreeState, Props, PhotoViewer(), Viewer() (+29 more)

### Community 15 - "eligibility.ts"
Cohesion: 0.20
Nodes (12): EligibilityMember, EmailIdentity, MemberMatch, normalizeEmail(), resolveEmailIdentity(), resolveMemberMatch(), loadEmailIdentity(), phoneKey() (+4 more)

### Community 16 - "Common Mistakes"
Cohesion: 0.20
Nodes (10): Common Mistakes, [CRITICAL] App destroy without releaseGlobalResources, [HIGH] Destroying and recreating objects instead of recycling, [HIGH] Interleaving object types in scene graph, [HIGH] Loading many individual textures instead of spritesheets, [HIGH] Updating Text or HTMLText every frame, [HIGH] Using complex Graphics instead of textures, [MEDIUM] Not staggering bulk texture destruction (+2 more)

### Community 17 - "emailRoutes.ts"
Cohesion: 0.18
Nodes (14): authSecret(), isDemoMode(), prismaCodeStore, getMailer(), buildSessionInfo(), bodyEmail(), emailKey(), ipKey() (+6 more)

### Community 18 - "layout.tsx"
Cohesion: 0.20
Nodes (5): react-datepicker, metadata, nunito, RootLayout(), AuroraBackground()

### Community 19 - "catalogValidation.ts"
Cohesion: 0.06
Nodes (42): Renderer selection at runtime, [MEDIUM] Using container.name instead of container.label, multer, multer-storage-cloudinary, deleteCloudinaryImage(), extractCloudinaryPublicId(), MAX_UPLOAD_BYTES, uploadMiddleware() (+34 more)

### Community 20 - "MemberBirthdayAnimation.tsx"
Cohesion: 0.35
Nodes (8): BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props, acquireEmojiTextures(), createEmojiTexture(), generateRandomPosition(), releaseEmojiTextures()

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "dimensions.ts"
Cohesion: 0.09
Nodes (27): elkjs, Props, AVATAR_LOW_RES_SIZE, BIRTHDAY_ANIMATION_MIN_SCALE, CARD_VIEW_SCALE, GRID_GAP_X, GRID_LR_COLUMNS, MAX_RENDER_RESOLUTION (+19 more)

### Community 23 - "SettingsPanel.tsx"
Cohesion: 0.22
Nodes (8): EDGE_STYLE_OPTIONS, ORIENTATION_OPTIONS, Props, Section(), SectionProps, SettingsPanel(), THEME_OPTIONS, SegmentedSwitch()

### Community 24 - "teamService.ts"
Cohesion: 0.13
Nodes (28): getPositionKey(), ResolvedPosition, resolvePosition(), syncPositions(), MemberTransaction, assertCanEditMembers(), deleteMember(), deriveTeamName() (+20 more)

### Community 25 - "settingsStore.ts"
Cohesion: 0.31
Nodes (8): DEFAULT_SETTINGS, SETTINGS_STORAGE_KEY, SettingsActions, SettingsState, initialState, { storageMock }, OrientationSetting, ThemePreference

### Community 26 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, esModuleInterop, forceConsistentCasingInFileNames, module, moduleResolution, noImplicitAny, outDir, paths (+12 more)

### Community 27 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+12 more)

### Community 28 - "pixi.js"
Cohesion: 0.09
Nodes (39): MemberNodeCard(), Props, TeamBadge(), FILL_ALPHA, lerp(), Props, STROKE_ALPHA, TeamFrame() (+31 more)

### Community 29 - "useMembersStore"
Cohesion: 0.16
Nodes (15): react-dom, DropdownPortal(), Props, LineageFilterSection(), Props, LineageMemberSearch(), Props, membersActions (+7 more)

### Community 30 - "dependencies"
Cohesion: 0.11
Nodes (19): dependencies, date-fns, dotenv, elkjs, gsap, @gsap/react, @heroicons/react, lodash (+11 more)

### Community 31 - "server/package.json"
Cohesion: 0.05
Nodes (37): cloudinary, compression, concurrently, cors, express, helmet, nodemon, @prisma/config (+29 more)

### Community 32 - "MemberInfo.tsx"
Cohesion: 0.11
Nodes (28): cache, loadImageAspect(), PhotoOpenButton(), MemberAvatarImage(), MemberAvatarImageInner(), Props, MemberInfo(), Props (+20 more)

### Community 33 - "memberService.ts"
Cohesion: 0.14
Nodes (13): zod, ExistingMember, findClearedFields(), memberUpdateBodySchema, parsePhones(), sparseMemberBodySchema, splitName(), completeMember (+5 more)

### Community 34 - "FilterState"
Cohesion: 0.13
Nodes (25): BadgeInput(), BirthdayFilterSection(), CheckboxGroupFilterSection(), Option, Props, ClearButton(), FilterCheckbox(), Props (+17 more)

### Community 35 - "pixijs/SKILL.md"
Cohesion: 0.20
Nodes (8): API Reference, Quick Start, Fallback: canonical PixiJS docs, Foundations, How to use this skill, Scene Objects, Skill router, Utilities

### Community 36 - "package.json"
Cohesion: 0.11
Nodes (18): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+10 more)

### Community 37 - "useCanvasTheme.ts"
Cohesion: 0.28
Nodes (7): FONT_FAMILY, NODE_SUBTITLE_STYLE, NODE_TITLE_STYLE, NODE_TOOLTIP_TEXT_STYLE, TEXT_RESOLUTION, buildCanvasColors(), CanvasTextStyles

### Community 38 - "constants/theme.ts"
Cohesion: 0.25
Nodes (6): darkTheme, DEFAULT_THEME, lightTheme, THEMES, themeCssMap, themeInitScript

### Community 39 - "Direction"
Cohesion: 0.16
Nodes (20): LineageEdge(), DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN, MIN_ANIM_DURATION, PATTERN_LEN, RETRACT_BASE (+12 more)

### Community 40 - "Core Patterns"
Cohesion: 0.14
Nodes (18): Adding and removing children, Bounds and coordinate conversion, Constructor options, Container events, Core Patterns, Destroy, Finding and removing from parent, Leaves vs containers (+10 more)

### Community 41 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+5 more)

### Community 42 - "ref_vitest"
Cohesion: 0.27
Nodes (7): @faker-js/faker, createIdentityFactory(), firstFree(), OPERATOR_CODES, none, MAP, translit()

### Community 43 - "memberRoutes.ts"
Cohesion: 0.14
Nodes (14): @prisma/adapter-pg, adapter, prisma, parsePhoneNumbers(), MEMBER_INCLUDE, serializeMember(), assertCanEditMember(), uploadMemberPhoto (+6 more)

### Community 44 - "CLAUDE.md"
Cohesion: 0.25
Nodes (7): Commands, Conventions, Deployment & data, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout

### Community 45 - "Core Patterns"
Cohesion: 0.12
Nodes (15): Add, remove, swap, API Reference, Child queries, Common Mistakes, Container Hierarchy, Core Patterns, [CRITICAL] Adding children to a leaf, Destroying sub-trees (+7 more)

### Community 46 - "mime.ts"
Cohesion: 0.29
Nodes (11): RFC-2045, RFC-2047, createGmailMailer(), GmailConfig, base64Body(), buildMime(), encodeHeaderText(), formatAddress() (+3 more)

### Community 47 - "teamFrame.ts"
Cohesion: 0.10
Nodes (33): TEAM_COLUMN_GAP, TEAM_EDGE_DROP, TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_SPREAD_WIDTH, TEAM_EDGE_STUB, TEAM_FRAME_HEADER, TEAM_FRAME_MIN_WIDTH, TEAM_FRAME_PADDING (+25 more)

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "ManageForm.tsx"
Cohesion: 0.20
Nodes (15): DropdownSelectInput(), ManageForm(), MemberMode, Props, Section, SECTIONS, TEAM_KINDS, TeamKind (+7 more)

### Community 50 - "http"
Cohesion: 0.09
Nodes (42): addMember(), ApiError, toApiError(), deleteMember(), fetchFamilyTree(), fetchMemberById(), fetchMentorsList(), createRole() (+34 more)

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

### Community 57 - "ref_vitest"
Cohesion: 0.18
Nodes (3): hasDemoPhoto(), edges, ids

### Community 58 - "importAllowedEmails.ts"
Cohesion: 0.19
Nodes (12): AllowedRow, AllowlistDiff, diffAllowlist(), looksLikeEmail(), parseAllowlistCsv(), ParsedAllowlist, splitLine(), apply (+4 more)

### Community 59 - "Core Patterns"
Cohesion: 0.12
Nodes (17): Application destroy/recreate cycle, Batching optimization, cacheAsTexture for performance, Core Patterns, Culling, Filters and masks cost, Graphics performance, Low-level rendering optimizations (+9 more)

### Community 60 - "Scene Objects"
Cohesion: 0.18
Nodes (11): pixijs-html-source, pixijs-scene-container, pixijs-scene-dom-container, pixijs-scene-graphics, pixijs-scene-mesh, pixijs-scene-particle-container, pixijs-scene-sprite, pixijs-scene-text (+3 more)

### Community 61 - "src/utils/index.ts"
Cohesion: 0.09
Nodes (34): gsap, pixi-filters, NODE_HOVER_ANIMATION_DURATION, NODE_HOVER_SCALE, ZOOMED_OUT_HOVER_SCALE_MAP, NODE_HEIGHT, getFitViewTargetScale(), useFitViewAnimation() (+26 more)

### Community 62 - "Utilities"
Cohesion: 0.13
Nodes (15): Advanced, pixijs-accessibility, pixijs-assets, pixijs-blend-modes, pixijs-color, pixijs-custom-rendering, pixijs-events, pixijs-filters (+7 more)

### Community 63 - "types.ts"
Cohesion: 0.18
Nodes (12): canEditMember(), hasAccess(), RANK, CONTACT_FIELDS, toMemberResponse(), AccessRank, Express, Request (+4 more)

### Community 64 - "Member"
Cohesion: 0.09
Nodes (31): pixijs-scene-gif, Cloning, clearing, and bounds, Props, NodesLayer(), Props, Props, Props, Props (+23 more)

### Community 65 - "BEST Family Tree"
Cohesion: 0.11
Nodes (18): 1. Clone and configure environment, 2. Start the application, 3. Run database migrations, 4. Access the app, Architecture, Available Commands, Backend Commands (run inside container), Backups (+10 more)

### Community 66 - "Diagnosing Bugs"
Cohesion: 0.13
Nodes (14): Completion criterion: a tight loop that goes red, Diagnosing Bugs, Minimise, Non-deterministic bugs, Phase 1: Build a feedback loop, Phase 2: Reproduce + minimise, Phase 3: Hypothesise, Phase 4: Instrument (+6 more)

### Community 67 - "AvatarFileInput.tsx"
Cohesion: 0.14
Nodes (17): next, LionIcon(), Props, FacebookIcon(), InstagramIcon(), LinkedinIcon(), TelegramIcon(), Props (+9 more)

### Community 68 - "Common Mistakes"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [CRITICAL] Adding children to leaf scene objects, [HIGH] Expecting getBounds() to return a Rectangle, [HIGH] Using cacheAsBitmap instead of cacheAsTexture, [MEDIUM] Setting both pivot and origin on the same container, Quick Start

### Community 69 - "types/theme.ts"
Cohesion: 0.33
Nodes (6): ThemeContextValue, CanvasColors, CanvasThemeTokens, CssThemeTokens, ThemeDefinition, ThemeId

### Community 70 - "teamLayout.ts"
Cohesion: 0.11
Nodes (29): TEAM_FRAME_GAP, TEAM_PACK_ASPECT, failOver(), getWorker(), Pending, requestLayout(), runInline(), computeTeamLayout() (+21 more)

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

### Community 77 - "filtersStore.ts"
Cohesion: 0.15
Nodes (15): ALL_SECTIONS_CLOSED, FiltersPanel(), Props, MemberFilterCategory(), OPTIONS, Props, ViewModeSwitch(), EMPTY_FILTER_STATE (+7 more)

### Community 78 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, attach / detach, Common Mistakes, Core Patterns, [CRITICAL] Using `addChild` on a RenderLayer, [HIGH] Layer and attached children in different render groups, Layer + logical parent, Manual sort (+5 more)

### Community 79 - "Core Patterns"
Cohesion: 0.14
Nodes (13): Alpha mask (Sprite-based), API Reference, Common Mistakes, Core Patterns, [HIGH] Using cacheAsTexture with masks, Inverse masking, Mask channel selection, Mask type selection (+5 more)

### Community 80 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, Common Mistakes, Construction options, Core Patterns, [HIGH] Nesting many render groups, [MEDIUM] Constantly adding/removing from a render group, [MEDIUM] Overusing render groups, Profile before adding (+5 more)

### Community 81 - "contactKeys.ts"
Cohesion: 0.22
Nodes (10): duplicates, fields, groups, ContactFields, contactKey(), ContactPlatform, FIELD_PLATFORMS, findContactCollision() (+2 more)

### Community 82 - "ThemeContext.tsx"
Cohesion: 0.24
Nodes (11): applyCssTokens(), ThemeContext, ThemeProvider(), useIsMobileScreen(), useResolvedDirection(), noopSubscribe(), useIsHydrated(), useMediaQuery() (+3 more)

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

### Community 88 - "pixi.js"
Cohesion: 0.09
Nodes (20): @pixi/react, PixiElements, @gsap/react, pixi.js, @pixi/react, pixi-viewport, MemberNodeAvatar(), Props (+12 more)

### Community 89 - "Foundations"
Cohesion: 0.29
Nodes (7): Foundations, pixijs-application, pixijs-core-concepts, pixijs-create, pixijs-environments, pixijs-migration-v8, pixijs-scene-core-concepts

### Community 90 - "MemberStatus"
Cohesion: 0.13
Nodes (11): date-fns, FOUNDER_JOIN_YEAR, MENTOR_STATUSES, MemberStatus, Alumni, Baby, Full, Observer (+3 more)

### Community 91 - "pixijs/SKILL.md"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] buttonMode removed; use cursor, [HIGH] Default eventMode is passive, [HIGH] Move events only fire over the object in v8, [MEDIUM] Cursor does not inherit from parent, Quick Start

### Community 92 - "Core Concepts"
Cohesion: 0.18
Nodes (11): Container vs leaf (CRITICAL), Core Concepts, Culling, Destroy semantics, Lifecycle events, Masking, Render groups, Render order and explicit z-ordering (+3 more)

### Community 93 - "TeamFormContent.tsx"
Cohesion: 0.19
Nodes (18): ConfirmDeleteControl(), Props, PositionAssignmentFields(), PositionRowHeader(), FormMessages(), ComboboxInput(), FormCheckbox(), TextAreaInput() (+10 more)

### Community 94 - "utils/membersTree/index.ts"
Cohesion: 0.12
Nodes (34): EdgesLayer(), drawPolyline(), TeamEdgesLayer(), FIXED_EDGE_WIDTH, NODE_AVATAR_RADIUS, Point, SegmentData, alignSegments() (+26 more)

### Community 99 - "checkConfig.ts"
Cohesion: 0.19
Nodes (14): assertConfig(), configProblems(), databaseName(), demoProblems(), Env, googleProblems(), telegramProblems(), good (+6 more)

### Community 100 - "Core Patterns"
Cohesion: 0.12
Nodes (16): API Reference, Common Mistakes, Coordinate conversion, Core Patterns, Cumulative alpha (getGlobalAlpha), Global, local, and screen coordinates, [HIGH] Setting scale to 0, [MEDIUM] Confusing anchor and pivot (+8 more)

### Community 101 - "computeFilteredMembers.ts"
Cohesion: 0.13
Nodes (25): DEFAULT_NODE_HEIGHT, DEFAULT_NODE_WIDTH, DEFAULT_POSITION, FlowViewportDirection, areSetsEqual(), computeFilteredMembers(), getTeamSpan(), hasRole() (+17 more)

### Community 102 - "Render Loop"
Cohesion: 0.22
Nodes (8): API Reference, Common Mistakes, [CRITICAL] Treating the ticker callback arg as a number, Frame lifecycle, [HIGH] Using `updateTransform` for per-frame logic, [MEDIUM] Assuming ticker callbacks run after render, Quick Start, Render Loop

### Community 103 - "pixijs-core-concepts/SKILL.md"
Cohesion: 0.22
Nodes (8): API Reference, Decision guide, Environments, Quick concepts, Quick Start, Renderer = systems + pipes, The render loop, Topics

### Community 105 - "FilterState"
Cohesion: 0.10
Nodes (26): FilterGroupProps, Props, Props, Props, Props, Props, Props, FiltersActions (+18 more)

### Community 106 - "oidc.ts"
Cohesion: 0.13
Nodes (23): openid-client, callbackErrorRedirect(), decideGoogleSignIn(), GoogleClaims, GoogleDecision, decide(), verified, configs (+15 more)

### Community 107 - "mailer/index.ts"
Cohesion: 0.29
Nodes (6): consoleMailer, createResendMailer(), ResendConfig, message, Mailer, MailMessage

### Community 108 - "Toolbar.tsx"
Cohesion: 0.07
Nodes (49): AccessLevel, AuthMethod, Challenge, ChallengeQuestion, logout(), post(), RequestCodeOutcome, requestEmailCode() (+41 more)

### Community 110 - "server/src/types/index.ts"
Cohesion: 0.08
Nodes (30): loadFamilyTree, loadReducedFamilyTree, router, Member, MemberPositionWithRelations, MENTOR_STATUSES, ALUMNI, FULL (+22 more)

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

### Community 113 - "TeamFrame"
Cohesion: 0.10
Nodes (29): Props, Props, EMPTY_IDS, View, Props, Props, TeamFramesLayer(), Props (+21 more)

### Community 114 - "seedQuestions.ts"
Cohesion: 0.36
Nodes (5): answerMatches(), CYRILLIC_TO_LATIN, normalizeAnswer(), MIN_ACTIVE_QUESTIONS, DEMO_QUESTIONS

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
Cohesion: 0.30
Nodes (7): lineageEdgePath, ACCIDENTAL_DRAG_MAX_DISTANCE, ACCIDENTAL_DRAG_MAX_MS, TAP_MOVE_TOLERANCE, PressStart, useTapWithoutDrag(), isTapGesture()

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
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 935 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Skill router` connect `pixijs/SKILL.md` to `Utilities`?**
  _High betweenness centrality (0.119) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _42 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `EditMemberForm.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.10101010101010101 - nodes in this community are weakly interconnected._
- **Why does `react` connect `Sidebar.tsx` to `EditMemberForm.tsx`, `src/types/index.ts`, `MembersTreeContent.tsx`, `MemberNode.tsx`, `PositionFormFields.tsx`, `filtersStore.ts`, `PhotoViewer.tsx`, `MemberBirthdayAnimation.tsx`, `dimensions.ts`, `pixi.js`, `useMembersStore`, `MemberInfo.tsx`, `FilterState`, `package.json`, `useCanvasTheme.ts`, `Direction`, `ManageForm.tsx`, `http`, `src/utils/index.ts`, `Member`, `AvatarFileInput.tsx`, `filtersStore.ts`, `ThemeContext.tsx`, `pixi.js`, `TeamFormContent.tsx`, `utils/membersTree/index.ts`, `FilterState`, `Toolbar.tsx`, `TeamFrame`, `constants/canvas/index.ts`?**
  _High betweenness centrality (0.112) - this node is a cross-community bridge._
- **Should `src/types/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.09505541346973571 - nodes in this community are weakly interconnected._
- **Why does `Point` connect `utils/membersTree/index.ts` to `pixijs/SKILL.md`, `teamLayout.ts`, `teamFrame.ts`, `TeamFrame`, `dimensions.ts`, `src/utils/index.ts`, `Utilities`?**
  _High betweenness centrality (0.108) - this node is a cross-community bridge._
- **Should `MembersTreeContent.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.05442428730099963 - nodes in this community are weakly interconnected._