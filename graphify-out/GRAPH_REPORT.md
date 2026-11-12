# Graph Report - best-family-tree  (2026-11-12)

## Corpus Check
- 497 files · ~167,177 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 28 file(s) not represented in the graph (top: .prisma 9, (none) 6, .css 6)

## Summary
- 2527 nodes · 6362 edges · 131 communities (121 shown, 10 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 64 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `c6365917`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- EditMemberForm.tsx
- MemberInfo.tsx
- MembersTreeContent.tsx
- MemberFilterCategory.tsx
- auth.ts
- @heroicons/react
- pixi.js
- sessions.ts
- PositionFormFields.tsx
- ApplicationOptions reference
- challenges.ts
- filtersStore.ts
- anonymizeDemo.ts
- Sidebar.tsx
- PhotoViewer.tsx
- elkLayout.ts
- MemberBirthdayAnimation.tsx
- emailRoutes.ts
- filterTeams.ts
- catalogValidation.ts
- Member
- HTML Report Format
- useCardAnimation.ts
- teamGroups.ts
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
- memberRoutes.ts
- CLAUDE.md
- Member
- mime.ts
- teamFrame.ts
- During the session
- ManageForm.tsx
- membersStore.ts
- AGENTS.md
- scripts
- emailCodes.ts
- BEST Family Tree
- next.config.mjs
- postcss.config.mjs
- Common Mistakes
- importAllowedEmails.ts
- Core Patterns
- Scene Objects
- src/utils/index.ts
- Utilities
- types.ts
- MemberFormFields.tsx
- BEST Family Tree
- Diagnosing Bugs
- ref_vitest
- Common Mistakes
- src/index.ts
- teamLayout.ts
- Core Patterns
- Core Patterns
- dependencies
- TeamFilterCategory.tsx
- AccentColor
- scripts
- devDependencies
- Core Patterns
- Core Patterns
- Core Patterns
- contactKeys.ts
- constants/theme.ts
- Core Patterns
- Constructor options (Container-inherited)
- Test-Driven Development
- GSAP Core
- Core Patterns
- constants/canvas/index.ts
- Foundations
- MemberStatus
- pixijs/SKILL.md
- Core Concepts
- proxy.ts
- utils/membersTree/index.ts
- backup-prod.sh
- start-prod.sh
- restore-local.sh
- useCanvasTheme.ts
- checkConfig.ts
- Core Patterns
- computeFilteredMembers.ts
- Render Loop
- pixijs-core-concepts/SKILL.md
- Core Patterns
- FiltersPanel.tsx
- layout.tsx
- mailer/index.ts
- SettingsPanel.tsx
- server/src/types/index.ts
- settingsStore.ts
- Renderers: WebGPU, WebGL, and Canvas
- treeStore.ts
- demoQuestions.test.ts
- ThemeContext.tsx
- pixijs-scene-core-concepts/SKILL.md
- Container Hierarchy
- Common Mistakes
- aiFaces.ts
- useTreeDirection.ts
- memberPresentation.ts
- ref_dotenv
- ui/index.ts
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

## Communities (131 total, 10 thin omitted)

### Community 0 - "EditMemberForm.tsx"
Cohesion: 0.15
Nodes (28): AddMemberForm(), buildMemberFormData(), ClearButton(), SubmitButton(), ConfirmDeleteControl(), Props, describeSubmitError(), EditMemberForm() (+20 more)

### Community 1 - "MemberInfo.tsx"
Cohesion: 0.10
Nodes (31): cache, loadImageAspect(), PhotoOpenButton(), MemberAvatarImage(), MemberAvatarImageInner(), Props, MemberInfo(), MemberInfoActionIcon() (+23 more)

### Community 2 - "MembersTreeContent.tsx"
Cohesion: 0.18
Nodes (14): SharpAvatarTracker(), ACCENT_COLOR_MAP, EVENT_FEATURES, MembersTreeContent(), Props, ViewportCulling(), useSyncMembers(), useTeamSelection() (+6 more)

### Community 3 - "MemberFilterCategory.tsx"
Cohesion: 0.23
Nodes (15): MemberFilterCategory(), JoinYearFilterSection(), ACTIVITY_OPTIONS, ACTIVITY_STATES, AVATAR_OPTIONS, AVATAR_VALUES, JOIN_SEASONS, MEMBER_STATUSES (+7 more)

### Community 4 - "auth.ts"
Cohesion: 0.07
Nodes (54): AccessLevel, AuthMethod, Challenge, ChallengeQuestion, fetchSession(), logout(), post(), RequestCodeOutcome (+46 more)

### Community 5 - "@heroicons/react"
Cohesion: 0.21
Nodes (11): @heroicons/react, next, AvatarFileInput(), Props, LogoFileInput(), Props, Pos, Props (+3 more)

### Community 6 - "pixi.js"
Cohesion: 0.15
Nodes (12): pixi.js, MemberNodeAvatar(), Props, AVATAR_HIGH_RES_SIZE, CIRCLE_TEXTURE_SRC, PATTERN_TEXTURE_SRC, failedSources, Options (+4 more)

### Community 7 - "sessions.ts"
Cohesion: 0.13
Nodes (28): express, CHALLENGE_TTL_MS, isDemoMode(), isProduction(), QUESTIONS_SHOWN, SESSION_COOKIE, SESSION_TTL_MS, SIGN_IN_COOKIE (+20 more)

### Community 8 - "PositionFormFields.tsx"
Cohesion: 0.11
Nodes (34): PositionAssignmentFields(), Props, PositionFormFields(), Props, createEmptyPositionRow(), EMPTY_POSITION_ROW, findTeamByName(), getPositionRowSummary() (+26 more)

### Community 9 - "ApplicationOptions reference"
Cohesion: 0.06
Nodes (32): Accessibility, ApplicationOptions reference, Background, Culler (CullerPluginOptions), Deprecated (GC — prefer the unified options above), Events, Garbage collection, Graphics (+24 more)

### Community 10 - "challenges.ts"
Cohesion: 0.13
Nodes (23): express-rate-limit, ChallengeState, isExpired(), isSolved(), pickRandom(), swapQuestion(), SwapResult, base (+15 more)

### Community 11 - "filtersStore.ts"
Cohesion: 0.07
Nodes (38): LionIcon(), Props, FacebookIcon(), InstagramIcon(), LinkedinIcon(), TelegramIcon(), Props, compare() (+30 more)

### Community 12 - "anonymizeDemo.ts"
Cohesion: 0.14
Nodes (18): allowed, args, byId, factory, GROUP_NAMES, memberPhotos, nextFace, real (+10 more)

### Community 13 - "Sidebar.tsx"
Cohesion: 0.15
Nodes (12): Props, Props, Props, Sidebar(), SidebarFooterContext, Props, SidebarHandle(), Props (+4 more)

### Community 14 - "PhotoViewer.tsx"
Cohesion: 0.12
Nodes (30): react-dom, zustand, DropdownPortal(), Props, Props, PhotoViewer(), Viewer(), viewportRect() (+22 more)

### Community 15 - "elkLayout.ts"
Cohesion: 0.29
Nodes (9): elkjs, NODE_CARD_HEIGHT, elkNodeSize(), LAYER_SPACE_LR, layoutOptions(), layoutWithElk(), loadElk(), stackIsolatedNodes() (+1 more)

### Community 16 - "MemberBirthdayAnimation.tsx"
Cohesion: 0.35
Nodes (8): BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props, acquireEmojiTextures(), createEmojiTexture(), generateRandomPosition(), releaseEmojiTextures()

### Community 17 - "emailRoutes.ts"
Cohesion: 0.12
Nodes (21): authSecret(), EligibilityMember, EmailIdentity, normalizeEmail(), resolveEmailIdentity(), loadEmailIdentity(), prismaCodeStore, getMailer() (+13 more)

### Community 18 - "filterTeams.ts"
Cohesion: 0.39
Nodes (8): getTeamSpan(), hasRole(), hasTeamCriteria(), isTeamFilterActive(), matchesPeriod(), memberMatchesTeamFilters(), positionMatchesTeamFilters(), TeamFilters

### Community 19 - "catalogValidation.ts"
Cohesion: 0.07
Nodes (34): Renderer selection at runtime, [MEDIUM] Using container.name instead of container.label, multer, multer-storage-cloudinary, deleteCloudinaryImage(), extractCloudinaryPublicId(), MAX_UPLOAD_BYTES, uploadMiddleware() (+26 more)

### Community 20 - "Member"
Cohesion: 0.11
Nodes (20): Props, NodesLayer(), Props, Props, Props, Props, useSidebar(), Member (+12 more)

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "useCardAnimation.ts"
Cohesion: 0.09
Nodes (30): AVATAR_HIT_AREA, CARD_PIVOT, EMPTY_FILTERS, getCullArea(), MemberNode(), NODE_HIT_AREA, NODE_PIVOT, Props (+22 more)

### Community 23 - "teamGroups.ts"
Cohesion: 0.20
Nodes (15): Props, Options, DEFAULT_POSITION, MemberNode, teamMatchesFilters(), transformMembersToFlowValues(), reconnectEdgesToVisibleAncestors(), buildLayoutGraph() (+7 more)

### Community 24 - "teamService.ts"
Cohesion: 0.13
Nodes (29): ResolvedPosition, resolvePosition(), MemberTransaction, deleteMember(), deriveTeamName(), resolveRole(), resolveTeam(), resolveTeamType() (+21 more)

### Community 25 - "filterSearchParams.ts"
Cohesion: 0.22
Nodes (12): Props, useFilterSearchParams(), filtersToSearchParams(), parseCsvArray(), parseCsvStrings(), parseFiltersFromSearchParams(), parseNumberOrNull(), parseTreeMode() (+4 more)

### Community 26 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, esModuleInterop, forceConsistentCasingInFileNames, module, moduleResolution, noImplicitAny, outDir, paths (+12 more)

### Community 27 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+12 more)

### Community 28 - "teamFrame.ts"
Cohesion: 0.08
Nodes (42): MemberNodeCard(), Props, TeamBadge(), FILL_ALPHA, lerp(), STROKE_ALPHA, TeamFrame(), TeamOverviewLabel() (+34 more)

### Community 29 - "react"
Cohesion: 0.20
Nodes (16): react, DropdownMenu(), Props, BadgeInput(), Props, BadgeInputField(), Props, useBadgeInputState() (+8 more)

### Community 30 - "dependencies"
Cohesion: 0.11
Nodes (19): dependencies, date-fns, dotenv, elkjs, gsap, @gsap/react, @heroicons/react, lodash (+11 more)

### Community 31 - "server/package.json"
Cohesion: 0.09
Nodes (22): concurrently, nodemon, @prisma/adapter-pg, ts-node, tsx, @types/compression, @types/cors, @types/express (+14 more)

### Community 32 - "FitViewButton.tsx"
Cohesion: 0.35
Nodes (7): FitViewButton(), Props, Props, ToolbarIconButton(), Props, ToolbarTooltip(), useHoverTooltip()

### Community 33 - "memberService.ts"
Cohesion: 0.09
Nodes (33): zod, buildMemberFields(), buildMemberUpdateFields(), buildSharedFields(), buildSparseMemberFields(), parsePhoneNumbers(), getPositionKey(), syncPositions() (+25 more)

### Community 34 - "FilterState"
Cohesion: 0.13
Nodes (24): BirthdayFilterSection(), Props, CheckboxGroupFilterSection(), Option, Props, ClearButton(), FilterCheckbox(), Props (+16 more)

### Community 35 - "useMembersStore"
Cohesion: 0.21
Nodes (14): membersActions, {
  setMembers,
  reloadMembers,
  addMember,
  updateMember,
  selectMember,
  getMentorsList,
}, useMembersMap(), useMentees(), useSelectedId(), useSelectedMember(), changesStructure(), EMPTY_INDEX (+6 more)

### Community 36 - "package.json"
Cohesion: 0.11
Nodes (18): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+10 more)

