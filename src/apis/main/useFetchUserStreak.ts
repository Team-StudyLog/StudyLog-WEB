import { instance } from "../instance.ts";
import type { ApiResponse } from "../../types/apis/commonType.ts";
import { END_POINT } from "../../constants/api.ts";
import { useQuery } from "@tanstack/react-query";
import { queryKey } from "../../constants/queryKey.ts";

const fetchUserStreak = async (
  year: string,
  month: string
): Promise<Record<string, number>> => {
  try {
    const response = await instance.get<ApiResponse<Record<string, number>>>(
      END_POINT.FETCH_USER_STREAK,
      { params: { year, month } }
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const useFetchUserStreak = (year: string, month: string) => {
  return useQuery({
    queryKey: [queryKey.USER_STREAK, year, month],
    queryFn: () => fetchUserStreak(year, month),
  });
};
