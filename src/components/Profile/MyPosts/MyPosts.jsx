import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = () => {
  return (
    <div className={s.postsBlock}>
      <textarea></textarea>
      <button>New post</button>
      <div className={s.posts}>
        <Post message="It's my first post" likesCount="15" />
        <Post message="How are you?" likesCount="0" />
      </div>
    </div>
  );
};

export default MyPosts;
