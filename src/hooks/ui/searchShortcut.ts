type ShortcutKeys = Pick<
  KeyboardEvent,
  "key" | "code" | "ctrlKey" | "metaKey" | "altKey" | "shiftKey"
>;

const LATIN_LETTER = /^[a-z]$/i;

// Ctrl+F, plus Cmd+F so Mac users get the same shortcut.
// `key` is the character the active layout produces, so on a non-Latin layout
// (Ukrainian types "а" on the F key) fall back to the physical key in `code`.
// A Latin letter from `key` is trusted, so Dvorak's Ctrl+<letter> stays put.
export const isSearchShortcut = (e: ShortcutKeys): boolean => {
  if (!(e.ctrlKey || e.metaKey) || e.altKey || e.shiftKey) return false;
  if (e.key.toLowerCase() === "f") return true;
  return !LATIN_LETTER.test(e.key) && e.code === "KeyF";
};

const EDITABLE_TAGS = new Set(["INPUT", "TEXTAREA", "SELECT"]);

// Typing fields keep their own shortcuts, including the browser's find.
export const isEditableTarget = (target: EventTarget | null): boolean => {
  if (!target || !("tagName" in target)) return false;
  const element = target as HTMLElement;
  return element.isContentEditable || EDITABLE_TAGS.has(element.tagName);
};
