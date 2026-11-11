# Graph Report - best-family-tree  (2026-11-11)

## Corpus Check
- 490 files · ~164,985 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 28 file(s) not represented in the graph (top: .prisma 9, (none) 6, .css 6)

## Summary
- 2493 nodes · 6302 edges · 123 communities (117 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 64 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `80d2227f`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- MemberFormFields.tsx
- MemberInfo.tsx
- MemberInfoSocial.tsx
- MemberFilterCategory.tsx
- auth.ts
- Member
- constants/canvas/index.ts
- src/index.ts
- PositionFormFields.tsx
- Core Patterns
- challenges.ts
- TeamSearch.tsx
- anonymizeDemo.ts
- react
- PhotoViewer.tsx
- sessions.ts
- pixi.js
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
- memberRoutes.ts
- memberService.ts
- FilterState
- useMembersStore
- package.json
- emailCodes.ts
- FilterState
- Direction
- Core Patterns
- devDependencies
- ref_vitest
- ApplicationOptions reference
- CLAUDE.md
- useTreeLayout.ts
- mime.ts
- teamFrame.ts
- During the session
- EditMemberForm.tsx
- membersStore.ts
- AGENTS.md
- scripts
- constants/theme.ts
- BEST Family Tree
- next.config.mjs
- postcss.config.mjs
- Common Mistakes
- importAllowedEmails.ts
- Core Patterns
- Scene Objects
- Position
- Utilities
- types.ts
- inputs/index.ts
- BEST Family Tree
- Diagnosing Bugs
- CodeForm.tsx
- Common Mistakes
- MembersTreeContent.tsx
- protocol.ts
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
- layout.tsx
- Core Patterns
- Constructor options (Container-inherited)
- Test-Driven Development
- GSAP Core
- Core Patterns
- mailer/index.ts
- Foundations
- MemberStatus
- pixijs/SKILL.md
- Core Concepts
- FitViewButton.tsx
- Point
- utils/strings.ts
- start-prod.sh
- SettingsPanel.tsx
- useCanvasTheme.ts
- checkConfig.ts
- settingsStore.ts
- signInCodeEmail.ts
- Render Loop
- pixijs-core-concepts/SKILL.md
- Core Patterns
- utils/strings.ts
- ThemeContext.tsx
- useTreeDirection.ts
- ui/index.ts
- server/src/types/index.ts
- Renderers: WebGPU, WebGL, and Canvas
- treeStore.ts
- pixijs-scene-core-concepts/SKILL.md
- Container Hierarchy
- Common Mistakes
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

## Communities (123 total, 6 thin omitted)

### Community 0 - "MemberFormFields.tsx"
Cohesion: 0.13
Nodes (20): FieldError(), Props, Props, SocialMediaFormFields(), DateInput(), CheckedField, getStoredFieldValues(), Links (+12 more)

### Community 1 - "MemberInfo.tsx"
Cohesion: 0.16
Nodes (19): MemberAvatarImage(), MemberAvatarImageInner(), Props, MemberInfo(), MemberInfoActionIcon(), MentorMenteesDropdown(), CloudinaryTransformations, getPhotoUrlAsAvatar() (+11 more)

### Community 2 - "MemberInfoSocial.tsx"
Cohesion: 0.32
Nodes (6): Props, FacebookIcon(), InstagramIcon(), LinkedinIcon(), TelegramIcon(), MemberInfoSocial()

### Community 3 - "MemberFilterCategory.tsx"
Cohesion: 0.23
Nodes (10): ACTIVITY_OPTIONS, ACTIVITY_STATES, AVATAR_OPTIONS, AVATAR_VALUES, EMPTY_FILTER_STATE, JOIN_SEASONS, MEMBER_STATUSES, SEASON_OPTIONS (+2 more)

### Community 4 - "auth.ts"
Cohesion: 0.08
Nodes (38): AuthMethod, Challenge, ChallengeQuestion, logout(), post(), RequestCodeOutcome, requestEmailCode(), startChallenge() (+30 more)

### Community 5 - "Member"
Cohesion: 0.13
Nodes (18): MembersTree(), Props, Props, isTreeReady(), MembersTree, MembersTreeDynamic(), Props, TreeState (+10 more)

### Community 6 - "constants/canvas/index.ts"
Cohesion: 0.06
Nodes (48): AVATAR_HIT_AREA, CARD_PIVOT, EMPTY_FILTERS, getCullArea(), MemberNode(), NODE_HIT_AREA, NODE_PIVOT, Props (+40 more)

### Community 7 - "src/index.ts"
Cohesion: 0.17
Nodes (11): express, app, checkOrigin(), WRITE_METHODS, requireSession(), router, router, router (+3 more)

### Community 8 - "PositionFormFields.tsx"
Cohesion: 0.13
Nodes (31): PositionAssignmentFields(), Props, PositionFormFields(), Props, createEmptyPositionRow(), EMPTY_POSITION_ROW, findTeamByName(), getPositionRowSummary() (+23 more)

### Community 9 - "Core Patterns"
Cohesion: 0.11
Nodes (17): API Reference, Common Mistakes, Coordinate conversion, Core Patterns, Cumulative alpha (getGlobalAlpha), Global, local, and screen coordinates, [HIGH] Setting scale to 0, [MEDIUM] Confusing anchor and pivot (+9 more)

### Community 10 - "challenges.ts"
Cohesion: 0.11
Nodes (26): express-rate-limit, answerMatches(), CYRILLIC_TO_LATIN, normalizeAnswer(), ChallengeState, isExpired(), isSolved(), pickRandom() (+18 more)

### Community 11 - "TeamSearch.tsx"
Cohesion: 0.10
Nodes (29): LionIcon(), DemoBadge(), compare(), getSearchable(), MemberSearch(), Props, Props, SearchBar() (+21 more)

### Community 12 - "anonymizeDemo.ts"
Cohesion: 0.14
Nodes (17): allowed, args, byId, factory, GROUP_NAMES, real, skipPhotos, SOCIALS (+9 more)

### Community 13 - "react"
Cohesion: 0.11
Nodes (18): react, react-dom, Props, PositionBadge(), Props, Props, Sidebar(), SidebarFooterContext (+10 more)

### Community 14 - "PhotoViewer.tsx"
Cohesion: 0.11
Nodes (32): zustand, DropdownPortal(), Props, cache, loadImageAspect(), PhotoOpenButton(), Props, PhotoViewer() (+24 more)

### Community 15 - "sessions.ts"
Cohesion: 0.17
Nodes (19): isDemoMode(), isProduction(), SESSION_COOKIE, SESSION_TTL_MS, useSecureCookie(), buildSessionInfo(), clearSessionCookie(), createSession() (+11 more)

### Community 16 - "pixi.js"
Cohesion: 0.11
Nodes (17): @pixi/react, PixiElements, @gsap/react, pixi.js, pixi-viewport, BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation() (+9 more)

### Community 17 - "emailRoutes.ts"
Cohesion: 0.19
Nodes (16): authSecret(), EligibilityMember, EmailIdentity, normalizeEmail(), resolveEmailIdentity(), member(), loadEmailIdentity(), prismaCodeStore (+8 more)

### Community 18 - "filterTeams.ts"
Cohesion: 0.21
Nodes (17): matchesAvatar(), matchesBirthday(), matchesJoinSeason(), matchesJoinYear(), memberMatchesFilters(), parseDateStr(), toDateVal(), toMMDD() (+9 more)

### Community 19 - "catalogValidation.ts"
Cohesion: 0.08
Nodes (31): Renderer selection at runtime, [MEDIUM] Using container.name instead of container.label, deleteCloudinaryImage(), extractCloudinaryPublicId(), parsePositionsPayload(), router, rejectUpload(), router (+23 more)

### Community 20 - "Member"
Cohesion: 0.10
Nodes (18): date-fns, NodesLayer(), Props, Props, Props, Props, Props, Member (+10 more)

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "useCardAnimation.ts"
Cohesion: 0.18
Nodes (17): clamp01(), easeBackOut, easePower2In, easePower2Out, entries, Entry, finishCardReveal(), registerCardReveal() (+9 more)

### Community 23 - "Member"
Cohesion: 0.12
Nodes (28): changesStructure(), EMPTY_INDEX, isSamePosition(), MembersState, withIndex(), ChildrenMap, MemberMetrics, MembersByMentorId (+20 more)

### Community 24 - "teamService.ts"
Cohesion: 0.10
Nodes (35): ResolvedPosition, resolvePosition(), MemberTransaction, assertCanEditMembers(), deleteMember(), deriveTeamName(), resolveRole(), resolveTeam() (+27 more)

### Community 25 - "filterSearchParams.ts"
Cohesion: 0.14
Nodes (17): Props, AvatarFilterValue, ActivityState, Active, Excluded, Inactive, RecruitmentSeason, filtersToSearchParams() (+9 more)

### Community 26 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, esModuleInterop, forceConsistentCasingInFileNames, module, moduleResolution, noImplicitAny, outDir, paths (+12 more)

### Community 27 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+12 more)

### Community 28 - "teamFrame.ts"
Cohesion: 0.07
Nodes (49): MemberNodeCard(), Props, TeamBadge(), FILL_ALPHA, lerp(), Props, STROKE_ALPHA, TeamFrame() (+41 more)

### Community 29 - "react"
Cohesion: 0.12
Nodes (21): DropdownMenu(), Props, BadgeInput(), Props, BadgeInputField(), Props, useBadgeInputState(), LineageFilterSection() (+13 more)

### Community 30 - "dependencies"
Cohesion: 0.11
Nodes (19): dependencies, date-fns, dotenv, elkjs, gsap, @gsap/react, @heroicons/react, lodash (+11 more)

### Community 31 - "server/package.json"
Cohesion: 0.06
Nodes (30): cloudinary, compression, concurrently, cors, helmet, multer, multer-storage-cloudinary, nodemon (+22 more)

### Community 32 - "memberRoutes.ts"
Cohesion: 0.11
Nodes (22): @prisma/adapter-pg, CONTACT_FIELDS, toMemberResponse(), adapter, prisma, loadFamilyTree, loadReducedFamilyTree, router (+14 more)

### Community 33 - "memberService.ts"
Cohesion: 0.10
Nodes (29): zod, buildMemberFields(), buildMemberUpdateFields(), buildSharedFields(), buildSparseMemberFields(), parsePhoneNumbers(), getPositionKey(), syncPositions() (+21 more)

### Community 34 - "FilterState"
Cohesion: 0.14
Nodes (21): BirthdayFilterSection(), Props, CheckboxGroupFilterSection(), Option, Props, ClearButton(), FilterCheckbox(), Props (+13 more)

### Community 35 - "useMembersStore"
Cohesion: 0.39
Nodes (7): membersActions, {
  setMembers,
  reloadMembers,
  addMember,
  updateMember,
  selectMember,
  getMentorsList,
}, useMembersMap(), useMentees(), useSelectedId(), useSelectedMember(), useMembersStore

### Community 36 - "package.json"
Cohesion: 0.11
Nodes (18): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+10 more)

