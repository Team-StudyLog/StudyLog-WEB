import { useNavigate } from "react-router-dom";
import routePath from "../routes/routePath.ts";

const useEasyNavigate = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const goLoginPage = () => {
    navigate(routePath.LOGINPAGE, { replace: true });
  };

  const goSignupPage = () => {
    navigate(routePath.SIGNUP);
  };

  const goHomePage = () => {
    navigate(routePath.HOMEPAGE);
  };

  const goCodePage = (code: string) => {
    navigate(routePath.CODE.replace(":code", code), { replace: true });
  };

  const goRecordPage = () => {
    navigate(routePath.RECORD);
  };

  const goRecordDetailPage = (recordId: number) => {
    navigate(routePath.RECORD_DETAIL.replace(":recordId", String(recordId)));
  };

  const goRecordEditPage = (recordId: number) => {
    navigate(routePath.RECORD_EDIT.replace(":recordId", String(recordId)));
  };

  const goRecordWritePage = () => {
    navigate(routePath.RECORD_WRITE);
  };

  const goCategoryPage = () => {
    navigate(routePath.CATEGORY);
  };

  const goQuizPage = () => {
    navigate(routePath.QUIZ);
  };

  const goQuizDetailPage = (quizId: number) => {
    navigate(routePath.QUIZ_DETAIL.replace(":quizId", String(quizId)));
  };

  const goMyPage = () => {
    navigate(routePath.MYPAGE);
  };

  const goMyPageEdit = () => {
    navigate(routePath.MYPAGE_EDIT);
  };

  const goAlarmPage = () => {
    navigate(routePath.ALARM);
  };

  const goFriendPage = () => {
    navigate(routePath.FRIEND);
  };

  const goFriendAddPage = () => {
    navigate(routePath.FRIEND_ADD);
  };

  return {
    goBack,
    goLoginPage,
    goSignupPage,
    goCodePage,
    goHomePage,
    goRecordPage,
    goRecordDetailPage,
    goRecordEditPage,
    goRecordWritePage,
    goCategoryPage,
    goQuizPage,
    goQuizDetailPage,
    goMyPage,
    goMyPageEdit,
    goAlarmPage,
    goFriendPage,
    goFriendAddPage,
  };
};

export default useEasyNavigate;
