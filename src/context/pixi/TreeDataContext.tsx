"use client";

import { createContext, Dispatch, SetStateAction } from "react";
import { Node, Edge } from "@xyflow/react";

export interface ITreeDataContext {
  nodes: Node[];
  setNodes: Dispatch<SetStateAction<Node[]>>;
  edges: Edge[];
  setEdges: Dispatch<SetStateAction<Edge[]>>;
  nodePositions: Map<string, { x: number; y: number }>;
}

export const TreeDataContext = createContext<ITreeDataContext | undefined>(
  undefined,
);
