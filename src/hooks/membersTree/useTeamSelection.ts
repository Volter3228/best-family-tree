import { useCallback, useMemo, useState } from "react";
import { getTeamNodeId, parseTeamNodeId } from "@/utils";
import { Member } from "@/models";
import type { MemberNode, NodePositions, TeamFrame } from "@/types";

interface Options {
  isTeamView: boolean;
  nodes: MemberNode[];
  nodePositions: NodePositions;
  teamFrames: TeamFrame[];
  selectedMember: Member | null;
  setSelectedMember: (member: Member | null) => void;
  getMemberById: (id: string) => Member | undefined;
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
  selectedMember,
  setSelectedMember,
  getMemberById,
  focusNode,
}: Options) => {
  const [clickedTeamId, setClickedTeamId] = useState<string | null>(null);

  // Only highlight a frame that still contains the selected member.
  const selectedTeamId = useMemo(() => {
    if (!isTeamView || !selectedMember || !clickedTeamId) return null;
    const nodeId = getTeamNodeId(clickedTeamId, selectedMember.id);
    const hasNode = teamFrames.some(
      (frame) =>
        frame.teamId === clickedTeamId && frame.nodeIds.includes(nodeId),
    );
    return hasNode ? clickedTeamId : null;
  }, [isTeamView, selectedMember, clickedTeamId, teamFrames]);

  const handleNodeClick = useCallback(
    (member: Member, teamId?: string) => {
      setSelectedMember(member);
      setClickedTeamId(teamId ?? null);
    },
    [setSelectedMember],
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
      const member = getMemberById(memberId);
      if (!member || !canFocusMemberInTeam(teamId, memberId)) return;
      setSelectedMember(member);
      setClickedTeamId(teamId);
      focusNode(getTeamNodeId(teamId, memberId));
    },
    [getMemberById, canFocusMemberInTeam, setSelectedMember, focusNode],
  );

  return {
    selectedTeamId,
    handleNodeClick,
    rememberTeamFor,
    canFocusMemberInTeam,
    focusMemberInTeam,
  };
};
