import Header from "../../components/Header/Header.tsx";
import SearchInput from "../../components/Input/SearchInput.tsx";
import { useState } from "react";

const HomePage = () => {
  const [keyword, setKeyword] = useState("");
  return (
    <>
      <div className={`flex-col`}>
        <Header />
        <SearchInput
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder={"제목으로 기록을 검색하세요"}
        />
      </div>
    </>
  );
};

export default HomePage;
