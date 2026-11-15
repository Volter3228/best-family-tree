# Graph Report - best-family-tree  (2026-11-15)

## Corpus Check
- 525 files · ~173,368 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 29 file(s) not represented in the graph (top: .prisma 9, (none) 7, .css 6)

## Summary
- 2623 nodes · 6648 edges · 137 communities (129 shown, 8 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 62 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `0c5ba467`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- EditMemberForm.tsx
- MemberFormFields.tsx
- Toolbar.tsx
- MemberStatus
- memberService.ts
- src/index.ts
- TeamFormContent.tsx
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
- dimensions.ts
- package.json
- filterSearchParams.ts
- src/types/index.ts
- dashedBezier.ts
- Core Patterns
- devDependencies
- Member
- memberUpdateValidation.ts
- CLAUDE.md
- Container Hierarchy
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
- @heroicons/react
- filterTeams.ts
- BEST Family Tree
- Diagnosing Bugs
- react
- ThemeContext.tsx
- importAllowedEmails.ts
- teamLayout.ts
- Core Patterns
- Core Patterns
- dependencies
- useTreeLayout.ts
- FilterCategory.tsx
- telegramEligibility.ts
- MemberNode.tsx
- Core Patterns
- Core Patterns
- Core Patterns
- useMembersStore
- gsap
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
- aiFaces.ts
- auth/types.ts
- backup-prod.sh
- start-prod.sh
- restore-local.sh
- Common Mistakes
- emailRoutes.ts
- Core Patterns
- filtersStore.ts
- Render Loop
- pixijs-core-concepts/SKILL.md
- MemberFilterCategory.tsx
- demoQuestions.test.ts
- familyTreeRoutes.ts
- useTeamForm.ts
- Toolbar.tsx
- TeamEdgesLayer.tsx
- server/src/types/index.ts
- scripts
- Renderers: WebGPU, WebGL, and Canvas
- TeamInfo.tsx
- devDependencies
- MemberBirthdayAnimation.tsx
- pixijs-scene-core-concepts/SKILL.md
- MemberFormFields.tsx
- FiltersPanel.tsx
- useMeta.ts
- SearchSuggestionItem.tsx
- teamBadgeLayout.ts
- hooks/index.ts
- memberPresentation.ts
- Core Patterns
- Transforms and Coordinate Spaces
- Common Mistakes
- useSearchSuggestions.ts
- Position
- GSAP with React
- useIsHydrated.ts
- hitl-loop.template.sh
- GSAP Performance
- GSAP Timeline
- Common Mistakes

## God Nodes (most connected - your core abstractions)
1. `react` - 120 edges
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

## Communities (137 total, 8 thin omitted)

### Community 0 - "EditMemberForm.tsx"
Cohesion: 0.27
Nodes (16): AddMemberForm(), buildMemberFormData(), describeSubmitError(), EditMemberForm(), getInitialFormData(), Props, MemberFormFields(), FormError() (+8 more)

### Community 1 - "MemberFormFields.tsx"
Cohesion: 0.18
Nodes (14): CheckedField, getStoredFieldValues(), Links, StoredMemberValues, complete, mentors, sparse, toTime() (+6 more)

### Community 2 - "Toolbar.tsx"
Cohesion: 0.25
Nodes (10): DemoBadge(), FitViewButton(), Props, Props, Toolbar(), ToolbarIconButton(), ToolbarTooltip(), useHoverTooltip() (+2 more)

### Community 3 - "MemberStatus"
Cohesion: 0.15
Nodes (17): Props, AvatarFilterValue, ActivityState, Active, Excluded, Inactive, RecruitmentSeason, filtersToSearchParams() (+9 more)

### Community 4 - "memberService.ts"
Cohesion: 0.15
Nodes (21): buildMemberFields(), buildMemberUpdateFields(), buildSharedFields(), buildSparseMemberFields(), parsePhoneNumbers(), getPositionKey(), ResolvedPosition, syncPositions() (+13 more)

### Community 5 - "src/index.ts"
Cohesion: 0.08
Nodes (37): compression, cors, express, helmet, multer, multer-storage-cloudinary, @prisma/adapter-pg, adapter (+29 more)

### Community 6 - "TeamFormContent.tsx"
Cohesion: 0.12
Nodes (24): ClearButton(), Props, ConfirmDeleteControl(), Props, FormFooter(), Props, FormMessages(), Props (+16 more)

### Community 7 - "emailRoutes.ts"
Cohesion: 0.15
Nodes (24): CHALLENGE_TTL_MS, isDemoMode(), isProduction(), QUESTIONS_SHOWN, SESSION_COOKIE, SESSION_TTL_MS, SIGN_IN_COOKIE, useSecureCookie() (+16 more)

### Community 8 - "PositionFormFields.tsx"
Cohesion: 0.13
Nodes (30): PositionAssignmentFields(), Props, PositionFormFields(), Props, createEmptyPositionRow(), EMPTY_POSITION_ROW, findTeamByName(), getPositionRowSummary() (+22 more)

### Community 9 - "Core Patterns"
Cohesion: 0.06
Nodes (32): Accessibility, ApplicationOptions reference, Background, Culler (CullerPluginOptions), Deprecated (GC — prefer the unified options above), Events, Garbage collection, Graphics (+24 more)

### Community 10 - "challenges.ts"
Cohesion: 0.12
Nodes (22): zod, ChallengeState, isExpired(), isSolved(), pickRandom(), swapQuestion(), SwapResult, base (+14 more)

### Community 11 - "TeamSearch.tsx"
Cohesion: 0.25
Nodes (8): FiltersHeader(), Props, formatCount(), PARTICIPANT_FORMS, PluralForms, pluralizeUk(), TEAM_FORMS, YEAR_FORMS

### Community 12 - "anonymizeDemo.ts"
Cohesion: 0.06
Nodes (36): @faker-js/faker, allowed, args, byId, factory, GROUP_NAMES, memberPhotos, nextFace (+28 more)

### Community 13 - "react"
Cohesion: 0.16
Nodes (20): DropdownMenu(), Props, BadgeInput(), Props, BadgeInputField(), Props, useBadgeInputState(), ComboboxInput() (+12 more)

### Community 14 - "PhotoViewer.tsx"
Cohesion: 0.09
Nodes (39): zustand, cache, loadImageAspect(), PhotoOpenButton(), Props, PhotoViewer(), Viewer(), viewportRect() (+31 more)

### Community 15 - "useDashedPathAnimation.ts"
Cohesion: 0.17
Nodes (17): LineageEdge(), DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN, MIN_ANIM_DURATION, PATTERN_LEN, RETRACT_BASE (+9 more)

### Community 16 - "eligibility.ts"
Cohesion: 0.20
Nodes (14): EmailIdentity, MemberMatch, normalizeEmail(), resolveEmailIdentity(), loadEmailIdentity(), callbackErrorRedirect(), decideGoogleSignIn(), GoogleClaims (+6 more)

### Community 17 - "teamFrame.ts"
Cohesion: 0.12
Nodes (26): TEAM_COLUMN_GAP, TEAM_EDGE_DROP, TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_SPREAD_WIDTH, TEAM_EDGE_STUB, TEAM_FRAME_HEADER, TEAM_FRAME_MIN_WIDTH, TEAM_FRAME_PADDING (+18 more)

### Community 18 - "MembersTreeScene.tsx"
Cohesion: 0.11
Nodes (29): Props, Props, Props, Props, TeamFramesLayer(), Props, FIXED_EDGE_WIDTH, TEAM_OVERVIEW_EDGE_ALPHA (+21 more)

### Community 19 - "catalogValidation.ts"
Cohesion: 0.10
Nodes (22): Renderer selection at runtime, [MEDIUM] Using container.name instead of container.label, parsePositionsPayload(), booleanLike, formatZodErrors(), isValidPeriod(), name(), optional() (+14 more)

### Community 20 - "Direction"
Cohesion: 0.21
Nodes (15): clamp01(), easeBackOut, easePower2In, easePower2Out, entries, Entry, finishCardReveal(), registerCardReveal() (+7 more)

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "MemberNodeAvatar.tsx"
Cohesion: 0.12
Nodes (16): @pixi/react, PixiElements, @gsap/react, @pixi/react, pixi-viewport, MemberNodeAvatar(), Props, AVATAR_HIGH_RES_SIZE (+8 more)

### Community 23 - "SettingsPanel.tsx"
Cohesion: 0.22
Nodes (7): EDGE_STYLE_OPTIONS, ORIENTATION_OPTIONS, Props, Section(), SectionProps, SettingsPanel(), THEME_OPTIONS

### Community 24 - "teamService.ts"
Cohesion: 0.15
Nodes (24): resolvePosition(), assertCanEditMembers(), deleteMember(), deriveTeamName(), resolveRole(), resolveTeam(), resolveTeamType(), RoleRef (+16 more)

### Community 25 - "oidc.ts"
Cohesion: 0.17
Nodes (16): Container events, Transform, Lifecycle events, Origin (new in v8), configs, cookieOptions(), finishLogin(), getProviderConfig() (+8 more)

### Community 26 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, esModuleInterop, forceConsistentCasingInFileNames, module, moduleResolution, noImplicitAny, outDir, paths (+12 more)

### Community 27 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+12 more)

### Community 28 - "pixi.js"
Cohesion: 0.07
Nodes (47): pixi.js, Props, TeamBadge(), FILL_ALPHA, lerp(), Props, STROKE_ALPHA, TeamFrame() (+39 more)

### Community 29 - "Member"
Cohesion: 0.08
Nodes (41): NodesLayer(), Props, Props, Props, DEFAULT_POSITION, Member, changesStructure(), EMPTY_INDEX (+33 more)

### Community 30 - "dependencies"
Cohesion: 0.11
Nodes (19): dependencies, date-fns, dotenv, elkjs, gsap, @gsap/react, @heroicons/react, lodash (+11 more)

### Community 31 - "server/package.json"
Cohesion: 0.06
Nodes (28): cloudinary, concurrently, nodemon, openid-client, @prisma/config, ts-node, tsx, @types/compression (+20 more)

### Community 32 - "MemberFormFields.tsx"
Cohesion: 0.36
Nodes (6): FacebookIcon(), InstagramIcon(), LinkedinIcon(), TelegramIcon(), MemberInfoSocial(), Props

### Community 33 - "seedQuestions.ts"
Cohesion: 0.27
Nodes (9): DEFAULT_SETTINGS, readLegacyTheme(), SETTINGS_STORAGE_KEY, SettingsActions, SettingsState, initialState, { storageMock }, OrientationSetting (+1 more)

### Community 34 - "src/utils/index.ts"
Cohesion: 0.10
Nodes (35): FilterCategory(), FilterGroupProps, BirthdayFilterSection(), Props, CheckboxGroupFilterSection(), Option, Props, ClearButton() (+27 more)

### Community 35 - "dimensions.ts"
Cohesion: 0.13
Nodes (19): EMPTY_IDS, SharpAvatarTracker(), View, Props, AVATAR_LOW_RES_SIZE, BIRTHDAY_ANIMATION_MIN_SCALE, CARD_VIEW_SCALE, GRID_GAP_X (+11 more)

### Community 36 - "package.json"
Cohesion: 0.11
Nodes (18): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+10 more)

