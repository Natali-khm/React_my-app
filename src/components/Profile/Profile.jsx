import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <ProfileInfo profile={props.profile} status = {props.status} updateStatus = {props.updateStatus}/>
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
