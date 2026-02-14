import { memo } from "react";
import { getIsMinimized } from "@/libs";
import Member from "@/models/Member";
import { type Node } from "@xyflow/react";
import PixiNode from "./pixiNode/PixiNode";

interface Props {
  nodes: Node[];
  scale: number;
  selectedMember: Member | null;
  onNodeClick: (member: Member) => void;
}

const PixiNodesWrapper = ({
  nodes,
  scale,
  selectedMember,
  onNodeClick,
}: Props) => {
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
          member={node.data.member as Member}
          isSelected={selectedMember?.id === node.id}
          onClick={onNodeClick}
        />
      ))}
    </pixiContainer>
  );
};

export default memo(PixiNodesWrapper);