### Community 37 - "LineageMemberSearch.tsx"
Cohesion: 0.43
Nodes (5): LineageFilterSection(), Props, LineageMemberSearch(), Props, useMemberById()

### Community 38 - "FilterState"
Cohesion: 0.22
Nodes (10): FilterGroupProps, Props, Props, Props, Props, FiltersActions, AvatarFilterValue, FilterSectionKey (+2 more)

### Community 39 - "Direction"
Cohesion: 0.18
Nodes (17): LineageEdge(), DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN, MIN_ANIM_DURATION, PATTERN_LEN, RETRACT_BASE (+9 more)

### Community 40 - "Core Patterns"
Cohesion: 0.11
Nodes (21): Adding and removing children, API Reference, Bounds and coordinate conversion, Common Mistakes, Constructor options, Container events, Core Patterns, [CRITICAL] Adding children to leaf scene objects (+13 more)

### Community 41 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+5 more)

### Community 42 - "ref_vitest"
Cohesion: 0.27
Nodes (7): @faker-js/faker, createIdentityFactory(), firstFree(), OPERATOR_CODES, none, MAP, translit()

### Community 43 - "memberRoutes.ts"
Cohesion: 0.12
Nodes (21): CONTACT_FIELDS, toMemberResponse(), adapter, prisma, loadFamilyTree, loadReducedFamilyTree, router, MEMBER_INCLUDE (+13 more)

