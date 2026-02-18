import { useCallback, memo, useRef } from "react";
import { Graphics, GraphicsContext, Texture } from "pixi.js";
import {
  AVATAR_FILL_GRADIENT,
  MINIMIZED_AVATAR_SCALE,
  MINIMIZED_NODE_RADIUS,
  MINIMIZED_NODE_SIZE,
} from "@/constants/canvas";
import MemberNodeMinimizedTooltip from "./MemberNodeMinimizedTooltip";

interface Props {
  x: number;
  y: number;
  avatarImage: Texture | GraphicsContext | null;
  memberName: string;
  isHovered: boolean;
}

const MemberNodeMinimized = ({
  x,
  y,
  avatarImage,
  memberName,
  isHovered,
}: Props) => {
  const nodeMaskRef = useRef<Graphics>(null);
  const radius = MINIMIZED_NODE_RADIUS;

  const drawMinimizedNode = useCallback((g: Graphics) => {
    g.clear();
    g.beginPath();
    g.circle(radius, radius, radius);
    g.fill(AVATAR_FILL_GRADIENT);
  }, []);

  const drawSvgAvatar = useCallback(
    (g: Graphics) => {
      if (!(avatarImage instanceof GraphicsContext)) return;
      g.context = avatarImage;

      g.scale.set(0.0075, -0.0075);
      g.position.set(radius - 70, radius + 80);
    },
    [avatarImage],
  );

  return (
    <pixiContainer x={x} y={y} pivot={{ x: radius, y: radius }}>
      <pixiContainer
        mask={avatarImage instanceof Texture ? nodeMaskRef.current : null}
      >
        <pixiGraphics ref={nodeMaskRef} draw={drawMinimizedNode} />
        {avatarImage &&
          (avatarImage instanceof Texture ? (
            <pixiSprite
              texture={avatarImage}
              anchor={0.5}
              x={radius}
              y={radius}
              width={MINIMIZED_NODE_SIZE}
              height={MINIMIZED_NODE_SIZE}
              scale={MINIMIZED_AVATAR_SCALE}
            />
          ) : (
            <pixiGraphics draw={drawSvgAvatar} />
          ))}
      </pixiContainer>
      <MemberNodeMinimizedTooltip text={memberName} visible={isHovered} />
    </pixiContainer>
  );
};

export default memo(MemberNodeMinimized);
