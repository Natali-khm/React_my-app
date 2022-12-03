import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let newMessage = React.createRef();

  let addMessage = () => {
    let text = newMessage.current.value;
    alert(text);
  };
  let dialogsElements = props.dialogsPage.dialogsData.map((dialog) => (
    <DialogItem
      name={dialog.name}
      id={dialog.id}
      avatar={dialog.avatar}
      key={dialog.id.toString()}
    />
  ));

  let messagesElements = props.dialogsPage.messagesData.map((text, index) => (
    <Message text={text.message} key={index} />
  ));

  return (
    <div className={s.dialogs}>
      <ul className={s.dialogsItems}>{dialogsElements}</ul>
      <div>
        <div className={s.messages}>{messagesElements}</div>
        <textarea></textarea>
        <button onClick={addMessage} ref={newMessage}>
          Send message
        </button>
      </div>
    </div>
  );
};

export default Dialogs;