### Community 44 - "CLAUDE.md"
Cohesion: 0.29
Nodes (6): Commands, Conventions, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout

### Community 45 - "Member"
Cohesion: 0.13
Nodes (18): MembersTree(), Props, Props, isTreeReady(), MembersTree, MembersTreeDynamic(), Props, TreeState (+10 more)

### Community 46 - "mime.ts"
Cohesion: 0.29
Nodes (11): RFC-2045, RFC-2047, createGmailMailer(), GmailConfig, base64Body(), buildMime(), encodeHeaderText(), formatAddress() (+3 more)

### Community 47 - "teamFrame.ts"
Cohesion: 0.09
Nodes (36): NODE_WIDTH, TEAM_COLUMN_GAP, TEAM_EDGE_DROP, TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_SPREAD_WIDTH, TEAM_EDGE_STUB, TEAM_FRAME_HEADER, TEAM_FRAME_MIN_WIDTH (+28 more)

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "ManageForm.tsx"
Cohesion: 0.12
Nodes (25): MemberSidebar(), TeamInfoSidebar(), ManageForm(), MemberMode, Props, Section, SECTIONS, TEAM_KINDS (+17 more)

### Community 50 - "membersStore.ts"
Cohesion: 0.09
Nodes (44): addMember(), ApiError, toApiError(), deleteMember(), editMember(), fetchFamilyTree(), fetchMemberById(), fetchMentorsList() (+36 more)

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
Cohesion: 0.14
Nodes (13): pixijs-html-source, pixijs-scene-container, pixijs-scene-dom-container, pixijs-scene-gif, pixijs-scene-graphics, pixijs-scene-mesh, pixijs-scene-particle-container, pixijs-scene-sprite (+5 more)

