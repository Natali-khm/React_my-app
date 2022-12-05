import React from "react";
import {
  addPostActionCreator,
  updateNewTextActionCreator,
} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let state = props.store.getState();
  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let postChange = (text) => {
    props.store.dispatch(updateNewTextActionCreator(text));
  };

  return (
    <MyPosts
      addPost={addPost}
      postsData={state.profilePage.postsData}
      updateNewPostText={postChange}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
