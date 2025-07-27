import { instance } from "../instance.ts";
import type { ApiResponse } from "../../types/apis/commonType.ts";
import { END_POINT } from "../../constants/api.ts";
import { queryKey } from "../../constants/queryKey.ts";

interface FriendCodeResponse {
  code: string;
}

const fetchFriendCode = async (code: string): Promise<FriendCodeResponse> => {
  try {
    const response = await instance.get<ApiResponse<FriendCodeResponse>>(
      END_POINT.FETCH_FRIEND_CODE,
      { params: { code: code } }
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching friend code:", error);
    throw error;
  }
};

export const useFetchFriendCode = (code: string) => {
  return {
    queryKey: [queryKey.FRIENDS, code],
    queryFn: () => fetchFriendCode(code),
  };
};
