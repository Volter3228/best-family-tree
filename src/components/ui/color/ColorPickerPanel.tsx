import { HexColorInput, HexColorPicker } from "react-colorful";
import { EyeDropperIcon } from "@heroicons/react/24/outline";
import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor } from "@/types";

interface EyeDropperApi {
  open: () => Promise<{ sRGBHex: string }>;
}

interface Props {
  value: string;
  onChange: (value: string) => void;
  color: AccentColor;
}

// Saturation/hue picker with a hex field. Expands inline inside ColorField.
const ColorPickerPanel = ({ value, onChange, color }: Props) => {
  const colorClasses = COLOR_CLASSES[color];
  const canPick = typeof window !== "undefined" && "EyeDropper" in window;

  const pickFromScreen = async () => {
    try {
      const EyeDropper = (window as unknown as { EyeDropper: new () => EyeDropperApi })
        .EyeDropper;
      const { sRGBHex } = await new EyeDropper().open();
      onChange(sRGBHex.toLowerCase());
    } catch {
      // Cancelled by the user.
    }
  };

  return (
    <div className={twMerge("flex flex-col gap-3 rounded-2xl p-3", colorClasses.softBg)}>
      <HexColorPicker
        className="color-picker"
        color={value}
        onChange={(next) => onChange(next.toLowerCase())}
      />
      <div className="flex items-center gap-2">
        <span
          aria-hidden
          className="h-10 w-10 shrink-0 rounded-xl border border-foreground/10"
          style={{ backgroundColor: value }}
        />
        <HexColorInput
          prefixed
          alpha={false}
          color={value}
          onChange={(next) => onChange(next.toLowerCase())}
          aria-label="Hex-код кольору"
          className={twMerge(
            "block h-10 w-full min-w-0 rounded-xl border bg-surface px-3 text-sm uppercase tabular-nums text-foreground transition-colors focus:outline-none focus:ring-2",
            colorClasses.softBorder,
            colorClasses.softBorderHover,
            colorClasses.focusBorder,
            colorClasses.focusRingSoft,
          )}
        />
        {canPick && (
          <button
            type="button"
            onClick={pickFromScreen}
            aria-label="Вибрати колір на екрані"
            title="Піпетка"
            className={twMerge(
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors focus:outline-none focus-visible:ring-2",
              colorClasses.text,
              colorClasses.softBg,
              colorClasses.softBgStrongHover,
              colorClasses.focusVisibleRingSoft,
            )}
          >
            <EyeDropperIcon className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ColorPickerPanel;
