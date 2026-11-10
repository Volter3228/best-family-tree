import { consoleMailer } from "./consoleMailer.js";
import { createGmailMailer } from "./gmailMailer.js";
import type { Mailer } from "./types.js";

let mailer: Mailer | null = null;

/** MAIL_TRANSPORT=console (default, dev) | gmail. */
export const getMailer = (): Mailer => {
  if (mailer) return mailer;
  if (process.env.MAIL_TRANSPORT === "gmail") {
    const { MAIL_FROM, GMAIL_CLIENT_ID, GMAIL_CLIENT_SECRET, GMAIL_REFRESH_TOKEN } =
      process.env;
    if (!MAIL_FROM || !GMAIL_CLIENT_ID || !GMAIL_CLIENT_SECRET || !GMAIL_REFRESH_TOKEN) {
      throw new Error("MAIL_TRANSPORT=gmail needs MAIL_FROM and the GMAIL_* variables");
    }
    mailer = createGmailMailer({
      from: MAIL_FROM,
      clientId: GMAIL_CLIENT_ID,
      clientSecret: GMAIL_CLIENT_SECRET,
      refreshToken: GMAIL_REFRESH_TOKEN,
    });
  } else {
    mailer = consoleMailer;
  }
  return mailer;
};
