"use client";

import { useCallback } from "react";
import { Application } from "@pixi/react";
import {
  useMembersActions,
  useSelectedMember,
  useSidebar,
  useViewportAnimation,
  useFilterSearchParams,
  useSyncMembers,
  useTreeLayout,
  useTeamSelection,
  useTeamInfoSidebar,
  useResolvedDirection,
} from "@/hooks";
import { useProfileOpenRequest } from "@/hooks/sidebar/useProfileOpenRequest";
import { getMemberById } from "@/store/membersStore";
import { useFiltersStore } from "@/store/filtersStore";
import { useSettingsStore } from "@/store/settingsStore";
import { useTreeStore } from "@/store/treeStore";
import type { Member as MemberType, TeamFrame } from "@/types";
import { getRenderResolution } from "@/utils";
import { Viewport, SharpAvatarTracker } from "./canvas";
import MembersTreeScene from "./MembersTreeScene";
import ViewportCulling from "./ViewportCulling";
import MemberSidebar from "./MemberSidebar";
import TeamInfoSidebar from "./TeamInfoSidebar";
import Toolbar from "./toolbar";

// Hover and drag only need events on the objects under the pointer.
const EVENT_FEATURES = { globalMove: false } as const;

interface Props {
  members: MemberType[];
}

const MembersTreeContent = ({ members }: Props) => {
  const nodes = useTreeStore((s) => s.nodes);
  const edges = useTreeStore((s) => s.edges);
  const teamFrames = useTreeStore((s) => s.teamFrames);
  const layoutMode = useTreeStore((s) => s.layoutMode);
  const sceneRef = useTreeStore((s) => s.sceneRef);
  const nodePositions = useTreeStore((s) => s.nodePositions);
  const setScale = useTreeStore((s) => s.setScale);
  const setViewport = useTreeStore((s) => s.setViewport);

  const selectedMember = useSelectedMember();
  const selectedId = selectedMember?.id ?? null;
  const { selectMember: selectMemberInStore } = useMembersActions();

  const memberSidebar = useSidebar(selectedMember, selectMemberInStore);
  const { selectMember, onClose: handleSidebarClose } = memberSidebar;

  const teamInfo = useTeamInfoSidebar(selectedMember, handleSidebarClose);

  const filteredMemberIds = useFiltersStore((s) => s.filteredMemberIds);
  const appliedFilters = useFiltersStore((s) => s.appliedFilters);
  const applyUrlFilters = useFiltersStore((s) => s.applyUrlFilters);
  useFilterSearchParams({
    filters: appliedFilters,
    setFilters: applyUrlFilters,
  });
  const { focusNode, fitView, focusFrame } = useViewportAnimation();
  // Follow the mode of the nodes actually drawn, which lags behind the filter
  // while the scene cross-fades between modes.
  const treeMode = layoutMode ?? appliedFilters.treeMode;
  const isTeamView = treeMode === "team";
  // Edges keep their old shape while the scene cross-fades to a new direction.
  const resolvedDirection = useResolvedDirection();
  const layoutDirection = useTreeStore((s) => s.layoutDirection);
  const direction = layoutDirection ?? resolvedDirection;
  const edgeStyle = useSettingsStore((s) => s.edgeStyle);

  const {
    selectedTeamId,
    handleNodeClick,
    rememberTeamFor,
    canFocusMemberInTeam,
    focusMemberInTeam,
  } = useTeamSelection({
    isTeamView,
    nodes,
    nodePositions,
    teamFrames,
    selectedId,
    selectMember,
    focusNode,
  });

  // The frame to highlight: the team whose info is open, otherwise the team of
  // the selected member.
  const highlightedTeamId =
    teamInfo.isOpen && teamInfo.teamId ? teamInfo.teamId : selectedTeamId;

  // Clicking a team's badge only opens its info (no fit-to-view); clicking its
  // square when zoomed out (or via the toolbar) fits it in view and opens info.
  const handleBadgeClick = useCallback(
    (frame: TeamFrame) => {
      teamInfo.open(frame.teamId);
    },
    [teamInfo.open],
  );

  const handleFrameClick = useCallback(
    (frame: TeamFrame) => {
      focusFrame(frame);
      teamInfo.open(frame.teamId);
    },
    [focusFrame, teamInfo.open],
  );

  const handleTeamTitleClick = useCallback(() => {
    const frame = teamFrames.find((item) => item.teamId === teamInfo.teamId);
    if (frame) focusFrame(frame);
  }, [teamFrames, teamInfo.teamId, focusFrame]);

  // In grid/family view a roster row always selects the member (if they have
  // a node on the canvas), regardless of the layout type. Mirrors the member
  // sidebar's name-click handler.
  const canSelectMember = useCallback(
    (memberId: string) => nodePositions.has(memberId),
    [nodePositions],
  );
  const handleSelectMember = useCallback(
    (memberId: string) => {
      if (!getMemberById(memberId)) return;
      selectMember(memberId);
      focusNode(memberId);
    },
    [selectMember, focusNode],
  );

  // Back from a team opened through a member's position badge.
  const handleBackToMember = useCallback(
    (memberId: string) => {
      handleSelectMember(memberId);
      teamInfo.close();
    },
    [handleSelectMember, teamInfo.close],
  );

  const handleOpenTeamFromMember = useCallback(
    (teamId: string) => teamInfo.open(teamId, selectedId),
    [teamInfo.open, selectedId],
  );

  useProfileOpenRequest({
    openInMode: memberSidebar.openInMode,
    openTeam: teamInfo.open,
    closeTeam: teamInfo.close,
    focusNode,
    focusFrame,
    rememberTeamFor,
    isTeamView,
  });

  useSyncMembers(members);
  useTreeLayout();

  const handleFitView = useCallback(() => fitView(), [fitView]);

  const handleSearch = useCallback(
    (memberId: string) => {
      if (!getMemberById(memberId)) return;
      if (filteredMemberIds && !filteredMemberIds.has(memberId)) return;
      selectMember(memberId);
      rememberTeamFor(memberId);
      focusNode(memberId);
    },
    [selectMember, focusNode, filteredMemberIds, rememberTeamFor],
  );

  // Multisampling on top of a 2x canvas costs a lot of fill rate (phones,
  // retina) for edges that are already smooth at that density.
  const resolution = getRenderResolution();

  return (
    <div
      className="fixed inset-0 overflow-hidden"
      // A long touch on a node would open the browser's context menu.
      onContextMenu={(e) => {
        if ((e.nativeEvent as PointerEvent).pointerType === "touch") {
          e.preventDefault();
        }
      }}
    >
      <Application
        resizeTo={window}
        backgroundAlpha={0}
        resolution={resolution}
        antialias={resolution < 2}
        eventFeatures={EVENT_FEATURES}
        autoDensity
      >
        <Viewport
          ref={setViewport}
          width={window.innerWidth}
          height={window.innerHeight}
          onScaleChange={setScale}
        >
          <ViewportCulling />
          <SharpAvatarTracker />
          {/* A render group of its own: panning the viewport then moves one
              transform instead of recomputing every node's world transform. */}
          <pixiContainer
            ref={sceneRef}
            isRenderGroup
            label="tree-render-group"
          >
            <MembersTreeScene
              treeMode={treeMode}
              direction={direction}
              edgeStyle={edgeStyle}
              nodes={nodes}
              edges={edges}
              teamFrames={teamFrames}
              nodePositions={nodePositions}
              selectedId={selectedId}
              selectedTeamId={highlightedTeamId}
              onNodeClick={handleNodeClick}
              onBadgeClick={handleBadgeClick}
              onFrameClick={handleFrameClick}
            />
          </pixiContainer>
        </Viewport>
      </Application>
      <Toolbar
        onFitView={handleFitView}
        onSearch={handleSearch}
        onTeamSearch={handleFrameClick}
        isInfoOpen={memberSidebar.isSidebarOpen || teamInfo.isOpen}
      />
      <MemberSidebar
        state={memberSidebar}
        member={selectedMember}
        isTeamView={isTeamView}
        canFocusMemberInTeam={canFocusMemberInTeam}
        onFocusMemberInTeam={focusMemberInTeam}
        onOpenTeamInfo={handleOpenTeamFromMember}
      />
      <TeamInfoSidebar
        state={teamInfo}
        canFocusMemberInTeam={canFocusMemberInTeam}
        onFocusMemberInTeam={focusMemberInTeam}
        canSelectMember={canSelectMember}
        onSelectMember={handleSelectMember}
        onTitleClick={isTeamView ? handleTeamTitleClick : undefined}
        onBack={handleBackToMember}
      />
    </div>
  );
};

export default MembersTreeContent;
