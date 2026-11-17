import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor } from "@/types";

interface Props {
  children: React.ReactNode;
  error?: string;
  color?: AccentColor;
}

// One input with its error message under it, in the flow so it never
// overlaps the next field.
const FormField = ({ children, error, color = "blue" }: Props) => (
  <div className="flex min-w-0 flex-col">
    {children}
    {error && (
      <p className={twMerge("mt-1 text-xs", COLOR_CLASSES[color].text)}>{error}</p>
    )}
  </div>
);

export default FormField;
