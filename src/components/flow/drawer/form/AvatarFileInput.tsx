import { useState } from "react";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/16/solid";
import LionIcon from "@/components/icons/Lion";

interface IProps {
  initialImage?: string;
  onImageSelect: (file: File | null) => void;
}

const AvatarFileInput: React.FC<IProps> = ({ initialImage, onImageSelect }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(
    initialImage || null
  );

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      onImageSelect(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    onImageSelect(null);
  };

  return (
    <div className="relative w-32 h-32">
      <label className="group cursor-pointer relative block w-full h-full">
        {selectedImage ? (
          <Image
            src={selectedImage}
            alt="Avatar"
            className="rounded-full"
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
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
        <div
          className="
            absolute inset-0 rounded-full group-hover:bg-accent-darken group-hover:bg-opacity-30
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
            text-sm rounded-full p-1 hover:bg-accent-darken focus:outline-none
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
