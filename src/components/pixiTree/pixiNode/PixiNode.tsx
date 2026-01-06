import { useMemo, useState, useEffect, useCallback, memo, useRef } from "react";
import {
  Texture,
  FederatedPointerEvent,
  Graphics,
  GraphicsContext,
  Container,
  Rectangle,
} from "pixi.js";
import Member from "@/models/Member";
import { getAvatarImage, getIsMinimized } from "@/libs/pixi";
import { useHoverNodeAnimation } from "@/hooks";
import {
  NODE_WIDTH,
  NODE_HEIGHT,
  AVATAR_SIZE,
  MAXIMIZED_BACKGROUND_COLOR,
  ACCENT_COLOR,
  AVATAR_FILL_GRADIENT,
  TEXT_STYLE,
  SUB_TEXT_STYLE,
  MINIMIZED_RADIUS,
  TEXT_RESOLUTION,
} from "@/constants/pixi";
import PixiNodeMinimized from "./PixiNodeMinimized";

interface Props {
  member: Member;
  isSelected: boolean;
  x: number;
  y: number;
  appScale: number;
  onClick: (member: Member) => void;
}

const PixiNode = ({ x, y, member, isSelected, appScale, onClick }: Props) => {
  const [avatarImage, setAvatarImage] = useState<
    Texture | GraphicsContext | null
  >(null);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<Container>(null);

  const { shadowFilter } = useHoverNodeAnimation({
    container: containerRef.current,
    isHovered,
    isSelected,
    appScale,
  });

  useEffect(() => {
    let mounted = true;
    const loadAvatarImage = async () => {
      const avatar = await getAvatarImage(member.avatar || member.photo);
      if (mounted && avatar) {
        setAvatarImage(avatar);
      }
    };
    loadAvatarImage();
    return () => {
      mounted = false;
    };
  }, [member.avatar, member.photo]);

  const drawNode = useCallback(
    (g: Graphics) => {
      g.clear();
      g.beginPath();
      g.roundRect(0, 0, NODE_WIDTH, NODE_HEIGHT, 24);
      g.fillStyle = MAXIMIZED_BACKGROUND_COLOR;
      g.fill();
      g.setStrokeStyle({ color: ACCENT_COLOR, width: 2 });
      g.stroke();

      if (isSelected) {
        g.setStrokeStyle({ color: ACCENT_COLOR, width: 4 });
        g.stroke();
      }
    },
    [isSelected]
  );

  const drawAvatarMask = useCallback((g: Graphics) => {
    g.clear();
    g.circle(0, 0, AVATAR_SIZE / 2);
    g.fill(AVATAR_FILL_GRADIENT);
  }, []);

  const drawSvgAvatar = useCallback(
    (g: Graphics) => {
      if (!(avatarImage instanceof GraphicsContext)) return;
      g.context = avatarImage;

      g.scale.set(0.003, -0.003);
      g.position.set(-28, 32);
    },
    [avatarImage]
  );

  const handleClick = useCallback(
    (e: FederatedPointerEvent) => {
      e.stopPropagation();
      onClick(member);
    },
    [member, onClick]
  );

  const filters = useMemo(() => {
    if (!isHovered && !isSelected) return [];
    return [shadowFilter];
  }, [isHovered, isSelected, shadowFilter]);

  const handlePointerEnter = () => setIsHovered(true);
  const handlePointerLeave = () => setIsHovered(false);

  const isMinimized = getIsMinimized(appScale);
  const contentCenterX = NODE_WIDTH / 2;
  const contentCenterY = NODE_HEIGHT / 2;

  const hitArea = useMemo(() => {
    return new Rectangle(0, 0, NODE_WIDTH, NODE_HEIGHT);
  }, []);

  return (
    <pixiContainer
      ref={containerRef}
      x={x + contentCenterX}
      y={y + contentCenterY}
      pivot={{ x: contentCenterX, y: contentCenterY }}
      hitArea={hitArea}
      zIndex={isHovered ? 1000 : 0}
      eventMode="static"
      cursor="pointer"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onClick={handleClick}
      filters={filters}
      cullable
    >
      <PixiNodeMinimized
        visible={isMinimized}
        x={25 + MINIMIZED_RADIUS}
        y={MINIMIZED_RADIUS}
        isSelected={isSelected}
        avatarImage={avatarImage}
      />
      <pixiContainer visible={!isMinimized}>
        <pixiGraphics draw={drawNode} />
        <pixiContainer x={contentCenterX} y={contentCenterY - AVATAR_SIZE / 3}>
          <pixiGraphics draw={drawAvatarMask} />
          {avatarImage &&
            (avatarImage instanceof Texture ? (
              <pixiSprite
                texture={avatarImage}
                anchor={0.5}
                width={AVATAR_SIZE}
                height={AVATAR_SIZE}
                roundPixels={true}
              />
            ) : (
              <pixiGraphics draw={drawSvgAvatar} />
            ))}
        </pixiContainer>
        <pixiContainer x={contentCenterX} y={120}>
          <pixiText
            text={member.name}
            anchor={0.5}
            style={TEXT_STYLE}
            resolution={window.devicePixelRatio * TEXT_RESOLUTION}
          />
          <pixiText
            text={member.getRecruitmentSeason()}
            anchor={0.5}
            y={20}
            style={SUB_TEXT_STYLE}
            resolution={window.devicePixelRatio * TEXT_RESOLUTION}
          />
        </pixiContainer>
      </pixiContainer>
    </pixiContainer>
  );
};

export default memo(PixiNode);
