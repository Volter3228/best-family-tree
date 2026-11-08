import { useCallback, useRef } from "react";
import type { FederatedPointerEvent } from "pixi.js";
import { isTapGesture } from "@/utils/membersTree";

interface PressStart {
  x: number;
  y: number;
  time: number;
}

/**
 * Click/tap handlers for canvas items that sit on a draggable viewport: a press
 * that became a pan (far or slow) is not a click.
 */
export const useTapWithoutDrag = (onTap: () => void) => {
  const pressRef = useRef<PressStart | null>(null);

  const onPointerDown = useCallback((event: FederatedPointerEvent) => {
    pressRef.current = {
      x: event.global.x,
      y: event.global.y,
      time: performance.now(),
    };
  }, []);

  const onClick = useCallback(
    (event: FederatedPointerEvent) => {
      const press = pressRef.current;
      pressRef.current = null;
      if (press) {
        const distance = Math.hypot(
          event.global.x - press.x,
          event.global.y - press.y,
        );
        if (!isTapGesture(distance, performance.now() - press.time)) {
          return;
        }
      }
      event.stopPropagation();
      onTap();
    },
    [onTap],
  );

  return { onPointerDown, onClick };
};
