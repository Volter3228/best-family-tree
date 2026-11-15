# Graph Report - best-family-tree  (2026-11-15)

## Corpus Check
- 544 files · ~177,063 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 29 file(s) not represented in the graph (top: .prisma 9, (none) 7, .css 6)

## Summary
- 2694 nodes · 6891 edges · 143 communities (135 shown, 8 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 67 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d7b4f908`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- TeamInfoSidebar.tsx
- mime.ts
- emailRoutes.ts
- filterSearchParams.ts
- hooks/index.ts
- FilterState
- oidc.ts
- MembersTreeContent.tsx
- TeamFormContent.tsx
- ApplicationOptions reference
- teamFrame.ts
- contactKeys.ts
- anonymizeDemo.ts
- dimensions.ts
- PhotoViewer.tsx
- useDashedPathAnimation.ts
- TeamSearch.tsx
- clientInstance.ts
- MembersTreeScene.tsx
- catalogValidation.ts
- httpErrors.ts
- HTML Report Format
- MemberInfo.tsx
- SettingsPanel.tsx
- memberService.ts
- useCardAnimation.ts
- compilerOptions
- compilerOptions
- pixi.js
- Member
- dependencies
- server/package.json
- EditMemberForm.tsx
- utils/strings.ts
- src/utils/index.ts
- ManageForm.tsx
- package.json
- ThemeContext.tsx
- ref_vitest
- Direction
- Core Patterns
- devDependencies
- Common Mistakes
- memberRoutes.ts
- CLAUDE.md
- Container Hierarchy
- importAllowedEmails.ts
- mailer/index.ts
- During the session
- TeamFormContent.tsx
- http
- AGENTS.md
- scripts
- emailRoutes.ts
- BEST Family Tree
- next.config.mjs
- postcss.config.mjs
- src/index.ts
- pixijs/SKILL.md
- Core Patterns
- emailCodes.ts
- checkConfig.ts
- pixi.js
- AvatarFileInput.tsx
- filterMembers.ts
- BEST Family Tree
- Diagnosing Bugs
- react
- filtersStore.ts
- auth/types.ts
- protocol.ts
- Core Patterns
- Core Patterns
- dependencies
- treeStore.ts
- MemberInfoActions.tsx
- Common Mistakes
- MemberFormFields.tsx
- Core Patterns
- Core Patterns
- Core Patterns
- devDependencies
- MemberFilterCategory.tsx
- Core Patterns
- Constructor options (Container-inherited)
- Test-Driven Development
- GSAP Core
- Core Patterns
- eligibility.ts
- Foundations
- EdgeStyle
- FitViewButton.tsx
- Core Concepts
- useHoverNodeAnimation.ts
- SeasonMotif.tsx
- backup-prod.sh
- start-prod.sh
- restore-local.sh
- Common Mistakes
- devLogin.ts
- Core Patterns
- src/utils/index.ts
- Render Loop
- pixijs-core-concepts/SKILL.md
- MemberFilterCategory.tsx
- edgeGeometry.ts
- Toolbar.tsx
- src/types/index.ts
- Toolbar.tsx
- photoViewerMath.ts
- server/src/types/index.ts
- MemberNode.tsx
- Renderers: WebGPU, WebGL, and Canvas
- Core Patterns
- Core Patterns
- Common Mistakes
- pixijs-scene-core-concepts/SKILL.md
- elk.ts
- Quick concepts
- Direction
- aiFaces.ts
- constants/canvas/index.ts
- layout.tsx
- Toolbar.tsx
- importAllowedEmails.ts
- Position
- seedQuestions.ts
- utils/membersTree/index.ts
- telegramEligibility.ts
- GSAP with React
- Sidebar.tsx
- hitl-loop.template.sh
- teamPacking.ts
- MemberNodeCard.tsx
- TeamFrame
- GSAP Performance
- GSAP Timeline
- searchShortcut.ts
- ui/index.ts
- ref_vitest
- useSearchSuggestions.ts

## God Nodes (most connected - your core abstractions)
1. `AccentColor` - 131 edges
2. `react` - 125 edges
3. `Member` - 66 edges
4. `tailwind-merge` - 65 edges
5. `COLOR_CLASSES` - 47 edges
6. `TeamFrame` - 40 edges
7. `@heroicons/react` - 34 edges
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

## Communities (143 total, 8 thin omitted)

### Community 0 - "TeamInfoSidebar.tsx"
Cohesion: 0.19
Nodes (15): MemberSidebar(), Props, Props, TeamInfoSidebar(), HeaderChip(), MemberSidebarContent(), Props, SidebarMinimizedSummary() (+7 more)

### Community 1 - "mime.ts"
Cohesion: 0.29
Nodes (11): RFC-2045, RFC-2047, createGmailMailer(), GmailConfig, base64Body(), buildMime(), encodeHeaderText(), formatAddress() (+3 more)

### Community 2 - "emailRoutes.ts"
Cohesion: 0.12
Nodes (27): CHALLENGE_TTL_MS, isDemoMode(), isProduction(), QUESTIONS_SHOWN, SESSION_COOKIE, SESSION_TTL_MS, SIGN_IN_COOKIE, useSecureCookie() (+19 more)

### Community 3 - "filterSearchParams.ts"
Cohesion: 0.20
Nodes (12): Props, AvatarFilterValue, filtersToSearchParams(), parseCsvArray(), parseCsvStrings(), parseFiltersFromSearchParams(), parseNumberOrNull(), parseTreeMode() (+4 more)

### Community 4 - "hooks/index.ts"
Cohesion: 0.16
Nodes (21): FieldError(), MemberFormFields(), Props, SocialMediaFormFields(), AvatarFileInput(), DateInput(), DropdownSelectInput(), TextInput() (+13 more)

### Community 5 - "FilterState"
Cohesion: 0.19
Nodes (13): Props, CheckboxGroupFilterSection(), Option, Props, FilterSection(), Props, LineageFilterSection(), Props (+5 more)

### Community 6 - "oidc.ts"
Cohesion: 0.16
Nodes (17): Container events, Transform, Lifecycle events, Origin (new in v8), openid-client, configs, cookieOptions(), finishLogin() (+9 more)

### Community 7 - "MembersTreeContent.tsx"
Cohesion: 0.28
Nodes (12): SharpAvatarTracker(), Viewport(), EVENT_FEATURES, MembersTreeContent(), ViewportCulling(), useMembersActions(), useFilterSearchParams(), useSyncMembers() (+4 more)

### Community 8 - "TeamFormContent.tsx"
Cohesion: 0.15
Nodes (28): PositionAssignmentFields(), Props, PositionFormFields(), Props, createEmptyPositionRow(), EMPTY_POSITION_ROW, findTeamByName(), getPositionRowSummary() (+20 more)

### Community 9 - "ApplicationOptions reference"
Cohesion: 0.06
Nodes (32): Accessibility, ApplicationOptions reference, Background, Culler (CullerPluginOptions), Deprecated (GC — prefer the unified options above), Events, Garbage collection, Graphics (+24 more)

### Community 10 - "teamFrame.ts"
Cohesion: 0.11
Nodes (30): TEAM_COLUMN_GAP, TEAM_EDGE_DROP, TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_SPREAD_WIDTH, TEAM_EDGE_STUB, TEAM_FRAME_HEADER, TEAM_FRAME_MIN_WIDTH, TEAM_FRAME_PADDING (+22 more)

### Community 11 - "contactKeys.ts"
Cohesion: 0.20
Nodes (10): duplicates, fields, groups, ContactFields, contactKey(), ContactPlatform, FIELD_PLATFORMS, findContactCollision() (+2 more)

### Community 12 - "anonymizeDemo.ts"
Cohesion: 0.11
Nodes (18): allowed, args, byId, factory, GROUP_NAMES, memberPhotos, nextFace, real (+10 more)

### Community 13 - "dimensions.ts"
Cohesion: 0.11
Nodes (20): Props, AVATAR_LOW_RES_SIZE, BIRTHDAY_ANIMATION_MIN_SCALE, CARD_VIEW_SCALE, GRID_GAP_X, GRID_LR_COLUMNS, MAX_RENDER_RESOLUTION, MAX_VIEWPORT_ZOOM (+12 more)

### Community 14 - "PhotoViewer.tsx"
Cohesion: 0.16
Nodes (17): zustand, DropdownPortal(), Props, PhotoViewer(), thumbRadius(), Viewer(), viewportRect(), BUTTON (+9 more)

### Community 15 - "useDashedPathAnimation.ts"
Cohesion: 0.13
Nodes (26): DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN, MIN_ANIM_DURATION, PATTERN_LEN, RETRACT_BASE, SPEED (+18 more)

### Community 16 - "TeamSearch.tsx"
Cohesion: 0.23
Nodes (11): Props, SearchPanel(), SearchSuggestionRow(), compare(), getSearchable(), getSubtitle(), TeamSearch(), Props (+3 more)

### Community 17 - "clientInstance.ts"
Cohesion: 0.09
Nodes (13): mongodb, @prisma/adapter-pg, ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember (+5 more)

### Community 18 - "MembersTreeScene.tsx"
Cohesion: 0.18
Nodes (3): MembersTreeScene(), TEAM_OVERVIEW_EDGE_ALPHA, TEAM_OVERVIEW_NODE_ALPHA

### Community 19 - "catalogValidation.ts"
Cohesion: 0.09
Nodes (28): deleteCloudinaryImage(), extractCloudinaryPublicId(), parsePositionsPayload(), rejectUpload(), router, uploadTeamTypeIcon, booleanLike, formatZodErrors() (+20 more)

### Community 20 - "httpErrors.ts"
Cohesion: 0.17
Nodes (17): ChallengeState, isExpired(), isSolved(), pickRandom(), swapQuestion(), SwapResult, base, ChallengeView (+9 more)

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "MemberInfo.tsx"
Cohesion: 0.14
Nodes (21): cache, loadImageAspect(), PhotoOpenButton(), Props, useIsPhotoOpen(), AvatarSkeleton(), MemberAvatarImage(), MemberAvatarImageInner() (+13 more)

### Community 23 - "SettingsPanel.tsx"
Cohesion: 0.16
Nodes (11): OPTIONS, Props, ViewModeSwitch(), EDGE_STYLE_OPTIONS, ORIENTATION_OPTIONS, Props, Section(), SectionProps (+3 more)

### Community 24 - "memberService.ts"
Cohesion: 0.14
Nodes (26): resolvePosition(), deleteMember(), deriveTeamName(), resolveRole(), resolveTeam(), resolveTeamType(), RoleRef, TeamRef (+18 more)

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
Nodes (41): LineageEdge(), Props, TeamBadge(), FILL_ALPHA, lerp(), Props, STROKE_ALPHA, TeamFrame() (+33 more)

### Community 29 - "Member"
Cohesion: 0.09
Nodes (38): Props, Props, NodesLayer(), Props, Props, Options, DEFAULT_POSITION, MembersState (+30 more)

### Community 30 - "dependencies"
Cohesion: 0.11
Nodes (19): dependencies, date-fns, dotenv, elkjs, gsap, @gsap/react, @heroicons/react, lodash (+11 more)

### Community 31 - "server/package.json"
Cohesion: 0.05
Nodes (33): cloudinary, concurrently, multer, multer-storage-cloudinary, nodemon, @prisma/config, ts-node, tsx (+25 more)

### Community 32 - "EditMemberForm.tsx"
Cohesion: 0.21
Nodes (19): AddMemberForm(), buildMemberFormData(), ClearButton(), SubmitButton(), describeSubmitError(), EditMemberForm(), getInitialFormData(), FormError() (+11 more)

### Community 33 - "utils/strings.ts"
Cohesion: 0.25
Nodes (8): FiltersHeader(), Props, formatCount(), PARTICIPANT_FORMS, PluralForms, pluralizeUk(), TEAM_FORMS, YEAR_FORMS

### Community 34 - "src/utils/index.ts"
Cohesion: 0.17
Nodes (16): BirthdayFilterSection(), ClearButton(), FilterCheckbox(), Props, JoinYearFilterSection(), Props, TeamPeriodFilterSection(), parseYear() (+8 more)

### Community 35 - "ManageForm.tsx"
Cohesion: 0.23
Nodes (13): ManageForm(), MemberMode, Section, SECTIONS, TEAM_KINDS, TeamKind, CREATE_EDIT_OPTIONS, Props (+5 more)

### Community 36 - "package.json"
Cohesion: 0.10
Nodes (19): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+11 more)

### Community 37 - "ThemeContext.tsx"
Cohesion: 0.14
Nodes (16): darkTheme, DEFAULT_THEME, lightTheme, THEMES, applyCssTokens(), ThemeContext, ThemeContextValue, ThemeProvider() (+8 more)

### Community 38 - "ref_vitest"
Cohesion: 0.27
Nodes (7): @faker-js/faker, createIdentityFactory(), firstFree(), OPERATOR_CODES, none, MAP, translit()

### Community 39 - "Direction"
Cohesion: 0.17
Nodes (20): drawPolyline(), TeamEdgesLayer(), TeamEdge, alignPolylines(), cumulativeLengths(), dist(), pointAtLength(), quadEval() (+12 more)

### Community 40 - "Core Patterns"
Cohesion: 0.19
Nodes (13): Adding and removing children, Bounds and coordinate conversion, Constructor options, Core Patterns, Destroy, Finding and removing from parent, Leaves vs containers, Per-frame updates with onRender (+5 more)

### Community 41 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+5 more)

### Community 42 - "Common Mistakes"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, Constructor options, [CRITICAL] Using lineStyle instead of stroke, [CRITICAL] Using old shape method names, [CRITICAL] Using v7 beginFill/drawRect/endFill, [HIGH] Clearing and redrawing Graphics every frame, [HIGH] Destroying a shared GraphicsContext unexpectedly (+4 more)

### Community 43 - "memberRoutes.ts"
Cohesion: 0.08
Nodes (40): zod, buildMemberFields(), buildMemberUpdateFields(), buildSharedFields(), buildSparseMemberFields(), parsePhoneNumbers(), getPositionKey(), ResolvedPosition (+32 more)

### Community 44 - "CLAUDE.md"
Cohesion: 0.25
Nodes (7): Commands, Conventions, Deployment & data, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout

### Community 45 - "Container Hierarchy"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, Container Hierarchy, [CRITICAL] Adding children to a leaf, [HIGH] Destroying the parent without `children: true`, [MEDIUM] Mutating `children` during iteration, Quick Start

### Community 46 - "importAllowedEmails.ts"
Cohesion: 0.27
Nodes (13): AuroraBakeInput, bakeAuroraLayers(), BAKE_SCALE, BLUR_SPREAD, CONIC_LAYERS, ConicLayerSpec, cssAngleToCanvasRadians(), getBakeFilter() (+5 more)

### Community 47 - "mailer/index.ts"
Cohesion: 0.29
Nodes (6): consoleMailer, createResendMailer(), ResendConfig, message, Mailer, MailMessage

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "TeamFormContent.tsx"
Cohesion: 0.13
Nodes (24): ConfirmDeleteControl(), Props, FormFooter(), Props, FormMessages(), ComboboxInput(), LogoFileInput(), TextAreaInput() (+16 more)

### Community 50 - "http"
Cohesion: 0.05
Nodes (64): next, addMember(), ApiError, toApiError(), deleteMember(), editMember(), fetchFamilyTree(), fetchMemberById() (+56 more)

### Community 51 - "AGENTS.md"
Cohesion: 0.25
Nodes (7): Commands, Conventions, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout, This is NOT the Next.js you know

### Community 52 - "scripts"
Cohesion: 0.20
Nodes (10): scripts, build, db:backup-prod, db:restore-local, dev, dev:webpack, lint, start (+2 more)

### Community 53 - "emailRoutes.ts"
Cohesion: 0.12
Nodes (17): authSecret(), CODE_TTL_MS, prismaCodeStore, getMailer(), escapeHtml(), pairs(), renderSignInCodeEmail(), bodyEmail() (+9 more)

### Community 54 - "BEST Family Tree"
Cohesion: 0.33
Nodes (5): BEST Family Tree, People, Sign-in, Teams, Views

### Community 57 - "src/index.ts"
Cohesion: 0.10
Nodes (24): compression, cors, express, express-rate-limit, helmet, prisma, app, checkOrigin() (+16 more)

### Community 58 - "pixijs/SKILL.md"
Cohesion: 0.25
Nodes (7): Advanced, Fallback: canonical PixiJS docs, Foundations, How to use this skill, Scene Objects, Skill router, Utilities

### Community 59 - "Core Patterns"
Cohesion: 0.12
Nodes (17): Application destroy/recreate cycle, Batching optimization, cacheAsTexture for performance, Core Patterns, Culling, Filters and masks cost, Graphics performance, Low-level rendering optimizations (+9 more)

### Community 60 - "emailCodes.ts"
Cohesion: 0.18
Nodes (13): CodeOwner, CodeStore, generateCode(), hashCode(), issueCode(), MAX_CODE_ATTEMPTS, sameHash(), StoredCode (+5 more)

### Community 61 - "checkConfig.ts"
Cohesion: 0.19
Nodes (14): assertConfig(), configProblems(), databaseName(), demoProblems(), Env, googleProblems(), telegramProblems(), good (+6 more)

### Community 62 - "pixi.js"
Cohesion: 0.09
Nodes (22): @pixi/react, PixiElements, @gsap/react, pixi.js, @pixi/react, pixi-viewport, MemberNodeAvatar(), Props (+14 more)

### Community 63 - "AvatarFileInput.tsx"
Cohesion: 0.27
Nodes (7): LionIcon(), Props, Props, Props, exceedsUploadLimit(), MAX_UPLOAD_BYTES, UPLOAD_TOO_LARGE_MESSAGE

### Community 64 - "filterMembers.ts"
Cohesion: 0.20
Nodes (18): isFilterActive(), matchesAvatar(), matchesBirthday(), matchesJoinSeason(), matchesJoinYear(), memberMatchesFilters(), parseDateStr(), toDateVal() (+10 more)

### Community 65 - "BEST Family Tree"
Cohesion: 0.11
Nodes (18): 1. Clone and configure environment, 2. Start the application, 3. Run database migrations, 4. Access the app, Architecture, Available Commands, Backend Commands (run inside container), Backups (+10 more)

### Community 66 - "Diagnosing Bugs"
Cohesion: 0.13
Nodes (14): Completion criterion: a tight loop that goes red, Diagnosing Bugs, Minimise, Non-deterministic bugs, Phase 1: Build a feedback loop, Phase 2: Reproduce + minimise, Phase 3: Hypothesise, Phase 4: Instrument (+6 more)

### Community 67 - "react"
Cohesion: 0.08
Nodes (25): react, Props, Props, Props, Props, Props, Props, Props (+17 more)

### Community 68 - "filtersStore.ts"
Cohesion: 0.15
Nodes (12): EMPTY_FILTER_STATE, derive(), FiltersActions, FiltersState, initialState, initialFiltersState, MemberStatus, Alumni (+4 more)

### Community 69 - "auth/types.ts"
Cohesion: 0.23
Nodes (10): canEditMember(), hasAccess(), RANK, AccessRank, Express, Request, Session, requireAccess() (+2 more)

### Community 70 - "protocol.ts"
Cohesion: 0.29
Nodes (12): failOver(), getWorker(), Pending, requestLayout(), runInline(), computeLayout(), scope, LayoutKind (+4 more)

### Community 71 - "Core Patterns"
Cohesion: 0.13
Nodes (14): API Reference, boundsArea optimization, Common Mistakes, Core Patterns, Culling, HIGH: Expecting automatic culling, HIGH: Using addChild on RenderLayer, MEDIUM: Expecting filters on ancestors to apply to layer children (+6 more)

### Community 72 - "Core Patterns"
Cohesion: 0.12
Nodes (14): Advanced shape primitives, Cloning, clearing, and bounds, Core Patterns, Default styles via setFillStyle / setStrokeStyle, Draw-time transforms, Drawing a texture directly, Gradients and patterns, GraphicsContext sharing (+6 more)

### Community 73 - "dependencies"
Cohesion: 0.06
Nodes (33): dependencies, cloudinary, compression, cors, dotenv, express, express-rate-limit, helmet (+25 more)

### Community 74 - "treeStore.ts"
Cohesion: 0.13
Nodes (27): gsap, EMPTY_IDS, View, NODE_HEIGHT, NODE_WIDTH, getFitViewTargetScale(), useFitViewAnimation(), useFocusFrameAnimation() (+19 more)

### Community 75 - "MemberInfoActions.tsx"
Cohesion: 0.24
Nodes (11): FacebookIcon(), FacebookGlyph(), InstagramGlyph(), LinkedinGlyph(), svgProps, TelegramGlyph(), InstagramIcon(), LinkedinIcon() (+3 more)

### Community 76 - "Common Mistakes"
Cohesion: 0.22
Nodes (8): API Reference, Common Mistakes, [CRITICAL] Adding children to leaf scene objects, [HIGH] Expecting getBounds() to return a Rectangle, [HIGH] Using cacheAsBitmap instead of cacheAsTexture, [MEDIUM] Setting both pivot and origin on the same container, [MEDIUM] Using container.name instead of container.label, Quick Start

### Community 77 - "MemberFormFields.tsx"
Cohesion: 0.13
Nodes (18): CheckedField, getStoredFieldValues(), Links, StoredMemberValues, complete, mentors, sparse, toTime() (+10 more)

### Community 78 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, attach / detach, Common Mistakes, Core Patterns, [CRITICAL] Using `addChild` on a RenderLayer, [HIGH] Layer and attached children in different render groups, Layer + logical parent, Manual sort (+5 more)

### Community 79 - "Core Patterns"
Cohesion: 0.14
Nodes (13): Alpha mask (Sprite-based), API Reference, Common Mistakes, Core Patterns, [HIGH] Using cacheAsTexture with masks, Inverse masking, Mask channel selection, Mask type selection (+5 more)

### Community 80 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, Common Mistakes, Construction options, Core Patterns, [HIGH] Nesting many render groups, [MEDIUM] Constantly adding/removing from a render group, [MEDIUM] Overusing render groups, Profile before adding (+5 more)

### Community 81 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, concurrently, @faker-js/faker, nodemon, ts-node, tsx, @types/compression, @types/cors (+5 more)

### Community 82 - "MemberFilterCategory.tsx"
Cohesion: 0.30
Nodes (10): MemberFilterCategory(), ACTIVITY_OPTIONS, ACTIVITY_STATES, AVATAR_OPTIONS, AVATAR_VALUES, JOIN_SEASONS, MEMBER_STATUSES, SEASON_OPTIONS (+2 more)

### Community 83 - "Core Patterns"
Cohesion: 0.14
Nodes (14): Context and device loss, Core Patterns, Destroying a renderer, Direct renderer construction, Lazy-loading backend-specific systems and pipes, Manual rendering, Per-renderer options, Preference forms (+6 more)

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

### Community 88 - "eligibility.ts"
Cohesion: 0.26
Nodes (10): EmailIdentity, normalizeEmail(), resolveEmailIdentity(), loadEmailIdentity(), callbackErrorRedirect(), decideGoogleSignIn(), GoogleClaims, GoogleDecision (+2 more)

### Community 89 - "Foundations"
Cohesion: 0.13
Nodes (14): Advanced, Foundations, pixijs-application, pixijs-core-concepts, pixijs-events, pixijs-performance, pixijs-scene-container, pixijs-scene-core-concepts (+6 more)

### Community 90 - "EdgeStyle"
Cohesion: 0.32
Nodes (9): DEFAULT_SETTINGS, SETTINGS_STORAGE_KEY, SettingsActions, SettingsState, initialState, { storageMock }, EdgeStyle, OrientationSetting (+1 more)

### Community 91 - "FitViewButton.tsx"
Cohesion: 0.35
Nodes (7): FitViewButton(), Props, Props, ToolbarIconButton(), Props, ToolbarTooltip(), useHoverTooltip()

### Community 92 - "Core Concepts"
Cohesion: 0.18
Nodes (11): Container vs leaf (CRITICAL), Core Concepts, Culling, Destroy semantics, Lifecycle events, Masking, Render groups, Render order and explicit z-ordering (+3 more)

### Community 93 - "useHoverNodeAnimation.ts"
Cohesion: 0.29
Nodes (8): pixi-filters, NODE_HOVER_ANIMATION_DURATION, NODE_HOVER_SCALE, ZOOMED_OUT_HOVER_SCALE_MAP, calculateTargetScale(), createShadowFilter(), Props, useHoverNodeAnimation()

### Community 94 - "SeasonMotif.tsx"
Cohesion: 0.18
Nodes (13): FlowerIcon(), Props, MapleLeafIcon(), Props, Placement, PLACEMENTS, Props, SeasonMotif() (+5 more)

### Community 98 - "Common Mistakes"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, [CRITICAL] App destroy without releaseGlobalResources, [HIGH] Destroying and recreating objects instead of recycling, [HIGH] Interleaving object types in scene graph, [HIGH] Loading many individual textures instead of spritesheets, [HIGH] Updating Text or HTMLText every frame, [HIGH] Using complex Graphics instead of textures (+4 more)

### Community 99 - "devLogin.ts"
Cohesion: 0.48
Nodes (5): databaseHost(), devLoginProblems(), Env, isDevLoginEnabled(), LOCAL_HOSTS

### Community 100 - "Core Patterns"
Cohesion: 0.12
Nodes (16): API Reference, Common Mistakes, Coordinate conversion, Core Patterns, Cumulative alpha (getGlobalAlpha), Global, local, and screen coordinates, [HIGH] Setting scale to 0, [MEDIUM] Confusing anchor and pivot (+8 more)

### Community 101 - "src/utils/index.ts"
Cohesion: 0.08
Nodes (35): date-fns, InfoSection(), Props, LABELS, MemberActivityPill(), Props, MemberFactTile(), Props (+27 more)

### Community 102 - "Render Loop"
Cohesion: 0.22
Nodes (8): API Reference, Common Mistakes, [CRITICAL] Treating the ticker callback arg as a number, Frame lifecycle, [HIGH] Using `updateTransform` for per-frame logic, [MEDIUM] Assuming ticker callbacks run after render, Quick Start, Render Loop

### Community 103 - "pixijs-core-concepts/SKILL.md"
Cohesion: 0.22
Nodes (8): API Reference, Common Mistakes, Decision guide, [HIGH] Accessing app.renderer before init() resolves, [HIGH] Setting DOMAdapter after Application.init, [MEDIUM] Treating `preference` as a guarantee, Quick Start, Topics

### Community 104 - "MemberFilterCategory.tsx"
Cohesion: 0.16
Nodes (14): FilterCategory(), LION_GROUP_ICON, LION_ICON, Props, FilterGroupProps, ALL_SECTIONS_CLOSED, Props, RoleFilterSection() (+6 more)

### Community 105 - "edgeGeometry.ts"
Cohesion: 0.25
Nodes (11): EdgesLayer(), FIXED_EDGE_WIDTH, NODE_AVATAR_RADIUS, bezierEval(), edgeGeometry, endpoints(), sampleBezierCurve(), sampleEdgePath() (+3 more)

### Community 106 - "Toolbar.tsx"
Cohesion: 0.42
Nodes (7): compare(), getSearchable(), MemberSearch(), Props, SearchBar(), SearchSuggestionItem(), useFiltersStore

### Community 107 - "src/types/index.ts"
Cohesion: 0.08
Nodes (47): @heroicons/react, tailwind-merge, GLOW, Props, DropdownMenu(), Props, BadgeInput(), Props (+39 more)

### Community 108 - "Toolbar.tsx"
Cohesion: 0.06
Nodes (55): AccessLevel, AuthMethod, Challenge, ChallengeQuestion, logout(), post(), RequestCodeOutcome, requestEmailCode() (+47 more)

### Community 109 - "photoViewerMath.ts"
Cohesion: 0.21
Nodes (18): clampAxis(), clampOffset(), clampScale(), fitRect(), FULL_CLIP, MAX_SCALE, MIN_SCALE, Rect (+10 more)

### Community 110 - "server/src/types/index.ts"
Cohesion: 0.10
Nodes (29): CONTACT_FIELDS, toMemberResponse(), loadFamilyTree, loadReducedFamilyTree, Member, MemberPositionWithRelations, MENTOR_STATUSES, ALUMNI (+21 more)

### Community 111 - "MemberNode.tsx"
Cohesion: 0.12
Nodes (20): BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props, acquireEmojiTextures(), createEmojiTexture(), generateRandomPosition(), releaseEmojiTextures() (+12 more)

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

### Community 113 - "Core Patterns"
Cohesion: 0.25
Nodes (8): Add, remove, swap, Child queries, Core Patterns, Destroying sub-trees, Iterating children, Label-based tree navigation, Reparenting with transform preservation, Replacing a child

### Community 114 - "Core Patterns"
Cohesion: 0.29
Nodes (7): Core Patterns, Frame rate capping, Manual rendering, Per-object update via `onRender`, Priority order, Stop and start, Time units

### Community 115 - "Common Mistakes"
Cohesion: 0.33
Nodes (6): Common Mistakes, [CRITICAL] Adding children to a leaf display object, [CRITICAL] Referencing DisplayObject, [HIGH] Forgetting isRenderGroup on large static subtrees, [HIGH] Treating child.x as world space, [MEDIUM] sortableChildren without zIndex

### Community 116 - "pixijs-scene-core-concepts/SKILL.md"
Cohesion: 0.25
Nodes (6): API Reference, Leaf comparison: which skill covers which object, Quick Start, References, Tooling, When to use what (quick decisions)

### Community 117 - "elk.ts"
Cohesion: 0.48
Nodes (5): useIsMobileScreen(), useResolvedDirection(), useMediaQuery(), readLegacyTheme(), useSettingsStore

### Community 118 - "Quick concepts"
Cohesion: 0.50
Nodes (4): Environments, Quick concepts, Renderer = systems + pipes, The render loop

### Community 119 - "Direction"
Cohesion: 0.15
Nodes (15): elkjs, Props, NODE_CARD_TOP, Direction, Input, elkNodeSize(), LAYER_SPACE_LR, layoutOptions() (+7 more)

### Community 120 - "aiFaces.ts"
Cohesion: 0.38
Nodes (3): createFaceSource(), Options, source()

### Community 121 - "constants/canvas/index.ts"
Cohesion: 0.31
Nodes (8): lineageEdgePath, ACCIDENTAL_DRAG_MAX_DISTANCE, ACCIDENTAL_DRAG_MAX_MS, LONG_PRESS_MS, TAP_MOVE_TOLERANCE, PressStart, useTapWithoutDrag(), isTapGesture()

### Community 122 - "layout.tsx"
Cohesion: 0.17
Nodes (8): react-datepicker, metadata, nunito, RootLayout(), AuroraBackground(), readNumber(), useBakedAurora(), canBakeAurora()

### Community 123 - "Toolbar.tsx"
Cohesion: 0.24
Nodes (11): fetchSession(), SessionInfo, DemoBadge(), FiltersPanel(), focusSearchInput(), Toolbar(), usePanelToggle(), canEdit() (+3 more)

### Community 124 - "importAllowedEmails.ts"
Cohesion: 0.19
Nodes (12): AllowedRow, AllowlistDiff, diffAllowlist(), looksLikeEmail(), parseAllowlistCsv(), ParsedAllowlist, splitLine(), apply (+4 more)

### Community 125 - "Position"
Cohesion: 0.40
Nodes (5): Position, Bottom, Left, Right, Top

### Community 126 - "seedQuestions.ts"
Cohesion: 0.20
Nodes (9): answerMatches(), CYRILLIC_TO_LATIN, normalizeAnswer(), MIN_ACTIVE_QUESTIONS, deleteQuestionSessions(), DEMO_QUESTIONS, active, items (+1 more)

### Community 127 - "utils/membersTree/index.ts"
Cohesion: 0.22
Nodes (9): Point, SegmentMorph, TeamBlock, computeTeamLayout(), groupIntoLanes(), moveEdgesToWorld(), shift(), TrunkBranch (+1 more)

### Community 128 - "telegramEligibility.ts"
Cohesion: 0.32
Nodes (8): EligibilityMember, MemberMatch, resolveMemberMatch(), phoneKey(), resolveTelegramIdentity(), TelegramIdentity, loadTelegramIdentity(), TelegramClaims

### Community 129 - "GSAP with React"
Cohesion: 0.15
Nodes (12): Best practices, Context-Safe Callbacks, Dependency array, scope, and revertOnUpdate, Do Not, gsap.context() in useEffect (when useGSAP isn't used), GSAP with React, Installation, Learn More (+4 more)

### Community 130 - "Sidebar.tsx"
Cohesion: 0.26
Nodes (8): Props, Sidebar(), SidebarFooterContext, Props, SidebarHandle(), SidebarHeader(), useSidebarChromeHeights(), useSidebarSwipe()

### Community 132 - "hitl-loop.template.sh"
Cohesion: 0.83
Nodes (3): capture(), hitl-loop.template.sh script, step()

### Community 133 - "teamPacking.ts"
Cohesion: 0.26
Nodes (9): TEAM_FRAME_GAP, TEAM_PACK_ASPECT, computeDirectedPacking(), computePacking(), packLanes(), Placement, scorePacking(), shelfPack() (+1 more)

### Community 134 - "MemberNodeCard.tsx"
Cohesion: 0.27
Nodes (8): MemberNodeCard(), Props, NODE_CARD_HEIGHT, NODE_CARD_RADIUS, getTeamBadgeLayout(), textWidth(), truncateText(), wrapTeamTitle()

### Community 135 - "TeamFrame"
Cohesion: 0.27
Nodes (8): Props, TeamFramesLayer(), Props, TeamOverviewLayer(), Props, Props, Props, TeamFrame

### Community 137 - "GSAP Performance"
Cohesion: 0.17
Nodes (11): Batch Reads and Writes, Best practices, Do Not, Frequently updated properties (e.g. mouse followers), GSAP Performance, Many Elements (Stagger, Lists), Prefer Transform and Opacity, Reduce Simultaneous Work (+3 more)

### Community 138 - "GSAP Timeline"
Cohesion: 0.17
Nodes (11): Controlling Playback, Creating a Timeline, Do Not, GSAP Timeline, Labels, Nesting Timelines, Official GSAP Best practices, Position Parameter (+3 more)

### Community 139 - "searchShortcut.ts"
Cohesion: 0.33
Nodes (6): EDITABLE_TAGS, isEditableTarget(), isSearchShortcut(), ShortcutKeys, Keys, useSearchShortcut()

### Community 140 - "ui/index.ts"
Cohesion: 0.25
Nodes (4): Options, Position, noopSubscribe(), useIsHydrated()

### Community 142 - "useSearchSuggestions.ts"
Cohesion: 0.47
Nodes (4): matchesQuery(), Options, useSearchSuggestions(), normalize()

## Knowledge Gaps
- **42 isolated node(s):** `@prisma/client`, `dotenv`, `lodash`, `@tailwindcss/postcss`, `@types/lodash` (+37 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 950 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `TeamInfoSidebar.tsx`, `Sidebar.tsx`, `filterSearchParams.ts`, `hooks/index.ts`, `FilterState`, `MemberNodeCard.tsx`, `TeamFrame`, `MembersTreeContent.tsx`, `TeamFormContent.tsx`, `searchShortcut.ts`, `ui/index.ts`, `dimensions.ts`, `PhotoViewer.tsx`, `useSearchSuggestions.ts`, `TeamSearch.tsx`, `useDashedPathAnimation.ts`, `MembersTreeScene.tsx`, `MemberInfo.tsx`, `useCardAnimation.ts`, `pixi.js`, `Member`, `EditMemberForm.tsx`, `ManageForm.tsx`, `package.json`, `ThemeContext.tsx`, `Direction`, `TeamFormContent.tsx`, `http`, `pixi.js`, `AvatarFileInput.tsx`, `treeStore.ts`, `FitViewButton.tsx`, `useHoverNodeAnimation.ts`, `src/utils/index.ts`, `MemberFilterCategory.tsx`, `edgeGeometry.ts`, `Toolbar.tsx`, `src/types/index.ts`, `Toolbar.tsx`, `photoViewerMath.ts`, `MemberNode.tsx`, `elk.ts`, `constants/canvas/index.ts`, `layout.tsx`, `Toolbar.tsx`?**
  _High betweenness centrality (0.099) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _42 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `emailRoutes.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.12012012012012012 - nodes in this community are weakly interconnected._
- **Why does `getBounds()` connect `Core Patterns` to `Foundations`, `treeStore.ts`, `Common Mistakes`?**
  _High betweenness centrality (0.093) - this node is a cross-community bridge._
- **Should `TeamFormContent.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14795008912655971 - nodes in this community are weakly interconnected._
- **Why does `Core Patterns` connect `Core Patterns` to `Foundations`, `Common Mistakes`?**
  _High betweenness centrality (0.053) - this node is a cross-community bridge._
- **Should `ApplicationOptions reference` be split into smaller, more focused modules?**
  _Cohesion score 0.058823529411764705 - nodes in this community are weakly interconnected._