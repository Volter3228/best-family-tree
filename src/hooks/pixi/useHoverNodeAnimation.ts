import { useMemo } from "react";
import { Container } from "pixi.js";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { getIsMinimized } from "@/libs/pixi";
import {
  NODE_HOVER_SCALE,
  NODE_HOVER_ANIMATION_DURATION,
  MINIMIZED_NODE_HOVERED_SCALE_MAP,
} from "@/constants/pixi";
import { DropShadowFilter } from "pixi-filters";

const calculateTargetScale = (appScale: number, isHovered: boolean) => {
  if (!isHovered) return 1;

  const isMinimized = getIsMinimized(appScale);
  if (isMinimized) {
    for (const [scale, targetScale] of MINIMIZED_NODE_HOVERED_SCALE_MAP) {
      if (appScale < scale) return targetScale;
    }
  }

  return NODE_HOVER_SCALE;
};

interface Props {
  container: Container | null;
  appScale: number;
  isHovered: boolean;
  isSelected: boolean;
}

export const useHoverNodeAnimation = ({
  container,
  appScale,
  isHovered,
  isSelected,
}: Props) => {
  const shadowFilter = useMemo(() => {
    const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;
    return new DropShadowFilter({
      color: 0xffffff,
      alpha: 0,
      offset: { x: 0, y: 0 },
      resolution: Math.max(dpr, 2),
      quality: 5,
      shadowOnly: false,
    });
  }, []);

  useGSAP(() => {
    if (!container) return;

    const targetScale = calculateTargetScale(appScale, isHovered);

    gsap.to(container.scale, {
      x: targetScale,
      y: targetScale,
      duration: NODE_HOVER_ANIMATION_DURATION,
      ease: "power2.out",
      overwrite: "auto",
    });

    const shouldShowShadow = isHovered || isSelected;
    gsap.to(shadowFilter, {
      blur: shouldShowShadow ? 8 : 0,
      alpha: shouldShowShadow ? 0.6 : 0,
      duration: NODE_HOVER_ANIMATION_DURATION / 2,
      ease: "power1.out",
      overwrite: "auto",
    });
  }, [isHovered, appScale, isSelected]);

  return { shadowFilter };
};
