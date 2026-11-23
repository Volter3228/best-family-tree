import {
  BriefcaseIcon,
  InboxIcon,
  KeyIcon,
  PuzzlePieceIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { twMerge } from "tailwind-merge";
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
  { key: "suggestions", icon: <InboxIcon className={ICON_CLASS} /> },
  { key: "access", icon: <KeyIcon className={ICON_CLASS} /> },
] as const satisfies readonly { key: ManageTab; icon: React.ReactNode }[];

interface Props {
  active: ManageTab;
  onSelect: (tab: ManageTab) => void;
  color: AccentColor;
  isAdmin: boolean;
  pendingCount: number;
  // Phones: the editor needs the full width (the header's back arrow leaves).
  hideOnMobile?: boolean;
}

const ManageRail = ({
  active,
  onSelect,
  color,
  isAdmin,
  pendingCount,
  hideOnMobile = false,
}: Props) => {
  const t = useT().manage;
  return (
    <CategoryRail
      color={color}
      active={active}
      onSelect={onSelect}
      className={twMerge(
        "sticky top-0 self-start",
        hideOnMobile && "max-md:hidden",
      )}
      items={ITEMS.filter((item) => isAdmin || item.key !== "access").map(
        (item) => ({
          ...item,
          label: t.tabs[item.key],
          badge: item.key === "suggestions" ? pendingCount : undefined,
        }),
      )}
    />
  );
};

export default ManageRail;
