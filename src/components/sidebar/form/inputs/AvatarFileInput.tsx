import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import LionIcon from "@/components/icons/Lion";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { CameraIcon } from "@heroicons/react/24/outline";
import { twMerge } from "tailwind-merge";
import { removeBadgeClasses } from "./inputClasses";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import { useT } from "@/i18n/useT";
import type { AccentColor } from "@/types";
import { exceedsUploadLimit } from "@/utils/uploadLimit";

interface Props {
  onImageSelect: (file: File | null) => void;
  image: string | File | null;
  initialImage: string | null;
  // Removing a picked photo brings back the saved one; a saved photo itself
  // has no remove button.
  keepInitial?: boolean;
  // With keepInitial: the saved photo gets a remove button too, reported here.
  onRemoveSaved?: () => void;
  color?: AccentColor;
}

const AvatarFileInput = ({
  onImageSelect,
  image,
  initialImage = null,
  keepInitial = false,
  onRemoveSaved,
  color = "blue",
}: Props) => {
  const t = useT().formCommon;
  const [selectedImage, setSelectedImage] = useState<string | null>(
    initialImage,
  );
  const [tooLarge, setTooLarge] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setSelectedImage(initialImage);
  }, [initialImage]);

  useEffect(() => {
    if (!image && selectedImage) {
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      setSelectedImage(null);
    }
  }, [image]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0];
      if (exceedsUploadLimit(file)) {
        // Keep whatever was selected before; only report the rejected file.
        e.target.value = "";
        setTooLarge(true);
        return;
      }
      setTooLarge(false);
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      onImageSelect(file);
    }
  };

  const handleRemoveImage = () => {
    setTooLarge(false);
    if (keepInitial && selectedImage !== initialImage) {
      setSelectedImage(initialImage);
      onImageSelect(null);
    } else {
      setSelectedImage(null);
      if (keepInitial) onRemoveSaved?.();
      else onImageSelect(null);
    }

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const colorClasses = COLOR_CLASSES[color];

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-32 h-32">
        <label className="group cursor-pointer relative block w-full h-full">
          {selectedImage ? (
            <Image
              src={selectedImage}
              alt={t.avatar}
              className="rounded-full shadow-lg"
              fill
            />
          ) : (
            <div
              className={twMerge(
                "flex items-center justify-center w-full h-full rounded-full text-center p-8 shadow-inner bg-surface",
                colorClasses.text,
              )}
            >
              <LionIcon className={colorClasses.fill} />
            </div>
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
          <div
            className={twMerge(
              "absolute inset-0 flex flex-col items-center justify-center gap-1 rounded-full bg-black/45 text-white opacity-0 select-none border-4 transition-opacity duration-200 ease-in-out group-hover:opacity-100 group-focus-within:opacity-100",
              colorClasses.border,
            )}
          >
            <CameraIcon className="h-7 w-7" />
            <span className="px-3 text-center text-xs font-semibold leading-tight">
              {selectedImage ? t.changePhoto : t.addPhoto}
            </span>
          </div>
        </label>
        {selectedImage &&
          (!keepInitial || selectedImage !== initialImage || onRemoveSaved) && (
            <button
              type="button"
              onClick={handleRemoveImage}
              className={removeBadgeClasses(
                color,
                "absolute right-1 top-1 h-6 w-6 p-1",
              )}
              aria-label={t.removeAvatar}
            >
              <XMarkIcon />
            </button>
          )}
      </div>
      {tooLarge && (
        <p role="alert" className="max-w-48 text-center text-sm text-red-500">
          {t.fileTooLarge}
        </p>
      )}
    </div>
  );
};

export default AvatarFileInput;
