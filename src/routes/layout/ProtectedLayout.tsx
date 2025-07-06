import { Navigate, Outlet } from "react-router-dom";
import { storageKey } from "../../constants/storageKey.ts";

const ProtectedLayout = () => {
  const isLoggedIn = Boolean(localStorage.getItem(storageKey.IS_LOGGED_IN)); // 로그인 여부 확인

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      {/* 보호된 레이아웃 */}
      <Outlet />
    </div>
  );
};

export default ProtectedLayout;
