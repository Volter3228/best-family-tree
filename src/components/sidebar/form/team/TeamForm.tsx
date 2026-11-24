import { useId } from "react";
import { useTeamForm } from "@/hooks/forms";
import { useT } from "@/i18n/useT";
import type { AccentColor } from "@/types";
import TeamFormContent from "./TeamFormContent";

interface Props {
  // Edit this team; without it the form creates a new one.
  teamId?: string;
  // Height kept while the team loads, so the sidebar doesn't jump.
  loadingHeight?: number;
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
  loadingHeight,
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
  const t = useT().formCommon;

  return (
    <form
      id={formId}
      className="flex w-full flex-col gap-6"
      onSubmit={submit}
      noValidate
    >
      {isLoading ? (
        <p
          className="text-sm text-foreground/60"
          style={{ minHeight: loadingHeight }}
        >
          {t.loading}
        </p>
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
