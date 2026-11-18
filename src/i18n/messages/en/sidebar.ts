import type { Messages } from "../types";

export const sidebar = {
  back: "Back",
  expand: "Expand",
  collapse: "Collapse",
  edit: "Edit",
  close: "Close",
  editing: (name: string) => `Edit: ${name}`,
  team: "Team",
} satisfies Messages["sidebar"];
