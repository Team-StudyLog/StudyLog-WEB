import {
  loginButtonWrapper,
  loginContainer,
  loginPageStyle,
} from "./LoginPage.styles.ts";
import SocialLoginButton from "../../components/Button/SocialLoginButton.tsx";
import IcLoginLogo from "../../assets/ic-login-logo.png";

const LoginPage = () => {
  const handleGoogleLogin = () => {
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${
      import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID
    }&redirect_uri=${import.meta.env.VITE_GOOGLE_AUTH_REDIRECT_URL}&response_type=code&scope=email`;
  };

  const handleKakaoLogin = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${
      import.meta.env.VITE_KAKAO_REST_API_KEY
    }&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URL}&response_type=code`;
  };

  return (
    <div className={loginPageStyle}>
      <div className={loginContainer}>
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
      <div className={loginButtonWrapper}>
        <span className={`text-gray-500 font-body02-semibold-14`}>
          SNS 계정으로 빠르게 시작하기
        </span>
        <SocialLoginButton type={"google"} onClick={handleGoogleLogin} />
        <SocialLoginButton type={"kakao"} onClick={handleKakaoLogin} />
      </div>
    </div>
  );
};

export default LoginPage;
