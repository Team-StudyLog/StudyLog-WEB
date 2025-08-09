import { instance } from "../instance.ts";
import type { ApiResponse } from "../../types/apis/commonType.ts";
import { queryKey } from "../../constants/queryKey.ts";
import { END_POINT } from "../../constants/api.ts";
import { useQuery } from "@tanstack/react-query";

const fetchOtherStreak = async (
  code: string,
  year: string,
  month: string
): Promise<Record<string, number>> => {
  try {
    const response = await instance.get<ApiResponse<Record<string, number>>>(
      END_POINT.FETCH_OTHER_STREAK,
      { params: { code, year, month } }
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const useFetchOtherStreak = (
  code: string,
  year: string,
  month: string
) => {
  return useQuery({
    queryKey: [queryKey.OTHER_STREAK, code, year, month],
    queryFn: () => fetchOtherStreak(code, year, month),
  });
};
