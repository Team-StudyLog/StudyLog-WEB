import MainPage from "../pages/main/MainPage.tsx";
import type { RouteType } from "../types/routeType.ts";
import routePath from "./routePath.ts";
import CodePage from "../pages/main/CodePage.tsx";
import OtherUserPage from "../pages/main/OtherUserPage.tsx";

const mainRoutes: RouteType[] = [
  {
    path: routePath.CODE,
    element: <CodePage />,
  },
  {
    path: routePath.MAIN,
    element: <MainPage />,
  },
  {
    path: routePath.OTHER_USER,
    element: <OtherUserPage />,
  },
];

export default mainRoutes;
