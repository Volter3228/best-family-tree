# Graph Report - best-family-tree  (2026-11-14)

## Corpus Check
- 523 files · ~174,184 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 29 file(s) not represented in the graph (top: .prisma 9, (none) 7, .css 6)

## Summary
- 2633 nodes · 6660 edges · 119 communities (113 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 68 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `7d94ccc2`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- EditMemberForm.tsx
- MemberFormFields.tsx
- Toolbar.tsx
- MemberStatus
- memberService.ts
- src/index.ts
- TeamInfoSidebar.tsx
- emailRoutes.ts
- PositionFormFields.tsx
- Core Patterns
- challenges.ts
- TeamSearch.tsx
- anonymizeDemo.ts
- react
- PhotoViewer.tsx
- useDashedPathAnimation.ts
- eligibility.ts
- teamFrame.ts
- MembersTreeScene.tsx
- catalogValidation.ts
- Direction
- HTML Report Format
- MemberNodeAvatar.tsx
- SettingsPanel.tsx
- teamService.ts
- oidc.ts
- compilerOptions
- compilerOptions
- pixi.js
- Member
- dependencies
- server/package.json
- MemberFormFields.tsx
- seedQuestions.ts
- src/utils/index.ts
- Skill router
- package.json
- filterSearchParams.ts
- src/types/index.ts
- dashedBezier.ts
- Core Patterns
- devDependencies
- Member
- memberUpdateValidation.ts
- CLAUDE.md
- Core Patterns
- importAllowedEmails.ts
- constants/canvas/index.ts
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
- checkConfig.ts
- MembersTreeContent.tsx
- TeamFormContent.tsx
- computeFilteredMembers.ts
- BEST Family Tree
- Diagnosing Bugs
- react
- ThemeContext.tsx
- importAllowedEmails.ts
- teamLayout.ts
- Core Patterns
- Core Patterns
- dependencies
- src/utils/index.ts
- FiltersPanel.tsx
- telegramEligibility.ts
- MemberNode.tsx
- Core Patterns
- Core Patterns
- Core Patterns
- useMembersStore
- useCanvasTheme.ts
- Core Patterns
- Constructor options (Container-inherited)
- Test-Driven Development
- GSAP Core
- Core Patterns
- pixijs/SKILL.md
- Foundations
- TeamSearch.tsx
- Common Mistakes
- Core Concepts
- ref_vitest
- auth/types.ts
- backup-prod.sh
- start-prod.sh
- restore-local.sh
- Common Mistakes
- signInCodeEmail.ts
- Core Patterns
- filtersStore.ts
- Render Loop
- pixijs-core-concepts/SKILL.md
- MemberFilterCategory.tsx
- demoQuestions.test.ts
- useTreeDirection.ts
- Toolbar.tsx
- server/src/types/index.ts
- Renderers: WebGPU, WebGL, and Canvas
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

## Communities (119 total, 6 thin omitted)

### Community 0 - "EditMemberForm.tsx"
Cohesion: 0.17
Nodes (25): AddMemberForm(), buildMemberFormData(), ClearButton(), SubmitButton(), ConfirmDeleteControl(), Props, describeSubmitError(), EditMemberForm() (+17 more)

### Community 1 - "MemberFormFields.tsx"
Cohesion: 0.12
Nodes (23): FieldError(), Props, Props, Props, SocialMediaFormFields(), TextInput(), CheckedField, getStoredFieldValues() (+15 more)

### Community 2 - "Toolbar.tsx"
Cohesion: 0.29
Nodes (8): DemoBadge(), FiltersPanel(), Props, SearchBar(), Props, Toolbar(), usePanelToggle(), useFiltersStore

### Community 3 - "MemberStatus"
Cohesion: 0.08
Nodes (26): EMPTY_FILTER_STATE, MENTOR_STATUSES, Props, initialFiltersState, AvatarFilterValue, ActivityState, Active, Excluded (+18 more)

### Community 4 - "memberService.ts"
Cohesion: 0.10
Nodes (32): buildMemberFields(), buildMemberUpdateFields(), buildSharedFields(), buildSparseMemberFields(), parsePhoneNumbers(), parsePositionsPayload(), getPositionKey(), ResolvedPosition (+24 more)

### Community 5 - "src/index.ts"
Cohesion: 0.08
Nodes (28): compression, cors, express, helmet, @prisma/adapter-pg, sessionFromRequest(), adapter, prisma (+20 more)

### Community 6 - "TeamInfoSidebar.tsx"
Cohesion: 0.25
Nodes (13): fetchSession(), SessionInfo, MemberSidebar(), TeamInfoSidebar(), MemberSidebarContent(), Props, SidebarMinimizedSummary(), useSidebarSwitchAnimation() (+5 more)

### Community 7 - "emailRoutes.ts"
Cohesion: 0.11
Nodes (33): authSecret(), CHALLENGE_TTL_MS, isDemoMode(), isProduction(), QUESTIONS_SHOWN, SESSION_COOKIE, SESSION_TTL_MS, SIGN_IN_COOKIE (+25 more)

### Community 8 - "PositionFormFields.tsx"
Cohesion: 0.14
Nodes (29): PositionAssignmentFields(), Props, PositionFormFields(), Props, createEmptyPositionRow(), EMPTY_POSITION_ROW, findTeamByName(), getPositionRowSummary() (+21 more)

### Community 9 - "Core Patterns"
Cohesion: 0.06
Nodes (32): Accessibility, ApplicationOptions reference, Background, Culler (CullerPluginOptions), Deprecated (GC — prefer the unified options above), Events, Garbage collection, Graphics (+24 more)

### Community 10 - "challenges.ts"
Cohesion: 0.16
Nodes (19): express-rate-limit, ChallengeState, isExpired(), isSolved(), pickRandom(), swapQuestion(), SwapResult, base (+11 more)

### Community 11 - "TeamSearch.tsx"
Cohesion: 0.25
Nodes (8): FiltersHeader(), Props, formatCount(), PARTICIPANT_FORMS, PluralForms, pluralizeUk(), TEAM_FORMS, YEAR_FORMS

### Community 12 - "anonymizeDemo.ts"
Cohesion: 0.05
Nodes (39): @faker-js/faker, assertUniqueContacts(), allowed, args, byId, factory, GROUP_NAMES, memberPhotos (+31 more)

### Community 13 - "react"
Cohesion: 0.13
Nodes (23): react, DropdownMenu(), Props, BadgeInput(), Props, BadgeInputField(), Props, useBadgeInputState() (+15 more)

### Community 14 - "PhotoViewer.tsx"
Cohesion: 0.10
Nodes (35): react-dom, zustand, DropdownPortal(), Props, cache, loadImageAspect(), PhotoOpenButton(), Props (+27 more)

### Community 15 - "useDashedPathAnimation.ts"
Cohesion: 0.18
Nodes (18): LineageEdge(), DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN, MIN_ANIM_DURATION, PATTERN_LEN, RETRACT_BASE (+10 more)

### Community 16 - "eligibility.ts"
Cohesion: 0.26
Nodes (10): EmailIdentity, MemberMatch, normalizeEmail(), resolveEmailIdentity(), loadEmailIdentity(), decideGoogleSignIn(), GoogleClaims, GoogleDecision (+2 more)

### Community 17 - "teamFrame.ts"
Cohesion: 0.12
Nodes (27): TEAM_COLUMN_GAP, TEAM_EDGE_DROP, TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_SPREAD_WIDTH, TEAM_EDGE_STUB, TEAM_FRAME_HEADER, TEAM_FRAME_MIN_WIDTH, TEAM_FRAME_PADDING (+19 more)

### Community 18 - "MembersTreeScene.tsx"
Cohesion: 0.09
Nodes (32): Props, Props, Props, Props, TeamFramesLayer(), Props, TeamOverviewLayer(), MembersTreeScene() (+24 more)

### Community 19 - "catalogValidation.ts"
Cohesion: 0.08
Nodes (32): Renderer selection at runtime, [MEDIUM] Using container.name instead of container.label, deleteCloudinaryImage(), extractCloudinaryPublicId(), TEAM_INCLUDE, router, uploadTeamIcon, rejectUpload() (+24 more)

### Community 20 - "Direction"
Cohesion: 0.18
Nodes (17): clamp01(), easeBackOut, easePower2In, easePower2Out, entries, Entry, finishCardReveal(), registerCardReveal() (+9 more)

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "MemberNodeAvatar.tsx"
Cohesion: 0.06
Nodes (36): @pixi/react, PixiElements, @gsap/react, @pixi/react, pixi-viewport, MemberNodeAvatar(), Props, Props (+28 more)

### Community 23 - "SettingsPanel.tsx"
Cohesion: 0.16
Nodes (11): OPTIONS, Props, ViewModeSwitch(), EDGE_STYLE_OPTIONS, ORIENTATION_OPTIONS, Props, Section(), SectionProps (+3 more)

### Community 24 - "teamService.ts"
Cohesion: 0.13
Nodes (26): resolvePosition(), assertCanEditMembers(), deriveTeamName(), resolveRole(), resolveTeam(), resolveTeamType(), RoleRef, TeamRef (+18 more)

### Community 25 - "oidc.ts"
Cohesion: 0.17
Nodes (16): openid-client, callbackErrorRedirect(), configs, cookieOptions(), finishLogin(), getProviderConfig(), isProviderEnabled(), OidcProvider (+8 more)

### Community 26 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, esModuleInterop, forceConsistentCasingInFileNames, module, moduleResolution, noImplicitAny, outDir, paths (+12 more)

### Community 27 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+12 more)

### Community 28 - "pixi.js"
Cohesion: 0.07
Nodes (47): Props, TeamBadge(), FILL_ALPHA, lerp(), Props, STROKE_ALPHA, TeamFrame(), Props (+39 more)

### Community 29 - "Member"
Cohesion: 0.09
Nodes (31): NodesLayer(), Props, Props, Props, Props, Member, changesStructure(), EMPTY_INDEX (+23 more)

### Community 30 - "dependencies"
Cohesion: 0.11
Nodes (19): dependencies, date-fns, dotenv, elkjs, gsap, @gsap/react, @heroicons/react, lodash (+11 more)

### Community 31 - "server/package.json"
Cohesion: 0.07
Nodes (27): cloudinary, concurrently, multer, multer-storage-cloudinary, nodemon, @prisma/config, ts-node, tsx (+19 more)

### Community 32 - "MemberFormFields.tsx"
Cohesion: 0.36
Nodes (6): FacebookIcon(), InstagramIcon(), LinkedinIcon(), TelegramIcon(), MemberInfoSocial(), Props

### Community 33 - "seedQuestions.ts"
Cohesion: 0.27
Nodes (10): DEFAULT_SETTINGS, readLegacyTheme(), SETTINGS_STORAGE_KEY, SettingsActions, SettingsState, initialState, { storageMock }, useSettingsStore (+2 more)

### Community 34 - "src/utils/index.ts"
Cohesion: 0.12
Nodes (28): MemberFilterCategory(), BirthdayFilterSection(), Props, CheckboxGroupFilterSection(), Option, Props, ClearButton(), FilterCheckbox() (+20 more)

### Community 35 - "Skill router"
Cohesion: 0.15
Nodes (13): Advanced, pixijs-accessibility, pixijs-assets, pixijs-blend-modes, pixijs-custom-rendering, pixijs-filters, pixijs-performance, Advanced (+5 more)

### Community 36 - "package.json"
Cohesion: 0.11
Nodes (18): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+10 more)

