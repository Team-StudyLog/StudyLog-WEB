import { Search } from "lucide-react";
import type { FriendT } from "../../../data/mockFriends.ts";

interface FriendHeaderProps {
  friends: FriendT[];
}

const UserProfile = ({ id, name, profileImageUrl }: FriendT) => {
  return (
    <div
      key={id}
      className={`flex flex-col items-center justify-center shrink-0`}
      onClick={() => {
        console.log(`친구 ${name} 프로필로 이동`);
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

const FriendHeader = ({ friends }: FriendHeaderProps) => {
  return (
    <header
      className={`flex px-[10px] gap-x-[8px] mt-[6px] mb-[20px] items-start overflow-x-auto whitespace-nowrap`}
    >
      <div
        className={`flex flex-col items-center justify-center 
        w-[68px] h-[68px] bg-green-300 rounded-[20px] text-white shrink-0`}
        onClick={() => {
          console.log("친구 페이지로 이동");
        }}
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

export default FriendHeader;
