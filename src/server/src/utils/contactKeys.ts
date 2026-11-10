export type ContactPlatform =
  | "email"
  | "telegram"
  | "instagram"
  | "facebook"
  | "linkedin";

const SOCIAL_DOMAINS: Record<Exclude<ContactPlatform, "email">, string[]> = {
  telegram: ["t.me", "telegram.me"],
  instagram: ["instagram.com"],
  facebook: ["facebook.com", "fb.com", "m.facebook.com"],
  linkedin: ["linkedin.com"],
};

/**
 * Canonical comparison key for a contact: the platform plus the lowercased
 * handle, without protocol, `www.`, trailing slash, query or fragment.
 * Returns null for an empty value.
 */
export const contactKey = (
  platform: ContactPlatform,
  raw: string | null | undefined,
): string | null => {
  let value = raw?.trim().toLowerCase();
  if (!value) return null;

  if (platform === "email") return `email:${value}`;

  // profile.php links identify the person only by the `id` query parameter.
  if (platform === "facebook") {
    const numericId = value.match(/profile\.php\?(?:[^#]*&)?id=(\d+)/)?.[1];
    if (numericId) return `facebook:id:${numericId}`;
  }

  value = value
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/[?#].*$/, "")
    .replace(/\/+$/, "");

  for (const domain of SOCIAL_DOMAINS[platform]) {
    if (value === domain || value.startsWith(`${domain}/`)) {
      value = value.slice(domain.length).replace(/^\/+/, "");
      break;
    }
  }

  value = value.replace(/^@/, "").replace(/^in\//, "");
  return value ? `${platform}:${value}` : null;
};

const LABELS: Record<ContactPlatform, string> = {
  email: "Пошта",
  telegram: "Telegram",
  instagram: "Instagram",
  facebook: "Facebook",
  linkedin: "LinkedIn",
};

/** Member form field that holds a platform's contact. */
export const contactField = (platform: ContactPlatform) =>
  FIELD_PLATFORMS.find(([, p]) => p === platform)![0];

export const contactLabel = (platform: ContactPlatform) => LABELS[platform];

type ContactFields = {
  email?: string | null;
  telegramLink?: string | null;
  instagramLink?: string | null;
  facebookLink?: string | null;
  linkedinLink?: string | null;
};

const FIELD_PLATFORMS: [keyof ContactFields, ContactPlatform][] = [
  ["email", "email"],
  ["telegramLink", "telegram"],
  ["instagramLink", "instagram"],
  ["facebookLink", "facebook"],
  ["linkedinLink", "linkedin"],
];

/** First platform whose contact in `candidate` already belongs to someone in `others`. */
export const findContactCollision = (
  candidate: ContactFields,
  others: ContactFields[],
): ContactPlatform | null => {
  for (const [field, platform] of FIELD_PLATFORMS) {
    const key = contactKey(platform, candidate[field]);
    if (!key) continue;
    if (others.some((o) => contactKey(platform, o[field]) === key)) {
      return platform;
    }
  }
  return null;
};
