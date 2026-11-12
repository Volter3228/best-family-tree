type Env = Record<string, string | undefined>;

/** The variables each MAIL_TRANSPORT needs. The one list for the boot check and getMailer. */
export const MAIL_TRANSPORTS = {
  console: [],
  resend: ["MAIL_FROM", "RESEND_API_KEY"],
  gmail: ["MAIL_FROM", "GMAIL_CLIENT_ID", "GMAIL_CLIENT_SECRET", "GMAIL_REFRESH_TOKEN"],
} as const satisfies Record<string, readonly string[]>;

export type MailTransport = keyof typeof MAIL_TRANSPORTS;

const isTransport = (name: string): name is MailTransport =>
  Object.hasOwn(MAIL_TRANSPORTS, name);

/** The configured transport (console by default), or the problems with its variables. */
export const readMailTransport = (
  env: Env,
): { transport: MailTransport | null; problems: string[] } => {
  const name = env.MAIL_TRANSPORT || "console";
  if (!isTransport(name)) {
    const known = Object.keys(MAIL_TRANSPORTS).join(", ");
    return { transport: null, problems: [`MAIL_TRANSPORT must be one of ${known}, got "${name}"`] };
  }
  const problems = MAIL_TRANSPORTS[name]
    .filter((variable) => !env[variable])
    .map((variable) => `${variable} is required when MAIL_TRANSPORT=${name}`);
  return { transport: name, problems };
};