### Community 37 - "emailCodes.ts"
Cohesion: 0.22
Nodes (10): CODE_TTL_MS, CodeStore, generateCode(), hashCode(), issueCode(), MAX_CODE_ATTEMPTS, sameHash(), StoredCode (+2 more)

### Community 38 - "FilterState"
Cohesion: 0.19
Nodes (12): JoinYearFilterSection(), Props, Props, Props, Props, Props, derive(), FiltersActions (+4 more)

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
Cohesion: 0.17
Nodes (7): @faker-js/faker, createIdentityFactory(), firstFree(), OPERATOR_CODES, none, MAP, translit()

### Community 43 - "ApplicationOptions reference"
Cohesion: 0.06
Nodes (32): Accessibility, ApplicationOptions reference, Background, Culler (CullerPluginOptions), Deprecated (GC — prefer the unified options above), Events, Garbage collection, Graphics (+24 more)

### Community 44 - "CLAUDE.md"
Cohesion: 0.29
Nodes (6): Commands, Conventions, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout

### Community 45 - "useTreeLayout.ts"
Cohesion: 0.11
Nodes (30): gsap, pixi-filters, NODE_HOVER_ANIMATION_DURATION, NODE_HOVER_SCALE, ZOOMED_OUT_HOVER_SCALE_MAP, NODE_HEIGHT, getFitViewTargetScale(), useFitViewAnimation() (+22 more)

