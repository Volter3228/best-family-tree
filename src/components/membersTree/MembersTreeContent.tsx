"use client";

import { useEffect, useRef, useCallback } from "react";
import { Application } from "@pixi/react";
import { CullerPlugin } from "pixi.js";
import {
  useMembersTree,
  useMembers,
  useDrawer,
  useViewportAnimation,
} from "@/hooks";
import {
  transformMembersToFlowValues,
  getLayoutedElements,
  getIsMinimized,
} from "@/utils";
import { Member } from "@/models";
import type { Member as MemberType } from "@/types";
import { Viewport, NodesLayer, EdgesLayer } from "./canvas";
import Drawer, { MemberDrawerContent } from "../drawer";
import Sidebar from "./sidebar";

interface Props {
  members: MemberType[];
}

const MembersTreeContent = ({ members }: Props) => {
  const {
    nodes,
    setNodes,
    edges,
    setEdges,
    scale,
    setScale,
    setViewport,
    nodePositions,
  } = useMembersTree();

  const {
    membersTree,
    setMembers,
    selectedMember,
    setSelectedMember,
    getMemberById,
  } = useMembers();

  const {
    isDrawerOpen,
    drawerMode,
    onClose: handleDrawerClose,
    onEditClick: handleDrawerEditClick,
    onBackToInfoClick: handleDrawerBackToInfo,
  } = useDrawer(selectedMember, setSelectedMember);

  const { fitView, focusNode } = useViewportAnimation();

  const handleFitView = useCallback(() => {
    fitView();
  }, [fitView]);

  const handleSearch = useCallback(
    (memberId: string) => {
      const member = getMemberById(memberId);
      if (!member) return;
      setSelectedMember(member);
      focusNode(memberId);
    },
    [getMemberById, setSelectedMember, focusNode],
  );

  const hasInitialFitView = useRef(false);

  // Sync members
  useEffect(() => {
    if (!membersTree.length) {
      setMembers(members);
    }
  }, [membersTree, members]);

  // Layout
  useEffect(() => {
    if (membersTree.length > 0) {
      const { nodes: newNodes, edges: newEdges } =
        transformMembersToFlowValues(membersTree);

      getLayoutedElements(newNodes, newEdges).then((res) => {
        setNodes(res.layoutedNodes);
        setEdges(res.layoutedEdges);
      });
    }
  }, [membersTree]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (nodes.length > 0 && !hasInitialFitView.current) {
      timer = setTimeout(() => {
        fitView(2);
        hasInitialFitView.current = true;
      }, 200);
    }
    return () => clearTimeout(timer);
  }, [nodes, fitView]);

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
          <EdgesLayer
            edges={edges}
            nodePositions={nodePositions}
            pixelLine={getIsMinimized(scale)}
          />
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
