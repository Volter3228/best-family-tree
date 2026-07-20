import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor } from "@/types";

interface Props {
  message?: string;
  color?: AccentColor;
}

const FieldError = ({ message, color = "blue" }: Props) => {
  if (!message) return null;
  const colorClasses = COLOR_CLASSES[color];

  return (
    <p className={twMerge("absolute left-0 -bottom-6", colorClasses.text)}>
      {message}
    </p>
  );
};

export default FieldError;
