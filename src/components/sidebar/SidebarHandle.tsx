import { twMerge } from "tailwind-merge";
import { useSidebarSwipe } from "@/hooks";

interface Props {
  isMinimized: boolean;
  onMinimizedChange: (minimized: boolean) => void;
  className?: string;
}

// Mobile-only grip at the top of the card: tap or swipe to minimize/expand.
const SidebarHandle = ({ isMinimized, onMinimizedChange, className }: Props) => {
  const swipe = useSidebarSwipe(isMinimized, onMinimizedChange);

  return (
    <div
      role="button"
      aria-label={isMinimized ? "Розгорнути" : "Згорнути"}
      className={twMerge(
        "flex h-5 shrink-0 cursor-pointer touch-none items-center justify-center md:hidden",
        className,
      )}
      {...swipe}
    >
      <span className="h-1 w-10 rounded-full bg-foreground/25" />
    </div>
  );
};

export default SidebarHandle;
