import {
  ArrowDownIcon,
  ArrowPathIcon,
  ArrowRightIcon,
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import type {
  EdgeStyle,
  OrientationSetting,
  ThemePreference,
  TreeMode,
} from "@/types";
import FamilyTreeIcon from "@/components/icons/FamilyTreeIcon";
import MaskIcon from "@/components/ui/MaskIcon";

export const iconClass = "h-4 w-4 shrink-0";

export const edgeIcon = (d: string) => (
  <svg
    viewBox="0 0 16 16"
    className="h-4 w-4 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d={d} />
  </svg>
);

export const TREE_MODE_OPTIONS = [
  {
    value: "family",
    label: "Сім'ї",
    icon: <FamilyTreeIcon className={iconClass} />,
  },
  {
    value: "grid",
    label: "Сітка",
    icon: <Squares2X2Icon className={iconClass} />,
  },
  {
    value: "team",
    label: "Команди",
    icon: (
      <MaskIcon src="/images/lion-group.svg" className={`${iconClass} bg-current`} />
    ),
  },
] satisfies { value: TreeMode; label: string; icon: React.ReactNode }[];

export const THEME_OPTIONS = [
  {
    value: "system",
    label: "Системна",
    icon: <ComputerDesktopIcon className={iconClass} />,
  },
  { value: "light", label: "Світла", icon: <SunIcon className={iconClass} /> },
  { value: "dark", label: "Темна", icon: <MoonIcon className={iconClass} /> },
] satisfies { value: ThemePreference; label: string; icon: React.ReactNode }[];

export const ORIENTATION_OPTIONS = [
  {
    value: "auto",
    label: "Авто",
    icon: <ArrowPathIcon className={iconClass} />,
  },
  { value: "tb", label: "Вниз", icon: <ArrowDownIcon className={iconClass} /> },
  {
    value: "lr",
    label: "Праворуч",
    icon: <ArrowRightIcon className={iconClass} />,
  },
] satisfies {
  value: OrientationSetting;
  label: string;
  icon: React.ReactNode;
}[];

export const EDGE_STYLE_OPTIONS = [
  {
    value: "orthogonal",
    label: "Кутові",
    icon: edgeIcon(
      "M1.5 12.5 L6.5 12.5 Q8.5 12.5 8.5 10.5 L8.5 5.5 Q8.5 3.5 10.5 3.5 L14.5 3.5",
    ),
  },
  {
    value: "bezier",
    label: "Плавні",
    icon: edgeIcon("M1.5 11 C5 3, 11 13, 14.5 5"),
  },
  { value: "straight", label: "Прямі", icon: edgeIcon("M1.5 12.5 L14.5 3.5") },
] satisfies { value: EdgeStyle; label: string; icon: React.ReactNode }[];
