import type { Messages } from "../types";

export const access = {
  info: "Here you can grant a member Editor access. Admin access is granted only by the app owner. Changes apply immediately.",
  memberPlaceholder: "Name",
  editor: "Editor",
  admin: "Admin",
  add: "Add",
  adding: "Adding…",
  you: "You",
  empty: "Nobody has been given access yet",
  loadFailed: "Could not load the access list",
  remove: "Remove access",
  removeMessage: (name: string) =>
    `${name} will lose the right to edit. You can change this at any time.`,
  errors: {
    admin_grant_locked: "Only the app owner can change Admins",
    admin_cli_only: "Admin access is granted only by the app owner",
    own_grant: "You can't change your own access",
    member_excluded: "This member can't be given access",
    not_found: "Member not found",
    generic: "Could not complete the action. Try again",
  },
} satisfies Messages["access"];
