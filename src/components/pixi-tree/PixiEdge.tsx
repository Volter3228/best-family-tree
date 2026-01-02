import { useCallback } from "react";
import { Graphics } from "pixi.js";

interface PixiEdgeProps {
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
  zoom: number;
}

const PixiEdge = ({
  sourceX,
  sourceY,
  targetX,
  targetY,
  zoom,
}: PixiEdgeProps) => {
  const draw = useCallback(
    (g: Graphics) => {
      g.clear();

      const lineWidth = Math.max(4, 1.2 / zoom);

      g.setStrokeStyle({ width: lineWidth, color: 0xf1f5f9 });

      g.beginPath();
      g.moveTo(sourceX, sourceY);

      const distY = Math.abs(targetY - sourceY);
      const controlY = distY * 0.5;

      const cp1x = sourceX;
      const cp1y = sourceY + controlY;
      const cp2x = targetX;
      const cp2y = targetY - controlY;

      g.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, targetX, targetY);
      g.stroke();
    },
    [sourceX, sourceY, targetX, targetY, zoom]
  );

  return <pixiGraphics draw={draw} />;
};

export default PixiEdge;
