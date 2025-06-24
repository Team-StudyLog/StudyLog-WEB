import LevelChip from "./LevelChip.tsx";
import { Share2 } from "lucide-react";
import type { UserT } from "../../../data/mockUser.ts";
import handleShare from "../../../utils/handleShare.ts";

interface ProfileSectionProps {
  user: UserT;
  type: "me" | "other";
  isFollowing?: boolean;
}

const ProfileSection = ({ user, type, isFollowing }: ProfileSectionProps) => {
  const handleFollow = () => {
    console.log("팔로우");
  };
  const handleUnfollow = () => {
    console.log("언팔로우");
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
          ) : isFollowing ? (
            <p
              className={`font-body02-semibold-14 text-red`}
              onClick={handleUnfollow}
            >
              언팔로우
            </p>
          ) : (
            <p
              className={`font-body02-semibold-14 text-green-500`}
              onClick={handleFollow}
            >
              팔로우
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
    </section>
  );
};

export default ProfileSection;
