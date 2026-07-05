"use client";

import { createContext, Dispatch, SetStateAction } from "react";
import { TreeEdge, MemberNode, NodePositions } from "@/types";

export interface IMembersTreeDataContext {
  nodes: MemberNode[];
  setNodes: Dispatch<SetStateAction<MemberNode[]>>;
  edges: TreeEdge[];
  setEdges: Dispatch<SetStateAction<TreeEdge[]>>;
  nodePositions: NodePositions;
}

export const MembersTreeDataContext = createContext<
  IMembersTreeDataContext | undefined
>(undefined);
