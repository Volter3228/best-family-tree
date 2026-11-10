# Graph Report - best-family-tree  (2026-11-10)

## Corpus Check
- 471 files · ~161,498 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 28 file(s) not represented in the graph (top: .prisma 9, (none) 6, .css 6)

## Summary
- 2432 nodes · 6171 edges · 127 communities (123 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 63 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `3befe2e6`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- memberFormValidation.ts
- memberPresentation.ts
- AvatarFileInput.tsx
- MemberFilterCategory.tsx
- auth.ts
- Member
- hooks/index.ts
- teamFrame.ts
- PositionFormFields.tsx
- Member
- challenges.ts
- Toolbar.tsx
- contactKeys.ts
- Toolbar.tsx
- PhotoViewer.tsx
- sessions.ts
- TeamFormContent.tsx
- emailRoutes.ts
- computeFilteredMembers.ts
- catalogValidation.ts
- Sidebar.tsx
- HTML Report Format
- emailCodes.ts
- utils/membersTree/index.ts
- teamService.ts
- filterSearchParams.ts
- compilerOptions
- compilerOptions
- TeamBadge.tsx
- react
- dependencies
- server/package.json
- src/index.ts
- memberService.ts
- FilterState
- MembersTreeContent.tsx
- package.json
- useCardAnimation.ts
- TeamFilterCategory.tsx
- useDashedPathAnimation.ts
- Core Patterns
- devDependencies
- TeamInfo.tsx
- ApplicationOptions reference
- CLAUDE.md
- treeStore.ts
- mime.ts
- useTeamForm.ts
- During the session
- ManageForm.tsx
- http
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
- PositionsDropdown.tsx
- Utilities
- types.ts
- utils/strings.ts
- BEST Family Tree
- Diagnosing Bugs
- membersStore.ts
- Common Mistakes
- TeamInfoSidebar.tsx
- protocol.ts
- Core Patterns
- Core Patterns
- dependencies
- SettingsPanel.tsx
- AccentColor
- Core Patterns
- teamBadgeLayout.ts
- Core Patterns
- Core Patterns
- Core Patterns
- FilterState
- MemberBirthdayAnimation.tsx
- Core Patterns
- Constructor options (Container-inherited)
- Test-Driven Development
- GSAP Core
- Core Patterns
- useHoverNodeAnimation.ts
- Foundations
- MemberStatus
- pixijs/SKILL.md
- Core Concepts
- MemberFormFields.tsx
- Point
- layout.tsx
- start-prod.sh
- settingsStore.ts
- ref_vitest
- TeamFrame
- useCanvasTheme.ts
- elk.ts
- Render Loop
- pixijs-core-concepts/SKILL.md
- Core Patterns
- src/types/index.ts
- SearchSuggestionItem.tsx
- signInCodeEmail.ts
- ThemeContext.tsx
- @pixi/react
- server/src/types/index.ts
- mailer/index.ts
- Renderers: WebGPU, WebGL, and Canvas
- treeStore.ts
- Position
- Common Mistakes
- pixijs-scene-core-concepts/SKILL.md
- Container Hierarchy
- GSAP with React
- hitl-loop.template.sh
- Core Patterns
- GSAP Performance
- GSAP Timeline
- Common Mistakes
- memberFormValidation.ts
- TeamOverviewLabel.tsx

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

## Communities (127 total, 4 thin omitted)

### Community 0 - "memberFormValidation.ts"
Cohesion: 0.20
Nodes (20): AddMemberForm(), buildMemberFormData(), describeSubmitError(), EditMemberForm(), getInitialFormData(), MemberFormFields(), PositionFormFields(), FormError() (+12 more)

### Community 1 - "memberPresentation.ts"
Cohesion: 0.10
Nodes (22): MemberNodeAvatar(), Props, AVATAR_HIGH_RES_SIZE, AVATAR_LOW_RES_SIZE, MAX_RENDER_RESOLUTION, NODE_AVATAR_SIZE, TEAM_OVERVIEW_END_SCALE, TEAM_OVERVIEW_FAST_FACTOR (+14 more)

### Community 2 - "AvatarFileInput.tsx"
Cohesion: 0.24
Nodes (6): next, LionIcon(), Props, AvatarFileInput(), Props, config

### Community 3 - "MemberFilterCategory.tsx"
Cohesion: 0.30
Nodes (10): MemberFilterCategory(), ACTIVITY_OPTIONS, ACTIVITY_STATES, AVATAR_OPTIONS, AVATAR_VALUES, JOIN_SEASONS, MEMBER_STATUSES, SEASON_OPTIONS (+2 more)

### Community 4 - "auth.ts"
Cohesion: 0.07
Nodes (47): AuthMethod, Challenge, ChallengeQuestion, logout(), post(), RequestCodeOutcome, requestEmailCode(), startChallenge() (+39 more)

### Community 5 - "Member"
Cohesion: 0.09
Nodes (29): FacebookIcon(), InstagramIcon(), LinkedinIcon(), TelegramIcon(), NodesLayer(), Props, Props, Props (+21 more)

### Community 6 - "hooks/index.ts"
Cohesion: 0.08
Nodes (25): pixi.js, AVATAR_HIT_AREA, CARD_PIVOT, EMPTY_FILTERS, getCullArea(), MemberNode(), NODE_HIT_AREA, NODE_PIVOT (+17 more)

### Community 7 - "teamFrame.ts"
Cohesion: 0.12
Nodes (27): TEAM_COLUMN_GAP, TEAM_EDGE_DROP, TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_SPREAD_WIDTH, TEAM_EDGE_STUB, TEAM_FRAME_HEADER, TEAM_FRAME_MIN_WIDTH, TEAM_FRAME_PADDING (+19 more)

### Community 8 - "PositionFormFields.tsx"
Cohesion: 0.17
Nodes (18): Props, Props, createEmptyPositionRow(), EMPTY_POSITION_ROW, findTeamByName(), getRowPeriod(), getTeamOptions(), getTeamSelectionPatch() (+10 more)

### Community 9 - "Member"
Cohesion: 0.11
Nodes (18): @gsap/react, MembersTree(), Props, isTreeReady(), MembersTree, MembersTreeDynamic(), TreeState, BrandSpinner() (+10 more)

### Community 10 - "challenges.ts"
Cohesion: 0.11
Nodes (24): express-rate-limit, answerMatches(), CYRILLIC_TO_LATIN, normalizeAnswer(), ChallengeState, isExpired(), isSolved(), pickRandom() (+16 more)

### Community 11 - "Toolbar.tsx"
Cohesion: 0.28
Nodes (11): compare(), getSearchable(), MemberSearch(), Props, Props, SearchPanel(), compare(), getSearchable() (+3 more)

### Community 12 - "contactKeys.ts"
Cohesion: 0.22
Nodes (10): duplicates, fields, groups, ContactFields, contactKey(), ContactPlatform, FIELD_PLATFORMS, findContactCollision() (+2 more)

### Community 13 - "Toolbar.tsx"
Cohesion: 0.24
Nodes (10): FiltersPanel(), SearchBar(), Toolbar(), usePanelToggle(), derive(), FiltersActions, FiltersState, initialState (+2 more)

### Community 14 - "PhotoViewer.tsx"
Cohesion: 0.15
Nodes (26): react-dom, DropdownPortal(), Props, PhotoViewer(), Viewer(), viewportRect(), clampAxis(), clampOffset() (+18 more)

### Community 15 - "sessions.ts"
Cohesion: 0.10
Nodes (30): @prisma/adapter-pg, CHALLENGE_TTL_MS, isDemoMode(), isProduction(), MIN_ACTIVE_QUESTIONS, QUESTIONS_SHOWN, SESSION_COOKIE, SESSION_TTL_MS (+22 more)

### Community 16 - "TeamFormContent.tsx"
Cohesion: 0.12
Nodes (26): ClearButton(), SubmitButton(), ConfirmDeleteControl(), Props, getRoleOptions(), getTeamTypeOptions(), FormFooter(), Props (+18 more)

### Community 17 - "emailRoutes.ts"
Cohesion: 0.20
Nodes (15): authSecret(), EligibilityMember, EmailIdentity, normalizeEmail(), resolveEmailIdentity(), loadEmailIdentity(), prismaCodeStore, getMailer() (+7 more)

### Community 18 - "computeFilteredMembers.ts"
Cohesion: 0.18
Nodes (18): RecruitmentTerm, matchesAvatar(), matchesBirthday(), matchesJoinSeason(), matchesJoinYear(), memberMatchesFilters(), parseDateStr(), toDateVal() (+10 more)

### Community 19 - "catalogValidation.ts"
Cohesion: 0.08
Nodes (30): Renderer selection at runtime, [MEDIUM] Using container.name instead of container.label, deleteCloudinaryImage(), extractCloudinaryPublicId(), parsePositionsPayload(), router, rejectUpload(), router (+22 more)

### Community 20 - "Sidebar.tsx"
Cohesion: 0.14
Nodes (12): react, Props, Sidebar(), Props, SidebarHandle(), Props, SidebarHeader(), useSidebarChromeHeights() (+4 more)

### Community 21 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 22 - "emailCodes.ts"
Cohesion: 0.22
Nodes (10): CODE_TTL_MS, CodeStore, generateCode(), hashCode(), issueCode(), MAX_CODE_ATTEMPTS, sameHash(), StoredCode (+2 more)

### Community 23 - "utils/membersTree/index.ts"
Cohesion: 0.16
Nodes (22): MembersState, ChildrenMap, MembersMap, areSetsEqual(), computeFilteredMembers(), Source, isFilterActive(), transformMembersToFlowValues() (+14 more)

### Community 24 - "teamService.ts"
Cohesion: 0.12
Nodes (31): resolvePosition(), assertCanEditMembers(), deleteMember(), deriveTeamName(), resolveRole(), resolveTeam(), resolveTeamType(), RoleRef (+23 more)

### Community 25 - "filterSearchParams.ts"
Cohesion: 0.24
Nodes (11): Props, filtersToSearchParams(), parseCsvArray(), parseCsvStrings(), parseFiltersFromSearchParams(), parseNumberOrNull(), parseTreeMode(), serializeCsv() (+3 more)

### Community 26 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, esModuleInterop, forceConsistentCasingInFileNames, module, moduleResolution, noImplicitAny, outDir, paths (+12 more)

### Community 27 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+12 more)

### Community 28 - "TeamBadge.tsx"
Cohesion: 0.20
Nodes (15): TeamBadge(), TEAM_TITLE_BORDER_WIDTH, TEAM_TITLE_FONT_SIZE, TEAM_TITLE_ICON_RADIUS, TEAM_TITLE_SCREEN_PX, PressStart, useTapWithoutDrag(), isTapGesture() (+7 more)

### Community 29 - "react"
Cohesion: 0.21
Nodes (15): @heroicons/react, DropdownMenu(), Props, BadgeInput(), Props, BadgeInputField(), Props, useBadgeInputState() (+7 more)

### Community 30 - "dependencies"
Cohesion: 0.11
Nodes (19): dependencies, date-fns, dotenv, elkjs, gsap, @gsap/react, @heroicons/react, lodash (+11 more)

### Community 31 - "server/package.json"
Cohesion: 0.07
Nodes (27): cloudinary, concurrently, multer, multer-storage-cloudinary, nodemon, @prisma/config, ts-node, tsx (+19 more)

### Community 32 - "src/index.ts"
Cohesion: 0.13
Nodes (18): compression, cors, express, helmet, toMemberResponse(), app, checkOrigin(), WRITE_METHODS (+10 more)

### Community 33 - "memberService.ts"
Cohesion: 0.08
Nodes (42): zod, buildMemberFields(), buildMemberUpdateFields(), buildSharedFields(), buildSparseMemberFields(), parsePhoneNumbers(), getPositionKey(), ResolvedPosition (+34 more)

### Community 34 - "FilterState"
Cohesion: 0.12
Nodes (24): date-fns, BirthdayFilterSection(), Props, CheckboxGroupFilterSection(), Option, Props, ClearButton(), FilterCheckbox() (+16 more)

### Community 35 - "MembersTreeContent.tsx"
Cohesion: 0.23
Nodes (13): Viewport(), ACCENT_COLOR_MAP, EVENT_FEATURES, MembersTreeContent(), ViewportCulling(), useFilterSearchParams(), useSyncMembers(), Options (+5 more)

### Community 36 - "package.json"
Cohesion: 0.11
Nodes (18): dotenv, prisma, @prisma/client, @types/node, typescript, vitest, name, private (+10 more)

### Community 37 - "useCardAnimation.ts"
Cohesion: 0.17
Nodes (18): clamp01(), easeBackOut, easePower2In, easePower2Out, entries, Entry, finishCardReveal(), registerCardReveal() (+10 more)

### Community 38 - "TeamFilterCategory.tsx"
Cohesion: 0.19
Nodes (13): FilterCategory(), LION_GROUP_ICON, LION_ICON, Props, ALL_SECTIONS_CLOSED, Props, RoleFilterSection(), TeamPeriodFilterSection() (+5 more)

### Community 39 - "useDashedPathAnimation.ts"
Cohesion: 0.17
Nodes (19): LineageEdge(), DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN, MIN_ANIM_DURATION, PATTERN_LEN, RETRACT_BASE (+11 more)

### Community 40 - "Core Patterns"
Cohesion: 0.11
Nodes (17): API Reference, Common Mistakes, Coordinate conversion, Core Patterns, Cumulative alpha (getGlobalAlpha), Global, local, and screen coordinates, [HIGH] Setting scale to 0, [MEDIUM] Confusing anchor and pivot (+9 more)

### Community 41 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+5 more)

### Community 42 - "TeamInfo.tsx"
Cohesion: 0.21
Nodes (12): cache, loadImageAspect(), PhotoOpenButton(), MemberInfoCopy(), Props, MemberInfoRow(), Props, RosterRow() (+4 more)

### Community 43 - "ApplicationOptions reference"
Cohesion: 0.06
Nodes (32): Accessibility, ApplicationOptions reference, Background, Culler (CullerPluginOptions), Deprecated (GC — prefer the unified options above), Events, Garbage collection, Graphics (+24 more)

### Community 44 - "CLAUDE.md"
Cohesion: 0.29
Nodes (6): Commands, Conventions, Do not read or edit, Graphify, Run & browser testing (WSL2 + Windows Chrome), Stack & layout

### Community 45 - "treeStore.ts"
Cohesion: 0.17
Nodes (19): gsap, NODE_HEIGHT, getFitViewTargetScale(), useFitViewAnimation(), useFocusFrameAnimation(), useFocusNodeAnimation(), useViewportAnimation(), useSceneTransition() (+11 more)

### Community 46 - "mime.ts"
Cohesion: 0.29
Nodes (11): RFC-2045, RFC-2047, createGmailMailer(), GmailConfig, base64Body(), buildMime(), encodeHeaderText(), formatAddress() (+3 more)

### Community 47 - "useTeamForm.ts"
Cohesion: 0.21
Nodes (17): createTeam(), deleteTeam(), fetchTeamDetails(), parse(), setTeamMembers(), TeamMemberPayload, updateTeam(), buildTeamRequestBody() (+9 more)

### Community 48 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, GLOSSARY.md Format, Rules (+11 more)

### Community 49 - "ManageForm.tsx"
Cohesion: 0.23
Nodes (13): ManageForm(), MemberMode, Section, SECTIONS, TEAM_KINDS, TeamKind, CREATE_EDIT_OPTIONS, Props (+5 more)

### Community 50 - "http"
Cohesion: 0.18
Nodes (19): addMember(), ApiError, toApiError(), deleteMember(), editMember(), fetchFamilyTree(), fetchMemberById(), fetchMentorsList() (+11 more)

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
Cohesion: 0.14
Nodes (13): pixijs-html-source, pixijs-scene-container, pixijs-scene-dom-container, pixijs-scene-gif, pixijs-scene-graphics, pixijs-scene-mesh, pixijs-scene-particle-container, pixijs-scene-sprite (+5 more)

### Community 61 - "PositionsDropdown.tsx"
Cohesion: 0.25
Nodes (11): getPositionRowSummary(), PositionBadge(), Props, PositionsDropdown(), Props, useStackOnOverflow(), MemberPosition, formatYearRange() (+3 more)

### Community 62 - "Utilities"
Cohesion: 0.15
Nodes (13): pixijs-assets, pixijs-blend-modes, pixijs-color, pixijs-events, pixijs-math, pixijs-ticker, Utilities, Advanced (+5 more)

### Community 63 - "types.ts"
Cohesion: 0.19
Nodes (12): canEditMember(), hasAccess(), RANK, member(), CONTACT_FIELDS, AccessRank, Express, Request (+4 more)

### Community 64 - "utils/strings.ts"
Cohesion: 0.24
Nodes (8): FiltersHeader(), Props, formatCount(), hashString(), PARTICIPANT_FORMS, PluralForms, pluralizeUk(), TEAM_FORMS

### Community 65 - "BEST Family Tree"
Cohesion: 0.12
Nodes (15): 1. Clone and configure environment, 2. Start the application, 3. Run database migrations, 4. Access the app, Architecture, Available Commands, Backend Commands (run inside container), BEST Family Tree (+7 more)

### Community 66 - "Diagnosing Bugs"
Cohesion: 0.13
Nodes (14): Completion criterion: a tight loop that goes red, Diagnosing Bugs, Minimise, Non-deterministic bugs, Phase 1: Build a feedback loop, Phase 2: Reproduce + minimise, Phase 3: Hypothesise, Phase 4: Instrument (+6 more)

### Community 67 - "membersStore.ts"
Cohesion: 0.08
Nodes (31): zustand, Props, Props, LineageMemberSearch(), Props, Props, Props, Props (+23 more)

### Community 68 - "Common Mistakes"
Cohesion: 0.33
Nodes (6): Common Mistakes, [CRITICAL] Adding children to a leaf display object, [CRITICAL] Referencing DisplayObject, [HIGH] Forgetting isRenderGroup on large static subtrees, [HIGH] Treating child.x as world space, [MEDIUM] sortableChildren without zIndex

### Community 69 - "TeamInfoSidebar.tsx"
Cohesion: 0.20
Nodes (16): AccessLevel, fetchSession(), SessionInfo, MemberSidebar(), Props, TeamInfoSidebar(), MemberSidebarContent(), Props (+8 more)

### Community 70 - "protocol.ts"
Cohesion: 0.07
Nodes (41): elkjs, TEAM_FRAME_GAP, TEAM_PACK_ASPECT, failOver(), getWorker(), Pending, requestLayout(), runInline() (+33 more)

### Community 71 - "Core Patterns"
Cohesion: 0.13
Nodes (14): API Reference, boundsArea optimization, Common Mistakes, Core Patterns, Culling, HIGH: Expecting automatic culling, HIGH: Using addChild on RenderLayer, MEDIUM: Expecting filters on ancestors to apply to layer children (+6 more)

### Community 72 - "Core Patterns"
Cohesion: 0.14
Nodes (13): Advanced shape primitives, Core Patterns, Default styles via setFillStyle / setStrokeStyle, Draw-time transforms, Drawing a texture directly, Gradients and patterns, GraphicsContext sharing, GraphicsContext utilities (+5 more)

### Community 73 - "dependencies"
Cohesion: 0.05
Nodes (42): dependencies, cloudinary, compression, cors, dotenv, express, express-rate-limit, helmet (+34 more)

### Community 74 - "SettingsPanel.tsx"
Cohesion: 0.16
Nodes (11): OPTIONS, Props, ViewModeSwitch(), EDGE_STYLE_OPTIONS, ORIENTATION_OPTIONS, Props, Section(), SectionProps (+3 more)

### Community 75 - "AccentColor"
Cohesion: 0.09
Nodes (28): Props, FitViewButton(), Props, Props, ToolbarIconButton(), Props, ToolbarTooltip(), useHoverTooltip() (+20 more)

### Community 76 - "Core Patterns"
Cohesion: 0.11
Nodes (21): Adding and removing children, API Reference, Bounds and coordinate conversion, Common Mistakes, Constructor options, Container events, Core Patterns, [CRITICAL] Adding children to leaf scene objects (+13 more)

### Community 77 - "teamBadgeLayout.ts"
Cohesion: 0.23
Nodes (10): MemberNodeCard(), TEAM_FRAME_RADIUS, TEAM_TITLE_ICON_PADDING, TEAM_TITLE_ICON_SIZE, TEAM_TITLE_PADDING_X, TEAM_TITLE_PADDING_Y, getTeamBadgeLayout(), textWidth() (+2 more)

### Community 78 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, attach / detach, Common Mistakes, Core Patterns, [CRITICAL] Using `addChild` on a RenderLayer, [HIGH] Layer and attached children in different render groups, Layer + logical parent, Manual sort (+5 more)

### Community 79 - "Core Patterns"
Cohesion: 0.14
Nodes (13): Alpha mask (Sprite-based), API Reference, Common Mistakes, Core Patterns, [HIGH] Using cacheAsTexture with masks, Inverse masking, Mask channel selection, Mask type selection (+5 more)

### Community 80 - "Core Patterns"
Cohesion: 0.14
Nodes (13): API Reference, Common Mistakes, Construction options, Core Patterns, [HIGH] Nesting many render groups, [MEDIUM] Constantly adding/removing from a render group, [MEDIUM] Overusing render groups, Profile before adding (+5 more)

### Community 81 - "FilterState"
Cohesion: 0.17
Nodes (14): FilterGroupProps, Props, Props, Props, AvatarFilterValue, FilterSectionKey, FilterState, ActivityState (+6 more)

### Community 82 - "MemberBirthdayAnimation.tsx"
Cohesion: 0.35
Nodes (8): BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), Props, acquireEmojiTextures(), createEmojiTexture(), generateRandomPosition(), releaseEmojiTextures()

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

