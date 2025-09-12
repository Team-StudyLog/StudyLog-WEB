import { Search } from "lucide-react";
import useEasyNavigate from "../../../hooks/useEasyNavigate.ts";
import type { FetchFriendResponse } from "../../../apis/mypage/useFetchFriendSearch.ts";

interface FriendHeaderProps {
  isPending: boolean;
  friends: FetchFriendResponse[];
}

const FriendHeader = ({ isPending, friends }: FriendHeaderProps) => {
  const { goFriendPage } = useEasyNavigate();
  return (
    <header
      className={`flex px-[10px] gap-x-[8px] mt-[6px] mb-[20px] items-start overflow-x-auto whitespace-nowrap`}
    >
      <div
        className={`flex flex-col items-center justify-center 
        w-[68px] h-[68px] bg-green-300 rounded-[20px] text-white shrink-0`}
        onClick={goFriendPage}
      >
        <Search size={24} />
        <span className={`mt-[4px] font-body03-semibold-12`}>친구찾기</span>
      </div>
      {isPending
        ? Array.from({ length: 10 }).map((_, index) => (
            <UserProfileSkeleton key={index} />
          ))
        : friends.map((friend, index) => (
            <UserProfile
              key={index}
              code={friend.code}
              nickname={friend.nickname}
              profileImage={friend.profileImage}
            />
          ))}
    </header>
  );
};

const UserProfileSkeleton = () => {
  return (
    <div
      className={
        "border border-gray-300 bg-gray-300 animate-pulse rounded-[20px] size-[68px] shrink-0"
      }
    />
  );
};

const UserProfile = ({
  code,
  nickname,
  profileImage,
}: {
  code: string;
  nickname: string;
  profileImage: string;
}) => {
  const { goOtherUserPage } = useEasyNavigate();
  return (
    <div
      key={code}
      className={`flex flex-col items-center justify-center shrink-0`}
      onClick={() => {
        goOtherUserPage(code);
      }}
    >
      <img
        src={profileImage}
        alt={`${nickname}의 프로필 이미지`}
        className={`border border-gray-300 size-[68px] aspect-square rounded-[20px] object-cover`}
        loading={"lazy"}
      />
      <span className={`mt-[6px] font-body03-semibold-12 text-gray-600`}>
        {nickname}
      </span>
    </div>
  );
};

export default FriendHeader;
