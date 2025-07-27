import { instance } from "../instance.ts";
import type { ApiResponse } from "../../types/apis/commonType.ts";
import { useMutation } from "@tanstack/react-query";

interface SignupResponse {
  profileImage: string;
  nickname: string;
  intro: string;
}

const postSignup = async (
  profileImage: File,
  nickname: string,
  intro: string
): Promise<SignupResponse> => {
  try {
    const formData = new FormData();
    formData.append("profileImage", profileImage);
    formData.append("nickname", nickname);
    formData.append("intro", intro);

    const response = await instance.post<ApiResponse<SignupResponse>>(
      "/users/profile",
      formData
    );
    return response.data.data;
  } catch (error) {
    console.error("Error during signup:", error);
    throw error;
  }
};

export const usePostSignup = (
  profileImage: File,
  nickname: string,
  intro: string
) => {
  return useMutation({
    mutationFn: () => postSignup(profileImage, nickname, intro),
    onSuccess: () => {
      console.log("Signup Successful");
    },
  });
};
