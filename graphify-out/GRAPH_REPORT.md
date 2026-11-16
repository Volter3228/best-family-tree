# Graph Report - best-family-tree  (2026-11-16)

## Corpus Check
- 576 files · ~183,867 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 29 file(s) not represented in the graph (top: .prisma 9, (none) 7, .css 6)

## Summary
- 2841 nodes · 7324 edges · 129 communities (122 shown, 7 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 84 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ae2975eb`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- eligibility.ts
- MemberBirthdayAnimation.tsx
- sessions.ts
- models/index.ts
- constants/canvas/index.ts
- teamBlock.ts
- layout.tsx
- http
- TeamFormContent.tsx
- teamLayout.ts
- teamFrame.ts
- DatesPane.tsx
- anonymizeDemo.ts
- MemberNodeCard.tsx
- backfillGender.ts
- pixi.js
- EditMemberForm.tsx
- MembersTreeContent.tsx
- TeamFrame
- catalogValidation.ts
- ref_vitest
- HTML Report Format
- utils/membersTree/index.ts
- SettingsPanel.tsx
- teamService.ts
- GroupedCheckListFilter.tsx
- compilerOptions
- compilerOptions
- ManageForm.tsx
- filterMembers.ts
- dependencies
- server/package.json
- MemberFormFields.tsx
- Common Mistakes
- FilterState
- Common Mistakes
- package.json
- Member
- @heroicons/react
- utils/membersTree/index.ts
- Core Patterns
- devDependencies
- Member
- oidc.ts
- CLAUDE.md
- Container Hierarchy
- Core Patterns
- useTreeLayout.ts
- During the session
- TeamInfoSidebar.tsx
- ThemeContext.tsx
- AGENTS.md
- scripts
- pixijs/SKILL.md
- BEST Family Tree
- next.config.mjs
- postcss.config.mjs
- useTeamForm.ts
- MemberInfoActions.tsx
- Core Patterns
- emailCodes.ts
- checkConfig.ts
- src/index.ts
- AvatarFileInput.tsx
- memberService.ts
- BEST Family Tree
- Diagnosing Bugs
- memberFormValidation.ts
- ApplicationOptions reference
- access.ts
- FiltersPanel.tsx
- Core Patterns
- Core Patterns
- dependencies
- scripts
- TeamSearch.tsx
- SignIn.tsx
- CodeForm.tsx
- Core Patterns
- Core Patterns
- Core Patterns
- MemberPane.tsx
- ref_vitest
- Core Patterns
- Constructor options (Container-inherited)
- Test-Driven Development
- GSAP Core
- Core Patterns
- FilterState
- Foundations
- Toolbar.tsx
- Sidebar.tsx
- Core Concepts
- FitViewButton.tsx
- AccountForm.tsx
- backup-prod.sh
- start-prod.sh
- restore-local.sh
- src_types_index_memberstatus
- react
- MemberSidebarContent.tsx
- src/types/index.ts
- Render Loop
- pixijs-core-concepts/SKILL.md
- addMember.ts
- MemberPosition
- MemberInfo.tsx
- NodesLayer.tsx
- auth.ts
- PhotoViewer.tsx
- server/src/types/index.ts
- searchShortcut.ts
- Renderers: WebGPU, WebGL, and Canvas
- Core Patterns
- useMembersStore
- Common Mistakes
- pixijs-scene-core-concepts/SKILL.md
- Core Patterns
- BrandSpinner.tsx
- clientInstance.ts
- memberPresentation.ts
- Common Mistakes
- useCardAnimation.ts
- GSAP with React
- hitl-loop.template.sh
- GSAP Performance
- GSAP Timeline

## God Nodes (most connected - your core abstractions)
1. `react` - 135 edges
2. `AccentColor` - 129 edges
3. `tailwind-merge` - 74 edges
4. `Member` - 69 edges
5. `COLOR_CLASSES` - 46 edges
6. `TeamFrame` - 40 edges
7. `@heroicons/react` - 38 edges
8. `pixi.js` - 38 edges
9. `FilterState` - 38 edges
10. `useTreeStore` - 32 edges

## Surprising Connections (you probably didn't know these)
- `pixijs-scene-container` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs/references/index.md → src/hooks/membersTree/animations/useFitViewAnimation.ts
- `Finding and removing from parent` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs-scene-container/SKILL.md → src/hooks/membersTree/animations/useFitViewAnimation.ts
- `Transform properties` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs-scene-container/SKILL.md → src/hooks/membersTree/animations/useFitViewAnimation.ts
- `Constructor options` --references--> `filters()`  [INFERRED]
  .agents/skills/pixijs-scene-graphics/SKILL.md → src/utils/filters/filterMembers.test.ts
- `Bounds and coordinate conversion` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs-scene-container/SKILL.md → src/hooks/membersTree/animations/useFitViewAnimation.ts

## Import Cycles
- 3-file cycle: `src/utils/index.ts -> src/utils/membersTree/index.ts -> src/utils/membersTree/lineageEdgePath.ts -> src/utils/index.ts`
- 4-file cycle: `src/context/ThemeContext.tsx -> src/hooks/index.ts -> src/hooks/membersTree/index.ts -> src/hooks/membersTree/useCanvasTheme.ts -> src/context/ThemeContext.tsx`
- 4-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/members.ts -> src/models/index.ts -> src/models/Member.ts`
- 4-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/tree.ts -> src/models/index.ts -> src/models/Member.ts`
- 5-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/filters.ts -> src/types/members.ts -> src/models/index.ts -> src/models/Member.ts`

## Communities (129 total, 7 thin omitted)

### Community 0 - "eligibility.ts"
Cohesion: 0.16
Nodes (17): EligibilityMember, EmailIdentity, MemberMatch, normalizeEmail(), resolveEmailIdentity(), resolveMemberMatch(), loadEmailIdentity(), decideGoogleSignIn() (+9 more)

### Community 1 - "MemberBirthdayAnimation.tsx"
Cohesion: 0.35
Nodes (8): BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props, acquireEmojiTextures(), createEmojiTexture(), generateRandomPosition(), releaseEmojiTextures()

### Community 2 - "sessions.ts"
Cohesion: 0.09
Nodes (38): authSecret(), isDemoMode(), isProduction(), QUESTIONS_SHOWN, SESSION_COOKIE, SESSION_TTL_MS, SIGN_IN_COOKIE, useSecureCookie() (+30 more)

### Community 3 - "models/index.ts"
Cohesion: 0.18
Nodes (14): changesStructure(), EMPTY_INDEX, isSamePosition(), MembersActions, MembersState, withIndex(), ChildrenMap, MemberMetrics (+6 more)

### Community 4 - "constants/canvas/index.ts"
Cohesion: 0.10
Nodes (23): lineageEdgePath, ACCIDENTAL_DRAG_MAX_DISTANCE, ACCIDENTAL_DRAG_MAX_MS, LONG_PRESS_MS, TAP_MOVE_TOLERANCE, FONT_FAMILY, NODE_SUBTITLE_STYLE, NODE_TITLE_STYLE (+15 more)

### Community 5 - "teamBlock.ts"
Cohesion: 0.18
Nodes (16): TEAM_COLUMN_GAP, TEAM_FRAME_HEADER, TEAM_FRAME_MIN_WIDTH, TEAM_FRAME_PADDING, TEAM_LAYOUT_COLUMNS, TEAM_LEADER_GAP, TEAM_MULTI_LEADER_EXTRA_GAP, TEAM_ROW_GAP (+8 more)

### Community 6 - "layout.tsx"
Cohesion: 0.07
Nodes (35): react-datepicker, metadata, nunito, RootLayout(), AuroraBackground(), darkTheme, DEFAULT_THEME, lightTheme (+27 more)

### Community 7 - "http"
Cohesion: 0.13
Nodes (23): editMember(), FamilyGroupOption, fetchFamilyGroups(), fetchMemberById(), fetchMentorsList(), createRole(), createTeamType(), fetchRoles() (+15 more)

### Community 8 - "TeamFormContent.tsx"
Cohesion: 0.08
Nodes (49): ClearButton(), Props, SubmitButton(), ConfirmDeleteControl(), Props, PositionAssignmentFields(), Props, PositionFormFields() (+41 more)

### Community 9 - "teamLayout.ts"
Cohesion: 0.08
Nodes (38): elkjs, TEAM_FRAME_GAP, TEAM_PACK_ASPECT, failOver(), getWorker(), Pending, requestLayout(), runInline() (+30 more)

### Community 10 - "teamFrame.ts"
Cohesion: 0.08
Nodes (50): @pixi/react, Props, TeamBadge(), FILL_ALPHA, lerp(), Props, STROKE_ALPHA, TeamFrame() (+42 more)

### Community 11 - "DatesPane.tsx"
Cohesion: 0.18
Nodes (12): FlowerIcon(), Props, MapleLeafIcon(), Props, Placement, PLACEMENTS, Props, SeasonMotif() (+4 more)

### Community 12 - "anonymizeDemo.ts"
Cohesion: 0.06
Nodes (36): @faker-js/faker, allowed, args, byId, factory, GROUP_NAMES, memberPhotos, nextFace (+28 more)

### Community 13 - "MemberNodeCard.tsx"
Cohesion: 0.09
Nodes (33): contexts, getCardBackgroundContext(), getGlowTexture(), GLOW_BLUR, GLOW_PADDING, GlowKind, paint(), SIZES (+25 more)

### Community 14 - "backfillGender.ts"
Cohesion: 0.12
Nodes (16): row(), alreadyDifferent, alreadySame, APPLY, args, duplicates, fileArg, Gender (+8 more)

### Community 15 - "pixi.js"
Cohesion: 0.06
Nodes (32): @gsap/react, pixi.js, AVATAR_HIT_AREA, getCullArea(), MemberNode(), NODE_HIT_AREA, NODE_PIVOT, MemberNodeAvatar() (+24 more)

### Community 16 - "EditMemberForm.tsx"
Cohesion: 0.22
Nodes (18): AddMemberForm(), buildMemberFormData(), describeSubmitError(), EditMemberForm(), getInitialFormData(), MemberFormFields(), FormError(), ButtonProps (+10 more)

### Community 17 - "MembersTreeContent.tsx"
Cohesion: 0.26
Nodes (12): EVENT_FEATURES, MembersTreeContent(), Props, ViewportCulling(), useMembersActions(), useFilterSearchParams(), useSyncMembers(), useTeamSelection() (+4 more)

### Community 18 - "TeamFrame"
Cohesion: 0.11
Nodes (28): Props, Props, drawLerped(), drawPolyline(), Props, TeamEdgesLayer(), Props, TeamFramesLayer() (+20 more)

### Community 19 - "catalogValidation.ts"
Cohesion: 0.07
Nodes (34): Renderer selection at runtime, [MEDIUM] Using container.name instead of container.label, deleteCloudinaryImage(), extractCloudinaryPublicId(), parsePositionsPayload(), TEAM_INCLUDE, router, uploadTeamIcon (+26 more)

### Community 20 - "ref_vitest"
Cohesion: 0.14
Nodes (20): answerMatches(), CYRILLIC_TO_LATIN, normalizeAnswer(), ChallengeState, isExpired(), isSolved(), pickRandom(), swapQuestion() (+12 more)

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "utils/membersTree/index.ts"
Cohesion: 0.11
Nodes (29): LineageEdge(), DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN, MIN_ANIM_DURATION, PATTERN_LEN, RETRACT_BASE (+21 more)

### Community 23 - "SettingsPanel.tsx"
Cohesion: 0.14
Nodes (14): FamilyTreeIcon(), Props, EDGE_STYLE_OPTIONS, iconClass, ORIENTATION_OPTIONS, THEME_OPTIONS, TREE_MODE_OPTIONS, Props (+6 more)

### Community 24 - "teamService.ts"
Cohesion: 0.12
Nodes (29): ResolvedPosition, resolvePosition(), MemberTransaction, assertCanEditMembers(), deleteMember(), deriveTeamName(), resolveRole(), resolveTeam() (+21 more)

### Community 25 - "GroupedCheckListFilter.tsx"
Cohesion: 0.19
Nodes (15): CheckBox(), Props, byLabel(), CheckListFilter(), CheckOption, Props, useStableOrder(), CheckRow() (+7 more)

### Community 26 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, esModuleInterop, forceConsistentCasingInFileNames, module, moduleResolution, noImplicitAny, outDir, paths (+12 more)

### Community 27 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+12 more)

### Community 28 - "ManageForm.tsx"
Cohesion: 0.16
Nodes (20): DropdownSelectInput(), ManageForm(), MemberMode, Props, Section, SECTIONS, TEAM_KINDS, TeamKind (+12 more)

### Community 29 - "filterMembers.ts"
Cohesion: 0.15
Nodes (27): birthdayBoundKey(), countActiveFilters(), countActiveMemberFilters(), isFilterActive(), isIdListSet(), isListFilterSet(), matchesBirthday(), matchesFamilyGroup() (+19 more)

### Community 30 - "dependencies"
Cohesion: 0.11
Nodes (19): dependencies, date-fns, dotenv, elkjs, gsap, @gsap/react, @heroicons/react, lodash (+11 more)

### Community 31 - "server/package.json"
Cohesion: 0.06
Nodes (30): cloudinary, compression, concurrently, cors, helmet, multer, multer-storage-cloudinary, nodemon (+22 more)

### Community 32 - "MemberFormFields.tsx"
Cohesion: 0.14
Nodes (19): GLOW, Props, FieldError(), Props, GENDER_OPTIONS, GenderFormField(), Props, Props (+11 more)

### Community 33 - "Common Mistakes"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, [CRITICAL] App destroy without releaseGlobalResources, [HIGH] Destroying and recreating objects instead of recycling, [HIGH] Interleaving object types in scene graph, [HIGH] Loading many individual textures instead of spritesheets, [HIGH] Updating Text or HTMLText every frame, [HIGH] Using complex Graphics instead of textures (+4 more)

### Community 34 - "FilterState"
Cohesion: 0.16
Nodes (17): BirthdayFilterSection(), ClearButton(), FilterCheckbox(), Props, JoinYearFilterSection(), Props, RangeInputs(), RangeSlot (+9 more)

### Community 35 - "Common Mistakes"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, Constructor options, [CRITICAL] Using lineStyle instead of stroke, [CRITICAL] Using old shape method names, [CRITICAL] Using v7 beginFill/drawRect/endFill, [HIGH] Clearing and redrawing Graphics every frame, [HIGH] Destroying a shared GraphicsContext unexpectedly (+4 more)

### Community 36 - "package.json"
Cohesion: 0.10
Nodes (19): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+11 more)

