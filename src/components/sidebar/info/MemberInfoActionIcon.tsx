import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor } from "@/types";

interface Props {
  icon: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>>
  >;
  href: string;
  hint?: string;
  target?: string;
  rel?: string;
  color?: AccentColor;
}

const MemberInfoActionIcon = ({
  icon: ActionIcon,
  href,
  hint,
  target,
  rel,
  color = "blue",
}: Props) => {
  const colorClasses = COLOR_CLASSES[color];

  return (
    <a
      href={href}
      title={hint}
      target={target}
      rel={rel}
      className={twMerge(
        "inline-block cursor-pointer ml-1 pb-0.5 max-h-5 min-w-5",
        colorClasses.text,
      )}
    >
      <ActionIcon />
    </a>
  );
};

export default MemberInfoActionIcon;
