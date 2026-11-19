import type { Messages } from "../types";

export const account = {
  title: "Account",
  close: "Close account",
  guest: "Guest",
  levels: {
    VIEWER: "Viewer",
    EDITOR: "Editor",
    ADMIN: "Admin",
  },
  roles: "Roles",
  featuredInfo:
    "The starred role is shown first and highlighted on your profile.",
  featureRole: "Feature this role",
  unfeatureRole: "Unfeature this role",
  badge: "Badge next to name",
  badgeNone: "No badge",
  showInTree: "Show me in the tree",
  editProfile: "Edit my profile",
  editProfileInfo:
    "Your photo is saved immediately. Everything else is sent as a suggestion that editors review.",
  editProfileInfoDirect: "As an editor, your profile changes are saved immediately.",
  saveFailed: "Could not save. Try again",
} satisfies Messages["account"];
