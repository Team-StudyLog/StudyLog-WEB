import Header from "../../components/Header/Header.tsx";
import useEasyNavigate from "../../hooks/useEasyNavigate.ts";
import BottomButton from "../../components/Button/BottomButton.tsx";
import { useEffect } from "react";
import { User } from "lucide-react";
import {
  homeContentWrapper,
  homeMainText,
  homePageStyle,
  homeSubTextWrapper,
  homeUserProfile,
} from "./HomePage.styles.ts";
import { storageKey } from "../../constants/storageKey.ts";

const HomePage = () => {
  useEffect(() => {
    localStorage.setItem(storageKey.USER_CODE, "UX320");
  }, []);

  const { goLoginPage } = useEasyNavigate();

  return (
    <div className={homePageStyle}>
      <Header />
      <div className={homeContentWrapper}>
        <div className={homeUserProfile}>
          <User size={46} className={`text-gray-500`} />
        </div>
        <span className={homeMainText}>로그인이 필요해요</span>
        <div className={homeSubTextWrapper}>
          <p className={`text-gray-500`}>로그인을 하면&nbsp;</p>
          <p className={`text-green-300`}>공부를 기록</p>
          <p className={`text-gray-500`}>할 수 있어요!</p>
        </div>
      </div>
      <BottomButton text={`로그인 하기`} onClick={goLoginPage} />
    </div>
  );
};

export default HomePage;
