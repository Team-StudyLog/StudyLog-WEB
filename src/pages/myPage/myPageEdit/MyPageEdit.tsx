import TextHeader from "../../../components/Header/TextHeader.tsx";
import { formPageStyle } from "../../auth/signup/SignupPage.styles.ts";
import { useState } from "react";
import FirstUserFormPage from "../../auth/signup/FirstUserFormPage.tsx";
import SecondUserFormPage from "../../auth/signup/SecondUserFormPage.tsx";

const MyPageEdit = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string | File>(
    "https://avatars.githubusercontent.com/u/91470334?v=4"
  );
  const [nickname, setNickname] = useState("닉네임");
  const [description, setDescription] = useState("한줄소개");

  return (
    <div className={formPageStyle}>
      <TextHeader
        text={"프로필 수정"}
        onClick={currentPage === 2 ? () => setCurrentPage(1) : undefined}
      />
      {currentPage === 1 ? (
        <FirstUserFormPage
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          onNext={() => setCurrentPage(2)}
        />
      ) : (
        <SecondUserFormPage
          type={"edit"}
          selectedImage={selectedImage}
          nickname={nickname}
          setNickname={setNickname}
          description={description}
          setDescription={setDescription}
        />
      )}
    </div>
  );
};

export default MyPageEdit;
