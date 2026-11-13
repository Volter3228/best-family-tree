# Graph Report - best-family-tree  (2026-11-13)

## Corpus Check
- 504 files · ~169,553 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 28 file(s) not represented in the graph (top: .prisma 9, (none) 6, .css 6)

## Summary
- 2569 nodes · 6457 edges · 124 communities (115 shown, 9 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 71 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `e24dd3b5`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- EditMemberForm.tsx
- src/types/index.ts
- MembersTreeContent.tsx
- MemberFilterCategory.tsx
- memberService.ts
- @heroicons/react
- useCardAnimation.ts
- sessions.ts
- PositionFormFields.tsx
- ApplicationOptions reference
- challenges.ts
- filtersStore.ts
- anonymizeDemo.ts
- Sidebar.tsx
- PhotoViewer.tsx
- googleRoutes.ts
- Common Mistakes
- emailRoutes.ts
- filterMembers.ts
- catalogValidation.ts
- Member
- HTML Report Format
- MemberNode.tsx
- devDependencies
- teamService.ts
- filterSearchParams.ts
- compilerOptions
- compilerOptions
- pixi.js
- LineageMemberSearch.tsx
- dependencies
- server/package.json
- MemberInfo.tsx
- memberService.ts
- FilterState
- useMembersStore
- package.json
- layoutGraph.ts
- utils/strings.ts
- Direction
- Core Patterns
- devDependencies
- ref_vitest
- memberRoutes.ts
- CLAUDE.md
- Core Patterns
- mime.ts
- teamFrame.ts
- During the session
- TeamFormContent.tsx
- http
- AGENTS.md
- scripts
- emailCodes.ts
- BEST Family Tree
- next.config.mjs
- postcss.config.mjs
- ref_vitest
- importAllowedEmails.ts
- Core Patterns
- Scene Objects
- src/utils/index.ts
- Utilities
- types.ts
- membersStore.ts
- BEST Family Tree
- Diagnosing Bugs
- MemberInfoSocial.tsx
- Common Mistakes
- readCache.ts
- teamLayout.ts
- Core Patterns
- Core Patterns
- dependencies
- seedQuestions.ts
- proxy.ts
- FiltersPanel.tsx
- Core Patterns
- Core Patterns
- Core Patterns
- contactKeys.ts
- layout.tsx
- Core Patterns
- Constructor options (Container-inherited)
- Test-Driven Development
- GSAP Core
- Core Patterns
- pixi.js
- Foundations
- MemberStatus
- pixijs/SKILL.md
- Core Concepts
- BadgeInput.tsx
- utils/membersTree/index.ts
- backup-prod.sh
- start-prod.sh
- restore-local.sh
- checkConfig.ts
- Core Patterns
- computeFilteredMembers.ts
- Render Loop
- pixijs-core-concepts/SKILL.md
- Container Hierarchy
- FilterState
- oidc.ts
- mailer/index.ts
- Toolbar.tsx
- server/src/types/index.ts
- Renderers: WebGPU, WebGL, and Canvas
- TeamFrame
- seedQuestions.ts
- pixijs-scene-core-concepts/SKILL.md
- Common Mistakes
- aiFaces.ts
- constants/canvas/index.ts
- memberPresentation.ts
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
- `pixijs-math` --references--> `Point`  [INFERRED]
  .agents/skills/pixijs/references/index.md → src/types/tree.ts
- `Utilities` --references--> `Point`  [INFERRED]
  .agents/skills/pixijs/SKILL.md → src/types/tree.ts
- `pixijs-scene-container` --references--> `getBounds()`  [INFERRED]
  .agents/skills/pixijs/references/index.md → src/hooks/membersTree/animations/useFitViewAnimation.ts
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

## Communities (124 total, 9 thin omitted)

### Community 0 - "EditMemberForm.tsx"
Cohesion: 0.11
Nodes (36): AddMemberForm(), buildMemberFormData(), ClearButton(), SubmitButton(), describeSubmitError(), EditMemberForm(), getInitialFormData(), MemberFormFields() (+28 more)

### Community 1 - "src/types/index.ts"
Cohesion: 0.09
Nodes (43): @heroicons/react, tailwind-merge, PAIR_COLORS, Props, GLOW, Props, FitViewButton(), Props (+35 more)

### Community 2 - "MembersTreeContent.tsx"
Cohesion: 0.08
Nodes (35): EMPTY_IDS, SharpAvatarTracker(), View, Viewport(), MembersTree(), Props, ACCENT_COLOR_MAP, EVENT_FEATURES (+27 more)

### Community 3 - "MemberFilterCategory.tsx"
Cohesion: 0.38
Nodes (8): ACTIVITY_OPTIONS, ACTIVITY_STATES, AVATAR_OPTIONS, AVATAR_VALUES, JOIN_SEASONS, MEMBER_STATUSES, SEASON_OPTIONS, STATUS_OPTIONS

### Community 4 - "memberService.ts"
Cohesion: 0.13
Nodes (25): buildMemberFields(), buildMemberUpdateFields(), buildSharedFields(), buildSparseMemberFields(), parsePhoneNumbers(), parsePositionsPayload(), getPositionKey(), syncPositions() (+17 more)

### Community 5 - "@heroicons/react"
Cohesion: 0.25
Nodes (9): LionIcon(), Props, AvatarFileInput(), Props, LogoFileInput(), Props, exceedsUploadLimit(), MAX_UPLOAD_BYTES (+1 more)

### Community 6 - "useCardAnimation.ts"
Cohesion: 0.20
Nodes (16): clamp01(), easeBackOut, easePower2In, easePower2Out, entries, Entry, finishCardReveal(), registerCardReveal() (+8 more)

### Community 7 - "sessions.ts"
Cohesion: 0.14
Nodes (23): CHALLENGE_TTL_MS, isProduction(), QUESTIONS_SHOWN, SESSION_COOKIE, SESSION_TTL_MS, SIGN_IN_COOKIE, useSecureCookie(), clearSessionCookie() (+15 more)

### Community 8 - "PositionFormFields.tsx"
Cohesion: 0.11
Nodes (35): Props, Props, PositionAssignmentFields(), Props, PositionFormFields(), Props, createEmptyPositionRow(), EMPTY_POSITION_ROW (+27 more)

### Community 9 - "ApplicationOptions reference"
Cohesion: 0.06
Nodes (32): Accessibility, ApplicationOptions reference, Background, Culler (CullerPluginOptions), Deprecated (GC — prefer the unified options above), Events, Garbage collection, Graphics (+24 more)

### Community 10 - "challenges.ts"
Cohesion: 0.13
Nodes (21): express-rate-limit, ChallengeState, isExpired(), isSolved(), pickRandom(), swapQuestion(), SwapResult, base (+13 more)

### Community 11 - "filtersStore.ts"
Cohesion: 0.12
Nodes (24): compare(), getSearchable(), MemberSearch(), Props, SearchBar(), Props, SearchPanel(), Props (+16 more)

### Community 12 - "anonymizeDemo.ts"
Cohesion: 0.14
Nodes (18): allowed, args, byId, factory, GROUP_NAMES, memberPhotos, nextFace, real (+10 more)

### Community 13 - "Sidebar.tsx"
Cohesion: 0.09
Nodes (19): react, Props, Props, Props, Sidebar(), SidebarFooterContext, Props, SidebarHandle() (+11 more)

### Community 14 - "PhotoViewer.tsx"
Cohesion: 0.15
Nodes (27): zustand, Props, PhotoViewer(), Viewer(), viewportRect(), clampAxis(), clampOffset(), clampScale() (+19 more)

### Community 15 - "googleRoutes.ts"
Cohesion: 0.24
Nodes (11): EligibilityMember, EmailIdentity, normalizeEmail(), resolveEmailIdentity(), loadEmailIdentity(), callbackErrorRedirect(), decideGoogleSignIn(), GoogleClaims (+3 more)

### Community 16 - "Common Mistakes"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, [CRITICAL] App destroy without releaseGlobalResources, [HIGH] Destroying and recreating objects instead of recycling, [HIGH] Interleaving object types in scene graph, [HIGH] Loading many individual textures instead of spritesheets, [HIGH] Updating Text or HTMLText every frame, [HIGH] Using complex Graphics instead of textures (+4 more)

### Community 17 - "emailRoutes.ts"
Cohesion: 0.18
Nodes (13): authSecret(), isDemoMode(), prismaCodeStore, buildSessionInfo(), bodyEmail(), emailKey(), ipKey(), requestLimits (+5 more)

### Community 18 - "filterMembers.ts"
Cohesion: 0.20
Nodes (17): countActiveMemberFilters(), matchesAvatar(), matchesBirthday(), matchesJoinYear(), memberMatchesFilters(), parseDateStr(), toDateVal(), toMMDD() (+9 more)

### Community 19 - "catalogValidation.ts"
Cohesion: 0.08
Nodes (36): Renderer selection at runtime, [MEDIUM] Using container.name instead of container.label, express, deleteCloudinaryImage(), extractCloudinaryPublicId(), MAX_UPLOAD_BYTES, uploadMiddleware(), TEAM_INCLUDE (+28 more)

### Community 20 - "Member"
Cohesion: 0.14
Nodes (15): date-fns, Props, NodesLayer(), Props, Props, useTeamSelection(), Member, getMemberById() (+7 more)

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "MemberNode.tsx"
Cohesion: 0.05
Nodes (46): @pixi/react, PixiElements, @pixi/react, pixi-viewport, BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props (+38 more)

### Community 23 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, concurrently, @faker-js/faker, nodemon, ts-node, tsx, @types/compression, @types/cors (+5 more)

### Community 24 - "teamService.ts"
Cohesion: 0.16
Nodes (24): ResolvedPosition, resolvePosition(), MemberTransaction, deleteMember(), deriveTeamName(), resolveRole(), resolveTeam(), resolveTeamType() (+16 more)

### Community 25 - "filterSearchParams.ts"
Cohesion: 0.31
Nodes (10): filtersToSearchParams(), parseCsvArray(), parseCsvStrings(), parseFiltersFromSearchParams(), parseNumberOrNull(), parseTreeMode(), serializeCsv(), serializeNameCsv() (+2 more)

### Community 26 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, esModuleInterop, forceConsistentCasingInFileNames, module, moduleResolution, noImplicitAny, outDir, paths (+12 more)

### Community 27 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+12 more)

### Community 28 - "pixi.js"
Cohesion: 0.11
Nodes (32): TeamBadge(), FILL_ALPHA, lerp(), STROKE_ALPHA, TeamFrame(), TeamOverviewLabel(), Props, ZoomFadeContainer() (+24 more)

### Community 29 - "LineageMemberSearch.tsx"
Cohesion: 0.29
Nodes (7): react-dom, DropdownPortal(), Props, LineageFilterSection(), Props, LineageMemberSearch(), Props

### Community 30 - "dependencies"
Cohesion: 0.11
Nodes (19): dependencies, date-fns, dotenv, elkjs, gsap, @gsap/react, @heroicons/react, lodash (+11 more)

### Community 31 - "server/package.json"
Cohesion: 0.05
Nodes (36): cloudinary, compression, concurrently, cors, helmet, multer, multer-storage-cloudinary, nodemon (+28 more)

### Community 32 - "MemberInfo.tsx"
Cohesion: 0.10
Nodes (33): next, TeamInfoSidebar(), cache, loadImageAspect(), PhotoOpenButton(), MemberAvatarImage(), MemberAvatarImageInner(), Props (+25 more)

### Community 33 - "memberService.ts"
Cohesion: 0.13
Nodes (14): zod, ExistingMember, findClearedFields(), MemberUpdateBody, memberUpdateBodySchema, parsePhones(), sparseMemberBodySchema, splitName() (+6 more)

### Community 34 - "FilterState"
Cohesion: 0.13
Nodes (23): BirthdayFilterSection(), Props, CheckboxGroupFilterSection(), Option, Props, ClearButton(), FilterCheckbox(), Props (+15 more)

### Community 35 - "useMembersStore"
Cohesion: 0.27
Nodes (10): MemberEditPanel(), Props, membersActions, {
  setMembers,
  reloadMembers,
  addMember,
  updateMember,
  selectMember,
  getMentorsList,
}, useMemberById(), useMembersList(), useMembersMap(), useMentees() (+2 more)

### Community 36 - "package.json"
Cohesion: 0.11
Nodes (18): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+10 more)

