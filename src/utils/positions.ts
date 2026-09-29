import { getYear } from "date-fns";
import type { MemberPosition } from "@/types";

export const getPositionYearLabel = (position: MemberPosition): string => {
  const { startDate, endDate, team, year } = position;

  if (!startDate && year) {
    const endYear = endDate ? getYear(new Date(endDate)) : null;
    if (!endYear || endYear === year) return String(year);
    return `${year}-${endYear}`;
  }

  if (startDate || endDate) {
    const startYear = startDate ? getYear(new Date(startDate)) : null;
    const endYear = endDate ? getYear(new Date(endDate)) : null;
    if (startYear && endYear) {
      return startYear === endYear
        ? String(startYear)
        : `${startYear}-${endYear}`;
    }
    if (startYear) return String(startYear);
    if (endYear) return String(endYear);
  }

  if (year) return String(year);

  const teamStart = team?.startDate ? getYear(new Date(team.startDate)) : null;
  const teamEnd = team?.endDate ? getYear(new Date(team.endDate)) : null;
  if (teamStart && teamEnd) {
    return teamStart === teamEnd
      ? String(teamStart)
      : `${teamStart}-${teamEnd}`;
  }
  if (teamStart) return String(teamStart);
  if (teamEnd) return String(teamEnd);

  return "";
};
