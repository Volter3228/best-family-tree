import type { Request, Response } from "express";
import * as client from "openid-client";
import { useSecureCookie } from "./config.js";
import { readCookie } from "./sessions.js";

export type OidcProvider = "google" | "telegram";

const OIDC_COOKIE = "bft_oidc";
const OIDC_COOKIE_TTL_MS = 10 * 60 * 1000;

const PROVIDERS: Record<
  OidcProvider,
  { issuer: string; clientId: string; clientSecret: string; basicAuth?: boolean; noNonce?: boolean; lenientToken?: boolean }
> = {
  google: {
    issuer: "https://accounts.google.com",
    clientId: "GOOGLE_CLIENT_ID",
    clientSecret: "GOOGLE_CLIENT_SECRET",
  },
  // Telegram wants the secret in a Basic auth header, not in the POST body.
  telegram: {
    issuer: "https://oauth.telegram.org",
    clientId: "TELEGRAM_CLIENT_ID",
    clientSecret: "TELEGRAM_CLIENT_SECRET",
    basicAuth: true,
    // Its documented flow has no nonce, and the id_token does not carry one back.
    noNonce: true,
    // Its token response has no usable access_token; only the id_token matters.
    lenientToken: true,
  },
};

/** True when the provider's variables are set; its routes are 404 otherwise. */
export const isProviderEnabled = (provider: OidcProvider) =>
  Boolean(process.env[PROVIDERS[provider].clientId]);

/** fetch for the token request: guarantees a string `access_token`, which the library insists on. */
const lenientTokenFetch: client.CustomFetch = async (url, options) => {
  const res = await fetch(url, options as RequestInit);
  if (options.method !== "POST" || !res.ok) return res;
  const text = await res.text();
  try {
    const body = JSON.parse(text) as Record<string, unknown>;
    if (typeof body.access_token !== "string") {
      console.warn(
        "Token response without a string access_token; fields:",
        Object.fromEntries(Object.entries(body).map(([k, v]) => [k, typeof v])),
        { error: body.error, description: body.error_description },
      );
      body.access_token = "unused";
      body.token_type = typeof body.token_type === "string" ? body.token_type : "Bearer";
    }
    return new Response(JSON.stringify(body), {
      status: res.status,
      headers: { "content-type": "application/json" },
    });
  } catch {
    return new Response(text, { status: res.status, headers: res.headers });
  }
};

/**
 * Telegram's documented Basic header is plain base64(client_id:client_secret);
 * the library's ClientSecretBasic URL-encodes both first, which differs for
 * secrets with characters such as + / = :.
 */
const rawBasicAuth =
  (id: string, secret: string): client.ClientAuth =>
  (_server, _client, _body, headers) => {
    headers.set("authorization", `Basic ${Buffer.from(`${id}:${secret}`).toString("base64")}`);
  };

const configs = new Map<OidcProvider, Promise<client.Configuration>>();

/** Discovery, cached per process (a failed attempt is retried next time). */
export const getProviderConfig = (provider: OidcProvider) => {
  const cached = configs.get(provider);
  if (cached) return cached;
  const p = PROVIDERS[provider];
  const id = process.env[p.clientId] ?? "";
  const secret = process.env[p.clientSecret]?.trim();
  const config = p.basicAuth
    ? client.discovery(new URL(p.issuer), id, undefined, rawBasicAuth(id.trim(), secret ?? ""))
    : client.discovery(new URL(p.issuer), id, secret);
  const ready = p.lenientToken
    ? config.then((c) => ((c[client.customFetch] = lenientTokenFetch), c))
    : config;
  configs.set(provider, ready);
  ready.catch(() => configs.delete(provider));
  return ready;
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
    nonce: PROVIDERS[provider].noNonce ? "" : client.randomNonce(),
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
    ...(pending.nonce ? { nonce: pending.nonce } : {}),
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
      expectedNonce: pending.nonce || undefined,
    },
    // Telegram wants client_id in the body as well as in the Basic header.
    PROVIDERS[provider].basicAuth
      ? { client_id: process.env[PROVIDERS[provider].clientId] ?? "" }
      : undefined,
  );
  const claims = tokens.claims();
  if (!claims) throw new Error("No id_token in the response");
  return claims;
};
