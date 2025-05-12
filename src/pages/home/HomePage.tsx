import useEasyNavigate from "../../hooks/useEasyNavigate.ts";

const HomePage = () => {
  const { goMyPage, goLoginPage } = useEasyNavigate();
  return (
    <>
      <div className={`flex-col`}>
        <header className={`flex justify-between text-xl p-4`}>
          <p onClick={goMyPage}>마이페이지</p>
          <p onClick={goLoginPage}>로그인</p>
        </header>
      </div>
    </>
  );
};

export default HomePage;
