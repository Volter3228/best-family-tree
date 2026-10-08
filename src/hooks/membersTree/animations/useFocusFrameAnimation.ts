import { useCallback, useRef } from "react";
import { Viewport } from "pixi-viewport";
import gsap from "gsap";
import type { TeamFrame } from "@/types";
import { isZoomedOut } from "@/utils";

interface Props {
  viewport: Viewport | null;
  setScale: (scale: number) => void;
}

const FIT_PADDING = 160;
const DURATION = 1.2;

// Fit one team frame into the middle of the screen (no sidebar opens for it).
export const useFocusFrameAnimation = ({ viewport, setScale }: Props) => {
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  return useCallback(
    (frame: TeamFrame) => {
      if (!viewport) return;
      timelineRef.current?.kill();

      const visibleWidth = window.innerWidth;
      const visibleHeight = window.innerHeight;

      const targetScale = Math.min(
        visibleWidth / (frame.width + FIT_PADDING * 2),
        visibleHeight / (frame.height + FIT_PADDING * 2),
        1,
      );
      const targetX =
        visibleWidth / 2 - (frame.x + frame.width / 2) * targetScale;
      const targetY =
        visibleHeight / 2 - (frame.y + frame.height / 2) * targetScale;

      const wasZoomedOut = isZoomedOut(viewport.scale.x);
      let lodSynced = false;

      const timeline = gsap.timeline({
        onUpdate: () => {
          if (
            !lodSynced &&
            wasZoomedOut &&
            !isZoomedOut(viewport.scale.x)
          ) {
            setScale(viewport.scale.x);
            lodSynced = true;
          }
        },
        onComplete: () => {
          setScale(targetScale);
          timelineRef.current = null;
        },
      });

      timeline.to(
        viewport,
        { x: targetX, y: targetY, duration: DURATION, ease: "power3.inOut" },
        0,
      );
      timeline.to(
        viewport.scale,
        {
          x: targetScale,
          y: targetScale,
          duration: DURATION,
          ease: "power3.inOut",
        },
        0,
      );

      timelineRef.current = timeline;
    },
    [viewport, setScale],
  );
};
