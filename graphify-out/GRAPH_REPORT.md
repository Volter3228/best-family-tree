# Graph Report - best-family-tree  (2026-10-21)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 1346 nodes · 4043 edges · 57 communities (55 shown, 2 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 34 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `cb57892b`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- EditMemberForm.tsx
- Member
- http
- filtersStore.ts
- migrateMembersFromMongodb.ts
- src/types/index.ts
- TeamOverviewLabel.tsx
- FilterState
- PositionFormFields.tsx
- ThemeContext.tsx
- MemberNodeAvatar.tsx
- teamFrame.ts
- memberService.ts
- useDashedPathAnimation.ts
- protocol.ts
- memberRoutes.ts
- FiltersPanel.tsx
- members.ts
- MembersTreeScene.tsx
- catalogValidation.ts
- MemberNode.tsx
- MemberInfo.tsx
- react
- filterMembers.ts
- teamService.ts
- constants/canvas/index.ts
- compilerOptions
- compilerOptions
- MembersTreeContent.tsx
- DropdownOption
- dependencies
- server/package.json
- teamTypeRoutes.ts
- MemberInfoSocial.tsx
- src/utils/index.ts
- pixi.js
- package.json
- useFitViewAnimation.ts
- filterSearchParams.ts
- useTreeLayout.ts
- teamRoutes.ts
- devDependencies
- devDependencies
- useHoverNodeAnimation.ts
- TeamInfo.tsx
- dependencies
- useTeamSelection.ts
- TeamFrame
- teamBadgeLayout.ts
- teamPacking.ts
- treeStore.ts
- scripts
- scripts
- Position
- extends
- next.config.mjs
- postcss.config.mjs

## God Nodes (most connected - your core abstractions)
1. `AccentColor` - 101 edges
2. `react` - 96 edges
3. `Member` - 54 edges
4. `tailwind-merge` - 47 edges
5. `TeamFrame` - 39 edges
6. `COLOR_CLASSES` - 35 edges
7. `pixi.js` - 31 edges
8. `FilterState` - 29 edges
9. `http()` - 26 edges
10. `useTreeStore` - 26 edges

## Surprising Connections (you probably didn't know these)
- `Props` --references--> `Member`  [EXTRACTED]
  src/components/membersTree/canvas/memberNode/MemberNode.tsx → src/models/Member.ts
- `Props` --references--> `Member`  [EXTRACTED]
  src/components/membersTree/canvas/memberNode/MemberNodeCard.tsx → src/models/Member.ts
- `Props` --references--> `Member`  [EXTRACTED]
  src/components/membersTree/toolbar/memberSearch/SearchSuggestionItem.tsx → src/models/Member.ts
- `Props` --references--> `Member`  [EXTRACTED]
  src/components/membersTree/MembersTree.tsx → src/types/members.ts
- `Props` --references--> `TeamFrame`  [EXTRACTED]
  src/components/membersTree/canvas/TeamEdgesLayer.tsx → src/types/tree.ts

## Import Cycles
- 3-file cycle: `src/utils/index.ts -> src/utils/membersTree/index.ts -> src/utils/membersTree/lineageEdgePath.ts -> src/utils/index.ts`
- 4-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/members.ts -> src/models/index.ts -> src/models/Member.ts`
- 4-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/tree.ts -> src/models/index.ts -> src/models/Member.ts`
- 5-file cycle: `src/models/Member.ts -> src/types/index.ts -> src/types/filters.ts -> src/types/members.ts -> src/models/index.ts -> src/models/Member.ts`

## Communities (57 total, 2 thin omitted)

### Community 0 - "EditMemberForm.tsx"
Cohesion: 0.07
Nodes (69): TeamInfoSidebar(), AddMemberForm(), buildMemberFormData(), ClearButton(), SubmitButton(), ConfirmDeleteControl(), Props, EditMemberForm() (+61 more)

