import React from "react";
import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";

const DialogItem = (props) => {
  return (
    <li>
      <NavLink className={s.dialog} to={"/dialogs/" + props.id}>
        {props.name}
      </NavLink>
    </li>
  );
};

export default DialogItem;
