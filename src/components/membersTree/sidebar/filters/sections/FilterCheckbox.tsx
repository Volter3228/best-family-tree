import { twMerge } from "tailwind-merge";

interface Props {
  checked: boolean;
  onChange: () => void;
  label: string;
}

const FilterCheckbox = ({ checked, onChange, label }: Props) => {
  return (
    <label className="flex items-center gap-2.5 text-sm text-gray-100 cursor-pointer group">
      <button
        type="button"
        role="checkbox"
        aria-checked={checked}
        onClick={onChange}
        className={twMerge(
          "relative flex h-4 w-4 shrink-0 items-center justify-center rounded transition-all duration-150",
          "border-2 border-violet-500 group-hover:border-fuchsia-400",
          "focus:outline-none focus:ring-1 focus:ring-fuchsia-500",
          checked
            ? "border-transparent bg-fuchsia-500 drop-shadow-lg drop-shadow-fuchsia-500/50"
            : "bg-transparent",
        )}
      />
      {label}
    </label>
  );
};

export default FilterCheckbox;