### Community 37 - "filterSearchParams.ts"
Cohesion: 0.17
Nodes (8): react-datepicker, metadata, nunito, RootLayout(), AuroraBackground(), readNumber(), useBakedAurora(), canBakeAurora()

### Community 38 - "src/types/index.ts"
Cohesion: 0.10
Nodes (39): @heroicons/react, tailwind-merge, GLOW, Props, FitViewButton(), Props, Props, ToolbarIconButton() (+31 more)

### Community 39 - "dashedBezier.ts"
Cohesion: 0.10
Nodes (38): EdgesLayer(), drawPolyline(), TeamEdgesLayer(), FIXED_EDGE_WIDTH, NODE_AVATAR_RADIUS, useCanvasTheme(), Point, alignSegments() (+30 more)

### Community 40 - "Core Patterns"
Cohesion: 0.14
Nodes (18): Adding and removing children, Bounds and coordinate conversion, Constructor options, Container events, Core Patterns, Destroy, Finding and removing from parent, Leaves vs containers (+10 more)

### Community 41 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+5 more)

### Community 42 - "Member"
Cohesion: 0.10
Nodes (21): next, MembersTree(), Props, Props, isTreeReady(), MembersTree, MembersTreeDynamic(), Props (+13 more)

### Community 43 - "memberUpdateValidation.ts"
Cohesion: 0.15
Nodes (12): zod, ExistingMember, findClearedFields(), memberUpdateBodySchema, parsePhones(), sparseMemberBodySchema, splitName(), completeMember (+4 more)

