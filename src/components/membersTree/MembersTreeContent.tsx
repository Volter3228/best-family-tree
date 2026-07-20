"use client";

import { useCallback, useMemo } from "react";
import { Application } from "@pixi/react";
import { CullerPlugin } from "pixi.js";
import {
  useMembersTree,
  useMembers,
  useSidebar,
  useViewportAnimation,
  useFilters,
  useSyncMembers,
  useTreeLayout,
} from "@/hooks";
import { isZoomedOut as getIsZoomedOut } from "@/utils";
import { BIRTHDAY_ANIMATION_MIN_SCALE } from "@/constants/canvas";
import { Member } from "@/models";
import type { Member as MemberType, AccentColor } from "@/types";
import { Viewport, NodesLayer, EdgesLayer, LineageEdge } from "./canvas";
import Sidebar, { MemberSidebarContent } from "../sidebar";
import Toolbar from "./toolbar";

const ACCENT_COLOR_MAP: AccentColor[] = ["blue", "green", "orange"];

interface Props {
  members: MemberType[];
}

const MembersTreeContent = ({ members }: Props) => {
  const { nodes, edges, scale, setScale, setViewport, nodePositions } =
    useMembersTree();

  const { selectedMember, setSelectedMember, getMemberById, membersMap } =
    useMembers();

  const {
    isSidebarOpen,
    sidebarMode,
    onClose: handleSidebarClose,
    onEditClick: handleSidebarEditClick,
    onBackToInfoClick: handleSidebarBackToInfo,
  } = useSidebar(selectedMember, setSelectedMember);

  const { filteredMemberIds, appliedFilters } = useFilters();
  const { focusNode, fitView } = useViewportAnimation();
  const showTree = appliedFilters.showTree;

  useSyncMembers(members);
  useTreeLayout();

  const handleFitView = useCallback(() => fitView(), [fitView]);

  const getMemberAccentColor = useCallback(
    (memberId: string): AccentColor => {
      const node = nodes.find((n) => n.id === memberId);
      return node ? ACCENT_COLOR_MAP[node.data.placeholderColorIndex] : "blue";
    },
    [nodes],
  );

  const handleSearch = useCallback(
    (memberId: string) => {
      const member = getMemberById(memberId);
      if (!member) return;
      if (filteredMemberIds && !filteredMemberIds.has(memberId)) return;
      setSelectedMember(member);
      focusNode(memberId);
    },
    [getMemberById, setSelectedMember, focusNode, filteredMemberIds],
  );

  const handleNodeClick = (member: Member) => setSelectedMember(member);

  const isZoomedOut = getIsZoomedOut(scale);

  const sidebarColor = useMemo<AccentColor>(() => {
    if (!selectedMember) return "blue";
    return getMemberAccentColor(selectedMember.id);
  }, [selectedMember, getMemberAccentColor]);

  return (
    <div className="fixed inset-0 overflow-hidden">
      <Application
        resizeTo={window}
        backgroundAlpha={0}
        resolution={window.devicePixelRatio || 1}
        antialias
        autoDensity
        extensions={[CullerPlugin]}
      >
        <Viewport
          ref={setViewport}
          width={window.innerWidth}
          height={window.innerHeight}
          onScaleChange={setScale}
        >
          {showTree && (
            <EdgesLayer
              edges={edges}
              nodePositions={nodePositions}
              pixelLine={isZoomedOut}
            />
          )}
          {showTree && (
            <LineageEdge
              selectedMember={selectedMember}
              membersMap={membersMap}
              nodePositions={nodePositions}
              pixelLine={isZoomedOut}
            />
          )}
          <NodesLayer
            nodes={nodes}
            isZoomedOut={isZoomedOut}
            showBirthday={scale >= BIRTHDAY_ANIMATION_MIN_SCALE}
            selectedMember={selectedMember}
            onNodeClick={handleNodeClick}
          />
        </Viewport>
      </Application>
      <Toolbar onFitView={handleFitView} onSearch={handleSearch} />
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
          />
        )}
      </Sidebar>
    </div>
  );
};

export default MembersTreeContent;
