import { useMemo } from "react";
import { PlusIcon } from "@heroicons/react/16/solid";
import { twMerge } from "tailwind-merge";
import { useTeamTypes, useRoles, useTeams } from "@/hooks";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import { useT } from "@/i18n/useT";
import type { AccentColor, PositionFormRow } from "@/types";
import {
  getTeamTypeOptions,
  getTeamTypeSelectionPatch,
  getRoleOptions,
  getTeamOptions,
  getTeamSelectionPatch,
} from "./positionFormUtils";
import FieldError from "../FieldError";
import SectionHeading from "../SectionHeading";
import PositionRow from "./PositionRow";
import { usePositionRows } from "./usePositionRows";

interface Props {
  positions: PositionFormRow[];
  onChange: (positions: PositionFormRow[]) => void;
  error?: string;
  rowErrors?: Record<string, string>;
  color?: AccentColor;
}

const PositionFormFields = ({
  positions,
  onChange,
  error,
  rowErrors,
  color = "blue",
}: Props) => {
  const [teamTypes] = useTeamTypes();
  const [roles] = useRoles();
  const [teams] = useTeams();
  const t = useT().memberForm.positions;
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

  const handleTeamTypeSelect = (id: string, value: string) => {
    const row = positions.find((position) => position.id === id);
    const patch =
      row && getTeamTypeSelectionPatch(teams, row, value, teamTypes);
    if (patch) updateRow(id, patch);
  };

  return (
    <section className="flex w-full flex-col gap-3">
      <SectionHeading title={t.title} count={positions.length} color={color} />
      {positions.map((row) => (
        <PositionRow
          key={row.id}
          row={row}
          error={rowErrors?.[row.id]}
          teams={teams}
          teamTypes={teamTypes}
          teamTypeOptions={teamTypeOptions}
          teamOptions={getTeamOptions(teams, row.teamTypeId)}
          roleOptions={roleOptions}
          roles={roles}
          isExpanded={expandedRows.has(row.id)}
          color={color}
          onToggle={() => toggleRow(row.id)}
          onRemove={() => removeRow(row.id)}
          onUpdate={(patch) => updateRow(row.id, patch)}
          onTeamSelect={(teamName) => handleTeamSelect(row.id, teamName)}
          onTeamTypeSelect={(value) => handleTeamTypeSelect(row.id, value)}
        />
      ))}
      <FieldError message={error} color={color} />
      <button
        type="button"
        onClick={addRow}
        className={twMerge(
          "flex h-10 items-center justify-center gap-1 rounded-xl border border-dashed text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2",
          colorClasses.softBorder,
          colorClasses.text,
          colorClasses.hoverSurfaceBg,
          colorClasses.focusVisibleRingSoft,
        )}
      >
        <PlusIcon className="h-4 w-4" />
        {t.add}
      </button>
    </section>
  );
};

export default PositionFormFields;
