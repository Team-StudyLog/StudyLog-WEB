import { instance } from "../instance.ts";
import type { ApiResponse } from "../../types/apis/commonType.ts";
import { useMutation } from "@tanstack/react-query";
import queryClient from "../../utils/queryClient.ts";
import { END_POINT } from "../../constants/api.ts";
import { queryKey } from "../../constants/queryKey.ts";

const postFollow = async (code: string): Promise<null> => {
  try {
    const response = await instance.post<ApiResponse<null>>(
      END_POINT.POST_FOLLOW,
      {
        code: code,
      }
    );
    return response.data.data;
  } catch (error) {
    console.error("Error posting follow:", error);
    throw error;
  }
};

export const usePostFollow = (code: string) => {
  return useMutation({
    mutationFn: () => postFollow(code),
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
