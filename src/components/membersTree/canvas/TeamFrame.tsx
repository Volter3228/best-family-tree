import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Container, Graphics, Rectangle } from "pixi.js";
import { useTick } from "@pixi/react";
import { useTheme } from "@/context/ThemeContext";
import { useCanvasTheme } from "@/hooks";
import { getTeamOverviewFade, resolveTeamColor } from "@/utils";
import {
  TEAM_FRAME_RADIUS,
  TEAM_FRAME_STROKE_WIDTH,
} from "@/constants/canvas";
import type { TeamFrame as TeamFrameData } from "@/types";
import TeamBadge from "./TeamBadge";
import { useTreeStore } from "@/store/treeStore";

interface Props {
  frame: TeamFrameData;
  pixelLine: boolean;
  isSelected: boolean;
  onBadgeClick: (frame: TeamFrameData) => void;
}

const FILL_ALPHA = [0.06, 0.2] as const;
const STROKE_ALPHA = [0.5, 0.9] as const;
const SELECTED_FILL_BOOST = 0.08;
const SELECTED_STROKE_WIDTH = 12;
const RIPPLE_DURATION_MS = 750;
const RIPPLE_MAX_GROWTH = 0.05;
const SELECTION_SMOOTHING_MS = 110;

const lerp = (range: readonly [number, number], t: number) =>
  range[0] + (range[1] - range[0]) * t;

// Translucent rounded frame around one team. Selection glows and ripples;
// zooming out strengthens the frame (semantic zoom).
const TeamFrame = ({ frame, pixelLine, isSelected, onBadgeClick }: Props) => {
  const { accentColors } = useCanvasTheme();
  const { themeId } = useTheme();
  const viewport = useTreeStore((s) => s.viewport);

  const fillRef = useRef<Graphics>(null);
  const strokeRef = useRef<Graphics>(null);
  const selectedStrokeRef = useRef<Graphics>(null);
  const rippleRef = useRef<Container>(null);

  const lastScaleRef = useRef<number | null>(null);
  const selectionRef = useRef(0);
  const selectedTargetRef = useRef(false);
  const rippleProgressRef = useRef(-1);

  const { width, height } = frame;
  // Culling box: the frame plus room for its badge, which grows with zoom-out
  // (never wider than 90% of the frame) and for the selection ripple.
  const cullArea = useMemo(() => {
    const pad = 100 + width * 0.3;
    return new Rectangle(-pad, -pad, width + pad * 2, height + pad * 2);
  }, [width, height]);
  const color = useMemo(
    () => resolveTeamColor(frame, accentColors),
    [frame, accentColors],
  );

  const drawOutline = useCallback(
    (strokeWidth: number, usePixelLine = false) =>
      (g: Graphics) => {
        g.clear();
        g.roundRect(0, 0, width, height, TEAM_FRAME_RADIUS);
        g.stroke({
          color,
          width: strokeWidth,
          pixelLine: usePixelLine,
          join: "round",
        });
      },
    [width, height, color],
  );
  const drawFill = useCallback(
    (g: Graphics) => {
      g.clear();
      g.roundRect(0, 0, width, height, TEAM_FRAME_RADIUS);
      g.fill({ color });
    },
    [width, height, color],
  );
  const drawStroke = useMemo(
    () => drawOutline(TEAM_FRAME_STROKE_WIDTH, pixelLine),
    [drawOutline, pixelLine],
  );
  const drawSelected = useMemo(
    () => drawOutline(SELECTED_STROKE_WIDTH),
    [drawOutline],
  );
  const drawRipple = useMemo(
    () => drawOutline(TEAM_FRAME_STROKE_WIDTH),
    [drawOutline],
  );

  // The glow and ripple outlines are only built once the team is first selected.
  const [hasBeenSelected, setHasBeenSelected] = useState(isSelected);

  useEffect(() => {
    selectedTargetRef.current = isSelected;
    if (isSelected) {
      rippleProgressRef.current = 0;
      setHasBeenSelected(true);
    }
  }, [isSelected]);

  // Does nothing while idle: only runs on zoom, selection or ripple changes.
  useTick((ticker) => {
    const scale = viewport?.scale.x ?? 1;
    const target = selectedTargetRef.current ? 1 : 0;
    const selectionChanging = Math.abs(selectionRef.current - target) > 0.002;
    const rippling = rippleProgressRef.current >= 0;
    if (lastScaleRef.current === scale && !selectionChanging && !rippling) {
      return;
    }
    lastScaleRef.current = scale;

    selectionRef.current = selectionChanging
      ? selectionRef.current +
      (target - selectionRef.current) *
      (1 - Math.exp(-ticker.deltaMS / SELECTION_SMOOTHING_MS))
      : target;
    const selection = selectionRef.current;
    const fade = getTeamOverviewFade(scale);

    if (fillRef.current) {
      fillRef.current.alpha =
        lerp(FILL_ALPHA, fade) + SELECTED_FILL_BOOST * selection;
    }
    if (strokeRef.current) strokeRef.current.alpha = lerp(STROKE_ALPHA, fade);
    if (selectedStrokeRef.current) {
      selectedStrokeRef.current.alpha = selection * 0.85;
    }

    const ripple = rippleRef.current;
    if (!ripple) return;
    if (!rippling) {
      ripple.visible = false;
      return;
    }
    const progress = Math.min(
      rippleProgressRef.current + ticker.deltaMS / RIPPLE_DURATION_MS,
      1,
    );
    const eased = 1 - (1 - progress) * (1 - progress);
    ripple.visible = progress < 1;
    ripple.alpha = 0.7 * (1 - eased);
    ripple.scale.set(1 + RIPPLE_MAX_GROWTH * eased);
    rippleProgressRef.current = progress < 1 ? progress : -1;
  });

  return (
    <pixiContainer
      x={frame.x}
      y={frame.y}
      eventMode="passive"
      cullable
      cullArea={cullArea}
    >
      <pixiGraphics
        ref={fillRef}
        draw={drawFill}
        alpha={FILL_ALPHA[0]}
        eventMode="none"
      />
      <pixiGraphics
        ref={strokeRef}
        draw={drawStroke}
        eventMode="none"
        alpha={STROKE_ALPHA[0]}
      />
      {hasBeenSelected && (
        <>
          <pixiGraphics ref={selectedStrokeRef} draw={drawSelected} alpha={0} />
          <pixiContainer
            ref={rippleRef}
            x={width / 2}
            y={height / 2}
            pivot={{ x: width / 2, y: height / 2 }}
            alpha={0}
            visible={false}
          >
            <pixiGraphics draw={drawRipple} />
          </pixiContainer>
        </>
      )}
      <TeamBadge
        frame={frame}
        color={color}
        isDark={themeId === "dark"}
        selectionRef={selectionRef}
        onClick={onBadgeClick}
      />
    </pixiContainer>
  );
};

export default memo(TeamFrame);
