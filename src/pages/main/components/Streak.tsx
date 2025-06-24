import { ChevronLeft, ChevronRight, Leaf } from "lucide-react";
import { dateFormat, dateFormatWithDot } from "../../../utils/dateFormat.ts";
import { useState } from "react";
import type { StreakT } from "../../../data/mockStreaks.ts";

interface StreakProps {
  streakDays: number;
  streaks: StreakT[];
}

const Streak = ({ streakDays, streaks }: StreakProps) => {
  const [currentDate, setCurrentDate] = useState(() => {
    return new Date(); // 디폴트로 현재 날짜
  });
  const parsedDate = dateFormat(currentDate.toISOString().split("T")[0]);
  const handleLeftClick = () => {
    const prevMonth = new Date(currentDate);
    prevMonth.setMonth(currentDate.getMonth() - 1);
    setCurrentDate(prevMonth);
  };

  const handleRightClick = () => {
    const nextMonth = new Date(currentDate);
    nextMonth.setMonth(currentDate.getMonth() + 1);
    setCurrentDate(nextMonth);
  };

  return (
    <section
      className={`flex flex-col w-full rounded-[18px] bg-white px-[16px] py-[20px]`}
    >
      <div className={`flex gap-x-[2px] items-center`}>
        <Leaf size={18} className={`text-gray-500`} />
        <p className={`font-body08-regular-12 text-gray-500`}>스트릭</p>
      </div>

      {/*연속 스트릭 일수*/}
      <div className={`flex text-gray-700 mt-[6px] items-center`}>
        <p className={`font-body04-medium-16`}>현재&nbsp;</p>
        <p className={`font-head04-bold-16 `}>{streakDays}</p>
        <p className={`font-body04-medium-16`}>일</p>
      </div>

      {/*날짜 변경 화살표 부분*/}
      <div className={`flex px-[7px] justify-between items-center mt-[12px]`}>
        <p className={`font-body05-medium-14 text-gray-600`}>{parsedDate}</p>
        <div className={`flex gap-x-[10px] items-center`}>
          <ChevronLeft
            size={18}
            className={`text-gray-600`}
            onClick={handleLeftClick}
          />
          <ChevronRight
            size={18}
            className={`text-gray-600`}
            onClick={handleRightClick}
          />
        </div>
      </div>

      {/*스트릭 잔디 부분*/}
      <div className={`grid grid-cols-7 gap-[4px] mt-[6px] px-[8px]`}>
        {streaks.map((streak, index) => (
          <StreakItem key={index} streak={streak} />
        ))}
      </div>

      {/*스트릭 설명 부분*/}
      <div className={`flex w-full justify-end mt-[26px] gap-x-[8px] px-[6px]`}>
        {Array.from({ length: 4 }, (_, index) => (
          <MiniStreakItem key={index} level={index} />
        ))}
      </div>
      <p
        className={`flex w-full justify-end mt-[6px] font-body08-regular-12 text-gray-500 px-[6px]`}
      >
        ㆍ날짜는 매일 오전 6:00에 변경됩니다.
      </p>
    </section>
  );
};

const StreakItem = ({ streak }: { streak: StreakT }) => {
  const bgColors = [
    "bg-gray-400",
    "bg-green-100",
    "bg-green-200",
    "bg-green-500",
    "bg-green-600",
  ];
  const colorIndex = Math.min(
    Math.floor(streak.count / 5),
    bgColors.length - 1
  );

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
        className={`rounded-[4px] size-[12px] ms-[2px] ${bgColors[level]}`}
      />
    </div>
  );
};

export default Streak;
