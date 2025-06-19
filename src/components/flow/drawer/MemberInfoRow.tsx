import MemberInfoCopy from "./MemberInfoCopy";

interface Props {
  title: string;
  value: string;
  icon: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>>
  >;
  showCopyIcon?: boolean;
}

const MemberInfoRow = ({
  title,
  value,
  icon: Icon,
  showCopyIcon = false,
}: Props) => (
  <div className="member-info-row flex gap-5 text-lg">
    <p className="flex text-accent-darken min-w-32 max-w-32 font-semibold">
      <Icon className="inline-block mr-1 h-6 mt-0.5" />
      {title}
    </p>
    <p className="info-value flex grow items-center overflow-x-hidden">
      <span>{value}</span>
      {showCopyIcon && <MemberInfoCopy valueToCopy={value} />}
    </p>
  </div>
);

export default MemberInfoRow;
