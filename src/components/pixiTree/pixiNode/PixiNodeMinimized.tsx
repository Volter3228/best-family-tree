import { useCallback, memo } from "react";
import {
  Container,
  FederatedPointerEvent,
  Filter,
  Graphics,
  GraphicsContext,
  Texture,
} from "pixi.js";
import {
  ACCENT_COLOR,
  AVATAR_FILL_GRADIENT,
  MINIMIZED_RADIUS,
  MINIMIZED_SIZE,
} from "@/constants/pixi";

interface Props {
  visible: boolean;
  x: number;
  y: number;
  isSelected: boolean;
  avatarImage: Texture | GraphicsContext | null;
}

const PixiNodeMinimized = ({
  visible,
  x,
  y,
  isSelected,
  avatarImage,
}: Props) => {
  const drawMinimizedNode = useCallback(
    (g: Graphics) => {
      g.clear();

      const r = MINIMIZED_RADIUS;
      g.beginPath();
      g.circle(r, r, r);
      g.fill(AVATAR_FILL_GRADIENT);

      if (isSelected) {
        g.stroke({ color: ACCENT_COLOR, width: 5 });
      }
    },
    [isSelected]
  );

  const drawSvgAvatar = useCallback(
    (g: Graphics) => {
      if (!(avatarImage instanceof GraphicsContext)) return;
      g.context = avatarImage;

      g.scale.set(0.0075, -0.0075);
      g.position.set(MINIMIZED_RADIUS - 70, MINIMIZED_RADIUS + 80);
    },
    [avatarImage]
  );

  return (
    <pixiContainer
      visible={visible}
      x={x}
      y={y}
      pivot={{ x: MINIMIZED_RADIUS, y: MINIMIZED_RADIUS }}
    >
      <pixiGraphics draw={drawMinimizedNode} />
      {avatarImage &&
        (avatarImage instanceof Texture ? (
          <pixiSprite
            texture={avatarImage}
            anchor={0.5}
            x={MINIMIZED_RADIUS}
            y={MINIMIZED_RADIUS}
            width={MINIMIZED_SIZE}
            height={MINIMIZED_SIZE}
            roundPixels
          />
        ) : (
          <pixiGraphics draw={drawSvgAvatar} />
        ))}
    </pixiContainer>
  );
};

export default memo(PixiNodeMinimized);
