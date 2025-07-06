import { ChevronLeft, ChevronRight, Leaf } from "lucide-react";
import { dateFormat, dateToISO } from "../../../utils/dateFormat.ts";
import { type StreakT } from "../../../data/mockStreaks.ts";
import { MiniStreakItem, StreakItem } from "./StreakItem.tsx";

interface StreakProps {
  streakDays: number;
  streaks: StreakT[];
  currentDate: Date;
  handleLeftClick: () => void;
  handleRightClick: () => void;
}

const Streak = ({
  streakDays,
  streaks,
  currentDate,
  handleLeftClick,
  handleRightClick,
}: StreakProps) => {
  const parsedDate = dateFormat(dateToISO(currentDate));

  return (
    <section className="flex flex-col w-full rounded-[18px] bg-white px-[16px] py-[20px]">
      <div className="flex gap-x-[2px] items-center">
        <Leaf size={18} className="text-gray-500" />
        <p className="font-body08-regular-12 text-gray-500">스트릭</p>
      </div>
      <p className="text-gray-700 mt-[6px] font-body04-medium-16">
        현재 <span className={`font-head04-bold-16`}>{streakDays}</span>일
      </p>
      <div className="flex px-[7px] justify-between items-center mt-[12px]">
        <p className="font-body05-medium-14 text-gray-600">{parsedDate}</p>
        <div className="flex gap-x-[10px] items-center">
          <ChevronLeft
            size={18}
            className="text-gray-600"
            onClick={handleLeftClick}
          />
          <ChevronRight
            size={18}
            className="text-gray-600"
            onClick={handleRightClick}
          />
        </div>
      </div>

      <div className="grid grid-cols-7 gap-[4px] mt-[6px] px-[8px]">
        {streaks.map((streak, index) => (
          <StreakItem key={index} streak={streak} />
        ))}
      </div>

      <div className="flex w-full justify-end mt-[26px] gap-x-[8px] px-[6px]">
        {Array.from({ length: 4 }, (_, index) => (
          <MiniStreakItem key={index} level={index} />
        ))}
      </div>
      <p className="flex w-full justify-end mt-[6px] font-body08-regular-12 text-gray-500 px-[6px]">
        ㆍ날짜는 매일 오전 6:00에 변경됩니다.
      </p>
    </section>
  );
};

export default Streak;
