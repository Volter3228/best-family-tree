import { useCallback, useRef } from "react";

// Vertical travel (px) after which a press on the handle counts as a swipe.
const SWIPE_DISTANCE = 28;

/**
 * Pointer handlers for the sidebar's minimize handle: a tap toggles, a swipe
 * down minimizes and a swipe up expands.
 */
export const useSidebarSwipe = (
  isMinimized: boolean,
  onMinimizedChange: (minimized: boolean) => void,
) => {
  const startYRef = useRef<number | null>(null);

  const onPointerDown = useCallback((event: React.PointerEvent) => {
    startYRef.current = event.clientY;
    event.currentTarget.setPointerCapture(event.pointerId);
  }, []);

  const onPointerUp = useCallback(
    (event: React.PointerEvent) => {
      const startY = startYRef.current;
      startYRef.current = null;
      if (startY === null) return;
      const delta = event.clientY - startY;
      if (delta >= SWIPE_DISTANCE) onMinimizedChange(true);
      else if (delta <= -SWIPE_DISTANCE) onMinimizedChange(false);
      else if (Math.abs(delta) < SWIPE_DISTANCE / 2) {
        onMinimizedChange(!isMinimized);
      }
    },
    [isMinimized, onMinimizedChange],
  );

  const onPointerCancel = useCallback(() => {
    startYRef.current = null;
  }, []);

  return { onPointerDown, onPointerUp, onPointerCancel };
};