### Community 37 - "filterSearchParams.ts"
Cohesion: 0.17
Nodes (8): react-datepicker, metadata, nunito, RootLayout(), AuroraBackground(), readNumber(), useBakedAurora(), canBakeAurora()

### Community 38 - "src/types/index.ts"
Cohesion: 0.12
Nodes (26): tailwind-merge, GLOW, Props, Props, Props, Props, Props, DateInput() (+18 more)

### Community 39 - "dashedBezier.ts"
Cohesion: 0.13
Nodes (28): EdgesLayer(), NODE_AVATAR_RADIUS, useDashedPathAnimation(), DEFAULT_NODE_HEIGHT, DEFAULT_NODE_WIDTH, FlowViewportDirection, alignSegments(), buildSegmentFromPositions() (+20 more)

### Community 40 - "Core Patterns"
Cohesion: 0.19
Nodes (13): Adding and removing children, Bounds and coordinate conversion, Constructor options, Core Patterns, Destroy, Finding and removing from parent, Leaves vs containers, Per-frame updates with onRender (+5 more)

### Community 41 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+5 more)

### Community 42 - "Member"
Cohesion: 0.10
Nodes (23): fetchFamilyTree(), Home(), loadTree(), MembersTree(), Props, Props, isTreeReady(), MembersTree (+15 more)

