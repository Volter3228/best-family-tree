import { twMerge } from "tailwind-merge";
import CheckBox from "./CheckBox";

interface Props {
  checked: boolean;
  onChange: () => void;
  label: string;
  disabled?: boolean;
}

// A standalone checkbox row. Its box sits on the content edge, like the rows
// of CheckListFilter.
const FilterCheckbox = ({ checked, onChange, label, disabled = false }: Props) => (
  <label
    className={twMerge(
      "group flex items-center gap-2.5 text-sm text-foreground pointer-coarse:min-h-10",
      disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
    )}
  >
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      disabled={disabled}
      onClick={onChange}
      className="relative rounded focus:outline-none focus:ring-1 focus:ring-accent-green"
    >
      <CheckBox
        checked={checked}
      />
    </button>
    {label}
  </label>
);

export default FilterCheckbox;
