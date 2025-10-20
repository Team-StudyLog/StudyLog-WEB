import TextHeader from "../../components/Header/TextHeader";
import IcCrown from "../../assets/ic-crown.svg";
import RankItem from "./RankItem";
import RankTopItem from "./RankTopItem";
import IcRank from "../../assets/ic-rank.svg";
import { useFetchFriendList } from "../../apis/mypage/useFetchFriendList";

const RankPage = () => {
  const { data: friends } = useFetchFriendList();
  return (
    <div className="flex flex-col">
      <TextHeader text="이달의 기록왕" />
      <div className={`relative flex flex-col mt-[40px] px-[26px]`}>
        {friends && friends.length > 0 ? (
          <>
            <section className={`flex justify-center items-end gap-x-[28px]`}>
              <RankTopItem
                rank={2}
                profileImage={"https://placehold.co/80"}
                nickname={"유저2"}
              />
              <img
                src={IcCrown}
                alt="crown"
                className={`absolute top-[-30px] left-1/2 transform -translate-x-1/2`}
              />
              <RankTopItem
                rank={1}
                profileImage={"https://placehold.co/100"}
                nickname={"유저1"}
              />
              <RankTopItem
                rank={3}
                profileImage={"https://placehold.co/80"}
                nickname={"유저3"}
              />
            </section>
            <hr
              className={`w-full mt-[38px] mb-[16px] h-[1px] text-gray-200`}
            />
            <RankItem
              rank={4}
              profileImage={"https://placehold.co/46"}
              nickname={"채영"}
              count={100}
            />
            <RankItem
              rank={5}
              profileImage={"https://placehold.co/46"}
              nickname={"채영"}
              count={90}
            />
            <RankItem
              rank={6}
              profileImage={"https://placehold.co/46"}
              nickname={"채영"}
              count={70}
            />
          </>
        ) : (
          <div
            className={`flex flex-col items-center justify-center mt-[200px] gap-y-[20px]`}
          >
            <img src={IcRank} alt="rank" />
            <p className={`font-head06-semibold-16 text-gray-600`}>
              친구를 추가하여 랭킹에 참여해보세요
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RankPage;
