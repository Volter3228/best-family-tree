import { contactKey, type ContactPlatform } from "../../utils/contactKeys.js";

/** What was personal in the source copy, normalised for comparison. */
export type RealValues = {
  names: Set<string>;
  emails: Set<string>;
  phones: Set<string>;
  socials: Set<string>; // contactKey values, e.g. "instagram:handle"
  urls: Set<string>; // photo urls
};

export type DemoValues = {
  names: string[];
  emails: string[];
  phones: string[];
  socials: { platform: Exclude<ContactPlatform, "email">; value: string }[];
  urls: string[];
};

const norm = (value: string) => value.trim().toLowerCase();

export const normalizeSocial = (
  platform: Exclude<ContactPlatform, "email">,
  value: string,
) => contactKey(platform, value);

/** Which kinds of real value still appear in the demo (empty = clean). Counts only, never the values. */
export const findLeaks = (real: RealValues, demo: DemoValues) => {
  const leaks: Record<string, number> = {};
  const count = (kind: string, n: number) => {
    if (n > 0) leaks[kind] = n;
  };
  count("names", demo.names.filter((v) => real.names.has(norm(v))).length);
  count("emails", demo.emails.filter((v) => real.emails.has(norm(v))).length);
  count("phones", demo.phones.filter((v) => real.phones.has(v.trim())).length);
  count(
    "socials",
    demo.socials.filter(({ platform, value }) => {
      const key = normalizeSocial(platform, value);
      return key !== null && real.socials.has(key);
    }).length,
  );
  count("photo urls", demo.urls.filter((v) => real.urls.has(v.trim())).length);
  return leaks;
};

export const lowerSet = (values: Iterable<string>) => new Set([...values].map(norm));
