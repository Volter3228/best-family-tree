import { TEAM_DESCRIPTION_MAX_LENGTH } from "@/constants/form";
import { FOUNDER_JOIN_YEAR } from "@/constants/member";
import { Dispatch, SetStateAction, useMemo } from "react";
import { useMembersList, useRoles } from "@/hooks";
import { useT } from "@/i18n/useT";
import { useDisplayName } from "@/utils/displayName";
import type { AccentColor, Team, TeamFormData, TeamType } from "@/types";
import type { useTeamForm } from "@/hooks/forms";
import {
  DropdownSelectInput,
  TextAreaInput,
  TextInput,
  YearRangeInput,
} from "../inputs";
import {
  getRoleOptions,
  getTeamTypeOptions,
  resolveRoleName,
} from "../fields/position/positionFormUtils";
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
  members: Pick<
    FormState,
    "addMemberRow" | "updateMemberRow" | "removeMemberRow"
  >;
}

// What an empty name will become, shown as the placeholder.
const getDerivedName = (
  form: TeamFormData,
  fallback: string,
  teamType?: TeamType,
) => {
  if (!teamType) return fallback;
  const typeName = teamType.name;
  return teamType.isEvent === false || !form.startYear
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
  onCancel,
  onAskDelete,
  onDelete,
  members,
}: Props) => {
  const [roles] = useRoles();
  const flatMembersList = useMembersList();
  const tCommon = useT().formCommon;
  const t = useT().teamForm;
  const dn = useDisplayName();

  const teamTypeOptions = useMemo(
    () => getTeamTypeOptions(teamTypes),
    [teamTypes],
  );
  const roleOptions = useMemo(() => getRoleOptions(roles), [roles]);
  const memberOptions = useMemo(
    () =>
      flatMembersList.map((member) => ({
        value: member.id,
        text: dn(member.name),
      })),
    [flatMembersList, dn],
  );
  const memberNameById = (id: string) =>
    flatMembersList.find((member) => member.id === id)?.name ?? "";

  if (mode === "edit" && !selectedTeam) return null;

  const teamType = teamTypes.find(({ id }) => id === form.teamTypeId);
  const derivedName = getDerivedName(form, t.namePlaceholder, teamType);

  return (
    <>
      <FormSection title={tCommon.basics} color={color}>
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
              label={tCommon.name}
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
          label={tCommon.teamType}
          autoComplete
          options={teamTypeOptions}
          onSelect={(value) =>
            setForm((prev) => ({ ...prev, teamTypeId: value || undefined }))
          }
          placeholder={t.chooseType}
          initialValue={form.teamTypeId}
          color={color}
        />
        <TextAreaInput
          name="teamDescription"
          maxLength={TEAM_DESCRIPTION_MAX_LENGTH}
          label={tCommon.description}
          value={form.description}
          onChange={(description) =>
            setForm((prev) => ({ ...prev, description }))
          }
          color={color}
        />
      </FormSection>

      <FormSection title={t.period} color={color}>
        <YearRangeInput
          name="teamYears"
          min={FOUNDER_JOIN_YEAR}
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
          onChange={(startYear, endYear) =>
            setForm((prev) => ({ ...prev, startYear, endYear }))
          }
          color={color}
        />
      </FormSection>

      <TeamMembersEditor
        rows={form.members}
        memberOptions={memberOptions}
        roleOptions={roleOptions}
        resolveRoleName={(id, text) => resolveRoleName(roles, id, text)}
        memberNameById={memberNameById}
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
