import { describe, expect, it } from "vitest";
import { isEditableTarget, isSearchShortcut } from "./searchShortcut";

interface Keys {
  key: string;
  code: string;
  ctrlKey: boolean;
  metaKey: boolean;
  altKey: boolean;
  shiftKey: boolean;
}

const keys = (overrides: Partial<Keys> = {}): Keys => ({
  key: "f",
  code: "KeyF",
  ctrlKey: true,
  metaKey: false,
  altKey: false,
  shiftKey: false,
  ...overrides,
});

const element = (tagName: string, isContentEditable = false) =>
  ({ tagName, isContentEditable }) as unknown as EventTarget;

describe("isSearchShortcut", () => {
  it("matches Ctrl+F", () => {
    expect(isSearchShortcut(keys())).toBe(true);
  });

  it("matches Cmd+F", () => {
    expect(isSearchShortcut(keys({ ctrlKey: false, metaKey: true }))).toBe(
      true,
    );
  });

  it("matches an uppercase F (Caps Lock or Shift held by the layout)", () => {
    expect(isSearchShortcut(keys({ key: "F" }))).toBe(true);
  });

  it("matches the F key on a Ukrainian layout, where it types «а»", () => {
    expect(isSearchShortcut(keys({ key: "а", code: "KeyF" }))).toBe(true);
    expect(isSearchShortcut(keys({ key: "А", code: "KeyF" }))).toBe(true);
  });

  it("ignores a Latin letter typed on the F key's position (Dvorak Ctrl+Y)", () => {
    expect(isSearchShortcut(keys({ key: "y", code: "KeyF" }))).toBe(false);
  });

  it("ignores a non-Latin character on another key", () => {
    expect(isSearchShortcut(keys({ key: "а", code: "KeyA" }))).toBe(false);
  });

  it("ignores F without a modifier", () => {
    expect(isSearchShortcut(keys({ ctrlKey: false }))).toBe(false);
  });

  it("ignores Ctrl with other keys", () => {
    expect(isSearchShortcut(keys({ key: "g", code: "KeyG" }))).toBe(false);
  });

  it("ignores Ctrl+Shift+F and Ctrl+Alt+F", () => {
    expect(isSearchShortcut(keys({ shiftKey: true }))).toBe(false);
    expect(isSearchShortcut(keys({ altKey: true }))).toBe(false);
  });
});

describe("isEditableTarget", () => {
  it("treats text fields as editable", () => {
    expect(isEditableTarget(element("INPUT"))).toBe(true);
    expect(isEditableTarget(element("TEXTAREA"))).toBe(true);
    expect(isEditableTarget(element("SELECT"))).toBe(true);
  });

  it("treats contenteditable elements as editable", () => {
    expect(isEditableTarget(element("DIV", true))).toBe(true);
  });

  it("does not treat the canvas, body or buttons as editable", () => {
    expect(isEditableTarget(element("CANVAS"))).toBe(false);
    expect(isEditableTarget(element("BODY"))).toBe(false);
    expect(isEditableTarget(element("BUTTON"))).toBe(false);
  });

  it("returns false without a target", () => {
    expect(isEditableTarget(null)).toBe(false);
  });
});
