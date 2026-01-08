import { useCallback } from "react";
import { CanvasTextMetrics, Graphics, GraphicsContext, Texture } from "pixi.js";
import Member from "@/models/Member";
import {
  ACCENT_COLOR, AVATAR_FILL_GRADIENT,
  AVATAR_SIZE,
  NODE_HEIGHT,
  NODE_SUBTITLE_STYLE,
  NODE_TITLE_STYLE,
  NODE_WIDTH, SLATE_LIGHT_COLOR,
  TEXT_RESOLUTION
} from "@/constants/pixi";

interface Props {
  visible: boolean;
  member: Member;
  avatarImage: Texture | GraphicsContext | null;
  isSelected: boolean;
}

const PixiNodeMaximized = ({ visible, member, avatarImage, isSelected }: Props) => {
  const contentCenterX = NODE_WIDTH / 2;
  const contentCenterY = NODE_HEIGHT / 2;

  const titleMetrics = CanvasTextMetrics.measureText(member.name, NODE_TITLE_STYLE);
  const subtitleY = (titleMetrics.height / 2) + 12;
  const avatarY = titleMetrics.height > 24 ? -8 : 0;

  const drawAvatarMask = useCallback((g: Graphics) => {
    g.clear();
    g.circle(0, avatarY, AVATAR_SIZE / 2);
    g.fill(AVATAR_FILL_GRADIENT);
  }, []);

  const drawSvgAvatar = useCallback(
    (g: Graphics) => {
      if (!(avatarImage instanceof GraphicsContext)) return;
      g.context = avatarImage;

      g.scale.set(0.003, -0.003);
      g.position.set(-28, avatarY + 32);
    },
    [avatarImage]
  );

  const drawMaximizedNode = useCallback(
    (g: Graphics) => {
      g.clear();
      g.beginPath();
      g.roundRect(0, 0, NODE_WIDTH, NODE_HEIGHT, 24);
      g.fill(SLATE_LIGHT_COLOR);
      g.stroke({ color: ACCENT_COLOR, width: 2 });

      if (isSelected) {
        g.stroke({ color: ACCENT_COLOR, width: 4 });
      }
    },
    [isSelected]
  );

  return (<pixiContainer visible={visible}>
    <pixiGraphics draw={drawMaximizedNode} />
    <pixiContainer x={contentCenterX} y={contentCenterY - AVATAR_SIZE / 3}>
      <pixiGraphics draw={drawAvatarMask} />
      {avatarImage &&
        (avatarImage instanceof Texture ? (
          <pixiSprite
            texture={avatarImage}
            anchor={0.5}
            width={AVATAR_SIZE}
            height={AVATAR_SIZE}
            roundPixels
          />
        ) : (
          <pixiGraphics draw={drawSvgAvatar} />
        ))}
    </pixiContainer>
    <pixiContainer x={contentCenterX} y={120}>
      <pixiText
        text={member.name}
        anchor={0.5}
        style={NODE_TITLE_STYLE}
        resolution={window.devicePixelRatio * TEXT_RESOLUTION}
      />
      <pixiText
        text={member.getRecruitmentSeason()}
        anchor={0.5}
        y={subtitleY}
        style={NODE_SUBTITLE_STYLE}
        resolution={window.devicePixelRatio * TEXT_RESOLUTION}
      />
    </pixiContainer>
  </pixiContainer>)
};

export default PixiNodeMaximized;