import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
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
  isExpanded: boolean;
  color?: AccentColor;
  onToggle: () => void;
  onRemove: () => void;
  onUpdate: (patch: Partial<PositionFormData>) => void;
  onTeamSelect: (teamName: string) => void;
  onTeamTypeSelect: (value: string, text: string) => void;
}

const PositionRow = ({
  row,
  teams,
  teamTypes,
  teamTypeOptions,
  teamOptions,
  roleOptions,
  isExpanded,
  color = "blue",
  onToggle,
  onRemove,
  onUpdate,
  onTeamSelect,
  onTeamTypeSelect,
}: Props) => {
  const colorClasses = COLOR_CLASSES[color];
  return (
    <div
      className={twMerge(
        "flex flex-col gap-2 rounded-xl border bg-surface/50 p-3",
        colorClasses.border,
      )}
    >
      <PositionRowHeader
        summary={getPositionRowSummary(row, teamTypes)}
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
            color={color}
            onUpdate={onUpdate}
            onTeamSelect={onTeamSelect}
            onTeamTypeSelect={onTeamTypeSelect}
          />
          <PositionPeriodFields
            rowId={row.id}
            row={row}
            teams={teams}
            color={color}
            onUpdate={onUpdate}
          />
        </>
      )}
    </div>
  );
};

export default PositionRow;
