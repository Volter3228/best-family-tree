import { useId, useMemo } from "react";
import { useTeamTypes } from "@/hooks";
import { useT } from "@/i18n/useT";
import {
  FilterSection,
  GroupedCheckListFilter,
  TeamPeriodFilterSection,
} from "../sections";
import type { CheckGroup } from "../sections";
import type { FilterPaneProps } from "./types";

const TeamsPane = ({ filters, onChange }: FilterPaneProps) => {
  const [teamTypes] = useTeamTypes();
  const searchId = useId();
  const t = useT().filters.teams;

  const groups = useMemo<CheckGroup[]>(
    () =>
      [
        {
          key: "events",
          label: t.events,
          options: teamTypes.filter((t) => t.isEvent).map((t) => t.name),
        },
        {
          key: "other",
          label: t.other,
          options: teamTypes.filter((t) => !t.isEvent).map((t) => t.name),
        },
      ].filter((group) => group.options.length > 0),
    [teamTypes, t],
  );

  return (
    <>
      <TeamPeriodFilterSection filters={filters} onChange={onChange} />
      <FilterSection title={t.teamTypes} htmlFor={searchId}>
        <GroupedCheckListFilter
          groups={groups}
          searchId={searchId}
          searchPlaceholder={t.findTeamType}
          selected={filters.teamTypeNames}
          onChange={(teamTypeNames) => onChange({ teamTypeNames })}
        />
      </FilterSection>
    </>
  );
};

export default TeamsPane;
