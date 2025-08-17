import { instance } from "../instance.ts";
import type { ApiResponse } from "../../types/apis/commonType.ts";
import { END_POINT } from "../../constants/api.ts";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

interface PatchBackgroundResponse {
  coverImage: string;
}

const patchBackground = async (
  coverImage: File
): Promise<PatchBackgroundResponse> => {
  const formData = new FormData();
  formData.append("coverImage", coverImage);

  try {
    const response = await instance.patch<ApiResponse<PatchBackgroundResponse>>(
      END_POINT.PATCH_BACKGROUND,
      formData
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const usePatchBackground = () => {
  return useMutation({
    mutationFn: (coverImage: File) => patchBackground(coverImage),
    onSuccess: () => {
      console.log("배경화면 업데이트 성공");
    },
    onError: () => {
      toast.error("배경화면 업데이트에 실패했습니다. 다시 시도해주세요.");
    },
  });
};
