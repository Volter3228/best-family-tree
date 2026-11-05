import { Member } from "@/models";
import type { FilterState, MemberNode, TreeEdge, TreeMode } from "@/types";
import type { MembersIndex } from "./membersIndex";
import { transformMembersToFlowValues } from "./graph";
import { transformMembersToTeamTreeValues } from "./teamGroups";
import { reconnectEdgesToVisibleAncestors } from "./layout";

interface Input {
  treeMode: TreeMode;
  members: Member[];
  index: Pick<MembersIndex, "byId" | "childrenOf" | "rootIds">;
  appliedFilters: FilterState;
  filteredMemberIds: Set<string> | null;
}

/**
 * The unfiltered graph for the selected layout mode, narrowed to the nodes
 * matching the current filters. Team view has no edge list: its edges come
 * from the frame layout. Family edges reconnect children to their nearest
 * visible ancestor.
 */
export const buildLayoutGraph = ({
  treeMode,
  members,
  index,
  appliedFilters,
  filteredMemberIds,
}: Input): { nodes: MemberNode[]; edges: TreeEdge[] } => {
  const { nodes: allNodes, edges: allEdges } =
    treeMode === "team"
      ? {
          nodes: transformMembersToTeamTreeValues(members, appliedFilters),
          edges: [] as TreeEdge[],
        }
      : transformMembersToFlowValues(index);

  if (!filteredMemberIds) return { nodes: allNodes, edges: allEdges };

  const nodes = allNodes.filter((node) =>
    treeMode === "team"
      ? filteredMemberIds.has(node.data.member.id)
      : filteredMemberIds.has(node.id),
  );
  const edges =
    treeMode === "team"
      ? []
      : reconnectEdgesToVisibleAncestors(nodes, index.byId);
  return { nodes, edges };
};
