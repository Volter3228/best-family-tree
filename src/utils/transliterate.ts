const MAP: Record<string, string> = {
  а: "a",
  б: "b",
  в: "v",
  г: "h",
  ґ: "g",
  д: "d",
  е: "e",
  є: "ie",
  ж: "zh",
  з: "z",
  и: "y",
  і: "i",
  ї: "i",
  й: "i",
  к: "k",
  л: "l",
  м: "m",
  н: "n",
  о: "o",
  п: "p",
  р: "r",
  с: "s",
  т: "t",
  у: "u",
  ф: "f",
  х: "kh",
  ц: "ts",
  ч: "ch",
  ш: "sh",
  щ: "shch",
  ь: "",
  ю: "iu",
  я: "ia",
};

const APOSTROPHES = /['’ʼ`]/;

/**
 * Ukrainian text to lowercase ASCII. Digits and Latin letters are kept,
 * apostrophes are dropped, and every other character becomes `separator`.
 */
export const transliterate = (text: string, separator = " "): string =>
  [...text.toLowerCase()]
    .map((ch) => {
      if (ch in MAP) return MAP[ch];
      if (/[a-z0-9]/.test(ch)) return ch;
      return APOSTROPHES.test(ch) ? "" : separator;
    })
    .join("");

/** Ukrainian text to a lowercase ASCII URL slug ("Сім'я Коваль" -> "simia-koval"). */
export const slugify = (text: string): string =>
  transliterate(text, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");

const ROMAN: Record<string, string> = {
  а: "a",
  б: "b",
  в: "v",
  г: "h",
  ґ: "g",
  д: "d",
  е: "e",
  ж: "zh",
  з: "z",
  и: "y",
  і: "i",
  к: "k",
  л: "l",
  м: "m",
  н: "n",
  о: "o",
  п: "p",
  р: "r",
  с: "s",
  т: "t",
  у: "u",
  ф: "f",
  х: "kh",
  ц: "ts",
  ч: "ch",
  ш: "sh",
  щ: "shch",
  ь: "",
};
const ROMAN_INITIAL: Record<string, string> = {
  є: "ye",
  ї: "yi",
  й: "y",
  ю: "yu",
  я: "ya",
};
const ROMAN_INNER: Record<string, string> = {
  є: "ie",
  ї: "i",
  й: "i",
  ю: "iu",
  я: "ia",
};
const CYRILLIC = /[а-щьюяєіїґ]/i;

/** Ukrainian text to Latin per the national transliteration (KMU Resolution No. 55, 2010). */
export const romanize = (text: string): string => {
  const chars = [...text];
  const isLetter = (ch: string | undefined) =>
    ch !== undefined && /\p{L}/u.test(ch);
  let out = "";
  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    const lower = ch.toLowerCase();
    if (!CYRILLIC.test(ch)) {
      const between =
        APOSTROPHES.test(ch) &&
        isLetter(chars[i - 1]) &&
        isLetter(chars[i + 1]);
      if (!(between && CYRILLIC.test(chars[i - 1]))) out += ch;
      continue;
    }
    const prev = chars[i - 1];
    const wordStart = !isLetter(prev) && !(prev && APOSTROPHES.test(prev));
    let latin: string;
    if (lower === "г" && prev && /з/i.test(prev)) latin = "gh";
    else
      latin =
        (wordStart ? ROMAN_INITIAL[lower] : ROMAN_INNER[lower]) ?? ROMAN[lower];
    if (!latin) continue;
    if (ch === lower) {
      out += latin;
      continue;
    }
    const next = chars
      .slice(i + 1)
      .find((c) => !APOSTROPHES.test(c) && c !== "ь");
    const prevUpper =
      prev !== undefined && isLetter(prev) && prev === prev.toUpperCase();
    const shouting =
      (next !== undefined && isLetter(next) && next === next.toUpperCase()) ||
      prevUpper;
    out += shouting
      ? latin.toUpperCase()
      : latin[0].toUpperCase() + latin.slice(1);
  }
  return out;
};
