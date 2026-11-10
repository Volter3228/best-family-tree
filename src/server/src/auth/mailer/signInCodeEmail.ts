import { CODE_TTL_MS } from "../emailCodes.js";

const BLUE = "#0087db";
const GREEN = "#81d11f";
// Darker green for text: the brand green is too pale for digits on white.
const GREEN_TEXT = "#5b9e10";
const ORANGE = "#f08400";

const MINUTES = CODE_TTL_MS / 60_000;

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

/** `123456` -> ["12", "34", "56"], one pair per brand colour. */
const pairs = (code: string) => [code.slice(0, 2), code.slice(2, 4), code.slice(4, 6)];

export const renderSignInCodeEmail = (code: string, clientOrigin: string) => {
  if (!/^\d{6}$/.test(code)) throw new Error("Sign-in code must be six digits");
  const [a, b, c] = pairs(code);
  const logo = `${escapeHtml(clientOrigin.replace(/\/$/, ""))}/images/best-logo.png`;

  const subject = `${code} — код для входу в BEST Tree`;

  const text = [
    "BEST Tree",
    "",
    `Твій код для входу: ${code}`,
    "",
    `Він діє ${MINUTES} хвилин і спрацює один раз.`,
    "Якщо ти не просив(-ла) код, просто проігноруй цей лист.",
  ].join("\n");

  const digit = (value: string, color: string, darkColor: string) =>
    `<td class="code-${darkColor}" style="font:700 40px/1.1 'Courier New',Courier,monospace;letter-spacing:4px;color:${color};padding:0 2px;">${value}</td>`;
  const dot = `<td class="muted" style="font:700 28px/1 Arial,sans-serif;color:#9ca3af;padding:0 10px;">·</td>`;

  const html = `<!doctype html>
<html lang="uk">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light dark">
<meta name="supported-color-schemes" content="light dark">
<title>${escapeHtml(subject)}</title>
<style>
  :root { color-scheme: light dark; supported-color-schemes: light dark; }
  @media (prefers-color-scheme: dark) {
    .bg { background:#0b1018 !important; }
    .card { background:#161d2a !important; }
    .text { color:#e5e7eb !important; }
    .muted { color:#9ca3af !important; }
    .code-box { background:#0b1018 !important; }
    .code-blue { color:#38b6ff !important; }
    .code-green { color:#9be04a !important; }
    .code-orange { color:#ffa63d !important; }
  }
</style>
</head>
<body class="bg" style="margin:0;padding:0;background:#f3f4f6;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">Твій код для входу: ${code}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="bg" style="background:#f3f4f6;">
<tr><td align="center" style="padding:24px 12px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="card" style="max-width:420px;background:#ffffff;border-radius:16px;overflow:hidden;">
    <tr><td style="padding:0;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
        <td width="34%" height="6" style="background:${BLUE};font-size:0;line-height:0;">&nbsp;</td>
        <td width="33%" height="6" style="background:${GREEN};font-size:0;line-height:0;">&nbsp;</td>
        <td width="33%" height="6" style="background:${ORANGE};font-size:0;line-height:0;">&nbsp;</td>
      </tr></table>
    </td></tr>
    <tr><td align="center" style="padding:28px 24px 8px;">
      <img src="${logo}" width="72" height="72" alt="" style="display:block;border:0;">
      <div class="text" style="font:700 22px/1.3 Arial,Helvetica,sans-serif;color:#111827;margin-top:12px;">BEST Tree</div>
    </td></tr>
    <tr><td align="center" class="text" style="padding:8px 24px 0;font:400 15px/1.5 Arial,Helvetica,sans-serif;color:#111827;">
      Твій код для входу
    </td></tr>
    <tr><td align="center" style="padding:16px 24px;">
      <table role="presentation" cellpadding="0" cellspacing="0" class="code-box" style="background:#f3f4f6;border-radius:12px;"><tr><td style="padding:16px 18px;">
        <table role="presentation" cellpadding="0" cellspacing="0"><tr>
          ${digit(a, BLUE, "blue")}${dot}${digit(b, GREEN_TEXT, "green")}${dot}${digit(c, ORANGE, "orange")}
        </tr></table>
      </td></tr></table>
    </td></tr>
    <tr><td align="center" class="muted" style="padding:0 24px 28px;font:400 13px/1.5 Arial,Helvetica,sans-serif;color:#6b7280;">
      Він діє ${MINUTES} хвилин і спрацює один раз.<br>
      Якщо ти не просив(-ла) код, просто проігноруй цей лист.
    </td></tr>
  </table>
</td></tr>
</table>
</body>
</html>`;

  return { subject, html, text };
};
