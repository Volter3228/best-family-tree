import type { Messages } from "../types";
import { plural } from "../../plural";

export const teamForm = {
  namePlaceholder: "Team name",
  chooseType: "Choose a type",
  period: "Period",
  deleteTeam: "Delete team",
  deleteTitle: "Delete team?",
  deleteMessage: "The team will be deleted.",
  deleteWithPositions: (n: number) =>
    `The team and its ${n} ${plural("en", n, { one: "position", other: "positions" })} will be deleted.`,
  photoLabel: "Team photo",
  removePhoto: "Remove photo",
  members: {
    title: "Members",
    newMember: "New member",
    remove: "Remove member",
    member: "Member",
    memberPlaceholder: "Name",
    position: "Position",
    add: "Add member",
  },
  validation: {
    nameRequired: "Team name is required",
    nameOrType: "Enter a team name or pick its type",
    startYearRequired: (type: string) =>
      `Enter a start year for “${type}” or a team name`,
    ongoingStartYear: "Enter a start year for an ongoing team",
    memberIncomplete:
      "Each member needs a person picked from the list and a position",
  },
  saveFailed: "Couldn't save the team",
  deleteFailed: "Couldn't delete the team",
} satisfies Messages["teamForm"];
