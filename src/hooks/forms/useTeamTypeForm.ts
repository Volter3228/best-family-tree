import { FormEvent, useEffect, useMemo, useState } from "react";
import { createTeamType, updateTeamType } from "@/api";
import { useTeamTypes } from "../data/useMeta";
import type { TeamType, TeamTypeFormData } from "@/types";

export type TeamTypeFormMode = "create" | "edit";

const EMPTY_FORM: TeamTypeFormData = {
  name: "",
  isEvent: true,
  color: undefined,
  icon: null,
};

const toFormData = (teamType: TeamType): TeamTypeFormData => ({
  name: teamType.name,
  isEvent: teamType.isEvent,
  color: teamType.color || undefined,
  icon: teamType.iconUrl || null,
});

export const useTeamTypeForm = () => {
  const [mode, setMode] = useState<TeamTypeFormMode>("create");
  const [teamTypes, setTeamTypes] = useTeamTypes();
  const [selectedEventId, setSelectedEventId] = useState("");
  const [form, setForm] = useState<TeamTypeFormData>(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    if (!success) return;
    const timeoutId = window.setTimeout(() => setSuccess(null), 2000);
    return () => window.clearTimeout(timeoutId);
  }, [success]);

  const eventOptions = useMemo(
    () =>
      teamTypes.map((teamType) => ({
        value: teamType.id,
        text: teamType.name,
      })),
    [teamTypes],
  );

  const selectedEvent = useMemo(
    () =>
      teamTypes.find((teamType) => teamType.id === selectedEventId) || null,
    [teamTypes, selectedEventId],
  );

  // Hydrate only on mode/selection change — depending on selectedEvent
  // identity would wipe in-progress edits when the list refreshes.
  useEffect(() => {
    if (mode !== "edit") return;
    const selected =
      teamTypes.find((teamType) => teamType.id === selectedEventId) || null;
    setForm(selected ? toFormData(selected) : EMPTY_FORM);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, selectedEventId]);

  const resetForm = () => {
    setForm(EMPTY_FORM);
    setError(null);
    setSuccess(null);
  };

  const changeMode = (nextMode: TeamTypeFormMode) => {
    setMode(nextMode);
    setSelectedEventId("");
    resetForm();
  };

  const buildFormData = () => {
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

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim()) {
      setError("Назва обов'язкова");
      return;
    }

    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      const formData = buildFormData();

      if (mode === "edit" && selectedEventId) {
        const updatedEvent = await updateTeamType(selectedEventId, formData);
        setTeamTypes(
          teamTypes
            .map((teamType) =>
              teamType.id === updatedEvent.id ? updatedEvent : teamType,
            )
            .sort((a, b) => a.name.localeCompare(b.name, "uk")),
        );
        setForm(toFormData(updatedEvent));
      } else {
        const createdEvent = await createTeamType(formData);
        setTeamTypes(
          [...teamTypes, createdEvent].sort((a, b) =>
            a.name.localeCompare(b.name, "uk"),
          ),
        );
        resetForm();
        setSuccess(`Створено: ${createdEvent.name}`);
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to save team type",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    mode,
    form,
    setForm,
    eventOptions,
    selectedEvent,
    selectedEventId,
    setSelectedEventId,
    isSubmitting,
    error,
    success,
    resetForm,
    changeMode,
    submit,
  };
};
