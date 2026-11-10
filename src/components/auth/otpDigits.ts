export const OTP_LENGTH = 6;

export const emptyDigits = () => Array<string>(OTP_LENGTH).fill("");

type Edit = { digits: string[]; focusIndex: number };

/**
 * Applies text that arrived in box `index`: one typed character, a pasted
 * code, or an autofill. Six or more digits always fill every box.
 */
export const applyDigits = (
  digits: string[],
  index: number,
  raw: string,
): Edit => {
  const cleaned = raw.replace(/\D/g, "");
  const next = [...digits];

  if (cleaned === "") {
    next[index] = "";
    return { digits: next, focusIndex: index };
  }
  if (cleaned.length >= OTP_LENGTH) {
    return {
      digits: cleaned.slice(0, OTP_LENGTH).split(""),
      focusIndex: OTP_LENGTH - 1,
    };
  }
  // A short paste fills forward from the box it landed in.
  let last = index;
  for (const [offset, digit] of [...cleaned].entries()) {
    if (index + offset >= OTP_LENGTH) break;
    next[index + offset] = digit;
    last = index + offset;
  }
  return { digits: next, focusIndex: Math.min(last + 1, OTP_LENGTH - 1) };
};

/** Backspace: clears the box, or steps back and clears the previous one. */
export const backspaceAt = (digits: string[], index: number): Edit => {
  const next = [...digits];
  if (next[index] !== "" || index === 0) {
    next[index] = "";
    return { digits: next, focusIndex: index };
  }
  next[index - 1] = "";
  return { digits: next, focusIndex: index - 1 };
};

export const isComplete = (digits: string[]) =>
  digits.length === OTP_LENGTH && digits.every((d) => /^\d$/.test(d));
