import { useEffect } from "react";
import useEasyNavigate from "../../../hooks/useEasyNavigate.ts";

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

  const { goSignupPage } = useEasyNavigate();

  useEffect(() => {
    if (code) {
      console.log("OAuth code:", code);
      console.log(platform);

      // 초기 유저라면
      goSignupPage();
    }
  }, [code, platform, goSignupPage]);

  return <></>;
};

export default Redirection;
