import { memo } from "react";
import { Member } from "@/models";
import type { MemberNode } from "@/types";
import PixiMemberNode from "./memberNode/MemberNode";

interface Props {
  nodes: MemberNode[];
  isZoomedOut: boolean;
  showBirthday: boolean;
  selectedMember: Member | null;
  onNodeClick: (member: Member) => void;
}

const NodesLayer = ({
  nodes,
  isZoomedOut,
  showBirthday,
  selectedMember,
  onNodeClick,
}: Props) => {
  return (
    <pixiContainer>
      {nodes.map((node) => (
        <PixiMemberNode
          key={node.id}
          x={node.position.x}
          y={node.position.y}
          isZoomedOut={isZoomedOut}
          showBirthday={showBirthday}
          member={node.data.member}
          placeholderColorIndex={node.data.placeholderColorIndex}
          isSelected={selectedMember?.id === node.id}
          onClick={onNodeClick}
        />
      ))}
    </pixiContainer>
  );
};

export default memo(NodesLayer);
