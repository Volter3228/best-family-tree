import type { PendingSuggestion } from "@/api/selfService";
import type { MemberFormData, MemberStatus } from "@/types";
import type { SuggestTeamForm } from "@/utils/suggestChanges";
import { parseDay } from "./pendingRows";

// A new suggestion replaces my earlier one per field, so the form starts
// from what I already suggested.
export const applyMemberPending = (
  form: MemberFormData,
  pending: PendingSuggestion[],
): MemberFormData => {
  const next = { ...form };
  for (const { field, toValue } of pending) {
    if (!toValue) continue;
    switch (field) {
      case "name": {
        const [first = "", ...rest] = toValue.split(" ");
        next.firstName = first;
        next.lastName = rest.join(" ");
        break;
      }
      case "birthday":
      case "joinedAt":
        next[field] = parseDay(toValue);
        break;
      case "status":
        next.status = toValue as MemberStatus;
        break;
      case "mentorId":
      case "email":
      case "telegramLink":
      case "instagramLink":
      case "facebookLink":
      case "linkedinLink":
        next[field] = toValue;
        break;
      case "phone:add":
      case "phone:replace":
        next.phoneNumber = toValue;
        break;
    }
  }
  return next;
};

export const applyTeamPending = (
  form: SuggestTeamForm,
  pending: PendingSuggestion[],
): SuggestTeamForm => {
  const next = { ...form };
  for (const { field, toValue } of pending) {
    if (!toValue) continue;
    switch (field) {
      case "name":
      case "description":
        next[field] = toValue;
        break;
      case "startYear":
      case "endYear":
        next[field] = Number(toValue);
        break;
      case "isOngoing":
        next.isOngoing = toValue === "true";
        if (next.isOngoing) next.endYear = undefined;
        break;
      case "teamTypeId":
        next.teamTypeId = toValue;
        break;
    }
  }
  return next;
};
