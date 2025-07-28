import { instance } from "../instance.ts";
import type { ApiResponse } from "../../types/apis/commonType.ts";
import { useMutation } from "@tanstack/react-query";
import queryClient from "../../utils/queryClient.ts";
import { END_POINT } from "../../constants/api.ts";
import { queryKey } from "../../constants/queryKey.ts";
import type { UserProfileResponse } from "../../types/apis/mypage";

const patchProfile = async (
  profileImage: File,
  nickname: string,
  intro: string
): Promise<UserProfileResponse> => {
  try {
    const formData = new FormData();
    formData.append("profileImage", profileImage);
    formData.append("nickname", nickname);
    formData.append("intro", intro);
    const response = await instance.patch<ApiResponse<UserProfileResponse>>(
      END_POINT.PATCH_USER_PROFILE,
      formData
    );
    return response.data.data;
  } catch (error) {
    console.error("Error updating profile:", error);
    throw error;
  }
};

export const usePatchProfile = (
  profileImage: File,
  nickname: string,
  intro: string
) => {
  return useMutation({
    mutationFn: () => patchProfile(profileImage, nickname, intro),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKey.USER_PROFILE],
      });
      queryClient.invalidateQueries({
        queryKey: [queryKey.MY_PAGE],
      });
    },
  });
};
