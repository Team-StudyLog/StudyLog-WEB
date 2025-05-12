import axios from "axios";
import { BASE_URL } from "../constants/api.ts";

export const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});
