import useEasyNavigate from "../../hooks/useEasyNavigate.ts";
import Header from "../../components/Header.tsx";

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
      </div>
    </>
  );
};

export default HomePage;
