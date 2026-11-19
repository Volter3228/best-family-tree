import { ValidationError } from "./httpErrors.js";
import { diffPhones, isPhoneField, isPhoneStale } from "./suggestionPhones.js";
export * from "./suggestionPhones.js";
import {
  MEMBER_NORMALIZERS,
  TEAM_NORMALIZERS,
  cannotEmpty,
  invalid,
  type Normalizer,
} from "./suggestionFields.js";

export type SuggestionRow = {
  field: string;
  fromValue: string | null;
  toValue: string | null;
};

export type SuggestionChange = { field: string; value: string | null };
export type FieldValues = Record<string, string | null>;

export const PENDING_CAP = 10;

export type MemberSnapshot = {
  photo?: string | null;
  name: string;
  birthday: Date | null;
  joinedAt: Date | null;
  status: string;
  mentorId: string | null;
  email: string | null;
  telegramLink: string | null;
  instagramLink: string | null;
  facebookLink: string | null;
  linkedinLink: string | null;
  phoneNumbers: string[];
};

export type TeamSnapshot = {
  photoUrl?: string | null;
  name: string;
  description: string | null;
  startYear: number | null;
  endYear: number | null;
  isOngoing: boolean;
  teamTypeId: string | null;
};

const dateString = (d: Date | null) =>
  d ? d.toISOString().slice(0, 10) : null;

export const memberCurrentValues = (m: MemberSnapshot): FieldValues => ({
  photo: m.photo || null,
  name: m.name,
  birthday: dateString(m.birthday),
  joinedAt: dateString(m.joinedAt),
  status: m.status,
  mentorId: m.mentorId || null,
  email: m.email || null,
  telegramLink: m.telegramLink || null,
  instagramLink: m.instagramLink || null,
  facebookLink: m.facebookLink || null,
  linkedinLink: m.linkedinLink || null,
});

export const teamCurrentValues = (t: TeamSnapshot): FieldValues => ({
  photo: t.photoUrl || null,
  name: t.name,
  description: t.description || null,
  startYear: t.startYear == null ? null : String(t.startYear),
  endYear: t.endYear == null ? null : String(t.endYear),
  isOngoing: String(t.isOngoing),
  teamTypeId: t.teamTypeId || null,
});

const lastPerField = (changes: SuggestionChange[]) =>
  new Map(changes.map((c) => [c.field, c.value]));

const diffFields = (
  current: FieldValues,
  changes: Map<string, string | null>,
  normalizers: Record<string, Normalizer>,
): SuggestionRow[] => {
  const rows: SuggestionRow[] = [];
  for (const [field, value] of changes) {
    const normalizer = normalizers[field];
    if (!normalizer) continue;
    const raw = value?.trim() ?? "";
    const toValue = raw === "" ? null : normalizer(raw);
    if (raw !== "" && toValue === null) throw invalid(field);

    const fromValue = current[field] ?? null;
    if (toValue === fromValue) continue;
    if (toValue === null) throw cannotEmpty(field);
    rows.push({ field, fromValue, toValue });
  }
  return rows;
};

const assertSuggestable = (
  changes: Map<string, string | null>,
  allowed: (field: string) => boolean,
) => {
  for (const field of changes.keys()) {
    if (!allowed(field)) {
      throw new ValidationError(`${field} can not be suggested`, {
        code: "field_not_suggestable",
        params: { field },
      });
    }
  }
};

export const diffMemberSuggestion = (
  existing: MemberSnapshot,
  changes: SuggestionChange[],
): SuggestionRow[] => {
  const map = lastPerField(changes);
  assertSuggestable(
    map,
    (f) => f === "phoneNumbers" || f in MEMBER_NORMALIZERS,
  );
  const rows = diffFields(
    memberCurrentValues(existing),
    map,
    MEMBER_NORMALIZERS,
  );
  const phones = map.get("phoneNumbers");
  if (phones !== undefined) {
    rows.push(...diffPhones(existing.phoneNumbers, phones ?? "[]"));
  }
  return rows;
};

export const diffTeamSuggestion = (
  existing: TeamSnapshot,
  changes: SuggestionChange[],
): SuggestionRow[] => {
  const map = lastPerField(changes);
  assertSuggestable(map, (f) => f in TEAM_NORMALIZERS);
  const rows = diffFields(teamCurrentValues(existing), map, TEAM_NORMALIZERS);

  const next = { ...teamCurrentValues(existing) };
  for (const row of rows) next[row.field] = row.toValue;
  const start = next.startYear == null ? null : Number(next.startYear);
  const end = next.endYear == null ? null : Number(next.endYear);
  if (next.isOngoing === "true" && start == null) {
    throw new ValidationError("An ongoing team needs a start year", {
      code: "team_start_year_required",
    });
  }
  if (
    next.isOngoing !== "true" &&
    start != null &&
    end != null &&
    end < start
  ) {
    throw new ValidationError("End year must not be before start year", {
      code: "team_end_before_start",
    });
  }
  return rows;
};

/**
 * Whether the target changed since the suggestion was made. Phone rows compare
 * against the member's current number list, other rows against the field value.
 */
export const isStale = (
  row: SuggestionRow,
  currentValue: string | string[] | null,
): boolean => {
  if (isPhoneField(row.field)) return isPhoneStale(row, currentValue);
  return currentValue !== row.fromValue;
};

export const exceedsPendingCap = (
  pendingTargetKeys: Set<string>,
  newTargetKey: string,
  cap = PENDING_CAP,
) => !pendingTargetKeys.has(newTargetKey) && pendingTargetKeys.size >= cap;
