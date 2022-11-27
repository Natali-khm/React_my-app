import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Lyana" },
    { id: 2, name: "Marina" },
    { id: 3, name: "Tima" },
    { id: 4, name: "Artem" },
  ];

  let messagesData = [
    { id: 1, message: "Good luck!" },
    { id: 2, message: "See you soon" },
    { id: 3, message: "Whats'up bro" },
    { id: 4, message: "WTF" },
  ];

  let dialogsElements = dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = messagesData.map((text) => (
    <Message text={text.message} />
  ));

  return (
    <div className={s.dialogs}>
      <ul className={s.dialogsItems}>{dialogsElements}</ul>
      <ul className={s.messages}>{messagesElements}</ul>
    </div>
  );
};

export default Dialogs;
