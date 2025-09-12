interface DateChipProps {
  date: string;
}

const DateChip = ({ date }: DateChipProps) => {
  return (
    <span
      className={`inline-block max-w-max border border-green-300 rounded-[20px] 
      font-body07-regular-14 text-green-300 px-[12px] py-[7px]`}
    >
      {date}
    </span>
  );
};

export default DateChip;