### Community 46 - "mime.ts"
Cohesion: 0.29
Nodes (11): RFC-2045, RFC-2047, createGmailMailer(), GmailConfig, base64Body(), buildMime(), encodeHeaderText(), formatAddress() (+3 more)

### Community 47 - "teamFrame.ts"
Cohesion: 0.09
Nodes (33): pixijs-scene-graphics, Paths and complex shapes, TEAM_COLUMN_GAP, TEAM_EDGE_DROP, TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_SPREAD_WIDTH, TEAM_EDGE_STUB, TEAM_FRAME_HEADER (+25 more)

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "EditMemberForm.tsx"
Cohesion: 0.09
Nodes (48): AddMemberForm(), buildMemberFormData(), ClearButton(), SubmitButton(), ConfirmDeleteControl(), Props, describeSubmitError(), EditMemberForm() (+40 more)

### Community 50 - "membersStore.ts"
Cohesion: 0.09
Nodes (42): addMember(), ApiError, toApiError(), deleteMember(), editMember(), fetchFamilyTree(), fetchMemberById(), fetchMentorsList() (+34 more)

### Community 51 - "AGENTS.md"
Cohesion: 0.29
Nodes (6): Commands, Conventions, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout

### Community 52 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, dev, dev:webpack, lint, start, test, typecheck

