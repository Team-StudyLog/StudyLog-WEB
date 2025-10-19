import useEasyNavigate from "../../hooks/useEasyNavigate.ts";
import { Bell, Trophy, User } from "lucide-react";
import { storageKey } from "../../constants/storageKey.ts";
import { useFetchAlarmList } from "../../apis/alarm/useFetchAlarmList.ts";

const Header = () => {
  const { data: alarms } = useFetchAlarmList(false);
  const hasNewAlarm = alarms && alarms.some((alarm) => !alarm.read);

  const { goMainPage, goHomePage, goMyPage, goAlarmPage, goRankPage } =
    useEasyNavigate();
  const isLoggedIn = Boolean(localStorage.getItem(storageKey.IS_LOGGED_IN));
  const userCode = localStorage.getItem(storageKey.USER_CODE);
  const handleLogoClick = () => {
    if (isLoggedIn && userCode) {
      goMainPage(userCode);
    } else {
      goHomePage();
    }
  };

  return (
    <header className={`flex justify-between bg-gray-100 p-5`}>
      <p
        onClick={handleLogoClick}
        className={`text-green-300 font-logo-partial-24`}
      >
        StudyLog
      </p>
      <div className={`flex items-center gap-4`}>
        <Trophy size={24} className={`text-gray-600`} onClick={goRankPage} />
        <div className={`relative`}>
          <Bell size={24} className={`text-gray-600`} onClick={goAlarmPage} />
          {hasNewAlarm && (
            <div
              className={`absolute right-0 top-0 bg-red rounded-full w-[5px] h-[5px]`}
            />
          )}
        </div>
        <User size={24} className={`text-gray-600`} onClick={goMyPage} />
      </div>
    </header>
  );
};

export default Header;
