import type { TeamFrame } from "@/types";
import SearchSuggestionRow, { type SuggestionRowProps } from "./SearchSuggestionRow";

interface Props extends SuggestionRowProps {
  frame: TeamFrame;
  subtitle: string;
}

const GROUP_ICON_URL = 'url("/images/lion-group.svg")';

// The lion group is drawn as a mask: white lion on a blue disc.
const TeamSuggestionItem = ({ frame, subtitle, ...rowProps }: Props) => (
  <SearchSuggestionRow
    {...rowProps}
    title={frame.name}
    subtitle={subtitle}
    avatar={
      frame.iconUrl ? (
        <img
          src={frame.iconUrl}
          alt={frame.name}
          className="h-full w-full object-contain bg-white p-0.5"
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full p-0.5 bg-accent-blue">
          <div
            className="h-full w-full bg-white"
            style={{
              WebkitMaskImage: GROUP_ICON_URL,
              maskImage: GROUP_ICON_URL,
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
            }}
          />
        </div>
      )
    }
  />
);

export default TeamSuggestionItem;
