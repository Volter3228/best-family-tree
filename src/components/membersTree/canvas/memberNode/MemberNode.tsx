import { memo, useMemo, useState, useEffect, useCallback, useRef } from "react";
import { FederatedPointerEvent, Container, Filter, Rectangle } from "pixi.js";
import gsap from "gsap";
import {
  useHoverNodeAnimation,
  useCardAnimation,
  CARD_PIVOT_X,
  CARD_PIVOT_Y,
} from "@/hooks";
import { isCameraMoving } from "@/hooks/membersTree/cameraMotion";
import { Member } from "@/models";
import { useTreeStore } from "@/store/treeStore";
import {
  NODE_WIDTH,
  NODE_HEIGHT,
  NODE_CARD_TOP,
  NODE_CARD_HEIGHT,
} from "@/constants/canvas";
import MemberBirthdayAnimation from "@/components/animations/memberBirthday";
import MemberNodeAvatar from "./MemberNodeAvatar";
import MemberNodeMinimizedTooltip from "./MemberNodeMinimizedTooltip";
import MemberNodeCard from "./MemberNodeCard";

interface Props {
  nodeId: string;
  member: Member;
  placeholderColorIndex: number;
  isSelected: boolean;
  isZoomedOut: boolean;
  showBirthday: boolean;
  teamRole?: string;
  teamId?: string;
  x: number;
  y: number;
  onClick: (member: Member, teamId?: string) => void;
}

const EMPTY_FILTERS: Filter[] = [];
// Culling box: the avatar and the card below it, with room for the hover glow.
const CULL_MARGIN = 80;
const CULL_AREA = new Rectangle(
  -CULL_MARGIN,
  -CULL_MARGIN,
  NODE_WIDTH + CULL_MARGIN * 2,
  NODE_CARD_TOP + NODE_CARD_HEIGHT + CULL_MARGIN * 2,
);
// Pointer hit areas, so the event system never walks the node's children:
// the whole node with its card, or just the avatar while the card is hidden.
const CARD_BOTTOM = NODE_CARD_TOP + NODE_CARD_HEIGHT;
const NODE_HIT_AREA = new Rectangle(0, 0, NODE_WIDTH, CARD_BOTTOM);
const AVATAR_HIT_AREA = new Rectangle(
  (NODE_WIDTH - NODE_HEIGHT) / 2,
  0,
  NODE_HEIGHT,
  NODE_HEIGHT,
);
const CONTENT_CENTER_X = NODE_WIDTH / 2;
const CONTENT_CENTER_Y = NODE_HEIGHT / 2;

const MemberNode = ({
  nodeId,
  x,
  y,
  member,
  placeholderColorIndex,
  isSelected,
  isZoomedOut,
  showBirthday,
  teamRole,
  teamId,
  onClick,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<Container>(null);
  const cardRef = useRef<Container>(null);

  const { shadowFilter } = useHoverNodeAnimation({
    container: containerRef.current,
    isHovered,
    isSelected,
  });
  const isFitViewAnimating = useTreeStore((s) => s.isFitViewAnimating);
  const fitViewTargetScale = useTreeStore((s) => s.fitViewTargetScale);
  useCardAnimation({
    cardRef,
    isZoomedOut,
    memberId: member.id,
    isFitViewAnimating,
    fitViewTargetScale,
  });

  const handleClick = useCallback(
    (e: FederatedPointerEvent) => {
      e.stopPropagation();
      onClick(member, teamId);
    },
    [member, teamId, onClick],
  );

  // The tooltip only exists while it is needed (and while it fades out).
  const [isTooltipMounted, setIsTooltipMounted] = useState(false);
  const handleTooltipHidden = useCallback(() => setIsTooltipMounted(false), []);
  useEffect(() => {
    if (isZoomedOut && isHovered) setIsTooltipMounted(true);
  }, [isZoomedOut, isHovered]);

  const handlePointerEnter = useCallback(() => {
    if (!isCameraMoving()) setIsHovered(true);
  }, []);
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
    if ((!isHovered && !isSelected) || !shadowFilter) return EMPTY_FILTERS;
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
        interactiveChildren={false}
        hitArea={isZoomedOut ? AVATAR_HIT_AREA : NODE_HIT_AREA}
        cursor="pointer"
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onClick={handleClick}
        onTap={handleClick}
        filters={filters}
        cullable
        cullArea={CULL_AREA}
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
            teamRole={teamRole}
          />
        </pixiContainer>

        <MemberNodeAvatar
          nodeId={nodeId}
          photo={member.photo}
          memberName={member.name}
          placeholderColorIndex={placeholderColorIndex}
        />

        {isTooltipMounted && (
          <MemberNodeMinimizedTooltip
            text={member.name}
            visible={isZoomedOut && isHovered}
            placeholderColorIndex={placeholderColorIndex}
            onHidden={handleTooltipHidden}
          />
        )}
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
          <MemberBirthdayAnimation paused={!showBirthday} />
        </pixiContainer>
      )}
    </>
  );
};

export default memo(MemberNode);
