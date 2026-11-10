import { describe, expect, it } from "vitest";
import { diffAllowlist, parseAllowlistCsv } from "./allowlistCsv.js";

describe("parseAllowlistCsv", () => {
  it("reads a Google Group export by its header", () => {
    const csv = 'Email address,Member name,Role\r\nAnn@Example.com,Ann,MEMBER\r\nbob@example.com,"Bob, Jr",MEMBER\r\n';
    expect(parseAllowlistCsv(csv).emails).toEqual(["ann@example.com", "bob@example.com"]);
  });

  it("copes with a BOM, semicolons and quoted cells", () => {
    const csv = '﻿"E-mail";Name\n"a@x.com";"A"\n';
    expect(parseAllowlistCsv(csv).emails).toEqual(["a@x.com"]);
  });

  it("reads a bare list without a header", () => {
    expect(parseAllowlistCsv("a@x.com\nb@x.com\n").emails).toEqual(["a@x.com", "b@x.com"]);
  });

  it("finds the address column when there is no email header", () => {
    expect(parseAllowlistCsv("Name,Contact\nAnn,ann@x.com\n").emails).toEqual(["ann@x.com"]);
  });

  it("merges duplicates and keeps order", () => {
    const { emails } = parseAllowlistCsv("email\nb@x.com\na@x.com\nB@x.com\n");
    expect(emails).toEqual(["b@x.com", "a@x.com"]);
  });

  it("reports lines without a usable email", () => {
    const { emails, rejected } = parseAllowlistCsv("email\na@x.com\nnot-an-email\n,,\n");
    expect(emails).toEqual(["a@x.com"]);
    expect(rejected).toEqual(["not-an-email", ",,"]);
  });

  it("returns nothing for an empty file", () => {
    expect(parseAllowlistCsv("")).toEqual({ emails: [], rejected: [] });
  });
});

describe("diffAllowlist", () => {
  const existing = [
    { email: "keep@x.com", source: "GOOGLE_GROUP" as const },
    { email: "gone@x.com", source: "GOOGLE_GROUP" as const },
    { email: "manual@x.com", source: "MANUAL" as const },
  ];

  it("adds new, removes departed group rows, keeps the rest", () => {
    const diff = diffAllowlist(existing, ["keep@x.com", "new@x.com"]);
    expect(diff.toAdd).toEqual(["new@x.com"]);
    expect(diff.toRemove).toEqual(["gone@x.com"]);
    expect(diff.unchanged).toBe(1);
  });

  it("never removes a MANUAL row, even when absent from the file", () => {
    expect(diffAllowlist(existing, []).toRemove).toEqual(["keep@x.com", "gone@x.com"]);
  });

  it("never overwrites a MANUAL row listed in the file", () => {
    const diff = diffAllowlist(existing, ["manual@x.com"]);
    expect(diff.toAdd).toEqual([]);
    expect(diff.skippedManual).toEqual(["manual@x.com"]);
  });
});
