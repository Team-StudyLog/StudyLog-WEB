import BottomButton from "../../../components/Button/BottomButton.tsx";
import useEasyNavigate from "../../../hooks/useEasyNavigate.ts";
import InputLabel from "../../../components/Label/InputLabel.tsx";
import TextInput from "../../../components/Input/TextInput.tsx";
import { useState } from "react";
import {
  formContent,
  formHeaderWrapper,
} from "../../auth/signup/SignupPage.styles.ts";

interface SecondMyPageEditProps {
  selectedImage: string | null;
}

const SecondMyPageEdit = ({ selectedImage }: SecondMyPageEditProps) => {
  const { goBack } = useEasyNavigate();
  const [nickname, setNickname] = useState("이가을");
  const [description, setDescription] = useState("코딩을 좋아해요");
  const isButtonDisabled =
    nickname.length === 0 ||
    nickname.length > 20 ||
    description.length === 0 ||
    description.length > 100;

  const handleSubmit = () => {
    console.log(selectedImage);
    console.log(nickname);
    console.log(description);
  };

  return (
    <>
      <div className={formContent}>
        <div className={`${formHeaderWrapper} mb-[8px]`}>
          <p className={`text-gray-700`}>2</p>
          <p className={`text-gray-400`}>/2</p>
        </div>
        <InputLabel label={"닉네임을 입력해주세요"} htmlFor={"nickname"} />
        <TextInput
          type={"title"}
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          id={"nickname"}
          placeholder={"닉네임을 입력해주세요"}
          maxLength={20}
        />
        <div className={`h-[88px]`} />
        <InputLabel label={"한줄소개를 입력해주세요"} htmlFor={"description"} />
        <TextInput
          type={"content"}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          id={"description"}
          placeholder={"본인을 소개하는 짧은 글을 작성해주세요"}
          maxLength={100}
        />
      </div>
      <BottomButton
        text={"다음"}
        onClick={() => {
          handleSubmit();
          goBack();
        }}
        disabled={isButtonDisabled}
      />
    </>
  );
};

export default SecondMyPageEdit;
