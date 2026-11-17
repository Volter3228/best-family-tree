import {
  MEMBER_STATUSES,
  ACTIVITY_STATES,
  JOIN_SEASONS,
  GENDER_VALUES,
} from "@/constants/filters";
import { isListFilterSet } from "./filterMembers";
import {
  familyIdToSlug,
  familyTokenToId,
  type FamilyGroupRef,
} from "./familySlug";
import {
  type FilterState,
  type RecruitmentSeason,
  type TreeMode,
  Gender,
  MemberStatus,
  ActivityState,
} from "@/types";

const TREE_MODES: TreeMode[] = ["family", "grid", "team"];

// "none" was the old name of the grid mode; keep old links working.
const parseTreeMode = (value: string | null): TreeMode => {
  const mode = value === "none" ? "grid" : value;
  return TREE_MODES.includes(mode as TreeMode) ? (mode as TreeMode) : "family";
};

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

const parseCsvArray = <T extends string>(val: string | null, all: T[]): T[] => {
  if (!val) return [];
  return val
    .split(",")
    .filter(Boolean)
    .map((item) => all.find((f) => f.toLowerCase() === item.toLowerCase()))
    .filter((x): x is T => x !== undefined);
};

// Transform array of search params to CSV string
const serializeCsv = (arr: string[]): string | null =>
  arr.length ? arr.map((s) => s.toLowerCase()).join(",") : null;

const serializeNumber = (n: number | null): string | null =>
  n !== null ? String(n) : null;

export const parseFiltersFromSearchParams = (
  params: URLSearchParams,
  familyGroups: FamilyGroupRef[] = [],
): FilterState => {
  return {
    joinYearFrom: parseNumberOrNull(params.get("joinYearFrom")),
    joinYearTo: parseNumberOrNull(params.get("joinYearTo")),
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
    genders: parseCsvArray<Gender>(params.get("gender"), GENDER_VALUES),
    familyGroupIds: parseCsvStrings(params.get("family")).map((token) =>
      familyTokenToId(familyGroups, token),
    ),
    birthdayFrom: params.get("birthdayFrom") || null,
    birthdayTo: params.get("birthdayTo") || null,
    birthdayIncludeYear: params.get("birthdayIncludeYear") === "1",
    treeMode: parseTreeMode(params.get("treeMode")),
    roleNames: parseCsvStrings(params.get("role")),
    // "eventType" is the pre-rename name of this parameter.
    teamTypeNames: parseCsvStrings(
      params.get("teamType") ?? params.get("eventType"),
    ),
    teamYearFrom: parseNumberOrNull(params.get("teamYearFrom")),
    teamYearTo: parseNumberOrNull(params.get("teamYearTo")),
    teamOnlyOngoing: params.get("teamOngoing") === "1",
  };
};

export const filtersToSearchParams = (
  filters: FilterState,
  familyGroups: FamilyGroupRef[] = [],
): URLSearchParams => {
  const params = new URLSearchParams();

  const set = (key: string, val: string | null) => {
    if (val !== null) params.set(key, val);
  };

  set("joinYearFrom", serializeNumber(filters.joinYearFrom));
  set("joinYearTo", serializeNumber(filters.joinYearTo));
  if (isListFilterSet(filters.joinSeasons, JOIN_SEASONS))
    set("season", serializeCsv(filters.joinSeasons));
  if (isListFilterSet(filters.statuses, MEMBER_STATUSES))
    set("status", serializeCsv(filters.statuses));
  if (isListFilterSet(filters.activityStates, ACTIVITY_STATES))
    set("activityState", serializeCsv(filters.activityStates));
  if (isListFilterSet(filters.genders, GENDER_VALUES))
    set("gender", serializeCsv(filters.genders));
  if (filters.familyGroupIds.length > 0)
    set(
      "family",
      serializeNameCsv(
        filters.familyGroupIds.map((id) => familyIdToSlug(familyGroups, id)),
      ),
    );
  set("birthdayFrom", filters.birthdayFrom);
  set("birthdayTo", filters.birthdayTo);
  if (filters.birthdayIncludeYear) set("birthdayIncludeYear", "1");
  if (filters.treeMode !== "family") set("treeMode", filters.treeMode);
  if (filters.roleNames.length > 0)
    set("role", serializeNameCsv(filters.roleNames));
  if (filters.teamTypeNames.length > 0)
    set("teamType", serializeNameCsv(filters.teamTypeNames));
  set("teamYearFrom", serializeNumber(filters.teamYearFrom));
  set("teamYearTo", serializeNumber(filters.teamYearTo));
  if (filters.teamOnlyOngoing) set("teamOngoing", "1");

  return params;
};
