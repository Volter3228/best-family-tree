import { FormEvent, useEffect, useId, useState, useMemo } from "react";
import {
  useMembersActions,
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
import { MemberFormFields } from "./fields";
import { SubmitButton, ClearButton } from "./buttons";
import { buildMemberFormData } from "./buildMemberFormData";
import validateMemberForm from "./validations/memberFormValidation";
import ConfirmDeleteControl from "./ConfirmDeleteControl";
import FormFooter from "./FormFooter";

interface Props {
  member: Member;
  onExit: () => void;
  // Called instead of onExit once the member is deleted.
  onDeleted?: () => void;
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
      teamTypeId: p.team?.teamTypeId || undefined,
      teamName: p.team?.name || undefined,
      organization: p.organization || undefined,
      startYear: p.startYear || undefined,
      endYear: p.endYear || undefined,
    })),
  };
};

const EditMemberForm = ({ member, onExit, onDeleted, color = "blue" }: Props) => {
  const initialFormData = useMemo(() => getInitialFormData(member), [member]);

  const [form, setForm] = useState<MemberFormData>(initialFormData);
  const [errors, setErrors] = useState<
    Partial<Record<keyof MemberFormData, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);
  const formId = useId();

  const { updateMember, reloadMembers, getMentorsList } = useMembersActions();
  const mentorsList = useMentorsList();
  const [teamTypes, , reloadTeamTypes] = useTeamTypes();
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
    const validationErrors = validateMemberForm(form, mentorsList, teamTypes, member);
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
        // Saving may have created new roles/teams/team types server-side.
        reloadRoles();
        reloadTeams();
        reloadTeamTypes();
        onExit();
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Mentees move up to this member's mentor on the server; refresh everything
  // that showed the member (tree, mentor list, team rosters).
  const handleDelete = async () => {
    setIsSubmitting(true);
    try {
      await apiDeleteMember(member.id);
      await reloadMembers();
      getMentorsList();
      reloadTeams();
      (onDeleted ?? onExit)();
    } catch (error) {
      console.error("Failed to delete member:", error);
    } finally {
      setIsSubmitting(false);
      setIsConfirmingDelete(false);
    }
  };

  const submitLabel = isSubmitting ? "Зберігаємо..." : "Зберегти";

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
        mode="edit"
        initialAvatar={getMemberAvatar(member)}
        color={color}
      />
      <FormFooter>
        <div className="flex w-4/5 flex-row justify-center gap-3">
          <ClearButton
            isSubmitting={isSubmitting}
            onClick={onExit}
            color={color}
          >
            Скасувати
          </ClearButton>
          <SubmitButton isSubmitting={isSubmitting} form={formId} color={color}>
            {submitLabel}
          </SubmitButton>
        </div>
        <ConfirmDeleteControl
          label="Видалити учасника"
          message={`Учасника «${member.name}» буде видалено разом з його посадами. Його менті перейдуть до ${member.mentorId ? "його ментора" : "верхнього рівня"}.`}
          isConfirming={isConfirmingDelete}
          isSubmitting={isSubmitting}
          onAsk={setIsConfirmingDelete}
          onConfirm={handleDelete}
        />
      </FormFooter>
    </form>
  );
};

export default EditMemberForm;