### Community 43 - "memberUpdateValidation.ts"
Cohesion: 0.19
Nodes (11): ExistingMember, findClearedFields(), MemberUpdateBody, memberUpdateBodySchema, parsePhones(), sparseMemberBodySchema, splitName(), completeMember (+3 more)

### Community 44 - "CLAUDE.md"
Cohesion: 0.25
Nodes (7): Commands, Conventions, Deployment & data, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout

### Community 45 - "Container Hierarchy"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, Container Hierarchy, [CRITICAL] Adding children to a leaf, [HIGH] Destroying the parent without `children: true`, [MEDIUM] Mutating `children` during iteration, Quick Start

### Community 46 - "importAllowedEmails.ts"
Cohesion: 0.27
Nodes (13): AuroraBakeInput, bakeAuroraLayers(), BAKE_SCALE, BLUR_SPREAD, CONIC_LAYERS, ConicLayerSpec, cssAngleToCanvasRadians(), getBakeFilter() (+5 more)

### Community 47 - "constants/canvas/index.ts"
Cohesion: 0.31
Nodes (8): lineageEdgePath, ACCIDENTAL_DRAG_MAX_DISTANCE, ACCIDENTAL_DRAG_MAX_MS, LONG_PRESS_MS, TAP_MOVE_TOLERANCE, PressStart, useTapWithoutDrag(), isTapGesture()

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "ManageForm.tsx"
Cohesion: 0.17
Nodes (19): DropdownSelectInput(), ManageForm(), MemberMode, Section, SECTIONS, TEAM_KINDS, TeamKind, MemberEditPanel() (+11 more)

