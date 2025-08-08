import BottomButton from "../../../components/Button/BottomButton.tsx";
import InputLabel from "../../../components/Label/InputLabel.tsx";
import TextInput from "../../../components/Input/TextInput.tsx";
import { formContent, formHeaderWrapper } from "./SignupPage.styles.ts";
import { usePostSignup } from "../../../apis/auth/usePostSignup.ts";
import { usePatchProfile } from "../../../apis/mypage/usePatchProfile.ts";

interface SecondUserFormPageProps {
  type: "write" | "edit";
  selectedImage: string | File;
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
  const { mutate: postSignup } = usePostSignup();
  const { mutate: patchProfile } = usePatchProfile();

  const isButtonDisabled =
    nickname.length === 0 ||
    nickname.length > 20 ||
    description.length === 0 ||
    description.length > 100;

  const handleSubmit = async () => {
    let imageFile: File | undefined = undefined;
    if (typeof selectedImage !== "string") {
      imageFile = selectedImage as File;
    }
    const payload = {
      profileImage: imageFile as File,
      nickname,
      intro: description,
    };
    if (type === "write") postSignup(payload);
    else patchProfile(payload);
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
        onClick={handleSubmit}
        disabled={isButtonDisabled}
      />
    </>
  );
};

export default SecondUserFormPage;
