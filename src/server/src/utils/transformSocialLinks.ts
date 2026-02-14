type SocialPlatform = "telegram" | "instagram" | "facebook" | "linkedin";

const PLATFORM_CONFIGS: Record<
  SocialPlatform,
  { domains: string[]; prefix: string }
> = {
  telegram: { domains: ["t.me"], prefix: "https://t.me/" },
  instagram: { domains: ["instagram.com"], prefix: "https://instagram.com/" },
  facebook: {
    domains: ["facebook.com", "fb.com"],
    prefix: "https://facebook.com/",
  },
  linkedin: { domains: ["linkedin.com"], prefix: "https://linkedin.com/in/" },
};

export const normalizeSocialLink = (
  link: string | null | undefined,
  platform: SocialPlatform,
): string | null => {
  if (!link || !link.trim()) return null;

  const trimmed = link.trim();
  const config = PLATFORM_CONFIGS[platform];

  // Already has protocol — save as-is
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed;
  }

  // Has a recognized domain but no protocol (e.g. "www.t.me/user" or "t.me/user")
  if (config.domains.some((d) => trimmed.includes(d))) {
    return `https://${trimmed.replace(/^www\./, "")}`;
  }

  // Starts with www. but unrecognized domain — still prepend https
  if (trimmed.startsWith("www.")) {
    return `https://${trimmed}`;
  }

  // Just a username (possibly with @) — build full URL
  const username = trimmed.replace(/^@/, "");
  return `${config.prefix}${username}`;
};

export const normalizeSocialLinks = (body: {
  telegramLink?: string;
  instagramLink?: string;
  facebookLink?: string;
  linkedinLink?: string;
}) => ({
  telegramLink: normalizeSocialLink(body.telegramLink, "telegram"),
  instagramLink: normalizeSocialLink(body.instagramLink, "instagram"),
  facebookLink: normalizeSocialLink(body.facebookLink, "facebook"),
  linkedinLink: normalizeSocialLink(body.linkedinLink, "linkedin"),
});
