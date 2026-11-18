import { useId, useMemo } from "react";
import { useRoles } from "@/hooks";
import { useT } from "@/i18n/useT";
import { CheckListFilter, FilterSection } from "../sections";
import type { FilterPaneProps } from "./types";

const RolesPane = ({ filters, onChange }: FilterPaneProps) => {
  const [roles] = useRoles();
  const t = useT().filters.roles;
  const options = useMemo(
    () =>
      roles.map((role) => ({
        value: role.name,
        label: role.name,
      })),
    [roles],
  );
  const searchId = useId();

  return (
    <FilterSection
      title={t.title}
      htmlFor={searchId}
      className="min-h-0 flex-1"
    >
      <CheckListFilter
        inputId={searchId}
        scrollable
        options={options}
        selected={filters.roleNames}
        onChange={(roleNames) => onChange({ roleNames })}
        noun={{
          searchPlaceholder: t.find,
          moreLabel: t.more,
        }}
      />
    </FilterSection>
  );
};

export default RolesPane;
