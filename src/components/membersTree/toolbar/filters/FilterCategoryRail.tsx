import {
  BriefcaseIcon,
  CalendarDaysIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import CategoryRail from "@/components/ui/CategoryRail";
import type { FilterCategoryKey, FilterState } from "@/types";
import { FILTER_CATEGORY_KEYS, isCategoryActive } from "@/utils/filters";
import { useT } from "@/i18n/useT";

const ICON_CLASS = "h-5 w-5";

const CATEGORY_ICONS: Record<FilterCategoryKey, React.ReactNode> = {
  dates: <CalendarDaysIcon className={ICON_CLASS} />,
  member: <UserIcon className={ICON_CLASS} />,
  teams: <UserGroupIcon className={ICON_CLASS} />,
  roles: <BriefcaseIcon className={ICON_CLASS} />,
};

interface Props {
  active: FilterCategoryKey;
  filters: FilterState;
  onSelect: (key: FilterCategoryKey) => void;
}

// Vertical tab list of the filter categories.
const FilterCategoryRail = ({ active, filters, onSelect }: Props) => {
  const labels = useT().filters.categories;
  return (
    <CategoryRail
      color="green"
      active={active}
      onSelect={onSelect}
      items={FILTER_CATEGORY_KEYS.map((key) => ({
        key,
        label: labels[key],
        icon: CATEGORY_ICONS[key],
        marker: isCategoryActive(filters, key),
      }))}
    />
  );
};

export default FilterCategoryRail;
