import { instance } from "../instance.ts";
import type { ApiResponse } from "../../types/apis/commonType.ts";
import { useMutation } from "@tanstack/react-query";
import { END_POINT } from "../../constants/api.ts";
import { storageKey } from "../../constants/storageKey.ts";
import useEasyNavigate from "../../hooks/useEasyNavigate.ts";

interface PostSignupResponse {
  profileImage: string;
  nickname: string;
  intro: string;
  code: string;
}

const postSignup = async (
  profileImage: File,
  nickname: string,
  intro: string
): Promise<PostSignupResponse> => {
  try {
    const formData = new FormData();
    formData.append("profileImage", profileImage);
    formData.append("nickname", nickname);
    formData.append("intro", intro);

    const response = await instance.post<ApiResponse<PostSignupResponse>>(
      END_POINT.POST_SIGNUP,
      formData
    );
    return response.data.data;
  } catch (error) {
    console.error("Error during signup:", error);
    throw error;
  }
};

export const usePostSignup = () => {
  const { goMainPage } = useEasyNavigate();
  return useMutation({
    mutationFn: ({
      profileImage,
      nickname,
      intro,
    }: {
      profileImage: File;
      nickname: string;
      intro: string;
    }) => postSignup(profileImage, nickname, intro),
    onSuccess: (data) => {
      console.log(`Signup Successful ${data}`);
      localStorage.setItem(storageKey.IS_LOGGED_IN, "true");
      localStorage.setItem(storageKey.USER_CODE, data.code);
      goMainPage(data.code);
    },
    onError: (error) => {
      console.error("Signup failed:", error);
    },
  });
};
