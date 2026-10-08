"use client";

import { useMemo, useRef, useState } from "react";
import { Viewport } from "pixi-viewport";
import type { Container } from "pixi.js";
import type {
  MemberNode,
  TreeEdge,
  Point,
  TeamFrame,
  TreeMode,
} from "@/types";
import { MembersTreeDataContext } from "./MembersTreeDataContext";
import { ViewportContext } from "./ViewportContext";

export * from "./MembersTreeDataContext";
export * from "./ViewportContext";

interface Props {
  children: React.ReactNode;
}

export const MembersTreeProvider = ({ children }: Props) => {
  const [nodes, setNodes] = useState<MemberNode[]>([]);
  const [edges, setEdges] = useState<TreeEdge[]>([]);
  const [teamFrames, setTeamFrames] = useState<TeamFrame[]>([]);
  const [layoutMode, setLayoutMode] = useState<TreeMode | null>(null);
  const sceneRef = useRef<Container | null>(null);
  const [scale, setScale] = useState(1);
  const [viewport, setViewport] = useState<Viewport | null>(null);
  const [isFitViewAnimating, setIsFitViewAnimating] = useState(false);
  const [fitViewTargetScale, setFitViewTargetScale] = useState<number | null>(
    null,
  );

  const nodePositions = useMemo(() => {
    const map = new Map<string, Point>();
    nodes.forEach((n) => {
      map.set(n.id, { x: n.position.x, y: n.position.y });
    });
    return map;
  }, [nodes]);

  const dataValue = useMemo(
    () => ({
      nodes,
      setNodes,
      edges,
      setEdges,
      nodePositions,
      teamFrames,
      setTeamFrames,
      sceneRef,
      layoutMode,
      setLayoutMode,
    }),
    [nodes, edges, nodePositions, teamFrames, layoutMode],
  );

  const viewportValue = useMemo(
    () => ({
      scale,
      setScale,
      viewport,
      setViewport,
      isFitViewAnimating,
      setIsFitViewAnimating,
      fitViewTargetScale,
      setFitViewTargetScale,
    }),
    [scale, viewport, isFitViewAnimating, fitViewTargetScale],
  );

  return (
    <MembersTreeDataContext.Provider value={dataValue}>
      <ViewportContext.Provider value={viewportValue}>
        {children}
      </ViewportContext.Provider>
    </MembersTreeDataContext.Provider>
  );
};
