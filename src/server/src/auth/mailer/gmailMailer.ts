import { buildMime, toBase64Url } from "./mime.js";
import type { Mailer } from "./types.js";

const TOKEN_URL = "https://oauth2.googleapis.com/token";
const SEND_URL = "https://gmail.googleapis.com/gmail/v1/users/me/messages/send";

type GmailConfig = {
  from: string;
  clientId: string;
  clientSecret: string;
  refreshToken: string;
};

/**
 * Sends through the Gmail API over HTTPS. SMTP is not an option: free hosts
 * block outbound mail ports. No dependency: the MIME is built by hand.
 */
export const createGmailMailer = (config: GmailConfig): Mailer => {
  let cached: { token: string; expiresAt: number } | null = null;

  const accessToken = async () => {
    // Refresh a minute early so a token never expires mid-request.
    if (cached && cached.expiresAt - 60_000 > Date.now()) return cached.token;

    const res = await fetch(TOKEN_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: config.clientId,
        client_secret: config.clientSecret,
        refresh_token: config.refreshToken,
        grant_type: "refresh_token",
      }),
    });
    const body = (await res.json().catch(() => ({}))) as {
      access_token?: string;
      expires_in?: number;
      error?: string;
    };
    if (!res.ok || !body.access_token) {
      if (body.error === "invalid_grant") {
        // Refresh tokens die after 6 months unused, on a password change, or
        // when the consent screen is still in Testing mode (7 days).
        console.error(
          "[mail] Gmail refresh token was rejected (invalid_grant). Generate a new GMAIL_REFRESH_TOKEN.",
        );
      }
      throw new Error(`Gmail token request failed: ${body.error ?? res.status}`);
    }
    cached = {
      token: body.access_token,
      expiresAt: Date.now() + (body.expires_in ?? 3600) * 1000,
    };
    return cached.token;
  };

  return {
    async send({ to, subject, html, text }) {
      const raw = toBase64Url(buildMime({ from: config.from, to, subject, html, text }));
      const res = await fetch(SEND_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${await accessToken()}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ raw }),
      });
      if (!res.ok) {
        throw new Error(`Gmail send failed: ${res.status} ${(await res.text()).slice(0, 200)}`);
      }
    },
  };
};
