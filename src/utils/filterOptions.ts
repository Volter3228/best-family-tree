import { matchesQuery } from "@/hooks/data/searchMatching";
import type { DropdownOption } from "@/types";

// The member search's matching: every typed word must start or sit inside a
// word of the option, in any order (so a surname alone finds the member).
export const filterOptionsByQuery = (
  options: DropdownOption[],
  query: string,
): DropdownOption[] =>
  query.trim()
    ? options.filter((option) => matchesQuery([option.text], query))
    : options;
