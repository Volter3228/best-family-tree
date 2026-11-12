"use client";

import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor } from "@/types";
import { applyDigits, backspaceAt, CODE_LENGTH } from "./codeDigits";
import { authStrings as t } from "./strings";

// Two boxes per brand colour, like the pairs in the email.
const PAIR_COLORS: AccentColor[] = ["blue", "green", "orange"];

interface Props {
  digits: string[];
  onChange: (digits: string[]) => void;
  onEnter: () => void;
  disabled?: boolean;
}

const CodeInput = ({ digits, onChange, onEnter, disabled }: Props) => {
  const refs = useRef<(HTMLInputElement | null)[]>([]);

  const focus = (index: number) => refs.current[index]?.focus();

  const apply = (edit: { digits: string[]; focusIndex: number }) => {
    onChange(edit.digits);
    focus(edit.focusIndex);
  };

  return (
    <div
      role="group"
      aria-label={t.codeLabel}
      className="flex items-center justify-center gap-1.5"
    >
      {digits.map((digit, i) => {
        const color = COLOR_CLASSES[PAIR_COLORS[Math.floor(i / 2)]];
        return (
          <div key={i} className="flex min-w-0 flex-1 items-center gap-1.5">
            <input
              ref={(el) => {
                refs.current[i] = el;
              }}
              id={`code-digit-${i}`}
              value={digit}
              disabled={disabled}
              aria-label={t.codeDigit(i + 1)}
              // The first box carries the autofill hint: phones offer the
              // code from the email and put all six digits into it.
              autoComplete={i === 0 ? "one-time-code" : "off"}
              inputMode="numeric"
              pattern="[0-9]*"
              autoCapitalize="off"
              spellCheck={false}
              onFocus={(e) => e.target.select()}
              onChange={(e) => apply(applyDigits(digits, i, e.target.value))}
              onKeyDown={(e) => {
                if (e.key === "Backspace") {
                  e.preventDefault();
                  apply(backspaceAt(digits, i));
                } else if (e.key === "ArrowLeft" && i > 0) {
                  e.preventDefault();
                  focus(i - 1);
                } else if (e.key === "ArrowRight" && i < CODE_LENGTH - 1) {
                  e.preventDefault();
                  focus(i + 1);
                } else if (e.key === "Enter") {
                  e.preventDefault();
                  onEnter();
                }
              }}
              className={twMerge(
                "h-12 w-full min-w-0 rounded-xl border-b-2 bg-surface text-center text-xl font-semibold shadow-inner",
                "transition-all duration-200 ease-out focus:outline-hidden focus:ring-2",
                color.border,
                color.accentRing,
                color.caret,
              )}
            />
            {i % 2 === 1 && i < CODE_LENGTH - 1 && (
              <span aria-hidden className="text-foreground/30">
                ·
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CodeInput;
