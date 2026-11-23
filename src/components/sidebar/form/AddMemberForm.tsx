import { FormEvent, useEffect, useId, useState } from "react";
import {
  useMembersActions,
  useMentorsList,
  useTeamTypes,
  useRoles,
  useTeams,
} from "@/hooks";
import { MEMBER_FORM_DEFAULTS } from "@/constants/form";
import { useT } from "@/i18n/useT";
import apiAddMember from "@/api/addMember";
import type {
  AccentColor,
  MemberFormData,
  MemberFormErrors,
  Member as MemberType,
} from "@/types";
import { MemberFormFields } from "./fields";
import FormError from "./FormError";
import { describeSubmitError } from "./describeSubmitError";
import { SubmitButton, ClearButton } from "./buttons";
import { buildMemberFormData } from "./buildMemberFormData";
import validateMemberForm from "./validations/memberFormValidation";
import FormFooter from "./FormFooter";

interface Props {
  onSuccess?: (member: MemberType) => void;
  color?: AccentColor;
}

export default function AddMemberForm({ onSuccess, color = "blue" }: Props) {
  const [form, setForm] = useState<MemberFormData>({ ...MEMBER_FORM_DEFAULTS });
  const [errors, setErrors] = useState<MemberFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [isMinimal, setIsMinimal] = useState(false);
  const formId = useId();
  const t = useT().formCommon;
  const tMember = useT().memberForm;

  const { addMember, getMentorsList } = useMembersActions();
  const mentorsList = useMentorsList();
  const [teamTypes, , reloadTeamTypes] = useTeamTypes();
  const [, , reloadRoles] = useRoles();
  const [teams, , reloadTeams] = useTeams();

  useEffect(() => {
    if (!mentorsList.length) {
      getMentorsList();
    }
  }, [mentorsList, getMentorsList]);

  const handleResetForm = () => {
    setForm({ ...MEMBER_FORM_DEFAULTS });
    setErrors({});
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setErrors({});
    const validationErrors = validateMemberForm(
      form,
      mentorsList,
      teamTypes,
      null,
      {
        minimal: isMinimal,
        teams,
        t: tMember.validation,
      },
    );
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setFormError(null);
    setIsSubmitting(true);
    const formData = buildMemberFormData(form);
    if (isMinimal) formData.append("sparse", "true");

    try {
      const newMember = await apiAddMember(formData);
      if (newMember) {
        addMember(newMember);
        // Saving may have created new roles/teams/team types server-side.
        reloadRoles();
        reloadTeams();
        reloadTeamTypes();
        handleResetForm();
        onSuccess?.(newMember);
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

  return (
    <form
      id={formId}
      className="flex w-full flex-col gap-4"
      onSubmit={handleSubmit}
      noValidate
    >
      <MemberFormFields
        minimal={isMinimal}
        onMinimalChange={setIsMinimal}
        form={form}
        setForm={setForm}
        errors={errors}
        color={color}
      />
      <FormError message={formError} color={color} />
      <FormFooter>
        <ClearButton
          isSubmitting={isSubmitting}
          onClick={handleResetForm}
          color={color}
        >
          {t.clear}
        </ClearButton>
        <SubmitButton isSubmitting={isSubmitting} form={formId} color={color}>
          {isSubmitting ? t.creating : t.create}
        </SubmitButton>
      </FormFooter>
    </form>
  );
}
