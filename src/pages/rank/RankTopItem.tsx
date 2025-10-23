import useEasyNavigate from "../../hooks/useEasyNavigate";

interface RankTopItemProps {
  rank: number;
  profileImage: string;
  nickname: string;
  code: string;
}

const RankTopItem = ({
  rank,
  profileImage,
  nickname,
  code,
}: RankTopItemProps) => {
  const { goOtherUserPage } = useEasyNavigate();
  return (
    <div className={`flex flex-col items-center`}>
      <img
        src={profileImage}
        alt="rank"
        className={`cursor-pointer rounded-full object-cover ${rank === 1 ? `w-[100px] h-[100px]` : `w-[80px] h-[80px]`}`}
        onClick={() => goOtherUserPage(code)}
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