### Community 50 - "http"
Cohesion: 0.24
Nodes (14): addMember(), ApiError, toApiError(), deleteMember(), editMember(), fetchMemberById(), fetchMentorsList(), createRole() (+6 more)

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
Cohesion: 0.20
Nodes (15): date-fns, AvatarSkeleton(), MemberAvatarImage(), MemberAvatarImageInner(), Props, DateWithYears(), MemberInfo(), MemberInfoActionIcon() (+7 more)

### Community 58 - "pixijs/SKILL.md"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] buttonMode removed; use cursor, [HIGH] Default eventMode is passive, [HIGH] Move events only fire over the object in v8, [MEDIUM] Cursor does not inherit from parent, Quick Start

### Community 59 - "Core Patterns"
Cohesion: 0.12
Nodes (17): Application destroy/recreate cycle, Batching optimization, cacheAsTexture for performance, Core Patterns, Culling, Filters and masks cost, Graphics performance, Low-level rendering optimizations (+9 more)

### Community 60 - "Scene Objects"
Cohesion: 0.67
Nodes (3): pixijs-scene-container, pixijs-scene-graphics, Scene Objects

### Community 61 - "checkConfig.ts"
Cohesion: 0.07
Nodes (37): RFC-2045, RFC-2047, assertConfig(), configProblems(), databaseName(), demoProblems(), Env, googleProblems() (+29 more)

### Community 62 - "MembersTreeContent.tsx"
Cohesion: 0.12
Nodes (27): Viewport(), MemberSidebar(), Props, ACCENT_COLOR_MAP, EVENT_FEATURES, MembersTreeContent(), Props, TeamInfoSidebar() (+19 more)

### Community 63 - "@heroicons/react"
Cohesion: 0.22
Nodes (9): @heroicons/react, next, AvatarFileInput(), Props, Props, config, exceedsUploadLimit(), MAX_UPLOAD_BYTES (+1 more)

### Community 64 - "filterTeams.ts"
Cohesion: 0.38
Nodes (9): getTeamSpan(), hasRole(), hasTeamCriteria(), isTeamFilterActive(), matchesPeriod(), memberMatchesTeamFilters(), positionMatchesTeamFilters(), TeamFilters (+1 more)

