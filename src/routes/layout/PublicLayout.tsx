import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div>
      {/* 공용 레이아웃 */}
      <Outlet />
    </div>
  );
};

export default PublicLayout;
