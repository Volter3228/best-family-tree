import { Dispatch, SetStateAction, useMemo } from "react";
import { useMembersList, useRoles } from "@/hooks";
import type { AccentColor, Team, TeamFormData, TeamType } from "@/types";
import type { useTeamForm } from "@/hooks/forms";
import {
  DropdownSelectInput,
  TextAreaInput,
  TextInput,
  YearRangeInput,
} from "../inputs";
import { getRoleOptions, getTeamTypeOptions } from "../fields/position/positionFormUtils";
import FormMessages from "../FormMessages";
import FormSection from "./FormSection";
import TeamFormFooter from "./TeamFormFooter";
import TeamLogoPicker from "./TeamLogoPicker";
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
  onCancel?: () => void;
  onAskDelete: (isConfirming: boolean) => void;
  onDelete: () => void;
  members: Pick<FormState, "addMemberRow" | "updateMemberRow" | "removeMemberRow">;
}

// What an empty name will become, shown as the placeholder.
const getDerivedName = (form: TeamFormData, teamType?: TeamType) => {
  if (!teamType) return "Назва команди";
  return teamType.isEvent === false || !form.startYear
    ? teamType.name
    : `${teamType.name} ${form.startYear}`;
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
  onCancel,
  onAskDelete,
  onDelete,
  members,
}: Props) => {
  const [roles] = useRoles();
  const flatMembersList = useMembersList();

  const teamTypeOptions = useMemo(() => getTeamTypeOptions(teamTypes), [teamTypes]);
  const roleOptions = useMemo(() => getRoleOptions(roles), [roles]);
  const memberOptions = useMemo(
    () => flatMembersList.map((member) => ({ value: member.id, text: member.name })),
    [flatMembersList],
  );

  if (mode === "edit" && !selectedTeam) return null;

  const teamType = teamTypes.find(({ id }) => id === form.teamTypeId);
  const derivedName = getDerivedName(form, teamType);

  return (
    <>
      <FormSection title="Основне" color={color}>
        <div className="flex items-start gap-3">
          <TeamLogoPicker
            name={form.name || derivedName}
            value={form.icon ?? null}
            onChange={(file) => setForm((prev) => ({ ...prev, icon: file }))}
            iconUrl={teamType?.iconUrl}
            typeColor={teamType?.color}
            color={color}
          />
          <div className="min-w-0 flex-1">
            <TextInput
              name="teamName"
              label="Назва"
              value={form.name}
              onChange={(name) => setForm((prev) => ({ ...prev, name }))}
              placeholder={derivedName}
              color={color}
            />
          </div>
        </div>
        <DropdownSelectInput
          key={selectedTeam?.id ?? "new"}
          name="teamType"
          label="Тип команди"
          autoComplete
          options={teamTypeOptions}
          onSelect={(value) =>
            setForm((prev) => ({ ...prev, teamTypeId: value || undefined }))
          }
          placeholder="Оберіть тип"
          initialValue={form.teamTypeId}
          color={color}
        />
        <TextAreaInput
          name="teamDescription"
          label="Опис"
          value={form.description}
          onChange={(description) => setForm((prev) => ({ ...prev, description }))}
          color={color}
        />
      </FormSection>

      <FormSection title="Період" color={color}>
        <YearRangeInput
          name="teamYears"
          start={form.startYear}
          end={form.endYear}
          ongoing={form.isOngoing}
          onOngoingChange={(isOngoing) =>
            setForm((prev) => ({
              ...prev,
              isOngoing,
              endYear: isOngoing ? undefined : prev.endYear,
            }))
          }
          onChange={(startYear, endYear) => setForm((prev) => ({ ...prev, startYear, endYear }))}
          color={color}
        />
      </FormSection>

      <TeamMembersEditor
        rows={form.members}
        memberOptions={memberOptions}
        roleOptions={roleOptions}
        color={color}
        onAdd={members.addMemberRow}
        onUpdate={members.updateMemberRow}
        onRemove={members.removeMemberRow}
      />

      <FormMessages error={error} color={color} />

      <TeamFormFooter
        isEdit={mode === "edit"}
        formId={formId}
        color={color}
        isSubmitting={isSubmitting}
        isConfirmingDelete={isConfirmingDelete}
        success={success}
        positionsCount={selectedTeam?._count?.positions ?? 0}
        onCancel={onCancel}
        onAskDelete={onAskDelete}
        onDelete={onDelete}
      />
    </>
  );
};

export default TeamFormContent;
