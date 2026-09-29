import { twMerge } from "tailwind-merge";
import Spinner from "@/components/ui/Spinner";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor } from "@/types";

interface Props {
  isSubmitting?: boolean;
  children: Readonly<React.ReactNode>;
  color?: AccentColor;
}

const SubmitButton = ({
  isSubmitting = false,
  children,
  color = "blue",
}: Props) => {
  return (
    <button
      className={twMerge(
        "w-full h-10 rounded-full text-white font-semibold focus:outline-hidden focus:ring-2 transition-all duration-300 ease-in-out hover:brightness-80",
        COLOR_CLASSES[color].accentBg,
        COLOR_CLASSES[color].surfaceRing,
      )}
      type="submit"
      disabled={isSubmitting}
    >
      {isSubmitting && <Spinner className="h-5 w-5 mr-2" />}
      {children}
    </button>
  );
};

export default SubmitButton;
