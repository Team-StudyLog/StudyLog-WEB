interface RankItemProps {
  rank: number;
  profileImage: string;
  nickname: string;
  count: number;
}

const RankItem = ({ rank, profileImage, nickname, count }: RankItemProps) => {
  return (
    <div className="flex w-full justify-between items-center mb-[18px] px-[10px]">
      <div className={`flex items-center`}>
        <p className={`font-head03-bold-18 text-green-300 me-[12px]`}>{rank}</p>
        <img
          src={profileImage}
          alt="rank"
          className={`w-[46px] h-[46px] me-[10px] rounded-full object-cover`}
        />
        <p className={`font-body02-semibold-14 text-gray-700`}>{nickname}</p>
      </div>
      <p className={`font-body05-medium-14 text-gray-700`}>{count}개</p>
    </div>
  );
};

export default RankItem;
