import { useCallback, useRef } from "react";
import type { FederatedPointerEvent } from "pixi.js";

// Pointer travel (screen px) after which a press counts as a drag.
const CLICK_MOVE_TOLERANCE = 6;

/**
 * Click/tap handlers for canvas items that sit on a draggable viewport: a press
 * that moved more than a few pixels is a pan, not a click.
 */
export const useTapWithoutDrag = (onTap: () => void) => {
  const pointerDownRef = useRef<{ x: number; y: number } | null>(null);

  const onPointerDown = useCallback((event: FederatedPointerEvent) => {
    pointerDownRef.current = { x: event.global.x, y: event.global.y };
  }, []);

  const onClick = useCallback(
    (event: FederatedPointerEvent) => {
      const down = pointerDownRef.current;
      if (
        down &&
        Math.hypot(event.global.x - down.x, event.global.y - down.y) >
          CLICK_MOVE_TOLERANCE
      ) {
        return;
      }
      event.stopPropagation();
      onTap();
    },
    [onTap],
  );

  return { onPointerDown, onClick };
};
