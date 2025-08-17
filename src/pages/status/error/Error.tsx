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
import type { FallbackProps } from "react-error-boundary";

const Error = ({ error, resetErrorBoundary }: FallbackProps) => {
  const { goHomePage } = useEasyNavigate();
  const handleClick = () => {
    localStorage.clear();
    resetErrorBoundary();
    goHomePage();
  };
  const statusCode = error.status.code;
  alert(`에러가 발생했습니다. 상태 코드: ${statusCode}`);

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
