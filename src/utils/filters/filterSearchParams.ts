import {
  MEMBER_STATUSES,
  ACTIVITY_STATES,
  JOIN_SEASONS,
  AVATAR_VALUES,
} from "@/constants/filters";
import {
  type AvatarFilterValue,
  type FilterState,
  type RecruitmentSeason,
  type TreeMode,
  MemberStatus,
  ActivityState,
} from "@/types";

const TREE_MODES: TreeMode[] = ["family", "none", "team"];

const parseNumberOrNull = (val: string | null): number | null => {
  if (!val) return null;
  const n = Number(val);
  return Number.isFinite(n) ? n : null;
};

const parseCsvStrings = (val: string | null): string[] => {
  if (!val) return [];
  return val
    .split(",")
    .filter(Boolean)
    .map((part) => {
      try {
        return decodeURIComponent(part);
      } catch {
        return part;
      }
    });
};

// Names are encoded per segment so values containing commas survive a round-trip.
const serializeNameCsv = (names: string[]): string =>
  names.map(encodeURIComponent).join(",");

const parseCsvArray = <T extends string>(
  val: string | null,
  fallback: T[],
): T[] => {
  if (!val) return [...fallback];
  return val
    .split(",")
    .filter(Boolean)
    .map((item) => fallback.find((f) => f.toLowerCase() === item.toLowerCase()))
    .filter((x): x is T => x !== undefined);
};

// Transform array of search params to CSV string
const serializeCsv = (arr: string[]): string | null =>
  arr.length ? arr.map((s) => s.toLowerCase()).join(",") : null;

const serializeNumber = (n: number | null): string | null =>
  n !== null ? String(n) : null;

export const parseFiltersFromSearchParams = (
  params: URLSearchParams,
): FilterState => {
  return {
    joinYearFrom: parseNumberOrNull(params.get("joinYearFrom")),
    joinYearTo: parseNumberOrNull(params.get("joinYearTo")),
    joinYearRange: params.get("joinYearRange") === "1",
    joinSeasons: parseCsvArray<RecruitmentSeason>(
      params.get("season"),
      JOIN_SEASONS,
    ),
    statuses: parseCsvArray<MemberStatus>(
      params.get("status"),
      MEMBER_STATUSES,
    ),
    activityStates: parseCsvArray<ActivityState>(
      params.get("activityState"),
      ACTIVITY_STATES,
    ),
    birthdayFrom: params.get("birthdayFrom") || null,
    birthdayTo: params.get("birthdayTo") || null,
    birthdayRange: params.get("birthdayRange") === "1",
    birthdayIncludeYear: params.get("birthdayIncludeYear") === "1",
    avatars: parseCsvArray<AvatarFilterValue>(
      params.get("avatar"),
      AVATAR_VALUES,
    ),
    lineageMemberId: params.get("lineageMemberId") || null,
    treeMode: TREE_MODES.includes(params.get("treeMode") as TreeMode)
      ? (params.get("treeMode") as TreeMode)
      : "family",
    roleNames: parseCsvStrings(params.get("role")),
    eventTypeNames: parseCsvStrings(params.get("eventType")),
  };
};

export const filtersToSearchParams = (
  filters: FilterState,
): URLSearchParams => {
  const params = new URLSearchParams();

  const set = (key: string, val: string | null) => {
    if (val !== null) params.set(key, val);
  };

  set("joinYearFrom", serializeNumber(filters.joinYearFrom));
  set("joinYearTo", serializeNumber(filters.joinYearTo));
  if (filters.joinYearRange) set("joinYearRange", "1");
  if (filters.joinSeasons.length < JOIN_SEASONS.length)
    set("season", serializeCsv(filters.joinSeasons));
  if (filters.statuses.length < MEMBER_STATUSES.length)
    set("status", serializeCsv(filters.statuses));
  if (filters.activityStates.length < ACTIVITY_STATES.length)
    set("activityState", serializeCsv(filters.activityStates));
  set("birthdayFrom", filters.birthdayFrom);
  set("birthdayTo", filters.birthdayTo);
  if (filters.birthdayRange) set("birthdayRange", "1");
  if (filters.birthdayIncludeYear) set("birthdayIncludeYear", "1");
  if (filters.avatars.length < AVATAR_VALUES.length)
    set("avatar", serializeCsv(filters.avatars));
  if (filters.treeMode !== "family") set("treeMode", filters.treeMode);
  if (filters.roleNames.length > 0) set("role", serializeNameCsv(filters.roleNames));
  if (filters.eventTypeNames.length > 0)
    set("eventType", serializeNameCsv(filters.eventTypeNames));

  const { lineageMemberId } = filters;
  if (lineageMemberId) {
    set("lineageMemberId", lineageMemberId);
  }

  return params;
};
