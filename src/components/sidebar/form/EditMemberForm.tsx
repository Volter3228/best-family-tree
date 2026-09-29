import { FormEvent, useEffect, useState, useMemo } from "react";
import { useMembers, useEventTypes, useRoles, useTeams } from "@/hooks";
import apiEditMember from "@/api/editMember";
import { getMemberAvatar } from "@/utils";
import { Member } from "@/models";
import type { MemberFormData, AccentColor } from "@/types";
import { MemberFormFields } from "./fields";
import { formatLocalDate } from "./fields/position/positionFormUtils";
import { SubmitButton, ClearButton } from "./buttons";
import { buildMemberFormData } from "./buildMemberFormData";
import validateMemberForm from "./validations/memberFormValidation";

interface Props {
  member: Member;
  onExit: () => void;
  color?: AccentColor;
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
    positions: (member.positions || []).map((p) => ({
      id: crypto.randomUUID(),
      roleId: p.roleId,
      roleName: p.role?.name || "",
      eventTypeId: p.team?.eventTypeId || undefined,
      teamName: p.team?.name || undefined,
      year: p.year || undefined,
      startDate: p.startDate
        ? formatLocalDate(new Date(p.startDate))
        : undefined,
      endDate: p.endDate ? formatLocalDate(new Date(p.endDate)) : undefined,
      isYearOnly: Boolean(!p.startDate && p.year),
      isCurrent: !p.endDate,
    })),
  };
};

const EditMemberForm = ({ member, onExit, color = "blue" }: Props) => {
  const initialFormData = useMemo(() => getInitialFormData(member), [member]);

  const [form, setForm] = useState<MemberFormData>(initialFormData);
  const [errors, setErrors] = useState<
    Partial<Record<keyof MemberFormData, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { updateMember, mentorsList, getMentorsList } = useMembers();
  const [, , reloadEventTypes] = useEventTypes();
  const [, , reloadRoles] = useRoles();
  const [, , reloadTeams] = useTeams();

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
    // buildMemberFormData skips null photo; send "" explicitly to request removal.
    const formData = buildMemberFormData(form);

    if (!form.photo) {
      formData.append("photo", "");
    }

    try {
      const updatedMember = await apiEditMember(member.id, formData);
      if (updatedMember) {
        updateMember(updatedMember);
        // Saving may have created new roles/teams/event types server-side.
        reloadRoles();
        reloadTeams();
        reloadEventTypes();
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
        color={color}
      />
      <div className="flex flex-row w-4/5 mt-10 justify-center gap-3">
        <ClearButton isSubmitting={isSubmitting} onClick={onExit} color={color}>
          Скасувати
        </ClearButton>
        <SubmitButton isSubmitting={isSubmitting} color={color}>
          {submitLabel}
        </SubmitButton>
      </div>
    </form>
  );
};

export default EditMemberForm;
