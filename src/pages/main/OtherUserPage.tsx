import Header from "../../components/Header/Header.tsx";
import backgroundImage from "../../assets/main-background.jpg";
import ProfileSection from "./components/ProfileSection.tsx";
import CategorySection from "./components/CategorySection.tsx";
import Streak from "./components/Streak.tsx";
import useCurrentDate from "../../hooks/useCurrentDate.ts";
import mockStreaks from "../../data/mockStreaks.ts";
import { useFetchOtherStreak } from "../../apis/main/useFetchOtherStreak.ts";
import { useParams } from "react-router-dom";
import { useFetchOtherMain } from "../../apis/main/useFetchOtherMain.ts";

const OtherUserPage = () => {
  const { currentDate, handleLeftClick, handleRightClick } = useCurrentDate();
  const code = useParams<{ code: string }>().code || "";
  const year = currentDate.getFullYear().toString();
  const month = (currentDate.getMonth() + 1).toString();
  const { data: streaks } = useFetchOtherStreak(code, year, month);
  const { data: user } = useFetchOtherMain(code);

  return (
    <>
      <div className={`flex flex-col`}>
        <Header />
        <img
          src={user?.profile.coverImage ?? backgroundImage}
          alt="메인 배경 이미지"
          className={`w-full h-[187px] object-cover mb-[12px] cursor-pointer`}
        />
        <div className={`flex flex-col items-center px-[26px]`}>
          <ProfileSection
            user={user?.profile}
            type={`other`}
            isFollowing={user?.isFollowing}
          />
          <Streak
            streakDays={70}
            streaks={streaks || mockStreaks}
            currentDate={currentDate}
            handleLeftClick={handleLeftClick}
            handleRightClick={handleRightClick}
          />
          <CategorySection categories={user?.categories || []} />
        </div>
      </div>
    </>
  );
};

export default OtherUserPage;
