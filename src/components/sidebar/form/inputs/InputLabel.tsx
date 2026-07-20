import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor } from "@/types";

interface Props {
  label: string;
  htmlFor: string;
  required: boolean;
  onClick?: () => void;
  color?: AccentColor;
}

const InputLabel = ({
  label,
  htmlFor,
  required,
  onClick,
  color = "blue",
}: Props) => {
  return (
    <label
      htmlFor={htmlFor}
      onClick={onClick}
      className={twMerge(
        "block mb-1",
        required &&
          `after:content-['*'] after:ml-0.5 ${COLOR_CLASSES[color].afterText}`,
      )}
    >
      {label}
    </label>
  );
};

export default InputLabel;
