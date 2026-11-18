import { useMemo } from "react";
import { getSeasonOptions } from "@/constants/filters";
import { useLocale, useT } from "@/i18n/useT";
import { isReducedView, useSessionStore } from "@/store/sessionStore";
import { FlowerIcon, MapleLeafIcon } from "@/components/icons/season";
import {
  BirthdayFilterSection,
  JoinYearFilterSection,
  PillGroupFilterSection,
} from "../sections";
import { greenPillIcon } from "../greenPillIcon";
import type { FilterPaneProps } from "./types";

const SEASON_ICONS = {
  spring: greenPillIcon(FlowerIcon),
  autumn: greenPillIcon(MapleLeafIcon),
};

const DatesPane = ({ filters, onChange }: FilterPaneProps) => {
  const locale = useLocale();
  const t = useT().filters.dates;
  const seasonPills = useMemo(
    () =>
      getSeasonOptions(locale).map((option) => ({
        ...option,
        icon: SEASON_ICONS[option.value],
      })),
    [locale],
  );
  // Birthdays are not sent to a questions session, so there is nothing to filter.
  const reduced = useSessionStore((s) => isReducedView(s.session));
  return (
    <>
      <PillGroupFilterSection
        title={t.recruitmentSeason}
        options={seasonPills}
        selected={filters.joinSeasons}
        onChangeSelected={(joinSeasons) => onChange({ joinSeasons })}
      />
      <JoinYearFilterSection filters={filters} onChange={onChange} />
      {!reduced && (
        <BirthdayFilterSection filters={filters} onChange={onChange} />
      )}
    </>
  );
};

export default DatesPane;
