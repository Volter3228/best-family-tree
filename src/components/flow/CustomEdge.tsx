import { CSSProperties, memo } from "react";
import getBezierLength from "@/libs/getBezierLength";
import { BaseEdge, EdgeProps, getBezierPath } from "@xyflow/react";

const CustomEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  style,
}: EdgeProps) => {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });
  const edgeLenght = getBezierLength(sourceX, sourceY, targetX, targetY);

  return null;
  return (
    <BaseEdge
      id={id}
      path={edgePath}
      style={{ ...style, "--edge-length": edgeLenght + 45 } as CSSProperties}
    />
  );
};

export default memo(CustomEdge);
