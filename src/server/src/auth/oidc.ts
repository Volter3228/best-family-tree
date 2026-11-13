import type { Request, Response } from "express";
import * as client from "openid-client";
import { useSecureCookie } from "./config.js";
import { readCookie } from "./sessions.js";

export type OidcProvider = "google";

const OIDC_COOKIE = "bft_oidc";
const OIDC_COOKIE_TTL_MS = 10 * 60 * 1000;

const PROVIDERS: Record<
  OidcProvider,
  { issuer: string; clientId: string; clientSecret: string }
> = {
  google: {
    issuer: "https://accounts.google.com",
    clientId: "GOOGLE_CLIENT_ID",
    clientSecret: "GOOGLE_CLIENT_SECRET",
  },
};

/** True when the provider's variables are set; its routes are 404 otherwise. */
export const isProviderEnabled = (provider: OidcProvider) =>
  Boolean(process.env[PROVIDERS[provider].clientId]);

const configs = new Map<OidcProvider, Promise<client.Configuration>>();

/** Discovery, cached per process (a failed attempt is retried next time). */
export const getProviderConfig = (provider: OidcProvider) => {
  const cached = configs.get(provider);
  if (cached) return cached;
  const p = PROVIDERS[provider];
  const config = client.discovery(
    new URL(p.issuer),
    process.env[p.clientId] ?? "",
    process.env[p.clientSecret],
  );
  configs.set(provider, config);
  config.catch(() => configs.delete(provider));
  return config;
};

const origin = () => process.env.CLIENT_ORIGIN ?? "http://localhost:3000";
const redirectUri = (provider: OidcProvider) =>
  `${origin()}/api/auth/${provider}/callback`;

// Lax: the callback is a top-level GET from the provider, which still carries it.
const cookieOptions = () => ({
  httpOnly: true,
  sameSite: "lax" as const,
  secure: useSecureCookie(),
  path: "/",
});

type Pending = { state: string; nonce: string; verifier: string };

/** Remembers state, nonce and PKCE verifier in this browser; returns the URL to send it to. */
export const startLogin = async (
  res: Response,
  provider: OidcProvider,
  { scope }: { scope: string },
) => {
  const config = await getProviderConfig(provider);
  const pending: Pending = {
    state: client.randomState(),
    nonce: client.randomNonce(),
    verifier: client.randomPKCECodeVerifier(),
  };
  res.cookie(OIDC_COOKIE, Buffer.from(JSON.stringify(pending)).toString("base64url"), {
    ...cookieOptions(),
    maxAge: OIDC_COOKIE_TTL_MS,
  });
  return client.buildAuthorizationUrl(config, {
    redirect_uri: redirectUri(provider),
    scope,
    state: pending.state,
    nonce: pending.nonce,
    code_challenge: await client.calculatePKCECodeChallenge(pending.verifier),
    code_challenge_method: "S256",
  });
};

const readPending = (req: Request): Pending | null => {
  const raw = readCookie(req.headers.cookie, OIDC_COOKIE);
  if (!raw) return null;
  try {
    const value = JSON.parse(Buffer.from(raw, "base64url").toString("utf8"));
    return typeof value?.state === "string" &&
      typeof value.nonce === "string" &&
      typeof value.verifier === "string"
      ? value
      : null;
  } catch {
    return null;
  }
};

/** Checks the callback and returns the verified id_token claims; throws on any mismatch. */
export const finishLogin = async (req: Request, res: Response, provider: OidcProvider) => {
  const pending = readPending(req);
  res.clearCookie(OIDC_COOKIE, cookieOptions());
  if (!pending) throw new Error("Missing sign-in cookie");
  const config = await getProviderConfig(provider);
  const tokens = await client.authorizationCodeGrant(
    config,
    new URL(req.originalUrl, origin()),
    {
      pkceCodeVerifier: pending.verifier,
      expectedState: pending.state,
      expectedNonce: pending.nonce,
    },
  );
  const claims = tokens.claims();
  if (!claims) throw new Error("No id_token in the response");
  return claims;
};
