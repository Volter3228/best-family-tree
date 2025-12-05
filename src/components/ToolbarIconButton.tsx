import Spinner from "./utils/Spinner";

interface Props {
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  icon: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>>
  >;
  className?: string;
  isActive?: boolean;
  isLoading?: boolean;
}

const ToolbarIconButton = ({
  title,
  onClick,
  icon: Icon,
  className = "",
  isActive = false,
  isLoading = false,
}: Props) => {
  return (
    <button
      title={title}
      onClick={onClick}
      className={`
        ${
          isActive ? "bg-fuchsia-500 rounded-xl" : "bg-violet-700 rounded-3xl"
        } h-10 w-10 p-2 cursor-pointer transition-all ease-in-out 
        md:hover:rounded-xl md:hover:bg-fuchsia-500 md:active:bg-fuchsia-300 md:duration-300
      active:bg-purple-900 focus:outline-hidden duration-200 group ${className}
      `}
    >
      {isLoading ? (
        <Spinner
          className={`text-fuchsia-400 md:group-hover:text-purple-800 ${
            isActive ? "text-purple-800" : ""
          }`}
        />
      ) : (
        <Icon
          className={`stroke-fuchsia-400 md:group-hover:stroke-purple-800 md:group-hover:stroke-2 ${
            isActive ? "stroke-purple-800" : ""
          }`}
        />
      )}
    </button>
  );
};

export default ToolbarIconButton;
