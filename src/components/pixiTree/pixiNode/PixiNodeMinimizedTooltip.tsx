import { useCallback, useRef } from "react";
import { CanvasTextMetrics, Container, Graphics, TextStyle } from "pixi.js";
import { useTick } from "@pixi/react";
import {
  MINIMIZED_NODE_RADIUS,
  MINIMIZED_NODE_TOOLTIP_OFFSET,
  MINIMIZED_TOOLTIP_TEXT_STYLE,
  PRIMARY_GRADIENT,
} from "@/constants/pixi";

interface Props {
  text: string;
  visible: boolean;
}

const PixiNodeMinimizedTooltip = ({ text, visible }: Props) => {
  const tooltipRef = useRef<Container>(null);
  const animationProgress = useRef(0);

  const drawTooltipBackground = useCallback(
    (g: Graphics) => {
      g.clear();

      const metrics = CanvasTextMetrics.measureText(
        text,
        MINIMIZED_TOOLTIP_TEXT_STYLE,
      );
      const w = metrics.width + 16;
      const h = metrics.height + 10;

      g.roundRect(-w / 2, -h, w, h, 6);
      g.fill({ color: "#fff", alpha: 0.8 });
    },
    [text],
  );

  useTick((delta) => {
    const tooltip = tooltipRef.current;
    if (!tooltip) return;

    const target = visible ? 1 : 0;
    animationProgress.current +=
      (target - animationProgress.current) * 0.15 * delta.speed;

    if (target === 0 && animationProgress.current < 0.01) {
      tooltip.visible = false;
      animationProgress.current = 0;
      return;
    }

    tooltip.visible = true;
    tooltip.alpha = animationProgress.current;

    const parentScale = Math.abs(tooltip.parent?.worldTransform?.a || 0);

    if (parentScale > 0.0001) {
      const inverseScale = 1 / parentScale;
      tooltip.scale.set(inverseScale);
      tooltip.y = -(MINIMIZED_NODE_TOOLTIP_OFFSET * inverseScale);
    }
  });

  return (
    <pixiContainer
      ref={tooltipRef}
      x={MINIMIZED_NODE_RADIUS}
      y={MINIMIZED_NODE_RADIUS}
      eventMode="none"
    >
      <pixiGraphics draw={drawTooltipBackground} />
      <pixiText
        text={text}
        anchor={{ x: 0.5, y: 1 }}
        y={-5}
        style={MINIMIZED_TOOLTIP_TEXT_STYLE}
      />
    </pixiContainer>
  );
};

export default PixiNodeMinimizedTooltip;