### Community 37 - "Member"
Cohesion: 0.19
Nodes (9): Props, Props, Props, Props, Props, Member, RecruitmentTerm, generateGoogleCalendarLink() (+1 more)

### Community 38 - "@heroicons/react"
Cohesion: 0.17
Nodes (17): @heroicons/react, DropdownMenu(), Props, PositionRowHeader(), Props, ComboboxInput(), Props, ComboboxInputField() (+9 more)

### Community 39 - "utils/membersTree/index.ts"
Cohesion: 0.08
Nodes (39): EdgesLayer(), NODE_AVATAR_RADIUS, TEAM_EDGE_DROP, TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_SPREAD_WIDTH, TEAM_EDGE_STUB, TEAM_HUB_OFFSET, TEAM_NODE_VISUAL_HEIGHT (+31 more)

### Community 40 - "Core Patterns"
Cohesion: 0.06
Nodes (35): Adding and removing children, API Reference, Bounds and coordinate conversion, Common Mistakes, Core Patterns, [CRITICAL] Adding children to leaf scene objects, Destroy, Finding and removing from parent (+27 more)

### Community 41 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+5 more)

### Community 42 - "Member"
Cohesion: 0.17
Nodes (15): fetchFamilyTree(), Home(), loadTree(), MembersTree(), Props, isTreeReady(), MembersTree, MembersTreeDynamic() (+7 more)