### Community 37 - "layoutGraph.ts"
Cohesion: 0.35
Nodes (7): transformMembersToFlowValues(), reconnectEdgesToVisibleAncestors(), buildLayoutGraph(), Input, MembersIndex, transformMembersToTeamTreeValues(), hashString()

### Community 38 - "utils/strings.ts"
Cohesion: 0.29
Nodes (7): FiltersHeader(), Props, formatCount(), PARTICIPANT_FORMS, PluralForms, pluralizeUk(), TEAM_FORMS

### Community 39 - "Direction"
Cohesion: 0.12
Nodes (24): LineageEdge(), DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN, MIN_ANIM_DURATION, PATTERN_LEN, RETRACT_BASE (+16 more)

### Community 40 - "Core Patterns"
Cohesion: 0.11
Nodes (21): pixijs-scene-container, Adding and removing children, API Reference, Bounds and coordinate conversion, Common Mistakes, Constructor options, Core Patterns, [CRITICAL] Adding children to leaf scene objects (+13 more)

### Community 41 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+5 more)

### Community 42 - "ref_vitest"
Cohesion: 0.27
Nodes (7): @faker-js/faker, createIdentityFactory(), firstFree(), OPERATOR_CODES, none, MAP, translit()

### Community 43 - "memberRoutes.ts"
Cohesion: 0.12
Nodes (20): @prisma/adapter-pg, CONTACT_FIELDS, toMemberResponse(), adapter, prisma, loadFamilyTree, loadReducedFamilyTree, router (+12 more)

