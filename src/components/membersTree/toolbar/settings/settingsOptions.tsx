import {
  ArrowDownIcon,
  ArrowPathIcon,
  ArrowRightIcon,
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
  RectangleGroupIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import type {
  EdgeStyle,
  OrientationSetting,
  ThemePreference,
  TreeMode,
} from "@/types";
import type { Messages } from "@/i18n/messages";
import FamilyTreeIcon from "@/components/icons/FamilyTreeIcon";

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

export const treeModeOptions = (t: Messages["settings"]) =>
  [
    {
      value: "family",
      label: t.treeMode.family,
      icon: <FamilyTreeIcon className={iconClass} />,
    },
    {
      value: "grid",
      label: t.treeMode.grid,
      icon: <Squares2X2Icon className={iconClass} />,
    },
    {
      value: "team",
      label: t.treeMode.team,
      icon: <RectangleGroupIcon className={iconClass} />,
    },
  ] satisfies { value: TreeMode; label: string; icon: React.ReactNode }[];

export const themeOptions = (t: Messages["settings"]) =>
  [
    {
      value: "system",
      label: t.themeOptions.system,
      icon: <ComputerDesktopIcon className={iconClass} />,
    },
    {
      value: "light",
      label: t.themeOptions.light,
      icon: <SunIcon className={iconClass} />,
    },
    {
      value: "dark",
      label: t.themeOptions.dark,
      icon: <MoonIcon className={iconClass} />,
    },
  ] satisfies {
    value: ThemePreference;
    label: string;
    icon: React.ReactNode;
  }[];

export const orientationOptions = (t: Messages["settings"]) =>
  [
    {
      value: "auto",
      label: t.orientation.auto,
      icon: <ArrowPathIcon className={iconClass} />,
    },
    {
      value: "tb",
      label: t.orientation.tb,
      icon: <ArrowDownIcon className={iconClass} />,
    },
    {
      value: "lr",
      label: t.orientation.lr,
      icon: <ArrowRightIcon className={iconClass} />,
    },
  ] satisfies {
    value: OrientationSetting;
    label: string;
    icon: React.ReactNode;
  }[];

export const edgeStyleOptions = (t: Messages["settings"]) =>
  [
    {
      value: "orthogonal",
      label: t.edgeStyle.orthogonal,
      icon: edgeIcon(
        "M1.5 12.5 L6.5 12.5 Q8.5 12.5 8.5 10.5 L8.5 5.5 Q8.5 3.5 10.5 3.5 L14.5 3.5",
      ),
    },
    {
      value: "bezier",
      label: t.edgeStyle.bezier,
      icon: edgeIcon("M1.5 11 C5 3, 11 13, 14.5 5"),
    },
    {
      value: "straight",
      label: t.edgeStyle.straight,
      icon: edgeIcon("M1.5 12.5 L14.5 3.5"),
    },
  ] satisfies { value: EdgeStyle; label: string; icon: React.ReactNode }[];
