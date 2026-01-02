import { useMemo, useState, useEffect, useCallback, memo } from "react";
import { Texture, FederatedPointerEvent, Graphics } from "pixi.js";
import Member from "@/models/Member";
import { getAvatarTexture } from "@/libs/pixi";
import {
  NODE_WIDTH,
  NODE_HEIGHT,
  AVATAR_SIZE,
  MAXIMIZED_BACKGROUND_COLOR,
  ACCENT_COLOR,
  AVATAR_SCALE,
  AVATAR_FILL_GRADIENT,
  TEXT_STYLE,
  SUB_TEXT_STYLE,
} from "./constants";
import PixiNodeMinimized from "./PixiNodeMinimized";
import useHoverNodeAnimation from "@/hooks/pixi/useHoverNodeAnimation";

interface Props {
  member: Member;
  isSelected: boolean;
  x: number;
  y: number;
  zoom: number;
  isDragging: boolean;
  onClick: (member: Member) => void;
}

const PixiNode = ({
  x,
  y,
  member,
  isSelected,
  zoom,
  onClick,
  isDragging,
}: Props) => {
  const [avatarTexture, setAvatarTexture] = useState<Texture | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const isMinimized = zoom < 0.45;
  const { scale, shadowFilter } = useHoverNodeAnimation({
    isHovered,
    isMinimized,
    isSelected,
    zoom,
  });

  useEffect(() => {
    let mounted = true;
    const loadTexture = async () => {
      // getAvatarTexture already handles fallback if it can find the asset
      const texture = await getAvatarTexture(member.avatar || member.photo);
      if (mounted && texture) {
        setAvatarTexture(texture);
      }
    };
    loadTexture();
    return () => {
      mounted = false;
    };
  }, [member.avatar, member.photo]);

  // Styles - draw at fixed size, scaling handled by container
  const drawNode = useCallback(
    (g: Graphics) => {
      g.clear();

      // Background - fixed size
      g.beginPath();
      g.roundRect(0, 0, NODE_WIDTH, NODE_HEIGHT, 24);
      g.fillStyle = MAXIMIZED_BACKGROUND_COLOR;
      g.fill();
      g.setStrokeStyle({ color: ACCENT_COLOR, width: 2 });
      g.stroke();

      if (isSelected) {
        // Selected ring effect
        g.setStrokeStyle({ color: ACCENT_COLOR, width: 4 });
        g.stroke();
      }
    },
    [isSelected]
  );

  const textResolution = useMemo(() => {
    const baseResolution = window.devicePixelRatio || 1;
    return zoom > 1 ? baseResolution * 2.5 : baseResolution;
  }, [zoom > 1]);

  // Avatar mask
  const drawAvatarMask = useCallback((g: Graphics) => {
    g.clear();
    g.circle(0, 0, AVATAR_SIZE / 2);
    g.fill(AVATAR_FILL_GRADIENT);
  }, []);

  const handleClick = (e: FederatedPointerEvent) => {
    if (isDragging) return;
    e.stopPropagation();
    onClick(member);
  };

  const handlePointerEnter = () => setIsHovered(true);
  const handlePointerLeave = () => setIsHovered(false);
  const contentCenterX = NODE_WIDTH / 2;
  const contentCenterY = NODE_HEIGHT / 2;

  const filters = useMemo(() => {
    return isHovered || isSelected ? [shadowFilter] : [];
  }, [isHovered, isSelected, shadowFilter]);

  if (isMinimized) {
    return (
      <PixiNodeMinimized
        x={x}
        y={y}
        isSelected={isSelected}
        isHovered={isHovered}
        scale={scale}
        avatarTexture={avatarTexture}
        filters={filters}
        onClick={handleClick}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
      />
    );
  }

  return (
    <pixiContainer
      x={x + contentCenterX}
      y={y + contentCenterY}
      pivot={{ x: contentCenterX, y: contentCenterY }}
      scale={scale}
      zIndex={isHovered ? 1000 : 0}
      eventMode="static"
      cursor="pointer"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onClick={handleClick}
      filters={filters}
    >
      <pixiGraphics draw={drawNode} />
      <pixiContainer x={contentCenterX} y={contentCenterY - AVATAR_SIZE / 3}>
        <pixiGraphics draw={drawAvatarMask} />
        {avatarTexture && (
          <pixiSprite
            texture={avatarTexture}
            anchor={0.5}
            width={AVATAR_SIZE * AVATAR_SCALE}
            height={AVATAR_SIZE * AVATAR_SCALE}
          />
        )}
      </pixiContainer>
      <pixiContainer x={contentCenterX} y={120}>
        <pixiText
          text={member.name}
          anchor={0.5}
          style={TEXT_STYLE}
          resolution={textResolution}
        />
        <pixiText
          text={member.getRecruitmentSeason()}
          anchor={0.5}
          y={20}
          style={SUB_TEXT_STYLE}
          resolution={textResolution}
        />
      </pixiContainer>
    </pixiContainer>
  );
};

export default memo(PixiNode);
