import { createRef, type RefObject } from "react";
import { create } from "zustand";
import type { Container } from "pixi.js";
import type { Viewport } from "pixi-viewport";
import type {
  MemberNode,
  NodePositions,
  Point,
  TeamFrame,
  TreeEdge,
  TreeMode,
} from "@/types";

type Updater<T> = T | ((prev: T) => T);

interface TreeState {
  nodes: MemberNode[];
  edges: TreeEdge[];
  teamFrames: TeamFrame[];
  // Keeps its identity when a node refresh did not move anything, so the
  // lineage edge and focus logic do not restart after plain data edits.
  nodePositions: NodePositions;
  // Tree mode of the nodes currently drawn (lags the filter while cross-fading).
  layoutMode: TreeMode | null;
  // Root container of the drawn scene; faded when switching tree modes.
  sceneRef: RefObject<Container | null>;
  // Nodes that should show the full-size avatar texture.
  sharpNodeIds: ReadonlySet<string>;
  scale: number;
  viewport: Viewport | null;
  isFitViewAnimating: boolean;
  fitViewTargetScale: number | null;
}

interface TreeActions {
  setNodes: (next: Updater<MemberNode[]>) => void;
  setEdges: (next: TreeEdge[]) => void;
  setTeamFrames: (next: TeamFrame[]) => void;
  setLayoutMode: (next: TreeMode | null) => void;
  setSharpNodeIds: (next: ReadonlySet<string>) => void;
  setScale: (next: number) => void;
  setViewport: (next: Viewport | null) => void;
  setIsFitViewAnimating: (next: boolean) => void;
  setFitViewTargetScale: (next: number | null) => void;
}

const EMPTY_IDS: ReadonlySet<string> = new Set();
const EMPTY_POSITIONS: NodePositions = new Map<string, Point>();

const getNodePositions = (
  nodes: MemberNode[],
  prev: NodePositions,
): NodePositions => {
  const map = new Map<string, Point>();
  nodes.forEach((n) => map.set(n.id, { x: n.position.x, y: n.position.y }));
  const isSame =
    prev.size === map.size &&
    Array.from(map).every(([id, { x, y }]) => {
      const p = prev.get(id);
      return p?.x === x && p?.y === y;
    });
  return isSame ? prev : map;
};

const initialState: TreeState = {
  nodes: [],
  edges: [],
  teamFrames: [],
  nodePositions: EMPTY_POSITIONS,
  layoutMode: null,
  sharpNodeIds: EMPTY_IDS,
  sceneRef: createRef<Container>(),
  scale: 1,
  viewport: null,
  isFitViewAnimating: false,
  fitViewTargetScale: null,
};

export const useTreeStore = create<TreeState & TreeActions>((set) => ({
  ...initialState,

  setNodes: (next) =>
    set((state) => {
      const nodes = typeof next === "function" ? next(state.nodes) : next;
      if (nodes === state.nodes) return state;
      return {
        nodes,
        nodePositions: getNodePositions(nodes, state.nodePositions),
      };
    }),
  setEdges: (edges) =>
    set((state) =>
      edges.length === 0 && state.edges.length === 0 ? state : { edges },
    ),
  setTeamFrames: (teamFrames) =>
    set((state) =>
      teamFrames.length === 0 && state.teamFrames.length === 0
        ? state
        : { teamFrames },
    ),
  setLayoutMode: (layoutMode) => set({ layoutMode }),
  setSharpNodeIds: (next) =>
    set((state) => {
      const prev = state.sharpNodeIds;
      const same = prev.size === next.size && [...next].every((id) => prev.has(id));
      return same ? state : { sharpNodeIds: next };
    }),
  setScale: (scale) => set({ scale }),
  setViewport: (viewport) => set({ viewport }),
  setIsFitViewAnimating: (isFitViewAnimating) => set({ isFitViewAnimating }),
  setFitViewTargetScale: (fitViewTargetScale) => set({ fitViewTargetScale }),
}));
