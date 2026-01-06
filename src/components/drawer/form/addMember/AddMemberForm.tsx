import { FormEvent, useEffect, useState } from "react";
import { useMembers } from "@/hooks";
import type { AddMemberForm } from "@/types";
import { ADD_MEMBER_DEFAULTS } from "@/constants/form";
import apiAddMember from "@/api/addMember";
import SubmitButton from "../SubmitButton";
import Fields from "./Fields";
import ClearButton from "../ClearButton";
import validateForm from "./validation";

export default function AddMemberForm() {
  const [form, setForm] = useState<AddMemberForm>({
    ...ADD_MEMBER_DEFAULTS,
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof AddMemberForm, string>>
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
    const validationErrors = validateForm(form, mentorsList); // Validate the form
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Show errors if validation fails
      return;
    }

    setIsSubmitting(true);
    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
      if (value instanceof Date) {
        formData.append(key, value.toISOString()); // Handle Date objects
      } else if (value !== undefined && value !== null) {
        if (typeof value === "object") {
          formData.append(key, JSON.stringify(value)); // Serialize objects
        } else {
          formData.append(key, value.toString()); // Convert other values to strings
        }
      }
    });

    if (form.photo) {
      formData.append("photo", form.photo);
    }

    const newMember = await apiAddMember(formData);
    if (newMember) {
      addMember(newMember);
    }

    setIsSubmitting(false);
  };

  const handleClearForm = () => {
    setForm({ ...ADD_MEMBER_DEFAULTS });
  };

  return (
    <form
      className="flex flex-col items-center"
      onSubmit={handleSubmit}
      noValidate
    >
      <Fields form={form} setForm={setForm} errors={errors} />
      <div className="flex flex-row w-4/5 mt-10 justify-center gap-3">
        <ClearButton isSubmitting={isSubmitting} onClick={handleClearForm} />
        <SubmitButton isSubmitting={isSubmitting}>
          {isSubmitting ? "Додаємо..." : "Додати"}
        </SubmitButton>
      </div>
    </form>
  );
}
