import { Member } from "@/models";
import { TreeEdge, MemberNode } from "@/types";
import { NODE_WIDTH, NODE_HEIGHT } from "@/constants/canvas";

/**
 * Reconnect edges to the nearest visible ancestor when nodes are filtered out.
 * Walks up the mentor chain for each visible node to find its closest
 * visible ancestor and creates a new edge between them.
 */
export const reconnectEdgesToVisibleAncestors = (
  visibleNodes: MemberNode[],
  membersMap: Map<string, Member>,
): TreeEdge[] => {
  const nodeIdSet = new Set(visibleNodes.map((n) => n.id));
  const reconnectedEdges: TreeEdge[] = [];

  for (const node of visibleNodes) {
    const member = membersMap.get(node.id);
    if (!member || !member.mentorId) continue;

    let ancestorId: string | null = member.mentorId;
    while (ancestorId && !nodeIdSet.has(ancestorId)) {
      const ancestor = membersMap.get(ancestorId);
      ancestorId = ancestor?.mentorId ?? null;
    }

    if (ancestorId && nodeIdSet.has(ancestorId)) {
      reconnectedEdges.push({
        id: `E_${ancestorId}->${node.id}`,
        source: ancestorId,
        target: node.id,
        style: {} as React.CSSProperties,
      });
    }
  }

  return reconnectedEdges;
};

/**
 * Arrange nodes in a flat grid layout (no tree structure, no edges).
 */
export const computeGridLayout = (
  nodes: MemberNode[],
  gap: number = 50,
): MemberNode[] => {
  const cols = Math.ceil(Math.sqrt(nodes.length));
  return nodes.map((n, i) => ({
    ...n,
    position: {
      x: (i % cols) * (NODE_WIDTH + gap),
      y: Math.floor(i / cols) * (NODE_HEIGHT + gap),
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
  membersMap: Map<string, Member>,
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

/**
 * Post-process layouted nodes to align the lineage ancestor chain above
 * the focus member, distribute siblings symmetrically, and center the graph.
 */
export const alignLineageLayout = (
  layoutedNodes: MemberNode[],
  lineageMemberId: string,
  membersMap: Map<string, Member>,
): MemberNode[] => {
  const focus = layoutedNodes.find((n) => n.id === lineageMemberId);
  if (!focus) return layoutedNodes;

  const targetX = focus.position.x;
  const posMap = new Map<string, { x: number; y: number }>();
  for (const n of layoutedNodes) {
    posMap.set(n.id, { ...n.position });
  }

  // 1. Align ancestor chain directly above the lineage member
  let cur = membersMap.get(lineageMemberId);
  while (cur?.mentorId) {
    const pos = posMap.get(cur.mentorId);
    if (pos) pos.x = targetX;
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
        const mSiblingIds = grandmentor.mentees
          .map((m) => m.id)
          .filter((id) => id !== mentorId && posMap.has(id));

        if (mSiblingIds.length > 0) {
          const spacing = NODE_WIDTH + 60;
          const leftCount = Math.ceil(mSiblingIds.length / 2);

          for (let i = 0; i < leftCount; i++) {
            const pos = posMap.get(mSiblingIds[i]);
            if (pos) pos.x = targetX - (i + 1) * spacing;
          }
          for (let i = leftCount; i < mSiblingIds.length; i++) {
            const pos = posMap.get(mSiblingIds[i]);
            if (pos) pos.x = targetX + (i - leftCount + 1) * spacing;
          }
        }
      }
    }
  }

  // 3. Center entire graph around the lineage member
  for (const [, pos] of posMap) {
    pos.x -= targetX;
  }

  return layoutedNodes.map((n) => {
    const newPos = posMap.get(n.id);
    return newPos ? { ...n, position: newPos } : n;
  });
};
