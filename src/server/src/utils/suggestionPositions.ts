import type { SuggestionRow } from "./suggestions.js";

export const POSITION_ADD = "position:add";
export const POSITION_REMOVE = "position:remove";
export const POSITION_REPLACE = "position:replace";

export const isPositionField = (field: string) =>
  field === POSITION_ADD ||
  field === POSITION_REMOVE ||
  field === POSITION_REPLACE;

/**
 * A position as stored in a suggestion value (JSON). `roleId` / `teamId` are
 * missing when the role or team does not exist yet: it is created on approval.
 * `id` is set only on the old side of a replace or remove.
 */
export type PositionValue = {
  id?: string;
  roleId?: string;
  roleName: string;
  teamId?: string;
  teamName?: string;
  teamTypeId?: string;
  // The period of a team the approval creates.
  teamStartYear?: number;
  teamEndYear?: number;
  // Only for positions without a team.
  organization?: string;
  startYear?: number;
  endYear?: number;
};

export type StoredPosition = {
  id: string;
  roleId: string;
  teamId: string | null;
  organization: string | null;
  startYear: number | null;
  endYear: number | null;
};

export type StoredPositionWithNames = StoredPosition & {
  role: { name: string };
  team: { name: string; teamTypeId: string | null } | null;
};

const KEY_ORDER: (keyof PositionValue)[] = [
  "id",
  "roleId",
  "roleName",
  "teamId",
  "teamName",
  "teamTypeId",
  "teamStartYear",
  "teamEndYear",
  "organization",
  "startYear",
  "endYear",
];

/** Canonical JSON, so equal positions are equal strings. */
export const encodePosition = (value: PositionValue) =>
  JSON.stringify(
    Object.fromEntries(
      KEY_ORDER.filter((key) => value[key] != null).map((key) => [
        key,
        value[key],
      ]),
    ),
  );

export const decodePosition = (raw: string | null): PositionValue | null => {
  if (!raw) return null;
  try {
    return JSON.parse(raw) as PositionValue;
  } catch {
    return null;
  }
};

export const toPositionValue = (
  stored: StoredPositionWithNames,
): PositionValue => ({
  id: stored.id,
  roleId: stored.roleId,
  roleName: stored.role.name,
  teamId: stored.teamId ?? undefined,
  teamName: stored.team?.name,
  teamTypeId: stored.team?.teamTypeId ?? undefined,
  organization: stored.organization ?? undefined,
  startYear: stored.startYear ?? undefined,
  endYear: stored.endYear ?? undefined,
});

// A role or team that does not exist yet is keyed by its name.
const byName = (name?: string) => (name ? `~${name.toLowerCase()}` : "");

/** Same shape as the key the member save uses to keep unchanged positions. */
export const positionValueKey = (p: PositionValue | StoredPosition) => {
  const value = p as PositionValue;
  return [
    p.roleId ?? byName(value.roleName),
    p.teamId ?? byName(value.teamName),
    p.organization ?? "",
    p.startYear ?? "",
    p.endYear ?? "",
  ].join("|");
};

export type SentPosition = { positionId?: string; value: PositionValue };

/**
 * Rows for the difference between the member's positions and the sent list.
 * A sent row that keeps its `positionId` edits that position; one without it
 * adds a position; a stored position left out of the list is removed.
 */
export const diffPositions = (
  current: StoredPositionWithNames[],
  sent: SentPosition[],
): SuggestionRow[] => {
  const byId = new Map(current.map((p) => [p.id, p]));
  const currentKeys = new Set(current.map(positionValueKey));
  const seenIds = new Set<string>();
  const addedKeys = new Set<string>();
  const rows: SuggestionRow[] = [];

  for (const { positionId, value } of sent) {
    const key = positionValueKey(value);
    const existing = positionId ? byId.get(positionId) : undefined;
    if (existing && !seenIds.has(existing.id)) {
      seenIds.add(existing.id);
      if (positionValueKey(existing) === key) continue;
      rows.push({
        field: POSITION_REPLACE,
        fromValue: encodePosition(toPositionValue(existing)),
        toValue: encodePosition(value),
      });
      continue;
    }
    if (currentKeys.has(key) || addedKeys.has(key)) continue;
    addedKeys.add(key);
    rows.push({
      field: POSITION_ADD,
      fromValue: null,
      toValue: encodePosition(value),
    });
  }

  for (const position of current) {
    if (seenIds.has(position.id)) continue;
    // The same position sent without its id is kept, not removed.
    if (
      sent.some(
        (s) =>
          !s.positionId &&
          positionValueKey(s.value) === positionValueKey(position),
      )
    ) {
      continue;
    }
    rows.push({
      field: POSITION_REMOVE,
      fromValue: encodePosition(toPositionValue(position)),
      toValue: null,
    });
  }
  return rows;
};

/** The stored position a replace or remove row refers to. */
export const targetPositionId = (row: SuggestionRow) =>
  decodePosition(row.fromValue)?.id ?? null;

/**
 * Whether the member's positions changed since the suggestion was made: an
 * added position already exists, or the edited/removed one is gone or changed.
 */
export const isPositionStale = (
  row: SuggestionRow,
  current: StoredPosition[],
): boolean => {
  if (row.field === POSITION_ADD) {
    const next = decodePosition(row.toValue);
    return (
      !!next &&
      current.some((p) => positionValueKey(p) === positionValueKey(next))
    );
  }
  const old = decodePosition(row.fromValue);
  const stored = current.find((p) => p.id === old?.id);
  return !old || !stored || positionValueKey(stored) !== positionValueKey(old);
};
