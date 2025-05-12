import { useEffect } from "react";
import useEasyNavigate from "../../hooks/useEasyNavigate.ts";

interface RedirectionProps {
  platform: "kakao" | "google";
}

const Redirection = ({ platform }: RedirectionProps) => {
  const code: string =
    new URL(window.location.href).searchParams.get("code") || "";
  window.history.forward();

  // const { mutate } = platform === "kakao"
  //   ? usePostKakaoLogin()
  //   : usePostGoogleLogin();

  const { goHomePage } = useEasyNavigate();

  useEffect(() => {
    if (code) {
      alert(`${platform} 로그인 성공!`);
      console.log("OAuth code:", code);
      console.log(platform);
      goHomePage();
    }
  }, [code, platform, goHomePage]);

  return <></>;
};

export default Redirection;
