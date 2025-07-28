import { instance } from "../instance.ts";
import type { ApiResponse } from "../../types/apis/commonType.ts";
import { useMutation } from "@tanstack/react-query";
import queryClient from "../../utils/queryClient.ts";
import type { FetchFriendResponse } from "./useFetchFriendSearch.ts";
import { queryKey } from "../../constants/queryKey.ts";
import { END_POINT } from "../../constants/api.ts";

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

export const useDeleteUnfollow = (friendId: number) => {
  return useMutation({
    mutationFn: () => deleteUnfollow(friendId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKey.FRIENDS],
      });
      queryClient.invalidateQueries({
        queryKey: [queryKey.MY_PAGE],
      });
    },
  });
};
