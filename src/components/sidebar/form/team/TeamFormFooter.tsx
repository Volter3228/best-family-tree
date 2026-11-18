import type { AccentColor } from "@/types";
import { useT } from "@/i18n/useT";
import { ClearButton, SubmitButton } from "../buttons";
import ConfirmDeleteControl from "../ConfirmDeleteControl";
import FormFooter from "../FormFooter";

interface Props {
  isEdit: boolean;
  formId: string;
  color: AccentColor;
  isSubmitting: boolean;
  isConfirmingDelete: boolean;
  success: string | null;
  positionsCount: number;
  onCancel?: () => void;
  onAskDelete: (isConfirming: boolean) => void;
  onDelete: () => void;
}

// Edit: trash on the left (its confirmation floats above the row). Then the
// optional "Cancel" and the primary action. The row never changes shape.
const TeamFormFooter = ({
  isEdit,
  formId,
  color,
  isSubmitting,
  isConfirmingDelete,
  success,
  positionsCount,
  onCancel,
  onAskDelete,
  onDelete,
}: Props) => {
  const tCommon = useT().formCommon;
  const t = useT().teamForm;
  return (
    <FormFooter>
      {isEdit && (
        <ConfirmDeleteControl
          label={t.deleteTeam}
          title={t.deleteTitle}
          message={
            positionsCount > 0
              ? t.deleteWithPositions(positionsCount)
              : t.deleteMessage
          }
          isConfirming={isConfirmingDelete}
          isSubmitting={isSubmitting}
          onAsk={onAskDelete}
          onConfirm={onDelete}
        />
      )}
      {onCancel && (
        <ClearButton
          isSubmitting={isSubmitting}
          onClick={onCancel}
          color={color}
        >
          {tCommon.cancel}
        </ClearButton>
      )}
      <SubmitButton
        isSubmitting={isSubmitting}
        form={formId}
        color={color}
        message={success}
      >
        {isEdit ? tCommon.save : tCommon.create}
      </SubmitButton>
    </FormFooter>
  );
};

export default TeamFormFooter;
