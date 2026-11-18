import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { createTeamType, updateTeamType } from "@/api";
import { ApiError } from "@/api/ApiError";
import { deleteTeamType } from "@/api/fetchMeta";
import { useTeamTypes } from "../data/useMeta";
import type { TeamType, TeamTypeFormData } from "@/types";
import { isSameFormData } from "@/utils/formDataEquals";
import { useT, useLocale } from "@/i18n/useT";
import { useTransientMessage } from "./useTransientMessage";

export type TeamTypeFormMode = "create" | "edit";

// The list endpoint adds how many teams use each type.
export const teamTypeTeamCount = (teamType: TeamType) =>
  teamType._count?.teams ?? 0;

const EMPTY_FORM: TeamTypeFormData = {
  name: "",
  isEvent: true,
  color: undefined,
  icon: null,
};

const toFormData = (teamType: TeamType): TeamTypeFormData => ({
  name: teamType.name,
  isEvent: teamType.isEvent,
  color: teamType.color?.toLowerCase() || undefined,
  icon: teamType.iconUrl || null,
});

// Update responses leave out the team count; keep the one the list had.
const keepCount = (
  updated: TeamType,
  previous: TeamType | undefined,
): TeamType => {
  const count = previous?._count;
  return count ? { ...updated, _count: count } : updated;
};

// Multipart body of a create/update request. On edit an empty value clears
// the field on the server.
const buildTeamTypeFormData = (
  form: TeamTypeFormData,
  mode: TeamTypeFormMode,
): FormData => {
  const formData = new FormData();
  formData.append("name", form.name.trim());
  formData.append("isEvent", String(form.isEvent));

  if (form.icon instanceof File) {
    formData.append("icon", form.icon);
  } else if (mode === "edit" && form.icon === null) {
    formData.append("icon", "");
  }

  if (form.color) {
    formData.append("color", form.color);
  } else if (mode === "edit") {
    formData.append("color", "");
  }

  return formData;
};

interface Callbacks {
  // Called after a create, with the new type's id.
  onCreated?: (id: string) => void;
  onDeleted?: () => void;
}

export const useTeamTypeForm = (
  teamTypeId: string | undefined,
  { onCreated, onDeleted }: Callbacks = {},
) => {
  const mode: TeamTypeFormMode = teamTypeId ? "edit" : "create";
  const tCommon = useT().formCommon;
  const t = useT().teamTypeForm;
  const locale = useLocale();
  const byName = (a: TeamType, b: TeamType) =>
    a.name.localeCompare(b.name, locale);
  const [teamTypes, setTeamTypes, reloadTeamTypes] = useTeamTypes();
  const selectedType = useMemo(
    () => teamTypes.find((teamType) => teamType.id === teamTypeId) ?? null,
    [teamTypes, teamTypeId],
  );
  // Starts from the stored type, so the form never flashes the empty defaults.
  const [form, setForm] = useState<TeamTypeFormData>(() =>
    selectedType ? toFormData(selectedType) : EMPTY_FORM,
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, showSuccess, hideSuccess] = useTransientMessage();
  // The type as the server last returned it; edits that match it are not sent.
  const savedFormRef = useRef<TeamTypeFormData | null>(
    selectedType ? toFormData(selectedType) : null,
  );

  const isLoaded = selectedType !== null;

  // Fill the form when the edited type changes or its data first arrives.
  // Not on every list refresh, which would wipe in-progress edits.
  useEffect(() => {
    if (!selectedType) return;
    const saved = toFormData(selectedType);
    savedFormRef.current = saved;
    setForm(saved);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [teamTypeId, isLoaded]);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim()) {
      setError(t.nameRequired);
      return;
    }

    const saved = savedFormRef.current;
    if (
      teamTypeId &&
      saved &&
      isSameFormData(
        buildTeamTypeFormData(form, "edit"),
        buildTeamTypeFormData(saved, "edit"),
      )
    ) {
      setError(null);
      showSuccess(tCommon.noChanges);
      return;
    }

    setIsSubmitting(true);
    setError(null);
    hideSuccess();

    try {
      if (teamTypeId) {
        const updated = await updateTeamType(
          teamTypeId,
          buildTeamTypeFormData(form, "edit"),
        );
        setTeamTypes(
          teamTypes
            .map((teamType) =>
              teamType.id === updated.id
                ? keepCount(updated, teamType)
                : teamType,
            )
            .sort(byName),
        );
        savedFormRef.current = toFormData(updated);
        setForm(savedFormRef.current);
        showSuccess(tCommon.saved);
      } else {
        const created = await createTeamType(
          buildTeamTypeFormData(form, "create"),
        );
        setTeamTypes([...teamTypes, created].sort(byName));
        showSuccess(tCommon.created);
        onCreated?.(created.id);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : t.saveFailed);
    } finally {
      setIsSubmitting(false);
    }
  };

  const removeTeamType = async () => {
    if (!teamTypeId) return;
    setIsDeleting(true);
    setError(null);
    try {
      await deleteTeamType(teamTypeId);
      setTeamTypes(teamTypes.filter((teamType) => teamType.id !== teamTypeId));
      reloadTeamTypes();
      onDeleted?.();
    } catch (err) {
      setIsConfirmingDelete(false);
      // The server refuses (409) while teams still use the type.
      const teams = selectedType ? teamTypeTeamCount(selectedType) : 0;
      const inUse = err instanceof ApiError && err.status === 409;
      setError(
        teams > 0
          ? t.inUse(teams)
          : inUse
            ? t.usedByTeams
            : err instanceof Error
              ? err.message
              : t.deleteFailed,
      );
    } finally {
      setIsDeleting(false);
    }
  };

  return {
    mode,
    form,
    setForm,
    selectedType,
    isSubmitting,
    isDeleting,
    isConfirmingDelete,
    setIsConfirmingDelete,
    error,
    setError,
    success,
    submit,
    removeTeamType,
  };
};
