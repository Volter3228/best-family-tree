import { useCallback, memo } from "react";
import { Graphics } from "pixi.js";
import { NODE_WIDTH, NODE_HEIGHT, FIXED_EDGE_WIDTH } from "@/constants/canvas";
import type { NodePositions, TreeEdge } from "@/types";

interface Props {
  edges: TreeEdge[];
  nodePositions: NodePositions;
  pixelLine: boolean;
}

const EdgesLayer = ({ edges, nodePositions, pixelLine }: Props) => {
  const drawEdges = useCallback(
    (g: Graphics) => {
      g.clear();

      g.setStrokeStyle({
        pixelLine,
        width: FIXED_EDGE_WIDTH,
        color: 0xf1f5f9,
        cap: "round",
        join: "round",
      });

      edges.forEach((edge) => {
        const sourcePos = nodePositions.get(edge.source);
        const targetPos = nodePositions.get(edge.target);

        if (!sourcePos || !targetPos) return;

        const startX = sourcePos.x + NODE_WIDTH / 2;
        const startY = sourcePos.y + NODE_HEIGHT;
        const endX = targetPos.x + NODE_WIDTH / 2;
        const endY = targetPos.y;

        g.beginPath();
        g.moveTo(startX, startY);

        const distY = Math.abs(endY - startY);
        const controlOffset = distY * 0.5;

        g.bezierCurveTo(
          startX,
          startY + controlOffset,
          endX,
          endY - controlOffset,
          endX,
          endY,
        );

        g.stroke();
      });
    },
    [edges, nodePositions, pixelLine],
  );

  return <pixiGraphics draw={drawEdges} />;
};

export default memo(EdgesLayer);
