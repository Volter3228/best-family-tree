import {
  BriefcaseIcon,
  PuzzlePieceIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import CategoryRail from "@/components/ui/CategoryRail";
import { useT } from "@/i18n/useT";
import type { AccentColor } from "@/types";
import type { ManageTab } from "./types";

const ICON_CLASS = "h-5 w-5";

const ITEMS = [
  { key: "members", icon: <UserIcon className={ICON_CLASS} /> },
  { key: "teams", icon: <UserGroupIcon className={ICON_CLASS} /> },
  { key: "types", icon: <PuzzlePieceIcon className={ICON_CLASS} /> },
  { key: "roles", icon: <BriefcaseIcon className={ICON_CLASS} /> },
] as const satisfies readonly { key: ManageTab; icon: React.ReactNode }[];

interface Props {
  active: ManageTab;
  onSelect: (tab: ManageTab) => void;
  color: AccentColor;
}

const ManageRail = ({ active, onSelect, color }: Props) => {
  const t = useT().manage;
  return (
    <CategoryRail
      color={color}
      active={active}
      onSelect={onSelect}
      className="sticky top-0 self-start"
      items={ITEMS.map((item) => ({
        ...item,
        label: t.tabs[item.key],
      }))}
    />
  );
};

export default ManageRail;
