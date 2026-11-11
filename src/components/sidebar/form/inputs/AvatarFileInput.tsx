import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import LionIcon from "@/components/icons/Lion";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor } from "@/types";
import {
  exceedsUploadLimit,
  UPLOAD_TOO_LARGE_MESSAGE,
} from "@/utils/uploadLimit";

interface Props {
  onImageSelect: (file: File | null) => void;
  image: string | File | null;
  initialImage: string | null;
  color?: AccentColor;
}

const AvatarFileInput = ({
  onImageSelect,
  image,
  initialImage = null,
  color = "blue",
}: Props) => {
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
    setSelectedImage(null);
    onImageSelect(null);

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
              alt="Avatar"
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
              "absolute inset-0 rounded-full transition-all duration-200 ease-in-out",
              colorClasses.hoverSurfaceBg,
              "group-hover:opacity-50 opacity-0",
            )}
          />
        </label>
        {selectedImage && (
          <button
            type="button"
            onClick={handleRemoveImage}
            className={twMerge(
              "absolute top-0 right-0 mt-1 mr-1 p-1",
              "text-white text-sm rounded-full focus:outline-hidden w-6 h-6 shadow-md hover:scale-[1.3]",
              "transition-transform duration-200 ease-in-out",
              colorClasses.accentBg,
            )}
            aria-label="Remove Avatar"
          >
            <XMarkIcon />
          </button>
        )}
      </div>
      {tooLarge && (
        <p role="alert" className="max-w-48 text-center text-sm text-red-500">
          {UPLOAD_TOO_LARGE_MESSAGE}
        </p>
      )}
    </div>
  );
};

export default AvatarFileInput;
