import {
  NODE_WIDTH,
  NODE_HEIGHT,
  NODE_CARD_HEIGHT,
  NODE_CARD_TOP,
} from "@/constants/canvas";
import { FLOW_VIEWPORT_DIRECTION } from "@/libs/elk";
import { Position } from "@/types";
import type {
  ChildrenMap,
  Direction,
  TreeEdge,
  MemberNode,
  MembersMap,
  Point,
} from "@/types";

/**
 * Reconnect edges to the nearest visible ancestor when nodes are filtered out.
 * Walks up the mentor chain for each visible node to find its closest
 * visible ancestor and creates a new edge between them.
 */
const EMPTY_EDGE_STYLE: React.CSSProperties = {};

export const reconnectEdgesToVisibleAncestors = (
  visibleNodes: MemberNode[],
  membersMap: MembersMap,
): TreeEdge[] => {
  const nodeIdSet = new Set(visibleNodes.map((n) => n.id));
  const ancestorCache = new Map<string, string | null>();
  const visiting = new Set<string>(); // cycle guard

  const findVisibleAncestor = (mentorId: string | null): string | null => {
    if (!mentorId) return null;
    if (nodeIdSet.has(mentorId)) return mentorId;
    if (ancestorCache.has(mentorId)) return ancestorCache.get(mentorId)!;
    if (visiting.has(mentorId)) return null; // corrupt/cyclic data, bail
    visiting.add(mentorId);

    const ancestor = membersMap.get(mentorId);
    const result = findVisibleAncestor(ancestor?.mentorId ?? null);
    ancestorCache.set(mentorId, result);
    visiting.delete(mentorId);
    return result;
  };

  const reconnectedEdges: TreeEdge[] = [];
  for (const node of visibleNodes) {
    const member = membersMap.get(node.id);
    if (!member?.mentorId) continue;

    const ancestorId = findVisibleAncestor(member.mentorId);
    if (ancestorId) {
      reconnectedEdges.push({
        id: `E_${ancestorId}->${node.id}`,
        source: ancestorId,
        target: node.id,
        style: EMPTY_EDGE_STYLE, // see note below
      });
    }
  }
  return reconnectedEdges;
};

/**
 * Place nodes at the positions ELK computed (one per node, same order).
 */
export const applyElkPositions = (
  nodes: MemberNode[],
  positions: Point[],
  direction: Direction = FLOW_VIEWPORT_DIRECTION.DESKTOP,
): MemberNode[] => {
  const [targetPosition, sourcePosition] =
    direction === FLOW_VIEWPORT_DIRECTION.DESKTOP
      ? [Position.Top, Position.Bottom]
      : [Position.Left, Position.Right];

  return nodes.map((node, index) => ({
    ...node,
    targetPosition,
    sourcePosition,
    position: positions[index],
  }));
};

/**
 * Arrange nodes in a flat grid layout (no tree structure, no edges).
 * `maxCols` narrows the grid on mobile layouts.
 */
export const computeGridLayout = (
  nodes: MemberNode[],
  gapX: number = 70,
  maxCols: number = Number.POSITIVE_INFINITY,
): MemberNode[] => {
  const cols = Math.min(Math.ceil(Math.sqrt(nodes.length)), maxCols);
  return nodes.map((n, i) => ({
    ...n,
    position: {
      x: (i % cols) * (NODE_WIDTH + gapX),
      y: Math.floor(i / cols) * (NODE_HEIGHT + NODE_CARD_HEIGHT + 20),
    },
  }));
};

/**
 * Reorder sibling edges so the lineage member sits in the center of its
 * siblings. ELK respects edge order, so this influences visual placement.
 */
export const reorderEdgesForLineageCentering = (
  edges: TreeEdge[],
  lineageMemberId: string,
  membersMap: MembersMap,
): TreeEdge[] => {
  const lm = membersMap.get(lineageMemberId);
  if (!lm?.mentorId) return edges;

  const mentorId = lm.mentorId;
  const mentorChildEdges = edges.filter((e) => e.source === mentorId);
  const otherEdges = edges.filter((e) => e.source !== mentorId);
  const lmEdge = mentorChildEdges.find((e) => e.target === lineageMemberId);
  const sibEdges = mentorChildEdges.filter((e) => e.target !== lineageMemberId);

  if (!lmEdge) return edges;

  const half = Math.ceil(sibEdges.length / 2);
  return [
    ...otherEdges,
    ...sibEdges.slice(0, half),
    lmEdge,
    ...sibEdges.slice(half),
  ];
};

// The node's visual extent along the spread axis in LR layouts (avatar + card).
const NODE_SPREAD_LR = NODE_CARD_TOP + NODE_CARD_HEIGHT;

/**
 * Post-process layouted nodes to align the lineage ancestor chain above
 * the focus member, distribute siblings symmetrically, and center the graph.
 * Works on the spread axis: x for top-down trees, y for left-to-right ones.
 */
export const alignLineageLayout = (
  layoutedNodes: MemberNode[],
  lineageMemberId: string,
  membersMap: MembersMap,
  childrenOf: ChildrenMap,
  direction: Direction = FLOW_VIEWPORT_DIRECTION.DESKTOP,
): MemberNode[] => {
  const focus = layoutedNodes.find((n) => n.id === lineageMemberId);
  if (!focus) return layoutedNodes;

  const axis = direction === "LR" ? "y" : "x";
  const target = focus.position[axis];
  const posMap = new Map<string, Point>();
  for (const n of layoutedNodes) {
    posMap.set(n.id, { ...n.position });
  }

  // 1. Align the ancestor chain with the lineage member
  const seen = new Set<string>();
  let cur = membersMap.get(lineageMemberId);
  while (cur?.mentorId && !seen.has(cur.mentorId)) {
    seen.add(cur.mentorId);
    const pos = posMap.get(cur.mentorId);
    if (pos) pos[axis] = target;
    cur = membersMap.get(cur.mentorId);
  }

  // 2. Distribute mentor's siblings evenly around the mentor
  const lineageMember = membersMap.get(lineageMemberId);
  if (lineageMember?.mentorId) {
    const mentorId = lineageMember.mentorId;
    const mentorData = membersMap.get(mentorId);
    if (mentorData?.mentorId) {
      const grandmentor = membersMap.get(mentorData.mentorId);
      if (grandmentor) {
        const mSiblingIds = (childrenOf.get(grandmentor.id) ?? []).filter(
          (id) => id !== mentorId && posMap.has(id),
        );

        if (mSiblingIds.length > 0) {
          const nodeExtent =
            direction === "LR" ? NODE_SPREAD_LR : NODE_WIDTH;
          const spacing = nodeExtent + 60;
          const leftCount = Math.ceil(mSiblingIds.length / 2);

          for (let i = 0; i < leftCount; i++) {
            const pos = posMap.get(mSiblingIds[i]);
            if (pos) pos[axis] = target - (i + 1) * spacing;
          }
          for (let i = leftCount; i < mSiblingIds.length; i++) {
            const pos = posMap.get(mSiblingIds[i]);
            if (pos) pos[axis] = target + (i - leftCount + 1) * spacing;
          }
        }
      }
    }
  }

  // 3. Center entire graph around the lineage member
  for (const [, pos] of posMap) {
    pos[axis] -= target;
  }

  return layoutedNodes.map((n) => {
    const newPos = posMap.get(n.id);
    return newPos ? { ...n, position: newPos } : n;
  });
};
