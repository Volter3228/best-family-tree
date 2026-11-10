import { describe, expect, it } from "vitest";
import { buildMime, encodeHeaderText, formatAddress, toBase64Url } from "./mime.js";

const decodeParts = (mime: string) =>
  [...mime.matchAll(/Content-Transfer-Encoding: base64\r\n\r\n([\s\S]*?)\r\n--/g)].map(
    (m) => Buffer.from(m[1].replace(/\r\n/g, ""), "base64").toString("utf8"),
  );

describe("encodeHeaderText", () => {
  it("leaves ASCII alone", () => {
    expect(encodeHeaderText("Your code")).toBe("Your code");
  });
  it("encodes Ukrainian as an RFC 2047 word", () => {
    const encoded = encodeHeaderText("Код для входу");
    expect(encoded).toMatch(/^=\?UTF-8\?B\?[A-Za-z0-9+/=]+\?=$/);
    const b64 = encoded.slice("=?UTF-8?B?".length, -2);
    expect(Buffer.from(b64, "base64").toString("utf8")).toBe("Код для входу");
  });
});

describe("formatAddress", () => {
  it("keeps a bare address", () => {
    expect(formatAddress("a@x.com")).toBe("a@x.com");
  });
  it("quotes an ASCII display name", () => {
    expect(formatAddress("BEST Tree <a@x.com>")).toBe('"BEST Tree" <a@x.com>');
  });
  it("encodes a non-ASCII display name", () => {
    expect(formatAddress("Дерево BEST <a@x.com>")).toMatch(/^=\?UTF-8\?B\?.+\?= <a@x\.com>$/);
  });
  it("refuses header injection", () => {
    expect(() => formatAddress("a@x.com\r\nBcc: evil@x.com")).toThrow();
  });
});

describe("buildMime", () => {
  const mime = buildMime({
    from: "BEST Tree <from@x.com>",
    to: "to@x.com",
    subject: "123456 — код для входу",
    text: "Код: 123456",
    html: "<p>Код: <b>123456</b></p>",
    boundary: "B",
  });

  it("has the required headers", () => {
    expect(mime).toContain('From: "BEST Tree" <from@x.com>');
    expect(mime).toContain("To: to@x.com");
    expect(mime).toContain("MIME-Version: 1.0");
    expect(mime).toContain('Content-Type: multipart/alternative; boundary="B"');
    expect(mime).toMatch(/Subject: =\?UTF-8\?B\?/);
  });

  it("carries both parts intact, UTF-8 included", () => {
    expect(decodeParts(mime)).toEqual(["Код: 123456", "<p>Код: <b>123456</b></p>"]);
  });

  it("closes the boundary and wraps lines at 76 characters", () => {
    expect(mime).toContain("--B--");
    const long = buildMime({
      from: "a@x.com",
      to: "b@x.com",
      subject: "s",
      text: "я".repeat(500),
      html: "<p>x</p>",
      boundary: "B",
    });
    for (const line of long.split("\r\n")) expect(line.length).toBeLessThanOrEqual(76 + 80);
    expect(decodeParts(long)[0]).toBe("я".repeat(500));
  });

  it("rejects a subject with a line break", () => {
    expect(() =>
      buildMime({ from: "a@x.com", to: "b@x.com", subject: "a\nBcc: x", text: "", html: "" }),
    ).toThrow();
  });
});

describe("toBase64Url", () => {
  it("uses the URL alphabet without padding", () => {
    const out = toBase64Url("???>>>~~~ÿÿÿ");
    expect(out).not.toMatch(/[+/=]/);
    expect(Buffer.from(out, "base64url").toString("utf8")).toBe("???>>>~~~ÿÿÿ");
  });
});
