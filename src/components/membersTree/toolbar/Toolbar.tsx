import { useState, memo } from "react";
import Sidebar, { ManageForm } from "@/components/sidebar";
import {
  PencilSquareIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { usePanelToggle } from "@/hooks";
import { useFiltersStore } from "@/store/filtersStore";
import type { TeamFrame } from "@/types";
import { SearchBar } from "./memberSearch";
import { FiltersPanel } from "./filters";
import { SettingsPanel } from "./settings";
import ToolbarIconButton from "./ToolbarIconButton";
import FitViewButton from "./FitViewButton";

interface Props {
  onFitView: () => void;
  onSearch: (memberId: string) => void;
  onTeamSearch: (frame: TeamFrame) => void;
}

const Toolbar = ({ onFitView, onSearch, onTeamSearch }: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const search = usePanelToggle();
  const filters = usePanelToggle();
  const settings = usePanelToggle();
  const hasActiveFilters = useFiltersStore((s) => s.isFilterActive);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  const handleShowSearchClick = () =>
    search.toggle(() => {
      filters.close();
      settings.close();
    });
  const handleShowFiltersClick = () =>
    filters.toggle(() => {
      search.close();
      settings.close();
    });
  const handleShowSettingsClick = () =>
    settings.toggle(() => {
      search.close();
      filters.close();
    });

  return (
    <>
      <div className="fixed bottom-6 left-1/2 z-40 rounded-2xl animate-dock-rise">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl bg-surface/70 shadow-2xl backdrop-blur-md"
        />
        <div className="relative flex items-end gap-1.5 rounded-2xl p-2">
          <ToolbarIconButton
            title="Пошук"
            onClick={handleShowSearchClick}
            icon={MagnifyingGlassIcon}
            color="blue"
            isActive={search.isOpen}
          />
          <ToolbarIconButton
            title="Фільтри"
            onClick={handleShowFiltersClick}
            icon={FunnelIcon}
            color="green"
            isActive={filters.isOpen}
            showBadge={hasActiveFilters && !filters.isOpen}
          />
          <FitViewButton onClick={onFitView} color="orange" />
          <ToolbarIconButton
            title="Налаштування"
            onClick={handleShowSettingsClick}
            icon={Cog6ToothIcon}
            color="green"
            isActive={settings.isOpen}
          />
          <ToolbarIconButton
            title="Керування"
            onClick={toggleSidebar}
            icon={PencilSquareIcon}
            color="blue"
            isActive={isSidebarOpen}
          />
        </div>
      </div>
      <SearchBar
        isOpen={search.isOpen}
        isClosing={search.isClosing}
        onClose={search.close}
        onSearch={onSearch}
        onTeamSearch={onTeamSearch}
      />
      <FiltersPanel isOpen={filters.isOpen} isClosing={filters.isClosing} />
      <SettingsPanel isOpen={settings.isOpen} isClosing={settings.isClosing} />
      <Sidebar
        headerTitle="Керування"
        onClose={closeSidebar}
        isOpen={isSidebarOpen}
        color="blue"
      >
        <ManageForm onSuccess={closeSidebar} color="blue" />
      </Sidebar>
    </>
  );
};

export default memo(Toolbar);
