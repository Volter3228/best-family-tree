"use client";

import React from "react";
import {
  XCircleIcon,
  PencilSquareIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/solid"; // Tailwind Heroicons
import { DrawerMode } from "@/types";
import "./styles/drawer.css";

interface Props {
  headerTitle?: string;
  isOpen: boolean;
  onClose: () => void;
  onEditClick?: () => void;
  onBackClick?: () => void;
  mode?: DrawerMode;
  className?: string;
  children?: React.ReactNode;
}

const Drawer = ({
  isOpen,
  onClose,
  onEditClick,
  onBackClick,
  headerTitle = "Drawer Header",
  children,
  mode,
  className = "",
}: Props) => {
  return (
    <div
      className={`
        fixed top-0 right-0 h-full w-dvw md:min-w-lg md:w-2/3 lg:w-1/3 xl:w-1/4 bg-white
       transform transition-transform ${
         isOpen
           ? "translate-x-0 shadow-[-15px_0_36px_2px_rgba(0,0,0,0.2)]"
           : "translate-x-full"
       } duration-300 ${className}
      `}
    >
      <div className="flex justify-between items-center p-4 border-b bg-primary">
        <h2 className="text-xl font-bold text-slate-50 flex items-center">
          {mode === "edit" && (
            <button
              onClick={onBackClick}
              className="text-slate-50 hover:text-purple-300 transition-colors duration-200 ease-out"
              title="Назад"
            >
              <ArrowLeftIcon className="h-6 w-6" />
            </button>
          )}
          <span className="ml-2 pointer-events-none">{headerTitle}</span>
        </h2>
        <div className="flex gap-2">
          {mode === "info" && (
            <button
              onClick={onEditClick}
              className="text-slate-50 hover:text-purple-300 transition-colors duration-200 ease-out"
              title="Редагувати"
            >
              <PencilSquareIcon className="h-6 w-6" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-slate-50 hover:text-purple-300 transition-colors duration-200 ease-out"
            title="Закрити"
          >
            <XCircleIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div className="drawer-content p-6 overflow-y-auto">{children}</div>
    </div>
  );
};

export default React.memo(Drawer);
