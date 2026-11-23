import { useT } from "@/i18n/useT";
import type { AccentColor, DropdownOption, PositionFormRow } from "@/types";
import { ComboboxInput, FormCheckbox } from "../../inputs";
import { resolveRoleName } from "./positionFormUtils";

interface Props {
  rowId: string;
  row: PositionFormRow;
  teamTypeOptions: DropdownOption[];
  teamOptions: DropdownOption[];
  roleOptions: DropdownOption[];
  roles: { id: string; name: string }[];
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
  roles,
  canCreateTeam,
  color = "blue",
  onUpdate,
  onTeamSelect,
  onTeamTypeSelect,
}: Props) => {
  const t = useT().memberForm.positions;
  return (
    <>
      <div className="grid grid-cols-1 gap-3 @[26rem]:grid-cols-2">
        <div className="flex min-w-0 flex-col">
          <ComboboxInput
            name={`position-teamType-${rowId}`}
            label={t.teamType}
            options={teamTypeOptions}
            onSelect={(value) => onTeamTypeSelect(value)}
            allowCreate={false}
            placeholder={t.teamTypePlaceholder}
            initialValue={row.teamTypeId}
            color={color}
          />
        </div>
        <div className="flex min-w-0 flex-col">
          <ComboboxInput
            name={`position-teamName-${rowId}`}
            label={t.teamName}
            options={teamOptions}
            onSelect={(value, text) => onTeamSelect(value || text)}
            placeholder={t.teamNamePlaceholder}
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
            label={t.role}
            options={roleOptions}
            onSelect={(value, text) =>
              onUpdate({
                roleId: value || undefined,
                roleName: resolveRoleName(roles, value, text),
                isLeaderPosition: value ? undefined : false,
              })
            }
            placeholder={t.rolePlaceholder}
            initialValue={
              roles.some(({ id }) => id === row.roleId)
                ? row.roleId
                : row.roleName
            }
            color={color}
          />
          {!row.roleId && (
            <div className="mt-1.5">
              <FormCheckbox
                checked={row.isLeaderPosition ?? false}
                label={t.leader}
                color={color}
                onChange={(checked) => onUpdate({ isLeaderPosition: checked })}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PositionAssignmentFields;
