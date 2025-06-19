"use client";

import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { DocumentDuplicateIcon } from "@heroicons/react/16/solid";

interface Props {
  valueToCopy: string;
}

const MemberInfoCopy = ({ valueToCopy }: Props) => {
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
        className="inline-block cursor-pointer text-accent-darken ml-1 pb-0.5 max-h-5 min-w-5"
      />
      {copied &&
        createPortal(
          <div
            className="absolute bg-accent text-white text-xs px-2 py-1 rounded-lg shadow-lg z-50 -translate-x-1/2 -translate-y-full"
            style={{
              top: `${tooltipPosition.top}px`,
              left: `${tooltipPosition.left}px`,
            }}
          >
            Copied!
          </div>,
          document.body
        )}
    </>
  );
};

export default MemberInfoCopy;
