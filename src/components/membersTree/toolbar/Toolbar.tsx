import { useState, memo } from "react";
import Sidebar, { ManageForm } from "@/components/sidebar";
import {
  PencilSquareIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useFilters, usePanelToggle } from "@/hooks";
import type { TeamFrame } from "@/types";
import { SearchBar } from "./memberSearch";
import { FiltersPanel } from "./filters";
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
  const { isFilterActive: hasActiveFilters } = useFilters();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  const handleShowSearchClick = () => search.toggle(filters.close);
  const handleShowFiltersClick = () => filters.toggle(search.close);

  return (
    <>
      <div className="fixed bottom-6 left-1/2 z-40 backdrop-blur-md rounded-2xl animate-dock-rise">
        <div className="flex items-end gap-1.5 rounded-2xl bg-surface/70 p-2 shadow-2xl">
          <ToolbarIconButton
            title="Search"
            onClick={handleShowSearchClick}
            icon={MagnifyingGlassIcon}
            color="blue"
            isActive={search.isOpen}
          />
          <ToolbarIconButton
            title="Filters"
            onClick={handleShowFiltersClick}
            icon={FunnelIcon}
            color="green"
            isActive={filters.isOpen}
            showBadge={hasActiveFilters && !filters.isOpen}
          />
          <FitViewButton onClick={onFitView} color="orange" />
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
