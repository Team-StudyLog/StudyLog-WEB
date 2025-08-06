import type { MainResponse } from "../../types/apis/main";
import { instance } from "../instance.ts";
import type { ApiResponse } from "../../types/apis/commonType.ts";
import { useQuery } from "@tanstack/react-query";
import { queryKey } from "../../constants/queryKey.ts";
import { END_POINT } from "../../constants/api.ts";

const fetchOtherMain = async (code: string): Promise<MainResponse> => {
  try {
    const response = await instance.get<ApiResponse<MainResponse>>(
      END_POINT.FETCH_OTHER_MAIN,
      {
        params: { code: code },
      }
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const useFetchOtherMain = (code: string) => {
  return useQuery({
    queryKey: [queryKey.OTHER_MAIN],
    queryFn: () => fetchOtherMain(code),
    enabled: !!code,
  });
};
