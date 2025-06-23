import Header from "../../components/Header/Header.tsx";
import FriendHeader from "./components/FriendHeader.tsx";
import { mockFriends } from "../../data/mockFriends.ts";
import backgroundImage from "../../assets/main-background.jpg";
import ProfileSection from "./components/ProfileSection.tsx";
import { mockUser } from "../../data/mockUser.ts";
import HomeButton from "./components/HomeButton.tsx";

const HomePage = () => {
  return (
    <>
      <div className={`flex flex-col`}>
        <Header />
        <FriendHeader friends={mockFriends} />
        <img
          src={backgroundImage}
          alt="메인 배경 이미지"
          className={`w-full h-[187px] object-cover mb-[12px]`}
        />
        <div className={`flex flex-col items-center px-[26px]`}>
          <ProfileSection user={mockUser} />
          <div className={`flex w-full justify-between gap-x-[11px]`}>
            <HomeButton type={"archive"} onClick={() => {}} />
            <HomeButton type={"quiz"} onClick={() => {}} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
