import { twMerge } from "tailwind-merge";
import type { AccentColor } from "@/types";

interface Props {
  label: string;
  // Omitted for controls that are not a single input (e.g. a segmented switch).
  htmlFor?: string;
  required: boolean;
  onClick?: () => void;
  // Kept for call-site compatibility: labels are neutral, not accented.
  color?: AccentColor;
}

const InputLabel = ({ label, htmlFor, required, onClick }: Props) => {
  return (
    <label
      htmlFor={htmlFor}
      onClick={onClick}
      className={twMerge(
        "mb-1.5 block text-sm font-semibold text-foreground",
        required && "after:ml-0.5 after:text-foreground/40 after:content-['*']",
      )}
    >
      {label}
    </label>
  );
};

export default InputLabel;
