import Header from "../../components/Header/Header.tsx";
import FriendHeader from "./components/FriendHeader.tsx";
import { mockFriends } from "../../data/mockFriends.ts";
import backgroundImage from "../../assets/main-background.jpg";
import ProfileSection from "./components/ProfileSection.tsx";
import { mockUser } from "../../data/mockUser.ts";
import NavigateButton from "./components/NavigateButton.tsx";
import CategorySection from "./components/CategorySection.tsx";
import { mockCategories } from "../../data/mockCategories.ts";
import { useEffect, useState } from "react";
import Streak from "./components/Streak.tsx";
import useEasyNavigate from "../../hooks/useEasyNavigate.ts";
import ImageInput from "../../components/Input/ImageInput.tsx";
import useImageInput from "../../hooks/useImageInput.ts";
import useCurrentDate from "../../hooks/useCurrentDate.ts";
import mockStreaks, { type StreakT } from "../../data/mockStreaks.ts";
import { getFilteredStreaks } from "../../utils/getFilteredStreaks.ts";
import { usePatchBackground } from "../../apis/main/usePatchBackground.ts";

const MainPage = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const { fileInputRef, handleImageChange, handleImageClick } =
    useImageInput(setSelectedImage);
  const { goRecordPage, goQuizPage } = useEasyNavigate();
  const { currentDate, handleLeftClick, handleRightClick } = useCurrentDate();
  const [filteredStreaks, setFilteredStreaks] = useState<StreakT[]>([]);

  const { mutate: patchBackground } = usePatchBackground(selectedImage as File);

  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const currentMonthDates = getFilteredStreaks(year, month, mockStreaks);
    setFilteredStreaks(currentMonthDates);
  }, [currentDate]);

  // 이미지가 변경될 때마다 배경 이미지 업데이트
  useEffect(() => {
    if (selectedImage != null) patchBackground();
  }, [selectedImage, patchBackground]);

  return (
    <>
      <div className={`flex flex-col`}>
        <Header />
        <FriendHeader friends={mockFriends} />
        <ImageInput ref={fileInputRef} onChange={handleImageChange} />
        <img
          src={
            selectedImage ? URL.createObjectURL(selectedImage) : backgroundImage
          }
          alt="메인 배경 이미지"
          className={`w-full h-[187px] object-cover mb-[12px] cursor-pointer`}
          onClick={handleImageClick}
        />

        <div className={`flex flex-col items-center px-[26px]`}>
          <ProfileSection user={mockUser} type={"me"} />
          <div
            className={`flex w-full justify-between gap-x-[11px] mt-[8px] mb-[30px]`}
          >
            <NavigateButton type={"archive"} onClick={goRecordPage} />
            <NavigateButton type={"quiz"} onClick={goQuizPage} />
          </div>
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

export default MainPage;
