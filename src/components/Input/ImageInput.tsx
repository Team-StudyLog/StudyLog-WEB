import React, { type Ref } from "react";

interface ImageInputProps {
  ref: Ref<HTMLInputElement> | null;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}
const ImageInput = ({ ref, onChange }: ImageInputProps) => {
  return (
    <input
      type="file"
      accept="image/*"
      ref={ref}
      style={{ display: "none" }}
      onChange={onChange}
    />
  );
};

export default ImageInput;
