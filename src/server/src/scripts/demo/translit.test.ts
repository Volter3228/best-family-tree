import { describe, expect, it } from "vitest";
import { translit } from "./translit.js";

describe("translit", () => {
  it("transliterates Ukrainian names", () => {
    expect(translit("Щербань")).toBe("shcherban");
    expect(translit("Єва")).toBe("ieva");
    expect(translit("Дем'ян")).toBe("demian");
  });

  it("keeps ascii letters and digits and drops everything else", () => {
    expect(translit("Ann-Marie 2")).toBe("annmarie2");
  });
});
