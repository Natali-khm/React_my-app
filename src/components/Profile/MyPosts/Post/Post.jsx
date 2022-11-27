import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <div>
        <img src="https://cdn-icons-png.flaticon.com/512/7029/7029984.png" />
        {props.message}
      </div>
      <div>
        <span>
          <b>{props.likesCount}</b> likes
        </span>
      </div>
    </div>
  );
};

export default Post;