### Community 44 - "CLAUDE.md"
Cohesion: 0.25
Nodes (7): Commands, Conventions, Deployment & data, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout

### Community 45 - "Core Patterns"
Cohesion: 0.12
Nodes (15): Add, remove, swap, API Reference, Child queries, Common Mistakes, Container Hierarchy, Core Patterns, [CRITICAL] Adding children to a leaf, Destroying sub-trees (+7 more)

### Community 46 - "importAllowedEmails.ts"
Cohesion: 0.27
Nodes (13): AuroraBakeInput, bakeAuroraLayers(), BAKE_SCALE, BLUR_SPREAD, CONIC_LAYERS, ConicLayerSpec, cssAngleToCanvasRadians(), getBakeFilter() (+5 more)

### Community 47 - "constants/canvas/index.ts"
Cohesion: 0.15
Nodes (16): pixi-filters, NODE_HOVER_ANIMATION_DURATION, NODE_HOVER_SCALE, ZOOMED_OUT_HOVER_SCALE_MAP, lineageEdgePath, ACCIDENTAL_DRAG_MAX_DISTANCE, ACCIDENTAL_DRAG_MAX_MS, LONG_PRESS_MS (+8 more)

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "ManageForm.tsx"
Cohesion: 0.14
Nodes (24): FormMessages(), DropdownSelectInput(), ManageForm(), MemberMode, Section, SECTIONS, TEAM_KINDS, TeamKind (+16 more)

