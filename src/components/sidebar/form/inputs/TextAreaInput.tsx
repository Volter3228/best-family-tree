import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor } from "@/types";
import InputLabel from "./InputLabel";

interface Props {
  name: string;
  value: string;
  onChange: (text: string) => void;
  label?: string;
  placeholder?: string;
  rows?: number;
  color?: AccentColor;
}

const TextAreaInput = ({
  name,
  value,
  onChange,
  label = "",
  placeholder = "",
  rows = 3,
  color = "blue",
}: Props) => {
  const colorClasses = COLOR_CLASSES[color];

  return (
    <>
      <InputLabel label={label} htmlFor={name} required={false} color={color} />
      <textarea
        id={name}
        name={name}
        rows={rows}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className={twMerge(
          "block w-full resize-none px-3 py-2 rounded-xl shadow-inner font-light bg-surface",
          "placeholder:text-placeholder focus:outline-hidden focus:ring-2",
          "transition-all duration-200 ease-out",
          colorClasses.border,
          colorClasses.accentRing,
          colorClasses.caret,
        )}
      />
    </>
  );
};

export default TextAreaInput;
