import { describe, expect, it } from "vitest";
import { renderSignInCodeEmail } from "./signInCodeEmail.js";

describe("renderSignInCodeEmail", () => {
  const email = renderSignInCodeEmail("123456", "https://best.example.com/");

  it("has the code in the subject and the text part", () => {
    expect(email.subject).toContain("123456");
    expect(email.text).toContain("123456");
  });

  it("has the code in the HTML: whole in the preheader, as pairs in the body", () => {
    expect(email.html).toContain("Твій код для входу: 123456");
    for (const pair of ["12", "34", "56"])
      expect(email.html).toContain(`>${pair}</td>`);
  });

  it("loads the logo from the client origin without a double slash", () => {
    expect(email.html).toContain(
      'src="https://best.example.com/images/best-logo.png"',
    );
  });

  it("declares colour schemes and a Ukrainian language", () => {
    expect(email.html).toContain('name="color-scheme"');
    expect(email.html).toContain('lang="uk"');
  });

  it("sends an English email on request, with the plural of minutes", () => {
    const en = renderSignInCodeEmail("123456", "https://x", "en");
    expect(en.subject).toBe("123456 — your BEST Tree sign-in code");
    expect(en.html).toContain('lang="en"');
    expect(en.html).toContain("Your sign-in code: 123456");
    expect(en.text).toContain("valid for 10 minutes");
    expect(en.html).not.toMatch(/[\u0400-\u04FF]/);
  });

  it("uses Ukrainian by default, with the plural of minutes", () => {
    expect(email.text).toContain("діє 10 хвилин");
  });

  it("refuses anything but six digits", () => {
    expect(() => renderSignInCodeEmail("12345", "https://x")).toThrow();
    expect(() => renderSignInCodeEmail("12345a", "https://x")).toThrow();
    expect(() => renderSignInCodeEmail("<b>000", "https://x")).toThrow();
  });
});
