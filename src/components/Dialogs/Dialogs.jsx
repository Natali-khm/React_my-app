import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogsElements = state.dialogsData.map((dialog) => (
    <DialogItem
      name={dialog.name}
      id={dialog.id}
      avatar={dialog.avatar}
      key={dialog.id.toString()}
    />
  ));

  let messagesElements = state.messagesData.map((text, index) => (
    <Message text={text.message} key={index} />
  ));

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  const onNewMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessageBody(text);
  };

  return (
    <div className={s.dialogs}>
      <ul className={s.dialogsItems}>{dialogsElements}</ul>
      <div>
        <div className={s.messages}>{messagesElements}</div>
        <div className={s.inputBlock}>
          <textarea
            placeholder="Enter your message"
            value={state.newMessageBody}
            onChange={onNewMessageChange}
          ></textarea>
          <button onClick={onSendMessageClick}>Send message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
