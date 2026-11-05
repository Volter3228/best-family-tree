import SegmentedSwitch from "@/components/ui/SegmentedSwitch";
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
    <SegmentedSwitch
      options={OPTIONS}
      value={value}
      onChange={onChange}
      ariaLabel="Розмітка"
    />
  </div>
);

export default ViewModeSwitch;