### Community 88 - "useHoverNodeAnimation.ts"
Cohesion: 0.19
Nodes (12): pixi-filters, NODE_HOVER_ANIMATION_DURATION, NODE_HOVER_SCALE, ZOOMED_OUT_HOVER_SCALE_MAP, lineageEdgePath, ACCIDENTAL_DRAG_MAX_DISTANCE, ACCIDENTAL_DRAG_MAX_MS, TAP_MOVE_TOLERANCE (+4 more)

### Community 89 - "Foundations"
Cohesion: 0.14
Nodes (13): Advanced, Foundations, pixijs-accessibility, pixijs-application, pixijs-core-concepts, pixijs-create, pixijs-custom-rendering, pixijs-environments (+5 more)

### Community 90 - "MemberStatus"
Cohesion: 0.16
Nodes (7): EMPTY_FILTER_STATE, initialFiltersState, MemberStatus, Alumni, Baby, Full, Observer

### Community 91 - "pixijs/SKILL.md"
Cohesion: 0.18
Nodes (9): API Reference, Common Mistakes, [HIGH] buttonMode removed; use cursor, [HIGH] Default eventMode is passive, [HIGH] Move events only fire over the object in v8, [MEDIUM] Cursor does not inherit from parent, Quick Start, Fallback: canonical PixiJS docs (+1 more)

