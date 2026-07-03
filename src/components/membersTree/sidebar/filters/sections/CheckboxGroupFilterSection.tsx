import FilterSection from "./FilterSection";
import FilterCheckbox from "./FilterCheckbox";

interface Option<T extends string> {
  value: T;
  label: string;
}

interface Props<T extends string> {
  title: string;
  options: Option<T>[];
  allValues: T[];
  selected: T[];
  isOpen: boolean;
  onChangeSelected: (next: T[]) => void;
  onToggle: () => void;
}

const CheckboxGroupFilterSection = <T extends string>({
  title,
  options,
  allValues,
  selected,
  onChangeSelected,
  isOpen,
  onToggle,
}: Props<T>) => {
  const handleToggle = (value: T) => () => {
    if (selected.includes(value) && selected.length === 1) return;
    const next = selected.includes(value)
      ? selected.filter((v) => v !== value)
      : [...selected, value];
    onChangeSelected(next);
  };

  return (
    <FilterSection
      title={title}
      isOpen={isOpen}
      onToggle={onToggle}
      hasActiveValue={selected.length < allValues.length}
    >
      <div className="flex flex-col gap-1.5">
        {options.map(({ value, label }) => (
          <FilterCheckbox
            key={value}
            checked={selected.includes(value)}
            onChange={handleToggle(value)}
            label={label}
          />
        ))}
      </div>
    </FilterSection>
  );
};

export default CheckboxGroupFilterSection;
