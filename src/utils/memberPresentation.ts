import { getPhotoUrlAsAvatar } from "@/libs/cloudinary";
import { Member } from "@/models";
import type { RecruitmentSeason, RecruitmentTerm } from "@/types";

const RECRUITMENT_SEASON_LABEL: Record<RecruitmentSeason, string> = {
  spring: "Весна",
  autumn: "Осінь",
};

const RECRUITMENT_SEASON_EMOJI: Record<RecruitmentSeason, string> = {
  spring: "🌸",
  autumn: "🍁",
};

export const getMemberAvatar = (
  member: Pick<Member, "photo">,
  options?: { width?: number | string; height?: number | string },
) => {
  if (!member.photo) return null;
  return getPhotoUrlAsAvatar(member.photo, options);
};

export const formatRecruitmentTerm = (
  term: RecruitmentTerm | null,
  withEmoji = false,
): string => {
  if (!term) return "";

  const label = `${RECRUITMENT_SEASON_LABEL[term.season]} ${term.year}`;
  if (!withEmoji) return label;

  const emoji = RECRUITMENT_SEASON_EMOJI[term.season];
  return `${emoji}${label}${emoji}`;
};

export const formatMemberRecruitmentSeason = (
  member: Member,
  withEmoji = false,
): string => formatRecruitmentTerm(member.getRecruitmentTerm(), withEmoji);
