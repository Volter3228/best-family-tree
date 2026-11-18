import { useId, useMemo } from "react";
import {
  getActivityOptions,
  getGenderOptions,
  getStatusOptions,
} from "@/constants/filters";
import { STATUS_ICONS } from "@/constants/memberStatusIcons";
import { useFamilyGroups } from "@/hooks/data/useFamilyGroups";
import { useLocale, useT } from "@/i18n/useT";
import { displayFamilyName } from "@/utils/displayName";
import {
  CheckListFilter,
  FilterSection,
  PillGroupFilterSection,
} from "../sections";
import { ACTIVITY_ICONS } from "../ActivityStateIcons";
import { greenPillIcon } from "../greenPillIcon";
import { GENDER_ICONS } from "@/components/ui/GenderIcons";
import type { FilterPaneProps } from "./types";

const MemberPane = ({ filters, onChange }: FilterPaneProps) => {
  const familyGroups = useFamilyGroups();
  const familyId = useId();
  const locale = useLocale();
  const t = useT().filters.member;

  const statusPills = useMemo(
    () =>
      getStatusOptions(locale).map((option) => ({
        ...option,
        icon: greenPillIcon(STATUS_ICONS[option.value]),
      })),
    [locale],
  );
  const activityPills = useMemo(
    () =>
      getActivityOptions(locale).map((option) => ({
        ...option,
        icon: ACTIVITY_ICONS[option.value],
      })),
    [locale],
  );
  const genderPills = useMemo(
    () =>
      getGenderOptions(locale).map((option) => ({
        ...option,
        icon: GENDER_ICONS[option.value],
      })),
    [locale],
  );

  const familyOptions = useMemo(
    () =>
      familyGroups.map((group) => ({
        value: group.id,
        label: displayFamilyName(group.name, locale),
      })),
    [familyGroups, locale],
  );

  return (
    <>
      <PillGroupFilterSection
        title={t.status}
        options={statusPills}
        selected={filters.statuses}
        onChangeSelected={(statuses) => onChange({ statuses })}
      />
      <PillGroupFilterSection
        title={t.activityState}
        options={activityPills}
        selected={filters.activityStates}
        onChangeSelected={(activityStates) => onChange({ activityStates })}
      />
      <PillGroupFilterSection
        title={t.gender}
        options={genderPills}
        selected={filters.genders}
        onChangeSelected={(genders) => onChange({ genders })}
      />
      {familyOptions.length > 0 && (
        <FilterSection title={t.family} htmlFor={familyId}>
          <CheckListFilter
            inputId={familyId}
            collapsedCount={8}
            options={familyOptions}
            selected={filters.familyGroupIds}
            onChange={(familyGroupIds) => onChange({ familyGroupIds })}
            noun={{
              searchPlaceholder: t.findFamily,
              moreLabel: t.moreFamilies,
            }}
          />
        </FilterSection>
      )}
    </>
  );
};

export default MemberPane;