### Community 65 - "BEST Family Tree"
Cohesion: 0.11
Nodes (18): 1. Clone and configure environment, 2. Start the application, 3. Run database migrations, 4. Access the app, Architecture, Available Commands, Backend Commands (run inside container), Backups (+10 more)

### Community 66 - "Diagnosing Bugs"
Cohesion: 0.13
Nodes (14): Completion criterion: a tight loop that goes red, Diagnosing Bugs, Minimise, Non-deterministic bugs, Phase 1: Build a feedback loop, Phase 2: Reproduce + minimise, Phase 3: Hypothesise, Phase 4: Instrument (+6 more)

### Community 67 - "react"
Cohesion: 0.14
Nodes (11): react, Sidebar(), SidebarFooterContext, Props, SidebarHandle(), SidebarHeader(), useSidebarChromeHeights(), useSidebarHeightAnimation() (+3 more)

### Community 68 - "ThemeContext.tsx"
Cohesion: 0.14
Nodes (16): darkTheme, DEFAULT_THEME, lightTheme, THEMES, applyCssTokens(), ThemeContext, ThemeContextValue, ThemeProvider() (+8 more)

### Community 69 - "importAllowedEmails.ts"
Cohesion: 0.12
Nodes (16): AllowedRow, AllowlistDiff, diffAllowlist(), looksLikeEmail(), parseAllowlistCsv(), ParsedAllowlist, splitLine(), deleteQuestionSessions() (+8 more)

### Community 70 - "teamLayout.ts"
Cohesion: 0.08
Nodes (37): elkjs, NODE_CARD_HEIGHT, TEAM_FRAME_GAP, TEAM_PACK_ASPECT, failOver(), getWorker(), Pending, requestLayout() (+29 more)

### Community 71 - "Core Patterns"
Cohesion: 0.13
Nodes (14): API Reference, boundsArea optimization, Common Mistakes, Core Patterns, Culling, HIGH: Expecting automatic culling, HIGH: Using addChild on RenderLayer, MEDIUM: Expecting filters on ancestors to apply to layer children (+6 more)

### Community 72 - "Core Patterns"
Cohesion: 0.12
Nodes (14): Advanced shape primitives, Cloning, clearing, and bounds, Core Patterns, Default styles via setFillStyle / setStrokeStyle, Draw-time transforms, Drawing a texture directly, Gradients and patterns, GraphicsContext sharing (+6 more)

### Community 73 - "dependencies"
Cohesion: 0.12
Nodes (17): dependencies, cloudinary, compression, cors, dotenv, express, express-rate-limit, helmet (+9 more)

### Community 74 - "useTreeLayout.ts"
Cohesion: 0.16
Nodes (18): MembersTreeScene(), getFitViewTargetScale(), useSceneTransition(), useIsMobileScreen(), useResolvedDirection(), useTreeLayout(), FLOW_VIEWPORT_DIRECTION, useSettingsStore (+10 more)

### Community 75 - "FilterCategory.tsx"
Cohesion: 0.33
Nodes (5): LION_GROUP_ICON, LION_ICON, Props, MaskIcon(), Props

### Community 76 - "telegramEligibility.ts"
Cohesion: 0.36
Nodes (7): EligibilityMember, resolveMemberMatch(), phoneKey(), resolveTelegramIdentity(), TelegramIdentity, loadTelegramIdentity(), TelegramClaims

### Community 77 - "MemberNode.tsx"
Cohesion: 0.09
Nodes (23): AVATAR_HIT_AREA, CARD_PIVOT, EMPTY_FILTERS, getCullArea(), MemberNode(), NODE_HIT_AREA, NODE_PIVOT, Props (+15 more)

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
Cohesion: 0.36
Nodes (7): membersActions, {
  setMembers,
  reloadMembers,
  addMember,
  updateMember,
  selectMember,
  getMentorsList,
}, useMembersMap(), useMentees(), useSelectedId(), useSelectedMember(), useMembersStore