### Community 50 - "http"
Cohesion: 0.09
Nodes (40): addMember(), ApiError, toApiError(), deleteMember(), editMember(), fetchFamilyTree(), fetchMemberById(), fetchMentorsList() (+32 more)

### Community 51 - "AGENTS.md"
Cohesion: 0.25
Nodes (7): Commands, Conventions, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout, This is NOT the Next.js you know

### Community 52 - "scripts"
Cohesion: 0.20
Nodes (10): scripts, build, db:backup-prod, db:restore-local, dev, dev:webpack, lint, start (+2 more)

### Community 53 - "emailCodes.ts"
Cohesion: 0.18
Nodes (13): CodeOwner, CodeStore, generateCode(), hashCode(), issueCode(), MAX_CODE_ATTEMPTS, sameHash(), StoredCode (+5 more)

### Community 54 - "BEST Family Tree"
Cohesion: 0.33
Nodes (5): BEST Family Tree, People, Sign-in, Teams, Views

### Community 57 - "MemberInfo.tsx"
Cohesion: 0.12
Nodes (25): date-fns, AvatarSkeleton(), MemberAvatarImage(), MemberAvatarImageInner(), Props, formatDateWithYears(), MemberInfo(), MemberInfoActionIcon() (+17 more)

### Community 58 - "pixijs/SKILL.md"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] buttonMode removed; use cursor, [HIGH] Default eventMode is passive, [HIGH] Move events only fire over the object in v8, [MEDIUM] Cursor does not inherit from parent, Quick Start

