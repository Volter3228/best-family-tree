import { useEffect, useState } from "react";
import { PlusIcon } from "@heroicons/react/16/solid";
import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor, DropdownOption, TeamMemberRow } from "@/types";
import { ComboboxInput, DropdownSelectInput } from "../inputs";
import PositionRowHeader from "../fields/position/PositionRowHeader";
import FormSection from "./FormSection";

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
  const [pendingFocusId, setPendingFocusId] = useState<string | null>(null);

  const toggle = (id: string) =>
    setExpanded((current) => {
      const next = new Set(current);
      if (!next.delete(id)) next.add(id);
      return next;
    });

  const handleAdd = () => {
    const id = onAdd();
    setExpanded((current) => new Set(current).add(id));
    setPendingFocusId(id);
  };

  // After a new member row renders, scroll it into view (bottom) and focus its
  // name input so the user can start typing right away.
  useEffect(() => {
    if (!pendingFocusId) return;
    const input = document.getElementById(
      `team-member-${pendingFocusId}`,
    ) as HTMLElement | null;
    if (input) {
      input.scrollIntoView({ block: "end", behavior: "smooth" });
      input.focus();
    }
    setPendingFocusId(null);
  }, [pendingFocusId]);

  return (
    <FormSection title="Учасники" count={rows.length} color={color}>
      {rows.map((row) => (
        <div
          key={row.id}
          className={twMerge("flex flex-col gap-3 rounded-2xl p-3", colorClasses.softBg)}
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
            <div className="grid grid-cols-1 gap-3 @[22rem]:grid-cols-2">
              <DropdownSelectInput
                name={`team-member-${row.id}`}
                label="Учасник"
                options={memberOptions}
                onSelect={(value) => {
                  const option = memberOptions.find((opt) => opt.value === value);
                  onUpdate(row.id, {
                    memberId: value || undefined,
                    memberName: option?.text ?? "",
                  });
                }}
                placeholder="Імʼя"
                initialValue={row.memberId}
                autoComplete
                color={color}
              />
              <ComboboxInput
                name={`team-role-${row.id}`}
                label="Посада"
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
            </div>
          )}
        </div>
      ))}
      <button
        type="button"
        onClick={handleAdd}
        className={twMerge(
          "flex h-10 items-center justify-center gap-1 rounded-xl border border-dashed text-sm font-medium transition-colors duration-150 focus:outline-none focus-visible:ring-2",
          colorClasses.softBorder,
          colorClasses.softBorderHover,
          colorClasses.text,
          colorClasses.hoverSurfaceBg,
          colorClasses.focusVisibleRingSoft,
        )}
      >
        <PlusIcon className="h-4 w-4" />
        Додати учасника
      </button>
    </FormSection>
  );
};

export default TeamMembersEditor;
