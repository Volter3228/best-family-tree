import { Dispatch, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor, EventType, EventTypeFormData } from "@/types";
import type { EventTypeFormMode } from "@/hooks/forms";
import { LogoFileInput, TextInput } from "../inputs";
import { ClearButton, SubmitButton } from "../buttons";
import EventTypeColorField from "./EventTypeColorField";

interface Props {
  mode: EventTypeFormMode;
  selectedEvent: EventType | null;
  form: EventTypeFormData;
  setForm: Dispatch<SetStateAction<EventTypeFormData>>;
  color?: AccentColor;
  isSubmitting: boolean;
  error: string | null;
  success: string | null;
  submitLabel: string;
  onReset: () => void;
}

const EventTypeFormContent = ({
  mode,
  selectedEvent,
  form,
  setForm,
  color = "blue",
  isSubmitting,
  error,
  success,
  submitLabel,
  onReset,
}: Props) => {
  const colorClasses = COLOR_CLASSES[color];

  if (mode === "edit" && !selectedEvent) return null;

  return (
    <>
      <div className="flex flex-row flex-1 w-full justify-center mb-2">
        <LogoFileInput
          onImageSelect={(file) => setForm({ ...form, icon: file ?? null })}
          image={form.icon ?? null}
          initialImage={
            mode === "edit" && selectedEvent?.iconUrl
              ? selectedEvent.iconUrl
              : null
          }
          color={color}
        />
      </div>

      <div className="flex flex-row w-full">
        <div className="flex flex-col flex-1 relative">
          <TextInput
            name="eventTypeName"
            label="Назва івенту"
            value={form.name}
            onChange={(value) => setForm({ ...form, name: value })}
            placeholder="EJF"
            required
            color={color}
          />
        </div>
      </div>

      <EventTypeColorField
        value={form.color}
        onChange={(value) => setForm({ ...form, color: value })}
        color={color}
      />

      {error && (
        <p className={twMerge("text-sm", colorClasses.text)}>{error}</p>
      )}
      {success && (
        <p className="w-full rounded-lg bg-green-500/10 px-3 py-2 text-sm text-green-600 dark:text-green-300">
          {success}
        </p>
      )}

      <div className="flex flex-row w-4/5 justify-center gap-3">
        <ClearButton
          isSubmitting={isSubmitting}
          onClick={onReset}
          color={color}
        >
          Очистити
        </ClearButton>
        <SubmitButton isSubmitting={isSubmitting} color={color}>
          {submitLabel}
        </SubmitButton>
      </div>
    </>
  );
};

export default EventTypeFormContent;
