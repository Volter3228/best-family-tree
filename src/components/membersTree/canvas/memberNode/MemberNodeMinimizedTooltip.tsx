import { useCallback, useRef } from "react";
import { CanvasTextMetrics, Container, Graphics, TextStyle } from "pixi.js";
import { useTick } from "@pixi/react";
import {
  NODE_WIDTH,
  NODE_AVATAR_RADIUS,
  NODE_TOOLTIP_OFFSET,
  NODE_TOOLTIP_TEXT_STYLE,
} from "@/constants/canvas";

const textStyle = new TextStyle(NODE_TOOLTIP_TEXT_STYLE);

interface Props {
  text: string;
  visible: boolean;
}

const MemberNodeMinimizedTooltip = ({ text, visible }: Props) => {
  const tooltipRef = useRef<Container>(null);
  const animationProgress = useRef(0);

  const drawTooltipBackground = useCallback(
    (g: Graphics) => {
      g.clear();

      const metrics = CanvasTextMetrics.measureText(text, textStyle);
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
      tooltip.y = -(NODE_TOOLTIP_OFFSET * inverseScale);
    }
  });

  return (
    <pixiContainer
      ref={tooltipRef}
      x={NODE_WIDTH / 2}
      y={NODE_AVATAR_RADIUS}
      eventMode="none"
    >
      <pixiGraphics draw={drawTooltipBackground} />
      <pixiText
        text={text}
        anchor={{ x: 0.5, y: 1 }}
        y={-5}
        style={textStyle}
      />
    </pixiContainer>
  );
};

export default MemberNodeMinimizedTooltip;
