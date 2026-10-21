import { DEFAULT_POSITION } from "../../libs/elk";
import type { MembersIndex } from "./membersIndex";

export * from "./teamNodeId";
import type { TreeEdge, MemberNode, MembersMap } from "@/types";
import { hashString } from "../strings";

const PRIMARY_COLOR_COUNT = 3;

// Convert the mentor tree into canvas nodes and edges (pre-order, so a mentor
// comes right before their subtree).
export const transformMembersToFlowValues = ({
  byId,
  childrenOf,
  rootIds,
}: Pick<MembersIndex, "byId" | "childrenOf" | "rootIds">): {
  nodes: MemberNode[];
  edges: TreeEdge[];
} => {
  const nodes: MemberNode[] = [];
  const edges: TreeEdge[] = [];

  const addSiblings = (ids: string[]) => {
    const groupSeed = byId.get(ids[0])?.mentorId ?? "root";
    const startColorIdx = hashString(groupSeed) % PRIMARY_COLOR_COUNT;

    ids.forEach((id, index) => {
      const member = byId.get(id);
      if (!member) return;

      nodes.push({
        id,
        type: "member",
        data: {
          member,
          placeholderColorIndex: (startColorIdx + index) % PRIMARY_COLOR_COUNT,
        },
        position: DEFAULT_POSITION,
        style: {} as React.CSSProperties,
      });

      if (member.mentorId) {
        edges.push({
          id: `E_${member.mentorId}->${id}`,
          source: member.mentorId,
          target: id,
          style: {} as React.CSSProperties,
        });
      }

      const children = childrenOf.get(id);
      if (children) addSiblings(children);
    });
  };

  addSiblings(rootIds);
  return { nodes, edges };
};

// Point nodes at the current member records. Returns the same array when
// nothing changed, so a pure data edit only touches the nodes it affects.
export const refreshNodeMembers = (
  nodes: MemberNode[],
  byId: MembersMap,
): MemberNode[] => {
  let changed = false;
  const refreshed = nodes.map((node) => {
    const member = byId.get(node.data.member.id);
    if (!member || member === node.data.member) return node;
    changed = true;
    return { ...node, data: { ...node.data, member } };
  });
  return changed ? refreshed : nodes;
};
