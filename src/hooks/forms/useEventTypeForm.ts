import { FormEvent, useEffect, useMemo, useState } from "react";
import { createEventType, updateEventType } from "@/api";
import { useEventTypes } from "../data/useMeta";
import type { EventTypeFormData } from "@/types";

export type EventTypeFormMode = "create" | "edit";

export const useEventTypeForm = () => {
  const [mode, setMode] = useState<EventTypeFormMode>("create");
  const [eventTypes, setEventTypes] = useEventTypes();
  const [selectedEventId, setSelectedEventId] = useState("");
  const [form, setForm] = useState<EventTypeFormData>({
    name: "",
    color: undefined,
    icon: null,
  });
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
      eventTypes.map((eventType) => ({
        value: eventType.id,
        text: eventType.name,
      })),
    [eventTypes],
  );

  const selectedEvent = useMemo(
    () =>
      eventTypes.find((eventType) => eventType.id === selectedEventId) || null,
    [eventTypes, selectedEventId],
  );

  // Hydrate only on mode/selection change — depending on selectedEvent
  // identity would wipe in-progress edits when the list refreshes.
  useEffect(() => {
    if (mode !== "edit") return;
    const selected =
      eventTypes.find((eventType) => eventType.id === selectedEventId) || null;
    setForm(
      selected
        ? {
          name: selected.name,
          color: selected.color || undefined,
          icon: selected.iconUrl || null,
        }
        : { name: "", color: undefined, icon: null },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, selectedEventId]);

  const resetForm = () => {
    setForm({ name: "", color: undefined, icon: null });
    setError(null);
    setSuccess(null);
  };

  const changeMode = (nextMode: EventTypeFormMode) => {
    setMode(nextMode);
    setSelectedEventId("");
    resetForm();
  };

  const buildFormData = () => {
    const formData = new FormData();
    formData.append("name", form.name.trim());

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
        const updatedEvent = await updateEventType(selectedEventId, formData);
        setEventTypes(
          eventTypes
            .map((eventType) =>
              eventType.id === updatedEvent.id ? updatedEvent : eventType,
            )
            .sort((a, b) => a.name.localeCompare(b.name, "uk")),
        );
        setForm({
          name: updatedEvent.name,
          color: updatedEvent.color || undefined,
          icon: updatedEvent.iconUrl || null,
        });
      } else {
        const createdEvent = await createEventType(formData);
        setEventTypes(
          [...eventTypes, createdEvent].sort((a, b) =>
            a.name.localeCompare(b.name, "uk"),
          ),
        );
        resetForm();
        setSuccess(`Створено: ${createdEvent.name}`);
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to save event type",
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
