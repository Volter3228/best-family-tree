const CYRILLIC_TO_LATIN: Record<string, string> = {
  а: "a", б: "b", в: "v", г: "h", ґ: "h", д: "d", е: "e", є: "e", ж: "zh",
  з: "z", и: "y", і: "y", ї: "y", й: "y", к: "k", л: "l", м: "m", н: "n",
  о: "o", п: "p", р: "r", с: "s", т: "t", у: "u", ф: "f", х: "kh", ц: "ts",
  ч: "ch", ш: "sh", щ: "shch", ь: "", ю: "yu", я: "ya",
  // Russian letters that people type by habit.
  ы: "y", э: "e", ё: "e", ъ: "",
};

/**
 * Canonical form of an answer: NFKC, lowercase, no apostrophes or punctuation,
 * collapsed whitespace, Cyrillic folded to Latin. No fuzzy matching: anything
 * beyond this must be an explicit accepted variant.
 */
export const normalizeAnswer = (value: string): string => {
  const cleaned = value
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[ʼ'’‘`´]/g, "")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();

  return [...cleaned].map((ch) => CYRILLIC_TO_LATIN[ch] ?? ch).join("");
};

export const answerMatches = (
  given: string,
  acceptedAnswers: string[],
): boolean => {
  const normalized = normalizeAnswer(given);
  if (!normalized) return false;
  return acceptedAnswers.some((a) => normalizeAnswer(a) === normalized);
};
