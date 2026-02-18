import { useMemo, useState, useEffect, useCallback, useRef } from "react";
import {
  Texture,
  FederatedPointerEvent,
  GraphicsContext,
  Container,
  Filter,
} from "pixi.js";
import { getMemberAvatar, getAvatarImage } from "@/utils";
import { useHoverNodeAnimation } from "@/hooks";
import { Member } from "@/models";
import {
  NODE_WIDTH,
  NODE_HEIGHT,
  MINIMIZED_NODE_RADIUS,
  AVATAR_SIZE,
} from "@/constants/canvas";
import MemberBirthdayAnimation from "@/components/animations/memberBirthday";
import MemberNodeMinimized from "./MemberNodeMinimized";
import MemberNodeMaximized from "./MemberNodeMaximized";

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

const MemberNode = ({
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
  const avatarUrl = useMemo(() => getMemberAvatar(member), [member.photo]);

  const { shadowFilter } = useHoverNodeAnimation({
    container: containerRef.current,
    isHovered,
    isSelected,
    appScale,
  });

  useEffect(() => {
    let mounted = true;
    const loadAvatarImage = async () => {
      const avatar = await getAvatarImage(avatarUrl);
      if (mounted && avatar) {
        setAvatarImage(avatar);
      }
    };
    loadAvatarImage();
    return () => {
      mounted = false;
    };
  }, [avatarUrl]);

  const handleClick = useCallback(
    (e: FederatedPointerEvent) => {
      e.stopPropagation();
      onClick(member);
    },
    [member, onClick],
  );

  const handlePointerEnter = useCallback(() => setIsHovered(true), []);
  const handlePointerLeave = useCallback(() => setIsHovered(false), []);

  useEffect(() => {
    if (!isHovered) return;

    const handlePointerMove = (e: PointerEvent) => {
      if (!(e.target instanceof HTMLCanvasElement)) {
        setIsHovered(false);
      }
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [isHovered]);

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
          <MemberNodeMinimized
            x={25 + MINIMIZED_NODE_RADIUS}
            y={MINIMIZED_NODE_RADIUS}
            avatarImage={avatarImage}
            memberName={member.name}
            isHovered={isHovered}
          />
        </pixiContainer>
        <pixiContainer visible={!isMinimized}>
          <MemberNodeMaximized
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

export default MemberNode;
