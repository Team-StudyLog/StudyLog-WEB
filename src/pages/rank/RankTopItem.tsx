interface RankTopItemProps {
  rank: number;
  profileImage: string;
  nickname: string;
}

const RankTopItem = ({ rank, profileImage, nickname }: RankTopItemProps) => {
  return (
    <div className={`flex flex-col items-center`}>
      <img
        src={profileImage}
        alt="rank"
        className={
          rank === 1
            ? `w-[100px] h-[100px] rounded-full object-cover`
            : `w-[80px] h-[80px] rounded-full object-cover`
        }
      />
      <p className={`mt-[12px] text-center font-body01-bold-14 text-green-300`}>
        {rank}등
      </p>
      <p
        className={`mt-[6px] text-center font-body03-semibold-12 text-gray-700`}
      >
        {nickname}
      </p>
    </div>
  );
};

export default RankTopItem;