### Community 92 - "Core Concepts"
Cohesion: 0.18
Nodes (11): Container vs leaf (CRITICAL), Core Concepts, Culling, Destroy semantics, Lifecycle events, Masking, Render groups, Render order and explicit z-ordering (+3 more)

### Community 93 - "MemberFormFields.tsx"
Cohesion: 0.26
Nodes (8): FieldError(), Props, Props, Props, SocialMediaFormFields(), Props, MemberFormMode, TeamMemberRow

### Community 94 - "Point"
Cohesion: 0.11
Nodes (35): EdgesLayer(), drawPolyline(), TeamEdgesLayer(), FIXED_EDGE_WIDTH, NODE_AVATAR_RADIUS, Point, buildSegmentFromPositions(), DashStrokeOptions (+27 more)

### Community 95 - "layout.tsx"
Cohesion: 0.20
Nodes (5): react-datepicker, metadata, nunito, RootLayout(), AuroraBackground()

### Community 97 - "settingsStore.ts"
Cohesion: 0.27
Nodes (9): DEFAULT_SETTINGS, readLegacyTheme(), SETTINGS_STORAGE_KEY, SettingsActions, SettingsState, initialState, { storageMock }, OrientationSetting (+1 more)

### Community 98 - "ref_vitest"
Cohesion: 0.24
Nodes (4): assertConfig(), configProblems(), Env, good

