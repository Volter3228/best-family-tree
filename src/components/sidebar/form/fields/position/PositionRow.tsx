import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import { useT } from "@/i18n/useT";
import type {
  AccentColor,
  DropdownOption,
  Team,
  TeamType,
  PositionFormRow as PositionFormData,
} from "@/types";
import { getPositionRowSummary } from "./positionFormUtils";
import PositionAssignmentFields from "./PositionAssignmentFields";
import PositionPeriodFields from "./PositionPeriodFields";
import PositionRowHeader from "./PositionRowHeader";

interface Props {
  row: PositionFormData;
  teams: Team[];
  teamTypes: TeamType[];
  teamTypeOptions: DropdownOption[];
  teamOptions: DropdownOption[];
  roleOptions: DropdownOption[];
  roles: { id: string; name: string }[];
  isExpanded: boolean;
  color?: AccentColor;
  onToggle: () => void;
  onRemove: () => void;
  onUpdate: (patch: Partial<PositionFormData>) => void;
  onTeamSelect: (teamName: string) => void;
  onTeamTypeSelect: (value: string) => void;
}

const PositionRow = ({
  row,
  teams,
  teamTypes,
  teamTypeOptions,
  teamOptions,
  roleOptions,
  roles,
  isExpanded,
  color = "blue",
  onToggle,
  onRemove,
  onUpdate,
  onTeamSelect,
  onTeamTypeSelect,
}: Props) => {
  const colorClasses = COLOR_CLASSES[color];
  const t = useT().memberForm.positions;
  return (
    <div
      className={twMerge(
        "flex flex-col gap-3 rounded-2xl p-3",
        colorClasses.softBg,
      )}
    >
      <PositionRowHeader
        summary={getPositionRowSummary(row, teamTypes, t.newPosition)}
        removeLabel={t.remove}
        isExpanded={isExpanded}
        onToggle={onToggle}
        onRemove={onRemove}
        color={color}
      />
      {isExpanded && (
        <>
          <PositionAssignmentFields
            rowId={row.id}
            row={row}
            teamTypeOptions={teamTypeOptions}
            teamOptions={teamOptions}
            roleOptions={roleOptions}
            roles={roles}
            canCreateTeam={teamTypes.some(
              (teamType) => teamType.id === row.teamTypeId && teamType.isEvent,
            )}
            color={color}
            onUpdate={onUpdate}
            onTeamSelect={onTeamSelect}
            onTeamTypeSelect={onTeamTypeSelect}
          />
          <PositionPeriodFields
            rowId={row.id}
            row={row}
            teams={teams}
            teamTypes={teamTypes}
            color={color}
            onUpdate={onUpdate}
          />
        </>
      )}
    </div>
  );
};

export default PositionRow;
