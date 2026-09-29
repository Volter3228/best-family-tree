import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor } from "@/types";

interface Props {
  checked: boolean;
  label: string;
  color: AccentColor;
  onChange: (checked: boolean) => void;
}

const FormCheckbox = ({ checked, label, color, onChange }: Props) => (
  <label
    className="flex items-center gap-1 text-xs text-foreground/70"
    onClick={(event) => {
      event.preventDefault();
      onChange(!checked);
    }}
  >
    <input
      type="checkbox"
      className="peer sr-only"
      checked={checked}
      onChange={(event) => onChange(event.target.checked)}
    />
    <span
      className={twMerge(
        "flex h-4 w-4 items-center justify-center rounded border bg-surface text-[11px] font-bold leading-none text-transparent transition-all duration-150 peer-checked:text-surface peer-focus-visible:ring-2",
        checked ? "border-transparent" : COLOR_CLASSES[color].border,
        COLOR_CLASSES[color].accentRing,
      )}
      style={
        checked
          ? {
            backgroundColor: `var(--accent-${color})`,
            borderColor: `var(--accent-${color})`,
          }
          : undefined
      }
      aria-hidden="true"
    >
      ✓
    </span>
    <span>{label}</span>
  </label>
);

export default FormCheckbox;
