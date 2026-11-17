import { useId } from "react";
import { useTeamForm } from "@/hooks/forms";
import type { AccentColor } from "@/types";
import TeamFormContent from "./TeamFormContent";

interface Props {
  // Edit this team; without it the form creates a new one.
  teamId?: string;
  onCreated?: (teamId: string) => void;
  onSaved?: () => void;
  onDeleted?: () => void;
  // Create mode: leave the form without saving.
  onCancel?: () => void;
  // Shown on the submit button when the form opens.
  initialMessage?: string;
  color?: AccentColor;
}

const TeamForm = ({
  teamId,
  onCreated,
  onSaved,
  onDeleted,
  onCancel,
  initialMessage,
  color = "blue",
}: Props) => {
  const {
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
    submit,
    removeTeam,
    addMemberRow,
    updateMemberRow,
    removeMemberRow,
  } = useTeamForm({ teamId, onCreated, onSaved, onDeleted, initialMessage });
  const formId = useId();

  return (
    <form
      id={formId}
      className="flex w-full flex-col gap-6"
      onSubmit={submit}
      noValidate
    >
      {isLoading ? (
        <p className="text-sm text-foreground/60">Завантажуємо...</p>
      ) : (
        <TeamFormContent
          mode={mode}
          selectedTeam={selectedTeam}
          form={form}
          setForm={setForm}
          teamTypes={teamTypes}
          color={color}
          isSubmitting={isSubmitting}
          formId={formId}
          isConfirmingDelete={isConfirmingDelete}
          error={error}
          success={success}
          onCancel={onCancel}
          onAskDelete={setIsConfirmingDelete}
          onDelete={removeTeam}
          members={{ addMemberRow, updateMemberRow, removeMemberRow }}
        />
      )}
    </form>
  );
};

export default TeamForm;
