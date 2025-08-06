import { User } from "lucide-react";
import {
  loginContentWrapper,
  loginMainText,
  loginPageStyle,
  loginSubTextWrapper,
  loginUserProfile,
} from "./LoginPage.styles.ts";
import useEasyNavigate from "../../../hooks/useEasyNavigate.ts";
import Header from "../../../components/Header/Header.tsx";
import BottomButton from "../../../components/Button/BottomButton.tsx";
import useAuthRender from "../../../hooks/useAuthRender.ts";

const LoginPage = () => {
  const { goHomePage } = useEasyNavigate();
  const shouldRender = useAuthRender();
  if (!shouldRender) return null;

  return (
    <div className={loginPageStyle}>
      <Header />
      <div className={loginContentWrapper}>
        <div className={loginUserProfile}>
          <User size={46} className={`text-gray-500`} />
        </div>
        <span className={loginMainText}>로그인이 필요해요</span>
        <div className={loginSubTextWrapper}>
          <p className={`text-gray-500`}>로그인을 하면&nbsp;</p>
          <p className={`text-green-300`}>공부를 기록</p>
          <p className={`text-gray-500`}>할 수 있어요!</p>
        </div>
      </div>
      <BottomButton text={`로그인 하기`} onClick={goHomePage} />
    </div>
  );
};

export default LoginPage;
