import { memo, useMemo, useState, useEffect, useCallback, useRef } from "react";
import { Container, FederatedPointerEvent, Rectangle } from "pixi.js";
import {
  useTapWithoutDrag,
  useHoverNodeAnimation,
  useCardAnimation,
  CARD_PIVOT_X,
  CARD_PIVOT_Y,
} from "@/hooks";
import { Member } from "@/models";
import { zoomedOutSignal } from "@/store/treeSignals";
import {
  NODE_WIDTH,
  NODE_HEIGHT,
  NODE_CARD_TOP,
  NODE_CARD_HEIGHT,
} from "@/constants/canvas";
import MemberNodeAvatar from "./MemberNodeAvatar";
import MemberNodeMinimizedTooltip from "./MemberNodeMinimizedTooltip";
import MemberNodeCard from "./MemberNodeCard";
import MemberNodeGlow from "./MemberNodeGlow";
import MemberNodeBirthday from "./MemberNodeBirthday";

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
// Each hovered node rises above the previous one and stays there: dropping the
// zIndex on leave would sort every sibling again.
let hoverOrder = 10;

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
  const [hoverZIndex, setHoverZIndex] = useState(0);
  const containerRef = useRef<Container>(null);
  const cardRef = useRef<Container>(null);

  const { glowMounted, shouldShowGlow } = useHoverNodeAnimation({
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
  // A touch held still shows the hover state instead (and selects nothing).
  const startHover = useCallback(() => {
    setIsHovered(true);
    setHoverZIndex(++hoverOrder);
  }, []);
  const tap = useTapWithoutDrag(handleSelect, startHover);

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

  // A tap makes the browser report pointer enter, but the matching leave is not
  // reliably delivered for touch, so the node stayed hovered until another tap.
  // Touch does not hover on enter: a tap selects, a long press hovers (below).
  const handlePointerEnter = useCallback((event: FederatedPointerEvent) => {
    if (event.pointerType === "touch") return;
    startHover();
  }, [startHover]);
  const handlePointerLeave = useCallback(() => setIsHovered(false), []);

  useEffect(() => {
    if (!isHovered) return;

    const handlePointerMove = (e: PointerEvent) => {
      if (!(e.target instanceof HTMLCanvasElement)) {
        setIsHovered(false);
      }
    };

    // A long-press hover has no pointer leave: the next touch ends it.
    const handlePointerDown = (e: PointerEvent) => {
      if (e.pointerType === "touch") setIsHovered(false);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerdown", handlePointerDown);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isHovered]);

  const cullArea = useMemo(() => getCullArea(x, y), [x, y]);

  const isBirthday = useMemo(() => member.isBirthdayToday(), [member.birthday]);

  return (
    <>
      <pixiContainer
        ref={containerRef}
        x={x + CONTENT_CENTER_X}
        y={y + CONTENT_CENTER_Y}
        pivot={NODE_PIVOT}
        zIndex={hoverZIndex}
        eventMode="static"
        interactiveChildren={false}
        cursor="pointer"
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onPointerDown={tap.onPointerDown}
        onClick={tap.onClick}
        onTap={tap.onClick}
        cullable
        cullableChildren={false}
        cullArea={cullArea}
      >
        {glowMounted && (
          <MemberNodeGlow kind="avatar" active={shouldShowGlow} />
        )}
        <pixiContainer ref={cardRef} pivot={CARD_PIVOT} x={CARD_PIVOT_X}>
          {glowMounted && (
            <MemberNodeGlow kind="card" active={shouldShowGlow} />
          )}
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
        <MemberNodeBirthday
          x={x + CONTENT_CENTER_X}
          y={y + CONTENT_CENTER_Y}
          cullArea={cullArea}
        />
      )}
    </>
  );
};

export default memo(MemberNode);
