import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor } from "@/types";

interface Props {
  error?: string | null;
  success?: string | null;
  color?: AccentColor;
}

// Result of the last submit, shown right above the action buttons.
const FormMessages = ({ error, success, color = "blue" }: Props) => (
  <>
    {error && (
      <p className={twMerge("text-sm", COLOR_CLASSES[color].text)}>{error}</p>
    )}
    {success && (
      <p className="w-full rounded-lg bg-green-500/10 px-3 py-2 text-sm text-green-600 dark:text-green-300">
        {success}
      </p>
    )}
  </>
);

export default FormMessages;
