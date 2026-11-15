# Graph Report - best-family-tree  (2026-11-15)

## Corpus Check
- 543 files · ~176,956 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 29 file(s) not represented in the graph (top: .prisma 9, (none) 7, .css 6)

## Summary
- 2691 nodes · 6877 edges · 128 communities (120 shown, 8 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 67 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `86654e07`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- TeamInfoSidebar.tsx
- mime.ts
- sessions.ts
- MemberFilterCategory.tsx
- membersStore.ts
- hooks/index.ts
- MemberFormFields.tsx
- MembersTreeContent.tsx
- TeamFormContent.tsx
- ApplicationOptions reference
- teamFrame.ts
- contactKeys.ts
- anonymizeDemo.ts
- MemberNode.tsx
- PhotoViewer.tsx
- useDashedPathAnimation.ts
- TeamSearch.tsx
- telegramEligibility.ts
- hooks/index.ts
- catalogValidation.ts
- httpErrors.ts
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
- utils/strings.ts
- src/utils/index.ts
- scale.ts
- package.json
- filterSearchParams.ts
- ref_vitest
- dashedBezier.ts
- gsap
- devDependencies
- Common Mistakes
- memberService.ts
- CLAUDE.md
- Core Patterns
- importAllowedEmails.ts
- mailer/index.ts
- During the session
- TeamFormContent.tsx
- http
- AGENTS.md
- scripts
- emailCodes.ts
- BEST Family Tree
- next.config.mjs
- postcss.config.mjs
- src/index.ts
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
- searchShortcut.ts
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
- constants/theme.ts
- pixijs-events/SKILL.md
- Core Patterns
- Constructor options (Container-inherited)
- Test-Driven Development
- GSAP Core
- Core Patterns
- emailRoutes.ts
- Foundations
- teamPacking.ts
- Transforms and Coordinate Spaces
- Core Concepts
- ui/index.ts
- SeasonMotif.tsx
- backup-prod.sh
- start-prod.sh
- restore-local.sh
- Common Mistakes
- devLogin.ts
- Core Patterns
- MemberPosition
- Render Loop
- pixijs-core-concepts/SKILL.md
- MemberFilterCategory.tsx
- utils/positions.ts
- hooks/index.ts
- src/types/index.ts
- Toolbar.tsx
- server/src/types/index.ts
- MemberBirthdayAnimation.tsx
- Renderers: WebGPU, WebGL, and Canvas
- Core Patterns
- pixijs-scene-core-concepts/SKILL.md
- ThemeContext.tsx
- elkLayout.ts
- Common Mistakes
- aiFaces.ts
- constants/canvas/index.ts
- membersTree/canvas/index.ts
- Position
- GSAP with React
- hitl-loop.template.sh
- GSAP Performance
- GSAP Timeline

## God Nodes (most connected - your core abstractions)
1. `AccentColor` - 131 edges
2. `react` - 124 edges
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
- `Bounds in different spaces` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs-scene-core-concepts/references/transforms.md → src/hooks/membersTree/animations/useFitViewAnimation.ts
- `Bounds and coordinate conversion` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs-scene-container/SKILL.md → src/hooks/membersTree/animations/useFitViewAnimation.ts
- `Finding and removing from parent` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs-scene-container/SKILL.md → src/hooks/membersTree/animations/useFitViewAnimation.ts

## Import Cycles
- 3-file cycle: `src/utils/index.ts -> src/utils/membersTree/index.ts -> src/utils/membersTree/lineageEdgePath.ts -> src/utils/index.ts`
- 4-file cycle: `src/context/ThemeContext.tsx -> src/hooks/index.ts -> src/hooks/membersTree/index.ts -> src/hooks/membersTree/useCanvasTheme.ts -> src/context/ThemeContext.tsx`
- 4-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/members.ts -> src/models/index.ts -> src/models/Member.ts`
- 4-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/tree.ts -> src/models/index.ts -> src/models/Member.ts`
- 5-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/filters.ts -> src/types/members.ts -> src/models/index.ts -> src/models/Member.ts`

## Communities (128 total, 8 thin omitted)

### Community 0 - "TeamInfoSidebar.tsx"
Cohesion: 0.23
Nodes (15): fetchSession(), SessionInfo, MemberSidebar(), TeamInfoSidebar(), HeaderChip(), SeasonChip(), Props, SidebarMinimizedSummary() (+7 more)

### Community 1 - "mime.ts"
Cohesion: 0.29
Nodes (11): RFC-2045, RFC-2047, createGmailMailer(), GmailConfig, base64Body(), buildMime(), encodeHeaderText(), formatAddress() (+3 more)

### Community 2 - "sessions.ts"
Cohesion: 0.06
Nodes (51): Container events, Transform, Lifecycle events, Origin (new in v8), openid-client, canEditMember(), hasAccess(), RANK (+43 more)

### Community 3 - "MemberFilterCategory.tsx"
Cohesion: 0.12
Nodes (25): ACTIVITY_OPTIONS, ACTIVITY_STATES, AVATAR_OPTIONS, AVATAR_VALUES, JOIN_SEASONS, MEMBER_STATUSES, SEASON_OPTIONS, STATUS_OPTIONS (+17 more)

### Community 4 - "membersStore.ts"
Cohesion: 0.15
Nodes (18): Cloning, clearing, and bounds, Props, Props, Props, membersActions, {
  setMembers,
  reloadMembers,
  addMember,
  updateMember,
  selectMember,
  getMentorsList,
}, useMembersMap(), useMentees() (+10 more)

### Community 5 - "hooks/index.ts"
Cohesion: 0.10
Nodes (29): react-dom, DropdownMenu(), Props, DropdownPortal(), Props, BadgeInput(), Props, BadgeInputField() (+21 more)

### Community 6 - "MemberFormFields.tsx"
Cohesion: 0.32
Nodes (8): FieldError(), Props, Props, Props, SocialMediaFormFields(), MemberFormData, MemberFormMode, TeamFormData

### Community 7 - "MembersTreeContent.tsx"
Cohesion: 0.16
Nodes (19): Props, MembersTree(), Props, EVENT_FEATURES, MembersTreeContent(), Props, ViewportCulling(), useMembersActions() (+11 more)

### Community 8 - "TeamFormContent.tsx"
Cohesion: 0.14
Nodes (28): PositionAssignmentFields(), Props, PositionFormFields(), Props, createEmptyPositionRow(), EMPTY_POSITION_ROW, findTeamByName(), getPositionRowSummary() (+20 more)

### Community 9 - "ApplicationOptions reference"
Cohesion: 0.06
Nodes (32): Accessibility, ApplicationOptions reference, Background, Culler (CullerPluginOptions), Deprecated (GC — prefer the unified options above), Events, Garbage collection, Graphics (+24 more)

### Community 10 - "teamFrame.ts"
Cohesion: 0.09
Nodes (35): Paths and complex shapes, TEAM_COLUMN_GAP, TEAM_EDGE_DROP, TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_SPREAD_WIDTH, TEAM_EDGE_STUB, TEAM_FRAME_HEADER, TEAM_FRAME_MIN_WIDTH (+27 more)

### Community 11 - "contactKeys.ts"
Cohesion: 0.20
Nodes (10): duplicates, fields, groups, ContactFields, contactKey(), ContactPlatform, FIELD_PLATFORMS, findContactCollision() (+2 more)

### Community 12 - "anonymizeDemo.ts"
Cohesion: 0.12
Nodes (19): allowed, args, byId, factory, GROUP_NAMES, memberPhotos, nextFace, real (+11 more)

### Community 13 - "MemberNode.tsx"
Cohesion: 0.07
Nodes (34): AVATAR_HIT_AREA, CARD_PIVOT, EMPTY_FILTERS, getCullArea(), MemberNode(), NODE_HIT_AREA, NODE_PIVOT, Props (+26 more)

### Community 14 - "PhotoViewer.tsx"
Cohesion: 0.07
Nodes (48): zustand, isTreeReady(), MembersTree, MembersTreeDynamic(), TreeState, cache, loadImageAspect(), PhotoOpenButton() (+40 more)

### Community 15 - "useDashedPathAnimation.ts"
Cohesion: 0.17
Nodes (19): LineageEdge(), DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN, MIN_ANIM_DURATION, PATTERN_LEN, RETRACT_BASE (+11 more)

### Community 16 - "TeamSearch.tsx"
Cohesion: 0.13
Nodes (22): LionIcon(), compare(), getSearchable(), MemberSearch(), Props, Props, SearchBar(), Props (+14 more)

### Community 17 - "telegramEligibility.ts"
Cohesion: 0.32
Nodes (8): EligibilityMember, MemberMatch, resolveMemberMatch(), phoneKey(), resolveTelegramIdentity(), TelegramIdentity, loadTelegramIdentity(), TelegramClaims

### Community 18 - "hooks/index.ts"
Cohesion: 0.10
Nodes (28): Props, Props, Props, Props, Props, TeamFramesLayer(), MembersTreeScene(), Props (+20 more)

### Community 19 - "catalogValidation.ts"
Cohesion: 0.08
Nodes (29): Renderer selection at runtime, [MEDIUM] Using container.name instead of container.label, deleteCloudinaryImage(), extractCloudinaryPublicId(), parsePositionsPayload(), rejectUpload(), router, uploadTeamTypeIcon (+21 more)

### Community 20 - "httpErrors.ts"
Cohesion: 0.10
Nodes (27): answerMatches(), CYRILLIC_TO_LATIN, normalizeAnswer(), ChallengeState, isExpired(), isSolved(), pickRandom(), swapQuestion() (+19 more)

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "MemberInfo.tsx"
Cohesion: 0.13
Nodes (20): AvatarSkeleton(), MemberAvatarImage(), MemberAvatarImageInner(), Props, SkeletonProps, MemberInfo(), MemberSidebarContent(), STATUS_ICONS (+12 more)

### Community 23 - "SettingsPanel.tsx"
Cohesion: 0.11
Nodes (21): OPTIONS, Props, ViewModeSwitch(), EDGE_STYLE_OPTIONS, ORIENTATION_OPTIONS, Props, Section(), SectionProps (+13 more)

### Community 24 - "teamService.ts"
Cohesion: 0.14
Nodes (27): ResolvedPosition, resolvePosition(), MemberTransaction, assertCanEditMembers(), deriveTeamName(), resolveRole(), resolveTeam(), resolveTeamType() (+19 more)

### Community 25 - "useCardAnimation.ts"
Cohesion: 0.17
Nodes (18): clamp01(), easeBackOut, easePower2In, easePower2Out, entries, Entry, finishCardReveal(), registerCardReveal() (+10 more)

### Community 26 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, esModuleInterop, forceConsistentCasingInFileNames, module, moduleResolution, noImplicitAny, outDir, paths (+12 more)

### Community 27 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+12 more)

### Community 28 - "pixi.js"
Cohesion: 0.09
Nodes (42): @pixi/react, Props, TeamBadge(), FILL_ALPHA, lerp(), STROKE_ALPHA, TeamFrame(), Props (+34 more)

### Community 29 - "Member"
Cohesion: 0.10
Nodes (32): Props, Props, Props, DEFAULT_POSITION, Member, MembersState, ChildrenMap, MemberMetrics (+24 more)

### Community 30 - "dependencies"
Cohesion: 0.11
Nodes (19): dependencies, date-fns, dotenv, elkjs, gsap, @gsap/react, @heroicons/react, lodash (+11 more)

### Community 31 - "server/package.json"
Cohesion: 0.06
Nodes (29): cloudinary, compression, concurrently, cors, helmet, multer, multer-storage-cloudinary, nodemon (+21 more)

### Community 32 - "EditMemberForm.tsx"
Cohesion: 0.16
Nodes (23): AddMemberForm(), buildMemberFormData(), ClearButton(), Props, SubmitButton(), describeSubmitError(), EditMemberForm(), getInitialFormData() (+15 more)

### Community 33 - "utils/strings.ts"
Cohesion: 0.23
Nodes (9): FiltersHeader(), Props, capitalizeOnlyFirstLetter(), formatCount(), PARTICIPANT_FORMS, PluralForms, pluralizeUk(), TEAM_FORMS (+1 more)

### Community 34 - "src/utils/index.ts"
Cohesion: 0.11
Nodes (30): MemberFilterCategory(), BirthdayFilterSection(), Props, CheckboxGroupFilterSection(), Option, Props, ClearButton(), FilterCheckbox() (+22 more)

### Community 35 - "scale.ts"
Cohesion: 0.22
Nodes (12): EMPTY_IDS, SharpAvatarTracker(), View, AVATAR_LOW_RES_SIZE, MAX_RENDER_RESOLUTION, NODE_AVATAR_SIZE, TEAM_OVERVIEW_END_SCALE, TEAM_OVERVIEW_FAST_FACTOR (+4 more)

### Community 36 - "package.json"
Cohesion: 0.11
Nodes (18): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+10 more)

### Community 37 - "filterSearchParams.ts"
Cohesion: 0.17
Nodes (8): react-datepicker, metadata, nunito, RootLayout(), AuroraBackground(), readNumber(), useBakedAurora(), canBakeAurora()

### Community 38 - "ref_vitest"
Cohesion: 0.17
Nodes (7): @faker-js/faker, createIdentityFactory(), firstFree(), OPERATOR_CODES, none, MAP, translit()

### Community 39 - "dashedBezier.ts"
Cohesion: 0.13
Nodes (32): EdgesLayer(), drawPolyline(), TeamEdgesLayer(), Point, TeamEdge, buildSegmentFromPositions(), DashStrokeOptions, lerpSegment() (+24 more)

### Community 40 - "gsap"
Cohesion: 0.10
Nodes (28): Adding and removing children, Bounds and coordinate conversion, Constructor options, Core Patterns, Destroy, Finding and removing from parent, Leaves vs containers, Per-frame updates with onRender (+20 more)

### Community 41 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+5 more)

### Community 42 - "Common Mistakes"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, Constructor options, [CRITICAL] Using lineStyle instead of stroke, [CRITICAL] Using old shape method names, [CRITICAL] Using v7 beginFill/drawRect/endFill, [HIGH] Clearing and redrawing Graphics every frame, [HIGH] Destroying a shared GraphicsContext unexpectedly (+4 more)

### Community 43 - "memberService.ts"
Cohesion: 0.08
Nodes (37): zod, buildMemberFields(), buildMemberUpdateFields(), buildSharedFields(), buildSparseMemberFields(), parsePhoneNumbers(), getPositionKey(), syncPositions() (+29 more)

### Community 44 - "CLAUDE.md"
Cohesion: 0.25
Nodes (7): Commands, Conventions, Deployment & data, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout

### Community 45 - "Core Patterns"
Cohesion: 0.12
Nodes (15): Add, remove, swap, API Reference, Child queries, Common Mistakes, Container Hierarchy, Core Patterns, [CRITICAL] Adding children to a leaf, Destroying sub-trees (+7 more)

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
Nodes (29): ConfirmDeleteControl(), Props, FormMessages(), DropdownSelectInput(), FormCheckbox(), LogoFileInput(), TextAreaInput(), TextInput() (+21 more)

### Community 50 - "http"
Cohesion: 0.09
Nodes (42): addMember(), ApiError, toApiError(), deleteMember(), editMember(), fetchFamilyTree(), fetchMemberById(), fetchMentorsList() (+34 more)

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

### Community 57 - "src/index.ts"
Cohesion: 0.08
Nodes (26): express, @prisma/adapter-pg, @prisma/config, deleteQuestionSessions(), sessionFromRequest(), adapter, prisma, app (+18 more)

### Community 58 - "pixijs/SKILL.md"
Cohesion: 0.18
Nodes (9): API Reference, Quick Start, Advanced, Fallback: canonical PixiJS docs, Foundations, How to use this skill, Scene Objects, Skill router (+1 more)

### Community 59 - "Core Patterns"
Cohesion: 0.12
Nodes (17): Application destroy/recreate cycle, Batching optimization, cacheAsTexture for performance, Core Patterns, Culling, Filters and masks cost, Graphics performance, Low-level rendering optimizations (+9 more)

### Community 60 - "importAllowedEmails.ts"
Cohesion: 0.12
Nodes (16): AllowedRow, AllowlistDiff, diffAllowlist(), looksLikeEmail(), parseAllowlistCsv(), ParsedAllowlist, splitLine(), escapeHtml() (+8 more)

### Community 61 - "checkConfig.ts"
Cohesion: 0.19
Nodes (14): assertConfig(), configProblems(), databaseName(), demoProblems(), Env, googleProblems(), telegramProblems(), good (+6 more)

### Community 62 - "pixi.js"
Cohesion: 0.15
Nodes (12): pixi.js, MemberNodeAvatar(), Props, CIRCLE_TEXTURE_SRC, PATTERN_TEXTURE_SRC, failedSources, Options, useTexture() (+4 more)

### Community 63 - "AvatarFileInput.tsx"
Cohesion: 0.23
Nodes (8): next, AvatarFileInput(), Props, Props, config, exceedsUploadLimit(), MAX_UPLOAD_BYTES, UPLOAD_TOO_LARGE_MESSAGE

### Community 64 - "filterMembers.ts"
Cohesion: 0.20
Nodes (17): countActiveMemberFilters(), matchesAvatar(), matchesBirthday(), matchesJoinYear(), memberMatchesFilters(), parseDateStr(), toDateVal(), toMMDD() (+9 more)

### Community 65 - "BEST Family Tree"
Cohesion: 0.11
Nodes (18): 1. Clone and configure environment, 2. Start the application, 3. Run database migrations, 4. Access the app, Architecture, Available Commands, Backend Commands (run inside container), Backups (+10 more)

### Community 66 - "Diagnosing Bugs"
Cohesion: 0.13
Nodes (14): Completion criterion: a tight loop that goes red, Diagnosing Bugs, Minimise, Non-deterministic bugs, Phase 1: Build a feedback loop, Phase 2: Reproduce + minimise, Phase 3: Hypothesise, Phase 4: Instrument (+6 more)

### Community 67 - "react"
Cohesion: 0.10
Nodes (20): react, Props, MemberPositions(), Props, PositionBadge(), Props, Props, Sidebar() (+12 more)

### Community 68 - "searchShortcut.ts"
Cohesion: 0.33
Nodes (6): EDITABLE_TAGS, isEditableTarget(), isSearchShortcut(), ShortcutKeys, Keys, useSearchShortcut()

### Community 69 - "familyTreeRoutes.ts"
Cohesion: 0.13
Nodes (16): CONTACT_FIELDS, toMemberResponse(), loadFamilyTree, loadReducedFamilyTree, router, serializeMember(), bumpDataVersion(), createVersionedCache() (+8 more)

### Community 70 - "teamLayout.ts"
Cohesion: 0.21
Nodes (17): failOver(), getWorker(), Pending, requestLayout(), runInline(), computeTeamLayout(), groupIntoLanes(), moveEdgesToWorld() (+9 more)

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
Cohesion: 0.21
Nodes (13): useTreeLayout(), DEFAULT_NODE_HEIGHT, DEFAULT_NODE_WIDTH, FLOW_VIEWPORT_DIRECTION, FlowViewportDirection, refreshNodeMembers(), alignLineageLayout(), applyElkPositions() (+5 more)

### Community 75 - "MemberInfoActions.tsx"
Cohesion: 0.21
Nodes (12): Props, FacebookIcon(), FacebookGlyph(), InstagramGlyph(), LinkedinGlyph(), svgProps, TelegramGlyph(), InstagramIcon() (+4 more)

### Community 76 - "Common Mistakes"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [CRITICAL] Adding children to leaf scene objects, [HIGH] Expecting getBounds() to return a Rectangle, [HIGH] Using cacheAsBitmap instead of cacheAsTexture, [MEDIUM] Setting both pivot and origin on the same container, Quick Start

### Community 77 - "MemberFormFields.tsx"
Cohesion: 0.10
Nodes (23): CheckedField, getStoredFieldValues(), Links, StoredMemberValues, complete, mentors, sparse, toTime() (+15 more)

### Community 78 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, attach / detach, Common Mistakes, Core Patterns, [CRITICAL] Using `addChild` on a RenderLayer, [HIGH] Layer and attached children in different render groups, Layer + logical parent, Manual sort (+5 more)

### Community 79 - "Core Patterns"
Cohesion: 0.14
Nodes (13): Alpha mask (Sprite-based), API Reference, Common Mistakes, Core Patterns, [HIGH] Using cacheAsTexture with masks, Inverse masking, Mask channel selection, Mask type selection (+5 more)

### Community 80 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, Common Mistakes, Construction options, Core Patterns, [HIGH] Nesting many render groups, [MEDIUM] Constantly adding/removing from a render group, [MEDIUM] Overusing render groups, Profile before adding (+5 more)

### Community 81 - "constants/theme.ts"
Cohesion: 0.25
Nodes (6): darkTheme, DEFAULT_THEME, lightTheme, THEMES, themeCssMap, themeInitScript

### Community 82 - "pixijs-events/SKILL.md"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] buttonMode removed; use cursor, [HIGH] Default eventMode is passive, [HIGH] Move events only fire over the object in v8, [MEDIUM] Cursor does not inherit from parent, Quick Start

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

### Community 88 - "emailRoutes.ts"
Cohesion: 0.12
Nodes (25): express-rate-limit, authSecret(), isDemoMode(), EmailIdentity, normalizeEmail(), resolveEmailIdentity(), loadEmailIdentity(), prismaCodeStore (+17 more)

### Community 89 - "Foundations"
Cohesion: 0.15
Nodes (12): Advanced, Foundations, pixijs-application, pixijs-core-concepts, pixijs-events, pixijs-performance, pixijs-scene-container, pixijs-scene-core-concepts (+4 more)

### Community 90 - "teamPacking.ts"
Cohesion: 0.26
Nodes (9): TEAM_FRAME_GAP, TEAM_PACK_ASPECT, computeDirectedPacking(), computePacking(), packLanes(), Placement, scorePacking(), shelfPack() (+1 more)

### Community 91 - "Transforms and Coordinate Spaces"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Setting scale to 0, [MEDIUM] Confusing anchor and pivot, [MEDIUM] Reading world transform before first render, Quick Start, Transforms and Coordinate Spaces

### Community 92 - "Core Concepts"
Cohesion: 0.18
Nodes (11): Container vs leaf (CRITICAL), Core Concepts, Culling, Destroy semantics, Lifecycle events, Masking, Render groups, Render order and explicit z-ordering (+3 more)

### Community 93 - "ui/index.ts"
Cohesion: 0.29
Nodes (4): Options, Position, noopSubscribe(), useIsHydrated()

### Community 94 - "SeasonMotif.tsx"
Cohesion: 0.24
Nodes (9): FlowerIcon(), Props, MapleLeafIcon(), Props, Placement, PLACEMENTS, Props, SeasonMotif() (+1 more)

### Community 98 - "Common Mistakes"
Cohesion: 0.20
Nodes (10): Common Mistakes, [CRITICAL] App destroy without releaseGlobalResources, [HIGH] Destroying and recreating objects instead of recycling, [HIGH] Interleaving object types in scene graph, [HIGH] Loading many individual textures instead of spritesheets, [HIGH] Updating Text or HTMLText every frame, [HIGH] Using complex Graphics instead of textures, [MEDIUM] Not staggering bulk texture destruction (+2 more)

### Community 99 - "devLogin.ts"
Cohesion: 0.48
Nodes (5): databaseHost(), devLoginProblems(), Env, isDevLoginEnabled(), LOCAL_HOSTS

### Community 100 - "Core Patterns"
Cohesion: 0.20
Nodes (10): Bounds in different spaces, Coordinate conversion, Core Patterns, Cumulative alpha (getGlobalAlpha), Global, local, and screen coordinates, Pivot, Position, scale, rotation, Sizing via width, height, setSize (+2 more)

### Community 101 - "MemberPosition"
Cohesion: 0.18
Nodes (7): date-fns, Props, Props, MemberPosition, generateGoogleCalendarLink(), getClosestBirthday(), TeamLayoutInput

### Community 102 - "Render Loop"
Cohesion: 0.22
Nodes (8): API Reference, Common Mistakes, [CRITICAL] Treating the ticker callback arg as a number, Frame lifecycle, [HIGH] Using `updateTransform` for per-frame logic, [MEDIUM] Assuming ticker callbacks run after render, Quick Start, Render Loop

### Community 103 - "pixijs-core-concepts/SKILL.md"
Cohesion: 0.22
Nodes (8): API Reference, Decision guide, Environments, Quick concepts, Quick Start, Renderer = systems + pipes, The render loop, Topics

### Community 104 - "MemberFilterCategory.tsx"
Cohesion: 0.11
Nodes (22): FilterCategory(), LION_GROUP_ICON, LION_ICON, Props, FilterGroupProps, ALL_SECTIONS_CLOSED, FiltersPanel(), Props (+14 more)

### Community 105 - "utils/positions.ts"
Cohesion: 0.43
Nodes (5): getTeamRoster(), getMemberTeamRoles(), getPositionPeriod(), getPositionYearLabel(), Years

### Community 106 - "hooks/index.ts"
Cohesion: 0.25
Nodes (4): DemoBadge(), focusSearchInput(), Toolbar(), usePanelToggle()

### Community 107 - "src/types/index.ts"
Cohesion: 0.07
Nodes (64): @heroicons/react, tailwind-merge, GLOW, Props, FitViewButton(), Props, Props, ToolbarIconButton() (+56 more)

### Community 108 - "Toolbar.tsx"
Cohesion: 0.07
Nodes (52): AccessLevel, AuthMethod, Challenge, ChallengeQuestion, logout(), post(), RequestCodeOutcome, requestEmailCode() (+44 more)

### Community 110 - "server/src/types/index.ts"
Cohesion: 0.07
Nodes (30): mongodb, ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember, STATUSES_MAP (+22 more)

### Community 111 - "MemberBirthdayAnimation.tsx"
Cohesion: 0.35
Nodes (8): BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props, acquireEmojiTextures(), createEmojiTexture(), generateRandomPosition(), releaseEmojiTextures()

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

### Community 114 - "Core Patterns"
Cohesion: 0.29
Nodes (7): Core Patterns, Frame rate capping, Manual rendering, Per-object update via `onRender`, Priority order, Stop and start, Time units

### Community 116 - "pixijs-scene-core-concepts/SKILL.md"
Cohesion: 0.14
Nodes (12): API Reference, Common Mistakes, [CRITICAL] Adding children to a leaf display object, [CRITICAL] Referencing DisplayObject, [HIGH] Forgetting isRenderGroup on large static subtrees, [HIGH] Treating child.x as world space, Leaf comparison: which skill covers which object, [MEDIUM] sortableChildren without zIndex (+4 more)

### Community 117 - "ThemeContext.tsx"
Cohesion: 0.22
Nodes (10): applyCssTokens(), ThemeContext, ThemeContextValue, ThemeProvider(), useIsMobileScreen(), useMediaQuery(), CssThemeTokens, ThemeDefinition (+2 more)

### Community 118 - "elkLayout.ts"
Cohesion: 0.22
Nodes (10): elkjs, elkNodeSize(), LAYER_SPACE_LR, layoutOptions(), layoutWithElk(), loadElk(), stackIsolatedNodes(), edges (+2 more)

### Community 119 - "Common Mistakes"
Cohesion: 0.50
Nodes (4): Common Mistakes, [HIGH] Accessing app.renderer before init() resolves, [HIGH] Setting DOMAdapter after Application.init, [MEDIUM] Treating `preference` as a guarantee

### Community 120 - "aiFaces.ts"
Cohesion: 0.38
Nodes (3): createFaceSource(), Options, source()

### Community 121 - "constants/canvas/index.ts"
Cohesion: 0.16
Nodes (15): lineageEdgePath, ACCIDENTAL_DRAG_MAX_DISTANCE, ACCIDENTAL_DRAG_MAX_MS, LONG_PRESS_MS, TAP_MOVE_TOLERANCE, FONT_FAMILY, NODE_SUBTITLE_STYLE, NODE_TITLE_STYLE (+7 more)

### Community 124 - "membersTree/canvas/index.ts"
Cohesion: 0.14
Nodes (11): @pixi/react, PixiElements, pixi-viewport, NodesLayer(), Props, Props, TeamOverviewLayer(), Props (+3 more)

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
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 949 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `TeamInfoSidebar.tsx`, `MemberFilterCategory.tsx`, `membersStore.ts`, `hooks/index.ts`, `MemberFormFields.tsx`, `MembersTreeContent.tsx`, `TeamFormContent.tsx`, `MemberNode.tsx`, `PhotoViewer.tsx`, `useDashedPathAnimation.ts`, `TeamSearch.tsx`, `hooks/index.ts`, `MemberInfo.tsx`, `useCardAnimation.ts`, `pixi.js`, `EditMemberForm.tsx`, `src/utils/index.ts`, `scale.ts`, `package.json`, `filterSearchParams.ts`, `dashedBezier.ts`, `gsap`, `TeamFormContent.tsx`, `http`, `pixi.js`, `AvatarFileInput.tsx`, `searchShortcut.ts`, `useTreeLayout.ts`, `ui/index.ts`, `MemberFilterCategory.tsx`, `hooks/index.ts`, `src/types/index.ts`, `Toolbar.tsx`, `MemberBirthdayAnimation.tsx`, `ThemeContext.tsx`, `constants/canvas/index.ts`, `membersTree/canvas/index.ts`?**
  _High betweenness centrality (0.112) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _42 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `sessions.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.06189640035118525 - nodes in this community are weakly interconnected._
- **Why does `getBounds()` connect `gsap` to `Core Patterns`, `Foundations`, `Common Mistakes`?**
  _High betweenness centrality (0.094) - this node is a cross-community bridge._
- **Should `MemberFilterCategory.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.12473118279569892 - nodes in this community are weakly interconnected._
- **Why does `Core Patterns` connect `gsap` to `sessions.ts`, `Common Mistakes`?**
  _High betweenness centrality (0.053) - this node is a cross-community bridge._
- **Should `membersStore.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.1471861471861472 - nodes in this community are weakly interconnected._