### Community 44 - "CLAUDE.md"
Cohesion: 0.25
Nodes (7): Commands, Conventions, Deployment & data, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout

### Community 45 - "Core Patterns"
Cohesion: 0.25
Nodes (8): Add, remove, swap, Child queries, Core Patterns, Destroying sub-trees, Iterating children, Label-based tree navigation, Reparenting with transform preservation, Replacing a child

### Community 46 - "mime.ts"
Cohesion: 0.29
Nodes (11): RFC-2045, RFC-2047, createGmailMailer(), GmailConfig, base64Body(), buildMime(), encodeHeaderText(), formatAddress() (+3 more)

### Community 47 - "teamFrame.ts"
Cohesion: 0.09
Nodes (36): TEAM_COLUMN_GAP, TEAM_EDGE_DROP, TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_STUB, TEAM_FRAME_HEADER, TEAM_FRAME_MIN_WIDTH, TEAM_FRAME_PADDING, TEAM_FRAME_RADIUS (+28 more)

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "TeamFormContent.tsx"
Cohesion: 0.11
Nodes (29): ConfirmDeleteControl(), Props, FormMessages(), Props, DropdownSelectInput(), ManageForm(), MemberMode, Section (+21 more)

### Community 50 - "http"
Cohesion: 0.09
Nodes (43): addMember(), ApiError, toApiError(), deleteMember(), editMember(), fetchFamilyTree(), fetchMemberById(), fetchMentorsList() (+35 more)

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

