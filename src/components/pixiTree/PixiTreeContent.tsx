"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useCallback,
  useContext,
  useState,
} from "react";
import { Application } from "@pixi/react";
import { CullerPlugin } from "pixi.js";
import { PixiTreeContext } from "@/context/PixiTreeContext";
import { useMembers, useViewportAnimation } from "@/hooks";
import {
  transformMembersToFlowValues,
  getLayoutedElements,
  getIsMinimized,
} from "@/libs";
import Member from "@/models/Member";
import type { Member as MemberType, DrawerMode } from "@/types";
import Drawer, { MemberDrawerContent } from "../drawer";
import PixiViewport from "./PixiViewport";
import PixiNode from "./pixiNode/PixiNode";
import PixiEdgesLayer from "./PixiEdgesLayer";
import PixiSidebar from "./PixiSidebar";

interface Props {
  members: MemberType[];
}

const PixiTreeContent = ({ members }: Props) => {
  const context = useContext(PixiTreeContext);

  if (!context) {
    throw new Error("PixiTreeContent must be used within a PixiTreeProvider");
  }

  const { nodes, setNodes, edges, setEdges, scale, setScale, setViewport } =
    context;

  // Local state for UI only
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerMode, setDrawerMode] = useState<DrawerMode>("info");
  const containerRef = useRef<HTMLDivElement>(null);

  const { membersTree, setMembers, selectedMember, setSelectedMember } =
    useMembers();

  const { fitView } = useViewportAnimation();

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

  const handleDrawerEditClick = () => setDrawerMode("edit");
  const handleDrawerEditExit = () => setDrawerMode("info");

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
            pixelLine={getIsMinimized(scale)}
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
        id="member-drawer"
        headerTitle={drawerMode === "info" ? "Інфо" : "Редагувати"}
        mode={drawerMode}
        isOpen={isDrawerOpen}
        onClose={handleDrawerClose}
        onEditClick={handleDrawerEditClick}
        onBackClick={handleDrawerEditExit}
        className="z-10"
      >
        {!!selectedMember && (
          <MemberDrawerContent
            member={selectedMember}
            drawerMode={drawerMode}
            onEditExit={handleDrawerEditExit}
          />
        )}
      </Drawer>
    </div>
  );
};

export default PixiTreeContent;
