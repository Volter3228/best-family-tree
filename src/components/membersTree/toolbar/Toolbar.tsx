import { memo } from "react";
import { ManageSidebar } from "@/components/sidebar";
import {
  PencilSquareIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { LionIcon } from "@/components/icons";
import { usePanelToggle, useSearchShortcut } from "@/hooks";
import { useT } from "@/i18n/useT";
import { canEdit, useSessionStore } from "@/store/sessionStore";
import { useFiltersStore } from "@/store/filtersStore";
import { useManageStore } from "@/store/manageStore";
import { countActiveFilters } from "@/utils/filters";
import type { TeamFrame } from "@/types";
import { SearchBar } from "./memberSearch";
import { FiltersPanel } from "./filters";
import { SettingsPanel } from "./settings";
import ToolbarIconButton from "./ToolbarIconButton";
import FitViewButton from "./FitViewButton";
import AccountPanel from "./AccountPanel";
import DemoBadge from "./DemoBadge";

interface Props {
  onFitView: () => void;
  onSearch: (memberId: string) => void;
  onTeamSearch: (frame: TeamFrame) => void;
  // A member or team info sidebar is open: Manage stacks with it.
  isInfoOpen: boolean;
}

// Ctrl+F while search is already open: refocus its input and select the query.
const focusSearchInput = () => {
  const input = document.querySelector<HTMLInputElement>("[data-search-input]");
  input?.focus();
  input?.select();
};

const Toolbar = ({ onFitView, onSearch, onTeamSearch, isInfoOpen }: Props) => {
  const ta = useT().account;
  const tb = useT().toolbar;
  const manage = useManageStore();
  const isSidebarOpen = manage.isOpen;
  const closeSidebar = manage.close;
  const manageStack = isInfoOpen
    ? manage.isFront
      ? "front"
      : "behind"
    : undefined;
  const search = usePanelToggle();
  const filters = usePanelToggle();
  const settings = usePanelToggle();
  const account = usePanelToggle();
  const activeFilterCount = useFiltersStore((s) =>
    countActiveFilters(s.appliedFilters),
  );

  const session = useSessionStore((s) => s.session);
  const sessionLoaded = useSessionStore((s) => s.loaded);
  const editable = canEdit(session);

  // While stacked behind info, the button brings Manage forward (the only way
  // back on mobile, where the stacked sidebar is hidden).
  const toggleSidebar = !isSidebarOpen
    ? manage.open
    : manageStack === "behind"
      ? manage.bringForward
      : closeSidebar;

  const handleShowSearchClick = () =>
    search.toggle(() => {
      filters.close();
      settings.close();
      account.close();
    });
  useSearchShortcut(() => {
    if (search.isOpen) focusSearchInput();
    else handleShowSearchClick();
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
      {session?.demo && <DemoBadge />}
      {sessionLoaded && (
        <div className="fixed bottom-6 left-1/2 z-[60] rounded-2xl animate-dock-rise">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-2xl bg-surface/80 shadow-2xl backdrop-blur-xl"
          />
          <div className="relative flex items-end gap-1.5 rounded-2xl p-2">
            <ToolbarIconButton
              title={tb.search}
              onClick={handleShowSearchClick}
              icon={MagnifyingGlassIcon}
              color="blue"
              isActive={search.isOpen}
            />
            <ToolbarIconButton
              title={tb.filters}
              onClick={handleShowFiltersClick}
              icon={FunnelIcon}
              color="green"
              isActive={filters.isOpen}
              badgeCount={activeFilterCount}
            />
            <FitViewButton onClick={onFitView} color="orange" />
            <ToolbarIconButton
              title={tb.settings}
              onClick={handleShowSettingsClick}
              icon={Cog6ToothIcon}
              color="green"
              isActive={settings.isOpen}
            />
            {session && (
              <ToolbarIconButton
                title={ta.title}
                onClick={handleShowAccountClick}
                icon={LionIcon}
                color="blue"
                isActive={account.isOpen}
              />
            )}
            {editable && (
              <>
                <div
                  aria-hidden
                  className="mx-0.5 h-6 w-px self-center rounded-full bg-foreground/15"
                />
                <ToolbarIconButton
                  title={tb.manage}
                  onClick={toggleSidebar}
                  icon={PencilSquareIcon}
                  color="blue"
                  isActive={isSidebarOpen}
                />
              </>
            )}
          </div>
        </div>
      )}
      <SearchBar
        isOpen={search.isOpen}
        isClosing={search.isClosing}
        onClose={search.close}
        onSearch={onSearch}
        onTeamSearch={onTeamSearch}
      />
      <FiltersPanel
        isOpen={filters.isOpen}
        isClosing={filters.isClosing}
        onClose={filters.close}
      />
      <SettingsPanel
        isOpen={settings.isOpen}
        isClosing={settings.isClosing}
        onClose={settings.close}
      />
      <AccountPanel
        isOpen={account.isOpen}
        isClosing={account.isClosing}
        onClose={account.close}
      />
      {editable && (
        <ManageSidebar
          isOpen={isSidebarOpen}
          onClose={closeSidebar}
          stack={manageStack}
          onBringForward={manage.bringForward}
          color="blue"
        />
      )}
    </>
  );
};

export default memo(Toolbar);
