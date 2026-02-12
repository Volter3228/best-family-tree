"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from "react";
import { Viewport } from "pixi-viewport";
import { Node, Edge } from "@xyflow/react";

interface IPixiTreeContext {
  nodes: Node[];
  setNodes: Dispatch<SetStateAction<Node[]>>;
  edges: Edge[];
  setEdges: Dispatch<SetStateAction<Edge[]>>;
  scale: number;
  setScale: Dispatch<SetStateAction<number>>;
  viewport: Viewport | null;
  setViewport: Dispatch<SetStateAction<Viewport | null>>;
}

interface Props {
  children: React.ReactNode;
}

export const PixiTreeContext = createContext<IPixiTreeContext | undefined>(
  undefined,
);

export const PixiTreeProvider = ({ children }: Props) => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [scale, setScale] = useState(1);
  const [viewport, setViewport] = useState<Viewport | null>(null);

  const value = useMemo(
    () => ({
      nodes,
      setNodes,
      edges,
      setEdges,
      scale,
      setScale,
      viewport,
      setViewport,
    }),
    [nodes, edges, scale, viewport],
  );

  return (
    <PixiTreeContext.Provider value={value}>
      {children}
    </PixiTreeContext.Provider>
  );
};
