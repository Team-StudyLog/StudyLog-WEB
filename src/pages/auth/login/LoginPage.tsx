import { useEffect, useState } from "react";
import { User } from "lucide-react";
import {
  loginContentWrapper,
  loginMainText,
  loginPageStyle,
  loginSubTextWrapper,
  loginUserProfile,
} from "./LoginPage.styles.ts";
import useEasyNavigate from "../../../hooks/useEasyNavigate.ts";
import { storageKey } from "../../../constants/storageKey.ts";
import Header from "../../../components/Header/Header.tsx";
import BottomButton from "../../../components/Button/BottomButton.tsx";

const LoginPage = () => {
  const { goHomePage, goCodePage } = useEasyNavigate();
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem(storageKey.IS_LOGGED_IN);
    const userCode = localStorage.getItem(storageKey.USER_CODE) ?? "UX320";

    if (isLoggedIn) {
      goCodePage(userCode);
    } else {
      localStorage.setItem(storageKey.USER_CODE, userCode);
      setShouldRender(true);
    }
  }, [goCodePage]);

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