### Community 82 - "gsap"
Cohesion: 0.18
Nodes (16): gsap, pixi-filters, NODE_HOVER_ANIMATION_DURATION, NODE_HOVER_SCALE, ZOOMED_OUT_HOVER_SCALE_MAP, NODE_HEIGHT, NODE_WIDTH, useFitViewAnimation() (+8 more)

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
Cohesion: 0.18
Nodes (9): API Reference, Quick Start, Advanced, Fallback: canonical PixiJS docs, Foundations, How to use this skill, Scene Objects, Skill router (+1 more)

### Community 89 - "Foundations"
Cohesion: 0.20
Nodes (9): Advanced, Foundations, pixijs-application, pixijs-core-concepts, pixijs-events, pixijs-performance, pixijs-scene-core-concepts, PixiJS Skills: Full Index (+1 more)

### Community 90 - "TeamSearch.tsx"
Cohesion: 0.20
Nodes (15): compare(), getSearchable(), MemberSearch(), Props, Props, SearchBar(), Props, SearchPanel() (+7 more)

### Community 91 - "Common Mistakes"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [CRITICAL] Adding children to leaf scene objects, [HIGH] Expecting getBounds() to return a Rectangle, [HIGH] Using cacheAsBitmap instead of cacheAsTexture, [MEDIUM] Setting both pivot and origin on the same container, Quick Start

### Community 92 - "Core Concepts"
Cohesion: 0.18
Nodes (11): Container vs leaf (CRITICAL), Core Concepts, Culling, Destroy semantics, Lifecycle events, Masking, Render groups, Render order and explicit z-ordering (+3 more)

### Community 93 - "aiFaces.ts"
Cohesion: 0.38
Nodes (3): createFaceSource(), Options, source()

### Community 94 - "auth/types.ts"
Cohesion: 0.18
Nodes (12): canEditMember(), hasAccess(), RANK, CONTACT_FIELDS, toMemberResponse(), AccessRank, Express, Request (+4 more)

### Community 98 - "Common Mistakes"
Cohesion: 0.20
Nodes (10): Common Mistakes, [CRITICAL] App destroy without releaseGlobalResources, [HIGH] Destroying and recreating objects instead of recycling, [HIGH] Interleaving object types in scene graph, [HIGH] Loading many individual textures instead of spritesheets, [HIGH] Updating Text or HTMLText every frame, [HIGH] Using complex Graphics instead of textures, [MEDIUM] Not staggering bulk texture destruction (+2 more)

### Community 99 - "emailRoutes.ts"
Cohesion: 0.13
Nodes (16): express-rate-limit, authSecret(), prismaCodeStore, escapeHtml(), pairs(), renderSignInCodeEmail(), bodyEmail(), emailKey() (+8 more)

### Community 100 - "Core Patterns"
Cohesion: 0.22
Nodes (9): Coordinate conversion, Core Patterns, Cumulative alpha (getGlobalAlpha), Global, local, and screen coordinates, Pivot, Position, scale, rotation, Sizing via width, height, setSize, Skew (+1 more)

### Community 101 - "filtersStore.ts"
Cohesion: 0.10
Nodes (16): EMPTY_FILTER_STATE, FOUNDER_JOIN_YEAR, MEMBER_STATUSES, MENTOR_STATUSES, derive(), FiltersActions, FiltersState, initialState (+8 more)

### Community 102 - "Render Loop"
Cohesion: 0.12
Nodes (15): API Reference, Common Mistakes, Core Patterns, [CRITICAL] Treating the ticker callback arg as a number, Frame lifecycle, Frame rate capping, [HIGH] Using `updateTransform` for per-frame logic, Manual rendering (+7 more)

### Community 103 - "pixijs-core-concepts/SKILL.md"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, Decision guide, Environments, [HIGH] Accessing app.renderer before init() resolves, [HIGH] Setting DOMAdapter after Application.init, [MEDIUM] Treating `preference` as a guarantee, Quick concepts (+4 more)

### Community 104 - "MemberFilterCategory.tsx"
Cohesion: 0.22
Nodes (16): ACTIVITY_OPTIONS, ACTIVITY_STATES, AVATAR_OPTIONS, AVATAR_VALUES, JOIN_SEASONS, MEMBER_STATUSES, SEASON_OPTIONS, STATUS_OPTIONS (+8 more)

