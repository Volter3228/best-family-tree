# Graph Report - best-family-tree  (2026-11-14)

## Corpus Check
- 514 files · ~171,950 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 28 file(s) not represented in the graph (top: .prisma 9, (none) 6, .css 6)

## Summary
- 2599 nodes · 6556 edges · 123 communities (115 shown, 8 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 68 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ca87ce0d`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- TeamFormContent.tsx
- src/types/index.ts
- Toolbar.tsx
- MemberFilterCategory.tsx
- memberService.ts
- src/index.ts
- MemberNode.tsx
- emailRoutes.ts
- PositionFormFields.tsx
- ApplicationOptions reference
- challenges.ts
- TeamSearch.tsx
- anonymizeDemo.ts
- react
- PhotoViewer.tsx
- useDashedPathAnimation.ts
- ThemeContext.tsx
- teamFrame.ts
- constants/theme.ts
- catalogValidation.ts
- scripts
- HTML Report Format
- MemberNodeAvatar.tsx
- SettingsPanel.tsx
- teamService.ts
- settingsStore.ts
- compilerOptions
- compilerOptions
- pixi.js
- membersStore.ts
- dependencies
- server/package.json
- MemberInfoSocial.tsx
- devDependencies
- FilterState
- Skill router
- package.json
- clientInstance.ts
- MembersTreeContent.tsx
- Direction
- Core Patterns
- devDependencies
- TeamInfoSidebar.tsx
- mime.ts
- CLAUDE.md
- Core Patterns
- eligibility.ts
- EditMemberForm.tsx
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
- constants/canvas/index.ts
- contactKeys.ts
- useTeamForm.ts
- Member
- BEST Family Tree
- Diagnosing Bugs
- MemberFormFields.tsx
- layout.tsx
- mailer/index.ts
- teamLayout.ts
- Core Patterns
- Core Patterns
- dependencies
- utils/strings.ts
- useMeta.ts
- fakeIdentity.ts
- importAllowedEmails.ts
- Core Patterns
- Core Patterns
- Core Patterns
- Common Mistakes
- src/utils/index.ts
- Core Patterns
- Constructor options (Container-inherited)
- Test-Driven Development
- GSAP Core
- Core Patterns
- Foundations
- memberPresentation.ts
- Common Mistakes
- Core Concepts
- hooks/index.ts
- telegramEligibility.ts
- backup-prod.sh
- start-prod.sh
- restore-local.sh
- TeamLogo.tsx
- checkConfig.ts
- Core Patterns
- filterMembers.ts
- Render Loop
- pixijs-core-concepts/SKILL.md
- LineageMemberSearch.tsx
- constants/filters.ts
- useTreeDirection.ts
- useSearchSuggestions.ts
- Toolbar.tsx
- Quick concepts
- server/src/types/index.ts
- Renderers: WebGPU, WebGL, and Canvas
- seedQuestions.ts
- next
- pixijs-scene-core-concepts/SKILL.md
- aiFaces.ts
- GSAP with React
- hitl-loop.template.sh
- Core Patterns
- GSAP Performance
- GSAP Timeline
- Common Mistakes

## God Nodes (most connected - your core abstractions)
1. `react` - 117 edges
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

## Communities (123 total, 8 thin omitted)

### Community 0 - "TeamFormContent.tsx"
Cohesion: 0.14
Nodes (25): SubmitButton(), FormMessages(), FormCheckbox(), Props, LogoFileInput(), TextAreaInput(), TextInput(), Props (+17 more)

### Community 1 - "src/types/index.ts"
Cohesion: 0.11
Nodes (33): tailwind-merge, FitViewButton(), Props, Props, ToolbarIconButton(), Props, ToolbarTooltip(), useHoverTooltip() (+25 more)

### Community 2 - "Toolbar.tsx"
Cohesion: 0.21
Nodes (13): AccountPanel(), DemoBadge(), FiltersPanel(), SearchBar(), Props, Toolbar(), usePanelToggle(), derive() (+5 more)

### Community 3 - "MemberFilterCategory.tsx"
Cohesion: 0.12
Nodes (24): FilterCategory(), LION_GROUP_ICON, LION_ICON, Props, FilterGroupProps, ALL_SECTIONS_CLOSED, Props, MemberFilterCategory() (+16 more)

### Community 4 - "memberService.ts"
Cohesion: 0.07
Nodes (44): zod, buildMemberFields(), buildMemberUpdateFields(), buildSharedFields(), buildSparseMemberFields(), parsePhoneNumbers(), getPositionKey(), syncPositions() (+36 more)

### Community 5 - "src/index.ts"
Cohesion: 0.09
Nodes (27): compression, cors, helmet, canEditMember(), hasAccess(), RANK, CONTACT_FIELDS, toMemberResponse() (+19 more)

### Community 6 - "MemberNode.tsx"
Cohesion: 0.07
Nodes (43): pixi.js, BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props, acquireEmojiTextures(), createEmojiTexture(), generateRandomPosition() (+35 more)

### Community 7 - "emailRoutes.ts"
Cohesion: 0.08
Nodes (41): express, openid-client, CHALLENGE_TTL_MS, isDemoMode(), isProduction(), QUESTIONS_SHOWN, SESSION_COOKIE, SESSION_TTL_MS (+33 more)

### Community 8 - "PositionFormFields.tsx"
Cohesion: 0.11
Nodes (34): FieldError(), PositionAssignmentFields(), PositionFormFields(), Props, createEmptyPositionRow(), EMPTY_POSITION_ROW, findTeamByName(), getPositionRowSummary() (+26 more)

### Community 9 - "ApplicationOptions reference"
Cohesion: 0.06
Nodes (32): Accessibility, ApplicationOptions reference, Background, Culler (CullerPluginOptions), Deprecated (GC — prefer the unified options above), Events, Garbage collection, Graphics (+24 more)

### Community 10 - "challenges.ts"
Cohesion: 0.11
Nodes (25): express-rate-limit, ChallengeState, isExpired(), isSolved(), pickRandom(), swapQuestion(), SwapResult, base (+17 more)

### Community 11 - "TeamSearch.tsx"
Cohesion: 0.15
Nodes (18): compare(), getSearchable(), MemberSearch(), Props, Props, Props, SearchPanel(), Props (+10 more)

### Community 12 - "anonymizeDemo.ts"
Cohesion: 0.12
Nodes (19): allowed, args, byId, factory, GROUP_NAMES, memberPhotos, nextFace, real (+11 more)

### Community 13 - "react"
Cohesion: 0.11
Nodes (17): react, react-dom, Props, Props, Props, Sidebar(), SidebarFooterContext, Props (+9 more)

### Community 14 - "PhotoViewer.tsx"
Cohesion: 0.09
Nodes (37): zustand, isTreeReady(), MembersTree, MembersTreeDynamic(), TreeState, Props, PhotoViewer(), Viewer() (+29 more)

### Community 15 - "useDashedPathAnimation.ts"
Cohesion: 0.12
Nodes (24): LineageEdge(), DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN, MIN_ANIM_DURATION, PATTERN_LEN, RETRACT_BASE (+16 more)

### Community 16 - "ThemeContext.tsx"
Cohesion: 0.39
Nodes (6): applyCssTokens(), ThemeContext, ThemeProvider(), noopSubscribe(), useIsHydrated(), camelToCssVar()

### Community 17 - "teamFrame.ts"
Cohesion: 0.10
Nodes (33): TEAM_COLUMN_GAP, TEAM_EDGE_DROP, TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_SPREAD_WIDTH, TEAM_EDGE_STUB, TEAM_FRAME_HEADER, TEAM_FRAME_MIN_WIDTH, TEAM_FRAME_PADDING (+25 more)

### Community 18 - "constants/theme.ts"
Cohesion: 0.16
Nodes (10): darkTheme, DEFAULT_THEME, lightTheme, THEMES, ThemeContextValue, CssThemeTokens, ThemeDefinition, ThemeId (+2 more)

### Community 19 - "catalogValidation.ts"
Cohesion: 0.07
Nodes (32): cloudinary, multer, multer-storage-cloudinary, deleteCloudinaryImage(), extractCloudinaryPublicId(), MAX_UPLOAD_BYTES, uploadMiddleware(), parsePositionsPayload() (+24 more)

### Community 20 - "scripts"
Cohesion: 0.12
Nodes (16): scripts, auth:grant, auth:import-emails, auth:preview-email, auth:report-duplicate-contacts, auth:seed-grants, auth:seed-questions, build (+8 more)

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "MemberNodeAvatar.tsx"
Cohesion: 0.13
Nodes (18): MemberNodeAvatar(), Props, Props, AVATAR_HIGH_RES_SIZE, AVATAR_LOW_RES_SIZE, GRID_GAP_X, GRID_LR_COLUMNS, MAX_RENDER_RESOLUTION (+10 more)

### Community 23 - "SettingsPanel.tsx"
Cohesion: 0.16
Nodes (11): OPTIONS, Props, ViewModeSwitch(), EDGE_STYLE_OPTIONS, ORIENTATION_OPTIONS, Props, Section(), SectionProps (+3 more)

### Community 24 - "teamService.ts"
Cohesion: 0.14
Nodes (28): ResolvedPosition, resolvePosition(), MemberTransaction, deleteMember(), deriveTeamName(), resolveRole(), resolveTeam(), resolveTeamType() (+20 more)

### Community 25 - "settingsStore.ts"
Cohesion: 0.33
Nodes (8): DEFAULT_SETTINGS, SETTINGS_STORAGE_KEY, SettingsActions, SettingsState, initialState, { storageMock }, OrientationSetting, ThemePreference

### Community 26 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, esModuleInterop, forceConsistentCasingInFileNames, module, moduleResolution, noImplicitAny, outDir, paths (+12 more)

### Community 27 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+12 more)

### Community 28 - "pixi.js"
Cohesion: 0.05
Nodes (61): Props, TeamBadge(), FILL_ALPHA, lerp(), Props, STROKE_ALPHA, TeamFrame(), Props (+53 more)

### Community 29 - "membersStore.ts"
Cohesion: 0.11
Nodes (27): Props, Props, Props, MemberFormFields(), Props, Props, MEMBER_STATUSES, membersActions (+19 more)

### Community 30 - "dependencies"
Cohesion: 0.11
Nodes (19): dependencies, date-fns, dotenv, elkjs, gsap, @gsap/react, @heroicons/react, lodash (+11 more)

### Community 31 - "server/package.json"
Cohesion: 0.08
Nodes (24): concurrently, @faker-js/faker, nodemon, @prisma/adapter-pg, @prisma/config, ts-node, tsx, @types/compression (+16 more)

### Community 32 - "MemberInfoSocial.tsx"
Cohesion: 0.36
Nodes (6): FacebookIcon(), InstagramIcon(), LinkedinIcon(), TelegramIcon(), Props, MemberInfoSocial()

### Community 33 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, concurrently, @faker-js/faker, nodemon, ts-node, tsx, @types/compression, @types/cors (+5 more)

### Community 34 - "FilterState"
Cohesion: 0.12
Nodes (25): BirthdayFilterSection(), Props, Option, Props, ClearButton(), FilterCheckbox(), Props, FilterSection() (+17 more)

### Community 35 - "Skill router"
Cohesion: 0.15
Nodes (13): Advanced, pixijs-accessibility, pixijs-assets, pixijs-blend-modes, pixijs-custom-rendering, pixijs-filters, pixijs-performance, Advanced (+5 more)

### Community 36 - "package.json"
Cohesion: 0.10
Nodes (19): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+11 more)

### Community 37 - "clientInstance.ts"
Cohesion: 0.13
Nodes (12): deleteQuestionSessions(), adapter, prisma, level, [ref, levelArg], ADMINS_BY_EMAIL, EDITORS_BY_NAME, Target (+4 more)

### Community 38 - "MembersTreeContent.tsx"
Cohesion: 0.11
Nodes (22): @pixi/react, PixiElements, @pixi/react, pixi-viewport, SharpAvatarTracker(), Props, Viewport(), MembersTree() (+14 more)

### Community 39 - "Direction"
Cohesion: 0.10
Nodes (47): EdgesLayer(), Props, Props, drawPolyline(), Props, TeamEdgesLayer(), Props, FIXED_EDGE_WIDTH (+39 more)

### Community 40 - "Core Patterns"
Cohesion: 0.14
Nodes (18): Adding and removing children, Bounds and coordinate conversion, Constructor options, Container events, Core Patterns, Destroy, Finding and removing from parent, Leaves vs containers (+10 more)

### Community 41 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+5 more)

### Community 42 - "TeamInfoSidebar.tsx"
Cohesion: 0.20
Nodes (16): AccessLevel, fetchSession(), SessionInfo, MemberSidebar(), Props, TeamInfoSidebar(), TeamInfo(), MemberSidebarContent() (+8 more)

### Community 43 - "mime.ts"
Cohesion: 0.29
Nodes (11): RFC-2045, RFC-2047, createGmailMailer(), GmailConfig, base64Body(), buildMime(), encodeHeaderText(), formatAddress() (+3 more)

### Community 44 - "CLAUDE.md"
Cohesion: 0.25
Nodes (7): Commands, Conventions, Deployment & data, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout

### Community 45 - "Core Patterns"
Cohesion: 0.12
Nodes (15): Add, remove, swap, API Reference, Child queries, Common Mistakes, Container Hierarchy, Core Patterns, [CRITICAL] Adding children to a leaf, Destroying sub-trees (+7 more)

### Community 46 - "eligibility.ts"
Cohesion: 0.14
Nodes (21): authSecret(), EmailIdentity, normalizeEmail(), resolveEmailIdentity(), loadEmailIdentity(), prismaCodeStore, callbackErrorRedirect(), decideGoogleSignIn() (+13 more)

### Community 47 - "EditMemberForm.tsx"
Cohesion: 0.26
Nodes (14): addMember(), deleteMember(), editMember(), AddMemberForm(), buildMemberFormData(), ClearButton(), ConfirmDeleteControl(), Props (+6 more)

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "ManageForm.tsx"
Cohesion: 0.19
Nodes (16): DropdownSelectInput(), ManageForm(), MemberMode, Section, SECTIONS, TEAM_KINDS, TeamKind, MemberEditPanel() (+8 more)

### Community 50 - "http"
Cohesion: 0.20
Nodes (16): ApiError, toApiError(), fetchFamilyTree(), fetchMemberById(), fetchMentorsList(), createRole(), createTeamType(), fetchRoles() (+8 more)

### Community 51 - "AGENTS.md"
Cohesion: 0.25
Nodes (7): Commands, Conventions, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout, This is NOT the Next.js you know

### Community 52 - "scripts"
Cohesion: 0.20
Nodes (10): scripts, build, db:backup-prod, db:restore-local, dev, dev:webpack, lint, start (+2 more)

### Community 53 - "emailCodes.ts"
Cohesion: 0.11
Nodes (18): CODE_TTL_MS, CodeOwner, CodeStore, generateCode(), hashCode(), issueCode(), MAX_CODE_ATTEMPTS, sameHash() (+10 more)

### Community 54 - "BEST Family Tree"
Cohesion: 0.33
Nodes (5): BEST Family Tree, People, Sign-in, Teams, Views

### Community 57 - "MemberInfo.tsx"
Cohesion: 0.11
Nodes (27): @heroicons/react, next, LionIcon(), Props, AvatarFileInput(), Props, Props, MemberAvatarImage() (+19 more)

### Community 58 - "pixijs/SKILL.md"
Cohesion: 0.18
Nodes (9): API Reference, Common Mistakes, [HIGH] buttonMode removed; use cursor, [HIGH] Default eventMode is passive, [HIGH] Move events only fire over the object in v8, [MEDIUM] Cursor does not inherit from parent, Quick Start, Fallback: canonical PixiJS docs (+1 more)

### Community 59 - "Core Patterns"
Cohesion: 0.12
Nodes (17): Application destroy/recreate cycle, Batching optimization, cacheAsTexture for performance, Core Patterns, Culling, Filters and masks cost, Graphics performance, Low-level rendering optimizations (+9 more)

### Community 60 - "Scene Objects"
Cohesion: 0.14
Nodes (13): pixijs-html-source, pixijs-scene-container, pixijs-scene-dom-container, pixijs-scene-gif, pixijs-scene-graphics, pixijs-scene-mesh, pixijs-scene-particle-container, pixijs-scene-sprite (+5 more)

### Community 61 - "constants/canvas/index.ts"
Cohesion: 0.13
Nodes (16): @gsap/react, NODE_HOVER_ANIMATION_DURATION, NODE_HOVER_SCALE, ZOOMED_OUT_HOVER_SCALE_MAP, lineageEdgePath, ACCIDENTAL_DRAG_MAX_DISTANCE, ACCIDENTAL_DRAG_MAX_MS, TAP_MOVE_TOLERANCE (+8 more)

### Community 62 - "contactKeys.ts"
Cohesion: 0.22
Nodes (10): duplicates, fields, groups, ContactFields, contactKey(), ContactPlatform, FIELD_PLATFORMS, findContactCollision() (+2 more)

### Community 63 - "useTeamForm.ts"
Cohesion: 0.27
Nodes (15): createTeam(), deleteTeam(), fetchTeamDetails(), parse(), setTeamMembers(), TeamMemberPayload, updateTeam(), buildTeamRequestBody() (+7 more)

### Community 64 - "Member"
Cohesion: 0.09
Nodes (34): NodesLayer(), Props, Props, Props, Props, Member, ChildrenMap, MemberMetrics (+26 more)

### Community 65 - "BEST Family Tree"
Cohesion: 0.11
Nodes (18): 1. Clone and configure environment, 2. Start the application, 3. Run database migrations, 4. Access the app, Architecture, Available Commands, Backend Commands (run inside container), Backups (+10 more)

### Community 66 - "Diagnosing Bugs"
Cohesion: 0.13
Nodes (14): Completion criterion: a tight loop that goes red, Diagnosing Bugs, Minimise, Non-deterministic bugs, Phase 1: Build a feedback loop, Phase 2: Reproduce + minimise, Phase 3: Hypothesise, Phase 4: Instrument (+6 more)

### Community 67 - "MemberFormFields.tsx"
Cohesion: 0.17
Nodes (15): CheckedField, getStoredFieldValues(), Links, StoredMemberValues, complete, mentors, sparse, toTime() (+7 more)

### Community 68 - "layout.tsx"
Cohesion: 0.15
Nodes (8): react-datepicker, metadata, nunito, RootLayout(), AuroraBackground(), ENTER, SlideDirection, slideInScript

### Community 69 - "mailer/index.ts"
Cohesion: 0.18
Nodes (11): consoleMailer, createResendMailer(), ResendConfig, message, Env, isTransport(), MAIL_TRANSPORTS, MailTransport (+3 more)

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
Nodes (17): dependencies, cloudinary, compression, cors, dotenv, express, express-rate-limit, helmet (+9 more)

### Community 74 - "utils/strings.ts"
Cohesion: 0.25
Nodes (8): FiltersHeader(), Props, formatCount(), hashString(), PARTICIPANT_FORMS, PluralForms, pluralizeUk(), TEAM_FORMS

### Community 75 - "useMeta.ts"
Cohesion: 0.19
Nodes (12): EMPTY, rolesStore, teamsStore, teamTypesStore, useMetaStore(), useRoles(), useTeams(), useTeamTypes() (+4 more)

### Community 76 - "fakeIdentity.ts"
Cohesion: 0.31
Nodes (6): createIdentityFactory(), firstFree(), OPERATOR_CODES, none, MAP, translit()

### Community 77 - "importAllowedEmails.ts"
Cohesion: 0.19
Nodes (12): AllowedRow, AllowlistDiff, diffAllowlist(), looksLikeEmail(), parseAllowlistCsv(), ParsedAllowlist, splitLine(), apply (+4 more)

### Community 78 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, attach / detach, Common Mistakes, Core Patterns, [CRITICAL] Using `addChild` on a RenderLayer, [HIGH] Layer and attached children in different render groups, Layer + logical parent, Manual sort (+5 more)

### Community 79 - "Core Patterns"
Cohesion: 0.14
Nodes (13): Alpha mask (Sprite-based), API Reference, Common Mistakes, Core Patterns, [HIGH] Using cacheAsTexture with masks, Inverse masking, Mask channel selection, Mask type selection (+5 more)

### Community 80 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, Common Mistakes, Construction options, Core Patterns, [HIGH] Nesting many render groups, [MEDIUM] Constantly adding/removing from a render group, [MEDIUM] Overusing render groups, Profile before adding (+5 more)

### Community 81 - "Common Mistakes"
Cohesion: 0.15
Nodes (12): API Reference, Common Mistakes, [CRITICAL] App destroy without releaseGlobalResources, [HIGH] Destroying and recreating objects instead of recycling, [HIGH] Interleaving object types in scene graph, [HIGH] Loading many individual textures instead of spritesheets, [HIGH] Updating Text or HTMLText every frame, [HIGH] Using complex Graphics instead of textures (+4 more)

### Community 82 - "src/utils/index.ts"
Cohesion: 0.07
Nodes (38): gsap, EMPTY_IDS, View, MembersTreeScene(), CARD_VIEW_SCALE, NODE_HEIGHT, NODE_WIDTH, TEAM_OVERVIEW_EDGE_ALPHA (+30 more)

### Community 83 - "Core Patterns"
Cohesion: 0.14
Nodes (14): Context and device loss, Core Patterns, Destroying a renderer, Direct renderer construction, Lazy-loading backend-specific systems and pipes, Manual rendering, Per-renderer options, Preference forms (+6 more)

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

### Community 89 - "Foundations"
Cohesion: 0.14
Nodes (13): Foundations, pixijs-application, pixijs-color, pixijs-core-concepts, pixijs-create, pixijs-environments, pixijs-events, pixijs-math (+5 more)

### Community 90 - "memberPresentation.ts"
Cohesion: 0.20
Nodes (11): MemberNodeCard(), RosterRow(), CloudinaryTransformations, getPhotoUrlAsAvatar(), getPhotoUrlAsRoundAvatar(), formatMemberRecruitmentSeason(), formatRecruitmentTerm(), getMemberAvatar() (+3 more)

### Community 91 - "Common Mistakes"
Cohesion: 0.22
Nodes (8): API Reference, Common Mistakes, [CRITICAL] Adding children to leaf scene objects, [HIGH] Expecting getBounds() to return a Rectangle, [HIGH] Using cacheAsBitmap instead of cacheAsTexture, [MEDIUM] Setting both pivot and origin on the same container, [MEDIUM] Using container.name instead of container.label, Quick Start

### Community 92 - "Core Concepts"
Cohesion: 0.18
Nodes (11): Container vs leaf (CRITICAL), Core Concepts, Culling, Destroy semantics, Lifecycle events, Masking, Render groups, Render order and explicit z-ordering (+3 more)

### Community 93 - "hooks/index.ts"
Cohesion: 0.17
Nodes (16): DropdownMenu(), Props, BadgeInput(), Props, BadgeInputField(), Props, useBadgeInputState(), Props (+8 more)

### Community 94 - "telegramEligibility.ts"
Cohesion: 0.32
Nodes (8): EligibilityMember, MemberMatch, resolveMemberMatch(), phoneKey(), resolveTelegramIdentity(), TelegramIdentity, loadTelegramIdentity(), TelegramClaims

### Community 98 - "TeamLogo.tsx"
Cohesion: 0.50
Nodes (5): cache, loadImageAspect(), PhotoOpenButton(), Props, TeamLogo()

### Community 99 - "checkConfig.ts"
Cohesion: 0.19
Nodes (14): assertConfig(), configProblems(), databaseName(), demoProblems(), Env, googleProblems(), telegramProblems(), good (+6 more)

### Community 100 - "Core Patterns"
Cohesion: 0.12
Nodes (16): API Reference, Common Mistakes, Coordinate conversion, Core Patterns, Cumulative alpha (getGlobalAlpha), Global, local, and screen coordinates, [HIGH] Setting scale to 0, [MEDIUM] Confusing anchor and pivot (+8 more)

### Community 101 - "filterMembers.ts"
Cohesion: 0.17
Nodes (19): date-fns, generateGoogleCalendarLink(), getClosestBirthday(), matchesAvatar(), matchesBirthday(), matchesJoinYear(), memberMatchesFilters(), parseDateStr() (+11 more)

### Community 102 - "Render Loop"
Cohesion: 0.22
Nodes (8): API Reference, Common Mistakes, [CRITICAL] Treating the ticker callback arg as a number, Frame lifecycle, [HIGH] Using `updateTransform` for per-frame logic, [MEDIUM] Assuming ticker callbacks run after render, Quick Start, Render Loop

### Community 103 - "pixijs-core-concepts/SKILL.md"
Cohesion: 0.22
Nodes (8): API Reference, Common Mistakes, Decision guide, [HIGH] Accessing app.renderer before init() resolves, [HIGH] Setting DOMAdapter after Application.init, [MEDIUM] Treating `preference` as a guarantee, Quick Start, Topics

### Community 104 - "LineageMemberSearch.tsx"
Cohesion: 0.43
Nodes (5): DropdownPortal(), Props, LineageMemberSearch(), Props, useMemberById()

### Community 105 - "constants/filters.ts"
Cohesion: 0.08
Nodes (32): ACTIVITY_STATES, AVATAR_VALUES, EMPTY_FILTER_STATE, JOIN_SEASONS, MEMBER_STATUSES, FOUNDER_JOIN_YEAR, MENTOR_STATUSES, Props (+24 more)

### Community 106 - "useTreeDirection.ts"
Cohesion: 0.48
Nodes (5): useIsMobileScreen(), useResolvedDirection(), useMediaQuery(), readLegacyTheme(), useSettingsStore

### Community 107 - "useSearchSuggestions.ts"
Cohesion: 0.47
Nodes (4): matchesQuery(), Options, useSearchSuggestions(), normalize()

### Community 108 - "Toolbar.tsx"
Cohesion: 0.07
Nodes (50): AuthMethod, Challenge, ChallengeQuestion, logout(), post(), RequestCodeOutcome, requestEmailCode(), startChallenge() (+42 more)

### Community 109 - "Quick concepts"
Cohesion: 0.50
Nodes (4): Environments, Quick concepts, Renderer = systems + pipes, The render loop

### Community 110 - "server/src/types/index.ts"
Cohesion: 0.07
Nodes (30): mongodb, ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember, STATUSES_MAP (+22 more)

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

### Community 114 - "seedQuestions.ts"
Cohesion: 0.36
Nodes (5): answerMatches(), CYRILLIC_TO_LATIN, normalizeAnswer(), MIN_ACTIVE_QUESTIONS, DEMO_QUESTIONS

### Community 116 - "pixijs-scene-core-concepts/SKILL.md"
Cohesion: 0.14
Nodes (12): API Reference, Common Mistakes, [CRITICAL] Adding children to a leaf display object, [CRITICAL] Referencing DisplayObject, [HIGH] Forgetting isRenderGroup on large static subtrees, [HIGH] Treating child.x as world space, Leaf comparison: which skill covers which object, [MEDIUM] sortableChildren without zIndex (+4 more)

### Community 119 - "aiFaces.ts"
Cohesion: 0.22
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
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 935 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Skill router` connect `Skill router` to `pixijs/SKILL.md`?**
  _High betweenness centrality (0.129) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _42 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `TeamFormContent.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14015151515151514 - nodes in this community are weakly interconnected._
- **Why does `Point` connect `Direction` to `Skill router`, `teamLayout.ts`, `useDashedPathAnimation.ts`, `teamFrame.ts`, `src/utils/index.ts`, `Foundations`, `pixi.js`?**
  _High betweenness centrality (0.110) - this node is a cross-community bridge._
- **Should `src/types/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.10651629072681704 - nodes in this community are weakly interconnected._
- **Why does `Utilities` connect `Skill router` to `Direction`?**
  _High betweenness centrality (0.105) - this node is a cross-community bridge._
- **Should `MemberFilterCategory.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.12183908045977011 - nodes in this community are weakly interconnected._