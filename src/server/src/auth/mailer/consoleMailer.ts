import type { Mailer } from "./types.js";

/** Dev default: nothing is sent, the text part (with the code) is logged. */
export const consoleMailer: Mailer = {
  async send({ to, subject, text }) {
    console.log(`[mail] to=${to} subject="${subject}"\n${text}`);
  },
};
