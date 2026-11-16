import { useState } from "react";
import { Container } from "pixi.js";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { isZoomedOut } from "@/utils";
import {
  NODE_HOVER_SCALE,
  NODE_HOVER_ANIMATION_DURATION,
  ZOOMED_OUT_HOVER_SCALE_MAP,
} from "@/constants/canvas";

const calculateTargetScale = (appScale: number, isHovered: boolean) => {
  if (!isHovered) return 1;

  if (isZoomedOut(appScale)) {
    for (const [scale, targetScale] of ZOOMED_OUT_HOVER_SCALE_MAP) {
      if (appScale < scale) return targetScale;
    }
  }

  return NODE_HOVER_SCALE;
};

interface Props {
  container: Container | null;
  isHovered: boolean;
  isSelected: boolean;
}

export const useHoverNodeAnimation = ({
  container,
  isHovered,
  isSelected,
}: Props) => {
  // The glow sprites are mounted on first hover/selection: most nodes never
  // need one.
  const shouldShowGlow = isHovered || isSelected;
  const [glowMounted, setGlowMounted] = useState(false);
  if (shouldShowGlow && !glowMounted) setGlowMounted(true);

  useGSAP(() => {
    if (!container) return;

    const appScale = Math.abs(container.parent?.worldTransform?.a || 1);
    const targetScale = calculateTargetScale(appScale, isHovered);

    gsap.to(container.scale, {
      x: targetScale,
      y: targetScale,
      duration: NODE_HOVER_ANIMATION_DURATION,
      ease: "power2.out",
      overwrite: "auto",
    });
  }, [isHovered]);

  return { glowMounted, shouldShowGlow };
};
