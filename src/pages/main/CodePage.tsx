import { useParams } from "react-router-dom";
import MainPage from "./MainPage.tsx";
import OtherUserPage from "./OtherUserPage.tsx";

const CodePage = () => {
  const { code } = useParams();
  const myCode = localStorage.getItem("myCode");

  if (!code) return <div>잘못된 경로입니다.</div>;

  return code === myCode ? <MainPage /> : <OtherUserPage />;
};

export default CodePage;
