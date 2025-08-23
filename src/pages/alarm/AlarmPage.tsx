import TextHeader from "../../components/Header/TextHeader.tsx";
import AlarmItem from "./AlarmItem.tsx";
import { useFetchAlarmList } from "../../apis/alarm/useFetchAlarmList.ts";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { queryKey } from "../../constants/queryKey.ts";

const AlarmPage = () => {
  const { data: alarms, isSuccess } = useFetchAlarmList(true);
  const queryClient = useQueryClient();
  useEffect(() => {
    if (isSuccess) {
      void queryClient.invalidateQueries({
        queryKey: [queryKey.ALARMS],
        refetchType: "all",
      });
    }
  }, [isSuccess, queryClient]);

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