### Community 59 - "Core Patterns"
Cohesion: 0.12
Nodes (17): Application destroy/recreate cycle, Batching optimization, cacheAsTexture for performance, Core Patterns, Culling, Filters and masks cost, Graphics performance, Low-level rendering optimizations (+9 more)

### Community 60 - "Scene Objects"
Cohesion: 0.14
Nodes (13): pixijs-html-source, pixijs-scene-container, pixijs-scene-dom-container, pixijs-scene-gif, pixijs-scene-graphics, pixijs-scene-mesh, pixijs-scene-particle-container, pixijs-scene-sprite (+5 more)

### Community 61 - "checkConfig.ts"
Cohesion: 0.07
Nodes (37): RFC-2045, RFC-2047, assertConfig(), configProblems(), databaseName(), demoProblems(), Env, googleProblems() (+29 more)

### Community 62 - "MembersTreeContent.tsx"
Cohesion: 0.18
Nodes (16): SharpAvatarTracker(), Viewport(), Props, ACCENT_COLOR_MAP, EVENT_FEATURES, MembersTreeContent(), Props, ViewportCulling() (+8 more)

### Community 63 - "TeamFormContent.tsx"
Cohesion: 0.17
Nodes (14): LionIcon(), Props, AvatarFileInput(), Props, FormCheckbox(), Props, LogoFileInput(), Props (+6 more)

### Community 64 - "computeFilteredMembers.ts"
Cohesion: 0.16
Nodes (22): areSetsEqual(), computeFilteredMembers(), isFilterActive(), getTeamSpan(), hasRole(), hasTeamCriteria(), isTeamFilterActive(), matchesPeriod() (+14 more)

### Community 65 - "BEST Family Tree"
Cohesion: 0.11
Nodes (18): 1. Clone and configure environment, 2. Start the application, 3. Run database migrations, 4. Access the app, Architecture, Available Commands, Backend Commands (run inside container), Backups (+10 more)

### Community 66 - "Diagnosing Bugs"
Cohesion: 0.13
Nodes (14): Completion criterion: a tight loop that goes red, Diagnosing Bugs, Minimise, Non-deterministic bugs, Phase 1: Build a feedback loop, Phase 2: Reproduce + minimise, Phase 3: Hypothesise, Phase 4: Instrument (+6 more)

### Community 67 - "react"
Cohesion: 0.13
Nodes (13): Props, Props, Props, Sidebar(), SidebarFooterContext, Props, SidebarHandle(), Props (+5 more)

### Community 68 - "ThemeContext.tsx"
Cohesion: 0.13
Nodes (16): darkTheme, DEFAULT_THEME, lightTheme, THEMES, applyCssTokens(), ThemeContext, ThemeContextValue, ThemeProvider() (+8 more)

### Community 69 - "importAllowedEmails.ts"
Cohesion: 0.19
Nodes (12): AllowedRow, AllowlistDiff, diffAllowlist(), looksLikeEmail(), parseAllowlistCsv(), ParsedAllowlist, splitLine(), apply (+4 more)

### Community 70 - "teamLayout.ts"
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
Nodes (46): dependencies, cloudinary, compression, cors, dotenv, express, express-rate-limit, helmet (+38 more)

### Community 74 - "src/utils/index.ts"
Cohesion: 0.10
Nodes (30): gsap, EMPTY_IDS, View, NODE_HEIGHT, NODE_WIDTH, getFitViewTargetScale(), useFitViewAnimation(), useFocusFrameAnimation() (+22 more)

### Community 75 - "FiltersPanel.tsx"
Cohesion: 0.18
Nodes (13): FilterCategory(), LION_GROUP_ICON, LION_ICON, Props, FilterGroupProps, ALL_SECTIONS_CLOSED, Props, RoleFilterSection() (+5 more)

### Community 76 - "telegramEligibility.ts"
Cohesion: 0.36
Nodes (7): EligibilityMember, resolveMemberMatch(), phoneKey(), resolveTelegramIdentity(), TelegramIdentity, loadTelegramIdentity(), TelegramClaims

