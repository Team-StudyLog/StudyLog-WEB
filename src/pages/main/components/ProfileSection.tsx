import LevelChip from "./LevelChip.tsx";
import { Share2 } from "lucide-react";
import handleShare from "../../../utils/handleShare.ts";
import { useModalActions, useModalInfo } from "../../../hooks/useModal.ts";
import Modal from "../../../components/Modal/Modal.tsx";
import type { MainProfileResponse } from "../../../types/apis/main";
import { usePostFollow } from "../../../apis/mypage/usePostFollow.ts";
import { useDeleteUnfollow } from "../../../apis/mypage/useDeleteUnfollow.ts";

interface ProfileSectionProps {
  user: MainProfileResponse | undefined;
  type: "me" | "other";
  isFollowing?: boolean;
}

const ProfileSection = ({
  user,
  type,
  isFollowing = false,
}: ProfileSectionProps) => {
  const { isOpen, content } = useModalInfo();
  const { openModal } = useModalActions();
  const { mutate: follow } = usePostFollow();
  const { mutate: unfollow } = useDeleteUnfollow();

  const handleFollow = () => {
    if (!content) return;
    if (user?.code) follow(user.code);
  };
  const handleUnfollow = () => {
    if (!content) return;
    // if (user?.friendId) unfollow(user.friendId);
  };

  return (
    <section
      className={`flex w-full justify-between items-center gap-x-[60px] mb-[22px]`}
    >
      <div className={`flex flex-col flex-1`}>
        <LevelChip level={user?.level || 0} />
        <div className={`flex justify-between items-center mt-[11px]`}>
          <p className={`font-head02-bold-20 text-gray-700`}>
            {user?.name || ""}
          </p>
          {type === "me" ? (
            <Share2
              size={18}
              className={`text-gray-600 me-1`}
              onClick={() => {
                console.log(user?.code);
                handleShare(user?.code || "");
              }}
            />
          ) : (
            <p
              className={`font-body02-semibold-14 ${
                isFollowing ? "text-red" : "text-green-500"
              }`}
              onClick={() => openModal({ name: user?.name || "" })}
            >
              {isFollowing ? "언팔로우" : "팔로우"}
            </p>
          )}
        </div>
        <p className={`font-body08-regular-12 text-gray-700 mt-[8px]`}>
          {user?.intro || "아직 소개가 없어요"}
        </p>
      </div>
      <img
        src={user?.profileImage || undefined}
        alt={`${user?.name}의 프로필 이미지`}
        className={`object-cover size-[110px] rounded-full`}
      />

      {isOpen && content && (
        <Modal
          title={"알림"}
          text={
            isFollowing
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
