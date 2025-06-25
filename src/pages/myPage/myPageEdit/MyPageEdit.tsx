import TextHeader from "../../../components/Header/TextHeader.tsx";
import { signupPageStyle } from "../../auth/signup/SignupPage.styles.ts";
import { useState } from "react";
import FirstMyPageEdit from "./FirstMyPageEdit.tsx";
import SecondMyPageEdit from "./SecondMyPageEdit.tsx";

const MyPageEdit = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(
    "https://avatars.githubusercontent.com/u/91470334?v=4"
  );

  return (
    <div className={signupPageStyle}>
      <TextHeader
        text={"프로필 수정"}
        onClick={currentPage === 2 ? () => setCurrentPage(1) : undefined}
      />
      {currentPage === 1 ? (
        <FirstMyPageEdit
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          onNext={() => setCurrentPage(2)}
        />
      ) : (
        <SecondMyPageEdit selectedImage={selectedImage} />
      )}
    </div>
  );
};

export default MyPageEdit;
