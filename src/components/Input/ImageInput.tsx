import React, { type Ref } from "react";

interface ImageInputProps {
  ref: Ref<HTMLInputElement> | null;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

const ImageInput = React.forwardRef<HTMLInputElement, ImageInputProps>(
  ({ onChange }, ref) => {
    return (
      <input
        type="file"
        accept="image/*"
        ref={ref}
        style={{ display: "none" }}
        onChange={onChange}
      />
    );
  }
);

export default ImageInput;
