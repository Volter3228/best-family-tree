import { useState } from "react";
import {
  PlusIcon,
  ViewfinderCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Drawer from "../drawer/Drawer";
import AddMemberForm from "../drawer/form/addMember/AddMemberForm";
import ToolbarIconButton from "../ToolbarIconButton";

interface PixiSidebarProps {
  onFitView: () => void;
}

export default function PixiSidebar({ onFitView }: PixiSidebarProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const handleAddMemberClick = () => {
    toggleDrawer();
  };

  const handleShowFamilyClick = () => {
    console.log("show family");
  };

  const handleFitViewClick = () => {
    onFitView();
  };

  return (
    <>
      <div className="absolute top-4 left-4 z-40">
        <div className="flex flex-col bg-violet-900 shadow-2xl rounded-xl p-2 gap-y-2">
          <ToolbarIconButton
            title="Add Member"
            onClick={handleAddMemberClick}
            icon={PlusIcon}
            isActive={isDrawerOpen}
          />
          <ToolbarIconButton
            title="Show Family"
            onClick={handleShowFamilyClick}
            icon={UsersIcon}
          />
          <ToolbarIconButton
            title="Fit View"
            onClick={handleFitViewClick}
            icon={ViewfinderCircleIcon}
          />
        </div>
      </div>
      <Drawer
        headerTitle="Додати мембера"
        onClose={toggleDrawer}
        isOpen={isDrawerOpen}
        className="z-20"
      >
        <AddMemberForm />
      </Drawer>
    </>
  );
}