### Community 43 - "oidc.ts"
Cohesion: 0.14
Nodes (21): Container events, Transform, Lifecycle events, Origin (new in v8), openid-client, callbackErrorRedirect(), configs, cookieOptions() (+13 more)

### Community 44 - "CLAUDE.md"
Cohesion: 0.25
Nodes (7): Commands, Conventions, Deployment & data, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout

### Community 45 - "Container Hierarchy"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, Container Hierarchy, [CRITICAL] Adding children to a leaf, [HIGH] Destroying the parent without `children: true`, [MEDIUM] Mutating `children` during iteration, Quick Start

### Community 46 - "Core Patterns"
Cohesion: 0.12
Nodes (15): API Reference, Application properties, Common Mistakes, Core Patterns, [CRITICAL] Passing options to the constructor, CullerPlugin (opt-in), Custom Application plugins, [HIGH] Using app.view instead of app.canvas (+7 more)

### Community 47 - "useTreeLayout.ts"
Cohesion: 0.10
Nodes (26): MembersTreeScene(), useSceneTransition(), useTreeLayout(), DEFAULT_NODE_HEIGHT, DEFAULT_NODE_WIDTH, DEFAULT_POSITION, FLOW_VIEWPORT_DIRECTION, getNodePositions() (+18 more)

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "TeamInfoSidebar.tsx"
Cohesion: 0.27
Nodes (11): MemberSidebar(), TeamInfoSidebar(), HeaderChip(), SeasonChip(), Props, SidebarMinimizedSummary(), canEdit(), formatMemberRecruitmentSeason() (+3 more)

