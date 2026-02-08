interface Props {
  icon: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>>
  >;
  href: string;
  hint?: string;
  target?: string;
  rel?: string;
}

const MemberInfoActionIcon = ({
  icon: ActionIcon,
  href,
  hint,
  target,
  rel,
}: Props) => {
  return (
    <a
      href={href}
      title={hint}
      target={target}
      rel={rel}
      className="inline-block cursor-pointer text-accent-darken ml-1 pb-0.5 max-h-5 min-w-5"
    >
      <ActionIcon />
    </a>
  );
};

export default MemberInfoActionIcon;
