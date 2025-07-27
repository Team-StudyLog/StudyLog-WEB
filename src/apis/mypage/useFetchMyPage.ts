import { instance } from "../instance.ts";
import type { ApiResponse } from "../../types/apis/commonType.ts";
import { useQuery } from "@tanstack/react-query";
import { queryKey } from "../../constants/queryKey.ts";
import { END_POINT } from "../../constants/api.ts";

interface UsersResponse {
  profileImage: string;
  nickname: string;
  intro: string;
  friendCount: number;
  code: string;
}

const fetchMyPage = async (): Promise<UsersResponse> => {
  try {
    const response = await instance.get<ApiResponse<UsersResponse>>(
      END_POINT.FETCH_MY_PAGE
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const useFetchMyPage = () => {
  return useQuery({
    queryKey: [queryKey.MY_PAGE],
    queryFn: fetchMyPage,
  });
};