### Community 50 - "ThemeContext.tsx"
Cohesion: 0.21
Nodes (13): useIsMobileScreen(), useResolvedDirection(), useMediaQuery(), DEFAULT_SETTINGS, readLegacyTheme(), SETTINGS_STORAGE_KEY, SettingsActions, SettingsState (+5 more)

### Community 51 - "AGENTS.md"
Cohesion: 0.25
Nodes (7): Commands, Conventions, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout, This is NOT the Next.js you know

### Community 52 - "scripts"
Cohesion: 0.20
Nodes (10): scripts, build, db:backup-prod, db:restore-local, dev, dev:webpack, lint, start (+2 more)

### Community 53 - "pixijs/SKILL.md"
Cohesion: 0.12
Nodes (14): API Reference, Common Mistakes, [HIGH] buttonMode removed; use cursor, [HIGH] Default eventMode is passive, [HIGH] Move events only fire over the object in v8, [MEDIUM] Cursor does not inherit from parent, Quick Start, Advanced (+6 more)

### Community 54 - "BEST Family Tree"
Cohesion: 0.33
Nodes (5): BEST Family Tree, People, Sign-in, Teams, Views

### Community 57 - "useTeamForm.ts"
Cohesion: 0.24
Nodes (17): createTeam(), deleteTeam(), fetchTeamDetails(), parse(), setTeamMembers(), TeamMemberPayload, updateTeam(), buildTeamRequestBody() (+9 more)

