import { Dispatch, SetStateAction } from "react";
import type { AccentColor, TeamType, TeamTypeFormData } from "@/types";
import type { TeamTypeFormMode } from "@/hooks/forms";
import { FormCheckbox, LogoFileInput, TextInput } from "../inputs";
import { ClearButton, SubmitButton } from "../buttons";
import FormFooter from "../FormFooter";
import FormMessages from "../FormMessages";
import TeamTypeColorField from "./TeamTypeColorField";

interface Props {
  mode: TeamTypeFormMode;
  selectedEvent: TeamType | null;
  form: TeamTypeFormData;
  setForm: Dispatch<SetStateAction<TeamTypeFormData>>;
  color?: AccentColor;
  isSubmitting: boolean;
  formId: string;
  error: string | null;
  success: string | null;
  submitLabel: string;
  onReset: () => void;
}

const TeamTypeFormContent = ({
  mode,
  selectedEvent,
  form,
  setForm,
  color = "blue",
  isSubmitting,
  formId,
  error,
  success,
  submitLabel,
  onReset,
}: Props) => {

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
            name="teamTypeName"
            label="Назва типу команди"
            value={form.name}
            onChange={(value) => setForm({ ...form, name: value })}
            placeholder="EJF"
            required
            color={color}
          />
        </div>
      </div>

      <FormCheckbox
        checked={form.isEvent}
        label="Команда івенту"
        color={color}
        onChange={(isEvent) => setForm({ ...form, isEvent })}
      />

      <TeamTypeColorField
        value={form.color}
        onChange={(value) => setForm({ ...form, color: value })}
        color={color}
      />

      <FormFooter>
        <FormMessages error={error} success={success} color={color} />
        <div className="flex w-4/5 flex-row justify-center gap-3">
          <ClearButton
            isSubmitting={isSubmitting}
            onClick={onReset}
            color={color}
          >
            Очистити
          </ClearButton>
          <SubmitButton isSubmitting={isSubmitting} form={formId} color={color}>
            {submitLabel}
          </SubmitButton>
        </div>
      </FormFooter>
    </>
  );
};

export default TeamTypeFormContent;
