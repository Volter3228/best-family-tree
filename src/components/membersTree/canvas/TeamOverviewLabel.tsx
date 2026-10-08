import { memo, useCallback, useEffect, useMemo, useRef } from "react";
import {
  CanvasTextMetrics,
  Container,
  Graphics,
  Rectangle,
  TextStyle,
} from "pixi.js";
import { useTick } from "@pixi/react";
import { useTheme } from "@/context/ThemeContext";
import {
  useCanvasTheme,
  useCardHover,
  useTapWithoutDrag,
  useViewport,
} from "@/hooks";
import {
  getReadableColor,
  getTeamBadgeBackground,
  getTeamOverviewFade,
  getTeamOverviewProgress,
  resolveTeamColor,
  wrapTeamTitle,
} from "@/utils";
import {
  TEAM_FRAME_RADIUS,
  TEAM_FRAME_STROKE_WIDTH,
  TEAM_HOVER_MAX_SCALE,
  TEAM_HOVER_TEXT_SCREEN_PX,
  TEAM_OVERVIEW_FONT_SIZE,
  TEAM_OVERVIEW_INTERACTIVE_PROGRESS,
  TEAM_OVERVIEW_SCREEN_PX,
  TEAM_OVERVIEW_WRAP_WIDTHS,
} from "@/constants/canvas";
import type { TeamFrame } from "@/types";

const HOVER_SMOOTHING_MS = 120;

interface Props {
  frame: TeamFrame;
  onFrameClick: (frame: TeamFrame) => void;
}

// Team name shown in the middle of a frame when zoomed out. Hovering grows the
// whole card until its text is comfortably readable; clicking fits the team.
const TeamOverviewLabel = ({ frame, onFrameClick }: Props) => {
  const { accentColors, textStyles, text } = useCanvasTheme();
  const { themeId } = useTheme();
  const { viewport } = useViewport();
  const isDark = themeId === "dark";

  const containerRef = useRef<Container>(null);
  const innerRef = useRef<Container>(null);
  const cardRef = useRef<Graphics>(null);
  const textRef = useRef<Container>(null);
  const lastScaleRef = useRef<number | null>(null);
  const hoverRef = useRef(0);
  const { hoveredRef, startHover, stopHover } = useCardHover(containerRef);

  const { width, height } = frame;
  const color = useMemo(
    () => resolveTeamColor(frame, accentColors),
    [frame, accentColors],
  );
  const cardBackground = useMemo(
    () => getTeamBadgeBackground(color, isDark),
    [color, isDark],
  );
  const textTint = useMemo(
    () => getReadableColor(color, cardBackground, text.title),
    [color, cardBackground, text.title],
  );

  // White glyphs tinted per card: every card shares one bitmap font.
  const style = useMemo(
    () =>
      new TextStyle({
        ...textStyles.title,
        fill: "#ffffff",
        fontSize: TEAM_OVERVIEW_FONT_SIZE,
        align: "center",
        wordWrap: false,
      }),
    [textStyles],
  );

  // Pick the line wrapping that lets the text grow the most inside the frame.
  const layout = useMemo(() => {
    let best = { text: frame.name, fit: 0 };
    for (const wrapWidth of TEAM_OVERVIEW_WRAP_WIDTHS) {
      const wrapped = wrapTeamTitle(frame.name, style, wrapWidth);
      const metrics = CanvasTextMetrics.measureText(wrapped, style);
      const fit = Math.min(
        (width * 0.88) / Math.max(metrics.width, 1),
        (height * 0.6) / Math.max(metrics.height, 1),
      );
      if (fit > best.fit) best = { text: wrapped, fit };
    }
    return best;
  }, [frame.name, style, width, height]);

  const hitArea = useMemo(
    () => new Rectangle(-width / 2, -height / 2, width, height),
    [width, height],
  );

  const drawCard = useCallback(
    (g: Graphics) => {
      g.clear();
      g.roundRect(-width / 2, -height / 2, width, height, TEAM_FRAME_RADIUS);
      g.fill({ color: cardBackground });
      g.stroke({ color, width: TEAM_FRAME_STROKE_WIDTH, join: "round" });
    },
    [width, height, color, cardBackground],
  );

  useEffect(() => {
    lastScaleRef.current = null;
  }, [width, height, layout]);

  useTick((ticker) => {
    const container = containerRef.current;
    if (!container) return;

    const scale = viewport?.scale.x ?? 1;
    const target = hoveredRef.current ? 1 : 0;
    const hoverChanging = Math.abs(hoverRef.current - target) > 0.002;
    if (!hoverChanging && lastScaleRef.current === scale) return;
    lastScaleRef.current = scale;

    hoverRef.current = hoverChanging
      ? hoverRef.current +
      (target - hoverRef.current) *
      (1 - Math.exp(-ticker.deltaMS / HOVER_SMOOTHING_MS))
      : target;
    const hover = hoverRef.current;

    const active =
      getTeamOverviewProgress(scale) >= TEAM_OVERVIEW_INTERACTIVE_PROGRESS;
    const mode = active ? "static" : "none";
    if (container.eventMode !== mode) {
      container.eventMode = mode;
      if (!active) {
        stopHover();
        hoverRef.current = 0;
      }
    }

    const fade = getTeamOverviewFade(scale);
    container.alpha = fade;
    container.visible = fade > 0;

    // Text size follows the screen, not the frame; hovering scales the card
    // so every team's name ends up equally readable whatever its size.
    const textScale = Math.min(
      layout.fit,
      TEAM_OVERVIEW_SCREEN_PX / (scale * TEAM_OVERVIEW_FONT_SIZE),
    );
    const grow = Math.min(
      Math.max(
        TEAM_HOVER_TEXT_SCREEN_PX / (textScale * TEAM_OVERVIEW_FONT_SIZE * scale),
        1,
      ),
      TEAM_HOVER_MAX_SCALE,
    );
    // Only the inner content grows: the hit area keeps the frame's original
    // size, so a grown card never steals hover from its neighbours.
    innerRef.current?.scale.set(1 + (grow - 1) * hover);
    if (textRef.current) textRef.current.scale.set(textScale);
    if (cardRef.current) cardRef.current.alpha = hover * 0.97;
  });

  const handleTap = useCallback(() => onFrameClick(frame), [frame, onFrameClick]);
  const tap = useTapWithoutDrag(handleTap);

  return (
    <pixiContainer
      ref={containerRef}
      x={frame.x + width / 2}
      y={frame.y + height / 2}
      alpha={0}
      visible={false}
      eventMode="none"
      cursor="pointer"
      hitArea={hitArea}
      onPointerEnter={startHover}
      onPointerLeave={stopHover}
      onPointerDown={tap.onPointerDown}
      onClick={tap.onClick}
      onTap={tap.onClick}
    >
      <pixiContainer ref={innerRef} eventMode="none">
        <pixiGraphics ref={cardRef} draw={drawCard} alpha={0} />
        <pixiContainer ref={textRef}>
          <pixiBitmapText
            text={layout.text}
            anchor={0.5}
            tint={textTint}
            style={style}
          />
        </pixiContainer>
      </pixiContainer>
    </pixiContainer>
  );
};

export default memo(TeamOverviewLabel);
