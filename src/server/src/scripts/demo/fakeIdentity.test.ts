import { describe, expect, it } from "vitest";
import { createIdentityFactory } from "./fakeIdentity.js";

const none = { names: new Set<string>(), phones: new Set<string>() };

describe("createIdentityFactory", () => {
  it("gives the same people for the same seed", () => {
    const run = () => {
      const factory = createIdentityFactory(7, none);
      return [factory.person().name, factory.phone(), factory.person().name];
    };
    expect(run()).toEqual(run());
  });

  it("never repeats a name, an email or a phone", () => {
    const factory = createIdentityFactory(1, none);
    const people = Array.from({ length: 800 }, () => factory.person());
    expect(new Set(people.map((p) => p.name)).size).toBe(800);
    const emails = people.map((p) => factory.email(p));
    expect(new Set(emails).size).toBe(800);
    const phones = Array.from({ length: 800 }, () => factory.phone());
    expect(new Set(phones).size).toBe(800);
  });

  it("avoids the real names and phones it was given", () => {
    const first = createIdentityFactory(3, none).person().name;
    const factory = createIdentityFactory(3, {
      names: new Set([first]),
      phones: new Set(),
    });
    expect(factory.person().name).not.toBe(first);
  });

  it("makes ascii emails and handles", () => {
    const factory = createIdentityFactory(2, none);
    const p = factory.person();
    expect(factory.email(p)).toMatch(/^[a-z0-9.]+@example\.com$/);
    expect(factory.handle(p)).toMatch(/^[a-z0-9_]+$/);
  });

  it("puts the birthday 18-25 years before joining", () => {
    const joined = new Date("2015-09-01");
    const born = createIdentityFactory(5, none).birthdayBefore(joined);
    const years = (joined.getTime() - born.getTime()) / (365.25 * 24 * 3600 * 1000);
    expect(years).toBeGreaterThanOrEqual(18);
    expect(years).toBeLessThanOrEqual(25);
  });

  it("makes Ukrainian phones", () => {
    expect(createIdentityFactory(4, none).phone()).toMatch(/^\+380\d{9}$/);
  });
});
