import { useState, useCallback } from "react";

const PANEL_CLOSE_DURATION = 200;

export const usePanelToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, PANEL_CLOSE_DURATION);
  }, []);

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
