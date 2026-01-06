interface Props {
  icon: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>>
  >;
  href: string;
  hint?: string;
}

const MemberInfoActionIcon = ({ icon: ActionIcon, href, hint }: Props) => {
  return (
    <a
      href={href}
      title={hint}
      className="inline-block cursor-pointer text-accent-darken ml-1 pb-0.5 max-h-5 min-w-5"
    >
      <ActionIcon />
    </a>
  );
};

export default MemberInfoActionIcon;
