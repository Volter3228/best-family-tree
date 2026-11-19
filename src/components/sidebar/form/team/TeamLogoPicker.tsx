import { useEffect, useMemo, useRef, useState } from "react";
import CloseButton from "@/components/ui/CloseButton";
import { PhotoIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { twMerge } from "tailwind-merge";
import { removeBadgeClasses } from "../inputs/inputClasses";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import { useT } from "@/i18n/useT";
import type { AccentColor } from "@/types";
import { exceedsUploadLimit } from "@/utils/uploadLimit";
import TeamTile from "./TeamTile";

interface Props {
  name: string;
  // The team's photo: a saved URL, a picked file or nothing.
  value: File | string | null;
  onChange: (file: File | null) => void;
  iconUrl?: string | null;
  typeColor?: string | null;
  color?: AccentColor;
}

// The identity tile of the team form: click it to pick a photo.
// Focus ring and border like the text inputs (`focus:` there, `focus-within:`
// here, since the file input is the focused element). Spelled out for Tailwind.
const FOCUS_WITHIN: Record<AccentColor, string> = {
  blue: "focus-within:border-accent-blue focus-within:ring-accent-blue/20",
  green: "focus-within:border-accent-green focus-within:ring-accent-green/20",
  orange:
    "focus-within:border-accent-orange focus-within:ring-accent-orange/20",
};

const TeamLogoPicker = ({
  name,
  value,
  onChange,
  iconUrl,
  typeColor,
  color = "blue",
}: Props) => {
  const t = useT().teamForm;
  const common = useT().formCommon;
  const [tooLarge, setTooLarge] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const colorClasses = COLOR_CLASSES[color];

  // A picked file shows through an object URL that is released with it.
  const preview = useMemo(
    () => (value instanceof File ? URL.createObjectURL(value) : null),
    [value],
  );
  useEffect(
    () => () => {
      if (preview) URL.revokeObjectURL(preview);
    },
    [preview],
  );

  const photoUrl = value instanceof File ? preview : value;

  const pick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (exceedsUploadLimit(file)) {
      e.target.value = "";
      setTooLarge(true);
      return;
    }
    setTooLarge(false);
    onChange(file);
  };

  const remove = () => {
    setTooLarge(false);
    if (inputRef.current) inputRef.current.value = "";
    onChange(null);
  };

  return (
    <div className="flex shrink-0 flex-col items-center gap-1">
      <div className="relative">
        <label
          className={twMerge(
            "group relative block h-16 w-16 cursor-pointer rounded-2xl border transition-colors focus-within:outline-none focus-within:ring-2",
            colorClasses.softBorder,
            colorClasses.softBorderHover,
            FOCUS_WITHIN[color],
          )}
          aria-label={t.photoLabel}
          title={t.photoLabel}
        >
          <TeamTile
            name={name}
            photoUrl={photoUrl}
            iconUrl={iconUrl}
            typeColor={typeColor}
            color={color}
            className="h-full w-full rounded-2xl text-lg"
          />
          <span className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/40 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
            <PhotoIcon className="h-5 w-5" />
          </span>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="sr-only"
            onChange={pick}
          />
        </label>
        {photoUrl && (
          <CloseButton
            label={t.removePhoto}
            onClick={remove}
            iconClassName="h-3.5 w-3.5"
            className={removeBadgeClasses(
              color,
              "absolute -right-1.5 -top-1.5 h-5 w-5",
            )}
          />
        )}
      </div>
      {tooLarge && (
        <p role="alert" className="max-w-24 text-center text-xs text-red-500">
          {common.fileTooLarge}
        </p>
      )}
    </div>
  );
};

export default TeamLogoPicker;
