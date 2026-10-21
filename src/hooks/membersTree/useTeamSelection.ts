import { useCallback, useMemo, useState } from "react";
import { getTeamNodeId, parseTeamNodeId } from "@/utils";
import { Member } from "@/models";
import { getMemberById } from "@/store/membersStore";
import type { MemberNode, NodePositions, TeamFrame } from "@/types";

interface Options {
  isTeamView: boolean;
  nodes: MemberNode[];
  nodePositions: NodePositions;
  teamFrames: TeamFrame[];
  selectedId: string | null;
  selectMember: (id: string | null) => void;
  focusNode: (nodeId: string) => void;
}

/**
 * Team view keeps one node per member per team, so selecting a member also
 * needs to remember which team it was picked in (that frame gets highlighted).
 */
export const useTeamSelection = ({
  isTeamView,
  nodes,
  nodePositions,
  teamFrames,
  selectedId,
  selectMember,
  focusNode,
}: Options) => {
  const [clickedTeamId, setClickedTeamId] = useState<string | null>(null);

  // Only highlight a frame that still contains the selected member.
  const selectedTeamId = useMemo(() => {
    if (!isTeamView || !selectedId || !clickedTeamId) return null;
    const nodeId = getTeamNodeId(clickedTeamId, selectedId);
    const hasNode = teamFrames.some(
      (frame) =>
        frame.teamId === clickedTeamId && frame.nodeIds.includes(nodeId),
    );
    return hasNode ? clickedTeamId : null;
  }, [isTeamView, selectedId, clickedTeamId, teamFrames]);

  const handleNodeClick = useCallback(
    (member: Member, teamId?: string) => {
      selectMember(member.id);
      setClickedTeamId(teamId ?? null);
    },
    [selectMember],
  );

  // Search has no team context: fall back to the member's first visible team.
  const rememberTeamFor = useCallback(
    (memberId: string) => {
      const node = isTeamView
        ? nodes.find((n) => n.data.member.id === memberId)
        : undefined;
      setClickedTeamId(node ? (parseTeamNodeId(node.id).teamId ?? null) : null);
    },
    [isTeamView, nodes],
  );

  const canFocusMemberInTeam = useCallback(
    (teamId: string, memberId: string) =>
      nodePositions.has(getTeamNodeId(teamId, memberId)),
    [nodePositions],
  );

  const focusMemberInTeam = useCallback(
    (teamId: string, memberId: string) => {
      if (!getMemberById(memberId) || !canFocusMemberInTeam(teamId, memberId))
        return;
      selectMember(memberId);
      setClickedTeamId(teamId);
      focusNode(getTeamNodeId(teamId, memberId));
    },
    [canFocusMemberInTeam, selectMember, focusNode],
  );

  return {
    selectedTeamId,
    handleNodeClick,
    rememberTeamFor,
    canFocusMemberInTeam,
    focusMemberInTeam,
  };
};
