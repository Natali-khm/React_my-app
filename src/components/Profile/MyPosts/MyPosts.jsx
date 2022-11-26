import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = () => {
  return (
    <div>
      <textarea></textarea>
      <button>New post</button>
      <Post />
      <Post />
    </div>
  );
};

export default MyPosts;
