import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor } from "@/types";

interface Props {
  label: string;
  icon: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>>
  >;
  children: React.ReactNode;
  // Corner action (copy, calendar link).
  action?: React.ReactNode;
  fullWidth?: boolean;
  breakAll?: boolean;
  // Makes the whole tile a button.
  onClick?: () => void;
  color?: AccentColor;
}

const MemberFactTile = ({
  label,
  icon: Icon,
  children,
  action,
  fullWidth = false,
  breakAll = false,
  onClick,
  color = "blue",
}: Props) => {
  const colorClasses = COLOR_CLASSES[color];
  const Root: React.ElementType = onClick ? "button" : "div";

  return (
    <Root
      type={onClick ? "button" : undefined}
      onClick={onClick}
      className={twMerge(
        "member-info-row relative min-w-0 rounded-2xl p-3 text-left transition-colors duration-200",
        colorClasses.softBg,
        onClick && twMerge("cursor-pointer", colorClasses.softBgHover),
        fullWidth && "col-span-2",
      )}
    >
      <span className={twMerge("flex items-center gap-1.5 text-sm text-foreground/60", action && "pr-7")}>
        <Icon className={twMerge("h-4 w-4 shrink-0", colorClasses.text)} />
        <span className="truncate">{label}</span>
      </span>
      <span
        className={twMerge(
          "mt-1 block min-w-0 text-base font-semibold",
          action && "pr-7",
          breakAll && "break-all",
        )}
      >
        {children}
      </span>
      {action && <span className="absolute right-2.5 top-2.5">{action}</span>}
    </Root>
  );
};

export default MemberFactTile;
