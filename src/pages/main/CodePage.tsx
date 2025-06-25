import { useParams } from "react-router-dom";
import MainPage from "./MainPage.tsx";
import OtherUserPage from "./OtherUserPage.tsx";
import { storageKey } from "../../constants/storageKey.ts";

const CodePage = () => {
  const { code } = useParams();
  const myCode = localStorage.getItem(storageKey.USER_CODE);

  if (!code) return <div>잘못된 경로입니다.</div>;

  return code === myCode ? <MainPage /> : <OtherUserPage />;
};

export default CodePage;
