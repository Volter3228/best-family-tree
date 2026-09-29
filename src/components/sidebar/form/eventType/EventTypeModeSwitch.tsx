import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { EventTypeFormMode } from "@/hooks/forms";
import type { AccentColor } from "@/types";

interface Props {
  mode: EventTypeFormMode;
  onChange: (mode: EventTypeFormMode) => void;
  color?: AccentColor;
}

const OPTIONS: { mode: EventTypeFormMode; label: string }[] = [
  { mode: "create", label: "Створити" },
  { mode: "edit", label: "Редагувати" },
];

const EventTypeModeSwitch = ({ mode, onChange, color = "blue" }: Props) => {
  const colorClasses = COLOR_CLASSES[color];

  return (
    <div className="flex w-full mb-2 rounded-xl bg-surface/50 p-1">
      {OPTIONS.map((option) => (
        <button
          key={option.mode}
          type="button"
          onClick={() => onChange(option.mode)}
          className={twMerge(
            "flex-1 py-2 text-sm font-medium rounded-lg transition-all duration-200",
            mode === option.mode
              ? `${colorClasses.accentBg} text-white`
              : "text-foreground/60 hover:text-foreground",
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default EventTypeModeSwitch;
