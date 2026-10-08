import type {
  TeamDetails,
  TeamFormData,
  TeamType,
  TeamMemberRow,
} from "@/types";

export type TeamFormMode = "create" | "edit";

export const EMPTY_TEAM_FORM: TeamFormData = {
  name: "",
  description: "",
  icon: null,
  members: [],
};

export const toTeamFormData = (team: TeamDetails): TeamFormData => ({
  name: team.name,
  teamTypeId: team.teamTypeId ?? undefined,
  description: team.description ?? "",
  startYear: team.startYear ?? undefined,
  endYear: team.endYear ?? undefined,
  isOngoing: team.isOngoing,
  icon: team.iconUrl ?? null,
  members: team.positions.map(
    (position): TeamMemberRow => ({
      id: position.id,
      memberId: position.memberId,
      memberName: position.member.name,
      roleName: position.role.name,
      roleId: position.role.id,
    }),
  ),
});

/** First problem that blocks saving, or undefined when the form is valid. */
export const validateTeamForm = (
  form: TeamFormData,
  mode: TeamFormMode,
  teamTypes: TeamType[],
): string | undefined => {
  const teamType = teamTypes.find(({ id }) => id === form.teamTypeId);
  const hasName = form.name.trim() !== "";

  if (mode === "edit" && !hasName) return "Назва команди обов'язкова";
  if (!hasName && !teamType && !form.teamTypeName) {
    return "Вкажіть назву команди або її тип";
  }
  if (!hasName && teamType?.isEvent && !form.startYear) {
    return `Вкажіть рік початку для «${teamType.name}» або назву команди`;
  }
  if (form.isOngoing && !form.startYear) {
    return "Вкажіть рік початку для команди, що триває";
  }
  if (form.members.some((row) => !row.memberId || !row.roleName.trim())) {
    return "Кожному учаснику потрібно обрати людину зі списку та роль";
  }
};

/**
 * Multipart body of the create/update request. On edit an empty value clears
 * the field on the server; on create it is simply omitted.
 */
export const buildTeamRequestBody = (
  form: TeamFormData,
  mode: TeamFormMode,
): FormData => {
  const formData = new FormData();
  const isEdit = mode === "edit";
  const fields: Record<string, string | number | undefined> = {
    name: form.name.trim(),
    description: form.description.trim(),
    teamTypeId: form.teamTypeId,
    teamTypeName: form.teamTypeName,
    startYear: form.startYear,
    endYear: form.isOngoing ? undefined : form.endYear,
    isOngoing: String(Boolean(form.isOngoing)),
  };

  for (const [key, value] of Object.entries(fields)) {
    if (value !== undefined && value !== "") formData.append(key, `${value}`);
    else if (isEdit && key !== "teamTypeName") formData.append(key, "");
  }
  if (form.icon instanceof File) formData.append("icon", form.icon);
  else if (isEdit && form.icon === null) formData.append("icon", "");
  return formData;
};
