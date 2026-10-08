import { useState } from "react";
import { PlusIcon } from "@heroicons/react/16/solid";
import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor, DropdownOption, TeamMemberRow } from "@/types";
import { ComboboxInput } from "../inputs";
import PositionRowHeader from "../fields/position/PositionRowHeader";

interface Props {
  rows: TeamMemberRow[];
  memberOptions: DropdownOption[];
  roleOptions: DropdownOption[];
  color?: AccentColor;
  onAdd: () => string;
  onUpdate: (id: string, patch: Partial<TeamMemberRow>) => void;
  onRemove: (id: string) => void;
}

const getSummary = (row: TeamMemberRow) =>
  [row.memberName.trim() || "Новий учасник", row.roleName.trim()]
    .filter(Boolean)
    .join(" · ");

// The team's roster: one collapsible line per member and role. The same member
// can appear several times with different roles.
const TeamMembersEditor = ({
  rows,
  memberOptions,
  roleOptions,
  color = "blue",
  onAdd,
  onUpdate,
  onRemove,
}: Props) => {
  const colorClasses = COLOR_CLASSES[color];
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const toggle = (id: string) =>
    setExpanded((current) => {
      const next = new Set(current);
      if (!next.delete(id)) next.add(id);
      return next;
    });

  const handleAdd = () => {
    const id = onAdd();
    setExpanded((current) => new Set(current).add(id));
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      <h3 className={twMerge("text-lg font-semibold", colorClasses.text)}>
        Учасники{rows.length > 0 && ` (${rows.length})`}
      </h3>
      {rows.map((row) => (
        <div
          key={row.id}
          className={twMerge(
            "flex flex-col gap-2 rounded-xl border bg-surface/50 p-3",
            colorClasses.border,
          )}
        >
          <PositionRowHeader
            summary={getSummary(row)}
            isExpanded={expanded.has(row.id)}
            onToggle={() => toggle(row.id)}
            onRemove={() => onRemove(row.id)}
            removeLabel="Прибрати учасника"
            color={color}
          />
          {expanded.has(row.id) && (
            <>
              <ComboboxInput
                name={`team-member-${row.id}`}
                label="Учасник"
                options={memberOptions}
                onSelect={(value, text) =>
                  onUpdate(row.id, {
                    memberId: value || undefined,
                    memberName: text,
                  })
                }
                placeholder="Імʼя"
                initialValue={row.memberName}
                color={color}
              />
              <ComboboxInput
                name={`team-role-${row.id}`}
                label="Роль"
                options={roleOptions}
                onSelect={(value, text) =>
                  onUpdate(row.id, {
                    roleId: value || undefined,
                    roleName: text,
                  })
                }
                placeholder="Member"
                initialValue={row.roleName}
                color={color}
              />
            </>
          )}
        </div>
      ))}
      <button
        type="button"
        onClick={handleAdd}
        className={twMerge(
          "flex items-center justify-center gap-1 py-2 rounded-xl border border-dashed",
          colorClasses.border,
          colorClasses.text,
          colorClasses.hoverSurfaceBg,
          "transition-all duration-200",
        )}
      >
        <PlusIcon className="h-4 w-4" />
        Додати учасника
      </button>
    </div>
  );
};

export default TeamMembersEditor;
