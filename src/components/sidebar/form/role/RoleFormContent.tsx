import type { Dispatch, SetStateAction } from "react";
import type { RoleFormData } from "@/hooks/forms/useRoleForm";
import type { AccentColor } from "@/types";
import { formatCount, PARTICIPANT_FORMS, pluralizeUk } from "@/utils/strings";
import { ClearButton, SubmitButton } from "../buttons";
import ConfirmDeleteControl from "../ConfirmDeleteControl";
import FormFooter from "../FormFooter";
import FormMessages from "../FormMessages";
import { FormCheckbox, TextAreaInput, TextInput } from "../inputs";

// Locative: "Використовується в 5 учасниках".
const LOCATIVE_PARTICIPANT_FORMS: readonly [string, string, string] = [
  "учаснику",
  "учасників",
  "учасників",
];

interface Props {
  isEdit: boolean;
  form: RoleFormData;
  setForm: Dispatch<SetStateAction<RoleFormData>>;
  positionCount: number;
  memberCount: number;
  color: AccentColor;
  formId: string;
  isSubmitting: boolean;
  isConfirmingDelete: boolean;
  error: string | null;
  success: string | null;
  onAskDelete: (isConfirming: boolean) => void;
  onDelete: () => void;
  onCancel: () => void;
}

const RoleFormContent = ({
  isEdit,
  form,
  setForm,
  positionCount,
  memberCount,
  color,
  formId,
  isSubmitting,
  isConfirmingDelete,
  error,
  success,
  onAskDelete,
  onDelete,
  onCancel,
}: Props) => {
  // Deletion is blocked by positions; the explanation counts the people.
  const blocked = isEdit && positionCount > 0;
  const isSingleMember =
    pluralizeUk(memberCount, PARTICIPANT_FORMS) === PARTICIPANT_FORMS[0];
  const blockedReason = blocked
    ? isSingleMember
      ? `Посаду використовує ${formatCount(memberCount, PARTICIPANT_FORMS)} — спершу змініть це`
      : `Посаду використовують ${formatCount(memberCount, PARTICIPANT_FORMS)} — спершу змініть їх`
    : null;

  return (
    <>
      <div className="flex flex-col gap-3">
        <TextInput
          name="roleName"
          label="Назва"
          value={form.name}
          onChange={(name) => setForm({ ...form, name })}
          placeholder="Наприклад, Координатор"
          required
          color={color}
        />
        <TextAreaInput
          name="roleDescription"
          label="Опис"
          value={form.description}
          onChange={(description) => setForm({ ...form, description })}
          color={color}
        />
      </div>
      <div className="flex flex-col gap-3">
        <FormCheckbox
          checked={form.isLeaderPosition}
          label="Лідерська посада"
          hint="Учасників із такою посадою відзначено як лідерів команди."
          color={color}
          onChange={(isLeaderPosition) =>
            setForm({ ...form, isLeaderPosition })
          }
        />
        {isEdit && (
          <p className="text-sm text-foreground/60">
            Використовується в{" "}
            {formatCount(memberCount, LOCATIVE_PARTICIPANT_FORMS)}
          </p>
        )}
      </div>

      <FormMessages error={error} color={color} />
      <FormFooter>
        {isEdit && (
          <ConfirmDeleteControl
            label="Видалити"
            title="Видалити посаду?"
            message="Посаду буде видалено."
            isConfirming={isConfirmingDelete}
            isSubmitting={isSubmitting}
            blockedReason={blockedReason}
            onAsk={onAskDelete}
            onConfirm={onDelete}
          />
        )}
        <div className="ml-auto">
          <ClearButton
            onClick={onCancel}
            isSubmitting={isSubmitting}
            color={color}
          >
            Скасувати
          </ClearButton>
        </div>
        <div className="flex w-36">
          <SubmitButton
            isSubmitting={isSubmitting}
            form={formId}
            color={color}
            message={success}
          >
            {isEdit ? "Зберегти" : "Створити"}
          </SubmitButton>
        </div>
      </FormFooter>
    </>
  );
};

export default RoleFormContent;
