import React from "react";
import MyPosts from "./MyPosts/MyPosts.jsx";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <ProfileInfo />
      <MyPosts
        postsData={props.state.postsData}
        addPost={props.addPost}
        newPostText={props.state.newPostText}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};

export default Profile;
