import { useState, useCallback } from "react";

const PANEL_CLOSE_DURATION = 200;

export const usePanelToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    // Skip the closing phase on a panel that is not open, so a stray
    // `close` cannot block another panel's toggle during the timeout.
    if (!isOpen) return;
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, PANEL_CLOSE_DURATION);
  }, [isOpen]);

  const toggle = useCallback(
    (onBeforeOpen?: () => void) => {
      if (isClosing) return;

      if (isOpen) {
        close();
      } else {
        onBeforeOpen?.();
        open();
      }
    },
    [isOpen, isClosing, open, close],
  );

  return { isOpen, isClosing, open, close, toggle } as const;
};