### Community 99 - "TeamFrame"
Cohesion: 0.24
Nodes (9): Props, Props, TeamFramesLayer(), Props, TeamOverviewLayer(), Props, Props, Props (+1 more)

### Community 100 - "useCanvasTheme.ts"
Cohesion: 0.24
Nodes (9): FONT_FAMILY, NODE_SUBTITLE_STYLE, NODE_TITLE_STYLE, NODE_TOOLTIP_TEXT_STYLE, TEXT_RESOLUTION, buildCanvasColors(), CanvasColors, CanvasTextStyles (+1 more)

### Community 101 - "elk.ts"
Cohesion: 0.25
Nodes (8): useIsMobileScreen(), useResolvedDirection(), useMediaQuery(), DEFAULT_NODE_HEIGHT, DEFAULT_NODE_WIDTH, DEFAULT_POSITION, FLOW_VIEWPORT_DIRECTION, FlowViewportDirection

### Community 102 - "Render Loop"
Cohesion: 0.22
Nodes (8): API Reference, Common Mistakes, [CRITICAL] Treating the ticker callback arg as a number, Frame lifecycle, [HIGH] Using `updateTransform` for per-frame logic, [MEDIUM] Assuming ticker callbacks run after render, Quick Start, Render Loop

### Community 103 - "pixijs-core-concepts/SKILL.md"
Cohesion: 0.22
Nodes (8): API Reference, Decision guide, Environments, Quick concepts, Quick Start, Renderer = systems + pipes, The render loop, Topics

