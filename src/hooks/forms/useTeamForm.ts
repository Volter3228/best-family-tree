import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import {
  createTeam,
  deleteTeam,
  fetchTeamDetails,
  setTeamMembers,
  updateTeam,
} from "@/api/teams";
import { useMembersActions } from "../data/useMembers";
import { useRoles, useTeamTypes, useTeams } from "../data/useMeta";
import type { Team, TeamFormData, TeamMemberRow } from "@/types";
import { useT } from "@/i18n/useT";
import {
  EMPTY_TEAM_FORM,
  buildTeamRequestBody,
  isSameTeamForm,
  toTeamFormData,
  toTeamMembersBody,
  validateTeamForm,
  type TeamFormMode,
} from "./teamFormData";
import { useTransientMessage } from "./useTransientMessage";

export type { TeamFormMode };

interface Options {
  // Edit this team; without it the form creates a new one.
  teamId?: string;
  // A new team was saved (its roster included).
  onCreated?: (teamId: string) => void;
  onSaved?: () => void;
  onDeleted?: () => void;
  // Shown on the submit button when the form opens (e.g. "Створено").
  initialMessage?: string;
}

export const useTeamForm = ({
  teamId,
  onCreated,
  onSaved,
  onDeleted,
  initialMessage,
}: Options = {}) => {
  const mode: TeamFormMode = teamId ? "edit" : "create";
  const tCommon = useT().formCommon;
  const t = useT().teamForm;
  const selectedTeamId = teamId ?? "";
  const [form, setForm] = useState<TeamFormData>(EMPTY_TEAM_FORM);
  const [isLoading, setIsLoading] = useState(Boolean(teamId));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, showSuccess, hideSuccess] = useTransientMessage();
  // The team as the server last returned it; edits that match it are not sent.
  const savedFormRef = useRef<TeamFormData | null>(null);
  // Create mode: the team saved before the roster request failed, so a retry
  // updates it instead of hitting 409 team_exists.
  const createdTeamRef = useRef<Team | null>(null);

  const [teams, setTeams, reloadTeams] = useTeams();
  const [teamTypes, , reloadTeamTypes] = useTeamTypes();
  const [, , reloadRoles] = useRoles();
  const { reloadMembers } = useMembersActions();

  const selectedTeam = useMemo(
    () => teams.find((team) => team.id === selectedTeamId) ?? null,
    [teams, selectedTeamId],
  );

  useEffect(() => {
    if (initialMessage) showSuccess(initialMessage);
  }, [initialMessage, showSuccess]);

  // Load the chosen team with its roster.
  useEffect(() => {
    savedFormRef.current = null;
    if (mode !== "edit" || !selectedTeamId) {
      setForm(EMPTY_TEAM_FORM);
      return;
    }
    let isStale = false;
    setIsLoading(true);
    fetchTeamDetails(selectedTeamId)
      .then((team) => {
        if (isStale) return;
        const loaded = toTeamFormData(team);
        savedFormRef.current = loaded;
        setForm(loaded);
      })
      .catch((err) => !isStale && setError(err.message))
      .finally(() => !isStale && setIsLoading(false));
    return () => {
      isStale = true;
    };
  }, [mode, selectedTeamId]);

  const resetForm = () => {
    createdTeamRef.current = null;
    setForm(EMPTY_TEAM_FORM);
    setError(null);
    hideSuccess();
    setIsConfirmingDelete(false);
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
    const validationError = validateTeamForm(
      form,
      mode,
      teamTypes,
      t.validation,
    );
    if (validationError) {
      setError(validationError);
      return;
    }
    if (
      mode === "edit" &&
      savedFormRef.current &&
      isSameTeamForm(form, savedFormRef.current)
    ) {
      setError(null);
      showSuccess(tCommon.noChanges);
      return;
    }

    setIsSubmitting(true);
    setError(null);
    hideSuccess();

    let savedTeam: Team | null = null;
    try {
      const pending = createdTeamRef.current;
      const saved =
        mode === "edit" && selectedTeamId
          ? await updateTeam(selectedTeamId, buildTeamRequestBody(form, mode))
          : pending
            ? await updateTeam(pending.id, buildTeamRequestBody(form, "edit"))
            : await createTeam(buildTeamRequestBody(form, mode));
      savedTeam = saved;
      if (mode === "create") createdTeamRef.current = saved;

      if (mode === "edit" || form.members.length > 0) {
        await setTeamMembers(saved.id, toTeamMembersBody(form.members));
      }
      // Show the new team in the list right away, so its editor never renders
      // blank while the reload is in flight.
      if (mode === "create") setTeams([...teams, saved]);
      await refreshAfterChange();

      if (mode === "edit") {
        const reloaded = toTeamFormData(await fetchTeamDetails(saved.id));
        savedFormRef.current = reloaded;
        setForm(reloaded);
        showSuccess(tCommon.saved);
        onSaved?.();
      } else {
        resetForm();
        showSuccess(tCommon.created);
        onCreated?.(saved.id);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : t.saveFailed);
      // The team itself may already be saved: show it in the list.
      if (savedTeam) {
        const team = savedTeam;
        if (mode === "create") {
          setTeams([...teams.filter((item) => item.id !== team.id), team]);
        }
        refreshAfterChange();
      }
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
      onDeleted?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : t.deleteFailed);
    } finally {
      setIsSubmitting(false);
      setIsConfirmingDelete(false);
    }
  };

  return {
    mode,
    form,
    setForm,
    teamTypes,
    selectedTeam,
    isLoading,
    isSubmitting,
    isConfirmingDelete,
    setIsConfirmingDelete,
    error,
    success,
    resetForm,
    submit,
    removeTeam,
    addMemberRow,
    updateMemberRow,
    removeMemberRow,
  };
};
