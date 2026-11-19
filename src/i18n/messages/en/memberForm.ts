import type { Messages } from "../types";
import { plural } from "../../plural";

export const memberForm = {
  deleteMember: "Delete member",
  deleteMemberTitle: "Delete member?",
  deleteMemberMessage: (name: string) =>
    `“${name}” will be deleted along with their positions.`,
  deleteBlocked: (menteeCount: number) =>
    `Can't delete: reassign or remove mentees (${menteeCount})`,
  minimalRecord: "Minimal record",
  minimalRecordHint:
    "For older members we know little about: only name, status and join date are required; everything else is optional.",
  basics: "Basics",
  firstName: "First name",
  firstNamePlaceholder: "Viacheslav",
  lastName: "Last name",
  lastNamePlaceholder: "Ukraintsev",
  birthday: "Birthday",
  gender: "Gender",
  joinedAt: "Join date",
  status: "Status",
  mentor: "Mentor",
  mentorPlaceholder: "Mentor Mentorovenko",
  contacts: "Contacts",
  phoneNumber: "Phone number",
  socials: "Social media",
  socialsHint:
    "Paste a full link or just the username, e.g. Vouchik or https://t.me/Vouchik. A leading @ is fine too.",
  positions: {
    title: "Positions",
    add: "Add position",
    remove: "Remove position",
    newPosition: "New position",
    teamType: "Team type",
    teamName: "Team name",
    teamNamePlaceholder: "Org team",
    teamTypePlaceholder: "BTW",
    rolePlaceholder: "President",
    role: "Position",
    leader: "Leader",
    teamPeriod: (years: string) => `Team period: ${years || "not set"}`,
    activityStart: "Start of activity",
    activityEnd: "End of activity",
    organization: "Organisation",
    organizationPlaceholder: "BEST International",
    count: (n: number) =>
      `${n} ${plural("en", n, { one: "position", other: "positions" })}`,
  },
  validation: {
    required: "Required field.",
    invalidLink: "Invalid link.",
    noSuchTeam:
      "No such team. Pick an existing one or create it in the Teams tab.",
    startYearRequired: (type: string) =>
      `Enter a start year for “${type}” or a team name.`,
    birthdayInvalid: "Birthday is invalid.",
    joinedAtInvalid: "Join date is invalid.",
    statusInvalid: "Invalid status.",
    mentorInvalid: "Invalid mentor.",
    emailInvalid: "Invalid email.",
    phoneInvalid: "Invalid phone number.",
  },
} satisfies Messages["memberForm"];
