import { FormEvent, useEffect, useState } from "react";
import { useMembers } from "@/hooks";
import { MEMBER_FORM_DEFAULTS } from "@/constants/form";
import apiAddMember from "@/api/addMember";
import type { MemberFormData, Member as MemberType } from "@/types";
import { SubmitButton, ClearButton } from "./buttons";
import { MemberFormFields } from "./fields";
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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setErrors({});
    const validationErrors = validateMemberForm(form, mentorsList);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
      if (value instanceof Date) {
        formData.append(key, value.toISOString());
      } else if (value !== undefined && value !== null) {
        // TODO: Make phone numbers an array with possibility to expand
        if (key === "phoneNumber") {
          formData.append("phoneNumbers", JSON.stringify([value]));
        } else if (key === "photo") {
          formData.append(key, value);
        } else if (typeof value === "object") {
          formData.append(key, JSON.stringify(value));
        } else {
          formData.append(key, String(value));
        }
      }
    });

    try {
      const newMember = await apiAddMember(formData);
      if (newMember) {
        addMember(newMember);
        onSuccess?.(newMember);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }

    setIsSubmitting(false);
  };

  const handleClearForm = () => {
    setForm({ ...MEMBER_FORM_DEFAULTS });
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
        <ClearButton isSubmitting={isSubmitting} onClick={handleClearForm}>
          Очистити
        </ClearButton>
        <SubmitButton isSubmitting={isSubmitting}>{submitLabel}</SubmitButton>
      </div>
    </form>
  );
}
