import React from "react";
import { createPortal } from "react-dom";
import { XMarkIcon } from "@heroicons/react/24/outline"; // Tailwind Heroicons
import "./styles/drawer.css";

interface IProps {
  headerTitle?: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  className?: string;
}

const Drawer: React.FC<IProps> = ({
  isOpen,
  onClose,
  headerTitle = "Drawer Header",
  children,
  className = "",
}) => {
  return (
    /*createPortal */ <div
      className={`
        fixed top-0 right-0 h-full w-dvw md:min-w-128 md:w-2/3 lg:w-1/3 xl:w-1/4 bg-white
        shadow-[-15px_0_36px_2px_rgba(0,0,0,0.2)] transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } duration-300 ${className}
      `}
    >
      <div className="flex justify-between items-center p-4 border-b bg-primary">
        <h2 className="text-xl font-bold text-slate-50 pointer-events-none">
          {headerTitle}
        </h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <XMarkIcon className="h-6 w-6 stroke-slate-50 hover:stroke-2" />
        </button>
      </div>
      <div className="p-6">{children}</div>
    </div>
    // document.body
  );
};

export default React.memo(Drawer);
