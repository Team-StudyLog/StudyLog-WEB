import TextHeader from "../../../components/Header/TextHeader.tsx";
import { useState } from "react";
import FirstSignupPage from "./FirstSignupPage.tsx";
import SecondSignupPage from "./SecondSignupPage.tsx";
import { signupPageStyle } from "./SignupPage.styles.ts";

const SignupPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className={signupPageStyle}>
      <TextHeader text={`회원가입`} />
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
