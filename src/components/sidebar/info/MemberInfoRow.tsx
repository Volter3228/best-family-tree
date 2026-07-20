import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor } from "@/types";
import MemberInfoCopy from "./MemberInfoCopy";

interface Props {
  title: string;
  value: React.ReactNode;
  icon: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>>
  >;
  actionIcon?: React.ReactNode;
  showCopyIcon?: boolean;
  copyValue?: string;
  color?: AccentColor;
}

const MemberInfoRow = ({
  title,
  value,
  icon: Icon,
  actionIcon: ActionIcon,
  showCopyIcon = false,
  copyValue,
  color = "blue",
}: Props) => {
  const colorClasses = COLOR_CLASSES[color];

  return (
    <div className="member-info-row flex gap-5 text-lg">
      <p
        className={twMerge(
          "flex min-w-32 max-w-32 font-semibold",
          colorClasses.text,
        )}
      >
        <Icon className="inline-block mr-1 h-6 mt-0.5" />
        {title}
      </p>
      <p className="info-value flex grow items-center overflow-x-hidden">
        <span>
          {value}
          {showCopyIcon && (
            <MemberInfoCopy
              valueToCopy={
                copyValue || (typeof value === "string" ? value : "")
              }
              color={color}
            />
          )}
        </span>
        {ActionIcon}
      </p>
    </div>
  );
};

export default MemberInfoRow;
