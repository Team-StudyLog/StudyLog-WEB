import { useNavigate } from "react-router-dom";
import routePath from "../routes/routePath.ts";

const useEasyNavigate = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const goLoginPage = () => {
    navigate(routePath.LOGINPAGE);
  };

  const goHomePage = () => {
    navigate(routePath.HOMEPAGE);
  };

  const goMyPage = () => {
    navigate(routePath.MYPAGE);
  };

  return {
    goBack,
    goLoginPage,
    goHomePage,
    goMyPage,
  };
};

export default useEasyNavigate;