### Community 53 - "constants/theme.ts"
Cohesion: 0.16
Nodes (10): darkTheme, DEFAULT_THEME, lightTheme, THEMES, ThemeContextValue, CssThemeTokens, ThemeDefinition, ThemeId (+2 more)

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
Cohesion: 0.18
Nodes (10): pixijs-html-source, pixijs-scene-container, pixijs-scene-dom-container, pixijs-scene-gif, pixijs-scene-mesh, pixijs-scene-particle-container, pixijs-scene-sprite, pixijs-scene-text (+2 more)

### Community 61 - "Position"
Cohesion: 0.40
Nodes (5): Position, Bottom, Left, Right, Top

### Community 62 - "Utilities"
Cohesion: 0.15
Nodes (13): pixijs-assets, pixijs-blend-modes, pixijs-color, pixijs-events, pixijs-math, pixijs-ticker, Utilities, Advanced (+5 more)

### Community 63 - "types.ts"
Cohesion: 0.23
Nodes (10): canEditMember(), hasAccess(), RANK, AccessRank, Express, Request, Session, requireAccess() (+2 more)

### Community 64 - "inputs/index.ts"
Cohesion: 0.16
Nodes (13): next, AvatarFileInput(), Props, FormCheckbox(), Props, Props, Props, toYear() (+5 more)

### Community 65 - "BEST Family Tree"
Cohesion: 0.12
Nodes (15): 1. Clone and configure environment, 2. Start the application, 3. Run database migrations, 4. Access the app, Architecture, Available Commands, Backend Commands (run inside container), BEST Family Tree (+7 more)

### Community 66 - "Diagnosing Bugs"
Cohesion: 0.13
Nodes (14): Completion criterion: a tight loop that goes red, Diagnosing Bugs, Minimise, Non-deterministic bugs, Phase 1: Build a feedback loop, Phase 2: Reproduce + minimise, Phase 3: Hypothesise, Phase 4: Instrument (+6 more)

### Community 67 - "CodeForm.tsx"
Cohesion: 0.15
Nodes (14): Props, Props, EmailForm(), Props, PAIR_COLORS, Props, GLOW, Props (+6 more)

### Community 68 - "Common Mistakes"
Cohesion: 0.33
Nodes (6): Common Mistakes, [CRITICAL] Adding children to a leaf display object, [CRITICAL] Referencing DisplayObject, [HIGH] Forgetting isRenderGroup on large static subtrees, [HIGH] Treating child.x as world space, [MEDIUM] sortableChildren without zIndex