### Community 105 - "demoQuestions.test.ts"
Cohesion: 0.16
Nodes (6): answerMatches(), CYRILLIC_TO_LATIN, normalizeAnswer(), MIN_ACTIVE_QUESTIONS, db, DEMO_QUESTIONS

### Community 106 - "familyTreeRoutes.ts"
Cohesion: 0.15
Nodes (16): loadFamilyTree, loadReducedFamilyTree, MEMBER_INCLUDE, MemberTransaction, serializeMember(), flattenTree(), transformMembersToTree(), bumpDataVersion() (+8 more)

### Community 107 - "useTeamForm.ts"
Cohesion: 0.21
Nodes (17): createTeam(), deleteTeam(), fetchTeamDetails(), parse(), setTeamMembers(), TeamMemberPayload, updateTeam(), buildTeamRequestBody() (+9 more)

### Community 108 - "Toolbar.tsx"
Cohesion: 0.06
Nodes (58): AccessLevel, AuthMethod, Challenge, ChallengeQuestion, fetchSession(), logout(), post(), RequestCodeOutcome (+50 more)

### Community 109 - "TeamEdgesLayer.tsx"
Cohesion: 0.20
Nodes (13): Paths and complex shapes, drawPolyline(), TeamEdgesLayer(), teamEdgePath(), arc(), buildTeamEdges(), tb(), collapsed() (+5 more)

### Community 110 - "server/src/types/index.ts"
Cohesion: 0.07
Nodes (28): mongodb, ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember, STATUSES_MAP (+20 more)

### Community 111 - "scripts"
Cohesion: 0.12
Nodes (16): scripts, auth:grant, auth:import-emails, auth:preview-email, auth:report-duplicate-contacts, auth:seed-grants, auth:seed-questions, build (+8 more)

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

### Community 113 - "TeamInfo.tsx"
Cohesion: 0.24
Nodes (11): MemberInfoRow(), PositionBadge(), PositionsDropdown(), Props, RosterRow(), TeamInfo(), useStackOnOverflow(), formatYearRange() (+3 more)

### Community 114 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, concurrently, @faker-js/faker, nodemon, ts-node, tsx, @types/compression, @types/cors (+5 more)

### Community 115 - "MemberBirthdayAnimation.tsx"
Cohesion: 0.35
Nodes (8): BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props, acquireEmojiTextures(), createEmojiTexture(), generateRandomPosition(), releaseEmojiTextures()

### Community 116 - "pixijs-scene-core-concepts/SKILL.md"
Cohesion: 0.25
Nodes (6): API Reference, Leaf comparison: which skill covers which object, Quick Start, References, Tooling, When to use what (quick decisions)

### Community 117 - "MemberFormFields.tsx"
Cohesion: 0.29
Nodes (8): QuestionCard(), FieldError(), Props, Props, Props, SocialMediaFormFields(), TextInput(), MemberFormMode

### Community 118 - "FiltersPanel.tsx"
Cohesion: 0.24
Nodes (9): ALL_SECTIONS_CLOSED, FiltersPanel(), Props, MemberFilterCategory(), OPTIONS, Props, ViewModeSwitch(), SegmentedSwitch() (+1 more)

### Community 119 - "useMeta.ts"
Cohesion: 0.22
Nodes (8): updateTeamType(), EMPTY, rolesStore, teamsStore, teamTypesStore, EMPTY_FORM, toFormData(), useTeamTypeForm()

### Community 120 - "SearchSuggestionItem.tsx"
Cohesion: 0.25
Nodes (7): LionIcon(), Props, Props, SearchSuggestionItem(), Props, SearchSuggestionRow(), Props

### Community 121 - "teamBadgeLayout.ts"
Cohesion: 0.25
Nodes (9): TEAM_FRAME_RADIUS, TEAM_TITLE_ICON_PADDING, TEAM_TITLE_ICON_SIZE, TEAM_TITLE_PADDING_X, TEAM_TITLE_PADDING_Y, getTeamBadgeLayout(), textWidth(), truncateText() (+1 more)

