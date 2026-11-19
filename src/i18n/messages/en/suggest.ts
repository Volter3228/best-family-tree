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
  cannotEmpty: "A filled field cannot be cleared.",
  errors: {
    too_many_pending: "Wait until your earlier suggestions are reviewed",
    contact_taken: "This contact already belongs to another member",
    cannot_empty: "A filled field cannot be cleared",
    no_changes: "No changes",
    field_not_suggestable: "This field cannot be changed by a suggestion",
  },
} satisfies Messages["suggest"];
