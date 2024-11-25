interface IProps {
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  icon: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>>
  >;
  className?: string;
  isActive?: boolean;
}

export default function SidebarIconButton({
  title,
  onClick,
  icon: Icon,
  className = "",
}: IProps) {
  return (
    <button
      title={title}
      onClick={onClick}
      className={`
        h-10 w-10 p-2 cursor-pointer bg-violet-700 rounded-3xl transition-all ease-in-out
        md:hover:rounded-xl md:hover:bg-fuchsia-500 md:active:bg-fuchsia-300 md:duration-300
      active:bg-purple-900 focus:outline-none duration-200 group ${className}
      `}
    >
      <Icon className="stroke-fuchsia-400 md:group-hover:stroke-purple-800 md:group-hover:stroke-2" />
    </button>
  );
}
