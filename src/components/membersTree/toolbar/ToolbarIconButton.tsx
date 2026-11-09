import { twMerge } from "tailwind-merge";
import type { AccentColor } from "@/types";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import useHoverTooltip from "./useHoverTooltip";
import ToolbarTooltip from "./ToolbarTooltip";

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
  const { showTooltip, hideTooltip, handlers } = useHoverTooltip();

  return (
    <div
      className="group relative flex flex-col items-center justify-end"
      style={{ transformOrigin: "50% 100%" }}
      {...handlers}
    >
      <ToolbarTooltip title={title} color={color} visible={showTooltip} />
      <button
        onClick={(e) => {
          hideTooltip();
          onClick(e);
        }}
        aria-label={title}
        className={twMerge(
          "flex h-11 w-11 items-center justify-center rounded-full focus:outline-hidden transition-[scale,translate,background-color,color] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] will-change-[scale,translate] group-hover:scale-[1.15] group-hover:-translate-y-1 active:scale-95",
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