### Community 58 - "importAllowedEmails.ts"
Cohesion: 0.19
Nodes (12): AllowedRow, AllowlistDiff, diffAllowlist(), looksLikeEmail(), parseAllowlistCsv(), ParsedAllowlist, splitLine(), apply (+4 more)

### Community 59 - "Core Patterns"
Cohesion: 0.12
Nodes (17): Application destroy/recreate cycle, Batching optimization, cacheAsTexture for performance, Core Patterns, Culling, Filters and masks cost, Graphics performance, Low-level rendering optimizations (+9 more)

### Community 60 - "Scene Objects"
Cohesion: 0.15
Nodes (12): pixijs-html-source, pixijs-scene-dom-container, pixijs-scene-gif, pixijs-scene-graphics, pixijs-scene-mesh, pixijs-scene-particle-container, pixijs-scene-sprite, pixijs-scene-text (+4 more)

### Community 61 - "src/utils/index.ts"
Cohesion: 0.11
Nodes (27): gsap, pixi-filters, NODE_HOVER_ANIMATION_DURATION, NODE_HOVER_SCALE, ZOOMED_OUT_HOVER_SCALE_MAP, NODE_HEIGHT, getFitViewTargetScale(), useFitViewAnimation() (+19 more)

### Community 62 - "Utilities"
Cohesion: 0.15
Nodes (13): pixijs-assets, pixijs-blend-modes, pixijs-color, pixijs-events, pixijs-math, pixijs-ticker, Utilities, Advanced (+5 more)

