import { useCallback, memo } from "react";
import { Graphics } from "pixi.js";
import { useCanvasTheme } from "@/hooks";
import { FIXED_EDGE_WIDTH } from "@/constants/canvas";
import type { TeamFrame } from "@/types";

interface Props {
  frames: TeamFrame[];
  pixelLine: boolean;
}

// How far (as a share of the horizontal distance) a fanned end leans sideways.
const FAN_LEAN = 0.3;

// Leader-to-member edges of every team, drawn from the layout's geometry.
const TeamEdgesLayer = ({ frames, pixelLine }: Props) => {
  const { edgeColor, edgeAlpha } = useCanvasTheme();

  const draw = useCallback(
    (g: Graphics) => {
      g.clear();
      g.setStrokeStyle({
        pixelLine,
        width: FIXED_EDGE_WIDTH,
        color: edgeColor,
        alpha: edgeAlpha,
        cap: "round",
        join: "round",
      });

      for (const { edges } of frames) {
        for (const { start, end, bendY, fanStart, fanEnd } of edges) {
          const curveEndY = bendY ?? end.y;
          const control = Math.abs(curveEndY - start.y) * 0.5;
          const dx = end.x - start.x;

          g.moveTo(start.x, start.y);
          g.bezierCurveTo(
            fanStart ? start.x + dx * FAN_LEAN : start.x,
            start.y + control,
            fanEnd ? end.x - dx * FAN_LEAN : end.x,
            curveEndY - control,
            end.x,
            curveEndY,
          );
          if (bendY !== undefined) g.lineTo(end.x, end.y);
        }
      }

      g.stroke();
    },
    [frames, pixelLine, edgeColor, edgeAlpha],
  );

  return <pixiGraphics draw={draw} eventMode="none" />;
};

export default memo(TeamEdgesLayer);
