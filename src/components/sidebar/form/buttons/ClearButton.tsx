import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
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
  return (
    <button
      className={twMerge(
        "w-full h-10 rounded-full font-semibold focus:outline-hidden focus:ring-2 transition-colors duration-300 ease-in-out group-hover:opacity-50",
        colorClasses.text,
        colorClasses.hoverSurfaceBg,
        colorClasses.accentRing,
      )}
      onClick={onClick}
      type="button"
      disabled={isSubmitting}
    >
      <span>{children || "Очистити"}</span>
    </button>
  );
};

export default ClearButton;
