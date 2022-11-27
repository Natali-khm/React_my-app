import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  return (
    <li>
      <NavLink className={s.dialog} to={"/dialogs/" + props.id}>
        {props.name}
      </NavLink>
    </li>
  );
};

const Message = (props) => {
  return <li className={s.message}>{props.text}</li>;
};

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <ul className={s.dialogsItems}>
        <DialogItem name="Lyana" id="1" />
        <DialogItem name="Marina" id="2" />
        <DialogItem name="Tima" id="3" />
        <DialogItem name="Artem" id="4" />
      </ul>
      <ul className={s.messages}>
        <Message text="Good luck!" />
        <Message text="See you soon" />
        <Message text="Whats'up bro" />
        <Message text="WTF" />
      </ul>
    </div>
  );
};

export default Dialogs;
