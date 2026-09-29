import { memo } from "react";
import { Member } from "@/models";
import { parseTeamNodeId } from "@/utils";
import type { MemberNode } from "@/types";
import PixiMemberNode from "./memberNode/MemberNode";

interface Props {
  nodes: MemberNode[];
  isZoomedOut: boolean;
  showBirthday: boolean;
  selectedMember: Member | null;
  isTeamView: boolean;
  onNodeClick: (member: Member) => void;
}

const NodesLayer = ({
  nodes,
  isZoomedOut,
  showBirthday,
  selectedMember,
  isTeamView,
  onNodeClick,
}: Props) => {
  return (
    <pixiContainer>
      {nodes.map((node) => {
        const teamRole = isTeamView
          ? node.data.member.positions.find(
            (position) =>
              position.teamId === parseTeamNodeId(node.id).teamId,
          )?.role.name
          : undefined;

        return (
          <PixiMemberNode
            key={node.id}
            x={node.position.x}
            y={node.position.y}
            isZoomedOut={isZoomedOut}
            showBirthday={showBirthday}
            member={node.data.member}
            placeholderColorIndex={node.data.placeholderColorIndex}
            isSelected={selectedMember?.id === node.data.member.id}
            teamRole={teamRole}
            onClick={onNodeClick}
          />
        );
      })}
    </pixiContainer>
  );
};

export default memo(NodesLayer);
