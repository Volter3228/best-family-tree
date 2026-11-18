import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { useT } from "@/i18n/useT";

interface Props {
  // What the draft filters would show.
  count: number;
  // The draft differs from the applied filters.
  hasChanges: boolean;
  onApply: () => void;
  onDiscard: () => void;
}

// Shown only while the draft differs from the applied filters. Sits on the
// panel surface, so it has no background of its own.
const FiltersFooter = ({ count, hasChanges, onApply, onDiscard }: Props) => {
  const t = useT().filters;
  const isEmpty = count === 0;

  return (
    <div
      className={
        "grid transition-[grid-template-rows,opacity] duration-200 ease-out motion-reduce:transition-none " +
        (hasChanges
          ? "grid-rows-[1fr] opacity-100"
          : "grid-rows-[0fr] opacity-0")
      }
    >
      <div className="overflow-hidden" inert={!hasChanges}>
        <div className="px-3 pt-2 pb-3">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={onDiscard}
              className="h-11 touch-manipulation whitespace-nowrap rounded-full bg-accent-green/10 px-5 text-sm font-semibold text-accent-green transition-colors duration-150 hover:bg-accent-green/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-green/60"
            >
              {t.cancel}
            </button>
            <button
              type="button"
              onClick={onApply}
              disabled={isEmpty}
              className="flex h-11 flex-1 touch-manipulation items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-accent-green text-sm font-semibold text-white tabular-nums shadow-sm transition-[background-color,color,box-shadow,scale] duration-200 hover:shadow-md active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-green focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:cursor-default disabled:bg-accent-green/40 disabled:shadow-none disabled:active:scale-100"
            >
              {t.show(count)}
              {!isEmpty && <ArrowRightIcon className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersFooter;
