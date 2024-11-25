import { FormEvent, useState } from "react";
import { useMembers } from "@/hooks/useMembers";
import type { AddMemberForm } from "@/types";
import { ADD_MEMBER_DEFAULTS } from "@/constants/form";
import apiAddMember from "@/api/addMember";
import SubmitButton from "../SubmitButton";
import Fields from "./Fields";
import ClearButton from "../ClearButton";

export default function AddMemberForm() {
  const [form, setForm] = useState<AddMemberForm>({
    ...ADD_MEMBER_DEFAULTS,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { addMember } = useMembers();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
      if (value instanceof Date) {
        formData.append(key, value.toISOString()); // Handle Date objects
      } else if (value !== undefined && value !== null) {
        formData.append(key, value.toString()); // Convert other values to strings
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
    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
      <Fields form={form} setForm={setForm} />
      <div className="flex flex-row w-4/5 mt-10 justify-center gap-3">
        <ClearButton isSubmitting={isSubmitting} onClick={handleClearForm} />
        <SubmitButton isSubmitting={isSubmitting}>
          {isSubmitting ? "Додаємо..." : "Додати"}
        </SubmitButton>
      </div>
    </form>
  );
}
