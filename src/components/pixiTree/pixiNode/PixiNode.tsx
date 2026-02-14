import { useMemo, useState, useEffect, useCallback, useRef } from "react";
import {
  Texture,
  FederatedPointerEvent,
  GraphicsContext,
  Container,
  Filter,
} from "pixi.js";
import Member from "@/models/Member";
import {
  NODE_WIDTH,
  NODE_HEIGHT,
  MINIMIZED_NODE_RADIUS,
  AVATAR_SIZE,
} from "@/constants/pixi";
import { getAvatarImage } from "@/libs/pixi";
import { useHoverNodeAnimation } from "@/hooks";
import MemberBirthdayAnimation from "@/components/animations/memberBirthday/MemberBirthdayAnimation";
import PixiNodeMinimized from "./PixiNodeMinimized";
import PixiNodeMaximized from "./PixiNodeMaximized";

interface Props {
  member: Member;
  isSelected: boolean;
  isMinimized: boolean;
  x: number;
  y: number;
  appScale: number;
  onClick: (member: Member) => void;
}

const EMPTY_FILTERS: Filter[] = [];
const CONTENT_CENTER_X = NODE_WIDTH / 2;
const CONTENT_CENTER_Y = NODE_HEIGHT / 2;

const PixiNode = ({
  x,
  y,
  member,
  isSelected,
  isMinimized,
  appScale,
  onClick,
}: Props) => {
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
    [member, onClick],
  );

  const handlePointerEnter = useCallback(() => setIsHovered(true), []);
  const handlePointerLeave = useCallback(() => setIsHovered(false), []);

  const filters = useMemo(() => {
    if (!isHovered && !isSelected) return EMPTY_FILTERS;
    return [shadowFilter];
  }, [isHovered, isSelected, shadowFilter]);

  const isBirthday = useMemo(() => member.isBirthdayToday(), [member.birthday]);

  return (
    <>
      <pixiContainer
        ref={containerRef}
        x={x + CONTENT_CENTER_X}
        y={y + CONTENT_CENTER_Y}
        pivot={{ x: CONTENT_CENTER_X, y: CONTENT_CENTER_Y }}
        zIndex={isHovered ? 1000 : 0}
        eventMode="static"
        cursor="pointer"
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onClick={handleClick}
        filters={filters}
        cullable
      >
        <pixiContainer visible={isMinimized}>
          <PixiNodeMinimized
            x={25 + MINIMIZED_NODE_RADIUS}
            y={MINIMIZED_NODE_RADIUS}
            avatarImage={avatarImage}
            memberName={member.name}
            isHovered={isHovered}
          />
        </pixiContainer>
        <pixiContainer visible={!isMinimized}>
          <PixiNodeMaximized
            member={member}
            avatarImage={avatarImage}
            isSelected={isSelected}
          />
        </pixiContainer>
      </pixiContainer>
      {isBirthday && (
        <pixiContainer
          x={x + CONTENT_CENTER_X}
          y={y + CONTENT_CENTER_Y - AVATAR_SIZE / 3}
          visible={!isMinimized}
          zIndex={1001}
          eventMode="none"
          cullable
        >
          <MemberBirthdayAnimation />
        </pixiContainer>
      )}
    </>
  );
};

export default PixiNode;
