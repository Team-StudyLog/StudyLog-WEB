import TextHeader from "../../../components/Header/TextHeader.tsx";
import { useState } from "react";
import FirstSignupPage from "./FirstSignupPage.tsx";
import SecondSignupPage from "./SecondSignupPage.tsx";
import { formPageStyle } from "./SignupPage.styles.ts";

const SignupPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className={formPageStyle}>
      <TextHeader
        text={`회원가입`}
        onClick={currentPage === 2 ? () => setCurrentPage(1) : undefined}
      />
      {currentPage === 1 ? (
        <FirstSignupPage
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          onNext={() => setCurrentPage(2)}
        />
      ) : (
        <SecondSignupPage selectedImage={selectedImage} />
      )}
    </div>
  );
};

export default SignupPage;
