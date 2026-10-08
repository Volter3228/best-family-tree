import { CanvasTextMetrics, TextStyle } from "pixi.js";

const textWidth = (text: string, style: TextStyle) =>
  CanvasTextMetrics.measureText(text, style).width;

// Shorten the text with an ellipsis until it fits the given width.
export const truncateText = (
  text: string,
  style: TextStyle,
  maxWidth: number,
) => {
  if (textWidth(text, style) <= maxWidth) return text;

  let shortened = text;
  while (shortened.length > 1) {
    shortened = shortened.slice(0, -1).trimEnd();
    const candidate = `${shortened}…`;
    if (textWidth(candidate, style) <= maxWidth) return candidate;
  }
  return `${text.slice(0, 1)}…`;
};

// Greedy word wrap using canvas metrics.
export const wrapTeamTitle = (
  text: string,
  style: TextStyle,
  maxWidth: number,
) => {
  const lines: string[] = [];
  let line = "";
  for (const word of text.split(/\s+/).filter(Boolean)) {
    const candidate = line ? `${line} ${word}` : word;
    if (line && textWidth(candidate, style) > maxWidth) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  }
  if (line) lines.push(line);
  return lines.join("\n");
};
