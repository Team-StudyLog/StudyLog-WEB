import { instance } from "../instance.ts";
import type { ApiResponse } from "../../types/apis/commonType.ts";
import { useMutation } from "@tanstack/react-query";
import queryClient from "../../utils/queryClient.ts";
import type { FetchFriendResponse } from "./useFetchFriendSearch.ts";
import { queryKey } from "../../constants/queryKey.ts";
import { END_POINT } from "../../constants/api.ts";
import { useModalActions } from "../../hooks/useModal.ts";

const deleteUnfollow = async (
  friendId: number
): Promise<FetchFriendResponse> => {
  try {
    const response = await instance.delete<ApiResponse<FetchFriendResponse>>(
      END_POINT.DELETE_UNFOLLOW(friendId)
    );
    return response.data.data;
  } catch (error) {
    console.error("Error deleting unfollow:", error);
    throw error;
  }
};

export const useDeleteUnfollow = () => {
  const { closeModal } = useModalActions();

  return useMutation({
    mutationFn: (friendId: number) => deleteUnfollow(friendId),
    onSuccess: () => {
      closeModal();
      queryClient.invalidateQueries({
        queryKey: [queryKey.FRIENDS],
      });
      queryClient.invalidateQueries({
        queryKey: [queryKey.MY_PAGE],
      });
    },
    onError: () => {
      closeModal();
      alert("언팔로우에 실패했습니다. 다시 시도해주세요.");
    },
  });
};
