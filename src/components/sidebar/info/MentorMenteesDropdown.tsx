import { useMemo, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { UserGroupIcon } from "@heroicons/react/16/solid";
import { twMerge } from "tailwind-merge";
import { Member } from "@/models";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor } from "@/types";

interface Props {
  mentees: Member[];
  onMemberNameClick?: (memberId: string) => void;
  isVisible: (id: string) => boolean;
  color?: AccentColor;
}

const MentorMenteesDropdown = ({
  mentees,
  onMemberNameClick,
  isVisible,
  color = "blue",
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const colorClasses = COLOR_CLASSES[color];

  const sortedMentees = useMemo(
    () => [...mentees].sort((a, b) => a.name.localeCompare(b.name, "uk")),
    [mentees],
  );

  return (
    <div
      className={twMerge("border-t pt-4 member-info-row", colorClasses.border)}
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-3 text-left"
        aria-expanded={isOpen}
        aria-label={`Показати список дітей (${sortedMentees.length})`}
      >
        <span
          className={twMerge(
            "flex min-w-0 items-center text-lg font-semibold",
            colorClasses.text,
          )}
        >
          <UserGroupIcon className="mr-1 h-6" />
          <span>{`Діти (${sortedMentees.length})`}</span>
        </span>
        <ChevronDownIcon
          className={twMerge(
            "h-5 w-5 transition-transform duration-200",
            colorClasses.text,
            isOpen && "rotate-180",
          )}
        />
      </button>
      <div
        className={twMerge(
          "grid transition-[grid-template-rows] duration-150 ease-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <ul className="pt-2 text-base columns-2">
            {sortedMentees.map((mentee) => {
              const visible = isVisible(mentee.id);

              return (
                <li key={mentee.id} className="mb-1 leading-7">
                  {visible ? (
                    <span
                      className={twMerge(
                        "cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap transition-colors duration-200",
                        colorClasses.text,
                        colorClasses.hoverTextAccent,
                      )}
                      onClick={() => onMemberNameClick?.(mentee.id)}
                    >
                      {mentee.name}
                    </span>
                  ) : (
                    <span className="overflow-hidden text-ellipsis whitespace-nowrap text-foreground/60">
                      {mentee.name}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MentorMenteesDropdown;
