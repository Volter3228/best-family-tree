import { useMemo, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { UserGroupIcon } from "@heroicons/react/16/solid";
import { twMerge } from "tailwind-merge";
import { Member } from "@/models";

interface Props {
  mentees: Member[];
  onMemberNameClick?: (memberId: string) => void;
  isVisible: (id: string) => boolean;
}

const MentorMenteesDropdown = ({
  mentees,
  onMemberNameClick,
  isVisible,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const sortedMentees = useMemo(
    () => [...mentees].sort((a, b) => a.name.localeCompare(b.name, "uk")),
    [mentees],
  );

  return (
    <div className="border-t border-purple-400 pt-4">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-3 text-left"
        aria-expanded={isOpen}
        aria-label={`Показати список дітей (${sortedMentees.length})`}
      >
        <span className="flex min-w-0 items-center text-accent text-lg font-semibold">
          <UserGroupIcon className="mr-1 h-6" />
          <span>{`Діти (${sortedMentees.length})`}</span>
        </span>
        <ChevronDownIcon
          className={twMerge(
            "h-5 w-5 text-accent transition-transform duration-200",
            isOpen && "rotate-180",
          )}
        />
      </button>
      <div
        className={twMerge(
          "grid transition-[grid-template-rows,opacity] duration-200 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
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
                      className="cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap text-accent transition-colors duration-200 hover:text-accent-hover"
                      onClick={() => onMemberNameClick?.(mentee.id)}
                    >
                      {mentee.name}
                    </span>
                  ) : (
                    <span className="overflow-hidden text-ellipsis whitespace-nowrap text-slate-700">
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
