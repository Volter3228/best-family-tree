import { useMemo } from "react";
import { useTeamTypes } from "@/hooks";
import type { FilterState } from "@/types";
import FilterSection from "./FilterSection";
import BadgeInput from "./badge/BadgeInput";
import FilterCheckbox from "./FilterCheckbox";

interface Props {
  filters: FilterState;
  isOpen: boolean;
  onChange: (patch: Partial<FilterState>) => void;
  onToggle: () => void;
}

const TeamTypeFilterSection = ({
  filters,
  isOpen,
  onChange,
  onToggle,
}: Props) => {
  const [teamTypes] = useTeamTypes();

  const sortedTeamTypes = useMemo(
    () => [...teamTypes].sort((a, b) => a.name.localeCompare(b.name, "uk")),
    [teamTypes],
  );

  const teamTypeOptions = useMemo(
    () =>
      sortedTeamTypes.map((teamType) => ({
        value: teamType.name,
        text: teamType.name,
      })),
    [sortedTeamTypes],
  );

  return (
    <FilterSection
      title="Типи команд"
      isOpen={isOpen}
      onToggle={onToggle}
      hasActiveValue={
        filters.teamTypeNames.length > 0 || filters.teamOnlyEvents
      }
    >
      <BadgeInput
        selected={filters.teamTypeNames}
        options={teamTypeOptions}
        onChange={(teamTypeNames) => onChange({ teamTypeNames })}
        placeholder="Введіть тип команди..."
        color="green"
      />
      <FilterCheckbox
        checked={filters.teamOnlyEvents}
        onChange={() => onChange({ teamOnlyEvents: !filters.teamOnlyEvents })}
        label="Лише івенти"
      />
    </FilterSection>
  );
};

export default TeamTypeFilterSection;
