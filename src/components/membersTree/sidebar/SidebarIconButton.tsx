import { twMerge } from "tailwind-merge";

interface Props {
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  icon: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>>
  >;
  className?: string;
  isActive?: boolean;
}

const SidebarIconButton = ({
  title,
  onClick,
  icon: Icon,
  className = "",
  isActive = false,
}: Props) => {
  return (
    <button
      title={title}
      onClick={onClick}
      className={twMerge(
        "h-10 w-10 p-2 transition-all ease-in-out focus:outline-hidden duration-200 group",
        isActive
          ? "bg-fuchsia-500 rounded-xl"
          : "bg-violet-700 rounded-3xl md:hover:rounded-xl md:hover:bg-fuchsia-500 md:active:bg-fuchsia-300 md:duration-300",
        className,
      )}
    >
      <Icon
        className={twMerge(
          "stroke-fuchsia-500 md:group-hover:stroke-purple-800 md:group-hover:stroke-2",
          isActive && "stroke-violet-700",
        )}
      />
    </button>
  );
};

export default SidebarIconButton;
