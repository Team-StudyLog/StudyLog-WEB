import TextHeader from "../../components/Header/TextHeader";
import IcCrown from "../../assets/ic-crown.svg";
import RankItem from "./RankItem";
import RankTopItem from "./RankTopItem";
import IcRank from "../../assets/ic-rank.svg";
import { useFetchRankList } from "../../apis/rank/useFetchRankList";

const RankPage = () => {
  const { data: rankList } = useFetchRankList();

  return (
    <div className="flex flex-col">
      <TextHeader text="이달의 기록왕" />
      <div className={`relative flex flex-col mt-[40px] px-[26px]`}>
        {rankList && rankList.length > 0 ? (
          <>
            <section className={`flex justify-center items-end gap-x-[28px]`}>
              {rankList[1] && (
                <RankTopItem
                  rank={2}
                  profileImage={rankList[1].profileImage}
                  nickname={rankList[1].nickname}
                  code={rankList[1].code}
                />
              )}
              <div className="relative">
                <img
                  src={IcCrown}
                  alt="crown"
                  className={`absolute top-[-30px] left-1/2 transform -translate-x-1/2`}
                />
                <RankTopItem
                  rank={1}
                  profileImage={rankList[0].profileImage}
                  nickname={rankList[0].nickname}
                  code={rankList[0].code}
                />
              </div>
              {rankList[2] && (
                <RankTopItem
                  rank={3}
                  profileImage={rankList[2].profileImage}
                  nickname={rankList[2].nickname}
                  code={rankList[2].code}
                />
              )}
            </section>
            <hr
              className={`w-full mt-[38px] mb-[16px] h-[1px] text-gray-200`}
            />
            {rankList.length > 3 &&
              rankList
                .slice(3)
                .map((item, index) => (
                  <RankItem
                    key={item.id}
                    rank={index + 4}
                    profileImage={item.profileImage}
                    nickname={item.nickname}
                    count={item.recordCount}
                  />
                ))}
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
