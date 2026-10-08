import { useMemo } from "react";
import { PlusIcon } from "@heroicons/react/16/solid";
import { twMerge } from "tailwind-merge";
import { useTeamTypes, useRoles, useTeams } from "@/hooks";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor, PositionFormRow } from "@/types";
import {
  getTeamTypeOptions,
  getTeamTypeSelectionPatch,
  getRoleOptions,
  getTeamOptions,
  getTeamSelectionPatch,
} from "./positionFormUtils";
import FieldError from "../FieldError";
import PositionRow from "./PositionRow";
import { usePositionRows } from "./usePositionRows";

interface Props {
  positions: PositionFormRow[];
  onChange: (positions: PositionFormRow[]) => void;
  error?: string;
  color?: AccentColor;
}

const PositionFormFields = ({
  positions,
  onChange,
  error,
  color = "blue",
}: Props) => {
  const [teamTypes] = useTeamTypes();
  const [roles] = useRoles();
  const [teams] = useTeams();
  const { expandedRows, updateRow, addRow, removeRow, toggleRow } =
    usePositionRows(positions, onChange);

  const teamTypeOptions = useMemo(
    () => getTeamTypeOptions(teamTypes),
    [teamTypes],
  );
  const roleOptions = useMemo(() => getRoleOptions(roles), [roles]);
  const colorClasses = COLOR_CLASSES[color];

  const handleTeamSelect = (id: string, teamName: string) => {
    const row = positions.find((position) => position.id === id);
    if (row) updateRow(id, getTeamSelectionPatch(teams, row, teamName));
  };

  const handleTeamTypeSelect = (id: string, value: string, text: string) => {
    const row = positions.find((position) => position.id === id);
    const patch = row && getTeamTypeSelectionPatch(teams, row, value, text);
    if (patch) updateRow(id, patch);
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
          teams={teams}
          teamTypes={teamTypes}
          teamTypeOptions={teamTypeOptions}
          teamOptions={getTeamOptions(teams, row.teamTypeId)}
          roleOptions={roleOptions}
          isExpanded={expandedRows.has(row.id)}
          color={color}
          onToggle={() => toggleRow(row.id)}
          onRemove={() => removeRow(row.id)}
          onUpdate={(patch) => updateRow(row.id, patch)}
          onTeamSelect={(teamName) => handleTeamSelect(row.id, teamName)}
          onTeamTypeSelect={(value, text) =>
            handleTeamTypeSelect(row.id, value, text)
          }
        />
      ))}
      <FieldError message={error} color={color} />
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
