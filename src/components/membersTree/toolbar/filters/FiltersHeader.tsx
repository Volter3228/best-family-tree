import { formatCount, PARTICIPANT_FORMS, TEAM_FORMS } from "@/utils/strings";
import PanelResetButton from "../PanelResetButton";

interface Props {
  // Members (or teams, in team view) the applied filters show right now.
  shownCount: number;
  isTeamView: boolean;
  // Some criteria (not just the layout) are set, so there is something to clear.
  canReset: boolean;
  onReset: () => void;
}

const FiltersHeader = ({ shownCount, isTeamView, canReset, onReset }: Props) => (
  <div className="flex items-center justify-between px-3 pt-2 pb-1">
    <div className="flex min-w-0 items-center gap-2">
      <span className="text-base font-semibold text-foreground">Фільтри</span>
      <span
        aria-live="polite"
        className="truncate rounded-full bg-accent-green-soft px-2 py-0.5 text-xs font-semibold tabular-nums text-accent-green"
      >
        {formatCount(shownCount, isTeamView ? TEAM_FORMS : PARTICIPANT_FORMS)}
      </span>
    </div>
    <PanelResetButton
      label="Очистити фільтри"
      disabled={!canReset}
      onClick={onReset}
    />
  </div>
);

export default FiltersHeader;