### Community 58 - "MemberInfoActions.tsx"
Cohesion: 0.23
Nodes (12): FacebookIcon(), FacebookGlyph(), InstagramGlyph(), LinkedinGlyph(), svgProps, TelegramGlyph(), InstagramIcon(), LinkedinIcon() (+4 more)

### Community 59 - "Core Patterns"
Cohesion: 0.12
Nodes (17): Application destroy/recreate cycle, Batching optimization, cacheAsTexture for performance, Core Patterns, Culling, Filters and masks cost, Graphics performance, Low-level rendering optimizations (+9 more)

### Community 60 - "emailCodes.ts"
Cohesion: 0.06
Nodes (33): AllowedRow, AllowlistDiff, diffAllowlist(), looksLikeEmail(), parseAllowlistCsv(), ParsedAllowlist, splitLine(), CODE_TTL_MS (+25 more)

### Community 61 - "checkConfig.ts"
Cohesion: 0.07
Nodes (36): RFC-2045, RFC-2047, assertConfig(), configProblems(), databaseName(), demoProblems(), Env, googleProblems() (+28 more)

### Community 62 - "src/index.ts"
Cohesion: 0.10
Nodes (22): express, express-rate-limit, sessionFromRequest(), app, checkOrigin(), WRITE_METHODS, requireSession(), router (+14 more)

### Community 63 - "AvatarFileInput.tsx"
Cohesion: 0.19
Nodes (10): next, LionIcon(), Props, AvatarFileInput(), Props, Props, config, exceedsUploadLimit() (+2 more)

### Community 64 - "memberService.ts"
Cohesion: 0.09
Nodes (35): zod, buildMemberFields(), buildMemberUpdateFields(), buildSharedFields(), buildSparseMemberFields(), parsePhoneNumbers(), getPositionKey(), syncPositions() (+27 more)

### Community 65 - "BEST Family Tree"
Cohesion: 0.11
Nodes (18): 1. Clone and configure environment, 2. Start the application, 3. Run database migrations, 4. Access the app, Architecture, Available Commands, Backend Commands (run inside container), Backups (+10 more)

### Community 66 - "Diagnosing Bugs"
Cohesion: 0.13
Nodes (14): Completion criterion: a tight loop that goes red, Diagnosing Bugs, Minimise, Non-deterministic bugs, Phase 1: Build a feedback loop, Phase 2: Reproduce + minimise, Phase 3: Hypothesise, Phase 4: Instrument (+6 more)

### Community 67 - "memberFormValidation.ts"
Cohesion: 0.18
Nodes (14): CheckedField, getStoredFieldValues(), Links, StoredMemberValues, complete, mentors, sparse, toTime() (+6 more)

### Community 68 - "ApplicationOptions reference"
Cohesion: 0.12
Nodes (17): Accessibility, ApplicationOptions reference, Background, Culler (CullerPluginOptions), Deprecated (GC — prefer the unified options above), Events, Garbage collection, Graphics (+9 more)

