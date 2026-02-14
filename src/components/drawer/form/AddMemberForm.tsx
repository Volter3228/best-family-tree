import { FormEvent, useEffect, useState } from "react";
import { useMembers } from "@/hooks";
import { MEMBER_FORM_DEFAULTS } from "@/constants/form";
import apiAddMember from "@/api/addMember";
import type { MemberFormData, Member as MemberType } from "@/types";
import { MemberFormFields } from "./fields";
import { SubmitButton, ClearButton } from "./buttons";
import { buildMemberFormData } from "./buildMemberFormData";
import validateMemberForm from "./validations/memberFormValidation";

interface Props {
  onSuccess?: (member: MemberType) => void;
}

export default function AddMemberForm({ onSuccess }: Props) {
  const [form, setForm] = useState<MemberFormData>({ ...MEMBER_FORM_DEFAULTS });
  const [errors, setErrors] = useState<
    Partial<Record<keyof MemberFormData, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { addMember, mentorsList, getMentorsList } = useMembers();

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
    const validationErrors = validateMemberForm(form, mentorsList);
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
        handleResetForm();
        onSuccess?.(newMember);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const submitLabel = isSubmitting ? "Додаємо..." : "Додати";

  return (
    <form
      className="flex flex-col items-center"
      onSubmit={handleSubmit}
      noValidate
    >
      <MemberFormFields form={form} setForm={setForm} errors={errors} />
      <div className="flex flex-row w-4/5 mt-10 justify-center gap-3">
        <ClearButton isSubmitting={isSubmitting} onClick={handleResetForm}>
          Очистити
        </ClearButton>
        <SubmitButton isSubmitting={isSubmitting}>{submitLabel}</SubmitButton>
      </div>
    </form>
  );
}
