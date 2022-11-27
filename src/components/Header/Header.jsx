import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logoBlock}>
        <img src="logo.png" />
        SocialV
      </div>
    </header>
  );
};

export default Header;
