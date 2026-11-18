export const normalize = (str: string) => str.toLowerCase().trim();

export const camelToCssVar = (key: string): string =>
  `--${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`;

export const hashString = (s: string): number => {
  let hash = 0;
  for (let i = 0; i < s.length; i++) {
    hash = (hash << 5) - hash + s.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
};

// Two letters of a name: "BEST Course" -> "BC", "EJF" -> "EJ".
export const initialsOf = (name: string) => {
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return "";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return `${words[0][0]}${words[1][0]}`.toUpperCase();
};
