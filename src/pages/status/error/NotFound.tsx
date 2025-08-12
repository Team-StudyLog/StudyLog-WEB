import useEasyNavigate from "../../../hooks/useEasyNavigate.ts";
import {
  loginContentWrapper,
  loginMainText,
  loginPageStyle,
  loginSubTextWrapper,
  loginUserProfile,
} from "../../auth/login/LoginPage.styles.ts";
import { User } from "lucide-react";
import BottomButton from "../../../components/Button/BottomButton.tsx";
import { storageKey } from "../../../constants/storageKey.ts";
import LogoHeader from "../../../components/Header/LogoHeader.tsx";

const NotFound = () => {
  const { goHomePage, goMainPage } = useEasyNavigate();
  const handleClick = () => {
    const code = localStorage.getItem(storageKey.USER_CODE);
    if (code) {
      goMainPage(code);
    } else {
      localStorage.clear();
      goHomePage();
    }
  };

  return (
    <div className={loginPageStyle}>
      <LogoHeader />
      <div className={loginContentWrapper}>
        <div className={loginUserProfile}>
          <User size={46} className={`text-gray-500`} />
        </div>
        <span className={loginMainText}>페이지를 찾을 수 없습니다.</span>
        <div className={loginSubTextWrapper}>
          <p className={`text-gray-500`}>존재하지 않는 페이지입니다.</p>
        </div>
      </div>
      <BottomButton text={`홈으로 돌아가기`} onClick={handleClick} />
    </div>
  );
};

export default NotFound;
