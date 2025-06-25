import React, { useRef } from "react";
import { User } from "lucide-react";
import BottomButton from "../../../components/Button/BottomButton.tsx";
import {
  firstSignupImageBackground,
  firstSignupImageWrapper,
  firstSignupSelectedImage,
  signupContent,
  signupHeaderWrapper,
} from "./SignupPage.styles.ts";

interface FirstSignupPageProps {
  selectedImage: string | null;
  setSelectedImage: (image: string) => void;
  onNext: () => void;
}

const FirstSignupPage = ({
  selectedImage,
  setSelectedImage,
  onNext,
}: FirstSignupPageProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };
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
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="프로필 이미지"
                className={firstSignupSelectedImage}
                onClick={handleImageClick}
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

export default FirstSignupPage;
