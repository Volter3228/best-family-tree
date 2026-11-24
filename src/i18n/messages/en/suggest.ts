import type { Messages } from "../types";

export const suggest = {
  suggesting: (name: string) => `Suggesting changes: ${name}`,
  action: "Suggest changes",
  photoHint:
    "Photo changes, including removal, are saved right away; other changes are reviewed by editors.",
  logoHint:
    "The logo is saved right away; other changes are reviewed by editors.",
  photo: "Photo",
  logo: "Logo",
  photoReviewHint: "The photo is sent for review like other changes.",
  logoReviewHint: "The logo is sent for review like other changes.",
  reviewHint: "Editors review suggestions before they appear.",
  submit: "Suggest",
  submitting: "Sending...",
  done: "Suggested",
  withdrawn: "Suggestion withdrawn",
  awaitingReview: "Awaiting review",
  removeValue: (value: string) => `remove ${value}`,
  yes: "yes",
  no: "no",
  name: "First and last name",
  positionAdd: "New position",
  positionReplace: "Position",
  positionRemove: "Remove position",
  cannotEmpty: "A filled field cannot be cleared.",
  errors: {
    too_many_pending: "Wait until your earlier suggestions are reviewed",
    contact_taken: "This contact already belongs to another member",
    cannot_empty: "A filled field cannot be cleared",
    no_changes: "No changes",
    field_not_suggestable: "This field cannot be changed by a suggestion",
    role_unknown: "This role no longer exists. Pick another one",
    team_type_unknown: "This team type no longer exists",
    team_in_other_type: "A team with this name already exists in another type",
    team_create_event_only:
      "A new team can only be an edition of an event. Pick an existing team",
    team_start_year_required: "An event without a team name needs a year",
    positions_invalid: "Check the positions: some values are invalid",
  },
} satisfies Messages["suggest"];
