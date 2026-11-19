import { format } from "date-fns";
import type { SuggestionChange } from "@/api/selfService";
import { normalizePhone } from "@/utils/phone";

// A suggestion may change or add a value, never empty one: a field the form
// left blank is simply not sent (the form reports it as an error instead).

export interface SuggestableMember {
  name: string;
  birthday: Date | string | null;
  joinedAt: Date | string | null;
  status: string | null;
  mentorId: string | null;
  email: string | null;
  telegramLink: string | null;
  instagramLink: string | null;
  facebookLink: string | null;
  linkedinLink: string | null;
  phoneNumbers: string[];
}

export interface SuggestMemberForm {
  firstName: string;
  lastName: string;
  birthday: Date | null;
  joinedAt: Date | null;
  status: string | null;
  mentorId: string;
  email: string;
  phoneNumber: string;
  telegramLink: string;
  instagramLink: string;
  facebookLink: string;
  linkedinLink: string;
}

export const toDay = (value: Date | string | null | undefined) =>
  value ? format(new Date(value), "yyyy-MM-dd") : null;

const TEXT_FIELDS = [
  "email",
  "telegramLink",
  "instagramLink",
  "facebookLink",
  "linkedinLink",
] as const;

// A value that differs from the record is a change. One equal to the record
// is sent only for a field with a pending suggestion of mine: the server then
// withdraws that suggestion.
export const buildMemberChanges = (
  member: SuggestableMember,
  form: SuggestMemberForm,
  pendingFields: ReadonlySet<string> = new Set(),
): SuggestionChange[] => {
  const changes: SuggestionChange[] = [];
  const add = (field: string, value: string | null, current: string | null) => {
    if (!value) return;
    if (value !== (current ?? "") || pendingFields.has(field)) {
      changes.push({ field, value });
    }
  };

  const name = [form.firstName.trim(), form.lastName.trim()]
    .filter(Boolean)
    .join(" ");
  add("name", name, member.name);
  add("birthday", toDay(form.birthday), toDay(member.birthday));
  add("joinedAt", toDay(form.joinedAt), toDay(member.joinedAt));
  add("status", form.status, member.status);
  add("mentorId", form.mentorId, member.mentorId);
  for (const field of TEXT_FIELDS) {
    add(field, form[field].trim(), member[field]);
  }

  const phone = normalizePhone(form.phoneNumber);
  if (
    phone &&
    (phone !== member.phoneNumbers[0] || pendingFields.has("phoneNumbers"))
  ) {
    add(
      "phoneNumbers",
      JSON.stringify([phone, ...member.phoneNumbers.slice(1)]),
      null,
    );
  }
  return changes;
};

export interface SuggestableTeam {
  name: string;
  description?: string | null;
  startYear?: number | null;
  endYear?: number | null;
  isOngoing?: boolean;
  teamTypeId?: string | null;
}

export interface SuggestTeamForm {
  name: string;
  description: string;
  startYear?: number;
  endYear?: number;
  isOngoing?: boolean;
  teamTypeId?: string;
}

export const buildTeamChanges = (
  team: SuggestableTeam,
  form: SuggestTeamForm,
  pendingFields: ReadonlySet<string> = new Set(),
): SuggestionChange[] => {
  const changes: SuggestionChange[] = [];
  const add = (field: string, value: string | null, current: string | null) => {
    if (!value) return;
    if (value !== (current ?? "") || pendingFields.has(field)) {
      changes.push({ field, value });
    }
  };
  const num = (value?: number | null) => (value ? String(value) : null);

  add("name", form.name.trim(), team.name);
  add("description", form.description.trim(), team.description ?? null);
  add("startYear", num(form.startYear), num(team.startYear));
  if (!form.isOngoing) add("endYear", num(form.endYear), num(team.endYear));
  add("teamTypeId", form.teamTypeId ?? null, team.teamTypeId ?? null);
  if (
    Boolean(form.isOngoing) !== Boolean(team.isOngoing) ||
    pendingFields.has("isOngoing")
  ) {
    changes.push({
      field: "isOngoing",
      value: String(Boolean(form.isOngoing)),
    });
  }
  return changes;
};

// Stored values the team form emptied (name, description, years, type).
export const findEmptiedTeamFields = (
  team: SuggestableTeam,
  form: SuggestTeamForm,
): Set<"name" | "description" | "startYear" | "endYear" | "teamTypeId"> => {
  const emptied = new Set<
    "name" | "description" | "startYear" | "endYear" | "teamTypeId"
  >();
  if (team.name && !form.name.trim()) emptied.add("name");
  if (team.description && !form.description.trim()) emptied.add("description");
  if (team.startYear && !form.startYear) emptied.add("startYear");
  if (team.endYear && !form.isOngoing && !form.endYear) emptied.add("endYear");
  if (team.teamTypeId && !form.teamTypeId) emptied.add("teamTypeId");
  return emptied;
};
