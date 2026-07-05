"use client";

import React from "react";
import {
  XCircleIcon,
  PencilSquareIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/solid"; // Tailwind Heroicons
import { twMerge } from "tailwind-merge";
import { DrawerMode } from "@/types";
import "./styles/drawer.css";

interface Props {
  id?: string;
  mode?: DrawerMode;
  headerTitle?: string;
  isOpen: boolean;
  onClose: () => void;
  onEditClick?: () => void;
  onBackClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

const Drawer = ({
  id,
  mode,
  isOpen,
  headerTitle = "Drawer Header",
  onClose,
  onEditClick,
  onBackClick,
  className = "",
  children,
}: Props) => {
  return (
    <div
      id={id}
      className={twMerge(
        "fixed inset-y-0 right-0 flex w-dvw justify-end p-2 pb-24 items-end md:items-center md:min-w-lg md:w-2/3 md:p-4 md:pb-4 lg:w-1/3 xl:w-1/4 transform transition-transform duration-300",
        isOpen ? "translate-x-0" : "translate-x-full",
        className,
      )}
    >
      <div className="flex max-h-full min-h-0 w-full flex-col overflow-hidden rounded-2xl bg-white shadow-[-15px_0_36px_2px_rgba(0,0,0,0.2)]">
        <div className="flex shrink-0 justify-between items-center rounded-t-2xl border-b bg-primary p-4">
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
        <div className="drawer-content flex-1 min-h-0 overflow-y-auto p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Drawer);
