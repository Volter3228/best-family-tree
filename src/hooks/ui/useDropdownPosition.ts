import { useCallback, useEffect, useState, type RefObject } from "react";

interface Options {
  isOpen: boolean;
  anchorRef: RefObject<HTMLElement | null>;
  threshold?: number;
  offset?: number;
}

interface Position {
  top?: number;
  bottom?: number;
  left: number;
  width: number;
  maxHeight: number;
}

const VIEWPORT_MARGIN = 12;
const MIN_DROPDOWN_HEIGHT = 96;

// Keep portal dropdowns anchored and flip them up when space below is insufficient.
export const useDropdownPosition = ({
  isOpen,
  anchorRef,
  threshold = 300,
  offset = 4,
}: Options) => {
  const [position, setPosition] = useState<Position>({
    top: 0,
    left: 0,
    width: 0,
    maxHeight: threshold,
  });
  const [dropUp, setDropUp] = useState(false);

  const update = useCallback(() => {
    const anchorRect = anchorRef.current?.getBoundingClientRect();
    if (!anchorRect) return;

    const availableBelow =
      window.innerHeight - anchorRect.bottom - offset - VIEWPORT_MARGIN;
    const availableAbove = anchorRect.top - offset - VIEWPORT_MARGIN;
    const shouldDropUp =
      availableBelow < threshold && availableAbove > availableBelow;
    const availableHeight = shouldDropUp ? availableAbove : availableBelow;

    setDropUp(shouldDropUp);
    setPosition({
      ...(shouldDropUp
        ? { bottom: window.innerHeight - anchorRect.top + offset }
        : { top: anchorRect.bottom + offset }),
      left: anchorRect.left,
      width: anchorRect.width,
      maxHeight: Math.max(
        MIN_DROPDOWN_HEIGHT,
        Math.min(threshold, availableHeight),
      ),
    });
  }, [anchorRef, threshold, offset]);

  useEffect(() => {
    if (!isOpen) return;
    update();
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, true);
    // Reposition when the anchor itself resizes (e.g. a badge row wraps)
    const anchor = anchorRef.current;
    const observer = new ResizeObserver(update);
    if (anchor) observer.observe(anchor);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update, true);
      observer.disconnect();
    };
  }, [isOpen, update]);

  return { dropUp, position, update };
};
