import type { FilterState } from "@/types";
import FilterSection from "./FilterSection";
import FilterCheckbox from "./FilterCheckbox";

interface Props {
  isOpen: boolean;
  filters: FilterState;
  onChange: (patch: Partial<FilterState>) => void;
  onToggle: () => void;
}

const ConnectionsFilterSection = ({
  filters,
  isOpen,
  onChange,
  onToggle,
}: Props) => {
  const handleShowTreeChange = () => {
    onChange({ showTree: !filters.showTree });
  };

  return (
    <FilterSection
      title="Розмітка"
      isOpen={isOpen}
      onToggle={onToggle}
      hasActiveValue={!filters.showTree}
    >
      <FilterCheckbox
        checked={filters.showTree}
        onChange={handleShowTreeChange}
        label="Показувати дерева"
      />
    </FilterSection>
  );
};

export default ConnectionsFilterSection;
