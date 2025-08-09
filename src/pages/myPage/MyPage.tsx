import TextHeader from "../../components/Header/TextHeader.tsx";
import ButtonWithArrow from "../../components/Button/ButtonWithArrow.tsx";
import handleShare from "../../utils/handleShare.ts";
import useEasyNavigate from "../../hooks/useEasyNavigate.ts";
import MyPageItem from "./components/MyPageItem.tsx";
import { useModalActions, useModalInfo } from "../../hooks/useModal.ts";
import Modal from "../../components/Modal/Modal.tsx";
import { useFetchMyPage } from "../../apis/mypage/useFetchMyPage.ts";

const MyPage = () => {
  const { data } = useFetchMyPage();
  const { goHomePage, goFriendPage, goMyPageEdit } = useEasyNavigate();
  const { isOpen, content } = useModalInfo();
  const { openModal, closeModal } = useModalActions();

  const handleLogout = () => {
    if (!content) return;
    closeModal();
    alert("로그아웃 되었습니다.");
    goHomePage();
    localStorage.clear();
  };

  const handleSignOut = () => {
    if (!content) return;
    closeModal();
    alert("회원탈퇴 되었습니다.");
    goHomePage();
    localStorage.clear();
  };

  return (
    <div className={`flex flex-col h-screen`}>
      <TextHeader text={"마이페이지"} />
      <div className={`flex flex-col px-[26px] py-[20px]`}>
        <section
          className={`flex w-full justify-between items-center gap-x-[15px] mb-[28px]`}
        >
          <img
            src={data?.profileImage}
            alt={`프로필 이미지`}
            className={`h-[70px] w-[70px] rounded-full object-cover`}
          />
          <div
            className={`flex flex-grow-1 flex-col justify-center gap-y-[8px]`}
          >
            <p className={`font-head02-bold-20 text-gray-700`}>
              {data?.nickname}
            </p>
            <span className={`font-body08-regular-12 text-gray-700`}>
              {data?.intro}
            </span>
          </div>
        </section>
        <ButtonWithArrow
          text={`프로필 수정`}
          className={`font-body02-semibold-14`}
          onClick={goMyPageEdit}
        />
        <section
          className={`flex w-full justify-between mt-[11px] gap-x-[20px] mb-[33px]`}
        >
          <ButtonWithArrow
            text={`친구 목록`}
            className={`font-body02-semibold-14`}
            onClick={goFriendPage}
            children={
              <p className={`text-gray-700 font-head06-semibold-16`}>
                {data?.friendCount}명
              </p>
            }
          />
          <ButtonWithArrow
            text={`코드 공유하기`}
            className={`font-body02-semibold-14`}
            onClick={() => handleShare(data?.code || "")}
            children={
              <p className={`text-gray-700 font-head06-semibold-16`}>
                {data?.code}
              </p>
            }
          />
        </section>
        <h3 className={`font-head06-semibold-16 text-gray-700 mb-[16px]`}>
          이용안내
        </h3>
        <MyPageItem text={`서비스 이용약관`} onClick={() => {}} />
        <MyPageItem text={`개인정보 처리방침`} onClick={() => {}} />
        <hr className={`w-full text-gray-200 mt-[13px]`} />
        <h3 className={`font-head06-semibold-16 text-gray-700 py-[16px]`}>
          기타
        </h3>
        <MyPageItem
          text={`로그아웃`}
          onClick={() => openModal({ name: "logout" })}
        />
        <MyPageItem
          text={`회원탈퇴`}
          onClick={() => openModal({ name: "signout" })}
          isRed={true}
        />
      </div>

      {isOpen && content && (
        <Modal
          title={"알림"}
          text={
            content.name === "logout"
              ? "로그아웃 하시겠습니까?"
              : "회원탈퇴 하시겠습니까?"
          }
          onConfirm={content.name === "logout" ? handleLogout : handleSignOut}
        />
      )}
    </div>
  );
};

export default MyPage;
