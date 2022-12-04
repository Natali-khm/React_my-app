import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogs_reducer";

const Dialogs = (props) => {
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

  let onSendMessageClick = () => {
    props.dispatch(sendMessageCreator());
  };

  const onNewMessageChange = (e) => {
    let text = e.target.value;
    props.dispatch(updateNewMessageBodyCreator(text));
  };

  return (
    <div className={s.dialogs}>
      <ul className={s.dialogsItems}>{dialogsElements}</ul>
      <div>
        <div className={s.messages}>{messagesElements}</div>
        <div className={s.inputBlock}>
          <textarea
            placeholder="Enter your message"
            value={props.dialogsPage.newMessageBody}
            onChange={onNewMessageChange}
          ></textarea>
          <button onClick={onSendMessageClick}>Send message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
