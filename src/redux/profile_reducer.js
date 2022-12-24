import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  postsData: [
    { id: 1, message: "It's my first post", likesCount: 12 },
    { id: 2, message: "How are you?", likesCount: 0 },
  ],
  newPostText: "it-kamasutra",
  profile: null,
  status: "",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        postsData: [
          ...state.postsData,
          { id: 5, message: state.newPostText, likesCount: 0 },
        ],
        newPostText: "",
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newText };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.statusText };
    }
    default: {
      return state;
    }
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const updateNewTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setStatus = (statusText) => ({
  type: SET_STATUS,
  statusText,
});

export const getProfileThunkCreator = (newUserId) => {
  return (dispatch) => {
    usersAPI.getProfile(newUserId).then((response) => {
      dispatch(setUserProfile(response.data));
    });
  };
};

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((response) => {
    dispatch(setStatus(response.data));
  });
};

export const updateStatus = (statusText) => (dispatch) => {
  profileAPI.updateStatus(statusText).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(statusText));
    }
  });
};
