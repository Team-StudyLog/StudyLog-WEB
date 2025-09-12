import { instance } from "../instance.ts";
import type { ApiResponse } from "../../types/apis/commonType.ts";
import { useQuery } from "@tanstack/react-query";
import { END_POINT } from "../../constants/api.ts";
import { queryKey } from "../../constants/queryKey.ts";
import type { UserProfileResponse } from "../../types/apis/mypage";

const fetchUserProfile = async (): Promise<UserProfileResponse> => {
  try {
    const response = await instance.get<ApiResponse<UserProfileResponse>>(
      END_POINT.FETCH_USER_PROFILE
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};

export const useFetchUserProfile = () => {
  return useQuery({
    queryKey: [queryKey.USER_PROFILE],
    queryFn: fetchUserProfile,
  });
};
