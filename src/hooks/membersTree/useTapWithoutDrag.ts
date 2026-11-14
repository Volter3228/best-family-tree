import { useCallback, useEffect, useRef } from "react";
import type { FederatedPointerEvent } from "pixi.js";
import { LONG_PRESS_MS, TAP_MOVE_TOLERANCE } from "@/constants/canvas";
import { isTapGesture } from "@/utils/membersTree";

interface PressStart {
  x: number;
  y: number;
  time: number;
}

/**
 * Click/tap handlers for canvas items that sit on a draggable viewport: a press
 * that became a pan (far or slow) is not a click. A touch held still for
 * LONG_PRESS_MS calls `onLongPress` instead, and its release selects nothing.
 */
export const useTapWithoutDrag = (
  onTap: () => void,
  onLongPress?: () => void,
) => {
  const pressRef = useRef<PressStart | null>(null);
  const longPressedRef = useRef(false);
  const stopWatchingRef = useRef<(() => void) | null>(null);
  const onLongPressRef = useRef(onLongPress);
  useEffect(() => {
    onLongPressRef.current = onLongPress;
  }, [onLongPress]);

  const stopWatching = useCallback(() => {
    stopWatchingRef.current?.();
    stopWatchingRef.current = null;
  }, []);

  useEffect(() => stopWatching, [stopWatching]);

  const watchLongPress = useCallback(
    (startX: number, startY: number) => {
      stopWatching();
      const timer = window.setTimeout(() => {
        stopWatching();
        longPressedRef.current = true;
        onLongPressRef.current?.();
      }, LONG_PRESS_MS);
      // Screen coordinates are fine here: only the distance moved matters.
      const handleMove = (e: PointerEvent) => {
        if (Math.hypot(e.clientX - startX, e.clientY - startY) > TAP_MOVE_TOLERANCE) {
          stopWatching();
        }
      };
      window.addEventListener("pointermove", handleMove);
      window.addEventListener("pointerup", stopWatching);
      window.addEventListener("pointercancel", stopWatching);
      stopWatchingRef.current = () => {
        window.clearTimeout(timer);
        window.removeEventListener("pointermove", handleMove);
        window.removeEventListener("pointerup", stopWatching);
        window.removeEventListener("pointercancel", stopWatching);
      };
    },
    [stopWatching],
  );

  const onPointerDown = useCallback(
    (event: FederatedPointerEvent) => {
      pressRef.current = {
        x: event.global.x,
        y: event.global.y,
        time: performance.now(),
      };
      longPressedRef.current = false;
      if (onLongPressRef.current && event.pointerType === "touch") {
        watchLongPress(event.client.x, event.client.y);
      }
    },
    [watchLongPress],
  );

  const onClick = useCallback(
    (event: FederatedPointerEvent) => {
      const press = pressRef.current;
      pressRef.current = null;
      if (longPressedRef.current) {
        longPressedRef.current = false;
        event.stopPropagation();
        return;
      }
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
