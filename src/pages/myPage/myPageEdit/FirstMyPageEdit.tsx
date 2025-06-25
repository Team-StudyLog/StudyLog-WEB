import { User } from "lucide-react";
import BottomButton from "../../../components/Button/BottomButton.tsx";
import {
  firstSignupImageBackground,
  firstSignupImageWrapper,
  firstSignupSelectedImage,
  signupContent,
  signupHeaderWrapper,
} from "../../auth/signup/SignupPage.styles.ts";
import ImageInput from "../../../components/Input/ImageInput.tsx";
import useImageInput from "../../../hooks/useImageInput.ts";

interface FirstMyPageEditProps {
  selectedImage: string | null;
  setSelectedImage: (image: string) => void;
  onNext: () => void;
}

const FirstMyPageEdit = ({
  selectedImage,
  setSelectedImage,
  onNext,
}: FirstMyPageEditProps) => {
  const { fileInputRef, handleImageChange, handleImageClick } =
    useImageInput(setSelectedImage);

  return (
    <>
      <div className={signupContent}>
        <div className={signupHeaderWrapper}>
          <p className={`text-gray-700`}>1</p>
          <p className={`text-gray-400`}>/2</p>
        </div>
        <h2 className={`font-head02-bold-20 text-gray-700 mt-[8px]`}>
          프로필을 등록해주세요
        </h2>
        <div className={firstSignupImageWrapper} onClick={handleImageClick}>
          <div className={firstSignupImageBackground}>
            <ImageInput ref={fileInputRef} onChange={handleImageChange} />
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="프로필 이미지"
                className={firstSignupSelectedImage}
              />
            ) : (
              <User size={60} className={`text-gray-500`} />
            )}
          </div>
        </div>
      </div>
      <BottomButton
        text={"다음"}
        disabled={selectedImage == null}
        onClick={onNext}
      />
    </>
  );
};

export default FirstMyPageEdit;
