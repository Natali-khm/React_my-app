import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.logoBlock}>
        <img src="logo.png" />
        SocialV
      </div>
      <div className={s.loginBlock}>
        <NavLink to={"login"}>{props.isAuth ? props.login : "Login"}</NavLink>
      </div>
    </header>
  );
};

export default Header;
