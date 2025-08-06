import type { ApiResponse } from "../../types/apis/commonType.ts";
import type { CategoryResponse } from "../../types/apis/record";
import { instance } from "../instance.ts";
import { useMutation } from "@tanstack/react-query";
import { END_POINT } from "../../constants/api.ts";
import queryClient from "../../utils/queryClient.ts";
import { queryKey } from "../../constants/queryKey.ts";

const postCategory = async (
  name: string,
  color: string
): Promise<CategoryResponse> => {
  try {
    const response = await instance.post<ApiResponse<CategoryResponse>>(
      END_POINT.POST_CATEGORY,
      { name: name, color: color }
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const usePostCategory = (name: string, color: string) => {
  return useMutation({
    mutationFn: () => postCategory(name, color),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKey.CATEGORIES],
      });
    },
  });
};
