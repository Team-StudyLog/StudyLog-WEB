import Header from "../../components/Header/Header.tsx";
import backgroundImage from "../../assets/main-background.jpg";
import ProfileSection from "./components/ProfileSection.tsx";
import { mockUser } from "../../data/mockUser.ts";
import CategorySection from "./components/CategorySection.tsx";
import { mockCategories } from "../../data/mockCategories.ts";
import Streak from "./components/Streak.tsx";
import useCurrentDate from "../../hooks/useCurrentDate.ts";
import mockStreaks, { type StreakT } from "../../data/mockStreaks.ts";
import { useEffect, useState } from "react";
import { getFilteredStreaks } from "../../utils/getFilteredStreaks.ts";

const OtherUserPage = () => {
  const { currentDate, handleLeftClick, handleRightClick } = useCurrentDate();
  const [filteredStreaks, setFilteredStreaks] = useState<StreakT[]>([]);

  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const currentMonthDates = getFilteredStreaks(year, month, mockStreaks);
    setFilteredStreaks(currentMonthDates);
  }, [currentDate]);

  return (
    <>
      <div className={`flex flex-col`}>
        <Header />
        <img
          src={backgroundImage}
          alt="메인 배경 이미지"
          className={`w-full h-[187px] object-cover mb-[12px] cursor-pointer`}
        />
        <div className={`flex flex-col items-center px-[26px]`}>
          <ProfileSection user={mockUser} type={`other`} isFollowing={true} />
          <Streak
            streakDays={70}
            streaks={filteredStreaks}
            currentDate={currentDate}
            handleLeftClick={handleLeftClick}
            handleRightClick={handleRightClick}
          />
          <CategorySection categories={mockCategories} />
        </div>
      </div>
    </>
  );
};

export default OtherUserPage;
