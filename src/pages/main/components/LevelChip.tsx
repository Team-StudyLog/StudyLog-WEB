interface LevelChipProps {
  level: number;
}

const LevelChip = ({ level }: LevelChipProps) => {
  return (
    <div
      className={`w-fit px-[14px] py-[6.5px] border border-green-300 rounded-[16px]`}
    >
      <span className={`text-green-300 font-body03-semibold-12`}>
        Lv.{level}
      </span>
    </div>
  );
};

export default LevelChip;