### Community 69 - "access.ts"
Cohesion: 0.22
Nodes (11): canEditMember(), hasAccess(), RANK, CONTACT_FIELDS, AccessRank, Express, Request, Session (+3 more)

### Community 70 - "FiltersPanel.tsx"
Cohesion: 0.13
Nodes (18): CATEGORY_ICONS, FilterCategoryRail(), Props, RailButton(), RailButtonProps, FiltersFooter(), Props, FiltersHeader() (+10 more)

### Community 71 - "Core Patterns"
Cohesion: 0.13
Nodes (14): API Reference, boundsArea optimization, Common Mistakes, Core Patterns, Culling, HIGH: Expecting automatic culling, HIGH: Using addChild on RenderLayer, MEDIUM: Expecting filters on ancestors to apply to layer children (+6 more)

### Community 72 - "Core Patterns"
Cohesion: 0.12
Nodes (14): Advanced shape primitives, Cloning, clearing, and bounds, Core Patterns, Default styles via setFillStyle / setStrokeStyle, Draw-time transforms, Drawing a texture directly, Gradients and patterns, GraphicsContext sharing (+6 more)

### Community 73 - "dependencies"
Cohesion: 0.06
Nodes (30): dependencies, cloudinary, compression, cors, dotenv, express, express-rate-limit, helmet (+22 more)

### Community 74 - "scripts"
Cohesion: 0.12
Nodes (17): scripts, auth:grant, auth:import-emails, auth:preview-email, auth:report-duplicate-contacts, auth:seed-grants, auth:seed-questions, build (+9 more)

### Community 75 - "TeamSearch.tsx"
Cohesion: 0.10
Nodes (29): Props, compare(), getSearchable(), MemberSearch(), Props, Props, SearchBar(), Props (+21 more)

### Community 76 - "SignIn.tsx"
Cohesion: 0.20
Nodes (10): logout(), AuthMessage(), Props, EmailForm(), Props, Method, Props, SignInCard() (+2 more)

### Community 77 - "CodeForm.tsx"
Cohesion: 0.27
Nodes (12): verifyEmailCode(), applyDigits(), backspaceAt(), CODE_LENGTH, Edit, emptyDigits(), isComplete(), CodeForm() (+4 more)

### Community 78 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, attach / detach, Common Mistakes, Core Patterns, [CRITICAL] Using `addChild` on a RenderLayer, [HIGH] Layer and attached children in different render groups, Layer + logical parent, Manual sort (+5 more)

### Community 79 - "Core Patterns"
Cohesion: 0.14
Nodes (13): Alpha mask (Sprite-based), API Reference, Common Mistakes, Core Patterns, [HIGH] Using cacheAsTexture with masks, Inverse masking, Mask channel selection, Mask type selection (+5 more)

### Community 80 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, Common Mistakes, Construction options, Core Patterns, [HIGH] Nesting many render groups, [MEDIUM] Constantly adding/removing from a render group, [MEDIUM] Overusing render groups, Profile before adding (+5 more)

### Community 81 - "MemberPane.tsx"
Cohesion: 0.10
Nodes (24): GENDER_ICONS, IconProps, DatesPane(), PANES, Props, ACTIVITY_PILLS, GENDER_PILLS, MemberPane() (+16 more)

### Community 82 - "ref_vitest"
Cohesion: 0.06
Nodes (41): Constructor options, Effects, date-fns, ACTIVITY_ICONS, IconComponent, IconProps, ACTIVITY_STATES, DATE_PICKER_CLASSES (+33 more)

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

### Community 88 - "FilterState"
Cohesion: 0.11
Nodes (25): Props, Props, Props, useDraftFilterCount(), Props, derive(), FiltersActions, FiltersState (+17 more)

### Community 89 - "Foundations"
Cohesion: 0.13
Nodes (14): Advanced, Foundations, pixijs-application, pixijs-core-concepts, pixijs-events, pixijs-performance, pixijs-scene-container, pixijs-scene-core-concepts (+6 more)

### Community 90 - "Toolbar.tsx"
Cohesion: 0.18
Nodes (14): AccessLevel, fetchSession(), SessionInfo, authStrings, AccountPanel(), Props, DemoBadge(), focusSearchInput() (+6 more)

### Community 91 - "Sidebar.tsx"
Cohesion: 0.18
Nodes (10): Props, Props, Sidebar(), SidebarFooterContext, Props, SidebarHandle(), Props, SidebarHeader() (+2 more)

