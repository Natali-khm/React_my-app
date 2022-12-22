import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "2633f662-b2f2-4e6e-81fb-23c7d6cdc9f9",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const getAuth = () => {
  debugger
  return instance.get("auth/me").then((response) => response.data);
};

export const usersAPI = {
  getUsers(pageSize = 10, currentPage = 1) {
    return instance
      .get(`users?count=${pageSize}&page=${currentPage}`)
      .then((response) => response.data);
  },

  unfollow(userId) {
    return instance
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },

  follow(userId) {
    return instance
      .post(`follow/${userId}`, null)
      .then((response) => response.data);
  },

  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
};
