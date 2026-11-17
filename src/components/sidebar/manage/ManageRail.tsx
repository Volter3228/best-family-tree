import {
  BriefcaseIcon,
  PuzzlePieceIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import CategoryRail from "@/components/ui/CategoryRail";
import type { AccentColor } from "@/types";
import type { ManageTab } from "./types";

const ICON_CLASS = "h-5 w-5";

export const MANAGE_TAB_LABELS: Record<ManageTab, string> = {
  members: "Учасники",
  teams: "Команди",
  types: "Типи команд",
  roles: "Посади",
};

// Names of one item of each tab, for the editor header.
export const MANAGE_TAB_TITLES: Record<ManageTab, string> = {
  members: "Учасники",
  teams: "Команди",
  types: "Типи команд",
  roles: "Посади",
};

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

const ManageRail = ({ active, onSelect, color }: Props) => (
  <CategoryRail
    color={color}
    active={active}
    onSelect={onSelect}
    className="sticky top-0 self-start"
    items={ITEMS.map((item) => ({
      ...item,
      label: MANAGE_TAB_LABELS[item.key],
    }))}
  />
);

export default ManageRail;