### Community 1 - "Member"
Cohesion: 0.06
Nodes (56): zustand, Props, Props, Props, Props, Props, Props, Props (+48 more)

### Community 2 - "http"
Cohesion: 0.08
Nodes (46): addMember(), deleteMember(), editMember(), fetchFamilyTree(), fetchMemberById(), fetchMentorsList(), createRole(), createTeamType() (+38 more)

### Community 3 - "filtersStore.ts"
Cohesion: 0.07
Nodes (42): LionIcon(), Props, FitViewButton(), Props, compare(), getSearchable(), MemberSearch(), Props (+34 more)

### Community 4 - "migrateMembersFromMongodb.ts"
Cohesion: 0.07
Nodes (30): mongodb, ACTIVITY_MAP, BOARD_STATUSES, MemberMapEntry, migrateData(), mongoClient, MongoMember, STATUSES_MAP (+22 more)

### Community 5 - "src/types/index.ts"
Cohesion: 0.13
Nodes (27): tailwind-merge, Props, Props, Props, Props, Props, Props, Props (+19 more)

### Community 6 - "TeamOverviewLabel.tsx"
Cohesion: 0.09
Nodes (36): Props, TeamBadge(), FILL_ALPHA, lerp(), Props, STROKE_ALPHA, TeamFrame(), Props (+28 more)

### Community 7 - "FilterState"
Cohesion: 0.12
Nodes (27): MemberFilterCategory(), Props, CheckboxGroupFilterSection(), Option, Props, ClearButton(), FilterCheckbox(), Props (+19 more)

### Community 8 - "PositionFormFields.tsx"
Cohesion: 0.12
Nodes (30): PositionAssignmentFields(), Props, PositionFormFields(), Props, createEmptyPositionRow(), EMPTY_POSITION_ROW, findTeamByName(), getPositionRowSummary() (+22 more)

### Community 9 - "ThemeContext.tsx"
Cohesion: 0.10
Nodes (22): react-datepicker, metadata, nunito, RootLayout(), AuroraBackground(), darkTheme, DEFAULT_THEME, lightTheme (+14 more)

### Community 10 - "MemberNodeAvatar.tsx"
Cohesion: 0.09
Nodes (26): EdgesLayer(), MemberNode(), MemberNodeAvatar(), Props, MemberNodeCard(), MemberNodeMinimizedTooltip(), Props, Props (+18 more)

### Community 11 - "teamFrame.ts"
Cohesion: 0.12
Nodes (29): NODE_WIDTH, TEAM_COLUMN_GAP, TEAM_EDGE_DROP, TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_SPREAD_WIDTH, TEAM_EDGE_START_Y, TEAM_FRAME_HEADER, TEAM_FRAME_MIN_WIDTH (+21 more)

### Community 12 - "memberService.ts"
Cohesion: 0.13
Nodes (20): zod, buildMemberFields(), parsePhoneNumbers(), parsePositionsPayload(), getPositionKey(), ResolvedPosition, syncPositions(), MemberTransaction (+12 more)

### Community 13 - "useDashedPathAnimation.ts"
Cohesion: 0.14
Nodes (22): LineageEdge(), Props, DASH_LEN, DRAW_IN_BASE, EMPTY_PATH, GAP_LEN, MIN_ANIM_DURATION, PATTERN_LEN (+14 more)

### Community 14 - "protocol.ts"
Cohesion: 0.17
Nodes (20): elkjs, failOver(), getWorker(), Pending, requestLayout(), runInline(), Point, Input (+12 more)

### Community 15 - "memberRoutes.ts"
Cohesion: 0.16
Nodes (16): cors, express, adapter, prisma, app, router, MEMBER_INCLUDE, serializeMember() (+8 more)

### Community 16 - "FiltersPanel.tsx"
Cohesion: 0.13
Nodes (18): FilterCategory(), LION_GROUP_ICON, LION_ICON, Props, FilterGroupProps, FiltersHeader(), ALL_SECTIONS_CLOSED, FiltersPanel() (+10 more)

