import React from "react";
import { connect } from "react-redux";
import {
  addPostActionCreator,
  updateNewTextActionCreator,
} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";

const mapSatateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => dispatch(addPostActionCreator()),
    updateNewPostText: (text) => dispatch(updateNewTextActionCreator(text)),
  };
};

const MyPostsContainer = connect(mapSatateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
