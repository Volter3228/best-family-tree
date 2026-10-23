import { useLayoutEffect, useMemo, useRef, type RefObject } from "react";
import { Container } from "pixi.js";
import {
  NODE_WIDTH,
  NODE_AVATAR_SIZE,
  NODE_AVATAR_RADIUS,
} from "@/constants/canvas";
import { finishCardReveal, registerCardReveal } from "./cardVisibilityDriver";

// Card animation pivot: top-center of the card (where it hides behind the avatar)
export const CARD_PIVOT_X = NODE_WIDTH / 2;
export const CARD_PIVOT_Y = Math.round((NODE_AVATAR_SIZE * 4) / 5);

// Collapsed scale values — narrow + slightly short, as if tucked behind the avatar
const COLLAPSED_SCALE_X = 0.4;
const COLLAPSED_SCALE_Y = 0.7;

// Y offset: card starts at avatar center and slides down to resting position
const SLIDE_START_Y = NODE_AVATAR_RADIUS;

const getCardAnimDelay = (id: string): number => {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = (hash * 31 + id.charCodeAt(i)) | 0;
  }
  return (Math.abs(hash) % 200) / 1000; // 0–0.2s
};

const applyShown = (card: Container): void => {
  card.visible = true;
  card.alpha = 1;
  card.scale.set(1, 1);
  card.y = CARD_PIVOT_Y;
};

const applyHidden = (card: Container): void => {
  card.visible = false;
  card.alpha = 0;
  card.scale.set(COLLAPSED_SCALE_X, COLLAPSED_SCALE_Y);
  card.y = SLIDE_START_Y;
};

interface Props {
  cardRef: RefObject<Container | null>;
  isZoomedOut: boolean;
  memberId: string;
  isFitViewAnimating: boolean;
  fitViewTargetScale: number | null;
}

export const useCardAnimation = ({
  cardRef,
  isZoomedOut,
  memberId,
  isFitViewAnimating,
  fitViewTargetScale,
}: Props) => {
  const appliedStateRef = useRef<"shown" | "hidden" | null>(null);
  const delay = useMemo(() => getCardAnimDelay(memberId), [memberId]);

  const hideForFitView = isFitViewAnimating && fitViewTargetScale !== null;
  const shouldBeHidden = isZoomedOut || hideForFitView;

  useLayoutEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // On first mount set initial state without animation
    if (appliedStateRef.current === null) {
      appliedStateRef.current = shouldBeHidden ? "hidden" : "shown";
      if (shouldBeHidden) applyHidden(card);
      return;
    }

    // Only animate on actual visibility transitions
    const targetState = shouldBeHidden ? "hidden" : "shown";
    if (targetState === appliedStateRef.current) return;
    appliedStateRef.current = targetState;

    if (!shouldBeHidden) card.visible = true;
    registerCardReveal(card, {
      direction: shouldBeHidden ? "hide" : "show",
      delay,
      finalize: shouldBeHidden ? applyHidden : applyShown,
      collapsedScaleX: COLLAPSED_SCALE_X,
      collapsedScaleY: COLLAPSED_SCALE_Y,
      slideStartY: SLIDE_START_Y,
      restY: CARD_PIVOT_Y,
    });

    return () => finishCardReveal(card);
  }, [shouldBeHidden, delay, cardRef]);
};
