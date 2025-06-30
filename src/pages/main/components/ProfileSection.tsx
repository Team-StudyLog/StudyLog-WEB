import LevelChip from "./LevelChip.tsx";
import { Share2 } from "lucide-react";
import type { UserT } from "../../../data/mockUser.ts";
import handleShare from "../../../utils/handleShare.ts";
import { useModalActions, useModalInfo } from "../../../hooks/useModal.ts";
import Modal from "../../../components/Modal/Modal.tsx";
import { useState } from "react";

interface ProfileSectionProps {
  user: UserT;
  type: "me" | "other";
  isFollowing?: boolean;
}

const ProfileSection = ({
  user,
  type,
  isFollowing = false,
}: ProfileSectionProps) => {
  const { isOpen, content } = useModalInfo();
  const { openModal, closeModal } = useModalActions();
  const [isFollowingState, setIsFollowingState] = useState(isFollowing);

  const handleFollow = () => {
    if (!content) return;
    closeModal();
    setIsFollowingState(!isFollowingState);
  };
  const handleUnfollow = () => {
    if (!content) return;
    closeModal();
    setIsFollowingState(!isFollowingState);
  };

  return (
    <section
      className={`flex w-full justify-between items-center gap-x-[60px] mb-[22px]`}
    >
      <div className={`flex flex-col flex-1`}>
        <LevelChip level={user.level} />
        <div className={`flex justify-between items-center mt-[11px]`}>
          <p className={`font-head02-bold-20 text-gray-700`}>{user.name}</p>
          {type === "me" ? (
            <Share2
              size={18}
              className={`text-gray-600 me-1`}
              onClick={() => {
                console.log(user.code);
                handleShare(user.code);
              }}
            />
          ) : (
            <p
              className={`font-body02-semibold-14 ${
                isFollowingState ? "text-red" : "text-green-500"
              }`}
              onClick={() => openModal({ name: user.name })}
            >
              {isFollowingState ? "언팔로우" : "팔로우"}
            </p>
          )}
        </div>
        <p className={`font-body08-regular-12 text-gray-700 mt-[8px]`}>
          {user.description}
        </p>
      </div>
      <img
        src={user.profileImageUrl}
        alt={`${user.name}의 프로필 이미지`}
        className={`object-cover size-[110px] rounded-full`}
      />

      {isOpen && content && (
        <Modal
          title={"알림"}
          text={
            isFollowingState
              ? `${content.name}님을 언팔로우하시겠습니까?`
              : `${content.name}님을 팔로우하시겠습니까?`
          }
          onConfirm={isFollowing ? handleUnfollow : handleFollow}
        />
      )}
    </section>
  );
};

export default ProfileSection;
