import { useId } from "react";
import { useTeamForm } from "@/hooks/forms";
import type { AccentColor } from "@/types";
import { DropdownSelectInput } from "../inputs";
import SegmentedControl, { CREATE_EDIT_OPTIONS } from "../SegmentedControl";
import TeamFormContent from "./TeamFormContent";

interface Props {
  // Edit this team only (no create/edit switch and no team picker).
  teamId?: string;
  onSaved?: () => void;
  onDeleted?: () => void;
  color?: AccentColor;
}

const TeamForm = ({ teamId, onSaved, onDeleted, color = "blue" }: Props) => {
  const {
    mode,
    form,
    setForm,
    teamOptions,
    teamTypes,
    selectedTeam,
    selectedTeamId,
    setSelectedTeamId,
    isLoading,
    isSubmitting,
    isConfirmingDelete,
    setIsConfirmingDelete,
    error,
    success,
    resetForm,
    changeMode,
    submit,
    removeTeam,
    addMemberRow,
    updateMemberRow,
    removeMemberRow,
  } = useTeamForm({ fixedTeamId: teamId, onSaved, onDeleted });
  const formId = useId();

  const isEdit = mode === "edit";
  const submitLabel = isSubmitting
    ? isEdit
      ? "Зберігаємо..."
      : "Створюємо..."
    : isEdit
      ? "Зберегти"
      : "Створити";

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      {!teamId && (
        <SegmentedControl
          options={CREATE_EDIT_OPTIONS}
          value={mode}
          onChange={changeMode}
          color={color}
        />
      )}
      <form
        id={formId}
        className="flex flex-col items-center gap-6 w-full"
        onSubmit={submit}
        noValidate
      >
        {isEdit && !teamId && (
          <div className="flex flex-col w-full">
            <DropdownSelectInput
              name="teamSelect"
              label="Команда"
              options={teamOptions}
              onSelect={setSelectedTeamId}
              initialValue={selectedTeamId}
              placeholder="Оберіть команду"
              color={color}
            />
          </div>
        )}
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
            submitLabel={submitLabel}
            onReset={resetForm}
            onAskDelete={setIsConfirmingDelete}
            onDelete={removeTeam}
            members={{ addMemberRow, updateMemberRow, removeMemberRow }}
          />
        )}
      </form>
    </div>
  );
};

export default TeamForm;
