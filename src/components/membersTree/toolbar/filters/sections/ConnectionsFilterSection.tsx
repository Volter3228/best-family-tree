import type { FilterState, TreeMode } from "@/types";
import FilterSection from "./FilterSection";
import FilterRadio from "./FilterRadio";

interface Props {
  isOpen: boolean;
  filters: FilterState;
  onChange: (patch: Partial<FilterState>) => void;
  onToggle: () => void;
}

const OPTIONS: { value: TreeMode; label: string }[] = [
  { value: "family", label: "Сімейні дерева" },
  { value: "none", label: "Без дерев" },
  { value: "team", label: "Командні дерева" },
];

const ConnectionsFilterSection = ({
  filters,
  isOpen,
  onChange,
  onToggle,
}: Props) => {
  const handleModeChange = (mode: TreeMode) => () => {
    onChange({ treeMode: mode });
  };

  return (
    <FilterSection
      title="Розмітка"
      isOpen={isOpen}
      onToggle={onToggle}
      hasActiveValue={filters.treeMode !== "family"}
    >
      <div className="flex flex-col gap-1.5">
        {OPTIONS.map((opt) => (
          <FilterRadio
            key={opt.value}
            checked={filters.treeMode === opt.value}
            onChange={handleModeChange(opt.value)}
            label={opt.label}
          />
        ))}
      </div>
    </FilterSection>
  );
};

export default ConnectionsFilterSection;
