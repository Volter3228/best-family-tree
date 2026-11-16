import type { FilterCategoryKey, FilterState } from "@/types";
import DatesPane from "./DatesPane";
import MemberPane from "./MemberPane";
import RolesPane from "./RolesPane";
import TeamsPane from "./TeamsPane";
import type { FilterPaneProps } from "./types";

export const FILTER_CATEGORY_LABELS: Record<FilterCategoryKey, string> = {
  dates: "Дати",
  member: "Учасник",
  teams: "Команди",
  roles: "Ролі",
};

const PANES: Record<FilterCategoryKey, (props: FilterPaneProps) => React.ReactNode> = {
  dates: (props) => <DatesPane {...props} />,
  member: (props) => <MemberPane {...props} />,
  teams: (props) => <TeamsPane {...props} />,
  roles: (props) => <RolesPane {...props} />,
};

// Panes whose list scrolls on its own, below fixed controls: the pane fills
// the panel height instead of scrolling as a whole.
export const SELF_SCROLLING_PANES: ReadonlySet<FilterCategoryKey> = new Set([
  "roles",
]);

interface Props extends FilterPaneProps {
  category: FilterCategoryKey;
  filters: FilterState;
}

// Sections carry their own titles; the pane has no heading of its own.
const FilterCategoryPane = ({ category, ...props }: Props) => (
  <div
    className={
      SELF_SCROLLING_PANES.has(category)
        ? "flex h-full min-h-0 flex-col pt-2 pb-3"
        : "pt-2 pb-4"
    }
  >
    {PANES[category](props)}
  </div>
);

export default FilterCategoryPane;
