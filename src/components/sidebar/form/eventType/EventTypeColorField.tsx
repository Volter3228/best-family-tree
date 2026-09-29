import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor } from "@/types";

interface Props {
  value?: string;
  onChange: (value?: string) => void;
  color?: AccentColor;
}

const EventTypeColorField = ({ value, onChange, color = "blue" }: Props) => {
  const colorClasses = COLOR_CLASSES[color];

  return (
    <div className="flex flex-col w-full gap-2">
      <label className="text-sm font-medium text-foreground/80">Колір</label>
      <div className="flex items-center gap-3">
        <div
          className="relative h-10 w-10 overflow-hidden rounded-full border border-surface-border"
          style={{
            background: value
              ? value
              : "repeating-conic-gradient(#d1d5db 0% 25%, #f9fafb 0% 50%) 50% / 10px 10px",
          }}
        >
          <input
            type="color"
            value={value || "#ffffff"}
            onChange={(event) => onChange(event.target.value)}
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
            aria-label="Колір івенту"
          />
        </div>
        {value && (
          <button
            type="button"
            onClick={() => onChange(undefined)}
            className={twMerge(
              "px-2 py-1 rounded-lg text-sm transition-colors duration-200",
              colorClasses.text,
              colorClasses.hoverSurfaceBg,
            )}
          >
            Скинути
          </button>
        )}
      </div>
    </div>
  );
};

export default EventTypeColorField;
