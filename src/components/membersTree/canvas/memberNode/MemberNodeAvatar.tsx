import { useState, useMemo, memo } from "react";
import { Assets, Sprite, TextStyle } from "pixi.js";
import { useTexture, useCanvasTheme } from "@/hooks";
import { getInitials } from "@/utils";
import {
  NODE_WIDTH,
  NODE_AVATAR_RADIUS,
  NODE_AVATAR_SIZE,
  CIRCLE_TEXTURE_SRC,
  PATTERN_TEXTURE_SRC,
} from "@/constants/canvas";

interface Props {
  avatarUrl: string | null;
  memberName: string;
  placeholderColorIndex: number;
}

const CENTER_X = NODE_WIDTH / 2;

const MemberNodeAvatar = ({
  avatarUrl,
  memberName,
  placeholderColorIndex,
}: Props) => {
  const { accentColors, textStyles } = useCanvasTheme();
  const avatarImage = useTexture(avatarUrl);
  const circleTexture = Assets.get(CIRCLE_TEXTURE_SRC);
  const patternTexture = Assets.get(PATTERN_TEXTURE_SRC);
  const [circleMaskSprite, setCircleMaskSprite] = useState<Sprite | null>(null);

  const initials = useMemo(() => getInitials(memberName), [memberName]);
  const placeholderStyle = useMemo(
    () => new TextStyle(textStyles.placeholderInitials),
    [textStyles],
  );

  if (avatarImage) {
    return (
      <pixiContainer mask={circleMaskSprite}>
        <pixiSprite
          ref={setCircleMaskSprite}
          renderable={false}
          texture={circleTexture}
          anchor={0.5}
          x={CENTER_X}
          y={NODE_AVATAR_RADIUS}
          width={NODE_AVATAR_SIZE}
          height={NODE_AVATAR_SIZE}
        />
        <pixiSprite
          texture={avatarImage}
          anchor={0.5}
          x={CENTER_X}
          y={NODE_AVATAR_RADIUS}
          width={NODE_AVATAR_SIZE}
          height={NODE_AVATAR_SIZE}
        />
      </pixiContainer>
    );
  }

  return (
    <pixiContainer>
      <pixiSprite
        texture={circleTexture}
        anchor={0.5}
        x={CENTER_X}
        y={NODE_AVATAR_RADIUS}
        width={NODE_AVATAR_SIZE}
        height={NODE_AVATAR_SIZE}
        tint={accentColors[placeholderColorIndex]}
      />
      <pixiSprite
        texture={patternTexture}
        anchor={0.5}
        x={CENTER_X}
        y={NODE_AVATAR_RADIUS}
        width={NODE_AVATAR_SIZE}
        height={NODE_AVATAR_SIZE}
        eventMode="none"
        alpha={0.05}
      />
      <pixiBitmapText
        text={initials}
        anchor={0.5}
        x={CENTER_X}
        y={NODE_AVATAR_RADIUS}
        style={placeholderStyle}
      />
    </pixiContainer>
  );
};

export default memo(MemberNodeAvatar);
