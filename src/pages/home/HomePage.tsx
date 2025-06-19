import useEasyNavigate from "../../hooks/useEasyNavigate.ts";
import Header from "../../components/Header.tsx";
import FloatingActionButton from "../../components/Button/FloatingActionButton.tsx";

const HomePage = () => {
  const { goMyPage, goLoginPage } = useEasyNavigate();
  return (
    <>
      <div className={`flex-col`}>
        <Header />
        <p onClick={goMyPage} className={`text-red`}>
          마이페이지
        </p>
        <p onClick={goLoginPage}>로그인</p>
        <FloatingActionButton onClick={() => {}} text={"기록하러 가기"} />
      </div>
    </>
  );
};

export default HomePage;
