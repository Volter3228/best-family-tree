import { describe, expect, it } from "vitest";
import { MemberStatus } from "@/types";
import type { MemberFormData, MentorsListItem, Team, TeamType } from "@/types";
import { MEMBER_FORM_DEFAULTS } from "@/constants/form";
import validateMemberForm, {
  type StoredMemberValues,
} from "./memberFormValidation";

const mentors = [{ id: "mentor-1" }, { id: "mentor-2" }] as MentorsListItem[];

const sparse: StoredMemberValues = {
  name: "Ivan",
  birthday: new Date(2002, 4, 10),
  joinedAt: new Date(2020, 8, 1),
  mentorId: null,
  email: "ivan@example.com",
  phoneNumbers: [],
};

const complete: StoredMemberValues = {
  name: "Ivan Petrenko",
  birthday: new Date(2002, 4, 10),
  joinedAt: new Date(2020, 8, 1),
  mentorId: "mentor-1",
  email: "ivan@example.com",
  phoneNumbers: ["+380501112233"],
};

// The edit form opens pre-filled with what is stored.
const formFor = (
  stored: StoredMemberValues,
  overrides: Partial<MemberFormData> = {},
): MemberFormData => {
  const [firstName = "", ...rest] = stored.name.split(" ");
  return {
    ...MEMBER_FORM_DEFAULTS,
    firstName,
    lastName: rest.join(" "),
    birthday: stored.birthday,
    joinedAt: stored.joinedAt,
    mentorId: stored.mentorId ?? "",
    status: MemberStatus.Full,
    email: stored.email ?? "",
    phoneNumber: stored.phoneNumbers[0] ?? "",
    ...overrides,
  };
};

describe("validateMemberForm", () => {
  it("requires every field when adding a member", () => {
    const errors = validateMemberForm(MEMBER_FORM_DEFAULTS, mentors);

    expect(Object.keys(errors).sort()).toEqual(
      [
        "birthday",
        "email",
        "firstName",
        "joinedAt",
        "lastName",
        "mentorId",
        "phoneNumber",
        "status",
      ].sort(),
    );
  });

  it("lets a sparse record be saved with other required fields still empty", () => {
    const form = formFor(sparse, { telegramLink: "@ivan_p" });

    expect(validateMemberForm(form, mentors, [], sparse)).toEqual({});
  });

  it("accepts filling in a field that was empty", () => {
    const form = formFor(sparse, {
      lastName: "Petrenko",
      phoneNumber: "+380501112233",
    });

    expect(validateMemberForm(form, mentors, [], sparse)).toEqual({});
  });

  it.each<[keyof MemberFormData, Partial<MemberFormData>]>([
    ["firstName", { firstName: "" }],
    ["lastName", { lastName: "" }],
    ["birthday", { birthday: null }],
    ["joinedAt", { joinedAt: null }],
    ["mentorId", { mentorId: "" }],
    ["email", { email: "" }],
    ["phoneNumber", { phoneNumber: "" }],
  ])("refuses to empty %s once it has a value", (field, overrides) => {
    const form = formFor(complete, overrides);

    expect(validateMemberForm(form, mentors, [], complete)).toHaveProperty(field);
  });

  it("still checks the format of a value that is being added", () => {
    const form = formFor(sparse, { phoneNumber: "12345" });

    expect(validateMemberForm(form, mentors, [], sparse)).toHaveProperty(
      "phoneNumber",
    );
  });

  it("does not re-judge a stored value the user left untouched", () => {
    const legacy: StoredMemberValues = {
      ...complete,
      birthday: new Date(1975, 0, 1),
    };

    expect(validateMemberForm(formFor(legacy), mentors, [], legacy)).toEqual({});
  });

  it("handles stored dates that arrive from the API as ISO strings", () => {
    // The API sends dates as strings even though the model types them as Date.
    const fromApi = {
      ...complete,
      joinedAt: "2020-09-01T00:00:00.000Z",
    } as unknown as StoredMemberValues;
    const form = formFor(complete, {
      joinedAt: new Date("2020-09-01T00:00:00.000Z"),
      telegramLink: "@ivan_p",
    });

    expect(validateMemberForm(form, mentors, [], fromApi)).toEqual({});
  });
});

describe("validateMemberForm in minimal mode", () => {
  const minimalForm = (overrides: Partial<MemberFormData> = {}) => ({
    ...MEMBER_FORM_DEFAULTS,
    firstName: "Ivan",
    joinedAt: new Date(2008, 8, 1),
    status: MemberStatus.Alumni,
    ...overrides,
  });
  const minimal = { minimal: true };

  it("accepts name, status and join date only", () => {
    expect(
      validateMemberForm(minimalForm(), mentors, [], null, minimal),
    ).toEqual({});
  });

  it("still requires the name, join date and status", () => {
    const errors = validateMemberForm(
      minimalForm({ firstName: "", joinedAt: null, status: null }),
      mentors,
      [],
      null,
      minimal,
    );

    expect(Object.keys(errors).sort()).toEqual(
      ["firstName", "joinedAt", "status"].sort(),
    );
  });

  it("still checks the format of what is provided", () => {
    const errors = validateMemberForm(
      minimalForm({ email: "nope" }),
      mentors,
      [],
      null,
      minimal,
    );

    expect(errors).toHaveProperty("email");
  });
});

describe("validateMemberForm positions", () => {
  const row = {
    id: "row-1",
    roleName: "Тренер",
    teamTypeId: "t-work",
    teamName: "Нова група",
  };
  const workType = { id: "t-work", name: "Робоча група", isEvent: false };
  const eventType = { id: "t-event", name: "Курс", isEvent: true };
  const types = [workType, eventType] as TeamType[];
  const teams = [
    { id: "team-1", name: "Існуюча група", teamTypeId: "t-work" },
  ] as Team[];
  const check = (position: Partial<typeof row>, list = teams) =>
    validateMemberForm(
      formFor(complete, { positions: [{ ...row, ...position }] }),
      mentors,
      types,
      complete,
      { teams: list },
    );

  it("rejects a new team name for a non-event type", () => {
    expect(check({})).toHaveProperty("positions");
  });

  it("accepts an existing team of a non-event type", () => {
    expect(check({ teamName: "існуюча група" })).toEqual({});
  });

  it("rejects a non-event type with no team of its own", () => {
    expect(check({ teamName: "" })).toHaveProperty("positions");
  });

  it("allows a new team name for an event type", () => {
    expect(
      check({ teamTypeId: "t-event", teamName: "Курс 2025" }),
    ).toEqual({});
  });
});
