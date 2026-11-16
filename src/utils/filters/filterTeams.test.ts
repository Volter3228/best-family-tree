import { describe, expect, it } from "vitest";
import { EMPTY_FILTER_STATE } from "@/constants/filters";
import type { FilterState, Team } from "@/types";
import { teamMatchesFilters } from "./filterTeams";

// Team running from 2019 to 2021, not ongoing.
const team: Team = {
  id: "t1",
  name: "Team",
  startYear: 2019,
  endYear: 2021,
  isOngoing: false,
  teamType: null,
};

const matches = (patch: Partial<FilterState>) =>
  teamMatchesFilters(team, { ...EMPTY_FILTER_STATE, ...patch });

describe("team period range", () => {
  it("matches a team that spans the single year", () => {
    expect(matches({ teamYearFrom: 2020 })).toBe(true);
    expect(matches({ teamYearTo: 2020 })).toBe(true);
    expect(matches({ teamYearFrom: 2022 })).toBe(false);
    expect(matches({ teamYearTo: 2018 })).toBe(false);
  });

  it("matches a team whose span overlaps the inclusive range", () => {
    expect(matches({ teamYearFrom: 2018, teamYearTo: 2019 })).toBe(true);
    expect(matches({ teamYearFrom: 2021, teamYearTo: 2030 })).toBe(true);
    expect(matches({ teamYearFrom: 2022, teamYearTo: 2025 })).toBe(false);
  });

  it("swaps an inverted range", () => {
    expect(matches({ teamYearFrom: 2019, teamYearTo: 2018 })).toBe(true);
    expect(matches({ teamYearFrom: 2025, teamYearTo: 2022 })).toBe(false);
  });
});