### Community 17 - "members.ts"
Cohesion: 0.11
Nodes (16): FOUNDER_JOIN_YEAR, MENTOR_STATUSES, AvatarFilterValue, ActivityState, Active, Excluded, Inactive, MemberMetrics (+8 more)

### Community 18 - "MembersTreeScene.tsx"
Cohesion: 0.13
Nodes (14): Props, Props, TEAM_OVERVIEW_EDGE_ALPHA, TEAM_OVERVIEW_NODE_ALPHA, TreeActions, TreeState, TreeMode, Direction (+6 more)

### Community 19 - "catalogValidation.ts"
Cohesion: 0.12
Nodes (19): router, booleanLike, isValidPeriod(), name(), optional(), optionalName(), parseWith(), PERIOD_ERROR (+11 more)

### Community 20 - "MemberNode.tsx"
Cohesion: 0.13
Nodes (16): BIRTHDAY_EMOJIS, EMOJI_COUNT, MemberBirthdayAnimation(), createEmojiTexture(), generateRandomPosition(), AVATAR_HIT_AREA, CULL_AREA, EMPTY_FILTERS (+8 more)

### Community 21 - "MemberInfo.tsx"
Cohesion: 0.18
Nodes (16): @heroicons/react, next, Props, MemberInfoCopy(), Props, MemberInfoRow(), Props, MentorMenteesDropdown() (+8 more)

### Community 22 - "react"
Cohesion: 0.15
Nodes (9): react, Props, Sidebar(), SidebarFooterContext, useSidebarHeightAnimation(), useDropdown(), Options, Position (+1 more)

### Community 23 - "filterMembers.ts"
Cohesion: 0.18
Nodes (18): ACTIVITY_OPTIONS, ACTIVITY_STATES, AVATAR_OPTIONS, AVATAR_VALUES, JOIN_SEASONS, MEMBER_STATUSES, SEASON_OPTIONS, STATUS_OPTIONS (+10 more)

### Community 24 - "teamService.ts"
Cohesion: 0.22
Nodes (18): resolvePosition(), deriveTeamName(), resolveRole(), resolveTeam(), resolveTeamType(), RoleRef, TeamRef, TeamTypeRecord (+10 more)

### Community 25 - "constants/canvas/index.ts"
Cohesion: 0.15
Nodes (16): Props, Props, AVATAR_LOW_RES_SIZE, BIRTHDAY_ANIMATION_MIN_SCALE, CARD_VIEW_SCALE, MAX_RENDER_RESOLUTION, MAX_VIEWPORT_ZOOM, MIN_VIEWPORT_ZOOM (+8 more)

### Community 26 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, esModuleInterop, forceConsistentCasingInFileNames, module, moduleResolution, noImplicitAny, outDir, paths (+12 more)

### Community 27 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+12 more)

### Community 28 - "MembersTreeContent.tsx"
Cohesion: 0.17
Nodes (16): @pixi/react, PixiElements, @pixi/react, pixi-viewport, SharpAvatarTracker(), Viewport(), ACCENT_COLOR_MAP, MembersTreeContent() (+8 more)

### Community 29 - "DropdownOption"
Cohesion: 0.22
Nodes (13): DropdownMenu(), Props, BadgeInput(), Props, BadgeInputField(), Props, useBadgeInputState(), ComboboxInput() (+5 more)

### Community 30 - "dependencies"
Cohesion: 0.11
Nodes (19): dependencies, date-fns, dotenv, elkjs, gsap, @gsap/react, @heroicons/react, lodash (+11 more)

### Community 31 - "server/package.json"
Cohesion: 0.11
Nodes (17): dotenv, typescript, concurrently, nodemon, @prisma/adapter-pg, ts-node, tsx, @types/cors (+9 more)

