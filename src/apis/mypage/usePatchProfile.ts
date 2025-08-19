import { instance } from "../instance.ts";
import type { ApiResponse } from "../../types/apis/commonType.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { END_POINT } from "../../constants/api.ts";
import { queryKey } from "../../constants/queryKey.ts";
import type { UserProfileResponse } from "../../types/apis/mypage";
import useEasyNavigate from "../../hooks/useEasyNavigate.ts";
import { toast } from "react-toastify";

const patchProfile = async (
  profileImage: File | undefined,
  nickname: string,
  intro: string
): Promise<UserProfileResponse> => {
  try {
    const formData = new FormData();
    if (profileImage) {
      formData.append("profileImage", profileImage);
    }
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

export const usePatchProfile = () => {
  const { goBack } = useEasyNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      profileImage,
      nickname,
      intro,
    }: {
      profileImage: File;
      nickname: string;
      intro: string;
    }) => patchProfile(profileImage, nickname, intro),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: [queryKey.USER_PROFILE],
      });
      void queryClient.invalidateQueries({
        queryKey: [queryKey.MY_PAGE],
      });
      toast.success("프로필 업데이트 성공");
      goBack();
    },
    onError: () => {
      console.error("프로필 업데이트 실패");
      toast.error("프로필 업데이트에 실패했습니다. 다시 시도해주세요.");
    },
  });
};
