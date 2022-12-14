import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.userId ? { ...u, followed: true } : u
        ),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.userId ? { ...u, followed: false } : u
        ),
      };
    }
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.totalUsersCount };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.toggleFollProg
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    }
    default:
      return state;
  }
};

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleIsFollowingProgress = (toggleFollProg, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  toggleFollProg,
  userId,
});

export const getUsersThunkCreator = (pageSize, currentPage) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));

    usersAPI.getUsers(pageSize, currentPage).then((data) => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  };
};

export const unfollowThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId));

    usersAPI.unfollow(userId).then((response) => {
      if (!response.data.resultCode) {
        dispatch(unfollow(userId));
      }

      dispatch(toggleIsFollowingProgress(false, userId));
    });
  };
};

export const followThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    usersAPI.follow(userId).then((response) => {
      if (!response.resultCode) {
        dispatch(follow(userId));
      }
      dispatch(toggleIsFollowingProgress(false, userId));
    });
  };
};
