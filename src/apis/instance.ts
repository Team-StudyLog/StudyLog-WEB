import axios from "axios";
import { BASE_URL, END_POINT } from "../constants/api.ts";

export const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

instance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await instance.post(END_POINT.POST_TOKEN_REISSUE);
        return instance(originalRequest);
      } catch (e) {
        // TODO: 로그아웃 처리
        return Promise.reject(e);
      }
    }

    return Promise.reject(error);
  }
);
