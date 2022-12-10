import React from "react";
import s from "./Users.module.css";
import axios from "axios";
import userPhoto from "../../assets/images/user.png";
import { ReactReduxContext } from "react-redux";

class User extends React.Component {
  constructor(props) {
    super(props),
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          this.props.setUsers(response.data.items);
        });
  }

  render() {
    return (
      <div className={s.container}>
        <button onClick={this.getUsers}>Get users</button>

        {this.props.users.map((u) => (
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
                    this.props.unfollow(u.id);
                  }}
                >
                  Follow
                </button>
              ) : (
                <button
                  onClick={() => {
                    this.props.follow(u.id);
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
  }
}

/* const User = (props) => {
  const getUsers = () => {
    if (!props.users.length) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          debugger;
          props.setUsers(response.data.items);
        });
    }
  };

  return (
    <div className={s.container}>
      <button onClick={getUsers}>Get users</button>

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
            <p>{ u.location.country }</p>
            <p>{ u.location.city }</p>
          </div>
        </div>
      ))}
    </div>
  );
}; */
export default User;
/* [
    {
      id: 1,
      followed: true,
      fullName: "Nastya",
      status: "let's be friends",
      location: { city: "Minsk", country: "Belarus" },
      photoUrl: "https://s4.vcdn.biz/static/f/2314847371/image.jpg",
    },
    {
      id: 2,
      followed: false,
      fullName: "Sergey",
      status: "I'am free",
      location: { city: "NY", country: "USA" },
      photoUrl: "https://s4.vcdn.biz/static/f/2314847371/image.jpg",
    },
    {
      id: 3,
      followed: false,
      fullName: "Kseniya",
      status: "24 hours left...",
      location: { city: "Kiev", country: "Ukrain" },
      photoUrl: "https://s4.vcdn.biz/static/f/2314847371/image.jpg",
    },
    {
      id: 4,
      followed: true,
      fullName: "Lena",
      status: "Woohoo",
      location: { city: "Klaipeda", country: "Litva" },
      photoUrl: "https://s4.vcdn.biz/static/f/2314847371/image.jpg",
    },
  ] */
