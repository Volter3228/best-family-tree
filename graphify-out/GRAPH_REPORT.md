# Graph Report - best-family-tree  (2026-11-17)

## Corpus Check
- 621 files · ~194,004 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 30 file(s) not represented in the graph (top: .prisma 9, (none) 7, .css 7)

## Summary
- 2993 nodes · 8028 edges · 139 communities (130 shown, 9 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 90 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ae3c2bc7`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- BirthdayFilterSection.tsx
- react
- emailRoutes.ts
- server/package.json
- constants/filters.ts
- telegramEligibility.ts
- bakeParams.ts
- http
- FilterState
- teamLayout.ts
- teamFrame.ts
- DatesPane.tsx
- anonymizeDemo.ts
- MemberNodeAvatar.tsx
- src/index.ts
- MemberNodeCard.tsx
- auth.ts
- teamFrame.ts
- treeStore.ts
- Member
- ref_vitest
- HTML Report Format
- utils/membersTree/index.ts
- MemberInfo.tsx
- teamService.ts
- src/utils/index.ts
- compilerOptions
- compilerOptions
- Core Patterns
- dependencies
- dependencies
- MemberSearch.tsx
- useTeamTypeForm.ts
- layout.tsx
- NodesLayer.tsx
- Common Mistakes
- package.json
- useTeamForm.ts
- positionFormUtils.ts
- Direction
- Core Patterns
- devDependencies
- PhotoViewer.tsx
- Core Patterns
- CLAUDE.md
- Core Patterns
- constants/canvas/index.ts
- MemberStatus
- During the session
- settingsStore.ts
- ApplicationOptions reference
- AGENTS.md
- scripts
- hooks/index.ts
- useRoleForm.ts
- next.config.mjs
- postcss.config.mjs
- constants/theme.ts
- MemberInfoActions.tsx
- Core Patterns
- emailCodes.ts
- mailer/index.ts
- src/index.ts
- AvatarFileInput.tsx
- memberService.ts
- BEST Family Tree
- Diagnosing Bugs
- memberFormValidation.ts
- TeamFormContent.tsx
- auth/types.ts
- Toolbar.tsx
- Core Patterns
- Core Patterns
- useMembersStore
- mime.ts
- filterSearchParams.ts
- filterTeams.ts
- filterTeams.ts
- Core Patterns
- Core Patterns
- Core Patterns
- contactKeys.ts
- YearRangeFilterSection.tsx
- Core Patterns
- Constructor options (Container-inherited)
- Test-Driven Development
- GSAP Core
- Core Patterns
- registerPixiPlugins.ts
- Foundations
- tailwind-merge
- Sidebar.tsx
- Core Concepts
- FilterCategoryPane.tsx
- pixijs-events/SKILL.md
- backup-prod.sh
- start-prod.sh
- restore-local.sh
- utils/strings.ts
- react
- MembersTreeContent.tsx
- checkConfig.ts
- Render Loop
- pixijs-core-concepts/SKILL.md
- GroupedCheckListFilter.tsx
- MembersTreeDynamic.tsx
- PhotoOpenButton.tsx
- EditMemberForm.tsx
- fakeIdentity.ts
- photoViewerMath.ts
- migrateMembersFromMongodb.ts
- ref_vitest
- Renderers: WebGPU, WebGL, and Canvas
- pixijs/SKILL.md
- src/types/index.ts
- GenderFormField.tsx
- pixijs-scene-core-concepts/SKILL.md
- ui/index.ts
- useTreeDirection.ts
- ColorField.tsx
- Common Mistakes
- devLogin.ts
- SubmitButton.tsx
- Common Mistakes
- searchShortcut.ts
- useCardAnimation.ts
- Position
- Core Patterns
- TextInput
- GSAP with React
- emailRoutes.ts
- hitl-loop.template.sh
- Common Mistakes
- DropdownPortal.tsx
- GSAP Performance
- GSAP Timeline

## God Nodes (most connected - your core abstractions)
1. `AccentColor` - 166 edges
2. `react` - 152 edges
3. `tailwind-merge` - 81 edges
4. `Member` - 71 edges
5. `COLOR_CLASSES` - 54 edges
6. `@heroicons/react` - 46 edges
7. `TeamFrame` - 40 edges
8. `pixi.js` - 38 edges
9. `FilterState` - 38 edges
10. `http()` - 34 edges

## Surprising Connections (you probably didn't know these)
- `pixijs-scene-container` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs/references/index.md → src/hooks/membersTree/animations/useFitViewAnimation.ts
- `Effects` --references--> `filters()`  [INFERRED]
  .agents/skills/pixijs-scene-core-concepts/references/constructor-options.md → src/utils/filters/filterMembers.test.ts
- `Constructor options` --references--> `filters()`  [INFERRED]
  .agents/skills/pixijs-scene-graphics/SKILL.md → src/utils/filters/filterMembers.test.ts
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

## Communities (139 total, 9 thin omitted)

### Community 0 - "BirthdayFilterSection.tsx"
Cohesion: 0.20
Nodes (10): BirthdayFilterSection(), ClearButton(), FilterCheckbox(), Props, Props, Option, Props, TeamPeriodFilterSection() (+2 more)

### Community 1 - "react"
Cohesion: 0.11
Nodes (33): RoleForm(), Props, TeamTypeForm(), ManageList(), ManageNotice(), ManagePane(), Props, ITEMS (+25 more)

### Community 2 - "emailRoutes.ts"
Cohesion: 0.08
Nodes (44): openid-client, CHALLENGE_TTL_MS, isProduction(), QUESTIONS_SHOWN, SESSION_COOKIE, SESSION_TTL_MS, SIGN_IN_COOKIE, useSecureCookie() (+36 more)

### Community 3 - "server/package.json"
Cohesion: 0.07
Nodes (24): cloudinary, concurrently, helmet, nodemon, @prisma/config, ts-node, tsx, @types/compression (+16 more)

### Community 4 - "constants/filters.ts"
Cohesion: 0.15
Nodes (13): greenPillIcon(), IconProps, SEASON_PILLS, ACTIVITY_PILLS, GENDER_PILLS, STATUS_PILLS, GENDER_ICONS, IconProps (+5 more)

### Community 5 - "telegramEligibility.ts"
Cohesion: 0.32
Nodes (8): EligibilityMember, MemberMatch, resolveMemberMatch(), phoneKey(), resolveTelegramIdentity(), TelegramIdentity, loadTelegramIdentity(), TelegramClaims

### Community 6 - "bakeParams.ts"
Cohesion: 0.27
Nodes (13): AuroraBakeInput, bakeAuroraLayers(), BAKE_SCALE, BLUR_SPREAD, CONIC_LAYERS, ConicLayerSpec, cssAngleToCanvasRadians(), getBakeFilter() (+5 more)

### Community 7 - "http"
Cohesion: 0.16
Nodes (24): addMember(), ApiError, toApiError(), deleteMember(), editMember(), FamilyGroupOption, fetchFamilyGroups(), fetchFamilyTree() (+16 more)

### Community 8 - "FilterState"
Cohesion: 0.07
Nodes (41): CATEGORY_ICONS, FilterCategoryRail(), Props, FiltersFooter(), Props, FiltersHeader(), Props, FiltersPanel() (+33 more)

### Community 9 - "teamLayout.ts"
Cohesion: 0.08
Nodes (37): elkjs, TEAM_FRAME_GAP, TEAM_PACK_ASPECT, failOver(), getWorker(), Pending, requestLayout(), runInline() (+29 more)

### Community 10 - "teamFrame.ts"
Cohesion: 0.08
Nodes (43): @pixi/react, PixiElements, @pixi/react, pixi-viewport, Props, TeamBadge(), FILL_ALPHA, lerp() (+35 more)

### Community 11 - "DatesPane.tsx"
Cohesion: 0.26
Nodes (9): FlowerIcon(), Props, MapleLeafIcon(), Props, Placement, PLACEMENTS, Props, SeasonMotif() (+1 more)

### Community 12 - "anonymizeDemo.ts"
Cohesion: 0.12
Nodes (19): allowed, args, byId, factory, GROUP_NAMES, memberPhotos, nextFace, real (+11 more)

### Community 13 - "MemberNodeAvatar.tsx"
Cohesion: 0.12
Nodes (19): MemberNodeAvatar(), Props, EMPTY_IDS, SharpAvatarTracker(), View, AVATAR_HIGH_RES_SIZE, AVATAR_LOW_RES_SIZE, MAX_RENDER_RESOLUTION (+11 more)

### Community 14 - "src/index.ts"
Cohesion: 0.05
Nodes (53): compression, cors, express, multer, multer-storage-cloudinary, @prisma/adapter-pg, CONTACT_FIELDS, toMemberResponse() (+45 more)

### Community 15 - "MemberNodeCard.tsx"
Cohesion: 0.10
Nodes (26): contexts, getCardBackgroundContext(), getGlowTexture(), GLOW_BLUR, GLOW_PADDING, GlowKind, paint(), SIZES (+18 more)

### Community 16 - "auth.ts"
Cohesion: 0.06
Nodes (54): AccessLevel, AuthMethod, Challenge, ChallengeQuestion, logout(), post(), RequestCodeOutcome, requestEmailCode() (+46 more)

### Community 17 - "teamFrame.ts"
Cohesion: 0.10
Nodes (34): NODE_WIDTH, TEAM_COLUMN_GAP, TEAM_EDGE_DROP, TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_SPREAD_WIDTH, TEAM_EDGE_STUB, TEAM_FRAME_HEADER, TEAM_FRAME_MIN_WIDTH (+26 more)

### Community 18 - "treeStore.ts"
Cohesion: 0.13
Nodes (24): Props, Props, Props, Props, TeamFramesLayer(), Props, FIXED_EDGE_WIDTH, TEAM_OVERVIEW_EDGE_ALPHA (+16 more)

### Community 19 - "Member"
Cohesion: 0.08
Nodes (33): Cloning, clearing, and bounds, date-fns, Props, Props, Props, Props, Props, useTeamSelection() (+25 more)

### Community 20 - "ref_vitest"
Cohesion: 0.10
Nodes (27): express-rate-limit, answerMatches(), CYRILLIC_TO_LATIN, normalizeAnswer(), ChallengeState, isExpired(), isSolved(), pickRandom() (+19 more)

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "utils/membersTree/index.ts"
Cohesion: 0.11
Nodes (30): LineageEdge(), DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN, MIN_ANIM_DURATION, PATTERN_LEN, RETRACT_BASE (+22 more)

### Community 23 - "MemberInfo.tsx"
Cohesion: 0.13
Nodes (18): Props, TeamTile(), MemberInfo(), MemberInfoCover(), Props, MemberPositions(), Props, PositionBadge() (+10 more)

### Community 24 - "teamService.ts"
Cohesion: 0.14
Nodes (25): ResolvedPosition, resolvePosition(), MemberTransaction, deleteMember(), deriveTeamName(), resolveRole(), resolveTeam(), resolveTeamType() (+17 more)

### Community 25 - "src/utils/index.ts"
Cohesion: 0.13
Nodes (17): FONT_FAMILY, NODE_SUBTITLE_STYLE, NODE_TITLE_STYLE, NODE_TOOLTIP_TEXT_STYLE, TEXT_RESOLUTION, ThemeContext, ThemeContextValue, buildCanvasColors() (+9 more)

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
Cohesion: 0.04
Nodes (47): dependencies, cloudinary, compression, cors, dotenv, express, express-rate-limit, helmet (+39 more)

### Community 30 - "dependencies"
Cohesion: 0.10
Nodes (20): dependencies, date-fns, dotenv, elkjs, gsap, @gsap/react, @heroicons/react, lodash (+12 more)

### Community 31 - "MemberSearch.tsx"
Cohesion: 0.08
Nodes (40): compare(), getSearchable(), MemberSearch(), Props, Props, SearchBar(), Props, SearchPanel() (+32 more)

### Community 32 - "useTeamTypeForm.ts"
Cohesion: 0.21
Nodes (12): getSubtitle(), buildTeamTypeFormData(), byName(), Callbacks, EMPTY_FORM, keepCount(), teamsInUseMessage(), teamTypeTeamCount() (+4 more)

### Community 33 - "layout.tsx"
Cohesion: 0.16
Nodes (8): react-datepicker, metadata, nunito, RootLayout(), AuroraBackground(), readNumber(), useBakedAurora(), canBakeAurora()

### Community 34 - "NodesLayer.tsx"
Cohesion: 0.18
Nodes (10): NodesLayer(), Props, nextAdmittedIds(), PROGRESSIVE_CHUNK_SIZE, useProgressiveIds(), parseTeamNodeId(), getMemberTeamRoles(), getPositionPeriod() (+2 more)

### Community 35 - "Common Mistakes"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, Constructor options, [CRITICAL] Using lineStyle instead of stroke, [CRITICAL] Using old shape method names, [CRITICAL] Using v7 beginFill/drawRect/endFill, [HIGH] Clearing and redrawing Graphics every frame, [HIGH] Destroying a shared GraphicsContext unexpectedly (+4 more)

### Community 36 - "package.json"
Cohesion: 0.10
Nodes (20): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+12 more)

### Community 37 - "useTeamForm.ts"
Cohesion: 0.22
Nodes (19): createTeam(), deleteTeam(), fetchTeamDetails(), parse(), setTeamMembers(), TeamMemberPayload, updateTeam(), buildTeamRequestBody() (+11 more)

### Community 38 - "positionFormUtils.ts"
Cohesion: 0.14
Nodes (27): FieldError(), Props, PositionAssignmentFields(), PositionFormFields(), Props, createEmptyPositionRow(), EMPTY_POSITION_ROW, findTeamByName() (+19 more)

### Community 39 - "Direction"
Cohesion: 0.11
Nodes (32): EdgesLayer(), drawLerped(), drawPolyline(), TeamEdgesLayer(), NODE_AVATAR_RADIUS, Point, TeamEdge, bezierEval() (+24 more)

### Community 40 - "Core Patterns"
Cohesion: 0.13
Nodes (20): Adding and removing children, Bounds and coordinate conversion, Constructor options, Container events, Core Patterns, Destroy, Finding and removing from parent, [HIGH] Expecting getBounds() to return a Rectangle (+12 more)

### Community 41 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+5 more)

### Community 42 - "PhotoViewer.tsx"
Cohesion: 0.27
Nodes (10): thumbRadius(), Viewer(), viewportRect(), BUTTON, GLASS, HeaderProps, ToolbarProps, ViewerHeader() (+2 more)

### Community 43 - "Core Patterns"
Cohesion: 0.12
Nodes (16): API Reference, Common Mistakes, Coordinate conversion, Core Patterns, Cumulative alpha (getGlobalAlpha), Global, local, and screen coordinates, [HIGH] Setting scale to 0, [MEDIUM] Confusing anchor and pivot (+8 more)

### Community 44 - "CLAUDE.md"
Cohesion: 0.25
Nodes (7): Commands, Conventions, Deployment & data, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout

### Community 45 - "Core Patterns"
Cohesion: 0.12
Nodes (15): Add, remove, swap, API Reference, Child queries, Common Mistakes, Container Hierarchy, Core Patterns, [CRITICAL] Adding children to a leaf, Destroying sub-trees (+7 more)

### Community 46 - "constants/canvas/index.ts"
Cohesion: 0.17
Nodes (14): NODE_HOVER_ANIMATION_DURATION, NODE_HOVER_SCALE, ZOOMED_OUT_HOVER_SCALE_MAP, lineageEdgePath, ACCIDENTAL_DRAG_MAX_DISTANCE, ACCIDENTAL_DRAG_MAX_MS, LONG_PRESS_MS, TAP_MOVE_TOLERANCE (+6 more)

### Community 47 - "MemberStatus"
Cohesion: 0.09
Nodes (18): ACTIVITY_ICONS, IconComponent, IconProps, EMPTY_FILTER_STATE, FOUNDER_JOIN_YEAR, MEMBER_STATUSES, MENTOR_STATUSES, initialFiltersState (+10 more)

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "settingsStore.ts"
Cohesion: 0.27
Nodes (9): DEFAULT_SETTINGS, readLegacyTheme(), SETTINGS_STORAGE_KEY, SettingsActions, SettingsState, initialState, { storageMock }, OrientationSetting (+1 more)

### Community 50 - "ApplicationOptions reference"
Cohesion: 0.12
Nodes (17): Accessibility, ApplicationOptions reference, Background, Culler (CullerPluginOptions), Deprecated (GC — prefer the unified options above), Events, Garbage collection, Graphics (+9 more)

### Community 51 - "AGENTS.md"
Cohesion: 0.25
Nodes (7): Commands, Conventions, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout, This is NOT the Next.js you know

### Community 52 - "scripts"
Cohesion: 0.20
Nodes (10): scripts, build, db:backup-prod, db:restore-local, dev, dev:webpack, lint, start (+2 more)

### Community 53 - "hooks/index.ts"
Cohesion: 0.07
Nodes (36): pixi.js, BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props, acquireEmojiTextures(), createEmojiTexture(), generateRandomPosition() (+28 more)

### Community 54 - "useRoleForm.ts"
Cohesion: 0.13
Nodes (16): BEST Family Tree, People, Sign-in, Teams, Views, Props, EMPTY, rolesStore (+8 more)

### Community 57 - "constants/theme.ts"
Cohesion: 0.25
Nodes (6): darkTheme, DEFAULT_THEME, lightTheme, THEMES, themeCssMap, themeInitScript

### Community 58 - "MemberInfoActions.tsx"
Cohesion: 0.23
Nodes (12): FacebookIcon(), FacebookGlyph(), InstagramGlyph(), LinkedinGlyph(), svgProps, TelegramGlyph(), InstagramIcon(), LinkedinIcon() (+4 more)

### Community 59 - "Core Patterns"
Cohesion: 0.12
Nodes (17): Application destroy/recreate cycle, Batching optimization, cacheAsTexture for performance, Core Patterns, Culling, Filters and masks cost, Graphics performance, Low-level rendering optimizations (+9 more)

### Community 60 - "emailCodes.ts"
Cohesion: 0.07
Nodes (28): AllowedRow, AllowlistDiff, diffAllowlist(), looksLikeEmail(), parseAllowlistCsv(), ParsedAllowlist, splitLine(), alreadyDifferent (+20 more)

### Community 61 - "mailer/index.ts"
Cohesion: 0.18
Nodes (12): consoleMailer, getMailer(), createResendMailer(), ResendConfig, message, Env, isTransport(), MAIL_TRANSPORTS (+4 more)

### Community 62 - "src/index.ts"
Cohesion: 0.09
Nodes (25): Renderer selection at runtime, [MEDIUM] Using container.name instead of container.label, parsePositionsPayload(), countMembersByRole(), router, booleanLike, formatZodErrors(), isValidPeriod() (+17 more)

### Community 63 - "AvatarFileInput.tsx"
Cohesion: 0.14
Nodes (20): @heroicons/react, next, LionIcon(), Props, AvatarFileInput(), Props, removeBadgeClasses(), LogoFileInput() (+12 more)

### Community 64 - "memberService.ts"
Cohesion: 0.08
Nodes (36): zod, buildMemberFields(), buildMemberUpdateFields(), buildSharedFields(), buildSparseMemberFields(), getPositionKey(), syncPositions(), assertCanEditMember() (+28 more)

### Community 65 - "BEST Family Tree"
Cohesion: 0.11
Nodes (18): 1. Clone and configure environment, 2. Start the application, 3. Run database migrations, 4. Access the app, Architecture, Available Commands, Backend Commands (run inside container), Backups (+10 more)

### Community 66 - "Diagnosing Bugs"
Cohesion: 0.13
Nodes (14): Completion criterion: a tight loop that goes red, Diagnosing Bugs, Minimise, Non-deterministic bugs, Phase 1: Build a feedback loop, Phase 2: Reproduce + minimise, Phase 3: Hypothesise, Phase 4: Instrument (+6 more)

### Community 67 - "memberFormValidation.ts"
Cohesion: 0.16
Nodes (15): CheckedField, getStoredFieldValues(), Links, StoredMemberValues, complete, mentors, sparse, toTime() (+7 more)

### Community 68 - "TeamFormContent.tsx"
Cohesion: 0.14
Nodes (20): FormMessages(), Props, DropdownSelectInput(), FormSection(), Props, Props, FormState, getDerivedName() (+12 more)

### Community 69 - "auth/types.ts"
Cohesion: 0.25
Nodes (10): canEditMember(), hasAccess(), RANK, AccessRank, Express, Request, Session, requireAccess() (+2 more)

### Community 70 - "Toolbar.tsx"
Cohesion: 0.10
Nodes (26): FamilyTreeIcon(), Props, DemoBadge(), FitViewButton(), Props, PanelResetButton(), Props, EDGE_STYLE_OPTIONS (+18 more)

### Community 71 - "Core Patterns"
Cohesion: 0.13
Nodes (14): API Reference, boundsArea optimization, Common Mistakes, Core Patterns, Culling, HIGH: Expecting automatic culling, HIGH: Using addChild on RenderLayer, MEDIUM: Expecting filters on ancestors to apply to layer children (+6 more)

### Community 72 - "Core Patterns"
Cohesion: 0.13
Nodes (14): Advanced shape primitives, Core Patterns, Default styles via setFillStyle / setStrokeStyle, Draw-time transforms, Drawing a texture directly, Gradients and patterns, GraphicsContext sharing, GraphicsContext utilities (+6 more)

### Community 73 - "useMembersStore"
Cohesion: 0.19
Nodes (12): EMPTY, loadFamilyGroups(), useFamilyGroups(), membersActions, {
  setMembers,
  reloadMembers,
  addMember,
  updateMember,
  selectMember,
  getMentorsList,
}, useMemberById(), useMembersList(), useMembersMap() (+4 more)

### Community 74 - "mime.ts"
Cohesion: 0.29
Nodes (11): RFC-2045, RFC-2047, createGmailMailer(), GmailConfig, base64Body(), buildMime(), encodeHeaderText(), formatAddress() (+3 more)

### Community 75 - "filterSearchParams.ts"
Cohesion: 0.16
Nodes (21): FamilyGroupRef, familyIdToSlug(), familySlug, familyTokenToId(), groups, isListFilterSet(), filtersToSearchParams(), parseCsvArray() (+13 more)

### Community 76 - "filterTeams.ts"
Cohesion: 0.13
Nodes (24): DEFAULT_NODE_HEIGHT, DEFAULT_NODE_WIDTH, DEFAULT_POSITION, FlowViewportDirection, areSetsEqual(), computeFilteredMembers(), isFilterActive(), countActiveTeamFilters() (+16 more)

### Community 77 - "filterTeams.ts"
Cohesion: 0.20
Nodes (16): GENDER_VALUES, birthdayBoundKey(), countActiveMemberFilters(), isIdListSet(), matchesBirthday(), matchesFamilyGroup(), matchesGender(), matchesJoinSeason() (+8 more)

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
Cohesion: 0.20
Nodes (10): duplicates, fields, groups, ContactFields, contactKey(), ContactPlatform, FIELD_PLATFORMS, findContactCollision() (+2 more)

### Community 82 - "YearRangeFilterSection.tsx"
Cohesion: 0.26
Nodes (10): JoinYearFilterSection(), Props, RangeInputs(), RangeSlot, parseYear(), Props, YearInput(), YearInputProps (+2 more)

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

### Community 88 - "registerPixiPlugins.ts"
Cohesion: 0.22
Nodes (8): @gsap/react, MembersTree(), Props, CIRCLE_TEXTURE_SRC, PATTERN_TEXTURE_SRC, CHARS, installPixiFonts(), registerPixiPlugins()

### Community 89 - "Foundations"
Cohesion: 0.15
Nodes (12): Advanced, Foundations, pixijs-application, pixijs-core-concepts, pixijs-events, pixijs-performance, pixijs-scene-container, pixijs-scene-core-concepts (+4 more)

### Community 90 - "tailwind-merge"
Cohesion: 0.08
Nodes (35): tailwind-merge, Props, Props, Props, Props, InfoSection(), Props, LABELS (+27 more)

### Community 91 - "Sidebar.tsx"
Cohesion: 0.23
Nodes (11): Props, Props, Sidebar(), Props, SidebarHandle(), Props, SidebarHeader(), useSidebarChromeHeights() (+3 more)

### Community 92 - "Core Concepts"
Cohesion: 0.18
Nodes (11): Container vs leaf (CRITICAL), Core Concepts, Culling, Destroy semantics, Lifecycle events, Masking, Render groups, Render order and explicit z-ordering (+3 more)

### Community 93 - "FilterCategoryPane.tsx"
Cohesion: 0.35
Nodes (9): DatesPane(), PANES, MemberPane(), RolesPane(), TeamsPane(), FilterPaneProps, FilterSection(), PillGroupFilterSection() (+1 more)

### Community 94 - "pixijs-events/SKILL.md"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] buttonMode removed; use cursor, [HIGH] Default eventMode is passive, [HIGH] Move events only fire over the object in v8, [MEDIUM] Cursor does not inherit from parent, Quick Start

### Community 98 - "utils/strings.ts"
Cohesion: 0.16
Nodes (15): AvatarSkeleton(), MemberAvatarImage(), MemberAvatarImageInner(), Props, SkeletonProps, isTinted(), LoadingImage(), Props (+7 more)

### Community 99 - "react"
Cohesion: 0.13
Nodes (26): gsap, react, Viewport(), NODE_HEIGHT, getFitViewTargetScale(), useFitViewAnimation(), useFocusFrameAnimation(), useFocusNodeAnimation() (+18 more)

### Community 100 - "MembersTreeContent.tsx"
Cohesion: 0.13
Nodes (28): fetchSession(), SessionInfo, MemberSidebar(), Props, EVENT_FEATURES, MembersTreeContent(), MembersTreeScene(), Props (+20 more)

### Community 101 - "checkConfig.ts"
Cohesion: 0.29
Nodes (9): assertConfig(), configProblems(), databaseName(), demoProblems(), Env, googleProblems(), telegramProblems(), good (+1 more)

### Community 102 - "Render Loop"
Cohesion: 0.22
Nodes (8): API Reference, Common Mistakes, [CRITICAL] Treating the ticker callback arg as a number, Frame lifecycle, [HIGH] Using `updateTransform` for per-frame logic, [MEDIUM] Assuming ticker callbacks run after render, Quick Start, Render Loop

### Community 103 - "pixijs-core-concepts/SKILL.md"
Cohesion: 0.22
Nodes (8): API Reference, Decision guide, Environments, Quick concepts, Quick Start, Renderer = systems + pipes, The render loop, Topics

### Community 104 - "GroupedCheckListFilter.tsx"
Cohesion: 0.19
Nodes (15): byLabel(), CheckListFilter(), CheckOption, Props, useStableOrder(), CheckRow(), Props, byName() (+7 more)

### Community 105 - "MembersTreeDynamic.tsx"
Cohesion: 0.21
Nodes (11): isTreeReady(), MembersTree, MembersTreeDynamic(), TreeState, PhotoViewer(), BrandSpinner(), LION_CENTER, LION_SILHOUETTE (+3 more)

### Community 106 - "PhotoOpenButton.tsx"
Cohesion: 0.26
Nodes (9): zustand, cache, loadImageAspect(), PhotoOpenButton(), Props, useIsPhotoOpen(), PhotoViewerState, usePhotoViewerStore (+1 more)

### Community 107 - "EditMemberForm.tsx"
Cohesion: 0.13
Nodes (29): AddMemberForm(), buildMemberFormData(), ClearButton(), SubmitButton(), ConfirmDeleteControl(), Props, describeSubmitError(), EditMemberForm() (+21 more)

### Community 108 - "fakeIdentity.ts"
Cohesion: 0.27
Nodes (7): @faker-js/faker, createIdentityFactory(), firstFree(), OPERATOR_CODES, none, MAP, translit()

### Community 109 - "photoViewerMath.ts"
Cohesion: 0.21
Nodes (18): clampAxis(), clampOffset(), clampScale(), fitRect(), FULL_CLIP, MAX_SCALE, MIN_SCALE, Rect (+10 more)

### Community 110 - "migrateMembersFromMongodb.ts"
Cohesion: 0.07
Nodes (30): mongodb, ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember, STATUSES_MAP (+22 more)

### Community 111 - "ref_vitest"
Cohesion: 0.20
Nodes (3): createFaceSource(), Options, source()

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

### Community 113 - "pixijs/SKILL.md"
Cohesion: 0.25
Nodes (7): Advanced, Fallback: canonical PixiJS docs, Foundations, How to use this skill, Scene Objects, Skill router, Utilities

### Community 114 - "src/types/index.ts"
Cohesion: 0.12
Nodes (33): GLOW, Props, DropdownMenu(), Props, DropdownPortal(), Props, Props, ComboboxInput() (+25 more)

### Community 115 - "GenderFormField.tsx"
Cohesion: 0.29
Nodes (7): GenderFormField(), Props, Chip(), Props, ChipGroup(), Option, Props

### Community 116 - "pixijs-scene-core-concepts/SKILL.md"
Cohesion: 0.14
Nodes (12): API Reference, Common Mistakes, [CRITICAL] Adding children to a leaf display object, [CRITICAL] Referencing DisplayObject, [HIGH] Forgetting isRenderGroup on large static subtrees, [HIGH] Treating child.x as world space, Leaf comparison: which skill covers which object, [MEDIUM] sortableChildren without zIndex (+4 more)

### Community 117 - "ui/index.ts"
Cohesion: 0.25
Nodes (4): Options, Position, noopSubscribe(), useIsHydrated()

### Community 118 - "useTreeDirection.ts"
Cohesion: 0.36
Nodes (7): applyCssTokens(), ThemeProvider(), useIsMobileScreen(), useResolvedDirection(), useMediaQuery(), useSettingsStore, camelToCssVar()

### Community 119 - "ColorField.tsx"
Cohesion: 0.32
Nodes (6): ColorField(), PRESETS, Props, ColorPickerPanel(), EyeDropperApi, Props

### Community 120 - "Common Mistakes"
Cohesion: 0.29
Nodes (6): API Reference, Common Mistakes, [CRITICAL] Adding children to leaf scene objects, [HIGH] Using cacheAsBitmap instead of cacheAsTexture, [MEDIUM] Setting both pivot and origin on the same container, Quick Start

### Community 121 - "devLogin.ts"
Cohesion: 0.48
Nodes (5): databaseHost(), devLoginProblems(), Env, isDevLoginEnabled(), LOCAL_HOSTS

### Community 122 - "SubmitButton.tsx"
Cohesion: 0.50
Nodes (3): Props, Props, SuccessBubble()

### Community 123 - "Common Mistakes"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, [CRITICAL] App destroy without releaseGlobalResources, [HIGH] Destroying and recreating objects instead of recycling, [HIGH] Interleaving object types in scene graph, [HIGH] Loading many individual textures instead of spritesheets, [HIGH] Updating Text or HTMLText every frame, [HIGH] Using complex Graphics instead of textures (+4 more)

### Community 124 - "searchShortcut.ts"
Cohesion: 0.33
Nodes (6): EDITABLE_TAGS, isEditableTarget(), isSearchShortcut(), ShortcutKeys, Keys, useSearchShortcut()

### Community 125 - "useCardAnimation.ts"
Cohesion: 0.18
Nodes (19): clamp01(), deferCardHidden(), easeBackOut, easePower2In, easePower2Out, entries, Entry, finishCardReveal() (+11 more)

### Community 126 - "Position"
Cohesion: 0.40
Nodes (5): Position, Bottom, Left, Right, Top

### Community 127 - "Core Patterns"
Cohesion: 0.29
Nodes (7): Core Patterns, Frame rate capping, Manual rendering, Per-object update via `onRender`, Priority order, Stop and start, Time units

### Community 128 - "TextInput"
Cohesion: 0.20
Nodes (20): FormField(), Props, MemberBasicsSection(), Props, MemberBestSection(), Props, STATUS_DROPDOWN_OPTIONS, MemberContactsSection() (+12 more)

### Community 129 - "GSAP with React"
Cohesion: 0.15
Nodes (12): Best practices, Context-Safe Callbacks, Dependency array, scope, and revertOnUpdate, Do Not, gsap.context() in useEffect (when useGSAP isn't used), GSAP with React, Installation, Learn More (+4 more)

### Community 130 - "emailRoutes.ts"
Cohesion: 0.07
Nodes (38): authSecret(), isDemoMode(), EmailIdentity, normalizeEmail(), resolveEmailIdentity(), CODE_TTL_MS, CodeOwner, CodeStore (+30 more)

### Community 132 - "hitl-loop.template.sh"
Cohesion: 0.83
Nodes (3): capture(), hitl-loop.template.sh script, step()

### Community 134 - "Common Mistakes"
Cohesion: 0.50
Nodes (4): Common Mistakes, [HIGH] Accessing app.renderer before init() resolves, [HIGH] Setting DOMAdapter after Application.init, [MEDIUM] Treating `preference` as a guarantee

### Community 137 - "GSAP Performance"
Cohesion: 0.17
Nodes (11): Batch Reads and Writes, Best practices, Do Not, Frequently updated properties (e.g. mouse followers), GSAP Performance, Many Elements (Stagger, Lists), Prefer Transform and Opacity, Reduce Simultaneous Work (+3 more)

### Community 138 - "GSAP Timeline"
Cohesion: 0.17
Nodes (11): Controlling Playback, Creating a Timeline, Do Not, GSAP Timeline, Labels, Nesting Timelines, Official GSAP Best practices, Position Parameter (+3 more)

## Knowledge Gaps
- **45 isolated node(s):** `@prisma/client`, `dotenv`, `lodash`, `pixi-filters`, `@tailwindcss/postcss` (+40 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1016 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `filters()` connect `filterTeams.ts` to `Core Patterns`, `filterSearchParams.ts`, `Common Mistakes`, `Constructor options (Container-inherited)`?**
  _High betweenness centrality (0.131) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _45 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `react` be split into smaller, more focused modules?**
  _Cohesion score 0.1147086031452359 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `BirthdayFilterSection.tsx`, `TextInput`, `react`, `constants/filters.ts`, `DropdownPortal.tsx`, `FilterState`, `teamFrame.ts`, `MemberNodeAvatar.tsx`, `MemberNodeCard.tsx`, `auth.ts`, `treeStore.ts`, `Member`, `utils/membersTree/index.ts`, `MemberInfo.tsx`, `src/utils/index.ts`, `MemberSearch.tsx`, `useTeamTypeForm.ts`, `layout.tsx`, `NodesLayer.tsx`, `package.json`, `useTeamForm.ts`, `positionFormUtils.ts`, `Direction`, `PhotoViewer.tsx`, `constants/canvas/index.ts`, `MemberStatus`, `hooks/index.ts`, `useRoleForm.ts`, `AvatarFileInput.tsx`, `TeamFormContent.tsx`, `Toolbar.tsx`, `useMembersStore`, `YearRangeFilterSection.tsx`, `registerPixiPlugins.ts`, `tailwind-merge`, `Sidebar.tsx`, `FilterCategoryPane.tsx`, `utils/strings.ts`, `MembersTreeContent.tsx`, `GroupedCheckListFilter.tsx`, `MembersTreeDynamic.tsx`, `PhotoOpenButton.tsx`, `EditMemberForm.tsx`, `photoViewerMath.ts`, `src/types/index.ts`, `GenderFormField.tsx`, `ui/index.ts`, `useTreeDirection.ts`, `ColorField.tsx`, `searchShortcut.ts`, `useCardAnimation.ts`?**
  _High betweenness centrality (0.109) - this node is a cross-community bridge._
- **Should `emailRoutes.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07518796992481203 - nodes in this community are weakly interconnected._
- **Why does `Constructor options` connect `Common Mistakes` to `filterTeams.ts`?**
  _High betweenness centrality (0.098) - this node is a cross-community bridge._
- **Should `server/package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.07407407407407407 - nodes in this community are weakly interconnected._