import { useState } from "react";
import {
  PlusIcon,
  ViewfinderCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { Panel, useReactFlow } from "@xyflow/react";
import Drawer from "../drawer/Drawer";
import AddMemberForm from "../drawer/form/addMember/AddMemberForm";
import SidebarIconButton from "./SidebarIconButton";

export default function Sidebar() {
  const { fitView } = useReactFlow();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const handleAddMemberClick = () => {
    toggleDrawer();
  };

  const handleShowFamilyClick = () => {
    console.log("show family");
  };

  const handleFitViewClick = () => {
    fitView({ duration: 300 });
  };

  return (
    <>
      <Panel position="top-left">
        <div className="flex flex-col bg-violet-900 shadow-2xl rounded-xl p-2 gap-y-2">
          <SidebarIconButton
            title="Add Member"
            onClick={handleAddMemberClick}
            icon={PlusIcon}
          />
          <SidebarIconButton
            title="Show Family"
            onClick={handleShowFamilyClick}
            icon={UsersIcon}
          />
          <SidebarIconButton
            title="Fit View"
            onClick={handleFitViewClick}
            icon={ViewfinderCircleIcon}
          />
        </div>
      </Panel>
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
