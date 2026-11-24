import { twMerge } from "tailwind-merge";
import type { AccentColor } from "@/types";

interface Props {
  label: string;
  // Omitted for controls that are not a single input (e.g. a segmented switch).
  htmlFor?: string;
  required: boolean;
  onClick?: () => void;
  // Shown right after the label text (and its required mark).
  hint?: React.ReactNode;
  // Kept for call-site compatibility: labels are neutral, not accented.
  color?: AccentColor;
}

const InputLabel = ({ label, htmlFor, required, onClick, hint }: Props) => {
  const text = (
    <label
      htmlFor={htmlFor}
      onClick={onClick}
      className={twMerge(
        "block text-sm font-semibold text-foreground",
        !hint && "mb-1.5",
        required && "after:ml-0.5 after:text-foreground/40 after:content-['*']",
      )}
    >
      {label}
    </label>
  );
  if (!hint) return text;
  return (
    <div className="mb-1.5 flex items-center gap-1">
      {text}
      {hint}
    </div>
  );
};

export default InputLabel;
