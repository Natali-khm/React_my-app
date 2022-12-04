import { dialogsReducer } from "./dialogs_reducer";
import { profileReducer } from "./profile_reducer";
import { sidebarReducer } from "./sidebar_reducer";

const store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "It's my first post", likesCount: 12 },
        { id: 2, message: "How are you?", likesCount: 0 },
      ],
      newPostText: "it-kamasutra",
    },
    dialogsPage: {
      dialogsData: [
        { id: 1, name: "Lyana", avatar: "lyana.jpg" },
        { id: 2, name: "Marina", avatar: "marina.png" },
        { id: 3, name: "Tima", avatar: "tima.jpg" },
        { id: 4, name: "Artem", avatar: "artem.png" },
      ],
      messagesData: [
        { id: 1, message: "Good luck!" },
        { id: 2, message: "See you soon" },
        { id: 3, message: "Whats'up bro" },
        { id: 4, message: "WTF" },
      ],
      newMessageBody: "",
    },
    sidebar: [
      { id: 1, name: "Lyana", avatar: "lyana.jpg" },
      { id: 2, name: "Marina", avatar: "marina.png" },
      { id: 3, name: "Tima", avatar: "tima.jpg" },
    ],
  },
  _callSubscriber() {},
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
