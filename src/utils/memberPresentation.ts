import {
  getPhotoUrlAsAvatar,
  getPhotoUrlAsRoundAvatar,
} from "@/libs/cloudinary";
import { Member } from "@/models";
import type { AccentColor, RecruitmentSeason, RecruitmentTerm } from "@/types";

const RECRUITMENT_SEASON_LABEL: Record<RecruitmentSeason, string> = {
  spring: "Весна",
  autumn: "Осінь",
};

const RECRUITMENT_SEASON_EMOJI: Record<RecruitmentSeason, string> = {
  spring: "🌸",
  autumn: "🍁",
};

// The member card takes its colour from the recruitment season (spring reads
// green, autumn orange), not from the node's colour in the tree, which only
// rotates between siblings. Blue stays for utilities: forms, search, account.
const RECRUITMENT_SEASON_ACCENT: Record<RecruitmentSeason, AccentColor> = {
  spring: "green",
  autumn: "orange",
};

export const getMemberSeasonAccent = (member: Member): AccentColor =>
  RECRUITMENT_SEASON_ACCENT[member.getRecruitmentTerm().season];

export const getMemberAvatar = (
  member: Pick<Member, "photo">,
  options?: { width?: number | string; height?: number | string },
) => {
  if (!member.photo) return null;
  return getPhotoUrlAsAvatar(member.photo, options);
};

// Pre-rounded avatar texture for the canvas nodes.
export const getMemberNodeAvatar = (
  member: Pick<Member, "photo">,
  size?: number,
) => (member.photo ? getPhotoUrlAsRoundAvatar(member.photo, size) : null);

export const formatRecruitmentTerm = (
  term: RecruitmentTerm,
  withEmoji = false,
): string => {
  const label = `${RECRUITMENT_SEASON_LABEL[term.season]} ${term.year}`;
  if (!withEmoji) return label;

  const emoji = RECRUITMENT_SEASON_EMOJI[term.season];
  return `${emoji}${label}${emoji}`;
};

export const formatMemberRecruitmentSeason = (
  member: Member,
  withEmoji = false,
): string => formatRecruitmentTerm(member.getRecruitmentTerm(), withEmoji);

export const getInitials = (name: string): string => {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 0) return "";
  const first = parts[0][0] ?? "";
  const last = parts.length > 1 ? (parts[parts.length - 1][0] ?? "") : "";
  return (first + last).toUpperCase();
};
