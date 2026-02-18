import { useState, memo } from "react";
import {
  PlusIcon,
  ViewfinderCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Drawer, { AddMemberForm } from "@/components/drawer";
import SidebarIconButton from "./SidebarIconButton";

interface Props {
  onFitView: () => void;
}

const Sidebar = ({ onFitView }: Props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setIsDrawerOpen(false);

  const handleShowFamilyClick = () => {
    console.log("show family");
  };

  return (
    <>
      <div className="absolute top-4 left-4 z-40">
        <div className="flex flex-col bg-violet-900 shadow-2xl rounded-xl p-2 gap-y-2">
          <SidebarIconButton
            title="Add Member"
            onClick={toggleDrawer}
            icon={PlusIcon}
            isActive={isDrawerOpen}
          />
          <SidebarIconButton
            title="Show Family"
            onClick={handleShowFamilyClick}
            icon={UsersIcon}
          />
          <SidebarIconButton
            title="Fit View"
            onClick={onFitView}
            icon={ViewfinderCircleIcon}
          />
        </div>
      </div>
      <Drawer
        headerTitle="Додати"
        onClose={closeDrawer}
        isOpen={isDrawerOpen}
        className="z-20"
      >
        <AddMemberForm onSuccess={closeDrawer} />
      </Drawer>
    </>
  );
};

export default memo(Sidebar);
