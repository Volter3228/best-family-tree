import { useCallback, useState, memo } from "react";
import { Graphics, GraphicsContext, Texture } from "pixi.js";
import {
  AVATAR_FILL_GRADIENT,
  NODE_WIDTH,
  NODE_AVATAR_RADIUS,
  NODE_AVATAR_SIZE,
} from "@/constants/canvas";

interface Props {
  avatarImage: Texture | GraphicsContext | null;
}

const CENTER_X = NODE_WIDTH / 2;

const MemberNodeAvatar = ({ avatarImage }: Props) => {
  const [circleMask, setCircleMask] = useState<Graphics | null>(null);

  const drawCircleBackground = useCallback((g: Graphics) => {
    g.clear();
    g.circle(CENTER_X, NODE_AVATAR_RADIUS, NODE_AVATAR_RADIUS);
    g.fill(AVATAR_FILL_GRADIENT);
  }, []);

  const drawSvgAvatar = useCallback(
    (g: Graphics) => {
      if (!(avatarImage instanceof GraphicsContext)) return;
      g.context = avatarImage;
      g.scale.set(0.007, -0.007);
      g.position.set(CENTER_X - 65, NODE_AVATAR_RADIUS + 75);
    },
    [avatarImage],
  );

  return (
    <pixiContainer mask={avatarImage instanceof Texture ? circleMask : null}>
      <pixiGraphics ref={setCircleMask} draw={drawCircleBackground} />
      {avatarImage &&
        (avatarImage instanceof Texture ? (
          <pixiSprite
            texture={avatarImage}
            anchor={0.5}
            x={CENTER_X}
            y={NODE_AVATAR_RADIUS}
            width={NODE_AVATAR_SIZE}
            height={NODE_AVATAR_SIZE}
          />
        ) : (
          <pixiGraphics draw={drawSvgAvatar} />
        ))}
    </pixiContainer>
  );
};

export default memo(MemberNodeAvatar);