### Community 92 - "Core Concepts"
Cohesion: 0.18
Nodes (11): Container vs leaf (CRITICAL), Core Concepts, Culling, Destroy semantics, Lifecycle events, Masking, Render groups, Render order and explicit z-ordering (+3 more)

### Community 93 - "FitViewButton.tsx"
Cohesion: 0.30
Nodes (9): FitViewButton(), Props, PanelResetButton(), Props, Props, ToolbarIconButton(), Props, ToolbarTooltip() (+1 more)

### Community 94 - "AccountForm.tsx"
Cohesion: 0.31
Nodes (9): requestEmailCode(), AccountForm(), Props, GoogleButton(), GoogleMark(), Props, ProviderButton(), TelegramButton() (+1 more)

### Community 98 - "src_types_index_memberstatus"
Cohesion: 0.40
Nodes (4): FOUNDER_JOIN_YEAR, MEMBER_STATUSES, MENTOR_STATUSES, getUpdatedMentorsList()

### Community 99 - "react"
Cohesion: 0.14
Nodes (27): @pixi/react, PixiElements, gsap, pixi-viewport, react, Props, Viewport(), NODE_HOVER_ANIMATION_DURATION (+19 more)

### Community 100 - "MemberSidebarContent.tsx"
Cohesion: 0.23
Nodes (6): Props, MemberSidebarContent(), Props, useSidebarSwitchAnimation(), useTeamInfoSidebar(), SidebarMode

### Community 101 - "src/types/index.ts"
Cohesion: 0.11
Nodes (37): tailwind-merge, Props, Props, Props, Props, Props, Props, InfoSection() (+29 more)

### Community 102 - "Render Loop"
Cohesion: 0.22
Nodes (8): API Reference, Common Mistakes, [CRITICAL] Treating the ticker callback arg as a number, Frame lifecycle, [HIGH] Using `updateTransform` for per-frame logic, [MEDIUM] Assuming ticker callbacks run after render, Quick Start, Render Loop

### Community 103 - "pixijs-core-concepts/SKILL.md"
Cohesion: 0.22
Nodes (8): API Reference, Decision guide, Environments, Quick concepts, Quick Start, Renderer = systems + pipes, The render loop, Topics

### Community 104 - "addMember.ts"
Cohesion: 0.38
Nodes (5): addMember(), ApiError, toApiError(), deleteMember(), ENDPOINTS

### Community 105 - "MemberPosition"
Cohesion: 0.25
Nodes (11): Props, MemberPositions(), Props, PositionBadge(), Props, useStackOnOverflow(), MemberPosition, formatYearRange() (+3 more)

### Community 106 - "MemberInfo.tsx"
Cohesion: 0.15
Nodes (21): cache, loadImageAspect(), PhotoOpenButton(), Props, useIsPhotoOpen(), AvatarSkeleton(), MemberAvatarImage(), MemberAvatarImageInner() (+13 more)

### Community 107 - "NodesLayer.tsx"
Cohesion: 0.29
Nodes (6): NodesLayer(), Props, nextAdmittedIds(), PROGRESSIVE_CHUNK_SIZE, useProgressiveIds(), parseTeamNodeId()

### Community 108 - "auth.ts"
Cohesion: 0.17
Nodes (17): AuthMethod, Challenge, ChallengeQuestion, post(), RequestCodeOutcome, startChallenge(), swapQuestion(), verifyAnswers() (+9 more)

### Community 109 - "PhotoViewer.tsx"
Cohesion: 0.10
Nodes (36): react-dom, zustand, DropdownPortal(), Props, PhotoViewer(), thumbRadius(), Viewer(), viewportRect() (+28 more)

### Community 110 - "server/src/types/index.ts"
Cohesion: 0.07
Nodes (30): mongodb, ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember, STATUSES_MAP (+22 more)

### Community 111 - "searchShortcut.ts"
Cohesion: 0.17
Nodes (8): EDITABLE_TAGS, isEditableTarget(), isSearchShortcut(), ShortcutKeys, Keys, Options, Position, useSearchShortcut()

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

### Community 113 - "Core Patterns"
Cohesion: 0.25
Nodes (8): Add, remove, swap, Child queries, Core Patterns, Destroying sub-trees, Iterating children, Label-based tree navigation, Reparenting with transform preservation, Replacing a child

