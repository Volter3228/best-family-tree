import { formInputClasses } from "./inputClasses";
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
  return (
    <div>
      <InputLabel label={label} htmlFor={name} required={false} color={color} />
      <textarea
        id={name}
        name={name}
        rows={rows}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className={formInputClasses(color, "h-auto resize-none py-2")}
      />
    </div>
  );
};

export default TextAreaInput;
