import React from "react";
import MyPosts from "./MyPosts/MyPosts.jsx";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <img
        className={s.backgroundImage}
        src="https://m-dekor.by/catalog/3078/main.webp"
      />
      <div>
        <img className={s.avatar} src="40060.svg" />
        <div className={s.personalData}>
          <h2>Natka</h2>
          <ul className={s.personalDataList}>
            <li>Date of birth: 1 November</li>
            <li>City: Minsk</li>
            <li>Education: BGEU</li>
            <li>Web Site: https://github.com/Natali-khm</li>
          </ul>
        </div>
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
