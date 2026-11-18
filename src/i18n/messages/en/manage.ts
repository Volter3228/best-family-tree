import type { Messages } from "../types";

export const manage = {
  title: "Manage",
  tabs: {
    members: "Members",
    teams: "Teams",
    types: "Team types",
    roles: "Roles",
  },
  search: "Search",
  create: "Create",
  nothingFound: (query: string) => `Nothing found for “${query}”.`,
  showing: (shown: number, total: number) =>
    `Showing ${shown} of ${total} — refine your search`,
  created: "Created",
  newMember: "New member",
  newTeam: "New team",
  newTeamType: "New team type",
  newRole: "New role",
  searchMembers: "Search members",
  searchTeams: "Search teams",
  searchTeamTypes: "Search team types",
  searchRoles: "Search roles",
  noMembers: "No members yet — create the first one.",
  noTeams: "No teams yet — create the first one.",
  noTeamTypes: "No team types yet — create the first one.",
  noRoles: "No roles yet — create the first one.",
  event: "Event",
  other: "Other",
  leaderRole: "Leader role",
  memberForms: {
    one: "member",
    few: "members",
    many: "members",
    other: "members",
  },
  teamForms: { one: "team", few: "teams", many: "teams", other: "teams" },
} satisfies Messages["manage"];
