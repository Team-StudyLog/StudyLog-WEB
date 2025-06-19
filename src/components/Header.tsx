import useEasyNavigate from "../hooks/useEasyNavigate.ts";
import { Bell, User } from "lucide-react";

const Header = () => {
  const { goHomePage, goMyPage, goAlarmPage } = useEasyNavigate();
  return (
    <header className={`flex justify-between bg-gray-100 p-5`}>
      <p onClick={goHomePage} className={`text-green-300 font-logo-partial-24`}>
        StudyLog
      </p>
      <div className={`flex items-center gap-4`}>
        <Bell size={24} className={`text-gray-600`} onClick={goAlarmPage} />
        <User size={24} className={`text-gray-600`} onClick={goMyPage} />
      </div>
    </header>
  );
};

export default Header;
