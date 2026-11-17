import { useId } from "react";
import { useRoleForm } from "@/hooks/forms/useRoleForm";
import type { AccentColor, Role } from "@/types";
import RoleFormContent from "./RoleFormContent";

interface Props {
  // Role to edit; omitted when creating.
  roleId?: string;
  color: AccentColor;
  onCreated: (role: Role) => void;
  onDeleted: () => void;
  onCancel: () => void;
  // Shown on the submit button when the form opens.
  initialMessage?: string;
}

const RoleForm = ({
  roleId,
  color,
  onCreated,
  onDeleted,
  onCancel,
  initialMessage,
}: Props) => {
  const formId = useId();
  const state = useRoleForm({ roleId, onCreated, onDeleted, initialMessage });

  // The roles list is still loading, or the role is gone.
  if (roleId && !state.role) return null;

  return (
    <form
      id={formId}
      className="flex w-full flex-col gap-4"
      onSubmit={state.submit}
      noValidate
    >
      <RoleFormContent
        isEdit={Boolean(roleId)}
        form={state.form}
        setForm={state.setForm}
        positionCount={state.positionCount}
        memberCount={state.memberCount}
        color={color}
        formId={formId}
        isSubmitting={state.isSubmitting}
        isConfirmingDelete={state.isConfirmingDelete}
        error={state.error}
        success={state.success}
        onAskDelete={state.setIsConfirmingDelete}
        onDelete={state.remove}
        onCancel={onCancel}
      />
    </form>
  );
};

export default RoleForm;
