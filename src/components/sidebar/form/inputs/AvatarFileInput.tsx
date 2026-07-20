import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import LionIcon from "@/components/icons/Lion";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor } from "@/types";

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
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      onImageSelect(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    onImageSelect(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const colorClasses = COLOR_CLASSES[color];

  return (
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
  );
};

export default AvatarFileInput;
