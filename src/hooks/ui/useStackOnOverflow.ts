import { useEffect, useLayoutEffect, useRef, useState } from "react";

/**
 * Tells whether an element that is laid out on one line does not fit into its
 * parent, so it can switch to a stacked (multi-row) layout that only takes the
 * width it needs. Re-measures when `contentKey` or the parent's width changes.
 */
export const useStackOnOverflow = (contentKey: string) => {
  const ref = useRef<HTMLElement>(null);
  const [parentWidth, setParentWidth] = useState(0);
  const [stackedKey, setStackedKey] = useState<string | null>(null);

  const measureKey = `${contentKey}|${parentWidth}`;
  const stacked = stackedKey === measureKey;

  useEffect(() => {
    const parent = ref.current?.parentElement;
    if (!parent) return;
    const observer = new ResizeObserver(() =>
      setParentWidth(parent.clientWidth),
    );
    observer.observe(parent);
    return () => observer.disconnect();
  }, []);

  // Measured in the single-row layout, before the browser paints.
  useLayoutEffect(() => {
    const element = ref.current;
    if (!element || stacked) return;
    if (element.scrollWidth > element.clientWidth + 1) {
      setStackedKey(measureKey);
    }
  }, [measureKey, stacked]);

  return { ref, stacked };
};
