# Graph Report - best-family-tree  (2026-11-24)

## Corpus Check
- 760 files · ~232,348 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 33 file(s) not represented in the graph (top: .prisma 10, (none) 7, .css 7)

## Summary
- 3525 nodes · 10689 edges · 154 communities (144 shown, 10 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 107 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `adaa18a0`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- uk/index.ts
- TeamFrame
- Member
- server/package.json
- MembersTreeDynamic.tsx
- useDashedPathAnimation.ts
- bakeParams.ts
- src/index.ts
- suggestion/suggestionReview.ts
- NODE_WIDTH
- contactKeys.ts
- SeasonMotif.tsx
- anonymizeDemo.ts
- catalogValidation.ts
- filterCategories.ts
- suggestion/suggestionPositions.ts
- memberFormValidation.ts
- dependencies
- useTreeLayout.ts
- filterSearchParams.ts
- AccountForm.tsx
- HTML Report Format
- signInCodeEmail.ts
- src/types/index.ts
- teamService.ts
- MembersTab.tsx
- compilerOptions
- compilerOptions
- ApplicationOptions reference
- teamFrame.ts
- dependencies
- Sidebar.tsx
- TeamLogo.tsx
- filterTeams.ts
- MemberSuggestFields.tsx
- inputs/index.ts
- package.json
- emailRoutes.ts
- suggestChanges.ts
- utils/membersTree/index.ts
- Core Patterns
- devDependencies
- settingsStore.ts
- Core Patterns
- CLAUDE.md
- Container Hierarchy
- useTreeStore
- FitViewButton.tsx
- During the session
- SuggestionsTab.tsx
- en/index.ts
- AGENTS.md
- scripts
- eligibility.ts
- positionSuggestion.ts
- next.config.mjs
- postcss.config.mjs
- scripts
- useTeamForm.ts
- Core Patterns
- Member
- PositionBadge.tsx
- hooks/index.ts
- pixi.js
- memberService.ts
- BEST Family Tree
- Diagnosing Bugs
- useCardAnimation.ts
- constants/canvas/index.ts
- challenges.ts
- backfillGender.ts
- Core Patterns
- Core Patterns
- familyTreeRoutes.ts
- FilterState
- locale.ts
- YearRangeFilterSection.tsx
- SocialMediaFormFields.tsx
- Core Patterns
- Core Patterns
- Core Patterns
- api/auth.ts
- useLocale
- Core Patterns
- Constructor options (Container-inherited)
- Test-Driven Development
- GSAP Core
- Core Patterns
- ui/index.ts
- Foundations
- SettingsPanel.tsx
- react
- displayName.ts
- SignIn.tsx
- PhotoViewer.tsx
- backup-prod.sh
- start-prod.sh
- restore-local.sh
- useCanvasTheme.ts
- treeStore.ts
- dimensions.ts
- Core Concepts
- Render Loop
- pixijs-core-concepts/SKILL.md
- devDependencies
- Common Mistakes
- memberPresentation.ts
- selfService.ts
- ref_vitest
- PhotoViewer.tsx
- migrateMembersFromMongodb.ts
- ActivityState
- Renderers: WebGPU, WebGL, and Canvas
- Toolbar.tsx
- MemberSuggestForm.tsx
- fakeIdentity.ts
- pixijs-scene-core-concepts/SKILL.md
- opengraph-image.tsx
- pixijs/SKILL.md
- Messages
- membersStore.ts
- seedQuestions.ts
- settingsStore.ts
- pixijs/SKILL.md
- importAllowedEmails.ts
- http
- AccountRoles.tsx
- NodesLayer.tsx
- AccessTab.tsx
- GSAP with React
- emailCodes.ts
- hitl-loop.template.sh
- ref_node_crypto
- uk/filters.ts
- en/errors.ts
- GSAP Performance
- GSAP Timeline
- CodeForm.tsx
- uk/errors.ts
- MaskIcon.tsx
- constants/filters.ts
- Core Patterns
- checkConfig.ts
- BEST Family Tree
- TeamTypeFormContent.tsx
- useTeamTypeForm.ts
- PositionFormFields.tsx
- @prisma/config
- Common Mistakes
- piiCheck.ts
- EmailForm.tsx

## God Nodes (most connected - your core abstractions)
1. `useT()` - 218 edges
2. `AccentColor` - 192 edges
3. `react` - 177 edges
4. `tailwind-merge` - 102 edges
5. `Member` - 79 edges
6. `useLocale()` - 75 edges
7. `COLOR_CLASSES` - 61 edges
8. `@heroicons/react` - 60 edges
9. `http()` - 48 edges
10. `ValidationError` - 47 edges

## Surprising Connections (you probably didn't know these)
- `pixijs-scene-container` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs/references/index.md → src/hooks/membersTree/animations/useFitViewAnimation.ts
- `Teams` --references--> `Role`  [INFERRED]
  GLOSSARY.md → src/types/positions.ts
- `Constructor options` --references--> `filters()`  [INFERRED]
  .agents/skills/pixijs-scene-graphics/SKILL.md → src/utils/filters/filterMembers.test.ts
- `pixijs-scene-graphics` --references--> `arc()`  [INFERRED]
  .agents/skills/pixijs/references/index.md → src/utils/membersTree/teamEdgeAnchors.ts
- `Paths and complex shapes` --references--> `arc()`  [INFERRED]
  .agents/skills/pixijs-scene-graphics/SKILL.md → src/utils/membersTree/teamEdgeAnchors.ts

## Import Cycles
- 3-file cycle: `src/utils/index.ts -> src/utils/membersTree/index.ts -> src/utils/membersTree/lineageEdgePath.ts -> src/utils/index.ts`
- 4-file cycle: `src/context/ThemeContext.tsx -> src/hooks/index.ts -> src/hooks/membersTree/index.ts -> src/hooks/membersTree/useCanvasTheme.ts -> src/context/ThemeContext.tsx`
- 4-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/members.ts -> src/models/index.ts -> src/models/Member.ts`
- 4-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/tree.ts -> src/models/index.ts -> src/models/Member.ts`
- 5-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/filters.ts -> src/types/members.ts -> src/models/index.ts -> src/models/Member.ts`

## Communities (154 total, 10 thin omitted)

### Community 0 - "uk/index.ts"
Cohesion: 0.08
Nodes (19): access, account, auth, common, formCommon, manage, memberForm, memberInfo (+11 more)

### Community 1 - "TeamFrame"
Cohesion: 0.09
Nodes (32): Props, Props, EMPTY_IDS, SharpAvatarTracker(), View, Props, Props, Props (+24 more)

### Community 2 - "Member"
Cohesion: 0.09
Nodes (22): getCardBackgroundContext(), MemberNodeCard(), Props, NodesLayer(), Props, Props, MemberInfoCover(), Props (+14 more)

### Community 3 - "server/package.json"
Cohesion: 0.07
Nodes (29): cloudinary, compression, concurrently, cors, express-rate-limit, helmet, multer-storage-cloudinary, nodemon (+21 more)

### Community 4 - "MembersTreeDynamic.tsx"
Cohesion: 0.22
Nodes (10): isTreeReady(), MembersTree, MembersTreeDynamic(), TreeState, BrandSpinner(), LION_CENTER, LION_SILHOUETTE, LIONS (+2 more)

### Community 5 - "useDashedPathAnimation.ts"
Cohesion: 0.12
Nodes (30): LineageEdge(), DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN, MIN_ANIM_DURATION, PATTERN_LEN, RETRACT_BASE (+22 more)

### Community 6 - "bakeParams.ts"
Cohesion: 0.21
Nodes (17): AuroraBackground(), readNumber(), useBakedAurora(), AuroraBakeInput, bakeAuroraLayers(), canBakeAurora(), BAKE_SCALE, BLUR_SPREAD (+9 more)

### Community 7 - "src/index.ts"
Cohesion: 0.05
Nodes (64): express, multer, canSelfServe(), adapter, prisma, app, deleteCloudinaryImage(), deleteReplacedImage() (+56 more)

### Community 8 - "suggestion/suggestionReview.ts"
Cohesion: 0.07
Nodes (65): canEditMember(), canManageGrant(), canSuggest(), hasAccess(), isOwnGrant(), RANK, AccessRank, Express (+57 more)

### Community 9 - "NODE_WIDTH"
Cohesion: 0.08
Nodes (42): elkjs, NODE_WIDTH, TEAM_FRAME_GAP, TEAM_PACK_ASPECT, failOver(), getWorker(), Pending, requestLayout() (+34 more)

### Community 10 - "contactKeys.ts"
Cohesion: 0.20
Nodes (10): duplicates, fields, groups, ContactFields, contactKey(), ContactPlatform, FIELD_PLATFORMS, findContactCollision() (+2 more)

### Community 11 - "SeasonMotif.tsx"
Cohesion: 0.16
Nodes (15): FlowerIcon(), Props, MapleLeafIcon(), Props, Props, QuestionMarkIcon(), Placement, PLACEMENTS (+7 more)

### Community 12 - "anonymizeDemo.ts"
Cohesion: 0.14
Nodes (11): allowed, args, byId, factory, GROUP_NAMES, memberPhotos, nextFace, real (+3 more)

### Community 13 - "catalogValidation.ts"
Cohesion: 0.07
Nodes (27): booleanLike, isValidPeriod(), MIN_TEAM_YEAR, optional(), optionalName(), PERIOD_ERROR, positionSchema, roleRef (+19 more)

### Community 14 - "filterCategories.ts"
Cohesion: 0.39
Nodes (7): ACTIVITY_STATES, JOIN_SEASONS, MEMBER_STATUSES, FILTER_CATEGORY_KEYS, isCategoryActive(), isCategoryActiveByKey, active()

### Community 15 - "suggestion/suggestionPositions.ts"
Cohesion: 0.15
Nodes (22): buildPositionRows(), invalidPositions(), parseSent(), PositionInput, byName(), decodePosition(), diffPositions(), encodePosition() (+14 more)

### Community 16 - "memberFormValidation.ts"
Cohesion: 0.15
Nodes (17): SuggestionChange, Context, FORM_KEYS, CheckedField, getStoredFieldValues(), Links, StoredMemberValues, complete (+9 more)

### Community 17 - "dependencies"
Cohesion: 0.12
Nodes (17): dependencies, cloudinary, compression, cors, dotenv, express, express-rate-limit, helmet (+9 more)

### Community 18 - "useTreeLayout.ts"
Cohesion: 0.10
Nodes (28): getFitViewTargetScale(), useSceneTransition(), useResolvedDirection(), useTreeLayout(), DEFAULT_NODE_HEIGHT, DEFAULT_NODE_WIDTH, FLOW_VIEWPORT_DIRECTION, MembersState (+20 more)

### Community 19 - "filterSearchParams.ts"
Cohesion: 0.11
Nodes (27): GENDER_VALUES, useFamilyGroups(), Props, useFilterSearchParams(), FamilyGroupRef, familyIdToSlug(), familySlug, familyTokenToId() (+19 more)

### Community 20 - "AccountForm.tsx"
Cohesion: 0.31
Nodes (9): requestEmailCode(), AccountForm(), Props, GoogleButton(), GoogleMark(), Props, ProviderButton(), TelegramButton() (+1 more)

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "signInCodeEmail.ts"
Cohesion: 0.31
Nodes (6): CODE_TTL_MS, COPY, EmailLocale, escapeHtml(), pairs(), renderSignInCodeEmail()

### Community 23 - "src/types/index.ts"
Cohesion: 0.06
Nodes (56): tailwind-merge, PAIR_COLORS, Props, GLOW, Props, QuestionCard(), CATEGORY_ICONS, Props (+48 more)

### Community 24 - "teamService.ts"
Cohesion: 0.12
Nodes (31): getPositionKey(), ResolvedPosition, resolvePosition(), MemberTransaction, assertCanEditMembers(), deriveTeamName(), resolveRole(), resolveTeam() (+23 more)

### Community 25 - "MembersTab.tsx"
Cohesion: 0.11
Nodes (34): DemoBadge(), compare(), getSearchable(), MemberSearch(), Props, SearchBar(), Props, SearchSuggestionItem() (+26 more)

### Community 26 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, esModuleInterop, forceConsistentCasingInFileNames, module, moduleResolution, noImplicitAny, outDir, paths (+12 more)

### Community 27 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+12 more)

### Community 28 - "ApplicationOptions reference"
Cohesion: 0.06
Nodes (32): Accessibility, ApplicationOptions reference, Background, Culler (CullerPluginOptions), Deprecated (GC — prefer the unified options above), Events, Garbage collection, Graphics (+24 more)

### Community 29 - "teamFrame.ts"
Cohesion: 0.11
Nodes (28): TEAM_COLUMN_GAP, TEAM_EDGE_DROP, TEAM_EDGE_STUB, TEAM_FRAME_HEADER, TEAM_FRAME_MIN_WIDTH, TEAM_FRAME_PADDING, TEAM_FRAME_RADIUS, TEAM_LAYOUT_COLUMNS (+20 more)

### Community 30 - "dependencies"
Cohesion: 0.10
Nodes (20): dependencies, date-fns, dotenv, elkjs, gsap, @gsap/react, @heroicons/react, lodash (+12 more)

### Community 31 - "Sidebar.tsx"
Cohesion: 0.14
Nodes (13): Props, Sidebar(), Props, SidebarBehindCover(), SidebarCoverTint(), Props, SidebarFooter(), SidebarFooterContext (+5 more)

### Community 32 - "TeamLogo.tsx"
Cohesion: 0.14
Nodes (20): MemberActivityPill(), AvatarSkeleton(), MemberAvatarImage(), MemberAvatarImageInner(), Props, SkeletonProps, MemberFactTile(), Props (+12 more)

### Community 33 - "filterTeams.ts"
Cohesion: 0.13
Nodes (28): Constructor options, Effects, birthdayBoundKey(), countActiveMemberFilters(), isFilterActive(), isIdListSet(), isListFilterSet(), matchesBirthday() (+20 more)

### Community 34 - "MemberSuggestFields.tsx"
Cohesion: 0.13
Nodes (34): date-fns, Props, FormField(), GenderFormField(), MemberBasicsSection(), Props, MemberBestSection(), Props (+26 more)

### Community 35 - "inputs/index.ts"
Cohesion: 0.10
Nodes (39): DropdownMenu(), Props, ConfirmDeleteControl(), FormMessages(), ComboboxInput(), Props, ComboboxInputField(), useComboboxState() (+31 more)

### Community 36 - "package.json"
Cohesion: 0.10
Nodes (20): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+12 more)

### Community 37 - "emailRoutes.ts"
Cohesion: 0.06
Nodes (58): authSecret(), CHALLENGE_TTL_MS, isDemoMode(), isProduction(), MIN_ACTIVE_QUESTIONS, QUESTIONS_SHOWN, SESSION_COOKIE, SESSION_TTL_MS (+50 more)

### Community 38 - "suggestChanges.ts"
Cohesion: 0.16
Nodes (15): normalizePhone(), buildMemberChanges(), buildPositionsChange(), buildTeamChanges(), findEmptiedTeamFields(), POSITION_KEYS, PositionRow, sentPosition() (+7 more)

### Community 39 - "utils/membersTree/index.ts"
Cohesion: 0.09
Nodes (46): EdgesLayer(), drawLerped(), drawPolyline(), TeamEdgesLayer(), FIXED_EDGE_WIDTH, NODE_AVATAR_RADIUS, TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_SPREAD_WIDTH (+38 more)

### Community 40 - "Core Patterns"
Cohesion: 0.19
Nodes (14): Adding and removing children, Bounds and coordinate conversion, Core Patterns, Destroy, Finding and removing from parent, [HIGH] Expecting getBounds() to return a Rectangle, Leaves vs containers, Per-frame updates with onRender (+6 more)

### Community 41 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+5 more)

### Community 42 - "settingsStore.ts"
Cohesion: 0.18
Nodes (13): darkTheme, DEFAULT_THEME, lightTheme, THEMES, applyCssTokens(), ThemeContext, ThemeContextValue, ThemeProvider() (+5 more)

### Community 43 - "Core Patterns"
Cohesion: 0.12
Nodes (16): API Reference, Common Mistakes, Coordinate conversion, Core Patterns, Cumulative alpha (getGlobalAlpha), Global, local, and screen coordinates, [HIGH] Setting scale to 0, [MEDIUM] Confusing anchor and pivot (+8 more)

### Community 44 - "CLAUDE.md"
Cohesion: 0.22
Nodes (8): Commands, Conventions, Delegating to subagents, Deployment & data, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout

### Community 45 - "Container Hierarchy"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, Container Hierarchy, [CRITICAL] Adding children to a leaf, [HIGH] Destroying the parent without `children: true`, [MEDIUM] Mutating `children` during iteration, Quick Start

### Community 46 - "useTreeStore"
Cohesion: 0.09
Nodes (43): @pixi/react, MemberNodeAvatar(), Props, Props, TeamBadge(), FILL_ALPHA, lerp(), STROKE_ALPHA (+35 more)

### Community 47 - "FitViewButton.tsx"
Cohesion: 0.21
Nodes (14): FiltersHeader(), Props, FitViewButton(), Props, PanelCloseButton(), Props, STYLES, PanelResetButton() (+6 more)

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "SuggestionsTab.tsx"
Cohesion: 0.19
Nodes (16): approveSuggestion(), fetchSuggestionCount(), fetchSuggestions(), parse(), rejectSuggestion(), SuggestionDto, ReviewKind, fieldLabelKey() (+8 more)

### Community 50 - "en/index.ts"
Cohesion: 0.11
Nodes (22): access, account, auth, common, filters, formCommon, manage, memberInfo (+14 more)

### Community 51 - "AGENTS.md"
Cohesion: 0.25
Nodes (7): Commands, Conventions, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout, This is NOT the Next.js you know

### Community 52 - "scripts"
Cohesion: 0.20
Nodes (10): scripts, build, db:backup-prod, db:restore-local, dev, dev:webpack, lint, start (+2 more)

### Community 53 - "eligibility.ts"
Cohesion: 0.16
Nodes (17): EligibilityMember, EmailIdentity, MemberMatch, normalizeEmail(), resolveEmailIdentity(), resolveMemberMatch(), loadEmailIdentity(), decideGoogleSignIn() (+9 more)

### Community 54 - "positionSuggestion.ts"
Cohesion: 0.14
Nodes (22): Props, BadgePosition, parsePositionValue(), POSITION_FIELDS, PositionValue, sameName(), catalog, event (+14 more)

### Community 57 - "scripts"
Cohesion: 0.12
Nodes (17): scripts, auth:grant, auth:import-emails, auth:preview-email, auth:report-duplicate-contacts, auth:seed-grants, auth:seed-questions, build (+9 more)

### Community 58 - "useTeamForm.ts"
Cohesion: 0.22
Nodes (19): createTeam(), deleteTeam(), fetchTeamDetails(), parse(), setTeamMembers(), TeamMemberPayload, updateTeam(), buildTeamRequestBody() (+11 more)

### Community 59 - "Core Patterns"
Cohesion: 0.12
Nodes (17): Application destroy/recreate cycle, Batching optimization, cacheAsTexture for performance, Core Patterns, Culling, Filters and masks cost, Graphics performance, Low-level rendering optimizations (+9 more)

### Community 60 - "Member"
Cohesion: 0.15
Nodes (13): @gsap/react, MembersTree(), Props, Props, Props, Props, CIRCLE_TEXTURE_SRC, PATTERN_TEXTURE_SRC (+5 more)

### Community 61 - "PositionBadge.tsx"
Cohesion: 0.25
Nodes (4): Options, Position, noopSubscribe(), useIsHydrated()

### Community 62 - "hooks/index.ts"
Cohesion: 0.10
Nodes (34): fetchSession(), Viewport(), MemberSidebar(), Props, EVENT_FEATURES, MembersTreeContent(), Props, TeamInfoSidebar() (+26 more)

### Community 63 - "pixi.js"
Cohesion: 0.07
Nodes (33): pixi.js, BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props, acquireEmojiTextures(), createEmojiTexture(), generateRandomPosition() (+25 more)

### Community 64 - "memberService.ts"
Cohesion: 0.08
Nodes (39): zod, buildMemberFields(), buildMemberUpdateFields(), buildSharedFields(), buildSparseMemberFields(), parsePhoneNumbers(), parsePositionsPayload(), syncPositions() (+31 more)

### Community 65 - "BEST Family Tree"
Cohesion: 0.10
Nodes (19): 1. Clone and configure environment, 2. Start the application, 3. Run database migrations, 4. Access the app, Architecture, Automated backups (GitHub Actions), Available Commands, Backend Commands (run inside container) (+11 more)

### Community 66 - "Diagnosing Bugs"
Cohesion: 0.13
Nodes (14): Completion criterion: a tight loop that goes red, Diagnosing Bugs, Minimise, Non-deterministic bugs, Phase 1: Build a feedback loop, Phase 2: Reproduce + minimise, Phase 3: Hypothesise, Phase 4: Instrument (+6 more)

### Community 67 - "useCardAnimation.ts"
Cohesion: 0.14
Nodes (23): CARD_PIVOT, Props, clamp01(), deferCardHidden(), easeBackOut, easePower2In, easePower2Out, entries (+15 more)

### Community 68 - "constants/canvas/index.ts"
Cohesion: 0.17
Nodes (14): NODE_HOVER_ANIMATION_DURATION, NODE_HOVER_SCALE, ZOOMED_OUT_HOVER_SCALE_MAP, lineageEdgePath, ACCIDENTAL_DRAG_MAX_DISTANCE, ACCIDENTAL_DRAG_MAX_MS, LONG_PRESS_MS, TAP_MOVE_TOLERANCE (+6 more)

### Community 69 - "challenges.ts"
Cohesion: 0.13
Nodes (22): ChallengeState, isExpired(), isSolved(), pickRandom(), swapQuestion(), SwapResult, base, ChallengeView (+14 more)

### Community 70 - "backfillGender.ts"
Cohesion: 0.12
Nodes (15): alreadyDifferent, alreadySame, APPLY, args, duplicates, fileArg, Gender, GENDERS (+7 more)

### Community 71 - "Core Patterns"
Cohesion: 0.13
Nodes (14): API Reference, boundsArea optimization, Common Mistakes, Core Patterns, Culling, HIGH: Expecting automatic culling, HIGH: Using addChild on RenderLayer, MEDIUM: Expecting filters on ancestors to apply to layer children (+6 more)

### Community 72 - "Core Patterns"
Cohesion: 0.11
Nodes (16): Advanced shape primitives, Cloning, clearing, and bounds, Core Patterns, Default styles via setFillStyle / setStrokeStyle, Draw-time transforms, Drawing a texture directly, Gradients and patterns, GraphicsContext sharing (+8 more)

### Community 73 - "familyTreeRoutes.ts"
Cohesion: 0.19
Nodes (12): CONTACT_FIELDS, toMemberResponse(), loadFamilyTree, loadReducedFamilyTree, router, serializeMember(), transformMembersToTree(), bumpDataVersion() (+4 more)

### Community 74 - "FilterState"
Cohesion: 0.10
Nodes (29): PANES, Props, RolesPane(), TeamsPane(), FilterPaneProps, Props, byLabel(), CheckListFilter() (+21 more)

### Community 75 - "locale.ts"
Cohesion: 0.14
Nodes (8): react-datepicker, metadata, nunito, RootLayout(), detectLocale(), isLocale(), themeCssMap, themeInitScript

### Community 76 - "YearRangeFilterSection.tsx"
Cohesion: 0.19
Nodes (13): ClearButton(), JoinYearFilterSection(), Props, Props, RangeInputs(), RangeSlot, parseYear(), Props (+5 more)

### Community 77 - "SocialMediaFormFields.tsx"
Cohesion: 0.22
Nodes (11): Props, FacebookIcon(), FacebookGlyph(), InstagramGlyph(), LinkedinGlyph(), svgProps, TelegramGlyph(), InstagramIcon() (+3 more)

### Community 78 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, attach / detach, Common Mistakes, Core Patterns, [CRITICAL] Using `addChild` on a RenderLayer, [HIGH] Layer and attached children in different render groups, Layer + logical parent, Manual sort (+5 more)

### Community 79 - "Core Patterns"
Cohesion: 0.14
Nodes (13): Alpha mask (Sprite-based), API Reference, Common Mistakes, Core Patterns, [HIGH] Using cacheAsTexture with masks, Inverse masking, Mask channel selection, Mask type selection (+5 more)

### Community 80 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, Common Mistakes, Construction options, Core Patterns, [HIGH] Nesting many render groups, [MEDIUM] Constantly adding/removing from a render group, [MEDIUM] Overusing render groups, Profile before adding (+5 more)

### Community 81 - "api/auth.ts"
Cohesion: 0.19
Nodes (15): AccessLevel, AuthMethod, Challenge, ChallengeQuestion, post(), RequestCodeOutcome, SessionPosition, startChallenge() (+7 more)

### Community 82 - "useLocale"
Cohesion: 0.19
Nodes (26): LionIcon(), AccountPanel(), Props, cache, loadImageAspect(), PhotoOpenButton(), Props, useIsPhotoOpen() (+18 more)

### Community 83 - "Core Patterns"
Cohesion: 0.15
Nodes (13): Context and device loss, Core Patterns, Destroying a renderer, Direct renderer construction, Lazy-loading backend-specific systems and pipes, Manual rendering, Per-renderer options, Preference forms (+5 more)

### Community 84 - "Constructor options (Container-inherited)"
Cohesion: 0.18
Nodes (11): Advanced options and aliases, Before / after, Callbacks, Constructor options (Container-inherited), Display, Exceptions (line-by-line is fine here), Hierarchy, Layout & bounds (+3 more)

### Community 85 - "Test-Driven Development"
Cohesion: 0.15
Nodes (10): Designing for Mockability, When to Mock, Anti-patterns, Rules of the loop, Seams: where tests go, Test-Driven Development, What a good test is, Bad Tests (+2 more)

### Community 86 - "GSAP Core"
Cohesion: 0.10
Nodes (20): Accessibility and responsive (gsap.matchMedia()), Common vars, Core Tween Methods, Custom: use CustomEase (plugin), Defaults, Do Not, Easing, Function-based values (+12 more)

### Community 87 - "Core Patterns"
Cohesion: 0.17
Nodes (12): Capture phase events, Core Patterns, Cursor styles, Event features, Event properties, Event types, eventMode values, Global move events and drag (+4 more)

### Community 88 - "ui/index.ts"
Cohesion: 0.33
Nodes (6): EDITABLE_TAGS, isEditableTarget(), isSearchShortcut(), ShortcutKeys, Keys, useSearchShortcut()

### Community 89 - "Foundations"
Cohesion: 0.15
Nodes (12): Advanced, Foundations, pixijs-application, pixijs-core-concepts, pixijs-events, pixijs-performance, pixijs-scene-container, pixijs-scene-core-concepts (+4 more)

### Community 90 - "SettingsPanel.tsx"
Cohesion: 0.21
Nodes (13): FamilyTreeIcon(), Props, edgeIcon(), edgeStyleOptions(), iconClass, orientationOptions(), themeOptions(), treeModeOptions() (+5 more)

### Community 91 - "react"
Cohesion: 0.08
Nodes (37): @heroicons/react, next, react, Props, SearchPanel(), Props, BUTTON, GLASS (+29 more)

### Community 92 - "displayName.ts"
Cohesion: 0.21
Nodes (12): SHORT_LABELS, Locale, LOCALES, abbreviateName(), cache, displayFamilyName(), FAMILY_NAMES_EN, romanizeCached() (+4 more)

### Community 93 - "SignIn.tsx"
Cohesion: 0.20
Nodes (10): logout(), Method, Props, SignInCard(), LanguageSwitch(), useSidebarHeightAnimation(), LEAVE_MS, navigateWithTransition() (+2 more)

### Community 94 - "PhotoViewer.tsx"
Cohesion: 0.25
Nodes (11): react-dom, DropdownPortal(), Props, PhotoViewer(), thumbRadius(), Viewer(), viewportRect(), ViewerToolbar() (+3 more)

### Community 98 - "useCanvasTheme.ts"
Cohesion: 0.19
Nodes (12): FONT_FAMILY, NODE_SUBTITLE_STYLE, NODE_TITLE_STYLE, NODE_TOOLTIP_TEXT_STYLE, TEXT_RESOLUTION, buildCanvasColors(), CanvasColors, CanvasTextStyleInstances (+4 more)

### Community 99 - "treeStore.ts"
Cohesion: 0.21
Nodes (17): @pixi/react, PixiElements, gsap, pixi-viewport, Props, BIRTHDAY_ANIMATION_MIN_SCALE, MAX_VIEWPORT_ZOOM, MIN_VIEWPORT_ZOOM (+9 more)

### Community 100 - "dimensions.ts"
Cohesion: 0.10
Nodes (26): contexts, getGlowTexture(), GLOW_BLUR, GLOW_PADDING, GlowKind, paint(), SIZES, textures (+18 more)

### Community 101 - "Core Concepts"
Cohesion: 0.18
Nodes (11): Container vs leaf (CRITICAL), Core Concepts, Culling, Destroy semantics, Lifecycle events, Masking, Render groups, Render order and explicit z-ordering (+3 more)

### Community 102 - "Render Loop"
Cohesion: 0.12
Nodes (15): API Reference, Common Mistakes, Core Patterns, [CRITICAL] Treating the ticker callback arg as a number, Frame lifecycle, Frame rate capping, [HIGH] Using `updateTransform` for per-frame logic, Manual rendering (+7 more)

### Community 103 - "pixijs-core-concepts/SKILL.md"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, Decision guide, Environments, [HIGH] Accessing app.renderer before init() resolves, [HIGH] Setting DOMAdapter after Application.init, [MEDIUM] Treating `preference` as a guarantee, Quick concepts (+4 more)

### Community 104 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, concurrently, @faker-js/faker, nodemon, ts-node, tsx, @types/compression, @types/cors (+5 more)

### Community 105 - "Common Mistakes"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, [CRITICAL] App destroy without releaseGlobalResources, [HIGH] Destroying and recreating objects instead of recycling, [HIGH] Interleaving object types in scene graph, [HIGH] Loading many individual textures instead of spritesheets, [HIGH] Updating Text or HTMLText every frame, [HIGH] Using complex Graphics instead of textures (+4 more)

### Community 106 - "memberPresentation.ts"
Cohesion: 0.23
Nodes (10): CloudinaryTransformations, getPhotoUrlAsAvatar(), getPhotoUrlAsRoundAvatar(), RecruitmentTerm, formatMemberRecruitmentSeason(), formatRecruitmentTerm(), getMemberSeasonAccent(), getTermAccent() (+2 more)

### Community 107 - "selfService.ts"
Cohesion: 0.12
Nodes (24): ApiError, errorMessage(), ErrorParams, fetchMyMemberSuggestions(), fetchMyTeamSuggestions(), PendingSuggestion, photoBody(), postChanges() (+16 more)

### Community 108 - "ref_vitest"
Cohesion: 0.11
Nodes (15): EMPTY_FILTER_STATE, MENTOR_STATUSES, initialFiltersState, MemberStatus, Alumni, Baby, Full, Observer (+7 more)

### Community 109 - "PhotoViewer.tsx"
Cohesion: 0.20
Nodes (19): clampAxis(), clampOffset(), clampScale(), coverMorph, fitRect(), FULL_CLIP, MAX_SCALE, MIN_SCALE (+11 more)

### Community 110 - "migrateMembersFromMongodb.ts"
Cohesion: 0.07
Nodes (31): mongodb, ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember, STATUSES_MAP (+23 more)

### Community 111 - "ActivityState"
Cohesion: 0.13
Nodes (17): Props, Props, getRecruitmentTerm(), getYearOnlyJoinYear(), isJoinYearOnly(), FilterCategoryKey, ActivityState, Active (+9 more)

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

### Community 113 - "Toolbar.tsx"
Cohesion: 0.12
Nodes (23): FilterCategoryRail(), FiltersFooter(), FiltersPanel(), Props, FilterCategoryPane(), SELF_SCROLLING_PANES, useDraftFilterCount(), ToolbarPanel() (+15 more)

### Community 114 - "MemberSuggestForm.tsx"
Cohesion: 0.17
Nodes (31): AddMemberForm(), buildMemberFormData(), ClearButton(), SubmitButton(), describeSubmitError(), EditMemberForm(), Props, buildEditPayload() (+23 more)

### Community 115 - "fakeIdentity.ts"
Cohesion: 0.27
Nodes (7): @faker-js/faker, createIdentityFactory(), firstFree(), OPERATOR_CODES, none, MAP, translit()

### Community 116 - "pixijs-scene-core-concepts/SKILL.md"
Cohesion: 0.14
Nodes (12): API Reference, Common Mistakes, [CRITICAL] Adding children to a leaf display object, [CRITICAL] Referencing DisplayObject, [HIGH] Forgetting isRenderGroup on large static subtrees, [HIGH] Treating child.x as world space, Leaf comparison: which skill covers which object, [MEDIUM] sortableChildren without zIndex (+4 more)

### Community 117 - "opengraph-image.tsx"
Cohesion: 0.24
Nodes (6): alt, contentType, OpengraphImage(), read(), size, { html }

### Community 118 - "pixijs/SKILL.md"
Cohesion: 0.12
Nodes (14): API Reference, Common Mistakes, [HIGH] buttonMode removed; use cursor, [HIGH] Default eventMode is passive, [HIGH] Move events only fire over the object in v8, [MEDIUM] Cursor does not inherit from parent, Quick Start, Advanced (+6 more)

### Community 119 - "Messages"
Cohesion: 0.20
Nodes (8): memberForm, memberForms, search, formatCount(), plural(), PluralForms, en, uk

### Community 120 - "membersStore.ts"
Cohesion: 0.16
Nodes (17): zustand, membersActions, {
  setMembers,
  reloadMembers,
  addMember,
  updateMember,
  selectMember,
  getMentorsList,
}, useMembersList(), useMembersMap(), useMentees(), useSelectedId(), useSelectedMember() (+9 more)

### Community 121 - "seedQuestions.ts"
Cohesion: 0.50
Nodes (4): answerMatches(), CYRILLIC_TO_LATIN, normalizeAnswer(), DEMO_QUESTIONS

### Community 122 - "settingsStore.ts"
Cohesion: 0.20
Nodes (14): writeLocaleCookie(), LOCALE_COOKIE, LocaleProvider(), DEFAULT_SETTINGS, LocaleState, readLegacyTheme(), SETTINGS_STORAGE_KEY, SettingsActions (+6 more)

### Community 123 - "pixijs/SKILL.md"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, Constructor options, [CRITICAL] Using lineStyle instead of stroke, [CRITICAL] Using old shape method names, [CRITICAL] Using v7 beginFill/drawRect/endFill, [HIGH] Clearing and redrawing Graphics every frame, [HIGH] Destroying a shared GraphicsContext unexpectedly (+4 more)

### Community 124 - "importAllowedEmails.ts"
Cohesion: 0.19
Nodes (12): AllowedRow, AllowlistDiff, diffAllowlist(), looksLikeEmail(), parseAllowlistCsv(), ParsedAllowlist, splitLine(), apply (+4 more)

### Community 125 - "http"
Cohesion: 0.11
Nodes (35): addMember(), toApiError(), deleteMember(), editMember(), FamilyGroupOption, fetchFamilyGroups(), fetchFamilyTree(), fetchMemberById() (+27 more)

### Community 126 - "AccountRoles.tsx"
Cohesion: 0.18
Nodes (17): SessionInfo, put(), refreshProfile(), setFeaturedPosition(), setNameBadge(), AccountRoles(), byLatestYears(), lastYear() (+9 more)

### Community 127 - "NodesLayer.tsx"
Cohesion: 0.47
Nodes (3): nextAdmittedIds(), PROGRESSIVE_CHUNK_SIZE, useProgressiveIds()

### Community 128 - "AccessTab.tsx"
Cohesion: 0.11
Nodes (25): AccessGrant, fetchGrants(), GrantLevel, parse(), removeGrant(), setGrant(), Props, Props (+17 more)

### Community 129 - "GSAP with React"
Cohesion: 0.15
Nodes (12): Best practices, Context-Safe Callbacks, Dependency array, scope, and revertOnUpdate, Do Not, gsap.context() in useEffect (when useGSAP isn't used), GSAP with React, Installation, Learn More (+4 more)

### Community 130 - "emailCodes.ts"
Cohesion: 0.18
Nodes (13): CodeOwner, CodeStore, generateCode(), hashCode(), issueCode(), MAX_CODE_ATTEMPTS, sameHash(), StoredCode (+5 more)

### Community 132 - "hitl-loop.template.sh"
Cohesion: 0.83
Nodes (3): capture(), hitl-loop.template.sh script, step()

### Community 133 - "ref_node_crypto"
Cohesion: 0.47
Nodes (3): createFaceSource(), Options, source()

### Community 134 - "uk/filters.ts"
Cohesion: 0.33
Nodes (5): familyForms, filters, memberForms, roleForms, teamForms

### Community 135 - "en/errors.ts"
Cohesion: 0.50
Nodes (3): errors, Params, platformLabels

### Community 137 - "GSAP Performance"
Cohesion: 0.17
Nodes (11): Batch Reads and Writes, Best practices, Do Not, Frequently updated properties (e.g. mouse followers), GSAP Performance, Many Elements (Stagger, Lists), Prefer Transform and Opacity, Reduce Simultaneous Work (+3 more)

### Community 138 - "GSAP Timeline"
Cohesion: 0.17
Nodes (11): Controlling Playback, Creating a Timeline, Do Not, GSAP Timeline, Labels, Nesting Timelines, Official GSAP Best practices, Position Parameter (+3 more)

### Community 139 - "CodeForm.tsx"
Cohesion: 0.31
Nodes (10): verifyEmailCode(), applyDigits(), backspaceAt(), CODE_LENGTH, Edit, emptyDigits(), isComplete(), CodeForm() (+2 more)

### Community 140 - "uk/errors.ts"
Cohesion: 0.50
Nodes (3): errors, Params, platformLabels

### Community 142 - "constants/filters.ts"
Cohesion: 0.13
Nodes (17): ACTIVITY_ICONS, IconComponent, IconProps, greenPillIcon(), IconProps, MemberPane(), PillGroupFilterSection(), GENDER_ICONS (+9 more)

### Community 143 - "Core Patterns"
Cohesion: 0.15
Nodes (13): Container events, Transform, Add, remove, swap, Child queries, Core Patterns, Destroying sub-trees, Iterating children, Label-based tree navigation (+5 more)

### Community 144 - "checkConfig.ts"
Cohesion: 0.07
Nodes (36): RFC-2045, RFC-2047, assertConfig(), configProblems(), databaseName(), demoProblems(), Env, googleProblems() (+28 more)

### Community 145 - "BEST Family Tree"
Cohesion: 0.25
Nodes (7): BEST Family Tree, Contributions, Language, People, Sign-in, Teams, Views

### Community 146 - "TeamTypeFormContent.tsx"
Cohesion: 0.08
Nodes (41): Props, RoleForm(), Props, TeamForm(), Props, TeamTile(), Props, TeamTypeForm() (+33 more)

### Community 147 - "useTeamTypeForm.ts"
Cohesion: 0.29
Nodes (7): buildTeamTypeFormData(), Callbacks, EMPTY_FORM, keepCount(), toFormData(), useTeamTypeForm(), isSameFormData()

### Community 148 - "PositionFormFields.tsx"
Cohesion: 0.13
Nodes (32): FieldError(), PositionAssignmentFields(), Props, PositionFormFields(), Props, createEmptyPositionRow(), EMPTY_POSITION_ROW, findTeamByName() (+24 more)

### Community 151 - "Common Mistakes"
Cohesion: 0.20
Nodes (9): Renderer selection at runtime, API Reference, Common Mistakes, [CRITICAL] Adding children to leaf scene objects, [HIGH] Using cacheAsBitmap instead of cacheAsTexture, [MEDIUM] Setting both pivot and origin on the same container, [MEDIUM] Using container.name instead of container.label, Quick Start (+1 more)

### Community 152 - "piiCheck.ts"
Cohesion: 0.38
Nodes (8): DemoValues, findLeaks(), lowerSet(), norm(), normalizeSocial(), RealValues, clean, real

### Community 153 - "EmailForm.tsx"
Cohesion: 0.47
Nodes (4): AuthMessage(), Props, EmailForm(), Props

## Knowledge Gaps
- **45 isolated node(s):** `@prisma/client`, `dotenv`, `lodash`, `pixi-filters`, `@tailwindcss/postcss` (+40 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1102 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `AccessTab.tsx`, `TeamFrame`, `Member`, `MembersTreeDynamic.tsx`, `useDashedPathAnimation.ts`, `bakeParams.ts`, `CodeForm.tsx`, `SeasonMotif.tsx`, `constants/filters.ts`, `TeamTypeFormContent.tsx`, `filterSearchParams.ts`, `AccountForm.tsx`, `PositionFormFields.tsx`, `useTeamTypeForm.ts`, `src/types/index.ts`, `useTreeLayout.ts`, `EmailForm.tsx`, `MembersTab.tsx`, `Sidebar.tsx`, `TeamLogo.tsx`, `MemberSuggestFields.tsx`, `inputs/index.ts`, `package.json`, `utils/membersTree/index.ts`, `settingsStore.ts`, `useTreeStore`, `FitViewButton.tsx`, `SuggestionsTab.tsx`, `useTeamForm.ts`, `Member`, `PositionBadge.tsx`, `hooks/index.ts`, `pixi.js`, `useCardAnimation.ts`, `constants/canvas/index.ts`, `FilterState`, `YearRangeFilterSection.tsx`, `api/auth.ts`, `useLocale`, `ui/index.ts`, `displayName.ts`, `SignIn.tsx`, `PhotoViewer.tsx`, `useCanvasTheme.ts`, `treeStore.ts`, `dimensions.ts`, `selfService.ts`, `PhotoViewer.tsx`, `Toolbar.tsx`, `MemberSuggestForm.tsx`, `membersStore.ts`, `settingsStore.ts`, `http`, `AccountRoles.tsx`, `NodesLayer.tsx`?**
  _High betweenness centrality (0.106) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _45 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `uk/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.08108108108108109 - nodes in this community are weakly interconnected._
- **Why does `filters()` connect `filterTeams.ts` to `filterSearchParams.ts`, `pixijs/SKILL.md`?**
  _High betweenness centrality (0.076) - this node is a cross-community bridge._
- **Should `TeamFrame` be split into smaller, more focused modules?**
  _Cohesion score 0.09219858156028368 - nodes in this community are weakly interconnected._
- **Why does `Constructor options` connect `pixijs/SKILL.md` to `filterTeams.ts`?**
  _High betweenness centrality (0.054) - this node is a cross-community bridge._
- **Should `Member` be split into smaller, more focused modules?**
  _Cohesion score 0.09388335704125178 - nodes in this community are weakly interconnected._