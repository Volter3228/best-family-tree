import { normalizeEmail } from "./eligibility.js";

export type ParsedAllowlist = {
  emails: string[];
  /** Non-empty lines that held no usable email, for the dry-run report. */
  rejected: string[];
};

// A cheap shape check; the full rules are the mail server's business.
const looksLikeEmail = (value: string) => /^[^\s@,;]+@[^\s@,;]+\.[^\s@,;]+$/.test(value);

/** Splits one CSV line; handles quotes, doubled quotes and , or ; delimiters. */
const splitLine = (line: string, delimiter: string) => {
  const cells: string[] = [];
  let cell = "";
  let quoted = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (quoted) {
      if (ch === '"' && line[i + 1] === '"') {
        cell += '"';
        i++;
      } else if (ch === '"') quoted = false;
      else cell += ch;
    } else if (ch === '"') quoted = true;
    else if (ch === delimiter) {
      cells.push(cell.trim());
      cell = "";
    } else cell += ch;
  }
  cells.push(cell.trim());
  return cells;
};

/**
 * Tolerant reader for a Google Group members export (or any list of
 * emails): finds the email column by header, else by the first cell that
 * looks like an address. Duplicates are merged; order is kept.
 */
export const parseAllowlistCsv = (content: string): ParsedAllowlist => {
  const lines = content
    .replace(/^﻿/, "")
    .split(/\r?\n/)
    .filter((l) => l.trim() !== "");
  const first = lines[0] ?? "";
  const delimiter = (first.match(/;/g)?.length ?? 0) > (first.match(/,/g)?.length ?? 0) ? ";" : ",";

  const headerCells = splitLine(first, delimiter);
  const headerIndex = headerCells.findIndex((c) => /e-?mail/i.test(c) && !looksLikeEmail(c));
  const hasHeader = headerIndex !== -1;

  const seen = new Set<string>();
  const emails: string[] = [];
  const rejected: string[] = [];

  for (const line of hasHeader ? lines.slice(1) : lines) {
    const cells = splitLine(line, delimiter);
    const candidate = hasHeader
      ? cells[headerIndex]
      : cells.find((c) => looksLikeEmail(c.trim()));
    const email = candidate ? normalizeEmail(candidate) : "";
    if (!looksLikeEmail(email)) {
      rejected.push(line);
      continue;
    }
    if (!seen.has(email)) {
      seen.add(email);
      emails.push(email);
    }
  }
  return { emails, rejected };
};

export type AllowedRow = { email: string; source: "GOOGLE_GROUP" | "MANUAL" };

export type AllowlistDiff = {
  toAdd: string[];
  /** Group-sourced rows that left the group. */
  toRemove: string[];
  unchanged: number;
  /** Listed emails that already exist as MANUAL rows; those are never touched. */
  skippedManual: string[];
};

/** What importing `incoming` would change. MANUAL rows are never added over or removed. */
export const diffAllowlist = (existing: AllowedRow[], incoming: string[]): AllowlistDiff => {
  const byEmail = new Map(existing.map((r) => [r.email, r.source]));
  const wanted = new Set(incoming);

  const toAdd: string[] = [];
  const skippedManual: string[] = [];
  let unchanged = 0;
  for (const email of wanted) {
    const source = byEmail.get(email);
    if (!source) toAdd.push(email);
    else if (source === "MANUAL") skippedManual.push(email);
    else unchanged++;
  }
  const toRemove = existing
    .filter((r) => r.source === "GOOGLE_GROUP" && !wanted.has(r.email))
    .map((r) => r.email);
  return { toAdd, toRemove, unchanged, skippedManual };
};
