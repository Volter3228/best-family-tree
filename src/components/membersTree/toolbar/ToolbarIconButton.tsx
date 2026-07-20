import { useRef, useCallback, useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import type { AccentColor } from "@/types";
import { COLOR_CLASSES } from "@/constants/colorClasses";

const TOOLTIP_DELAY = 800;

interface Props {
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  icon: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>>
  >;
  color: AccentColor;
  isActive?: boolean;
  showBadge?: boolean;
  className?: string;
}

const ToolbarIconButton = ({
  title,
  onClick,
  icon: Icon,
  color,
  isActive = false,
  showBadge = false,
  className = "",
}: Props) => {
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);

  const clearHoverTimer = () => {
    if (hoverTimer.current) {
      clearTimeout(hoverTimer.current);
      hoverTimer.current = null;
    }
  };

  const handleMouseEnter = useCallback(() => {
    clearHoverTimer();
    hoverTimer.current = setTimeout(() => setShowTooltip(true), TOOLTIP_DELAY);
  }, []);

  const handleMouseMove = useCallback(() => {
    setShowTooltip(false);
    clearHoverTimer();
    hoverTimer.current = setTimeout(() => setShowTooltip(true), TOOLTIP_DELAY);
  }, []);

  const handleMouseLeave = useCallback(() => {
    clearHoverTimer();
    setShowTooltip(false);
  }, []);

  useEffect(() => () => clearHoverTimer(), []);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      clearHoverTimer();
      setShowTooltip(false);
      onClick(e);
    },
    [onClick],
  );

  return (
    <div
      className="group relative flex flex-col items-center justify-end"
      style={{ transformOrigin: "50% 100%" }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <span
        className={twMerge(
          "pointer-events-none absolute -top-8 z-10 whitespace-nowrap rounded-md px-2 py-0.5 text-xs font-medium text-white transition-[opacity,transform] duration-200 ease-out",
          COLOR_CLASSES[color].accentBg,
          showTooltip ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1",
        )}
      >
        {title}
      </span>
      <button
        onClick={handleClick}
        className={twMerge(
          "flex h-11 w-11 items-center justify-center rounded-full focus:outline-hidden transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] will-change-transform group-hover:scale-[1.15] group-hover:-translate-y-1 active:scale-95",
          isActive
            ? `${COLOR_CLASSES[color].accentBg} text-white`
            : `${COLOR_CLASSES[color].surfaceBg} ${COLOR_CLASSES[color].text}`,
          className,
        )}
      >
        <span className="flex items-center justify-center">
          <Icon className="h-5 w-5" />
        </span>
        {showBadge && (
          <span
            className={twMerge(
              "absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2",
              COLOR_CLASSES[color].border,
              COLOR_CLASSES[color].accentBg,
            )}
          />
        )}
      </button>
      {isActive && (
        <span
          className={`absolute -bottom-1.5 h-1 w-1 rounded-full ${COLOR_CLASSES[color].accentBg}`}
        />
      )}
    </div>
  );
};

export default ToolbarIconButton;
