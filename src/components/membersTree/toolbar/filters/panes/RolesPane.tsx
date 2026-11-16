import { useId, useMemo } from "react";
import { useRoles } from "@/hooks";
import { pluralizeUk } from "@/utils";
import { CheckListFilter, FilterSection } from "../sections";
import type { FilterPaneProps } from "./types";

const RolesPane = ({ filters, onChange }: FilterPaneProps) => {
  const [roles] = useRoles();
  const options = useMemo(
    () => roles.map((role) => ({ value: role.name, label: role.name })),
    [roles],
  );
  const searchId = useId();

  return (
    <FilterSection title="Ролі" htmlFor={searchId} className="min-h-0 flex-1">
      <CheckListFilter
        inputId={searchId}
        scrollable
        options={options}
        selected={filters.roleNames}
        onChange={(roleNames) => onChange({ roleNames })}
        noun={{
          searchPlaceholder: "Знайти роль",
          moreLabel: (n) => `Ще ${n} ${pluralizeUk(n, ["роль", "ролі", "ролей"])}`,
        }}
      />
    </FilterSection>
  );
};

export default RolesPane;