### Community 104 - "Core Patterns"
Cohesion: 0.22
Nodes (9): Add, remove, swap, Child queries, Core Patterns, Destroying sub-trees, Iterating children, Label-based tree navigation, Lifecycle events, Reparenting with transform preservation (+1 more)

### Community 105 - "src/types/index.ts"
Cohesion: 0.18
Nodes (18): tailwind-merge, GLOW, PositionAssignmentFields(), PositionPeriodFields(), yearLimits, PositionRow(), PositionRowHeader(), ComboboxInput() (+10 more)

### Community 106 - "SearchSuggestionItem.tsx"
Cohesion: 0.31
Nodes (6): Props, SearchSuggestionItem(), Props, SearchSuggestionRow(), Props, TeamSuggestionItem()

### Community 107 - "signInCodeEmail.ts"
Cohesion: 0.33
Nodes (4): escapeHtml(), pairs(), renderSignInCodeEmail(), { html }

### Community 108 - "ThemeContext.tsx"
Cohesion: 0.36
Nodes (7): applyCssTokens(), ThemeContext, ThemeProvider(), noopSubscribe(), useIsHydrated(), useSettingsStore, camelToCssVar()

### Community 109 - "@pixi/react"
Cohesion: 0.29
Nodes (6): @pixi/react, PixiElements, @pixi/react, pixi-viewport, Props, MIN_VIEWPORT_ZOOM

