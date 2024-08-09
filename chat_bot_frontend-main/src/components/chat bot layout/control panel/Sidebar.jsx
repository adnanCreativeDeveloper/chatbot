import React, { useContext, useState } from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarBody from "./SidebarBody";
import UserSettingForMobileScreens from "../prompts and responses/user settings/UserSettingForMobileScreens";
import ToggleContext from "../../use context/UseContext";

function Sidebar({ chatArray }) {
  const { sidebarToggleSidebar, handleToggleSidebar } =
    useContext(ToggleContext);
  // console.log(sidebarToggleSidebar);
  return (
    <>
      {/* <div
        onClick={handleToggleSidebar}
        className={`fixed overflow-hidden opacity-100 bg-red-800 duration-200 ${
          sidebarToggleSidebar
            ? "bg-black/45 opacity-100 z-50"
            : "bg-black/0 opacity-0 -z-50"
        } w-full`}></div> */}
      <div
        className={`sidebar xl:static lg:static md:static 
          fixed left-0 top-0 z-10 h-screen overflow-hidden bg-neutral-900 transition-all 
          duration-300
          ${sidebarToggleSidebar ? "w-64 px-2.5" : "w-0"}`}>
        <SidebarHeader />
        <SidebarBody chatArray={chatArray} />
        <UserSettingForMobileScreens />
      </div>
    </>
  );
}

export default Sidebar;
