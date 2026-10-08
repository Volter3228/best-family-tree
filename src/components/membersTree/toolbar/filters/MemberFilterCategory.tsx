import {
  MEMBER_STATUSES,
  ACTIVITY_STATES,
  JOIN_SEASONS,
  AVATAR_VALUES,
  SEASON_OPTIONS,
  STATUS_OPTIONS,
  ACTIVITY_OPTIONS,
  AVATAR_OPTIONS,
} from "@/constants/filters";
import { countActiveMemberFilters } from "@/utils/filters";
import FilterCategory, { LION_ICON } from "./FilterCategory";
import type { FilterGroupProps } from "./filterGroup";
import {
  BirthdayFilterSection,
  CheckboxGroupFilterSection,
  JoinYearFilterSection,
  LineageFilterSection,
} from "./sections";

const MemberFilterCategory = ({
  filters,
  openSections,
  onChange,
  onToggleSection,
}: FilterGroupProps) => (
  <FilterCategory
    title="Учасники"
    iconSrc={LION_ICON}
    activeCount={countActiveMemberFilters(filters)}
  >
    <JoinYearFilterSection
      filters={filters}
      isOpen={openSections.joinYear}
      onChange={onChange}
      onToggle={onToggleSection("joinYear")}
    />
    <CheckboxGroupFilterSection
      title="Сезон вступу"
      options={SEASON_OPTIONS}
      allValues={JOIN_SEASONS}
      selected={filters.joinSeasons}
      isOpen={openSections.joinSeason}
      onChangeSelected={(joinSeasons) => onChange({ joinSeasons })}
      onToggle={onToggleSection("joinSeason")}
    />
    <BirthdayFilterSection
      filters={filters}
      isOpen={openSections.birthday}
      onChange={onChange}
      onToggle={onToggleSection("birthday")}
    />
    <CheckboxGroupFilterSection
      title="Статус"
      options={STATUS_OPTIONS}
      allValues={MEMBER_STATUSES}
      selected={filters.statuses}
      isOpen={openSections.status}
      onChangeSelected={(statuses) => onChange({ statuses })}
      onToggle={onToggleSection("status")}
    />
    <CheckboxGroupFilterSection
      title="Стан активності"
      options={ACTIVITY_OPTIONS}
      allValues={ACTIVITY_STATES}
      selected={filters.activityStates}
      isOpen={openSections.activity}
      onChangeSelected={(activityStates) => onChange({ activityStates })}
      onToggle={onToggleSection("activity")}
    />
    <CheckboxGroupFilterSection
      title="Аватар"
      options={AVATAR_OPTIONS}
      allValues={AVATAR_VALUES}
      selected={filters.avatars}
      isOpen={openSections.avatar}
      onChangeSelected={(avatars) => onChange({ avatars })}
      onToggle={onToggleSection("avatar")}
    />
    <LineageFilterSection
      filters={filters}
      isOpen={openSections.lineage}
      onChange={onChange}
      onToggle={onToggleSection("lineage")}
    />
  </FilterCategory>
);

export default MemberFilterCategory;
