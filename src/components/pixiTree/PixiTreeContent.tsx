"use client";

import { useEffect, useRef, useCallback } from "react";
import { Application } from "@pixi/react";
import { CullerPlugin } from "pixi.js";
import { useTree, useMembers, useDrawer, useViewportAnimation } from "@/hooks";
import {
  transformMembersToFlowValues,
  getLayoutedElements,
  getIsMinimized,
} from "@/libs";
import Member from "@/models/Member";
import type { Member as MemberType } from "@/types";
import PixiViewport from "./PixiViewport";
import PixiEdgesLayer from "./PixiEdgesLayer";
import PixiSidebar from "./PixiSidebar";
import PixiNodesWrapper from "./PixiNodesWrapper";
import Drawer, { MemberDrawerContent } from "../drawer";

interface Props {
  members: MemberType[];
}

const PixiTreeContent = ({ members }: Props) => {
  const {
    nodes,
    setNodes,
    edges,
    setEdges,
    scale,
    setScale,
    setViewport,
    nodePositions,
  } = useTree();

  const { membersTree, setMembers, selectedMember, setSelectedMember } =
    useMembers();

  const {
    isDrawerOpen,
    drawerMode,
    onClose: handleDrawerClose,
    onEditClick: handleDrawerEditClick,
    onBackToInfoClick: handleDrawerBackToInfo,
  } = useDrawer(selectedMember, setSelectedMember);

  const { fitView } = useViewportAnimation();

  const handleFitView = useCallback(() => {
    fitView();
  }, [fitView]);

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
        <PixiViewport
          ref={setViewport}
          width={window.innerWidth}
          height={window.innerHeight}
          onScaleChange={setScale}
        >
          <PixiEdgesLayer
            edges={edges}
            nodePositions={nodePositions}
            pixelLine={getIsMinimized(scale)}
          />
          <PixiNodesWrapper
            nodes={nodes}
            scale={scale}
            selectedMember={selectedMember}
            onNodeClick={handleNodeClick}
          />
        </PixiViewport>
      </Application>
      <PixiSidebar onFitView={handleFitView} />
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

export default PixiTreeContent;
