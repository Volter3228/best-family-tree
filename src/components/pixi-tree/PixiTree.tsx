"use client";

import { useEffect, useState, useMemo, useRef, useCallback } from "react";
import { extend, Application } from "@pixi/react";
import { Container, Sprite, Graphics, Text, BitmapText } from "pixi.js";
import gsap from "gsap";
import { useMembers } from "@/hooks/useMembers";
import {
  transformMembersToFlowValues,
  getLayoutedElements,
} from "@/libs/reactFlow";
import { Node, Edge } from "@xyflow/react";
import type { Member as MemberType } from "@/types";
import Member from "@/models/Member";
import PixiViewport from "./PixiViewport";
import PixiNode from "./pixiNode/PixiNode";
import PixiEdge from "./PixiEdge";
import { NODE_WIDTH, NODE_HEIGHT } from "./pixiNode/constants";
import Drawer from "../drawer/Drawer";
import MemberInfo from "../drawer/MemberInfo";
import PixiSidebar from "./PixiSidebar";

extend({
  Container,
  Sprite,
  Graphics,
  Text,
  BitmapText,
});

interface Props {
  members: MemberType[];
}

const PixiTree = ({ members }: Props) => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [zoom, setZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<Container>(null);

  const [isInfoDrawerOpen, setIsInfoDrawerOpen] = useState(false);
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

  const animationRef = useRef<gsap.core.Tween | null>(null);

  const fitView = useCallback(
    (duration = 0.8) => {
      if (nodes.length === 0 || dimensions.width === 0 || !viewportRef.current)
        return;

      // Kill any existing fitView animation to prevent conflicts
      if (animationRef.current) animationRef.current.kill();

      let minX = Infinity;
      let minY = Infinity;
      let maxX = -Infinity;
      let maxY = -Infinity;

      nodes.forEach((node) => {
        if (node.position.x < minX) minX = node.position.x;
        if (node.position.y < minY) minY = node.position.y;
        if (node.position.x > maxX) maxX = node.position.x;
        if (node.position.y > maxY) maxY = node.position.y;
      });

      maxX += NODE_WIDTH;
      maxY += NODE_HEIGHT;

      const graphWidth = maxX - minX;
      const graphHeight = maxY - minY;
      const padding = 100; // Increased padding for a better feel

      const fullWidth = graphWidth + padding * 2;
      const fullHeight = graphHeight + padding * 2;

      const scaleX = dimensions.width / fullWidth;
      const scaleY = dimensions.height / fullHeight;
      const targetScale = Math.min(scaleX, scaleY, 1);

      const centerX = (minX + maxX) / 2;
      const centerY = (minY + maxY) / 2;

      const targetX = dimensions.width / 2 - centerX * targetScale;
      const targetY = dimensions.height / 2 - centerY * targetScale;

      const viewport = viewportRef.current;
      viewport.cacheAsTexture(true);

      // 2. GSAP Animation Logic
      animationRef.current = gsap.to(viewport, {
        x: targetX,
        y: targetY,
        duration: duration,
        ease: "power3.inOut",
        onUpdate: () => {
          // Synchronize the zoom state for nodes/edges that might need it for LOD
          setZoom(viewport.scale.x);
        },
      });

      // Animate scale separately if your viewport component handles scale property directly
      gsap.to(viewport.scale, {
        x: targetScale,
        y: targetScale,
        duration: duration,
        ease: "power3.inOut",
      });

      viewport.cacheAsTexture(false);
    },
    [nodes, dimensions]
  );

  // Handle auto-fit on initial load or layout change
  useEffect(() => {
    if (nodes.length > 0) {
      // Use a slight delay to ensure everything is rendered
      const timer = setTimeout(() => fitView(1.5), 100);
      return () => clearTimeout(timer);
    }
  }, [nodes, fitView]);

  // 3. Kill animation on manual user drag
  useEffect(() => {
    if (isDragging && animationRef.current) {
      animationRef.current.kill();
    }
  }, [isDragging]);

  useEffect(() => {
    let cancelled = false;
    // Double rAF ensures the Application component has mounted and rendered
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!cancelled) {
          fitView();
        }
      });
    });
    return () => {
      cancelled = true;
    };
  }, [fitView]);

  // Resize handler
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Prevent browser zoom on the entire container (Ctrl+scroll, pinch zoom)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const preventBrowserZoom = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
      }
    };

    container.addEventListener("wheel", preventBrowserZoom, { passive: false });
    return () => container.removeEventListener("wheel", preventBrowserZoom);
  }, []);

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

  const handleNodeClick = (member: Member) => {
    setSelectedMember(member);
  };

  const handleDraggingChange = (isDragging: boolean) => {
    setIsDragging(isDragging);
  };

  // Node position lookup
  const nodePositions = useMemo(() => {
    const map = new Map<string, { x: number; y: number }>();
    nodes.forEach((n) => {
      map.set(n.id, { x: n.position.x, y: n.position.y });
    });
    return map;
  }, [nodes]);

  if (!dimensions.width || !dimensions.height) {
    return <div ref={containerRef} className="fixed inset-0" />;
  }

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden">
      <Application
        width={dimensions.width}
        height={dimensions.height}
        backgroundAlpha={0}
        resolution={window.devicePixelRatio || 1}
        antialias
        autoDensity
      >
        <PixiViewport
          ref={viewportRef}
          width={dimensions.width}
          height={dimensions.height}
          onZoomChange={setZoom}
          isDragging={isDragging}
          onDraggingChange={handleDraggingChange}
        >
          {edges.map((edge) => {
            const sourcePos = nodePositions.get(edge.source);
            const targetPos = nodePositions.get(edge.target);

            if (!sourcePos || !targetPos) return null;

            return (
              <PixiEdge
                key={edge.id}
                sourceX={sourcePos.x + NODE_WIDTH / 2}
                sourceY={sourcePos.y + NODE_HEIGHT}
                targetX={targetPos.x + NODE_WIDTH / 2}
                targetY={targetPos.y}
                zoom={zoom}
              />
            );
          })}
          {nodes.map((node) => (
            <PixiNode
              key={node.id}
              x={node.position.x}
              y={node.position.y}
              member={node.data.member as Member}
              isSelected={selectedMember?.id === node.id}
              isDragging={isDragging}
              zoom={zoom}
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
