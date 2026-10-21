import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  createTeam,
  deleteTeam,
  fetchTeamDetails,
  setTeamMembers,
  updateTeam,
} from "@/api/teams";
import { useMembersActions } from "../data/useMembers";
import { useRoles, useTeamTypes, useTeams } from "../data/useMeta";
import type { TeamFormData, TeamMemberRow } from "@/types";
import {
  EMPTY_TEAM_FORM,
  buildTeamRequestBody,
  toTeamFormData,
  validateTeamForm,
  type TeamFormMode,
} from "./teamFormData";

export type { TeamFormMode };

interface Options {
  // Edit exactly this team (used by the team sidebar) instead of letting the
  // user pick a mode and a team.
  fixedTeamId?: string;
  onSaved?: () => void;
  onDeleted?: () => void;
}

export const useTeamForm = ({
  fixedTeamId,
  onSaved,
  onDeleted,
}: Options = {}) => {
  const [mode, setMode] = useState<TeamFormMode>(
    fixedTeamId ? "edit" : "create",
  );
  const [selectedTeamId, setSelectedTeamId] = useState(fixedTeamId ?? "");
  const [form, setForm] = useState<TeamFormData>(EMPTY_TEAM_FORM);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const [teams, , reloadTeams] = useTeams();
  const [teamTypes, , reloadTeamTypes] = useTeamTypes();
  const [, , reloadRoles] = useRoles();
  const { reloadMembers } = useMembersActions();

  const selectedTeam = useMemo(
    () => teams.find((team) => team.id === selectedTeamId) ?? null,
    [teams, selectedTeamId],
  );

  useEffect(() => {
    if (fixedTeamId) setSelectedTeamId(fixedTeamId);
  }, [fixedTeamId]);

  useEffect(() => {
    if (!success) return;
    const timeoutId = window.setTimeout(() => setSuccess(null), 2000);
    return () => window.clearTimeout(timeoutId);
  }, [success]);

  // Load the chosen team with its roster.
  useEffect(() => {
    if (mode !== "edit" || !selectedTeamId) {
      setForm(EMPTY_TEAM_FORM);
      return;
    }
    let isStale = false;
    setIsLoading(true);
    fetchTeamDetails(selectedTeamId)
      .then((team) => !isStale && setForm(toTeamFormData(team)))
      .catch((err) => !isStale && setError(err.message))
      .finally(() => !isStale && setIsLoading(false));
    return () => {
      isStale = true;
    };
  }, [mode, selectedTeamId]);

  const teamOptions = useMemo(
    () => teams.map((team) => ({ value: team.id, text: team.name })),
    [teams],
  );

  const resetForm = () => {
    setForm(EMPTY_TEAM_FORM);
    setError(null);
    setSuccess(null);
    setIsConfirmingDelete(false);
  };

  const changeMode = (nextMode: TeamFormMode) => {
    setMode(nextMode);
    setSelectedTeamId("");
    resetForm();
  };

  const updateMemberRow = (id: string, patch: Partial<TeamMemberRow>) =>
    setForm((prev) => ({
      ...prev,
      members: prev.members.map((row) =>
        row.id === id ? { ...row, ...patch } : row,
      ),
    }));

  // Returns the new row's id so the editor can expand it.
  const addMemberRow = () => {
    const id = crypto.randomUUID();
    setForm((prev) => ({
      ...prev,
      members: [...prev.members, { id, memberName: "", roleName: "" }],
    }));
    return id;
  };

  const removeMemberRow = (id: string) =>
    setForm((prev) => ({
      ...prev,
      members: prev.members.filter((row) => row.id !== id),
    }));

  const refreshAfterChange = () => {
    reloadTeams();
    reloadTeamTypes();
    reloadRoles();
    return reloadMembers();
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationError = validateTeamForm(form, mode, teamTypes);
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      const saved =
        mode === "edit" && selectedTeamId
          ? await updateTeam(selectedTeamId, buildTeamRequestBody(form, mode))
          : await createTeam(buildTeamRequestBody(form, mode));

      if (mode === "edit" || form.members.length > 0) {
        await setTeamMembers(
          saved.id,
          form.members.map(({ memberId, roleId, roleName }) => ({
            memberId: memberId!,
            ...(roleId ? { roleId } : { roleName: roleName.trim() }),
          })),
        );
      }
      await refreshAfterChange();

      if (mode === "edit") {
        setForm(toTeamFormData(await fetchTeamDetails(saved.id)));
        setSuccess("Збережено");
        onSaved?.();
      } else {
        resetForm();
        setSuccess(`Створено: ${saved.name}`);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save team");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Deleting also removes the members' positions in the team.
  const removeTeam = async () => {
    if (!selectedTeamId) return;
    setIsSubmitting(true);
    setError(null);
    try {
      await deleteTeam(selectedTeamId);
      await refreshAfterChange();
      if (fixedTeamId) {
        onDeleted?.();
      } else {
        changeMode("edit");
        setSuccess("Команду видалено");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete team");
    } finally {
      setIsSubmitting(false);
      setIsConfirmingDelete(false);
    }
  };

  return {
    mode,
    form,
    setForm,
    teamOptions,
    teamTypes,
    selectedTeam,
    selectedTeamId,
    setSelectedTeamId,
    isLoading,
    isSubmitting,
    isConfirmingDelete,
    setIsConfirmingDelete,
    error,
    success,
    resetForm,
    changeMode,
    submit,
    removeTeam,
    addMemberRow,
    updateMemberRow,
    removeMemberRow,
  };
};
