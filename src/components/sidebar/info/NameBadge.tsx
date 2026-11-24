import type { Member } from "@/models";
import Image from "next/image";
import MaskIcon from "@/components/ui/MaskIcon";
import TypeIconTile from "./TypeIconTile";

interface Props {
  member: Pick<Member, "nameBadge">;
}

// The lion follows the theme foreground; the BEST logo keeps its own colours.
export const DefaultBadgeIcon = ({
  icon,
  className,
}: {
  icon: "LION" | "BEST";
  className?: string;
}) =>
  icon === "LION" ? (
    <MaskIcon
      src="/images/lion.svg"
      className={`${className} text-foreground`}
    />
  ) : (
    <Image
      src="/images/best-logo.png"
      alt=""
      width={64}
      height={64}
      className={className}
    />
  );

const NameBadge = ({ member: { nameBadge } }: Props) => {
  if (nameBadge?.icon) {
    return (
      <span
        title={nameBadge.name}
        className="ml-2 inline-block h-[1.35em] w-[1.35em] -translate-y-[0.1em] align-middle"
      >
        <DefaultBadgeIcon icon={nameBadge.icon} className="h-full w-full" />
      </span>
    );
  }
  if (!nameBadge?.iconUrl) return null;
  return (
    <span
      title={nameBadge.name}
      className="ml-2 inline-block h-[1.35em] w-[1.35em] -translate-y-[0.1em] align-middle"
    >
      <TypeIconTile
        iconUrl={nameBadge.iconUrl}
        color={nameBadge.color}
        className="h-full w-full rounded-md"
      />
    </span>
  );
};

export default NameBadge;
