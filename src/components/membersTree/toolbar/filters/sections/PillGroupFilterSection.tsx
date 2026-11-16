import { twMerge } from "tailwind-merge";
import FilterSection from "./FilterSection";

interface Option<T extends string> {
  value: T;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface Props<T extends string> {
  title: string;
  options: Option<T>[];
  // Empty means no filter; pressed pills are exactly the stored list.
  selected: T[];
  onChangeSelected: (next: T[]) => void;
}

const PillGroupFilterSection = <T extends string>({
  title,
  options,
  selected,
  onChangeSelected,
}: Props<T>) => {
  const handleClick = (value: T) => () => {
    const next = selected.includes(value)
      ? selected.filter((v) => v !== value)
      : [...selected, value];
    // Emit in options order so the stored list stays stable.
    onChangeSelected(options.map((o) => o.value).filter((v) => next.includes(v)));
  };

  return (
    <FilterSection title={title}>
      <div role="group" aria-label={title} className="flex flex-wrap gap-1.5">
        {options.map(({ value, label, icon: Icon }) => {
          const pressed = selected.includes(value);
          return (
            <button
              key={value}
              type="button"
              aria-pressed={pressed}
              onClick={handleClick(value)}
              className={twMerge(
                "group inline-flex h-8 pointer-coarse:h-10 touch-manipulation items-center gap-1.5 rounded-full border px-3 text-sm font-medium transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-green/60",
                pressed
                  ? "border-accent-green bg-accent-green text-white [--flower-center:var(--accent-green)]"
                  : "border-accent-green/30 bg-surface text-foreground/80 hover:border-accent-green/60 hover:text-foreground",
              )}
            >
              {Icon && <Icon className="h-4 w-4 shrink-0" />}
              {label}
            </button>
          );
        })}
      </div>
    </FilterSection>
  );
};

export default PillGroupFilterSection;
