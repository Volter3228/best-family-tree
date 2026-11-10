import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor } from "@/types";

interface Props {
  message: string | null;
  color?: AccentColor;
}

// Form-level failure (a save the server refused), above the action bar.
const FormError = ({ message, color = "blue" }: Props) => {
  if (!message) return null;
  return (
    <p
      role="alert"
      className={twMerge("mt-4 text-center", COLOR_CLASSES[color].text)}
    >
      {message}
    </p>
  );
};

export default FormError;
