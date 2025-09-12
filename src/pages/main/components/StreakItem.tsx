import type { StreakT } from "../../../data/mockStreaks.ts";
import { dateFormatWithDot } from "../../../utils/dateFormat.ts";

const StreakItem = ({ streak }: { streak: StreakT }) => {
  const bgColors = [
    "bg-gray-400",
    "bg-green-100",
    "bg-green-200",
    "bg-green-500",
    "bg-green-600",
  ];
  const colorIndex =
    streak.count === 0
      ? 0
      : Math.min(Math.floor((streak.count - 1) / 5) + 1, bgColors.length - 1);

  return (
    <div className="relative group w-full">
      <div
        className={`rounded-[8px] w-full aspect-square ${bgColors[colorIndex]}`}
      />

      {/* 호버 시 나타나는 박스 */}
      <div className="absolute left-1/2  -translate-x-1/2 mt-[-13px] z-10 hidden group-hover:block">
        <StreakItemBox streak={streak} />
      </div>
    </div>
  );
};

const StreakItemBox = ({ streak }: { streak: StreakT }) => {
  const parsedDate = dateFormatWithDot(streak.date);
  return (
    <div
      className={`flex flex-col bg-white border border-gray-300 rounded-[8px] px-[10px] py-[7.5px]
       whitespace-nowrap text-gray-500 font-body10-regular-10`}
    >
      <p>{parsedDate}</p>
      <p>{streak.count}개 기록</p>
    </div>
  );
};

const MiniStreakItem = ({ level }: { level: number }) => {
  const ranges = ["1-4", "5-9", "10-14", "15-20"];
  const bgColors = [
    "bg-green-100",
    "bg-green-200",
    "bg-green-500",
    "bg-green-600",
  ];

  return (
    <div className={`flex items-center`}>
      <p className={`font-body08-regular-12 text-gray-500`}>{ranges[level]}</p>
      <div
        className={`rounded-[4px] h-[12px] w-[12px] ms-[2px] ${bgColors[level]}`}
      />
    </div>
  );
};

export { StreakItem, MiniStreakItem };
