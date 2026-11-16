import { describe, expect, it } from "vitest";
import { nextAdmittedIds } from "./useProgressiveIds";

const ids = (n: number, p = "a") =>
  Array.from({ length: n }, (_, i) => `${p}${i}`);

describe("nextAdmittedIds", () => {
  it("admits one chunk in list order", () => {
    const next = nextAdmittedIds(new Set(), ids(5), 2);
    expect([...next]).toEqual(["a0", "a1"]);
  });

  it("continues until all ids are in, then returns the same set", () => {
    let set: ReadonlySet<string> = new Set();
    for (let i = 0; i < 3; i++) set = nextAdmittedIds(set, ids(5), 2);
    expect(set.size).toBe(5);
    expect(nextAdmittedIds(set, ids(5), 2)).toBe(set);
  });

  it("keeps admitted ids regardless of order or chunk", () => {
    const set = new Set(ids(3));
    expect(nextAdmittedIds(set, ids(3).reverse(), 1)).toBe(set);
  });

  it("forgets ids that left the list", () => {
    const next = nextAdmittedIds(new Set(ids(3)), ["a1"], 5);
    expect([...next]).toEqual(["a1"]);
  });

  it("treats a new id set as new, keeping overlap", () => {
    const next = nextAdmittedIds(new Set(ids(3)), [...ids(2), "b0", "b1"], 1);
    expect([...next]).toEqual(["a0", "a1", "b0"]);
  });

  it("handles an empty list", () => {
    const empty = new Set<string>();
    expect(nextAdmittedIds(empty, [], 3)).toBe(empty);
    expect(nextAdmittedIds(new Set(["x"]), [], 3).size).toBe(0);
  });
});