### Community 110 - "server/src/types/index.ts"
Cohesion: 0.07
Nodes (30): mongodb, ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember, STATUSES_MAP (+22 more)

### Community 111 - "mailer/index.ts"
Cohesion: 0.48
Nodes (3): consoleMailer, Mailer, MailMessage

### Community 112 - "Renderers: WebGPU, WebGL, and Canvas"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, [HIGH] Expecting WebGPU everywhere, [MEDIUM] Assuming CanvasRenderer supports everything, [MEDIUM] Calling render before init, Quick Start, Renderers: WebGPU, WebGL, and Canvas

### Community 113 - "treeStore.ts"
Cohesion: 0.11
Nodes (25): Props, Props, EMPTY_IDS, SharpAvatarTracker(), View, Props, MembersTreeScene(), Props (+17 more)

### Community 114 - "Position"
Cohesion: 0.40
Nodes (5): Position, Bottom, Left, Right, Top

### Community 115 - "Common Mistakes"
Cohesion: 0.50
Nodes (4): Common Mistakes, [HIGH] Accessing app.renderer before init() resolves, [HIGH] Setting DOMAdapter after Application.init, [MEDIUM] Treating `preference` as a guarantee

### Community 116 - "pixijs-scene-core-concepts/SKILL.md"
Cohesion: 0.25
Nodes (6): API Reference, Leaf comparison: which skill covers which object, Quick Start, References, Tooling, When to use what (quick decisions)

