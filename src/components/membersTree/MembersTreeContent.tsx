"use client";

import { useCallback, useMemo } from "react";
import { Application } from "@pixi/react";
import { CullerPlugin } from "pixi.js";
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
} from "@/hooks";
import { getMemberById } from "@/store/membersStore";
import { useFiltersStore } from "@/store/filtersStore";
import { useTreeStore } from "@/store/treeStore";
import type { Member as MemberType, AccentColor, TeamFrame } from "@/types";
import { getRenderResolution } from "@/utils";
import { Viewport, SharpAvatarTracker } from "./canvas";
import MembersTreeScene from "./MembersTreeScene";
import Sidebar, { MemberSidebarContent } from "../sidebar";
import TeamInfoSidebar from "./TeamInfoSidebar";
import Toolbar from "./toolbar";

// Hover and drag only need events on the objects under the pointer.
const EVENT_FEATURES = { globalMove: false } as const;

const ACCENT_COLOR_MAP: AccentColor[] = ["blue", "green", "orange"];

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
  const scale = useTreeStore((s) => s.scale);
  const setScale = useTreeStore((s) => s.setScale);
  const setViewport = useTreeStore((s) => s.setViewport);

  const selectedMember = useSelectedMember();
  const selectedId = selectedMember?.id ?? null;
  const { selectMember } = useMembersActions();

  const {
    isSidebarOpen,
    sidebarMode,
    onClose: handleSidebarClose,
    onEditClick: handleSidebarEditClick,
    onBackToInfoClick: handleSidebarBackToInfo,
  } = useSidebar(selectedMember, selectMember);

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

  useSyncMembers(members);
  useTreeLayout();

  const handleFitView = useCallback(() => fitView(), [fitView]);

  // Accent colour by member id (the first node of a member wins in team view).
  const accentByMemberId = useMemo(() => {
    const map = new Map<string, AccentColor>();
    for (const node of nodes) {
      if (!map.has(node.data.member.id)) {
        map.set(
          node.data.member.id,
          ACCENT_COLOR_MAP[node.data.placeholderColorIndex],
        );
      }
    }
    return map;
  }, [nodes]);

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

  const sidebarColor = useMemo<AccentColor>(() => {
    if (!selectedId) return "blue";
    return accentByMemberId.get(selectedId) ?? "blue";
  }, [selectedId, accentByMemberId]);

  // Multisampling on top of a 2x canvas costs a lot of fill rate (phones,
  // retina) for edges that are already smooth at that density.
  const resolution = getRenderResolution();

  return (
    <div className="fixed inset-0 overflow-hidden">
      <Application
        resizeTo={window}
        backgroundAlpha={0}
        resolution={resolution}
        antialias={resolution < 2}
        eventFeatures={EVENT_FEATURES}
        autoDensity
        extensions={[CullerPlugin]}
      >
        <Viewport
          ref={setViewport}
          width={window.innerWidth}
          height={window.innerHeight}
          onScaleChange={setScale}
        >
          <SharpAvatarTracker />
          <MembersTreeScene
            sceneRef={sceneRef}
            treeMode={treeMode}
            scale={scale}
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
        </Viewport>
      </Application>
      <Toolbar
        onFitView={handleFitView}
        onSearch={handleSearch}
        onTeamSearch={handleFrameClick}
      />
      <Sidebar
        id="member-sidebar"
        headerTitle={sidebarMode === "info" ? "Інфо" : "Редагувати"}
        mode={sidebarMode}
        isOpen={isSidebarOpen}
        onClose={handleSidebarClose}
        onEditClick={handleSidebarEditClick}
        onBackClick={handleSidebarBackToInfo}
        className="z-10"
        color={sidebarColor}
      >
        {!!selectedMember && (
          <MemberSidebarContent
            member={selectedMember}
            sidebarMode={sidebarMode}
            onEditExit={handleSidebarBackToInfo}
            color={sidebarColor}
            isTeamView={isTeamView}
            canFocusMemberInTeam={canFocusMemberInTeam}
            onFocusMemberInTeam={focusMemberInTeam}
            onOpenTeamInfo={teamInfo.open}
            onDeleted={handleSidebarClose}
          />
        )}
      </Sidebar>
      <TeamInfoSidebar
        state={teamInfo}
        canFocusMemberInTeam={canFocusMemberInTeam}
        onFocusMemberInTeam={focusMemberInTeam}
        canSelectMember={canSelectMember}
        onSelectMember={handleSelectMember}
        onTitleClick={handleTeamTitleClick}
      />
    </div>
  );
};

export default MembersTreeContent;
