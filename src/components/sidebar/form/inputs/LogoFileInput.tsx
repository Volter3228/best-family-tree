import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { removeBadgeClasses } from "./inputClasses";
import { PhotoIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import { useT } from "@/i18n/useT";
import type { AccentColor } from "@/types";
import { exceedsUploadLimit } from "@/utils/uploadLimit";

interface Props {
  onImageSelect: (file: File | null) => void;
  image: string | File | null;
  initialImage: string | null;
  // Removing a picked logo brings back the saved one; a saved logo itself
  // has no remove button.
  keepInitial?: boolean;
  color?: AccentColor;
  label?: string;
  // Checkerboard backdrop behind the logo (shows transparent PNGs clearly).
  // On by default; pass `false` to render on a plain surface instead.
  showCheckerboard?: boolean;
}

const LogoFileInput = ({
  onImageSelect,
  image,
  initialImage = null,
  keepInitial = false,
  color = "blue",
  label,
  showCheckerboard = true,
}: Props) => {
  const t = useT().formCommon;
  const [selectedImage, setSelectedImage] = useState<string | null>(
    initialImage,
  );
  const [tooLarge, setTooLarge] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const objectUrlRef = useRef<string | null>(null);

  useEffect(
    () => () => {
      if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
    },
    [],
  );

  useEffect(() => {
    setSelectedImage(initialImage);
    if (objectUrlRef.current) {
      URL.revokeObjectURL(objectUrlRef.current);
      objectUrlRef.current = null;
    }
  }, [initialImage]);

  useEffect(() => {
    if (!image && !initialImage && selectedImage) {
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      setSelectedImage(null);
    }
  }, [image, initialImage, selectedImage]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0];
      if (exceedsUploadLimit(file)) {
        e.target.value = "";
        setTooLarge(true);
        return;
      }
      setTooLarge(false);
      if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
      const imageUrl = URL.createObjectURL(file);
      objectUrlRef.current = imageUrl;
      setSelectedImage(imageUrl);
      onImageSelect(file);
    }
  };

  const handleRemoveImage = () => {
    setTooLarge(false);
    if (objectUrlRef.current) {
      URL.revokeObjectURL(objectUrlRef.current);
      objectUrlRef.current = null;
    }
    setSelectedImage(keepInitial ? initialImage : null);
    onImageSelect(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const colorClasses = COLOR_CLASSES[color];

  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <label className="text-sm font-semibold text-foreground">
        {label ?? t.logo}
      </label>
      <div className="relative w-24 h-24">
        <label className="group cursor-pointer relative block w-full h-full rounded-xl overflow-hidden shadow-lg bg-surface">
          {selectedImage ? (
            <div
              className={twMerge(
                "absolute inset-0",
                showCheckerboard && "bg-checkerboard",
              )}
            >
              <Image
                src={selectedImage}
                alt={t.logo}
                className={
                  showCheckerboard ? "object-contain p-2" : "object-cover"
                }
                fill
              />
            </div>
          ) : (
            <div
              className={twMerge(
                "flex items-center justify-center w-full h-full text-center p-4",
                colorClasses.text,
              )}
            >
              <PhotoIcon className="h-8 w-8" />
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
              "absolute inset-0 rounded-xl transition-all duration-200 ease-in-out",
              colorClasses.hoverSurfaceBg,
              "group-hover:opacity-50 opacity-0",
            )}
          />
        </label>
        {selectedImage && !(keepInitial && selectedImage === initialImage) && (
          <button
            type="button"
            onClick={handleRemoveImage}
            className={removeBadgeClasses(
              color,
              "absolute right-1 top-1 h-6 w-6 p-1",
            )}
            aria-label={t.removeLogo}
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

export default LogoFileInput;
