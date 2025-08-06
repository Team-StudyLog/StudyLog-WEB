import useEasyNavigate from "../../hooks/useEasyNavigate.ts";
import { Bell, User } from "lucide-react";
import { storageKey } from "../../constants/storageKey.ts";

const Header = () => {
  const { goMainPage, goHomePage, goMyPage, goAlarmPage } = useEasyNavigate();
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
        <Bell size={24} className={`text-gray-600`} onClick={goAlarmPage} />
        <User size={24} className={`text-gray-600`} onClick={goMyPage} />
      </div>
    </header>
  );
};

export default Header;
