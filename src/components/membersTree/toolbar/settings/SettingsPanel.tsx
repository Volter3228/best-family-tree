import SegmentedSwitch from "@/components/ui/SegmentedSwitch";
import { DEFAULT_SETTINGS, useSettingsStore } from "@/store/settingsStore";
import { useFiltersStore } from "@/store/filtersStore";
import ToolbarPanel from "../ToolbarPanel";
import PanelResetButton from "../PanelResetButton";
import {
  EDGE_STYLE_OPTIONS,
  ORIENTATION_OPTIONS,
  THEME_OPTIONS,
  TREE_MODE_OPTIONS,
} from "./settingsOptions";

interface Props {
  isOpen: boolean;
  isClosing: boolean;
}

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
  const treeMode = useFiltersStore((s) => s.appliedFilters.treeMode);
  const setTreeMode = useFiltersStore((s) => s.setTreeMode);

  if (!isOpen) return null;

  const isDefault =
    theme === DEFAULT_SETTINGS.theme &&
    orientation === DEFAULT_SETTINGS.orientation &&
    edgeStyle === DEFAULT_SETTINGS.edgeStyle &&
    treeMode === "family";

  const handleReset = () => {
    resetSettings();
    setTreeMode("family");
  };

  return (
    <ToolbarPanel isClosing={isClosing} className="flex flex-col max-h-[60vh]">
      <div className="flex items-center justify-between px-3 py-2.5">
        <span className="text-base font-semibold text-foreground">
          Налаштування
        </span>
        <PanelResetButton
          label="Скинути налаштування"
          disabled={isDefault}
          onClick={handleReset}
        />
      </div>
      <div
        className="overflow-y-auto overscroll-contain overflow-x-hidden flex-1 transparent"
        style={
          { "--scroll-color": "var(--accent-green)" } as React.CSSProperties
        }
      >
        <Section title="Розмітка дерева">
          <SegmentedSwitch
            options={TREE_MODE_OPTIONS}
            value={treeMode}
            onChange={setTreeMode}
            ariaLabel="Розмітка дерева"
            color="green"
          />
        </Section>
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
