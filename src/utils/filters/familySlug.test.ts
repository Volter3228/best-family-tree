import { describe, expect, it } from "vitest";
import { EMPTY_FILTER_STATE } from "@/constants/filters";
import { familySlug } from "./familySlug";
import {
  filtersToSearchParams,
  parseFiltersFromSearchParams,
} from "./filterSearchParams";

const groups = [
  { id: "cl1", name: "Сім'я Коваль" },
  { id: "cl2", name: "Щербаки" },
];

describe("family slug", () => {
  it("transliterates names", () => {
    expect(familySlug("Сім'я Коваль")).toBe("simia-koval");
    expect(familySlug("Щербаки")).toBe("shcherbaky");
  });

  it("writes slugs and reads them back as ids", () => {
    const filters = { ...EMPTY_FILTER_STATE, familyGroupIds: ["cl1", "cl2"] };
    const params = filtersToSearchParams(filters, groups);
    expect(params.get("family")).toBe("simia-koval,shcherbaky");
    expect(parseFiltersFromSearchParams(params, groups)).toEqual(filters);
  });

  it("still accepts old id links", () => {
    expect(
      parseFiltersFromSearchParams(new URLSearchParams("family=cl2"), groups)
        .familyGroupIds,
    ).toEqual(["cl2"]);
  });
});
