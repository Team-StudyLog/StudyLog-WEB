import Header from "../../components/Header/Header.tsx";
import useEasyNavigate from "../../hooks/useEasyNavigate.ts";
import BottomButton from "../../components/Button/BottomButton.tsx";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    localStorage.setItem("myCode", "UX320");
  }, []);

  const { goMainPage } = useEasyNavigate();

  const code = "UX320";
  return (
    <div className={`flex flex-col`}>
      <Header />
      <BottomButton
        text={`메인페이지로 이동`}
        onClick={() => goMainPage(code)}
      />
    </div>
  );
};

export default HomePage;
