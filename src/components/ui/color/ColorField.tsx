import { useId, useState } from "react";
import { CheckIcon, PlusIcon } from "@heroicons/react/16/solid";
import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import { useT } from "@/i18n/useT";
import type { Messages } from "@/i18n/messages";
import type { AccentColor } from "@/types";
import ColorPickerPanel from "./ColorPickerPanel";

const PRESETS: { value: string; name: keyof Messages["ui"]["colorNames"] }[] = [
  { value: "#f97316", name: "orange" },
  { value: "#ef4444", name: "red" },
  { value: "#eab308", name: "yellow" },
  { value: "#22c55e", name: "green" },
  { value: "#14b8a6", name: "teal" },
  { value: "#0ea5e9", name: "sky" },
  { value: "#6366f1", name: "indigo" },
  { value: "#a855f7", name: "purple" },
];

const FALLBACK = "#6366f1";

interface Props {
  // Lowercase `#rrggbb`; undefined means no color.
  value?: string;
  onChange: (value?: string) => void;
  color?: AccentColor;
  label?: string;
}

const swatchBase =
  "relative flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-150 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface";

// Preset swatches plus a "custom" swatch that expands an inline picker.
const ColorField = ({ value, onChange, color = "blue", label }: Props) => {
  const t = useT().ui;
  const colorClasses = COLOR_CLASSES[color];
  const isPreset = PRESETS.some((p) => p.value === value);
  const isCustom = !!value && !isPreset;
  const [open, setOpen] = useState(false);
  const labelId = useId();

  const ringStyle = (hex: string) =>
    ({ "--tw-ring-color": hex }) as React.CSSProperties;

  return (
    <div className="flex w-full flex-col">
      <div className="mb-1.5 flex items-center justify-between">
        <span id={labelId} className="text-sm font-semibold text-foreground">
          {label ?? t.colorLabel}
        </span>
        {value && (
          <button
            type="button"
            onClick={() => {
              onChange(undefined);
              setOpen(false);
            }}
            className={twMerge(
              "rounded-full px-2 py-0.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2",
              colorClasses.text,
              colorClasses.hoverSurfaceBg,
              colorClasses.focusVisibleRingSoft,
            )}
          >
            {t.reset}
          </button>
        )}
      </div>
      <div
        role="radiogroup"
        aria-labelledby={labelId}
        className="flex flex-wrap gap-2"
      >
        {PRESETS.map((preset) => {
          const selected = preset.value === value;
          return (
            <button
              key={preset.value}
              type="button"
              role="radio"
              aria-checked={selected}
              aria-label={t.colorNames[preset.name]}
              title={t.colorNames[preset.name]}
              onClick={() => onChange(preset.value)}
              className={twMerge(
                swatchBase,
                selected && "ring-2 ring-offset-2 ring-offset-surface",
              )}
              style={{
                backgroundColor: preset.value,
                ...(selected ? ringStyle(preset.value) : {}),
              }}
            >
              {selected && <CheckIcon className="h-4 w-4 text-white" />}
            </button>
          );
        })}
        <button
          type="button"
          aria-expanded={open}
          aria-label={t.customColor}
          title={t.customColor}
          onClick={() => setOpen((o) => !o)}
          className={twMerge(
            swatchBase,
            isCustom && "ring-2 ring-offset-2 ring-offset-surface",
          )}
          style={
            isCustom
              ? { backgroundColor: value, ...ringStyle(value) }
              : {
                  background:
                    "conic-gradient(#ef4444, #eab308, #22c55e, #0ea5e9, #a855f7, #ef4444)",
                }
          }
        >
          {isCustom ? (
            <CheckIcon className="h-4 w-4 text-white" />
          ) : (
            <PlusIcon className="h-4 w-4 text-white drop-shadow" />
          )}
        </button>
      </div>
      <div
        className={twMerge(
          "grid transition-[grid-template-rows] duration-200 ease-out motion-reduce:transition-none",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden" inert={!open}>
          <div className="pt-3">
            <ColorPickerPanel
              value={value ?? FALLBACK}
              onChange={onChange}
              color={color}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorField;
