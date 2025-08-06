import axios from "axios";
import { BASE_URL } from "../constants/api.ts";
import { storageKey } from "../constants/storageKey.ts";
import { usePostTokenReissue } from "./auth/usePostTokenReissue.ts";

export const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem(storageKey.ACCESS_TOKEN);
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

instance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await usePostTokenReissue();
        return instance(originalRequest);
      } catch (e) {
        // TODO: 로그아웃 처리
        return Promise.reject(e);
      }
    }

    return Promise.reject(error);
  }
);
