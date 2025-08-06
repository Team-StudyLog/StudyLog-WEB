import { instance } from "../instance.ts";
import type { ApiResponse } from "../../types/apis/commonType.ts";
import { storageKey } from "../../constants/storageKey.ts";
import { END_POINT } from "../../constants/api.ts";

interface PostTokenReissueResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export const usePostTokenReissue =
  async (): Promise<PostTokenReissueResponse> => {
    const response = await instance.post<ApiResponse<PostTokenReissueResponse>>(
      END_POINT.POST_TOKEN_REISSUE,
      {
        withCredentials: true,
      }
    );
    localStorage.removeItem(storageKey.ACCESS_TOKEN);
    localStorage.setItem(
      storageKey.ACCESS_TOKEN,
      response.data.data.accessToken
    );
    return response.data.data;
  };
