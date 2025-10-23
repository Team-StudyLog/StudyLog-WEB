import { useQuery } from "@tanstack/react-query";
import { END_POINT } from "../../constants/api";
import { queryKey } from "../../constants/queryKey";
import type { ApiResponse } from "../../types/apis/commonType";
import { instance } from "../instance";

interface FetchRankListResponse {
  id: number;
  nickname: string;
  profileImage: string;
  code: string;
  recordCount: number;
  me: boolean;
}

const fetchRankList = async (): Promise<FetchRankListResponse[]> => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const response = await instance.get<ApiResponse<FetchRankListResponse[]>>(
    END_POINT.FETCH_RANK_LIST,
    {
      params: {
        year: year,
        month: month,
      },
    }
  );
  return response.data.data || [];
};

export const useFetchRankList = () => {
  return useQuery({
    queryKey: [queryKey.RANK_LIST],
    queryFn: fetchRankList,
  });
};
