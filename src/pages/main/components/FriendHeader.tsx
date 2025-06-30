import { Search } from "lucide-react";
import type { FriendT } from "../../../data/mockFriends.ts";
import useEasyNavigate from "../../../hooks/useEasyNavigate.ts";

interface FriendHeaderProps {
  friends: FriendT[];
}

const FriendHeader = ({ friends }: FriendHeaderProps) => {
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
      {friends.map((friend) => (
        <UserProfile
          key={friend.id}
          id={friend.id}
          name={friend.name}
          profileImageUrl={friend.profileImageUrl}
        />
      ))}
    </header>
  );
};

const UserProfile = ({ id, name, profileImageUrl }: FriendT) => {
  const { goCodePage } = useEasyNavigate();
  return (
    <div
      key={id}
      className={`flex flex-col items-center justify-center shrink-0`}
      onClick={() => {
        goCodePage(String(name));
      }}
    >
      <img
        src={profileImageUrl}
        alt={`${name}의 프로필 이미지`}
        className={`border border-gray-300 size-[68px] aspect-square rounded-[20px] object-cover`}
        loading={"lazy"}
      />
      <span className={`mt-[6px] font-body03-semibold-12 text-gray-600`}>
        {name}
      </span>
    </div>
  );
};

export default FriendHeader;
