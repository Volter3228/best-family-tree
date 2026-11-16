import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor } from "@/types";

interface Props {
  error?: string | null;
  color?: AccentColor;
}

// Form-level failure of the last submit, shown right above the action buttons.
// Successes are shown by the submit button (see SubmitButton `message`).
const FormMessages = ({ error, color = "blue" }: Props) =>
  error ? (
    <p className={twMerge("text-sm", COLOR_CLASSES[color].text)}>{error}</p>
  ) : null;

export default FormMessages;
