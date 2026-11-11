import type { Mailer } from "./types.js";

const SEND_URL = "https://api.resend.com/emails";

type ResendConfig = {
  from: string;
  apiKey: string;
  /** Injectable for tests. */
  fetchImpl?: typeof fetch;
};

/**
 * Sends through the Resend HTTPS API (free hosts block SMTP). Needs a verified
 * sending domain; the key only needs "Sending access".
 */
export const createResendMailer = ({
  from,
  apiKey,
  fetchImpl = fetch,
}: ResendConfig): Mailer => ({
  async send({ to, subject, html, text }) {
    const res = await fetchImpl(SEND_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from, to: [to], subject, html, text }),
    });
    if (!res.ok) {
      // The body names the problem (unverified domain, bad key); it never
      // contains the key, and the recipient is not logged.
      throw new Error(`Resend send failed: ${res.status} ${(await res.text()).slice(0, 200)}`);
    }
  },
});