### Community 63 - "types.ts"
Cohesion: 0.21
Nodes (11): canEditMember(), hasAccess(), RANK, member(), AccessRank, Express, Request, Session (+3 more)

### Community 64 - "membersStore.ts"
Cohesion: 0.23
Nodes (12): changesStructure(), EMPTY_INDEX, isSamePosition(), MembersState, withIndex(), ChildrenMap, MemberMetrics, MembersByMentorId (+4 more)

### Community 65 - "BEST Family Tree"
Cohesion: 0.11
Nodes (18): 1. Clone and configure environment, 2. Start the application, 3. Run database migrations, 4. Access the app, Architecture, Available Commands, Backend Commands (run inside container), Backups (+10 more)

### Community 66 - "Diagnosing Bugs"
Cohesion: 0.13
Nodes (14): Completion criterion: a tight loop that goes red, Diagnosing Bugs, Minimise, Non-deterministic bugs, Phase 1: Build a feedback loop, Phase 2: Reproduce + minimise, Phase 3: Hypothesise, Phase 4: Instrument (+6 more)

### Community 67 - "MemberInfoSocial.tsx"
Cohesion: 0.22
Nodes (11): FacebookIcon(), InstagramIcon(), LinkedinIcon(), TelegramIcon(), FieldError(), Props, Props, SocialMediaFormFields() (+3 more)

### Community 68 - "Common Mistakes"
Cohesion: 0.33
Nodes (6): Common Mistakes, [CRITICAL] Adding children to a leaf display object, [CRITICAL] Referencing DisplayObject, [HIGH] Forgetting isRenderGroup on large static subtrees, [HIGH] Treating child.x as world space, [MEDIUM] sortableChildren without zIndex

### Community 69 - "readCache.ts"
Cohesion: 0.53
Nodes (3): bumpDataVersion(), createVersionedCache(), trackWrites()

### Community 70 - "teamLayout.ts"
Cohesion: 0.08
Nodes (39): elkjs, TEAM_FRAME_GAP, TEAM_PACK_ASPECT, failOver(), getWorker(), Pending, requestLayout(), runInline() (+31 more)

### Community 71 - "Core Patterns"
Cohesion: 0.13
Nodes (14): API Reference, boundsArea optimization, Common Mistakes, Core Patterns, Culling, HIGH: Expecting automatic culling, HIGH: Using addChild on RenderLayer, MEDIUM: Expecting filters on ancestors to apply to layer children (+6 more)

### Community 72 - "Core Patterns"
Cohesion: 0.14
Nodes (13): Advanced shape primitives, Core Patterns, Default styles via setFillStyle / setStrokeStyle, Draw-time transforms, Drawing a texture directly, Gradients and patterns, GraphicsContext sharing, GraphicsContext utilities (+5 more)

### Community 73 - "dependencies"
Cohesion: 0.06
Nodes (33): dependencies, cloudinary, compression, cors, dotenv, express, express-rate-limit, helmet (+25 more)

### Community 74 - "seedQuestions.ts"
Cohesion: 0.29
Nodes (5): CODE_TTL_MS, escapeHtml(), pairs(), renderSignInCodeEmail(), { html }

### Community 77 - "FiltersPanel.tsx"
Cohesion: 0.18
Nodes (12): FilterCategory(), LION_GROUP_ICON, LION_ICON, Props, ALL_SECTIONS_CLOSED, Props, MemberFilterCategory(), TeamTypeFilterSection() (+4 more)

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

### Community 82 - "layout.tsx"
Cohesion: 0.05
Nodes (42): react-datepicker, metadata, nunito, RootLayout(), EDGE_STYLE_OPTIONS, ORIENTATION_OPTIONS, Props, Section() (+34 more)

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

