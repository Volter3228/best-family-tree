import { useCallback, useEffect, useRef, useState } from "react";
import { fetchSuggestionCount } from "@/api/suggestionReview";
import { useSessionStore } from "@/store/sessionStore";
import Sidebar from "../Sidebar";
import type { AccentColor } from "@/types";
import { useT } from "@/i18n/useT";
import AccessTab from "./AccessTab";
import ManagePane from "./ManagePane";
import ManageRail from "./ManageRail";
import MembersTab from "./MembersTab";
import RolesTab from "./RolesTab";
import SuggestionsTab from "./SuggestionsTab";
import TeamTypesTab from "./TeamTypesTab";
import TeamsTab from "./TeamsTab";
import {
  LIST_VIEW,
  type ManageTab,
  type ManageTabProps,
  type ManageView,
} from "./types";

const TABS: Record<ManageTab, React.ComponentType<ManageTabProps>> = {
  members: MembersTab,
  teams: TeamsTab,
  types: TeamTypesTab,
  roles: RolesTab,
  suggestions: SuggestionsTab,
  access: AccessTab,
};

// Matches the sidebar's slide-out, so the reset is not seen.
const CLOSE_RESET_MS = 350;

interface Props {
  isOpen: boolean;
  onClose: () => void;
  // Set while an info sidebar is open too.
  stack?: "front" | "behind";
  onBringForward: () => void;
  color?: AccentColor;
}

// Everything that creates, edits or removes data: a rail of tabs, each a
// searchable list that drills into an editor.
const ManageSidebar = ({
  isOpen,
  onClose,
  stack,
  onBringForward,
  color = "blue",
}: Props) => {
  const t = useT().manage;
  const [tab, setTab] = useState<ManageTab>("members");
  const [view, setView] = useState<ManageView>(LIST_VIEW);
  const [itemTitle, setItemTitle] = useState("");
  const isAdmin = useSessionStore((s) => s.session?.level === "ADMIN");
  const [pendingCount, setPendingCount] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const go = useCallback((next: ManageView) => {
    setDirection(next.kind === "list" ? -1 : 1);
    setView(next);
  }, []);

  const refreshCount = useCallback(() => {
    fetchSuggestionCount()
      .then(setPendingCount)
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (isOpen) refreshCount();
  }, [isOpen, refreshCount]);

  const selectTab = useCallback((next: ManageTab) => {
    setTab(next);
    setDirection(-1);
    setView(LIST_VIEW);
  }, []);

  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    if (resetTimer.current) clearTimeout(resetTimer.current);
    if (!isOpen) {
      resetTimer.current = setTimeout(() => setView(LIST_VIEW), CLOSE_RESET_MS);
    }
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, [isOpen]);

  const Tab = TABS[tab];
  const inEditor = view.kind !== "list";

  const headerTitle = inEditor ? (
    <span className="flex min-w-0 flex-col">
      <span className="truncate text-xs font-medium leading-4 text-foreground/60">
        {t.tabs[tab]}
      </span>
      <span className="truncate text-base font-semibold leading-5 text-foreground">
        {itemTitle}
      </span>
    </span>
  ) : (
    t.title
  );

  return (
    <Sidebar
      headerTitle={headerTitle}
      mode={inEditor ? "edit" : undefined}
      fillHeight
      // Wide enough for two columns of fields (gender chips fit on one row).
      className="md:min-w-[44rem]"
      isOpen={isOpen}
      color={color}
      onClose={onClose}
      stack={stack}
      onBringForward={onBringForward}
      onBackClick={() => go(LIST_VIEW)}
    >
      <div className="flex gap-3">
        <ManageRail
          active={tab}
          onSelect={selectTab}
          color={color}
          isAdmin={isAdmin}
          pendingCount={pendingCount}
        />
        <ManagePane screen={`${tab}:${view.kind}`} direction={direction}>
          <div className="@container pt-1">
            <Tab
              key={tab}
              view={view}
              go={go}
              onTitle={setItemTitle}
              onClose={onClose}
              color={color}
              refreshCount={refreshCount}
            />
          </div>
        </ManagePane>
      </div>
    </Sidebar>
  );
};

export default ManageSidebar;
