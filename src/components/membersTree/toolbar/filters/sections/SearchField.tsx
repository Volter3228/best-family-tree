import { twMerge } from "tailwind-merge";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { FILTER_INPUT_CLASSES } from "@/constants/filters";

interface Props {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  className?: string;
}

// Search input for the checklists. The id lets a section title label it.
const SearchField = ({ id, value, onChange, placeholder, className }: Props) => (
  <div className={twMerge("relative mb-1", className)}>
    <MagnifyingGlassIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 stroke-foreground/60" />
    <input
      id={id}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      autoComplete="off"
      className={twMerge(FILTER_INPUT_CLASSES, "pl-9")}
    />
  </div>
);

export default SearchField;
