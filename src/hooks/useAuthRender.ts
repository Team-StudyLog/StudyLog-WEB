import useEasyNavigate from "./useEasyNavigate.ts";
import { useEffect, useState } from "react";
import { storageKey } from "../constants/storageKey.ts";

const useAuthRender = () => {
  const { goMainPage } = useEasyNavigate();
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem(storageKey.IS_LOGGED_IN);
    const userCode = localStorage.getItem(storageKey.USER_CODE) ?? null;

    if (isLoggedIn && userCode) {
      goMainPage(userCode);
    } else {
      setShouldRender(true);
    }
  }, [goMainPage]);

  return shouldRender;
};

export default useAuthRender;
