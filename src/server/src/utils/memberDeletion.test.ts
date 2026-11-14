import { describe, expect, it } from "vitest";
import { ValidationError } from "./httpErrors";
import { assertNoMentees, MENTEES_BLOCK_DELETE_MESSAGE } from "./memberDeletion";

describe("assertNoMentees", () => {
  it("allows deletion when there are no mentees", () => {
    expect(() => assertNoMentees(0)).not.toThrow();
  });

  it("blocks deletion when there is at least one mentee", () => {
    expect(() => assertNoMentees(1)).toThrow(ValidationError);
    expect(() => assertNoMentees(3)).toThrow(MENTEES_BLOCK_DELETE_MESSAGE);
  });
});
