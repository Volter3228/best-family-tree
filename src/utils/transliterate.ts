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
