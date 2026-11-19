import SegmentedSwitch from "@/components/ui/SegmentedSwitch";
import { DEFAULT_SETTINGS, useSettingsStore } from "@/store/settingsStore";
import { useFiltersStore } from "@/store/filtersStore";
import ToolbarPanel from "../ToolbarPanel";
import PanelResetButton from "../PanelResetButton";
import PanelCloseButton from "../PanelCloseButton";
import { LOCALES, type Locale } from "@/i18n/locale";
import { useLocale, useT } from "@/i18n/useT";
import {
  edgeStyleOptions,
  orientationOptions,
  themeOptions,
  treeModeOptions,
} from "./settingsOptions";

interface Props {
  isOpen: boolean;
  isClosing: boolean;
  onClose: () => void;
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
const SettingsPanel = ({ isOpen, isClosing, onClose }: Props) => {
  const t = useT().settings;
  const common = useT().common;
  const locale = useLocale();
  const setLocale = useSettingsStore((s) => s.setLocale);
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
          {t.title}
        </span>
        <div className="flex items-center gap-1.5">
          <PanelResetButton
            label={t.reset}
            disabled={isDefault}
            onClick={handleReset}
          />
          <PanelCloseButton label={t.close} onClick={onClose} />
        </div>
      </div>
      <div
        className="overflow-y-auto overscroll-contain overflow-x-hidden flex-1 transparent"
        style={
          { "--scroll-color": "var(--accent-green)" } as React.CSSProperties
        }
      >
        <Section title={t.layout}>
          <SegmentedSwitch
            options={treeModeOptions(t)}
            value={treeMode}
            onChange={setTreeMode}
            ariaLabel={t.layout}
            color="green"
          />
        </Section>
        <Section title={t.theme}>
          <SegmentedSwitch
            options={themeOptions(t)}
            value={theme}
            onChange={setTheme}
            ariaLabel={t.theme}
            color="green"
          />
        </Section>
        <Section title={t.direction}>
          <SegmentedSwitch
            options={orientationOptions(t)}
            value={orientation}
            onChange={setOrientation}
            ariaLabel={t.direction}
            color="green"
          />
        </Section>
        <Section title={t.lineStyle}>
          <SegmentedSwitch
            options={edgeStyleOptions(t)}
            value={edgeStyle}
            onChange={setEdgeStyle}
            ariaLabel={t.lineStyle}
            color="green"
          />
        </Section>
        <Section title={common.language}>
          <SegmentedSwitch<Locale>
            options={LOCALES.map((value) => ({
              value,
              label: common.languageNames[value],
            }))}
            value={locale}
            onChange={setLocale}
            ariaLabel={common.language}
            color="green"
          />
        </Section>
      </div>
    </ToolbarPanel>
  );
};

export default SettingsPanel;
