import { useEffect, useRef, useState } from "react";
import { PhotoIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { twMerge } from "tailwind-merge";
import { removeBadgeClasses } from "../inputs/inputClasses";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import { useT } from "@/i18n/useT";
import type { AccentColor } from "@/types";
import { exceedsUploadLimit } from "@/utils/uploadLimit";
import TeamTypeMark from "./TeamTypeMark";

interface Props {
  name: string;
  // Lowercase `#rrggbb`, or undefined for no color.
  color?: string;
  // The uploaded file, the saved icon URL, or null.
  icon: File | string | null;
  onIconChange: (icon: File | null) => void;
  onError: (message: string | null) => void;
  // Accent of the form (the same one the inputs use).
  accent?: AccentColor;
}

// 80px identity tile: click to upload an icon, tinted with the type's color.
// The remove button sits inside the tile's corner: the sidebar's scroll area
// clips anything that pokes out of the tile.
const TeamTypeIdentityTile = ({
  name,
  color,
  icon,
  onIconChange,
  onError,
  accent = "blue",
}: Props) => {
  const t = useT().teamTypeForm;
  const common = useT().formCommon;
  const inputRef = useRef<HTMLInputElement>(null);
  const objectUrlRef = useRef<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const accentClasses = COLOR_CLASSES[accent];

  // Revoke the last preview when the tile goes away.
  useEffect(
    () => () => {
      if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
    },
    [],
  );

  const revokePreview = () => {
    if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
    objectUrlRef.current = null;
    setPreviewUrl(null);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    // Reset so picking the same file again still fires a change.
    event.target.value = "";
    if (!file) return;
    if (exceedsUploadLimit(file)) {
      onError(common.fileTooLarge);
      return;
    }
    onError(null);
    revokePreview();
    const url = URL.createObjectURL(file);
    objectUrlRef.current = url;
    setPreviewUrl(url);
    onIconChange(file);
  };

  const handleRemove = () => {
    onError(null);
    revokePreview();
    onIconChange(null);
  };

  const src = icon instanceof File ? previewUrl : icon;

  return (
    <div className="relative h-20 w-20 shrink-0">
      <button
        type="button"
        aria-label={t.changeIcon}
        onClick={() => inputRef.current?.click()}
        className={twMerge(
          "group relative block h-full w-full touch-manipulation overflow-hidden rounded-2xl border transition-colors focus:outline-none focus:ring-2",
          accentClasses.softBorder,
          accentClasses.softBorderHover,
          accentClasses.focusBorder,
          accentClasses.focusRingSoft,
        )}
      >
        <TeamTypeMark
          name={name}
          iconSrc={src}
          color={color}
          className="h-full w-full text-2xl"
        />
        <span
          aria-hidden
          className={twMerge(
            "absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-150 group-hover:opacity-80 group-focus-visible:opacity-80",
            accentClasses.accentBg,
          )}
        >
          <PhotoIcon className="h-6 w-6 text-white" />
        </span>
      </button>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleChange}
      />
      {icon && (
        <button
          type="button"
          aria-label={t.removeIcon}
          onClick={handleRemove}
          className={removeBadgeClasses(
            accent,
            "absolute right-1 top-1 h-6 w-6",
          )}
        >
          <XMarkIcon className="h-3.5 w-3.5" />
        </button>
      )}
    </div>
  );
};

export default TeamTypeIdentityTile;
