import { getMonth, getYear } from "date-fns";
import { Member } from "@/models";
import type { FilterState, RecruitmentSeason } from "@/types";
import {
  MEMBER_STATUSES,
  ACTIVITY_STATES,
  JOIN_SEASONS,
  AVATAR_VALUES,
} from "@/constants/filters";

const matchesJoinYear = (
  member: Member,
  from: number | null,
  to: number | null,
): boolean => {
  if (from === null && to === null) return true;
  const year = getYear(member.joinedAt);
  if (from !== null && year < from) return false;
  if (to !== null && year > to) return false;
  return true;
};

const matchesJoinSeason = (
  member: Member,
  seasons: RecruitmentSeason[],
): boolean => {
  if (seasons.length === 0) return true;
  const memberSeason = member.getRecruitmentTerm()?.season;
  return memberSeason !== undefined && seasons.includes(memberSeason);
};

const parseDateStr = (
  raw: string,
): { year: number | null; month: number; day: number } => {
  const parts = raw.split("-").map(Number);
  if (parts.length === 3)
    return { year: parts[0], month: parts[1], day: parts[2] };
  return { year: null, month: parts[0], day: parts[1] };
};

const toDateVal = (
  d: { year: number | null; month: number; day: number },
  fallbackYear: number,
): number => (d.year ?? fallbackYear) * 10000 + d.month * 100 + d.day;

const toMMDD = (d: { month: number; day: number }): number =>
  d.month * 100 + d.day;

const matchesBirthday = (member: Member, filters: FilterState): boolean => {
  const { birthdayFrom, birthdayTo, birthdayRange, birthdayIncludeYear } =
    filters;
  if (!birthdayFrom && !birthdayTo) return true;
  if (!member.birthday) return false;

  const mMonth = getMonth(member.birthday) + 1;
  const mDay = member.birthday.getDate();
  const mYear = getYear(member.birthday);

  if (!birthdayRange) {
    // Single date mode — match exact day (and optionally year)
    if (!birthdayFrom) return true;
    const f = parseDateStr(birthdayFrom);
    if (f.month !== mMonth || f.day !== mDay) return false;
    if (birthdayIncludeYear && f.year !== null && f.year !== mYear)
      return false;
    return true;
  }

  // Range mode
  if (birthdayIncludeYear) {
    const memberVal = toDateVal({ year: mYear, month: mMonth, day: mDay }, 0);
    if (birthdayFrom && memberVal < toDateVal(parseDateStr(birthdayFrom), 0))
      return false;
    if (birthdayTo && memberVal > toDateVal(parseDateStr(birthdayTo), 9999))
      return false;
  } else {
    const memberMMDD = toMMDD({ month: mMonth, day: mDay });
    if (birthdayFrom && memberMMDD < toMMDD(parseDateStr(birthdayFrom)))
      return false;
    if (birthdayTo && memberMMDD > toMMDD(parseDateStr(birthdayTo)))
      return false;
  }
  return true;
};

const matchesAvatar = (
  member: Member,
  avatars: FilterState["avatars"],
): boolean => {
  if (avatars.length === 0) return true;
  const hasPhoto = !!member.photo;
  return (
    (avatars.includes("with") && hasPhoto) ||
    (avatars.includes("without") && !hasPhoto)
  );
};

const matchesRoles = (member: Member, roleNames: string[]): boolean => {
  if (roleNames.length === 0) return true;
  return member.positions.some(
    // Match ids too for backward compatibility with old URL params.
    (position) =>
      roleNames.includes(position.role.name) ||
      roleNames.includes(position.roleId),
  );
};

const matchesEventTypes = (
  member: Member,
  eventTypeNames: string[],
): boolean => {
  if (eventTypeNames.length === 0) return true;
  return member.positions.some((p) => {
    const eventType = p.team?.eventType;
    if (!eventType) return false;
    return (
      eventTypeNames.includes(eventType.name) ||
      eventTypeNames.includes(eventType.id)
    );
  });
};

export const memberMatchesFilters = (
  member: Member,
  filters: FilterState,
): boolean => {
  if (!matchesJoinYear(member, filters.joinYearFrom, filters.joinYearTo))
    return false;
  if (!matchesJoinSeason(member, filters.joinSeasons)) return false;
  if (filters.statuses.length > 0 && !filters.statuses.includes(member.status))
    return false;
  if (
    filters.activityStates.length > 0 &&
    !filters.activityStates.includes(member.activityState)
  )
    return false;
  if (!matchesBirthday(member, filters)) return false;
  if (!matchesAvatar(member, filters.avatars)) return false;
  if (!matchesRoles(member, filters.roleNames)) return false;
  if (!matchesEventTypes(member, filters.eventTypeNames)) return false;
  return true;
};

export const isFilterActive = (filters: FilterState): boolean => {
  return (
    filters.joinYearFrom !== null ||
    filters.joinYearTo !== null ||
    filters.joinSeasons.length < JOIN_SEASONS.length ||
    (filters.statuses.length < MEMBER_STATUSES.length &&
      filters.statuses.length > 0) ||
    (filters.activityStates.length < ACTIVITY_STATES.length &&
      filters.activityStates.length > 0) ||
    filters.birthdayFrom !== null ||
    filters.birthdayTo !== null ||
    filters.avatars.length < AVATAR_VALUES.length ||
    filters.lineageMemberId !== null ||
    filters.roleNames.length > 0 ||
    filters.eventTypeNames.length > 0 ||
    filters.treeMode !== "family"
  );
};
