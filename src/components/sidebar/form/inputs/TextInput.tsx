import InputLabel from "./InputLabel";
import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor } from "@/types";

interface Props {
  id?: string;
  name: string;
  value: string;
  placeholder?: string;
  label?: string;
  required?: boolean;
  onChange: (text: string) => void;
  color?: AccentColor;
  icon?:
    | React.FC
    | React.ForwardRefExoticComponent<
        React.PropsWithoutRef<React.SVGProps<SVGSVGElement>>
      >;
}

const TextInput = ({
  id,
  name = "",
  placeholder = "",
  label = "",
  required = false,
  value,
  onChange,
  color = "blue",
  icon: Icon,
}: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const colorClasses = COLOR_CLASSES[color];

  return (
    <>
      <InputLabel
        label={label}
        htmlFor={name}
        required={required}
        color={color}
      />
      <input
        id={id || name}
        name={name}
        onChange={handleChange}
        value={value}
        type="text"
        placeholder={placeholder}
        className={twMerge(
          "block w-full pl-3",
          Icon ? "pr-10" : "pr-3",
          "py-2 rounded-xl shadow-inner font-light",
          "placeholder:text-placeholder focus:outline-hidden focus:ring-2",
          "transition-all duration-200 ease-out bg-surface",
          colorClasses.border,
          colorClasses.accentRing,
          colorClasses.caret,
        )}
        autoComplete="off"
        required={required}
      />
      {!!Icon && (
        <div className="relative">
          <div
            className={twMerge(
              "absolute -top-9 h-8 w-8 right-0 pr-2 flex items-center pointer-events-none",
              colorClasses.text,
              colorClasses.fill,
            )}
          >
            <Icon />
          </div>
        </div>
      )}
    </>
  );
};

export default TextInput;
