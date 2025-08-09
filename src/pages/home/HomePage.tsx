import IcLoginLogo from "../../assets/ic-login-logo.png";
import {
  homeButtonWrapper,
  homeContainer,
  homePageStyle,
} from "./HomePage.styles.ts";
import SocialLoginButton from "../../components/Button/SocialLoginButton.tsx";
import useAuthRender from "../../hooks/useAuthRender.ts";

const HomePage = () => {
  const handleGoogleLogin = () => {
    window.location.href = `${import.meta.env.VITE_APP_BASE_URL}/oauth2/authorization/google`;
  };

  const handleKakaoLogin = () => {
    window.location.href = `${import.meta.env.VITE_APP_BASE_URL}/oauth2/authorization/kakao`;
  };

  const shouldRender = useAuthRender();
  if (!shouldRender) return null;

  return (
    <div className={homePageStyle}>
      <div className={homeContainer}>
        <h1 className={`text-green-300 font-logo-partial-30`}>StudyLog</h1>
        <h2 className={`text-gray-700 font-head05-semibold-20 mt-[26px]`}>
          공부를 매일 기록하고
          <br />
          AI가 생성해주는 퀴즈로 복습해보세요!
        </h2>
        <img
          src={IcLoginLogo}
          alt={`로그인 페이지 로고`}
          className={`mt-[84px] transform scale-80`}
        />
      </div>
      <div className={homeButtonWrapper}>
        <span className={`text-gray-500 font-body02-semibold-14`}>
          SNS 계정으로 빠르게 시작하기
        </span>
        <SocialLoginButton type={"google"} onClick={handleGoogleLogin} />
        <SocialLoginButton type={"kakao"} onClick={handleKakaoLogin} />
      </div>
    </div>
  );
};

export default HomePage;
