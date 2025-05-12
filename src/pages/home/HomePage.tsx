import useEasyNavigate from "../../hooks/useEasyNavigate.ts";

const HomePage = () => {
  const { goLoginPage } = useEasyNavigate();
  return (
    <>
      <div className={`flex-col`}>
        <header className={`flex justify-between`}>
          <p>홈페이지</p>
          <p onClick={goLoginPage}>로그인</p>
        </header>
      </div>
    </>
  );
};

export default HomePage;
