import { useRef, useState } from "react";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/16/solid";
import LionIcon from "@/components/icons/Lion";

interface Props {
  onImageSelect: (file: File | null) => void;
}

const AvatarFileInput = ({ onImageSelect }: Props) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
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
            className="
              flex items-center justify-center w-full h-full rounded-full
              bg-purple-50 text-accent text-center p-8 shadow-inner
            "
          >
            <LionIcon className="fill-accent-darken" />
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
          className="
            absolute inset-0 rounded-full group-hover:bg-accent-darken/30
            transition-colors duration-200 ease-in-out
          "
        />
      </label>
      {selectedImage && (
        <button
          type="button"
          onClick={handleRemoveImage}
          className="
            absolute top-0 right-0 mt-1 mr-1 bg-accent text-white
            text-sm rounded-full p-1 hover:bg-accent-darken focus:outline-hidden
            w-6 h-6 shadow-md
          "
          aria-label="Remove Avatar"
        >
          <XMarkIcon />
        </button>
      )}
    </div>
  );
};

export default AvatarFileInput;
