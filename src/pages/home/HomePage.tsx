import Header from "../../components/Header/Header.tsx";
import FriendHeader from "./components/FriendHeader.tsx";
import { mockFriends } from "../../data/mockFriends.ts";
import backgroundImage from "../../assets/main-background.jpg";
import ProfileSection from "./components/ProfileSection.tsx";
import { mockUser } from "../../data/mockUser.ts";
import HomeButton from "./components/HomeButton.tsx";
import CategorySection from "./components/CategorySection.tsx";
import { mockCategories } from "../../data/mockCategories.ts";
import React, { useRef, useState } from "react";
import mockStreaks from "../../data/mockStreaks.ts";
import Streak from "./components/Streak.tsx";

const HomePage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click(); // 숨겨진 input을 클릭
  };

  return (
    <>
      <div className={`flex flex-col`}>
        <Header />
        <FriendHeader friends={mockFriends} />
        {/* 숨겨진 input */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleImageChange}
        />

        {/* 클릭 시 input 트리거 */}
        <img
          src={selectedImage || backgroundImage}
          alt="메인 배경 이미지"
          className={`w-full h-[187px] object-cover mb-[12px] cursor-pointer`}
          onClick={handleImageClick}
        />

        <div className={`flex flex-col items-center px-[26px]`}>
          <ProfileSection user={mockUser} />
          <div className={`flex w-full justify-between gap-x-[11px]`}>
            <HomeButton type={"archive"} onClick={() => {}} />
            <HomeButton type={"quiz"} onClick={() => {}} />
          </div>
          <Streak streakDays={70} streaks={mockStreaks} />
          <CategorySection categories={mockCategories} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
