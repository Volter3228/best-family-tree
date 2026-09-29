import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { PhotoIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor } from "@/types";

interface Props {
  onImageSelect: (file: File | null) => void;
  image: string | File | null;
  initialImage: string | null;
  color?: AccentColor;
}

const LogoFileInput = ({
  onImageSelect,
  image,
  initialImage = null,
  color = "blue",
}: Props) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(
    initialImage,
  );
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
      if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
      const imageUrl = URL.createObjectURL(file);
      objectUrlRef.current = imageUrl;
      setSelectedImage(imageUrl);
      onImageSelect(file);
    }
  };

  const handleRemoveImage = () => {
    if (objectUrlRef.current) {
      URL.revokeObjectURL(objectUrlRef.current);
      objectUrlRef.current = null;
    }
    setSelectedImage(null);
    onImageSelect(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const colorClasses = COLOR_CLASSES[color];

  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <label className="text-sm font-medium text-foreground/80">Логотип</label>
      <div className="relative w-24 h-24">
        <label className="group cursor-pointer relative block w-full h-full rounded-xl overflow-hidden shadow-lg bg-surface">
          {selectedImage ? (
            <div className="absolute inset-0 bg-checkerboard">
              <Image
                src={selectedImage}
                alt="Logo"
                className="object-contain p-2"
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
            aria-label="Remove Logo"
          >
            <XMarkIcon />
          </button>
        )}
      </div>
    </div >
  );
};

export default LogoFileInput;
