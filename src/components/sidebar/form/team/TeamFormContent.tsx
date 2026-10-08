import { Dispatch, SetStateAction, useMemo } from "react";
import { useMembers, useRoles } from "@/hooks";
import type { AccentColor, Team, TeamFormData, TeamType } from "@/types";
import type { useTeamForm } from "@/hooks/forms";
import {
  ComboboxInput,
  LogoFileInput,
  TextAreaInput,
  TextInput,
  YearRangeInput,
} from "../inputs";
import { ClearButton, SubmitButton } from "../buttons";
import {
  getRoleOptions,
  getTeamTypeOptions,
} from "../fields/position/positionFormUtils";
import ConfirmDeleteControl from "../ConfirmDeleteControl";
import FormFooter from "../FormFooter";
import FormMessages from "../FormMessages";
import TeamMembersEditor from "./TeamMembersEditor";

type FormState = ReturnType<typeof useTeamForm>;

interface Props {
  mode: FormState["mode"];
  selectedTeam: Team | null;
  form: TeamFormData;
  setForm: Dispatch<SetStateAction<TeamFormData>>;
  teamTypes: TeamType[];
  color?: AccentColor;
  isSubmitting: boolean;
  formId: string;
  isConfirmingDelete: boolean;
  error: string | null;
  success: string | null;
  submitLabel: string;
  onReset: () => void;
  onAskDelete: (isConfirming: boolean) => void;
  onDelete: () => void;
  members: Pick<
    FormState,
    "addMemberRow" | "updateMemberRow" | "removeMemberRow"
  >;
}

// What an empty name will become, shown as the placeholder.
const getDerivedName = (form: TeamFormData, teamTypes: TeamType[]) => {
  const teamType = teamTypes.find(({ id }) => id === form.teamTypeId);
  const typeName = teamType?.name ?? form.teamTypeName;
  if (!typeName) return "Назва команди";
  return teamType?.isEvent === false || !form.startYear
    ? typeName
    : `${typeName} ${form.startYear}`;
};

const TeamFormContent = ({
  mode,
  selectedTeam,
  form,
  setForm,
  teamTypes,
  color = "blue",
  isSubmitting,
  formId,
  isConfirmingDelete,
  error,
  success,
  submitLabel,
  onReset,
  onAskDelete,
  onDelete,
  members,
}: Props) => {
  const [roles] = useRoles();
  const { flatMembersList } = useMembers();

  const teamTypeOptions = useMemo(
    () => getTeamTypeOptions(teamTypes),
    [teamTypes],
  );
  const roleOptions = useMemo(() => getRoleOptions(roles), [roles]);
  const memberOptions = useMemo(
    () => flatMembersList.map((member) => ({ value: member.id, text: member.name })),
    [flatMembersList],
  );

  if (mode === "edit" && !selectedTeam) return null;

  return (
    <>
      <div className="flex flex-row flex-1 w-full justify-center mb-2">
        <LogoFileInput
          onImageSelect={(file) => setForm({ ...form, icon: file ?? null })}
          image={form.icon ?? null}
          label="Фото команди"
          initialImage={
            mode === "edit" && selectedTeam?.iconUrl
              ? selectedTeam.iconUrl
              : null
          }
          color={color}
          showCheckerboard={false}
        />
      </div>

      <div className="flex flex-col w-full">
        <TextInput
          name="teamName"
          label="Назва команди"
          value={form.name}
          onChange={(name) => setForm({ ...form, name })}
          placeholder={getDerivedName(form, teamTypes)}
          color={color}
        />
      </div>

      <div className="flex flex-col w-full">
        <ComboboxInput
          key={selectedTeam?.id ?? "new"}
          name="teamTypeName"
          label="Тип команди"
          options={teamTypeOptions}
          onSelect={(value, text) =>
            setForm((prev) => ({
              ...prev,
              teamTypeId: value || undefined,
              teamTypeName: value ? undefined : text.trim() || undefined,
            }))
          }
          placeholder="BTW"
          initialValue={form.teamTypeId ?? form.teamTypeName}
          color={color}
        />
      </div>

      <div className="w-full">
        <YearRangeInput
          name="teamYears"
          start={form.startYear}
          end={form.endYear}
          ongoing={form.isOngoing}
          onOngoingChange={(isOngoing) =>
            setForm({
              ...form,
              isOngoing,
              endYear: isOngoing ? undefined : form.endYear,
            })
          }
          onChange={(startYear, endYear) =>
            setForm({ ...form, startYear, endYear })
          }
          color={color}
        />
      </div>

      <div className="flex flex-col w-full">
        <TextAreaInput
          name="teamDescription"
          label="Опис"
          value={form.description}
          onChange={(description) => setForm({ ...form, description })}
          color={color}
        />
      </div>

      <TeamMembersEditor
        rows={form.members}
        memberOptions={memberOptions}
        roleOptions={roleOptions}
        color={color}
        onAdd={members.addMemberRow}
        onUpdate={members.updateMemberRow}
        onRemove={members.removeMemberRow}
      />

      <FormFooter>
        <FormMessages error={error} success={success} color={color} />
        <div className="flex w-4/5 flex-row justify-center gap-3">
          <ClearButton
            isSubmitting={isSubmitting}
            onClick={onReset}
            color={color}
          >
            Очистити
          </ClearButton>
          <SubmitButton isSubmitting={isSubmitting} form={formId} color={color}>
            {submitLabel}
          </SubmitButton>
        </div>
        {mode === "edit" && (
          <ConfirmDeleteControl
            label="Видалити команду"
            message={`Команду та ${selectedTeam?._count?.positions ?? 0} посад її учасників буде видалено.`}
            isConfirming={isConfirmingDelete}
            isSubmitting={isSubmitting}
            onAsk={onAskDelete}
            onConfirm={onDelete}
          />
        )}
      </FormFooter>
    </>
  );
};

export default TeamFormContent;
