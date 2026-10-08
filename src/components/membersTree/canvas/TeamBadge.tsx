import {
  memo,
  type RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { Container, Graphics, Rectangle, TextStyle } from "pixi.js";
import { useTick } from "@pixi/react";
import {
  useCanvasTheme,
  useTapWithoutDrag,
  useTexture,
  useViewport,
} from "@/hooks";
import { getIconUrlAsRounded } from "@/libs/cloudinary";
import {
  getReadableColor,
  getTeamBadgeLayout,
  getTeamBadgeBackground,
  getTeamBadgeText,
  getTeamOverviewFade,
} from "@/utils";
import {
  TEAM_TITLE_BORDER_WIDTH,
  TEAM_TITLE_FONT_SIZE,
  TEAM_TITLE_ICON_PADDING,
  TEAM_TITLE_ICON_RADIUS,
  TEAM_TITLE_ICON_SIZE,
  TEAM_TITLE_SCREEN_PX,
} from "@/constants/canvas";
import type { TeamFrame } from "@/types";

interface Props {
  frame: TeamFrame;
  color: string;
  isDark: boolean;
  selectionRef: RefObject<number>;
  onClick: (frame: TeamFrame) => void;
}

const SELECTED_SCALE = 0.06;
const HOVER_SCALE = 0.1;
const HOVER_SMOOTHING_MS = 110;
// Deliver the logo at 3x the slot size; the corner radius scales with it.
const ICON_TEXT_PX = 3;

// Pill on the top border with the team name, plus the event logo if present.
const TeamBadge = ({ frame, color, isDark, selectionRef, onClick }: Props) => {
  const { textStyles, text } = useCanvasTheme();
  const { viewport } = useViewport();
  // Pre-rounded logo (no Pixi mask: it would flush the batch). Falls back to
  // the raw logo when Cloudinary can't transform the URL (e.g. .ico source).
  const roundedUrl = useMemo(
    () =>
      frame.iconUrl
        ? (getIconUrlAsRounded(
          frame.iconUrl,
          TEAM_TITLE_ICON_SIZE * ICON_TEXT_PX,
          TEAM_TITLE_ICON_RADIUS * ICON_TEXT_PX,
        ) ?? frame.iconUrl)
        : null,
    [frame.iconUrl],
  );
  const iconTexture = useTexture(roundedUrl);
  const containerRef = useRef<Container>(null);
  const lastStateRef = useRef({ scale: NaN, selection: NaN });
  const isHoveredRef = useRef(false);
  const hoverRef = useRef(0);
  const handlePointerEnter = useCallback(() => {
    isHoveredRef.current = true;
  }, []);
  const handlePointerLeave = useCallback(() => {
    isHoveredRef.current = false;
  }, []);

  const background = useMemo(
    () => getTeamBadgeBackground(color, isDark),
    [color, isDark],
  );
  const textTint = useMemo(
    () =>
      getReadableColor(
        getTeamBadgeText(color, text.title),
        background,
        text.title,
        7,
      ),
    [color, background, text.title],
  );

  // White glyphs tinted per badge: every badge shares one bitmap font.
  const style = useMemo(
    () =>
      new TextStyle({
        ...textStyles.tooltip,
        fill: "#ffffff",
        fontSize: TEAM_TITLE_FONT_SIZE,
        wordWrap: false,
      }),
    [textStyles],
  );

  const layout = useMemo(
    () => getTeamBadgeLayout(frame.name, frame.width, style, !!iconTexture),
    [iconTexture, frame.width, frame.name, style],
  );

  useEffect(() => {
    lastStateRef.current.scale = NaN;
  }, [layout.width, frame.width]);

  const draw = useCallback(
    (g: Graphics) => {
      g.clear();
      g.roundRect(
        -layout.width / 2,
        -layout.height / 2,
        layout.width,
        layout.height,
        layout.height / 2,
      );
      g.fill({ color: background });
      g.stroke({ color, width: TEAM_TITLE_BORDER_WIDTH });
    },
    [layout, color, background],
  );

  // Keeps the badge readable while zooming out (never wider than the frame)
  // and fades it out as the team overview takes over.
  useTick((ticker) => {
    const container = containerRef.current;
    if (!container) return;
    const scale = viewport?.scale.x ?? 1;
    const selection = selectionRef.current ?? 0;
    const hoverTarget = isHoveredRef.current ? 1 : 0;
    const hoverChanging = Math.abs(hoverRef.current - hoverTarget) > 0.002;
    const last = lastStateRef.current;
    if (
      last.scale === scale &&
      last.selection === selection &&
      !hoverChanging
    ) {
      return;
    }
    last.scale = scale;
    last.selection = selection;

    hoverRef.current = hoverChanging
      ? hoverRef.current +
      (hoverTarget - hoverRef.current) *
      (1 - Math.exp(-ticker.deltaMS / HOVER_SMOOTHING_MS))
      : hoverTarget;

    const fade = getTeamOverviewFade(scale);
    const wanted = TEAM_TITLE_SCREEN_PX / (scale * TEAM_TITLE_FONT_SIZE);
    const maxGrowth = (frame.width * 0.9) / layout.width;
    container.scale.set(
      Math.max(1, Math.min(wanted, maxGrowth)) *
      (1 + SELECTED_SCALE * selection + HOVER_SCALE * hoverRef.current),
    );
    container.alpha = 1 - fade;
    container.visible = fade < 1;
  });

  const handleTap = useCallback(() => onClick(frame), [frame, onClick]);
  const tap = useTapWithoutDrag(handleTap);
  const hitArea = useMemo(
    () =>
      new Rectangle(
        -layout.width / 2,
        -layout.height / 2,
        layout.width,
        layout.height,
      ),
    [layout.width, layout.height],
  );

  const iconScale = iconTexture
    ? TEAM_TITLE_ICON_SIZE / Math.max(iconTexture.width, iconTexture.height)
    : 1;
  const iconX =
    -layout.width / 2 + TEAM_TITLE_ICON_PADDING + TEAM_TITLE_ICON_SIZE / 2;

  return (
    <pixiContainer
      ref={containerRef}
      x={frame.width / 2}
      eventMode="static"
      cursor="pointer"
      hitArea={hitArea}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onPointerDown={tap.onPointerDown}
      onClick={tap.onClick}
      onTap={tap.onClick}
    >
      <pixiGraphics draw={draw} />
      {iconTexture && (
        <pixiSprite
          texture={iconTexture}
          anchor={0.5}
          scale={iconScale}
          x={iconX}
        />
      )}
      <pixiBitmapText
        text={layout.label}
        anchor={{ x: 0, y: 0.5 }}
        x={-layout.width / 2 + layout.textOffset}
        tint={textTint}
        style={style}
      />
    </pixiContainer>
  );
};

export default memo(TeamBadge);
