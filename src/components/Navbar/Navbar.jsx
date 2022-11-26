import React from "react";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
        <li>
          <a className={s.item} href="#">
            Profile
          </a>
        </li>
        <li>
          <a className={s.item} href="#">
            Messages
          </a>
        </li>
        <li>
          <a className={s.item} href="#">
            News
          </a>
        </li>
        <li>
          <a className={`${s.item} ${s.active}`} href="#">
            Music
          </a>
        </li>
        <li>
          <a className={s.item} href="#">
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
