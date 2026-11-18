import type { Messages } from "../types";
import { plural } from "../../plural";

export const teamTypeForm = {
  kindEvent: "Event",
  kindOther: "Other",
  kind: "Kind",
  namePlaceholder: "EJF",
  deleteTitle: "Delete team type?",
  deleteMessage: (name: string) => `Delete “${name}”? This can't be undone.`,
  inUse: (n: number) =>
    plural("en", n, {
      one: `This type is used by ${n} team — change it first.`,
      other: `This type is used by ${n} teams — change them first.`,
    }),
  usedByTeams: "Teams use this type — change them first",
  nameRequired: "Name is required",
  saveFailed: "Couldn't save the team type",
  deleteFailed: "Couldn't delete the team type",
  changeIcon: "Change icon",
  removeIcon: "Remove icon",
} satisfies Messages["teamTypeForm"];
