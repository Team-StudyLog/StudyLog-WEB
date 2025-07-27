import type { ApiResponse } from "../../types/apis/commonType.ts";
import { instance } from "../instance.ts";
import { useQuery } from "@tanstack/react-query";
import { END_POINT } from "../../constants/api.ts";
import { queryKey } from "../../constants/queryKey.ts";

export interface FriendResponse {
  id: number;
  nickname: string;
  profileImage: string;
  code: string;
}

const fetchFriendSearch = async (query: string): Promise<FriendResponse> => {
  try {
    const response = await instance.get<ApiResponse<FriendResponse>>(
      END_POINT.FETCH_FRIEND_SEARCH,
      { params: { query: query } }
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching friend info:", error);
    throw error;
  }
};

export const useFetchFriendSearch = (query: string) => {
  return useQuery({
    queryKey: [queryKey.FRIENDS, query],
    queryFn: () => fetchFriendSearch(query),
  });
};
