import { twMerge } from "tailwind-merge";
import type { TreeMode } from "@/types";

interface Props {
  value: TreeMode;
  onChange: (mode: TreeMode) => void;
}

const OPTIONS: { value: TreeMode; label: string }[] = [
  { value: "family", label: "Сім'ї" },
  { value: "grid", label: "Сітка" },
  { value: "team", label: "Команди" },
];

// How the canvas is laid out: family trees, a plain grid or team frames.
const ViewModeSwitch = ({ value, onChange }: Props) => (
  <div className="px-3 pb-1">
    <div
      role="radiogroup"
      aria-label="Розмітка"
      className="flex rounded-xl bg-foreground/5 p-0.5"
    >
      {OPTIONS.map((option) => (
        <button
          key={option.value}
          type="button"
          role="radio"
          aria-checked={value === option.value}
          onClick={() => onChange(option.value)}
          className={twMerge(
            "flex-1 rounded-lg py-1.5 text-xs font-medium transition-all duration-200",
            "focus:outline-none focus-visible:ring-1 focus-visible:ring-accent-green",
            value === option.value
              ? "bg-accent-green text-white shadow-sm"
              : "text-foreground/60 hover:text-foreground",
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  </div>
);

export default ViewModeSwitch;
