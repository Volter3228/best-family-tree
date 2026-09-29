import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type {
  AccentColor,
  DropdownOption,
  EventType,
  PositionFormRow as PositionFormData,
} from "@/types";
import { getPositionRowSummary } from "./positionFormUtils";
import PositionAssignmentFields from "./PositionAssignmentFields";
import PositionDateFields from "./PositionDateFields";
import PositionRowHeader from "./PositionRowHeader";

interface Props {
  row: PositionFormData;
  eventTypes: EventType[];
  eventTypeOptions: DropdownOption[];
  teamOptions: DropdownOption[];
  roleOptions: DropdownOption[];
  isExpanded: boolean;
  color?: AccentColor;
  onToggle: () => void;
  onRemove: () => void;
  onUpdate: (patch: Partial<PositionFormData>) => void;
  onTeamSelect: (teamName: string) => void;
}

const PositionRow = ({
  row,
  eventTypes,
  eventTypeOptions,
  teamOptions,
  roleOptions,
  isExpanded,
  color = "blue",
  onToggle,
  onRemove,
  onUpdate,
  onTeamSelect,
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
        summary={getPositionRowSummary(row, eventTypes)}
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
            eventTypeOptions={eventTypeOptions}
            teamOptions={teamOptions}
            roleOptions={roleOptions}
            color={color}
            onUpdate={onUpdate}
            onTeamSelect={onTeamSelect}
          />
          <PositionDateFields
            rowId={row.id}
            row={row}
            color={color}
            onUpdate={onUpdate}
          />
        </>
      )}
    </div>
  );
};

export default PositionRow;
