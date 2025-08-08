import type { ApiResponse } from "../../types/apis/commonType.ts";
import { instance } from "../instance.ts";
import { useMutation } from "@tanstack/react-query";
import { END_POINT } from "../../constants/api.ts";

export interface FetchFriendResponse {
  id: number;
  nickname: string;
  profileImage: string;
  code: string;
}

const fetchFriendSearch = async (
  query: string
): Promise<FetchFriendResponse[]> => {
  try {
    const response = await instance.get<ApiResponse<FetchFriendResponse[]>>(
      END_POINT.FETCH_FRIEND_SEARCH,
      { params: { query: query } }
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching friend info:", error);
    throw error;
  }
};

export const useFetchFriendSearch = () => {
  return useMutation({
    mutationFn: (query: string) => fetchFriendSearch(query),
    onSuccess: () => {
      console.log("친구 검색 성공");
    },
  });
};
