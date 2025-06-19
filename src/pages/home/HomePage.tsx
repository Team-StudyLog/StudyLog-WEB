import Header from "../../components/Header/Header.tsx";
import { useState } from "react";
import TextInput from "../../components/Input/TextInput.tsx";

const HomePage = () => {
  const [keyword, setKeyword] = useState("");
  const [content, setContent] = useState("");
  return (
    <>
      <div className={`flex-col`}>
        <Header />
        <TextInput
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          errorText={`제목은 20자 이내로 입력해주세요`}
        />
        <TextInput
          type={"content"}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          errorText={`내용은 100자 이내로 입력해주세요`}
          maxLength={100}
        />
      </div>
    </>
  );
};

export default HomePage;
