import { memo, useRef } from "react";
import { Container } from "pixi.js";
import { useCardAnimation, CARD_PIVOT_X, CARD_PIVOT_Y } from "@/hooks";
import { Member } from "@/models";
import MemberNodeCard from "./MemberNodeCard";
import MemberNodeGlow from "./MemberNodeGlow";

interface Props {
  member: Member;
  isSelected: boolean;
  placeholderColorIndex: number;
  teamRole?: string;
  glowMounted: boolean;
  shouldShowGlow: boolean;
  // The card was built right after cards were revealed: play the reveal.
  animateIn: boolean;
}

const CARD_PIVOT = { x: CARD_PIVOT_X, y: CARD_PIVOT_Y };

// The card and its glow. It mounts lazily (see lazyCardDriver) and then stays.
const MemberNodeCardSlot = ({
  member,
  isSelected,
  placeholderColorIndex,
  teamRole,
  glowMounted,
  shouldShowGlow,
  animateIn,
}: Props) => {
  const cardRef = useRef<Container>(null);
  // Zoom thresholds reach the node through store signals, not props: a prop
  // would re-render every node (culled or not) in the frame it flips.
  useCardAnimation({ cardRef, memberId: member.id, animateIn });

  return (
    <pixiContainer ref={cardRef} pivot={CARD_PIVOT} x={CARD_PIVOT_X}>
      {glowMounted && <MemberNodeGlow kind="card" active={shouldShowGlow} />}
      <MemberNodeCard
        member={member}
        isSelected={isSelected}
        placeholderColorIndex={placeholderColorIndex}
        teamRole={teamRole}
      />
    </pixiContainer>
  );
};

export default memo(MemberNodeCardSlot);
