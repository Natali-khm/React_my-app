const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = "";

      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const updateNewTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default store;