### Community 69 - "MembersTreeContent.tsx"
Cohesion: 0.11
Nodes (30): @pixi/react, AccessLevel, fetchSession(), SessionInfo, Viewport(), MemberSidebar(), ACCENT_COLOR_MAP, EVENT_FEATURES (+22 more)

### Community 70 - "protocol.ts"
Cohesion: 0.08
Nodes (39): elkjs, TEAM_FRAME_GAP, TEAM_PACK_ASPECT, failOver(), getWorker(), Pending, requestLayout(), runInline() (+31 more)

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
Cohesion: 0.22
Nodes (11): FilterCategory(), LION_GROUP_ICON, LION_ICON, Props, FilterGroupProps, RoleFilterSection(), TeamFilterCategory(), MaskIcon() (+3 more)

### Community 75 - "src/types/index.ts"
Cohesion: 0.11
Nodes (34): @heroicons/react, tailwind-merge, Props, Props, Props, Props, Props, Props (+26 more)

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

### Community 82 - "layout.tsx"
Cohesion: 0.20
Nodes (5): react-datepicker, metadata, nunito, RootLayout(), AuroraBackground()

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

### Community 88 - "mailer/index.ts"
Cohesion: 0.29
Nodes (6): consoleMailer, createResendMailer(), ResendConfig, message, Mailer, MailMessage

### Community 89 - "Foundations"
Cohesion: 0.14
Nodes (13): Advanced, Foundations, pixijs-accessibility, pixijs-application, pixijs-core-concepts, pixijs-create, pixijs-custom-rendering, pixijs-environments (+5 more)

### Community 90 - "MemberStatus"
Cohesion: 0.21
Nodes (9): FOUNDER_JOIN_YEAR, MEMBER_STATUSES, MENTOR_STATUSES, MemberStatus, Alumni, Baby, Full, Observer (+1 more)

### Community 91 - "pixijs/SKILL.md"
Cohesion: 0.18
Nodes (9): API Reference, Common Mistakes, [HIGH] buttonMode removed; use cursor, [HIGH] Default eventMode is passive, [HIGH] Move events only fire over the object in v8, [MEDIUM] Cursor does not inherit from parent, Quick Start, Fallback: canonical PixiJS docs (+1 more)

### Community 92 - "Core Concepts"
Cohesion: 0.18
Nodes (11): Container vs leaf (CRITICAL), Core Concepts, Culling, Destroy semantics, Lifecycle events, Masking, Render groups, Render order and explicit z-ordering (+3 more)

### Community 93 - "FitViewButton.tsx"
Cohesion: 0.35
Nodes (7): FitViewButton(), Props, Props, ToolbarIconButton(), Props, ToolbarTooltip(), useHoverTooltip()

### Community 94 - "Point"
Cohesion: 0.12
Nodes (36): EdgesLayer(), drawPolyline(), TeamEdgesLayer(), DEFAULT_NODE_HEIGHT, DEFAULT_NODE_WIDTH, DEFAULT_POSITION, FLOW_VIEWPORT_DIRECTION, FlowViewportDirection (+28 more)

### Community 95 - "utils/strings.ts"
Cohesion: 0.22
Nodes (10): FiltersHeader(), ALL_SECTIONS_CLOSED, FiltersPanel(), Props, MemberFilterCategory(), OPTIONS, Props, ViewModeSwitch() (+2 more)

### Community 97 - "SettingsPanel.tsx"
Cohesion: 0.22
Nodes (8): EDGE_STYLE_OPTIONS, ORIENTATION_OPTIONS, Props, Section(), SectionProps, SettingsPanel(), THEME_OPTIONS, SegmentedSwitch()

### Community 98 - "useCanvasTheme.ts"
Cohesion: 0.24
Nodes (9): FONT_FAMILY, NODE_SUBTITLE_STYLE, NODE_TITLE_STYLE, NODE_TOOLTIP_TEXT_STYLE, TEXT_RESOLUTION, buildCanvasColors(), CanvasColors, CanvasTextStyles (+1 more)

