import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { useT } from "@/i18n/useT";

interface Props {
  onClick: () => void;
}

// Covers a sidebar stacked behind the Manage sidebar. Only its left edge is
// visible, so the chevron sits in that strip.
const SidebarBehindCover = ({ onClick }: Props) => {
  const t = useT().sidebar;

  return (
    <button
      type="button"
      aria-label={t.bringForward}
      title={t.bringForward}
      onClick={onClick}
      className="group absolute inset-0 z-20 cursor-pointer rounded-2xl bg-surface/30 transition-colors duration-200 hover:bg-surface/10 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent-blue"
    >
      <span className="absolute inset-y-0 left-0 flex w-10 items-center justify-center text-foreground/70 transition-colors duration-200 group-hover:text-foreground">
        <ChevronLeftIcon className="size-5" />
      </span>
    </button>
  );
};

export default SidebarBehindCover;
