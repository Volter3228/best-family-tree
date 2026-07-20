import { XMarkIcon } from "@heroicons/react/24/outline";

const ClearButton = ({ onClick }: { onClick: () => void }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="absolute right-1.5 top-1/2 -translate-y-1/2 p-0.5 rounded-full hover:bg-foreground/10 transition-colors z-10 focus-visible:ring-1 focus-visible:ring-accent-green focus:outline-none"
    >
      <XMarkIcon className="h-3.5 w-3.5 stroke-accent-green" />
    </button>
  );
};

export default ClearButton;
