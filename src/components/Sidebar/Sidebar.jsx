import s from "./Sidebar.module.css";

const Sidebar = (props) => {
  const friends = props.state.map((friend) => (
    <a href="#" key={friend.id} className={s.friend}>
      <div className={s.friendBlock}>
        <div className={s.avatarBlock}>
          <img className={s.avatar} src={friend.avatar} />
        </div>
        <div className={s.friendName}>{friend.name}</div>
      </div>
    </a>
  ));

  return (
    <div className={s.sidebar}>
      <p className={s.item}>Friends</p>
      <div>{friends}</div>
    </div>
  );
};
export default Sidebar;
