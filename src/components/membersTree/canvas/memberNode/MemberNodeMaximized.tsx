import { memo, useCallback, useMemo, useRef } from "react";
import {
  CanvasTextMetrics,
  Graphics,
  GraphicsContext,
  TextStyle,
  Texture,
} from "pixi.js";
import { Member } from "@/models";
import { formatMemberRecruitmentSeason } from "@/utils";
import {
  AVATAR_FILL_GRADIENT,
  AVATAR_SIZE,
  NODE_HEIGHT,
  NODE_SUBTITLE_STYLE,
  NODE_TITLE_STYLE,
  NODE_WIDTH,
  PRIMARY_GRADIENT,
  SLATE_LIGHT_COLOR,
  TEXT_RESOLUTION,
} from "@/constants/canvas";

interface Props {
  member: Member;
  avatarImage: Texture | GraphicsContext | null;
  isSelected: boolean;
}

const titleStyle = new TextStyle(NODE_TITLE_STYLE);
const subtitleStyle = new TextStyle(NODE_SUBTITLE_STYLE);

const MemberNodeMaximized = ({ member, avatarImage, isSelected }: Props) => {
  const avatarMaskRef = useRef<Graphics>(null);
  const contentCenterX = NODE_WIDTH / 2;
  const contentCenterY = NODE_HEIGHT / 2;

  const titleMetrics = useMemo(
    () => CanvasTextMetrics.measureText(member.name, titleStyle),
    [member.name],
  );

  const textResolution = useMemo(
    () => window.devicePixelRatio * TEXT_RESOLUTION,
    [],
  );

  const subtitleY = titleMetrics.height / 2 + 12;
  const avatarY = titleMetrics.height > 24 ? -8 : 0;

  const drawAvatarBackground = useCallback(
    (g: Graphics) => {
      g.clear();
      g.circle(0, avatarY, AVATAR_SIZE / 2);
      g.fill(AVATAR_FILL_GRADIENT);
    },
    [avatarY],
  );

  const drawSvgAvatar = useCallback(
    (g: Graphics) => {
      if (!(avatarImage instanceof GraphicsContext)) return;
      g.context = avatarImage;

      g.scale.set(0.003, -0.003);
      g.position.set(-28, avatarY + 32);
    },
    [avatarImage],
  );

  const drawMaximizedNode = useCallback(
    (g: Graphics) => {
      g.clear();
      g.beginPath();
      g.roundRect(0, 0, NODE_WIDTH, NODE_HEIGHT, 24);
      g.fill({
        color: SLATE_LIGHT_COLOR,
      });

      if (isSelected) {
        g.stroke({ fill: PRIMARY_GRADIENT, width: 2 });
      } else {
        g.stroke({
          color: SLATE_LIGHT_COLOR,
          width: 3,
          alpha: 0.25,
        });
      }
    },
    [isSelected],
  );

  return (
    <pixiContainer>
      <pixiGraphics draw={drawMaximizedNode} />
      <pixiContainer
        x={contentCenterX}
        y={contentCenterY - AVATAR_SIZE / 3}
        mask={avatarImage instanceof Texture ? avatarMaskRef.current : null}
      >
        <pixiGraphics ref={avatarMaskRef} draw={drawAvatarBackground} />
        {avatarImage &&
          (avatarImage instanceof Texture ? (
            <pixiSprite
              texture={avatarImage}
              anchor={0.5}
              width={AVATAR_SIZE}
              height={AVATAR_SIZE}
            />
          ) : (
            <pixiGraphics draw={drawSvgAvatar} />
          ))}
      </pixiContainer>
      <pixiContainer x={contentCenterX} y={120}>
        <pixiText
          text={member.name}
          anchor={0.5}
          style={titleStyle}
          resolution={textResolution}
        />
        <pixiText
          text={formatMemberRecruitmentSeason(member)}
          anchor={0.5}
          y={subtitleY}
          style={subtitleStyle}
          resolution={textResolution}
        />
      </pixiContainer>
    </pixiContainer>
  );
};

export default memo(MemberNodeMaximized);
