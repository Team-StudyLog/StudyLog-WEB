import {
  loginContentWrapper,
  loginMainText,
  loginPageStyle,
  loginSubTextWrapper,
  loginUserProfile,
} from "../../auth/login/LoginPage.styles.ts";
import Header from "../../../components/Header/Header.tsx";
import { User } from "lucide-react";
import BottomButton from "../../../components/Button/BottomButton.tsx";
import useEasyNavigate from "../../../hooks/useEasyNavigate.ts";

const Error = () => {
  const { goHomePage } = useEasyNavigate();
  const handleClick = () => {
    localStorage.clear();
    goHomePage();
  };

  return (
    <div className={loginPageStyle}>
      <Header />
      <div className={loginContentWrapper}>
        <div className={loginUserProfile}>
          <User size={46} className={`text-gray-500`} />
        </div>
        <span className={loginMainText}>오류가 발생했어요</span>
        <div className={loginSubTextWrapper}>
          <p className={`text-gray-500`}>로그인을 하면&nbsp;</p>
          <p className={`text-green-300`}>서비스를 다시 사용</p>
          <p className={`text-gray-500`}>할 수 있어요!</p>
        </div>
      </div>
      <BottomButton text={`홈으로 가기`} onClick={handleClick} />
    </div>
  );
};

export default Error;
