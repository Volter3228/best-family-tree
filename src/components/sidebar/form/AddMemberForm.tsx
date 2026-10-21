import { FormEvent, useEffect, useId, useState } from "react";
import {
  useMembersActions,
  useMentorsList,
  useTeamTypes,
  useRoles,
  useTeams,
} from "@/hooks";
import { MEMBER_FORM_DEFAULTS } from "@/constants/form";
import apiAddMember from "@/api/addMember";
import type {
  AccentColor,
  MemberFormData,
  Member as MemberType,
} from "@/types";
import { MemberFormFields } from "./fields";
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
  const [errors, setErrors] = useState<
    Partial<Record<keyof MemberFormData, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formId = useId();

  const { addMember, getMentorsList } = useMembersActions();
  const mentorsList = useMentorsList();
  const [teamTypes, , reloadTeamTypes] = useTeamTypes();
  const [, , reloadRoles] = useRoles();
  const [, , reloadTeams] = useTeams();

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
    const validationErrors = validateMemberForm(form, mentorsList, teamTypes);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    const formData = buildMemberFormData(form);

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
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      id={formId}
      className="flex flex-col items-center"
      onSubmit={handleSubmit}
      noValidate
    >
      <MemberFormFields
        form={form}
        setForm={setForm}
        errors={errors}
        color={color}
      />
      <FormFooter>
        <div className="flex w-4/5 flex-row justify-center gap-3">
          <ClearButton
            isSubmitting={isSubmitting}
            onClick={handleResetForm}
            color={color}
          >
            Очистити
          </ClearButton>
          <SubmitButton isSubmitting={isSubmitting} form={formId} color={color}>
            {isSubmitting ? "Додаємо..." : "Додати"}
          </SubmitButton>
        </div>
      </FormFooter>
    </form>
  );
}
