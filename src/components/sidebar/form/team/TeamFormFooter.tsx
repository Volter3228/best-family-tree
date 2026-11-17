import type { AccentColor } from "@/types";
import { formatCount, POSITION_FORMS } from "@/utils/strings";
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
// optional "Скасувати" and the primary action. The row never changes shape.
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
}: Props) => (
  <FormFooter>
    {isEdit && (
      <ConfirmDeleteControl
        label="Видалити команду"
        title="Видалити команду?"
        message={
          positionsCount > 0
            ? `Команду та ${formatCount(positionsCount, POSITION_FORMS)} її учасників буде видалено.`
            : "Команду буде видалено."
        }
        isConfirming={isConfirmingDelete}
        isSubmitting={isSubmitting}
        onAsk={onAskDelete}
        onConfirm={onDelete}
      />
    )}
    {onCancel && (
      <ClearButton isSubmitting={isSubmitting} onClick={onCancel} color={color}>
        Скасувати
      </ClearButton>
    )}
    <SubmitButton isSubmitting={isSubmitting} form={formId} color={color} message={success}>
      {isEdit ? "Зберегти" : "Створити"}
    </SubmitButton>
  </FormFooter>
);

export default TeamFormFooter;
