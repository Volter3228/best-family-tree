import { useId } from "react";
import { useTeamTypeForm } from "@/hooks/forms";
import type { AccentColor } from "@/types";
import TeamTypeFormContent from "./TeamTypeFormContent";

interface Props {
  // Edit this type; omitted to create one.
  teamTypeId?: string;
  onCreated?: (id: string) => void;
  onDeleted?: () => void;
  onCancel: () => void;
  color?: AccentColor;
}

const TeamTypeForm = ({ teamTypeId, onCreated, onDeleted, onCancel, color = "blue" }: Props) => {
  const {
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
  } = useTeamTypeForm(teamTypeId, { onCreated, onDeleted });
  const formId = useId();

  return (
    <form id={formId} className="flex w-full flex-col gap-3" onSubmit={submit} noValidate>
      <TeamTypeFormContent
        mode={mode}
        selectedType={selectedType}
        form={form}
        setForm={setForm}
        color={color}
        isSubmitting={isSubmitting}
        isDeleting={isDeleting}
        isConfirmingDelete={isConfirmingDelete}
        setIsConfirmingDelete={setIsConfirmingDelete}
        formId={formId}
        error={error}
        setError={setError}
        success={success}
        onDelete={removeTeamType}
        onCancel={onCancel}
      />
    </form>
  );
};

export default TeamTypeForm;
