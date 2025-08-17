import { type ChangeEvent, useRef } from "react";

const useImageInput = (setImage: (image: File) => void) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  return { fileInputRef, handleImageChange, handleImageClick };
};

export default useImageInput;
