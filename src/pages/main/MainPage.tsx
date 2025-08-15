import Header from "../../components/Header/Header.tsx";
import FriendHeader from "./components/FriendHeader.tsx";
import backgroundImage from "../../assets/main-background.jpg";
import ProfileSection from "./components/ProfileSection.tsx";
import NavigateButton from "./components/NavigateButton.tsx";
import CategorySection from "./components/CategorySection.tsx";
import { useEffect, useState } from "react";
import Streak from "./components/Streak.tsx";
import useEasyNavigate from "../../hooks/useEasyNavigate.ts";
import ImageInput from "../../components/Input/ImageInput.tsx";
import useImageInput from "../../hooks/useImageInput.ts";
import useCurrentDate from "../../hooks/useCurrentDate.ts";
import { usePatchBackground } from "../../apis/main/usePatchBackground.ts";
import { useFetchFriendList } from "../../apis/mypage/useFetchFriendList.ts";
import { useFetchUserStreak } from "../../apis/main/useFetchUserStreak.ts";
import mockStreaks from "../../data/mockStreaks.ts";
import { useFetchUserMain } from "../../apis/main/useFetchUserMain.ts";

const MainPage = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const { fileInputRef, handleImageChange, handleImageClick } =
    useImageInput(setSelectedImage);
  const { goRecordPage, goQuizPage } = useEasyNavigate();
  const { currentDate, handleLeftClick, handleRightClick } = useCurrentDate();

  const { data: friends } = useFetchFriendList();
  const { data: user } = useFetchUserMain();

  const year = currentDate.getFullYear().toString();
  const month = (currentDate.getMonth() + 1).toString();
  const { data: streaks } = useFetchUserStreak(year, month);

  const { mutate: patchBackground } = usePatchBackground();

  // 이미지가 변경될 때마다 배경 이미지 업데이트
  useEffect(() => {
    if (selectedImage instanceof File) patchBackground(selectedImage);
  }, [selectedImage, patchBackground]);

  return (
    <>
      <div className={`flex flex-col`}>
        <Header />
        <FriendHeader friends={friends || []} />
        <ImageInput ref={fileInputRef} onChange={handleImageChange} />
        <img
          src={
            selectedImage
              ? URL.createObjectURL(selectedImage)
              : user?.profile.coverImage || backgroundImage
          }
          alt="메인 배경 이미지"
          className={`w-full h-[187px] object-cover mb-[12px] cursor-pointer`}
          onClick={handleImageClick}
        />

        <div className={`flex flex-col items-center px-[26px]`}>
          <ProfileSection user={user?.profile} type={"me"} />
          <div
            className={`flex w-full justify-between gap-x-[11px] mt-[8px] mb-[30px]`}
          >
            <NavigateButton type={"archive"} onClick={goRecordPage} />
            <NavigateButton type={"quiz"} onClick={goQuizPage} />
          </div>
          <Streak
            streakDays={user?.streak.maxStreak || 0}
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

export default MainPage;
