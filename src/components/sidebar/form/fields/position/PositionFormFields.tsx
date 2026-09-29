import { useMemo } from "react";
import { PlusIcon } from "@heroicons/react/16/solid";
import { twMerge } from "tailwind-merge";
import { useEventTypes, useRoles, useTeams } from "@/hooks";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor, PositionFormRow } from "@/types";
import {
  findTeamForPosition,
  getEventTypeOptions,
  getRoleOptions,
  getTeamDatePatch,
  getTeamOptions,
} from "./positionFormUtils";
import PositionRow from "./PositionRow";
import { usePositionRows } from "./usePositionRows";

interface Props {
  positions: PositionFormRow[];
  onChange: (positions: PositionFormRow[]) => void;
  color?: AccentColor;
}

const PositionFormFields = ({ positions, onChange, color = "blue" }: Props) => {
  const [eventTypes] = useEventTypes();
  const [roles] = useRoles();
  const [teams] = useTeams();
  const { expandedRows, updateRow, addRow, removeRow, toggleRow } =
    usePositionRows(positions, onChange);

  const eventTypeOptions = useMemo(
    () => getEventTypeOptions(eventTypes),
    [eventTypes],
  );
  const roleOptions = useMemo(() => getRoleOptions(roles), [roles]);
  const colorClasses = COLOR_CLASSES[color];

  const handleTeamSelect = (id: string, teamName: string) => {
    const row = positions.find((position) => position.id === id);
    if (!row) return;
    const team = findTeamForPosition(teams, row, teamName);
    updateRow(
      id,
      team
        ? { teamName, ...getTeamDatePatch(team, row.isYearOnly) }
        : { teamName },
    );
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      <h3 className={twMerge("text-lg font-semibold", colorClasses.text)}>
        Посади
      </h3>
      {positions.map((row) => (
        <PositionRow
          key={row.id}
          row={row}
          eventTypes={eventTypes}
          eventTypeOptions={eventTypeOptions}
          teamOptions={getTeamOptions(teams, row.eventTypeId)}
          roleOptions={roleOptions}
          isExpanded={expandedRows.has(row.id)}
          color={color}
          onToggle={() => toggleRow(row.id)}
          onRemove={() => removeRow(row.id)}
          onUpdate={(patch) => updateRow(row.id, patch)}
          onTeamSelect={(teamName) => handleTeamSelect(row.id, teamName)}
        />
      ))}
      <button
        type="button"
        onClick={addRow}
        className={twMerge(
          "flex items-center justify-center gap-1 py-2 rounded-xl border border-dashed",
          colorClasses.border,
          colorClasses.text,
          colorClasses.hoverSurfaceBg,
          "transition-all duration-200",
        )}
      >
        <PlusIcon className="h-4 w-4" />
        Додати позицію
      </button>
    </div>
  );
};

export default PositionFormFields;
