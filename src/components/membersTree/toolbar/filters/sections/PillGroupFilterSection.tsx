import Chip from "@/components/ui/Chip";
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
            <Chip
              key={value}
              color="green"
              pressed={pressed}
              icon={Icon}
              onClick={handleClick(value)}
              className={pressed ? "[--flower-center:var(--accent-green)]" : undefined}
            >
              {label}
            </Chip>
          );
        })}
      </div>
    </FilterSection>
  );
};

export default PillGroupFilterSection;
