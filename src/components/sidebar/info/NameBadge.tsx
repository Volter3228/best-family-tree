import type { Member } from "@/models";
import TypeIconTile from "./TypeIconTile";

interface Props {
  member: Pick<Member, "nameBadge">;
}

const NameBadge = ({ member: { nameBadge } }: Props) => {
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
