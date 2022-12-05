const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const updateNewTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

let initialState = {
  postsData: [
    { id: 1, message: "It's my first post", likesCount: 12 },
    { id: 2, message: "How are you?", likesCount: 0 },
  ],
  newPostText: "it-kamasutra",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      state.postsData.push(newPost);
      state.newPostText = "";
      return state;
    }
    case UPDATE_NEW_POST_TEXT: {
      state.newPostText = action.newText;
      return state;
    }
    default: {
      return state;
    }
  }

  return state;
};
