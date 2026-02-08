import { useCallback, useRef } from "react";
import { Viewport } from "pixi-viewport";
import gsap from "gsap";
import { Node } from "@xyflow/react";
import {
  MINIMIZED_VIEW_SCALE,
  NODE_HEIGHT,
  NODE_WIDTH,
} from "@/constants/pixi";

interface Props {
  nodes: Node[];
  viewport: Viewport | null;
  setScale: (scale: number) => void;
}

export const useFitViewAnimation = ({ nodes, viewport, setScale }: Props) => {
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const lodTriggeredRef = useRef<boolean>(false);

  return useCallback(
    (
      duration = 1,
      { width = window.innerWidth, height = window.innerHeight } = {},
    ) => {
      if (!viewport || nodes.length === 0 || width === 0 || height === 0)
        return;

      // Kill any existing fitView animation to prevent conflicts
      if (timelineRef.current) {
        timelineRef.current.kill();
      }

      let minX = Infinity;
      let minY = Infinity;
      let maxX = -Infinity;
      let maxY = -Infinity;

      for (let i = 0; i < nodes.length; i++) {
        const { x, y } = nodes[i].position;
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }

      maxX += NODE_WIDTH;
      maxY += NODE_HEIGHT;

      const graphWidth = maxX - minX;
      const graphHeight = maxY - minY;
      const padding = 100;

      const fullWidth = Math.max(graphWidth + padding * 2, 1);
      const fullHeight = Math.max(graphHeight + padding * 2, 1);

      const scaleX = width / fullWidth;
      const scaleY = height / fullHeight;
      const targetScale = Math.min(scaleX, scaleY, 1);

      const centerX = (minX + maxX) / 2;
      const centerY = (minY + maxY) / 2;

      const targetX = width / 2 - centerX * targetScale;
      const targetY = height / 2 - centerY * targetScale;

      lodTriggeredRef.current = false;

      const timeline = gsap.timeline({
        onUpdate: () => {
          if (
            !lodTriggeredRef.current &&
            viewport.scale.x < MINIMIZED_VIEW_SCALE
          ) {
            setScale(viewport.scale.x);
            lodTriggeredRef.current = true;
          }
        },
        onComplete: () => {
          setScale(targetScale);
          timelineRef.current = null;
        },
      });

      timeline.to(
        viewport,
        {
          x: targetX,
          y: targetY,
          duration: duration,
          ease: "power3.inOut",
        },
        0,
      );

      timeline.to(
        viewport.scale,
        {
          x: targetScale,
          y: targetScale,
          duration: duration,
          ease: "power3.inOut",
        },
        0,
      );

      timelineRef.current = timeline;
    },
    [nodes, viewport, setScale],
  );
};
