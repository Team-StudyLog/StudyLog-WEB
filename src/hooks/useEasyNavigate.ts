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

  const goMainPage = (code: string) => {
    navigate(routePath.MAIN.replace(":code", code));
  };

  const goRecordPage = () => {
    navigate(routePath.RECORD);
  };

  const goQuizPage = () => {
    navigate(routePath.QUIZ);
  };

  const goMyPage = () => {
    navigate(routePath.MYPAGE);
  };

  const goAlarmPage = () => {
    navigate(routePath.ALARM);
  };

  const goFriendPage = () => {
    navigate(routePath.FRIEND);
  };

  return {
    goBack,
    goLoginPage,
    goMainPage,
    goHomePage,
    goRecordPage,
    goQuizPage,
    goMyPage,
    goAlarmPage,
    goFriendPage,
  };
};

export default useEasyNavigate;
