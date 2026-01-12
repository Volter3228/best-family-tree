import { useMemo, useState, useEffect, useCallback, memo, useRef } from "react";
import {
  Texture,
  FederatedPointerEvent,
  GraphicsContext,
  Container,
} from "pixi.js";
import Member from "@/models/Member";
import { getAvatarImage, getIsMinimized } from "@/libs/pixi";
import { useHoverNodeAnimation } from "@/hooks";
import {
  NODE_WIDTH,
  NODE_HEIGHT,
  MINIMIZED_NODE_RADIUS,
} from "@/constants/pixi";
import PixiNodeMinimized from "./PixiNodeMinimized";
import PixiNodeMaximized from "./PixiNodeMaximized";

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

  return (
    <pixiContainer
      ref={containerRef}
      x={x + contentCenterX}
      y={y + contentCenterY}
      pivot={{ x: contentCenterX, y: contentCenterY }}
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
        x={25 + MINIMIZED_NODE_RADIUS}
        y={MINIMIZED_NODE_RADIUS}
        avatarImage={avatarImage}
        memberName={member.name}
        isHovered={isHovered}
      />
      <PixiNodeMaximized
        visible={!isMinimized}
        member={member}
        avatarImage={avatarImage}
        isSelected={isSelected}
      />
    </pixiContainer>
  );
};

export default memo(PixiNode);
