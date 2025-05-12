const LoginPage = () => {
  const handleGoogleLogin = () => {
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_GOOGLE_AUTH_REDIRECT_URL}&response_type=code&scope=email`;
  };

  const handleKakaoLogin = () => {
    const kakaoLoginUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${
      import.meta.env.VITE_KAKAO_REST_API_KEY
    }&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URL}&response_type=code`;
    window.location.replace(kakaoLoginUrl);
  };

  return (
    <>
      <div
        className={`flex flex-col h-screen justify-center items-center gap-4`}
      >
        <button
          className={`bg-amber-300 font-semibold rounded-lg px-4 py-2`}
          onClick={handleKakaoLogin}
        >
          카카오 로그인
        </button>
        <button
          className={`border border-gray-300 font-semibold rounded-lg px-4 py-2`}
          onClick={handleGoogleLogin}
        >
          구글 로그인
        </button>
      </div>
    </>
  );
};

export default LoginPage;
