import { useCallback, memo } from "react";
import { FederatedPointerEvent, Filter, Graphics, Texture } from "pixi.js";
import {
  ACCENT_COLOR,
  AVATAR_FILL_GRADIENT,
  AVATAR_SCALE,
  MINIMIZED_RADIUS,
  MINIMIZED_SIZE,
} from "./constants";

interface Props {
  x: number;
  y: number;
  isSelected: boolean;
  isHovered: boolean;
  avatarTexture: Texture | null;
  scale: number;
  filters: Filter[];
  onClick: (e: FederatedPointerEvent) => void;
  onPointerEnter: () => void;
  onPointerLeave: () => void;
}

const PixiNodeMinimized = ({
  x,
  y,
  isSelected,
  scale,
  isHovered,
  avatarTexture,
  filters,
  onClick,
  onPointerEnter,
  onPointerLeave,
}: Props) => {
  const drawMinimizedNode = useCallback(
    (g: Graphics) => {
      g.clear();

      const r = MINIMIZED_RADIUS;
      g.beginPath();
      g.circle(r, r, r);
      g.fill(AVATAR_FILL_GRADIENT);

      if (isSelected) {
        g.setStrokeStyle({ color: ACCENT_COLOR, width: 5 });
        g.stroke();
      }
    },
    [isSelected]
  );

  return (
    <pixiContainer
      x={x + 25 + MINIMIZED_RADIUS}
      y={y + MINIMIZED_RADIUS}
      pivot={{ x: MINIMIZED_RADIUS, y: MINIMIZED_RADIUS }}
      zIndex={isHovered ? 1000 : 0}
      scale={scale}
      filters={filters}
      eventMode="static"
      cursor="pointer"
      onClick={onClick}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      <pixiGraphics draw={drawMinimizedNode} />
      {avatarTexture && (
        <pixiSprite
          texture={avatarTexture}
          anchor={0.5}
          x={MINIMIZED_RADIUS}
          y={MINIMIZED_RADIUS}
          width={MINIMIZED_SIZE * AVATAR_SCALE}
          height={MINIMIZED_SIZE * AVATAR_SCALE}
        />
      )}
    </pixiContainer>
  );
};

export default memo(PixiNodeMinimized);
