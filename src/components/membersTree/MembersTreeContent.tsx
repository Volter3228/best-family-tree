"use client";

import { useCallback } from "react";
import { Application } from "@pixi/react";
import { CullerPlugin } from "pixi.js";
import {
  useMembersTree,
  useMembers,
  useDrawer,
  useViewportAnimation,
  useFilters,
  useSyncMembers,
  useTreeLayout,
} from "@/hooks";
import { getIsMinimized } from "@/utils";
import { Member } from "@/models";
import type { Member as MemberType } from "@/types";
import { Viewport, NodesLayer, EdgesLayer, LineageEdge } from "./canvas";
import Drawer, { MemberDrawerContent } from "../drawer";
import Sidebar from "./sidebar";

interface Props {
  members: MemberType[];
}

const MembersTreeContent = ({ members }: Props) => {
  const { nodes, edges, scale, setScale, setViewport, nodePositions } =
    useMembersTree();

  const { selectedMember, setSelectedMember, getMemberById, membersMap } =
    useMembers();

  const {
    isDrawerOpen,
    drawerMode,
    onClose: handleDrawerClose,
    onEditClick: handleDrawerEditClick,
    onBackToInfoClick: handleDrawerBackToInfo,
  } = useDrawer(selectedMember, setSelectedMember);

  const { filteredMemberIds, appliedFilters } = useFilters();
  const { focusNode, fitView } = useViewportAnimation();
  const showTree = appliedFilters.showTree;

  useSyncMembers(members);
  useTreeLayout();

  const handleFitView = useCallback(() => fitView(), [fitView]);

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
              pixelLine={getIsMinimized(scale)}
            />
          )}
          {showTree && (
            <LineageEdge
              selectedMember={selectedMember}
              membersMap={membersMap}
              nodePositions={nodePositions}
              pixelLine={getIsMinimized(scale)}
            />
          )}
          <NodesLayer
            nodes={nodes}
            scale={scale}
            selectedMember={selectedMember}
            onNodeClick={handleNodeClick}
          />
        </Viewport>
      </Application>
      <Sidebar onFitView={handleFitView} onSearch={handleSearch} />
      <Drawer
        id="member-drawer"
        headerTitle={drawerMode === "info" ? "Інфо" : "Редагувати"}
        mode={drawerMode}
        isOpen={isDrawerOpen}
        onClose={handleDrawerClose}
        onEditClick={handleDrawerEditClick}
        onBackClick={handleDrawerBackToInfo}
        className="z-10"
      >
        {!!selectedMember && (
          <MemberDrawerContent
            member={selectedMember}
            drawerMode={drawerMode}
            onEditExit={handleDrawerBackToInfo}
          />
        )}
      </Drawer>
    </div>
  );
};

export default MembersTreeContent;
