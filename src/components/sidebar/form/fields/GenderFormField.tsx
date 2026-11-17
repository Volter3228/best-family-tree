import { useMemo, type ComponentType } from "react";
import { twMerge } from "tailwind-merge";
import { GENDER_OPTIONS } from "@/constants/filters";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import { GENDER_ICONS } from "@/components/ui/GenderIcons";
import ChipGroup from "@/components/ui/ChipGroup";
import type { AccentColor, Gender } from "@/types";
import InputLabel from "../inputs/InputLabel";

interface Props {
  value: Gender | null;
  onChange: (gender: Gender) => void;
  color?: AccentColor;
}

// Optional: nothing is selected until one is picked, and there is no way to
// clear it, so a stored gender can never be emptied from the form. The sign
// icons take the accent color when idle and turn white when chosen.
const GenderFormField = ({ value, onChange, color = "blue" }: Props) => {
  const options = useMemo(() => {
    const idleText = COLOR_CLASSES[color].text;
    return GENDER_OPTIONS.map((option) => {
      const Icon = GENDER_ICONS[option.value];
      const TintedIcon: ComponentType<{ className?: string }> = ({
        className,
      }) => <Icon className={twMerge(idleText, className)} />;
      return { ...option, icon: TintedIcon };
    });
  }, [color]);

  return (
    <div className="flex flex-col relative">
      <InputLabel label="Стать" required={false} color={color} />
      <ChipGroup
        label="Стать"
        options={options}
        value={value ?? undefined}
        onChange={onChange}
        color={color}
        className="mt-1"
        fill
      />
    </div>
  );
};

export default GenderFormField;
