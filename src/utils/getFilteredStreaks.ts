import type { StreakT } from "../data/mockStreaks.ts";
import { dateToISO } from "./dateFormat.ts";

export const getFilteredStreaks = (
  year: number,
  month: number,
  streaks: StreakT[]
): StreakT[] => {
  const lastDay = new Date(year, month + 1, 0).getDate();

  return Array.from({ length: lastDay }, (_, i) => {
    const date = new Date(year, month, i + 2);
    const isoDate = dateToISO(date);
    const streak = streaks.find((s) => s.date === isoDate);

    return {
      date: isoDate,
      count: streak?.count ?? 0,
    };
  });
};
