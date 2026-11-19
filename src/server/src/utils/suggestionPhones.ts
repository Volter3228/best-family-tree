import { cannotEmpty, invalid } from "./suggestionFields.js";
import type { SuggestionRow } from "./suggestions.js";

export const PHONE_ADD = "phone:add";
export const PHONE_REMOVE = "phone:remove";
export const PHONE_REPLACE = "phone:replace";

export const isPhoneField = (field: string) =>
  field === PHONE_ADD || field === PHONE_REMOVE || field === PHONE_REPLACE;

const parsePhoneList = (raw: string): string[] => {
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    throw invalid("phoneNumbers");
  }
  if (
    !Array.isArray(parsed) ||
    !parsed.every((p) => typeof p === "string" && p.trim().length <= 30)
  ) {
    throw invalid("phoneNumbers");
  }
  return [...new Set(parsed.map((p: string) => p.trim()).filter(Boolean))];
};

/** Removed and added numbers are paired in order as replacements. */
export const diffPhones = (current: string[], raw: string): SuggestionRow[] => {
  const desired = parsePhoneList(raw);
  const added = desired.filter((p) => !current.includes(p));
  const removed = current.filter((p) => !desired.includes(p));
  if (current.length > 0 && desired.length === 0) {
    throw cannotEmpty("phoneNumbers");
  }
  const pairs = Math.min(added.length, removed.length);
  return [
    ...removed.slice(0, pairs).map((from, i) => ({
      field: PHONE_REPLACE,
      fromValue: from,
      toValue: added[i],
    })),
    ...added
      .slice(pairs)
      .map((p) => ({ field: PHONE_ADD, fromValue: null, toValue: p })),
    ...removed
      .slice(pairs)
      .map((p) => ({ field: PHONE_REMOVE, fromValue: p, toValue: null })),
  ];
};

export const isPhoneStale = (
  row: SuggestionRow,
  phones: string | string[] | null,
): boolean => {
  const list = Array.isArray(phones) ? phones : [];
  if (row.field === PHONE_ADD) return list.includes(row.toValue!);
  if (row.field === PHONE_REMOVE) return !list.includes(row.fromValue!);
  return !list.includes(row.fromValue!) || list.includes(row.toValue!);
};

/**
 * Plain fields the author sent that need no change: their pending row is a reverted one.
 * Sending "phoneNumbers" always clears all of the author's pending phone rows.
 */
export const revertedFields = (
  changes: { field: string }[],
  rows: SuggestionRow[],
) => {
  const kept = new Set(rows.map((r) => r.field));
  const fields = changes
    .map((c) => c.field)
    .filter((f) => f !== "phoneNumbers" && !kept.has(f));
  if (changes.some((c) => c.field === "phoneNumbers")) {
    fields.push(PHONE_ADD, PHONE_REMOVE, PHONE_REPLACE);
  }
  return [...new Set(fields)];
};
