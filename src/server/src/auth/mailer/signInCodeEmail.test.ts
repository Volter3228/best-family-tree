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
    for (const pair of ["12", "34", "56"]) expect(email.html).toContain(`>${pair}</td>`);
  });

  it("loads the logo from the client origin without a double slash", () => {
    expect(email.html).toContain('src="https://best.example.com/images/best-logo.png"');
  });

  it("declares colour schemes and a Ukrainian language", () => {
    expect(email.html).toContain('name="color-scheme"');
    expect(email.html).toContain('lang="uk"');
  });

  it("refuses anything but six digits", () => {
    expect(() => renderSignInCodeEmail("12345", "https://x")).toThrow();
    expect(() => renderSignInCodeEmail("12345a", "https://x")).toThrow();
    expect(() => renderSignInCodeEmail("<b>000", "https://x")).toThrow();
  });
});
