import TextHeader from "../../components/Header/TextHeader.tsx";
import { mockAlarms } from "../../data/mockAlarms.ts";
import AlarmItem from "./AlarmItem.tsx";

const AlarmPage = () => {
  return (
    <div className={`flex flex-col`}>
      <TextHeader text={"알림"} />
      <div className={`flex flex-col mt-[14px] px-[26px]`}>
        {mockAlarms.map((alarm, index) => (
          <AlarmItem key={index} alarm={alarm} />
        ))}
      </div>
    </div>
  );
};

export default AlarmPage;
