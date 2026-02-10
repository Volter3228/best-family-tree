"use client";

import { useEffect, useState, useMemo, useRef, useCallback } from "react";
import { Application } from "@pixi/react";
import { CullerPlugin } from "pixi.js";
import { Viewport } from "pixi-viewport";
import { useMembers, useFitViewAnimation } from "@/hooks";
import { Node, Edge } from "@xyflow/react";
import type { Member as MemberType, DrawerMode } from "@/types";
import {
  registerPlugins,
  transformMembersToFlowValues,
  getLayoutedElements,
} from "@/libs";
import { MINIMIZED_VIEW_SCALE } from "@/constants/pixi";
import Member from "@/models/Member";
import Drawer, { MemberDrawerContent } from "../drawer";
import PixiViewport from "./PixiViewport";
import PixiNode from "./pixiNode/PixiNode";
import PixiEdgesLayer from "./PixiEdgesLayer";
import PixiSidebar from "./PixiSidebar";

registerPlugins();

interface Props {
  members: MemberType[];
}

const PixiTree = ({ members }: Props) => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [scale, setScale] = useState(1);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerMode, setDrawerMode] = useState<DrawerMode>("info");
  const [viewport, setViewport] = useState<Viewport | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const { membersTree, setMembers, selectedMember, setSelectedMember } =
    useMembers();

  const fitView = useFitViewAnimation({
    nodes,
    viewport,
    setScale,
  });

  // Sync members
  useEffect(() => {
    if (!membersTree.length) {
      setMembers(members);
    }
  }, [membersTree, setMembers, members]);

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
    if (nodes.length > 0) {
      timer = setTimeout(() => fitView(2), 200);
    }
    return () => clearTimeout(timer);
  }, [nodes, fitView]);

  useEffect(() => {
    if (selectedMember) {
      setIsDrawerOpen(true);
      setDrawerMode("info");
    }
  }, [selectedMember]);

  const handleDrawerClose = useCallback(() => {
    setIsDrawerOpen(false);
    setTimeout(() => {
      setDrawerMode("info");
      setSelectedMember(null);
    }, 300);
  }, []);

  const handleEditClick = useCallback(() => {
    setDrawerMode("edit");
  }, []);

  const handleEditExit = useCallback(() => {
    setDrawerMode("info");
  }, []);

  const handleNodeClick = (member: Member) => setSelectedMember(member);

  const nodePositions = useMemo(() => {
    const map = new Map<string, { x: number; y: number }>();
    nodes.forEach((n) => {
      map.set(n.id, { x: n.position.x, y: n.position.y });
    });
    return map;
  }, [nodes]);

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden">
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
            pixelLine={scale < MINIMIZED_VIEW_SCALE}
          />
          {nodes.map((node) => (
            <PixiNode
              key={node.id}
              x={node.position.x}
              y={node.position.y}
              appScale={scale}
              member={node.data.member as Member}
              isSelected={selectedMember?.id === node.id}
              onClick={handleNodeClick}
            />
          ))}
        </PixiViewport>
      </Application>
      <PixiSidebar onFitView={fitView} />
      <Drawer
        headerTitle={drawerMode === "info" ? "Інфо" : "Редагувати"}
        mode={drawerMode}
        isOpen={isDrawerOpen}
        onClose={handleDrawerClose}
        onEditClick={handleEditClick}
        onBackClick={handleEditExit}
        className="z-10"
      >
        {!!selectedMember && (
          <MemberDrawerContent
            member={selectedMember}
            drawerMode={drawerMode}
            onEditExit={handleEditExit}
          />
        )}
      </Drawer>
    </div>
  );
};

export default PixiTree;
