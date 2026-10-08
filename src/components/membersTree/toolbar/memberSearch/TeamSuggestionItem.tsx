import { twMerge } from "tailwind-merge";
import type { TeamFrame } from "@/types";
import SearchSuggestionRow from "./SearchSuggestionRow";

interface Props {
  frame: TeamFrame;
  subtitle: string;
  isActive: boolean;
  onClick: () => void;
}

const GROUP_ICON_URL = 'url("/images/lion-group.svg")';

// The lion group is drawn as a mask so it takes the text colour exactly like
// the lion in member suggestions: white on blue, blue on white when active.
const TeamSuggestionItem = ({ frame, subtitle, isActive, onClick }: Props) => (
  <SearchSuggestionRow
    isActive={isActive}
    onClick={onClick}
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
        <div
          className={twMerge(
            "flex items-center justify-center w-full h-full p-0.5 transition-colors duration-150",
            isActive ? "bg-white" : "bg-accent-blue",
          )}
        >
          <div
            className={twMerge(
              "h-full w-full transition-colors duration-150",
              isActive ? "bg-accent-blue" : "bg-white",
            )}
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
