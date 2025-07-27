export const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const END_POINT = {
  FETCH_MY_PAGE: "/users",
  POST_SIGNUP: "/users/profile",
  FETCH_USER_PROFILE: "/users/profile",
  PATCH_USER_PROFILE: "/users/profile",
  FETCH_FRIENDS: "/friends",
  POST_FOLLOW: "/friends",
  FETCH_FRIEND_CODE: "/friends",
  FETCH_FRIEND_SEARCH: "/friends/search",
  DELETE_UNFOLLOW: (friendId: number) => `/friends/${friendId}`,
};
