import { describe, expect, it } from "vitest";
import { filterOptionsByQuery } from "./filterOptions";

const options = [
  { value: "1", text: "Іван Петренко" },
  { value: "2", text: "Олена Коваль" },
];

describe("filterOptionsByQuery", () => {
  it("returns everything for an empty query", () => {
    expect(filterOptionsByQuery(options, " ")).toEqual(options);
  });

  it("matches words in any order, including part of a surname", () => {
    expect(filterOptionsByQuery(options, "петр ів")).toEqual([options[0]]);
    expect(filterOptionsByQuery(options, "ков")).toEqual([options[1]]);
  });
});
