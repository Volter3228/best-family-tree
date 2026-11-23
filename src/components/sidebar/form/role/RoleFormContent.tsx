import { ROLE_DESCRIPTION_MAX_LENGTH } from "@/constants/form";
import type { Dispatch, SetStateAction } from "react";
import type { RoleFormData } from "@/hooks/forms/useRoleForm";
import type { AccentColor } from "@/types";
import { useT } from "@/i18n/useT";
import { ClearButton, SubmitButton } from "../buttons";
import ConfirmDeleteControl from "../ConfirmDeleteControl";
import FormFooter from "../FormFooter";
import FormMessages from "../FormMessages";
import { FormCheckbox, TextAreaInput, TextInput } from "../inputs";

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
  const tCommon = useT().formCommon;
  const t = useT().roleForm;
  // Deletion is blocked by positions; the explanation counts the people.
  const blocked = isEdit && positionCount > 0;
  const blockedReason = blocked ? t.blockedByMembers(memberCount) : null;

  return (
    <>
      <div className="flex flex-col gap-3">
        <TextInput
          name="roleName"
          label={t.name}
          value={form.name}
          onChange={(name) => setForm({ ...form, name })}
          placeholder={t.namePlaceholder}
          required
          color={color}
        />
        <TextAreaInput
          name="roleDescription"
          maxLength={ROLE_DESCRIPTION_MAX_LENGTH}
          label={t.description}
          value={form.description}
          onChange={(description) => setForm({ ...form, description })}
          color={color}
        />
      </div>
      <div className="flex flex-col gap-3">
        <FormCheckbox
          checked={form.isLeaderPosition}
          label={t.leaderRole}
          hint={t.leaderRoleHint}
          color={color}
          onChange={(isLeaderPosition) =>
            setForm({ ...form, isLeaderPosition })
          }
        />
        {isEdit && (
          <p className="text-sm text-foreground/60">{t.usedBy(memberCount)}</p>
        )}
      </div>

      <FormMessages error={error} color={color} />
      <FormFooter>
        {isEdit && (
          <ConfirmDeleteControl
            label={tCommon.delete}
            title={t.deleteTitle}
            message={t.deleteMessage}
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
            {tCommon.cancel}
          </ClearButton>
        </div>
        <div className="flex w-36">
          <SubmitButton
            isSubmitting={isSubmitting}
            form={formId}
            color={color}
            message={success}
          >
            {isEdit ? tCommon.save : tCommon.create}
          </SubmitButton>
        </div>
      </FormFooter>
    </>
  );
};

export default RoleFormContent;
