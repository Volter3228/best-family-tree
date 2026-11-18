import { useEffect } from "react";

// The front sidebar of a stack publishes its width as --front-sheet-width, so
// the one behind it knows how far to step aside to keep its edge visible.
export const useFrontSheetWidth = (
  element: HTMLElement | null,
  active: boolean,
) => {
  useEffect(() => {
    if (!element || !active) return;
    const root = document.documentElement;
    const observer = new ResizeObserver(([entry]) => {
      root.style.setProperty(
        "--front-sheet-width",
        `${entry.borderBoxSize[0].inlineSize}px`,
      );
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [element, active]);
};
