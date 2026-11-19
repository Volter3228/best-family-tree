import { plural } from "@/i18n/plural";
import type { Messages } from "../types";

export const filters = {
  title: "Filters",
  clear: "Clear filters",
  close: "Close filters",
  cancel: "Cancel",
  show: (count: number) => `Show ${count}`,
  memberCount: (n: number) =>
    `${n} ${plural("en", n, { one: "member", other: "members" })}`,
  teamCount: (n: number) =>
    `${n} ${plural("en", n, { one: "team", other: "teams" })}`,
  categories: {
    dates: "Dates",
    member: "Member",
    teams: "Teams",
    roles: "Roles",
  },
  seasons: { spring: "Spring", autumn: "Autumn" },
  genders: { male: "Male", female: "Female" },
  statuses: {
    observer: "Observer",
    baby: "Baby",
    full: "Full member",
    alumni: "Alumni",
  },
  activity: { active: "Active", inactive: "Inactive", excluded: "Excluded" },
  member: {
    status: "Status",
    activityState: "Activity state",
    gender: "Gender",
    family: "Family group",
    findFamily: "Find family group",
    moreFamilies: (n: number) =>
      `${n} more ${plural("en", n, { one: "family group", other: "family groups" })}`,
  },
  teams: {
    events: "Events",
    other: "Other",
    teamTypes: "Team types",
    findTeamType: "Find team type",
    activityPeriod: "Activity years",
    activeNow: "Active now",
  },
  roles: {
    title: "Roles",
    find: "Find role",
    more: (n: number) =>
      `${n} more ${plural("en", n, { one: "role", other: "roles" })}`,
  },
  dates: {
    recruitmentSeason: "Recruitment season",
    joinYear: "Join year",
    birthday: "Birthday",
    from: "From",
    to: "To",
    includeYear: "Include year",
  },
  list: { nothingFound: "Nothing found", collapse: "Collapse" },
} satisfies Messages["filters"];
