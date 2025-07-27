import { instance } from "../instance.ts";
import type { ApiResponse } from "../../types/apis/commonType.ts";
import { useQuery } from "@tanstack/react-query";
import type { FriendResponse } from "./useFetchFriendSearch.ts";
import { queryKey } from "../../constants/queryKey.ts";
import { END_POINT } from "../../constants/api.ts";

const fetchFriendList = async (): Promise<FriendResponse[]> => {
  try {
    const response = await instance.get<ApiResponse<FriendResponse[]>>(
      END_POINT.FETCH_FRIEND_LIST
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching friends:", error);
    throw error;
  }
};

export const useFetchFriendList = () => {
  return useQuery({
    queryKey: [queryKey.FRIENDS],
    queryFn: fetchFriendList,
  });
};
