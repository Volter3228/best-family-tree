import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { twMerge } from "tailwind-merge";
import TextInput from "@/components/sidebar/form/inputs/TextInput";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor } from "@/types";
import { authStrings as t } from "./strings";

// A soft wash of the accent from the coloured edge, inside the card so it
// has no visible corners (literal classes for Tailwind's scanner).
const GLOW: Record<AccentColor, string> = {
  blue: "bg-[linear-gradient(90deg,color-mix(in_srgb,var(--accent-blue)_18%,transparent),transparent_45%)]",
  green:
    "bg-[linear-gradient(90deg,color-mix(in_srgb,var(--accent-green)_18%,transparent),transparent_45%)]",
  orange:
    "bg-[linear-gradient(90deg,color-mix(in_srgb,var(--accent-orange)_18%,transparent),transparent_45%)]",
};

interface Props {
  index: number;
  prompt: string;
  value: string;
  color: AccentColor;
  solved: boolean;
  disabled: boolean;
  canSwap: boolean;
  onChange: (value: string) => void;
  onEnter: () => void;
  onSwap: () => void;
}

const QuestionCard = ({
  index,
  prompt,
  value,
  color,
  solved,
  disabled,
  canSwap,
  onChange,
  onEnter,
  onSwap,
}: Props) => (
  <div
    className={twMerge(
      "rounded-xl border-l-4 bg-foreground/5 p-3 transition-colors",
      COLOR_CLASSES[color].border,
      GLOW[color],
    )}
  >
    <div className="mb-2 flex items-start justify-between gap-2">
      <p className="text-sm font-medium">{prompt}</p>
      {solved ? (
        <CheckCircleIcon
          aria-label={t.solved}
          className={twMerge("h-5 w-5 shrink-0", COLOR_CLASSES[color].text)}
        />
      ) : (
        <button
          type="button"
          onClick={onSwap}
          disabled={disabled || !canSwap}
          tabIndex={canSwap ? 0 : -1}
          aria-hidden={!canSwap}
          className={twMerge(
            "shrink-0 rounded text-xs text-foreground/60 transition-[color,opacity] duration-300 focus:outline-none focus-visible:ring-2",
            COLOR_CLASSES[color].focusVisibleRing,
            COLOR_CLASSES[color].hoverTextAccent,
            !canSwap && "pointer-events-none opacity-0",
          )}
        >
          {t.dontRemember}
        </button>
      )}
    </div>
    <TextInput
      id={`answer-${index}`}
      name={`answer-${index}`}
      value={value}
      placeholder={t.answerPlaceholder}
      onChange={onChange}
      onEnter={onEnter}
      color={color}
      disabled={disabled || solved}
      autoCapitalize="off"
      autoComplete="off"
      spellCheck={false}
    />
  </div>
);

export default QuestionCard;
