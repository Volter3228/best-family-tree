import { useCallback, useRef } from "react";
import { Viewport } from "pixi-viewport";
import { CARD_VIEW_SCALE, NODE_HEIGHT, NODE_WIDTH } from "@/constants/canvas";
import type { MemberNode } from "@/types";
import gsap from "gsap";

interface Props {
  nodes: MemberNode[];
  viewport: Viewport | null;
  setScale: (scale: number) => void;
  setIsFitViewAnimating: (value: boolean) => void;
  setFitViewTargetScale: (scale: number | null) => void;
}

export const getFitViewTargetScale = (
  nodes: MemberNode[],
  width = window.innerWidth,
  height = window.innerHeight,
) => {
  if (nodes.length === 0 || width === 0 || height === 0) return 1;

  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;

  for (const node of nodes) {
    const { x, y } = node.position;
    minX = Math.min(minX, x);
    minY = Math.min(minY, y);
    maxX = Math.max(maxX, x);
    maxY = Math.max(maxY, y);
  }

  const padding = 100;
  const graphWidth = maxX - minX + NODE_WIDTH + padding * 2;
  const graphHeight = maxY - minY + NODE_HEIGHT + padding * 2;
  const scaleX = width / Math.max(graphWidth, 1);
  const scaleY = height / Math.max(graphHeight, 1);

  return Math.min(scaleX, scaleY, 1);
};

export const useFitViewAnimation = ({
  nodes,
  viewport,
  setScale,
  setIsFitViewAnimating,
  setFitViewTargetScale,
}: Props) => {
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const lodTriggeredRef = useRef<boolean>(false);

  return useCallback(
    (
      duration = 1,
      {
        width = window.innerWidth,
        height = window.innerHeight,
      }: { width?: number; height?: number } = {},
    ) => {
      if (!viewport || nodes.length === 0 || width === 0 || height === 0)
        return;

      // Kill any existing fitView animation to prevent conflicts
      if (timelineRef.current) {
        timelineRef.current.kill();
      }

      const targetScale = getFitViewTargetScale(nodes, width, height);

      let minX = Infinity;
      let minY = Infinity;
      let maxX = -Infinity;
      let maxY = -Infinity;

      for (const node of nodes) {
        minX = Math.min(minX, node.position.x);
        minY = Math.min(minY, node.position.y);
        maxX = Math.max(maxX, node.position.x + NODE_WIDTH);
        maxY = Math.max(maxY, node.position.y + NODE_HEIGHT);
      }

      const centerX = (minX + maxX) / 2;
      const centerY = (minY + maxY) / 2;

      const targetX = width / 2 - centerX * targetScale;
      const targetY = height / 2 - centerY * targetScale;

      lodTriggeredRef.current = false;
      setFitViewTargetScale(targetScale);
      setIsFitViewAnimating(true);

      const timeline = gsap.timeline({
        onUpdate: () => {
          if (!lodTriggeredRef.current && viewport.scale.x < CARD_VIEW_SCALE) {
            setScale(viewport.scale.x);
            lodTriggeredRef.current = true;
          }
        },
        onComplete: () => {
          setScale(targetScale);
          setIsFitViewAnimating(false);
          setFitViewTargetScale(null);
          timelineRef.current = null;
        },
        onInterrupt: () => {
          setIsFitViewAnimating(false);
          setFitViewTargetScale(null);
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
    [nodes, viewport, setScale, setIsFitViewAnimating, setFitViewTargetScale],
  );
};
