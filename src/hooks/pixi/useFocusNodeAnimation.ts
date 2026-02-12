import { useCallback, useRef } from "react";
import { Viewport } from "pixi-viewport";
import gsap from "gsap";
import { Node } from "@xyflow/react";
import { getIsMinimized } from "@/libs/pixi";
import { NODE_HEIGHT, NODE_WIDTH } from "@/constants/pixi";

interface Props {
  nodes: Node[];
  viewport: Viewport | null;
  setScale: (scale: number) => void;
}

export const useFocusNodeAnimation = ({ nodes, viewport, setScale }: Props) => {
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const lodTriggeredRef = useRef<boolean>(false);

  return useCallback(
    (nodeId: string) => {
      if (!viewport || nodes.length === 0) return;

      const node = nodes.find((n) => n.id === nodeId);
      if (!node) return;

      // Kill any existing animation
      if (timelineRef.current) {
        timelineRef.current.kill();
      }

      // Calculate target position (center of the node)
      const nodeCenterX = node.position.x + NODE_WIDTH / 2;
      const nodeCenterY = node.position.y + NODE_HEIGHT / 2;

      // Get current viewport state
      const isMinimizedOnStart = getIsMinimized(viewport.scale.x);

      // Determine view center offset (accounting for drawer)
      const drawerElement = document.getElementById("member-drawer");
      const drawerWidth = drawerElement ? drawerElement.offsetWidth : 0;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // The center point of the visible area (left of drawer)
      const visibleCenterX = (windowWidth - drawerWidth) / 2;
      const visibleCenterY = windowHeight / 2;

      // Target scale calculation
      const TARGET_SCALE = 0.7; // Using 0.7 to ensure we are in "Maximized" view to see the node details.

      // Calculate target viewport position
      const targetViewportX = visibleCenterX - nodeCenterX * TARGET_SCALE;
      const targetViewportY = visibleCenterY - nodeCenterY * TARGET_SCALE;

      lodTriggeredRef.current = false;

      const timeline = gsap.timeline({
        onUpdate: () => {
          // Sync external scale state if needed
          // Only update if we cross the threshold and haven't triggered yet
          if (
            !lodTriggeredRef.current &&
            isMinimizedOnStart &&
            !getIsMinimized(viewport.scale.x)
          ) {
            setScale(viewport.scale.x);
            lodTriggeredRef.current = true;
          }
        },
        onComplete: () => {
          setScale(TARGET_SCALE);
          timelineRef.current = null;
        },
      });

      const duration = 1.5;

      // Animation logic
      timeline.to(
        viewport,
        {
          x: targetViewportX,
          y: targetViewportY,
          duration: duration,
          ease: "power3.inOut",
        },
        0,
      );

      timeline.to(
        viewport.scale,
        {
          x: TARGET_SCALE,
          y: TARGET_SCALE,
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
