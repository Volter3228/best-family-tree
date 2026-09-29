import { memo, useCallback, useMemo, useRef } from "react";
import { CanvasTextMetrics, Container, Graphics, TextStyle } from "pixi.js";
import { useTick } from "@pixi/react";
import { useCanvasTheme } from "@/hooks";
import { NODE_TOOLTIP_OFFSET, NODE_WIDTH } from "@/constants/canvas";

interface Props {
  text: string;
  visible: boolean;
  x: number;
  y: number;
  placeholderColorIndex: number;
}

const TEXT_HORIZONTAL_PADDING = 16;
const TEXT_VERTICAL_PADDING = 10;
const TEAM_LABEL_FONT_SIZE = 16;
const INITIAL_SCALE = 0.92;

const TeamLabel = ({
  text,
  visible,
  x,
  y,
  placeholderColorIndex,
}: Props) => {
  const { accentColors, textStyles } = useCanvasTheme();
  const labelRef = useRef<Container>(null);
  const animationProgress = useRef(0);

  const textStyle = useMemo(
    () =>
      new TextStyle({
        ...textStyles.tooltip,
        fontSize: TEAM_LABEL_FONT_SIZE,
        align: "center",
        wordWrap: false,
      }),
    [textStyles],
  );

  const displayText = useMemo(() => {
    const maxLineWidth = NODE_WIDTH - TEXT_HORIZONTAL_PADDING;
    const lines: string[] = [];
    let currentLine = "";

    for (const word of text.split(/\s+/).filter(Boolean)) {
      const candidate = currentLine ? `${currentLine} ${word}` : word;
      if (
        currentLine &&
        CanvasTextMetrics.measureText(candidate, textStyle).width >
          maxLineWidth
      ) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = candidate;
      }
    }

    if (currentLine) lines.push(currentLine);
    return lines.join("\n");
  }, [text, textStyle]);

  const drawBackground = useCallback(
    (g: Graphics) => {
      g.clear();
      const metrics = CanvasTextMetrics.measureText(displayText, textStyle);
      const height = metrics.height + TEXT_VERTICAL_PADDING * 2;

      g.roundRect(-NODE_WIDTH / 2, 0, NODE_WIDTH, height, 7);
      g.fill({
        color: accentColors[placeholderColorIndex],
        alpha: 0.9,
      });
    },
    [displayText, textStyle, placeholderColorIndex, accentColors],
  );

  useTick((delta) => {
    const label = labelRef.current;
    if (!label) return;

    const target = visible ? 1 : 0;
    animationProgress.current +=
      (target - animationProgress.current) * 0.14 * delta.speed;

    if (target === 0 && animationProgress.current < 0.01) {
      animationProgress.current = 0;
    }

    const progress = animationProgress.current;
    label.alpha = progress;
    label.scale.set(INITIAL_SCALE + (1 - INITIAL_SCALE) * progress);
    label.x = x;
    label.y = y + NODE_TOOLTIP_OFFSET + (1 - progress) * -4;
  });

  return (
    <pixiContainer ref={labelRef} alpha={0} eventMode="none">
      <pixiGraphics draw={drawBackground} />
      <pixiBitmapText
        text={displayText}
        anchor={{ x: 0.5, y: 0 }}
        y={TEXT_VERTICAL_PADDING}
        style={textStyle}
      />
    </pixiContainer>
  );
};

export default memo(TeamLabel);
