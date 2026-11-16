import { twMerge } from "tailwind-merge";
import CheckBox from "./CheckBox";

interface Props {
  label: string;
  checked: boolean;
  onToggle: () => void;
}

// A list row with a box. It spans the content width; the box state alone shows
// whether the row is ticked, so the tint only marks hover.
const CheckRow = ({ label, checked, onToggle }: Props) => (
  <button
    type="button"
    role="checkbox"
    aria-checked={checked}
    onClick={onToggle}
    className={twMerge(
      "flex h-8 shrink-0 items-center gap-2.5 rounded-xl px-2 text-left text-sm transition-colors duration-150 hover:bg-accent-green/10 focus:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-accent-green",
      checked ? "text-foreground" : "text-foreground/80",
    )}
  >
    <CheckBox checked={checked} />
    <span className="min-w-0 truncate">{label}</span>
  </button>
);

export default CheckRow;
