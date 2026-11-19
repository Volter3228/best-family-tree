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

/** Prisma filter for this author's pending rows that a new row supersedes. */
export const supersededFilter = (row: SuggestionRow) => {
  if (row.field === PHONE_ADD) {
    return { field: PHONE_ADD, toValue: row.toValue };
  }
  if (isPhoneField(row.field)) {
    return {
      field: { in: [PHONE_REPLACE, PHONE_REMOVE] },
      fromValue: row.fromValue,
    };
  }
  return { field: row.field };
};

/** Plain fields the author sent that need no change: their pending row is a reverted one. */
export const revertedFields = (
  changes: { field: string }[],
  rows: SuggestionRow[],
) => {
  const kept = new Set(rows.map((r) => r.field));
  return [
    ...new Set(
      changes
        .map((c) => c.field)
        .filter((f) => f !== "phoneNumbers" && !kept.has(f)),
    ),
  ];
};
