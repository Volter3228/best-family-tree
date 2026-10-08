"use client";

import { createContext, Dispatch, RefObject, SetStateAction } from "react";
import type { Container } from "pixi.js";
import {
  TreeEdge,
  MemberNode,
  NodePositions,
  TeamFrame,
  TreeMode,
} from "@/types";

export interface IMembersTreeDataContext {
  // Tree mode of the nodes currently drawn (lags the filter while cross-fading).
  layoutMode: TreeMode | null;
  setLayoutMode: Dispatch<SetStateAction<TreeMode | null>>;
  // Root container of the drawn scene; faded when switching tree modes.
  sceneRef: RefObject<Container | null>;
  teamFrames: TeamFrame[];
  setTeamFrames: Dispatch<SetStateAction<TeamFrame[]>>;
  nodes: MemberNode[];
  setNodes: Dispatch<SetStateAction<MemberNode[]>>;
  edges: TreeEdge[];
  setEdges: Dispatch<SetStateAction<TreeEdge[]>>;
  nodePositions: NodePositions;
}

export const MembersTreeDataContext = createContext<
  IMembersTreeDataContext | undefined
>(undefined);
