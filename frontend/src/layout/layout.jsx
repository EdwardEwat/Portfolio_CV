import React from "react";
import SideBar from "../components/sidebar/sideBar.jsx";

const layout = ({ children }) => {
  return (
    <div>
      <div className="layout">
        <SideBar />
        <div className="main-content dark:bg-[#292929]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
