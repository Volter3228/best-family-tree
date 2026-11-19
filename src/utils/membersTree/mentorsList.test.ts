import { describe, expect, it } from "vitest";
import { MemberStatus } from "@/types";
import { getUpdatedMentorsList } from "./mentorsList";

const member = { id: "a", name: "A", status: MemberStatus.Full };

describe("getUpdatedMentorsList", () => {
  it("leaves an unloaded (empty) list untouched", () => {
    expect(getUpdatedMentorsList([], member)).toEqual([]);
    expect(getUpdatedMentorsList([], member, "update")).toEqual([]);
  });

  it("adds a new mentor to a loaded list", () => {
    expect(getUpdatedMentorsList([{ id: "b", name: "B" }], member)).toEqual([
      { id: "b", name: "B" },
      { id: "a", name: "A" },
    ]);
  });
});