### Community 32 - "teamTypeRoutes.ts"
Cohesion: 0.14
Nodes (11): cloudinary, multer, multer-storage-cloudinary, @prisma/config, deleteCloudinaryImage(), extractCloudinaryPublicId(), uploadMiddleware(), rejectUpload() (+3 more)

### Community 33 - "MemberInfoSocial.tsx"
Cohesion: 0.25
Nodes (9): Props, FacebookIcon(), InstagramIcon(), LinkedinIcon(), TelegramIcon(), FieldError(), Props, SocialMediaFormFields() (+1 more)

### Community 34 - "src/utils/index.ts"
Cohesion: 0.16
Nodes (12): date-fns, react-dom, DropdownPortal(), Props, BirthdayFilterSection(), LineageMemberSearch(), Props, useDropdownPosition() (+4 more)

### Community 35 - "pixi.js"
Cohesion: 0.16
Nodes (12): pixi.js, FONT_FAMILY, NODE_SUBTITLE_STYLE, NODE_TITLE_STYLE, NODE_TOOLTIP_TEXT_STYLE, TEXT_RESOLUTION, CIRCLE_TEXTURE_SRC, PATTERN_TEXTURE_SRC (+4 more)

### Community 36 - "package.json"
Cohesion: 0.12
Nodes (15): prisma, @prisma/client, @types/node, name, private, version, eslint, eslint-config-next (+7 more)

### Community 37 - "useFitViewAnimation.ts"
Cohesion: 0.30
Nodes (10): gsap, MembersTreeScene(), NODE_HEIGHT, getBounds(), getFitViewTargetScale(), useFitViewAnimation(), useFocusFrameAnimation(), useFocusNodeAnimation() (+2 more)

### Community 38 - "filterSearchParams.ts"
Cohesion: 0.22
Nodes (11): Props, filtersToSearchParams(), parseCsvArray(), parseCsvStrings(), parseFiltersFromSearchParams(), parseNumberOrNull(), parseTreeMode(), serializeCsv() (+3 more)

### Community 39 - "useTreeLayout.ts"
Cohesion: 0.29
Nodes (12): useTreeLayout(), refreshNodeMembers(), transformMembersToFlowValues(), alignLineageLayout(), applyElkPositions(), computeGridLayout(), EMPTY_EDGE_STYLE, isDetachedAlumnus() (+4 more)

### Community 40 - "teamRoutes.ts"
Cohesion: 0.18
Nodes (11): deleteMember(), deleteTeam(), getTeamDetails(), TEAM_INCLUDE, uploadTeamIcon, teamBodySchema, teamMembersSchema, getPrismaCode() (+3 more)

### Community 41 - "devDependencies"
Cohesion: 0.17
Nodes (12): devDependencies, eslint, eslint-config-next, postcss, prisma, tailwindcss, @tailwindcss/postcss, @types/lodash (+4 more)

### Community 42 - "devDependencies"
Cohesion: 0.17
Nodes (12): devDependencies, concurrently, nodemon, prisma, @prisma/config, ts-node, tsx, @types/cors (+4 more)

### Community 43 - "useHoverNodeAnimation.ts"
Cohesion: 0.25
Nodes (9): @gsap/react, pixi-filters, NODE_HOVER_ANIMATION_DURATION, NODE_HOVER_SCALE, ZOOMED_OUT_HOVER_SCALE_MAP, calculateTargetScale(), createShadowFilter(), Props (+1 more)

### Community 44 - "TeamInfo.tsx"
Cohesion: 0.29
Nodes (9): Props, RosterRow(), TeamInfo(), TeamLogo(), TeamRosterEntry, formatYearRange(), getPositionPeriod(), getPositionYearLabel() (+1 more)

### Community 45 - "dependencies"
Cohesion: 0.18
Nodes (11): dependencies, cloudinary, cors, dotenv, express, mongodb, multer, multer-storage-cloudinary (+3 more)

