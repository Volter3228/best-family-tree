const CRLF = "\r\n";

const noLineBreaks = (value: string, label: string) => {
  if (/[\r\n]/.test(value)) throw new Error(`${label} must not contain line breaks`);
  return value;
};

const isAscii = (value: string) => /^[\x20-\x7e]*$/.test(value);

/** RFC 2047 encoded-word, needed for any non-ASCII header text. */
export const encodeHeaderText = (value: string) =>
  isAscii(value)
    ? value
    : `=?UTF-8?B?${Buffer.from(value, "utf8").toString("base64")}?=`;

/** `Name <a@b.c>` with the name encoded when it is not plain ASCII. */
export const formatAddress = (value: string) => {
  const match = noLineBreaks(value, "Address").match(/^\s*(.*?)\s*<([^<>]+)>\s*$/);
  if (!match) return value.trim();
  const name = match[1].replace(/^"|"$/g, "");
  if (!name) return match[2];
  const shown = isAscii(name) ? `"${name.replace(/(["\\])/g, "\\$1")}"` : encodeHeaderText(name);
  return `${shown} <${match[2]}>`;
};

// Base64 body lines are capped at 76 characters (RFC 2045).
const base64Body = (text: string) =>
  (Buffer.from(text, "utf8").toString("base64").match(/.{1,76}/g) ?? []).join(CRLF);

export const toBase64Url = (value: string) =>
  Buffer.from(value, "utf8").toString("base64url");

/** A multipart/alternative message: plain text first, HTML preferred. */
export const buildMime = (input: {
  from: string;
  to: string;
  subject: string;
  text: string;
  html: string;
  boundary?: string;
}) => {
  const boundary =
    input.boundary ?? `bft-${Math.random().toString(36).slice(2)}-${Date.now()}`;
  const part = (type: string, body: string) =>
    [
      `--${boundary}`,
      `Content-Type: ${type}; charset="UTF-8"`,
      "Content-Transfer-Encoding: base64",
      "",
      base64Body(body),
    ].join(CRLF);

  return [
    `From: ${formatAddress(input.from)}`,
    `To: ${formatAddress(input.to)}`,
    `Subject: ${encodeHeaderText(noLineBreaks(input.subject, "Subject"))}`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
    "",
    part("text/plain", input.text),
    part("text/html", input.html),
    `--${boundary}--`,
    "",
  ].join(CRLF);
};
