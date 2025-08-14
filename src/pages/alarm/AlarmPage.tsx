import TextHeader from "../../components/Header/TextHeader.tsx";
import AlarmItem from "./AlarmItem.tsx";
import { useFetchAlarmList } from "../../apis/alarm/useFetchAlarmList.ts";

const AlarmPage = () => {
  const { data: alarms } = useFetchAlarmList(true);

  return (
    <div className={`flex flex-col`}>
      <TextHeader text={"알림"} />
      <div className={`flex flex-col mt-[14px] px-[26px]`}>
        {alarms &&
          alarms.map((alarm, index) => <AlarmItem key={index} alarm={alarm} />)}
      </div>
    </div>
  );
};

export default AlarmPage;
