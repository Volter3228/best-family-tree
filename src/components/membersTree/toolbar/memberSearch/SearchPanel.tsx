import { useEffect, useRef, type KeyboardEvent, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface Props {
  isOpen: boolean;
  isClosing: boolean;
  query: string;
  placeholder: string;
  resultCount: number;
  onQueryChange: (query: string) => void;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  onClose: () => void;
  // Suggestion rows, already ordered bottom-up (best match last).
  children: ReactNode;
}

// Floating search box: input at the bottom, suggestions growing upwards.
const SearchPanel = ({
  isOpen,
  isClosing,
  query,
  placeholder,
  resultCount,
  onQueryChange,
  onKeyDown,
  onClose,
  children,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && !isClosing) inputRef.current?.focus();
  }, [isOpen, isClosing]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape" && !query) {
      onClose();
      return;
    }
    onKeyDown(e);
  };

  if (!isOpen) return null;

  return (
    <div
      className={twMerge(
        "fixed bottom-24 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-80",
        "backdrop-blur-lg rounded-2xl",
        isClosing ? "animate-sidebar-slide-out" : "animate-sidebar-slide-in",
      )}
    >
      <div className="rounded-2xl bg-surface/70 shadow-2xl flex flex-col-reverse">
        <div className="flex items-center gap-2 px-3 py-2 h-10">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            autoComplete="off"
            className={twMerge(
              "flex-1 bg-transparent text-foreground text-sm",
              "placeholder:text-foreground/80",
              "focus:outline-none",
            )}
          />
          {query && (
            <button
              onClick={() => onQueryChange("")}
              className="p-0.5 rounded-full hover:bg-foreground/10 transition-colors"
            >
              <XMarkIcon className="h-4 w-4 stroke-foreground/80" />
            </button>
          )}
        </div>
        <ul
          className={twMerge(
            "overflow-y-auto rounded-t-2xl transition-all duration-200 ease-in-out origin-bottom",
            resultCount > 0
              ? "opacity-100 translate-y-0 scale-y-100 max-h-10/12"
              : "opacity-0 translate-y-1 scale-y-95 pointer-events-none max-h-0",
          )}
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "var(--accent-blue) transparent",
          }}
        >
          {children}
        </ul>
        {query.trim() && resultCount === 0 && (
          <div className="border-b border-foreground/20 px-3 py-3 text-center text-sm text-foreground/80">
            Нима таких...
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPanel;
