import { useEffect } from "react";
import { postTokenReissue } from "../../../apis/auth/postTokenReissue.ts";
import useEasyNavigate from "../../../hooks/useEasyNavigate.ts";
import { storageKey } from "../../../constants/storageKey.ts";

const LoginCompletePage = () => {
  const { goHomePage, goSignupPage, goMainPage } = useEasyNavigate();
  useEffect(() => {
    const fetchTokenAndAlarm = async () => {
      try {
        const response = await postTokenReissue(); // 토큰 재발급 끝날 때까지 기다림
        console.log("response", response);

        if (!response.newUser) {
          localStorage.setItem(storageKey.USER_CODE, response.code);
          goSignupPage();
          return;
        }

        const code = response.code;
        localStorage.setItem(storageKey.IS_LOGGED_IN, "true");
        localStorage.setItem(storageKey.USER_CODE, response.code);

        if (code) {
          goMainPage(code);
        } else {
          console.error(response);
        }
      } catch (error) {
        alert("토큰 재발급에 실패했습니다. 다시 시도해주세요.");
        goHomePage();
        console.error(error);
      }
    };

    fetchTokenAndAlarm();
  }, [goHomePage, goMainPage, goSignupPage]);

  return <div></div>;
};

export default LoginCompletePage;
