import { twMerge } from "tailwind-merge";
import Spinner from "@/components/ui/Spinner";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor } from "@/types";
import SuccessBubble from "../SuccessBubble";

interface Props {
  isSubmitting?: boolean;
  // Id of the form to submit when the button is rendered outside of it.
  form?: string;
  children: Readonly<React.ReactNode>;
  color?: AccentColor;
  disabled?: boolean;
  // Floats above the button, centred on it, after a successful save.
  message?: string | null;
}

const SubmitButton = ({
  isSubmitting = false,
  form,
  children,
  color = "blue",
  disabled = false,
  message,
}: Props) => {
  return (
    <div className="relative flex-1">
      <button
        className={twMerge(
          "flex h-11 w-full touch-manipulation items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold text-white shadow-sm transition-[background-color,color,box-shadow,scale,filter] duration-200 enabled:hover:shadow-lg enabled:hover:brightness-110 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:cursor-default disabled:shadow-none disabled:active:scale-100",
          COLOR_CLASSES[color].accentBg,
          COLOR_CLASSES[color].focusVisibleRing,
          "disabled:opacity-40",
        )}
        type="submit"
        form={form}
        disabled={isSubmitting || disabled}
      >
        {isSubmitting && <Spinner className="h-5 w-5 mr-2" />}
        {children}
      </button>
      {message && <SuccessBubble message={message} />}
    </div>
  );
};

export default SubmitButton;
