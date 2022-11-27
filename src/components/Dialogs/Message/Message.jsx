import React from "react";
import s from "./Message.module.css";

const Message = (props) => {
  return <li className={s.message}>{props.text}</li>;
};

export default Message;
