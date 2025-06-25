import TextHeader from "../../components/Header/TextHeader.tsx";
import SearchInput from "../../components/Input/SearchInput.tsx";
import { useMemo, useState } from "react";
import { mockFriends } from "../../data/mockFriends.ts";
import FriendItem from "./components/FriendItem.tsx";
import useEasyNavigate from "../../hooks/useEasyNavigate.ts";

const FriendPage = () => {
  const [keyword, setKeyword] = useState<string>("");
  const filteredFriends = useMemo(() => {
    const lowerKeyword = keyword.trim().toLowerCase();
    return mockFriends.filter((friend) =>
      friend.name.toLowerCase().includes(lowerKeyword)
    );
  }, [keyword]);

  const { goFriendAddPage } = useEasyNavigate();

  return (
    <div className={`flex flex-col`}>
      <TextHeader text={"친구 목록"} />
      <SearchInput
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        type={"friend"}
        onClick={goFriendAddPage}
      />
      <div className={`flex flex-col px-[26px]`}>
        <div className={`flex font-head05-semibold-20 mt-[20px]`}>
          <h3 className={`text-gray-700`}>친구 목록&nbsp;</h3>
          <p className={`text-green-300`}>{mockFriends.length}</p>
        </div>
        <hr className={`w-full mt-[16px] text-gray-300`} />
        {filteredFriends.length > 0 ? (
          filteredFriends.map((friend, index) => (
            <FriendItem key={index} friend={friend} />
          ))
        ) : (
          <p
            className={`flex w-full justify-center font-body05-medium-14 text-gray-500 mt-[40px]`}
          >
            {mockFriends.length > 0 ? "해당 친구가 없어요" : "친구가 없어요"}
          </p>
        )}
      </div>
    </div>
  );
};

export default FriendPage;
