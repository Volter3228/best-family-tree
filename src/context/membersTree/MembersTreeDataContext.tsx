"use client";

import { createContext, Dispatch, SetStateAction } from "react";
import { TreeEdge, MemberNode } from "@/types";

export interface IMembersTreeDataContext {
  nodes: MemberNode[];
  setNodes: Dispatch<SetStateAction<MemberNode[]>>;
  edges: TreeEdge[];
  setEdges: Dispatch<SetStateAction<TreeEdge[]>>;
  nodePositions: Map<string, { x: number; y: number }>;
}

export const MembersTreeDataContext = createContext<
  IMembersTreeDataContext | undefined
>(undefined);
