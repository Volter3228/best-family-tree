import { useEventTypeForm } from "@/hooks/forms";
import type { AccentColor } from "@/types";
import { DropdownSelectInput } from "../inputs";
import EventTypeModeSwitch from "./EventTypeModeSwitch";
import EventTypeFormContent from "./EventTypeFormContent";

interface Props {
  color?: AccentColor;
}

const EventTypeForm = ({ color = "blue" }: Props) => {
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
  } = useEventTypeForm();

  const submitLabel = isSubmitting
    ? mode === "edit"
      ? "Зберігаємо..."
      : "Створюємо..."
    : mode === "edit"
      ? "Зберегти"
      : "Створити";

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <EventTypeModeSwitch mode={mode} onChange={changeMode} color={color} />
      <form
        className="flex flex-col items-center gap-6 w-full"
        onSubmit={submit}
        noValidate
      >
        {mode === "edit" && (
          <div className="flex flex-col w-full">
            <DropdownSelectInput
              name="eventTypeSelect"
              label="Оберіть івент"
              options={eventOptions}
              onSelect={setSelectedEventId}
              initialValue={selectedEventId}
              placeholder="Оберіть івент"
              color={color}
            />
          </div>
        )}
        <EventTypeFormContent
          mode={mode}
          selectedEvent={selectedEvent}
          form={form}
          setForm={setForm}
          color={color}
          isSubmitting={isSubmitting}
          error={error}
          success={success}
          submitLabel={submitLabel}
          onReset={resetForm}
        />
      </form>
    </div>
  );
};

export default EventTypeForm;
