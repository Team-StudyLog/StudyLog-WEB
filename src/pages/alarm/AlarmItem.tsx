import type { AlarmT } from "../../data/mockAlarms.ts";
import IcAlarm from "../../assets/ic-alarm.svg";
import { relativeDateFormat } from "../../utils/dateFormat.ts";

interface AlarmItemProps {
  alarm: AlarmT;
}

const AlarmItem = ({ alarm }: AlarmItemProps) => {
  const formattedDate = relativeDateFormat(alarm.date);

  return (
    <div
      className={`flex w-full bg-white rounded-[10px]
  px-[18px] py-[20px] justify-between items-start mb-[14px]`}
    >
      <div className={`flex items-start gap-x-[6px]`}>
        <img src={IcAlarm} alt="Alarm Icon" />
        <div className={`flex flex-col gap-y-[8px]`}>
          <p className={`font-body08-regular-12 text-gray-500`}>
            {alarm.subtitle}
          </p>
          <p className={`font-body02-semibold-14 text-gray-700 max-w-[240px] `}>
            {alarm.title}
          </p>
        </div>
      </div>
      <div className={`relative`}>
        <p className={`text-gray-500 font-body10-regular-10 mr-[8px]`}>
          {formattedDate}
        </p>
        <div
          className={`absolute right-0 top-0 bg-red rounded-full w-[5px] h-[5px]`}
        />
      </div>
    </div>
  );
};

export default AlarmItem;