### Community 117 - "Container Hierarchy"
Cohesion: 0.25
Nodes (7): API Reference, Common Mistakes, Container Hierarchy, [CRITICAL] Adding children to a leaf, [HIGH] Destroying the parent without `children: true`, [MEDIUM] Mutating `children` during iteration, Quick Start

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

### Community 147 - "memberFormValidation.ts"
Cohesion: 0.12
Nodes (19): CheckedField, getStoredFieldValues(), Links, StoredMemberValues, complete, mentors, sparse, toTime() (+11 more)

### Community 151 - "TeamOverviewLabel.tsx"
Cohesion: 0.14
Nodes (22): FILL_ALPHA, lerp(), Props, STROKE_ALPHA, TeamFrame(), Props, TeamOverviewLabel(), Props (+14 more)

## Knowledge Gaps
- **42 isolated node(s):** `@prisma/client`, `dotenv`, `lodash`, `@tailwindcss/postcss`, `@types/lodash` (+37 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 876 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Skill router` connect `Utilities` to `pixijs/SKILL.md`?**
  _High betweenness centrality (0.121) - this node is a cross-community bridge._
- **What connects `@prisma/client`, `dotenv`, `lodash` to the rest of the system?**
  _42 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `memberPresentation.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.09971509971509972 - nodes in this community are weakly interconnected._
- **Why does `Point` connect `Point` to `protocol.ts`, `teamFrame.ts`, `treeStore.ts`, `treeStore.ts`, `Utilities`?**
  _High betweenness centrality (0.105) - this node is a cross-community bridge._
- **Should `auth.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07242063492063493 - nodes in this community are weakly interconnected._
- **Why does `react` connect `Sidebar.tsx` to `memberFormValidation.ts`, `memberPresentation.ts`, `AvatarFileInput.tsx`, `auth.ts`, `Member`, `hooks/index.ts`, `PositionFormFields.tsx`, `Member`, `Toolbar.tsx`, `Toolbar.tsx`, `PhotoViewer.tsx`, `TeamFormContent.tsx`, `TeamOverviewLabel.tsx`, `filterSearchParams.ts`, `TeamBadge.tsx`, `react`, `FilterState`, `MembersTreeContent.tsx`, `package.json`, `useCardAnimation.ts`, `TeamFilterCategory.tsx`, `useDashedPathAnimation.ts`, `TeamInfo.tsx`, `treeStore.ts`, `useTeamForm.ts`, `ManageForm.tsx`, `PositionsDropdown.tsx`, `membersStore.ts`, `TeamInfoSidebar.tsx`, `AccentColor`, `MemberBirthdayAnimation.tsx`, `useHoverNodeAnimation.ts`, `MemberFormFields.tsx`, `Point`, `TeamFrame`, `useCanvasTheme.ts`, `elk.ts`, `src/types/index.ts`, `SearchSuggestionItem.tsx`, `ThemeContext.tsx`, `@pixi/react`, `treeStore.ts`?**
  _High betweenness centrality (0.096) - this node is a cross-community bridge._
- **Should `Member` be split into smaller, more focused modules?**
  _Cohesion score 0.09468599033816426 - nodes in this community are weakly interconnected._