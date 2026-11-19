# Graph Report - best-family-tree  (2026-11-19)

## Corpus Check
- 676 files · ~202,796 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 30 file(s) not represented in the graph (top: .prisma 9, (none) 7, .css 7)

## Summary
- 3119 nodes · 8784 edges · 137 communities (128 shown, 9 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 86 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `03b7f2cd`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- uk/index.ts
- react
- MemberPane.tsx
- server/package.json
- useCanvasTheme.ts
- auth/types.ts
- bakeParams.ts
- http
- signInCodeEmail.ts
- teamLayout.ts
- teamFrame.ts
- SeasonChip.tsx
- anonymizeDemo.ts
- MembersTreeContent.tsx
- BirthdayFilterSection.tsx
- emailRoutes.ts
- api/auth.ts
- teamFrame.ts
- hooks/index.ts
- TeamFormContent.tsx
- httpErrors.ts
- HTML Report Format
- utils/membersTree/index.ts
- src/types/index.ts
- teamService.ts
- MemberNodeAvatar.tsx
- compilerOptions
- compilerOptions
- Core Patterns
- dependencies
- dependencies
- MemberSearch.tsx
- EditMemberForm.tsx
- filterTeams.ts
- useSettingsStore
- Common Mistakes
- package.json
- MemberBestSection.tsx
- TeamFormContent.tsx
- Direction
- Core Patterns
- devDependencies
- oidcRouteFactory.ts
- Core Patterns
- CLAUDE.md
- Core Patterns
- dimensions.ts
- SettingsPanel.tsx
- During the session
- displayName.ts
- en/index.ts
- AGENTS.md
- scripts
- MemberNode.tsx
- Member
- next.config.mjs
- postcss.config.mjs
- src/index.ts
- useTeamForm.ts
- Core Patterns
- useTeamTypeForm.ts
- checkConfig.ts
- src/index.ts
- locale.ts
- memberService.ts
- BEST Family Tree
- Diagnosing Bugs
- memberFormValidation.ts
- fakeIdentity.ts
- ApplicationOptions reference
- FitViewButton.tsx
- Core Patterns
- Core Patterns
- constants/member.ts
- backfillGender.ts
- constants/filters.ts
- GroupedCheckListFilter.tsx
- ThemeContext.tsx
- Core Patterns
- Core Patterns
- Core Patterns
- mime.ts
- useLocale
- Core Patterns
- Constructor options (Container-inherited)
- Test-Driven Development
- GSAP Core
- Core Patterns
- contactKeys.ts
- Foundations
- importAllowedEmails.ts
- react
- Core Concepts
- devDependencies
- pixijs/SKILL.md
- backup-prod.sh
- start-prod.sh
- restore-local.sh
- seedQuestions.ts
- gsap
- useMeta.ts
- constants/canvas/index.ts
- Render Loop
- pixijs-core-concepts/SKILL.md
- pixijs-events/SKILL.md
- useTeamSelection.ts
- aiFaces.ts
- EditMemberForm.tsx
- Toolbar.tsx
- PhotoViewer.tsx
- migrateMembersFromMongodb.ts
- MemberBirthdayAnimation.tsx
- Renderers: WebGPU, WebGL, and Canvas
- searchMatching.ts
- tailwind-merge
- pixijs-scene-core-concepts/SKILL.md
- settingsStore.ts
- uk/filters.ts
- en/errors.ts
- proxy.ts
- mailer/index.ts
- useRoleForm.ts
- Common Mistakes
- searchShortcut.ts
- BEST Family Tree
- Messages
- devLogin.ts
- uk/errors.ts
- GSAP with React
- emailCodes.ts
- hitl-loop.template.sh
- areFiltersEqual.ts
- GSAP Performance
- GSAP Timeline

## God Nodes (most connected - your core abstractions)
1. `useT()` - 186 edges
2. `AccentColor` - 166 edges
3. `react` - 156 edges
4. `tailwind-merge` - 82 edges
5. `Member` - 71 edges
6. `useLocale()` - 61 edges
7. `COLOR_CLASSES` - 54 edges
8. `@heroicons/react` - 47 edges
9. `TeamFrame` - 40 edges
10. `pixi.js` - 38 edges

## Surprising Connections (you probably didn't know these)
- `pixijs-scene-container` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs/references/index.md → src/hooks/membersTree/animations/useFitViewAnimation.ts
- `Teams` --references--> `Role`  [INFERRED]
  GLOSSARY.md → src/types/positions.ts
- `Constructor options` --references--> `filters()`  [INFERRED]
  .agents/skills/pixijs-scene-graphics/SKILL.md → src/utils/filters/filterMembers.test.ts
- `Constructor options` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs-scene-container/SKILL.md → src/hooks/membersTree/animations/useFitViewAnimation.ts
- `Finding and removing from parent` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs-scene-container/SKILL.md → src/hooks/membersTree/animations/useFitViewAnimation.ts

## Import Cycles
- 3-file cycle: `src/utils/index.ts -> src/utils/membersTree/index.ts -> src/utils/membersTree/lineageEdgePath.ts -> src/utils/index.ts`
- 4-file cycle: `src/context/ThemeContext.tsx -> src/hooks/index.ts -> src/hooks/membersTree/index.ts -> src/hooks/membersTree/useCanvasTheme.ts -> src/context/ThemeContext.tsx`
- 4-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/members.ts -> src/models/index.ts -> src/models/Member.ts`
- 4-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/tree.ts -> src/models/index.ts -> src/models/Member.ts`
- 5-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/filters.ts -> src/types/members.ts -> src/models/index.ts -> src/models/Member.ts`

## Communities (137 total, 9 thin omitted)

### Community 0 - "uk/index.ts"
Cohesion: 0.10
Nodes (15): auth, common, formCommon, manage, memberForm, memberInfo, roleForm, settings (+7 more)

### Community 1 - "react"
Cohesion: 0.16
Nodes (27): Props, RoleForm(), TeamForm(), TeamTypeForm(), DateWithYears(), ManageList(), ITEMS, ManageRail() (+19 more)

### Community 2 - "MemberPane.tsx"
Cohesion: 0.09
Nodes (30): ACTIVITY_ICONS, IconComponent, IconProps, greenPillIcon(), IconProps, DatesPane(), SEASON_ICONS, PANES (+22 more)

### Community 3 - "server/package.json"
Cohesion: 0.05
Nodes (38): cloudinary, compression, concurrently, cors, express-rate-limit, helmet, multer, multer-storage-cloudinary (+30 more)

### Community 4 - "useCanvasTheme.ts"
Cohesion: 0.19
Nodes (12): FONT_FAMILY, NODE_SUBTITLE_STYLE, NODE_TITLE_STYLE, NODE_TOOLTIP_TEXT_STYLE, TEXT_RESOLUTION, buildCanvasColors(), CanvasColors, CanvasTextStyleInstances (+4 more)

### Community 5 - "auth/types.ts"
Cohesion: 0.18
Nodes (11): canEditMember(), hasAccess(), RANK, CONTACT_FIELDS, AccessRank, Express, Request, Session (+3 more)

### Community 6 - "bakeParams.ts"
Cohesion: 0.21
Nodes (17): AuroraBackground(), readNumber(), useBakedAurora(), AuroraBakeInput, bakeAuroraLayers(), canBakeAurora(), BAKE_SCALE, BLUR_SPREAD (+9 more)

### Community 7 - "http"
Cohesion: 0.23
Nodes (13): addMember(), editMember(), FamilyGroupOption, fetchFamilyTree(), fetchMemberById(), fetchMentorsList(), fetchRoles(), fetchTeamTypes() (+5 more)

### Community 8 - "signInCodeEmail.ts"
Cohesion: 0.23
Nodes (6): COPY, EmailLocale, escapeHtml(), pairs(), renderSignInCodeEmail(), { html }

### Community 9 - "teamLayout.ts"
Cohesion: 0.08
Nodes (36): elkjs, TEAM_FRAME_GAP, TEAM_PACK_ASPECT, failOver(), getWorker(), Pending, requestLayout(), runInline() (+28 more)

### Community 10 - "teamFrame.ts"
Cohesion: 0.08
Nodes (41): @pixi/react, PixiElements, @pixi/react, Props, TeamBadge(), FILL_ALPHA, lerp(), Props (+33 more)

### Community 11 - "SeasonChip.tsx"
Cohesion: 0.27
Nodes (8): FlowerIcon(), Props, MapleLeafIcon(), Props, Placement, PLACEMENTS, Props, SeasonMotif()

### Community 12 - "anonymizeDemo.ts"
Cohesion: 0.12
Nodes (19): allowed, args, byId, factory, GROUP_NAMES, memberPhotos, nextFace, real (+11 more)

### Community 13 - "MembersTreeContent.tsx"
Cohesion: 0.12
Nodes (24): MemberSidebar(), Props, MembersTree(), Props, EVENT_FEATURES, MembersTreeContent(), Props, TeamInfoSidebar() (+16 more)

### Community 14 - "BirthdayFilterSection.tsx"
Cohesion: 0.13
Nodes (22): date-fns, BirthdayFilterSection(), Props, ClearButton(), FilterCheckbox(), Props, JoinYearFilterSection(), Props (+14 more)

### Community 15 - "emailRoutes.ts"
Cohesion: 0.07
Nodes (51): openid-client, authSecret(), isDemoMode(), isProduction(), SESSION_COOKIE, SESSION_TTL_MS, SIGN_IN_COOKIE, useSecureCookie() (+43 more)

### Community 16 - "api/auth.ts"
Cohesion: 0.05
Nodes (59): AccessLevel, AuthMethod, Challenge, ChallengeQuestion, logout(), post(), RequestCodeOutcome, requestEmailCode() (+51 more)

### Community 17 - "teamFrame.ts"
Cohesion: 0.08
Nodes (38): Paths and complex shapes, TEAM_COLUMN_GAP, TEAM_EDGE_DROP, TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_SPREAD_WIDTH, TEAM_EDGE_STUB, TEAM_FRAME_HEADER, TEAM_FRAME_MIN_WIDTH (+30 more)

### Community 18 - "hooks/index.ts"
Cohesion: 0.09
Nodes (35): Props, Props, drawLerped(), drawPolyline(), Props, TeamEdgesLayer(), Props, TeamFramesLayer() (+27 more)

### Community 19 - "TeamFormContent.tsx"
Cohesion: 0.09
Nodes (38): DropdownMenu(), Props, DropdownPortal(), PositionAssignmentFields(), Props, resolveRoleName(), PositionRowHeader(), Props (+30 more)

### Community 20 - "httpErrors.ts"
Cohesion: 0.09
Nodes (31): zod, ChallengeState, isExpired(), isSolved(), pickRandom(), swapQuestion(), SwapResult, base (+23 more)

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "utils/membersTree/index.ts"
Cohesion: 0.09
Nodes (35): LineageEdge(), DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN, MIN_ANIM_DURATION, PATTERN_LEN, RETRACT_BASE (+27 more)

### Community 23 - "src/types/index.ts"
Cohesion: 0.07
Nodes (52): tailwind-merge, PAIR_COLORS, Props, GLOW, Props, Props, Props, Props (+44 more)

### Community 24 - "teamService.ts"
Cohesion: 0.12
Nodes (29): resolvePosition(), assertCanEditMembers(), deleteMember(), deriveTeamName(), resolveRole(), resolveTeam(), resolveTeamType(), RoleRef (+21 more)

### Community 25 - "MemberNodeAvatar.tsx"
Cohesion: 0.14
Nodes (13): @gsap/react, pixi-viewport, MemberNodeAvatar(), Props, CIRCLE_TEXTURE_SRC, PATTERN_TEXTURE_SRC, failedSources, Options (+5 more)

### Community 26 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, esModuleInterop, forceConsistentCasingInFileNames, module, moduleResolution, noImplicitAny, outDir, paths (+12 more)

### Community 27 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+12 more)

### Community 28 - "Core Patterns"
Cohesion: 0.12
Nodes (15): API Reference, Application properties, Common Mistakes, Core Patterns, [CRITICAL] Passing options to the constructor, CullerPlugin (opt-in), Custom Application plugins, [HIGH] Using app.view instead of app.canvas (+7 more)

### Community 29 - "dependencies"
Cohesion: 0.06
Nodes (34): dependencies, cloudinary, compression, cors, dotenv, express, express-rate-limit, helmet (+26 more)

### Community 30 - "dependencies"
Cohesion: 0.10
Nodes (20): dependencies, date-fns, dotenv, elkjs, gsap, @gsap/react, @heroicons/react, lodash (+12 more)

### Community 31 - "MemberSearch.tsx"
Cohesion: 0.16
Nodes (22): compare(), getSearchable(), MemberSearch(), Props, Props, SearchBar(), SearchPanel(), Props (+14 more)

### Community 32 - "EditMemberForm.tsx"
Cohesion: 0.27
Nodes (15): deleteMember(), AddMemberForm(), buildMemberFormData(), describeSubmitError(), EditMemberForm(), buildEditPayload(), getInitialFormData(), FormError() (+7 more)

### Community 33 - "filterTeams.ts"
Cohesion: 0.11
Nodes (35): areSetsEqual(), computeFilteredMembers(), birthdayBoundKey(), countActiveFilters(), countActiveMemberFilters(), isFilterActive(), isIdListSet(), isListFilterSet() (+27 more)

### Community 34 - "useSettingsStore"
Cohesion: 0.20
Nodes (11): LanguageSwitch(), SHORT_LABELS, ThemeProvider(), useIsMobileScreen(), useResolvedDirection(), noopSubscribe(), useIsHydrated(), useMediaQuery() (+3 more)

### Community 35 - "Common Mistakes"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, Constructor options, [CRITICAL] Using lineStyle instead of stroke, [CRITICAL] Using old shape method names, [CRITICAL] Using v7 beginFill/drawRect/endFill, [HIGH] Clearing and redrawing Graphics every frame, [HIGH] Destroying a shared GraphicsContext unexpectedly (+4 more)

### Community 36 - "package.json"
Cohesion: 0.09
Nodes (21): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+13 more)

### Community 37 - "MemberBestSection.tsx"
Cohesion: 0.22
Nodes (19): FormField(), Props, GenderFormField(), MemberBasicsSection(), Props, MemberBestSection(), Props, MemberContactsSection() (+11 more)

### Community 38 - "TeamFormContent.tsx"
Cohesion: 0.14
Nodes (28): FieldError(), PositionFormFields(), Props, createEmptyPositionRow(), EMPTY_POSITION_ROW, findTeamByName(), getPositionRowSummary(), getRoleOptions() (+20 more)

### Community 39 - "Direction"
Cohesion: 0.14
Nodes (23): EdgesLayer(), NODE_AVATAR_RADIUS, bezierEval(), edgeGeometry, endpoints(), sampleBezierCurve(), sampleEdgePath(), source (+15 more)

### Community 40 - "Core Patterns"
Cohesion: 0.12
Nodes (20): Adding and removing children, API Reference, Bounds and coordinate conversion, Common Mistakes, Core Patterns, [CRITICAL] Adding children to leaf scene objects, Destroy, Finding and removing from parent (+12 more)

### Community 41 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+5 more)

### Community 42 - "oidcRouteFactory.ts"
Cohesion: 0.16
Nodes (17): EligibilityMember, EmailIdentity, MemberMatch, normalizeEmail(), resolveEmailIdentity(), resolveMemberMatch(), loadEmailIdentity(), decideGoogleSignIn() (+9 more)

### Community 43 - "Core Patterns"
Cohesion: 0.12
Nodes (16): API Reference, Common Mistakes, Coordinate conversion, Core Patterns, Cumulative alpha (getGlobalAlpha), Global, local, and screen coordinates, [HIGH] Setting scale to 0, [MEDIUM] Confusing anchor and pivot (+8 more)

### Community 44 - "CLAUDE.md"
Cohesion: 0.22
Nodes (8): Commands, Conventions, Delegating to subagents, Deployment & data, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout

### Community 45 - "Core Patterns"
Cohesion: 0.12
Nodes (15): Add, remove, swap, API Reference, Child queries, Common Mistakes, Container Hierarchy, Core Patterns, [CRITICAL] Adding children to a leaf, Destroying sub-trees (+7 more)

### Community 46 - "dimensions.ts"
Cohesion: 0.13
Nodes (20): EMPTY_IDS, SharpAvatarTracker(), View, Props, Viewport(), AVATAR_HIGH_RES_SIZE, AVATAR_LOW_RES_SIZE, BIRTHDAY_ANIMATION_MIN_SCALE (+12 more)

### Community 47 - "SettingsPanel.tsx"
Cohesion: 0.21
Nodes (13): FamilyTreeIcon(), Props, edgeIcon(), edgeStyleOptions(), iconClass, orientationOptions(), themeOptions(), treeModeOptions() (+5 more)

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "displayName.ts"
Cohesion: 0.16
Nodes (14): generateGoogleCalendarLink(), getClosestBirthday(), abbreviateName(), cache, displayFamilyName(), FAMILY_NAMES_EN, romanizeCached(), useDisplayFamilyName() (+6 more)

### Community 50 - "en/index.ts"
Cohesion: 0.10
Nodes (20): auth, common, filters, formCommon, en, manage, memberForm, memberInfo (+12 more)

### Community 51 - "AGENTS.md"
Cohesion: 0.25
Nodes (7): Commands, Conventions, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout, This is NOT the Next.js you know

### Community 52 - "scripts"
Cohesion: 0.20
Nodes (10): scripts, build, db:backup-prod, db:restore-local, dev, dev:webpack, lint, start (+2 more)

### Community 53 - "MemberNode.tsx"
Cohesion: 0.05
Nodes (64): pixi.js, contexts, getCardBackgroundContext(), getGlowTexture(), GLOW_BLUR, GLOW_PADDING, GlowKind, paint() (+56 more)

### Community 54 - "Member"
Cohesion: 0.07
Nodes (39): Cloning, clearing, and bounds, Props, Props, Props, Props, Props, Props, Props (+31 more)

### Community 57 - "src/index.ts"
Cohesion: 0.09
Nodes (24): express, @prisma/config, toMemberResponse(), adapter, prisma, app, checkOrigin(), router (+16 more)

### Community 58 - "useTeamForm.ts"
Cohesion: 0.22
Nodes (19): createTeam(), deleteTeam(), fetchTeamDetails(), parse(), setTeamMembers(), TeamMemberPayload, updateTeam(), buildTeamRequestBody() (+11 more)

### Community 59 - "Core Patterns"
Cohesion: 0.12
Nodes (17): Application destroy/recreate cycle, Batching optimization, cacheAsTexture for performance, Core Patterns, Culling, Filters and masks cost, Graphics performance, Low-level rendering optimizations (+9 more)

### Community 60 - "useTeamTypeForm.ts"
Cohesion: 0.16
Nodes (15): ApiError, errorMessage(), ErrorParams, toApiError(), createTeamType(), deleteTeamType(), updateTeamType(), buildTeamTypeFormData() (+7 more)

### Community 61 - "checkConfig.ts"
Cohesion: 0.19
Nodes (14): assertConfig(), configProblems(), databaseName(), demoProblems(), Env, googleProblems(), telegramProblems(), good (+6 more)

### Community 62 - "src/index.ts"
Cohesion: 0.10
Nodes (23): Renderer selection at runtime, [MEDIUM] Using container.name instead of container.label, countMembersByRole(), router, booleanLike, isValidPeriod(), name(), optional() (+15 more)

### Community 63 - "locale.ts"
Cohesion: 0.16
Nodes (10): metadata, nunito, RootLayout(), writeLocaleCookie(), detectLocale(), isLocale(), LOCALE_COOKIE, LocaleProvider() (+2 more)

### Community 64 - "memberService.ts"
Cohesion: 0.08
Nodes (42): buildMemberFields(), buildMemberUpdateFields(), buildSharedFields(), buildSparseMemberFields(), parsePhoneNumbers(), parsePositionsPayload(), getPositionKey(), ResolvedPosition (+34 more)

### Community 65 - "BEST Family Tree"
Cohesion: 0.11
Nodes (18): 1. Clone and configure environment, 2. Start the application, 3. Run database migrations, 4. Access the app, Architecture, Available Commands, Backend Commands (run inside container), Backups (+10 more)

### Community 66 - "Diagnosing Bugs"
Cohesion: 0.13
Nodes (14): Completion criterion: a tight loop that goes red, Diagnosing Bugs, Minimise, Non-deterministic bugs, Phase 1: Build a feedback loop, Phase 2: Reproduce + minimise, Phase 3: Hypothesise, Phase 4: Instrument (+6 more)

### Community 67 - "memberFormValidation.ts"
Cohesion: 0.16
Nodes (15): CheckedField, getStoredFieldValues(), Links, StoredMemberValues, complete, mentors, sparse, toTime() (+7 more)

### Community 68 - "fakeIdentity.ts"
Cohesion: 0.17
Nodes (7): @faker-js/faker, createIdentityFactory(), firstFree(), OPERATOR_CODES, none, MAP, translit()

### Community 69 - "ApplicationOptions reference"
Cohesion: 0.12
Nodes (17): Accessibility, ApplicationOptions reference, Background, Culler (CullerPluginOptions), Deprecated (GC — prefer the unified options above), Events, Garbage collection, Graphics (+9 more)

### Community 70 - "FitViewButton.tsx"
Cohesion: 0.24
Nodes (11): FiltersHeader(), Props, FitViewButton(), Props, PanelResetButton(), Props, Props, ToolbarIconButton() (+3 more)

### Community 71 - "Core Patterns"
Cohesion: 0.13
Nodes (14): API Reference, boundsArea optimization, Common Mistakes, Core Patterns, Culling, HIGH: Expecting automatic culling, HIGH: Using addChild on RenderLayer, MEDIUM: Expecting filters on ancestors to apply to layer children (+6 more)

### Community 72 - "Core Patterns"
Cohesion: 0.14
Nodes (13): Advanced shape primitives, Core Patterns, Default styles via setFillStyle / setStrokeStyle, Draw-time transforms, Drawing a texture directly, Gradients and patterns, GraphicsContext sharing, GraphicsContext utilities (+5 more)

### Community 73 - "constants/member.ts"
Cohesion: 0.40
Nodes (4): FOUNDER_JOIN_YEAR, MEMBER_STATUSES, MENTOR_STATUSES, getUpdatedMentorsList()

### Community 74 - "backfillGender.ts"
Cohesion: 0.12
Nodes (16): row(), alreadyDifferent, alreadySame, APPLY, args, duplicates, fileArg, Gender (+8 more)

### Community 75 - "constants/filters.ts"
Cohesion: 0.07
Nodes (48): CATEGORY_ICONS, FilterCategoryRail(), Props, ACTIVITY_STATES, DATE_PICKER_CLASSES, EMPTY_FILTER_STATE, GENDER_VALUES, JOIN_SEASONS (+40 more)

### Community 76 - "GroupedCheckListFilter.tsx"
Cohesion: 0.23
Nodes (12): byLabel(), CheckOption, Props, useStableOrder(), CheckRow(), Props, byName(), GroupedCheckListFilter() (+4 more)

### Community 77 - "ThemeContext.tsx"
Cohesion: 0.18
Nodes (11): darkTheme, DEFAULT_THEME, lightTheme, THEMES, applyCssTokens(), ThemeContext, ThemeContextValue, CssThemeTokens (+3 more)

### Community 78 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, attach / detach, Common Mistakes, Core Patterns, [CRITICAL] Using `addChild` on a RenderLayer, [HIGH] Layer and attached children in different render groups, Layer + logical parent, Manual sort (+5 more)

### Community 79 - "Core Patterns"
Cohesion: 0.14
Nodes (13): Alpha mask (Sprite-based), API Reference, Common Mistakes, Core Patterns, [HIGH] Using cacheAsTexture with masks, Inverse masking, Mask channel selection, Mask type selection (+5 more)

### Community 80 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, Common Mistakes, Construction options, Core Patterns, [HIGH] Nesting many render groups, [MEDIUM] Constantly adding/removing from a render group, [MEDIUM] Overusing render groups, Profile before adding (+5 more)

### Community 81 - "mime.ts"
Cohesion: 0.29
Nodes (11): RFC-2045, RFC-2047, createGmailMailer(), GmailConfig, base64Body(), buildMime(), encodeHeaderText(), formatAddress() (+3 more)

### Community 82 - "useLocale"
Cohesion: 0.15
Nodes (25): MemberInfo(), MemberInfoCover(), MemberInfoFacts(), MemberMiniAvatar(), MemberPositions(), MenteesGrid(), SeasonChip(), getSearchable() (+17 more)

### Community 83 - "Core Patterns"
Cohesion: 0.15
Nodes (13): Context and device loss, Core Patterns, Destroying a renderer, Direct renderer construction, Lazy-loading backend-specific systems and pipes, Manual rendering, Per-renderer options, Preference forms (+5 more)

### Community 84 - "Constructor options (Container-inherited)"
Cohesion: 0.11
Nodes (19): Constructor options, Container events, Advanced options and aliases, Before / after, Callbacks, Constructor options (Container-inherited), Display, Effects (+11 more)

### Community 85 - "Test-Driven Development"
Cohesion: 0.15
Nodes (10): Designing for Mockability, When to Mock, Anti-patterns, Rules of the loop, Seams: where tests go, Test-Driven Development, What a good test is, Bad Tests (+2 more)

### Community 86 - "GSAP Core"
Cohesion: 0.10
Nodes (20): Accessibility and responsive (gsap.matchMedia()), Common vars, Core Tween Methods, Custom: use CustomEase (plugin), Defaults, Do Not, Easing, Function-based values (+12 more)

### Community 87 - "Core Patterns"
Cohesion: 0.17
Nodes (12): Capture phase events, Core Patterns, Cursor styles, Event features, Event properties, Event types, eventMode values, Global move events and drag (+4 more)

### Community 88 - "contactKeys.ts"
Cohesion: 0.20
Nodes (10): duplicates, fields, groups, ContactFields, contactKey(), ContactPlatform, FIELD_PLATFORMS, findContactCollision() (+2 more)

### Community 89 - "Foundations"
Cohesion: 0.15
Nodes (12): Advanced, Foundations, pixijs-application, pixijs-core-concepts, pixijs-events, pixijs-performance, pixijs-scene-container, pixijs-scene-core-concepts (+4 more)

### Community 90 - "importAllowedEmails.ts"
Cohesion: 0.19
Nodes (12): AllowedRow, AllowlistDiff, diffAllowlist(), looksLikeEmail(), parseAllowlistCsv(), ParsedAllowlist, splitLine(), apply (+4 more)

### Community 91 - "react"
Cohesion: 0.07
Nodes (28): react, react-dom, Props, InfoSection(), Props, Props, Props, PositionBadge() (+20 more)

### Community 92 - "Core Concepts"
Cohesion: 0.18
Nodes (11): Container vs leaf (CRITICAL), Core Concepts, Culling, Destroy semantics, Lifecycle events, Masking, Render groups, Render order and explicit z-ordering (+3 more)

### Community 93 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, concurrently, @faker-js/faker, nodemon, ts-node, tsx, @types/compression, @types/cors (+5 more)

### Community 94 - "pixijs/SKILL.md"
Cohesion: 0.18
Nodes (9): API Reference, Quick Start, Advanced, Fallback: canonical PixiJS docs, Foundations, How to use this skill, Scene Objects, Skill router (+1 more)

### Community 98 - "seedQuestions.ts"
Cohesion: 0.24
Nodes (9): answerMatches(), CYRILLIC_TO_LATIN, normalizeAnswer(), MIN_ACTIVE_QUESTIONS, deleteQuestionSessions(), DEMO_QUESTIONS, active, items (+1 more)

### Community 99 - "gsap"
Cohesion: 0.10
Nodes (34): gsap, NODE_HOVER_ANIMATION_DURATION, NODE_HOVER_SCALE, ZOOMED_OUT_HOVER_SCALE_MAP, NODE_HEIGHT, getFitViewTargetScale(), useFitViewAnimation(), useFocusFrameAnimation() (+26 more)

### Community 100 - "useMeta.ts"
Cohesion: 0.19
Nodes (9): fetchFamilyGroups(), fetchTeams(), EMPTY, loadFamilyGroups(), useFamilyGroups(), EMPTY, rolesStore, teamsStore (+1 more)

### Community 101 - "constants/canvas/index.ts"
Cohesion: 0.31
Nodes (8): lineageEdgePath, ACCIDENTAL_DRAG_MAX_DISTANCE, ACCIDENTAL_DRAG_MAX_MS, LONG_PRESS_MS, TAP_MOVE_TOLERANCE, PressStart, useTapWithoutDrag(), isTapGesture()

### Community 102 - "Render Loop"
Cohesion: 0.12
Nodes (15): API Reference, Common Mistakes, Core Patterns, [CRITICAL] Treating the ticker callback arg as a number, Frame lifecycle, Frame rate capping, [HIGH] Using `updateTransform` for per-frame logic, Manual rendering (+7 more)

### Community 103 - "pixijs-core-concepts/SKILL.md"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, Decision guide, Environments, [HIGH] Accessing app.renderer before init() resolves, [HIGH] Setting DOMAdapter after Application.init, [MEDIUM] Treating `preference` as a guarantee, Quick concepts (+4 more)

### Community 104 - "pixijs-events/SKILL.md"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] buttonMode removed; use cursor, [HIGH] Default eventMode is passive, [HIGH] Move events only fire over the object in v8, [MEDIUM] Cursor does not inherit from parent, Quick Start

### Community 105 - "useTeamSelection.ts"
Cohesion: 0.15
Nodes (13): NodesLayer(), Props, nextAdmittedIds(), PROGRESSIVE_CHUNK_SIZE, useProgressiveIds(), useTeamSelection(), getMemberById(), getTeamNodeId() (+5 more)

### Community 106 - "aiFaces.ts"
Cohesion: 0.38
Nodes (3): createFaceSource(), Options, source()

### Community 107 - "EditMemberForm.tsx"
Cohesion: 0.11
Nodes (26): Props, ClearButton(), Props, SubmitButton(), ConfirmDeleteControl(), Props, FormFooter(), Props (+18 more)

### Community 108 - "Toolbar.tsx"
Cohesion: 0.09
Nodes (30): zustand, fetchSession(), SessionInfo, AccountPanel(), Props, DemoBadge(), FiltersFooter(), Props (+22 more)

### Community 109 - "PhotoViewer.tsx"
Cohesion: 0.06
Nodes (58): isTreeReady(), MembersTree, MembersTreeDynamic(), TreeState, cache, loadImageAspect(), PhotoOpenButton(), Props (+50 more)

### Community 110 - "migrateMembersFromMongodb.ts"
Cohesion: 0.07
Nodes (31): mongodb, ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember, STATUSES_MAP (+23 more)

### Community 111 - "MemberBirthdayAnimation.tsx"
Cohesion: 0.35
Nodes (8): BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props, acquireEmojiTextures(), createEmojiTexture(), generateRandomPosition(), releaseEmojiTextures()

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

### Community 113 - "searchMatching.ts"
Cohesion: 0.44
Nodes (8): getMatchRanges(), matchesQuery(), queryParts(), rankMatch(), tokenize(), Options, useSearchSuggestions(), normalize()

### Community 114 - "tailwind-merge"
Cohesion: 0.16
Nodes (19): @heroicons/react, next, Props, AvatarFileInput(), Props, removeBadgeClasses(), LogoFileInput(), Props (+11 more)

### Community 116 - "pixijs-scene-core-concepts/SKILL.md"
Cohesion: 0.14
Nodes (12): API Reference, Common Mistakes, [CRITICAL] Adding children to a leaf display object, [CRITICAL] Referencing DisplayObject, [HIGH] Forgetting isRenderGroup on large static subtrees, [HIGH] Treating child.x as world space, Leaf comparison: which skill covers which object, [MEDIUM] sortableChildren without zIndex (+4 more)

### Community 117 - "settingsStore.ts"
Cohesion: 0.29
Nodes (10): Locale, DEFAULT_SETTINGS, LocaleState, SETTINGS_STORAGE_KEY, SettingsActions, SettingsState, initialState, { storageMock } (+2 more)

### Community 118 - "uk/filters.ts"
Cohesion: 0.33
Nodes (5): familyForms, filters, memberForms, roleForms, teamForms

### Community 119 - "en/errors.ts"
Cohesion: 0.50
Nodes (3): errors, Params, platformLabels

### Community 121 - "mailer/index.ts"
Cohesion: 0.29
Nodes (6): consoleMailer, createResendMailer(), ResendConfig, message, Mailer, MailMessage

### Community 122 - "useRoleForm.ts"
Cohesion: 0.31
Nodes (9): createRole(), deleteRole(), updateRole(), EMPTY_FORM, isSame(), Options, toFormData(), useRoleForm() (+1 more)

### Community 123 - "Common Mistakes"
Cohesion: 0.20
Nodes (10): Common Mistakes, [CRITICAL] App destroy without releaseGlobalResources, [HIGH] Destroying and recreating objects instead of recycling, [HIGH] Interleaving object types in scene graph, [HIGH] Loading many individual textures instead of spritesheets, [HIGH] Updating Text or HTMLText every frame, [HIGH] Using complex Graphics instead of textures, [MEDIUM] Not staggering bulk texture destruction (+2 more)

### Community 124 - "searchShortcut.ts"
Cohesion: 0.19
Nodes (8): EDITABLE_TAGS, isEditableTarget(), isSearchShortcut(), ShortcutKeys, Keys, Options, Position, useSearchShortcut()

### Community 125 - "BEST Family Tree"
Cohesion: 0.29
Nodes (6): BEST Family Tree, Language, People, Sign-in, Teams, Views

### Community 126 - "Messages"
Cohesion: 0.23
Nodes (7): Messages, memberForms, search, plural(), PluralForms, en, uk

### Community 127 - "devLogin.ts"
Cohesion: 0.48
Nodes (5): databaseHost(), devLoginProblems(), Env, isDevLoginEnabled(), LOCAL_HOSTS

### Community 128 - "uk/errors.ts"
Cohesion: 0.50
Nodes (3): errors, Params, platformLabels

### Community 129 - "GSAP with React"
Cohesion: 0.15
Nodes (12): Best practices, Context-Safe Callbacks, Dependency array, scope, and revertOnUpdate, Do Not, gsap.context() in useEffect (when useGSAP isn't used), GSAP with React, Installation, Learn More (+4 more)

### Community 130 - "emailCodes.ts"
Cohesion: 0.17
Nodes (14): CODE_TTL_MS, CodeOwner, CodeStore, generateCode(), hashCode(), issueCode(), MAX_CODE_ATTEMPTS, sameHash() (+6 more)

### Community 132 - "hitl-loop.template.sh"
Cohesion: 0.83
Nodes (3): capture(), hitl-loop.template.sh script, step()

### Community 133 - "areFiltersEqual.ts"
Cohesion: 0.83
Nodes (3): areFiltersEqual(), sameValues(), withoutIrrelevantYear()

### Community 137 - "GSAP Performance"
Cohesion: 0.17
Nodes (11): Batch Reads and Writes, Best practices, Do Not, Frequently updated properties (e.g. mouse followers), GSAP Performance, Many Elements (Stagger, Lists), Prefer Transform and Opacity, Reduce Simultaneous Work (+3 more)

### Community 138 - "GSAP Timeline"
Cohesion: 0.17
Nodes (11): Controlling Playback, Creating a Timeline, Do Not, GSAP Timeline, Labels, Nesting Timelines, Official GSAP Best practices, Position Parameter (+3 more)

## Knowledge Gaps
- **45 isolated node(s):** `@prisma/client`, `dotenv`, `lodash`, `pixi-filters`, `@tailwindcss/postcss` (+40 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1033 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `react`, `MemberPane.tsx`, `useCanvasTheme.ts`, `bakeParams.ts`, `teamFrame.ts`, `MembersTreeContent.tsx`, `BirthdayFilterSection.tsx`, `api/auth.ts`, `hooks/index.ts`, `TeamFormContent.tsx`, `utils/membersTree/index.ts`, `src/types/index.ts`, `MemberNodeAvatar.tsx`, `MemberSearch.tsx`, `EditMemberForm.tsx`, `useSettingsStore`, `package.json`, `MemberBestSection.tsx`, `TeamFormContent.tsx`, `dimensions.ts`, `displayName.ts`, `MemberNode.tsx`, `Member`, `useTeamForm.ts`, `useTeamTypeForm.ts`, `locale.ts`, `FitViewButton.tsx`, `constants/filters.ts`, `GroupedCheckListFilter.tsx`, `ThemeContext.tsx`, `useLocale`, `gsap`, `useMeta.ts`, `constants/canvas/index.ts`, `useTeamSelection.ts`, `EditMemberForm.tsx`, `Toolbar.tsx`, `PhotoViewer.tsx`, `MemberBirthdayAnimation.tsx`, `searchMatching.ts`, `tailwind-merge`, `useRoleForm.ts`, `searchShortcut.ts`?**
  _High betweenness centrality (0.091) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _45 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `uk/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.10114942528735632 - nodes in this community are weakly interconnected._
- **Why does `filters()` connect `Constructor options (Container-inherited)` to `filterTeams.ts`, `constants/filters.ts`, `Common Mistakes`?**
  _High betweenness centrality (0.090) - this node is a cross-community bridge._
- **Should `MemberPane.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.09082125603864734 - nodes in this community are weakly interconnected._
- **Why does `Constructor options` connect `Common Mistakes` to `Constructor options (Container-inherited)`?**
  _High betweenness centrality (0.058) - this node is a cross-community bridge._
- **Should `server/package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.052854122621564484 - nodes in this community are weakly interconnected._