import React from "react";
import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={s.item}>
      <div>
        <img src="https://cdn-icons-png.flaticon.com/512/7029/7029984.png" />
        post 1
      </div>
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
