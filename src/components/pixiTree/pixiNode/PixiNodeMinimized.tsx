import { useCallback, memo } from "react";
import {
  Graphics,
  GraphicsContext,
  Texture,
} from "pixi.js";
import PixiNodeMinimizedTooltip from "@/components/pixiTree/pixiNode/PixiNodeMinimizedTooltip";
import {
  AVATAR_FILL_GRADIENT,
  MINIMIZED_NODE_RADIUS,
  MINIMIZED_NODE_SIZE,
  SLATE_LIGHT_COLOR
} from "@/constants/pixi";

interface Props {
  visible: boolean;
  x: number;
  y: number;
  isSelected: boolean;
  avatarImage: Texture | GraphicsContext | null;
  memberName: string;
  isHovered: boolean;
}

const PixiNodeMinimized = ({
  visible,
  x,
  y,
  isSelected,
  avatarImage,
  memberName,
  isHovered,
}: Props) => {
  const radius = MINIMIZED_NODE_RADIUS;

  const drawMinimizedNode = useCallback(
    (g: Graphics) => {
      g.clear();

      g.beginPath();
      g.circle(radius, radius, radius);
      g.fill(AVATAR_FILL_GRADIENT);

      if (isSelected) {
        g.stroke({ color: SLATE_LIGHT_COLOR, width: 5, alpha: 0.7 });
      }
    },
    [isSelected]
  );

  const drawSvgAvatar = useCallback(
    (g: Graphics) => {
      if (!(avatarImage instanceof GraphicsContext)) return;
      g.context = avatarImage;

      g.scale.set(0.0075, -0.0075);
      g.position.set(radius - 70, radius + 80);
    },
    [avatarImage]
  );

  return (
    <pixiContainer
      visible={visible}
      x={x}
      y={y}
      pivot={{ x: radius, y: radius }}
    >
      <pixiGraphics draw={drawMinimizedNode} />
      {avatarImage &&
        (avatarImage instanceof Texture ? (
          <pixiSprite
            texture={avatarImage}
            anchor={0.5}
            x={radius}
            y={radius}
            width={MINIMIZED_NODE_SIZE}
            height={MINIMIZED_NODE_SIZE}
            roundPixels
          />
        ) : (
          <pixiGraphics draw={drawSvgAvatar} />
        ))}
      <PixiNodeMinimizedTooltip text={memberName} visible={isHovered} />
    </pixiContainer>
  );
};

export default memo(PixiNodeMinimized);
