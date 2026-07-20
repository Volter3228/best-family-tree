import { useRef, useCallback } from "react";
import { ViewfinderCircleIcon } from "@heroicons/react/24/outline";
import gsap from "gsap";
import type { AccentColor } from "@/types";

interface Props {
  onClick: () => void;
  color: AccentColor;
}

const FitViewButton = ({ onClick, color }: Props) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const iconWrapRef = useRef<HTMLSpanElement>(null);

  const accent = `var(--accent-${color})`;
  const surface = `var(--surface-${color})`;

  const handleClick = useCallback(() => {
    if (btnRef.current && iconWrapRef.current) {
      const btn = btnRef.current;
      const iconWrap = iconWrapRef.current;
      const root = document.documentElement;
      const accentVal = getComputedStyle(root)
        .getPropertyValue(`--accent-${color}`)
        .trim();
      const surfaceVal = getComputedStyle(root)
        .getPropertyValue(`--surface-${color}`)
        .trim();

      gsap.to(btn, {
        backgroundColor: accentVal,
        duration: 0.15,
        ease: "power2.in",
      });
      gsap.to(iconWrap, {
        color: "#fff",
        rotation: 360,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(btn, {
            backgroundColor: surfaceVal,
            duration: 0.8,
            ease: "power2.inOut",
          });
          gsap.to(iconWrap, {
            color: accentVal,
            rotation: 0,
            duration: 0.9,
            ease: "power3.inOut",
          });
        },
      });
    }
    onClick();
  }, [onClick, color]);

  return (
    <div
      className="group relative flex flex-col items-center justify-end"
      style={{ transformOrigin: "50% 100%" }}
    >
      <button
        ref={btnRef}
        onClick={handleClick}
        style={{ backgroundColor: surface, color: accent }}
        className="flex h-11 w-11 items-center justify-center rounded-full focus:outline-hidden transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] will-change-transform group-hover:scale-[1.15] group-hover:-translate-y-1 active:scale-95"
      >
        <span ref={iconWrapRef} className="flex items-center justify-center">
          <ViewfinderCircleIcon className="h-5 w-5" />
        </span>
      </button>
    </div>
  );
};

export default FitViewButton;
