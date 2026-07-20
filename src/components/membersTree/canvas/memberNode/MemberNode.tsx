import { memo, useMemo, useState, useEffect, useCallback, useRef } from "react";
import { FederatedPointerEvent, Container, Filter } from "pixi.js";
import gsap from "gsap";
import { getMemberAvatar } from "@/utils";
import {
  useHoverNodeAnimation,
  useCardAnimation,
  CARD_PIVOT_X,
  CARD_PIVOT_Y,
} from "@/hooks";
import { Member } from "@/models";
import { NODE_WIDTH, NODE_HEIGHT } from "@/constants/canvas";
import MemberBirthdayAnimation from "@/components/animations/memberBirthday";
import MemberNodeAvatar from "./MemberNodeAvatar";
import MemberNodeMinimizedTooltip from "./MemberNodeMinimizedTooltip";
import MemberNodeCard from "./MemberNodeCard";

interface Props {
  member: Member;
  placeholderColorIndex: number;
  isSelected: boolean;
  isZoomedOut: boolean;
  showBirthday: boolean;
  x: number;
  y: number;
  onClick: (member: Member) => void;
}

const EMPTY_FILTERS: Filter[] = [];
const CONTENT_CENTER_X = NODE_WIDTH / 2;
const CONTENT_CENTER_Y = NODE_HEIGHT / 2;

const MemberNode = ({
  x,
  y,
  member,
  placeholderColorIndex,
  isSelected,
  isZoomedOut,
  showBirthday,
  onClick,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<Container>(null);
  const cardRef = useRef<Container>(null);
  const avatarUrl = useMemo(() => getMemberAvatar(member), [member.photo]);

  const { shadowFilter } = useHoverNodeAnimation({
    container: containerRef.current,
    isHovered,
    isSelected,
  });
  useCardAnimation({ cardRef, isZoomedOut, memberId: member.id });

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
  const birthdayRef = useRef<Container>(null);

  useEffect(() => {
    if (!birthdayRef.current || !isBirthday) return;
    gsap.to(birthdayRef.current, {
      alpha: showBirthday ? 1 : 0,
      duration: 0.6,
      ease: "power2.inOut",
    });
  }, [showBirthday, isBirthday]);

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
        <pixiContainer
          ref={cardRef}
          pivot={{ x: CARD_PIVOT_X, y: CARD_PIVOT_Y }}
          x={CARD_PIVOT_X}
        >
          <MemberNodeCard
            member={member}
            isSelected={isSelected}
            placeholderColorIndex={placeholderColorIndex}
          />
        </pixiContainer>

        <MemberNodeAvatar
          avatarUrl={avatarUrl}
          memberName={member.name}
          placeholderColorIndex={placeholderColorIndex}
        />

        <MemberNodeMinimizedTooltip
          text={member.name}
          visible={isZoomedOut && isHovered}
          placeholderColorIndex={placeholderColorIndex}
        />
      </pixiContainer>
      {isBirthday && (
        <pixiContainer
          ref={birthdayRef}
          x={x + CONTENT_CENTER_X}
          y={y + CONTENT_CENTER_Y}
          alpha={0}
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

export default memo(MemberNode);
