import { twMerge } from "tailwind-merge";

interface Props {
  checked: boolean;
  onChange: () => void;
  label: string;
}

const FilterCheckbox = ({ checked, onChange, label }: Props) => {
  return (
    <label className="flex items-center gap-2.5 text-sm text-foreground cursor-pointer group">
      <button
        type="button"
        role="checkbox"
        aria-checked={checked}
        onClick={onChange}
        className={twMerge(
          "relative flex h-4 w-4 shrink-0 items-center justify-center rounded transition-all duration-150",
          "border-2 border-foreground/30 group-hover:border-accent-green",
          "focus:outline-none focus:ring-1 focus:ring-accent-green",
          checked
            ? "border-transparent bg-accent-green drop-shadow-lg drop-shadow-accent-green/50"
            : "bg-transparent",
        )}
      />
      {label}
    </label>
  );
};

export default FilterCheckbox;
