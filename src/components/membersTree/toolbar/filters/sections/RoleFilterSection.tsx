import { useMemo } from "react";
import { useRoles } from "@/hooks";
import type { FilterState } from "@/types";
import FilterSection from "./FilterSection";
import BadgeInput from "./badge/BadgeInput";

interface Props {
  filters: FilterState;
  isOpen: boolean;
  onChange: (patch: Partial<FilterState>) => void;
  onToggle: () => void;
}

const RoleFilterSection = ({ filters, isOpen, onChange, onToggle }: Props) => {
  const [roles] = useRoles();

  const sortedRoles = useMemo(
    () => [...roles].sort((a, b) => a.name.localeCompare(b.name, "uk")),
    [roles],
  );

  const roleOptions = useMemo(
    () => sortedRoles.map((role) => ({ value: role.name, text: role.name })),
    [sortedRoles],
  );

  return (
    <FilterSection
      title="Ролі"
      isOpen={isOpen}
      onToggle={onToggle}
      hasActiveValue={filters.roleNames.length > 0}
    >
      <BadgeInput
        selected={filters.roleNames}
        options={roleOptions}
        onChange={(roleNames) => onChange({ roleNames })}
        placeholder="Введіть роль..."
        color="green"
      />
    </FilterSection>
  );
};

export default RoleFilterSection;
