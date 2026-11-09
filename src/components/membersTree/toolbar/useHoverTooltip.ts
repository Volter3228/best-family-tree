import { useRef, useCallback, useState, useEffect } from "react";

const TOOLTIP_DELAY = 800;

/**
 * Shows a tooltip after the pointer rests on an element for TOOLTIP_DELAY ms.
 * Spread `handlers` onto the wrapper element and render `showTooltip` state
 * through ToolbarTooltip.
 */
const useHoverTooltip = () => {
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);

  const clearHoverTimer = useCallback(() => {
    if (hoverTimer.current) {
      clearTimeout(hoverTimer.current);
      hoverTimer.current = null;
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    clearHoverTimer();
    hoverTimer.current = setTimeout(() => setShowTooltip(true), TOOLTIP_DELAY);
  }, [clearHoverTimer]);

  const handleMouseMove = useCallback(() => {
    setShowTooltip(false);
    clearHoverTimer();
    hoverTimer.current = setTimeout(() => setShowTooltip(true), TOOLTIP_DELAY);
  }, [clearHoverTimer]);

  const handleMouseLeave = useCallback(() => {
    clearHoverTimer();
    setShowTooltip(false);
  }, [clearHoverTimer]);

  // Call before running the button's action so the tooltip hides on click.
  const hideTooltip = useCallback(() => {
    clearHoverTimer();
    setShowTooltip(false);
  }, [clearHoverTimer]);

  useEffect(() => clearHoverTimer, [clearHoverTimer]);

  return {
    showTooltip,
    hideTooltip,
    handlers: {
      onMouseEnter: handleMouseEnter,
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
    },
  };
};

export default useHoverTooltip;
