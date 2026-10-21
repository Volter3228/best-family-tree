import { useMemo, memo } from "react";
import { Assets, TextStyle } from "pixi.js";
import { useTexture, useCanvasTheme } from "@/hooks";
import { getInitials, getMemberNodeAvatar } from "@/utils";
import { useTreeStore } from "@/store/treeStore";
import {
  NODE_WIDTH,
  NODE_AVATAR_RADIUS,
  NODE_AVATAR_SIZE,
  CIRCLE_TEXTURE_SRC,
  PATTERN_TEXTURE_SRC,
  AVATAR_LOW_RES_SIZE,
  AVATAR_HIGH_RES_SIZE,
} from "@/constants/canvas";

interface Props {
  nodeId: string;
  photo: string | null;
  memberName: string;
  placeholderColorIndex: number;
}

const CENTER_X = NODE_WIDTH / 2;

const MemberNodeAvatar = ({
  nodeId,
  photo,
  memberName,
  placeholderColorIndex,
}: Props) => {
  const { accentColors, textStyles } = useCanvasTheme();
  // Small texture for everyone, the full-size one only where it is visible.
  const lowResUrl = useMemo(
    () => getMemberNodeAvatar({ photo }, AVATAR_LOW_RES_SIZE),
    [photo],
  );
  const highResUrl = useMemo(
    () => getMemberNodeAvatar({ photo }, AVATAR_HIGH_RES_SIZE),
    [photo],
  );
  const isSharp = useTreeStore((s) => s.sharpNodeIds.has(nodeId));
  const lowResImage = useTexture(lowResUrl, { mipmaps: true });
  const highResImage = useTexture(isSharp ? highResUrl : null, {
    mipmaps: true,
  });
  const avatarImage = highResImage ?? lowResImage;
  const circleTexture = Assets.get(CIRCLE_TEXTURE_SRC);
  const patternTexture = Assets.get(PATTERN_TEXTURE_SRC);

  const initials = useMemo(() => getInitials(memberName), [memberName]);
  const placeholderStyle = useMemo(
    () => new TextStyle(textStyles.placeholderInitials),
    [textStyles],
  );

  if (avatarImage) {
    // The texture is already a circle (see getMemberNodeAvatar): no mask.
    return (
      <pixiSprite
        texture={avatarImage}
        anchor={0.5}
        x={CENTER_X}
        y={NODE_AVATAR_RADIUS}
        width={NODE_AVATAR_SIZE}
        height={NODE_AVATAR_SIZE}
      />
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
