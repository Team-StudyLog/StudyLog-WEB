import type { CategoryResponse } from "../../types/apis/record";
import { instance } from "../instance.ts";
import type { ApiResponse } from "../../types/apis/commonType.ts";
import { useQuery } from "@tanstack/react-query";
import { queryKey } from "../../constants/queryKey.ts";
import { END_POINT } from "../../constants/api.ts";

const fetchCategoryList = async (): Promise<CategoryResponse[]> => {
  try {
    const response = await instance.get<ApiResponse<CategoryResponse[]>>(
      END_POINT.FETCH_CATEGORIES
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

export const useFetchCategoryList = () => {
  return useQuery({
    queryKey: [queryKey.CATEGORIES],
    queryFn: fetchCategoryList,
  });
};