### Community 88 - "pixi.js"
Cohesion: 0.12
Nodes (15): @gsap/react, pixi.js, MemberNodeAvatar(), Props, AVATAR_HIGH_RES_SIZE, CIRCLE_TEXTURE_SRC, PATTERN_TEXTURE_SRC, useCardHover() (+7 more)

### Community 89 - "Foundations"
Cohesion: 0.14
Nodes (13): Advanced, Foundations, pixijs-accessibility, pixijs-application, pixijs-core-concepts, pixijs-create, pixijs-custom-rendering, pixijs-environments (+5 more)

### Community 90 - "MemberStatus"
Cohesion: 0.11
Nodes (14): EMPTY_FILTER_STATE, FOUNDER_JOIN_YEAR, MENTOR_STATUSES, initialFiltersState, ActivityState, Active, Excluded, Inactive (+6 more)

### Community 91 - "pixijs/SKILL.md"
Cohesion: 0.18
Nodes (9): API Reference, Common Mistakes, [HIGH] buttonMode removed; use cursor, [HIGH] Default eventMode is passive, [HIGH] Move events only fire over the object in v8, [MEDIUM] Cursor does not inherit from parent, Quick Start, Fallback: canonical PixiJS docs (+1 more)

### Community 92 - "Core Concepts"
Cohesion: 0.18
Nodes (11): Container vs leaf (CRITICAL), Core Concepts, Culling, Destroy semantics, Lifecycle events, Masking, Render groups, Render order and explicit z-ordering (+3 more)

### Community 93 - "BadgeInput.tsx"
Cohesion: 0.26
Nodes (10): DropdownMenu(), BadgeInput(), Props, BadgeInputField(), useBadgeInputState(), ComboboxInput(), Props, ComboboxInputField() (+2 more)

### Community 94 - "utils/membersTree/index.ts"
Cohesion: 0.09
Nodes (42): EdgesLayer(), drawPolyline(), TeamEdgesLayer(), NODE_AVATAR_RADIUS, TEAM_EDGE_SPREAD_WIDTH, TEAM_HUB_OFFSET, Point, TeamEdge (+34 more)

### Community 99 - "checkConfig.ts"
Cohesion: 0.20
Nodes (13): assertConfig(), configProblems(), databaseName(), demoProblems(), Env, googleProblems(), good, Env (+5 more)

### Community 100 - "Core Patterns"
Cohesion: 0.12
Nodes (16): API Reference, Common Mistakes, Coordinate conversion, Core Patterns, Cumulative alpha (getGlobalAlpha), Global, local, and screen coordinates, [HIGH] Setting scale to 0, [MEDIUM] Confusing anchor and pivot (+8 more)

### Community 101 - "computeFilteredMembers.ts"
Cohesion: 0.29
Nodes (11): areSetsEqual(), computeFilteredMembers(), isFilterActive(), collectAllAncestorIds(), collectSiblingIds(), computeLineageBranchIds(), collectDescendantIds(), countVisibleTeams() (+3 more)

### Community 102 - "Render Loop"
Cohesion: 0.22
Nodes (8): API Reference, Common Mistakes, [CRITICAL] Treating the ticker callback arg as a number, Frame lifecycle, [HIGH] Using `updateTransform` for per-frame logic, [MEDIUM] Assuming ticker callbacks run after render, Quick Start, Render Loop

### Community 103 - "pixijs-core-concepts/SKILL.md"
Cohesion: 0.22
Nodes (8): API Reference, Decision guide, Environments, Quick concepts, Quick Start, Renderer = systems + pipes, The render loop, Topics

### Community 104 - "Container Hierarchy"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, Container Hierarchy, [CRITICAL] Adding children to a leaf, [HIGH] Destroying the parent without `children: true`, [MEDIUM] Mutating `children` during iteration, Quick Start

### Community 105 - "FilterState"
Cohesion: 0.17
Nodes (13): FilterGroupProps, Props, Props, Props, Props, FiltersActions, FiltersState, initialState (+5 more)

### Community 106 - "oidc.ts"
Cohesion: 0.15
Nodes (19): Container events, Transform, Lifecycle events, Origin (new in v8), openid-client, configs, cookieOptions(), finishLogin() (+11 more)

