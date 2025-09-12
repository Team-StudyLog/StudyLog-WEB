import type {
  MainCategoryResponse,
  MainFriendResponse,
  MainProfileResponse,
  MainStreakResponse,
} from "../../types/apis/main";
import { instance } from "../instance.ts";
import type { ApiResponse } from "../../types/apis/commonType.ts";
import { END_POINT } from "../../constants/api.ts";
import { useQuery } from "@tanstack/react-query";
import { queryKey } from "../../constants/queryKey.ts";

interface FetchUserMainResponse {
  following: MainFriendResponse[];
  profile: MainProfileResponse;
  streak: MainStreakResponse;
  categories: MainCategoryResponse[];
}

const fetchUserMain = async (): Promise<FetchUserMainResponse> => {
  try {
    const response = await instance.get<ApiResponse<FetchUserMainResponse>>(
      END_POINT.FETCH_USER_MAIN
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const useFetchUserMain = () => {
  return useQuery({
    queryKey: [queryKey.USER_MAIN],
    queryFn: fetchUserMain,
  });
};
