import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import ToolbarTooltip from "./ToolbarTooltip";
import useHoverTooltip from "./useHoverTooltip";

interface Props {
  // Tooltip and accessible name, e.g. "Очистити фільтри".
  label: string;
  // Nothing to reset: the button stays in place but is dimmed.
  disabled: boolean;
  onClick: () => void;
}

// Round reset button in a toolbar panel header (filters, settings).
const PanelResetButton = ({ label, disabled, onClick }: Props) => {
  const { showTooltip, hideTooltip, handlers } = useHoverTooltip();

  return (
    <div className="relative flex" {...handlers}>
      <button
        type="button"
        onClick={() => {
          hideTooltip();
          onClick();
        }}
        disabled={disabled}
        aria-label={label}
        className="flex h-8 w-8 touch-manipulation items-center justify-center rounded-full bg-accent-green/10 text-accent-green transition-[background-color,opacity,scale] duration-150 hover:bg-accent-green/20 active:scale-90 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent-green disabled:cursor-default disabled:opacity-40 disabled:hover:bg-accent-green/10 disabled:active:scale-100"
      >
        <ArrowUturnLeftIcon className="h-4 w-4" strokeWidth={2} />
      </button>
      <ToolbarTooltip
        title={label}
        color="green"
        visible={showTooltip && !disabled}
        className="right-full top-1.5 mr-2"
      />
    </div>
  );
};

export default PanelResetButton;
