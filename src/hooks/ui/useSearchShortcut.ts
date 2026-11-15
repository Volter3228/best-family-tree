import { useEffect, useRef } from "react";
import { isEditableTarget, isSearchShortcut } from "./searchShortcut";

// Runs `onTrigger` on Ctrl+F while focus is not in a text field, and suppresses
// the browser's find bar. The latest callback is read on each press, so the
// listener is attached once.
export const useSearchShortcut = (onTrigger: () => void) => {
  const onTriggerRef = useRef(onTrigger);

  useEffect(() => {
    onTriggerRef.current = onTrigger;
  });

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!isSearchShortcut(e) || isEditableTarget(e.target)) return;
      e.preventDefault();
      onTriggerRef.current();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);
};
