import { twMerge } from "tailwind-merge";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface Props {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  hasActiveValue?: boolean;
}

const FilterSection = ({
  title,
  children,
  isOpen,
  onToggle,
  hasActiveValue = false,
}: Props) => {
  return (
    <div className="border-b border-violet-800 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between px-3 py-2.5 text-sm font-medium text-fuchsia-300 hover:bg-violet-800/50 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-fuchsia-500"
      >
        <span className="flex items-center gap-1.5">
          {title}
          {hasActiveValue && (
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 shrink-0" />
          )}
        </span>
        <ChevronDownIcon
          className={twMerge(
            "h-4 w-4 stroke-fuchsia-400 transition-transform duration-200",
            isOpen && "rotate-180",
          )}
        />
      </button>
      {/* Animate height via grid-template-rows: 0fr → 1fr.
         The inner div's overflow-hidden clips content when the row collapses to 0. */}
      <div
        className={twMerge(
          "grid transition-[grid-template-rows,opacity] duration-200 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <div className="px-3 pt-2 pb-3 flex flex-col gap-2">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
