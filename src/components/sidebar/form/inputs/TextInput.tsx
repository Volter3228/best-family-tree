import InputLabel from "./InputLabel";
import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import { formInputClasses } from "./inputClasses";
import type { AccentColor } from "@/types";

interface Props {
  id?: string;
  name: string;
  value: string;
  placeholder?: string;
  label?: string;
  required?: boolean;
  onChange: (text: string) => void;
  type?: "text" | "email";
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  autoCapitalize?: string;
  spellCheck?: boolean;
  onEnter?: () => void;
  invalid?: boolean;
  disabled?: boolean;
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
  type = "text",
  autoComplete = "off",
  inputMode,
  autoCapitalize,
  spellCheck,
  onEnter,
  invalid = false,
  disabled = false,
  color = "blue",
  icon: Icon,
}: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const colorClasses = COLOR_CLASSES[color];

  return (
    <div>
      <InputLabel
        label={label}
        htmlFor={id || name}
        required={required}
        color={color}
      />
      <input
        id={id || name}
        name={name}
        onChange={handleChange}
        value={value}
        type={type}
        inputMode={inputMode}
        autoCapitalize={autoCapitalize}
        spellCheck={spellCheck}
        disabled={disabled}
        aria-invalid={invalid || undefined}
        onKeyDown={
          onEnter
            ? (e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  onEnter();
                }
              }
            : undefined
        }
        placeholder={placeholder}
        className={formInputClasses(
          color,
          Icon && "pr-10",
          invalid && "border-accent-orange ring-2 ring-accent-orange/30",
          disabled && "cursor-not-allowed opacity-60",
        )}
        autoComplete={autoComplete}
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
    </div>
  );
};

export default TextInput;
