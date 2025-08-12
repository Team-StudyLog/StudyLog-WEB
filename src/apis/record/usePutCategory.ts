import type { CategoryResponse } from "../../types/apis/record";
import { instance } from "../instance.ts";
import { useMutation } from "@tanstack/react-query";
import queryClient from "../../utils/queryClient.ts";
import { queryKey } from "../../constants/queryKey.ts";
import { END_POINT } from "../../constants/api.ts";

const putCategory = async (
  categoryId: number,
  name: string,
  color: string
): Promise<CategoryResponse> => {
  try {
    const response = await instance.put(END_POINT.PUT_CATEGORY(categoryId), {
      name: name,
      color: color,
    });
    return response.data.data;
  } catch (error) {
    console.error("Error updating category:", error);
    throw error;
  }
};

export const usePutCategory = (
  categoryId: number,
  name: string,
  color: string
) => {
  return useMutation({
    mutationFn: () => putCategory(categoryId, name, color),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: [queryKey.CATEGORIES],
      });
    },
  });
};
