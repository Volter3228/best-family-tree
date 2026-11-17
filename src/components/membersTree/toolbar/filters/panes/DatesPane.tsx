import { SEASON_OPTIONS } from "@/constants/filters";
import { isReducedView, useSessionStore } from "@/store/sessionStore";
import { FlowerIcon, MapleLeafIcon } from "@/components/icons/season";
import {
  BirthdayFilterSection,
  JoinYearFilterSection,
  PillGroupFilterSection,
} from "../sections";
import { greenPillIcon } from "../greenPillIcon";
import type { FilterPaneProps } from "./types";

const SEASON_PILLS = SEASON_OPTIONS.map((option) => ({
  ...option,
  icon: greenPillIcon(option.value === "spring" ? FlowerIcon : MapleLeafIcon),
}));

const DatesPane = ({ filters, onChange }: FilterPaneProps) => {
  // Birthdays are not sent to a questions session, so there is nothing to filter.
  const reduced = useSessionStore((s) => isReducedView(s.session));
  return (
    <>
      <PillGroupFilterSection
        title="Сезон вступу"
        options={SEASON_PILLS}
        selected={filters.joinSeasons}
        onChangeSelected={(joinSeasons) => onChange({ joinSeasons })}
      />
      <JoinYearFilterSection filters={filters} onChange={onChange} />
      {!reduced && <BirthdayFilterSection filters={filters} onChange={onChange} />}
    </>
  );
};

export default DatesPane;
