import { type RefObject, useCallback, useEffect, useRef } from "react";
import { Container, FederatedPointerEvent } from "pixi.js";

// Shared across cards so the most recently hovered one is always on top.
let hoverOrder = 10;

/**
 * Hover tracking for a pixi container that ignores pointer movement over HTML
 * overlays (pixi also reports those) and keeps stacking order sane: the newest
 * hovered card rises, and a card drops back immediately when it loses hover.
 */
export const useCardHover = (containerRef: RefObject<Container | null>) => {
  const hoveredRef = useRef(false);
  const moveListenerRef = useRef<((event: PointerEvent) => void) | null>(null);

  const stopHover = useCallback(() => {
    hoveredRef.current = false;
    if (containerRef.current) containerRef.current.zIndex = 0;
    if (moveListenerRef.current) {
      window.removeEventListener("pointermove", moveListenerRef.current);
      moveListenerRef.current = null;
    }
  }, [containerRef]);

  const startHover = useCallback(
    (e: FederatedPointerEvent) => {
      if (!(e.nativeEvent.target instanceof HTMLCanvasElement)) return;
      hoveredRef.current = true;
      if (containerRef.current) containerRef.current.zIndex = ++hoverOrder;
      if (moveListenerRef.current) return;
      moveListenerRef.current = (event) => {
        if (!(event.target instanceof HTMLCanvasElement)) stopHover();
      };
      window.addEventListener("pointermove", moveListenerRef.current);
    },
    [containerRef, stopHover],
  );

  useEffect(() => stopHover, [stopHover]);

  return { hoveredRef, startHover, stopHover };
};
