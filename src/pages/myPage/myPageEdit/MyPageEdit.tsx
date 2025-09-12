import TextHeader from "../../../components/Header/TextHeader.tsx";
import { formPageStyle } from "../../auth/signup/SignupPage.styles.ts";
import { useEffect, useState } from "react";
import FirstUserFormPage from "../../auth/signup/FirstUserFormPage.tsx";
import SecondUserFormPage from "../../auth/signup/SecondUserFormPage.tsx";
import { useFetchUserProfile } from "../../../apis/mypage/useFetchUserProfile.ts";

const MyPageEdit = () => {
  const { data } = useFetchUserProfile();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string | File>("");
  const [nickname, setNickname] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (data) {
      setSelectedImage(data.profileImage || "");
      setNickname(data.nickname || "");
      setDescription(data.intro || "");
    }
  }, [data]);

  return (
    <div className={formPageStyle}>
      <TextHeader
        text={"프로필 수정"}
        onClick={currentPage === 2 ? () => setCurrentPage(1) : undefined}
      />
      {currentPage === 1 ? (
        <FirstUserFormPage
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          onNext={() => setCurrentPage(2)}
        />
      ) : (
        <SecondUserFormPage
          type={"edit"}
          selectedImage={selectedImage}
          nickname={nickname}
          setNickname={setNickname}
          description={description}
          setDescription={setDescription}
        />
      )}
    </div>
  );
};

export default MyPageEdit;
