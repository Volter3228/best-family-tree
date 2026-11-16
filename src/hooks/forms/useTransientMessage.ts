import { useCallback, useEffect, useRef, useState } from "react";

const VISIBLE_MS = 2000;

// A message that hides itself after a moment. Showing it again, even with the
// same text, restarts the countdown.
export const useTransientMessage = () => {
  const [message, setMessage] = useState<string | null>(null);
  const timeoutRef = useRef<number | undefined>(undefined);

  const hide = useCallback(() => {
    window.clearTimeout(timeoutRef.current);
    setMessage(null);
  }, []);

  const show = useCallback((text: string) => {
    window.clearTimeout(timeoutRef.current);
    setMessage(text);
    timeoutRef.current = window.setTimeout(() => setMessage(null), VISIBLE_MS);
  }, []);

  useEffect(() => () => window.clearTimeout(timeoutRef.current), []);

  return [message, show, hide] as const;
};