### Community 77 - "MemberNode.tsx"
Cohesion: 0.10
Nodes (25): pixi.js, BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props, acquireEmojiTextures(), createEmojiTexture(), generateRandomPosition() (+17 more)

### Community 78 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, attach / detach, Common Mistakes, Core Patterns, [CRITICAL] Using `addChild` on a RenderLayer, [HIGH] Layer and attached children in different render groups, Layer + logical parent, Manual sort (+5 more)

### Community 79 - "Core Patterns"
Cohesion: 0.14
Nodes (13): Alpha mask (Sprite-based), API Reference, Common Mistakes, Core Patterns, [HIGH] Using cacheAsTexture with masks, Inverse masking, Mask channel selection, Mask type selection (+5 more)

### Community 80 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, Common Mistakes, Construction options, Core Patterns, [HIGH] Nesting many render groups, [MEDIUM] Constantly adding/removing from a render group, [MEDIUM] Overusing render groups, Profile before adding (+5 more)

### Community 81 - "useMembersStore"
Cohesion: 0.20
Nodes (12): LineageFilterSection(), Props, LineageMemberSearch(), Props, membersActions, {
  setMembers,
  reloadMembers,
  addMember,
  updateMember,
  selectMember,
  getMentorsList,
}, useMemberById(), useMembersMap() (+4 more)

### Community 82 - "useCanvasTheme.ts"
Cohesion: 0.24
Nodes (9): FONT_FAMILY, NODE_SUBTITLE_STYLE, NODE_TITLE_STYLE, NODE_TOOLTIP_TEXT_STYLE, TEXT_RESOLUTION, buildCanvasColors(), CanvasColors, CanvasTextStyles (+1 more)

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

### Community 88 - "pixijs/SKILL.md"
Cohesion: 0.20
Nodes (7): API Reference, Quick Start, API Reference, Constructor options, Quick Start, Fallback: canonical PixiJS docs, How to use this skill

### Community 89 - "Foundations"
Cohesion: 0.14
Nodes (13): Foundations, pixijs-application, pixijs-color, pixijs-core-concepts, pixijs-create, pixijs-environments, pixijs-events, pixijs-math (+5 more)

### Community 90 - "TeamSearch.tsx"
Cohesion: 0.13
Nodes (21): compare(), getSearchable(), MemberSearch(), Props, Props, SearchPanel(), Props, SearchSuggestionItem() (+13 more)

### Community 91 - "Common Mistakes"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [CRITICAL] Adding children to leaf scene objects, [HIGH] Expecting getBounds() to return a Rectangle, [HIGH] Using cacheAsBitmap instead of cacheAsTexture, [MEDIUM] Setting both pivot and origin on the same container, Quick Start

### Community 92 - "Core Concepts"
Cohesion: 0.18
Nodes (11): Container vs leaf (CRITICAL), Core Concepts, Culling, Destroy semantics, Lifecycle events, Masking, Render groups, Render order and explicit z-ordering (+3 more)

### Community 93 - "ref_vitest"
Cohesion: 0.15
Nodes (4): db, createFaceSource(), Options, source()

### Community 94 - "auth/types.ts"
Cohesion: 0.17
Nodes (15): canEditMember(), hasAccess(), RANK, CONTACT_FIELDS, toMemberResponse(), AccessRank, Express, Request (+7 more)

### Community 98 - "Common Mistakes"
Cohesion: 0.20
Nodes (10): Common Mistakes, [CRITICAL] App destroy without releaseGlobalResources, [HIGH] Destroying and recreating objects instead of recycling, [HIGH] Interleaving object types in scene graph, [HIGH] Loading many individual textures instead of spritesheets, [HIGH] Updating Text or HTMLText every frame, [HIGH] Using complex Graphics instead of textures, [MEDIUM] Not staggering bulk texture destruction (+2 more)

### Community 99 - "signInCodeEmail.ts"
Cohesion: 0.29
Nodes (5): CODE_TTL_MS, escapeHtml(), pairs(), renderSignInCodeEmail(), { html }

