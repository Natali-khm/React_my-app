import React from "react";
import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";

const DialogItem = (props) => {
  return (
    <li>
      <NavLink className={s.dialog} to={"/dialogs/" + props.id}>
        <div>
          <div className={s.avatarBlock}>
            <img className={s.avatar} src={props.avatar} />
          </div>
          {props.name}
        </div>
      </NavLink>
    </li>
  );
};

export default DialogItem;
