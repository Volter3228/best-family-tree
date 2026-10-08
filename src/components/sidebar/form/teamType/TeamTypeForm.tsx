import { useId } from "react";
import { useTeamTypeForm } from "@/hooks/forms";
import type { AccentColor } from "@/types";
import { DropdownSelectInput } from "../inputs";
import SegmentedControl, { CREATE_EDIT_OPTIONS } from "../SegmentedControl";
import TeamTypeFormContent from "./TeamTypeFormContent";

interface Props {
  color?: AccentColor;
}

const TeamTypeForm = ({ color = "blue" }: Props) => {
  const {
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
  } = useTeamTypeForm();
  const formId = useId();

  const submitLabel = isSubmitting
    ? mode === "edit"
      ? "Зберігаємо..."
      : "Створюємо..."
    : mode === "edit"
      ? "Зберегти"
      : "Створити";

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <SegmentedControl
        options={CREATE_EDIT_OPTIONS}
        value={mode}
        onChange={changeMode}
        color={color}
      />
      <form
        id={formId}
        className="flex flex-col items-center gap-6 w-full"
        onSubmit={submit}
        noValidate
      >
        {mode === "edit" && (
          <div className="flex flex-col w-full">
            <DropdownSelectInput
              name="teamTypeSelect"
              label="Тип команди"
              options={eventOptions}
              onSelect={setSelectedEventId}
              initialValue={selectedEventId}
              placeholder="Тип команди"
              color={color}
            />
          </div>
        )}
        <TeamTypeFormContent
          mode={mode}
          selectedEvent={selectedEvent}
          form={form}
          setForm={setForm}
          color={color}
          isSubmitting={isSubmitting}
          formId={formId}
          error={error}
          success={success}
          submitLabel={submitLabel}
          onReset={resetForm}
        />
      </form>
    </div>
  );
};

export default TeamTypeForm;
