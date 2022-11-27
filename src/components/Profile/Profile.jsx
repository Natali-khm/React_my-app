import React from "react";
import MyPosts from "./MyPosts/MyPosts.jsx";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

const Profile = () => {
  return (
    <div className={s.profile}>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};

export default Profile;
