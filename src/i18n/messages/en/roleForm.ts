import type { Messages } from "../types";
import { plural } from "../../plural";

export const roleForm = {
  name: "Name",
  namePlaceholder: "For example, Coordinator",
  description: "Description",
  leaderRole: "Leader role",
  leaderRoleHint: "Members with this role are marked as team leaders.",
  usedBy: (n: number) =>
    `Used by ${n} ${plural("en", n, { one: "member", other: "members" })}`,
  blockedByMembers: (n: number) =>
    plural("en", n, {
      one: `This role is used by ${n} member. Change that first.`,
      other: `This role is used by ${n} members. Change them first.`,
    }),
  deleteTitle: "Delete role?",
  deleteMessage: "The role will be deleted.",
  nameRequired: "Name is required",
  nameTaken: "A role with this name already exists",
  saveFailed: "Couldn't save the role",
  deleteFailed: "Couldn't delete the role",
} satisfies Messages["roleForm"];
