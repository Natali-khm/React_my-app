import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = () => {
  const postsData = [
    { id: 1, message: "It's my first post", likesCount: 12 },
    { id: 2, message: "How are you?", likesCount: 0 },
  ];

  let postsElements = postsData.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

  return (
    <div className={s.postsBlock}>
      <textarea></textarea>
      <button>New post</button>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
