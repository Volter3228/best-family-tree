import { describe, expect, it } from "vitest";
import {
  buildMemberChanges,
  buildTeamChanges,
  findEmptiedTeamFields,
  type SuggestableMember,
  type SuggestMemberForm,
} from "./suggestChanges";

const member: SuggestableMember = {
  name: "Ivan Petrenko",
  birthday: new Date(2000, 3, 18),
  joinedAt: new Date(2020, 9, 1),
  status: "FULL",
  mentorId: "m1",
  email: "a@b.com",
  telegramLink: "ivan",
  instagramLink: null,
  facebookLink: null,
  linkedinLink: null,
  phoneNumbers: ["+380671111111", "+380672222222"],
};

const sameForm: SuggestMemberForm = {
  firstName: "Ivan",
  lastName: "Petrenko",
  birthday: new Date(2000, 3, 18),
  joinedAt: new Date(2020, 9, 1),
  status: "FULL",
  mentorId: "m1",
  email: "a@b.com",
  phoneNumber: "+380671111111",
  telegramLink: "ivan",
  instagramLink: "",
  facebookLink: "",
  linkedinLink: "",
};

describe("buildMemberChanges", () => {
  it("sends nothing for an untouched form", () => {
    expect(buildMemberChanges(member, sameForm)).toEqual([]);
  });

  it("sends only changed fields", () => {
    expect(
      buildMemberChanges(member, {
        ...sameForm,
        lastName: "Kovalenko",
        instagramLink: "ivan_k",
        birthday: new Date(2000, 3, 19),
      }),
    ).toEqual([
      { field: "name", value: "Ivan Kovalenko" },
      { field: "birthday", value: "2000-04-19" },
      { field: "instagramLink", value: "ivan_k" },
    ]);
  });

  it("never sends an emptied field", () => {
    expect(
      buildMemberChanges(member, { ...sameForm, email: "", telegramLink: "" }),
    ).toEqual([]);
  });

  it("replaces the first phone and keeps the rest", () => {
    expect(
      buildMemberChanges(member, { ...sameForm, phoneNumber: "+380673333333" }),
    ).toEqual([
      {
        field: "phoneNumbers",
        value: JSON.stringify(["+380673333333", "+380672222222"]),
      },
    ]);
  });
});

describe("team changes", () => {
  const team = {
    name: "BEST",
    description: "About",
    startYear: 2020,
    endYear: 2021,
    isOngoing: false,
    teamTypeId: "t1",
  };
  const form = {
    name: "BEST",
    description: "About",
    startYear: 2020,
    endYear: 2021,
    isOngoing: false,
    teamTypeId: "t1",
  };

  it("sends only differences", () => {
    expect(
      buildTeamChanges(team, { ...form, description: "New", isOngoing: true }),
    ).toEqual([
      { field: "description", value: "New" },
      { field: "isOngoing", value: "true" },
    ]);
  });

  it("reports emptied stored fields", () => {
    const emptied = findEmptiedTeamFields(team, {
      ...form,
      description: " ",
      startYear: undefined,
    });
    expect([...emptied].sort()).toEqual(["description", "startYear"]);
  });
});