### Community 99 - "checkConfig.ts"
Cohesion: 0.35
Nodes (7): assertConfig(), configProblems(), databaseName(), demoProblems(), Env, good, checkAnonymizeAllowed()

### Community 100 - "settingsStore.ts"
Cohesion: 0.31
Nodes (8): DEFAULT_SETTINGS, SETTINGS_STORAGE_KEY, SettingsActions, SettingsState, initialState, { storageMock }, OrientationSetting, ThemePreference

### Community 101 - "signInCodeEmail.ts"
Cohesion: 0.33
Nodes (4): escapeHtml(), pairs(), renderSignInCodeEmail(), { html }

### Community 102 - "Render Loop"
Cohesion: 0.22
Nodes (8): API Reference, Common Mistakes, [CRITICAL] Treating the ticker callback arg as a number, Frame lifecycle, [HIGH] Using `updateTransform` for per-frame logic, [MEDIUM] Assuming ticker callbacks run after render, Quick Start, Render Loop

### Community 103 - "pixijs-core-concepts/SKILL.md"
Cohesion: 0.22
Nodes (8): API Reference, Decision guide, Environments, Quick concepts, Quick Start, Renderer = systems + pipes, The render loop, Topics

### Community 104 - "Core Patterns"
Cohesion: 0.22
Nodes (9): Add, remove, swap, Child queries, Core Patterns, Destroying sub-trees, Iterating children, Label-based tree navigation, Lifecycle events, Reparenting with transform preservation (+1 more)

### Community 105 - "utils/strings.ts"
Cohesion: 0.31
Nodes (6): Props, formatCount(), PARTICIPANT_FORMS, PluralForms, pluralizeUk(), TEAM_FORMS

### Community 106 - "ThemeContext.tsx"
Cohesion: 0.39
Nodes (6): applyCssTokens(), ThemeContext, ThemeProvider(), noopSubscribe(), useIsHydrated(), camelToCssVar()

### Community 107 - "useTreeDirection.ts"
Cohesion: 0.48
Nodes (5): useIsMobileScreen(), useResolvedDirection(), useMediaQuery(), readLegacyTheme(), useSettingsStore

### Community 110 - "server/src/types/index.ts"
Cohesion: 0.07
Nodes (30): mongodb, ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember, STATUSES_MAP (+22 more)

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

### Community 113 - "treeStore.ts"
Cohesion: 0.10
Nodes (30): Props, Props, EMPTY_IDS, SharpAvatarTracker(), View, Props, Props, TeamFramesLayer() (+22 more)

### Community 116 - "pixijs-scene-core-concepts/SKILL.md"
Cohesion: 0.25
Nodes (6): API Reference, Leaf comparison: which skill covers which object, Quick Start, References, Tooling, When to use what (quick decisions)

### Community 117 - "Container Hierarchy"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, Container Hierarchy, [CRITICAL] Adding children to a leaf, [HIGH] Destroying the parent without `children: true`, [MEDIUM] Mutating `children` during iteration, Quick Start

### Community 118 - "Common Mistakes"
Cohesion: 0.50
Nodes (4): Common Mistakes, [HIGH] Accessing app.renderer before init() resolves, [HIGH] Setting DOMAdapter after Application.init, [MEDIUM] Treating `preference` as a guarantee

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
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 898 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Skill router` connect `Utilities` to `pixijs/SKILL.md`?**
  _High betweenness centrality (0.133) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _42 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `MemberFormFields.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.12923076923076923 - nodes in this community are weakly interconnected._
- **Why does `Point` connect `Point` to `protocol.ts`, `useTreeLayout.ts`, `teamFrame.ts`, `treeStore.ts`, `Utilities`?**
  _High betweenness centrality (0.111) - this node is a cross-community bridge._
- **Should `auth.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07993197278911565 - nodes in this community are weakly interconnected._
- **Why does `Utilities` connect `Utilities` to `Point`?**
  _High betweenness centrality (0.104) - this node is a cross-community bridge._
- **Should `Member` be split into smaller, more focused modules?**
  _Cohesion score 0.1341991341991342 - nodes in this community are weakly interconnected._