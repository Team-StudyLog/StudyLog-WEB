import { instance } from "../instance.ts";
import type { ApiResponse } from "../../types/apis/commonType.ts";
import { useQuery } from "@tanstack/react-query";
import { END_POINT } from "../../constants/api.ts";
import { queryKey } from "../../constants/queryKey.ts";
import type { AlarmListResponse } from "../../types/apis/alarm";

const fetchAlarmList = async (): Promise<AlarmListResponse[]> => {
  try {
    const response = await instance.get<ApiResponse<AlarmListResponse[]>>(
      END_POINT.FETCH_ALARM_LIST
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching alarm list:", error);
    throw error;
  }
};

export const useFetchAlarmList = () => {
  return useQuery({
    queryKey: [queryKey.ALARMS],
    queryFn: fetchAlarmList,
  });
};
