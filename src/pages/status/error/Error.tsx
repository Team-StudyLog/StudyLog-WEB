import {
  loginContentWrapper,
  loginMainText,
  loginPageStyle,
  loginSubTextWrapper,
  loginUserProfile,
} from "../../auth/login/LoginPage.styles.ts";
import { User } from "lucide-react";
import BottomButton from "../../../components/Button/BottomButton.tsx";
import useEasyNavigate from "../../../hooks/useEasyNavigate.ts";
import LogoHeader from "../../../components/Header/LogoHeader.tsx";

const Error = () => {
  const { goHomePage } = useEasyNavigate();
  const handleClick = () => {
    localStorage.clear();
    goHomePage();
  };

  return (
    <div className={loginPageStyle}>
      <LogoHeader />
      <div className={loginContentWrapper}>
        <div className={loginUserProfile}>
          <User size={46} className={`text-gray-500`} />
        </div>
        <span className={loginMainText}>오류가 발생했습니다.</span>
        <div className={loginSubTextWrapper}>
          <p className={`text-gray-500`}>
            로그인 후 서비스를 다시 이용해주시길 바랍니다.
          </p>
        </div>
      </div>
      <BottomButton text={`홈으로 가기`} onClick={handleClick} />
    </div>
  );
};

export default Error;
