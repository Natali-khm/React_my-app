import React from "react";
import s from "./ProfileInfo.module.css";
import backgrImg from "../../../assets/images/banner.jpg";
import Preloader from "../../../common/preloader/preloader";
import caseImg from "../../../assets/images/briefcase.png";
import userImg from "../../../assets/images/user.png";

const ProfileInfo = (props) => {
  if (!props.profile) return <Preloader />;
  const contacts = props.profile.contacts;

  let arr = Object.entries(contacts);

  let result = arr.map((el) => {
    return el[1] ? (
      <li>
        {`${el[0]}: `}
        <a href="#">{el[1]}</a>
      </li>
    ) : null;
  });
  return (
    <div>
      <img className={s.backgroundImage} src={backgrImg} />
      <div className={s.descriptionBlock}>
        <div className={s.avatarBlock}>
          <img
            className={s.avatarImage}
            src={props.profile.photos.small || userImg}
          />
        </div>

        <div className={s.personalData}>
          <h2>{props.profile.fullName} </h2>
          <ul className={s.profileInfo}>
            <li>
              about me: <span>{props.profile.aboutMe}</span>
            </li>
            {result}
            <li>
              {props.profile.lookingForAJob ? (
                <div>
                  <img src={caseImg} /> looking for a job
                  <div>{props.profile.lookingForAJobDescription}</div>
                </div>
              ) : null}
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