### Community 100 - "Core Patterns"
Cohesion: 0.12
Nodes (16): API Reference, Common Mistakes, Coordinate conversion, Core Patterns, Cumulative alpha (getGlobalAlpha), Global, local, and screen coordinates, [HIGH] Setting scale to 0, [MEDIUM] Confusing anchor and pivot (+8 more)

### Community 101 - "filtersStore.ts"
Cohesion: 0.40
Nodes (5): derive(), FiltersActions, FiltersState, initialState, FilteredMembers

### Community 102 - "Render Loop"
Cohesion: 0.22
Nodes (8): API Reference, Common Mistakes, [CRITICAL] Treating the ticker callback arg as a number, Frame lifecycle, [HIGH] Using `updateTransform` for per-frame logic, [MEDIUM] Assuming ticker callbacks run after render, Quick Start, Render Loop

### Community 103 - "pixijs-core-concepts/SKILL.md"
Cohesion: 0.22
Nodes (8): API Reference, Decision guide, Environments, Quick concepts, Quick Start, Renderer = systems + pipes, The render loop, Topics

### Community 104 - "MemberFilterCategory.tsx"
Cohesion: 0.22
Nodes (16): ACTIVITY_OPTIONS, ACTIVITY_STATES, AVATAR_OPTIONS, AVATAR_VALUES, JOIN_SEASONS, MEMBER_STATUSES, SEASON_OPTIONS, STATUS_OPTIONS (+8 more)

### Community 105 - "demoQuestions.test.ts"
Cohesion: 0.20
Nodes (9): answerMatches(), CYRILLIC_TO_LATIN, normalizeAnswer(), MIN_ACTIVE_QUESTIONS, deleteQuestionSessions(), DEMO_QUESTIONS, active, items (+1 more)

### Community 106 - "useTreeDirection.ts"
Cohesion: 0.70
Nodes (3): useIsMobileScreen(), useResolvedDirection(), useMediaQuery()

### Community 108 - "Toolbar.tsx"
Cohesion: 0.06
Nodes (57): AccessLevel, AuthMethod, Challenge, ChallengeQuestion, logout(), post(), RequestCodeOutcome, requestEmailCode() (+49 more)

### Community 110 - "server/src/types/index.ts"
Cohesion: 0.08
Nodes (29): mongodb, ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember, STATUSES_MAP (+21 more)

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

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
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Skill router` connect `Skill router` to `pixijs/SKILL.md`?**
  _High betweenness centrality (0.123) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _42 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `MemberFormFields.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.11693548387096774 - nodes in this community are weakly interconnected._
- **Why does `Point` connect `dashedBezier.ts` to `Skill router`, `teamLayout.ts`, `src/utils/index.ts`, `teamFrame.ts`, `MembersTreeScene.tsx`, `Foundations`?**
  _High betweenness centrality (0.108) - this node is a cross-community bridge._
- **Should `MemberStatus` be split into smaller, more focused modules?**
  _Cohesion score 0.0796221322537112 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `EditMemberForm.tsx`, `MemberFormFields.tsx`, `Toolbar.tsx`, `MemberStatus`, `TeamInfoSidebar.tsx`, `PositionFormFields.tsx`, `PhotoViewer.tsx`, `useDashedPathAnimation.ts`, `MembersTreeScene.tsx`, `Direction`, `MemberNodeAvatar.tsx`, `pixi.js`, `Member`, `src/utils/index.ts`, `package.json`, `filterSearchParams.ts`, `src/types/index.ts`, `dashedBezier.ts`, `Member`, `constants/canvas/index.ts`, `ManageForm.tsx`, `http`, `MemberInfo.tsx`, `MembersTreeContent.tsx`, `TeamFormContent.tsx`, `react`, `ThemeContext.tsx`, `src/utils/index.ts`, `FiltersPanel.tsx`, `MemberNode.tsx`, `useMembersStore`, `useCanvasTheme.ts`, `TeamSearch.tsx`, `useTreeDirection.ts`, `Toolbar.tsx`?**
  _High betweenness centrality (0.102) - this node is a cross-community bridge._
- **Should `memberService.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.10077519379844961 - nodes in this community are weakly interconnected._