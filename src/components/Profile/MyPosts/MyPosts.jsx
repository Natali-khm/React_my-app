import React from "react";
import {
  addPostActionCreator,
  updateNewTextActionCreator,
} from "../../redux/profile_reducer";

import s from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = (props) => {
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let postsElements = props.postsData.map((post) => (
    <Post
      message={post.message}
      likesCount={post.likesCount}
      key={post.id.toString()}
    />
  ));

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewTextActionCreator(text));
  };

  return (
    <div className={s.postsBlock}>
      <textarea
        ref={newPostElement}
        value={props.newPostText}
        onChange={onPostChange}
      />
      <button onClick={addPost}>New post</button>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
