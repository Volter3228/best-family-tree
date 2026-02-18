import { FormEvent, useEffect, useState, useMemo } from "react";
import { useMembers } from "@/hooks";
import apiEditMember from "@/api/editMember";
import { getMemberAvatar } from "@/utils";
import { Member } from "@/models";
import type { MemberFormData } from "@/types";
import { MemberFormFields } from "./fields";
import { SubmitButton, ClearButton } from "./buttons";
import { buildMemberFormData } from "./buildMemberFormData";
import validateMemberForm from "./validations/memberFormValidation";

interface Props {
  member: Member;
  onExit: () => void;
}

const getInitialFormData = (member: Member): MemberFormData => {
  const nameParts = member.name.split(" ");
  const firstName = nameParts[0] || "";
  const lastName = nameParts.slice(1).join(" ") || "";

  return {
    firstName,
    lastName,
    birthday: member.birthday,
    joinedAt: member.joinedAt ? new Date(member.joinedAt) : null,
    mentorId: member.mentorId || "",
    status: member.status || "",
    phoneNumber: member.phoneNumbers[0] || "",
    email: member.email || "",
    photo: member.photo,
    telegramLink: member.telegramLink || "",
    instagramLink: member.instagramLink || "",
    facebookLink: member.facebookLink || "",
    linkedinLink: member.linkedinLink || "",
  };
};

const EditMemberForm = ({ member, onExit }: Props) => {
  const initialFormData = useMemo(() => getInitialFormData(member), [member]);

  const [form, setForm] = useState<MemberFormData>(initialFormData);
  const [errors, setErrors] = useState<
    Partial<Record<keyof MemberFormData, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { updateMember, mentorsList, getMentorsList } = useMembers();

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
    const validationErrors = validateMemberForm(form, mentorsList);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    const formData = buildMemberFormData(form, new Set(["photo"]));

    if (!form.photo) {
      formData.append("photo", "");
    } else {
      formData.append("photo", form.photo);
    }

    try {
      const updatedMember = await apiEditMember(member.id, formData);
      if (updatedMember) {
        updateMember(updatedMember);
        onExit();
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const submitLabel = isSubmitting ? "Зберігаємо..." : "Зберегти";

  return (
    <form
      className="flex flex-col items-center"
      onSubmit={handleSubmit}
      noValidate
    >
      <MemberFormFields
        form={form}
        setForm={setForm}
        errors={errors}
        mode="edit"
        initialAvatar={getMemberAvatar(member)}
      />
      <div className="flex flex-row w-4/5 mt-10 justify-center gap-3">
        <ClearButton isSubmitting={isSubmitting} onClick={onExit}>
          Скасувати
        </ClearButton>
        <SubmitButton isSubmitting={isSubmitting}>{submitLabel}</SubmitButton>
      </div>
    </form>
  );
};

export default EditMemberForm;
