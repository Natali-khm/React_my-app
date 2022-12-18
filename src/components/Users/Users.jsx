import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api/api";

const Users = (props) => {
  /*   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
   */
  let firstPage = props.currentPage === 1 ? null : props.currentPage - 1;
  let pages = firstPage
    ? [firstPage, props.currentPage, props.currentPage + 1]
    : [props.currentPage, props.currentPage + 1];
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
            <NavLink to={`/profile/ ${u.id}`}>
              <img
                src={u.photos.small ? u.photos.small : userPhoto}
                className={s.avatar}
              />
            </NavLink>

            {u.followed ? (
              <button
                disabled={props.followingInProgress.some((id) => id === u.id)}
                onClick={() => {
                  props.unfollow(u.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                disabled={props.followingInProgress.some((id) => id === u.id)}
                onClick={() => {
                  props.follow(u.id);
                }}
              >
                Follow
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
