import { useState, useEffect, memo } from "react";
import Sidebar, { ManageForm } from "@/components/sidebar";
import {
  PencilSquareIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  Cog6ToothIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { usePanelToggle } from "@/hooks";
import { authStrings as t } from "@/components/auth/strings";
import { canEdit, useSessionStore } from "@/store/sessionStore";
import { useFiltersStore } from "@/store/filtersStore";
import type { TeamFrame } from "@/types";
import { SearchBar } from "./memberSearch";
import { FiltersPanel } from "./filters";
import { SettingsPanel } from "./settings";
import ToolbarIconButton from "./ToolbarIconButton";
import FitViewButton from "./FitViewButton";
import AccountPanel from "./AccountPanel";

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
  const account = usePanelToggle();
  const hasActiveFilters = useFiltersStore((s) => s.isFilterActive);

  const session = useSessionStore((s) => s.session);
  const loadSession = useSessionStore((s) => s.load);
  useEffect(() => {
    void loadSession();
  }, [loadSession]);
  const editable = canEdit(session);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  const handleShowSearchClick = () =>
    search.toggle(() => {
      filters.close();
      settings.close();
      account.close();
    });
  const handleShowFiltersClick = () =>
    filters.toggle(() => {
      search.close();
      settings.close();
      account.close();
    });
  const handleShowSettingsClick = () =>
    settings.toggle(() => {
      search.close();
      filters.close();
      account.close();
    });
  const handleShowAccountClick = () =>
    account.toggle(() => {
      search.close();
      filters.close();
      settings.close();
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
          {editable && (
            <ToolbarIconButton
              title="Керування"
              onClick={toggleSidebar}
              icon={PencilSquareIcon}
              color="blue"
              isActive={isSidebarOpen}
            />
          )}
          {session && !session.demo && (
            <ToolbarIconButton
              title={t.logout}
              onClick={handleShowAccountClick}
              icon={
                session.method === "QUESTIONS"
                  ? ArrowRightOnRectangleIcon
                  : UserCircleIcon
              }
              color="blue"
              isActive={account.isOpen}
            />
          )}
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
      <AccountPanel
        isOpen={account.isOpen}
        isClosing={account.isClosing}
        onClose={account.close}
      />
      {editable && (
        <Sidebar
          headerTitle="Керування"
          onClose={closeSidebar}
          isOpen={isSidebarOpen}
          color="blue"
        >
          <ManageForm onSuccess={closeSidebar} color="blue" />
        </Sidebar>
      )}
    </>
  );
};

export default memo(Toolbar);
