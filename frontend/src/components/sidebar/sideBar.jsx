import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./sideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const sideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "light";
  });

  useEffect(() => {
    const currentTheme = isLightMode ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("theme", currentTheme);
  }, [isLightMode]);

  const handleNavigationClick = () => {
    if (isDrawerOpen) {
      setIsDrawerOpen(false);
    }
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    const mainContent = document.querySelector(".main-content");
    if (mainContent) {
      mainContent.style.marginLeft = !isCollapsed ? "100px" : "250px";
    }
  };

  const handleThemeChange = (event) => {
    setIsLightMode(event.target.checked);
  };

  return (
    <div
      className={`sidebar ${
        isCollapsed ? "collapsed" : ""
      } dark:bg-[#292929] dark:text-white light:bg-gray-200`}
    >
      <div className="toggle-button" onClick={toggleSidebar}>
        <span className="toggle-icon light:text-black">
          {isCollapsed ? "☰" : "✕"}
        </span>
      </div>

      <h2 className="text-center light:text-black">My Portfolio</h2>

      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              "tab-link" +
              (isActive ? " active dark:bg-[#1a1a1a] light:bg-gray-500" : "")
            }
            onClick={handleNavigationClick}
          >
            <FontAwesomeIcon icon={faHouse} className="icon light:text-black" />
            {!isCollapsed && <span className="light:text-black">Home</span>}
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/experience"
            className={({ isActive }) =>
              "tab-link" +
              (isActive ? " active dark:bg-[#1a1a1a] light:bg-gray-500" : "")
            }
            onClick={handleNavigationClick}
          >
            <FontAwesomeIcon icon={faPen} className="icon light:text-black" />
            {!isCollapsed && (
              <span className="light:text-black">Experience</span>
            )}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/education"
            className={({ isActive }) =>
              "tab-link" +
              (isActive ? " active dark:bg-[#1a1a1a] light:bg-gray-500" : "")
            }
            onClick={handleNavigationClick}
          >
            <FontAwesomeIcon
              icon={faBookOpen}
              className="icon light:text-black"
            />
            {!isCollapsed && (
              <span className="light:text-black">Education</span>
            )}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/project"
            className={({ isActive }) =>
              "tab-link" +
              (isActive ? " active dark:bg-[#1a1a1a] light:bg-gray-500" : "")
            }
            onClick={handleNavigationClick}
          >
            <FontAwesomeIcon
              icon={faFolderOpen}
              className="icon light:text-black"
            />
            {!isCollapsed && <span className="light:text-black">Project</span>}
          </NavLink>
        </li>

        <li className="nav-item">
          <label
            htmlFor="Light-Dark-mode-checkbox"
            className="switch tab-link"
            style={{ cursor: "pointer" }}
          >
            <input
              id="Light-Dark-mode-checkbox"
              type="checkbox"
              onChange={handleThemeChange}
              checked={isLightMode}
              hidden
            />
            <FontAwesomeIcon
              icon={isLightMode ? faMoon : faSun}
              className="icon light:text-black"
            />
            {!isCollapsed && (
              <span className="light:text-black">
                {isLightMode ? "Dark Mode" : "Light Mode"}
              </span>
            )}
          </label>
        </li>
      </ul>
    </div>
  );
};

export default sideBar;
