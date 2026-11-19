import { describe, expect, it } from "vitest";
import type { SuggestionDto } from "@/api/suggestionReview";
import { fieldLabelKey, formatDay, formatSent, groupByBatch } from "./suggestionFormat";

const row = (id: string, batchId: string): SuggestionDto => ({
  id,
  batchId,
  target: { kind: "member", id: "m", name: "A", photo: null },
  field: "email",
  fromValue: null,
  toValue: "a@b.c",
  currentValue: null,
  stale: false,
  locked: false,
  author: { memberId: null, name: null, email: null },
  createdAt: "2026-01-01T00:00:00Z",
});

describe("groupByBatch", () => {
  it("merges one author's rows per target across batches", () => {
    const other = {
      ...row("2", "a"),
      author: { memberId: "x", name: null, email: null },
    };
    const later = { ...row("3", "b"), createdAt: "2026-02-01T00:00:00Z" };
    const groups = groupByBatch([row("1", "b"), other, later]);
    expect(groups).toHaveLength(2);
    expect(groups[0].items.map((i) => i.id)).toEqual(["1", "3"]);
    expect(groups[0].createdAt).toBe("2026-02-01T00:00:00Z");
  });
});

describe("formatDay", () => {
  it("formats a date and keeps junk as is", () => {
    expect(formatDay("2020-03-05", "en")).toContain("2020");
    expect(formatDay("nope", "en")).toBe("nope");
  });
});

describe("formatSent", () => {
  const now = new Date("2026-05-10T12:00:00Z").getTime();
  it("uses the given text for the last minute", () => {
    expect(formatSent("2026-05-10T11:59:40Z", "en", "now", now)).toBe("now");
  });
  it("is relative within a week", () => {
    expect(formatSent("2026-05-10T09:00:00Z", "en", "now", now)).toContain("3");
  });
  it("falls back to a date after a week", () => {
    expect(formatSent("2026-01-01T00:00:00Z", "en", "now", now)).toContain(
      "2026",
    );
  });
});

describe("fieldLabelKey", () => {
  it("names a photo by what it belongs to", () => {
    expect(fieldLabelKey("photo", "member")).toBe("photo");
    expect(fieldLabelKey("photo", "team")).toBe("logo");
    expect(fieldLabelKey("email", "team")).toBe("email");
  });
});
