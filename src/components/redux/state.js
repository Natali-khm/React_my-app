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
  _addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.postsData.push(newPost);
    this._state.profilePage.newPostText = "";

    this._callSubscriber(this._state);
  },
  _updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  dispatch(action) {
    if (action.type === "ADD-POST") {
      this._addPost();
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._updateNewPostText(action.newNext);
    }
  },
};

export default store;

/* let renderEntireTree = () => {};

let state = {
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
};

window.state = state;

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = "";

  renderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  renderEntireTree(state);
};

export const subscribe = (observer) => {
  renderEntireTree = observer;
};

export default state;
 */
