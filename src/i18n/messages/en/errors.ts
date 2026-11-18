import type { Messages } from "../types";

type Params = Record<string, string | number | undefined>;

const platformLabels: Record<string, string> = {
  email: "Email",
  telegram: "Telegram",
  instagram: "Instagram",
  facebook: "Facebook",
  linkedin: "LinkedIn",
};

export const errors = {
  saveFailed: "Couldn't save. Try again",
  validation: () => "Check the details you entered",
  sign_in_required: () => "Sign in required",
  not_allowed: () => "Not allowed",
  conflict: () => "Data conflict",
  not_found: () => "Not found",
  internal: () => "Something went wrong",
  record_exists: () => "A record like this already exists",
  reference_missing: () => "The linked record doesn't exist",
  record_not_found: () => "Record not found",
  demo_readonly: () => "Changes aren't saved in the demo",
  upload_rejected: () => "Couldn't upload the file",
  image_only: () => "Only images can be uploaded",
  team_type_not_found: (p: Params) =>
    p.name ? `Team type "${p.name}" not found` : "Team type not found",
  team_create_event_only: () => "A new team can only be created here as an event edition",
  member_has_mentees: () => "Reassign or delete this member's mentees first",
  contact_taken: (p: Params) =>
    `${platformLabels[String(p.platform)] ?? "Contact"} belongs to another member`,
  team_type_in_use: () => "Teams use this type — change them first",
  team_type_exists: () => "A team type with this name already exists",
  role_in_use: () => "This role is in use — change it first",
  role_exists: () => "A role with this name already exists",
  role_not_found: () => "Role not found",
  member_not_found: () => "Member not found",
  mentor_not_found: () => "Mentor not found",
  mentor_cycle: () => "A member can't be their own mentor or the mentor of their mentee",
  admin_only_member: () => "Only an admin can edit this member",
  team_not_found: () => "Team not found",
  team_exists: () => "A team with this name already exists",
  team_in_other_type: (p: Params) =>
    p.name
      ? `Team "${p.name}" already exists in another team type`
      : "The team already exists in another team type",
  team_start_year_required: () => "Enter the start year",
  team_name_required: () => "Enter the team name",
  team_end_before_start: () => "The end year can't be before the start year",
  member_unknown: () => "Unknown member",
  role_unknown: () => "Unknown role",
  team_type_unknown: () => "Unknown team type",
  positions_invalid: () => "Invalid positions",
  too_many_requests: () => "Too many attempts. Try again later",
  invalid_email: () => "Invalid email",
  invalid_code: () => "Invalid or expired code",
  challenge_not_found: () => "Sign-in attempt not found",
  challenge_expired: () => "The sign-in attempt has expired",
} satisfies Messages["errors"];
