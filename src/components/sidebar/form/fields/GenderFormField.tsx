import { Gender, type AccentColor } from "@/types";
import SegmentedControl, { type SegmentOption } from "../SegmentedControl";
import InputLabel from "../inputs/InputLabel";

const GENDER_OPTIONS: readonly SegmentOption<Gender>[] = [
  { value: Gender.Male, label: "Чоловіча" },
  { value: Gender.Female, label: "Жіноча" },
];

interface Props {
  value: Gender | null;
  onChange: (gender: Gender) => void;
  color?: AccentColor;
}

// Optional: nothing is selected until one is picked, and there is no way to
// clear it, so a stored gender can never be emptied from the form.
const GenderFormField = ({ value, onChange, color = "blue" }: Props) => (
  <div className="flex flex-col flex-1 relative">
    <InputLabel label="Стать" required={false} color={color} />
    <SegmentedControl
      options={GENDER_OPTIONS}
      value={value}
      onChange={onChange}
      color={color}
    />
  </div>
);

export default GenderFormField;
