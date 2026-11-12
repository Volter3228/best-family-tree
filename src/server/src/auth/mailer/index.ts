import { consoleMailer } from "./consoleMailer.js";
import { createGmailMailer } from "./gmailMailer.js";
import { createResendMailer } from "./resendMailer.js";
import { readMailTransport } from "./transports.js";
import type { Mailer } from "./types.js";

let mailer: Mailer | null = null;

/** MAIL_TRANSPORT=console (default, dev) | resend | gmail. A typo or a missing variable throws. */
export const getMailer = (): Mailer => {
  if (mailer) return mailer;
  const { transport, problems } = readMailTransport(process.env);
  if (!transport || problems.length) throw new Error(problems.join("; "));
  const env = process.env as Record<string, string>;
  mailer =
    transport === "resend"
      ? createResendMailer({ from: env.MAIL_FROM, apiKey: env.RESEND_API_KEY })
      : transport === "gmail"
        ? createGmailMailer({
            from: env.MAIL_FROM,
            clientId: env.GMAIL_CLIENT_ID,
            clientSecret: env.GMAIL_CLIENT_SECRET,
            refreshToken: env.GMAIL_REFRESH_TOKEN,
          })
        : consoleMailer;
  return mailer;
};
