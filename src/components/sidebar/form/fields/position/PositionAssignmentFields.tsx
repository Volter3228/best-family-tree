import type { AccentColor, DropdownOption, PositionFormRow } from "@/types";
import { ComboboxInput, FormCheckbox } from "../../inputs";

interface Props {
  rowId: string;
  row: PositionFormRow;
  teamTypeOptions: DropdownOption[];
  teamOptions: DropdownOption[];
  roleOptions: DropdownOption[];
  color?: AccentColor;
  onUpdate: (patch: Partial<PositionFormRow>) => void;
  onTeamSelect: (teamName: string) => void;
  onTeamTypeSelect: (value: string, text: string) => void;
}

const PositionAssignmentFields = ({
  rowId,
  row,
  teamTypeOptions,
  teamOptions,
  roleOptions,
  color = "blue",
  onUpdate,
  onTeamSelect,
  onTeamTypeSelect,
}: Props) => (
  <>
    <div className="flex flex-row gap-2">
      <div className="flex flex-col flex-1 relative">
        <ComboboxInput
          name={`position-teamType-${rowId}`}
          label="Тип команди"
          options={teamTypeOptions}
          onSelect={onTeamTypeSelect}
          placeholder="BTW"
          initialValue={row.teamTypeId ?? row.teamTypeName}
          color={color}
        />
      </div>
      <div className="flex flex-col flex-1 relative">
        <ComboboxInput
          name={`position-teamName-${rowId}`}
          label="Назва команди"
          options={teamOptions}
          onSelect={(_value, text) => onTeamSelect(text)}
          placeholder="МО Команда"
          initialValue={row.teamName}
          color={color}
        />
      </div>
    </div>

    <div className="flex flex-row gap-2">
      <div className="flex flex-col flex-1 relative">
        <ComboboxInput
          name={`position-role-${rowId}`}
          label="Роль"
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
          <div className="mt-2">
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
