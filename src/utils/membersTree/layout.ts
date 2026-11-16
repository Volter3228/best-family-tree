import {
  NODE_WIDTH,
  NODE_HEIGHT,
  NODE_CARD_HEIGHT,
} from "@/constants/canvas";
import { FLOW_VIEWPORT_DIRECTION } from "@/libs/elk";
import { Position } from "@/types";
import type {
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
