import TextHeader from "../../components/Header/TextHeader.tsx";
import SearchInput from "../../components/Input/SearchInput.tsx";
import { useEffect, useState } from "react";
import FriendItem from "./components/FriendItem.tsx";
import useEasyNavigate from "../../hooks/useEasyNavigate.ts";
import { useFetchFriendList } from "../../apis/mypage/useFetchFriendList.ts";
import { useFetchFriendSearch } from "../../apis/mypage/useFetchFriendSearch.ts";
import useDebounce from "../../hooks/useDebounce.ts";

const FriendPage = () => {
  const [keyword, setKeyword] = useState<string>("");
  const debouncedKeyword = useDebounce(keyword, 300);
  const { data: friends } = useFetchFriendList();
  const { data: filteredFriends, mutate: searchFriends } =
    useFetchFriendSearch();
  const renderList = debouncedKeyword ? filteredFriends : friends;

  useEffect(() => {
    if (debouncedKeyword != "") searchFriends(debouncedKeyword);
  }, [debouncedKeyword, searchFriends]);

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
          <p className={`text-green-300`}>{friends?.length}</p>
        </div>
        <hr className={`w-full mt-[16px] text-gray-300`} />
        {renderList && renderList?.length > 0 ? (
          renderList?.map((friend, index) => (
            <FriendItem key={index} friend={friend} />
          ))
        ) : (
          <p
            className={`flex w-full justify-center font-body05-medium-14 text-gray-500 mt-[40px]`}
          >
            {debouncedKeyword ? "해당 친구가 없어요" : "친구가 없어요"}
          </p>
        )}
      </div>
    </div>
  );
};

export default FriendPage;
