import TextHeader from "../../components/Header/TextHeader.tsx";
import SearchInput from "../../components/Input/SearchInput.tsx";
import { useState } from "react";
import { mockFriends } from "../../data/mockFriends.ts";
import FriendItem from "./components/FriendItem.tsx";

const FriendPage = () => {
  const [keyword, setKeyword] = useState<string>("");

  return (
    <div className={`flex flex-col`}>
      <TextHeader text={"친구 목록"} />
      <SearchInput
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        type={"friend"}
      />
      <div className={`flex flex-col px-[26px]`}>
        <div className={`flex font-head05-semibold-20 mt-[20px]`}>
          <h3 className={`text-gray-700`}>친구 목록&nbsp;</h3>
          <p className={`text-green-300`}>{mockFriends.length}</p>
        </div>
        <hr className={`w-full mt-[16px] text-gray-300`} />
        {mockFriends.length > 0 ? (
          mockFriends.map((friend, index) => (
            <FriendItem key={index} friend={friend} />
          ))
        ) : (
          <p className={`text-gray-500 mt-[40px]`}>친구가 없어요</p>
        )}
      </div>
    </div>
  );
};

export default FriendPage;
