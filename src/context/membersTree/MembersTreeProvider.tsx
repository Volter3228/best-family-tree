"use client";

import { useMemo, useState } from "react";
import { Viewport } from "pixi-viewport";
import { MemberNode, TreeEdge } from "@/types";
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
  const [scale, setScale] = useState(1);
  const [viewport, setViewport] = useState<Viewport | null>(null);

  const nodePositions = useMemo(() => {
    const map = new Map<string, { x: number; y: number }>();
    nodes.forEach((n) => {
      map.set(n.id, { x: n.position.x, y: n.position.y });
    });
    return map;
  }, [nodes]);

  const dataValue = useMemo(
    () => ({ nodes, setNodes, edges, setEdges, nodePositions }),
    [nodes, edges, nodePositions],
  );

  const viewportValue = useMemo(
    () => ({ scale, setScale, viewport, setViewport }),
    [scale, viewport],
  );

  return (
    <MembersTreeDataContext.Provider value={dataValue}>
      <ViewportContext.Provider value={viewportValue}>
        {children}
      </ViewportContext.Provider>
    </MembersTreeDataContext.Provider>
  );
};
