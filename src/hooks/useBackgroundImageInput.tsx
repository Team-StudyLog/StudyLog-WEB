import { type ChangeEvent, useRef } from "react";

const useBackgroundImageInput = (setImage: (image: File | null) => void) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // 업로드 중 원본 파일이 바뀌어도 안전하게 보내기 위해 '복제'해서 고정
    const buf = await file.arrayBuffer();
    const frozen = new File([buf], file.name, {
      type: file.type,
      lastModified: Date.now(),
    });

    setImage(frozen);

    // 같은 파일을 다시 선택해도 onChange가 동작하도록 리셋
    event.target.value = "";
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  return { fileInputRef, handleImageChange, handleImageClick };
};

export default useBackgroundImageInput;
