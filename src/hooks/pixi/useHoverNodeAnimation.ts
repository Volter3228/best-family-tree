"use client";

import { useState, useRef, useCallback, useMemo } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { HOVER_SCALE } from "@/components/pixi-tree/pixiNode/constants";
import { DropShadowFilter } from "pixi-filters";

// Register the hook for better performance/safety
gsap.registerPlugin(useGSAP);

const ANIMATION_DURATION = 0.3;

interface Props {
  isHovered: boolean;
  isMinimized: boolean;
  isSelected: boolean;
  zoom: number;
}

const getTargetScaleHandler =
  (isHovered: boolean, isMinimized: boolean, zoom: number) => () => {
    if (!isHovered) return 1;
    if (isMinimized) {
      if (zoom < 0.05) return 5;
      if (zoom < 0.1) return 3.5;
      if (zoom < 0.15) return 2.5;
      if (zoom < 0.2) return 2;
      if (zoom < 0.4) return 1.5;
    }
    return HOVER_SCALE;
  };

const useHoverNodeAnimation = ({
  isHovered,
  isMinimized,
  isSelected,
  zoom,
}: Props) => {
  const [scale, setScale] = useState(1);
  const scaleRef = useRef({ value: 1 });

  const shadowFilter = useMemo(
    () =>
      new DropShadowFilter({
        color: 0xffffff,
        blur: 0,
        alpha: 0,
        resolution: window.devicePixelRatio || 1,
        quality: 7,
      }),
    []
  );

  const getTargetScale = useCallback(
    getTargetScaleHandler(isHovered, isMinimized, zoom),
    [isHovered, isMinimized, zoom]
  );

  useGSAP(() => {
    const targetScale = getTargetScale();
    gsap.killTweensOf(scaleRef.current);

    gsap.to(scaleRef.current, {
      value: targetScale,
      duration: ANIMATION_DURATION,
      ease: "power2.out",
      onUpdate: () => {
        console.log("here");
        setScale(scaleRef.current.value);
      },
    });

    const shouldShowShadow = isHovered || isSelected;

    gsap.to(shadowFilter, {
      blur: shouldShowShadow ? 12 : 0,
      alpha: shouldShowShadow ? 0.7 : 0,
      duration: 0.3,
      ease: "power2.out",
    });
  }, [isHovered, isMinimized, zoom, isSelected]);

  return { scale, shadowFilter };
};

export default useHoverNodeAnimation;
