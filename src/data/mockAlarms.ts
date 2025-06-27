export type AlarmT = {
  id: number;
  subtitle: string;
  title: string;
  date: string;
};

export const mockAlarms: AlarmT[] = [
  {
    id: 1,
    subtitle: "친구 추가 알림",
    title: "채영님이 친구 추가를 하셨습니다.",
    date: "2025-06-27",
  },
  {
    id: 2,
    subtitle: "뱃지 알림",
    title: "Lv.2 뱃지를 달성했습니다.",
    date: "2025-06-26",
  },
  {
    id: 3,
    subtitle: "스트릭 알림",
    title: "연속 스트릭이 끊겼습니다.",
    date: "2025-06-12",
  },
  {
    id: 4,
    subtitle: "친구 추가 알림",
    title: "지민님이 친구 추가를 하셨습니다.",
    date: "2025-05-11",
  },
  {
    id: 5,
    subtitle: "뱃지 알림",
    title: "Lv.3 뱃지를 달성했습니다.",
    date: "2025-01-11",
  },
  {
    id: 6,
    subtitle: "스트릭 알림",
    title: "연속 스트릭이 끊겼습니다.",
    date: "2024-03-15",
  },
  {
    id: 7,
    subtitle: "친구 추가 알림",
    title:
      "수빈님이 친구 추가를 하셨습니다. 텍스트가 길어지면 이렇게 표시됩니다.",
    date: "2024-02-20",
  },
  {
    id: 8,
    subtitle: "뱃지 알림",
    title: "Lv.1 뱃지를 달성했습니다.",
    date: "2023-12-30",
  },
  {
    id: 9,
    subtitle: "스트릭 알림",
    title: "연속 스트릭이 끊겼습니다.",
    date: "2023-11-05",
  },
];
