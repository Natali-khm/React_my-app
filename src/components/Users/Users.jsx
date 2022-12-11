import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let firstPage = props.currentPage === 1 ? undefined : props.currentPage - 1;
  let pages = [firstPage, props.currentPage, props.currentPage + 1];
  return (
    <div className={s.container}>
      <div>
        {pages.map((p) => {
          return (
            <span
              key={p}
              className={`${
                props.currentPage === p ? s.selectedPage : undefined
              } ${s.page}`}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div className={s.userContainer} key={u.id}>
          <div className={s.avatarContainer}>
            <a href="#">
              <img
                src={u.photos.small ? u.photos.small : userPhoto}
                className={s.avatar}
              />
            </a>
            {u.followed ? (
              <button
                onClick={() => {
                  props.unfollow(u.id);
                }}
              >
                Follow
              </button>
            ) : (
              <button
                onClick={() => {
                  props.follow(u.id);
                }}
              >
                Unfollow
              </button>
            )}
          </div>
          <div>
            <a href="#">{u.name}</a>
            <p> {u.status}</p>
          </div>
          <div className={s.locationContainer}>
            <p>{/* u.location.country */}</p>
            <p>{/* u.location.city */}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
