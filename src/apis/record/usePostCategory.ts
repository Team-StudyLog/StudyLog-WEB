import type { ApiResponse } from "../../types/apis/commonType.ts";
import type { CategoryResponse } from "../../types/apis/record";
import { instance } from "../instance.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { END_POINT } from "../../constants/api.ts";
import { queryKey } from "../../constants/queryKey.ts";
import useEasyNavigate from "../../hooks/useEasyNavigate.ts";

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

export const usePostCategory = () => {
  const { goBack } = useEasyNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ name, color }: { name: string; color: string }) =>
      postCategory(name, color),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [queryKey.CATEGORIES],
      });
      await queryClient.invalidateQueries({
        queryKey: [queryKey.USER_MAIN],
      });
      goBack();
    },
  });
};
