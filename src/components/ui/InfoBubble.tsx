"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { InformationCircleIcon } from "@heroicons/react/16/solid";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  label?: string;
  className?: string;
}

const WIDTH = 240;
const MARGIN = 8;

interface Pos {
  left: number;
  bottom: number;
  width: number;
  tailX: number;
}

/** Small (i) button; click or tap opens a bubble with the text above it.
 * The bubble is portalled to <body> with fixed coordinates, so no parent's
 * overflow or stacking context can clip or cover it. */
const InfoBubble = ({ children, label = "Інформація", className }: Props) => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [pos, setPos] = useState<Pos | null>(null);
  const ref = useRef<HTMLSpanElement>(null);
  const bubbleRef = useRef<HTMLSpanElement>(null);

  const toggle = () => {
    if (!open) {
      const r = ref.current?.getBoundingClientRect();
      if (!r) return;
      const width = Math.min(WIDTH, window.innerWidth - MARGIN * 2);
      const center = r.left + r.width / 2;
      const left = Math.max(
        MARGIN,
        Math.min(center - width / 2, window.innerWidth - width - MARGIN),
      );
      setPos({
        left,
        bottom: window.innerHeight - r.top + 10,
        width,
        tailX: center - left,
      });
      setMounted(true);
    }
    setOpen((v) => !v);
  };

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    const onDown = (e: PointerEvent) => {
      const t = e.target as Node;
      if (!ref.current?.contains(t) && !bubbleRef.current?.contains(t)) close();
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", close);
    window.addEventListener("scroll", close, true);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", close);
      window.removeEventListener("scroll", close, true);
    };
  }, [open]);

  return (
    <span ref={ref} className={twMerge("relative inline-flex", className)}>
      <button
        type="button"
        aria-label={label}
        aria-expanded={open}
        onClick={toggle}
        className="rounded-full text-accent-blue transition-opacity hover:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue/60"
      >
        <InformationCircleIcon className="h-5 w-5" />
      </button>
      {mounted &&
        pos &&
        createPortal(
          <span
            ref={bubbleRef}
            className="fixed z-[100]"
            style={{ left: pos.left, bottom: pos.bottom, width: pos.width }}
          >
            <span
              role="tooltip"
              onAnimationEnd={() => !open && setMounted(false)}
              className={twMerge(
                "relative block rounded-xl bg-surface px-3 py-2 text-xs leading-snug font-normal text-foreground shadow-xl ring-1 ring-foreground/10",
                open ? "animate-fade-slide-down" : "animate-fade-slide-up",
              )}
            >
              {children}
              <span
                aria-hidden
                style={{ left: pos.tailX }}
                className="absolute -bottom-[5px] h-2.5 w-2.5 -translate-x-1/2 rotate-45 rounded-br-[2px] border-r border-b border-foreground/10 bg-surface"
              />
            </span>
          </span>,
          document.body,
        )}
    </span>
  );
};

export default InfoBubble;
