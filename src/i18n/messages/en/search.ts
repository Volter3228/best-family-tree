import { plural } from "@/i18n/plural";
import type { Messages } from "../types";

export const search = {
  members: "Search members…",
  teams: "Search teams…",
  clear: "Clear search",
  hiddenByFilters: (n: number) => `${n} more hidden by filters`,
  nothingFound: "Nobody like that…",
  memberCount: (n: number) =>
    `${n} ${plural("en", n, { one: "member", other: "members" })}`,
} satisfies Messages["search"];
