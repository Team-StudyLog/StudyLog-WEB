import TextHeader from "../../../components/Header/TextHeader.tsx";
import { useState } from "react";
import FirstUserFormPage from "./FirstUserFormPage.tsx";
import SecondUserFormPage from "./SecondUserFormPage.tsx";
import { formPageStyle } from "./SignupPage.styles.ts";

const SignupPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [nickname, setNickname] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className={formPageStyle}>
      <TextHeader
        text={`회원가입`}
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
          type={"write"}
          selectedImage={selectedImage as File}
          nickname={nickname}
          setNickname={setNickname}
          description={description}
          setDescription={setDescription}
        />
      )}
    </div>
  );
};

export default SignupPage;
