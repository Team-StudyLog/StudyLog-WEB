import queryClient from "../../utils/queryClient.ts";
import { queryKey } from "../../constants/queryKey.ts";
import type { AlarmListResponse } from "../../types/apis/alarm";
import { EventSourcePolyfill } from "event-source-polyfill";
import { storageKey } from "../../constants/storageKey.ts";

export const fetchAlarmConnection = () => {
  const accessToken = localStorage.getItem(storageKey.ACCESS_TOKEN);
  const eventSource = new EventSourcePolyfill(
    `${import.meta.env.VITE_APP_BASE_URL}/subscribe`,
    {
      headers: {
        "Content-Type": "text/event-stream",
        "Authorization": `Bearer ${accessToken}`
      },
      withCredentials: true
    },
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
