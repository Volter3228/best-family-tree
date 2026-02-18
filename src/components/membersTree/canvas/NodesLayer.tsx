import { memo } from "react";
import { getIsMinimized } from "@/utils";
import { Member } from "@/models";
import { type MemberNode } from "@/types";
import PixiNode from "./memberNode/MemberNode";

interface Props {
  nodes: MemberNode[];
  scale: number;
  selectedMember: Member | null;
  onNodeClick: (member: Member) => void;
}

const NodesLayer = ({ nodes, scale, selectedMember, onNodeClick }: Props) => {
  const isMinimized = getIsMinimized(scale);

  return (
    <pixiContainer>
      {nodes.map((node) => (
        <PixiNode
          key={node.id}
          x={node.position.x}
          y={node.position.y}
          appScale={scale}
          isMinimized={isMinimized}
          member={node.data.member}
          isSelected={selectedMember?.id === node.id}
          onClick={onNodeClick}
        />
      ))}
    </pixiContainer>
  );
};

export default memo(NodesLayer);
