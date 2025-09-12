import { instance } from "../instance.ts";
import type { ApiResponse } from "../../types/apis/commonType.ts";
import { END_POINT } from "../../constants/api.ts";
import { useMutation } from "@tanstack/react-query";
import { useModalActions } from "../../hooks/useModal.ts";
import { toast } from "react-toastify";

interface FetchFriendCodeResponse {
  nickname: string;
}

const fetchFriendCode = async (
  code: string
): Promise<FetchFriendCodeResponse> => {
  try {
    const response = await instance.get<ApiResponse<FetchFriendCodeResponse>>(
      END_POINT.FETCH_FRIEND_CODE,
      { params: { code: code } }
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching friend code:", error);
    throw error;
  }
};

export const useFetchFriendCode = () => {
  const { openModal } = useModalActions();
  return useMutation({
    mutationFn: (code: string) => fetchFriendCode(code),
    onSuccess: (data) => {
      openModal({ name: data.nickname });
    },
    onError: () => {
      toast.error("친구 조회에 실패했습니다. 다시 시도해주세요");
    },
  });
};