### Community 61 - "src/utils/index.ts"
Cohesion: 0.09
Nodes (34): gsap, @gsap/react, pixi-filters, MembersTreeScene(), NODE_HOVER_ANIMATION_DURATION, NODE_HOVER_SCALE, ZOOMED_OUT_HOVER_SCALE_MAP, CARD_VIEW_SCALE (+26 more)

### Community 62 - "Utilities"
Cohesion: 0.15
Nodes (13): pixijs-assets, pixijs-blend-modes, pixijs-color, pixijs-events, pixijs-math, pixijs-ticker, Utilities, Advanced (+5 more)

### Community 63 - "types.ts"
Cohesion: 0.21
Nodes (11): canEditMember(), hasAccess(), RANK, member(), AccessRank, Express, Request, Session (+3 more)

### Community 64 - "MemberFormFields.tsx"
Cohesion: 0.12
Nodes (24): FieldError(), Props, Props, Props, SocialMediaFormFields(), Props, TextInput(), CheckedField (+16 more)

### Community 65 - "BEST Family Tree"
Cohesion: 0.11
Nodes (17): 1. Clone and configure environment, 2. Start the application, 3. Run database migrations, 4. Access the app, Architecture, Available Commands, Backend Commands (run inside container), Backups (+9 more)

### Community 66 - "Diagnosing Bugs"
Cohesion: 0.13
Nodes (14): Completion criterion: a tight loop that goes red, Diagnosing Bugs, Minimise, Non-deterministic bugs, Phase 1: Build a feedback loop, Phase 2: Reproduce + minimise, Phase 3: Hypothesise, Phase 4: Instrument (+6 more)