### Community 122 - "hooks/index.ts"
Cohesion: 0.28
Nodes (5): react-dom, DropdownPortal(), Props, LineageMemberSearch(), Props

### Community 123 - "memberPresentation.ts"
Cohesion: 0.33
Nodes (7): CloudinaryTransformations, getPhotoUrlAsAvatar(), getPhotoUrlAsRoundAvatar(), getMemberAvatar(), getMemberNodeAvatar(), RECRUITMENT_SEASON_EMOJI, RECRUITMENT_SEASON_LABEL

### Community 124 - "Core Patterns"
Cohesion: 0.25
Nodes (8): Add, remove, swap, Child queries, Core Patterns, Destroying sub-trees, Iterating children, Label-based tree navigation, Reparenting with transform preservation, Replacing a child

### Community 125 - "Transforms and Coordinate Spaces"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Setting scale to 0, [MEDIUM] Confusing anchor and pivot, [MEDIUM] Reading world transform before first render, Quick Start, Transforms and Coordinate Spaces

### Community 126 - "Common Mistakes"
Cohesion: 0.33
Nodes (6): Common Mistakes, [CRITICAL] Adding children to a leaf display object, [CRITICAL] Referencing DisplayObject, [HIGH] Forgetting isRenderGroup on large static subtrees, [HIGH] Treating child.x as world space, [MEDIUM] sortableChildren without zIndex

### Community 127 - "useSearchSuggestions.ts"
Cohesion: 0.50
Nodes (3): matchesQuery(), Options, normalize()

### Community 128 - "Position"
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

### Community 139 - "Common Mistakes"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, Constructor options, [CRITICAL] Using lineStyle instead of stroke, [CRITICAL] Using old shape method names, [CRITICAL] Using v7 beginFill/drawRect/endFill, [HIGH] Clearing and redrawing Graphics every frame, [HIGH] Destroying a shared GraphicsContext unexpectedly (+4 more)

## Knowledge Gaps
- **42 isolated node(s):** `@prisma/client`, `dotenv`, `lodash`, `@tailwindcss/postcss`, `@types/lodash` (+37 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 933 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `EditMemberForm.tsx`, `Toolbar.tsx`, `MemberStatus`, `useIsHydrated.ts`, `TeamFormContent.tsx`, `PositionFormFields.tsx`, `react`, `PhotoViewer.tsx`, `useDashedPathAnimation.ts`, `MembersTreeScene.tsx`, `Direction`, `MemberNodeAvatar.tsx`, `pixi.js`, `Member`, `src/utils/index.ts`, `dimensions.ts`, `package.json`, `filterSearchParams.ts`, `src/types/index.ts`, `dashedBezier.ts`, `Member`, `constants/canvas/index.ts`, `ManageForm.tsx`, `MemberInfo.tsx`, `MembersTreeContent.tsx`, `@heroicons/react`, `ThemeContext.tsx`, `useTreeLayout.ts`, `MemberNode.tsx`, `useMembersStore`, `gsap`, `TeamSearch.tsx`, `useTeamForm.ts`, `Toolbar.tsx`, `TeamEdgesLayer.tsx`, `TeamInfo.tsx`, `MemberBirthdayAnimation.tsx`, `MemberFormFields.tsx`, `FiltersPanel.tsx`, `useMeta.ts`, `SearchSuggestionItem.tsx`, `hooks/index.ts`, `useSearchSuggestions.ts`?**
  _High betweenness centrality (0.116) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _42 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `memberService.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.1455026455026455 - nodes in this community are weakly interconnected._
- **Why does `getBounds()` connect `Core Patterns` to `gsap`, `Common Mistakes`, `Scene Objects`, `useTreeLayout.ts`?**
  _High betweenness centrality (0.090) - this node is a cross-community bridge._
- **Should `src/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07547169811320754 - nodes in this community are weakly interconnected._
- **Why does `Core Patterns` connect `Core Patterns` to `Common Mistakes`, `TeamEdgesLayer.tsx`?**
  _High betweenness centrality (0.065) - this node is a cross-community bridge._
- **Should `TeamFormContent.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.12100840336134454 - nodes in this community are weakly interconnected._