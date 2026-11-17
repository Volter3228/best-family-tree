import type { AccentColor, DropdownOption, PositionFormRow } from "@/types";
import { ComboboxInput, FormCheckbox } from "../../inputs";

interface Props {
  rowId: string;
  row: PositionFormRow;
  teamTypeOptions: DropdownOption[];
  teamOptions: DropdownOption[];
  roleOptions: DropdownOption[];
  // New teams can only be created as an edition of an event type.
  canCreateTeam: boolean;
  color?: AccentColor;
  onUpdate: (patch: Partial<PositionFormRow>) => void;
  onTeamSelect: (teamName: string) => void;
  onTeamTypeSelect: (value: string) => void;
}

const PositionAssignmentFields = ({
  rowId,
  row,
  teamTypeOptions,
  teamOptions,
  roleOptions,
  canCreateTeam,
  color = "blue",
  onUpdate,
  onTeamSelect,
  onTeamTypeSelect,
}: Props) => (
  <>
    <div className="grid grid-cols-1 gap-3 @[22rem]:grid-cols-2">
      <div className="flex min-w-0 flex-col">
        <ComboboxInput
          name={`position-teamType-${rowId}`}
          label="Тип команди"
          options={teamTypeOptions}
          onSelect={(value) => onTeamTypeSelect(value)}
          allowCreate={false}
          placeholder="BTW"
          initialValue={row.teamTypeId}
          color={color}
        />
      </div>
      <div className="flex min-w-0 flex-col">
        <ComboboxInput
          name={`position-teamName-${rowId}`}
          label="Назва команди"
          options={teamOptions}
          onSelect={(_value, text) => onTeamSelect(text)}
          placeholder="МО Команда"
          initialValue={row.teamName}
          allowCreate={canCreateTeam}
          color={color}
        />
      </div>
    </div>

    <div className="flex flex-col">
      <div className="flex min-w-0 flex-col">
        <ComboboxInput
          name={`position-role-${rowId}`}
          label="Посада"
          options={roleOptions}
          onSelect={(value, text) =>
            onUpdate({
              roleId: value || undefined,
              roleName: text,
              isLeaderPosition: value ? undefined : false,
            })
          }
          placeholder="President"
          initialValue={row.roleName}
          color={color}
        />
        {!row.roleId && (
          <div className="mt-1.5">
            <FormCheckbox
              checked={row.isLeaderPosition ?? false}
              label="Лідер"
              color={color}
              onChange={(checked) => onUpdate({ isLeaderPosition: checked })}
            />
          </div>
        )}
      </div>
    </div>
  </>
);

export default PositionAssignmentFields;