### Community 114 - "useMembersStore"
Cohesion: 0.39
Nodes (7): membersActions, {
  setMembers,
  reloadMembers,
  addMember,
  updateMember,
  selectMember,
  getMentorsList,
}, useMembersMap(), useMentees(), useSelectedId(), useSelectedMember(), useMembersStore

### Community 115 - "Common Mistakes"
Cohesion: 0.33
Nodes (6): Common Mistakes, [CRITICAL] Adding children to a leaf display object, [CRITICAL] Referencing DisplayObject, [HIGH] Forgetting isRenderGroup on large static subtrees, [HIGH] Treating child.x as world space, [MEDIUM] sortableChildren without zIndex

### Community 116 - "pixijs-scene-core-concepts/SKILL.md"
Cohesion: 0.25
Nodes (6): API Reference, Leaf comparison: which skill covers which object, Quick Start, References, Tooling, When to use what (quick decisions)

### Community 117 - "Core Patterns"
Cohesion: 0.29
Nodes (7): Core Patterns, Frame rate capping, Manual rendering, Per-object update via `onRender`, Priority order, Stop and start, Time units

### Community 118 - "BrandSpinner.tsx"
Cohesion: 0.33
Nodes (5): LION_CENTER, LION_SILHOUETTE, LIONS, Props, LION_PATHS

### Community 119 - "clientInstance.ts"
Cohesion: 0.11
Nodes (19): @prisma/adapter-pg, toMemberResponse(), adapter, prisma, loadFamilyTree, loadReducedFamilyTree, serializeMember(), level (+11 more)

### Community 120 - "memberPresentation.ts"
Cohesion: 0.33
Nodes (6): getPhotoUrlAsRoundAvatar(), formatRecruitmentTerm(), getMemberNodeAvatar(), RECRUITMENT_SEASON_ACCENT, RECRUITMENT_SEASON_EMOJI, RECRUITMENT_SEASON_LABEL

### Community 121 - "Common Mistakes"
Cohesion: 0.50
Nodes (4): Common Mistakes, [HIGH] Accessing app.renderer before init() resolves, [HIGH] Setting DOMAdapter after Application.init, [MEDIUM] Treating `preference` as a guarantee

### Community 125 - "useCardAnimation.ts"
Cohesion: 0.14
Nodes (23): CARD_PIVOT, Props, clamp01(), deferCardHidden(), easeBackOut, easePower2In, easePower2Out, entries (+15 more)

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
- **45 isolated node(s):** `@prisma/client`, `dotenv`, `lodash`, `pixi-filters`, `@tailwindcss/postcss` (+40 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1004 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `MemberBirthdayAnimation.tsx`, `constants/canvas/index.ts`, `layout.tsx`, `http`, `TeamFormContent.tsx`, `teamFrame.ts`, `MemberNodeCard.tsx`, `pixi.js`, `EditMemberForm.tsx`, `MembersTreeContent.tsx`, `TeamFrame`, `utils/membersTree/index.ts`, `GroupedCheckListFilter.tsx`, `ManageForm.tsx`, `MemberFormFields.tsx`, `FilterState`, `package.json`, `@heroicons/react`, `Member`, `useTreeLayout.ts`, `TeamInfoSidebar.tsx`, `ThemeContext.tsx`, `useTeamForm.ts`, `AvatarFileInput.tsx`, `FiltersPanel.tsx`, `TeamSearch.tsx`, `SignIn.tsx`, `CodeForm.tsx`, `MemberPane.tsx`, `ref_vitest`, `FilterState`, `Toolbar.tsx`, `Sidebar.tsx`, `FitViewButton.tsx`, `AccountForm.tsx`, `MemberSidebarContent.tsx`, `src/types/index.ts`, `MemberPosition`, `MemberInfo.tsx`, `NodesLayer.tsx`, `auth.ts`, `PhotoViewer.tsx`, `searchShortcut.ts`, `useCardAnimation.ts`?**
  _High betweenness centrality (0.118) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _45 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `sessions.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.08928571428571429 - nodes in this community are weakly interconnected._
- **Why does `filters()` connect `ref_vitest` to `Common Mistakes`?**
  _High betweenness centrality (0.108) - this node is a cross-community bridge._
- **Should `constants/canvas/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.09879032258064516 - nodes in this community are weakly interconnected._
- **Why does `Constructor options` connect `Common Mistakes` to `ref_vitest`?**
  _High betweenness centrality (0.070) - this node is a cross-community bridge._
- **Should `layout.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06636500754147813 - nodes in this community are weakly interconnected._