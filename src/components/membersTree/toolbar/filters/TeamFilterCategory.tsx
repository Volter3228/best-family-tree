import { countActiveTeamFilters } from "@/utils/filters";
import FilterCategory, { LION_GROUP_ICON } from "./FilterCategory";
import type { FilterGroupProps } from "./filterGroup";
import {
  RoleFilterSection,
  TeamPeriodFilterSection,
  TeamTypeFilterSection,
} from "./sections";

// In team view these pick teams; in the other views they keep the members who
// hold a matching position.
const TeamFilterCategory = ({
  filters,
  openSections,
  onChange,
  onToggleSection,
}: FilterGroupProps) => (
  <FilterCategory
    title="Команди"
    iconSrc={LION_GROUP_ICON}
    activeCount={countActiveTeamFilters(filters)}
  >
    <TeamTypeFilterSection
      filters={filters}
      isOpen={openSections.teamType}
      onChange={onChange}
      onToggle={onToggleSection("teamType")}
    />
    <TeamPeriodFilterSection
      filters={filters}
      isOpen={openSections.teamPeriod}
      onChange={onChange}
      onToggle={onToggleSection("teamPeriod")}
    />
    <RoleFilterSection
      filters={filters}
      isOpen={openSections.role}
      onChange={onChange}
      onToggle={onToggleSection("role")}
    />
  </FilterCategory>
);

export default TeamFilterCategory;
