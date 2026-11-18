import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import { useT } from "@/i18n/useT";
import type { AccentColor } from "@/types";

interface Props {
  isSubmitting?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children?: Readonly<React.ReactNode>;
  color?: AccentColor;
}

const ClearButton = ({
  isSubmitting = false,
  onClick,
  children,
  color = "blue",
}: Props) => {
  const colorClasses = COLOR_CLASSES[color];
  const t = useT().formCommon;
  return (
    <button
      className={twMerge(
        "h-11 touch-manipulation whitespace-nowrap rounded-full px-5 text-sm font-semibold transition-colors duration-150 focus:outline-none focus-visible:ring-2 disabled:opacity-50",
        colorClasses.text,
        colorClasses.softBg,
        colorClasses.softBgStrongHover,
        colorClasses.focusVisibleRingSoft,
      )}
      onClick={onClick}
      type="button"
      disabled={isSubmitting}
    >
      <span>{children || t.clear}</span>
    </button>
  );
};

export default ClearButton;
