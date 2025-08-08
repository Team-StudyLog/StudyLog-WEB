import { useEffect } from "react";
import { postTokenReissue } from "../../../apis/auth/postTokenReissue.ts";
import useEasyNavigate from "../../../hooks/useEasyNavigate.ts";
import { storageKey } from "../../../constants/storageKey.ts";
import { fetchAlarmConnection } from "../../../apis/alarm/fetchAlarmConnection.ts";

const LoginCompletePage = () => {
  const { goHomePage, goSignupPage, goMainPage } = useEasyNavigate();
  useEffect(() => {
    const fetchToken = async () => {
      const response = await postTokenReissue();
      console.log("response", response);
      if (response) {
        if (!response.newUser) {
          goSignupPage();
        } else {
          const code = response.code;
          localStorage.setItem(storageKey.IS_LOGGED_IN, "true");
          localStorage.setItem(storageKey.USER_CODE, response.code);
          if (code) {
            goMainPage(code);
          } else {
            console.error(response);
          }
        }
      }
    };

    fetchToken()
      .then((r) => console.log(r))
      .catch((error) => {
        alert("토큰 재발급에 실패했습니다. 다시 시도해주세요.");
        goHomePage();
        console.error(error);
      });

    fetchAlarmConnection();
  }, [goHomePage, goMainPage, goSignupPage]);
  return <div></div>;
};

export default LoginCompletePage;
