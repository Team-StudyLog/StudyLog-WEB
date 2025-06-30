import BottomButton from "../../../components/Button/BottomButton.tsx";
import useEasyNavigate from "../../../hooks/useEasyNavigate.ts";
import InputLabel from "../../../components/Label/InputLabel.tsx";
import TextInput from "../../../components/Input/TextInput.tsx";
import { formContent, formHeaderWrapper } from "./SignupPage.styles.ts";
import { storageKey } from "../../../constants/storageKey.ts";

interface SecondUserFormPageProps {
  type: "write" | "edit";
  selectedImage: string | null;
  nickname: string;
  setNickname: (nickname: string) => void;
  description: string;
  setDescription: (description: string) => void;
}

const SecondUserFormPage = ({
  type,
  selectedImage,
  nickname,
  setNickname,
  description,
  setDescription,
}: SecondUserFormPageProps) => {
  const { goCodePage } = useEasyNavigate();
  const isButtonDisabled =
    nickname.length === 0 ||
    nickname.length > 20 ||
    description.length === 0 ||
    description.length > 100;

  const handleSubmit = () => {
    console.log(type, selectedImage, nickname, description);
    localStorage.setItem(storageKey.IS_LOGGED_IN, "true");
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
          goCodePage("UX320");
        }}
        disabled={isButtonDisabled}
      />
    </>
  );
};

export default SecondUserFormPage;
