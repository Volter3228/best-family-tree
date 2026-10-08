import {
  PARTICIPANT_FORMS,
  TEAM_FORMS,
  formatCount,
} from "@/utils";

interface Props {
  count: number;
  // Team view counts teams, the other views count members.
  isTeamMode: boolean;
  // Some criteria (not just the layout) are set, so there is something to clear.
  canReset: boolean;
  onReset: () => void;
  onApply: () => void;
}

const FiltersHeader = ({
  count,
  isTeamMode,
  canReset,
  onReset,
  onApply,
}: Props) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-3 py-2.5">
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-foreground">Фільтри</span>
          <span className="text-xs text-accent-green">
            Знайдено:{" "}
            {formatCount(count, isTeamMode ? TEAM_FORMS : PARTICIPANT_FORMS)}
          </span>
        </div>
        {canReset && (
          <button
            type="button"
            onClick={onReset}
            className="text-xs text-accent-green transition-colors hover:opacity-70"
          >
            Очистити
          </button>
        )}
      </div>
      <div className="px-3 pb-2.5">
        <button
          type="button"
          onClick={onApply}
          className="w-full rounded-lg bg-accent-green text-white text-sm py-1.5 transition-colors duration-150 hover:opacity-90 active:opacity-80"
        >
          Застосувати
        </button>
      </div>
    </div>
  );
};

export default FiltersHeader;
