import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
import Sidebar from "../Sidebar/Sidebar.jsx";
import SidebarContainer from "../Sidebar/SidebarConainer";

const Navbar = (props) => {
  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
        <li className={s.item}>
          <NavLink
            className={(navData) => (navData.isActive ? s.active : s.item)}
            to="/profile"
          >
            Profile
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            className={(navData) => (navData.isActive ? s.active : s.item)}
            to="/dialogs"
          >
            Messages
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            className={(navData) => (navData.isActive ? s.active : s.item)}
            to="/news"
          >
            News
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            className={(navData) => (navData.isActive ? s.active : s.item)}
            to="/users"
          >
            Users
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            className={(navData) => (navData.isActive ? s.active : s.item)}
            to="/music"
          >
            Music
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            className={(navData) => (navData.isActive ? s.active : s.item)}
            to="/settings"
          >
            Settings
          </NavLink>
        </li>
      </ul>
      <div>
        <SidebarContainer />
      </div>
    </nav>
  );
};

export default Navbar;