### Community 67 - "ref_vitest"
Cohesion: 0.18
Nodes (3): hasDemoPhoto(), edges, ids

### Community 68 - "Common Mistakes"
Cohesion: 0.33
Nodes (6): Common Mistakes, [CRITICAL] Adding children to a leaf display object, [CRITICAL] Referencing DisplayObject, [HIGH] Forgetting isRenderGroup on large static subtrees, [HIGH] Treating child.x as world space, [MEDIUM] sortableChildren without zIndex

### Community 69 - "src/index.ts"
Cohesion: 0.14
Nodes (12): compression, cors, helmet, app, checkOrigin(), WRITE_METHODS, router, router (+4 more)

### Community 70 - "teamLayout.ts"
Cohesion: 0.11
Nodes (29): TEAM_FRAME_GAP, TEAM_PACK_ASPECT, failOver(), getWorker(), Pending, requestLayout(), runInline(), TeamBlock (+21 more)

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
Cohesion: 0.32
Nodes (6): FilterCategory(), LION_GROUP_ICON, LION_ICON, Props, MaskIcon(), Props

### Community 75 - "AccentColor"
Cohesion: 0.10
Nodes (28): tailwind-merge, GLOW, Props, Props, Props, Props, ComboboxInputField(), Props (+20 more)

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
Cohesion: 0.22
Nodes (10): duplicates, fields, groups, ContactFields, contactKey(), ContactPlatform, FIELD_PLATFORMS, findContactCollision() (+2 more)

### Community 82 - "constants/theme.ts"
Cohesion: 0.16
Nodes (10): darkTheme, DEFAULT_THEME, lightTheme, THEMES, ThemeContextValue, CssThemeTokens, ThemeDefinition, ThemeId (+2 more)

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

### Community 88 - "constants/canvas/index.ts"
Cohesion: 0.07
Nodes (31): @pixi/react, PixiElements, @pixi/react, pixi-viewport, Props, EMPTY_IDS, View, Props (+23 more)

### Community 89 - "Foundations"
Cohesion: 0.14
Nodes (13): Advanced, Foundations, pixijs-accessibility, pixijs-application, pixijs-core-concepts, pixijs-create, pixijs-custom-rendering, pixijs-environments (+5 more)

### Community 90 - "MemberStatus"
Cohesion: 0.09
Nodes (18): date-fns, EMPTY_FILTER_STATE, FOUNDER_JOIN_YEAR, MEMBER_STATUSES, MENTOR_STATUSES, initialFiltersState, ActivityState, Active (+10 more)

### Community 91 - "pixijs/SKILL.md"
Cohesion: 0.18
Nodes (9): API Reference, Common Mistakes, [HIGH] buttonMode removed; use cursor, [HIGH] Default eventMode is passive, [HIGH] Move events only fire over the object in v8, [MEDIUM] Cursor does not inherit from parent, Quick Start, Fallback: canonical PixiJS docs (+1 more)

### Community 92 - "Core Concepts"
Cohesion: 0.18
Nodes (11): Container vs leaf (CRITICAL), Core Concepts, Culling, Destroy semantics, Lifecycle events, Masking, Render groups, Render order and explicit z-ordering (+3 more)

### Community 94 - "utils/membersTree/index.ts"
Cohesion: 0.11
Nodes (38): EdgesLayer(), drawPolyline(), TeamEdgesLayer(), FIXED_EDGE_WIDTH, DEFAULT_NODE_HEIGHT, DEFAULT_NODE_WIDTH, FLOW_VIEWPORT_DIRECTION, FlowViewportDirection (+30 more)

### Community 98 - "useCanvasTheme.ts"
Cohesion: 0.24
Nodes (9): FONT_FAMILY, NODE_SUBTITLE_STYLE, NODE_TITLE_STYLE, NODE_TOOLTIP_TEXT_STYLE, TEXT_RESOLUTION, buildCanvasColors(), CanvasColors, CanvasTextStyles (+1 more)

