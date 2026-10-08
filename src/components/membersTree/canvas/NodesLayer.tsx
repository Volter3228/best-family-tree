import { memo, useMemo } from "react";
import { Member } from "@/models";
import { getMemberTeamRoles, parseTeamNodeId } from "@/utils";
import type { MemberNode } from "@/types";
import PixiMemberNode from "./memberNode/MemberNode";

interface Props {
  nodes: MemberNode[];
  isZoomedOut: boolean;
  showBirthday: boolean;
  selectedMember: Member | null;
  selectedTeamId: string | null;
  isTeamView: boolean;
  onNodeClick: (member: Member, teamId?: string) => void;
}

const NodesLayer = ({
  nodes,
  isZoomedOut,
  showBirthday,
  selectedMember,
  selectedTeamId,
  isTeamView,
  onNodeClick,
}: Props) => {
  // Team ids and role labels only change with the nodes, not with selection.
  const entries = useMemo(
    () =>
      nodes.map((node) => {
        const teamId = isTeamView ? parseTeamNodeId(node.id).teamId : undefined;
        const teamRole = teamId
          ? getMemberTeamRoles(node.data.member, teamId)
          : undefined;
        return { node, teamId, teamRole };
      }),
    [nodes, isTeamView],
  );

  return (
    <pixiContainer>
      {entries.map(({ node, teamId, teamRole }) => {
        const isSelected =
          selectedMember?.id === node.data.member.id &&
          (!teamId || !selectedTeamId || selectedTeamId === teamId);

        return (
          <PixiMemberNode
            key={node.id}
            x={node.position.x}
            y={node.position.y}
            isZoomedOut={isZoomedOut}
            showBirthday={showBirthday}
            member={node.data.member}
            placeholderColorIndex={node.data.placeholderColorIndex}
            isSelected={isSelected}
            teamRole={teamRole}
            teamId={teamId}
            onClick={onNodeClick}
          />
        );
      })}
    </pixiContainer>
  );
};

export default memo(NodesLayer);
