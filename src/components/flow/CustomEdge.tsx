import { CSSProperties } from "react";
import getBezierLength from "@/libs/getBezierLength";
import { BaseEdge, EdgeProps, getBezierPath } from "@xyflow/react";

export default function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  style,
}: EdgeProps) {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  const edgeLenght = getBezierLength(sourceX, sourceY, targetX, targetY);
  return (
    <>
      <BaseEdge
        id={id}
        path={edgePath}
        style={{ ...style, "--edge-length": edgeLenght + 45 } as CSSProperties}
      />
    </>
  );
}
