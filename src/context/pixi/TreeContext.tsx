"use client";

import { useMemo, useState } from "react";
import { Viewport } from "pixi-viewport";
import { Node, Edge } from "@xyflow/react";
import { TreeDataContext } from "./TreeDataContext";
import { ViewportContext } from "./ViewportContext";

export * from "./TreeDataContext";
export * from "./ViewportContext";

interface Props {
  children: React.ReactNode;
}

export const TreeProvider = ({ children }: Props) => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
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
    <TreeDataContext.Provider value={dataValue}>
      <ViewportContext.Provider value={viewportValue}>
        {children}
      </ViewportContext.Provider>
    </TreeDataContext.Provider>
  );
};
