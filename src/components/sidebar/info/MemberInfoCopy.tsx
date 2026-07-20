"use client";

import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";
import { DocumentDuplicateIcon } from "@heroicons/react/16/solid";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor } from "@/types";

interface Props {
  valueToCopy: string;
  color?: AccentColor;
}

const MemberInfoCopy = ({ valueToCopy, color = "blue" }: Props) => {
  const colorClasses = COLOR_CLASSES[color];
  const [copied, setCopied] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const copyIconRef = useRef<SVGSVGElement>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(valueToCopy);
      setCopied(true);

      if (copyIconRef.current) {
        const rect = copyIconRef.current.getBoundingClientRect();
        setTooltipPosition({
          top: rect.top + window.scrollY, // Adjust for viewport scroll
          left: rect.left + window.scrollX + rect.width / 2,
        });
      }

      // Reset "copied" state after 2 seconds
      setTimeout(() => setCopied(false), 800);
    } catch (err) {
      console.error("Failed to copy to clipboard: ", err);
    }
  };

  return (
    <>
      <DocumentDuplicateIcon
        title="Копіювати"
        onClick={handleCopy}
        ref={copyIconRef}
        className={twMerge(
          "inline-block cursor-pointer ml-1 pb-0.5 max-h-5 min-w-5",
          colorClasses.text,
        )}
      />
      {copied &&
        createPortal(
          <div
            className={twMerge(
              "absolute text-white text-xs px-2 py-1 rounded-lg shadow-lg z-50 -translate-x-1/2 -translate-y-full",
              colorClasses.accentBg,
            )}
            style={{
              top: `${tooltipPosition.top}px`,
              left: `${tooltipPosition.left}px`,
            }}
          >
            Скопійовано!
          </div>,
          document.body,
        )}
    </>
  );
};

export default MemberInfoCopy;
