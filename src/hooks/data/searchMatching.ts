import { normalize } from "@/utils";

const tokenize = (texts: string[]): string[] =>
  texts.flatMap((text) => normalize(text).split(/\s+/)).filter(Boolean);

const queryParts = (query: string): string[] => {
  const normalized = normalize(query);
  return normalized ? normalized.split(/\s+/) : [];
};

// Every query word must be a prefix-or-substring of some searchable word.
export const matchesQuery = (searchable: string[], query: string): boolean => {
  const parts = queryParts(query);
  if (parts.length === 0) return false;

  const tokens = tokenize(searchable);
  return parts.every((part) => tokens.some((token) => token.includes(part)));
};

/**
 * Relevance of a match, lower is better: 0 when every query word starts a
 * searchable word, 1 when some only appear inside one, 2 when no match.
 */
export const rankMatch = (searchable: string[], query: string): number => {
  const parts = queryParts(query);
  if (parts.length === 0) return 2;

  const tokens = tokenize(searchable);
  if (parts.every((part) => tokens.some((token) => token.startsWith(part)))) return 0;
  if (parts.every((part) => tokens.some((token) => token.includes(part)))) return 1;
  return 2;
};

/**
 * Sorted, non-overlapping [start, end) ranges in `text` covering the first
 * occurrence of each query word inside each word of the text.
 */
export const getMatchRanges = (text: string, query: string): Array<[number, number]> => {
  const parts = queryParts(query);
  const ranges: Array<[number, number]> = [];

  for (const word of text.matchAll(/\S+/g)) {
    const normalizedWord = normalize(word[0]);
    // Case folding can change string length; offsets would then be wrong.
    if (normalizedWord.length !== word[0].length) continue;
    for (const part of parts) {
      const at = normalizedWord.indexOf(part);
      if (at >= 0) ranges.push([word.index + at, word.index + at + part.length]);
    }
  }

  ranges.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const merged: Array<[number, number]> = [];
  for (const [start, end] of ranges) {
    const last = merged[merged.length - 1];
    if (last && start <= last[1]) last[1] = Math.max(last[1], end);
    else merged.push([start, end]);
  }
  return merged;
};
