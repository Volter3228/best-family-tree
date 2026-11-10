import { twMerge } from "tailwind-merge";
import Spinner from "@/components/ui/Spinner";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor } from "@/types";

interface Props {
  isSubmitting?: boolean;
  // Id of the form to submit when the button is rendered outside of it.
  form?: string;
  children: Readonly<React.ReactNode>;
  color?: AccentColor;
  // Brand gradient instead of a single accent; it moves while submitting.
  gradient?: boolean;
  disabled?: boolean;
}

const SubmitButton = ({
  isSubmitting = false,
  form,
  children,
  color = "blue",
  gradient = false,
  disabled = false,
}: Props) => {
  return (
    <button
      className={twMerge(
        "flex items-center justify-center w-full h-10 rounded-full text-white font-semibold focus:outline-hidden focus:ring-2 transition-all duration-300 ease-in-out",
        gradient
          ? [
              // The label sits on the light green middle; a soft shadow keeps it readable.
              "brand-gradient [text-shadow:0_1px_3px_rgb(0_0_0/0.45)] hover:shadow-[-6px_4px_14px_-4px_color-mix(in_srgb,var(--accent-blue)_45%,transparent),0_6px_14px_-4px_color-mix(in_srgb,var(--accent-green)_45%,transparent),6px_4px_14px_-4px_color-mix(in_srgb,var(--accent-orange)_45%,transparent)] focus:shadow-[-6px_4px_14px_-4px_color-mix(in_srgb,var(--accent-blue)_45%,transparent),0_6px_14px_-4px_color-mix(in_srgb,var(--accent-green)_45%,transparent),6px_4px_14px_-4px_color-mix(in_srgb,var(--accent-orange)_45%,transparent)]",
              isSubmitting && "brand-gradient-moving",
            ]
          : [COLOR_CLASSES[color].accentBg, "hover:brightness-80 focus:brightness-80"],
        COLOR_CLASSES[color].surfaceRing,
      )}
      type="submit"
      form={form}
      disabled={isSubmitting || disabled}
    >
      {isSubmitting && <Spinner className="h-5 w-5 mr-2" />}
      {children}
    </button>
  );
};

export default SubmitButton;
