import { memo, useMemo, useState, useEffect, useCallback, useRef } from "react";
import { Container, Filter, Rectangle } from "pixi.js";
import gsap from "gsap";
import {
  useTapWithoutDrag,
  useHoverNodeAnimation,
  useCardAnimation,
  CARD_PIVOT_X,
  CARD_PIVOT_Y,
} from "@/hooks";
import { Member } from "@/models";
import { birthdayVisibleSignal, zoomedOutSignal } from "@/store/treeSignals";
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
  teamRole?: string;
  teamId?: string;
  x: number;
  y: number;
  onClick: (member: Member, teamId?: string) => void;
}

const EMPTY_FILTERS: Filter[] = [];
// Culling box in world coordinates (Pixi compares cullArea with the view as
// is): the avatar and the card below it, with room for the hover glow.
const CULL_MARGIN = 80;
const getCullArea = (x: number, y: number) =>
  new Rectangle(
    x - CULL_MARGIN,
    y - CULL_MARGIN,
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
const NODE_PIVOT = { x: CONTENT_CENTER_X, y: CONTENT_CENTER_Y };
const CARD_PIVOT = { x: CARD_PIVOT_X, y: CARD_PIVOT_Y };

const MemberNode = ({
  nodeId,
  x,
  y,
  member,
  placeholderColorIndex,
  isSelected,
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
  // Zoom thresholds reach the node through store signals, not props: a prop
  // would re-render every node (culled or not) in the frame it flips.
  useCardAnimation({ cardRef, memberId: member.id });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const applyHitArea = (isZoomedOut: boolean) => {
      container.hitArea = isZoomedOut ? AVATAR_HIT_AREA : NODE_HIT_AREA;
    };
    applyHitArea(zoomedOutSignal.get());
    return zoomedOutSignal.subscribe(applyHitArea);
  }, []);

  const handleSelect = useCallback(
    () => onClick(member, teamId),
    [member, teamId, onClick],
  );
  // A drag that starts on the node pans the tree; it only selects the member
  // when it was a quick, tiny slip of a click.
  const tap = useTapWithoutDrag(handleSelect);

  // The tooltip only exists while it is needed (and while it fades out).
  const [isTooltipMounted, setIsTooltipMounted] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const handleTooltipHidden = useCallback(() => setIsTooltipMounted(false), []);
  // Only the hovered node follows the zoom state.
  useEffect(() => {
    if (!isHovered) {
      setIsTooltipVisible(false);
      return;
    }
    setIsTooltipVisible(zoomedOutSignal.get());
    return zoomedOutSignal.subscribe(setIsTooltipVisible);
  }, [isHovered]);
  useEffect(() => {
    if (isTooltipVisible) setIsTooltipMounted(true);
  }, [isTooltipVisible]);

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
    if ((!isHovered && !isSelected) || !shadowFilter) return EMPTY_FILTERS;
    return [shadowFilter];
  }, [isHovered, isSelected, shadowFilter]);

  const cullArea = useMemo(() => getCullArea(x, y), [x, y]);

  const isBirthday = useMemo(() => member.isBirthdayToday(), [member.birthday]);
  const birthdayRef = useRef<Container>(null);
  const [showBirthday, setShowBirthday] = useState(birthdayVisibleSignal.get);
  // Only birthday nodes follow the zoom state.
  useEffect(() => {
    if (!isBirthday) return;
    setShowBirthday(birthdayVisibleSignal.get());
    return birthdayVisibleSignal.subscribe(setShowBirthday);
  }, [isBirthday]);

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
        pivot={NODE_PIVOT}
        zIndex={isHovered ? 1000 : 0}
        eventMode="static"
        interactiveChildren={false}
        cursor="pointer"
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onPointerDown={tap.onPointerDown}
        onClick={tap.onClick}
        onTap={tap.onClick}
        filters={filters}
        cullable
        cullableChildren={false}
        cullArea={cullArea}
      >
        <pixiContainer
          ref={cardRef}
          pivot={CARD_PIVOT}
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
            visible={isTooltipVisible}
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
          cullableChildren={false}
          cullArea={cullArea}
        >
          <MemberBirthdayAnimation paused={!showBirthday} />
        </pixiContainer>
      )}
    </>
  );
};

export default memo(MemberNode);
