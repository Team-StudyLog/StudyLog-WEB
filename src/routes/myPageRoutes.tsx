import type { RouteType } from "../types/routeType.ts";
import routePath from "./routePath.ts";
import MyPage from "../pages/myPage/MyPage.tsx";
import MyPageEdit from "../pages/myPage/myPageEdit/MyPageEdit.tsx";

const myPageRoutes: RouteType[] = [
  {
    path: routePath.MYPAGE,
    element: <MyPage />,
  },
  {
    path: routePath.MYPAGE_EDIT,
    element: <MyPageEdit />,
  },
];

export default myPageRoutes;
