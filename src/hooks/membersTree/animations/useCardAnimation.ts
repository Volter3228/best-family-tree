import { useEffect, useMemo, useRef, type RefObject } from "react";
import { Container } from "pixi.js";
import gsap from "gsap";
import {
  NODE_WIDTH,
  NODE_AVATAR_SIZE,
  NODE_AVATAR_RADIUS,
} from "@/constants/canvas";

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

interface Props {
  cardRef: RefObject<Container | null>;
  isZoomedOut: boolean;
  memberId: string;
}

export const useCardAnimation = ({ cardRef, isZoomedOut, memberId }: Props) => {
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const isInitialMount = useRef(true);
  const delay = useMemo(() => getCardAnimDelay(memberId), [memberId]);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // On first mount set initial state without animation
    if (isInitialMount.current) {
      isInitialMount.current = false;
      if (isZoomedOut) {
        card.visible = false;
        card.alpha = 0;
        card.scale.set(COLLAPSED_SCALE_X, COLLAPSED_SCALE_Y);
        card.y = SLIDE_START_Y;
      }
      return;
    }

    tlRef.current?.kill();

    if (!isZoomedOut) {
      // Zoom-in: card slides down from behind avatar center while expanding
      card.visible = true;
      card.alpha = 0;
      card.scale.set(COLLAPSED_SCALE_X, COLLAPSED_SCALE_Y);
      card.y = SLIDE_START_Y;

      const tl = gsap.timeline({ delay });
      tlRef.current = tl;
      tl.to(card, { alpha: 1, duration: 0.25, ease: "power2.out" }, 0)
        .to(card.scale, { x: 1, y: 1, duration: 0.4, ease: "back.out(1.5)" }, 0)
        .to(card, { y: CARD_PIVOT_Y, duration: 0.4, ease: "back.out(1.5)" }, 0);
    } else {
      // Zoom-out: card slides up behind avatar while shrinking
      const tl = gsap.timeline({
        delay,
        onComplete: () => {
          card.visible = false;
        },
      });
      tlRef.current = tl;
      tl.to(card, { alpha: 0, duration: 0.2, ease: "power2.in" }, 0)
        .to(
          card.scale,
          {
            x: COLLAPSED_SCALE_X,
            y: COLLAPSED_SCALE_Y,
            duration: 0.24,
            ease: "power2.in",
          },
          0,
        )
        .to(card, { y: SLIDE_START_Y, duration: 0.24, ease: "power2.in" }, 0);
    }

    return () => {
      tlRef.current?.kill();
    };
  }, [isZoomedOut, delay, cardRef]);
};
