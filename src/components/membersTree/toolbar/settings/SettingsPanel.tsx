import {
  ArrowDownIcon,
  ArrowPathIcon,
  ArrowRightIcon,
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import SegmentedSwitch from "@/components/ui/SegmentedSwitch";
import { useSettingsStore } from "@/store/settingsStore";
import type { EdgeStyle, OrientationSetting, ThemePreference } from "@/types";
import ToolbarPanel from "../ToolbarPanel";

interface Props {
  isOpen: boolean;
  isClosing: boolean;
}

const iconClass = "h-4 w-4 shrink-0";

const THEME_OPTIONS = [
  {
    value: "system",
    label: "Системна",
    icon: <ComputerDesktopIcon className={iconClass} />,
  },
  { value: "light", label: "Світла", icon: <SunIcon className={iconClass} /> },
  { value: "dark", label: "Темна", icon: <MoonIcon className={iconClass} /> },
] satisfies { value: ThemePreference; label: string; icon: React.ReactNode }[];

const ORIENTATION_OPTIONS = [
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

const edgeIcon = (d: string) => (
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

const EDGE_STYLE_OPTIONS = [
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

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => (
  <div className="px-3 pb-2.5">
    <div className="pb-1.5 text-sm font-semibold text-accent-green">
      {title}
    </div>
    {children}
  </div>
);

// App-wide preferences. Unlike filters, every change applies immediately.
const SettingsPanel = ({ isOpen, isClosing }: Props) => {
  const theme = useSettingsStore((s) => s.theme);
  const orientation = useSettingsStore((s) => s.orientation);
  const edgeStyle = useSettingsStore((s) => s.edgeStyle);
  const setTheme = useSettingsStore((s) => s.setTheme);
  const setOrientation = useSettingsStore((s) => s.setOrientation);
  const setEdgeStyle = useSettingsStore((s) => s.setEdgeStyle);
  const resetSettings = useSettingsStore((s) => s.resetSettings);

  if (!isOpen) return null;

  return (
    <ToolbarPanel isClosing={isClosing} className="flex flex-col max-h-[60vh]">
      <div className="flex items-center justify-between px-3 py-2.5">
        <span className="text-base font-semibold text-foreground">
          Налаштування
        </span>
        <button
          type="button"
          onClick={resetSettings}
          className="text-sm text-accent-green transition-colors hover:opacity-70"
        >
          Скинути
        </button>
      </div>
      <div
        className="overflow-y-auto overflow-x-hidden flex-1 transparent"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "var(--accent-green) transparent",
        }}
      >
        <Section title="Тема">
          <SegmentedSwitch
            options={THEME_OPTIONS}
            value={theme}
            onChange={setTheme}
            ariaLabel="Тема"
            color="green"
          />
        </Section>
        <Section title="Напрям дерев">
          <SegmentedSwitch
            options={ORIENTATION_OPTIONS}
            value={orientation}
            onChange={setOrientation}
            ariaLabel="Напрям дерев"
            color="green"
          />
        </Section>
        <Section title="Стиль ліній">
          <SegmentedSwitch
            options={EDGE_STYLE_OPTIONS}
            value={edgeStyle}
            onChange={setEdgeStyle}
            ariaLabel="Стиль ліній"
            color="green"
          />
        </Section>
      </div>
    </ToolbarPanel>
  );
};

export default SettingsPanel;
