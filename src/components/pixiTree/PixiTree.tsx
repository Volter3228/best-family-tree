"use client";

import { useEffect, useState, useMemo, useRef } from "react";
import { Application } from "@pixi/react";
import { CullerPlugin } from "pixi.js";
import { Viewport } from "pixi-viewport";
import { useMembers, useFitViewAnimation } from "@/hooks";
import { Node, Edge } from "@xyflow/react";
import type { Member as MemberType } from "@/types";
import {
  registerPlugins,
  transformMembersToFlowValues,
  getLayoutedElements,
} from "@/libs";
import { MINIMIZED_VIEW_SCALE } from "@/constants/pixi";
import Member from "@/models/Member";
import PixiViewport from "./PixiViewport";
import PixiNode from "./pixiNode/PixiNode";
import PixiEdgesLayer from "./PixiEdgesLayer";
import Drawer, { MemberInfo } from "../drawer";
import PixiSidebar from "./PixiSidebar";

registerPlugins();

interface Props {
  members: MemberType[];
}

const PixiTree = ({ members }: Props) => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [scale, setScale] = useState(1);
  const [isInfoDrawerOpen, setIsInfoDrawerOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<Viewport>(null);

  const { membersTree, setMembers, selectedMember, setSelectedMember } =
    useMembers();

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

  const fitView = useFitViewAnimation({
    nodes,
    viewport: viewportRef.current,
    setScale,
  });

  // Handle auto-fit-view on initial load
  useEffect(() => {
    if (nodes.length > 0) {
      const timer = setTimeout(() => fitView(2), 500);
      return () => clearTimeout(timer);
    }
  }, [nodes, fitView]);

  // Drawer logic
  useEffect(() => {
    if (selectedMember) {
      setIsInfoDrawerOpen(true);
    }
  }, [selectedMember]);

  const handleInfoDrawerClose = () => {
    setIsInfoDrawerOpen(false);
    setTimeout(() => {
      setSelectedMember(null);
    }, 300);
  };

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
          ref={viewportRef}
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
        headerTitle="Інфо"
        onClose={handleInfoDrawerClose}
        isOpen={isInfoDrawerOpen}
        className="z-10"
      >
        {!!selectedMember && <MemberInfo member={selectedMember} />}
      </Drawer>
    </div>
  );
};

export default PixiTree;
