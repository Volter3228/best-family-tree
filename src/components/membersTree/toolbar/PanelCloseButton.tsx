import CloseButton from "@/components/ui/CloseButton";
import { twMerge } from "tailwind-merge";
import ToolbarTooltip from "./ToolbarTooltip";
import useHoverTooltip from "./useHoverTooltip";

interface Props {
  // Tooltip and accessible name, e.g. "Закрити фільтри".
  label: string;
  onClick: () => void;
  color?: "green" | "blue";
}

const STYLES = {
  green:
    "bg-accent-green/10 text-accent-green hover:bg-accent-green/20 focus-visible:ring-accent-green",
  blue: "bg-accent-blue/10 text-accent-blue hover:bg-accent-blue/20 focus-visible:ring-accent-blue",
};

// Round close button in a toolbar panel header, styled like PanelResetButton.
const PanelCloseButton = ({ label, onClick, color = "green" }: Props) => {
  const { showTooltip, hideTooltip, handlers } = useHoverTooltip();

  return (
    <div className="relative flex" {...handlers}>
      <CloseButton
        label={label}
        onClick={() => {
          hideTooltip();
          onClick();
        }}
        iconClassName="h-4 w-4 stroke-2"
        className={twMerge(
          "h-8 w-8 touch-manipulation rounded-full transition-[background-color,scale] duration-150 active:scale-90 focus:outline-none focus-visible:ring-1",
          STYLES[color],
        )}
      />
      <ToolbarTooltip
        title={label}
        color={color}
        visible={showTooltip}
        className="right-full top-1.5 mr-2"
      />
    </div>
  );
};

export default PanelCloseButton;