### Community 46 - "useTeamSelection.ts"
Cohesion: 0.31
Nodes (6): NodesLayer(), Props, useTeamSelection(), getMemberById(), getTeamNodeId(), parseTeamNodeId()

### Community 47 - "TeamFrame"
Cohesion: 0.27
Nodes (8): Props, TeamFramesLayer(), Props, TeamOverviewLayer(), Props, Options, TeamFrame, TeamBlock

### Community 48 - "teamBadgeLayout.ts"
Cohesion: 0.29
Nodes (8): TEAM_TITLE_ICON_PADDING, TEAM_TITLE_ICON_SIZE, TEAM_TITLE_PADDING_X, TEAM_TITLE_PADDING_Y, getTeamBadgeLayout(), textWidth(), truncateText(), wrapTeamTitle()

### Community 49 - "teamPacking.ts"
Cohesion: 0.33
Nodes (8): TEAM_FRAME_GAP, TEAM_PACK_ASPECT, computePacking(), packLanes(), Placement, scorePacking(), shelfPack(), Size

### Community 50 - "treeStore.ts"
Cohesion: 0.31
Nodes (7): useSceneTransition(), EMPTY_IDS, EMPTY_POSITIONS, getNodePositions(), initialState, Updater, useTreeStore

### Community 51 - "scripts"
Cohesion: 0.22
Nodes (9): scripts, build, migrate:mongodb, prisma:generate, prisma:migrate-dev, prisma:studio, serve, start (+1 more)

### Community 52 - "scripts"
Cohesion: 0.33
Nodes (6): scripts, build, dev, dev:webpack, lint, start

### Community 53 - "Position"
Cohesion: 0.40
Nodes (5): Position, Bottom, Left, Right, Top

### Community 54 - "extends"
Cohesion: 0.50
Nodes (3): extends, next/core-web-vitals, next/typescript

## Knowledge Gaps
- **31 isolated node(s):** `Active`, `Excluded`, `Inactive`, `Alumni`, `Baby` (+26 more)
  These have ≤1 connection - possible missing edges. (Counts symbols only; 312 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `EditMemberForm.tsx`, `Member`, `http`, `filtersStore.ts`, `src/types/index.ts`, `TeamOverviewLabel.tsx`, `FilterState`, `PositionFormFields.tsx`, `ThemeContext.tsx`, `MemberNodeAvatar.tsx`, `useDashedPathAnimation.ts`, `FiltersPanel.tsx`, `MembersTreeScene.tsx`, `MemberNode.tsx`, `MemberInfo.tsx`, `constants/canvas/index.ts`, `MembersTreeContent.tsx`, `DropdownOption`, `src/utils/index.ts`, `pixi.js`, `package.json`, `useFitViewAnimation.ts`, `filterSearchParams.ts`, `useTreeLayout.ts`, `useHoverNodeAnimation.ts`, `useTeamSelection.ts`, `TeamFrame`, `treeStore.ts`?**
  _High betweenness centrality (0.222) - this node is a cross-community bridge._
- **What connects `Active`, `Excluded`, `Inactive` to the rest of the system?**
  _31 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `EditMemberForm.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06651735722284434 - nodes in this community are weakly interconnected._
- **Why does `express` connect `memberRoutes.ts` to `teamRoutes.ts`, `teamTypeRoutes.ts`, `catalogValidation.ts`, `server/package.json`?**
  _High betweenness centrality (0.118) - this node is a cross-community bridge._
- **Should `Member` be split into smaller, more focused modules?**
  _Cohesion score 0.05543859649122807 - nodes in this community are weakly interconnected._
- **Why does `zod` connect `memberService.ts` to `catalogValidation.ts`, `server/package.json`?**
  _High betweenness centrality (0.059) - this node is a cross-community bridge._
- **Should `http` be split into smaller, more focused modules?**
  _Cohesion score 0.07785547785547786 - nodes in this community are weakly interconnected._