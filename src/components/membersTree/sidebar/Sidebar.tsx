import { useState, memo } from "react";
import Drawer, { AddMemberForm } from "@/components/drawer";
import {
  PlusIcon,
  ViewfinderCircleIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useFilters, usePanelToggle } from "@/hooks";
import { SearchBar } from "./memberSearch";
import { FiltersPanel } from "./filters";
import SidebarIconButton from "./SidebarIconButton";

interface Props {
  onFitView: () => void;
  onSearch: (memberId: string) => void;
}

const Sidebar = ({ onFitView, onSearch }: Props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const search = usePanelToggle();
  const filters = usePanelToggle();

  const { isFilterActive: hasActiveFilters } = useFilters();

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setIsDrawerOpen(false);

  const handleShowSearchClick = () => search.toggle(filters.close);
  const handleShowFiltersClick = () => filters.toggle(search.close);

  return (
    <>
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 md:absolute md:bottom-auto md:top-4 md:left-4 md:translate-x-0">
        <div className="relative flex flex-row md:flex-col bg-violet-900 shadow-2xl rounded-xl p-2 gap-2">
          <SidebarIconButton
            title="Search"
            onClick={handleShowSearchClick}
            icon={MagnifyingGlassIcon}
            isActive={search.isOpen}
          />
          <div className="relative">
            <SidebarIconButton
              title="Filters"
              onClick={handleShowFiltersClick}
              icon={FunnelIcon}
              isActive={filters.isOpen}
            />
            {hasActiveFilters && !filters.isOpen && (
              <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-fuchsia-400 border border-violet-900" />
            )}
          </div>
          <SidebarIconButton
            title="Fit View"
            onClick={onFitView}
            icon={ViewfinderCircleIcon}
          />
          <SidebarIconButton
            title="Add Member"
            onClick={toggleDrawer}
            icon={PlusIcon}
            isActive={isDrawerOpen}
          />
        </div>
      </div>
      <SearchBar
        isOpen={search.isOpen}
        isClosing={search.isClosing}
        onClose={search.close}
        onSearch={onSearch}
      />
      <FiltersPanel isOpen={filters.isOpen} isClosing={filters.isClosing} />
      <Drawer
        headerTitle="Додати"
        onClose={closeDrawer}
        isOpen={isDrawerOpen}
        className="z-20"
      >
        <AddMemberForm onSuccess={closeDrawer} />
      </Drawer>
    </>
  );
};

export default memo(Sidebar);
