import LevelChip from "./LevelChip.tsx";
import { Share2 } from "lucide-react";
import handleShare from "../../../utils/handleShare.ts";
import { useModalActions, useModalInfo } from "../../../hooks/useModal.ts";
import Modal from "../../../components/Modal/Modal.tsx";
import type { MainProfileResponse } from "../../../types/apis/main";
import { usePostFollow } from "../../../apis/mypage/usePostFollow.ts";
import { useDeleteUnfollow } from "../../../apis/mypage/useDeleteUnfollow.ts";
import { useEffect, useState } from "react";

interface ProfileSectionProps {
  isPending: boolean;
  user: MainProfileResponse | undefined;
  type: "me" | "other";
  isFollowing?: boolean;
}

const ProfileSection = ({
  isPending,
  user,
  type,
  isFollowing = false,
}: ProfileSectionProps) => {
  const { isOpen, content } = useModalInfo();
  const { openModal } = useModalActions();
  const { mutate: follow, isPending: followPending } = usePostFollow();
  const { mutate: unfollow, isPending: unfollowPending } = useDeleteUnfollow();
  const [following, setFollowing] = useState<boolean>(isFollowing);
  const pending = followPending || unfollowPending;

  useEffect(() => setFollowing(isFollowing), [isFollowing]);

  const handleFollow = () => {
    if (!content) return;
    setFollowing(true);
    if (user?.code) {
      follow(user.code, {
        onError: () => setFollowing(false),
      });
    }
  };
  const handleUnfollow = () => {
    if (!content) return;
    setFollowing(false);
    if (user?.userId) {
      unfollow(user.userId, {
        onError: () => setFollowing(true),
      });
    }
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
              className={`font-body02-semibold-14 cursor-pointer ${
                following
                  ? "text-red hover:text-red-500"
                  : "text-green-500 hover:text-green-600"
              }`}
              onClick={() => {
                if (pending) return;
                openModal({ name: user?.name || "" });
              }}
            >
              {following ? "언팔로우" : "팔로우"}
            </p>
          )}
        </div>
        <p className={`font-body08-regular-12 text-gray-700 mt-[8px]`}>
          {user?.intro || "아직 소개가 없어요"}
        </p>
      </div>
      {isPending ? (
        <div
          className={`animate-pulse w-[110px] h-[110px] rounded-full bg-gray-300`}
        />
      ) : (
        <img
          loading={"lazy"}
          src={user?.profileImage || undefined}
          alt={`프로필 이미지`}
          className={`object-cover size-[110px] rounded-full`}
        />
      )}

      {isOpen && content && (
        <Modal
          title={"알림"}
          text={
            following
              ? `${content.name}님을 언팔로우하시겠습니까?`
              : `${content.name}님을 팔로우하시겠습니까?`
          }
          onConfirm={following ? handleUnfollow : handleFollow}
        />
      )}
    </section>
  );
};

export default ProfileSection;
