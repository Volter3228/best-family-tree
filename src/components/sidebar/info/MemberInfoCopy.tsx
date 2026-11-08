"use client";

import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { CheckIcon, DocumentDuplicateIcon } from "@heroicons/react/16/solid";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor } from "@/types";

interface Props {
  valueToCopy: string;
  color?: AccentColor;
}

// How long the tick stays before it fades back into the copy icon.
const COPIED_MS = 1400;

const iconBase =
  "absolute inset-0 h-full w-full transition-all duration-300 ease-out";

const MemberInfoCopy = ({ valueToCopy, color = "blue" }: Props) => {
  const colorClasses = COLOR_CLASSES[color];
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(valueToCopy);
      setCopied(true);
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopied(false), COPIED_MS);
    } catch (err) {
      console.error("Failed to copy to clipboard: ", err);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      title="Копіювати"
      aria-label={copied ? "Скопійовано" : "Копіювати"}
      className={twMerge(
        "relative ml-1 inline-block h-5 w-5 cursor-pointer align-middle",
        colorClasses.text,
      )}
    >
      <DocumentDuplicateIcon
        className={twMerge(
          iconBase,
          "pb-0.5",
          copied ? "scale-50 -rotate-90 opacity-0" : "scale-100 opacity-100",
        )}
      />
      <CheckIcon
        className={twMerge(
          iconBase,
          copied ? "scale-100 opacity-100" : "scale-50 rotate-90 opacity-0",
        )}
      />
    </button>
  );
};

export default MemberInfoCopy;
