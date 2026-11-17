import { FormEvent, useEffect, useId, useState, useMemo } from "react";
import {
  useMembersActions,
  useMentees,
  useMentorsList,
  useTeamTypes,
  useRoles,
  useTeams,
} from "@/hooks";
import apiEditMember from "@/api/editMember";
import apiDeleteMember from "@/api/deleteMember";
import { getMemberAvatar } from "@/utils";
import { Member } from "@/models";
import type { MemberFormData, AccentColor } from "@/types";
import { useTransientMessage } from "@/hooks/forms/useTransientMessage";
import { MemberFormFields } from "./fields";
import FormError from "./FormError";
import { describeSubmitError } from "./describeSubmitError";
import { isSameFormData } from "@/utils/formDataEquals";
import { MEMBER_FORM_DEFAULTS, NO_CHANGES_MESSAGE } from "@/constants/form";
import { SubmitButton, ClearButton } from "./buttons";
import { buildEditPayload, getInitialFormData } from "./editMemberFormData";
import validateMemberForm from "./validations/memberFormValidation";
import FormFooter from "./FormFooter";
import ConfirmDeleteControl from "./ConfirmDeleteControl";

interface Props {
  member: Member;
  onExit: () => void;
  // Called instead of onExit once the member is deleted.
  onDeleted?: () => void;
  color?: AccentColor;
}

const EditMemberForm = ({
  member,
  onExit,
  onDeleted,
  color = "blue",
}: Props) => {
  const initialFormData = useMemo(() => getInitialFormData(member), [member]);

  const [form, setForm] = useState<MemberFormData>(initialFormData);
  const [errors, setErrors] = useState<
    Partial<Record<keyof MemberFormData, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [success, showSuccess, hideSuccess] = useTransientMessage();
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);
  const formId = useId();

  const mentees = useMentees(member.id);
  const { updateMember, reloadMembers, getMentorsList } = useMembersActions();
  const mentorsList = useMentorsList();
  const [teamTypes, , reloadTeamTypes] = useTeamTypes();
  const [, , reloadRoles] = useRoles();
  const [teams, , reloadTeams] = useTeams();

  useEffect(() => {
    if (!mentorsList.length) {
      getMentorsList();
    }
  }, [mentorsList, getMentorsList]);

  useEffect(() => {
    setForm(initialFormData);
  }, [initialFormData]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setErrors({});
    setFormError(null);
    hideSuccess();
    if (
      isSameFormData(buildEditPayload(form), buildEditPayload(initialFormData))
    ) {
      showSuccess(NO_CHANGES_MESSAGE);
      return;
    }

    const validationErrors = validateMemberForm(
      form,
      mentorsList,
      teamTypes,
      member,
      { teams },
    );
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    const formData = buildEditPayload(form);

    try {
      const updatedMember = await apiEditMember(member.id, formData);
      if (updatedMember) {
        updateMember(updatedMember);
        // Saving may have created new roles/teams/team types server-side.
        reloadRoles();
        reloadTeams();
        reloadTeamTypes();
        showSuccess("Збережено");
      }
    } catch (error) {
      const { field, message } = describeSubmitError(
        error,
        Object.keys(MEMBER_FORM_DEFAULTS),
      );
      if (field) setErrors({ [field]: message });
      else setFormError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // The server refuses deletion while mentees remain, so the button is blocked
  // here with the same rule. Refresh everything that showed the member (tree,
  // mentor list, team rosters) after a successful delete.
  const deleteBlockedReason =
    mentees.length > 0
      ? `Не можна видалити: перепризначте або видаліть менті (${mentees.length})`
      : null;

  const handleDelete = async () => {
    setIsSubmitting(true);
    setFormError(null);
    try {
      await apiDeleteMember(member.id);
      await reloadMembers();
      getMentorsList();
      reloadTeams();
      (onDeleted ?? onExit)();
    } catch (error) {
      setFormError(describeSubmitError(error, []).message);
    } finally {
      setIsSubmitting(false);
      setIsConfirmingDelete(false);
    }
  };

  const submitLabel = isSubmitting ? "Зберігаємо..." : "Зберегти";

  return (
    <form
      id={formId}
      className="flex w-full flex-col gap-4"
      onSubmit={handleSubmit}
      noValidate
    >
      <MemberFormFields
        form={form}
        setForm={setForm}
        errors={errors}
        mode="edit"
        editedMemberId={member.id}
        initialAvatar={getMemberAvatar(member)}
        color={color}
      />
      <FormError message={formError} color={color} />
      <FormFooter>
        <ConfirmDeleteControl
          label="Видалити учасника"
          title="Видалити учасника?"
          message={`Учасника «${member.name}» буде видалено разом з його посадами.`}
          isConfirming={isConfirmingDelete}
          isSubmitting={isSubmitting}
          blockedReason={deleteBlockedReason}
          onAsk={setIsConfirmingDelete}
          onConfirm={handleDelete}
        />
        <ClearButton
          isSubmitting={isSubmitting}
          onClick={onExit}
          color={color}
        >
          Скасувати
        </ClearButton>
        <SubmitButton
          isSubmitting={isSubmitting}
          form={formId}
          color={color}
          message={success}
        >
          {submitLabel}
        </SubmitButton>
      </FormFooter>
    </form>
  );
};

export default EditMemberForm;
