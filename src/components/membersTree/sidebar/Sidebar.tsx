import { useState, useCallback, memo } from "react";
import Drawer, { AddMemberForm } from "@/components/drawer";
import {
  PlusIcon,
  ViewfinderCircleIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { SearchBar } from "./memberSearch";
import SidebarIconButton from "./SidebarIconButton";

interface Props {
  onFitView: () => void;
  onSearch: (memberId: string) => void;
}

const SEARCH_CLOSE_DURATION = 200;

const Sidebar = ({ onFitView, onSearch }: Props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSearchClosing, setIsSearchClosing] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setIsDrawerOpen(false);
  const closeSearch = useCallback(() => {
    setIsSearchClosing(true);
    setTimeout(() => {
      setIsSearchOpen(false);
      setIsSearchClosing(false);
    }, SEARCH_CLOSE_DURATION);
  }, []);

  const handleShowFiltersClick = () => {
    console.log("show filterse");
  };

  const handleShowSearchClick = useCallback(() => {
    if (isSearchOpen && !isSearchClosing) {
      closeSearch();
    } else if (!isSearchClosing) {
      setIsSearchOpen(true);
    }
  }, [isSearchOpen, isSearchClosing, closeSearch]);

  return (
    <>
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 md:absolute md:bottom-auto md:top-4 md:left-4 md:translate-x-0">
        <div className="relative flex flex-row md:flex-col bg-violet-900 shadow-2xl rounded-xl p-2 gap-2">
          <SidebarIconButton
            title="Search"
            onClick={handleShowSearchClick}
            icon={MagnifyingGlassIcon}
            isActive={isSearchOpen}
          />
          <SidebarIconButton
            title="Filters"
            onClick={handleShowFiltersClick}
            icon={FunnelIcon}
          />
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
        isOpen={isSearchOpen}
        isClosing={isSearchClosing}
        onClose={closeSearch}
        onSearch={onSearch}
      />
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
