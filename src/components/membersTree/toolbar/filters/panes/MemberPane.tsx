import { useId, useMemo } from "react";
import {
  ACTIVITY_OPTIONS,
  GENDER_OPTIONS,
  STATUS_OPTIONS,
} from "@/constants/filters";
import { STATUS_ICONS } from "@/constants/memberStatusIcons";
import { useFamilyGroups } from "@/hooks/data/useFamilyGroups";
import { pluralizeUk } from "@/utils";
import {
  CheckListFilter,
  FilterSection,
  PillGroupFilterSection,
} from "../sections";
import { ACTIVITY_ICONS } from "../ActivityStateIcons";
import { greenPillIcon } from "../greenPillIcon";
import { GENDER_ICONS } from "@/components/ui/GenderIcons";
import type { FilterPaneProps } from "./types";

const STATUS_PILLS = STATUS_OPTIONS.map((option) => ({
  ...option,
  icon: greenPillIcon(STATUS_ICONS[option.value]),
}));

const ACTIVITY_PILLS = ACTIVITY_OPTIONS.map((option) => ({
  ...option,
  icon: ACTIVITY_ICONS[option.value],
}));

const GENDER_PILLS = GENDER_OPTIONS.map((option) => ({
  ...option,
  icon: GENDER_ICONS[option.value],
}));

const MemberPane = ({ filters, onChange }: FilterPaneProps) => {
  const familyGroups = useFamilyGroups();
  const familyId = useId();

  const familyOptions = useMemo(
    () => familyGroups.map((group) => ({ value: group.id, label: group.name })),
    [familyGroups],
  );

  return (
    <>
      <PillGroupFilterSection
        title="Статус"
        options={STATUS_PILLS}
        selected={filters.statuses}
        onChangeSelected={(statuses) => onChange({ statuses })}
      />
      <PillGroupFilterSection
        title="Стан активності"
        options={ACTIVITY_PILLS}
        selected={filters.activityStates}
        onChangeSelected={(activityStates) => onChange({ activityStates })}
      />
      <PillGroupFilterSection
        title="Стать"
        options={GENDER_PILLS}
        selected={filters.genders}
        onChangeSelected={(genders) => onChange({ genders })}
      />
      {familyOptions.length > 0 && (
        <FilterSection title="Сім'я" htmlFor={familyId}>
          <CheckListFilter
            inputId={familyId}
            collapsedCount={8}
            options={familyOptions}
            selected={filters.familyGroupIds}
            onChange={(familyGroupIds) => onChange({ familyGroupIds })}
            noun={{
              searchPlaceholder: "Знайти сім'ю",
              moreLabel: (n) =>
                `Ще ${n} ${pluralizeUk(n, ["сім'я", "сім'ї", "сімей"])}`,
            }}
          />
        </FilterSection>
      )}
    </>
  );
};

export default MemberPane;
