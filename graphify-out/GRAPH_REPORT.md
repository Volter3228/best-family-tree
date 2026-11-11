# Graph Report - best-family-tree  (2026-11-11)

## Corpus Check
- 494 files · ~166,090 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 28 file(s) not represented in the graph (top: .prisma 9, (none) 6, .css 6)

## Summary
- 2508 nodes · 6319 edges · 119 communities (110 shown, 9 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 64 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `5d1461e5`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- EditMemberForm.tsx
- MemberInfo.tsx
- MembersTreeContent.tsx
- MemberFilterCategory.tsx
- auth.ts
- TeamFormContent.tsx
- MemberNodeAvatar.tsx
- src/index.ts
- PositionFormFields.tsx
- ApplicationOptions reference
- challenges.ts
- TeamSearch.tsx
- anonymizeDemo.ts
- FormFooter.tsx
- PhotoViewer.tsx
- layout.ts
- MemberNode.tsx
- emailRoutes.ts
- filterTeams.ts
- catalogValidation.ts
- Member
- HTML Report Format
- useCardAnimation.ts
- Member
- teamService.ts
- filterSearchParams.ts
- compilerOptions
- compilerOptions
- teamFrame.ts
- react
- dependencies
- server/package.json
- FitViewButton.tsx
- memberService.ts
- FilterState
- useMembersStore
- package.json
- LineageMemberSearch.tsx
- FilterState
- Direction
- Core Patterns
- devDependencies
- ref_vitest
- Core Patterns
- CLAUDE.md
- src/utils/index.ts
- mime.ts
- teamFrame.ts
- During the session
- ManageForm.tsx
- membersStore.ts
- AGENTS.md
- scripts
- piiCheck.ts
- BEST Family Tree
- next.config.mjs
- postcss.config.mjs
- Common Mistakes
- importAllowedEmails.ts
- Core Patterns
- Scene Objects
- useTreeLayout.ts
- Utilities
- types.ts
- MemberFormFields.tsx
- BEST Family Tree
- Diagnosing Bugs
- ref_vitest
- Common Mistakes
- Toolbar.tsx
- teamLayout.ts
- Core Patterns
- Core Patterns
- dependencies
- TeamFilterCategory.tsx
- src/types/index.ts
- scripts
- devDependencies
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
- gsap
- Foundations
- MemberStatus
- pixijs/SKILL.md
- Core Concepts
- proxy.ts
- utils/membersTree/index.ts
- backup-prod.sh
- start-prod.sh
- restore-local.sh
- constants/canvas/index.ts
- checkConfig.ts
- Render Loop
- pixijs-core-concepts/SKILL.md
- Core Patterns
- FiltersPanel.tsx
- server/src/types/index.ts
- Renderers: WebGPU, WebGL, and Canvas
- treeStore.ts
- pixijs-scene-core-concepts/SKILL.md
- Container Hierarchy
- Common Mistakes
- aiFaces.ts
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
- `pixijs-math` --references--> `Point`  [INFERRED]
  .agents/skills/pixijs/references/index.md → src/types/tree.ts
- `Utilities` --references--> `Point`  [INFERRED]
  .agents/skills/pixijs/SKILL.md → src/types/tree.ts
- `Bounds and coordinate conversion` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs-scene-container/SKILL.md → src/hooks/membersTree/animations/useFitViewAnimation.ts
- `Constructor options` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs-scene-container/SKILL.md → src/hooks/membersTree/animations/useFitViewAnimation.ts

## Import Cycles
- 3-file cycle: `src/utils/index.ts -> src/utils/membersTree/index.ts -> src/utils/membersTree/lineageEdgePath.ts -> src/utils/index.ts`
- 4-file cycle: `src/context/ThemeContext.tsx -> src/hooks/index.ts -> src/hooks/membersTree/index.ts -> src/hooks/membersTree/useCanvasTheme.ts -> src/context/ThemeContext.tsx`
- 4-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/members.ts -> src/models/index.ts -> src/models/Member.ts`
- 4-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/tree.ts -> src/models/index.ts -> src/models/Member.ts`
- 5-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/filters.ts -> src/types/members.ts -> src/models/index.ts -> src/models/Member.ts`

## Communities (119 total, 9 thin omitted)

### Community 0 - "EditMemberForm.tsx"
Cohesion: 0.14
Nodes (27): AddMemberForm(), buildMemberFormData(), describeSubmitError(), EditMemberForm(), getInitialFormData(), MemberFormFields(), FormError(), CheckedField (+19 more)

### Community 1 - "MemberInfo.tsx"
Cohesion: 0.14
Nodes (20): MemberAvatarImage(), MemberAvatarImageInner(), Props, MemberInfo(), MemberInfoActionIcon(), MentorMenteesDropdown(), PositionsDropdown(), CloudinaryTransformations (+12 more)

### Community 2 - "MembersTreeContent.tsx"
Cohesion: 0.11
Nodes (27): @pixi/react, EMPTY_IDS, SharpAvatarTracker(), View, Props, Viewport(), ACCENT_COLOR_MAP, EVENT_FEATURES (+19 more)

### Community 3 - "MemberFilterCategory.tsx"
Cohesion: 0.23
Nodes (10): ACTIVITY_OPTIONS, ACTIVITY_STATES, AVATAR_OPTIONS, AVATAR_VALUES, EMPTY_FILTER_STATE, JOIN_SEASONS, MEMBER_STATUSES, SEASON_OPTIONS (+2 more)

### Community 4 - "auth.ts"
Cohesion: 0.07
Nodes (49): AuthMethod, Challenge, ChallengeQuestion, logout(), post(), RequestCodeOutcome, requestEmailCode(), startChallenge() (+41 more)

### Community 5 - "TeamFormContent.tsx"
Cohesion: 0.14
Nodes (28): ClearButton(), ConfirmDeleteControl(), Props, Props, FormFooter(), FormMessages(), ComboboxInput(), FormCheckbox() (+20 more)

### Community 6 - "MemberNodeAvatar.tsx"
Cohesion: 0.09
Nodes (23): MemberNodeAvatar(), Props, AVATAR_HIGH_RES_SIZE, AVATAR_LOW_RES_SIZE, CARD_VIEW_SCALE, GRID_GAP_X, GRID_LR_COLUMNS, MAX_RENDER_RESOLUTION (+15 more)

### Community 7 - "src/index.ts"
Cohesion: 0.08
Nodes (32): express, express-rate-limit, isProduction(), useSecureCookie(), clearSessionCookie(), createSession(), deleteSession(), findSession() (+24 more)

### Community 8 - "PositionFormFields.tsx"
Cohesion: 0.15
Nodes (28): PositionAssignmentFields(), Props, PositionFormFields(), Props, createEmptyPositionRow(), EMPTY_POSITION_ROW, findTeamByName(), getPositionRowSummary() (+20 more)

### Community 9 - "ApplicationOptions reference"
Cohesion: 0.12
Nodes (17): Accessibility, ApplicationOptions reference, Background, Culler (CullerPluginOptions), Deprecated (GC — prefer the unified options above), Events, Garbage collection, Graphics (+9 more)

### Community 10 - "challenges.ts"
Cohesion: 0.10
Nodes (27): answerMatches(), CYRILLIC_TO_LATIN, normalizeAnswer(), ChallengeState, isExpired(), isSolved(), pickRandom(), swapQuestion() (+19 more)

### Community 11 - "TeamSearch.tsx"
Cohesion: 0.12
Nodes (22): LionIcon(), Props, compare(), getSearchable(), MemberSearch(), Props, Props, Props (+14 more)

### Community 12 - "anonymizeDemo.ts"
Cohesion: 0.15
Nodes (10): allowed, args, byId, factory, GROUP_NAMES, memberPhotos, nextFace, real (+2 more)

### Community 13 - "FormFooter.tsx"
Cohesion: 0.29
Nodes (5): react-dom, Props, SidebarFooterContext, Pos, Props

### Community 14 - "PhotoViewer.tsx"
Cohesion: 0.08
Nodes (44): zustand, DropdownPortal(), Props, isTreeReady(), MembersTree, MembersTreeDynamic(), TreeState, cache (+36 more)

### Community 15 - "layout.ts"
Cohesion: 0.15
Nodes (11): NODE_CARD_HEIGHT, DEFAULT_NODE_HEIGHT, DEFAULT_NODE_WIDTH, FLOW_VIEWPORT_DIRECTION, FlowViewportDirection, Position, Bottom, Left (+3 more)

### Community 16 - "MemberNode.tsx"
Cohesion: 0.10
Nodes (24): pixi.js, BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props, acquireEmojiTextures(), createEmojiTexture(), generateRandomPosition() (+16 more)

### Community 17 - "emailRoutes.ts"
Cohesion: 0.08
Nodes (31): authSecret(), isDemoMode(), EligibilityMember, EmailIdentity, normalizeEmail(), resolveEmailIdentity(), CODE_TTL_MS, CodeStore (+23 more)

### Community 18 - "filterTeams.ts"
Cohesion: 0.20
Nodes (18): isFilterActive(), matchesAvatar(), matchesBirthday(), matchesJoinSeason(), matchesJoinYear(), memberMatchesFilters(), parseDateStr(), toDateVal() (+10 more)

### Community 19 - "catalogValidation.ts"
Cohesion: 0.07
Nodes (34): Renderer selection at runtime, [MEDIUM] Using container.name instead of container.label, deleteCloudinaryImage(), extractCloudinaryPublicId(), parsePositionsPayload(), TEAM_INCLUDE, router, uploadTeamIcon (+26 more)

### Community 20 - "Member"
Cohesion: 0.10
Nodes (20): date-fns, NodesLayer(), Props, Props, Props, Props, Member, MemberMetrics (+12 more)

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "useCardAnimation.ts"
Cohesion: 0.18
Nodes (17): clamp01(), easeBackOut, easePower2In, easePower2Out, entries, Entry, finishCardReveal(), registerCardReveal() (+9 more)

### Community 23 - "Member"
Cohesion: 0.16
Nodes (22): DEFAULT_POSITION, MembersState, ChildrenMap, MembersMap, areSetsEqual(), computeFilteredMembers(), Source, transformMembersToFlowValues() (+14 more)

### Community 24 - "teamService.ts"
Cohesion: 0.16
Nodes (24): ResolvedPosition, resolvePosition(), MemberTransaction, deleteMember(), deriveTeamName(), resolveRole(), resolveTeam(), resolveTeamType() (+16 more)

### Community 25 - "filterSearchParams.ts"
Cohesion: 0.22
Nodes (11): Props, filtersToSearchParams(), parseCsvArray(), parseCsvStrings(), parseFiltersFromSearchParams(), parseNumberOrNull(), parseTreeMode(), serializeCsv() (+3 more)

### Community 26 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, esModuleInterop, forceConsistentCasingInFileNames, module, moduleResolution, noImplicitAny, outDir, paths (+12 more)

### Community 27 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+12 more)

### Community 28 - "teamFrame.ts"
Cohesion: 0.07
Nodes (48): Props, TeamBadge(), FILL_ALPHA, lerp(), Props, STROKE_ALPHA, TeamFrame(), Props (+40 more)

### Community 29 - "react"
Cohesion: 0.11
Nodes (19): react, DropdownMenu(), Props, BadgeInput(), Props, BadgeInputField(), Props, useBadgeInputState() (+11 more)

### Community 30 - "dependencies"
Cohesion: 0.11
Nodes (19): dependencies, date-fns, dotenv, elkjs, gsap, @gsap/react, @heroicons/react, lodash (+11 more)

### Community 31 - "server/package.json"
Cohesion: 0.06
Nodes (30): cloudinary, compression, concurrently, cors, helmet, multer, multer-storage-cloudinary, nodemon (+22 more)

### Community 32 - "FitViewButton.tsx"
Cohesion: 0.35
Nodes (7): FitViewButton(), Props, Props, ToolbarIconButton(), Props, ToolbarTooltip(), useHoverTooltip()

### Community 33 - "memberService.ts"
Cohesion: 0.07
Nodes (44): zod, prisma, buildMemberFields(), buildMemberUpdateFields(), buildSharedFields(), buildSparseMemberFields(), parsePhoneNumbers(), getPositionKey() (+36 more)

### Community 34 - "FilterState"
Cohesion: 0.13
Nodes (23): BirthdayFilterSection(), Props, CheckboxGroupFilterSection(), Option, Props, ClearButton(), FilterCheckbox(), Props (+15 more)

### Community 35 - "useMembersStore"
Cohesion: 0.13
Nodes (21): pixijs-scene-gif, Cloning, clearing, and bounds, Props, Props, Props, Props, membersActions, {
  setMembers,
  reloadMembers,
  addMember,
  updateMember,
  selectMember,
  getMentorsList,
} (+13 more)

### Community 36 - "package.json"
Cohesion: 0.11
Nodes (18): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+10 more)

### Community 37 - "LineageMemberSearch.tsx"
Cohesion: 0.29
Nodes (7): LineageFilterSection(), Props, LineageMemberSearch(), Props, matchesQuery(), Options, normalize()

### Community 38 - "FilterState"
Cohesion: 0.17
Nodes (14): FilterGroupProps, Props, Props, Props, Props, FiltersActions, AvatarFilterValue, FilterSectionKey (+6 more)

### Community 39 - "Direction"
Cohesion: 0.16
Nodes (19): LineageEdge(), DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN, MIN_ANIM_DURATION, PATTERN_LEN, RETRACT_BASE (+11 more)

### Community 40 - "Core Patterns"
Cohesion: 0.06
Nodes (38): Adding and removing children, API Reference, Bounds and coordinate conversion, Common Mistakes, Constructor options, Container events, Core Patterns, [CRITICAL] Adding children to leaf scene objects (+30 more)

### Community 41 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+5 more)

### Community 42 - "ref_vitest"
Cohesion: 0.27
Nodes (7): @faker-js/faker, createIdentityFactory(), firstFree(), OPERATOR_CODES, none, MAP, translit()

### Community 43 - "Core Patterns"
Cohesion: 0.12
Nodes (15): API Reference, Application properties, Common Mistakes, Core Patterns, [CRITICAL] Passing options to the constructor, CullerPlugin (opt-in), Custom Application plugins, [HIGH] Using app.view instead of app.canvas (+7 more)

### Community 44 - "CLAUDE.md"
Cohesion: 0.29
Nodes (6): Commands, Conventions, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout

### Community 45 - "src/utils/index.ts"
Cohesion: 0.14
Nodes (14): pixi-filters, Props, NODE_HOVER_ANIMATION_DURATION, NODE_HOVER_SCALE, ZOOMED_OUT_HOVER_SCALE_MAP, calculateTargetScale(), createShadowFilter(), Props (+6 more)

### Community 46 - "mime.ts"
Cohesion: 0.15
Nodes (18): RFC-2045, RFC-2047, consoleMailer, createGmailMailer(), GmailConfig, getMailer(), base64Body(), buildMime() (+10 more)

### Community 47 - "teamFrame.ts"
Cohesion: 0.14
Nodes (23): TEAM_COLUMN_GAP, TEAM_EDGE_DROP, TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_SPREAD_WIDTH, TEAM_EDGE_STUB, TEAM_FRAME_HEADER, TEAM_FRAME_MIN_WIDTH, TEAM_FRAME_PADDING (+15 more)

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "ManageForm.tsx"
Cohesion: 0.15
Nodes (20): DropdownSelectInput(), ManageForm(), MemberMode, Section, SECTIONS, TEAM_KINDS, TeamKind, MemberEditPanel() (+12 more)

### Community 50 - "membersStore.ts"
Cohesion: 0.09
Nodes (39): addMember(), ApiError, toApiError(), deleteMember(), editMember(), fetchFamilyTree(), fetchMemberById(), fetchMentorsList() (+31 more)

### Community 51 - "AGENTS.md"
Cohesion: 0.25
Nodes (7): Commands, Conventions, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout, This is NOT the Next.js you know

### Community 52 - "scripts"
Cohesion: 0.20
Nodes (10): scripts, build, db:backup-prod, db:restore-local, dev, dev:webpack, lint, start (+2 more)

### Community 53 - "piiCheck.ts"
Cohesion: 0.38
Nodes (8): DemoValues, findLeaks(), lowerSet(), norm(), normalizeSocial(), RealValues, clean, real

### Community 54 - "BEST Family Tree"
Cohesion: 0.33
Nodes (5): BEST Family Tree, People, Sign-in, Teams, Views

### Community 57 - "Common Mistakes"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, [CRITICAL] App destroy without releaseGlobalResources, [HIGH] Destroying and recreating objects instead of recycling, [HIGH] Interleaving object types in scene graph, [HIGH] Loading many individual textures instead of spritesheets, [HIGH] Updating Text or HTMLText every frame, [HIGH] Using complex Graphics instead of textures (+4 more)

### Community 58 - "importAllowedEmails.ts"
Cohesion: 0.19
Nodes (12): AllowedRow, AllowlistDiff, diffAllowlist(), looksLikeEmail(), parseAllowlistCsv(), ParsedAllowlist, splitLine(), apply (+4 more)

### Community 59 - "Core Patterns"
Cohesion: 0.12
Nodes (17): Application destroy/recreate cycle, Batching optimization, cacheAsTexture for performance, Core Patterns, Culling, Filters and masks cost, Graphics performance, Low-level rendering optimizations (+9 more)

### Community 60 - "Scene Objects"
Cohesion: 0.25
Nodes (8): pixijs-html-source, pixijs-scene-container, pixijs-scene-dom-container, pixijs-scene-mesh, pixijs-scene-particle-container, pixijs-scene-sprite, pixijs-scene-text, Scene Objects

### Community 61 - "useTreeLayout.ts"
Cohesion: 0.20
Nodes (15): getFitViewTargetScale(), useFitViewAnimation(), useFocusFrameAnimation(), useFocusNodeAnimation(), useViewportAnimation(), useSceneTransition(), useTreeLayout(), refreshNodeMembers() (+7 more)

### Community 62 - "Utilities"
Cohesion: 0.13
Nodes (15): Advanced, pixijs-accessibility, pixijs-assets, pixijs-blend-modes, pixijs-color, pixijs-custom-rendering, pixijs-events, pixijs-filters (+7 more)

### Community 63 - "types.ts"
Cohesion: 0.17
Nodes (13): canEditMember(), hasAccess(), RANK, member(), CONTACT_FIELDS, toMemberResponse(), AccessRank, Express (+5 more)

### Community 64 - "MemberFormFields.tsx"
Cohesion: 0.17
Nodes (13): FacebookIcon(), InstagramIcon(), LinkedinIcon(), TelegramIcon(), FieldError(), Props, Props, SocialMediaFormFields() (+5 more)

### Community 65 - "BEST Family Tree"
Cohesion: 0.12
Nodes (15): 1. Clone and configure environment, 2. Start the application, 3. Run database migrations, 4. Access the app, Architecture, Available Commands, Backend Commands (run inside container), BEST Family Tree (+7 more)

### Community 66 - "Diagnosing Bugs"
Cohesion: 0.13
Nodes (14): Completion criterion: a tight loop that goes red, Diagnosing Bugs, Minimise, Non-deterministic bugs, Phase 1: Build a feedback loop, Phase 2: Reproduce + minimise, Phase 3: Hypothesise, Phase 4: Instrument (+6 more)

### Community 68 - "Common Mistakes"
Cohesion: 0.33
Nodes (6): Common Mistakes, [CRITICAL] Adding children to a leaf display object, [CRITICAL] Referencing DisplayObject, [HIGH] Forgetting isRenderGroup on large static subtrees, [HIGH] Treating child.x as world space, [MEDIUM] sortableChildren without zIndex

### Community 69 - "Toolbar.tsx"
Cohesion: 0.12
Nodes (26): AccessLevel, fetchSession(), SessionInfo, MemberSidebar(), Props, TeamInfoSidebar(), DemoBadge(), SearchBar() (+18 more)

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
Cohesion: 0.12
Nodes (16): dependencies, cloudinary, compression, cors, dotenv, express, express-rate-limit, helmet (+8 more)

### Community 74 - "TeamFilterCategory.tsx"
Cohesion: 0.26
Nodes (10): FilterCategory(), LION_GROUP_ICON, LION_ICON, Props, RoleFilterSection(), TeamTypeFilterSection(), TeamFilterCategory(), MaskIcon() (+2 more)

### Community 75 - "src/types/index.ts"
Cohesion: 0.09
Nodes (46): @heroicons/react, next, tailwind-merge, GLOW, Props, Props, Props, Props (+38 more)

### Community 76 - "scripts"
Cohesion: 0.13
Nodes (15): scripts, auth:grant, auth:import-emails, auth:preview-email, auth:report-duplicate-contacts, auth:seed-questions, build, db:anonymize-demo (+7 more)

### Community 77 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, concurrently, @faker-js/faker, nodemon, ts-node, tsx, @types/compression, @types/cors (+5 more)

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
Cohesion: 0.13
Nodes (14): @prisma/adapter-pg, adapter, level, [ref, levelArg], duplicates, fields, groups, ContactFields (+6 more)

### Community 82 - "ThemeContext.tsx"
Cohesion: 0.05
Nodes (40): react-datepicker, metadata, nunito, RootLayout(), EDGE_STYLE_OPTIONS, ORIENTATION_OPTIONS, Props, Section() (+32 more)

### Community 83 - "Core Patterns"
Cohesion: 0.15
Nodes (13): Context and device loss, Core Patterns, Destroying a renderer, Direct renderer construction, Lazy-loading backend-specific systems and pipes, Manual rendering, Per-renderer options, Preference forms (+5 more)

### Community 84 - "Constructor options (Container-inherited)"
Cohesion: 0.15
Nodes (13): Advanced options and aliases, Before / after, Callbacks, Constructor options (Container-inherited), Display, Effects, Exceptions (line-by-line is fine here), Hierarchy (+5 more)

### Community 85 - "Test-Driven Development"
Cohesion: 0.15
Nodes (10): Designing for Mockability, When to Mock, Anti-patterns, Rules of the loop, Seams: where tests go, Test-Driven Development, What a good test is, Bad Tests (+2 more)

### Community 86 - "GSAP Core"
Cohesion: 0.10
Nodes (20): Accessibility and responsive (gsap.matchMedia()), Common vars, Core Tween Methods, Custom: use CustomEase (plugin), Defaults, Do Not, Easing, Function-based values (+12 more)

### Community 87 - "Core Patterns"
Cohesion: 0.17
Nodes (12): Capture phase events, Core Patterns, Cursor styles, Event features, Event properties, Event types, eventMode values, Global move events and drag (+4 more)

### Community 88 - "gsap"
Cohesion: 0.18
Nodes (10): @pixi/react, PixiElements, gsap, @gsap/react, pixi-viewport, MembersTree(), Props, CHARS (+2 more)

### Community 89 - "Foundations"
Cohesion: 0.29
Nodes (7): Foundations, pixijs-application, pixijs-core-concepts, pixijs-create, pixijs-environments, pixijs-migration-v8, pixijs-scene-core-concepts

### Community 90 - "MemberStatus"
Cohesion: 0.21
Nodes (9): FOUNDER_JOIN_YEAR, MEMBER_STATUSES, MENTOR_STATUSES, MemberStatus, Alumni, Baby, Full, Observer (+1 more)

### Community 91 - "pixijs/SKILL.md"
Cohesion: 0.13
Nodes (13): API Reference, Common Mistakes, [HIGH] buttonMode removed; use cursor, [HIGH] Default eventMode is passive, [HIGH] Move events only fire over the object in v8, [MEDIUM] Cursor does not inherit from parent, Quick Start, Fallback: canonical PixiJS docs (+5 more)

### Community 92 - "Core Concepts"
Cohesion: 0.18
Nodes (11): Container vs leaf (CRITICAL), Core Concepts, Culling, Destroy semantics, Lifecycle events, Masking, Render groups, Render order and explicit z-ordering (+3 more)

### Community 94 - "utils/membersTree/index.ts"
Cohesion: 0.09
Nodes (46): pixijs-scene-graphics, Paths and complex shapes, EdgesLayer(), drawPolyline(), TeamEdgesLayer(), NODE_AVATAR_RADIUS, NODE_HEIGHT, NODE_WIDTH (+38 more)

### Community 98 - "constants/canvas/index.ts"
Cohesion: 0.15
Nodes (14): lineageEdgePath, ACCIDENTAL_DRAG_MAX_DISTANCE, ACCIDENTAL_DRAG_MAX_MS, TAP_MOVE_TOLERANCE, FONT_FAMILY, NODE_SUBTITLE_STYLE, NODE_TITLE_STYLE, NODE_TOOLTIP_TEXT_STYLE (+6 more)

### Community 99 - "checkConfig.ts"
Cohesion: 0.35
Nodes (7): assertConfig(), configProblems(), databaseName(), demoProblems(), Env, good, checkAnonymizeAllowed()

### Community 102 - "Render Loop"
Cohesion: 0.22
Nodes (8): API Reference, Common Mistakes, [CRITICAL] Treating the ticker callback arg as a number, Frame lifecycle, [HIGH] Using `updateTransform` for per-frame logic, [MEDIUM] Assuming ticker callbacks run after render, Quick Start, Render Loop

### Community 103 - "pixijs-core-concepts/SKILL.md"
Cohesion: 0.22
Nodes (8): API Reference, Decision guide, Environments, Quick concepts, Quick Start, Renderer = systems + pipes, The render loop, Topics

### Community 104 - "Core Patterns"
Cohesion: 0.22
Nodes (9): Add, remove, swap, Child queries, Core Patterns, Destroying sub-trees, Iterating children, Label-based tree navigation, Lifecycle events, Reparenting with transform preservation (+1 more)

### Community 105 - "FiltersPanel.tsx"
Cohesion: 0.22
Nodes (10): FiltersHeader(), ALL_SECTIONS_CLOSED, FiltersPanel(), Props, MemberFilterCategory(), OPTIONS, Props, ViewModeSwitch() (+2 more)

### Community 110 - "server/src/types/index.ts"
Cohesion: 0.07
Nodes (33): mongodb, ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember, STATUSES_MAP (+25 more)

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

### Community 113 - "treeStore.ts"
Cohesion: 0.12
Nodes (25): Props, Props, Props, Props, TeamFramesLayer(), MembersTreeScene(), Props, FIXED_EDGE_WIDTH (+17 more)

### Community 116 - "pixijs-scene-core-concepts/SKILL.md"
Cohesion: 0.25
Nodes (6): API Reference, Leaf comparison: which skill covers which object, Quick Start, References, Tooling, When to use what (quick decisions)

### Community 117 - "Container Hierarchy"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, Container Hierarchy, [CRITICAL] Adding children to a leaf, [HIGH] Destroying the parent without `children: true`, [MEDIUM] Mutating `children` during iteration, Quick Start

### Community 118 - "Common Mistakes"
Cohesion: 0.50
Nodes (4): Common Mistakes, [HIGH] Accessing app.renderer before init() resolves, [HIGH] Setting DOMAdapter after Application.init, [MEDIUM] Treating `preference` as a guarantee

### Community 119 - "aiFaces.ts"
Cohesion: 0.38
Nodes (3): createFaceSource(), Options, source()

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
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 909 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Skill router` connect `pixijs/SKILL.md` to `Utilities`?**
  _High betweenness centrality (0.148) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _42 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `EditMemberForm.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.1422475106685633 - nodes in this community are weakly interconnected._
- **Why does `Point` connect `utils/membersTree/index.ts` to `teamLayout.ts`, `Direction`, `layout.ts`, `teamFrame.ts`, `treeStore.ts`, `pixijs/SKILL.md`, `Utilities`?**
  _High betweenness centrality (0.132) - this node is a cross-community bridge._
- **Should `MemberInfo.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14461538461538462 - nodes in this community are weakly interconnected._
- **Why does `Utilities` connect `pixijs/SKILL.md` to `utils/membersTree/index.ts`?**
  _High betweenness centrality (0.115) - this node is a cross-community bridge._
- **Should `MembersTreeContent.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.10793650793650794 - nodes in this community are weakly interconnected._