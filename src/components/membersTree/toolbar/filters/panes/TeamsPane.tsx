import { useId, useMemo } from "react";
import { useTeamTypes } from "@/hooks";
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

  const groups = useMemo<CheckGroup[]>(
    () =>
      [
        {
          key: "events",
          label: "Івенти",
          options: teamTypes.filter((t) => t.isEvent).map((t) => t.name),
        },
        {
          key: "other",
          label: "Інше",
          options: teamTypes.filter((t) => !t.isEvent).map((t) => t.name),
        },
      ].filter((group) => group.options.length > 0),
    [teamTypes],
  );

  return (
    <>
      <TeamPeriodFilterSection filters={filters} onChange={onChange} />
      <FilterSection title="Типи команд" htmlFor={searchId}>
        <GroupedCheckListFilter
          groups={groups}
          searchId={searchId}
          searchPlaceholder="Знайти тип команди"
          selected={filters.teamTypeNames}
          onChange={(teamTypeNames) => onChange({ teamTypeNames })}
        />
      </FilterSection>
    </>
  );
};

export default TeamsPane;