### Community 99 - "checkConfig.ts"
Cohesion: 0.21
Nodes (12): assertConfig(), configProblems(), databaseName(), demoProblems(), Env, good, Env, isTransport() (+4 more)

### Community 100 - "Core Patterns"
Cohesion: 0.11
Nodes (17): API Reference, Common Mistakes, Coordinate conversion, Core Patterns, Cumulative alpha (getGlobalAlpha), Global, local, and screen coordinates, [HIGH] Setting scale to 0, [MEDIUM] Confusing anchor and pivot (+9 more)

### Community 101 - "computeFilteredMembers.ts"
Cohesion: 0.22
Nodes (14): ChildrenMap, MembersMap, areSetsEqual(), computeFilteredMembers(), Source, isFilterActive(), matchesAvatar(), matchesJoinYear() (+6 more)

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
Cohesion: 0.27
Nodes (7): FiltersHeader(), ALL_SECTIONS_CLOSED, FiltersPanel(), Props, OPTIONS, Props, ViewModeSwitch()

### Community 106 - "layout.tsx"
Cohesion: 0.20
Nodes (5): react-datepicker, metadata, nunito, RootLayout(), AuroraBackground()

### Community 107 - "mailer/index.ts"
Cohesion: 0.29
Nodes (6): consoleMailer, createResendMailer(), ResendConfig, message, Mailer, MailMessage

### Community 108 - "SettingsPanel.tsx"
Cohesion: 0.22
Nodes (8): EDGE_STYLE_OPTIONS, ORIENTATION_OPTIONS, Props, Section(), SectionProps, SettingsPanel(), THEME_OPTIONS, SegmentedSwitch()

### Community 110 - "server/src/types/index.ts"
Cohesion: 0.07
Nodes (28): mongodb, ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember, STATUSES_MAP (+20 more)

### Community 111 - "settingsStore.ts"
Cohesion: 0.31
Nodes (8): DEFAULT_SETTINGS, SETTINGS_STORAGE_KEY, SettingsActions, SettingsState, initialState, { storageMock }, OrientationSetting, ThemePreference

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

### Community 113 - "treeStore.ts"
Cohesion: 0.10
Nodes (27): Props, Props, Props, Props, Props, TeamFramesLayer(), Props, Props (+19 more)

### Community 114 - "demoQuestions.test.ts"
Cohesion: 0.36
Nodes (5): answerMatches(), CYRILLIC_TO_LATIN, normalizeAnswer(), MIN_ACTIVE_QUESTIONS, DEMO_QUESTIONS

### Community 115 - "ThemeContext.tsx"
Cohesion: 0.39
Nodes (6): applyCssTokens(), ThemeContext, ThemeProvider(), noopSubscribe(), useIsHydrated(), camelToCssVar()

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

### Community 120 - "useTreeDirection.ts"
Cohesion: 0.48
Nodes (5): useIsMobileScreen(), useResolvedDirection(), useMediaQuery(), readLegacyTheme(), useSettingsStore

### Community 121 - "memberPresentation.ts"
Cohesion: 0.38
Nodes (6): getPhotoUrlAsRoundAvatar(), formatMemberRecruitmentSeason(), formatRecruitmentTerm(), getMemberNodeAvatar(), RECRUITMENT_SEASON_EMOJI, RECRUITMENT_SEASON_LABEL

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
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 918 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Skill router` connect `Utilities` to `pixijs/SKILL.md`?**
  _High betweenness centrality (0.129) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _42 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `MemberInfo.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.09608843537414966 - nodes in this community are weakly interconnected._
- **Why does `Point` connect `utils/membersTree/index.ts` to `teamLayout.ts`, `teamFrame.ts`, `elkLayout.ts`, `treeStore.ts`, `src/utils/index.ts`, `Utilities`?**
  _High betweenness centrality (0.109) - this node is a cross-community bridge._
- **Should `auth.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.0654490106544901 - nodes in this community are weakly interconnected._
- **Why does `Utilities` connect `Utilities` to `utils/membersTree/index.ts`?**
  _High betweenness centrality (0.100) - this node is a cross-community bridge._
- **Should `sessions.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.12698412698412698 - nodes in this community are weakly interconnected._