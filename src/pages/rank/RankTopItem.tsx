interface RankTopItemProps {
  rank: number;
  profileImage: string;
}

const RankTopItem = ({ rank, profileImage }: RankTopItemProps) => {
  return (
    <div className={`flex flex-col items-center gap-y-[12px]`}>
      <img
        src={profileImage}
        alt="rank"
        className={
          rank === 1
            ? `w-[100px] h-[100px] rounded-full object-cover`
            : `w-[80px] h-[80px] rounded-full object-cover`
        }
      />
      <p className={`font-body01-bold-14 text-gray-700`}>{rank}등</p>
    </div>
  );
};

export default RankTopItem;
