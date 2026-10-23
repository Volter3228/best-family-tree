import { describe, expect, it } from "vitest";
import {
  validateMemberUpdate,
  type ExistingMember,
} from "./memberUpdateValidation";

const sparseMember: ExistingMember = {
  name: "Ivan",
  joinedAt: new Date("2020-09-01"),
  birthday: new Date("2002-05-10"),
  mentorId: null,
  email: "ivan@example.com",
  phoneNumbers: [],
};

const completeMember: ExistingMember = {
  name: "Ivan Petrenko",
  joinedAt: new Date("2020-09-01"),
  birthday: new Date("2002-05-10"),
  mentorId: "mentor-1",
  email: "ivan@example.com",
  phoneNumbers: ["+380501112233"],
};

const bodyFor = (member: ExistingMember, overrides: Record<string, unknown> = {}) => {
  const [firstName = "", ...rest] = member.name.split(" ");
  return {
    firstName,
    lastName: rest.join(" "),
    birthday: member.birthday?.toISOString() ?? "",
    joinedAt: member.joinedAt?.toISOString() ?? "",
    mentorId: member.mentorId ?? "",
    status: "FULL",
    email: member.email ?? "",
    phoneNumbers: JSON.stringify(member.phoneNumbers),
    ...overrides,
  };
};

describe("validateMemberUpdate", () => {
  it("lets a sparse record gain data while other required fields stay empty", () => {
    const result = validateMemberUpdate(
      bodyFor(sparseMember, { telegramLink: "@ivan_p" }),
      sparseMember,
    );

    expect(result.success).toBe(true);
  });

  it("accepts adding a value to a field that was empty", () => {
    const result = validateMemberUpdate(
      bodyFor(sparseMember, {
        lastName: "Petrenko",
        phoneNumbers: JSON.stringify(["+380501112233"]),
      }),
      sparseMember,
    );

    expect(result.success).toBe(true);
  });

  it.each([
    ["firstName", { firstName: "" }],
    ["lastName", { lastName: "" }],
    ["birthday", { birthday: "" }],
    ["joinedAt", { joinedAt: "" }],
    ["mentorId", { mentorId: "" }],
    ["email", { email: "" }],
    ["phoneNumbers", { phoneNumbers: "[]" }],
  ])("rejects emptying %s once it has a value", (field, overrides) => {
    const result = validateMemberUpdate(
      bodyFor(completeMember, overrides),
      completeMember,
    );

    expect(result.success).toBe(false);
    if (!result.success) expect(result.errors).toContain(field);
  });

  it("accepts changing a value to another value", () => {
    const result = validateMemberUpdate(
      bodyFor(completeMember, { email: "new@example.com", mentorId: "mentor-2" }),
      completeMember,
    );

    expect(result.success).toBe(true);
  });

  it("still rejects a malformed value in a field that is being filled", () => {
    const result = validateMemberUpdate(
      bodyFor(sparseMember, { email: "not-an-email" }),
      sparseMember,
    );

    expect(result.success).toBe(false);
    if (!result.success) expect(result.errors).toContain("email");
  });

  it("keeps rejecting an unknown status", () => {
    const result = validateMemberUpdate(
      bodyFor(sparseMember, { status: "LEGEND" }),
      sparseMember,
    );

    expect(result.success).toBe(false);
  });
});
