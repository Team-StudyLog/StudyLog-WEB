import queryClient from "../../utils/queryClient.ts";
import { queryKey } from "../../constants/queryKey.ts";
import type { AlarmListResponse } from "../../types/apis/alarm";

export const fetchAlarmConnection = () => {
  const eventSource = new EventSource(
    `${import.meta.env.VITE_APP_BASE_URL}/subscribe`
  );

  eventSource.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log("📩 새 알림 수신:", data);

    queryClient.setQueryData<AlarmListResponse[]>([queryKey.ALARMS], (old) =>
      old ? [data, ...old] : [data]
    );
  };

  eventSource.onerror = (error) => {
    console.error("❌ SSE 연결 오류:", error);
    eventSource.close();
  };

  return () => {
    eventSource.close();
    console.log("🧹 SSE 연결 해제");
  };
};
