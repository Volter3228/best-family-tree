import { Member } from "@/models";
import type { MemberFormData } from "@/types";
import { buildMemberFormData } from "./buildMemberFormData";

export const getInitialFormData = (member: Member): MemberFormData => {
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
    activityState: member.activityState,
    gender: member.gender,
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

// The request body of a save. Sending "" for a missing photo asks the server to
// remove it, which buildMemberFormData would otherwise skip.
export const buildEditPayload = (form: MemberFormData): FormData => {
  const formData = buildMemberFormData(form);
  if (!form.photo) formData.append("photo", "");
  return formData;
};
