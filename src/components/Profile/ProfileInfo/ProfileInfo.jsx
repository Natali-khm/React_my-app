import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <img className={s.backgroundImage} src="banner.jpg" />
      <div className={s.descriptionBlock}>
        <div className={s.avatarBlock}>
          <img className={s.avatarImage} src="avatar.jpg" />
        </div>

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
    </div>
  );
};

export default ProfileInfo;
