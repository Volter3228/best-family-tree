import { twMerge } from "tailwind-merge";
import SegmentedSwitch from "@/components/ui/SegmentedSwitch";
import { useSettingsStore } from "@/store/settingsStore";
import type {
  EdgeStyle,
  OrientationSetting,
  ThemePreference,
} from "@/types";

interface Props {
  isOpen: boolean;
  isClosing: boolean;
}

const THEME_OPTIONS = [
  { value: "system", label: "Системна", icon: "💻" },
  { value: "light", label: "Світла", icon: "🌞" },
  { value: "dark", label: "Темна", icon: "🌚" },
] satisfies { value: ThemePreference; label: string; icon: string }[];

const ORIENTATION_OPTIONS = [
  { value: "auto", label: "Авто", icon: "🔄" },
  { value: "tb", label: "Вниз", icon: "⬇️" },
  { value: "lr", label: "Вправо", icon: "➡️" },
] satisfies { value: OrientationSetting; label: string; icon: string }[];

const edgeIcon = (d: string) => (
  <svg
    viewBox="0 0 16 16"
    className="h-3.5 w-3.5 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d={d} />
  </svg>
);

const EDGE_STYLE_OPTIONS = [
  { value: "bezier", label: "Плавні", icon: edgeIcon("M1.5 11 C5 3, 11 13, 14.5 5") },
  { value: "straight", label: "Прямі", icon: edgeIcon("M1.5 12.5 L14.5 3.5") },
  {
    value: "orthogonal",
    label: "Кутові",
    icon: edgeIcon(
      "M1.5 12.5 L6.5 12.5 Q8.5 12.5 8.5 10.5 L8.5 5.5 Q8.5 3.5 10.5 3.5 L14.5 3.5",
    ),
  },
] satisfies { value: EdgeStyle; label: string; icon: React.ReactNode }[];

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => (
  <div className="px-3 pb-2.5">
    <div className="pb-1 text-xs font-medium text-foreground/60">{title}</div>
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
    <div
      className={twMerge(
        "fixed bottom-24 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-80 max-h-[60vh]",
        "backdrop-blur-lg rounded-2xl",
        isClosing ? "animate-sidebar-slide-out" : "animate-sidebar-slide-in",
      )}
    >
      <div className="rounded-2xl bg-surface/70 shadow-2xl flex flex-col max-h-[60vh]">
        <div className="flex items-center justify-between px-3 py-2.5">
          <span className="text-sm font-semibold text-foreground">
            Налаштування
          </span>
          <button
            type="button"
            onClick={resetSettings}
            className="text-xs text-accent-blue transition-colors hover:opacity-70"
          >
            Скинути
          </button>
        </div>
        <div
          className="overflow-y-auto overflow-x-hidden flex-1 transparent"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "var(--accent-blue) transparent",
          }}
        >
          <Section title="Тема">
            <SegmentedSwitch
              options={THEME_OPTIONS}
              value={theme}
              onChange={setTheme}
              ariaLabel="Тема"
              color="blue"
            />
          </Section>
          <Section title="Орієнтація">
            <SegmentedSwitch
              options={ORIENTATION_OPTIONS}
              value={orientation}
              onChange={setOrientation}
              ariaLabel="Орієнтація"
              color="blue"
            />
          </Section>
          <Section title="Стиль ліній">
            <SegmentedSwitch
              options={EDGE_STYLE_OPTIONS}
              value={edgeStyle}
              onChange={setEdgeStyle}
              ariaLabel="Стиль ліній"
              color="blue"
            />
          </Section>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