### Community 107 - "mailer/index.ts"
Cohesion: 0.27
Nodes (7): consoleMailer, getMailer(), createResendMailer(), ResendConfig, message, Mailer, MailMessage

### Community 108 - "Toolbar.tsx"
Cohesion: 0.05
Nodes (65): AccessLevel, AuthMethod, Challenge, ChallengeQuestion, fetchSession(), logout(), post(), RequestCodeOutcome (+57 more)

### Community 110 - "server/src/types/index.ts"
Cohesion: 0.07
Nodes (30): mongodb, ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember, STATUSES_MAP (+22 more)

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

### Community 113 - "TeamFrame"
Cohesion: 0.07
Nodes (38): Props, Props, Props, Props, Props, Props, TeamFramesLayer(), Props (+30 more)

### Community 114 - "seedQuestions.ts"
Cohesion: 0.20
Nodes (9): answerMatches(), CYRILLIC_TO_LATIN, normalizeAnswer(), MIN_ACTIVE_QUESTIONS, deleteQuestionSessions(), DEMO_QUESTIONS, active, items (+1 more)

### Community 116 - "pixijs-scene-core-concepts/SKILL.md"
Cohesion: 0.25
Nodes (6): API Reference, Leaf comparison: which skill covers which object, Quick Start, References, Tooling, When to use what (quick decisions)

### Community 118 - "Common Mistakes"
Cohesion: 0.50
Nodes (4): Common Mistakes, [HIGH] Accessing app.renderer before init() resolves, [HIGH] Setting DOMAdapter after Application.init, [MEDIUM] Treating `preference` as a guarantee

### Community 119 - "aiFaces.ts"
Cohesion: 0.38
Nodes (3): createFaceSource(), Options, source()

### Community 120 - "constants/canvas/index.ts"
Cohesion: 0.30
Nodes (7): lineageEdgePath, ACCIDENTAL_DRAG_MAX_DISTANCE, ACCIDENTAL_DRAG_MAX_MS, TAP_MOVE_TOLERANCE, PressStart, useTapWithoutDrag(), isTapGesture()

### Community 121 - "memberPresentation.ts"
Cohesion: 0.21
Nodes (9): CloudinaryTransformations, getPhotoUrlAsAvatar(), getPhotoUrlAsRoundAvatar(), RecruitmentTerm, matchesJoinSeason(), formatMemberRecruitmentSeason(), formatRecruitmentTerm(), RECRUITMENT_SEASON_EMOJI (+1 more)

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
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 932 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Skill router` connect `Utilities` to `pixijs/SKILL.md`?**
  _High betweenness centrality (0.109) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _42 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `EditMemberForm.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.11428571428571428 - nodes in this community are weakly interconnected._
- **Why does `react` connect `Sidebar.tsx` to `EditMemberForm.tsx`, `src/types/index.ts`, `MembersTreeContent.tsx`, `@heroicons/react`, `useCardAnimation.ts`, `PositionFormFields.tsx`, `filtersStore.ts`, `PhotoViewer.tsx`, `Member`, `MemberNode.tsx`, `pixi.js`, `LineageMemberSearch.tsx`, `MemberInfo.tsx`, `FilterState`, `useMembersStore`, `package.json`, `Direction`, `teamFrame.ts`, `TeamFormContent.tsx`, `http`, `src/utils/index.ts`, `FiltersPanel.tsx`, `layout.tsx`, `pixi.js`, `BadgeInput.tsx`, `utils/membersTree/index.ts`, `FilterState`, `Toolbar.tsx`, `TeamFrame`, `constants/canvas/index.ts`?**
  _High betweenness centrality (0.100) - this node is a cross-community bridge._
- **Should `src/types/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.09022556390977443 - nodes in this community are weakly interconnected._
- **Why does `Point` connect `utils/membersTree/index.ts` to `teamLayout.ts`, `Direction`, `teamFrame.ts`, `TeamFrame`, `src/utils/index.ts`, `Utilities`?**
  _High betweenness centrality (0.098) - this node is a cross-community bridge._
- **Should `MembersTreeContent.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.07610993657505286 - nodes in this community are weakly interconnected._